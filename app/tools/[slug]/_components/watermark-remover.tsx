'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/lib/i18n/context';

interface SelectionRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

/**
 * Content-aware fill via Telea-style fast marching inpainting.
 * Samples neighbouring (non-target) pixels and blends them into the
 * masked region, iterating from the boundary inward.
 *
 * Runs entirely client-side on a <canvas>; no upload, no server.
 */
function inpaintRegion(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  rect: SelectionRect,
  iterations: number = 4
) {
  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;

  const minX = Math.max(0, Math.floor(rect.x));
  const minY = Math.max(0, Math.floor(rect.y));
  const maxX = Math.min(width, Math.ceil(rect.x + rect.width));
  const maxY = Math.min(height, Math.ceil(rect.y + rect.height));

  // mask[x + y * width] === true  → pixel needs filling
  const mask = new Uint8Array(width * height);
  for (let y = minY; y < maxY; y++) {
    for (let x = minX; x < maxX; x++) {
      mask[x + y * width] = 1;
    }
  }

  const sampleRadius = 6;

  for (let iter = 0; iter < iterations; iter++) {
    // collect border pixels of the current mask for this pass
    const borderPixels: [number, number][] = [];
    for (let y = minY; y < maxY; y++) {
      for (let x = minX; x < maxX; x++) {
        const idx = x + y * width;
        if (!mask[idx]) continue;
        // is it a border pixel (adjacent to a filled pixel)?
        let isBorder = false;
        if (x > 0 && !mask[idx - 1]) isBorder = true;
        else if (x < width - 1 && !mask[idx + 1]) isBorder = true;
        else if (y > 0 && !mask[idx - width]) isBorder = true;
        else if (y < height - 1 && !mask[idx + width]) isBorder = true;
        if (isBorder) borderPixels.push([x, y]);
      }
    }

    if (borderPixels.length === 0) break;

    const updated: Uint8Array = new Uint8Array(data); // work on a copy this pass

    for (const [px, py] of borderPixels) {
      let totalR = 0;
      let totalG = 0;
      let totalB = 0;
      let totalWeight = 0;

      for (let dy = -sampleRadius; dy <= sampleRadius; dy++) {
        for (let dx = -sampleRadius; dx <= sampleRadius; dx++) {
          const nx = px + dx;
          const ny = py + dy;
          if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
          const nIdx = nx + ny * width;
          if (mask[nIdx]) continue; // skip still-unfilled pixels
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist === 0 || dist > sampleRadius) continue;
          const weight = 1 / dist;
          const pIdx = nIdx * 4;
          totalR += data[pIdx] * weight;
          totalG += data[pIdx + 1] * weight;
          totalB += data[pIdx + 2] * weight;
          totalWeight += weight;
        }
      }

      if (totalWeight > 0) {
        const pIdx = (px + py * width) * 4;
        updated[pIdx] = Math.round(totalR / totalWeight);
        updated[pIdx + 1] = Math.round(totalG / totalWeight);
        updated[pIdx + 2] = Math.round(totalB / totalWeight);
        updated[pIdx + 3] = 255;
      }
    }

    // commit this pass to the main data buffer, and clear those border pixels from the mask
    data.set(updated);
    for (const [px, py] of borderPixels) {
      mask[px + py * width] = 0;
    }
  }

  ctx.putImageData(imageData, 0, 0);
}

function applyBlur(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  rect: SelectionRect
) {
  // light box blur confined to the selection to soften seams
  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;
  const copy = new Uint8ClampedArray(data);

  const minX = Math.max(0, Math.floor(rect.x));
  const minY = Math.max(0, Math.floor(rect.y));
  const maxX = Math.min(width, Math.ceil(rect.x + rect.width));
  const maxY = Math.min(height, Math.ceil(rect.y + rect.height));

  for (let y = minY; y < maxY; y++) {
    for (let x = minX; x < maxX; x++) {
      let r = 0, g = 0, b = 0, count = 0;
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          const nx = x + dx;
          const ny = y + dy;
          if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
          const i = (nx + ny * width) * 4;
          r += copy[i];
          g += copy[i + 1];
          b += copy[i + 2];
          count++;
        }
      }
      const i = (x + y * width) * 4;
      data[i] = r / count;
      data[i + 1] = g / count;
      data[i + 2] = b / count;
    }
  }
  ctx.putImageData(imageData, 0, 0);
}

