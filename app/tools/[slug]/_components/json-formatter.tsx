"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

export function JsonFormatterTool() {
  const { t } = useLocale();
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const format = () => {
    setError("");
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
    } catch (e: any) {
      setError(e.message);
      setOutput("");
    }
  };

  const minify = () => {
    setError("");
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
    } catch (e: any) {
      setError(e.message);
      setOutput("");
    }
  };

  const validate = () => {
    setError("");
    try {
      JSON.parse(input);
      setOutput(t('toolCommon.json.validJson'));
    } catch (e: any) {
      setError(e.message);
      setOutput("");
    }
  };

  const copyOutput = () => navigator.clipboard.writeText(output);

  return (
    <div className="space-y-4">
      <textarea
        placeholder={t('toolCommon.json.placeholder')}
        value={input}
        onChange={(e) => { setInput(e.target.value); setError(""); }}
        className="w-full h-40 p-3 rounded-md border border-input bg-background font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <div className="flex flex-wrap gap-2">
        <Button onClick={format}>{t('common.format')}</Button>
        <Button variant="secondary" onClick={validate}>{t('common.validate')}</Button>
        <Button variant="outline" onClick={minify}>{t('common.minify')}</Button>
      </div>
      {error && (
        <p className="text-sm text-destructive bg-destructive/10 p-3 rounded-md font-mono">
          {error}
        </p>
      )}
      {output && (
        <div className="space-y-2">
          <textarea
            readOnly
            value={output}
            className="w-full h-40 p-3 rounded-md border border-input bg-muted font-mono text-sm"
          />
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={copyOutput}>{t('common.copy')}</Button>
            <Button variant="outline" size="sm" onClick={() => {
              const blob = new Blob([output], { type: "application/json" });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url; a.download = "formatted.json"; a.click();
              URL.revokeObjectURL(url);
            }}>{t('common.download')}</Button>
            <Button variant="ghost" size="sm" onClick={() => { setInput(""); setOutput(""); setError(""); }}>{t('common.clear')}</Button>
          </div>
        </div>
      )}
    </div>
  );
}
