"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type GradientType = "linear" | "radial";

const DIRECTIONS = [
  { label: "To Bottom", value: "to bottom" },
  { label: "To Top", value: "to top" },
  { label: "To Right", value: "to right" },
  { label: "To Left", value: "to left" },
  { label: "Top Right", value: "to top right" },
  { label: "Top Left", value: "to top left" },
  { label: "Bottom Right", value: "to bottom right" },
  { label: "Bottom Left", value: "to bottom left" },
];

export function CssGradientTool() {
  const [type, setType] = useState<GradientType>("linear");
  const [direction, setDirection] = useState("to bottom");
  const [color1, setColor1] = useState("#667eea");
  const [color2, setColor2] = useState("#764ba2");
  const [copied, setCopied] = useState(false);

  const cssCode =
    type === "linear"
      ? `background: linear-gradient(${direction}, ${color1}, ${color2});`
      : `background: radial-gradient(circle, ${color1}, ${color2});`;

  const previewStyle: React.CSSProperties = {
    background:
      type === "linear"
        ? `linear-gradient(${direction}, ${color1}, ${color2})`
        : `radial-gradient(circle, ${color1}, ${color2})`,
    borderRadius: "0.5rem",
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cssCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
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
      {/* Gradient type */}
      <div className="flex gap-2">
        <Button
          variant={type === "linear" ? "default" : "outline"}
          size="sm"
          onClick={() => setType("linear")}
        >
          Linear
        </Button>
        <Button
          variant={type === "radial" ? "default" : "outline"}
          size="sm"
          onClick={() => setType("radial")}
        >
          Radial
        </Button>
      </div>

      {/* Direction (linear only) */}
      {type === "linear" && (
        <div>
          <label className="text-sm text-muted-foreground block mb-1">
            Direction
          </label>
          <div className="flex flex-wrap gap-1">
            {DIRECTIONS.map((d) => (
              <Button
                key={d.value}
                variant={direction === d.value ? "default" : "outline"}
                size="sm"
                onClick={() => setDirection(d.value)}
              >
                {d.label}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Color pickers */}
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="text-sm text-muted-foreground block mb-1">
            Color 1
          </label>
          <input
            type="color"
            value={color1}
            onChange={(e) => setColor1(e.target.value)}
            className="w-full h-10 rounded cursor-pointer"
          />
        </div>
        <div className="flex-1">
          <label className="text-sm text-muted-foreground block mb-1">
            Color 2
          </label>
          <input
            type="color"
            value={color2}
            onChange={(e) => setColor2(e.target.value)}
            className="w-full h-10 rounded cursor-pointer"
          />
        </div>
      </div>

      {/* Live preview */}
      <div>
        <label className="text-sm text-muted-foreground block mb-1">
          Preview
        </label>
        <div className="w-full h-40 border rounded-lg" style={previewStyle} />
      </div>

      {/* CSS code + copy */}
      <div className="space-y-2">
        <label className="text-sm text-muted-foreground block">CSS Code</label>
        <pre className="bg-muted p-3 rounded-lg text-sm overflow-x-auto">
          <code>{cssCode}</code>
        </pre>
        <Button onClick={handleCopy} className="w-full">
          {copied ? "Copied!" : "Copy CSS Code"}
        </Button>
      </div>
    </div>
  );
}
