"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

type FilterType = "none" | "grayscale" | "sepia" | "blur" | "brightness" | "contrast";

const FILTERS: { key: FilterType; label: string; css: string }[] = [
  { key: "grayscale", label: "Grayscale", css: "grayscale(100%)" },
  { key: "sepia", label: "Sepia", css: "sepia(100%)" },
  { key: "blur", label: "Blur", css: "blur(4px)" },
  { key: "brightness", label: "Brightness", css: "brightness(130%)" },
  { key: "contrast", label: "Contrast", css: "contrast(150%)" },
];

export function ImageFiltersTool() {
  const { t } = useLocale();
  const [imageUrl, setImageUrl] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterType>("none");
  const [resultUrl, setResultUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleFile = (file: File) => {
    setImageFile(file);
    setImageUrl(URL.createObjectURL(file));
    setActiveFilter("none");
    setResultUrl("");
  };

  const applyFilter = (filter: FilterType) => {
    setActiveFilter(filter);
    setResultUrl("");
  };

  const applyPermanent = async () => {
    if (!imgRef.current || activeFilter === "none") return;
    setLoading(true);

    const img = imgRef.current;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    ctx.filter = FILTERS.find((f) => f.key === activeFilter)?.css || "none";
    ctx.drawImage(img, 0, 0);

    canvas.toBlob((blob) => {
      if (blob) {
        setResultUrl(URL.createObjectURL(blob));
      }
      setLoading(false);
    }, "image/png");
  };

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
          <p className="text-muted-foreground">{t('common.selectFile')}</p>
          <p className="text-xs text-muted-foreground mt-1">Supports JPG, PNG, WebP, GIF</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">{t('toolCommon.imageFilter.selectFilter')}</p>
            <Button variant="outline" size="sm" onClick={() => {
              setImageUrl(""); setImageFile(null); setResultUrl("");
            }}>
              {t('common.selectFile')}
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              variant={activeFilter === "none" ? "default" : "outline"}
              size="sm"
              onClick={() => applyFilter("none")}
            >
              {t('common.none')}
            </Button>
            {FILTERS.map((f) => (
              <Button
                key={f.key}
                variant={activeFilter === f.key ? "default" : "outline"}
                size="sm"
                onClick={() => applyFilter(f.key)}
              >
                {f.label}
              </Button>
            ))}
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={imgRef}
            src={imageUrl}
            alt="Preview"
            className="max-w-full max-h-64 object-contain rounded-lg border"
            style={{
              filter: activeFilter !== "none"
                ? FILTERS.find((f) => f.key === activeFilter)?.css
                : "none",
            }}
          />

          {activeFilter !== "none" && !resultUrl && (
            <Button onClick={applyPermanent} disabled={loading}>
              {loading ? t('common.processing') : t('toolCommon.imageFilter.applyFilter')}
            </Button>
          )}

          {resultUrl && (
            <div className="space-y-2">
              <p className="text-sm font-medium">{t('toolCommon.imageFilter.filteredResult')}</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={resultUrl} alt="Filtered" className="rounded-lg border max-w-full max-h-48 object-contain" />
              <Button onClick={() => {
                const a = document.createElement("a");
                a.href = resultUrl;
                a.download = imageFile
                  ? imageFile.name.replace(/\.[^.]+$/, "") + "_" + activeFilter + ".png"
                  : "filtered.png";
                a.click();
              }}>
                {t('common.download')}
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
