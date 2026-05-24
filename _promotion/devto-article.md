# How I Built 102 Free Tools + 2 AI Tools Without a Single Server

**Tagged:** `#webdev` `#javascript` `#nextjs` `#showdev` `#machinelearning`

---

![ToolboxPro homepage](https://trytoolboxpro.com/og-default.svg)

---

## The Problem

Every week on Hacker News and Reddit, someone posts "I built a free tool site." And every time, the top comment is: *"Cool, but I'm not uploading my private data to your server."*

They were right.

Most "free online tools" actually send your files to a backend server for processing. Your private JSON, your personal PDF, your screenshot — all uploaded to some cloud VM in us-east-1 that you have zero control over.

So I built **ToolboxPro** — 100+ free online tools where **everything runs in your browser**. Literally zero server-side processing. Your files never leave your device.

---

## The Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | **Next.js 15** | App Router, SSR for SEO, SSG for tool pages |
| Styling | **Tailwind CSS v4** | Zero-runtime, utility-first |
| Type Safety | **TypeScript** | Mandarin for large codebases |
| PDF | **pdf-lib** | Full PDF manipulation in the browser |
| Images | **Canvas API** | Native browser API, no libraries needed |
| Deployment | **Vercel** | Edge network, auto SSL, zero config |

No backend. No database. No API server. Just static files served from the edge.

---

## The Hardest Part: PDF Manipulation in the Browser

PDF was by far the trickiest. Most libraries want Node.js `fs` access.

### The Solution: pdf-lib

```typescript
import { PDFDocument } from "pdf-lib";

// User uploads their files via a file input
const files = await Promise.all(
  fileInput.files.map((f) => f.arrayBuffer())
);

// Each PDF is loaded and manipulated entirely in the browser
const mergedPdf = await PDFDocument.create();
for (const buffer of files) {
  const doc = await PDFDocument.load(buffer);
  const pages = await mergedPdf.copyPages(doc, doc.getPageIndices());
  pages.forEach((page) => mergedPdf.addPage(page));
}

// Download direct — no upload needed
const mergedBytes = await mergedPdf.save();
const blob = new Blob([mergedBytes], { type: "application/pdf" });
// trigger download...
```

This pattern works for:
- **PDF Merger** — Combine multiple files into one
- **PDF Splitter** — Extract specific pages
- **PDF Rotator** — Rotate individual pages
- **Image to PDF** — Convert images into a PDF

### The Limitation (Be Honest)

pdf-lib doesn't support **encryption** (password protection). So I had to remove that feature. It's better to have 100 working tools than 101 with one broken.

---

## Image Processing: Canvas 2D FTW

For image operations, the Canvas API is surprisingly powerful. Here's how image compression works:

```typescript
function compressImage(file: File, quality: number): Promise<Blob> {
  return new Promise((resolve) => {
    const img = new Image();
    const url = URL.createObjectURL(file);

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0);

      canvas.toBlob(
        (blob) => resolve(blob!),
        "image/jpeg",
        quality / 100
      );
      URL.revokeObjectURL(url);
    };

    img.src = url;
  });
}
```

**Key performance tip**: Always revoke `ObjectURL`s after use. I learned this the hard way after watching my browser memory grow by 200MB during testing.

---

## Architecture Decision: Why No Backend?

I considered several approaches before deciding on fully client-side:

| Approach | Pros | Cons |
|----------|------|------|
| **Fully client-side** ✅ | Zero server cost, privacy-first, no scaling issues | Can't do server-side operations (SSL checks, DNS lookups) |
| **Serverless functions** | Can handle network tools | Costs money per invocation, cold starts |
| **Dedicated backend** | Full control | Monthly cost, maintenance, security |

I chose client-side because:
1. **Privacy is the #1 selling point** — "Your files never leave your device" is a compelling tagline
2. **Zero server cost** — Vercel free tier handles everything
3. **No scaling problems** — Each user's browser does the work

The trade-off: tools that require network access (SSL checker, DNS lookup) need third-party APIs or serverless functions. I added those as a thin API layer later.

---

---

## Running AI in the Browser With Transformers.js

The question everyone asks: "Why use a tool site when ChatGPT exists?"

My answer: **Because my AI tools run in your browser too.**

I added two AI tools using [Transformers.js](https://huggingface.co/docs/transformers.js):

**AI Grammar Checker** — Uses Xenova/t5-base-grammar-correction to correct grammar, spelling, and style. Downloads on first use, cached afterwards.

**AI Text Summarizer** — Uses Xenova/t5-small to summarize articles and documents in seconds.

Here's how simple it is:

```typescript
import { pipeline } from "@huggingface/transformers";
const summarizer = await pipeline("summarization", "Xenova/t5-small");
const result = await summarizer(longText, { max_length: 150, min_length: 40 });
```

No API key. No server. No data leaving your device.

### Why This Matters

Most "AI tools" need an OpenAI API key or a backend proxy. My approach is different:

- **Zero ongoing cost** — models download once, run locally forever
- **Completely private** — no data leaves the browser
- **Works offline** — after download, no internet needed
- **No rate limits** — the user's hardware is the only limit

### The Trade-off

Browser ML isn't perfect:
- First load requires a ~60-300MB model download
- Slower than dedicated GPUs (WebAssembly, not CUDA)
- Limited to smaller models

But WebGPU support is coming, which will bring 10x faster inference to browsers.

## What I Learned About Next.js 15 App Router

### 1. Dynamic Routes for 100+ Tools

```typescript
// app/tools/[slug]/page.tsx
export async function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}
```

100 tool pages, all pre-rendered at build time. Zero server load.

### 2. Client vs Server Components

The tool pages are **server components** that render the metadata, SEO tags, and layout. The actual tool logic is a **client component** lazy-loaded inside:

```typescript
// Server component (SEO-friendly)
export default function ToolPage({ params }) {
  return (
    <>
      <h1>{tool.name}</h1>
      <p>{tool.description}</p>
      <Suspense fallback={<LoadingSkeleton />}>
        <ToolComponent />
      </Suspense>
    </>
  );
}
```

### 3. Sitemap Generation

```typescript
// app/sitemap.ts
export default function sitemap(): MetadataRoute.Sitemap {
  const toolPages = tools.map((tool) => ({
    url: `https://trytoolboxpro.com/tools/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  // ... + blog posts + static pages
}
```

One sitemap file, auto-generated, covering all 136 URLs.

---

## The Results

- **100+ tools** across 8 categories: Developer, Text, Image, PDF, Audio, Network, Converters, Utilities
- **30+ blog posts** with screenshots, each 800-1500 words
- **Zero server-side processing** — everything in-browser
- **Total monthly hosting cost**: $0 (Vercel free tier)
- **First Load JS**: 102 kB shared across all pages

---

## Lessons Learned

### What Went Right
1. **Privacy as a feature** — Not a compromise, a selling point
2. **Blog + tools combo** — Each tool has an accompanying tutorial post. Google loves this.
3. **No framework lock-in** — pdf-lib and Canvas are standard APIs

### What I'd Do Differently
1. **Start with fewer tools** — I built 100 in one go. Building 20 and validating demand first would have been smarter.
2. **SEO from day one** — I should have written blog posts before launching
3. **Mobile testing earlier** — Some Canvas operations need different touch handling

---

## Try It

**ToolboxPro → https://trytoolboxpro.com**

All tools are free, no signup required, and your data never leaves your device.

---

## FAQ

**Q: How do you make money?**
A: Currently free with no ads. Long-term plan includes non-intrusive ads (Google AdSense) and optional premium features.

**Q: Can I contribute a tool?**
A: Reach out at hyehugh520@gmail.com — I'm open to suggestions!

**Q: Is the code open source?**
A: Not currently, but I'm happy to share architecture patterns. Drop a comment if you want to know how a specific tool works.

---

*Built with Next.js 15, Tailwind CSS v4, TypeScript, and a lot of coffee. Deployed on Vercel.*
