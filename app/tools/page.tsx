import { tools, categories } from "@/lib/tools/data";
import { Suspense } from "react";
import { ToolsPageContent } from "./tools-page-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Tools",
  description: "Browse all free online tools: developer tools, PDF tools, image tools, text tools, and conversion tools.",
  alternates: {
    canonical: "https://trytoolboxpro.com/tools",
  },
};

export default function ToolsPage() {
  return <ToolsPageContent />;
}
