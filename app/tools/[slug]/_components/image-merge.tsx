"use client";

import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";

type MergeLayout = "horizontal" | "vertical" | "grid";

export function ImageMergeTool() {
  const [images, setImages] = useState<{ file: File; url: string }[]>([]);
  const [layout, setLayout] = useState<MergeLayout>("horizontal");
  const [resultUrl, setResultUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFiles = (files: FileList) => {
    const newImages = Array.from(files).map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...newImages]);
    setResultUrl("");
  };

  const removeImage = (index: number) => {
    setImages((prev) => {
      URL.revokeObjectURL(prev[index].url);
      return prev.filter((_, i) => i !== index);
    });
    setResultUrl("");
  };

  const merge = useCallback(async () => {
    if (images.length < 2) return;
    setLoading(true);
    setResultUrl("");

    const loaded = await Promise.all(
      images.map(
        (img) =>
          new Promise<HTMLImageElement>((resolve) => {
            const i = new Image();
            i.src = img.url;
            i.onload = () => resolve(i);
          })
      )
    );

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    if (layout === "horizontal") {
      const totalWidth = loaded.reduce((sum, img) => sum + img.width, 0);
      const maxHeight = Math.max(...loaded.map((img) => img.height));
      canvas.width = totalWidth;
      canvas.height = maxHeight;
      let x = 0;
      for (const img of loaded) {
        ctx.drawImage(img, x, 0);
        x += img.width;
      }
    } else if (layout === "vertical") {
      const maxWidth = Math.max(...loaded.map((img) => img.width));
      const totalHeight = loaded.reduce((sum, img) => sum + img.height, 0);
      canvas.width = maxWidth;
      canvas.height = totalHeight;
      let y = 0;
      for (const img of loaded) {
        ctx.drawImage(img, 0, y);
        y += img.height;
      }
    } else {
      // grid layout - calculate best fit
      const count = loaded.length;
      const cols = Math.ceil(Math.sqrt(count));
      const rows = Math.ceil(count / cols);
      const cellW = Math.max(...loaded.map((img) => img.width));
      const cellH = Math.max(...loaded.map((img) => img.height));
      canvas.width = cols * cellW;
      canvas.height = rows * cellH;
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      loaded.forEach((img, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        ctx.drawImage(img, col * cellW, row * cellH);
      });
    }

    canvas.toBlob((blob) => {
      if (blob) {
        setResultUrl(URL.createObjectURL(blob));
      }
      setLoading(false);
    }, "image/png");
  }, [images, layout]);

  return (
    <div className="space-y-4">
      <canvas ref={canvasRef} className="hidden" />
      <div
        className="border-2 border-dashed border-input rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => { e.preventDefault(); e.dataTransfer.files.length > 0 && handleFiles(e.dataTransfer.files); }}
        onClick={() => {
          const input = document.createElement("input");
          input.type = "file";
          input.multiple = true;
          input.accept = "image/jpeg,image/png,image/webp,image/gif";
          input.onchange = (e: any) => e.target.files.length > 0 && handleFiles(e.target.files);
          input.click();
        }}
      >
        <p className="text-muted-foreground">Drop images here or click to upload (2+)</p>
        <p className="text-xs text-muted-foreground mt-1">Supports JPG, PNG, WebP, GIF</p>
      </div>

      {images.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">{images.length} image(s) loaded</p>
            <Button variant="outline" size="sm" onClick={() => {
              images.forEach((img) => URL.revokeObjectURL(img.url));
              setImages([]);
              setResultUrl("");
            }}>
              Clear All
            </Button>
          </div>

          <div className="flex flex-wrap gap-3">
            {images.map((img, i) => (
              <div key={i} className="relative group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.url} alt={`Image ${i + 1}`} className="h-24 w-24 object-cover rounded-lg border" />
                <button
                  onClick={() => removeImage(i)}
                  className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  ×
                </button>
                <p className="text-xs text-center mt-1 text-muted-foreground">{i + 1}</p>
              </div>
            ))}
          </div>

          <div>
            <label className="text-sm font-medium block mb-1">Layout</label>
            <div className="flex gap-2">
              {(["horizontal", "vertical", "grid"] as MergeLayout[]).map((l) => (
                <Button
                  key={l}
                  variant={layout === l ? "default" : "outline"}
                  size="sm"
                  onClick={() => setLayout(l)}
                >
                  {l.charAt(0).toUpperCase() + l.slice(1)}
                </Button>
              ))}
            </div>
          </div>

          <Button onClick={merge} disabled={loading || images.length < 2}>
            {loading ? "Merging..." : "Merge Images"}
          </Button>

          {resultUrl && (
            <div className="space-y-2">
              <p className="text-sm font-medium">Merged Result</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={resultUrl} alt="Merged" className="rounded-lg border max-w-full max-h-64 object-contain" />
              <Button onClick={() => {
                const a = document.createElement("a");
                a.href = resultUrl;
                a.download = "merged_image.png";
                a.click();
              }}>
                Download Merged
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
