"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

const UNITS: { key: string; labelKey: string; toSqm: (v: number) => number; fromSqm: (v: number) => number }[] = [
  { key: "sqm", labelKey: "toolCommon.area.sqm", toSqm: (v) => v, fromSqm: (v) => v },
  { key: "sqft", labelKey: "toolCommon.area.sqft", toSqm: (v) => v * 0.092903, fromSqm: (v) => v / 0.092903 },
  { key: "acre", labelKey: "toolCommon.area.acres", toSqm: (v) => v * 4046.86, fromSqm: (v) => v / 4046.86 },
  { key: "hectare", labelKey: "toolCommon.area.hectares", toSqm: (v) => v * 10000, fromSqm: (v) => v / 10000 },
];

export function AreaConverterTool() {
  const [input, setInput] = useState("");
  const [fromUnit, setFromUnit] = useState("sqm");
  const [results, setResults] = useState<{ key: string; label: string; value: string }[]>([]);
  const { t } = useLocale();

  const convert = () => {
    const num = parseFloat(input);
    if (input === "" || isNaN(num)) { setResults([]); return; }
    const unitDef = UNITS.find((u) => u.key === fromUnit)!;
    const sqmValue = unitDef.toSqm(num);
    setResults(
      UNITS.filter((u) => u.key !== fromUnit).map((u) => ({
        key: u.key,
        label: t(u.labelKey),
        value: u.fromSqm(sqmValue).toFixed(4),
      }))
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          type="number"
          placeholder={t('common.value')}
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
