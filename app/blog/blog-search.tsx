"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { getBlogImage } from "@/lib/blog/images";
import type { BlogPost } from "@/lib/blog/data";

export function BlogSearch({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return posts;
    const q = query.toLowerCase();
    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }, [query, posts]);

  return (
    <div>
      <div className="relative max-w-md mb-8">
        <input
          type="search"
          placeholder="Search articles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full h-10 pl-4 pr-10 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground text-sm"
          >
            ✕
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          <p className="text-lg mb-1">No articles found</p>
          <p className="text-sm">Try a different search term</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filtered.map((post) => {
            const img = getBlogImage(post.slug);
            return (
              <article
                key={post.slug}
                className="rounded-lg border bg-card card-shadow card-shadow-hover hover:bg-accent transition-all duration-200 overflow-hidden"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  {img ? (
                    <div className="aspect-video bg-muted overflow-hidden">
                      <img
                        src={img}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary flex items-center justify-center">
                      <span className="text-4xl opacity-30">📝</span>
                    </div>
                  )}
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <span className="px-2 py-0.5 rounded-full bg-secondary text-xs font-medium">
                        {post.category}
                      </span>
                      <span>·</span>
                      <time>{post.date}</time>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="font-bold mb-1 hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {post.description}
                    </p>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
