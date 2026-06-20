"use client";

import Link from "next/link";
import { guides } from "@/lib/guides/data";
import { useLocale } from "@/lib/i18n/context";

const categoryColors: Record<string, string> = {
  comparison: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  security: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
  design: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  productivity: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
};

export default function GuidesPage() {
  const { locale } = useLocale();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
          {locale === "zh" ? "工具指南与对比" : "Tools & Guides"}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          {locale === "zh"
            ? "深度对比、使用教程和最佳实践——帮你选对工具、用好工具。"
            : "In-depth comparisons, tutorials, and best practices — helping you pick the right tool and use it well."}
        </p>
      </div>

      <div className="grid gap-6">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="group block p-6 rounded-xl border bg-card card-shadow hover:bg-accent transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <div className="flex items-center gap-3 mb-3">
              <span
                className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                  categoryColors[guide.category] || "bg-muted text-muted-foreground"
                }`}
              >
                {guide.category}
              </span>
              <span className="text-xs text-muted-foreground">
                {guide.readTime}
              </span>
            </div>
            <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              {locale === "zh" && guide.titleZh ? guide.titleZh : guide.title}
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {locale === "zh" && guide.descriptionZh
                ? guide.descriptionZh
                : guide.description}
            </p>
            <div className="mt-4 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              {locale === "zh" ? "阅读全文 →" : "Read more →"}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
