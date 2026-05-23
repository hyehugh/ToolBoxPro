import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ToolboxPro — Free Online Tools, Privacy First",
    template: "%s | ToolboxPro",
  },
  description:
    "100+ free online tools for developers, designers, and everyday tasks. Format JSON, compress images, merge PDFs, generate QR codes — all in your browser. No signup. No upload.",
  keywords: [
    "free online tools",
    "json formatter",
    "image compressor",
    "pdf merger",
    "qr code generator",
    "base64 encoder",
    "regex tester",
    "color converter",
  ],
  openGraph: {
    title: "ToolboxPro — Free Online Tools",
    description:
      "100+ free online tools. No signup. Files stay on your device.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
