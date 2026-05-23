"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function CssMinifierTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const minify = () => {
    const minified = input
      .replace(/\/\*[\s\S]*?\*\//g, "") // Remove block comments
      .replace(/\/\/.*$/gm, "") // Remove line comments
      .replace(/\s*([{}:;,])\s*/g, "$1") // Collapse whitespace around syntax chars
      .replace(/;}/g, "}") // Remove trailing semicolons before }
      .replace(/\s+/g, " ") // Collapse multiple spaces
      .replace(/ ?([>+~]) ?/g, "$1") // Trim spaces around combinators
      .trim();
    setOutput(minified);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">CSS Input</label>
        <textarea
          className="w-full h-40 p-3 border rounded font-mono text-sm"
          placeholder="/* Your CSS here */ body { color: red; }"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <Button onClick={minify}>Minify CSS</Button>
      {output && (
        <div>
          <label className="block text-sm font-medium mb-1">Minified Output</label>
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
