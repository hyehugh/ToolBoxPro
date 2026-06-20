"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

export function GifMakerTool() {
  const { t } = useLocale();
  const [frames, setFrames] = useState<{ url: string; file: File; }[]>([]);
  const [delay, setDelay] = useState(500);
  const [resultUrl, setResultUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const offscreenRef = useRef<HTMLCanvasElement>(null);
  const previewTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [previewIndex, setPreviewIndex] = useState(0);
  const [previewRunning, setPreviewRunning] = useState(false);

  const addFiles = (fileList: FileList) => {
    const newFrames = Array.from(fileList).map((file) => ({
      url: URL.createObjectURL(file),
      file,
    }));
    setFrames((prev) => [...prev, ...newFrames]);
    setResultUrl("");
  };

  const removeFrame = (index: number) => {
    setFrames((prev) => {
      const updated = prev.filter((_, i) => i !== index);
      return updated;
    });
    setResultUrl("");
  };

  const moveFrame = (from: number, to: number) => {
    if (to < 0 || to >= frames.length) return;
    setFrames((prev) => {
      const updated = [...prev];
      const [moved] = updated.splice(from, 1);
      updated.splice(to, 0, moved);
      return updated;
    });
    setResultUrl("");
  };

  const startPreview = () => {
    if (frames.length < 2) return;
    setPreviewRunning(true);
    setPreviewIndex(0);
    if (previewTimerRef.current) clearInterval(previewTimerRef.current);
    previewTimerRef.current = setInterval(() => {
      setPreviewIndex((prev) => (prev + 1) % frames.length);
    }, delay);
  };

  const stopPreview = () => {
    setPreviewRunning(false);
    if (previewTimerRef.current) {
      clearInterval(previewTimerRef.current);
      previewTimerRef.current = null;
    }
  };

  const generateGif = async () => {
    if (frames.length < 2) return;
    setLoading(true);
    setResultUrl("");

    // Load all images to get dimensions
    const loadedImages = await Promise.all(
      frames.map((f) => {
        return new Promise<HTMLImageElement>((r) => {
          const img = new Image();
          img.src = f.url;
          img.onload = () => r(img);
        });
      })
    );

    const maxW = Math.max(...loadedImages.map((img) => img.width));
    const maxH = Math.max(...loadedImages.map((img) => img.height));

    const offscreen = offscreenRef.current!;
    const ctx = offscreen.getContext("2d")!;

    // Use canvas.captureStream or encode as APNG-style frames
    // For a simple approach, we'll use gif.js if available in CDN, or encode via frame blobs
    // Simpler: build an animated canvas export using multiple encoded frames

    // We'll use a workaround: encode frames as a base64 data URI GIF using a simple encoder
    // Since we can't use gif.js CDN directly, we'll create individual frame PNGs and
    // offer them as a download approach, OR use the built-in GIF encoder approach

    // Load gif.js from CDN dynamically
    const GifModule: any = await new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/gif.js@0.2.0/dist/gif.js";
      script.onload = () => resolve((window as any).GIF);
      script.onerror = reject;
      document.head.appendChild(script);
    });

    if (!GifModule) {
      setLoading(false);
      return;
    }

    const gif = new GifModule({
      workers: 2,
      quality: 10,
      width: maxW,
      height: maxH,
      workerURL: "https://cdn.jsdelivr.net/npm/gif.js@0.2.0/dist/gif.worker.js",
    });

    for (const img of loadedImages) {
      offscreen.width = maxW;
      offscreen.height = maxH;
      ctx.clearRect(0, 0, maxW, maxH);
      ctx.drawImage(img, 0, 0);
      gif.addFrame(ctx, { copy: true, delay });
    }

    gif.on("progress", () => {
      // could show progress
    });

    gif.on("finished", (blob: Blob) => {
      setResultUrl(URL.createObjectURL(blob));
      setLoading(false);
    });

    gif.render();
  };

  return (
    <div className="space-y-4">
      <canvas ref={offscreenRef} className="hidden" />

      {frames.length === 0 && (
        <div
          className="border-2 border-dashed border-input rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => { e.preventDefault(); addFiles(e.dataTransfer.files); }}
          onClick={() => {
            const input = document.createElement("input");
            input.type = "file";
            input.accept = "image/jpeg,image/png,image/webp,image/gif";
            input.multiple = true;
            input.onchange = (e: any) => e.target.files && addFiles(e.target.files);
            input.click();
          }}
        >
          <p className="text-muted-foreground">{t('common.upload')}</p>
          <p className="text-xs text-muted-foreground mt-1">
            {t('toolCommon.gifMaker.minImages')}
          </p>
        </div>
      )}

      {frames.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {frames.length} frame{frames.length !== 1 ? "s" : ""}
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => {
                const input = document.createElement("input");
                input.type = "file";
                input.accept = "image/*";
                input.multiple = true;
                input.onchange = (e: any) => e.target.files && addFiles(e.target.files);
                input.click();
              }}>
                {t('toolCommon.gifMaker.addImages')}
              </Button>
              <Button variant="outline" size="sm" onClick={() => {
                setFrames([]); setResultUrl(""); stopPreview();
              }}>
                {t('common.clear')}
              </Button>
            </div>
          </div>

          {/* Frame thumbnails */}
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
            {frames.map((frame, i) => (
              <div key={i} className="relative group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={frame.url}
                  alt={`Frame ${i + 1}`}
                  className="w-full aspect-square object-cover rounded-lg border"
                />
                <span className="absolute top-1 left-1 bg-background/80 text-xs px-1 rounded">
                  {i + 1}
                </span>
                <div className="absolute inset-0 flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    className="bg-background/80 rounded p-1 text-xs"
                    onClick={(e) => { e.stopPropagation(); moveFrame(i, i - 1); }}
                    disabled={i === 0}
                  >
                    &larr;
                  </button>
                  <button
                    className="bg-background/80 rounded p-1 text-xs"
                    onClick={(e) => { e.stopPropagation(); moveFrame(i, i + 1); }}
                    disabled={i === frames.length - 1}
                  >
                    &rarr;
                  </button>
                  <button
                    className="bg-destructive/80 text-destructive-foreground rounded p-1 text-xs"
                    onClick={(e) => { e.stopPropagation(); removeFrame(i); }}
                  >
                    &times;
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Preview */}
          {frames.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm font-medium">{t('common.preview')}</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={frames[previewIndex]?.url}
                alt="Preview"
                className="max-w-full max-h-48 object-contain rounded-lg border"
              />
            </div>
          )}

          {/* Delay control */}
          <div className="flex items-center gap-3">
            <label className="text-sm">{t('toolCommon.gifMaker.delay')}:</label>
            <input
              type="range" min="50" max="2000" step="50"
              value={delay}
              onChange={(e) => setDelay(+e.target.value)}
              className="flex-1"
            />
            <span className="text-sm font-mono w-16 text-right">{delay} ms</span>
          </div>

          <div className="flex gap-2">
            {previewRunning ? (
              <Button variant="outline" onClick={stopPreview}>
                {t('toolCommon.gifMaker.stopPreview')}
              </Button>
            ) : (
              <Button variant="outline" onClick={startPreview} disabled={frames.length < 2}>
                {t('toolCommon.gifMaker.previewAnimation')}
              </Button>
            )}
            <Button onClick={generateGif} disabled={loading || frames.length < 2}>
              {loading ? t('common.processing') : t('toolCommon.gifMaker.create')}
            </Button>
          </div>

          {resultUrl && (
            <div className="space-y-2">
              <p className="text-sm font-medium">{t('toolCommon.gifMaker.generatedGif')}</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={resultUrl} alt="GIF Result" className="rounded-lg border max-w-full max-h-64 object-contain" />
              <Button onClick={() => {
                const a = document.createElement("a");
                a.href = resultUrl;
                a.download = "animated.gif";
                a.click();
              }}>
                Download GIF
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
