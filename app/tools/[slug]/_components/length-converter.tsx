"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

const UNITS: { key: string; labelKey: string; toM: (v: number) => number; fromM: (v: number) => number }[] = [
  { key: "m", labelKey: "toolCommon.length.m", toM: (v) => v, fromM: (v) => v },
  { key: "cm", labelKey: "toolCommon.length.cm", toM: (v) => v / 100, fromM: (v) => v * 100 },
  { key: "in", labelKey: "toolCommon.length.inches", toM: (v) => v * 0.0254, fromM: (v) => v / 0.0254 },
  { key: "ft", labelKey: "toolCommon.length.feet", toM: (v) => v * 0.3048, fromM: (v) => v / 0.3048 },
  { key: "km", labelKey: "toolCommon.length.km", toM: (v) => v * 1000, fromM: (v) => v / 1000 },
  { key: "mi", labelKey: "toolCommon.length.miles", toM: (v) => v * 1609.344, fromM: (v) => v / 1609.344 },
];

export function LengthConverterTool() {
  const { t } = useLocale();
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
        label: t(u.labelKey),
        value: u.fromM(mValue).toFixed(4),
      }))
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          type="number"
          placeholder={t('toolCommon.length.enterValue')}
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
              <span className="text-xs text-muted-foreground w-36">{r.label}</span>
              <span className="flex-1 font-mono text-sm">{r.value}</span>
              <Button variant="ghost" size="sm" onClick={() => navigator.clipboard.writeText(r.value)}>{t('common.copy')}</Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
