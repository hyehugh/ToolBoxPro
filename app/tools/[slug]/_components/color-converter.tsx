"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

function parseColor(input: string): { r: number; g: number; b: number } | null {
  input = input.trim();

  // HEX
  const hex = input.match(/^#?([\da-f]{6})$/i);
  if (hex) {
    const n = parseInt(hex[1], 16);
    return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
  }
  const hex3 = input.match(/^#?([\da-f]{3})$/i);
  if (hex3) {
    const n = hex3[1];
    return {
      r: parseInt(n[0] + n[0], 16),
      g: parseInt(n[1] + n[1], 16),
      b: parseInt(n[2] + n[2], 16),
    };
  }

  // RGB
  const rgb = input.match(/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i);
  if (rgb) return { r: +rgb[1], g: +rgb[2], b: +rgb[3] };

  // HSL
  const hsl = input.match(/hsl\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)/i);
  if (hsl) {
    let h = +hsl[1] / 360, s = +hsl[2] / 100, l = +hsl[3] / 100;
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h * 6) % 2 - 1));
    const m = l - c / 2;
    let r = 0, g = 0, b = 0;
    if (h < 1/6) { r = c; g = x; }
    else if (h < 2/6) { r = x; g = c; }
    else if (h < 3/6) { g = c; b = x; }
    else if (h < 4/6) { g = x; b = c; }
    else if (h < 5/6) { r = x; b = c; }
    else { r = c; b = x; }
    return { r: Math.round((r + m) * 255), g: Math.round((g + m) * 255), b: Math.round((b + m) * 255) };
  }

  return null;
}

function toHex(r: number, g: number, b: number) {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

function toRgb(r: number, g: number, b: number) {
  return `rgb(${r}, ${g}, ${b})`;
}

function toHsl(r: number, g: number, b: number) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
    else if (max === g) h = ((b - r) / d + 2) / 6;
    else h = ((r - g) / d + 4) / 6;
  }
  return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
}

function contrastRatio(r: number, g: number, b: number): number {
  const lum = (r: number) => {
    const sr = r / 255;
    return sr <= 0.03928 ? sr / 12.92 : Math.pow((sr + 0.055) / 1.055, 2.4);
  };
  const l1 = 0.2126 * lum(r) + 0.7152 * lum(g) + 0.0722 * lum(b);
  const l2 = 0.2126 * lum(255) + 0.7152 * lum(255) + 0.0722 * lum(255);
  const lighter = Math.max(l1, l2), darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

export function ColorConverterTool() {
  const [input, setInput] = useState("#2563eb");
  const [color, setColor] = useState<{ r: number; g: number; b: number } | null>({ r: 37, g: 99, b: 235 });
  const [error, setError] = useState("");
  const { t } = useLocale();

  const handleInput = (val: string) => {
    setInput(val);
    setError("");
    const parsed = parseColor(val);
    if (parsed) setColor(parsed);
    else setError(t('common.colorInvalid') || "Invalid color format");
  };

  return (
    <div className="space-y-4">
      <input
        placeholder={`${t('common.input')} (HEX, RGB, HSL)...`}
        value={input}
        onChange={(e) => handleInput(e.target.value)}
        className="w-full h-10 px-3 rounded-md border border-input bg-background font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
      {color && (
        <div className="space-y-4">
          <div
            className="w-full h-24 rounded-lg border"
            style={{ backgroundColor: toHex(color.r, color.g, color.b) }}
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { label: t('toolCommon.color.hex'), value: toHex(color.r, color.g, color.b) },
              { label: t('toolCommon.color.rgb'), value: toRgb(color.r, color.g, color.b) },
              { label: t('toolCommon.color.hsl'), value: toHsl(color.r, color.g, color.b) },
            ].map(({ label, value }) => (
              <div key={label} className="p-3 rounded-md border bg-card">
                <p className="text-xs text-muted-foreground mb-1">{label}</p>
                <p className="font-mono text-sm">{value}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-1 h-6 text-xs"
                  onClick={() => navigator.clipboard.writeText(value)}
                >
                  {t('common.copy')}
                </Button>
              </div>
            ))}
          </div>
          <div className="text-sm text-muted-foreground">
            {t('toolCommon.color.contrast') || 'Contrast ratio'}: {contrastRatio(color.r, color.g, color.b).toFixed(2)}:1
            (against white)
          </div>
        </div>
      )}
    </div>
  );
}
