"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

type Mode = "encode" | "decode";

export function Base64Tool() {
  const [mode, setMode] = useState<Mode>("encode");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const { t } = useLocale();

  const process = () => {
    setError("");
    if (!input) { setOutput(""); return; }
    try {
      if (mode === "encode") {
        setOutput(btoa(input));
      } else {
        setOutput(atob(input));
      }
    } catch (e: any) {
      setError(e.message);
      setOutput("");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button
          variant={mode === "encode" ? "default" : "outline"}
          size="sm"
          onClick={() => { setMode("encode"); setOutput(""); setError(""); }}
        >
          {t('common.encode')}
        </Button>
        <Button
          variant={mode === "decode" ? "default" : "outline"}
          size="sm"
          onClick={() => { setMode("decode"); setOutput(""); setError(""); }}
        >
          {t('common.decode')}
        </Button>
      </div>
      <textarea
        placeholder={mode === "encode" ? `${t('common.input')}...` : `${t('common.decode')}...`}
        value={input}
        onChange={(e) => { setInput(e.target.value); setError(""); }}
        className="w-full h-32 p-3 rounded-md border border-input bg-background font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <Button onClick={process}>{mode === "encode" ? t('common.encode') : t('common.decode')}</Button>
      {error && (
        <p className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">{error}</p>
      )}
      {output && (
        <div className="space-y-2">
          <textarea
            readOnly
            value={output}
            className="w-full h-32 p-3 rounded-md border border-input bg-muted font-mono text-sm"
          />
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(output)}>
              {t('common.copy')}
            </Button>
            <Button variant="ghost" size="sm" onClick={() => { setInput(""); setOutput(""); setError(""); }}>
              {t('common.clear')}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
