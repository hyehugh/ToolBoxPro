"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function JsonFormatterTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [treeView, setTreeView] = useState(false);

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
      setOutput("✓ Valid JSON");
    } catch (e: any) {
      setError(e.message);
      setOutput("");
    }
  };

  const copyOutput = () => navigator.clipboard.writeText(output);

  return (
    <div className="space-y-4">
      <textarea
        placeholder="Paste your JSON here..."
        value={input}
        onChange={(e) => { setInput(e.target.value); setError(""); }}
        className="w-full h-40 p-3 rounded-md border border-input bg-background font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <div className="flex flex-wrap gap-2">
        <Button onClick={format}>Format</Button>
        <Button variant="secondary" onClick={validate}>Validate</Button>
        <Button variant="outline" onClick={minify}>Minify</Button>
        <Button variant="ghost" size="sm" onClick={() => setTreeView(!treeView)}>
          {treeView ? "Raw View" : "Tree View"}
        </Button>
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
            <Button variant="outline" size="sm" onClick={copyOutput}>Copy</Button>
            <Button variant="outline" size="sm" onClick={() => {
              const blob = new Blob([output], { type: "application/json" });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url; a.download = "formatted.json"; a.click();
              URL.revokeObjectURL(url);
            }}>Download</Button>
            <Button variant="ghost" size="sm" onClick={() => { setInput(""); setOutput(""); setError(""); }}>Clear</Button>
          </div>
        </div>
      )}
    </div>
  );
}
