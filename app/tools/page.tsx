import { tools, categories, getToolsByCategory } from "@/lib/tools/data";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Tools",
  description: "Browse all free online tools: developer tools, PDF tools, image tools, text tools, and conversion tools.",
};

interface Props {
  searchParams: Promise<{ category?: string }>;
}

export default async function ToolsPage({ searchParams }: Props) {
  const { category } = await searchParams;
  const selectedCategory = category || null;
  const filteredTools = selectedCategory
    ? getToolsByCategory(selectedCategory)
    : tools;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">
        {selectedCategory
          ? `${categories.find((c) => c.id === selectedCategory)?.name || "All"} Tools`
          : "All Tools"}
      </h1>
      <p className="text-muted-foreground mb-8">
        {filteredTools.length} free online tools. No signup required.
      </p>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Link
          href="/tools"
          className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
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
            className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
              selectedCategory === cat.id
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-background border-input hover:bg-accent"
            }`}
          >
            {cat.icon} {cat.name}
          </Link>
        ))}
      </div>

      {/* Tool grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="flex items-start gap-4 p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
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
    </div>
  );
}
