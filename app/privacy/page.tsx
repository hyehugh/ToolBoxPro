import type { Metadata } from "next";
import { PrivacyContent } from "./privacy-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "ToolboxPro privacy policy — we do not upload or store your files. Learn how we protect your data with Google Analytics, AdSense, and Vercel.",
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
