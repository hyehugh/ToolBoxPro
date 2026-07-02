import { getBlogPostWithContent, getAllBlogPosts } from "@/lib/blog/loader";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BlogPostContent } from "./blog-post-content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostWithContent(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://trytoolboxpro.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `https://trytoolboxpro.com/blog/${slug}`,
      publishedTime: post.date,
      images: post.toolSlug
        ? [
            {
              url: `/api/og-image?slug=${post.toolSlug}`,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostWithContent(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    url: `https://trytoolboxpro.com/blog/${slug}`,
    author: {
      "@type": "Organization",
      name: "ToolboxPro",
      url: "https://trytoolboxpro.com",
    },
    publisher: {
      "@type": "Organization",
      name: "ToolboxPro",
      url: "https://trytoolboxpro.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://trytoolboxpro.com/blog/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostContent
        slug={slug}
        content={post.content}
        contentZh={post.contentZh}
      />
    </>
  );
}
