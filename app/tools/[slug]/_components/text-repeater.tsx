"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

export function TextRepeaterTool() {
  const { t } = useLocale();
  const [text, setText] = useState("");
  const [count, setCount] = useState(5);
  const [separator, setSeparator] = useState("\n");
  const [output, setOutput] = useState("");

  const repeat = () => {
    if (!text) { setOutput(""); return; }
    const parts: string[] = [];
    for (let i = 0; i < count; i++) parts.push(text);
    setOutput(parts.join(separator));
  };

  return (
    <div className="space-y-4">
      <textarea
        placeholder={t('common.text')}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full h-24 p-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <div className="flex flex-wrap items-center gap-3">
        <label className="text-sm">
          {t('toolCommon.textRepeater.repeatCount')}: <span className="font-bold">{count}</span>
        </label>
        <input type="range" min={1} max={100} value={count} onChange={(e) => setCount(+e.target.value)} className="w-32" />
        <select
          value={separator}
          onChange={(e) => setSeparator(e.target.value)}
          className="h-9 px-2 rounded-md border border-input bg-background text-sm"
        >
          <option value="\n">{t('toolCommon.textRepeater.newLine')}</option>
          <option value=",">{t('toolCommon.textRepeater.comma')}</option>
          <option value=", ">{t('toolCommon.textRepeater.commaSpace')}</option>
          <option value=" ">{t('toolCommon.textRepeater.space')}</option>
          <option value="">{t('toolCommon.textRepeater.none')}</option>
        </select>
        <Button onClick={repeat}>{t('toolCommon.textRepeater.repeat')}</Button>
      </div>
      {output && (
        <div className="space-y-2">
          <textarea readOnly value={output} className="w-full h-32 p-3 rounded-md border border-input bg-muted font-mono text-sm" />
          <div className="flex gap-2">
            <span className="text-xs text-muted-foreground self-center">
              {output.length} chars, {output.split(separator === "\n" ? "\n" : separator).length} lines
            </span>
            <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(output)}>{t('common.copy')}</Button>
          </div>
        </div>
      )}
    </div>
  );
}
