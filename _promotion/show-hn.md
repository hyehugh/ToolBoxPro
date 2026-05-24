# Hacker News — Show HN

## Title
Show HN: ToolboxPro – 100+ free tools that process everything in your browser

## Body

Zero server-side processing. Your files never leave your device.

https://trytoolboxpro.com

100+ tools including:
- JSON formatter, diff, to YAML, to TypeScript
- Regex tester, JWT decoder/generator, SQL formatter
- Image compression, resizing, filters, watermark
- PDF merge, split, rotate, image-to-PDF
- Color picker, palette generator, converter
- QR code/barcode generator + reader
- UUID, password, hash generators
- Text diff, sorter, case converter, and more

Built with Next.js 15, Tailwind v4, pdf-lib for PDF, Canvas API for images.

All processing happens in your browser using WebAssembly/JavaScript. No accounts, no uploads, no servers.

Tech writeup in the comments if anyone's curious about the architecture.

---

## Comment replies (pre-written, post when asked):

**Q: How is this different from TinyWow/ILovePDF?**
A: Every tool runs client-side. Your files never touch a server. With ILovePDF, you're uploading sensitive PDFs to their cloud. Here, the PDF never leaves your browser's memory.

**Q: No backend at all?**
A: Zero. Vercel serves static HTML/JS files. The browser does all the work. This means $0 hosting cost and no scaling issues.

**Q: How do network tools work (SSL checker, DNS)?**
A: Those use public DNS-over-HTTPS APIs (Google DNS) directly from the browser. It's not fully client-side, but I keep it minimal — no custom backend.

**Q: Can I contribute?**
A: Email me at hyehugh520@gmail.com. Open to suggestions for new tools!
