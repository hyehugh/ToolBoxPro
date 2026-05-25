"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

type Mode = "encode" | "decodeQuery" | "decodeFull";

export function UrlEncoderTool() {
  const { t } = useLocale();
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<Mode>("encode");

  const process = () => {
    if (!input) { setOutput(""); return; }
    if (mode === "encode") setOutput(encodeURIComponent(input));
    else if (mode === "decodeQuery") setOutput(decodeURIComponent(input));
    else setOutput(decodeURI(input));
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {[
          { id: "encode" as Mode, label: t('toolCommon.url.encode') },
          { id: "decodeQuery" as Mode, label: t('toolCommon.url.decode') + " (Query)" },
          { id: "decodeFull" as Mode, label: t('toolCommon.url.decode') + " (Full URL)" },
        ].map(({ id, label }) => (
          <Button
            key={id}
            variant={mode === id ? "default" : "outline"}
            size="sm"
            onClick={() => setMode(id)}
          >
            {label}
          </Button>
        ))}
      </div>
      <textarea
        placeholder="Enter text to encode/decode..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full h-32 p-3 rounded-md border border-input bg-background font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <Button onClick={process}>
        {mode === "encode" ? t('toolCommon.url.encode') : t('toolCommon.url.decode')}
      </Button>
      {output && (
        <div className="space-y-2">
          <textarea
            readOnly
            value={output}
            className="w-full h-32 p-3 rounded-md border border-input bg-muted font-mono text-sm"
          />
          <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(output)}>
            {t('common.copy')}
          </Button>
        </div>
      )}
    </div>
  );
}
