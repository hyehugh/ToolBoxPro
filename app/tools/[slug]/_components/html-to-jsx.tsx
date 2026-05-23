"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function HtmlToJsxTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const convert = () => {
    let jsx = input
      // Convert class to className
      .replace(/\bclass=/g, "className=")
      // Convert for to htmlFor
      .replace(/\bfor=/g, "htmlFor=")
      // Self-closing tags
      .replace(/<(input|br|hr|img|meta|link|area|base|col|embed|source|track|wbr)([^>]*)>/gi, "<$1$2 />")
      // Remove style tags content (simplified)
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
      // Tabindex -> tabIndex
      .replace(/\btabindex=/g, "tabIndex=")
      // Readonly -> readOnly
      .replace(/\breadonly=/g, "readOnly=")
      // Maxlength -> maxLength
      .replace(/\bmaxlength=/g, "maxLength=")
      // Autofocus -> autoFocus
      .replace(/\bautofocus=/g, "autoFocus=")
      // Wrap in fragment
      .trim();

    // Wrap in a fragment if there are multiple elements
    if (jsx.startsWith("<") && !jsx.startsWith("<>")) {
      const tagCount = (jsx.match(/<\//g) || []).length;
      if (tagCount > 1) {
        jsx = `<>\n${jsx.split("\n").map((l) => "  " + l).join("\n")}\n</>`;
      }
    }

    setOutput(jsx || "No content to convert");
  };

  return (
    <div className="space-y-4">
      <textarea
        placeholder="Paste HTML code here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full h-48 p-3 rounded-md border border-input bg-background font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <Button onClick={convert}>Convert to JSX</Button>
      {output && (
        <div className="space-y-2">
          <div className="p-3 rounded-md border bg-muted font-mono text-sm whitespace-pre-wrap max-h-64 overflow-y-auto">
            {output}
          </div>
          <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(output)}>Copy</Button>
        </div>
      )}
    </div>
  );
}
