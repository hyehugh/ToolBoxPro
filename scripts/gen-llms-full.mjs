import fs from "fs";
import path from "path";
import { tools, categories } from "../lib/tools/data";

const BASE_URL = "https://trytoolboxpro.com";

const categoryNameMap: Record<string, string> = {
  developer: "Developer Tools",
  text: "Text Tools",
  image: "Image Tools",
  pdf: "PDF Tools",
  audio: "Audio Tools",
  network: "Network Tools",
  conversion: "Unit Converters",
  utilities: "Utilities",
};

const categoryIntro: Record<string, string> = {
  developer:
    "Tools for software engineers, web developers, and DevOps teams. Format code, generate hashes, decode tokens, parse expressions, and test patterns — all in the browser.",
  text:
    "Tools for writers, editors, content creators, and anyone who works with text. Count, transform, compare, generate, and analyze text content.",
  image:
    "Tools for designers, photographers, content creators, and social media managers. Compress, convert, crop, filter, and manipulate images without uploading to any server.",
  pdf:
    "Tools for merging, splitting, rotating, and extracting pages from PDF documents. All PDF operations run client-side using JavaScript libraries like pdf-lib.",
  audio:
    "Tools for podcasters, musicians, video editors, and audio enthusiasts. Cut, merge, and convert audio files directly in the browser using the Web Audio API.",
  network:
    "Tools for IT professionals, system administrators, and network engineers. Look up DNS records, query domain ownership information, and debug domain configurations.",
  conversion:
    "Tools for converting between units, formats, and encoding standards. Convert measurements, temperatures, file formats, and more — all instantly and accurately.",
  utilities:
    "Everyday tools for calculations, productivity, and quick tasks. Calculate percentages, tips, BMI, ages, and generate passwords, random numbers, or decisions.",
};

