"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GripVertical, X } from "lucide-react";
import { useLocale } from "@/lib/i18n/context";

interface PdfFile {
  file: File;
  name: string;
  size: number;
}

export function PdfMergerTool() {
  const [pdfs, setPdfs] = useState<PdfFile[]>([]);
  const [merged, setMerged] = useState<Uint8Array | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const { t } = useLocale();

  const addFiles = (files: FileList) => {
    const newPdfs = Array.from(files)
      .filter((f) => f.type === "application/pdf")
      .map((f) => ({ file: f, name: f.name, size: f.size }));
    setPdfs((prev) => [...prev, ...newPdfs]);
    setMerged(null);
  };

  const removeFile = (index: number) => {
    setPdfs((prev) => prev.filter((_, i) => i !== index));
    setMerged(null);
  };

  const moveFile = (from: number, to: number) => {
    const copy = [...pdfs];
    const [item] = copy.splice(from, 1);
    copy.splice(to, 0, item);
    setPdfs(copy);
  };

  const merge = async () => {
    if (pdfs.length < 2) return;
    setLoading(true);
    setError("");

    try {
      // Dynamic import pdf-lib for WASM-based PDF merging
      const { PDFDocument } = await import("pdf-lib");
      const mergedPdf = await PDFDocument.create();

      for (const pdfFile of pdfs) {
        const bytes = await pdfFile.file.arrayBuffer();
        const pdf = await PDFDocument.load(bytes);
        const indices = pdf.getPageIndices();
        const pages = await mergedPdf.copyPages(pdf, indices);
        pages.forEach((page) => mergedPdf.addPage(page));
      }

      const mergedBytes = await mergedPdf.save();
      setMerged(mergedBytes as Uint8Array);
    } catch (e) {
      console.error("PDF merge failed:", e);
      setError(e instanceof Error ? e.message : 'Merge failed');
    }

    setLoading(false);
  };

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / 1024 / 1024).toFixed(1) + " MB";
  };

  return (
    <div className="space-y-4">
      <div
        className="border-2 border-dashed border-input rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => { e.preventDefault(); addFiles(e.dataTransfer.files); }}
        onClick={() => {
          const input = document.createElement("input");
          input.type = "file"; input.accept = "application/pdf"; input.multiple = true;
          input.onchange = (e: any) => e.target.files && addFiles(e.target.files);
          input.click();
        }}
      >
        <p className="text-muted-foreground">Drop PDFs here or click to upload</p>
        <p className="text-xs text-muted-foreground mt-1">Up to 10 PDFs. Drag to reorder.</p>
      </div>

      {pdfs.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            {pdfs.length} file{pdfs.length !== 1 ? "s" : ""} —{" "}
            {pdfs.reduce((sum, p) => sum + p.size, 0) > 0
              ? formatSize(pdfs.reduce((sum, p) => sum + p.size, 0))
              : "0 B"}
          </p>
          {pdfs.map((pdf, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-3 rounded-md border bg-card"
              draggable
              onDragStart={() => setDragIndex(i)}
              onDragOver={(e) => { e.preventDefault(); }}
              onDrop={() => { if (dragIndex !== null && dragIndex !== i) moveFile(dragIndex, i); setDragIndex(null); }}
            >
              <GripVertical size={16} className="text-muted-foreground cursor-grab" />
              <span className="flex-1 text-sm truncate">{pdf.name}</span>
              <span className="text-xs text-muted-foreground">{formatSize(pdf.size)}</span>
              <button onClick={() => removeFile(i)} className="text-muted-foreground hover:text-foreground">
                <X size={16} />
              </button>
            </div>
          ))}
          <div className="flex gap-2 pt-2">
            <Button onClick={merge} disabled={pdfs.length < 2 || loading}>
              {loading ? t('common.loading') : `${t('common.merge')} ${pdfs.length} PDFs`}
            </Button>
            <Button variant="ghost" onClick={() => { setPdfs([]); setMerged(null); setError(""); }}>
              {t('common.clear')}
            </Button>
          </div>
        </div>
      )}

      {error && (
        <p className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">{error}</p>
      )}

      {merged && (
        <div className="p-4 rounded-lg border bg-card text-center">
          <p className="text-sm text-muted-foreground mb-2">{t('toolCommon.pdf.mergedSuccess')}</p>
          <Button
            onClick={() => {
              const blob = new Blob([merged as BlobPart], { type: "application/pdf" });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url; a.download = "merged.pdf"; a.click();
              URL.revokeObjectURL(url);
            }}
          >
            {t('common.download')}
          </Button>
        </div>
      )}
    </div>
  );
}
