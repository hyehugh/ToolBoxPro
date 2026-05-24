"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const TextSummarizer = dynamic(
  () => import("./text-summarizer").then((m) => ({ default: m.TextSummarizerTool })),
  { ssr: false }
);

const TextTranslator = dynamic(
  () => import("./text-translator").then((m) => ({ default: m.TextTranslatorTool })),
  { ssr: false }
);

interface Props {
  slug: string;
}

export function DynamicAITool({ slug }: Props) {
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
      return <TextTranslator />;
    case "text-summarizer":
      return <TextSummarizer />;
    default:
      return null;
  }
}
