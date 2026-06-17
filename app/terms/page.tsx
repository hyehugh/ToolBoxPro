import type { Metadata } from "next";
import { TermsContent } from "./terms-content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for ToolboxPro — free online tools for personal and commercial use. By using our tools, you agree to these terms.",
};

export default function TermsPage() {
  return <TermsContent />;
}
