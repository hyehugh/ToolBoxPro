"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

export function RegexTesterTool() {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState({ g: true, i: false, m: false, s: false });
  const [testStr, setTestStr] = useState("");
  const [matches, setMatches] = useState<RegExpExecArray[]>([]);
  const [error, setError] = useState("");
  const debounceRef = useRef<NodeJS.Timeout>(undefined as unknown as NodeJS.Timeout);

  const runTest = useCallback(() => {
    setError("");
    if (!pattern || !testStr) { setMatches([]); return; }
    try {
      const flagStr = Object.entries(flags)
        .filter(([, v]) => v).map(([k]) => k[0]).join("");
      const regex = new RegExp(pattern, flagStr);
      const found: RegExpExecArray[] = [];
      let m: RegExpExecArray | null;
      while ((m = regex.exec(testStr)) !== null) {
        found.push(m);
        if (!flags.g) break;
      }
      setMatches(found);
    } catch (e: any) {
      setError(e.message);
      setMatches([]);
    }
  }, [pattern, testStr, flags]);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(runTest, 300);
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
  }, [runTest]);

  const presets = [
    { label: "Email", pattern: "[\\w.-]+@[\\w.-]+\\.\\w+" },
    { label: "URL", pattern: "https?://[\\w./-]+" },
    { label: "Phone", pattern: "\\+?1?\\d{10,}" },
    { label: "IP", pattern: "\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <input
          placeholder="Enter regex pattern..."
          value={pattern}
          onChange={(e) => setPattern(e.target.value)}
          className="flex-1 min-w-[200px] h-10 px-3 rounded-md border border-input bg-background font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
        {Object.entries(flags).map(([key, val]) => (
          <button
            key={key}
            onClick={() => setFlags((f) => ({ ...f, [key]: !val }))}
            className={`px-2 py-1 rounded text-xs font-mono border ${
              val ? "bg-primary text-primary-foreground border-primary" : "bg-background border-input"
            }`}
          >
            {key}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {presets.map((p) => (
          <button
            key={p.label}
            onClick={() => setPattern(p.pattern)}
            className="px-2 py-0.5 rounded text-xs bg-secondary text-secondary-foreground hover:bg-accent"
          >
            {p.label}
          </button>
        ))}
      </div>
      <textarea
        placeholder="Enter test string..."
        value={testStr}
        onChange={(e) => setTestStr(e.target.value)}
        className="w-full h-32 p-3 rounded-md border border-input bg-background font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
      {error && (
        <p className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">{error}</p>
      )}
      {matches.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            {matches.length} match{matches.length !== 1 ? "es" : ""} found
          </p>
          <div className="max-h-40 overflow-y-auto space-y-1">
            {matches.map((m, i) => (
              <div key={i} className="p-2 rounded bg-muted text-sm font-mono">
                <span className="text-muted-foreground mr-2">#{i + 1}</span>
                <span>{m[0]}</span>
                {m.length > 1 && (
                  <span className="text-muted-foreground ml-2">
                    groups: {Array.from({ length: m.length - 1 }, (_, j) => m[j + 1]).filter(Boolean).join(", ")}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      {!error && pattern && testStr && matches.length === 0 && (
        <p className="text-sm text-muted-foreground">No matches found</p>
      )}
    </div>
  );
}
