"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";

interface ColorInfo {
  hex: string;
  rgb: string;
  hsl: string;
}

export function ColorPickerTool() {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [color, setColor] = useState<ColorInfo | null>(null);
  const [colorHistory, setColorHistory] = useState<ColorInfo[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleFile = (file: File) => {
    setImageUrl(URL.createObjectURL(file));
    setColor(null);
    setColorHistory([]);
  };

  const rgbToHex = (r: number, g: number, b: number): string => {
    return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
  };

  const rgbToHsl = (r: number, g: number, b: number): string => {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
  };

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = Math.floor((e.clientX - rect.left) * scaleX);
    const y = Math.floor((e.clientY - rect.top) * scaleY);

    const ctx = canvas.getContext("2d")!;
    const pixel = ctx.getImageData(x, y, 1, 1).data;
    const [r, g, b] = [pixel[0], pixel[1], pixel[2]];

    const info: ColorInfo = {
      hex: rgbToHex(r, g, b),
      rgb: `rgb(${r}, ${g}, ${b})`,
      hsl: rgbToHsl(r, g, b),
    };

    setColor(info);
    setColorHistory((prev) => [info, ...prev].slice(0, 20));
  };

  const drawImageOnCanvas = (img: HTMLImageElement) => {
    const canvas = canvasRef.current!;
    const maxW = 600;
    const maxH = 400;
    let w = img.naturalWidth;
    let h = img.naturalHeight;
    if (w > maxW) { h = h * (maxW / w); w = maxW; }
    if (h > maxH) { w = w * (maxH / h); h = maxH; }
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d")!;
    ctx.drawImage(img, 0, 0, w, h);
  };

  const handleImageLoad = () => {
    if (imgRef.current) {
      drawImageOnCanvas(imgRef.current);
    }
  };

  const handleColorInput = (hex: string) => {
    setColor(null);
    // Convert hex to RGB
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const info: ColorInfo = {
      hex,
      rgb: `rgb(${r}, ${g}, ${b})`,
      hsl: rgbToHsl(r, g, b),
    };
    setColor(info);
    setColorHistory((prev) => [info, ...prev].slice(0, 20));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="space-y-4">
      {!imageUrl ? (
        <>
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
            <p className="text-xs text-muted-foreground mt-1">
              Then click any pixel to get its color
            </p>
          </div>

          <div className="border-t pt-4">
            <p className="text-sm text-muted-foreground mb-2">Or pick a color directly:</p>
            <div className="flex items-center gap-3">
              <input
                type="color"
                defaultValue="#3b82f6"
                onChange={(e) => handleColorInput(e.target.value)}
                className="w-10 h-10 rounded cursor-pointer border border-input"
              />
              <span className="text-sm text-muted-foreground">Click the swatch to pick</span>
            </div>
          </div>
        </>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">Click anywhere on the image to pick a color</p>
            <Button variant="outline" size="sm" onClick={() => {
              setImageUrl(""); setColor(null); setColorHistory([]);
            }}>
              New Image
            </Button>
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={imgRef}
            src={imageUrl}
            alt="Source"
            className="hidden"
            onLoad={handleImageLoad}
          />
          <canvas
            ref={canvasRef}
            onClick={handleCanvasClick}
            className="rounded-lg border cursor-crosshair max-w-full"
            style={{ width: "auto", height: "auto" }}
          />

          <p className="text-xs text-muted-foreground">
            Click a pixel on the image above
          </p>
        </>
      )}

      {color && (
        <div className="space-y-3 p-4 rounded-lg bg-muted">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-lg border"
              style={{ backgroundColor: color.hex }}
            />
            <p className="text-sm font-medium">Picked Color</p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "HEX", value: color.hex },
              { label: "RGB", value: color.rgb },
              { label: "HSL", value: color.hsl },
            ].map((item) => (
              <div
                key={item.label}
                className="text-sm bg-background rounded-md p-2 cursor-pointer hover:bg-accent transition-colors"
                onClick={() => copyToClipboard(item.value)}
                title="Click to copy"
              >
                <span className="text-xs text-muted-foreground block">{item.label}</span>
                <span className="font-mono text-xs">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {colorHistory.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-medium">Color History</p>
          <div className="flex flex-wrap gap-2">
            {colorHistory.map((c, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded border cursor-pointer"
                style={{ backgroundColor: c.hex }}
                onClick={() => setColor(c)}
                title={c.hex}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
