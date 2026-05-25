"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

export function ImageCompressorTool() {
  const { t } = useLocale();
  const [originalSize, setOriginalSize] = useState(0);
  const [compressedSize, setCompressedSize] = useState(0);
  const [resultUrl, setResultUrl] = useState("");
  const [quality, setQuality] = useState(80);
  const [previewUrl, setPreviewUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFile = (file: File) => {
    setOriginalSize(file.size);
    setPreviewUrl(URL.createObjectURL(file));
    setCompressedSize(0);
    setResultUrl("");
    compress(file);
  };

  const compress = async (file: File) => {
    setLoading(true);
    const img = new Image();
    img.src = URL.createObjectURL(file);
    await new Promise((r) => (img.onload = r));

    const canvas = canvasRef.current!;
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d")!;
    ctx.drawImage(img, 0, 0);

    const mime = file.type === "image/png" ? "image/png" :
                 file.type === "image/webp" ? "image/webp" :
                 file.type === "image/avif" ? "image/avif" : "image/jpeg";

    canvas.toBlob((blob) => {
      if (blob) {
        setResultUrl(URL.createObjectURL(blob));
        setCompressedSize(blob.size);
      }
      setLoading(false);
    }, mime, quality / 100);
  };

  return (
    <div className="space-y-4">
      <canvas ref={canvasRef} className="hidden" />
      <div
        className="border-2 border-dashed border-input rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => { e.preventDefault(); handleFile(e.dataTransfer.files[0]); }}
        onClick={() => {
          const input = document.createElement("input");
          input.type = "file";
          input.accept = "image/jpeg,image/png,image/webp,image/avif,image/gif";
          input.onchange = (e: any) => e.target.files[0] && handleFile(e.target.files[0]);
          input.click();
        }}
      >
        <p className="text-muted-foreground">Drop an image here or click to upload</p>
        <p className="text-xs text-muted-foreground mt-1">Supports JPG, PNG, WebP, AVIF, GIF</p>
      </div>

      {previewUrl && (
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <label className="text-sm">Quality: {quality}%</label>
            <input
              type="range" min="1" max="100" value={quality}
              onChange={(e) => setQuality(+e.target.value)}
              className="flex-1"
            />
            <Button
              size="sm"
              onClick={() => {
                const input = document.createElement("input");
                input.type = "file";
                input.accept = "image/*";
                input.onchange = (e: any) => e.target.files[0] && handleFile(e.target.files[0]);
                input.click();
              }}
            >
              New Image
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Original</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={previewUrl} alt="Original" className="rounded-lg border max-w-full max-h-48 object-contain" />
              <p className="text-xs text-muted-foreground mt-1">
                {(originalSize / 1024).toFixed(1)} KB
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">
                {loading ? "Compressing..." : "Compressed"}
              </p>
              {resultUrl && (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={resultUrl} alt="Compressed" className="rounded-lg border max-w-full max-h-48 object-contain" />
                  <p className="text-xs text-muted-foreground mt-1">
                    {(compressedSize / 1024).toFixed(1)} KB
                    ({Math.round((1 - compressedSize / originalSize) * 100)}% smaller)
                  </p>
                </>
              )}
            </div>
          </div>

          {resultUrl && (
            <Button
              onClick={() => {
                const a = document.createElement("a");
                a.href = resultUrl; a.download = "compressed.jpg"; a.click();
              }}
            >
              Download
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