function whenToUse(tool: (typeof tools)[number]): string {
  const { slug, category, description, searchKeywords } = tool;
  const kw = (searchKeywords || "").toLowerCase();

  // Category-specific defaults
  const byCategory: Record<string, string> = {
    developer:
      "Use when you need quick, browser-based developer utilities without installing software or sending data to an external server.",
    text: "Use when you need to manipulate, analyze, or transform text content for writing, editing, or data processing tasks.",
    image:
      "Use when you need to edit or convert images without uploading files to a remote server — all processing happens locally in the browser.",
    pdf: "Use when you need to manipulate PDF documents without installing desktop software or uploading sensitive files.",
    audio:
      "Use when you need to edit or convert audio files without specialized software — works entirely in the browser.",
    network:
      "Use when you need to diagnose domain, DNS, or registration information for any website or domain name.",
    conversion:
      "Use when you need to convert between different units, formats, or encoding standards quickly and accurately.",
    utilities:
      "Use when you need a quick everyday calculation or random generation task without a dedicated app.",
  };

  // Tool-specific notes for richer context
  const specific: Record<string, string> = {
    "json-formatter":
      "Use when debugging API responses, validating JSON configuration files, or making minified JSON readable before editing.",
    "base64-encode-decode":
      "Use when embedding images as data URIs, encoding credentials for HTTP Basic Auth, or decoding Base64 API payloads.",
    "regex-tester":
      "Use when developing input validation, search patterns, or parsing logic and need to verify your regex matches expected input.",
    "color-converter":
      "Use when translating colors between CSS formats, generating harmonious palettes for design systems, or picking the right hex code.",
    "url-encoder-decoder":
      "Use when constructing query strings, fixing broken URLs with special characters, or decoding URL parameters from logs.",
    "uuid-generator":
      "Use when you need unique identifiers for database records, API keys, distributed systems, or test fixtures.",
    "hash-generator":
      "Use when verifying file integrity, generating checksums for downloads, or comparing data fingerprints across systems.",
    "timestamp-converter":
      "Use when converting between Unix epoch timestamps and human-readable dates for logging, databases, or API debugging.",
    "number-base-converter":
      "Use when converting between binary, octal, decimal, and hex for low-level programming, debugging, or educational purposes.",
    "css-minifier":
      "Use when optimizing website performance by reducing CSS file size before deployment.",
    "sql-formatter":
      "Use when cleaning up raw SQL queries from logs, preparing queries for code review, or learning SQL syntax.",
    "json-to-yaml":
      "Use when converting JSON configuration (Docker Compose, Kubernetes, CI/CD pipelines) to YAML or vice versa.",
    "string-escaper":
      "Use when preparing strings for safe insertion into JSON, HTML, URLs, SQL queries, or JavaScript code.",
    "html-tag-stripper":
      "Use when extracting plain text content from HTML emails, scraped web pages, or rich-text editor output.",
    "jwt-decoder":
      "Use when debugging authentication tokens, inspecting JWT claims, or verifying token expiration and structure.",
    "cron-parser":
      "Use when documenting scheduled job expressions, verifying cron syntax before deployment, or explaining schedules to non-technical team members.",
    "html-preview":
      "Use when prototyping HTML/CSS snippets, testing email templates, or teaching web development concepts.",
    "csv-viewer":
      "Use when reviewing CSV exports, exploring data files, or converting comma-separated data into a readable table.",
    "ip-calculator":
      "Use when planning network architecture, configuring subnets, or validating CIDR notation for cloud infrastructure.",
    "jwt-generator":
      "Use when creating test tokens for API development, mocking authentication flows, or generating tokens for integration testing.",
    "json-diff":
      "Use when comparing API responses, debugging configuration drift, or auditing changes between JSON snapshots.",
    "http-status-codes":
      "Use when looking up HTTP response codes during API development, debugging web errors, or learning web standards.",
    "markdown-to-html":
      "Use when converting documentation, README content, or blog posts from Markdown to HTML for web publishing.",
    "css-gradient":
      "Use when designing backgrounds, buttons, or UI elements with smooth color transitions and need the CSS code.",
    "css-shadow":
      "Use when prototyping card effects, button depth, or layered UI components with custom box shadows.",
    "json-to-typescript":
      "Use when generating TypeScript interfaces from API responses, converting JSON config to types, or bootstrapping type definitions.",
    "html-to-jsx":
      "Use when converting static HTML templates or Bootstrap components into React JSX components.",
    "color-palette":
      "Use when building design systems, creating harmonious color schemes, or exploring complementary color combinations.",
    "password-strength":
      "Use when auditing password security, teaching users about password best practices, or testing password policies.",
    "dns-lookup":
      "Use when debugging email delivery (MX records), verifying DNS propagation, or troubleshooting domain configuration.",
    "whois-lookup":
      "Use when checking domain availability, investigating domain ownership, or verifying registration details before purchase.",
    "pdf-merger":
      "Use when combining scanned pages, merging reports, or assembling a single document from multiple PDF sources.",
    "image-compressor":
      "Use when reducing image file sizes for web performance, email attachments, or storage optimization without visible quality loss.",
    "image-converter":
      "Use when converting images to web-friendly formats (WebP, AVIF), preparing assets for different platforms, or standardizing file types.",
    "image-to-base64":
      "Use when embedding images directly in HTML/CSS, creating data URIs for email templates, or reducing HTTP requests.",
    "image-cropper":
      "Use when preparing images for specific aspect ratios (social media posts, profile pictures, thumbnails) or removing unwanted borders.",
    "image-resizer":
      "Use when scaling images to exact pixel dimensions for web layouts, app icons, or print specifications while maintaining aspect ratio.",
    "image-filters":
      "Use when applying artistic effects (grayscale, sepia, blur) to photos for social media, design projects, or archival purposes.",
    "color-picker":
      "Use when extracting exact color values from a logo, photograph, or screenshot for use in design or branding.",
    "gif-maker":
      "Use when creating animated GIFs for social media, tutorials, or presentations from a sequence of images.",
    "image-watermark":
      "Use when protecting image copyright, branding photos, or adding attribution text before publishing.",
    "image-merge":
      "Use when creating before/after comparisons, contact sheets, or combining photos into a single layout.",
    "image-splitter":
      "Use when creating sprite sheets for game development, splitting panoramic images, or preparing grid-based content.",
    "image-flip":
      "Use when correcting mirrored selfies, flipping scanned documents, or rotating images to the correct orientation.",
    "image-border":
      "Use when adding decorative frames to photos, creating polaroid effects, or preparing images for print layouts.",
    "meme-generator":
      "Use when creating memes for social media, marketing campaigns, or humorous content with classic top/bottom text overlay.",
    "image-to-sketch":
      "Use when creating artistic sketches from photos for design projects, gifts, or educational materials.",
    "image-invert":
      "Use when creating negative effects for artistic purposes, analyzing scanned film, or producing X-ray-style visuals.",
    "image-collage":
      "Use when combining multiple photos into a single image for social media, prints, or memory boards.",
    "color-blindness-simulator":
      "Use when designing accessible interfaces, testing color contrast for accessibility compliance, or creating inclusive content.",
    "word-counter":
      "Use when checking essay lengths, meeting word limits for submissions, or analyzing text density for SEO.",
    "case-converter":
      "Use when standardizing variable names (camelCase), formatting titles, or cleaning up inconsistent text casing.",
    "lorem-ipsum-generator":
      "Use when filling design mockups, wireframes, or print layouts with placeholder text during development.",
    "text-diff-checker":
      "Use when reviewing document revisions, comparing code snippets, or checking for plagiarism between text blocks.",
    "text-repeater":
      "Use when generating test data, creating patterns for design, or producing repeated content for demonstrations.",
    "text-to-binary":
      "Use when learning binary encoding, converting data for low-level protocols, or creating educational materials.",
    "text-to-slug":
      "Use when generating clean, SEO-friendly URL slugs from article titles, product names, or blog headings.",
    "text-sorter":
      "Use when organizing lists alphabetically, sorting data exports, or preparing sorted output for spreadsheets.",
    "text-deduplicator":
      "Use when cleaning up mailing lists, removing duplicate entries from data exports, or deduplicating log files.",
    "text-reverser":
      "Use when solving puzzles, creating mirrored text for design, or reversing data for encoding purposes.",
    "random-string-generator":
      "Use when generating test tokens, temporary passwords, or random IDs for testing and development.",
    "palindrome-checker":
      "Use when solving word puzzles, teaching string manipulation, or verifying palindromic sequences in data.",
    "morse-code-converter":
      "Use when learning Morse code, encoding messages for ham radio, or creating educational cryptography exercises.",
    "emoji-remover":
      "Use when cleaning text for data processing, removing emoji from form submissions, or preparing text for NLP analysis.",
    "unicode-detector":
      "Use when debugging character encoding issues, inspecting special characters, or learning about Unicode codepoints.",
    "caesar-cipher":
      "Use when learning classical cryptography, solving cipher puzzles, or teaching encryption fundamentals.",
    "binary-to-text":
      "Use when decoding binary output from systems, translating binary data, or verifying binary-to-text conversions.",
    "online-notepad":
      "Use when you need a quick, auto-saving note pad in the browser without installing an app or creating an account.",
    "text-statistics":
      "Use when analyzing text complexity, measuring readability, or gathering detailed metrics for content optimization.",
    "html-entity-converter":
      "Use when preparing text for HTML display, decoding HTML entities from scraped content, or fixing encoding issues.",
    "temperature-converter":
      "Use when converting recipes, weather data, or scientific measurements between Celsius, Fahrenheit, and Kelvin.",
    "weight-converter":
      "Use when converting between metric and imperial weight units for cooking, fitness, shipping, or international trade.",
    "length-converter":
      "Use when converting distances for travel, construction, sewing, or any task requiring metric-to-imperial length conversion.",
    "data-size-converter":
      "Use when comparing file sizes, calculating storage requirements, or understanding bandwidth and transfer limits.",
    "speed-converter":
      "Use when converting speeds for driving abroad, aviation, marine navigation, or physics calculations.",
    "area-converter":
      "Use when converting land measurements for real estate, agriculture, construction, or interior design.",
    "svg-to-png":
      "Use when rasterizing SVG icons for use in contexts that require PNG, or exporting vector graphics at specific dimensions.",
    "barcode-generator":
      "Use when generating barcodes for products, shipping labels, inventory tags, or QR codes for marketing materials.",
    "qr-reader":
      "Use when decoding QR codes from screenshots, scanned documents, or saved images to extract URLs and contact info.",
    "password-generator":
      "Use when creating strong passwords for new accounts, rotating credentials, or generating secure keys for applications.",
    "random-number-generator":
      "Use when running lotteries, raffles, statistical sampling, or generating random values for games and simulations.",
    "timezone-converter":
      "Use when scheduling meetings across time zones, planning travel, or coordinating with remote teams worldwide.",
    "countdown-timer":
      "Use when counting down to product launches, events, deadlines, or personal milestones.",
    "tip-calculator":
      "Use when splitting restaurant bills, calculating gratuities, or dividing group expenses fairly.",
    "bmi-calculator":
      "Use when checking health metrics, tracking fitness goals, or learning about body mass index categories.",
    "percentage-calculator":
      "Use when calculating discounts, tax rates, percentage changes, or figuring out what percentage one number is of another.",
    "age-calculator":
      "Use when calculating exact age for forms, determining eligibility, or counting time between dates.",
    "days-between":
      "Use when calculating project durations, counting days between events, or determining date intervals.",
    "roman-numeral":
      "Use when converting dates, numbering book chapters, or solving Roman numeral puzzles and homework.",
    "decision-maker":
      "Use when you can't decide between options — let the tool pick a random choice from your list.",
    "dice-roller":
      "Use when playing tabletop RPGs, board games, classrooms, or any scenario requiring random dice rolls (d4–d20).",
    "aspect-ratio-calculator":
      "Use when calculating correct dimensions for images, videos, or screens based on standard aspect ratios like 16:9 or 4:3.",
    "audio-cutter":
      "Use when trimming podcasts, extracting audio clips from recordings, or cutting songs to specific lengths.",
    "audio-merger":
      "Use when combining voice recordings, merging podcast segments, or creating seamless audio tracks with crossfades.",
    "audio-converter":
      "Use when converting between audio formats or adjusting sample rates for compatibility with different systems.",
  };

  return specific[slug] || byCategory[category];
}

