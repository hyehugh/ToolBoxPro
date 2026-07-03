import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { LocaleProvider } from "@/lib/i18n/context";
import { GoogleAnalytics } from "@/components/google-analytics";
import { AdSense } from "@/components/adsense";
import { CookieBanner } from "@/components/cookie-banner";
import { GlobalEffects } from "@/components/global-effects";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://trytoolboxpro.com"),
  verification: {
    google: "7rfN1s_JBrSe96b9qg_thQz_QHabxH2zL59NP6DWubU",
  },
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
    url: "https://trytoolboxpro.com",
    siteName: "ToolboxPro",
    images: [
      {
        url: "/og-default.png",
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
  alternates: {
    canonical: "https://trytoolboxpro.com",
    languages: {
      "en": "https://trytoolboxpro.com",
      "zh": "https://trytoolboxpro.com",
      "x-default": "https://trytoolboxpro.com",
    },
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ToolboxPro",
  url: "https://trytoolboxpro.com",
  description:
    "100+ free online tools for developers, designers, and everyday tasks. No signup required.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://trytoolboxpro.com/tools?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ToolboxPro",
  url: "https://trytoolboxpro.com",
  contactPoint: {
    "@type": "ContactPoint",
    email: "hyehugh520@gmail.com",
    contactType: "customer support",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider>
          <LocaleProvider>
            <GoogleAnalytics />
            <AdSense />
            <Header />
            <GlobalEffects />
            <main className="flex-1">{children}</main>
            <Footer />
            <CookieBanner />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
