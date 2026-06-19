"use client";

import { useState, useCallback, useRef, useEffect, ReactNode } from "react";
import Link from "next/link";
import { tools } from "@/lib/tools/data";
import { useLocale } from "@/lib/i18n/context";

interface HomeSearchProps {
  rightAction?: ReactNode;
}

export default function HomeSearch({ rightAction }: HomeSearchProps) {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { t, locale } = useLocale();

  const results = query.trim()
    ? tools.filter(
        (tool) =>
          tool.name.toLowerCase().includes(query.toLowerCase()) ||
          tool.description.toLowerCase().includes(query.toLowerCase()) ||
          tool.searchKeywords.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8)
    : [];

  const handleSearch = () => {
    if (results.length > 0) {
      window.location.href = `/tools/${results[0].slug}`;
    }
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setShowResults(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative max-w-lg mx-auto">
      <div className="flex gap-2">
        {/* Search Input + Button */}
        <div className="relative flex-1">
          <input
            ref={inputRef}
            type="search"
            placeholder={t("search.placeholder")}
            value={query}
            onChange={(e) => { setQuery(e.target.value); setShowResults(true); }}
            onFocus={() => setShowResults(true)}
            onKeyDown={(e) => {
              if (e.key === "Escape") setShowResults(false);
              if (e.key === "Enter") handleSearch();
            }}
            className="w-full h-11 pl-4 pr-10 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            autoComplete="off"
            aria-label={locale === "zh" ? "搜索工具" : "Search tools"}
            aria-expanded={showResults && results.length > 0}
            aria-controls="search-results"
            role="combobox"
            aria-autocomplete="list"
          />
          <button
            onClick={handleSearch}
            className="absolute right-0 top-0 h-11 w-10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors rounded-r-lg"
            aria-label={locale === "zh" ? "搜索" : "Search"}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          {/* Dropdown Results */}
          {showResults && query.trim() && (
            <div id="search-results" role="listbox" aria-label={locale === "zh" ? "搜索结果" : "Search results"} className="absolute top-full mt-1 w-full rounded-lg border bg-card shadow-lg z-50 max-h-72 overflow-y-auto">
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
                      <p className="text-sm font-medium">{t(`toolList.${tool.slug}.name`)}</p>
                      <p className="text-xs text-muted-foreground">{t(`toolList.${tool.slug}.desc`)}</p>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="px-4 py-3 text-sm text-muted-foreground">{t("search.noResults")}</p>
              )}
            </div>
          )}
        </div>

        {/* Right Action (Random Tool button) */}
        {rightAction}
      </div>
    </div>
  );
}
