"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const UNITS: { key: string; label: string; toKmh: (v: number) => number; fromKmh: (v: number) => number }[] = [
  { key: "kmh", label: "Kilometers/hour (km/h)", toKmh: (v) => v, fromKmh: (v) => v },
  { key: "mph", label: "Miles/hour (mph)", toKmh: (v) => v * 1.60934, fromKmh: (v) => v / 1.60934 },
  { key: "knots", label: "Knots", toKmh: (v) => v * 1.852, fromKmh: (v) => v / 1.852 },
  { key: "mps", label: "Meters/second (m/s)", toKmh: (v) => v * 3.6, fromKmh: (v) => v / 3.6 },
];

export function SpeedConverterTool() {
  const [input, setInput] = useState("");
  const [fromUnit, setFromUnit] = useState("kmh");
  const [results, setResults] = useState<{ key: string; label: string; value: string }[]>([]);

  const convert = () => {
    const num = parseFloat(input);
    if (input === "" || isNaN(num)) { setResults([]); return; }
    const unitDef = UNITS.find((u) => u.key === fromUnit)!;
    const kmhValue = unitDef.toKmh(num);
    setResults(
      UNITS.filter((u) => u.key !== fromUnit).map((u) => ({
        key: u.key,
        label: u.label,
        value: u.fromKmh(kmhValue).toFixed(4),
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
