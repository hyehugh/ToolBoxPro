import Link from "next/link";
import { tools } from "@/lib/tools/data";

// Top tools by expected popularity — manually curated based on typical usage
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
  "case-converter",
  "html-entity-converter",
  "css-minifier",
  "timestamp-converter",
  "number-base-converter",
  "temperature-converter",
  "weight-converter",
]);

const popularTools = tools.filter((t) => popularSlugs.has(t.slug));

export function PopularTools() {
  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">🔥 Popular Tools</h2>
        <Link
          href="/tools"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          View all →
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {popularTools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="flex flex-col items-center gap-1.5 p-4 rounded-lg border bg-card card-shadow card-shadow-hover hover:bg-accent transition-all duration-200 text-center"
          >
            <span className="text-xl font-mono">{tool.icon}</span>
            <span className="text-xs font-medium leading-tight">{tool.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
