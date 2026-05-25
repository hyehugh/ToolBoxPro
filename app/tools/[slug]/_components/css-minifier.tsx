"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

export function CssMinifierTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const { t } = useLocale();

  const minify = () => {
    const minified = input
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/\/\/.*$/gm, "")
      .replace(/\s*([{}:;,])\s*/g, "$1")
      .replace(/;}/g, "}")
      .replace(/\s+/g, " ")
      .replace(/ ?([>+~]) ?/g, "$1")
      .trim();
    setOutput(minified);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">{t('common.input')}</label>
        <textarea
          className="w-full h-40 p-3 border rounded font-mono text-sm"
          placeholder="/* Your CSS here */ body { color: red; }"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <Button onClick={minify}>{t('toolCommon.css.minify')}</Button>
      {output && (
        <div>
          <label className="block text-sm font-medium mb-1">{t('common.output')}</label>
          <textarea
            className="w-full h-40 p-3 border rounded font-mono text-sm"
            value={output}
            readOnly
          />
        </div>
      )}
    </div>
  );
}
