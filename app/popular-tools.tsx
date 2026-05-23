import Link from "next/link";
import { tools } from "@/lib/tools/data";

const popularSlugs = new Set([
  "json-formatter",
  "base64-encode-decode",
  "regex-tester",
  "color-converter",
  "url-encoder-decoder",
  "uuid-generator",
  "password-generator",
  "hash-generator",
  "image-compressor",
  "image-converter",
  "pdf-merger",
  "qr-code-generator",
  "word-counter",
  "timestamp-converter",
  "number-base-converter",
  "temperature-converter",
  "css-minifier",
  "case-converter",
]);

const popularTools = tools.filter((t) => popularSlugs.has(t.slug));

export function PopularTools() {
  return (
    <section className="relative mb-12 -mx-4 px-4 py-8 rounded-2xl bg-gradient-to-b from-[#f5ece4]/60 dark:from-[#2a2422]/40 to-transparent">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-bold flex items-center gap-2">
          <span className="text-lg">🔥</span>
          Popular Now
        </h2>
        <Link
          href="/tools"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          View all &rarr;
        </Link>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin -mx-1 px-1">
        {popularTools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="flex items-center gap-2.5 shrink-0 px-4 py-2.5 rounded-xl border bg-card card-shadow card-shadow-hover hover:bg-accent transition-all duration-200"
          >
            <span className="text-base font-mono">{tool.icon}</span>
            <span className="text-xs font-medium whitespace-nowrap">{tool.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
