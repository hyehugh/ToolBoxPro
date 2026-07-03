"use client";

import { ToolCard } from "@/components/tool-card";
import type { Tool } from "@/lib/tools/data";
import { useLocale } from "@/lib/i18n/context";

interface CategoryPageContentProps {
  tools: Tool[];
}

export function CategoryPageContent({ tools }: CategoryPageContentProps) {
  const { t } = useLocale();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
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
  );
}