function renderTool(tool: (typeof tools)[number]): string {
  const url = `${BASE_URL}/tools/${tool.slug}`;
  const lines: string[] = [];
  lines.push(`### ${tool.name}`);
  lines.push("");
  lines.push(`- **URL**: ${url}`);
  lines.push(`- **Category**: ${categoryNameMap[tool.category]}`);
  if (tool.searchKeywords) {
    lines.push(`- **Keywords**: ${tool.searchKeywords}`);
  }
  lines.push("");
  lines.push(`**Description**: ${tool.description}`);
  lines.push("");
  lines.push(`**When to use**: ${whenToUse(tool)}`);
  lines.push("");
  return lines.join("\n");
}

function renderCategory(catId: string, catName: string): string {
  const catTools = tools.filter((t) => t.category === catId);
  const parts: string[] = [];
  parts.push(`---`);
  parts.push("");
  parts.push(`## ${catName} (${catTools.length} tools)`);
  parts.push("");
  parts.push(categoryIntro[catId] || "");
  parts.push("");
  parts.push(catTools.map(renderTool).join("\n"));
  return parts.join("\n");
}

const header = `# ToolboxPro — Complete Tool Reference

> ${tools.length} free online tools that run entirely in your browser. No signup, no file uploads, no usage limits.

**Website**: ${BASE_URL}
**All Tools**: ${BASE_URL}/tools

This document provides a comprehensive reference for every tool available on ToolboxPro. Each entry includes the tool name, URL, category, a full description, and a "when to use" note to help you determine which tool is right for a given task.

## Why ToolboxPro?

- **Privacy-first**: All processing happens client-side using JavaScript, Canvas API, and WebAssembly. No files are ever uploaded to a server.
- **No signup**: No account, email, or personal data required for any tool.
- **No limits**: No daily quotas, no watermarks, no premium tiers.
- **Free**: All tools are free for personal and commercial use.

## Categories

| # | Category | Tool Count |
|---|----------|------------|
${categories
  .map(
    (c, i) =>
      `| ${i + 1} | [${categoryNameMap[c.id]}](#${c.id}) | ${
        tools.filter((t) => t.category === c.id).length
      } |`
  )
  .join("\n")}

**Total**: ${tools.length} tools across ${categories.length} categories.

`;

