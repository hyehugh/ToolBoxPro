"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { tools, categories } from "@/lib/tools/data";
import { blogPosts } from "@/lib/blog/data";
import { getBlogImage } from "@/lib/blog/images";
import HomeSearch from "./home-search";
import { PopularTools } from "./popular-tools";
import { useLocale } from "@/lib/i18n/context";
import { useRecentTools } from "@/lib/hooks/use-recent-tools";
import { useFavorites } from "@/lib/hooks/use-favorites";
import dynamic from "next/dynamic";

const AdUnit = dynamic(
  () => import("@/components/ads/ad-unit").then((m) => m.AdUnit),
  { ssr: false }
);

const ToolCard = dynamic(
  () => import("@/components/tool-card").then((m) => m.ToolCard)
);

const CategoryCard = dynamic(
  () => import("@/components/category-card").then((m) => m.CategoryCard)
);

export default function HomePage() {
  const { t, tRaw, locale } = useLocale();
  const { recent } = useRecentTools();
  const { favorites } = useFavorites();
  const [rolling, setRolling] = useState(false);

  const recentTools = useMemo(
    () => recent.map((slug) => tools.find((tool) => tool.slug === slug)).filter(Boolean),
    [recent]
  );

  const favoriteTools = useMemo(
    () => favorites.map((slug) => tools.find((tool) => tool.slug === slug)).filter(Boolean),
    [favorites]
  );

  const handleRandomTool = () => {
    setRolling(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * tools.length);
      window.location.href = `/tools/${tools[randomIndex].slug}`;
    }, 500);
  };

  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* Hero */}
      <section className="pt-16 md:pt-24 pb-6 text-center relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#f5ece4] dark:from-[#2a2422] to-transparent rounded-3xl mx-4" />
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          {t("home.heroTitle")}
          <br />
          <span className="text-primary">{t("home.heroTagline")}</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
          {t("home.heroDesc").replace("{count}", String(tools.length))}
        </p>
        <HomeSearch
          rightAction={
            <button
              onClick={handleRandomTool}
              className="h-11 px-4 rounded-lg border bg-card card-shadow hover:bg-accent transition-all duration-200 text-sm font-medium whitespace-nowrap flex items-center gap-1.5"
            >
              <span className={`inline-block ${rolling ? "dice-roll" : ""}`}>🎲</span>
              {locale === "zh" ? "随机" : "Random"}
            </button>
          }
        />
      </section>

      {/* Recent Tools */}
      {recentTools.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-4 text-muted-foreground">
            {locale === "zh" ? "🕐 最近使用" : "🕐 Recent"}
          </h2>
          <div className="flex flex-wrap gap-3">
            {recentTools.map((tool) => tool && (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-card card-shadow hover:bg-accent transition-all duration-200 text-sm"
              >
                <span className="font-mono">{tool.icon}</span>
                <span>{t(`toolList.${tool.slug}.name`)}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Favorites */}
      {favoriteTools.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-4 text-muted-foreground">
            {locale === "zh" ? "⭐ 我的收藏" : "⭐ Favorites"}
          </h2>
          <div className="flex flex-wrap gap-3">
            {favoriteTools.map((tool) => tool && (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-card card-shadow hover:bg-accent transition-all duration-200 text-sm"
              >
                <span className="font-mono">{tool.icon}</span>
                <span>{t(`toolList.${tool.slug}.name`)}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Popular Tools */}
      <PopularTools />

      {/* Homepage Banner Ad */}
      <AdUnit slot="5913749762" format="horizontal" className="max-w-4xl mx-auto" />

      {/* Category Grid */}
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {categories.map((cat) => {
          const count = tools.filter((t) => t.category === cat.id).length;
          return (
            <CategoryCard
              key={cat.id}
              id={cat.id}
              icon={cat.icon}
              name={t(`categories.${cat.id}`)}
              count={count === 1
                ? t("home.toolCount").replace("{count}", String(count))
                : t("home.toolCountPlural").replace("{count}", String(count))}
            />
          );
        })}
      </section>

      {/* All Tools Grid */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">{t("home.allTools")}</h2>
          <Link href="/guides" className="text-sm text-primary hover:underline">
            {locale === "zh" ? "📖 工具指南" : "📖 Guides"}
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-fr">
          {tools.map((tool) => (
            <ToolCard
              key={tool.slug}
              slug={tool.slug}
              icon={tool.icon}
              name={t(`toolList.${tool.slug}.name`)}
              desc={t(`toolList.${tool.slug}.desc`)}
            />
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
          {(tRaw("home.whyItems") as { title: string; desc: string }[]).map(
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
