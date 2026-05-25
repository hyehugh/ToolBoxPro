"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

export function ImageToSketchTool() {
  const { t } = useLocale();
  const [imageUrl, setImageUrl] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [resultUrl, setResultUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFile = (file: File) => {
    setImageFile(file);
    setImageUrl(URL.createObjectURL(file));
    setResultUrl("");
  };

  const convertToSketch = async () => {
    if (!imageUrl) return;
    setLoading(true);
    setResultUrl("");

    const img = new Image();
    img.src = imageUrl;
    await new Promise((r) => (img.onload = r));

    const canvas = canvasRef.current!;
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d")!;

    // Draw original image
    ctx.drawImage(img, 0, 0);

    // Get image data
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    // Step 1: Convert to grayscale
    const grayData = new Uint8ClampedArray(data.length);
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const gray = 0.299 * r + 0.587 * g + 0.114 * b;
      grayData[i] = gray;
      grayData[i + 1] = gray;
      grayData[i + 2] = gray;
      grayData[i + 3] = data[i + 3]; // alpha
    }

    // Step 2: Invert the grayscale image
    const invertedData = new Uint8ClampedArray(data.length);
    for (let i = 0; i < grayData.length; i += 4) {
      invertedData[i] = 255 - grayData[i];
      invertedData[i + 1] = 255 - grayData[i + 1];
      invertedData[i + 2] = 255 - grayData[i + 2];
      invertedData[i + 3] = grayData[i + 3];
    }

    // Step 3: Apply Gaussian blur to the inverted image
    // Using a simple box blur approximation (3 passes for better quality)
    const blurredData = gaussianBlur(invertedData, canvas.width, canvas.height, 3);

    // Step 4: Color dodge blend (sketch effect)
    // For each pixel: result = min(gray + (gray * blurred) / (255 - blurred), 255)
    // Simplified: color dodge = gray / (1 - blurred/255) but we need to handle edges
    const sketchData = new Uint8ClampedArray(data.length);
    for (let i = 0; i < grayData.length; i += 4) {
      const gray = grayData[i]; // grayscale value (0-255)
      const blur = blurredData[i]; // blurred inverted value (0-255)

      // Color dodge: result = original / (255 - blurred_inverted)
      const divisor = 255 - blur;
      let sketch;
      if (divisor === 0) {
        sketch = 255;
      } else {
        sketch = Math.min(255, (gray * 255) / divisor);
      }

      sketchData[i] = sketch;
      sketchData[i + 1] = sketch;
      sketchData[i + 2] = sketch;
      sketchData[i + 3] = data[i + 3];
    }

    // Put the sketch image data on canvas
    const sketchImageData = new ImageData(sketchData, canvas.width, canvas.height);
    ctx.putImageData(sketchImageData, 0, 0);

    canvas.toBlob((blob) => {
      if (blob) {
        setResultUrl(URL.createObjectURL(blob));
      }
      setLoading(false);
    }, "image/png");
  };

  // Simple Gaussian blur using separable box blur approximation
  function gaussianBlur(
    pixels: Uint8ClampedArray,
    width: number,
    height: number,
    radius: number
  ): Uint8ClampedArray {
    if (radius < 1) return pixels.slice(0);

    const result = new Uint8ClampedArray(pixels.length);
    const temp = new Uint8ClampedArray(pixels.length);

    // Copy original
    for (let i = 0; i < pixels.length; i++) {
      temp[i] = pixels[i];
    }

    const size = radius * 2 + 1;
    const weight = 1 / (size * size);

    // Horizontal pass
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const idx = (y * width + x) * 4;
        let r = 0, g = 0, b = 0;

        for (let kx = -radius; kx <= radius; kx++) {
          const sx = Math.min(Math.max(x + kx, 0), width - 1);
          const sidx = (y * width + sx) * 4;
          r += temp[sidx] * weight;
          g += temp[sidx + 1] * weight;
          b += temp[sidx + 2] * weight;
        }

        result[idx] = Math.round(r);
        result[idx + 1] = Math.round(g);
        result[idx + 2] = Math.round(b);
        result[idx + 3] = temp[idx + 3];
      }
    }

    // Vertical pass
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const idx = (y * width + x) * 4;
        let r = 0, g = 0, b = 0;

        for (let ky = -radius; ky <= radius; ky++) {
          const sy = Math.min(Math.max(y + ky, 0), height - 1);
          const sidx = (sy * width + x) * 4;
          r += result[sidx] * weight;
          g += result[sidx + 1] * weight;
          b += result[sidx + 2] * weight;
        }

        result[idx] = Math.round(r);
        result[idx + 1] = Math.round(g);
        result[idx + 2] = Math.round(b);
      }
    }

    return result;
  }

  return (
    <div className="space-y-4">
      <canvas ref={canvasRef} className="hidden" />
      {!imageUrl ? (
        <div
          className="border-2 border-dashed border-input rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => { e.preventDefault(); handleFile(e.dataTransfer.files[0]); }}
          onClick={() => {
            const input = document.createElement("input");
            input.type = "file";
            input.accept = "image/jpeg,image/png,image/webp,image/gif";
            input.onchange = (e: any) => e.target.files[0] && handleFile(e.target.files[0]);
            input.click();
          }}
        >
          <p className="text-muted-foreground">{t('toolCommon.imageToSketch.uploadPrompt')}</p>
          <p className="text-xs text-muted-foreground mt-1">{t('toolCommon.imageToSketch.supportedFormats')}</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">{t('toolCommon.imageToSketch.description')}</p>
            <Button variant="outline" size="sm" onClick={() => {
              setImageUrl(""); setImageFile(null); setResultUrl("");
            }}>
              {t('toolCommon.imageToSketch.newImage')}
            </Button>
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={resultUrl || imageUrl}
            alt={t('common.preview')}
            className="max-w-full max-h-64 object-contain rounded-lg border"
          />

          {!resultUrl && (
            <Button onClick={convertToSketch} disabled={loading}>
              {loading ? t('common.processing') : t('toolCommon.imageToSketch.convert')}
            </Button>
          )}

          {resultUrl && (
            <div className="space-y-2">
              <p className="text-sm font-medium">{t('toolCommon.imageToSketch.sketchResult')}</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={resultUrl} alt="Sketch" className="rounded-lg border max-w-full max-h-64 object-contain" />
              <Button onClick={() => {
                const a = document.createElement("a");
                a.href = resultUrl;
                a.download = imageFile
                  ? imageFile.name.replace(/\.[^.]+$/, "") + "_sketch.png"
                  : "sketch.png";
                a.click();
              }}>
                {t('common.download')}
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
