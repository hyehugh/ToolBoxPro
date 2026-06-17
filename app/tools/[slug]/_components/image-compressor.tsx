"use client";

import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

export function ImageCompressorTool() {
  const { t } = useLocale();
  const [originalSize, setOriginalSize] = useState(0);
  const [compressedSize, setCompressedSize] = useState(0);
  const [resultUrl, setResultUrl] = useState("");
  const [quality, setQuality] = useState(80);
  const [previewUrl, setPreviewUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [fileType, setFileType] = useState("image/jpeg");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const getExtension = (mime: string) => {
    switch (mime) {
      case "image/png": return "png";
      case "image/webp": return "webp";
      case "image/avif": return "avif";
      case "image/gif": return "gif";
      default: return "jpg";
    }
  };

  const handleFile = useCallback((file: File) => {
    // Revoke old preview URL to free memory
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setOriginalSize(file.size);
    setPreviewUrl(URL.createObjectURL(file));
    setFileType(file.type || "image/jpeg");
    setCompressedSize(0);
    setResultUrl("");
    compress(file);
  }, [previewUrl]);

  const compress = async (file: File) => {
    setLoading(true);

    // Revoke old result URL before creating new one
    if (resultUrl) {
      URL.revokeObjectURL(resultUrl);
    }

    const img = new Image();
    img.src = URL.createObjectURL(file);
    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = () => {
        setLoading(false);
        reject(new Error(t('toolCommon.image.loadFailed')));
      };
    }).catch(() => {
      setLoading(false);
      return;
    });

    if (!canvasRef.current) {
      setLoading(false);
      return;
    }

    const canvas = canvasRef.current;
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d")!;
    ctx.drawImage(img, 0, 0);

    const mime = file.type === "image/png" ? "image/png" :
                 file.type === "image/webp" ? "image/webp" :
                 file.type === "image/avif" ? "image/avif" : "image/jpeg";

    canvas.toBlob((blob) => {
      if (blob) {
        URL.revokeObjectURL(img.src);
        setResultUrl(URL.createObjectURL(blob));
        setCompressedSize(blob.size);
      }
      setLoading(false);
    }, mime, quality / 100);
  };

  return (
    <div className="space-y-4">
      <canvas ref={canvasRef} className="hidden" />
      <div
        className="border-2 border-dashed border-input rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => { e.preventDefault(); handleFile(e.dataTransfer.files[0]); }}
        onClick={() => {
          const input = document.createElement("input");
          input.type = "file";
          input.accept = "image/jpeg,image/png,image/webp,image/avif,image/gif";
          input.onchange = (e: any) => e.target.files[0] && handleFile(e.target.files[0]);
          input.click();
        }}
      >
        <p className="text-muted-foreground">{t('toolCommon.image.dropImage')}</p>
        <p className="text-xs text-muted-foreground mt-1">{t('toolCommon.image.supportedFormats')}</p>
      </div>

      {previewUrl && (
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <label className="text-sm">{t('toolCommon.image.quality')}: {quality}%</label>
            <input
              type="range" min="1" max="100" value={quality}
              onChange={(e) => setQuality(+e.target.value)}
              className="flex-1"
            />
            <Button
              size="sm"
              onClick={() => {
                const input = document.createElement("input");
                input.type = "file";
                input.accept = "image/*";
                input.onchange = (e: any) => e.target.files[0] && handleFile(e.target.files[0]);
                input.click();
              }}
            >
              {t('toolCommon.image.newImage')}
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">{t('toolCommon.image.original')}</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={previewUrl} alt="Original" className="rounded-lg border max-w-full max-h-48 object-contain" />
              <p className="text-xs text-muted-foreground mt-1">
                {(originalSize / 1024).toFixed(1)} KB
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">
                {loading ? t('toolCommon.image.compressing') : t('toolCommon.image.compressed')}
              </p>
              {resultUrl && (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={resultUrl}
                    alt="Compressed"
                    className="rounded-lg border max-w-full max-h-48 object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    {(compressedSize / 1024).toFixed(1)} KB
                    ({Math.round((1 - compressedSize / originalSize) * 100)}% {t('toolCommon.image.smaller')})
                  </p>
                </>
              )}
            </div>
          </div>

          {resultUrl && (
            <Button
              onClick={() => {
                const ext = getExtension(fileType);
                const a = document.createElement("a");
                a.href = resultUrl;
                a.download = `compressed.${ext}`;
                a.click();
              }}
            >
              {t('common.download')}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
