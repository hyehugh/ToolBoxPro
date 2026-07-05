"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

export function NumberBaseConverterTool() {
  const [input, setInput] = useState("");
  const [fromBase, setFromBase] = useState(10);
  const [results, setResults] = useState<{ base: number; label: string; value: string }[]>([]);
  const [error, setError] = useState("");
  const { t } = useLocale();

  const convert = () => {
    setError("");
    if (!input) { setResults([]); return; }
    const decimal = parseInt(input, fromBase);
    if (isNaN(decimal)) { setError("Invalid input for selected base"); setResults([]); return; }

    setResults([
      { base: 2, label: "Binary (Base 2)", value: decimal.toString(2) },
      { base: 8, label: "Octal (Base 8)", value: decimal.toString(8) },
      { base: 10, label: "Decimal (Base 10)", value: decimal.toString(10) },
      { base: 16, label: "Hexadecimal (Base 16)", value: decimal.toString(16).toUpperCase() },
    ]);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          placeholder={t('toolCommon.numberBase.placeholder')}
          value={input}
          onChange={(e) => { setInput(e.target.value); setError(""); }}
          className="flex-1 h-10 px-3 rounded-md border border-input bg-background font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
        <select
          value={fromBase}
          onChange={(e) => setFromBase(+e.target.value)}
          className="h-10 px-3 rounded-md border border-input bg-background text-sm"
        >
          <option value={2}>{t('toolCommon.numberBase.binary')}</option>
          <option value={8}>{t('toolCommon.numberBase.octal')}</option>
          <option value={10}>{t('toolCommon.numberBase.decimal')}</option>
          <option value={16}>{t('toolCommon.numberBase.hexadecimal')}</option>
        </select>
        <Button onClick={convert}>{t('common.convert')}</Button>
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
      {results.length > 0 && (
        <div className="space-y-2">
          {results.filter((r) => r.base !== fromBase).map((r) => (
            <div key={r.base} className="flex items-center gap-2 p-3 rounded-md border bg-card">
              <span className="text-xs text-muted-foreground w-32">{r.label}</span>
              <span className="flex-1 font-mono text-sm">{r.value}</span>
              <Button variant="ghost" size="sm" onClick={() => navigator.clipboard.writeText(r.value)}>{t('common.copy')}</Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
