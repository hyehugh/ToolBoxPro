# Reddit Post — r/SideProject

## Title
I built 100 free tools + 2 AI tools that process everything in YOUR browser — no uploads, no servers

## Body

Last month I decided to scratch my own itch. I was tired of tool sites that ask me to upload my files to their servers just to format JSON or resize an image.

So I built **ToolboxPro** — 100+ free tools **plus 2 AI tools** (Grammar Checker, Text Summarizer), all running client-side in your browser.

**What's included:**
- ✅ AI Grammar Checker — corrects grammar locally via Transformers.js
- ✅ AI Text Summarizer — summarizes articles, zero server calls
- ✅ JSON Formatter / Minifier / Diff / to YAML / to TypeScript
- ✅ Regex Tester with live matching
- ✅ Image Compressor, Resizer, Converter, Filter, Watermark
- ✅ PDF Merger, Splitter, Rotator, Image-to-PDF
- ✅ Color Picker, Palette Generator, Converter
- ✅ QR Code & Barcode Generator + Reader
- ✅ UUID Generator, Password Generator, Hash Generator
- ✅ Text utilities (diff, sort, deduplicate, case converter...)
- ✅ Audio Cutter
- ✅ And more — 102 total across 8 categories

**The privacy angle (the real differentiator):**
Every tool — AI included — uses WebAssembly, Canvas, or pure JavaScript. No data is ever sent to a server. Your files AND your text stay on your device.

**Tech stack:** Next.js 15, Tailwind v4, TypeScript, pdf-lib for PDF, Transformers.js for AI. Zero backend. $0 hosting cost (Vercel free tier).

**Would love your feedback:** https://trytoolboxpro.com

Happy to answer questions about the architecture, the build process, or any specific tool implementation!

---

# Reddit Post — r/webdev

## Title
I made 100 dev tools that run 100% client-side — here's how PDF and image processing work in the browser

## Body

Most "free online tools" actually process your files on a server. I wanted to prove you can do it all in the browser.

**ToolboxPro** has 100+ developer-focused tools, all running client-side:

**Dev tools:**
- JSON Formatter / JSON Diff / JSON to YAML / JSON to TypeScript
- Regex Tester (live match highlighting)
- JWT Decoder & Generator with signature verification
- SQL Formatter
- Cron Expression Parser
- HTTP Status Codes reference (200+ codes with descriptions)
- HTML to JSX converter
- CSS Gradient & Shadow generators
- Color Palette Generator & Color Blindness Simulator

**How PDF merging works (all in-browser):**
```js
const mergedPdf = await PDFDocument.create();
for (const file of uploadedFiles) {
  const doc = await PDFDocument.load(await file.arrayBuffer());
  const pages = await mergedPdf.copyPages(doc, doc.getPageIndices());
  pages.forEach((page) => mergedPdf.addPage(page));
}
const blob = new Blob([await mergedPdf.save()]);
// trigger download — file never touched a server
```

**Why this matters:**
- User doesn't have to trust my server (because there isn't one)
- No file size limits (browser's limit, not mine)
- Works offline after first load
- Zero server cost

**Trade-offs I had to accept:**
- No PDF encryption support (pdf-lib limitation)
- Some tools need API proxies (SSL checker, DNS lookup)
- Mobile UX needs more work (touch events for Canvas tools)

**Try it:** https://trytoolboxpro.com

Ask me anything about browser-based PDF manipulation, Canvas image processing, or Next.js App Router patterns!
