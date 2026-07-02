import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/lib/tools/data";

export const metadata: Metadata = {
  title: "Sitemap — All Tools & Pages | ToolboxPro",
  description:
    "Complete sitemap of ToolboxPro — browse all free online tools, blog posts, guides, and pages.",
  alternates: {
    canonical: "https://trytoolboxpro.com/sitemap-index",
  },
};

const categoryConfig: Record<string, { label: string; icon: string }> = {
  developer: { label: "Developer Tools", icon: "💻" },
  text: { label: "Text Tools", icon: "📝" },
  image: { label: "Image Tools", icon: "🖼️" },
  pdf: { label: "PDF Tools", icon: "📄" },
  audio: { label: "Audio Tools", icon: "🎵" },
  network: { label: "Network Tools", icon: "🌐" },
  conversion: { label: "Converters", icon: "🔄" },
  utilities: { label: "Utilities", icon: "🛠️" },
};

// Group tools by category dynamically
const categoryOrder = ["developer", "text", "image", "pdf", "audio", "network", "conversion", "utilities"];
const toolsByCategory = new Map<string, typeof tools>();

for (const tool of tools) {
  const arr = toolsByCategory.get(tool.category) ?? [];
  arr.push(tool);
  toolsByCategory.set(tool.category, arr);
}

export default function SitemapIndexPage() {
  const totalTools = tools.length;

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
        {categoryOrder.map((catId) => {
          const catTools = toolsByCategory.get(catId);
          if (!catTools || catTools.length === 0) return null;
          const config = categoryConfig[catId] ?? { label: catId, icon: "🔧" };

          return (
            <section
              key={catId}
              className="p-5 rounded-xl border bg-card"
              aria-labelledby={`cat-${catId}`}
            >
              <h2
                id={`cat-${catId}`}
                className="text-lg font-bold mb-3 flex items-center gap-2"
              >
                <span aria-hidden="true">{config.icon}</span>
                {config.label}
                <span className="text-sm font-normal text-muted-foreground ml-1">
                  ({catTools.length})
                </span>
              </h2>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                {catTools.map((tool) => (
                  <li key={tool.slug}>
                    <Link
                      href={`/tools/${tool.slug}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {tool.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
