'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';

type SimType = 'protanopia' | 'deuteranopia' | 'tritanopia';

interface SimConfig {
  label: string;
  description: string;
  matrix: number[];
}

const SIMULATIONS: Record<SimType, SimConfig> = {
  protanopia: {
    label: 'Protanopia',
    description: 'Red-blind (L-cone deficiency) — difficulty perceiving red light',
    matrix: [
      0.56667, 0.43333, 0, 0, 0,
      0.55833, 0.44167, 0, 0, 0,
      0, 0.24167, 0.75833, 0, 0,
      0, 0, 0, 1, 0,
    ],
  },
  deuteranopia: {
    label: 'Deuteranopia',
    description: 'Green-blind (M-cone deficiency) — difficulty perceiving green light',
    matrix: [
      0.625, 0.375, 0, 0, 0,
      0.7, 0.3, 0, 0, 0,
      0, 0.3, 0.7, 0, 0,
      0, 0, 0, 1, 0,
    ],
  },
  tritanopia: {
    label: 'Tritanopia',
    description: 'Blue-blind (S-cone deficiency) — difficulty perceiving blue light',
    matrix: [
      0.95, 0.05, 0, 0, 0,
      0, 0.43333, 0.56667, 0, 0,
      0, 0.475, 0.525, 0, 0,
      0, 0, 0, 1, 0,
    ],
  },
};

function applyColorMatrix(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  matrix: number[]
) {
  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3];

    data[i] = Math.min(255, Math.max(0,
      r * matrix[0] + g * matrix[1] + b * matrix[2] + a * matrix[3] + matrix[4]
    ));
    data[i + 1] = Math.min(255, Math.max(0,
      r * matrix[5] + g * matrix[6] + b * matrix[7] + a * matrix[8] + matrix[9]
    ));
    data[i + 2] = Math.min(255, Math.max(0,
      r * matrix[10] + g * matrix[11] + b * matrix[12] + a * matrix[13] + matrix[14]
    ));
    // Alpha stays the same
  }

  ctx.putImageData(imageData, 0, 0);
}

export function ColorBlindnessSimulatorTool() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [simulatedUrls, setSimulatedUrls] = useState<Record<SimType, string | null>>({
    protanopia: null,
    deuteranopia: null,
    tritanopia: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const originalCanvasRef = useRef<HTMLCanvasElement>(null);
  const simCanvasRef = useRef<HTMLCanvasElement>(null);

  const processImage = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const dataUrl = await readFileAsDataURL(file);

      const img = new Image();
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error('Failed to load image'));
        img.src = dataUrl;
      });

      // Limit size
      const maxDim = 800;
      let w = img.naturalWidth;
      let h = img.naturalHeight;
      if (w > maxDim || h > maxDim) {
        const ratio = Math.min(maxDim / w, maxDim / h);
        w = Math.round(w * ratio);
        h = Math.round(h * ratio);
      }

      setImageSize({ width: w, height: h });
      setImageUrl(dataUrl);

      // Draw original on canvas
      const origCanvas = originalCanvasRef.current;
      if (origCanvas) {
        origCanvas.width = w;
        origCanvas.height = h;
        const ctx = origCanvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, w, h);
        }
      }

      // Generate each simulation
      const simCanvas = simCanvasRef.current;
      if (!simCanvas) {
        setLoading(false);
        return;
      }

      const results: Record<SimType, string | null> = {
        protanopia: null,
        deuteranopia: null,
        tritanopia: null,
      };

      for (const [type] of Object.entries(SIMULATIONS)) {
        const simType = type as SimType;
        simCanvas.width = w;
        simCanvas.height = h;
        const ctx = simCanvas.getContext('2d');
        if (!ctx) continue;

        ctx.drawImage(img, 0, 0, w, h);
        applyColorMatrix(ctx, w, h, SIMULATIONS[simType].matrix);
        results[simType] = simCanvas.toDataURL('image/png');
      }

      setSimulatedUrls(results);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to process image');
    } finally {
      setLoading(false);
    }
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
    if (file) processImage(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      processImage(file);
    }
  };

  const downloadSim = (type: SimType) => {
    const url = simulatedUrls[type];
    if (!url) return;
    const a = document.createElement('a');
    a.href = url;
    a.download = `${type}.png`;
    a.click();
  };

  return (
    <div className="space-y-4">
      {/* Upload area */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer"
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          className="hidden"
        />
        {loading ? (
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            <span className="text-sm text-muted-foreground">Processing image...</span>
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
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-sm text-muted-foreground">
              Upload an image to simulate color blindness
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Supports JPG, PNG, WebP
            </p>
          </div>
        )}
      </div>

      {/* Hidden canvases for processing */}
      <canvas ref={originalCanvasRef} className="hidden" />
      <canvas ref={simCanvasRef} className="hidden" />

      {error && (
        <div className="p-3 rounded-md border border-red-300 bg-red-50 dark:bg-red-950/30 text-sm text-red-600 dark:text-red-400">
          {error}
        </div>
      )}

      {imageUrl && !loading && (
        <div className="space-y-4">
          {/* Original image */}
          <div>
            <h3 className="text-sm font-medium mb-2">Original</h3>
            <div className="flex justify-center p-2 rounded-lg border bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl}
                alt="Original"
                className="max-w-full"
                style={{ maxHeight: 300 }}
              />
            </div>
            <div className="text-xs text-muted-foreground mt-1 text-center">
              {imageSize.width} × {imageSize.height}px
            </div>
          </div>

          {/* Simulated versions side by side */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {(Object.entries(SIMULATIONS) as [SimType, SimConfig][]).map(([type, config]) => (
              <div key={type} className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">{config.label}</h3>
                  {simulatedUrls[type] && (
                    <Button variant="ghost" size="sm" onClick={() => downloadSim(type)}>
                      Download
                    </Button>
                  )}
                </div>
                <div className="flex justify-center p-2 rounded-lg border bg-white min-h-[100px]">
                  {simulatedUrls[type] ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={simulatedUrls[type]!}
                      alt={config.label}
                      className="max-w-full"
                      style={{ maxHeight: 250 }}
                    />
                  ) : (
                    <div className="flex items-center text-xs text-muted-foreground">
                      Processing...
                    </div>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">{config.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {!imageUrl && !loading && (
        <div className="text-center text-sm text-muted-foreground py-8">
          Upload an image to see how it looks under different types of color blindness
        </div>
      )}
    </div>
  );
}
