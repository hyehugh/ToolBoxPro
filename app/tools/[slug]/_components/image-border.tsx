"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";

type BorderStyle = "solid" | "dashed" | "dotted";

export function ImageBorderTool() {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [borderWidth, setBorderWidth] = useState(10);
  const [borderColor, setBorderColor] = useState("#000000");
  const [borderStyle, setBorderStyle] = useState<BorderStyle>("solid");
  const [resultUrl, setResultUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFile = (file: File) => {
    setImageFile(file);
    setImageUrl(URL.createObjectURL(file));
    setResultUrl("");
  };

  const applyBorder = async () => {
    if (!imageUrl) return;
    setLoading(true);
    setResultUrl("");

    const img = new Image();
    img.src = imageUrl;
    await new Promise((r) => (img.onload = r));

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const bw = borderWidth;

    canvas.width = img.width + bw * 2;
    canvas.height = img.height + bw * 2;

    // Fill background with border color
    ctx.fillStyle = borderColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw image on top
    ctx.drawImage(img, bw, bw, img.width, img.height);

    // Draw border frame on top edges
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = bw;

    if (borderStyle === "dashed") {
      ctx.setLineDash([bw * 2, bw * 1.5]);
    } else if (borderStyle === "dotted") {
      ctx.setLineDash([bw * 0.5, bw * 0.5]);
    } else {
      ctx.setLineDash([]);
    }

    // Inner border line
    ctx.strokeRect(bw / 2, bw / 2, img.width + bw, img.height + bw);

    // Outer border line
    ctx.strokeRect(bw / 2, bw / 2, img.width + bw, img.height + bw);

    // Reset
    ctx.setLineDash([]);

    canvas.toBlob((blob) => {
      if (blob) {
        setResultUrl(URL.createObjectURL(blob));
      }
      setLoading(false);
    }, "image/png");
  };

  const STYLES: { key: BorderStyle; label: string }[] = [
    { key: "solid", label: "Solid" },
    { key: "dashed", label: "Dashed" },
    { key: "dotted", label: "Dotted" },
  ];

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
            <p className="text-sm text-muted-foreground">Add a border to your image</p>
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
            style={resultUrl ? {} : {
              boxShadow: `0 0 0 ${borderWidth}px ${borderColor}`,
            }}
          />

          <div>
            <label className="text-sm font-medium block mb-1">Border Width: {borderWidth}px</label>
            <input
              type="range"
              min={1}
              max={50}
              value={borderWidth}
              onChange={(e) => setBorderWidth(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="text-sm font-medium block mb-1">Border Color</label>
            <input
              type="color"
              value={borderColor}
              onChange={(e) => setBorderColor(e.target.value)}
              className="w-12 h-10 p-0.5 border border-input rounded cursor-pointer"
            />
          </div>

          <div>
            <label className="text-sm font-medium block mb-1">Border Style</label>
            <div className="flex gap-2">
              {STYLES.map((s) => (
                <Button
                  key={s.key}
                  variant={borderStyle === s.key ? "default" : "outline"}
                  size="sm"
                  onClick={() => setBorderStyle(s.key)}
                >
                  {s.label}
                </Button>
              ))}
            </div>
          </div>

          <Button onClick={applyBorder} disabled={loading}>
            {loading ? "Applying..." : "Apply Border"}
          </Button>

          {resultUrl && (
            <div className="space-y-2">
              <p className="text-sm font-medium">Result</p>
              <Button onClick={() => {
                const a = document.createElement("a");
                a.href = resultUrl;
                a.download = imageFile
                  ? imageFile.name.replace(/\.[^.]+$/, "") + "_bordered.png"
                  : "bordered.png";
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
