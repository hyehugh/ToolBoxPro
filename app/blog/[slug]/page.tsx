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
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostWithContent(slug);
  if (!post) notFound();

  return (
    <BlogPostContent
      slug={slug}
      content={post.content}
      contentZh={post.contentZh}
    />
  );
}
