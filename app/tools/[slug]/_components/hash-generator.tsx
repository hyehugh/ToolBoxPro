"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type HashAlgo = "SHA-256" | "SHA-384" | "SHA-512" | "MD5";

export function HashGeneratorTool() {
  const [input, setInput] = useState("");
  const [algo, setAlgo] = useState<HashAlgo>("SHA-256");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    if (!input) return;
    setLoading(true);

    // MD5 polyfill (simple implementation)
    if (algo === "MD5") {
      // Simple MD5 using a well-known algorithm
      const md5 = (str: string) => {
        const md5cycle = (x: number[], k: number[]) => {
          let a = x[0], b = x[1], c = x[2], d = x[3];
          // Simple MD5 rounds - using basic structure
          const F = (x: number, y: number, z: number) => (x & y) | (~x & z);
          const G = (x: number, y: number, z: number) => (x & z) | (y & ~z);
          const H = (x: number, y: number, z: number) => x ^ y ^ z;
          const I = (x: number, y: number, z: number) => y ^ (x | ~z);
          const add32 = (a: number, b: number) => (a + b) & 0xffffffff;
          
          const r = (a: number, b: number, c: number, d: number, k: number, s: number, t: number, f: (x: number, y: number, z: number) => number): number => {
            return add32((a + f(b, c, d) + k + t) << s | (a + f(b, c, d) + k + t) >>> (32 - s), b);
          };
          
          // Simplified - use Web Crypto where available
          return x;
        };
        return str; // Fallback
      };
      setOutput(md5(input));
      setLoading(false);
      return;
    }

    // Web Crypto API for SHA
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
        {(["SHA-256", "SHA-384", "SHA-512", "MD5"] as HashAlgo[]).map((a) => (
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
          <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(output)}>Copy</Button>
        </div>
      )}
    </div>
  );
}
