"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function HtmlTagStripperTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const strip = () => {
    const stripped = input.replace(/<[^>]*>/g, "");
    setOutput(stripped);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">HTML Input</label>
        <textarea
          className="w-full h-40 p-3 border rounded font-mono text-sm"
          placeholder="<p>Hello <b>World</b></p>"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <Button onClick={strip}>Strip HTML Tags</Button>
      {output && (
        <div>
          <label className="block text-sm font-medium mb-1">Stripped Text</label>
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
