"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type HashAlgo = "SHA-256" | "SHA-384" | "SHA-512";

export function HashGeneratorTool() {
  const [input, setInput] = useState("");
  const [algo, setAlgo] = useState<HashAlgo>("SHA-256");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    if (!input) return;
    setLoading(true);
    try {
      const encoder = new TextEncoder();
      const data = encoder.encode(input);
      const hashBuffer = await crypto.subtle.digest(algo, data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
      setOutput(hashHex);
    } catch (e) {
      setOutput("Error: " + (e as Error).message);
    }
    setLoading(false);
  };

  return (
    <div className="space-y-4">
      <textarea
        placeholder="Enter text to hash..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full h-24 p-3 rounded-md border border-input bg-background font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <div className="flex flex-wrap gap-2">
        {(["SHA-256", "SHA-384", "SHA-512"] as HashAlgo[]).map((a) => (
          <Button key={a} variant={algo === a ? "default" : "outline"} size="sm" onClick={() => setAlgo(a)}>
            {a}
          </Button>
        ))}
      </div>
      <Button onClick={generate} disabled={loading}>
        {loading ? "Generating..." : "Generate Hash"}
      </Button>
      {output && (
        <div className="space-y-2">
          <div className="p-3 rounded-md border bg-muted font-mono text-xs break-all">{output}</div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(output)}>Copy</Button>
            <span className="text-xs text-muted-foreground self-center">{algo} · {output.length / 2} bytes</span>
          </div>
        </div>
      )}
    </div>
  );
}
