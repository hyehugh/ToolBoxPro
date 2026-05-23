"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function PdfRotatorTool() {
  const [file, setFile] = useState<File | null>(null);
  const [rotation, setRotation] = useState(90);
  const [loading, setLoading] = useState(false);

  const rotate = async () => {
    if (!file) return;
    setLoading(true);
    try {
      const { PDFDocument, degrees } = await import("pdf-lib");
      const bytes = await file.arrayBuffer();
      const pdf = await PDFDocument.load(bytes);
      const pages = pdf.getPages();
      for (const page of pages) {
        page.setRotation(degrees(rotation));
      }
      const pdfBytes = await pdf.save();
      const blob = new Blob([pdfBytes as BlobPart], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url; a.download = `rotated-${file.name}`; a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error("Rotate failed:", e);
    }
    setLoading(false);
  };

  return (
    <div className="space-y-4">
      <div
        className="border-2 border-dashed border-input rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => { e.preventDefault(); e.dataTransfer.files[0] && setFile(e.dataTransfer.files[0]); }}
        onClick={() => {
          const input = document.createElement("input");
          input.type = "file"; input.accept = "application/pdf";
          input.onchange = (e: any) => e.target.files[0] && setFile(e.target.files[0]);
          input.click();
        }}
      >
        {file ? (
          <p className="text-muted-foreground">{file.name}</p>
        ) : (
          <>
            <p className="text-muted-foreground">Drop a PDF here or click to upload</p>
          </>
        )}
      </div>

      {file && (
        <div className="space-y-3">
          <div className="flex gap-2">
            {[90, 180, 270].map((deg) => (
              <Button
                key={deg}
                variant={rotation === deg ? "default" : "outline"}
                size="sm"
                onClick={() => setRotation(deg)}
              >
                {deg}°
              </Button>
            ))}
          </div>
          <Button onClick={rotate} disabled={loading}>
            {loading ? "Rotating..." : `Rotate ${rotation}°`}
          </Button>
        </div>
      )}
    </div>
  );
}
