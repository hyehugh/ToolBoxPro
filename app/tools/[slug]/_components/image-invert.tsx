"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";

export function ImageInvertTool() {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [resultUrl, setResultUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) return;
    setImageFile(file);
    setImageUrl(URL.createObjectURL(file));
    setResultUrl("");
  };

  const invertImage = () => {
    if (!imgRef.current) return;
    setLoading(true);
    setResultUrl("");

    const img = imgRef.current;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    // Draw the original image
    ctx.drawImage(img, 0, 0);

    // Get pixel data and invert
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      data[i] = 255 - data[i];       // R
      data[i + 1] = 255 - data[i + 1]; // G
      data[i + 2] = 255 - data[i + 2]; // B
      // data[i+3] = alpha, unchanged
    }
    ctx.putImageData(imageData, 0, 0);

    canvas.toBlob((blob) => {
      if (blob) {
        setResultUrl(URL.createObjectURL(blob));
      }
      setLoading(false);
    }, "image/png");
  };

  const reset = () => {
    setImageUrl("");
    setImageFile(null);
    setResultUrl("");
  };

  return (
    <div className="space-y-4">
      <canvas ref={canvasRef} className="hidden" />
      {!imageUrl ? (
        <div
          className="border-2 border-dashed border-input rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            handleFile(e.dataTransfer.files[0]);
          }}
          onClick={() => {
            const input = document.createElement("input");
            input.type = "file";
            input.accept = "image/jpeg,image/png,image/webp,image/gif";
            input.onchange = (e: any) =>
              e.target.files[0] && handleFile(e.target.files[0]);
            input.click();
          }}
        >
          <p className="text-muted-foreground">
            Drop an image here or click to upload
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Supports JPG, PNG, WebP, GIF
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Click Invert to invert the colors of your image
            </p>
            <Button variant="outline" size="sm" onClick={reset}>
              New Image
            </Button>
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={imgRef}
            src={imageUrl}
            alt="Original"
            className="max-w-full max-h-64 object-contain rounded-lg border"
          />

          {!resultUrl && (
            <Button onClick={invertImage} disabled={loading} className="w-full">
              {loading ? "Inverting..." : "Invert Colors"}
            </Button>
          )}

          {resultUrl && (
            <div className="space-y-2">
              <p className="text-sm font-medium text-green-600">Inverted Successfully!</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={resultUrl}
                alt="Inverted"
                className="max-w-full max-h-64 object-contain rounded-lg border"
              />
              <Button
                onClick={() => {
                  const a = document.createElement("a");
                  a.href = resultUrl;
                  a.download = imageFile
                    ? imageFile.name.replace(/\.[^.]+$/, "") + "_inverted.png"
                    : "inverted.png";
                  a.click();
                }}
                className="w-full"
              >
                Download Inverted Image
              </Button>
              <Button
                variant="outline"
                onClick={() => setResultUrl("")}
                className="w-full"
              >
                Re-invert
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
