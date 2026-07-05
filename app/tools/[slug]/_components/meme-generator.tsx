"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

export function MemeGeneratorTool() {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [fontSize, setFontSize] = useState(48);
  const [textColor, setTextColor] = useState("#ffffff");
  const [resultUrl, setResultUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { t, locale } = useLocale();
  const isZh = locale === "zh";

  const handleFile = (file: File) => {
    setImageUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return URL.createObjectURL(file);
    });
    setImageFile(file);
    setResultUrl("");
  };

  const generate = async () => {
    if (!imageUrl) return;
    setLoading(true);
    setResultUrl("");
    setError("");

    try {
      const img = new Image();
      img.src = imageUrl;
      // Reject on decode failure so loading state is always cleared.
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error("Failed to load image"));
      });

      const canvas = canvasRef.current!;
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d")!;

      // Draw the image
      ctx.drawImage(img, 0, 0);

      // Text settings
      const baseSize = Math.max(fontSize, 16);
      const calculatedSize = Math.min(baseSize, img.width / 12);
      ctx.font = `bold ${calculatedSize}px Impact, Arial Black, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "top";

      const drawText = (text: string, y: number, isTop: boolean) => {
        if (!text.trim()) return;
        ctx.textBaseline = isTop ? "top" : "bottom";

        // Calculate responsive font size based on text width
        let fs = calculatedSize;
        ctx.font = `bold ${fs}px Impact, Arial Black, sans-serif`;
        let metrics = ctx.measureText(text);
        const maxWidth = img.width * 0.9;
        if (metrics.width > maxWidth) {
          fs = (maxWidth / metrics.width) * fs;
          ctx.font = `bold ${fs}px Impact, Arial Black, sans-serif`;
          metrics = ctx.measureText(text);
        }

        const x = canvas.width / 2;
        const padding = 8;
        const textHeight = fs + padding * 2;

        // Draw background for readability
        ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
        const textWidth = metrics.width + padding * 2;
        const bgX = x - textWidth / 2;
        const bgY = isTop ? y : y - textHeight;
        ctx.beginPath();
        ctx.roundRect(bgX, bgY, textWidth, textHeight, 4);
        ctx.fill();

        // Draw text with outline
        ctx.textAlign = "center";
        ctx.textBaseline = isTop ? "top" : "bottom";
        const textY = isTop ? y + padding : y - padding;

        // Stroke/outline
        ctx.strokeStyle = "black";
        ctx.lineWidth = Math.max(2, fs / 16);
        ctx.strokeText(text, x, textY);

        // Fill
        ctx.fillStyle = textColor;
        ctx.fillText(text, x, textY);
      };

      if (topText.trim()) {
        drawText(topText, 20, true);
      }
      if (bottomText.trim()) {
        drawText(bottomText, canvas.height - 20, false);
      }

      await new Promise<void>((resolve) => {
        canvas.toBlob((blob) => {
          if (blob) {
            setResultUrl(URL.createObjectURL(blob));
          }
          resolve();
        }, "image/png");
      });
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to generate meme");
    } finally {
      setLoading(false);
    }
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
          <p className="text-muted-foreground">{isZh ? "拖拽图片到此处或点击上传" : "Drop an image here or click to upload"}</p>
          <p className="text-xs text-muted-foreground mt-1">Supports JPG, PNG, WebP, GIF</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">Create a meme from your image</p>
            <Button variant="outline" size="sm" onClick={() => {
              setImageUrl(""); setImageFile(null); setResultUrl("");
            }}>
              New Image
            </Button>
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imageUrl} alt="Source" className="max-w-full max-h-64 object-contain rounded-lg border" />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium block mb-1">{t('toolCommon.meme.topText')}</label>
              <input
                type="text"
                value={topText}
                onChange={(e) => setTopText(e.target.value)}
                placeholder="Top text..."
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">{t('toolCommon.meme.bottomText')}</label>
              <input
                type="text"
                value={bottomText}
                onChange={(e) => setBottomText(e.target.value)}
                placeholder="Bottom text..."
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium block mb-1">Font Size: {fontSize}px</label>
            <input
              type="range"
              min={16}
              max={120}
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="text-sm font-medium block mb-1">Text Color</label>
            <input
              type="color"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
              className="w-12 h-10 p-0.5 border border-input rounded cursor-pointer"
            />
          </div>

          <Button onClick={generate} disabled={loading}>
            {loading ? t('common.loading') : t('toolCommon.meme.generate')}
          </Button>

          {error && (
            <p className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">{error}</p>
          )}

          {resultUrl && (
            <div className="space-y-2">
              <p className="text-sm font-medium">Meme Result</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={resultUrl} alt="Meme" className="rounded-lg border max-w-full max-h-64 object-contain" />
              <Button onClick={() => {
                const a = document.createElement("a");
                a.href = resultUrl;
                a.download = imageFile
                  ? imageFile.name.replace(/\.[^.]+$/, "") + "_meme.png"
                  : "meme.png";
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
