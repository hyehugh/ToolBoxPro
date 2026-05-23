import { tools, categories } from "@/lib/tools/data";
import { Suspense } from "react";
import ToolsFilter from "./tools-filter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Tools",
  description: "Browse all free online tools: developer tools, PDF tools, image tools, text tools, and conversion tools.",
};

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">All Tools</h1>
      <p className="text-muted-foreground mb-8">
        {tools.length} free online tools. No signup required.
      </p>

      <Suspense fallback={<ToolsGridSkeleton />}>
        <ToolsFilter tools={tools} categories={categories} />
      </Suspense>
    </div>
  );
}

function ToolsGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="h-24 rounded-lg bg-muted animate-pulse" />
      ))}
    </div>
  );
}
