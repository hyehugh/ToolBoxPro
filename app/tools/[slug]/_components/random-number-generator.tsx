"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function RandomNumberGeneratorTool() {
  const [min, setMin] = useState("1");
  const [max, setMax] = useState("100");
  const [result, setResult] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<number[]>([]);

  const generate = () => {
    const minNum = parseInt(min);
    const maxNum = parseInt(max);
    if (isNaN(minNum) || isNaN(maxNum) || minNum > maxNum) return;
    const rand = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    setResult(rand);
    setHistory((prev) => [rand, ...prev].slice(0, 50));
    setCopied(false);
  };

  const copyResult = async () => {
    if (result === null) return;
    await navigator.clipboard.writeText(String(result));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <div className="flex-1 space-y-1">
          <label className="text-xs text-muted-foreground">Min</label>
          <input
            type="number"
            value={min}
            onChange={(e) => setMin(e.target.value)}
            className="w-full h-10 px-3 rounded-md border border-input bg-background font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div className="flex-1 space-y-1">
          <label className="text-xs text-muted-foreground">Max</label>
          <input
            type="number"
            value={max}
            onChange={(e) => setMax(e.target.value)}
            className="w-full h-10 px-3 rounded-md border border-input bg-background font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div className="flex items-end">
          <Button onClick={generate}>Generate</Button>
        </div>
      </div>
      {result !== null && (
        <div className="space-y-3">
          <div className="flex items-center justify-between p-6 rounded-md border bg-card">
            <span className="text-4xl font-mono font-bold">{result}</span>
            <Button variant="outline" onClick={copyResult}>
              {copied ? "Copied!" : "Copy"}
            </Button>
          </div>
          {history.length > 1 && (
            <div className="space-y-1">
              <span className="text-xs text-muted-foreground">History (last 50)</span>
              <div className="flex flex-wrap gap-1">
                {history.map((n, i) => (
                  <span
                    key={`${n}-${i}`}
                    className="px-2 py-0.5 rounded bg-muted text-xs font-mono"
                  >
                    {n}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
