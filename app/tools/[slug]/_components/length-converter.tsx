"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const UNITS: { key: string; label: string; toM: (v: number) => number; fromM: (v: number) => number }[] = [
  { key: "m", label: "Meter (m)", toM: (v) => v, fromM: (v) => v },
  { key: "cm", label: "Centimeter (cm)", toM: (v) => v / 100, fromM: (v) => v * 100 },
  { key: "in", label: "Inch (in)", toM: (v) => v * 0.0254, fromM: (v) => v / 0.0254 },
  { key: "ft", label: "Foot (ft)", toM: (v) => v * 0.3048, fromM: (v) => v / 0.3048 },
  { key: "km", label: "Kilometer (km)", toM: (v) => v * 1000, fromM: (v) => v / 1000 },
  { key: "mi", label: "Mile (mi)", toM: (v) => v * 1609.344, fromM: (v) => v / 1609.344 },
];

export function LengthConverterTool() {
  const [input, setInput] = useState("");
  const [fromUnit, setFromUnit] = useState("m");
  const [results, setResults] = useState<{ key: string; label: string; value: string }[]>([]);

  const convert = () => {
    const num = parseFloat(input);
    if (input === "" || isNaN(num)) { setResults([]); return; }
    const unitDef = UNITS.find((u) => u.key === fromUnit)!;
    const mValue = unitDef.toM(num);
    setResults(
      UNITS.filter((u) => u.key !== fromUnit).map((u) => ({
        key: u.key,
        label: u.label,
        value: u.fromM(mValue).toFixed(4),
      }))
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          type="number"
          placeholder="Enter a value..."
          value={input}
          onChange={(e) => { setInput(e.target.value); setResults([]); }}
          className="flex-1 h-10 px-3 rounded-md border border-input bg-background font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
        <select
          value={fromUnit}
          onChange={(e) => { setFromUnit(e.target.value); setResults([]); }}
          className="h-10 px-3 rounded-md border border-input bg-background text-sm"
        >
          {UNITS.map((u) => (
            <option key={u.key} value={u.key}>{u.label}</option>
          ))}
        </select>
        <Button onClick={convert}>Convert</Button>
      </div>
      {results.length > 0 && (
        <div className="space-y-2">
          {results.map((r) => (
            <div key={r.key} className="flex items-center gap-2 p-3 rounded-md border bg-card">
              <span className="text-xs text-muted-foreground w-36">{r.label}</span>
              <span className="flex-1 font-mono text-sm">{r.value}</span>
              <Button variant="ghost" size="sm" onClick={() => navigator.clipboard.writeText(r.value)}>Copy</Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
