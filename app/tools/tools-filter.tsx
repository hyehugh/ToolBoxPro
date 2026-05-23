"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { type Tool, type Category } from "@/lib/tools/data";

interface Props {
  tools: Tool[];
  categories: Category[];
}

export default function ToolsFilter({ tools, categories }: Props) {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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
          All
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
            {cat.name}
          </Link>
        ))}
      </div>

      {/* Tool grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="flex items-start gap-4 p-4 rounded-lg border bg-card card-shadow card-shadow-hover hover:bg-accent transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span className="text-xl mt-1 font-mono">{tool.icon}</span>
            <div>
              <h3 className="font-medium">{tool.name}</h3>
              <p className="text-sm text-muted-foreground">
                {tool.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {filteredTools.length === 0 && (
        <p className="text-center text-muted-foreground py-12">
          No tools found in this category.
        </p>
      )}
    </>
  );
}
