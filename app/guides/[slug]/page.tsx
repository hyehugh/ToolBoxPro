import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { guides, getGuideBySlug } from "@/lib/guides/data";
import { GuideDetailContent } from "./guide-detail-content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};

  return {
    title: guide.title,
    description: guide.description,
    alternates: {
      canonical: `https://trytoolboxpro.com/guides/${slug}`,
    },
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: "article",
      url: `https://trytoolboxpro.com/guides/${slug}`,
    },
    twitter: {
      card: "summary",
      title: guide.title,
      description: guide.description,
    },
  };
}

export default async function GuideDetailPage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    author: {
      "@type": "Organization",
      name: "ToolboxPro",
    },
    publisher: {
      "@type": "Organization",
      name: "ToolboxPro",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://trytoolboxpro.com/guides/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GuideDetailContent slug={slug} />
    </>
  );
}
