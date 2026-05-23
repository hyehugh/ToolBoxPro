import Link from "next/link";
import { blogPosts } from "@/lib/blog/data";
import type { Metadata } from "next";

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
      <div className="space-y-6">
        {blogPosts.map((post) => (
          <article key={post.slug} className="p-6 rounded-lg border bg-card card-shadow card-shadow-hover hover:bg-accent transition-all duration-200">
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                <span>{post.category}</span>
                <span>·</span>
                <time>{post.date}</time>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-muted-foreground">
                {post.description}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
