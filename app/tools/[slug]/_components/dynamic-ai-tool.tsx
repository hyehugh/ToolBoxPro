"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const GrammarChecker = dynamic(
  () => import("./grammar-checker").then((m) => ({ default: m.GrammarCheckerTool })),
  { ssr: false }
);

const TextSummarizer = dynamic(
  () => import("./text-summarizer").then((m) => ({ default: m.TextSummarizerTool })),
  { ssr: false }
);

interface Props {
  slug: string;
}

export function DynamicAITool({ slug }: Props) {
  // Prevent hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center py-12 text-muted-foreground">
        <div className="animate-pulse text-sm">Loading AI tool...</div>
      </div>
    );
  }

  switch (slug) {
    case "grammar-checker":
      return <GrammarChecker />;
    case "text-summarizer":
      return <TextSummarizer />;
    default:
      return null;
  }
}
