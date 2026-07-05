"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

const ENTITIES: Record<string, string> = {
  "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": "\"",
  "&#39;": "'", "&nbsp;": " ", "&copy;": "©", "&reg;": "®",
  "&trade;": "™", "&euro;": "€", "&pound;": "£", "&yen;": "¥",
  "&cent;": "¢", "&sect;": "§", "&deg;": "°", "&plusmn;": "±",
  "&middot;": "·", "&bull;": "•", "&hellip;": "…", "&mdash;": "—",
  "&ndash;": "–", "&lsquo;": "'", "&rsquo;": "'", "&ldquo;": "\"",
  "&rdquo;": "\"", "&laquo;": "«", "&raquo;": "»",
};

export function HtmlEntityConverterTool() {
  const { t } = useLocale();
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");

  const encode = useCallback((text: string) => {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }, []);

  const decode = useCallback((text: string) => {
    // Decode in a single left-to-right pass so that entities are never
    // re-decoded by a later rule (e.g. "&amp;lt;" must yield "&lt;", not "<").
    // We recognize named entities, decimal numeric (&#nnn;), and hex numeric
    // (&#xHHH;). The `&` of a valid entity is consumed; a bare `&` that is not
    // part of a known entity is left untouched.
    const entityRegex = /&(?:#[0-9]+;|#x[0-9a-fA-F]+;|[a-zA-Z][a-zA-Z0-9]*;)/g;
    return text.replace(entityRegex, (entity) => {
      // Named
      if (ENTITIES[entity]) return ENTITIES[entity];
      // Decimal numeric
      const dec = entity.match(/^&#(\d+);$/);
      if (dec) return String.fromCodePoint(parseInt(dec[1], 10));
      // Hex numeric
      const hex = entity.match(/^&#x([\da-fA-F]+);$/i);
      if (hex) return String.fromCodePoint(parseInt(hex[1], 16));
      // Unknown entity — leave as-is.
      return entity;
    });
  }, []);

  const process = () => {
    if (!input) { setOutput(""); return; }
    setOutput(mode === "encode" ? encode(input) : decode(input));
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button variant={mode === "encode" ? "default" : "outline"} size="sm" onClick={() => setMode("encode")}>{t('toolCommon.htmlEntities.encode')}</Button>
        <Button variant={mode === "decode" ? "default" : "outline"} size="sm" onClick={() => setMode("decode")}>{t('toolCommon.htmlEntities.decode')}</Button>
      </div>
      <textarea
        placeholder={mode === "encode" ? t('toolCommon.htmlEntities.encodePlaceholder') : t('toolCommon.htmlEntities.decodePlaceholder')}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full h-32 p-3 rounded-md border border-input bg-background font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <Button onClick={process}>{mode === "encode" ? t('toolCommon.htmlEntities.encode') : t('toolCommon.htmlEntities.decode')}</Button>
      {output && (
        <div className="space-y-2">
          <textarea readOnly value={output} className="w-full h-32 p-3 rounded-md border border-input bg-muted font-mono text-sm" />
          <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(output)}>{t('common.copy')}</Button>
        </div>
      )}
    </div>
  );
}
