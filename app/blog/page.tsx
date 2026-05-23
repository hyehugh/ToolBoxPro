import { blogPosts } from "@/lib/blog/data";
import type { Metadata } from "next";
import { BlogSearch } from "./blog-search";

export const metadata: Metadata = {
  title: "Blog",
  description: "Learn how to use online tools effectively. Tutorials, guides, and tips for developers, designers, and everyday users.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Blog</h1>
      <p className="text-muted-foreground mb-8">
        Tutorials, guides, and tips for getting the most out of online tools.
      </p>
      <BlogSearch posts={blogPosts} />
    </div>
  );
}
