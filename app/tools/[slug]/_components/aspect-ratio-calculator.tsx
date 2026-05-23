'use client';

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';

interface Preset {
  label: string;
  width: number;
  height: number;
}

const PRESETS: Preset[] = [
  { label: '16:9', width: 16, height: 9 },
  { label: '4:3', width: 4, height: 3 },
  { label: '1:1', width: 1, height: 1 },
  { label: '21:9', width: 21, height: 9 },
  { label: '3:2', width: 3, height: 2 },
  { label: '16:10', width: 16, height: 10 },
  { label: '9:16', width: 9, height: 16 },
  { label: '5:4', width: 5, height: 4 },
];

type CalcMode = 'wh' | 'ratio';

export function AspectRatioCalculatorTool() {
  const [mode, setMode] = useState<CalcMode>('wh');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [ratioW, setRatioW] = useState('16');
  const [ratioH, setRatioH] = useState('9');
  const [resultWidth, setResultWidth] = useState<number | null>(null);
  const [resultHeight, setResultHeight] = useState<number | null>(null);

  const gcd = (a: number, b: number): number => {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) { [a, b] = [b, a % b]; }
    return a;
  };

  const simplifiedRatio = useMemo(() => {
    if (resultWidth && resultHeight) {
      const g = gcd(resultWidth, resultHeight);
      const sw = resultWidth / g;
      const sh = resultHeight / g;
      return `${sw}:${sh}`;
    }
    return null;
  }, [resultWidth, resultHeight]);

  const calculate = () => {
    if (mode === 'wh') {
      const w = parseFloat(width);
      const h = parseFloat(height);
      if (w > 0 && h > 0) {
        setResultWidth(w);
        setResultHeight(h);
      }
    } else {
      const rw = parseFloat(ratioW);
      const rh = parseFloat(ratioH);
      if (rw > 0 && rh > 0) {
        if (width && parseFloat(width) > 0) {
          const w = parseFloat(width);
          const h = Math.round((w / rw) * rh);
          setResultWidth(w);
          setResultHeight(h);
        } else if (height && parseFloat(height) > 0) {
          const h = parseFloat(height);
          const w = Math.round((h / rh) * rw);
          setResultWidth(w);
          setResultHeight(h);
        }
      }
    }
  };

  const applyPreset = (preset: Preset) => {
    setRatioW(preset.width.toString());
    setRatioH(preset.height.toString());
    setMode('ratio');
    if (width && parseFloat(width) > 0) {
      const w = parseFloat(width);
      const h = Math.round((w / preset.width) * preset.height);
      setResultWidth(w);
      setResultHeight(h);
    } else if (height && parseFloat(height) > 0) {
      const h = parseFloat(height);
      const w = Math.round((h / preset.height) * preset.width);
      setResultWidth(w);
      setResultHeight(h);
    }
  };

  const canCalculate = mode === 'wh'
    ? parseFloat(width) > 0 && parseFloat(height) > 0
    : (parseFloat(width) > 0 || parseFloat(height) > 0) && parseFloat(ratioW) > 0 && parseFloat(ratioH) > 0;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Button
          variant={mode === 'wh' ? 'default' : 'outline'}
          size="sm"
          onClick={() => { setMode('wh'); setResultWidth(null); setResultHeight(null); }}
        >
          W × H
        </Button>
        <Button
          variant={mode === 'ratio' ? 'default' : 'outline'}
          size="sm"
          onClick={() => { setMode('ratio'); setResultWidth(null); setResultHeight(null); }}
        >
          Ratio + Value
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-xs text-muted-foreground">Width (px)</label>
          <input
            type="number"
            min="1"
            value={width}
            onChange={(e) => { setWidth(e.target.value); setResultWidth(null); setResultHeight(null); }}
            placeholder="e.g. 1920"
            className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs text-muted-foreground">Height (px)</label>
          <input
            type="number"
            min="1"
            value={height}
            onChange={(e) => { setHeight(e.target.value); setResultWidth(null); setResultHeight(null); }}
            placeholder="e.g. 1080"
            className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      {mode === 'ratio' && (
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs text-muted-foreground">Ratio Width</label>
            <input
              type="number"
              min="1"
              value={ratioW}
              onChange={(e) => { setRatioW(e.target.value); setResultWidth(null); setResultHeight(null); }}
              className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs text-muted-foreground">Ratio Height</label>
            <input
              type="number"
              min="1"
              value={ratioH}
              onChange={(e) => { setRatioH(e.target.value); setResultWidth(null); setResultHeight(null); }}
              className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>
      )}

      {mode === 'ratio' && (
        <div>
          <label className="text-xs text-muted-foreground mb-1 block">Common Presets</label>
          <div className="flex flex-wrap gap-1.5">
            {PRESETS.map((preset) => (
              <Button
                key={preset.label}
                variant="outline"
                size="sm"
                onClick={() => applyPreset(preset)}
              >
                {preset.label}
              </Button>
            ))}
          </div>
        </div>
      )}

      <Button onClick={calculate} disabled={!canCalculate}>
        Calculate
      </Button>

      {resultWidth !== null && resultHeight !== null && (
        <div className="rounded-md border bg-card p-4 space-y-3">
          <h3 className="text-sm font-medium">Result</h3>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-3xl font-mono font-bold">{resultWidth}</div>
              <div className="text-xs text-muted-foreground">Width (px)</div>
            </div>
            <div>
              <div className="text-3xl font-mono font-bold">{resultHeight}</div>
              <div className="text-xs text-muted-foreground">Height (px)</div>
            </div>
          </div>
          <div className="text-center">
            <span className="text-lg font-semibold">{simplifiedRatio}</span>
            <span className="text-xs text-muted-foreground ml-2">aspect ratio</span>
          </div>
          <div className="text-center text-xs text-muted-foreground">
            Resolution: {resultWidth} × {resultHeight} = {(resultWidth * resultHeight).toLocaleString()} px²
            {resultWidth >= 3840 && resultHeight >= 2160 && ' (4K)'}
            {resultWidth >= 1920 && resultHeight >= 1080 && resultWidth < 3840 && ' (Full HD)'}
            {resultWidth >= 1280 && resultHeight >= 720 && resultWidth < 1920 && ' (HD)'}
            {resultWidth >= 2560 && resultHeight >= 1440 && resultWidth < 3840 && ' (2K/QHD)'}
          </div>
        </div>
      )}
    </div>
  );
}
