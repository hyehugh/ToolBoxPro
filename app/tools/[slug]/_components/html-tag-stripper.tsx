"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

export function HtmlTagStripperTool() {
  const { t } = useLocale();
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const strip = () => {
    const stripped = input.replace(/<[^>]*>/g, "");
    setOutput(stripped);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">{t('toolCommon.htmlStrip.htmlInput')}</label>
        <textarea
          className="w-full h-40 p-3 border rounded font-mono text-sm"
          placeholder="<p>Hello <b>World</b></p>"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <Button onClick={strip}>{t('toolCommon.htmlStrip.strip')}</Button>
      {output && (
        <div>
          <label className="block text-sm font-medium mb-1">{t('toolCommon.htmlStrip.stripped')}</label>
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
