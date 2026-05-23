"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";

export function HtmlPreviewTool() {
  const [html, setHtml] = useState("<h1>Hello World</h1>\n<p>Start typing HTML on the left to see a live preview on the right.</p>");
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "s") {
      e.preventDefault();
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ height: "500px" }}>
        <div className="flex flex-col">
          <label className="block text-sm font-medium mb-1">HTML Code</label>
          <textarea
            className="w-full flex-1 p-3 border rounded font-mono text-sm resize-none"
            placeholder="<h1>Hello World</h1>"
            value={html}
            onChange={(e) => setHtml(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{ minHeight: "400px" }}
          />
        </div>
        <div className="flex flex-col">
          <label className="block text-sm font-medium mb-1">Live Preview</label>
          <div className="flex-1 border rounded overflow-hidden bg-white" style={{ minHeight: "400px" }}>
            <iframe
              ref={iframeRef}
              srcDoc={html}
              title="HTML Preview"
              className="w-full h-full"
              sandbox="allow-scripts"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <Button onClick={() => setHtml("")}>Clear</Button>
        <Button
          variant="outline"
          onClick={() =>
            setHtml(
              '<!DOCTYPE html>\n<html>\n<head>\n  <title>Page Title</title>\n</head>\n<body>\n  <h1>My First Heading</h1>\n  <p>My first paragraph.</p>\n</body>\n</html>'
            )
          }
        >
          Load Template
        </Button>
      </div>
    </div>
  );
}
