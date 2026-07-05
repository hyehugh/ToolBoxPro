"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

export function UuidGeneratorTool() {
  const { t } = useLocale();
  const [count, setCount] = useState(1);
  const [uuids, setUuids] = useState<string[]>([]);
  const [uppercase, setUppercase] = useState(false);

  const generate = () => {
    const result: string[] = [];
    for (let i = 0; i < count; i++) {
      const hex = "0123456789abcdef";
      // Cryptographically secure randomness (RFC 4122 v4 requirement).
      const s = (n: number) => {
        const buf = new Uint8Array(n);
        crypto.getRandomValues(buf);
        let out = "";
        for (let j = 0; j < n; j++) out += hex[buf[j] % 16];
        return out;
      };
      // RFC 4122 §4.4: set version (4) and variant (8/9/a/b) bits.
      const variantBuf = new Uint8Array(1);
      crypto.getRandomValues(variantBuf);
      let uuid = `${s(8)}-${s(4)}-4${s(3)}-${(8 + (variantBuf[0] % 4)).toString(16)}${s(3)}-${s(12)}`;
      if (uppercase) uuid = uuid.toUpperCase();
      result.push(uuid);
    }
    setUuids(result);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <label className="text-sm">{t('toolCommon.uuid.count')}: {count}</label>
        <input type="range" min={1} max={100} value={count} onChange={(e) => setCount(+e.target.value)} className="flex-1" />
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={uppercase} onChange={(e) => setUppercase(e.target.checked)} />
          Uppercase
        </label>
      </div>
      <Button onClick={generate}>{t('toolCommon.uuid.generate')}</Button>
      {uuids.length > 0 && (
        <div className="space-y-2">
          {uuids.map((uuid, i) => (
            <div key={i} className="flex items-center gap-2 p-2 rounded-md bg-muted font-mono text-sm">
              <span className="flex-1">{uuid}</span>
              <Button variant="ghost" size="sm" onClick={() => navigator.clipboard.writeText(uuid)}>{t('common.copy')}</Button>
            </div>
          ))}
          <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(uuids.join("\n"))}>
            {t('common.copy')} {t('common.all')}
          </Button>
        </div>
      )}
    </div>
  );
}