export function WatermarkRemoverTool() {
  const { t, locale } = useLocale();

  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selection, setSelection] = useState<SelectionRect | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawStart, setDrawStart] = useState<{ x: number; y: number } | null>(null);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [processStep, setProcessStep] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // canvas size tracked for overlay rendering (set in handleFile)
  const [, setCanvasSize] = useState({ width: 0, height: 0 });

  const i18n = {
    upload: locale === 'zh' ? '上传图片' : 'Upload Image',
    dropHere: locale === 'zh' ? '拖拽图片到此处或点击上传' : 'Drop an image here or click to upload',
    supports: locale === 'zh' ? '支持 JPG、PNG、WebP' : 'Supports JPG, PNG, WebP',
    processing: locale === 'zh' ? '处理中...' : 'Processing...',
    instructions: locale === 'zh'
      ? '在图片上拖动鼠标框选要去除的水印或标志区域'
      : 'Drag on the image to select the watermark or logo area to remove',
    removeBtn: locale === 'zh' ? '去除选区' : 'Remove Selection',
    clearBtn: locale === 'zh' ? '清除选区' : 'Clear Selection',
    resetBtn: locale === 'zh' ? '重置图片' : 'Reset Image',
    download: locale === 'zh' ? '下载结果' : 'Download Result',
    newImage: locale === 'zh' ? '处理新图片' : 'Process New Image',
    noSelection: locale === 'zh' ? '请先在图片上框选要去除的区域' : 'Please select an area on the image first',
    result: locale === 'zh' ? '处理结果' : 'Result',
    original: locale === 'zh' ? '原始图片' : 'Original Image',
    step_fill: locale === 'zh' ? '正在填充选区...' : 'Filling selection...',
    step_smooth: locale === 'zh' ? '正在平滑边缘...' : 'Smoothing edges...',
    privacy: locale === 'zh'
      ? '所有处理在本地完成，图片不会上传到服务器'
      : 'All processing happens locally — your image never leaves your browser',
  };

  const processFile = useCallback(async (file: File) => {
    if (!file.type.startsWith('image/')) {
      setError(locale === 'zh' ? '请上传图片文件' : 'Please upload an image file');
      return;
    }
    setError('');
    setLoading(true);
    setResultUrl(null);
    setSelection(null);

    try {
      const dataUrl = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = () => reject(new Error(locale === 'zh' ? '读取文件失败' : 'Failed to read file'));
        reader.readAsDataURL(file);
      });

      const img = new Image();
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error(locale === 'zh' ? '图片加载失败' : 'Failed to load image'));
        img.src = dataUrl;
      });

      // cap size for performance
      const maxDim = 1000;
      let w = img.naturalWidth;
      let h = img.naturalHeight;
      if (w > maxDim || h > maxDim) {
        const ratio = Math.min(maxDim / w, maxDim / h);
        w = Math.round(w * ratio);
        h = Math.round(h * ratio);
      }

      setImage(img);
      setImageUrl(dataUrl);
      setCanvasSize({ width: w, height: h });

      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        if (ctx) ctx.drawImage(img, 0, 0, w, h);
      }
      const overlay = overlayRef.current;
      if (overlay) {
        overlay.width = w;
        overlay.height = h;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : (locale === 'zh' ? '处理图片失败' : 'Failed to process image'));
    } finally {
      setLoading(false);
    }
  }, [locale]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) processFile(file);
  };

  // --- selection drawing ---
  const getCanvasPos = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const overlay = overlayRef.current;
    if (!overlay) return { x: 0, y: 0 };
    const rect = overlay.getBoundingClientRect();
    const scaleX = overlay.width / rect.width;
    const scaleY = overlay.height / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const pos = getCanvasPos(e);
    setIsDrawing(true);
    setDrawStart(pos);
    setSelection({ x: pos.x, y: pos.y, width: 0, height: 0 });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !drawStart) return;
    const pos = getCanvasPos(e);
    const x = Math.min(drawStart.x, pos.x);
    const y = Math.min(drawStart.y, pos.y);
    const width = Math.abs(pos.x - drawStart.x);
    const height = Math.abs(pos.y - drawStart.y);
    setSelection({ x, y, width, height });
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  // draw the selection rectangle on the overlay
  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;
    const ctx = overlay.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, overlay.width, overlay.height);
    if (selection && selection.width > 2 && selection.height > 2) {
      ctx.fillStyle = 'rgba(0, 120, 255, 0.25)';
      ctx.fillRect(selection.x, selection.y, selection.width, selection.height);
      ctx.strokeStyle = 'rgba(0, 120, 255, 0.9)';
      ctx.lineWidth = 2;
      ctx.strokeRect(selection.x, selection.y, selection.width, selection.height);
    }
  }, [selection]);

  const handleRemove = () => {
    if (!selection || selection.width < 3 || selection.height < 3) {
      setError(i18n.noSelection);
      return;
    }
    const canvas = canvasRef.current;
    if (!canvas || !image) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setError('');
    setLoading(true);
    setProcessStep(i18n.step_fill);

    // run async so the UI can update
    setTimeout(() => {
      try {
        inpaintRegion(ctx, canvas.width, canvas.height, selection, 6);
        setProcessStep(i18n.step_smooth);
        setTimeout(() => {
          try {
            applyBlur(ctx, canvas.width, canvas.height, selection);
            const url = canvas.toDataURL('image/png');
            setResultUrl(url);
            setSelection(null);
          } catch {
            setError(locale === 'zh' ? '处理失败，请重试' : 'Processing failed, please try again');
          } finally {
            setLoading(false);
            setProcessStep('');
          }
        }, 30);
      } catch {
        setError(locale === 'zh' ? '处理失败，请重试' : 'Processing failed, please try again');
        setLoading(false);
        setProcessStep('');
      }
    }, 30);
  };

  const handleClearSelection = () => {
    setSelection(null);
  };

  const handleReset = () => {
    if (!image || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    }
    setResultUrl(null);
    setSelection(null);
  };

  const handleNewImage = () => {
    setImage(null);
    setImageUrl(null);
    setResultUrl(null);
    setSelection(null);
    setError('');
  };

  const handleDownload = () => {
    const url = resultUrl || (canvasRef.current?.toDataURL('image/png') ?? null);
    if (!url) return;
    const a = document.createElement('a');
    a.href = url;
    a.download = 'watermark-removed.png';
    a.click();
  };

  return (
    <div className="space-y-4">
      {/* Upload area */}
      {!imageUrl && (
        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />
          {loading ? (
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              <span className="text-sm text-muted-foreground">{t('common.loading')}</span>
            </div>
          ) : (
            <div>
              <svg
                className="mx-auto h-12 w-12 text-muted-foreground mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <p className="text-sm text-muted-foreground">{i18n.dropHere}</p>
              <p className="text-xs text-muted-foreground mt-1">{i18n.supports}</p>
            </div>
          )}
        </div>
      )}

      {error && (
        <div className="p-3 rounded-md border border-red-300 bg-red-50 dark:bg-red-950/30 text-sm text-red-600 dark:text-red-400">
          {error}
        </div>
      )}

      {/* Editor */}
      {imageUrl && (
        <div className="space-y-4">
          {/* Instructions */}
          <div className="flex items-start gap-2 p-3 rounded-md border bg-muted/30">
            <svg className="h-5 w-5 mt-0.5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm text-muted-foreground">{i18n.instructions}</p>
          </div>

          {/* Canvas + overlay */}
          <div ref={containerRef} className="relative inline-block mx-auto border rounded-lg overflow-hidden bg-white">
            <canvas
              ref={canvasRef}
              className="block max-w-full"
              style={{ maxHeight: 500 }}
            />
            <canvas
              ref={overlayRef}
              className="absolute inset-0 cursor-crosshair"
              style={{ maxHeight: 500 }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            />
          </div>

          {/* Controls */}
          <div className="flex flex-wrap gap-2">
            <Button onClick={handleRemove} disabled={loading || !selection || selection.width < 3}>
              {processStep || i18n.removeBtn}
            </Button>
            <Button variant="outline" onClick={handleClearSelection} disabled={loading || !selection}>
              {i18n.clearBtn}
            </Button>
            <Button variant="outline" onClick={handleReset} disabled={loading}>
              {i18n.resetBtn}
            </Button>
            <Button variant="outline" onClick={handleNewImage} disabled={loading}>
              {i18n.newImage}
            </Button>
          </div>

          {/* Download result */}
          {resultUrl && (
            <div className="space-y-2">
              <h3 className="text-sm font-medium">{i18n.result}</h3>
              <div className="flex justify-center p-2 rounded-lg border bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={resultUrl} alt="Result" className="max-w-full" style={{ maxHeight: 400 }} />
              </div>
              <Button onClick={handleDownload}>{i18n.download}</Button>
            </div>
          )}

          {/* Privacy note */}
          <p className="text-xs text-center text-muted-foreground pt-2 border-t">
            🔒 {i18n.privacy}
          </p>
        </div>
      )}
    </div>
  );
}
