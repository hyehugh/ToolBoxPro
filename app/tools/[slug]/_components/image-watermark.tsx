"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

type WatermarkPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";

export function ImageWatermarkTool() {
  const { t } = useLocale();
  const [imageUrl, setImageUrl] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [watermarkText, setWatermarkText] = useState("");
  const [position, setPosition] = useState<WatermarkPosition>("bottom-right");
  const [opacity, setOpacity] = useState(50);
  const [fontSize, setFontSize] = useState(32);
  const [resultUrl, setResultUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFile = (file: File) => {
    setImageFile(file);
    setImageUrl(URL.createObjectURL(file));
    setResultUrl("");
  };

  const applyWatermark = async () => {
    if (!imageUrl || !watermarkText.trim()) return;
    setLoading(true);
    setResultUrl("");

    const img = new Image();
    img.src = imageUrl;
    await new Promise((r) => (img.onload = r));

    const canvas = canvasRef.current!;
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d")!;

    ctx.drawImage(img, 0, 0);

    ctx.globalAlpha = opacity / 100;
    ctx.font = `bold ${fontSize}px Arial, sans-serif`;
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;

    const text = watermarkText;
    const metrics = ctx.measureText(text);
    const textWidth = metrics.width;
    const textHeight = fontSize;
    const padding = 20;

    let x: number, y: number;
    switch (position) {
      case "top-left":
        x = padding;
        y = padding + textHeight;
        break;
      case "top-right":
        x = canvas.width - textWidth - padding;
        y = padding + textHeight;
        break;
      case "bottom-left":
        x = padding;
        y = canvas.height - padding;
        break;
      case "bottom-right":
        x = canvas.width - textWidth - padding;
        y = canvas.height - padding;
        break;
      case "center":
        x = (canvas.width - textWidth) / 2;
        y = canvas.height / 2 + textHeight / 4;
        break;
    }

    ctx.strokeText(text, x, y);
    ctx.fillText(text, x, y);
    ctx.globalAlpha = 1;

    canvas.toBlob((blob) => {
      if (blob) {
        setResultUrl(URL.createObjectURL(blob));
      }
      setLoading(false);
    }, "image/png");
  };

  const POSITIONS: { key: WatermarkPosition; label: string }[] = [
    { key: "top-left", label: t('toolCommon.watermark.topLeft') },
    { key: "top-right", label: t('toolCommon.watermark.topRight') },
    { key: "bottom-left", label: t('toolCommon.watermark.bottomLeft') },
    { key: "bottom-right", label: t('toolCommon.watermark.bottomRight') },
    { key: "center", label: t('toolCommon.watermark.center') },
  ];

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
          <p className="text-muted-foreground">{t('toolCommon.imageWatermark.uploadPrompt')}</p>
          <p className="text-xs text-muted-foreground mt-1">{t('toolCommon.imageWatermark.supportedFormats')}</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">{t('toolCommon.imageWatermark.description')}</p>
            <Button variant="outline" size="sm" onClick={() => {
              setImageUrl(""); setImageFile(null); setResultUrl("");
            }}>
              {t('toolCommon.imageWatermark.newImage')}
            </Button>
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imageUrl} alt={t('common.preview')} className="max-w-full max-h-64 object-contain rounded-lg border" />

          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium block mb-1">{t('common.text')}</label>
              <input
                type="text"
                value={watermarkText}
                onChange={(e) => setWatermarkText(e.target.value)}
                placeholder={t('toolCommon.imageWatermark.watermarkPlaceholder')}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm"
              />
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">{t('toolCommon.imageWatermark.position')}</label>
              <div className="flex flex-wrap gap-2">
                {POSITIONS.map((p) => (
                  <Button
                    key={p.key}
                    variant={position === p.key ? "default" : "outline"}
                    size="sm"
                    onClick={() => setPosition(p.key)}
                  >
                    {p.label}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">{t('common.opacity')}: {opacity}%</label>
              <input
                type="range"
                min={10}
                max={100}
                value={opacity}
                onChange={(e) => setOpacity(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">{t('common.fontSize')}: {fontSize}px</label>
              <input
                type="range"
                min={12}
                max={120}
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <Button onClick={applyWatermark} disabled={loading || !watermarkText.trim()}>
              {loading ? t('common.processing') : t('common.watermark')}
            </Button>
          </div>

          {resultUrl && (
            <div className="space-y-2">
              <p className="text-sm font-medium">{t('common.result')}</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={resultUrl} alt="Watermarked" className="rounded-lg border max-w-full max-h-48 object-contain" />
              <Button onClick={() => {
                const a = document.createElement("a");
                a.href = resultUrl;
                a.download = imageFile
                  ? imageFile.name.replace(/\.[^.]+$/, "") + "_watermarked.png"
                  : "watermarked.png";
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
