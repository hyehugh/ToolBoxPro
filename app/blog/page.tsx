import { blogPosts } from "@/lib/blog/data";
import type { Metadata } from "next";
import { BlogContent } from "./blog-content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Learn how to use online tools effectively. Tutorials, guides, and tips for developers, designers, and everyday users.",
};

export default function BlogPage() {
  return <BlogContent />;
}
