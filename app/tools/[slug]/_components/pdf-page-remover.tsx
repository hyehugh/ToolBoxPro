"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

export function PdfPageRemoverTool() {
  const [file, setFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [pagesToRemove, setPagesToRemove] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const { t } = useLocale();

  const loadFile = async (f: File) => {
    setFile(f);
    const { PDFDocument } = await import("pdf-lib");
    const bytes = await f.arrayBuffer();
    const pdf = await PDFDocument.load(bytes);
    setPageCount(pdf.getPageCount());
    setPagesToRemove([]);
  };

  const togglePage = (page: number) => {
    setPagesToRemove((prev) =>
      prev.includes(page) ? prev.filter((p) => p !== page) : [...prev, page]
    );
  };

  const remove = async () => {
    if (!file || pagesToRemove.length === 0) return;
    setLoading(true);
    try {
      const { PDFDocument } = await import("pdf-lib");
      const bytes = await file.arrayBuffer();
      const pdf = await PDFDocument.load(bytes);
      const keepIndices = Array.from({ length: pageCount }, (_, i) => i)
        .filter((i) => !pagesToRemove.includes(i));
      const newPdf = await PDFDocument.create();
      const pages = await newPdf.copyPages(pdf, keepIndices);
      pages.forEach((p) => newPdf.addPage(p));
      const pdfBytes = await newPdf.save();
      const blob = new Blob([pdfBytes as BlobPart], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url; a.download = `trimmed-${file.name}`; a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error("Remove failed:", e);
    }
    setLoading(false);
  };

  return (
    <div className="space-y-4">
      <div
        className="border-2 border-dashed border-input rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => { e.preventDefault(); if (e.dataTransfer.files[0]) loadFile(e.dataTransfer.files[0]); }}
        onClick={() => {
          const input = document.createElement("input");
          input.type = "file"; input.accept = "application/pdf";
          input.onchange = (e: any) => e.target.files[0] && loadFile(e.target.files[0]);
          input.click();
        }}
      >
        {file ? (
          <p className="text-muted-foreground">{file.name} ({t('toolCommon.pdfPageRemover.totalPages')}: {pageCount})</p>
        ) : (
          <p className="text-muted-foreground">Drop a PDF here or click to upload</p>
        )}
      </div>

      {file && pageCount > 0 && (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            {t('toolCommon.pdfPageRemover.selectPages')} ({pagesToRemove.length} {t('common.remove')})
          </p>
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: pageCount }, (_, i) => (
              <button
                key={i}
                onClick={() => togglePage(i)}
                className={`w-10 h-10 rounded-md text-sm font-medium border transition-colors ${
                  pagesToRemove.includes(i)
                    ? "bg-destructive text-destructive-foreground border-destructive"
                    : "bg-card border-input hover:bg-accent"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <Button onClick={remove} disabled={loading || pagesToRemove.length === 0}>
              {loading ? t('common.loading') : t('toolCommon.pdfPageRemover.removeSelected')}
            </Button>
            <Button variant="ghost" onClick={() => setPagesToRemove([])}>{t('common.clear')}</Button>
          </div>
        </div>
      )}
    </div>
  );
}
