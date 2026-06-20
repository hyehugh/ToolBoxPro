"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";

export function ImageToPdfTool() {
  const [images, setImages] = useState<{ file: File; url: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const addImages = (files: FileList) => {
    const newImages = Array.from(files)
      .filter((f) => f.type.startsWith("image/"))
      .map((file) => ({ file, url: URL.createObjectURL(file) }));
    setImages((prev) => [...prev, ...newImages]);
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const generate = async () => {
    if (images.length === 0) return;
    setLoading(true);
    try {
      const { PDFDocument } = await import("pdf-lib");
      const pdfDoc = await PDFDocument.create();

      for (const img of images) {
        const bytes = await img.file.arrayBuffer();
        let image;
        if (img.file.type === "image/png") {
          image = await pdfDoc.embedPng(bytes);
        } else {
          image = await pdfDoc.embedJpg(bytes);
        }
        const page = pdfDoc.addPage([image.width, image.height]);
        page.drawImage(image, { x: 0, y: 0, width: image.width, height: image.height });
      }

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes as BlobPart], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url; a.download = "images.pdf"; a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error("PDF generation failed:", e);
    }
    setLoading(false);
  };

  return (
    <div className="space-y-4">
      <canvas ref={canvasRef} className="hidden" />
      <div
        className="border-2 border-dashed border-input rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => { e.preventDefault(); addImages(e.dataTransfer.files); }}
        onClick={() => {
          const input = document.createElement("input");
          input.type = "file"; input.multiple = true;
          input.accept = "image/jpeg,image/png,image/webp";
          input.onchange = (e: any) => e.target.files && addImages(e.target.files);
          input.click();
        }}
      >
        <p className="text-muted-foreground">Drop images here or click to upload</p>
        <p className="text-xs text-muted-foreground mt-1">Supports JPG, PNG, WebP</p>
      </div>

      {images.length > 0 && (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">{images.length} image{images.length > 1 ? "s" : ""}</p>
          <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto">
            {images.map((img, i) => (
              <div key={i} className="relative group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.url} alt="" className="w-20 h-20 object-cover rounded border" />
                <button
                  onClick={() => removeImage(i)}
                  className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-destructive text-destructive-foreground text-xs hidden group-hover:flex items-center justify-center"
                >✕</button>
              </div>
            ))}
          </div>
          <Button onClick={generate} disabled={loading}>
            {loading ? "Generating..." : `Convert to PDF (${images.length} pages)`}
          </Button>
        </div>
      )}
    </div>
  );
}
