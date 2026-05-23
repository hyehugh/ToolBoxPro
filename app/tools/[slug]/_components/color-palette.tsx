"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface PaletteColor {
  hex: string;
  label: string;
}

export function ColorPaletteTool() {
  const [baseColor, setBaseColor] = useState("#6366f1");
  const [palettes, setPalettes] = useState<PaletteColor[][]>([]);
  const [copiedIndex, setCopiedIndex] = useState<{ p: number; c: number } | null>(null);

  const generatePalettes = () => {
    const base = hexToHsl(baseColor);
    const mono = generateMono(base);
    const comp = generateComplementary(base);
    const analog = generateAnalogous(base);
    const triad = generateTriadic(base);
    setPalettes([
      { label: "Monochromatic", colors: mono },
      { label: "Complementary", colors: comp },
      { label: "Analogous", colors: analog },
      { label: "Triadic", colors: triad },
    ]);
  };

  const copyColor = async (hex: string, p: number, c: number) => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopiedIndex({ p, c });
      setTimeout(() => setCopiedIndex(null), 1500);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = hex;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopiedIndex({ p, c });
      setTimeout(() => setCopiedIndex(null), 1500);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm text-muted-foreground block mb-1">
          Base Color
        </label>
        <div className="flex gap-3 items-center">
          <input
            type="color"
            value={baseColor}
            onChange={(e) => setBaseColor(e.target.value)}
            className="w-16 h-10 rounded cursor-pointer"
          />
          <input
            type="text"
            value={baseColor}
            onChange={(e) => setBaseColor(e.target.value)}
            className="flex-1 p-2 border rounded bg-background text-sm font-mono"
            placeholder="#6366f1"
          />
          <Button onClick={generatePalettes}>Generate Palette</Button>
        </div>
      </div>

      {palettes.length > 0 && (
        <div className="space-y-6">
          {palettes.map((palette, pIdx) => (
            <div key={palette.label}>
              <h3 className="text-sm font-medium mb-2">{palette.label}</h3>
              <div className="flex gap-2">
                {palette.colors.map((color, cIdx) => (
                  <div
                    key={cIdx}
                    className="flex-1 flex flex-col items-center gap-1"
                  >
                    <div
                      className="w-full h-16 rounded-lg border cursor-pointer transition-transform hover:scale-105"
                      style={{ backgroundColor: color.hex }}
                      onClick={() => copyColor(color.hex, pIdx, cIdx)}
                      title="Click to copy"
                    />
                    <span className="text-xs font-mono text-muted-foreground">
                      {copiedIndex?.p === pIdx && copiedIndex?.c === cIdx
                        ? "Copied!"
                        : color.hex}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ---- Color conversion helpers ----

function hexToHsl(hex: string): { h: number; s: number; l: number } {
  let r = 0, g = 0, b = 0;
  const clean = hex.replace("#", "");
  if (clean.length === 3) {
    r = parseInt(clean[0] + clean[0], 16);
    g = parseInt(clean[1] + clean[1], 16);
    b = parseInt(clean[2] + clean[2], 16);
  } else {
    r = parseInt(clean.substring(0, 2), 16);
    g = parseInt(clean.substring(2, 4), 16);
    b = parseInt(clean.substring(4, 6), 16);
  }

  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }

  return { h: h * 360, s: s * 100, l: l * 100 };
}

function hslToHex(h: number, s: number, l: number): string {
  h = ((h % 360) + 360) % 360;
  s = Math.max(0, Math.min(100, s));
  l = Math.max(0, Math.min(100, l));

  const sNorm = s / 100;
  const lNorm = l / 100;

  const c = (1 - Math.abs(2 * lNorm - 1)) * sNorm;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = lNorm - c / 2;

  let r = 0, g = 0, b = 0;
  if (h < 60) { r = c; g = x; b = 0; }
  else if (h < 120) { r = x; g = c; b = 0; }
  else if (h < 180) { r = 0; g = c; b = x; }
  else if (h < 240) { r = 0; g = x; b = c; }
  else if (h < 300) { r = x; g = 0; b = c; }
  else { r = c; g = 0; b = x; }

  const toHex = (v: number) =>
    Math.round((v + m) * 255)
      .toString(16)
      .padStart(2, "0");

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// ---- Palette generators ----

function generateMono(base: { h: number; s: number; l: number }): PaletteColor[] {
  const lightnesses = [15, 35, 50, 65, 85];
  return lightnesses.map((l, i) => ({
    hex: hslToHex(base.h, base.s, l),
    label: `Light ${i + 1}`,
  }));
}

function generateComplementary(base: { h: number; s: number; l: number }): PaletteColor[] {
  const compH = (base.h + 180) % 360;
  const shades = [
    { l: 40, s: Math.min(100, base.s + 10) },
    { l: base.l, s: base.s },
    { l: compH === base.h ? 50 : 45, s: Math.min(100, base.s + 5) },
    { l: 35, s: Math.min(100, base.s + 15) },
    { l: 65, s: Math.max(0, base.s - 10) },
  ];

  return shades.map((sh, i) => ({
    hex: i === 1
      ? hslToHex(base.h, base.s, base.l)
      : i === 2
        ? hslToHex(compH, sh.s, sh.l)
        : hslToHex(i % 2 === 0 ? base.h : compH, sh.s, sh.l),
    label: i === 0 ? "Base Dark" : i === 1 ? "Base" : i === 2 ? "Complement" : `Shade ${i}`,
  }));
}

function generateAnalogous(base: { h: number; s: number; l: number }): PaletteColor[] {
  const offsets = [-60, -30, 0, 30, 60];
  return offsets.map((off, i) => ({
    hex: hslToHex(base.h + off, base.s, i === 2 ? base.l : base.l + (i < 2 ? 10 - i * 10 : (i - 2) * 10)),
    label: `Analog ${i + 1}`,
  }));
}

function generateTriadic(base: { h: number; s: number; l: number }): PaletteColor[] {
  const angles = [0, 120, 240];
  return angles.flatMap((angle, ai) => {
    const h = (base.h + angle) % 360;
    return [
      { hex: hslToHex(h, base.s, base.l), label: `Triad ${ai * 2 + 1}` },
      { hex: hslToHex(h, Math.min(100, base.s + 10), Math.max(10, base.l - 15)), label: `Triad ${ai * 2 + 2}` },
    ];
  }).slice(0, 5);
}
