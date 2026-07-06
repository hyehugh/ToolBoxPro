"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

export function CssShadowTool() {
  const [offsetX, setOffsetX] = useState(2);
  const [offsetY, setOffsetY] = useState(2);
  const [blur, setBlur] = useState(6);
  const [spread, setSpread] = useState(0);
  const [color, setColor] = useState("#000000");
  const [opacity, setOpacity] = useState(0.3);
  const { t } = useLocale();

  const rgbaColor = hexToRgba(color, opacity);

  const cssCode = `box-shadow: ${offsetX}px ${offsetY}px ${blur}px ${spread}px ${rgbaColor};`;

  const previewCardStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: 360,
    height: 225,
    borderRadius: "0.5rem",
    background: "#ffffff",
    border: "1px solid #e5e7eb",
    boxShadow: `${offsetX}px ${offsetY}px ${blur}px ${spread}px ${rgbaColor}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.875rem",
    color: "#6b7280",
    margin: "0 auto",
  };

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cssCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = cssCode;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-4">
      {/* Live preview */}
      <div>
        <label className="text-sm text-muted-foreground block mb-1">
          {t("toolCommon.color.preview")}
        </label>
        <div
          className="rounded-lg border bg-muted/60"
          style={{ padding: "1.25rem", overflow: "visible" }}
        >
          <div style={previewCardStyle}>{t("toolCommon.color.preview")}</div>
        </div>
      </div>

      {/* Sliders */}
      <SliderControl
        label={t("toolCommon.css.shadowOffsetX") || "Offset X"}
        value={offsetX}
        min={-50}
        max={50}
        onChange={setOffsetX}
      />
      <SliderControl
        label={t("toolCommon.css.shadowOffsetY") || "Offset Y"}
        value={offsetY}
        min={-50}
        max={50}
        onChange={setOffsetY}
      />
      <SliderControl
        label={t("toolCommon.css.shadowBlur") || "Blur"}
        value={blur}
        min={0}
        max={100}
        onChange={setBlur}
      />
      <SliderControl
        label={t("toolCommon.css.shadowSpread") || "Spread"}
        value={spread}
        min={-50}
        max={50}
        onChange={setSpread}
      />

      {/* Color picker */}
      <div>
        <label className="text-sm text-muted-foreground block mb-1">
          {t("toolCommon.color.hex")}
        </label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-full h-10 rounded cursor-pointer"
        />
      </div>

      {/* Opacity slider */}
      <SliderControl
        label={`${t("common.strength")} (${Math.round(opacity * 100)}%)`}
        value={opacity}
        min={0}
        max={1}
        step={0.01}
        onChange={setOpacity}
      />

      {/* CSS code */}
      <div className="space-y-2">
        <label className="text-sm text-muted-foreground block">
          {t("common.result")}
        </label>
        <pre className="bg-muted p-3 rounded-lg text-sm overflow-x-auto">
          <code>{cssCode}</code>
        </pre>
        <Button onClick={handleCopy} className="w-full">
          {copied ? t("common.copied") || "Copied!" : t("common.copy")}
        </Button>
      </div>
    </div>
  );
}

function SliderControl({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <label className="text-sm text-muted-foreground block mb-1">
        {label}: <span className="font-mono font-medium">{value}</span>
      </label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full"
      />
    </div>
  );
}

function hexToRgba(hex: string, opacity: number): string {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
