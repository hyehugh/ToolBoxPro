/**
 * Blog Content Loader
 *
 * Reads blog post metadata from data.ts (compact) and content from MD files.
 * Content is loaded on-demand via dynamic imports, not bundled into the client.
 */
import fs from "fs";
import path from "path";
import { blogPosts, type BlogPost } from "./data";

const CONTENT_DIR = path.join(process.cwd(), "content/blog");

/**
 * Get a blog post with its full MD content loaded.
 * Used by server components (generateMetadata, page rendering).
 */
export function getBlogPostWithContent(slug: string): (BlogPost & { content: string; contentZh?: string }) | null {
  const meta = blogPosts.find((p) => p.slug === slug);
  if (!meta) return null;

  const mdPath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(mdPath)) return null;

  const raw = fs.readFileSync(mdPath, "utf-8");

  // Strip frontmatter (between --- delimiters)
  const content = raw.replace(/^---[\s\S]*?---\n/, "").trim();

  // Load Chinese content if available (for language toggle)
  const zhDir = path.join(process.cwd(), "lib/blog/zh");
  const zhPath = path.join(zhDir, `${slug}.md`);
  let contentZh: string | undefined;
  if (fs.existsSync(zhPath)) {
    const rawZh = fs.readFileSync(zhPath, "utf-8");
    contentZh = rawZh.replace(/^---[\s\S]*?---\n/, "").trim();
  }

  return { ...meta, content, contentZh };
}

/**
 * Get all blog posts with metadata only (no content).
 * Used for listing pages.
 */
export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}

/**
 * Get a blog post metadata only (no content).
 */
export function getBlogPostMeta(slug: string): BlogPost | null {
  return blogPosts.find((p) => p.slug === slug) ?? null;
}
