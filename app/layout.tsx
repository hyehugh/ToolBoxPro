import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

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
    url: "https://tool-box-pro-ruby.vercel.app",
    siteName: "ToolboxPro",
    images: [
      {
        url: "https://tool-box-pro-ruby.vercel.app/og-default.svg",
        width: 1200,
        height: 630,
        alt: "ToolboxPro — 100+ Free Online Tools",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "application/ld+json": JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "ToolboxPro",
        url: "https://tool-box-pro-ruby.vercel.app",
        description:
          "100+ free online tools for developers, designers, and everyday tasks. No signup required.",
        potentialAction: {
          "@type": "SearchAction",
          target:
            "https://tool-box-pro-ruby.vercel.app/tools?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "ToolboxPro",
        url: "https://tool-box-pro-ruby.vercel.app",
        contactPoint: {
          "@type": "ContactPoint",
          email: "hyehugh520@gmail.com",
          contactType: "customer support",
        },
      },
    ]),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
