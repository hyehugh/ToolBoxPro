import { tools, getTool } from "@/lib/tools/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ToolPageContent } from "./tool-page-content";
import { getToolFaqs, generateFaqSchema } from "@/lib/tools/faq";

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
    description: `Free online ${tool.name}. ${tool.description} No signup, no upload, privacy first.`,
    alternates: {
      canonical: `https://trytoolboxpro.com/tools/${slug}`,
    },
    openGraph: {
      title: `${tool.name} | ToolboxPro`,
      description: tool.description,
      url: `https://trytoolboxpro.com/tools/${slug}`,
      type: "website",
      siteName: "ToolboxPro",
    },
    twitter: {
      card: "summary",
      title: `${tool.name} — Free Online Tool`,
      description: tool.description,
    },
  };
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();

  const faqs = getToolFaqs(slug);
  const faqSchema = generateFaqSchema(faqs);

  const appJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.name,
    description: tool.description,
    url: `https://trytoolboxpro.com/tools/${slug}`,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any (Web Browser)",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    publisher: {
      "@type": "Organization",
      name: "ToolboxPro",
      url: "https://trytoolboxpro.com",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://trytoolboxpro.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tools",
        item: "https://trytoolboxpro.com/tools",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: tool.name,
        item: `https://trytoolboxpro.com/tools/${slug}`,
      },
    ],
  };

  const howtoJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to Use ${tool.name}`,
    description: tool.description,
    tool: {
      "@type": "HowToTool",
      name: tool.name,
    },
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: `Open ${tool.name}`,
        text: `Navigate to https://trytoolboxpro.com/tools/${slug} in your browser. No signup or installation required.`,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Input your data",
        text: "Paste, type, or upload your data directly into the tool interface. All processing happens locally in your browser.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Get instant results",
        text: "The tool processes your input immediately. Copy, download, or use the results as needed.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howtoJsonLd) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <ToolPageContent slug={slug} />
    </>
  );
}
