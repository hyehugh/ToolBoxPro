"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

const UNITS: { key: string; labelKey: string; toB: (v: number) => number; fromB: (v: number) => number }[] = [
  { key: "B", labelKey: "toolCommon.dataSize.bytes", toB: (v) => v, fromB: (v) => v },
  { key: "KB", labelKey: "toolCommon.dataSize.kb", toB: (v) => v * 1024, fromB: (v) => v / 1024 },
  { key: "MB", labelKey: "toolCommon.dataSize.mb", toB: (v) => v * 1024 * 1024, fromB: (v) => v / (1024 * 1024) },
  { key: "GB", labelKey: "toolCommon.dataSize.gb", toB: (v) => v * 1024 * 1024 * 1024, fromB: (v) => v / (1024 * 1024 * 1024) },
  { key: "TB", labelKey: "toolCommon.dataSize.tb", toB: (v) => v * 1024 * 1024 * 1024 * 1024, fromB: (v) => v / (1024 * 1024 * 1024 * 1024) },
];

export function DataSizeConverterTool() {
  const [input, setInput] = useState("");
  const [fromUnit, setFromUnit] = useState("MB");
  const [results, setResults] = useState<{ key: string; label: string; value: string }[]>([]);
  const { t } = useLocale();

  const convert = () => {
    const num = parseFloat(input);
    if (input === "" || isNaN(num)) { setResults([]); return; }
    const unitDef = UNITS.find((u) => u.key === fromUnit)!;
    const bValue = unitDef.toB(num);
    setResults(
      UNITS.filter((u) => u.key !== fromUnit).map((u) => ({
        key: u.key,
        label: u.labelKey,
        value: u.fromB(bValue).toFixed(4),
      }))
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          type="number"
          placeholder={`${t('common.value')}...`}
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
            <option key={u.key} value={u.key}>{t(u.labelKey)}</option>
          ))}
        </select>
        <Button onClick={convert}>{t('common.convert')}</Button>
      </div>
      {results.length > 0 && (
        <div className="space-y-2">
          {results.map((r) => (
            <div key={r.key} className="flex items-center gap-2 p-3 rounded-md border bg-card">
              <span className="text-xs text-muted-foreground w-36">{t(r.label)}</span>
              <span className="flex-1 font-mono text-sm">{r.value}</span>
              <Button variant="ghost" size="sm" onClick={() => navigator.clipboard.writeText(r.value)}>{t('common.copy')}</Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
