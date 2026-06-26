import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sitemap — All Tools & Pages | ToolboxPro",
  description:
    "Complete sitemap of ToolboxPro — browse all 99 free online tools, blog posts, guides, and pages.",
  alternates: {
    canonical: "https://trytoolboxpro.com/sitemap-index",
  },
};

const categories = [
  {
    name: "Developer Tools",
    icon: "💻",
    tools: [
      "json-formatter", "base64-encode-decode", "regex-tester", "color-converter",
      "url-encoder-decoder", "uuid-generator", "password-generator", "hash-generator",
      "timestamp-converter", "number-base-converter", "jwt-decoder", "jwt-generator",
      "cron-parser", "ip-calculator", "html-preview", "csv-viewer", "css-minifier",
      "css-gradient", "css-shadow", "sql-formatter", "json-to-yaml", "json-to-typescript",
      "json-diff", "string-escaper", "html-entity-converter", "html-tag-stripper",
      "html-to-jsx", "http-status-codes", "markdown-to-html", "text-to-binary",
      "binary-to-text", "morse-code-converter", "caesar-cipher", "svg-to-png",
    ],
  },
  {
    name: "Text Tools",
    icon: "📝",
    tools: [
      "word-counter", "case-converter", "lorem-ipsum-generator", "text-diff-checker",
      "text-repeater", "text-to-slug", "text-sorter", "text-deduplicator",
      "text-reverser", "random-string-generator", "palindrome-checker",
      "emoji-remover", "unicode-detector", "text-statistics", "online-notepad",
    ],
  },
  {
    name: "Image Tools",
    icon: "🖼️",
    tools: [
      "image-compressor", "image-converter", "image-cropper", "image-resizer",
      "image-filters", "image-watermark", "image-merge", "image-splitter",
      "image-flip", "image-border", "image-to-base64", "image-to-pdf",
      "image-to-sketch", "image-invert", "image-collage", "color-picker",
      "color-palette", "gif-maker", "meme-generator", "barcode-generator",
      "qr-reader", "color-blindness-simulator",
    ],
  },
  {
    name: "PDF Tools",
    icon: "📄",
    tools: [
      "pdf-merger", "pdf-splitter", "pdf-rotator", "pdf-page-remover",
    ],
  },
  {
    name: "Audio Tools",
    icon: "🎵",
    tools: [
      "audio-cutter", "audio-merger", "audio-converter",
    ],
  },
  {
    name: "Network Tools",
    icon: "🌐",
    tools: [
      "dns-lookup", "whois-lookup",
    ],
  },
  {
    name: "Converters",
    icon: "🔄",
    tools: [
      "temperature-converter", "weight-converter", "length-converter",
      "data-size-converter", "speed-converter", "area-converter",
      "timezone-converter", "roman-numeral", "aspect-ratio-calculator",
      "days-between",
    ],
  },
  {
    name: "Utilities",
    icon: "🛠️",
    tools: [
      "random-number-generator", "percentage-calculator", "tip-calculator",
      "age-calculator", "bmi-calculator", "countdown-timer", "dice-roller",
      "decision-maker", "password-strength",
    ],
  },
];

const toolNameMap: Record<string, string> = {
  "json-formatter": "JSON Formatter",
  "base64-encode-decode": "Base64 Encoder/Decoder",
  "regex-tester": "Regex Tester",
  "color-converter": "Color Converter",
  "url-encoder-decoder": "URL Encoder/Decoder",
  "uuid-generator": "UUID Generator",
  "password-generator": "Password Generator",
  "hash-generator": "Hash Generator",
  "timestamp-converter": "Timestamp Converter",
  "number-base-converter": "Number Base Converter",
  "image-compressor": "Image Compressor",
  "image-converter": "Image Converter",
  "pdf-merger": "PDF Merger",
  "word-counter": "Word Counter",
  "case-converter": "Case Converter",
  "dns-lookup": "DNS Lookup",
  "audio-cutter": "Audio Cutter",
};

function getToolName(slug: string): string {
  return toolNameMap[slug] || slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

export default function SitemapIndexPage() {
  const totalTools = categories.reduce((acc, c) => acc + c.tools.length, 0);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
          Sitemap
        </h1>
        <p className="text-lg text-muted-foreground">
          Browse all {totalTools} free online tools organized by category. Everything runs
          in your browser — no uploads, no signup.
        </p>
      </div>

      {/* Quick links */}
      <div className="flex flex-wrap gap-3 mb-10">
        {[
          { label: "All Tools", href: "/tools" },
          { label: "Blog", href: "/blog" },
          { label: "Guides", href: "/guides" },
          { label: "FAQ", href: "/faq" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
          { label: "Privacy", href: "/privacy" },
          { label: "Terms", href: "/terms" },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="px-4 py-2 rounded-lg border bg-card text-sm font-medium hover:bg-accent transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat) => (
          <section
            key={cat.name}
            className="p-5 rounded-xl border bg-card"
            aria-labelledby={`cat-${cat.name}`}
          >
            <h2
              id={`cat-${cat.name}`}
              className="text-lg font-bold mb-3 flex items-center gap-2"
            >
              <span aria-hidden="true">{cat.icon}</span>
              {cat.name}
              <span className="text-sm font-normal text-muted-foreground ml-1">
                ({cat.tools.length})
              </span>
            </h2>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
              {cat.tools.map((slug) => (
                <li key={slug}>
                  <Link
                    href={`/tools/${slug}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {getToolName(slug)}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
