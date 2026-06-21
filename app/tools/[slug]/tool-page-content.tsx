"use client";

import { useEffect } from "react";
import { tools, getTool, type Tool } from "@/lib/tools/data";
import Link from "next/link";
import { useLocale } from "@/lib/i18n/context";
import { ToolWidget } from "@/components/tools/tool-widget";
import { ErrorBoundary } from "@/components/error-boundary";
import { blogPosts, type BlogPost } from "@/lib/blog/data";
import { useRecentTools } from "@/lib/hooks/use-recent-tools";
import { useFavorites } from "@/lib/hooks/use-favorites";
import { getToolScenarios } from "@/lib/tools/scenarios";
import { toolComponents } from "@/lib/tools/registry";
import { getToolFaqs } from "@/lib/tools/faq";
import { FaqSection } from "@/components/faq-section";

import dynamic from "next/dynamic";

const AdUnit = dynamic(
  () => import("@/components/ads/ad-unit").then((m) => m.AdUnit),
  { ssr: false }
);

export function ToolPageContent({ slug }: { slug: string }) {
  const tool = getTool(slug);
  if (!tool) return null;

  const ToolComponent = toolComponents[slug];
  const related = tools
    .filter((rt) => rt.category === tool.category && rt.slug !== tool.slug)
    .slice(0, 4);
  const relatedPosts = blogPosts.filter((p) => p.toolSlug === slug).slice(0, 3);

  return (
    <ToolPageInner slug={slug} tool={tool} ToolComponent={ToolComponent} related={related} relatedPosts={relatedPosts} />
  );
}

function ToolPageInner({ slug, tool, ToolComponent, related, relatedPosts }: {
  slug: string;
  tool: Tool;
  ToolComponent: React.ComponentType | undefined;
  related: Tool[];
  relatedPosts: BlogPost[];
}) {
  const { t, locale } = useLocale();
  const { addRecent } = useRecentTools();
  const { toggleFavorite, isFavorite } = useFavorites();
  const scenarios = getToolScenarios(slug);
  const faqs = getToolFaqs(slug);

  // Track as recently used
  useEffect(() => { addRecent(slug); }, [slug]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">{t("notFound.backHome")}</Link>
        <span aria-hidden="true">/</span>
        <Link href={`/tools?category=${tool.category}`} className="hover:text-foreground capitalize">
          {t(`categories.${tool.category}`)}
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-foreground" aria-current="page">{t(`toolList.${tool.slug}.name`)}</span>
      </nav>

      <div className="flex items-start justify-between mb-2">
        <h1 className="text-3xl font-bold">{t(`toolList.${tool.slug}.name`)}</h1>
        <button
          onClick={() => toggleFavorite(slug)}
          className={`favorite-btn text-2xl flex-shrink-0 ml-4 ${isFavorite(slug) ? "active" : "text-muted-foreground"}`}
          aria-label={isFavorite(slug) ? (locale === "zh" ? "取消收藏" : "Unfavorite") : (locale === "zh" ? "收藏" : "Favorite")}
        >
          {isFavorite(slug) ? "❤️" : "🤍"}
        </button>
      </div>
      <p className="text-muted-foreground mb-8">{t(`toolList.${tool.slug}.desc`)}</p>

      <ErrorBoundary>
        <ToolWidget title={t(`toolList.${tool.slug}.name`)}>
          {ToolComponent ? <ToolWidgetWithTooltip Component={ToolComponent} /> : <p className="text-muted-foreground">{t("common.loading")}</p>}
        </ToolWidget>
      </ErrorBoundary>

      {/* Usage Scenarios */}
      <section className="mt-10" aria-labelledby="scenarios-heading">
        <h2 id="scenarios-heading" className="text-lg font-bold mb-4 text-muted-foreground">
          {locale === "zh" ? "💡 使用场景" : "💡 What can I use this for?"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {scenarios.map((s) => (
            <div key={s.title} className="scenario-card p-4 rounded-lg border bg-card">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg" aria-hidden="true">{s.icon}</span>
                <h3 className="font-medium text-sm">{locale === "zh" ? s.titleZh : s.title}</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{locale === "zh" ? s.descriptionZh : s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection faqs={faqs} />

      {/* Tool Page Ad */}
      <AdUnit slot="2800459707" format="horizontal" className="max-w-4xl mx-auto" />

      {/* Related tools */}
      {related.length > 0 && (
        <section className="mt-12" aria-labelledby="related-tools-heading">
          <h2 id="related-tools-heading" className="text-xl font-bold mb-4">{t("blog.relatedTools")}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {related.map((rt) => (
              <Link
                key={rt.slug}
                href={`/tools/${rt.slug}`}
                className="p-3 rounded-lg border bg-card card-shadow card-shadow-hover hover:bg-accent transition-all duration-200 text-sm"
              >
                <span className="font-medium">{t(`toolList.${rt.slug}.name`)}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {relatedPosts.length > 0 && (
        <section className="mt-10" aria-labelledby="related-posts-heading">
          <h2 id="related-posts-heading" className="text-xl font-bold mb-4">{t("blog.relatedArticles")}</h2>
          <div className="space-y-3">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block p-4 rounded-lg border bg-card card-shadow card-shadow-hover hover:bg-accent transition-all duration-200"
              >
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                  <span>{t(`blog.categories.${post.category}`)}</span>
                  <span aria-hidden="true">·</span>
                  <span>{t("blog.minRead", { count: post.readTime.split(" ")[0] })}</span>
                </div>
                <h3 className="font-medium text-sm hover:text-primary transition-colors">
                  {post.titleZh ? (locale === 'zh' ? post.titleZh : post.title) : post.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                  {post.descriptionZh ? (locale === 'zh' ? post.descriptionZh : post.description) : post.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function ToolWidgetWithTooltip({ Component }: { Component: React.ComponentType }) {
  const { locale } = useLocale();
  return (
    <div className="tooltip-trigger relative">
      <Component />
      <div className="absolute top-2 right-2 z-10">
        <span className="tooltip-trigger inline-flex items-center justify-center w-6 h-6 rounded-full bg-muted text-muted-foreground text-xs cursor-help" role="tooltip">
          ?
          <span className="tooltip-content">
            {locale === "zh"
              ? "所有处理都在浏览器本地完成，数据不会上传到服务器"
              : "All processing happens locally in your browser — no data is uploaded"}
          </span>
        </span>
      </div>
    </div>
  );
}
