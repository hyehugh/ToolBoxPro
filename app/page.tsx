import Link from "next/link";
import { tools, categories } from "@/lib/tools/data";
import { blogPosts } from "@/lib/blog/data";
import { getBlogImage } from "@/lib/blog/images";
import HomeSearch from "./home-search";
import { PopularTools } from "./popular-tools";

const sectionTitle = "text-2xl font-bold mb-6";
const cardHover =
  "border bg-card card-shadow card-shadow-hover hover:bg-accent transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* Hero */}
      <section className="relative py-16 md:py-20 mb-8 text-center">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#f5ece4] dark:from-[#2a2422] to-transparent rounded-3xl" />
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Free Online Tools.
          <br />
          <span className="text-primary">Privacy First.</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
          {tools.length}+ tools for developers, designers, and everyday tasks.
          No signup. No upload. Files stay on your device.
        </p>
        <HomeSearch />
      </section>

      {/* Trending tools */}
      <PopularTools />

      {/* Categories */}
      <section className="mb-16">
        <h2 className={sectionTitle}>Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => {
            const count = tools.filter((t) => t.category === cat.id).length;
            return (
              <Link
                key={cat.id}
                href={`/tools?category=${cat.id}`}
                className={`flex flex-col items-center gap-2 p-6 rounded-lg ${cardHover}`}
              >
                <span className="text-3xl">{cat.icon}</span>
                <span className="font-medium text-sm text-center">{cat.name}</span>
                <span className="text-xs text-muted-foreground">
                  {count} tool{count !== 1 ? "s" : ""}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* All Tools */}
      <section className="mb-16">
        <h2 className={sectionTitle}>All Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className={`flex items-start gap-4 p-4 rounded-lg ${cardHover}`}
            >
              <span className="text-xl mt-1 font-mono shrink-0">{tool.icon}</span>
              <div className="min-w-0">
                <h3 className="font-medium text-sm">{tool.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-1">
                  {tool.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Blog */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Latest from Blog</h2>
          <Link href="/blog" className="text-sm text-primary hover:underline shrink-0">
            View all &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogPosts.slice(0, 3).map((post) => {
            const img = getBlogImage(post.slug);
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`rounded-lg overflow-hidden ${cardHover}`}
              >
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
                  <h3 className="font-bold text-sm mb-1 hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {post.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Why ToolboxPro */}
      <section className="mb-16">
        <h2 className={`${sectionTitle} text-center`}>Why ToolboxPro?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: "No Signup", desc: "Just open and use" },
            { title: "Privacy First", desc: "Files stay on your device" },
            { title: "No Limits", desc: "Unlimited free usage" },
            { title: "AI Enhanced", desc: "Smarter tools" },
          ].map((item) => (
            <div
              key={item.title}
              className="text-center p-6 rounded-lg border bg-card"
            >
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
