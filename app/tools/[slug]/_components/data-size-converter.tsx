"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const UNITS: { key: string; label: string; toB: (v: number) => number; fromB: (v: number) => number }[] = [
  { key: "B", label: "Byte (B)", toB: (v) => v, fromB: (v) => v },
  { key: "KB", label: "Kilobyte (KB)", toB: (v) => v * 1024, fromB: (v) => v / 1024 },
  { key: "MB", label: "Megabyte (MB)", toB: (v) => v * 1024 * 1024, fromB: (v) => v / (1024 * 1024) },
  { key: "GB", label: "Gigabyte (GB)", toB: (v) => v * 1024 * 1024 * 1024, fromB: (v) => v / (1024 * 1024 * 1024) },
  { key: "TB", label: "Terabyte (TB)", toB: (v) => v * 1024 * 1024 * 1024 * 1024, fromB: (v) => v / (1024 * 1024 * 1024 * 1024) },
];

export function DataSizeConverterTool() {
  const [input, setInput] = useState("");
  const [fromUnit, setFromUnit] = useState("MB");
  const [results, setResults] = useState<{ key: string; label: string; value: string }[]>([]);

  const convert = () => {
    const num = parseFloat(input);
    if (input === "" || isNaN(num)) { setResults([]); return; }
    const unitDef = UNITS.find((u) => u.key === fromUnit)!;
    const bValue = unitDef.toB(num);
    setResults(
      UNITS.filter((u) => u.key !== fromUnit).map((u) => ({
        key: u.key,
        label: u.label,
        value: u.fromB(bValue).toFixed(4),
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
