"use client";

import { use } from "react";
import Link from "next/link";
import { getGuideBySlug, guides } from "@/lib/guides/data";
import { useLocale } from "@/lib/i18n/context";

export default function GuideDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { locale } = useLocale();
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">
          {locale === "zh" ? "指南未找到" : "Guide Not Found"}
        </h1>
        <p className="text-muted-foreground mb-6">
          {locale === "zh"
            ? "抱歉，找不到这篇指南。"
            : "Sorry, we couldn't find that guide."}
        </p>
        <Link href="/guides" className="text-primary hover:underline">
          {locale === "zh" ? "← 返回指南列表" : "← Back to Guides"}
        </Link>
      </div>
    );
  }

  // Related guides (excluding current)
  const related = guides.filter((g) => g.slug !== slug).slice(0, 2);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">
          {locale === "zh" ? "首页" : "Home"}
        </Link>
        <span>/</span>
        <Link href="/guides" className="hover:text-foreground">
          {locale === "zh" ? "指南" : "Guides"}
        </Link>
        <span>/</span>
        <span className="text-foreground truncate">
          {locale === "zh" && guide.titleZh ? guide.titleZh : guide.title}
        </span>
      </nav>

      <article>
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
              {guide.category}
            </span>
            <span className="text-sm text-muted-foreground">{guide.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {locale === "zh" && guide.titleZh ? guide.titleZh : guide.title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {locale === "zh" && guide.descriptionZh
              ? guide.descriptionZh
              : guide.description}
          </p>
        </header>

        {/* Guide content */}
        <div className="prose-custom">
          {guide.content ? (
            <div
              className="text-muted-foreground leading-relaxed whitespace-pre-line"
              dangerouslySetInnerHTML={{
                __html: (locale === "zh" && guide.contentZh ? guide.contentZh : guide.content)
                  .replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold mt-8 mb-4 text-foreground">$1</h2>')
                  .replace(/^### (.+)$/gm, '<h3 class="text-lg font-semibold mt-6 mb-3 text-foreground">$1</h3>')
                  .replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground">$1</strong>')
                  .replace(/- \*\*(.+?)\*\*: (.+)$/gm, '<li><strong class="text-foreground">$1</strong>: $2</li>')
                  .replace(/^- (.+)$/gm, '<li class="ml-4 list-disc">$1</li>')
                  .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>')
                  .replace(/\| (.+) \|/g, (match) => {
                    const cells = match.split('|').filter(c => c.trim());
                    return '<tr>' + cells.map(c => `<td class="border px-3 py-2">${c.trim()}</td>`).join('') + '</tr>';
                  })
                  .replace(/\n\n/g, '<br/><br/>')
              }}
            />
          ) : (
            <>
              <p className="text-muted-foreground mb-4">
                {locale === "zh"
                  ? "这篇指南正在编写中。敬请期待完整内容！"
                  : "This guide is currently being written. Full content coming soon!"}
              </p>
              <p className="text-muted-foreground mb-4">
                {locale === "zh"
                  ? "在等待期间，你可以先试试我们的相关工具："
                  : "While you wait, try our related tools:"}
              </p>
            </>
          )}
          <div className="flex flex-wrap gap-3 mt-6">
            <Link
              href="/tools/json-formatter"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              {locale === "zh" ? "JSON 格式化器" : "JSON Formatter"}
            </Link>
            <Link
              href="/tools/password-generator"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              {locale === "zh" ? "密码生成器" : "Password Generator"}
            </Link>
          </div>
        </div>
      </article>

      {/* Related guides */}
      {related.length > 0 && (
        <section className="mt-12 pt-8 border-t">
          <h2 className="text-xl font-bold mb-4">
            {locale === "zh" ? "相关指南" : "Related Guides"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {related.map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
              >
                <p className="font-medium mb-1">
                  {locale === "zh" && g.titleZh ? g.titleZh : g.title}
                </p>
                <p className="text-xs text-muted-foreground">{g.readTime}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
// 2026年06月26日 14:52:32
