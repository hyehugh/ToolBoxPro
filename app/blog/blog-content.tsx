"use client";

import { blogPosts } from "@/lib/blog/data";
import { BlogSearch } from "./blog-search";
import { useLocale } from "@/lib/i18n/context";

export function BlogContent() {
  const { t } = useLocale();

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">{t("blog.title")}</h1>
      <p className="text-muted-foreground mb-8">
        {t("blog.subtitle")}
      </p>
      <BlogSearch posts={blogPosts} />
    </div>
  );
}
