"use client";

import { useState, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";

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
    let result = text;
    for (const [entity, char] of Object.entries(ENTITIES)) {
      result = result.replace(new RegExp(entity, "g"), char);
    }
    // Handle numeric entities
    result = result.replace(/&#(\d+);/g, (_, num) => String.fromCharCode(+num));
    result = result.replace(/&#x([\da-f]+);/gi, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
    return result;
  }, []);

  const process = () => {
    if (!input) { setOutput(""); return; }
    setOutput(mode === "encode" ? encode(input) : decode(input));
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button variant={mode === "encode" ? "default" : "outline"} size="sm" onClick={() => setMode("encode")}>Encode</Button>
        <Button variant={mode === "decode" ? "default" : "outline"} size="sm" onClick={() => setMode("decode")}>Decode</Button>
      </div>
      <textarea
        placeholder={mode === "encode" ? "Enter text containing <tags> and & symbols..." : "Enter HTML with entities like &amp;..."}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full h-32 p-3 rounded-md border border-input bg-background font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <Button onClick={process}>{mode === "encode" ? "Encode" : "Decode"}</Button>
      {output && (
        <div className="space-y-2">
          <textarea readOnly value={output} className="w-full h-32 p-3 rounded-md border border-input bg-muted font-mono text-sm" />
          <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(output)}>Copy</Button>
        </div>
      )}
    </div>
  );
}
