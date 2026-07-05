"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

const UNITS: { key: string; labelKey: string; toKg: (v: number) => number; fromKg: (v: number) => number }[] = [
  { key: "kg", labelKey: "toolCommon.weight.kg", toKg: (v) => v, fromKg: (v) => v },
  { key: "g", labelKey: "toolCommon.weight.g", toKg: (v) => v / 1000, fromKg: (v) => v * 1000 },
  { key: "mg", labelKey: "toolCommon.weight.mg", toKg: (v) => v / 1000000, fromKg: (v) => v * 1000000 },
  { key: "ton", labelKey: "toolCommon.weight.ton", toKg: (v) => v * 1000, fromKg: (v) => v / 1000 },
  { key: "oz", labelKey: "toolCommon.weight.oz", toKg: (v) => v * 0.0283495, fromKg: (v) => v / 0.0283495 },
  { key: "lb", labelKey: "toolCommon.weight.lb", toKg: (v) => v * 0.453592, fromKg: (v) => v / 0.453592 },
  { key: "stone", labelKey: "toolCommon.weight.stone", toKg: (v) => v * 6.35029, fromKg: (v) => v / 6.35029 },
];

export function WeightConverterTool() {
  const { t } = useLocale();
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
        label: t(u.labelKey),
        value: u.fromKg(kgValue).toFixed(4),
      }))
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          type="number"
          placeholder={t('toolCommon.weight.placeholder')}
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
