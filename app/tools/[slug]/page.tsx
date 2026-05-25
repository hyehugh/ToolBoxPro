import { tools, getTool } from "@/lib/tools/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ToolPageContent } from "./tool-page-content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return {};
  return {
    title: `${tool.name} — Free Online Tool`,
    description: `Free online ${tool.name}. ${tool.description}. No signup, no upload, privacy first.`,
    openGraph: {
      title: `${tool.name} | ToolboxPro`,
      description: tool.description,
    },
  };
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();

  return <ToolPageContent slug={slug} />;
}
