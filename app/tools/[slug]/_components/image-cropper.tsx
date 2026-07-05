"use client";

import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

export function ImageCropperTool() {
  const { locale } = useLocale();
  const isZh = locale === "zh";
  const [imageUrl, setImageUrl] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [croppedUrl, setCroppedUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragEnd, setDragEnd] = useState({ x: 0, y: 0 });
  const [hasSelection, setHasSelection] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleFile = (file: File) => {
    setImageFile(file);
    setImageUrl(URL.createObjectURL(file));
    setCroppedUrl("");
    setHasSelection(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setIsDragging(true);
    setDragStart({ x, y });
    setDragEnd({ x, y });
    setHasSelection(false);
    setCroppedUrl("");
  };

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
    const y = Math.min(Math.max(e.clientY - rect.top, 0), rect.height);
    setDragEnd({ x, y });
  }, [isDragging]);

  const handleMouseUp = () => {
    setIsDragging(false);
    const dx = Math.abs(dragEnd.x - dragStart.x);
    const dy = Math.abs(dragEnd.y - dragStart.y);
    if (dx > 5 && dy > 5) {
      setHasSelection(true);
    }
  };

  const crop = async () => {
    if (!imageRef.current || !hasSelection) return;
    setLoading(true);

    const img = imageRef.current;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const imgRect = img.getBoundingClientRect();

    const scaleX = img.naturalWidth / imgRect.width;
    const scaleY = img.naturalHeight / imgRect.height;

    const sx = Math.min(dragStart.x, dragEnd.x) * scaleX;
    const sy = Math.min(dragStart.y, dragEnd.y) * scaleY;
    const sw = Math.abs(dragEnd.x - dragStart.x) * scaleX;
    const sh = Math.abs(dragEnd.y - dragStart.y) * scaleY;

    canvas.width = sw;
    canvas.height = sh;
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, sw, sh);

    canvas.toBlob((blob) => {
      if (blob) {
        setCroppedUrl(URL.createObjectURL(blob));
      }
      setLoading(false);
    }, "image/png");
  };

  const selectionStyle = hasSelection || isDragging
    ? {
        left: Math.min(dragStart.x, dragEnd.x),
        top: Math.min(dragStart.y, dragEnd.y),
        width: Math.abs(dragEnd.x - dragStart.x),
        height: Math.abs(dragEnd.y - dragStart.y),
      }
    : null;

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
              {isZh ? "在图片上拖动以选择裁剪区域" : "Drag on the image to select a crop area"}
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => {
                setImageUrl(""); setImageFile(null); setCroppedUrl(""); setHasSelection(false);
              }}>
                {isZh ? "新图片" : "New Image"}
              </Button>
              {hasSelection && (
                <Button size="sm" onClick={crop} disabled={loading}>
                  {loading ? (isZh ? "裁剪中..." : "Cropping...") : (isZh ? "裁剪" : "Crop")}
                </Button>
              )}
            </div>
          </div>

          <div
            ref={containerRef}
            className="relative inline-block border rounded-lg overflow-hidden cursor-crosshair max-w-full"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={imageRef}
              src={imageUrl}
              alt="Source"
              className="max-w-full max-h-96 object-contain"
              draggable={false}
            />
            {selectionStyle && (
              <div
                className="absolute border-2 border-primary bg-primary/20 pointer-events-none"
                style={selectionStyle}
              />
            )}
          </div>

          {croppedUrl && (
            <div className="space-y-2">
              <p className="text-sm font-medium">{isZh ? "裁剪结果" : "Cropped Result"}</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={croppedUrl} alt="Cropped" className="rounded-lg border max-w-full max-h-48 object-contain" />
              <Button onClick={() => {
                const a = document.createElement("a");
                a.href = croppedUrl;
                a.download = imageFile ? imageFile.name.replace(/\.[^.]+$/, "") + "_cropped.png" : "cropped.png";
                a.click();
              }}>
                {isZh ? "下载裁剪图片" : "Download Cropped"}
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
