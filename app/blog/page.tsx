import Link from "next/link";
import { blogPosts } from "@/lib/blog/data";
import { getBlogImage } from "@/lib/blog/images";
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {blogPosts.map((post) => {
          const img = getBlogImage(post.slug);
          return (
            <article key={post.slug} className="rounded-lg border bg-card card-shadow card-shadow-hover hover:bg-accent transition-all duration-200 overflow-hidden">
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
    </div>
  );
}
