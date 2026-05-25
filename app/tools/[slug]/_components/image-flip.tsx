"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

export function ImageFlipTool() {
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

  const flipHorizontal = async () => {
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
    ctx.translate(img.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(img, 0, 0);
    canvas.toBlob((blob) => {
      if (blob) setResultUrl(URL.createObjectURL(blob));
      setLoading(false);
    }, "image/png");
  };

  const flipVertical = async () => {
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
    ctx.translate(0, img.height);
    ctx.scale(1, -1);
    ctx.drawImage(img, 0, 0);
    canvas.toBlob((blob) => {
      if (blob) setResultUrl(URL.createObjectURL(blob));
      setLoading(false);
    }, "image/png");
  };

  const rotateCW = async () => {
    if (!imageUrl) return;
    setLoading(true);
    setResultUrl("");
    const img = new Image();
    img.src = imageUrl;
    await new Promise((r) => (img.onload = r));
    const canvas = canvasRef.current!;
    canvas.width = img.height;
    canvas.height = img.width;
    const ctx = canvas.getContext("2d")!;
    ctx.translate(img.height, 0);
    ctx.rotate(Math.PI / 2);
    ctx.drawImage(img, 0, 0);
    canvas.toBlob((blob) => {
      if (blob) setResultUrl(URL.createObjectURL(blob));
      setLoading(false);
    }, "image/png");
  };

  const rotateCCW = async () => {
    if (!imageUrl) return;
    setLoading(true);
    setResultUrl("");
    const img = new Image();
    img.src = imageUrl;
    await new Promise((r) => (img.onload = r));
    const canvas = canvasRef.current!;
    canvas.width = img.height;
    canvas.height = img.width;
    const ctx = canvas.getContext("2d")!;
    ctx.translate(0, img.width);
    ctx.rotate(-Math.PI / 2);
    ctx.drawImage(img, 0, 0);
    canvas.toBlob((blob) => {
      if (blob) setResultUrl(URL.createObjectURL(blob));
      setLoading(false);
    }, "image/png");
  };

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
          <p className="text-muted-foreground">Drop an image here or click to upload</p>
          <p className="text-xs text-muted-foreground mt-1">Supports JPG, PNG, WebP, GIF</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">Flip or rotate your image</p>
            <Button variant="outline" size="sm" onClick={() => {
              setImageUrl(""); setImageFile(null); setResultUrl("");
            }}>
              New Image
            </Button>
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={resultUrl || imageUrl}
            alt="Preview"
            className="max-w-full max-h-64 object-contain rounded-lg border"
          />

          <div className="flex flex-wrap gap-2">
            <Button onClick={flipHorizontal} disabled={loading}>
              Flip Horizontal
            </Button>
            <Button onClick={flipVertical} disabled={loading}>
              Flip Vertical
            </Button>
            <Button onClick={rotateCW} disabled={loading}>
              Rotate 90° CW
            </Button>
            <Button onClick={rotateCCW} disabled={loading}>
              Rotate 90° CCW
            </Button>
          </div>

          {resultUrl && (
            <div className="space-y-2">
              <Button onClick={() => {
                const a = document.createElement("a");
                a.href = resultUrl;
                a.download = imageFile
                  ? imageFile.name.replace(/\.[^.]+$/, "") + "_transformed.png"
                  : "transformed.png";
                a.click();
              }}>
                Download
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
