"use client";

import { blogPosts, type BlogPost } from "@/lib/blog/data";
import { getBlogImage } from "@/lib/blog/images";
import Link from "next/link";
import { useLocale } from "@/lib/i18n/context";
import dynamic from "next/dynamic";

const AdUnit = dynamic(
  () => import("@/components/ads/ad-unit").then((m) => m.AdUnit),
  { ssr: false }
);

// Simple markdown renderer
function renderMarkdown(md: string) {
  const lines = md.split("\n");
  const elements: React.ReactNode[] = [];
  let inCodeBlock = false;
  let codeLines: string[] = [];
  let codeLang = "";
  let inTable = false;
  let tableRows: string[][] = [];

  const flushCode = () => {
    if (codeLines.length > 0) {
      elements.push(
        <pre key={`code-${elements.length}`} className="p-4 rounded-lg bg-muted overflow-x-auto text-sm mb-4">
          <code>{codeLines.join("\n")}</code>
        </pre>
      );
      codeLines = [];
    }
  };

  const flushTable = () => {
    if (tableRows.length > 0) {
      const headerRow = tableRows[0];
      const dataRows = tableRows.slice(2);

      elements.push(
        <div key={`table-${elements.length}`} className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-muted">
                {headerRow.map((h, i) => (
                  <th key={i} className="border border-border px-3 py-2 text-left font-medium">{h.trim()}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dataRows.map((row, ri) => (
                <tr key={ri} className="even:bg-muted/50">
                  {row.map((cell, ci) => (
                    <td key={ci} className="border border-border px-3 py-2">{cell.trim()}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableRows = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("```")) {
      if (inCodeBlock) {
        inCodeBlock = false;
        flushCode();
      } else {
        inCodeBlock = true;
        codeLang = line.slice(3).trim();
      }
      continue;
    }

    if (inCodeBlock) {
      codeLines.push(line);
      continue;
    }

    if (line.startsWith("|") && line.endsWith("|")) {
      inTable = true;
      const cells = line.split("|").filter((c) => c !== "");
      tableRows.push(cells);
      continue;
    } else {
      if (inTable) {
        inTable = false;
        flushTable();
      }
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-xl font-bold mt-8 mb-3">{line.slice(3)}</h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-lg font-bold mt-6 mb-2">{line.slice(4)}</h3>
      );
    } else if (line.startsWith("- **")) {
      const match = line.match(/- \*\*(.+?)\*\*(.*)/);
      if (match) {
        elements.push(
          <li key={i} className="ml-4 list-disc text-muted-foreground mb-1">
            <strong>{match[1]}</strong>{match[2]}
          </li>
        );
      }
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={i} className="ml-4 list-disc text-muted-foreground mb-1">{line.slice(2)}</li>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={i} className="font-bold mb-4">{line.slice(2, -2)}</p>
      );
    } else if (line.trim() === "") {
      continue;
    } else {
      const text = line.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/`(.+?)`/g, "<code class='bg-muted px-1 rounded text-sm'>$1</code>");

      const sanitizeUrl = (url: string): string => {
        const lower = url.toLowerCase().trim();
        if (lower.startsWith('http://') || lower.startsWith('https://') || lower.startsWith('mailto:') || lower.startsWith('#')) {
          return url;
        }
        if (url.startsWith('/')) {
          return url;
        }
        return '#';
      };
      const withLinks = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match: string, text: string, url: string) => {
        return `<a href="${sanitizeUrl(url)}" class="text-primary hover:underline">${text}</a>`;
      });

      elements.push(
        <p key={i} className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: withLinks }} />
      );
    }
  }

  if (inCodeBlock) flushCode();
  if (inTable) flushTable();

  return elements;
}

export function BlogPostContent({ slug }: { slug: string }) {
  const { t, locale } = useLocale();
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return null;

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">{t("notFound.backHome")}</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-foreground">{t("nav.blog")}</Link>
        <span>/</span>
        <span className="text-foreground truncate">{post.titleZh ? (locale === 'zh' ? post.titleZh : post.title) : post.title}</span>
      </nav>

      <article>
        <header className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <span className="px-2 py-0.5 rounded-full bg-secondary text-xs font-medium">
              {t(`blog.categories.${post.category}`)}
            </span>
            <span>·</span>
            <time>{post.date}</time>
            <span>·</span>
            <span>{t("blog.minRead", { count: post.readTime.split(" ")[0] })}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {post.titleZh ? (locale === 'zh' ? post.titleZh : post.title) : post.title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {post.descriptionZh ? (locale === 'zh' ? post.descriptionZh : post.description) : post.description}
          </p>
        </header>

        {getBlogImage(slug) && (
          <div className="mb-8 rounded-xl overflow-hidden border border-border card-shadow">
            <img
              src={getBlogImage(slug)!}
              alt={`${post.titleZh ? (locale === 'zh' ? post.titleZh : post.title) : post.title} — ToolboxPro screenshot`}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        )}

        <div className="prose-custom">
          {renderMarkdown(post.contentZh ? (locale === "zh" ? post.contentZh : post.content) : post.content)}
        </div>

        {post.toolSlug && (
          <div className="mt-10 p-6 rounded-lg border bg-card text-center">
            <p className="text-muted-foreground mb-3">
              {t("blog.tryIt")}
            </p>
            <Link
              href={`/tools/${post.toolSlug}`}
              className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              {t("blog.tryTool")} {(post.titleZh ? (locale === 'zh' ? post.titleZh : post.title) : post.title).split("—")[0].trim()} →
            </Link>
          </div>
        )}
      </article>

      {/* Blog In-Article Ad */}
      <AdUnit slot="8703564630" format="horizontal" className="max-w-3xl mx-auto" />

      {/* Related posts */}
      <section className="mt-12 pt-8 border-t">
        <h2 className="text-xl font-bold mb-4">{t("blog.title")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {blogPosts
            .filter((p) => p.slug !== slug)
            .slice(0, 4)
            .map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
              >
                <p className="font-medium mb-1">{p.titleZh ? (locale === 'zh' ? p.titleZh : p.title) : p.title}</p>
                <p className="text-xs text-muted-foreground">{t("blog.minRead", { count: p.readTime.split(" ")[0] })}</p>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
