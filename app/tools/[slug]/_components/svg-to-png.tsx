'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';

export function SvgToPngTool() {
  const [svgInput, setSvgInput] = useState('');
  const [fileName, setFileName] = useState('image');
  const [error, setError] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileName(file.name.replace(/\.svg$/i, ''));
    const reader = new FileReader();
    reader.onload = (ev) => {
      const text = ev.target?.result as string;
      setSvgInput(text);
      setError('');
      renderSvg(text);
    };
    reader.readAsText(file);
  };

  const renderSvg = (svgText: string) => {
    setError('');
    setPreviewUrl('');

    const trimmed = svgText.trim();
    if (!trimmed) {
      setError('Please paste SVG code or upload an SVG file.');
      return;
    }

    // Validate basic SVG structure
    if (!trimmed.toLowerCase().includes('<svg')) {
      setError('Invalid SVG: No <svg> tag found.');
      return;
    }

    // Extract width/height
    const sizeMatch = trimmed.match(/viewBox=["']([\d.]+)\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)["']/i);
    let width = 400;
    let height = 300;
    if (sizeMatch) {
      width = Math.round(parseFloat(sizeMatch[3]));
      height = Math.round(parseFloat(sizeMatch[4]));
      if (width > 2000) width = 2000;
      if (height > 2000) height = 2000;
    }

    const blob = new Blob([svgText], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);

    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = img.naturalWidth || width;
      canvas.height = img.naturalHeight || height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      setPreviewUrl(canvas.toDataURL('image/png'));
      URL.revokeObjectURL(url);
    };
    img.onerror = () => {
      setError('Failed to render SVG. Check the SVG code for errors.');
      URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  const handleRender = () => {
    renderSvg(svgInput);
  };

  const handleDownload = () => {
    if (!previewUrl) return;
    const a = document.createElement('a');
    a.href = previewUrl;
    a.download = `${fileName || 'image'}.png`;
    a.click();
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => fileInputRef.current?.click()}>
            Upload SVG File
          </Button>
          <span className="text-xs text-muted-foreground">or paste code below</span>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept=".svg"
          onChange={handleFileUpload}
          className="hidden"
        />
        <textarea
          placeholder={`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\n  <circle cx="50" cy="50" r="40" fill="red" />\n</svg>`}
          value={svgInput}
          onChange={(e) => setSvgInput(e.target.value)}
          className="w-full h-40 p-3 rounded-md border border-input bg-background text-sm font-mono focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      <Button onClick={handleRender} disabled={!svgInput.trim()}>
        Render to PNG
      </Button>

      {error && (
        <div className="p-3 rounded-md border border-red-300 bg-red-50 dark:bg-red-950/30 text-sm text-red-600 dark:text-red-400">
          {error}
        </div>
      )}

      <canvas ref={canvasRef} className="hidden" />

      {previewUrl && (
        <div className="space-y-3">
          <div className="flex justify-center p-4 rounded-lg border bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={previewUrl} alt="PNG Preview" className="max-w-full max-h-80" />
          </div>
          <div className="flex gap-2 justify-center">
            <Button variant="outline" size="sm" onClick={handleDownload}>
              Download PNG
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
