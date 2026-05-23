"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const UNITS: { key: string; label: string; toKg: (v: number) => number; fromKg: (v: number) => number }[] = [
  { key: "kg", label: "Kilogram (kg)", toKg: (v) => v, fromKg: (v) => v },
  { key: "g", label: "Gram (g)", toKg: (v) => v / 1000, fromKg: (v) => v * 1000 },
  { key: "lb", label: "Pound (lb)", toKg: (v) => v * 0.453592, fromKg: (v) => v / 0.453592 },
  { key: "oz", label: "Ounce (oz)", toKg: (v) => v * 0.0283495, fromKg: (v) => v / 0.0283495 },
];

export function WeightConverterTool() {
  const [input, setInput] = useState("");
  const [fromUnit, setFromUnit] = useState("kg");
  const [results, setResults] = useState<{ key: string; label: string; value: string }[]>([]);

  const convert = () => {
    const num = parseFloat(input);
    if (input === "" || isNaN(num)) { setResults([]); return; }
    const unitDef = UNITS.find((u) => u.key === fromUnit)!;
    const kgValue = unitDef.toKg(num);
    setResults(
      UNITS.filter((u) => u.key !== fromUnit).map((u) => ({
        key: u.key,
        label: u.label,
        value: u.fromKg(kgValue).toFixed(4),
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
