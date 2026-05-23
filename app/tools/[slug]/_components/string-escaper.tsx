"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function StringEscaperTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"escape" | "unescape">("escape");

  const escape = (str: string) => {
    return str
      .replace(/\\/g, "\\\\")
      .replace(/"/g, '\\"')
      .replace(/'/g, "\\'")
      .replace(/\n/g, "\\n")
      .replace(/\t/g, "\\t")
      .replace(/\r/g, "\\r");
  };

  const unescape = (str: string) => {
    return str
      .replace(/\\n/g, "\n")
      .replace(/\\t/g, "\t")
      .replace(/\\r/g, "\r")
      .replace(/\\"/g, '"')
      .replace(/\\'/g, "'")
      .replace(/\\\\/g, "\\");
  };

  const handleConvert = () => {
    if (mode === "escape") {
      setOutput(escape(input));
    } else {
      setOutput(unescape(input));
    }
  };

  const toggleMode = () => {
    setMode((prev) => (prev === "escape" ? "unescape" : "escape"));
    setInput("");
    setOutput("");
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm font-medium">Mode:</span>
        <Button variant={mode === "escape" ? "default" : "outline"} size="sm" onClick={() => { setMode("escape"); setInput(""); setOutput(""); }}>
          Escape
        </Button>
        <Button variant={mode === "unescape" ? "default" : "outline"} size="sm" onClick={() => { setMode("unescape"); setInput(""); setOutput(""); }}>
          Unescape
        </Button>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">
          {mode === "escape" ? "Text to Escape" : "Escaped Text to Unescape"}
        </label>
        <textarea
          className="w-full h-32 p-3 border rounded font-mono text-sm"
          placeholder={mode === "escape" ? 'Hello "World"\nNew line here' : 'Hello \\"World\\"\\nNew line here'}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <Button onClick={handleConvert}>
        {mode === "escape" ? "Escape Text" : "Unescape Text"}
      </Button>
      {output && (
        <div>
          <label className="block text-sm font-medium mb-1">
            {mode === "escape" ? "Escaped Output" : "Unescaped Output"}
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
