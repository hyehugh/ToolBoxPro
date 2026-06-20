"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

export function PdfSplitterTool() {
  const [file, setFile] = useState<File | null>(null);
  const [ranges, setRanges] = useState("");
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const { t } = useLocale();

  const loadFile = async (f: File) => {
    setFile(f);
    const { PDFDocument } = await import("pdf-lib");
    const bytes = await f.arrayBuffer();
    const pdf = await PDFDocument.load(bytes);
    setPageCount(pdf.getPageCount());
    setRanges(`1-${pdf.getPageCount()}`);
  };

  const split = async () => {
    if (!file) return;
    setLoading(true);
    try {
      const { PDFDocument } = await import("pdf-lib");
      const bytes = await file.arrayBuffer();
      const sourcePdf = await PDFDocument.load(bytes);

      // Parse ranges like "1-3" or "1,3,5" or "1-3,5-7"
      const parts = ranges.split(",").map((r) => r.trim());
      const newPdf = await PDFDocument.create();

      for (const part of parts) {
        const match = part.match(/^(\d+)(?:-(\d+))?$/);
        if (!match) continue;
        const start = parseInt(match[1]) - 1;
        const end = match[2] ? parseInt(match[2]) - 1 : start;
        for (let i = start; i <= end && i < pageCount; i++) {
          const [page] = await newPdf.copyPages(sourcePdf, [i]);
          newPdf.addPage(page);
        }
      }

      const pdfBytes = await newPdf.save();
      const blob = new Blob([pdfBytes as BlobPart], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url; a.download = `split-${file.name}`; a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error("Split failed:", e);
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
          <p className="text-muted-foreground">{file.name} ({pageCount} pages)</p>
        ) : (
          <>
            <p className="text-muted-foreground">Drop a PDF here or click to upload</p>
            <p className="text-xs text-muted-foreground mt-1">Click to select a file</p>
          </>
        )}
      </div>

      {file && (
        <div className="space-y-3">
          <label className="text-sm block">
            Page range{pageCount > 0 ? ` (1-${pageCount})` : ""}:
            <br />
            <span className="text-xs text-muted-foreground">e.g. &quot;1-3,5,7-9&quot; or &quot;1-5&quot;</span>
          </label>
          <input
            value={ranges}
            onChange={(e) => setRanges(e.target.value)}
            className="w-full h-10 px-3 rounded-md border border-input bg-background font-mono text-sm"
          />
          <div className="flex gap-2">
            <Button onClick={split} disabled={loading}>
              {loading ? t('common.loading') : t('toolCommon.pdfSplitter.split')}
            </Button>
            <Button variant="ghost" onClick={() => { setFile(null); setRanges(""); }}>
              {t('common.clear')}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
