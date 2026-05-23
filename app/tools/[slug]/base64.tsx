"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type Mode = "encode" | "decode";

export function Base64Tool() {
  const [mode, setMode] = useState<Mode>("encode");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

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
          Encode
        </Button>
        <Button
          variant={mode === "decode" ? "default" : "outline"}
          size="sm"
          onClick={() => { setMode("decode"); setOutput(""); setError(""); }}
        >
          Decode
        </Button>
      </div>
      <textarea
        placeholder={mode === "encode" ? "Enter text to encode..." : "Enter Base64 to decode..."}
        value={input}
        onChange={(e) => { setInput(e.target.value); setError(""); }}
        className="w-full h-32 p-3 rounded-md border border-input bg-background font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <Button onClick={process}>{mode === "encode" ? "Encode" : "Decode"}</Button>
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
              Copy
            </Button>
            <Button variant="ghost" size="sm" onClick={() => { setInput(""); setOutput(""); setError(""); }}>
              Clear
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
