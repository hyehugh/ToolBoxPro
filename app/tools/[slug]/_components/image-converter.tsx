"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

const FORMATS = ["JPG", "PNG", "WebP", "AVIF", "GIF"];

export function ImageConverterTool() {
  const { locale } = useLocale();
  const isZh = locale === "zh";
  const [files, setFiles] = useState<File[]>([]);
  const [outputFormat, setOutputFormat] = useState("WebP");
  const [converted, setConverted] = useState<{ url: string; name: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFiles = (newFiles: FileList) => {
    setFiles(Array.from(newFiles));
    setConverted([]);
  };

  const convert = async () => {
    setLoading(true);
    setConverted([]);
    const results: { url: string; name: string }[] = [];

    for (const file of files) {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      await new Promise((r) => (img.onload = r));

      const canvas = canvasRef.current!;
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0);

      const mime = outputFormat === "JPG" ? "image/jpeg" :
                   outputFormat === "PNG" ? "image/png" :
                   outputFormat === "WebP" ? "image/webp" :
                   outputFormat === "AVIF" ? "image/avif" : "image/gif";

      const blob = await new Promise<Blob | null>((r) => canvas.toBlob(r, mime, 0.92));
      if (blob) {
        const ext = outputFormat.toLowerCase();
        results.push({
          url: URL.createObjectURL(blob),
          name: file.name.replace(/\.[^.]+$/, "") + "." + ext,
        });
      }
    }

    setConverted(results);
    setLoading(false);
  };

  return (
    <div className="space-y-4">
      <canvas ref={canvasRef} className="hidden" />
      <div
        className="border-2 border-dashed border-input rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => { e.preventDefault(); handleFiles(e.dataTransfer.files); }}
        onClick={() => {
          const input = document.createElement("input");
          input.type = "file"; input.multiple = true;
          input.accept = "image/jpeg,image/png,image/webp,image/avif,image/gif,image/tiff";
          input.onchange = (e: any) => e.target.files && handleFiles(e.target.files);
          input.click();
        }}
      >
        <p className="text-muted-foreground">{isZh ? "拖放图片到此处或点击上传" : "Drop images here or click to upload"}</p>
        <p className="text-xs text-muted-foreground mt-1">{isZh ? "支持多文件" : "Multiple files supported"}</p>
      </div>

      {files.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">
              {isZh ? `${files.length} 个文件` : `${files.length} file${files.length !== 1 ? "s" : ""}`}
            </span>
            <select
              value={outputFormat}
              onChange={(e) => setOutputFormat(e.target.value)}
              className="px-3 h-10 rounded-md border border-input bg-background text-sm"
            >
              {FORMATS.map((f) => <option key={f} value={f}>{isZh ? `转换为 ${f}` : `Convert to ${f}`}</option>)}
            </select>
            <Button onClick={convert} disabled={loading}>
              {loading ? (isZh ? "转换中..." : "Converting...") : (isZh ? "全部转换" : "Convert All")}
            </Button>
          </div>

          {converted.length > 0 && (
            <div className="space-y-2">
              {converted.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-2 rounded-md bg-muted">
                  <span className="text-sm truncate flex-1">{item.name}</span>
                  <Button variant="outline" size="sm" onClick={() => {
                    const a = document.createElement("a");
                    a.href = item.url; a.download = item.name; a.click();
                  }}>
                    {isZh ? "下载" : "Download"}
                  </Button>
                </div>
              ))}
              {converted.length > 1 && (
                <Button variant="outline" size="sm" onClick={() => {
                  converted.forEach((item) => {
                    const a = document.createElement("a");
                    a.href = item.url; a.download = item.name; a.click();
                  });
                }}>
                  {isZh ? "全部下载" : "Download All"}
                </Button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
