'use client';

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { useLocale } from "@/lib/i18n/context";

export function RandomStringGeneratorTool() {
  const [length, setLength] = useState(16);
  const [includeLetters, setIncludeLetters] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [output, setOutput] = useState('');
  const { t, locale } = useLocale();
  const isZh = locale === "zh";

  const generate = useCallback(() => {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let chars = '';
    if (includeLetters) chars += letters;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;

    if (!chars) {
      setOutput(isZh ? "请至少选择一种字符类型" : 'Select at least one character type');
      return;
    }

    let result = '';
    const buf = new Uint32Array(length);
    crypto.getRandomValues(buf);
    for (let i = 0; i < length; i++) {
      result += chars.charAt(buf[i] % chars.length);
    }
    setOutput(result);
  }, [length, includeLetters, includeNumbers, includeSymbols]);

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">
          Length: {length}
        </label>
        <input
          type="range"
          min={1}
          max={128}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>1</span>
          <span>128</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={includeLetters}
            onChange={(e) => setIncludeLetters(e.target.checked)}
          />
          Letters (a-z, A-Z)
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
          Numbers (0-9)
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
          />
          Symbols (!@#$...)
        </label>
      </div>

      <Button onClick={generate}>{t('common.generate')}</Button>

      {output !== '' && (
        <div>
          <label className="block text-sm font-medium mb-1">Generated string</label>
          <div className="rounded-md border border-input bg-muted px-3 py-2 text-sm font-mono break-all select-all">
            {output}
          </div>
        </div>
      )}
    </div>
  );
}
