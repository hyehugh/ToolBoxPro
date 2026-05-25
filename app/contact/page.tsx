import type { Metadata } from "next";
import { ContactContent } from "./contact-content";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the ToolboxPro team",
};

export default function ContactPage() {
  return <ContactContent />;
}
