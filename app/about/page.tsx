import type { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about ToolboxPro — free online tools with privacy first",
};

export default function AboutPage() {
  return <AboutContent />;
}
