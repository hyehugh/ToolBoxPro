"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface PaletteColor {
  hex: string;
}

interface PaletteSet {
  label: string;
  colors: PaletteColor[];
}

export function ColorPaletteTool() {
  const [baseColor, setBaseColor] = useState("#6366f1");
  const [palettes, setPalettes] = useState<PaletteSet[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<{ p: number; c: number } | null>(null);

  const hexToHsl = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
      else if (max === g) h = ((b - r) / d + 2) / 6;
      else h = ((r - g) / d + 4) / 6;
    }
    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
  };

  const hslToHex = (h: number, s: number, l: number): string => {
    s /= 100; l /= 100;
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = l - c / 2;
    let r = 0, g = 0, b = 0;
    if (h < 60) { r = c; g = x; }
    else if (h < 120) { r = x; g = c; }
    else if (h < 180) { g = c; b = x; }
    else if (h < 240) { g = x; b = c; }
    else if (h < 300) { r = x; b = c; }
    else { r = c; b = x; }
    const toHex = (n: number) => Math.round((n + m) * 255).toString(16).padStart(2, "0");
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };

  const generatePalette = () => {
    const base = hexToHsl(baseColor);

    const mono: PaletteColor[] = [];
    for (let i = 0; i < 5; i++) {
      mono.push({ hex: hslToHex(base.h, base.s, Math.max(5, Math.min(95, base.l - 30 + i * 15))) });
    }

    const comp: PaletteColor[] = [
      { hex: baseColor },
      { hex: hslToHex((base.h + 180) % 360, base.s, base.l) },
      { hex: hslToHex(base.h, Math.max(5, base.s - 30), base.l + 10) },
      { hex: hslToHex((base.h + 180) % 360, base.s, base.l - 15) },
      { hex: hslToHex(base.h, base.s + 10, Math.max(5, base.l - 25)) },
    ];

    const analog: PaletteColor[] = [];
    for (let i = -2; i <= 2; i++) {
      analog.push({ hex: hslToHex((base.h + i * 30 + 360) % 360, base.s, base.l) });
    }

    const triad: PaletteColor[] = [
      { hex: baseColor },
      { hex: hslToHex((base.h + 120) % 360, base.s, base.l) },
      { hex: hslToHex((base.h + 240) % 360, base.s, base.l) },
      { hex: hslToHex(base.h, base.s, Math.max(5, base.l - 20)) },
      { hex: hslToHex(base.h, base.s - 20, base.l + 15) },
    ];

    setPalettes([
      { label: "Monochromatic", colors: mono },
      { label: "Complementary", colors: comp },
      { label: "Analogous", colors: analog },
      { label: "Triadic", colors: triad },
    ]);
  };

  const copyHex = (pIdx: number, cIdx: number, hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedIndex({ p: pIdx, c: cIdx });
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <label className="text-sm">Base Color:</label>
        <input
          type="color"
          value={baseColor}
          onChange={(e) => setBaseColor(e.target.value)}
          className="w-10 h-10 rounded cursor-pointer border border-input"
        />
        <span className="text-sm font-mono">{baseColor}</span>
        <Button onClick={generatePalette}>Generate Palette</Button>
      </div>

      {palettes.map((palette, pIdx) => (
        <div key={pIdx} className="space-y-2">
          <p className="text-sm font-medium">{palette.label}</p>
          <div className="flex gap-1 rounded-lg overflow-hidden h-12">
            {palette.colors.map((color, cIdx) => (
              <div
                key={cIdx}
                className="flex-1 flex items-center justify-center cursor-pointer relative group"
                style={{ backgroundColor: color.hex }}
                onClick={() => copyHex(pIdx, cIdx, color.hex)}
              >
                <span className="text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md"
                  style={{ color: "white", textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}>
                  {copiedIndex?.p === pIdx && copiedIndex?.c === cIdx ? "✓ Copied!" : color.hex}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
