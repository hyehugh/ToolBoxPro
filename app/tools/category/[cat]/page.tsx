import { categories, getToolsByCategory } from "@/lib/tools/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { CategoryPageContent } from "./category-page-content";

interface Props {
  params: Promise<{ cat: string }>;
}

const BASE_URL = "https://trytoolboxpro.com";

// SEO intro paragraphs (200+ words each) for each category
const categoryIntros: Record<string, string> = {
  developer:
    "Developer tools are the backbone of modern software engineering workflows, helping programmers write cleaner code, debug faster, and automate repetitive tasks. Whether you are formatting JSON responses from an API, validating complex regular expressions, or decoding JWT tokens for authentication debugging, having quick access to reliable online utilities saves hours of switching between desktop applications. Our collection of free developer tools covers the entire development lifecycle — from data formatting and conversion to code generation and security analysis. Every tool runs entirely in your browser, meaning your data never leaves your machine and there is no need to install software or create an account. Use the JSON formatter to prettify messy API payloads, the Base64 encoder for inline data URIs, the hash generator to verify file integrity, or the cron expression parser to decode complex scheduling rules. SQL formatting, CSS minification, color conversion, and TypeScript interface generation are all available with a single click. These tools are built for speed, with instant processing and zero upload overhead. Whether you are a frontend developer working with React, a backend engineer managing databases, or a DevOps specialist automating pipelines, you will find practical utilities that streamline your daily work.",
  text:
    "Text processing tools are essential for writers, editors, developers, and anyone who works with written content on a daily basis. From counting words for a blog post to converting text case for a consistent style guide, these utilities handle the tedious formatting tasks that eat up your time. Our comprehensive suite of free text tools includes everything you need to manipulate, analyze, and transform text without installing any software. Count characters for social media limits, generate Lorem Ipsum placeholder text for design mockups, compare two documents with the text diff checker, or remove duplicate lines from a messy spreadsheet export. Need to convert text to binary for a coding project, generate a clean URL slug for SEO, or decode Morse code for a puzzle? All of these capabilities are available instantly in your browser. Every tool processes your input locally, ensuring complete privacy — your text is never uploaded to a server or stored anywhere. Whether you are a content creator polishing articles, a developer formatting strings for code, or a student working on an assignment, these text utilities deliver fast, accurate results with no sign-up required.",
  image:
    "Image editing tools give you the power to transform, optimize, and enhance photos without the learning curve of professional design software. Whether you need to compress an image for faster web loading, convert between JPG and PNG formats, or crop a photo to a specific aspect ratio, our free online image tools handle it all directly in your browser. There is no software to download, no account to create, and no watermarks added to your output. The image compressor reduces file sizes by up to 80% while maintaining visual quality — critical for Core Web Vitals and SEO performance. The format converter supports JPG, PNG, WebP, AVIF, GIF, and BMP, making it easy to serve modern formats to your users. Need to add a watermark to protect your photos, merge multiple images side by side, or create a photo collage for social media? Each tool delivers professional results with a simple, intuitive interface. All image processing happens locally using browser-based canvas APIs, so your files never leave your device. From casual users resizing a profile picture to professional designers batch-converting assets, these tools provide the essential image manipulation capabilities you need, completely free.",
  pdf:
    "PDF tools are indispensable for anyone who works with documents in business, education, or personal administration. The PDF format is the universal standard for sharing formatted documents, but modifying PDFs without specialized software has traditionally been difficult and expensive. Our free online PDF tools change that by bringing essential document operations directly to your browser — no Adobe Acrobat subscription required. Merge multiple PDF files into a single cohesive document, split a large PDF into smaller sections by page range, rotate pages that scanned in the wrong orientation, or remove unwanted blank pages to reduce file size. Convert images to PDF for a polished presentation, or extract specific pages when you only need part of a document. Every operation runs entirely client-side using modern browser technologies, meaning your sensitive documents are never uploaded to a remote server. This privacy-first approach makes our tools ideal for handling contracts, financial statements, legal documents, and other confidential materials. Whether you are a student compiling research papers, a professional organizing reports, or an administrator managing forms, these PDF utilities provide fast, secure, and reliable document processing with zero cost and zero compromise.",
  audio:
    "Audio editing tools let you record, edit, and convert sound files without investing in expensive digital audio workstation software. Whether you are a podcaster trimming an interview, a musician merging audio tracks, or a content creator converting file formats for different platforms, our free online audio tools provide the essential functions you need directly in your browser. The audio cutter features an interactive waveform preview, letting you pinpoint exact start and end points for precise editing. The audio merger combines multiple files into one seamless track with optional crossfade transitions. The audio converter handles WAV format conversions and sample rate adjustments for technical audio requirements. All processing occurs locally using the browser's built-in Web Audio API, so your audio files are never uploaded anywhere and your privacy is fully protected. There is no software to install, no account to create, and no file size limitations beyond your device's available memory. From quick voice memo edits to multi-track podcast assembly, these tools deliver professional-quality results with a clean, accessible interface. Best of all, every tool is completely free to use with no watermarks, no trial periods, and no hidden costs.",
  network:
    "Network tools are critical for IT professionals, system administrators, web developers, and anyone who needs to diagnose and troubleshoot internet infrastructure. Understanding how domains resolve, who owns a website, and how data routes across networks requires specialized utilities that traditionally meant installing command-line tools or paid software. Our free online network tools bring these capabilities to your browser with no installation required. The DNS Lookup tool queries A, AAAA, MX, NS, TXT, and CNAME records for any domain, helping you debug email delivery issues, verify DNS propagation after changes, and confirm that subdomains point to the correct servers. The WHOIS Lookup retrieves domain registration details including registrar, creation date, expiry, and ownership contacts — essential for due diligence, competitive research, and identifying expired domains. All queries are performed instantly with clear, formatted results that are easy to interpret even if you are not a networking expert. Whether you are launching a new website and need to verify your DNS configuration, investigating a suspicious domain, or troubleshooting why emails are not reaching their destination, these network utilities deliver fast, reliable answers with zero cost and complete privacy.",
  conversion:
    "Unit conversion tools solve the everyday problem of translating measurements between different systems, formats, and standards. Whether you are cooking with an international recipe that uses Celsius, shipping a package and need to convert kilograms to pounds, or writing code that requires HTML entity encoding, having reliable conversion utilities saves time and prevents errors. Our free online conversion tools cover the most common categories — temperature, weight, length, data size, speed, and area — with instant, accurate results. The temperature converter handles Celsius, Fahrenheit, and Kelvin for cooking, science, and weather applications. The weight converter seamlessly switches between kilograms, pounds, ounces, and more. The length converter covers meters, feet, inches, kilometers, and miles for construction, travel, and fitness tracking. Developers will appreciate the HTML entity converter for safely encoding special characters, and the SVG to PNG converter for transforming vector graphics into raster images. The barcode and QR code generator creates scannable codes in multiple formats for inventory, marketing, and contact sharing. Every tool runs entirely in your browser with no uploads, no sign-ups, and no limitations. From students solving physics problems to professionals managing international projects, these conversion utilities provide dependable results every time.",
  utilities:
    "Utility tools are the everyday Swiss Army knife of the web — a diverse collection of practical calculators, generators, and helpers that make daily tasks faster and easier. Unlike specialized categories, utilities span a wide range of functions designed to simplify life, work, and study. Our free online utilities include calculators for percentages, tips, BMI, and age — perfect for quick health, financial, and everyday math. The countdown timer helps you track deadlines and special events, while the dice roller and decision maker add an element of randomness to games and tough choices. Security-conscious users will appreciate the password generator for creating strong, unique passwords, and the random number generator for lotteries, giveaways, and statistical sampling. The Roman numeral converter bridges ancient and modern numbering systems, and the days-between-dates calculator simplifies project planning and age calculations. The timezone converter is indispensable for scheduling meetings across global teams. Every utility runs instantly in your browser with no installation, no registration, and complete privacy — your inputs are never sent to a server. Whether you need to split a restaurant bill, generate a secure password, or calculate the days until a vacation, these tools deliver quick, accurate, and free results for any situation.",
};

