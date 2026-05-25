"use client";

import Link from "next/link";
import { tools, categories } from "@/lib/tools/data";
import { blogPosts } from "@/lib/blog/data";
import { getBlogImage } from "@/lib/blog/images";
import HomeSearch from "./home-search";
import { PopularTools } from "./popular-tools";
import { useLocale } from "@/lib/i18n/context";

export default function HomePage() {
  const { t, locale } = useLocale();

  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* Hero */}
      <section className="py-16 md:py-24 text-center relative">
        {/* Warm ambient background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#f5ece4] dark:from-[#2a2422] to-transparent rounded-3xl mx-4" />
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          {t("home.heroTitle")}
          <br />
          <span className="text-primary">{t("home.heroTagline")}</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
          {t("home.heroDesc").replace("{count}", String(tools.length))}
        </p>
        <HomeSearch />
      </section>

      {/* Popular Tools */}
      <PopularTools />

      {/* Category Grid */}
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {categories.map((cat) => {
          const count = tools.filter((t) => t.category === cat.id).length;
          return (
            <Link
              key={cat.id}
              href={`/tools?category=${cat.id}`}
              className="flex flex-col items-center gap-2 p-6 rounded-lg border bg-card card-shadow hover:bg-accent transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span className="text-3xl">{cat.icon}</span>
              <span className="font-medium text-sm text-center">{t(`categories.${cat.id}`)}</span>
              <span className="text-xs text-muted-foreground">
                {count === 1
                  ? t("home.toolCount").replace("{count}", String(count))
                  : t("home.toolCountPlural").replace("{count}", String(count))}
              </span>
            </Link>
          );
        })}
      </section>

      {/* All Tools Grid */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">{t("home.allTools")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="flex items-start gap-4 p-4 rounded-lg border bg-card card-shadow card-shadow-hover hover:bg-accent transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span className="text-xl mt-1 font-mono">{tool.icon}</span>
              <div>
                <h3 className="font-medium">{t(`toolList.${tool.slug}.name`)}</h3>
                <p className="text-sm text-muted-foreground">
                  {t(`toolList.${tool.slug}.desc`)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Blog */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">{t("home.latestBlog")}</h2>
          <Link href="/blog" className="text-sm text-primary hover:underline">
            {t("home.viewAll")}
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogPosts.slice(0, 3).map((post) => {
            const img = getBlogImage(post.slug);
            return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-lg border bg-card card-shadow card-shadow-hover hover:bg-accent transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring overflow-hidden"
            >
              {img ? (
                <div className="aspect-video bg-muted overflow-hidden">
                  <img
                    src={img}
                    alt={post.titleZh ? (locale === 'zh' ? post.titleZh : post.title) : post.title}
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
                <p className="text-xs text-muted-foreground mb-1">
                  {t(`blog.categories.${post.category}`)} &middot; {t("blog.minRead", { count: post.readTime.split(" ")[0] })}
                </p>
                <h3 className="font-medium mb-1">{post.titleZh ? (locale === 'zh' ? post.titleZh : post.title) : post.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {post.descriptionZh ? (locale === 'zh' ? post.descriptionZh : post.description) : post.description}
                </p>
              </div>
            </Link>
          );
          })}
        </div>
      </section>

      {/* Why ToolboxPro */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">{t("home.whyTitle")}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {(t("home.whyItems") as { title: string; desc: string }[]).map(
            (item: { title: string; desc: string }) => (
              <div
                key={item.title}
                className="text-center p-6 rounded-lg border bg-card card-shadow"
              >
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
}