const body = categories
  .map((c) => renderCategory(c.id, categoryNameMap[c.id] || c.name))
  .join("\n\n");

const footer = `---

## Additional Resources

- [All Guides](${BASE_URL}/guides): In-depth tool comparisons and tutorials
- [Blog](${BASE_URL}/blog): Step-by-step tutorials and best practices
- [FAQ](${BASE_URL}/faq): Common questions about privacy, features, and usage
- [About](${BASE_URL}/about): Why ToolboxPro exists and how it works
- [Contact](${BASE_URL}/contact): Get in touch

---

*This file is auto-generated from the tools data in \`lib/tools/data.ts\`. Last updated: ${new Date().toISOString().split("T")[0]}*
`;

const output = header + "\n" + body + "\n\n" + footer;

const outPath = path.join(process.cwd(), "public", "llms-full.txt");
fs.writeFileSync(outPath, output, "utf8");
const sizeKb = (fs.statSync(outPath).size / 1024).toFixed(1);
console.log(`✓ Written ${outPath}`);
console.log(`  Size: ${sizeKb} KB`);
console.log(`  Tools: ${tools.length}`);
console.log(`  Categories: ${categories.length}`);
for (const c of categories) {
  const count = tools.filter((t) => t.category === c.id).length;
  console.log(`    - ${categoryNameMap[c.id]}: ${count}`);
}
