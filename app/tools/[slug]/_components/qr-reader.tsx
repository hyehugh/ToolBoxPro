'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';

export function QrReaderTool() {
  const [decodedText, setDecodedText] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const decodeQR = async (file: File) => {
    setError('');
    setDecodedText('');
    setLoading(true);

    try {
      // Load jsQR dynamically from CDN
      const jsqr = await loadJsQR();

      // Read file as data URL
      const dataUrl = await readFileAsDataURL(file);
      setImageUrl(dataUrl);

      // Load image onto canvas
      const img = new Image();
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error('Failed to load image'));
        img.src = dataUrl;
      });

      const canvas = canvasRef.current;
      if (!canvas) {
        setLoading(false);
        return;
      }
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        setLoading(false);
        return;
      }
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const code = jsqr(imageData.data, imageData.width, imageData.height);

      if (code && code.data) {
        setDecodedText(code.data);
      } else {
        setError('No QR code found in the image. Try a clearer image.');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to decode QR code');
    } finally {
      setLoading(false);
    }
  };

  const loadJsQR = (): Promise<any> => {
    return new Promise((resolve, reject) => {
      if ((window as any).jsQR) {
        resolve((window as any).jsQR);
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js';
      script.onload = () => {
        resolve((window as any).jsQR);
      };
      script.onerror = () => {
        reject(new Error('Failed to load QR decoder library. Check your internet connection.'));
      };
      document.head.appendChild(script);
    });
  };

  const readFileAsDataURL = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsDataURL(file);
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!['image/png', 'image/jpeg', 'image/jpg', 'image/webp'].includes(file.type)) {
      setError('Please upload a PNG or JPG image.');
      return;
    }
    decodeQR(file);
  };

  const handleCopy = async () => {
    if (decodedText) {
      await navigator.clipboard.writeText(decodedText);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'].includes(file.type)) {
      decodeQR(file);
    }
  };

  return (
    <div className="space-y-4">
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer"
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/png,image/jpeg,image/jpg,image/webp"
          onChange={handleFileUpload}
          className="hidden"
        />
        {loading ? (
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            <span className="text-sm text-muted-foreground">Analyzing QR code...</span>
          </div>
        ) : (
          <div>
            <svg
              className="mx-auto h-12 w-12 text-muted-foreground mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 4a2 2 0 00-2 2v2M5 14v2a2 2 0 002 2h2m4-12h2a2 2 0 012 2v2m0 6v2a2 2 0 01-2 2h-2"
              />
            </svg>
            <p className="text-sm text-muted-foreground">
              Click or drag & drop a QR code image here
            </p>
            <p className="text-xs text-muted-foreground mt-1">Supports PNG, JPG</p>
          </div>
        )}
      </div>

      <canvas ref={canvasRef} className="hidden" />

      {error && (
        <div className="p-3 rounded-md border border-red-300 bg-red-50 dark:bg-red-950/30 text-sm text-red-600 dark:text-red-400">
          {error}
        </div>
      )}

      {imageUrl && !loading && (
        <div className="flex justify-center p-4 rounded-lg border bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imageUrl} alt="Uploaded QR" className="max-w-full max-h-48" />
        </div>
      )}

      {decodedText && (
        <div className="space-y-3">
          <div className="rounded-md border bg-card p-4">
            <div className="text-xs text-muted-foreground mb-1">Decoded Content</div>
            <p className="font-mono text-sm break-all whitespace-pre-wrap">{decodedText}</p>
          </div>
          <div className="flex gap-2 justify-center">
            <Button variant="outline" size="sm" onClick={handleCopy}>
              Copy
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
