import type { Metadata } from "next";
import { BlogContent } from "./blog-content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Learn how to use online tools effectively. Tutorials, guides, and tips for developers, designers, and everyday users.",
  alternates: {
    canonical: "https://trytoolboxpro.com/blog",
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
