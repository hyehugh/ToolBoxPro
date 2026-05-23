"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import { tools } from "@/lib/tools/data";

export default function HomeSearch() {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const results = query.trim()
    ? tools.filter(
        (t) =>
          t.name.toLowerCase().includes(query.toLowerCase()) ||
          t.description.toLowerCase().includes(query.toLowerCase()) ||
          t.searchKeywords.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8)
    : [];

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setShowResults(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative max-w-md mx-auto">
      <input
        type="search"
        placeholder="Search any tool..."
        value={query}
        onChange={(e) => { setQuery(e.target.value); setShowResults(true); }}
        onFocus={() => setShowResults(true)}
        onKeyDown={(e) => { if (e.key === "Escape") setShowResults(false); }}
        className="w-full h-12 pl-4 pr-10 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        autoComplete="off"
      />
      {showResults && query.trim() && (
        <div className="absolute top-full mt-1 w-full rounded-lg border bg-card shadow-lg z-50 max-h-72 overflow-y-auto">
          {results.length > 0 ? (
            results.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                onClick={() => setShowResults(false)}
                className="flex items-center gap-3 px-4 py-3 hover:bg-accent transition-colors border-b last:border-b-0"
              >
                <span className="text-lg font-mono">{tool.icon}</span>
                <div className="text-left">
                  <p className="text-sm font-medium">{tool.name}</p>
                  <p className="text-xs text-muted-foreground">{tool.description}</p>
                </div>
              </Link>
            ))
          ) : (
            <p className="px-4 py-3 text-sm text-muted-foreground">No tools found</p>
          )}
        </div>
      )}
    </div>
  );
}
