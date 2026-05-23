import { blogPosts } from "@/lib/blog/data";
import { getBlogImage } from "@/lib/blog/images";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

// Simple markdown renderer (handles h2, h3, p, code blocks, lists, links, tables)
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
      const dataRows = tableRows.slice(2); // skip separator row

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

    // Headings
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-xl font-bold mt-8 mb-3">{line.slice(3)}</h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-lg font-bold mt-6 mb-2">{line.slice(4)}</h3>
      );
    } else if (line.startsWith("- **")) {
      // Bold list item
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
    } else if (line.startsWith("|") && line.endsWith("|")) {
      // Table row (already handled above)
    } else if (line.startsWith("**") && line.endsWith("**")) {
      // Bold line
      elements.push(
        <p key={i} className="font-bold mb-4">{line.slice(2, -2)}</p>
      );
    } else if (line.trim() === "") {
      // Empty line - skip
      continue;
    } else {
      // Regular paragraph - handle inline formatting
      const text = line.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/`(.+?)`/g, "<code class='bg-muted px-1 rounded text-sm'>$1</code>");
      
      // Check for link pattern [text](/path) — sanitize URL to prevent javascript: XSS
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

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-foreground">Blog</Link>
        <span>/</span>
        <span className="text-foreground truncate">{post.title}</span>
      </nav>

      <article>
        <header className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <span className="px-2 py-0.5 rounded-full bg-secondary text-xs font-medium">
              {post.category}
            </span>
            <span>·</span>
            <time>{post.date}</time>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {post.description}
          </p>
        </header>

        {getBlogImage(slug) && (
          <div className="mb-8 rounded-xl overflow-hidden border border-border card-shadow">
            <img
              src={getBlogImage(slug)!}
              alt={`${post.title} — ToolboxPro screenshot`}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        )}

        <div className="prose-custom">
          {renderMarkdown(post.content)}
        </div>

        {post.toolSlug && (
          <div className="mt-10 p-6 rounded-lg border bg-card text-center">
            <p className="text-muted-foreground mb-3">
              Try it yourself with our free online tool:
            </p>
            <Link
              href={`/tools/${post.toolSlug}`}
              className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Try {post.title.split("—")[0].trim()} →
            </Link>
          </div>
        )}
      </article>

      {/* Related posts */}
      <section className="mt-12 pt-8 border-t">
        <h2 className="text-xl font-bold mb-4">More Articles</h2>
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
                <p className="font-medium mb-1">{p.title}</p>
                <p className="text-xs text-muted-foreground">{p.readTime}</p>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
