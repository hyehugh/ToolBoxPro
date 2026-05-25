"use client";

import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

type Layout = "2-grid" | "3-grid" | "4-grid";

const LAYOUTS: { key: Layout; label: string; cols: number; rows: number }[] = [
  { key: "2-grid", label: "2 Grid (1×2)", cols: 2, rows: 1 },
  { key: "3-grid", label: "3 Grid (1×3)", cols: 3, rows: 1 },
  { key: "4-grid", label: "4 Grid (2×2)", cols: 2, rows: 2 },
];

const MAX_IMAGES = 4;

export function ImageCollageTool() {
  const { t } = useLocale();
  const [images, setImages] = useState<(string | null)[]>(
    Array(MAX_IMAGES).fill(null)
  );
  const [files, setFiles] = useState<(File | null)[]>(
    Array(MAX_IMAGES).fill(null)
  );
  const [layout, setLayout] = useState<Layout>("2-grid");
  const [resultUrl, setResultUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);

  const handleFile = (index: number, file: File) => {
    if (!file.type.startsWith("image/")) return;
    const newImages = [...images];
    const newFiles = [...files];
    // Revoke old URL
    if (newImages[index]) URL.revokeObjectURL(newImages[index]!);
    newImages[index] = URL.createObjectURL(file);
    newFiles[index] = file;
    setImages(newImages);
    setFiles(newFiles);
    setResultUrl("");
  };

  const removeImage = (index: number) => {
    const newImages = [...images];
    const newFiles = [...files];
    if (newImages[index]) URL.revokeObjectURL(newImages[index]!);
    newImages[index] = null;
    newFiles[index] = null;
    setImages(newImages);
    setFiles(newFiles);
    setResultUrl("");
  };

  const selectedLayout = LAYOUTS.find((l) => l.key === layout)!;
  const requiredImages = layout === "2-grid" ? 2 : layout === "3-grid" ? 3 : 4;
  const canGenerate = images.filter(Boolean).length >= requiredImages;

  const generateCollage = useCallback(() => {
    const loaded = images.filter(Boolean);
    if (loaded.length < requiredImages) return;
    setLoading(true);
    setResultUrl("");

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const cellW = 400;
    const cellH = 300;
    const gap = 4;

    const cw = selectedLayout.cols * cellW + (selectedLayout.cols - 1) * gap;
    const ch = selectedLayout.rows * cellH + (selectedLayout.rows - 1) * gap;
    canvas.width = cw;
    canvas.height = ch;

    // White background
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, cw, ch);

    const imgs = imgRefs.current.filter(Boolean) as HTMLImageElement[];

    loaded.forEach((url, idx) => {
      const imgEl = imgs[idx];
      if (!imgEl) return;
      const col = idx % selectedLayout.cols;
      const row = Math.floor(idx / selectedLayout.cols);
      const x = col * (cellW + gap);
      const y = row * (cellH + gap);

      // Cover/crop to fit cell
      const imgRatio = imgEl.naturalWidth / imgEl.naturalHeight;
      const cellRatio = cellW / cellH;
      let sx: number, sy: number, sw: number, sh: number;

      if (imgRatio > cellRatio) {
        sh = imgEl.naturalHeight;
        sw = sh * cellRatio;
        sx = (imgEl.naturalWidth - sw) / 2;
        sy = 0;
      } else {
        sw = imgEl.naturalWidth;
        sh = sw / cellRatio;
        sx = 0;
        sy = (imgEl.naturalHeight - sh) / 2;
      }

      ctx.drawImage(imgEl, sx, sy, sw, sh, x, y, cellW, cellH);

      // Border
      ctx.strokeStyle = "#e5e7eb";
      ctx.lineWidth = 1;
      ctx.strokeRect(x, y, cellW, cellH);
    });

    canvas.toBlob((blob) => {
      if (blob) {
        setResultUrl(URL.createObjectURL(blob));
      }
      setLoading(false);
    }, "image/png");
  }, [images, layout, requiredImages, selectedLayout]);

  const resetAll = () => {
    images.forEach((url) => url && URL.revokeObjectURL(url));
    setImages(Array(MAX_IMAGES).fill(null));
    setFiles(Array(MAX_IMAGES).fill(null));
    setResultUrl("");
  };

  return (
    <div className="space-y-4">
      <canvas ref={canvasRef} className="hidden" />
      {/* Layout selector */}
      <div className="flex flex-wrap gap-2">
        <span className="text-sm text-muted-foreground self-center mr-1">
          Layout:
        </span>
        {LAYOUTS.map((l) => (
          <Button
            key={l.key}
            variant={layout === l.key ? "default" : "outline"}
            size="sm"
            onClick={() => {
              setLayout(l.key);
              setResultUrl("");
            }}
          >
            {l.label}
          </Button>
        ))}
      </div>

      {/* Image upload slots */}
      <div className="grid grid-cols-2 gap-3">
        {Array.from({ length: MAX_IMAGES }).map((_, idx) => (
          <div key={idx}>
            {images[idx] ? (
              <div className="relative border rounded-lg overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  ref={(el) => {
                    imgRefs.current[idx] = el;
                  }}
                  src={images[idx]!}
                  alt={`Image ${idx + 1}`}
                  className="w-full h-32 object-cover"
                />
                <Button
                  variant="destructive"
                  size="sm"
                  className="absolute top-1 right-1 h-6 w-6 p-0 text-xs"
                  onClick={() => removeImage(idx)}
                >
                  ✕
                </Button>
                <p className="text-xs text-center text-muted-foreground py-1">
                  Image {idx + 1}
                </p>
              </div>
            ) : (
              <div
                className="border-2 border-dashed border-input rounded-lg h-32 flex items-center justify-center cursor-pointer hover:border-primary transition-colors"
                onClick={() => {
                  const input = document.createElement("input");
                  input.type = "file";
                  input.accept = "image/jpeg,image/png,image/webp";
                  input.onchange = (e: any) =>
                    e.target.files[0] && handleFile(idx, e.target.files[0]);
                  input.click();
                }}
              >
                <p className="text-xs text-muted-foreground">
                  + Add Image {idx + 1}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Generate button */}
      <Button
        onClick={generateCollage}
        disabled={!canGenerate || loading}
        className="w-full"
      >
        {loading
          ? "Generating..."
          : `Generate Collage (${images.filter(Boolean).length}/${requiredImages})`}
      </Button>

      {/* Result */}
      {resultUrl && (
        <div className="space-y-2">
          <p className="text-sm font-medium text-green-600">
            Collage Generated!
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={resultUrl}
            alt="Collage"
            className="max-w-full rounded-lg border"
          />
          <div className="flex gap-2">
            <Button
              onClick={() => {
                const a = document.createElement("a");
                a.href = resultUrl;
                a.download = "collage.png";
                a.click();
              }}
              className="flex-1"
            >
              Download
            </Button>
            <Button variant="outline" onClick={resetAll} className="flex-1">
              New Collage
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
