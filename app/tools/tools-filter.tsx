"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { type Tool, type Category } from "@/lib/tools/data";
import { useLocale } from "@/lib/i18n/context";
import { ToolCard } from "@/components/tool-card";

interface Props {
  tools: Tool[];
  categories: Category[];
}

export default function ToolsFilter({ tools, categories }: Props) {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { t } = useLocale();

  useEffect(() => {
    const cat = searchParams.get("category");
    setSelectedCategory(cat);
  }, [searchParams]);

  const filteredTools = selectedCategory
    ? tools.filter((t) => t.category === selectedCategory)
    : tools;

  return (
    <>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Link
          href="/tools"
          className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${
            !selectedCategory
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-background border-input hover:bg-accent"
          }`}
        >
          {t("search.allCategories")}
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/tools?category=${cat.id}`}
            className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${
              selectedCategory === cat.id
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-background border-input hover:bg-accent"
            }`}
          >
            {t(`categories.${cat.id}`)}
          </Link>
        ))}
      </div>

      {/* Tool grid — same 4-column layout as homepage */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-fr">
        {filteredTools.map((tool) => (
          <ToolCard
            key={tool.slug}
            slug={tool.slug}
            icon={tool.icon}
            name={t(`toolList.${tool.slug}.name`)}
            desc={t(`toolList.${tool.slug}.desc`)}
          />
        ))}
      </div>

      {filteredTools.length === 0 && (
        <p className="text-center text-muted-foreground py-12">
          {t("search.noResultsInCategory")}
        </p>
      )}
    </>
  );
}
