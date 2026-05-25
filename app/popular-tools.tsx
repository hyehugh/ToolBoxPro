"use client";

import Link from "next/link";
import { tools } from "@/lib/tools/data";
import { useLocale } from "@/lib/i18n/context";

const popularSlugs = new Set([
  "json-formatter",
  "base64-encode-decode",
  "regex-tester",
  "color-converter",
  "url-encoder-decoder",
  "password-generator",
  "image-compressor",
  "pdf-merger",
  "qr-code-generator",
  "word-counter",
]);

const popularTools = tools.filter((t) => popularSlugs.has(t.slug));

export function PopularTools() {
  const { t } = useLocale();

  return (
    <div className="flex flex-wrap items-center gap-2 mb-8">
      <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider mr-1">
        {t("search.trending")}
      </span>
      {popularTools.map((tool) => (
        <Link
          key={tool.slug}
          href={`/tools/${tool.slug}`}
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border text-xs text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
        >
          <span className="font-mono text-[10px]">{tool.icon}</span>
          {tool.name}
        </Link>
      ))}
    </div>
  );
}
