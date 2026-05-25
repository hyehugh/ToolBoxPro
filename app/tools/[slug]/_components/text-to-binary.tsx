"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

export function TextToBinaryTool() {
  const { t } = useLocale();
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"toBinary" | "toText">("toBinary");

  const textToBinary = (text: string) => {
    return text
      .split("")
      .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
      .join(" ");
  };

  const binaryToText = (binary: string) => {
    const cleaned = binary.replace(/\s+/g, " ");
    const bytes = cleaned.split(" ");
    return bytes
      .map((byte) => String.fromCharCode(parseInt(byte, 2)))
      .join("");
  };

  const handleConvert = () => {
    if (!input.trim()) {
      setOutput("");
      return;
    }
    try {
      if (mode === "toBinary") {
        setOutput(textToBinary(input));
      } else {
        setOutput(binaryToText(input));
      }
    } catch {
      setOutput("Invalid input for conversion");
    }
  };

  const toggleMode = () => {
    setMode((prev) => (prev === "toBinary" ? "toText" : "toBinary"));
    setInput("");
    setOutput("");
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm font-medium">{t('common.type')}:</span>
        <Button variant={mode === "toBinary" ? "default" : "outline"} size="sm" onClick={() => { setMode("toBinary"); setInput(""); setOutput(""); }}>
          {t('toolCommon.binary.textToBinary')}
        </Button>
        <Button variant={mode === "toText" ? "default" : "outline"} size="sm" onClick={() => { setMode("toText"); setInput(""); setOutput(""); }}>
          {t('toolCommon.binary.binaryToText')}
        </Button>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">
          {mode === "toBinary" ? t('toolCommon.binary.textToBinary') : t('toolCommon.binary.binaryToText')}
        </label>
        <textarea
          className="w-full h-32 p-3 border rounded font-mono text-sm"
          placeholder={mode === "toBinary" ? "Hello" : "01001000 01100101 01101100 01101100 01101111"}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <Button onClick={handleConvert}>
        {mode === "toBinary" ? t('toolCommon.binary.textToBinary') : t('toolCommon.binary.binaryToText')}
      </Button>
      {output && (
        <div>
          <label className="block text-sm font-medium mb-1">
            {mode === "toBinary" ? t('toolCommon.binary.binaryToText') : t('toolCommon.binary.textToBinary')}
          </label>
          <textarea
            className="w-full h-32 p-3 border rounded font-mono text-sm"
            value={output}
            readOnly
          />
        </div>
      )}
    </div>
  );
}
