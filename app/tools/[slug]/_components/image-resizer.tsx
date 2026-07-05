"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

export function ImageResizerTool() {
  const { locale } = useLocale();
  const isZh = locale === "zh";
  const [imageUrl, setImageUrl] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [originalWidth, setOriginalWidth] = useState(0);
  const [originalHeight, setOriginalHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [lockAspect, setLockAspect] = useState(true);
  const [resultUrl, setResultUrl] = useState<string>("");
  const [resultSize, setResultSize] = useState(0);
  const [loading, setLoading] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleFile = (file: File) => {
    setImageFile(file);
    setImageUrl(URL.createObjectURL(file));
    setResultUrl("");
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      setOriginalWidth(img.width);
      setOriginalHeight(img.height);
      setWidth(img.width);
      setHeight(img.height);
    };
  };

  const handleWidthChange = (val: number) => {
    setWidth(val);
    if (lockAspect && originalWidth > 0) {
      setHeight(Math.round(val * (originalHeight / originalWidth)));
    }
  };

  const handleHeightChange = (val: number) => {
    setHeight(val);
    if (lockAspect && originalHeight > 0) {
      setWidth(Math.round(val * (originalWidth / originalHeight)));
    }
  };

  const resize = async () => {
    if (!imageUrl || width < 1 || height < 1) return;
    setLoading(true);
    setResultUrl("");

    const img = new Image();
    img.src = imageUrl;
    await new Promise((r) => (img.onload = r));

    const canvas = canvasRef.current!;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d")!;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, 0, 0, width, height);

    canvas.toBlob((blob) => {
      if (blob) {
        setResultUrl(URL.createObjectURL(blob));
        setResultSize(blob.size);
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
          <p className="text-muted-foreground">{isZh ? "拖放图片到此处或点击上传" : "Drop an image here or click to upload"}</p>
          <p className="text-xs text-muted-foreground mt-1">{isZh ? "支持 JPG、PNG、WebP、GIF" : "Supports JPG, PNG, WebP, GIF"}</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {isZh ? `原始尺寸：${originalWidth} × ${originalHeight} px` : `Original: ${originalWidth} × ${originalHeight} px`}
            </p>
            <Button variant="outline" size="sm" onClick={() => {
              setImageUrl(""); setImageFile(null); setResultUrl("");
            }}>
              {isZh ? "新图片" : "New Image"}
            </Button>
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img ref={imgRef} src={imageUrl} alt="Preview" className="max-w-full max-h-48 object-contain rounded-lg border" />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm block mb-1">{isZh ? "宽度 (px)" : "Width (px)"}</label>
              <input
                type="number" min="1" value={width}
                onChange={(e) => handleWidthChange(+e.target.value)}
                className="w-full px-3 h-10 rounded-md border border-input bg-background text-sm"
              />
            </div>
            <div>
              <label className="text-sm block mb-1">{isZh ? "高度 (px)" : "Height (px)"}</label>
              <input
                type="number" min="1" value={height}
                onChange={(e) => handleHeightChange(+e.target.value)}
                className="w-full px-3 h-10 rounded-md border border-input bg-background text-sm"
              />
            </div>
          </div>

          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input
              type="checkbox" checked={lockAspect}
              onChange={(e) => setLockAspect(e.target.checked)}
              className="rounded"
            />
            {isZh ? "锁定宽高比" : "Lock aspect ratio"}
          </label>

          <Button onClick={resize} disabled={loading || width < 1 || height < 1}>
            {loading ? (isZh ? "调整中..." : "Resizing...") : (isZh ? "调整大小" : "Resize")}
          </Button>

          {resultUrl && (
            <div className="space-y-2">
              <p className="text-sm font-medium">{isZh ? "结果" : "Result"}</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={resultUrl} alt="Result" className="rounded-lg border max-w-full max-h-48 object-contain" />
              <p className="text-xs text-muted-foreground">
                {(resultSize / 1024).toFixed(1)} KB &middot; {width} &times; {height} px
              </p>
              <Button onClick={() => {
                const a = document.createElement("a");
                a.href = resultUrl;
                a.download = imageFile ? imageFile.name.replace(/\.[^.]+$/, "") + "_resized.png" : "resized.png";
                a.click();
              }}>
                {isZh ? "下载调整后图片" : "Download Resized"}
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