export async function generateStaticParams() {
  return categories.map((cat) => ({ cat: cat.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { cat } = await params;
  const category = categories.find((c) => c.id === cat);
  if (!category) return {};

  const toolCount = getToolsByCategory(cat).length;

  return {
    title: `${category.name} (${toolCount} Free Online Tools) | ToolboxPro`,
    description: `Free online ${category.name.toLowerCase()} — ${toolCount} tools for everyday tasks. No signup, no upload, 100% browser-based. Privacy first.`,
    alternates: {
      canonical: `${BASE_URL}/tools/category/${cat}`,
    },
    openGraph: {
      title: `${category.name} — ${toolCount} Free Online Tools`,
      description: `Explore ${toolCount} free ${category.name.toLowerCase()} on ToolboxPro. No signup required, all processing happens in your browser.`,
      url: `${BASE_URL}/tools/category/${cat}`,
      type: "website",
      siteName: "ToolboxPro",
    },
    twitter: {
      card: "summary",
      title: `${category.name} — ${toolCount} Free Online Tools`,
      description: `Explore ${toolCount} free ${category.name.toLowerCase()} on ToolboxPro. No signup required.`,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { cat } = await params;
  const category = categories.find((c) => c.id === cat);
  if (!category) notFound();

  const categoryTools = getToolsByCategory(cat);
  const toolCount = categoryTools.length;

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: category.name,
    description: `${toolCount} free online ${category.name.toLowerCase()} on ToolboxPro.`,
    numberOfItems: toolCount,
    itemListElement: categoryTools.map((tool, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: tool.name,
      url: `${BASE_URL}/tools/${tool.slug}`,
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tools",
        item: `${BASE_URL}/tools`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: category.name,
        item: `${BASE_URL}/tools/category/${cat}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-foreground">Tools</Link>
          <span>/</span>
          <span className="text-foreground">{category.name}</span>
        </nav>

        {/* H1 with category name + tool count */}
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <span className="text-4xl">{category.icon}</span>
          {category.name}
          <span className="text-lg font-normal text-muted-foreground">
            ({toolCount} {toolCount === 1 ? "tool" : "tools"})
          </span>
        </h1>

        {/* Intro paragraph */}
        <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
          {categoryIntros[cat]}
        </p>

        {/* Tool grid (client component wrapping ToolCard) */}
        <section className="mb-12">
          <CategoryPageContent tools={categoryTools} />
        </section>

        {/* Related category links */}
        <section className="border-t pt-8">
          <h2 className="text-xl font-semibold mb-4">Explore Other Categories</h2>
          <div className="flex flex-wrap gap-2">
            {categories
              .filter((c) => c.id !== cat)
              .map((c) => {
                const count = getToolsByCategory(c.id).length;
                return (
                  <Link
                    key={c.id}
                    href={`/tools/category/${c.id}`}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border text-sm hover:bg-accent transition-colors"
                  >
                    <span className="text-lg">{c.icon}</span>
                    <span className="font-medium">{c.name}</span>
                    <span className="text-muted-foreground text-xs">({count})</span>
                  </Link>
                );
              })}
          </div>
        </section>
      </div>
    </>
  );
}
