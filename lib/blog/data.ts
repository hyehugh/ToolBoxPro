export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  toolSlug?: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-format-json-online",
    title: "How to Format JSON Online Free — Complete Guide",
    description: "Learn how to format, validate, and beautify JSON quickly using free online tools. Fix malformed JSON in seconds.",
    date: "2026-05-22",
    readTime: "5 min read",
    category: "Developer Tools",
    toolSlug: "json-formatter",
    content: `## What is JSON Formatting?

JSON (JavaScript Object Notation) is a lightweight data interchange format. When JSON comes from an API or file, it's often **minified** — all on one line — making it impossible to read.

Formatting (or "pretty-printing") adds indentation and line breaks so you can see the structure at a glance.

## Why Format JSON?

- **Debug faster** — spot missing commas, extra brackets, and syntax errors instantly
- **Read API responses** — understand the data structure without counting braces
- **Share clean code** — formatted JSON is easier to paste into documentation or PRs

## How to Format JSON in 3 Steps

### Step 1: Copy your JSON

Copy the minified JSON from your API response, log file, or clipboard.

### Step 2: Paste into ToolboxPro

Visit our [free JSON formatter](/tools/json-formatter) and paste your JSON into the input area.

### Step 3: Click Format

Hit the **Format** button. Your JSON will be beautifully indented with 2-space indentation and syntax highlighting.

If your JSON has errors, the tool shows the exact line and column — no more hunting through minified text.

## Bonus: Validate Before You Ship

Always validate your JSON before committing. Our tool has a dedicated **Validate** button that checks for:

- Missing commas between properties
- Trailing commas (invalid in JSON)
- Unclosed brackets or braces
- Invalid string escaping

## Common JSON Errors

| Error | What it looks like | Fix |
|-------|-------------------|-----|
| Trailing comma | \`{"a": 1,}\` | Remove the comma after the last item |
| Missing comma | \`{"a": 1 "b": 2}\` | Add comma between properties |
| Extra bracket | \`{"a": 1}}\` | Remove the extra closing bracket |
| Single quotes | \`{'a': 1}\` | Use double quotes for JSON strings |


### Why Format JSON?

Formatted JSON lets you spot errors instantly, understand nested API responses, and share clean code in documentation. Minified JSON is unreadable -- formatting adds indentation and line breaks.

### JSON vs XML vs YAML

JSON uses {} and [] syntax, is browser-native, and has small file size. XML uses verbose tags and supports comments but is larger. YAML uses indentation and is great for config files but needs a parser in browsers.


### Try It Yourself

Try our [JSON Formatter & Validator](/tools/json-formatter) to format, validate, and beautify your JSON data instantly.

You might also find our [YAML Converter](/tools/json-to-yaml) helpful for converting between JSON and YAML formats.


## FAQ

**Is online JSON formatting safe?** Yes — ToolboxPro processes everything in your browser. Your data never leaves your device.

**What's the maximum JSON size I can format?** Our tool handles JSON files up to several megabytes. For very large files, performance depends on your browser's memory.

**Do I need to sign up?** No. All our tools are free and require no registration.`,
  },
  {
    slug: "base64-encoding-explained",
    title: "Base64 Encoding Explained — When and Why to Use It",
    description: "A complete guide to Base64 encoding and decoding. Learn what it is, how it works, and when to use it in your projects.",
    date: "2026-05-22",
    readTime: "6 min read",
    category: "Developer Tools",
    toolSlug: "base64-encode-decode",
    content: `## What is Base64?

Base64 is an encoding scheme that converts binary data into a text format using 64 printable characters (A-Z, a-z, 0-9, +, /). It's everywhere in web development.

## When to Use Base64

### 1. Embedding Images in HTML/CSS

Instead of a separate image file, you can inline a Base64-encoded image directly:

\`\`\`html
<img src="data:image/png;base64,iVBORw0KGgo..."/>
\`\`\`

**Best for:** Small icons, sprites, or placeholder images. Avoid for large files — Base64 adds ~33% overhead.

### 2. API Authentication Tokens

Basic Auth sends credentials as Base64-encoded \`username:password\` strings. Note: Base64 is not encryption — always use HTTPS.

### 3. Storing Binary Data in JSON

JSON can't natively store binary data. Base64 encodes it as a string, perfect for:

- File upload payloads
- Database blob fields transmitted as JSON
- Email attachments in MIME format

## How to Encode/Decode Base64

### Using ToolboxPro

1. Go to our [Base64 Encoder/Decoder](/tools/base64-encode-decode)
2. Select **Encode** or **Decode** mode
3. Paste your text or upload a file
4. Get the result instantly

### Using Browser DevTools

\`\`\`javascript
// Encode
btoa("Hello World"); // "SGVsbG8gV29ybGQ="

// Decode
atob("SGVsbG8gV29ybGQ="); // "Hello World"
\`\`\`


### How Base64 Works

Base64 splits binary data into 6-bit groups and maps each to a printable character. The result is a text string that can safely travel through any text-based system.

### Encoding vs Encryption

Encoding is NOT encryption. Anyone can decode Base64 instantly. Use encryption (AES, RSA) when you need security, not Base64.

### The 33% Size Cost

| Original | Base64 | Overhead |
|----------|--------|----------|
| 100 KB | ~133 KB | ~33 KB |
| 1 MB | ~1.33 MB | ~333 KB |
| 10 MB | ~13.3 MB | ~3.3 MB |

Only use Base64 for small data. For large files, find alternative transmission methods.


### When to Use Base64

Base64 shows up everywhere in web development. Email attachments use it in MIME encoding. Data URIs embed small images directly in HTML. API authentication tokens often use Base64 encoding. JWT tokens use a URL-safe variant called Base64URL.

### Base64 in Practice

In JavaScript, use btoa() to encode and atob() to decode strings. For Unicode text, first encode to UTF-8 bytes, then apply Base64. Our Base64 Encoder/Decoder handles all encoding automatically including Unicode support.




### Try It Yourself

Use our [Base64 Encoder/Decoder](/tools/base64-encode-decode) for instant encoding and decoding.

For secure password storage, check our [Hash Generator](/tools/hash-generator) for SHA-256 hashing.


## FAQ

**Is Base64 secure?** No. Base64 is encoding, not encryption. Anyone can decode Base64. Never use it for sensitive data without additional encryption.

**Why does Base64 make files larger?** Base64 uses 4 characters to represent 3 bytes of data, adding ~33% overhead.

**What's the difference between Base64 and Base64URL?** Base64URL uses \`-\` and \`_\` instead of \`+\` and \`/\` to be URL-safe.`,
  },
  {
    slug: "regex-for-beginners",
    title: "Regex for Beginners: How to Test Regular Expressions Online",
    description: "Learn regex from scratch. Patterns, quantifiers, groups, and how to test them in real-time with our free tester.",
    date: "2026-05-22",
    readTime: "8 min read",
    category: "Developer Tools",
    toolSlug: "regex-tester",
    content: `## What is Regex?

A regular expression (regex) is a pattern that describes a set of strings. Think of it as a search query on steroids — it can match phone numbers, emails, URLs, and complex text patterns.

## Basic Patterns

### Literal Characters

The simplest regex matches exact text. The pattern \`cat\` matches "cat" in "The cat sat on the mat."

### Character Classes

| Pattern | Matches | Example |
|---------|---------|---------|
| \\\\d | Any digit (0-9) | \`\\\\d{10}\` matches a 10-digit number |
| \\\\w | Any word character | \`\\\\w+\` matches one or more letters/digits |
| \\\\s | Any whitespace | Spaces, tabs, line breaks |
| . | Any character (except newline) | \`c.t\` matches "cat", "cot", "cut" |

### Quantifiers

| Quantifier | Meaning | Example |
|------------|---------|---------|
| * | 0 or more | \`ab*c\` matches "ac", "abc", "abbc" |
| + | 1 or more | \`ab+c\` matches "abc", "abbc" but not "ac" |
| ? | 0 or 1 | \`colou?r\` matches "color" and "colour" |
| {n} | Exactly n | \`\\\\d{3}\` matches exactly 3 digits |
| {n,} | n or more | \`\\\\d{3,}\` matches 3+ digits |
| {n,m} | Between n and m | \`\\\\d{2,4}\` matches 2-4 digits |

## Using Our Regex Tester

1. Visit the [Regex Tester](/tools/regex-tester)
2. Enter your pattern (e.g., \`\\\\d{3}-\\\\d{3}-\\\\d{4}\`)
3. Enter test text (e.g., "Call 555-123-4567 today!")
4. See real-time highlighting of every match
5. Use presets for common patterns: Email, URL, Phone, IP

## Common Regex Patterns

\`\`\`
// Email: simple version
[\\\\w.-]+@[\\\\w.-]+\\\\.\\\\w+

// URL
https?://[\\\\w./-]+

// US Phone
\\\\d{3}-\\\\d{3}-\\\\d{4}

// IP Address
\\\\d{1,3}\\\\.\\\\d{1,3}\\\\.\\\\d{1,3}\\\\.\\\\d{1,3}
\`\`\`


### Common Patterns

| Pattern | Matches |
|---------|---------|
| \\d{3}-\\d{4} | Phone: 555-1234 |
| \\w+@\\w+\\.\\w+ | Email: user@site.com |
| https?://\\S+ | URL: https://example.com |

### Regex Flags

g = global (find all matches), i = case-insensitive, m = multiline mode

### Greedy vs Lazy

Quantifiers like + and * are greedy by default (match as much as possible). Adding ? makes them lazy (match the shortest possible string).


### Try It Yourself

Test your patterns instantly with our [Regex Tester](/tools/regex-tester) featuring real-time highlighting.

Our [HTML Tag Stripper](/tools/html-tag-stripper) is another useful text processing tool.


## FAQ

**What do the flags (g, i, m) mean?** \`g\` = global (find all matches), \`i\` = case-insensitive, \`m\` = multiline mode.

**Can regex parse HTML?** Not reliably. Use a proper HTML parser instead.

**How do I test regex without installing anything?** Use our free [regex tester](/tools/regex-tester) — it works in your browser with zero setup.`,
  },
  {
    slug: "hex-to-rgb-color-conversion",
    title: "HEX to RGB: Color Conversion Made Simple",
    description: "Convert colors between HEX, RGB, and HSL formats. A practical guide for designers and developers.",
    date: "2026-05-22",
    readTime: "4 min read",
    category: "Developer Tools",
    toolSlug: "color-converter",
    content: `## Why Color Conversion Matters

Designers think in HEX. Developers prototype in RGB. CSS animations use HSL. If you work with colors, you need all three formats.

## Common Color Formats

### HEX

Used in HTML/CSS. Starts with \`#\` followed by 6 hex digits:

\`\`\`
#FF5733  →  Red: 255, Green: 87, Blue: 51
\`\`\`

### RGB

Used in Canvas, image processing, and design tools:

\`\`\`
rgb(255, 87, 51)
\`\`\`

### HSL

More intuitive for adjustments. Hue (0-360°), Saturation (0-100%), Lightness (0-100%):

\`\`\`
hsl(11, 100%, 60%)
\`\`\`

## How to Convert

### Using ToolboxPro

1. Visit our [Color Converter](/tools/color-converter)
2. Type any color in any format
3. See all formats displayed simultaneously with a live color swatch
4. Copy any format with one click

### Manual Conversion

HEX to RGB:
- Split into 3 pairs: \`#FF\`, \`#57\`, \`#33\`
- Convert each from hex to decimal: 255, 87, 51
- Result: \`rgb(255, 87, 51)\`


### Quick Color Reference

| Color | HEX | RGB | HSL |
|-------|-----|-----|-----|
| Red | #FF0000 | rgb(255,0,0) | hsl(0,100%,50%) |
| Green | #00FF00 | rgb(0,255,0) | hsl(120,100%,50%) |
| Blue | #0000FF | rgb(0,0,255) | hsl(240,100%,50%) |
| White | #FFFFFF | rgb(255,255,255) | hsl(0,0%,100%) |
| Black | #000000 | rgb(0,0,0) | hsl(0,0%,0%) |

### When to Use Each Format

HEX is best for CSS stylesheets. RGB is ideal for canvas operations and image processing. HSL shines for color manipulation and UI theming because you can adjust lightness independently.

### Why Color Conversion Matters

Web developers and designers constantly convert between color formats. CSS accepts HEX, RGB, and HSL values, but design tools like Figma and Photoshop may export in different formats. Understanding conversion ensures colors remain consistent across your workflow.

### The Relationship Between Formats

HEX, RGB, and HSL all describe the same colors in different ways. HEX uses hexadecimal pairs (00-FF) for each channel. RGB uses decimal values (0-255). HSL separates color into hue (0-360 degrees), saturation (0-100%), and lightness (0-100%), making it intuitive for creating color schemes.

### Quick Conversion Reference

| Color Name | HEX | RGB | HSL |
|-----------|-----|-----|-----|
| Red | #FF0000 | rgb(255,0,0) | hsl(0,100%,50%) |
| Orange | #FFA500 | rgb(255,165,0) | hsl(39,100%,50%) |
| Yellow | #FFFF00 | rgb(255,255,0) | hsl(60,100%,50%) |
| Green | #008000 | rgb(0,128,0) | hsl(120,100%,25%) |
| Blue | #0000FF | rgb(0,0,255) | hsl(240,100%,50%) |
| Purple | #800080 | rgb(128,0,128) | hsl(300,100%,25%) |
| White | #FFFFFF | rgb(255,255,255) | hsl(0,0%,100%) |
| Black | #000000 | rgb(0,0,0) | hsl(0,0%,0%) |

### Alpha Channels

All formats support transparency through alpha channels: RGBA (rgb(255,0,0,0.5)), HEX with 8 digits (#FF000080), and HSLA (hsla(0,100%,50%,0.5)).




### Try It Yourself

Convert colors instantly with our [Color Converter](/tools/color-converter).

Generate beautiful color schemes with our [Color Palette Generator](/tools/color-palette).

Need to pick colors from an image? Try [Color Picker from Image](/tools/color-picker).


## FAQ

**What's the difference between HEX and RGB?** They represent the same colors differently. HEX is base-16; RGB is decimal. Both describe amounts of red, green, and blue.

**Why does my color look different on different screens?** That's a hardware/calibration issue, not a format issue. HEX, RGB, and HSL should all display identically on the same screen.

**What is color contrast ratio?** It measures readability of text against a background. WCAG AA requires 4.5:1 for normal text. Our tool shows contrast ratios automatically.`,
  },
  {
    slug: "compress-images-without-losing-quality",
    title: "How to Compress Images Without Losing Quality",
    description: "Learn the best ways to reduce image file sizes while keeping visual quality. Perfect for websites, email, and storage.",
    date: "2026-05-22",
    readTime: "6 min read",
    category: "Image Tools",
    toolSlug: "image-compressor",
    content: `## Why Image Compression Matters

Large images slow down websites, fill up storage, and make emails fail to send. A 5MB photo from your phone can be compressed to under 500KB with barely visible quality loss.

## The 80/20 Rule of Compression

With most images, you can reduce file size by 80% while retaining 95% of visual quality. The key is finding the right compression level for each use case.

## How to Compress Images

### Using ToolboxPro

1. Visit our [Image Compressor](/tools/image-compressor)
2. Drag and drop your image (JPG, PNG, WebP, AVIF, or GIF)
3. Adjust the quality slider
4. Live before/after preview with file sizes
5. Download the compressed version

### Recommended Settings

| Use Case | Format | Quality |
|----------|--------|---------|
| Website hero images | WebP | 80% |
| Product photos | JPG | 75-85% |
| Icons/logos | PNG | Lossless |
| Email attachments | JPG | 60-70% |
| Social media | JPG | 80-90% |

## Best Practices

1. **Always keep the original** — compress copies, not originals
2. **Use the right format** — JPG for photos, PNG for graphics with text, WebP for web
3. **Remove EXIF data** — metadata adds kilobytes with no visual benefit
4. **Batch process** — compress multiple images at once


### Lossy vs Lossless

Lossless preserves 100% quality with 10-40% size reduction (best for screenshots, logos). Lossy reduces size by 50-90% with some quality loss (best for photos, web graphics).

### Format Guide

| Use Case | Best Format |
|----------|-------------|
| Website photos | WebP |
| Print photos | JPEG (max quality) |
| Logo with text | PNG |
| Screenshots | PNG |
| App icons | PNG |
| Email attachments | JPEG


### Understanding Image Compression Algorithms

Image compression works by removing redundant data while preserving visual quality. Lossless compression (PNG, GIF) eliminates redundant pixel data without changing the image at all. Lossy compression (JPEG, WebP with quality loss) removes details the human eye is less sensitive to, achieving much smaller file sizes.

### Choosing the Right Format

JPEG remains the universal standard for photographs due to its broad compatibility. PNG is essential when you need transparency or pixel-perfect reproduction of text and logos. WebP offers the best of both worlds with 25-35% smaller files than JPEG and support for transparency and animation.

### Batch Processing Tips

When compressing multiple images, process them one at a time for best results. Start with the largest images first — they offer the biggest size savings. Compare compressed and original side by side to ensure quality is acceptable.




### Try It Yourself

Compress your images now with our free [Image Compressor](/tools/image-compressor).

Convert between formats using our [Image Format Converter](/tools/image-converter).


## FAQ

**Does compression affect image quality?** Lossy compression reduces quality proportionally to the compression level. At 80% quality, the difference is barely visible but file size drops dramatically.

**What's the best format for web?** WebP offers the best compression-to-quality ratio for the web. All modern browsers support it.

**Can I compress images without uploading to a server?** Yes — ToolboxPro processes everything in your browser using Canvas API. Your images stay on your device.`,
  },
  {
    slug: "merge-pdf-files-free",
    title: "Merge PDF Files Free — No Limits, No Signup",
    description: "Combine multiple PDFs into one document instantly. Free, unlimited, and private — no watermarks, no daily limits.",
    date: "2026-05-22",
    readTime: "4 min read",
    category: "PDF Tools",
    toolSlug: "pdf-merger",
    content: `## Why Merge PDFs?

You have three separate PDFs — a cover page, a report, and an appendix — but you need one file to email or upload. Merging them should be instant and free.

Most PDF tools limit you to 2-3 merges per day or add watermarks. Not here.

## How to Merge PDFs

### Using ToolboxPro

1. Visit our [PDF Merger](/tools/pdf-merger)
2. Drop up to 10 PDFs into the upload area
3. Drag to reorder the files
4. Click "Merge"
5. Download your combined PDF

### What Makes Our Tool Different

- **No daily limits** — merge as many times as you want
- **No watermarks** — your documents stay clean
- **No signup** — just use it
- **Privacy first** — files are processed in your browser using WASM
- **Drag to reorder** — arrange pages in any order before merging


### Why Merge PDFs?

- Combine scanned documents into one file
- Merge monthly invoices for accounting
- Join report sections with supporting docs
- Combine e-book chapters or portfolio pieces

### Tips for a Smooth Merge

1. Check page order before merging
2. Similar page sizes work best
3. For files over 50MB, try merging in smaller batches

### Common PDF Merging Scenarios

Professionals merge PDFs in many situations: combining scanned contract pages into a single document, joining monthly invoices for tax filing, assembling presentation slides with supporting handouts, and creating e-book compilations from individual chapters.

### What Gets Preserved During Merging

Our PDF merger preserves all original content: fonts, images, vector graphics, page sizes, and internal links. You can merge PDFs with different page orientations (portrait and landscape) without issues.

### Step-by-Step Guide

1. Open our free online PDF Merger
2. Upload your PDF files in the desired order
3. Click "Merge" and wait a few seconds
4. Download your combined PDF document

All processing happens in your browser. Your documents never leave your device.




### Try It Yourself

Merge your PDFs online with our [PDF Merger](/tools/pdf-merger) tool.

You can also [protect PDFs with a password](/tools/pdf-protector) or [split PDFs into separate pages](/tools/pdf-splitter).

Convert images to PDF using our [Image to PDF](/tools/image-to-pdf) converter.


## FAQ

**What's the maximum file size?** PDFs up to ~100MB are handled smoothly. For larger files, performance depends on your browser's memory.

**Can I merge more than 10 PDFs?** Do it in batches: merge the first 10, then merge the result with the next batch.

**Is my data safe?** Yes. PDF processing happens locally using pdf-lib WebAssembly. Your files never reach any server.

**Does it work on mobile?** Yes — the drag-and-drop interface works on touch devices.`,
  },
  {
    slug: "create-custom-qr-codes",
    title: "How to Create Custom QR Codes for Business",
    description: "Generate professional QR codes with custom colors, logos, and error correction. Perfect for marketing, menus, and events.",
    date: "2026-05-22",
    readTime: "5 min read",
    category: "Conversion",
    toolSlug: "qr-code-generator",
    content: `## QR Codes in 2026

QR codes are everywhere — restaurant menus, business cards, product packaging, event tickets. A well-designed QR code can increase scan rates by 40% compared to a plain black-and-white version.

## Types of QR Codes

| Type | Use Case | Example |
|------|----------|---------|
| URL | Website links | Direct to landing page |
| vCard | Contact sharing | Digital business cards |
| WiFi | Network sharing | Guest WiFi credentials |
| SMS | Text messaging | Promotional campaigns |
| Email | Contact triggers | Newsletter signups |

## How to Create a QR Code

### Using ToolboxPro

1. Visit our [QR Code Generator](/tools/qr-code-generator)
2. Choose your content type (URL, Text, WiFi, etc.)
3. Enter the content
4. Customize colors, error correction, and size
5. Download in PNG or SVG format

### Customization Tips

- **Color**: Use brand colors, but ensure contrast
- **Error correction**: Higher levels allow logos in the center
- **Size**: 512px is best for print, 256px for digital


### QR Code Types at a Glance

| Type | Best For | Max Data |
|------|----------|----------|
| URL | Website links | 4,296 chars |
| Text | Short messages | 4,296 chars |
| Email | Pre-filled email | 4,296 chars |
| WiFi | Network login | Limited |
| vCard | Contact sharing | Limited |

### How to Scan

iPhone: Open Camera app and point at the code. Android: Use Google Lens. Desktop: Use our QR Code Reader tool.

### What Are QR Codes?

QR (Quick Response) codes store information in a grid of black and white squares. Unlike traditional barcodes that store data in one dimension, QR codes use both horizontal and vertical patterns, allowing them to hold significantly more data.

### QR Code Error Correction

QR codes include error correction that allows them to be read even when partially damaged or obscured. There are four levels: L (7% recovery), M (15%), Q (25%), and H (30%). Higher correction levels create denser codes but improve scanning reliability.

### Best Practices for QR Codes

- Use high contrast colors (dark on light background)
- Maintain a quiet zone (white border) around the code
- Test with multiple scanning apps before printing
- For business cards, use vCard format for auto-save




### Try It Yourself

Generate custom QR codes with our [QR Code Generator](/tools/qr-code-generator).

Need to scan a QR code? Use our [QR Code Reader](/tools/qr-reader) tool.

For check digits and structured numbering, try our [Barcode Generator](/tools/barcode-generator).


## FAQ

**Can I add a logo to a QR code?** Yes — use higher error correction (H or Q) to make room for a center logo without breaking the scan.

**What's the best format for printing?** SVG — it's vector-based and scales to any size without quality loss.

**Do QR codes expire?** No — once generated, a QR code works forever. The content is encoded in the pattern itself.`,
  },
  {
    slug: "word-counter-character-count",
    title: "Word Counter — Why Character Count Matters",
    description: "Track words, characters, sentences, and reading time. Essential for writers, students, and SEO professionals.",
    date: "2026-05-22",
    readTime: "4 min read",
    category: "Text Tools",
    toolSlug: "word-counter",
    content: `## Why Counting Words Matters

Every platform has limits. Twitter: 280 characters. SEO meta descriptions: 160 characters. College essays: 500 words. Job applications: 250 words. You need to know your count.

## What Our Word Counter Shows

- **Words** — total word count
- **Characters** — with and without spaces
- **Sentences** — based on period, exclamation, and question marks
- **Paragraphs** — separated by blank lines
- **Reading time** — based on average 200 words per minute
- **Speaking time** — based on average 150 words per minute
- **Top keywords** — most frequently used words

## How to Use

1. Visit our [Word Counter](/tools/word-counter)
2. Type or paste your text
3. See real-time statistics as you type
4. No button to click — it updates instantly


### Why These Metrics Matter

Word count is essential for writers meeting article length requirements, students adhering to essay limits, and professionals crafting concise reports. Character count matters for social media platforms (Twitter's 280 chars, SMS's 160 chars). Reading time helps readers know how long an article will take to consume.

### Tips for Staying Within Limits

- Twitter/X: Keep tweets under 280 characters
- SMS messages: 160 characters per segment
- SEO meta descriptions: 150-160 characters
- Blog posts: 1,500-2,500 words for SEO ranking

### Word Count in Professional Writing

Professional writers, editors, and content managers rely on word count statistics daily. Blog posts typically need 1,500-2,500 words for SEO ranking. Academic essays have strict word limits. Social media platforms enforce character caps. Knowing your word count helps you tailor content to each platform's requirements.

### Beyond Basic Word Count

Advanced text analysis goes beyond simple word counting. Our tool also tracks unique words, average word length, and readability scores. These metrics help you spot overused words, improve sentence variety, and ensure your writing is accessible to your target audience.




### Try It Yourself

Count words and characters with our [Word Counter](/tools/word-counter) tool.

Get detailed text analysis including unique words and readability with our [Text Statistics](/tools/text-statistics) tool.


## FAQ

**What counts as a word?** Any sequence of characters separated by spaces. Hyphenated words (e.g., "state-of-the-art") count as one word.

**Does it count HTML tags?** Copy plain text only. HTML tags would be counted as words.

**Is there a character limit?** No practical limit for our tool. Performance is instant for documents up to 100,000 characters.`,
  },
  {
    slug: "url-encoding-101",
    title: "URL Encoding 101: What Every Developer Should Know",
    description: "Understanding percent-encoding. Learn why spaces become %20 and how to encode/decode URLs correctly.",
    date: "2026-05-22",
    readTime: "5 min read",
    category: "Developer Tools",
    toolSlug: "url-encoder-decoder",
    content: `## What is URL Encoding?

URLs can only contain certain characters: letters, digits, and a few special characters (-, _, ., ~). Everything else must be **encoded** using percent-encoding.

For example, a space becomes \`%20\`, and \`#\` becomes \`%23\`.

## Common Encoded Characters

| Character | Encoded | Why |
|-----------|---------|-----|
| Space | %20 | Not allowed in URLs |
| # | %23 | Reserved for hash fragments |
| & | %26 | Reserved for query parameters |
| ? | %3F | Reserved for query strings |
| / | %2F | Reserved for path segments |
| @ | %40 | Reserved for auth |

## When You Need URL Encoding

### Query Parameters

\`\`\`
https://example.com/search?q=cats & dogs
// Must be encoded as:
https://example.com/search?q=cats%20%26%20dogs
\`\`\`

### API Requests

API keys and tokens often contain characters that need encoding.

### Form Submissions

Browser forms automatically encode data, but custom AJAX requests may not.

## How to Encode/Decode

### Using ToolboxPro

Visit our [URL Encoder/Decoder](/tools/url-encoder-decoder) and choose:

- **Encode** — turns special characters into percent-encoding
- **Decode (Query)** — decodes query parameter values
- **Decode (Full URL)** — decodes the entire URL

### In JavaScript

\`\`\`javascript
encodeURIComponent("cats & dogs");  // "cats%20%26%20dogs"
decodeURIComponent("cats%20%26%20dogs");  // "cats & dogs"
\`\`\`


### Common Encoded Characters

| Character | Encoded | Why |
|-----------|---------|-----|
| Space | %20 | Not allowed in URLs |
| # | %23 | Fragment identifier |
| & | %26 | Query separator |
| = | %3D | Key-value separator |
| / | %2F | Path separator |

### URL Encoding in Code

JavaScript: encodeURIComponent() -- Python: urllib.parse.quote() -- PHP: urlencode()

Common mistake: double encoding (%2520 instead of %20). Never encode an already encoded string.


### Why URL Encoding Exists

URLs have strict character rules defined in RFC 3986. Only letters, digits, and a few special characters (-._~) are allowed unencoded. All other characters must be percent-encoded. This ensures URLs work consistently across browsers, servers, and network infrastructure worldwide.

### Real-World Examples

Query parameters in API calls often contain spaces, special characters, or Unicode text that must be encoded. For example, a search for "coffee & tea" becomes "coffee%20%26%20tea" in a URL. Our URL Encoder/Decoder handles all these cases automatically.

### Common Pitfalls

The most common mistake is double-encoding. If a URL already has encoded characters (%20 for spaces) and you encode it again, you get %2520. Always check whether input has already been encoded before applying another round of encoding.




### Try It Yourself

Encode and decode URLs instantly with our [URL Encoder/Decoder](/tools/url-encoder-decoder).

Our [HTML Entity Converter](/tools/html-entity-converter) handles a different kind of text encoding.


## FAQ

**When should I use encodeURI vs encodeURIComponent?** Use \`encodeURIComponent\` for query parameter values. Use \`encodeURI\` for full URLs (it doesn't encode \`/\`, \`?\`, \`#\`, \`&\`).

**Do modern browsers encode URLs automatically?** In the address bar, yes. In JavaScript fetch() calls, no — you must encode manually.

**Is URL encoding the same as HTML encoding?** No. URL encoding uses \`%\` prefixes; HTML encoding uses \`&\` prefixes (like \`&amp;\`).`,
  },
  {
    slug: "best-free-developer-tools-2026",
    title: "10 Best Free Online Tools for Developers (2026)",
    description: "Essential free online tools every developer needs: JSON formatter, regex tester, Base64 encoder, color converter, and more.",
    date: "2026-05-22",
    readTime: "6 min read",
    category: "Developer Tools",
    content: `## Essential Developer Tools

Every developer has a mental list of tools they use daily. Here are the 10 free online tools we think every developer should bookmark.

### 1. JSON Formatter & Validator

Debugging API responses? Minified JSON is unreadable. A good [JSON formatter](/tools/json-formatter) prettifies it instantly and catches syntax errors with precise line numbers.

### 2. Regex Tester

Testing regex in code is slow. Use a [regex tester](/tools/regex-tester) with real-time highlighting to iterate on patterns in seconds.

### 3. Base64 Encoder/Decoder

Inspecting JWT tokens? Debugging data URIs? A [Base64 encoder/decoder](/tools/base64-encode-decode) is essential for web development.

### 4. Color Converter

Moving between design and code? A [color converter](/tools/color-converter) handles HEX, RGB, HSL, and more with a live preview.

### 5. URL Encoder/Decoder

Building API requests? A [URL encoder/decoder](/tools/url-encoder-decoder) ensures your query parameters are properly formatted.

### 6. Image Compressor

Website performance starts with optimized images. An [image compressor](/tools/image-compressor) can reduce file sizes by 80% with minimal quality loss.

### 7. Image Format Converter

Need WebP for your website but have JPG files? An [image converter](/tools/image-converter) handles batch conversions.

### 8. PDF Merger

Joining multiple PDFs into one shouldn't require paid software. A [PDF merger](/tools/pdf-merger) does it for free, no limits.

### 9. QR Code Generator

Debugging mobile apps? A [QR code generator](/tools/qr-code-generator) helps you share URLs and configs instantly.

### 10. Word Counter

Writing documentation? A [word counter](/tools/word-counter) tracks word count, reading time, and keyword frequency.

## Why Free Online Tools?

- **No installation** — works in any browser
- **Always updated** — no version management
- **Cross-platform** — Mac, Windows, Linux, mobile
- **Privacy first** — our tools process data on your device

### What Makes a Great Developer Tool?

The best tools share three qualities: they solve a real problem, work instantly without setup, and respect your privacy.

### Tool Categories

Our roundup covers JSON formatting, regex testing, Base64 encoding, color conversion, URL encoding, image compression, image conversion, PDF merging, QR generation, word counting, and more.

Each tool processes data entirely in your browser -- nothing is uploaded to any server.


### What Makes a Developer Tool Essential

The best developer tools share three qualities: they solve a real, recurring problem; they work instantly without downloading or installing; and they respect the user's privacy and data.

### Our Top Picks at a Glance

| Tool | Best For | Key Feature |
|------|----------|-------------|
| JSON Formatter | Debugging APIs | Tree view + validation |
| Regex Tester | Pattern matching | Real-time highlighting |
| Base64 Encoder | Data encoding | File and text support |
| Color Converter | Design work | HEX/RGB/HSL |
| Image Compressor | Web performance | Quality slider |
| PDF Merger | Document management | Combine multiple files |
| QR Generator | Marketing | WiFi, vCard, URL modes |
| Word Counter | Writing | Reading time estimate |

All tools process data in your browser. Nothing is uploaded to any server.




### Try It Yourself

Try all these tools for free on [ToolboxPro](/tools). No signup required.

Bookmark our [JSON Formatter](/tools/json-formatter) and [Regex Tester](/tools/regex-tester) for daily use.

`,
  },
  {
    slug: "image-format-guide-jpg-png-webp",
    title: "Image Format Guide: JPG vs PNG vs WebP vs AVIF",
    description: "A complete comparison of image formats. Which one should you use for websites, print, photography, and graphics?",
    date: "2026-05-22",
    readTime: "7 min read",
    category: "Image Tools",
    toolSlug: "image-converter",
    content: `## Which Image Format Should You Use?

Choosing the wrong image format costs you in file size, quality, or compatibility. Here's a practical guide to when each format wins.

### JPG (JPEG)

**Best for:** Photographs, complex images with many colors

**Pros:** Universal support, small file size at high quality
**Cons:** No transparency, lossy compression artifacts at low quality
**Use when:** Photos, product images, social media

### PNG

**Best for:** Graphics with text, screenshots, logos

**Pros:** Lossless compression, transparency support, sharp text
**Cons:** Larger file size than JPG for photos
**Use when:** Screenshots, logos, images with text overlays

### WebP

**Best for:** Web-first images

**Pros:** 25-35% smaller than JPG at same quality, supports transparency and animation
**Cons:** Slightly less support in very old software
**Use when:** Website images, any web-first use case

### AVIF

**Best for:** Next-generation web images

**Pros:** 50% smaller than JPG at same quality, HDR support
**Cons:** Higher encoding time, limited support in older browsers
**Use when:** Modern websites, future-proofing

## Quick Decision Guide

| Use Case | Best Format | Why |
|----------|-------------|-----|
| Website photos | WebP | Best size/quality for web |
| Print photos | JPG (max quality) | Universal printer support |
| Logo with text | PNG (or SVG) | Sharp text, transparency |
| Screenshots | PNG | Lossless, exact reproduction |
| App icons | PNG | Transparency, sharp edges |
| Email attachments | JPG | Small file size, universal |
| Social media | JPG | Platform optimization |
| Animated images | WebP or GIF | WebP is smaller |

## How to Convert

Use our free [Image Converter](/tools/image-converter) to convert between any formats instantly. Supports batch conversion — upload multiple files, choose your target format, download them all.


### Quick Format Comparison

JPEG: Lossy, no transparency, universal support, best for photos. PNG: Lossless, supports transparency, best for graphics and UI. WebP: Supports both lossy and lossless, smaller files, 96% browser support. GIF: Limited to 256 colors, supports animation.

### WebP vs AVIF

WebP is 25-35% smaller than JPEG with 96% browser support. AVIF is 50% smaller but has ~80% support and slower encoding.

### Best Format by Use Case

Photos: WebP or JPEG. Logos/screenshots: PNG. Animated: WebP or GIF. Print: JPEG (max quality).


### Detailed Format Breakdown

| Format | Compression | Transparency | Animation | Colors | Best For |
|--------|------------|-------------|-----------|--------|----------|
| JPEG | Lossy | No | No | 16.7M | Photos, complex images |
| PNG | Lossless | Yes | No | 16.7M | Screenshots, logos, UI |
| WebP | Both | Yes | Yes | 16.7M | Web images |
| GIF | Lossless | 1-bit | Yes | 256 | Simple animations |
| AVIF | Both | Yes | Yes | 12-bit | Next-gen web images |

### Migration Guide

If you are still using JPEG and PNG for everything, consider switching to WebP for web use. WebP files are 25-35% smaller than JPEG at equivalent quality and support transparency like PNG. Most modern CMS platforms and image CDNs support automatic WebP conversion.




### Try It Yourself

Convert images between formats with our [Image Format Converter](/tools/image-converter).

Compress images for web use with our [Image Compressor](/tools/image-compressor).

Convert SVG graphics to PNG using our [SVG to PNG](/tools/svg-to-png) tool.


## FAQ

**Can I convert without losing quality?** Going from lossless (PNG) to lossy (JPG/WebP) always loses some data. To minimize loss, use high quality settings (85-95%).

**What format does Google prefer?** Google explicitly recommends WebP and AVIF for web images, and uses them in PageSpeed Insights scoring.`,
  },

{
    slug: "uuid-generator",
    title: "How to Generate UUIDs Online — Complete Guide to UUID v4",
    description: "Learn everything about UUIDs: what they are, UUID v4 vs v7, how to generate them instantly online, and best practices for using UUIDs as primary keys and identifiers.",
    date: "2026-05-23",
    readTime: "5 min read",
    category: "Developer Tools",
    toolSlug: "uuid-generator",
    content: `## What is a UUID?

A **UUID** (Universally Unique Identifier) is a 128-bit identifier standardized by the Open Software Foundation (OSF). It's designed to be unique across space and time — no central authority needed.

UUIDs look like this:

\`\`\`
550e8400-e29b-41d4-a716-446655440000
\`\`\`

That's 32 hexadecimal characters arranged in 5 groups: 8-4-4-4-12.

## Why Use UUIDs?

### 1. Distributed Systems

Auto-increment IDs break when you have multiple databases generating IDs simultaneously. Two servers could both generate ID 42. UUIDs eliminate collisions entirely.

### 2. Security Through Obscurity

Sequential IDs (1, 2, 3...) let anyone guess how many users or orders you have. UUIDs are unpredictable — no one can guess a valid ID.

### 3. Offline Generation

UUIDs can be generated without a database or central server. Your mobile app can create UUIDs offline and sync later with zero conflicts.

### 4. Database Migration Friendly

Merging two databases with auto-increment IDs is a nightmare of re-mapping foreign keys. UUIDs never conflict, so merging is trivial.

## UUID Versions Explained

### UUID v4 (Random)

The most common version. All bits except 6 are randomly generated:

\`\`\`
xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
\`\`\`

- The \`4\` at position 13 marks it as v4
- \`y\` indicates the variant (8, 9, a, or b)
- 122 bits of randomness → 5.3 × 10^36 possible values

**Collision probability:** You'd need to generate 2.71 trillion UUIDs to have a 50% chance of a single collision. In practice: zero.

### UUID v7 (Time-Ordered)

Newer version (RFC 9562) that's time-sortable. The first 48 bits are a Unix timestamp in milliseconds:

\`\`\`
018f3a6e-1b3c-7d45-a123-456789abcdef
\`\`\`

**Why v7 matters:** Database indexes on UUIDs were slow because random ordering caused page splits. Time-ordered UUIDs solve this — new rows go to the end of the index, just like auto-increment.

## How to Generate UUIDs

### Using ToolboxPro

Visit our [UUID Generator](/tools/uuid-generator) and:

1. Choose the UUID version (v4 or v7)
2. Select how many to generate (1 to 1000)
3. Click **Generate**
4. Choose your output format — lowercase, uppercase, or without hyphens
5. Copy with one click

### The Bulk Generation Feature

Need 500 UUIDs for seeding a database? Set the count to 500, click Generate, and copy them all at once. Each UUID is cryptographically random — no patterns, no collisions.

## UUID Best Practices

### As Database Primary Keys

\`\`\`sql
-- PostgreSQL has a native UUID type
CREATE TABLE users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL
);

-- MySQL use CHAR(36) or BINARY(16)
CREATE TABLE users (
    id BINARY(16) PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
\`\`\`

### Storage Optimization

- **Text format (36 chars):** Readable, debuggable, but larger
- **Binary format (16 bytes):** Compact, faster, but harder to read
- **Base64 encoded (22 chars):** URL-safe, compact

### When NOT to Use UUIDs

- **Tiny databases** — auto-increment is simpler and faster
- **Human-readable IDs** — order numbers like "ORD-1001" are more user-friendly
- **Performance-critical OLTP** — binary UUIDs are still slower than integers for joins


### Try It Yourself

Generate UUIDs instantly with our [UUID Generator](/tools/uuid-generator).

Our [Timestamp Converter](/tools/timestamp-converter) helps with time-based identifiers.


## FAQ

**Can two UUIDs be the same?** Theoretically yes, but practically no. The odds are so astronomically low that you'd win the lottery 50 times in a row first.

**What's the difference between UUID and GUID?** Nothing — GUID is Microsoft's implementation of the UUID standard. They're interchangeable.

**Are UUIDs cryptographically secure?** UUID v4 uses random bytes. On most systems these are cryptographically strong (JavaScript's crypto.randomUUID() uses the OS CSPRNG).

**How many UUIDs can I generate per second?** Unlimited — our tool generates them client-side in milliseconds. Try generating 10,000 and see for yourself.`,
  },
  {
    slug: "timestamp-converter",
    title: "Unix Timestamp Converter: How to Convert Between Epoch and Human Date",
    description: "Master Unix timestamps: convert epoch seconds to readable dates, understand timezone handling, and use the right format for your programming language.",
    date: "2026-05-23",
    readTime: "5 min read",
    category: "Developer Tools",
    toolSlug: "timestamp-converter",
    content: `## What is a Unix Timestamp?

A **Unix timestamp** (also called Epoch time) is the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC — the Unix Epoch.

Right now, the timestamp is roughly **1.8 billion** and counting up by one every second.

### Why 1970?

Unix was developed at Bell Labs in the late 1960s and early 1970s. January 1, 1970 was chosen as the epoch for simplicity — it's a clean, round date. Ken Thompson and Dennis Ritchie picked it, and the world followed.

## When You Encounter Timestamps

Timestamps appear everywhere in development:

| Source | Format | Example |
|--------|--------|---------|
| REST APIs | Seconds | 1716451200 |
| JavaScript Date.now() | Milliseconds | 1716451200000 |
| Python datetime | Seconds with decimals | 1716451200.123456 |
| Database TIMESTAMP | Seconds or milliseconds | 1716451200 |
| Firebase Timestamps | Milliseconds | 1716451200000 |
| Excel dates | Days since 1900 | 45455 |

The most common mistake? Mixing seconds and milliseconds.

## How to Convert Timestamps

### Using ToolboxPro

Visit our [Timestamp Converter](/tools/timestamp-converter) and:

1. **Paste a timestamp** — it auto-detects seconds vs milliseconds
2. **See all formats instantly** — UTC, ISO 8601, local time, relative time
3. **Pick a date from the calendar** — get the timestamp for any date
4. **Copy any format** with one click

### Manual Conversion in Code

\`\`\`javascript
// JavaScript — Date.now() returns milliseconds
const ms = Date.now();                       // 1716451200000
const seconds = Math.floor(Date.now() / 1000); // 1716451200

// Convert back
const date = new Date(1716451200000);
console.log(date.toISOString());  // "2026-05-23T00:00:00.000Z"
\`\`\`

\`\`\`python
# Python
import time
import datetime

# Current timestamp
ts = time.time()  # 1716451200.123456

# To datetime
dt = datetime.datetime.fromtimestamp(ts)
print(dt.isoformat())  # "2026-05-23T00:00:00.123456"

# From datetime to timestamp
ts2 = dt.timestamp()
\`\`\`

\`\`\`sql
-- PostgreSQL
SELECT EXTRACT(EPOCH FROM NOW());           -- seconds
SELECT EXTRACT(EPOCH FROM NOW()) * 1000;    -- milliseconds
SELECT TO_TIMESTAMP(1716451200);            -- timestamp to datetime

-- MySQL
SELECT UNIX_TIMESTAMP();                    -- seconds
SELECT FROM_UNIXTIME(1716451200);           -- timestamp to datetime
\`\`\`

## The Year 2038 Problem

On January 19, 2038, 32-bit signed integers will overflow. The timestamp 2147483647 (max 32-bit signed) rolls over to -2147483648, which corresponds to December 1901.

**Who's affected:** Legacy systems, embedded devices, older databases, 32-bit operating systems.

**The fix:** Use 64-bit integers (safe for 292 billion years) or unsigned 32-bit (safe until 2106).

Most modern systems already use 64-bit timestamps, but check your embedded devices and legacy databases.

## Timezone Handling

Timestamps are always UTC. The conversion to local time is purely display logic:

\`\`\`javascript
// Always UTC internally
const utc = new Date("2026-05-23T12:00:00Z");
console.log(utc.getTime());  // Same value everywhere

// Display in any timezone
const tokyo = utc.toLocaleString("en-US", { timeZone: "Asia/Tokyo" });
const nyc = utc.toLocaleString("en-US", { timeZone: "America/New_York" });
\`\`\`

### Best Practice

Store timestamps as UTC integers in your database. Convert to local time only when displaying to users. This avoids every timezone-related bug.


### Try It Yourself

Convert timestamps easily with our [Timestamp Converter](/tools/timestamp-converter).

Our [Number Base Converter](/tools/number-base-converter) handles binary, hex, and decimal conversions.


## FAQ

**What's the difference between seconds and milliseconds?** A factor of 1000. Timestamp \`1716451200\` (seconds) = May 23, 2026. \`1716451200000\` (milliseconds) = the same moment. Divide by 1000 to convert milliseconds to seconds.

**Does a timestamp include timezone?** No — timestamps are always UTC. The number itself represents the same instant everywhere on Earth.

**How do I get the current timestamp in a shell script?**

\`\`\`bash
# Seconds
date +%s

# Milliseconds
echo $(($(date +%s%N)/1000000))
\`\`\`

**What is ISO 8601?** A date format like \`2026-05-23T14:30:00+08:00\`. It's human-readable and includes timezone offset. Our tool shows both formats.`,
  },
  {
    slug: "number-base-converter",
    title: "Binary, Hex, Decimal: How to Convert Between Number Bases",
    description: "Learn to convert between binary, hexadecimal, decimal, and octal. Understand place values, conversion algorithms, and practical use cases in programming.",
    date: "2026-05-23",
    readTime: "6 min read",
    category: "Developer Tools",
    toolSlug: "number-base-converter",
    content: `## Why Number Base Conversion Matters

Computers think in binary (base 2). Humans prefer decimal (base 10). Programmers use hexadecimal (base 16) as a compact shorthand. If you work with low-level data, you need all three.

### Common Number Bases

| Base | Name | Digits | Use Case |
|------|------|--------|----------|
| 2 | Binary | 0-1 | Machine code, bitwise operations |
| 8 | Octal | 0-7 | File permissions (Unix) |
| 10 | Decimal | 0-9 | Everyday numbers |
| 16 | Hexadecimal | 0-9, A-F | Memory addresses, colors, hashes |

## How Number Bases Work

Every number is a sum of **digits × base^position**. The rightmost digit is position 0.

### Decimal Example: 423₁₀

\`\`\`
4 × 10² = 4 × 100 = 400
2 × 10¹ = 2 × 10  =  20
3 × 10⁰ = 3 × 1   =   3
Sum: 423
\`\`\`

### Binary Example: 11010101₂

\`\`\`
1 × 2⁷ = 128
1 × 2⁶ =  64
0 × 2⁵ =   0
1 × 2⁴ =  16
0 × 2³ =   0
1 × 2² =   4
0 × 2¹ =   0
1 × 2⁰ =   1
Sum: 213₁₀
\`\`\`

## Conversion Methods

### Decimal to Binary (Repeated Division)

Divide by 2 repeatedly, reading remainders from bottom to top:

\`\`\`
213 ÷ 2 = 106 remainder 1 ↑
106 ÷ 2 =  53 remainder 0 │
 53 ÷ 2 =  26 remainder 1 │
 26 ÷ 2 =  13 remainder 0 │
 13 ÷ 2 =   6 remainder 1 │
  6 ÷ 2 =   3 remainder 0 │
  3 ÷ 2 =   1 remainder 1 │
  1 ÷ 2 =   0 remainder 1 │
Result: 11010101₂
\`\`\`

### Binary to Hexadecimal (Grouping)

Group binary digits into sets of 4 (from right), then convert each group:

\`\`\`
Binary:  1101 0101
Hex:       D    5
Result: 0xD5
\`\`\`

### Hexadecimal to Decimal

\`\`\`
0xD5 = 13 × 16¹ + 5 × 16⁰
     = 208 + 5
     = 213₁₀
\`\`\`

## Using the ToolboxPro Converter

Visit our [Number Base Converter](/tools/number-base-converter) and:

1. **Type any number** — it auto-detects the base
2. **See all bases simultaneously** — binary, octal, decimal, hex side by side
3. **Copy any format** with one click
4. **Works with very large numbers** — up to 64-bit values

## Practical Use Cases

### 1. RGB Color Values

\`\`\`css
/* Hex is shorthand for RGB in base-10 */
#FF5733
/* FF = 255 red, 57 = 87 green, 33 = 51 blue */
background-color: rgb(255, 87, 51);
\`\`\`

### 2. Unix File Permissions

\`\`\`bash
# chmod uses octal
chmod 755 script.sh
# 7 = rwx (owner), 5 = r-x (group), 5 = r-x (others)
# 7 in octal = 111 in binary = read + write + execute
\`\`\`

### 3. Bitwise Flags

\`\`\`javascript
// Each bit is a flag
const READ    = 0b0001;  // 1
const WRITE   = 0b0010;  // 2
const EXECUTE = 0b0100;  // 4

const permissions = READ | WRITE;  // 0b0011 = 3
const canRead = permissions & READ; // 0b0001 = true
\`\`\`

### 4. Memory Addresses

\`\`\`c
// Debuggers show addresses in hex
int *ptr = malloc(64);
printf("%p", ptr);  // 0x7ffeefbff5e0
\`\`\`

### 5. Network MAC Addresses

\`\`\`
MAC: 00:1A:2B:3C:4D:5E
Each pair is one byte (0-255 in decimal, 00-FF in hex)
First 3 bytes: vendor ID, Last 3 bytes: device ID
\`\`\`

## Common Conversion Table

| Decimal | Binary | Hex | Octal |
|---------|--------|-----|-------|
| 0 | 0000 | 0 | 0 |
| 1 | 0001 | 1 | 1 |
| 2 | 0010 | 2 | 2 |
| 3 | 0011 | 3 | 3 |
| 4 | 0100 | 4 | 4 |
| 5 | 0101 | 5 | 5 |
| 6 | 0110 | 6 | 6 |
| 7 | 0111 | 7 | 7 |
| 8 | 1000 | 8 | 10 |
| 9 | 1001 | 9 | 11 |
| 10 | 1010 | A | 12 |
| 11 | 1011 | B | 13 |
| 12 | 1100 | C | 14 |
| 13 | 1101 | D | 15 |
| 14 | 1110 | E | 16 |
| 15 | 1111 | F | 17 |


### Try It Yourself

Convert between number bases with our [Number Base Converter](/tools/number-base-converter).

Our [Binary to Text](/tools/binary-to-text) converter is useful for binary data interpretation.


## FAQ

**What base do computers actually use?** Binary (base 2). Every value in memory — numbers, text, images — is ultimately stored as sequences of 0s and 1s.

**Why do programmers use hex?** Hex is a human-readable shorthand for binary. One hex digit = 4 binary digits. It's much easier to read \`0xFF\` than \`0b11111111\`.

**What about base64?** Base64 uses 64 characters (A-Z, a-z, 0-9, +, /) and is used for encoding binary data as text — see our [Base64 Encoder/Decoder](/tools/base64-encode-decode).

**Is there a base higher than hex?** Yes — base32, base36, base58 (Bitcoin addresses), and base64 are common. Our tool handles bases 2 through 36.`,
  },
  {
    slug: "css-minifier",
    title: "CSS Minifier Guide: How to Minify CSS for Faster Websites",
    description: "Reduce CSS file sizes by 50-70% with minification. Learn what minification does, how it differs from compression, and best practices for production CSS.",
    date: "2026-05-23",
    readTime: "5 min read",
    category: "Developer Tools",
    toolSlug: "css-minifier",
    content: `## What is CSS Minification?

CSS minification removes every character that isn't needed for execution — whitespace, comments, semicolons, and unnecessary characters — without changing how the CSS works.

### Before (508 bytes)

\`\`\`css
/* Main stylesheet */
body {
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
    background-color: #ffffff;
    color: #333333;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
}

/* Card component */
.card {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
\`\`\`

### After (260 bytes — 49% smaller)

\`\`\`css
body{margin:0;padding:0;font-family:Inter,sans-serif;background-color:#fff;color:#333}.container{max-width:1200px;margin:0 auto;padding:2rem 1rem}.card{border:1px solid #e0e0e0;border-radius:8px;padding:1.5rem;box-shadow:0 2px 4px rgba(0,0,0,.1)}
\`\`\`

## Why Minify CSS?

### 1. Faster Page Loads

CSS is a **render-blocking resource** — the browser must download and parse all CSS before showing anything. Smaller CSS = faster First Contentful Paint (FCP).

### 2. Lower Bandwidth Costs

A 100KB CSS file minifies to ~35KB. For a site with 100K monthly visitors, that's 6.5GB less bandwidth per month.

### 3. Better Core Web Vitals

Minification directly improves:
- **FCP** (First Contentful Paint) — less CSS to download
- **LCP** (Largest Contentful Paint) — styles arrive sooner
- **TBT** (Total Blocking Time) — CSSOM builds faster

## What Minification Removes

| Element | Removed? | Example |
|---------|----------|---------|
| Whitespace | Yes | Spaces, tabs, newlines |
| Comments | Yes | \`/* comment */\` |
| Last semicolon | Yes | \`color: red;\` → \`color: red\` |
| Optional units | Yes | \`0px\` → \`0\` |
| Quotes where safe | Yes | \`font-family: "Inter"\` → \`font-family:Inter\` |
| Unnecessary decimals | Yes | \`0.5rem\` → \`.5rem\` |
| Hex shorthand | Yes | \`#ffffff\` → \`#fff\` |

## Minification vs Compression

These are not the same thing:

| | Minification | Compression (Gzip/Brotli) |
|---|---|---|
| What it does | Removes unnecessary characters | Encodes data with algorithms |
| Lossy? | No — identical output | No — fully reversible |
| Typical reduction | 50-70% | 70-85% |
| Works on | Source code | Any file type |
| Can they combine? | Yes! | Yes! |

**Best practice:** Minify your CSS AND serve it with Brotli compression. You get both savings.

## How to Minify CSS

### Using ToolboxPro

Visit our [CSS Minifier](/tools/css-minifier) and:

1. **Paste your CSS** in the input area
2. **Hit Minify** — see the result instantly
3. **Compare sizes** — before and after displayed side by side
4. **Copy or download** the minified output

### Using Build Tools

\`\`\`javascript
// Webpack with css-minimizer-webpack-plugin
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
};
\`\`\`

\`\`\`javascript
// Vite — minifies CSS in production by default
// No config needed. Just run: vite build
\`\`\`

\`\`\`bash
# Using csso CLI
npx csso styles.css styles.min.css

# Using clean-css CLI
npx cleancss -o styles.min.css styles.css
\`\`\`

## Advanced Techniques

### 1. Merge Duplicate Selectors

\`\`\`css
/* Before */
h1 { color: blue; }
h1 { font-size: 2rem; }

/* After */
h1 { color: blue; font-size: 2rem; }
\`\`\`

### 2. Remove Unused CSS

Tools like PurgeCSS analyze your HTML and remove selectors you never use. Combine with minification for maximum reduction.

### 3. Optimize Colors

\`\`\`css
/* Before */
color: #ffaa00;    /* 7 chars */
background: black; /* 5 chars */

/* After */
color: #fa0;       /* 4 chars */
background: #000;  /* 4 chars */
\`\`\`


### Try It Yourself

Minify your CSS files with our [CSS Minifier](/tools/css-minifier).

Generate CSS gradients with our [CSS Gradient Generator](/tools/css-gradient).

Create beautiful box shadows using our [CSS Shadow Generator](/tools/css-shadow).


## FAQ

**Does minification change how my CSS works?** Never. Minified CSS produces exactly the same visual result. It's 100% safe for production.

**Should I minify during development?** No — keep your source CSS well-commented and formatted. Only minify for production builds.

**What about source maps?** Use source maps in production so you can debug minified CSS. Most build tools generate them automatically.

**Can I unminify CSS?** Partially — you can add whitespace back, but comments and original structure are lost forever. Always keep your source files.

**Is CSS minification the same as HTML/JS minification?** Similar concept, but CSS has specific optimizations (color shortening, property merging) that HTML/JS minifiers don't do.`,
  },
  {
    slug: "jwt-decoder",
    title: "JWT Decoder: How to Decode and Inspect JSON Web Tokens",
    description: "Learn to decode JSON Web Tokens, inspect header and payload claims, verify signatures, and debug authentication issues with our free JWT decoder.",
    date: "2026-05-23",
    readTime: "5 min read",
    category: "Developer Tools",
    toolSlug: "jwt-decoder",
    content: `## What is a JWT?

A **JSON Web Token (JWT)** is a compact, URL-safe token format used for authentication and information exchange. It looks like this:

\`\`\`
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
\`\`\`

Three parts, separated by dots. Each part is Base64URL-encoded JSON.

## The Three Parts of a JWT

### 1. Header

Contains the algorithm and token type:

\`\`\`json
{
  "alg": "HS256",
  "typ": "JWT"
}
\`\`\`

### 2. Payload

Contains **claims** — statements about the user and additional metadata:

\`\`\`json
{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022,
  "exp": 1516242622,
  "iss": "https://auth.example.com",
  "aud": "https://api.example.com"
}
\`\`\`

### 3. Signature

A cryptographic hash that verifies the token hasn't been tampered with. Created by combining the header and payload with a secret key:

\`\`\`
HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  secret
)
\`\`\`

## Common JWT Claims

| Claim | Full Name | Purpose | Example |
|-------|-----------|---------|---------|
| \`sub\` | Subject | User identifier | \`"user_123"\` |
| \`iss\` | Issuer | Who issued the token | \`"https://auth.example.com"\` |
| \`aud\` | Audience | Intended recipient | \`"https://api.example.com"\` |
| \`exp\` | Expiration | When it expires (Unix timestamp) | \`1716451200\` |
| \`nbf\` | Not Before | When it becomes valid | \`1716364800\` |
| \`iat\` | Issued At | When it was issued | \`1716278400\` |
| \`jti\` | JWT ID | Unique identifier (prevents replay) | \`"abc123"\` |

## How to Decode a JWT

### Using ToolboxPro

Visit our [JWT Decoder](/tools/jwt-decoder) and:

1. **Paste your JWT** into the input field
2. **Instantly see** the decoded header and payload as formatted JSON
3. **Check expiration** — the tool shows if the token is still valid
4. **Verify the signature** — enter your secret to confirm authenticity

### Manual Decoding

JWTs are NOT encrypted — they're encoded. Anyone can read them:

\`\`\`javascript
function decodeJWT(token) {
  const parts = token.split('.');
  const header = JSON.parse(atob(parts[0]));
  const payload = JSON.parse(atob(parts[1]));
  return { header, payload };
}

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.";
const decoded = decodeJWT(token);
console.log(decoded);
\`\`\`

## Common JWT Vulnerabilities

### 1. "none" Algorithm Attack

Some JWT libraries accept tokens with \`"alg": "none"\`, meaning no signature is required. Attackers can modify the payload and set the algorithm to "none".

**Fix:** Always reject tokens with no algorithm or algorithm "none".

### 2. Algorithm Confusion (RS256 vs HS256)

If your server expects RS256 (asymmetric) but accepts HS256 (symmetric), an attacker can use the public key as the HMAC secret to forge tokens.

**Fix:** Explicitly validate the algorithm against an allowlist.

### 3. Weak Secret Key

A weak HMAC secret can be brute-forced offline. If the secret is leaked, anyone can forge valid tokens.

**Fix:** Use a long, random secret (at least 256 bits for HS256).

### 4. Token Not Expired

Tokens with extremely long expiration (years) or no \`exp\` claim at all are risky. A leaked token works forever.

**Fix:** Short expiration times (15-30 minutes for access tokens, days for refresh tokens).

## JWT Best Practices

\`\`\`javascript
// Store JWTs securely
// ❌ localStorage — vulnerable to XSS
// ❌ sessionStorage — lost on tab close
// ✅ HttpOnly Secure SameSite cookies — best for SPAs
// ✅ In-memory variable with refresh token in cookie

// Validate on every request
function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, SECRET, {
      algorithms: ['HS256'],
      issuer: 'https://auth.example.com',
      audience: 'https://api.example.com',
      maxAge: '15m'
    });
    return decoded;
  } catch (err) {
    // Token is invalid or expired
    return null;
  }
}
\`\`\`


### Try It Yourself

Decode JWT tokens instantly with our [JWT Decoder](/tools/jwt-decoder).

Generate new JWT tokens using our [JWT Generator](/tools/jwt-generator).


## FAQ

**Is JWT secure?** JWT is secure when implemented correctly. The token itself can be read by anyone (it's base64-encoded, not encrypted). The security comes from the signature — without the secret key, nobody can forge a valid token.

**Should I store sensitive data in a JWT?** No. JWTs are encoded, not encrypted. Anyone with the token can decode the payload. Store only non-sensitive identifiers (user ID, role, permissions).

**What's the difference between JWT and JWS?** JWT is the standard. JWS (JSON Web Signature) is the signed variant. Most people use "JWT" to mean "signed JWT" (JWS).

**How do I refresh a JWT?** Use a two-token system: a short-lived access token (15 min) and a long-lived refresh token (7 days) stored securely. When the access token expires, use the refresh token to get a new one.

**Does our tool store JWTs?** No. Your token is decoded entirely in your browser. It never reaches our servers.`,
  },
  {
    slug: "html-to-jsx",
    title: "HTML to JSX Converter: Migrating from HTML to React Components",
    description: "Convert plain HTML to JSX instantly. Learn the key differences between HTML and JSX, common migration pitfalls, and how to convert entire pages to React components.",
    date: "2026-05-23",
    readTime: "6 min read",
    category: "Developer Tools",
    toolSlug: "html-to-jsx",
    content: `## HTML vs JSX: What's the Difference?

JSX (JavaScript XML) looks like HTML but has important differences. If you're migrating a static site to React, you'll encounter these immediately:

### 1. className Instead of class

\`\`\`html
<!-- HTML -->
<div class="container">Hello</div>
\`\`\`

\`\`\`jsx
{/* JSX */}
<div className="container">Hello</div>
\`\`\`

\`class\` is a reserved word in JavaScript, so React uses \`className\`.

### 2. Self-Closing Tags Require a Slash

\`\`\`html
<!-- HTML - valid without slash -->
<img src="photo.jpg" alt="Photo">
<input type="text">
<br>
\`\`\`

\`\`\`jsx
{/* JSX - must self-close */}
<img src="photo.jpg" alt="Photo" />
<input type="text" />
<br />
\`\`\`

### 3. CamelCase Attributes

\`\`\`html
<!-- HTML -->
<button onclick="handleClick()">Click</button>
<input maxlength="10" tabindex="1">
<video autoplay controls>
\`\`\`

\`\`\`jsx
{/* JSX */}
<button onClick={handleClick}>Click</button>
<input maxLength={10} tabIndex={1} />
<video autoPlay controls />
\`\`\`

### 4. Attribute Expressions Use Curly Braces

\`\`\`html
<!-- HTML - static strings -->
<div style="color: red; font-size: 16px;">
<img src="logo.png" width="200">
\`\`\`

\`\`\`jsx
{/* JSX - JavaScript expressions in braces */}
<div style={{ color: 'red', fontSize: 16 }}>
<img src={logoUrl} width={200} />
\`\`\`

Notice the double braces on \`style\` — the outer braces are for JSX expressions, the inner braces create a JavaScript object.

## How to Convert HTML to JSX

### Using ToolboxPro

Visit our [HTML to JSX Converter](/tools/html-to-jsx) and:

1. **Paste your HTML** in the input area
2. **Click Convert** — see JSX output instantly
3. **Copy the result** for use in your React component

### Step-by-Step Manual Conversion

Let's convert a full card component:

\`\`\`html
<!-- Original HTML -->
<div class="card" id="card-1">
  <img src="https://example.com/img.jpg" class="card-image" alt="Card image">
  <div class="card-body">
    <h2>Card Title</h2>
    <p>This is a description of the card content.</p>
    <a href="/details" class="btn" onclick="navigate()">Learn More</a>
  </div>
</div>
\`\`\`

\`\`\`jsx
// Converted JSX component
function Card({ imageUrl, title, description }) {
  return (
    <div className="card" id="card-1">
      <img src={imageUrl} className="card-image" alt="Card image" />
      <div className="card-body">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href="/details" className="btn" onClick={() => navigate()}>
          Learn More
        </a>
      </div>
    </div>
  );
}
\`\`\`

## Common Migration Patterns

### Inline Styles

\`\`\`jsx
// HTML: <div style="background-color: #f0f0f0; padding: 20px;">
// JSX:
<div style={{
  backgroundColor: '#f0f0f0',
  padding: 20,
}}>
\`\`\`

Properties are camelCase. Values are strings for CSS text, numbers for pixel values (unless you want a unit like \`'20px'\`).

### Conditional Classes

\`\`\`jsx
// HTML: <div class="card active">
// JSX with condition:
<div className={\`card \${isActive ? 'active' : ''}\`}>
// Or use: classnames library
<div className={cx('card', { active: isActive })}>
\`\`\`

### Event Handlers

\`\`\`jsx
// HTML: <button onclick="submitForm()">
// JSX:
<button onClick={submitForm}> {/* Pass function reference */}
<button onClick={() => submitForm()}> {/* Or inline arrow */}

// HTML: <form onsubmit="return validate()">
// JSX:
<form onSubmit={(e) => {
  e.preventDefault();
  validate();
}}>
\`\`\`

### For and Label

\`\`\`html
<!-- HTML -->
<label for="email">Email:</label>
<input type="email" id="email" name="email">
\`\`\`

\`\`\`jsx
{/* JSX — htmlFor instead of for */}
<label htmlFor="email">Email:</label>
<input type="email" id="email" name="email" />
\`\`\`

## Converting an Entire Page

When migrating a full HTML page to React:

1. **Split into components** — header, footer, sidebar, main content
2. **Convert each HTML section** using our [HTML to JSX Converter](/tools/html-to-jsx)
3. **Add props** — replace static content with dynamic data
4. **Add state management** — replace inline onclick handlers with proper React state

\`\`\`jsx
function Page({ user, posts }) {
  return (
    <div className="page">
      <Header user={user} />
      <main className="main-content">
        <Sidebar categories={posts.categories} />
        <PostList posts={posts.items} />
      </main>
      <Footer />
    </div>
  );
}
\`\`\`


### Try It Yourself

Convert HTML to JSX with our [HTML to JSX Converter](/tools/html-to-jsx).

Preview HTML rendering with our [HTML Preview](/tools/html-preview) tool.

Use our [Markdown to HTML](/tools/markdown-to-html) converter for markdown content.


## FAQ

**Can I use HTML directly in .jsx files?** No — JSX files must follow JSX syntax rules. Use our converter to transform HTML first.

**What about inline event handlers like onclick="alert()"?** These become \`onClick={() => alert()}\` in JSX. The value must be a function expression, not a string.

**Does JSX support all HTML attributes?** Most, but with renamed versions: \`class\` → \`className\`, \`for\` → \`htmlFor\`, \`tabindex\` → \`tabIndex\`, \`autofocus\` → \`autoFocus\`.

**Can I use SVG in JSX?** Yes, but SVG attributes also need camelCase: \`stroke-width\` → \`strokeWidth\`, \`clip-path\` → \`clipPath\`.

**What about dangerouslySetInnerHTML?** Use it sparingly for raw HTML strings. It bypasses React's XSS protection. Our converter warns you when it encounters inline HTML that needs this treatment.

### Try It Yourself

Compare your own HTML files using our [HTML to JSX Converter](/tools/html-to-jsx). You can also preview HTML rendering with our [HTML Preview](/tools/html-preview) tool or convert Markdown content using our [Markdown to HTML](/tools/markdown-to-html) converter.`,
  },
  {
    slug: "case-converter",
    title: "Text Case Converter: Upper, Lower, Title, CamelCase and More",
    description: "Convert text between uppercase, lowercase, title case, camelCase, snake_case, kebab-case, and more. A complete guide to text case formats in programming.",
    date: "2026-05-23",
    readTime: "5 min read",
    category: "Developer Tools",
    toolSlug: "case-converter",
    content: `## Why Text Case Matters

Every programming language and framework has conventions for naming variables, files, and functions. Using the wrong case can break your code or confuse collaborators.

### The Most Common Cases

| Case | Example | Where It's Used |
|------|---------|-----------------|
| **camelCase** | \`myVariableName\` | JavaScript, Java, TypeScript variables |
| **PascalCase** | \`MyComponentName\` | React components, C# classes, TypeScript types |
| **snake_case** | \`my_variable_name\` | Python, Ruby, Rust variables |
| **SCREAMING_SNAKE_CASE** | \`MAX_RETRY_COUNT\` | Constants, environment variables |
| **kebab-case** | \`my-component-name\` | HTML files, CSS classes, npm packages |
| **Train-Case** | \`My-Component-Name\` | HTTP headers (e.g., \`Content-Type\`) |
| **dot.case** | \`my.component.name\` | Java package names, file extensions |

## How to Convert Between Cases

### Using ToolboxPro

Visit our [Case Converter](/tools/case-converter) and:

1. **Type or paste your text** in the input
2. **See all cases simultaneously** — live preview as you type
3. **Click any result** to copy it to your clipboard
4. **Works with multi-word phrases** — just type naturally with spaces

### JavaScript Manual Conversion

\`\`\`javascript
// camelCase
"hello world".replace(/(?:^|\s+)(\\w)/g, (_, c) => c.toUpperCase())
  .replace(/\\s+/g, '')
  .replace(/^(.)/, c => c.toLowerCase());
// Result: "helloWorld"

// PascalCase (same as camelCase but first letter uppercase)
"hello world".replace(/(?:^|\\s+)(\\w)/g, (_, c) => c.toUpperCase())
  .replace(/\\s+/g, '');
// Result: "HelloWorld"

// snake_case
"hello world".toLowerCase().replace(/\\s+/g, '_');
// Result: "hello_world"

// kebab-case
"hello world".toLowerCase().replace(/\\s+/g, '-');
// Result: "hello-world"

// SCREAMING_SNAKE_CASE
"hello world".toUpperCase().replace(/\\s+/g, '_');
// Result: "HELLO_WORLD"

// Title Case
"hello world".replace(/\\w\\S*/g, w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
// Result: "Hello World"
\`\`\`

## Case Conventions by Language

### JavaScript / TypeScript

\`\`\`typescript
// camelCase — variables and functions
const userName = "Alice";
function fetchUserData() {}

// PascalCase — classes and components
class UserService {}
function UserCard() {}

// SCREAMING_SNAKE_CASE — constants
const MAX_FILE_SIZE = 10 * 1024 * 1024;

// kebab-case — file names
// user-profile.tsx, api-utils.ts
\`\`\`

### Python

\`\`\`python
# snake_case — everything except classes
user_name = "Alice"
def fetch_user_data():

# PascalCase — classes only
class UserService:

# SCREAMING_SNAKE_CASE — constants
MAX_FILE_SIZE = 10 * 1024 * 1024
\`\`\`

### CSS / HTML

\`\`\`css
/* kebab-case — CSS classes and IDs */
.user-profile-card {
  background-color: #fff;
  font-family: "Inter", sans-serif;
}

/* camelCase — custom properties (modern CSS) */
:root {
  --primaryColor: #3498db;
  --borderRadius: 8px;
}
\`\`\`

## Special Cases

### Acronyms

There's debate about how to handle acronyms in camelCase:

\`\`\`
// Option A: All caps
parseJSON, HTMLParser, fetchURL

// Option B: Camel-cased
parseJson, HtmlParser, fetchUrl

// Both are used. Pick one and be consistent.
// The most common convention:
// JavaScript: camelCase acronyms (parseJson)
// C#: PascalCase acronyms (ParseJSON)
\`\`\`

### Numbers in Identifiers

\`\`\`
// Variables can contain numbers but not start with them
user2, item3_name   // ✅ valid
2user, 3rd_item     // ❌ invalid in most languages
\`\`\`

### Reserved Words

\`\`\`javascript
// Can't use reserved words as variable names
// ❌ let class = "math";
// ✅ let className = "math";
// ❌ let default = "value";
// ✅ let defaultValue = "value";
\`\`\`

## Common Conversion Mistakes

### 1. Losing Information

\`\`\`
// Converting to lower case loses title case info
"McDonald" → lowercase: "mcdonald" → title case: "Mcdonald" ❌

// Our tool handles edge cases like this with special rules
\`\`\`

### 2. Double Converting

\`\`\`
// Already camelCase, converting to snake_case then back
"myVariable" → snake_case: "my_variable" → camelCase: "myVariable" ✅

// But watch out:
"myVariable" → lower case: "myvariable" → camelCase: "myvariable" ❌
\`\`\`

### 3. Locale Issues

\`\`\`
// Turkish 'i' and 'I' behave differently
// 'i'.toUpperCase() in Turkish locale → 'İ'
// Our tool uses locale-independent conversion
\`\`\`


### Try It Yourself

Convert text between cases with our [Text Case Converter](/tools/case-converter).

Our [Text Sorter](/tools/text-sorter) and [Text Deduplicator](/tools/text-deduplicator) help organize text.


## FAQ

**What's the difference between camelCase and PascalCase?** PascalCase capitalizes the first letter too: \`CamelCase\` vs \`camelCase\`. Use PascalCase for classes and React components, camelCase for variables and functions.

**Which case should I use for database column names?** Most databases use snake_case (\`user_name\`, \`created_at\`). PostgreSQL convention is snake_case. Some teams use camelCase — be consistent.

**Can I convert a whole file?** Our tool handles bulk text. Copy your file contents, paste, and all cases appear instantly. For programming files, consider language-specific formatters.

**What about CONSTANT_CASE vs UPPER_CASE?** They're the same thing — screaming snake case. Both refer to all-caps with underscores between words.

**Does case matter in URLs?** Most web servers treat URLs as case-sensitive. Use kebab-case (all lowercase, hyphens) for URL paths — it's the recommended convention for SEO and readability.

**What case do JSON keys use?** JSON has no official convention, but camelCase is most common in JavaScript ecosystems and snake_case in Python ecosystems. Our [JSON Formatter](/tools/json-formatter) can help standardize your JSON keys.`,
  },
  {
    slug: "text-diff-checker",
    title: "Text Diff Checker: How to Compare Two Texts Side by Side",
    description: "Learn how to compare two texts, spot differences instantly, and merge changes using a free online diff checker tool.",
    date: "2026-05-23",
    readTime: "5 min read",
    category: "Text Tools",
    toolSlug: "text-diff-checker",
    content: `## What is a Text Diff Checker?

A text diff checker (short for "difference checker") compares two blocks of text and highlights what's different between them. Whether you're reviewing code changes, comparing document versions, or checking for plagiarism, a diff tool shows you exactly what changed — down to the individual character.

Diff tools are a staple of version control systems like Git, but standalone diff checkers are invaluable when you need a quick comparison without setting up a repository.

## Why Use a Diff Checker?

- **Code reviews** — compare old vs. new versions of a script before deployment
- **Document revisions** — see exactly what your editor changed in that contract
- **Plagiarism detection** — quickly spot copied content between submissions
- **Configuration files** — catch accidental changes in config backups
- **Data migration** — verify source and target data match after a transfer

## How Diff Checking Works

### Line-by-Line Diff

The most common mode. Each line is compared, and the tool shows:

- **Green** (added) — lines present in the new text but not in the old
- **Red** (removed) — lines present in the old text but not in the new
- **White** (unchanged) — identical lines in both versions

### Character-Level Diff

For detailed editing, character diff shows changes *within* a line. If you changed "colour" to "color", a line diff shows the whole line changed, but a character diff highlights only the "u" as removed and the "r" as added.

### Word-Level Diff

A middle ground between line and character. Adds and removals are shown per word rather than per character — ideal for prose and documentation.

## How to Use a Diff Checker

### Step 1: Prepare Your Texts

Copy the original text into the left panel and the modified text into the right panel. The order matters — the tool shows what changed *from* the left *to* the right.

### Step 2: Compare Instantly

Most diff tools update in real-time as you type or paste. You don't need to click any buttons — the highlights appear immediately.

### Step 3: Review the Output

Scan through the highlighted differences:

| Color | Meaning | What to Check |
|-------|---------|---------------|
| Green | Added lines | Verify new content is correct |
| Red | Removed lines | Confirm deletions were intentional |
| Yellow highlight | Changed within a line | Double-check modified words/chars |

### Step 4: Copy or Merge

Once you're satisfied, you can:
- Copy the result to clipboard
- Download the diff report
- Apply the changes manually

## Practical Examples

### Example 1: Document Revision

**Original:**
\`\`\`
The quick brown fox jumps over the lazy dog.
\`\`\`

**Revised:**
\`\`\`
The quick brown fox leaps over the lazy cat.
\`\`\`

**Diff result:**
- Line 1: "jumps" → "leaps" (word-level change)
- Line 1: "dog" → "cat" (word-level change)

### Example 2: Code Change

**Before:**
\`\`\`javascript
function greet(name) {
  return "Hello, " + name;
}
\`\`\`

**After:**
\`\`\`javascript
function greet(name, time) {
  return \`Good \${time}, \${name}\`;
}
\`\`\`

**Diff result:**
- Added parameter "time" to function signature
- Changed return string from concatenation to template literal
- Both lines changed in their entirety

## Diff Algorithms Explained

Most diff tools (including ours) use the **Longest Common Subsequence (LCS)** algorithm. It finds the longest sequence of characters that appears in both texts in the same order, then marks everything else as a change.

Modern implementations also use **Myers' algorithm**, which is optimized for code diffs and produces more readable output by preferring contiguous blocks of changes over scattered single-line differences.

## Tips for Clean Diffs

1. **Normalize whitespace** — trailing spaces and inconsistent indentation create false positives
2. **Trim blank lines** — extra blank lines at the start or end show as additions/removals
3. **Use consistent line endings** — Windows (CRLF) vs. Unix (LF) differences are invisible but show as full-line changes
4. **Sort your inputs** — for unordered lists, sorting both sides before comparing reduces noise


### Try It Yourself

Compare two texts side by side with our [Text Diff Checker](/tools/text-diff-checker). Our [JSON Diff](/tools/json-diff) tool compares JSON structures specifically, and [Case Converter](/tools/case-converter) helps normalize text before comparing.

## FAQ

**Is the comparison case-sensitive?** Yes, by default. Most diff tools have a "Case insensitive" toggle for when you only care about content, not casing.

**Can I compare very large files?** Yes. Our diff checker handles files up to 1MB comfortably. For larger files, performance depends on your browser's memory.

**Does it work with code vs. plain text?** It works with any text. Programming languages benefit from the line-by-line view, while prose is better with the word-level view.

**Are my texts uploaded to a server?** No. Everything runs in your browser using JavaScript. Your data never leaves your device.

**What's the difference between unified diff and side-by-side?** Unified diff shows changes in a single column with context lines. Side-by-side (which our tool uses) shows both versions simultaneously — easier to read for most use cases.`},
  {
    slug: "lorem-ipsum-generator",
    title: "Lorem Ipsum Generator: Free Dummy Text for Design Mockups",
    description: "Generate placeholder text for your design mockups, wireframes, and layout tests. Customize paragraphs, words, and format on the fly.",
    date: "2026-05-23",
    readTime: "4 min read",
    category: "Text Tools",
    toolSlug: "lorem-ipsum-generator",
    content: `## What is Lorem Ipsum?

Lorem Ipsum is dummy text used by designers, developers, and typesetters to fill space in layouts before real content is ready. The classic passage has been the industry's standard dummy text since the 1500s, when an unknown printer scrambled a Latin passage to create a type specimen book.

The most common variant starts with:

> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

## Why Use Placeholder Text?

- **Focus on layout** — real text distracts from visual design decisions
- **Show text density** — see how your design handles varying content lengths
- **Client presentations** — placeholder text keeps attention on structure, not wording
- **Responsive testing** — test how text wraps at different screen sizes
- **Print mockups** — fill brochures, flyers, and posters with realistic-looking text

## Features of a Good Lorem Ipsum Generator

### 1. Customizable Paragraph Count

Sometimes you need one paragraph for a tooltip preview. Sometimes you need 20 for a landing page mockup. A good generator lets you choose.

### 2. Word Count Control

For precise layout testing, generate exactly 50, 100, or 500 words. This is essential for:
- Testing text truncation at specific word limits
- Filling form fields with realistic input lengths
- Creating consistent test data for development environments

### 3. Starting with "Lorem Ipsum"

Some use cases — especially client-facing mockups — require the classic "Lorem ipsum dolor sit amet..." opening. Others just need any Latin text and don't care about the first line. A good generator gives you the choice.

### 4. HTML Output

For web developers, generating lorem ipsum wrapped in \`<p>\` tags saves time during prototyping:

\`\`\`html
<p>Lorem ipsum dolor sit amet...</p>
<p>Sed do eiusmod tempor...</p>
\`\`\`

### 5. Alternative Variants

While classic lorem ipsum is Latin, you might sometimes want:

- **Cicero** — the original 45 BC text by Roman statesman Cicero
- **Hacker ipsum** — tech-themed placeholder text ("sudo apt-get install dolor sit amet")
- **Corporate ipsum** — business jargon placeholder ("Leverage agile frameworks to provide a robust synopsis")
- **Pirate ipsum** — fun pirate-themed text ("Prow scuttle parrel provost Sail ho")

## How to Generate Lorem Ipsum

### Using ToolboxPro

1. Visit our [Lorem Ipsum Generator](/tools/lorem-ipsum-generator)
2. Choose your output mode: Paragraphs, Words, or Bytes
3. Set the quantity (e.g., 5 paragraphs or 100 words)
4. Toggle whether to start with "Lorem ipsum dolor sit amet"
5. Choose plain text or HTML format
6. Click **Generate** — your text appears instantly
7. Copy with one click

### Manual Generation (JavaScript)

\`\`\`javascript
const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit...";
function generateParagraphs(count) {
  return Array(count).fill(loremIpsum).join('\\n\\n');
}
\`\`\`

## Best Practices for Using Dummy Text

1. **Don't rely on it for user testing** — real users need real content to give accurate feedback
2. **Replace with real text before launch** — search engines index your content; lorem ipsum harms SEO
3. **Match paragraph length to your use case** — blog posts need 5-10 paragraphs; tooltips need 1
4. **Use HTML format for web prototypes** — saves time converting from plain text
5. **Consider readability testing** — lorem ipsum doesn't test legibility; use real text for that

## The History of Lorem Ipsum

The passage comes from sections 1.10.32 and 1.10.33 of Cicero's *De Finibus Bonorum et Malorum* (On the Ends of Good and Evil), written in 45 BC. The exact words "lorem ipsum" are a corrupted version of "dolorem ipsum" (pain itself).

It gained popularity in the 1960s with the release of Letraset sheets containing lorem ipsum passages, and later with desktop publishing software like Aldus PageMaker.

## FAQ

**Is lorem ipsum random?** No. It's a scrambled version of a real Latin text. True random text wouldn't look like natural language.

**Can I use lorem ipsum for commercial projects?** Yes. It's a public domain text from antiquity.

**Why is it called "greeked" text?** In design terminology, using placeholder text is called "greeking" — regardless of whether the text is actually Greek or Latin.

**Does the length of generated text vary?** Most generators produce consistent-length paragraphs (~50-100 words each). For precise control, use word-count mode.

**Is there a privacy concern?** No. Generation happens entirely in your browser. No text is sent to any server.`},
  {
    slug: "text-to-slug",
    title: "URL Slug Generator: How to Convert Text to Clean SEO Slugs",
    description: "Learn how to convert any text into a URL-friendly slug. Perfect for blog posts, product pages, and SEO-friendly URLs.",
    date: "2026-05-23",
    readTime: "5 min read",
    category: "Text Tools",
    toolSlug: "text-to-slug",
    content: `## What is a URL Slug?

A URL slug is the part of a URL that identifies a specific page in a human-readable way. For example, in the URL:

\`\`\`
https://example.com/blog/url-slug-generator-guide
\`\`\`

The slug is \`url-slug-generator-guide\`. It's the text that comes after the domain and category path.

Slugs are critical for:
- **SEO** — search engines use slug text to understand page content
- **Readability** — users can tell what a page is about before clicking
- **Sharing** — clean slugs look professional when shared in messages or on social media
- **Accessibility** — screen readers benefit from descriptive URL text

## Why Text-to-Slug Conversion is Necessary

Raw text — especially titles — contains characters that are invalid or problematic in URLs:

| Character | Problem | Slug Replacement |
|-----------|---------|------------------|
| Space | Invalid in URLs | Hyphen (-) |
| Uppercase letters | Technically valid but inconsistent | Lowercase |
| Quotation marks | Invalid | Removed |
| Apostrophes | Invalid | Removed or kept |
| Commas | Reserved character | Removed |
| Parentheses | Can break link parsing | Removed |
| Colons, semicolons | Reserved characters | Removed |
| Accented characters | Compatibility issues | ASCII equivalent (e.g., é → e) |
| Special chars (!, @, #, $, %, ^, &, *) | Reserved or unsafe | Removed |
| Slashes (/, \\\\) | Path separators | Removed |
| Multiple hyphens | Creates ugly URLs | Collapsed to single hyphen |
| Leading/trailing hyphens | Looks broken | Trimmed |

## How a Slug Generator Works

### Step 1: Normalize

Convert the text to lowercase and strip leading/trailing whitespace.

### Step 2: Transliterate

Convert accented and non-ASCII characters to their closest ASCII equivalents:
- "café" → "cafe"
- "über" → "uber"
- "façade" → "facade"

### Step 3: Remove Invalid Characters

Strip everything except letters, numbers, spaces, and hyphens.

### Step 4: Replace Spaces with Hyphens

Replace all spaces (and allowed separators) with a single hyphen.

### Step 5: Collapse and Trim

Replace multiple consecutive hyphens with a single one, then trim hyphens from both ends.

## How to Use Our Text-to-Slug Tool

1. Visit our [Slug Generator](/tools/text-to-slug)
2. Type or paste your text (e.g., "How to Bake a Cake in 10 Minutes!")
3. See the slug generated in real-time: "how-to-bake-a-cake-in-10-minutes"
4. Click **Copy** to copy the slug to your clipboard

## Examples

| Original Text | Generated Slug |
|---------------|----------------|
| My First Blog Post! | my-first-blog-post |
| 10 Ways to Save Money 💰 | 10-ways-to-save-money |
| Cómo Hacer Paella Valenciana | como-hacer-paella-valenciana |
| Tom & Jerry: The Movie (2024) | tom-jerry-the-movie-2024 |
| What's New in React 19? | whats-new-in-react-19 |
| 100% Organic Cotton — Buy Now! | 100-organic-cotton-buy-now |
| Café & Bakery | cafe-bakery |
| _Important — DO NOT DELETE_ | important-do-not-delete |

## SEO Best Practices for Slugs

### Do ✅

- **Keep it short** — 3-5 words is ideal (Google truncates long slugs in SERPs)
- **Include your primary keyword** — the slug is a ranking factor
- **Use hyphens** — Google recommends hyphens over underscores
- **Make it readable** — a user should understand the page topic from the slug alone
- **Be consistent** — use the same slug format across your entire site

### Don't ❌

- **Don't use stop words** — remove "a", "an", "the", "and" when possible
- **Don't include dates** — unless your content is time-sensitive, dates date your URLs
- **Don't change slugs after publishing** — it breaks existing links and loses SEO value
- **Don't use IDs only** — \`/p/12345\` tells search engines nothing about your content
- **Don't include subcategories unnecessarily** — \`/products/shoes/running/nike/air-zoom\` is too deep

## Slug vs. URL Path: What's the Difference?

The slug is the final segment of the URL path. The full path might include categories or date hierarchies:

\`\`\`
example.com/blog/2026/05/text-to-slug-guide
│                │     │   │              │
│                │     │   └── Slug       │
│                │     └── Date segments  │
│                └── Category segment     │
└── Domain                                 │
                                          │
              This whole thing is the URL path
\`\`\`

Most modern SEO strategies recommend flat URL structures with minimal path segments, putting the focus on the slug itself.

## Programmatic Slug Generation

\`\`\`javascript
function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\\w\\s-]/g, '')     // Remove non-word chars (except spaces and hyphens)
    .replace(/[\\s_]+/g, '-')       // Replace spaces and underscores with hyphens
    .replace(/-+/g, '-')            // Collapse multiple hyphens
    .replace(/^-+|-+\$/g, '');      // Trim hyphens from start and end
}
\`\`\`

## FAQ

**Should I use hyphens or underscores in URLs?** Hyphens. Google treats hyphens as word separators but underscores as word joiners. \`my-file-name\` is read as "my file name" but \`my_file_name\` is read as "myfilename".

**How long should a slug be?** 30-60 characters is ideal. Google's search results typically show the first 60 characters of a URL.

**Do slugs affect SEO ranking?** Yes — the URL slug is a confirmed ranking factor. Including your target keyword in the slug gives a small but measurable SEO boost.

**Can I change a slug after publishing?** You can, but you should set up a 301 redirect from the old URL to the new one. Otherwise, any links to the old URL will break.

**Does casing matter in URLs?** While web servers typically treat URLs case-insensitively, lowercase slugs are the universal convention. Mixed-case URLs can cause duplicate content issues.`},
  {
    slug: "image-to-base64",
    title: "Image to Base64 Converter: Inline Images Without External Files",
    description: "Convert any image to a Base64 data URI for embedding directly in HTML, CSS, or JavaScript. No external image files needed.",
    date: "2026-05-23",
    readTime: "6 min read",
    category: "Image Tools",
    toolSlug: "image-to-base64",
    content: `## What is Image to Base64?

Base64 encoding converts binary image data into a text string composed of 64 printable characters (A-Z, a-z, 0-9, +, /). When you convert an image to Base64, you get a long string of text that represents the complete image file.

This string can be embedded directly in HTML, CSS, or JavaScript as a **data URI**:

\`\`\`html
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA..." alt="Inline image">
\`\`\`

The browser decodes the Base64 string and renders the image — no separate HTTP request needed.

## When to Use Inline Base64 Images

### ✅ Good Use Cases

- **Small icons and UI elements** — under 5KB, the overhead trade-off is worth it
- **Email signatures** — emails can't load external resources; Base64 images render reliably
- **SVG placeholders** — embed tiny preview images while larger images load
- **Single-file HTML pages** — offline documentation, demos, or prototypes
- **API responses** — return image data inline in JSON instead of requiring a separate fetch
- **Favicons** — embed favicon data directly in the HTML \`<head>\`
- **CSS sprites for small assets** — eliminate HTTP requests for tiny images

### ❌ Avoid For

- **Large photographs** — Base64 adds ~33% overhead; a 100KB JPG becomes 133KB of text
- **Images used on multiple pages** — external files cache better
- **CDN-hosted assets** — CDN delivery + caching beats inline embedding every time
- **Images above 10KB** — the HTTP request overhead argument weakens as image size grows

## The Math: Request Overhead vs. Encoding Overhead

The classic argument for Base64 is reducing HTTP requests. Here's the trade-off:

| Image Size | HTTP Overhead (approx.) | Base64 Overhead (33%) | Verdict |
|------------|------------------------|----------------------|---------|
| 1 KB | ~0.5 KB (headers + TLS) | ~0.3 KB | Base64 wins |
| 5 KB | ~0.5 KB | ~1.7 KB | Comparable |
| 10 KB | ~0.5 KB | ~3.3 KB | HTTP request may win |
| 50 KB | ~0.5 KB | ~16.5 KB | External file wins |
| 100 KB | ~0.5 KB | ~33 KB | External file wins heavily |

**Rule of thumb:** Under 5KB → Base64. Over 10KB → external file.

## How to Convert an Image to Base64

### Using ToolboxPro

1. Visit our [Image to Base64 Converter](/tools/image-to-base64)
2. Upload an image by clicking or dragging
3. The tool instantly generates the Base64 string
4. Choose your output format:
   - **Data URI** — ready to paste into \`src\` attributes: \`data:image/png;base64,...\`
   - **Raw Base64** — just the encoded string, no prefix
5. Copy the result with one click

### Supported Formats

| Format | MIME Type | Best For |
|--------|-----------|----------|
| PNG | image/png | Icons, logos, screenshots |
| JPG | image/jpeg | Photos, complex images |
| GIF | image/gif | Simple animations |
| WebP | image/webp | Modern web-optimized images |
| SVG | image/svg+xml | Vector graphics |
| BMP | image/bmp | Legacy compatibility |
| ICO | image/x-icon | Favicons |

## Using Base64 Images in Different Contexts

### In HTML

\`\`\`html
<img src="data:image/webp;base64,UklGRlA..." alt="Hero image placeholder">
\`\`\`

### In CSS

\`\`\`css
.background-image {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0...");
}
\`\`\`

### In JavaScript

\`\`\`javascript
const img = new Image();
img.src = "data:image/png;base64,iVBORw0KGgo...";
document.body.appendChild(img);
\`\`\`

### In Email HTML

Email clients block external images by default. Base64 images always render:

\`\`\`html
<img src="data:image/png;base64,iVBORw0KGgo..." alt="Logo" />
\`\`\`

## Performance Considerations

1. **Gzip compresses Base64 well** — while Base64 text is 33% larger than binary, gzip reduces that gap significantly (often to 3-5% overhead after compression)

2. **CSS background images aren't cached separately** — inline Base64 in CSS means the entire stylesheet must be re-downloaded on every visit unless the CSS file itself is cached

3. **HTML size impacts Time to First Byte (TTFB)** — large inline images increase the initial HTML payload, delaying when the browser can start parsing

4. **Mobile considerations** — limited memory devices may struggle decoding large Base64 strings

## FAQ

**Is Base64 compression?** No. Base64 is encoding, not compression. The encoded string is always larger than the original binary data by approximately 33%.

**Can I convert Base64 back to an image?** Yes. Our tool can decode Base64 strings back into downloadable image files. Paste the Base64 string and click **Download as image**.

**Is there a file size limit?** Our tool handles images up to ~50MB. However, for practical use, we recommend Base64 only for images under 10KB.

**Does Base64 work in all browsers?** Yes. Data URIs are supported in every modern browser, including Chrome, Firefox, Safari, and Edge. Support goes back to Internet Explorer 8.

**What's the difference between Base64 and Base64URL?** Base64URL uses \`-\` and \`_\` instead of \`+\` and \`/\` to be safe for URL query parameters. For \`data:\` URIs, standard Base64 is used.`},
  {
    slug: "image-filters",
    title: "Image Filters Online: Apply Grayscale, Sepia, Blur and More",
    description: "Transform your photos with instant image filters. Apply grayscale, sepia, blur, brightness, contrast, and many more effects online.",
    date: "2026-05-23",
    readTime: "7 min read",
    category: "Image Tools",
    toolSlug: "image-filters",
    content: `## What are Image Filters?

Image filters are algorithms that modify the pixels of an image to create a visual effect. From the classic black-and-white conversion to artistic blurs and color shifts, filters let you transform the mood and style of any photo without needing Photoshop or professional editing skills.

Filters work by manipulating pixel values — adjusting brightness, contrast, color channels, or applying convolution matrices that blend neighboring pixels.

## Common Image Filters Explained

### Grayscale

Converts the image to black and white by removing color information. Each pixel's RGB values are combined into a single luminance value:

\`\`\`
Gray = 0.299 × R + 0.587 × G + 0.114 × B
\`\`\`

These weights match human perception — we're most sensitive to green, least sensitive to blue.

**Use when:** Creating a classic look, reducing distractions from color, preparing images for printing on black-and-white media.

### Sepia

Gives the image a warm brownish tone reminiscent of 19th-century photographs. After converting to grayscale, each pixel is tinted with warm tones:

\`\`\`
Output R = Gray × 1.2
Output G = Gray × 0.93
Output B = Gray × 0.55
\`\`\`

**Use when:** Creating vintage, nostalgic, or historical-feeling images.

### Invert

Flips all colors to their opposites on the color wheel. Black becomes white, red becomes cyan, green becomes magenta.

\`\`\`
Output R = 255 - Input R
Output G = 255 - Input G
Output B = 255 - Input B
\`\`\`

**Use when:** Creating negative-image effects, artistic compositions, or accessibility-focused high-contrast views.

### Brightness

Adds or subtracts a constant value from all RGB channels:

\`\`\`
Output = Input + brightness_value
\`\`\`

Positive values make the image lighter; negative values make it darker. The result is clamped to 0-255.

**Use when:** Correcting underexposed or overexposed photos, matching lighting across a series of images.

### Contrast

Stretches or compresses the range of pixel values. High contrast makes darks darker and lights lighter; low contrast creates a flatter, muted look:

\`\`\`
Output = ((Input / 255 - 0.5) × contrast_factor + 0.5) × 255
\`\`\`

**Use when:** Making images pop (increase contrast) or creating soft, dreamy looks (decrease contrast).

### Blur

Averages each pixel with its neighbors to create a softening effect. The most common is **Gaussian blur**, which uses a weighted average where nearby pixels have more influence than distant ones:

\`\`\`
// A 3×3 Gaussian kernel
[1, 2, 1]
[2, 4, 2]
[1, 2, 1] × (1/16)
\`\`\`

**Use when:** Blurring backgrounds, censoring sensitive information, creating depth-of-field effects, or smoothing skin tones.

### Saturation

Controls the intensity of colors. At 0%, the image is grayscale. At 100%, colors are natural. At 200%, colors are intensely vivid (sometimes called "HDR effect").

**Use when:** Creating vibrant social media graphics (increase) or muted, professional looks (decrease).

### Hue Rotate

Shifts all colors around the color wheel by a given angle. Rotating by 180 degrees creates a complementary color scheme.

**Use when:** Quick color palette changes, creative effects, or correcting color casts.

## How to Apply Filters Online

### Using ToolboxPro

1. Visit our [Image Filters](/tools/image-filters) tool
2. Upload an image by clicking or drag-and-drop
3. Browse through available filters in the toolbar
4. Click any filter to apply it instantly
5. Adjust the intensity slider for fine control
6. See a live before/after preview
7. Download the filtered image as JPG, PNG, or WebP

### Available Filters

| Filter | What It Does | Best For |
|--------|-------------|----------|
| Grayscale | Removes all color | Classic B&W photography |
| Sepia | Warm brown tone | Vintage photos |
| Invert | Reverses all colors | Negative effect |
| Brightness | Adjusts lightness | Exposure correction |
| Contrast | Stretches tonal range | Making images pop |
| Blur | Softens details | Background blur |
| Sharpen | Enhances edges | Fixing slightly soft photos |
| Saturation | Adjusts color intensity | Vibrant or muted looks |
| Hue Rotate | Shifts all colors | Creative color changes |
| Opacity | Adjusts transparency | Overlay effects |

## Advanced: Stacking Filters

Real image editing rarely uses a single filter. Try combining them:

**Vintage Portrait Effect:**
1. Apply Sepia (intensity: 70%)
2. Lower Contrast (-20%)
3. Add slight Blur (radius: 1px)
4. Reduce Saturation (60%)

**Dramatic B&W:**
1. Apply Grayscale
2. Increase Contrast (+40%)
3. Increase Sharpen (strength: 2)
4. Vignette effect (if available)

**Dreamy Soft Look:**
1. Apply Blur (radius: 3px)
2. Reduce Contrast (-20%)
3. Increase Brightness (+15%)
4. Reduce Saturation (80%)

## The Canvas API Approach

If you're a developer, here's how to apply a grayscale filter using the HTML5 Canvas API:

\`\`\`javascript
function applyGrayscale(imageData) {
  const pixels = imageData.data;
  for (let i = 0; i < pixels.length; i += 4) {
    const gray = 0.299 * pixels[i] + 0.587 * pixels[i+1] + 0.114 * pixels[i+2];
    pixels[i] = gray;     // Red
    pixels[i+1] = gray;   // Green
    pixels[i+2] = gray;   // Blue
    // pixels[i+3] = alpha (unchanged)
  }
  return imageData;
}
\`\`\`

## FAQ

**Are image filters applied to the original file?** No. Filters are applied to a copy. The original image is never modified — you can always start over.

**Can I undo a filter?** Yes. Our tool has an undo/redo stack, and you can reset to the original image at any time.

**What's the maximum image size?** Our filter tool handles images up to 4096×4096 pixels comfortably. Larger images may be slower depending on your device.

**Do filters work on transparent PNGs?** Yes. Alpha channel (transparency) is preserved through all filter operations.

**Can I apply multiple filters at once?** Yes. Apply them one at a time and each builds on the previous result. The undo stack lets you step back through individual filter applications.

**Are my images uploaded to a server?** No. All filter processing runs in your browser using the Canvas API. Your images stay on your device.`},
  {
    slug: "barcode-generator",
    title: "Barcode Generator: How to Create CODE128, EAN13 & More Online",
    description: "Generate professional barcodes for products, inventory, ISBN, and logistics. Supports CODE128, EAN-13, UPC-A, QR codes, and more.",
    date: "2026-05-23",
    readTime: "7 min read",
    category: "Image Tools",
    toolSlug: "barcode-generator",
    content: `## What is a Barcode?

A barcode is a machine-readable representation of data. Traditional **1D barcodes** (linear) use parallel lines of varying widths and spacings. **2D barcodes** (like QR codes) use patterns of squares, dots, or other geometric shapes.

Barcodes are everywhere — product packaging, shipping labels, library books, hospital wristbands, loyalty cards, and tickets. Each type serves a specific industry and use case.

## Common Barcode Types

### CODE128

A high-density 1D barcode supporting all 128 ASCII characters. It's the most versatile linear barcode.

**Best for:** Logistics, shipping labels, inventory management, asset tracking
**Character set:** A-Z, a-z, 0-9, all punctuation, control characters
**Length:** Variable (up to ~40 characters for practical scanning)
**Checksum:** Required (automatic)

CODE128 has three subsets:
- **CODE128A** — uppercase letters, digits, control characters
- **CODE128B** — uppercase and lowercase letters, digits
- **CODE128C** — numeric data only (highest density, best for long number strings)

### EAN-13 (European Article Number)

The standard retail barcode used on virtually every consumer product worldwide (except North America, which uses UPC-A).

**Best for:** Retail products, grocery items, consumer goods
**Character set:** 13 digits (12 data + 1 check digit)
**Region:** International (except US/Canada)
**Usage:** Sold in stores, supermarket checkout

The first 2-3 digits are country codes (e.g., 690-699 for China, 400-440 for Germany, 50 for UK).

### UPC-A (Universal Product Code)

The North American retail standard. Similar to EAN-13 but with 12 digits.

**Best for:** Products sold in the US and Canada
**Character set:** 12 digits (11 data + 1 check digit)
**Region:** United States and Canada
**Compatibility:** EAN-13 scanners can read UPC-A by adding a leading zero

### EAN-8

A compressed version of EAN-13 with only 8 digits, used for small packages where a full EAN-13 won't fit.

**Best for:** Small items, cosmetics, confectionery
**Character set:** 8 digits (7 data + 1 check digit)

### CODE39

An older 1D standard that supports letters, numbers, and a few special characters. Less dense than CODE128 but widely supported.

**Best for:** Non-retail uses, government IDs, automotive industry
**Character set:** A-Z, 0-9, -, ., $, /, +, %, space
**Length:** Variable

### ITF-14 (Interleaved 2 of 5)

Used exclusively for outer cartons and shipping cases, not individual retail items.

**Best for:** Logistics, wholesale packaging, pallet labels
**Character set:** 14 digits
**Use case:** Cartons containing multiple retail units

### Data Matrix

A 2D barcode that stores data in a square or rectangular grid. Much smaller than a QR code for the same data.

**Best for:** Small items, electronics, medical devices
**Data capacity:** Up to 2,335 alphanumeric characters
**Size:** As small as 10×10 modules
**Error correction:** Reed-Solomon (up to 30% damage tolerance)

## How to Generate a Barcode

### Using ToolboxPro

1. Visit our [Barcode Generator](/tools/barcode-generator)
2. Choose your barcode type (CODE128, EAN-13, UPC-A, etc.)
3. Enter your data:
   - For EAN-13/UPC-A: enter 12 or 13 digits
   - For CODE128/CODE39: enter any text
   - For EAN-8: enter 7 digits
4. Customize appearance:
   - **Width** — barcode width in pixels
   - **Height** — barcode height in pixels
   - **Color** — bar color (default: black)
   - **Show text** — toggle human-readable text below the barcode
   - **Font size** — size of the text below
5. Click **Generate**
6. Download as PNG or SVG

### SVG vs PNG Output

| Format | Best For | Pros | Cons |
|--------|----------|------|------|
| PNG | Digital use, email | Universal support, exact rendering | Fixed resolution, larger files |
| SVG | Print, professional use | Infinite scaling, small files, editable | Requires vector-aware software |

For print production (labels, packaging), always use SVG. For digital use, PNG is fine.

## Barcode Checksums Explained

Most 1D barcodes include a **check digit** — a calculated value appended to the data that verifies the barcode was scanned correctly.

### EAN-13 Check Digit Calculation

\`\`\`
Data digits: 5 9 0 1 2 3 4 5 6 7 8 9
Step 1: Sum of odd positions × 1 = 5+0+2+4+6+8 = 25
Step 2: Sum of even positions × 3 = (9+1+3+5+7+9) × 3 = 34 × 3 = 102
Step 3: Total = 25 + 102 = 127
Step 4: Check digit = (10 - (127 mod 10)) mod 10 = (10 - 7) mod 10 = 3
Result: 5901234567893
\`\`\`

### UPC-A Check Digit

Same algorithm as EAN-13 but with 11 data digits instead of 12.

## Barcode Best Practices

### Size Requirements

| Standard | Minimum Width | Recommended Width | Height |
|----------|--------------|-------------------|--------|
| EAN-13 | 29.83 mm | 37.29 mm | 22.85 mm |
| UPC-A | 29.83 mm | 37.29 mm | 22.85 mm |
| CODE128 | Variable | 2" (50 mm) | 0.6" (15 mm) |

### Spacing (Quiet Zones)

Every barcode needs blank space on both sides — the **quiet zone**. For EAN/UPC, this is 11 times the narrow bar width (about 3 mm). Without proper quiet zones, scanners may fail to read the barcode.

### Color Contrast

Barcodes work best with dark bars on a light background. The scanner reads the contrast between spaces and bars:
- **Best:** Black bars on white background
- **Acceptable:** Dark blue, dark green, dark brown on light background
- **Avoid:** Red bars (red appears as white to red laser scanners), light-colored bars, dark backgrounds

### Printing Considerations

1. **Print at 300 DPI minimum** — lower resolutions blur the thin bars
2. **Use matte finishes** — glossy paper creates glare that interferes with scanning
3. **Test with multiple scanners** — a barcode readable by one scanner may fail on another
4. **Leave margins** — don't place other graphics or text next to the barcode
5. **Scale proportionally** — stretching or squashing a barcode changes bar widths and breaks scanning

## Generating Barcodes Programmatically

\`\`\`javascript
// Using the JsBarcode library
JsBarcode("#barcode", "Hello World!", {
  format: "CODE128",
  width: 2,
  height: 100,
  displayValue: true,
  background: "#ffffff",
  lineColor: "#000000"
});
\`\`\`

## FAQ

**Can I generate barcodes for commercial products?** Yes. The barcode generation itself is free. However, to sell products in retail stores, you need a registered GS1 Company Prefix and valid UPC/EAN numbers assigned to your products.

**What's the difference between a barcode and a QR code?** Barcodes (1D) store data linearly — typically numbers or short text. QR codes (2D) store much more data, including URLs, vCards, and WiFi credentials, in a square matrix.

**Can I print barcodes on regular paper?** Yes, but laser printers produce sharper barcodes than inkjet. For high-volume scanning, thermal transfer printers are the industry standard.

**Why does my barcode not scan?** Common causes: insufficient quiet zone, low contrast, printing at too low resolution, distortion from scaling, or check digit mismatch.

**What file format is best for professional barcode printing?** SVG. It's vector-based, so it scales to any size without quality loss, and professional printing software prefers vector formats.`,
  },

{
    slug: "image-to-pdf",
    title: "Image to PDF Converter: How to Turn JPG/PNG into PDF Documents",
    description: "Convert images to PDF documents in seconds. Free, private, and works in your browser — no uploads needed.",
    date: "2026-05-23",
    readTime: "5 min read",
    category: "PDF Tools",
    toolSlug: "image-to-pdf",
    content: `## Why Convert Images to PDF?

Sending a dozen photos as separate JPG files is messy. A single PDF is clean, professional, and easy to share. Whether you're:

- **Scanning documents** with your phone camera
- **Creating a photo album** for printing
- **Submitting forms** that require PDF format
- **Archiving receipts** and invoices

Turning images into a PDF keeps everything in one file, maintains page order, and reduces the chance of files getting lost.

## How Image to PDF Conversion Works

### Step 1: Prepare Your Images

You can convert almost any common image format:

- **JPG / JPEG** — photos, scanned documents
- **PNG** — screenshots, graphics with transparency
- **WebP** — modern web images
- **BMP** — bitmap images
- **GIF** — static images (animated GIFs will use the first frame)

### Step 2: Upload to ToolboxPro

Visit our [Image to PDF Converter](/tools/image-to-pdf). You can:

- Click the upload area to select files
- Drag and drop images from your file explorer
- Select multiple images at once (hold Ctrl/Cmd while selecting)

There's no file size limit for individual images, though very large files (100MB+) may take longer to process depending on your browser.

### Step 3: Arrange and Convert

Once uploaded, you'll see thumbnails of every image:

- **Drag to reorder** — arrange pages in any sequence
- **Remove unwanted images** — click the X on any thumbnail
- **Add more images** — continue uploading additional files

When you're satisfied, click **Convert to PDF**. The tool processes everything in your browser — no data is sent to any server.

### Step 4: Download

Your PDF downloads automatically. It will have one page per image, in the order you specified. Each image is embedded at full resolution.

## Advanced Options

### Page Size

Choose the output page size:

| Option | Description |
|--------|-------------|
| Auto (Fit) | Each page matches the image aspect ratio |
| A4 | Standard document size (210×297mm) |
| Letter | US standard (8.5×11 inches) |
| Custom | Set your own dimensions |

### Orientation

- **Portrait** — vertical layout, best for documents
- **Landscape** — horizontal layout, best for wide images

### Image Quality

Control the JPEG compression level for images embedded in the PDF:

- **High** (90-100%) — best quality, larger file size
- **Medium** (70-89%) — good balance
- **Low** (50-69%) — smaller file, some quality loss

## Tips for Best Results

### Scan Documents Properly

When scanning documents with your phone:

1. Place the document on a dark, flat surface
2. Ensure even lighting — avoid shadows
3. Hold the camera parallel to the document
4. Use a scanning app that crops automatically
5. Export as JPG or PNG before converting

### Optimize Image Size

Large camera photos (4000×3000px) create huge PDFs. Consider:

- **Resize to 2000px** on the longest side for screen viewing
- **Keep original resolution** for print-quality documents
- **Use JPEG at 80% quality** to balance size and quality

### Handle Mixed Content

You can mix different image types in one PDF:

- Add a JPG photo, then a PNG screenshot, then another JPG
- The tool handles each format independently
- Final PDF uses consistent page settings

## Privacy and Security

Your images never leave your device. The conversion uses:

- **Canvas API** to render images
- **jsPDF** library running in your browser
- **Zero server uploads** — all processing is local

This means:

- No data transmission over the network
- No copies stored on external servers
- No third-party access to your documents
- Safe for sensitive material like contracts, IDs, or medical records

## Common Use Cases

### Business

- Combine scanned contracts into a single PDF
- Create product catalogs from product photos
- Archive signed documents as PDF

### Education

- Submit homework as a single PDF file
- Create study materials from lecture slides
- Convert handwritten notes (photo) to PDF

### Personal

- Turn vacation photos into a PDF album
- Digitize old family photos
- Save important receipts as searchable PDFs

## FAQ

**Can I convert HEIC images (iPhone photos)?** HEIC is not natively supported in all browsers. Convert HEIC to JPG first, then use our tool.

**What happens to transparency in PNG files?** PNG transparency is replaced with a white background in the PDF. For images that need transparency, consider keeping them as PNG.

**Is there a limit on how many images I can convert?** No hard limit, but performance depends on your browser's memory. For 50+ high-resolution images, consider batch processing in smaller groups.

**Can I add text or annotations?** This tool converts images to PDF without editing. For annotations, edit the images first, then convert.

**Does the PDF retain EXIF data?** EXIF data from images is not preserved in the PDF output. The visual content is embedded at full resolution.`,
  },
{
    slug: "pdf-protector",
    title: "PDF Password Protector: How to Secure PDF Files with Encryption",
    description: "Add passwords and encryption to your PDF files. Protect sensitive documents with user and owner passwords for complete security.",
    date: "2026-05-23",
    readTime: "6 min read",
    category: "PDF Tools",
    toolSlug: "pdf-protector",
    content: `## Why Password-Protect a PDF?

You have a confidential report, a legal contract, or a client proposal. Email attachments can be intercepted. Cloud storage can be breached. Adding a password to your PDF ensures that only authorized people can open it.

PDF password protection offers two levels of security:

- **User password** — required to open and view the document
- **Owner password** — required to modify, print, or copy content

## How PDF Encryption Works

PDF encryption uses industry-standard algorithms:

| Algorithm | Key Length | Security Level |
|-----------|-----------|----------------|
| AES-128 | 128-bit | Strong — suitable for most documents |
| AES-256 | 256-bit | Very strong — government/enterprise grade |
| RC4 (legacy) | 128-bit | Deprecated — avoid for new documents |

ToolboxPro uses **AES-256 encryption** by default, the same standard used by banks and governments.

### What Encryption Protects

- **Document content** — text, images, and embedded files
- **Metadata** — title, author, subject
- **Annotations** — comments and markup
- **Form fields** — filled form data

### What Encryption Does NOT Protect

- **File size** — the PDF size is visible without a password
- **Page count** — number of pages may be visible
- **Thumbnails** — some PDF viewers show first-page previews

## How to Password-Protect a PDF

### Step 1: Upload Your PDF

Visit our [PDF Protector](/tools/pdf-protector) and upload your file. The tool accepts:

- Any standard PDF file
- Files up to ~50MB
- Scanned PDFs and born-digital PDFs
- Password-protected PDFs (if you know the existing password)

### Step 2: Set Your Passwords

#### User Password (Open Password)

This password is required to **open** the PDF. Choose:

- **Minimum 6 characters** — enforced for basic security
- **Recommended 12+ characters** — mix of upper, lower, digits, symbols
- **Avoid dictionary words** — brute-force attacks crack these quickly

#### Owner Password (Permissions Password)

This password controls what users can do with the document:

| Permission | When Restricted |
|------------|----------------|
| Printing | Prevent physical copies |
| Copying text/images | Prevent content extraction |
| Editing | Prevent modifications |
| Adding annotations | Prevent comments and markup |
| Form filling | Prevent form submission |

If restricted, the user still needs the owner password to enable these actions.

### Step 3: Choose Encryption Level

| Setting | Best For |
|---------|----------|
| AES-128 | General use, compatibility with older PDF readers |
| AES-256 | Maximum security, newer PDF readers (Adobe Acrobat 7+) |

### Step 4: Download Your Protected PDF

Click **Protect PDF**. The file processes in your browser and downloads automatically as a password-protected PDF.

## Strong Password Tips

### Do NOT Use

- Your name, company name, or project name
- Common words like "password", "admin", "123456"
- Birthdays, anniversaries, or phone numbers
- Simple patterns like "qwerty" or "abcdef"

### DO Use

- Passphrases: "BlueElephant$Dances@Midnight7!"
- Random combinations: "k8#mP$2vN!qR" 
- Password managers to generate and store them
- At least 12 characters with mixed types

### Password Strength Reference

| Length | Time to Crack (brute force) |
|--------|---------------------------|
| 6 chars | Instant |
| 8 chars | A few hours |
| 10 chars | A few months |
| 12 chars | Thousands of years |
| 16 chars | Millions of years |

## Removing PDF Protection

If you have the owner password, you can also **remove** protection:

1. Upload the protected PDF
2. Enter the owner password
3. Click **Remove Protection**
4. Download the unlocked PDF

This is useful when:

- You forgot you password-protected a document
- You're sharing internally and no longer need restrictions
- You're archiving and want open access

## Compatibility

Protected PDFs work with:

- **Adobe Acrobat / Reader** — full support
- **Web browsers** — Chrome, Firefox, Edge, Safari
- **Mobile devices** — iOS Books, Android PDF viewers
- **E-readers** — some Kindle models (check device specs)

**Important:** Some free PDF readers have limited support for 256-bit AES. If your recipients use older software, choose AES-128.

## FAQ

**Can I recover a lost PDF password?** No. PDF encryption is designed to be irreversible without the password. There is no backdoor. Keep your passwords in a password manager.

**Does password protection compress the file?** No — encryption adds a small amount of overhead (a few KB) but does not compress the content. If you need a smaller file, compress the PDF first, then protect it.

**Is it safe to upload sensitive PDFs online?** Our tool processes everything in your browser using PDF-lib WebAssembly. Your file never reaches any server. For maximum security, you can also use the tool offline by saving the page before disconnecting from the internet.

**Can I add a password to a PDF I already encrypted?** Yes — but you'll need the existing password to remove protection first, then apply a new password.

**What's the difference between PDF passwords and digital signatures?** A password restricts access. A digital signature verifies authenticity and integrity. For sensitive documents, use both.`,
  },
{
    slug: "ssl-checker",
    title: "SSL Checker: How to Verify SSL Certificate Validity Online",
    description: "Check SSL certificate details, expiration dates, and chain validity for any domain. Ensure your website is secure and trusted.",
    date: "2026-05-23",
    readTime: "7 min read",
    category: "Network Tools",
    toolSlug: "ssl-checker",
    content: `## Why SSL Certificates Matter

Every time you visit a website with HTTPS, an SSL/TLS certificate is at work. It does three critical things:

1. **Encrypts data** between the browser and server
2. **Authenticates the server** — confirms you're talking to the real website
3. **Enables trust** — the padlock icon in the address bar

Without a valid SSL certificate, data travels in plain text. Anyone on the same network (coffee shop WiFi, hotel network) can read it.

## What Our SSL Checker Reveals

Enter any domain name and our tool fetches and analyzes the SSL certificate in real time. Here's what you get:

### Certificate Details

| Field | What It Means |
|-------|---------------|
| Subject | The domain or organization the certificate belongs to |
| Issuer | The Certificate Authority (CA) that issued it |
| Serial Number | Unique identifier for the certificate |
| Algorithm | Encryption algorithm used (e.g., SHA-256 with RSA) |
| Key Size | Bit length of the public key (2048-bit, 4096-bit) |

### Validity Period

- **Issued On** — when the certificate became valid
- **Expires On** — when the certificate expires
- **Days Remaining** — how long until expiration

### Certificate Chain

SSL certificates form a chain of trust:

\`\`\`
Root CA (trusted by browsers)
  └─ Intermediate CA
       └─ Your Domain Certificate
\`\`\`

Our checker validates that:

- The chain is complete (no missing intermediate certificates)
- Each certificate in the chain is valid
- The chain leads to a trusted root CA

### Additional Checks

- **Revocation status** — checks CRL (Certificate Revocation List) and OCSP
- **Domain match** — verifies the certificate covers the domain
- **Protocol support** — shows which TLS versions are enabled
- **HSTS status** — checks if HTTP Strict Transport Security is configured

## How to Check an SSL Certificate

### Step 1: Enter the Domain

Visit our [SSL Checker](/tools/ssl-checker) and type in any domain name:

\`\`\`
example.com
www.example.com
api.example.com
\`\`\`

Include or omit https:// — the tool handles both.

### Step 2: Click Check

The tool initiates a secure connection to the server and downloads the certificate. This takes 1-3 seconds typically.

### Step 3: Review Results

You'll see a complete report with:

- **Green** indicators for passed checks
- **Red** indicators for failed checks
- **Yellow** warnings for issues to investigate

### Step 4: Take Action

Based on the results:

| Issue | Action |
|-------|--------|
| Expiring soon | Renew with your CA |
| Chain incomplete | Install intermediate certificates on your server |
| Weak algorithm | Reissue with stronger encryption |
| Wrong domain | Get a certificate that covers this domain |

## Common SSL Issues

### Expired Certificate

The most common problem. Browsers show a full-page warning for expired certificates. **Renew at least 30 days before expiration.**

### Mixed Content

HTTPS page loading HTTP resources (images, scripts, stylesheets). The padlock icon disappears. Fix by loading all resources over HTTPS.

### Self-Signed Certificate

Useful for development, but browsers show "Not Secure" warnings. Use a trusted CA like Let's Encrypt for production.

### Certificate Name Mismatch

The certificate was issued for \`www.example.com\` but you're visiting \`example.com\`. Use a wildcard certificate (\`*.example.com\`) or get a certificate covering both.

### Incomplete Chain

Server doesn't send intermediate certificates. Some browsers and mobile devices can't validate the chain and show warnings. Install the full chain on your server.

## Best Practices

### Monitor Your Certificates

- Check certificates **monthly** for standard sites
- Check **weekly** for e-commerce or banking sites
- Set up **alerts** for 30-, 14-, and 7-day warnings before expiration

### Use Modern Protocols

| Protocol | Status |
|----------|--------|
| TLS 1.3 | ✅ Best — fastest and most secure |
| TLS 1.2 | ✅ Acceptable — widely supported |
| TLS 1.1 | ❌ Deprecated — disable if possible |
| TLS 1.0 | ❌ Deprecated — disable immediately |
| SSL 3.0 | ❌ Insecure — must disable |

### Choose Strong Keys

- **2048-bit RSA** — minimum for new certificates
- **4096-bit RSA** — stronger, recommended for high-security sites
- **ECC (Elliptic Curve)** — stronger than RSA at equivalent bit sizes, faster

## Certificate Types Compared

| Type | Coverage | Best For | Cost |
|------|----------|----------|------|
| DV (Domain Validated) | Single domain | Blogs, small sites | Free (Let's Encrypt) |
| OV (Organization Validated) | Single domain + org verified | Business websites | $50-200/yr |
| EV (Extended Validation) | Domain + org verified + green bar | E-commerce, banking | $100-500/yr |
| Wildcard | *.example.com | Multi-subdomain sites | $100-400/yr |
| Multi-Domain (SAN) | Multiple specific domains | Different domains on one server | $50-300/yr |

## FAQ

**How often should I check my SSL certificate?** At least once a month. Many certificates expire after 90 days (Let's Encrypt) or 1-2 years (commercial CAs). Set calendar reminders.

**What happens if my SSL expires?** Browsers display security warnings that scare visitors away. Search engines may rank your site lower. Some browsers block access entirely.

**Can I check SSL for internal/hostname domains?** Yes — as long as the domain resolves and has a valid certificate, our checker can inspect it.

**How does SSL affect SEO?** Google uses HTTPS as a ranking signal. Sites with valid SSL certificates rank higher than insecure HTTP sites.

**What's the difference between SSL and TLS?** SSL is the deprecated predecessor of TLS. "SSL certificate" is the common term, but modern certificates use the TLS protocol. There's no practical difference for end users.`,
  },
{
    slug: "dns-lookup",
    title: "DNS Lookup Tool: How to Query DNS Records for Any Domain",
    description: "Look up DNS records including A, AAAA, CNAME, MX, NS, TXT, and SOA. Diagnose DNS issues and verify domain configuration.",
    date: "2026-05-23",
    readTime: "6 min read",
    category: "Network Tools",
    toolSlug: "dns-lookup",
    content: `## What is DNS?

The Domain Name System (DNS) is the phonebook of the internet. When you type \`example.com\` into your browser, DNS translates that human-readable name into a machine-readable IP address like \`93.184.216.34\$.

Without DNS, you'd need to memorize IP addresses for every website you visit. DNS works silently in the background, typically in milliseconds.

## Why Perform a DNS Lookup?

DNS lookups help you:

- **Verify domain configuration** — confirm your website points to the right server
- **Diagnose email issues** — check MX records for mail delivery problems
- **Troubleshoot connectivity** — see if DNS is the bottleneck
- **Security auditing** — inspect TXT records for SPF, DKIM, and DMARC
- **Domain migration** — confirm DNS changes propagated before switching hosts

## Types of DNS Records

### A Record (Address)

Maps a domain to an IPv4 address:

\`\`\`
example.com → 93.184.216.34
\`\`\`

This is the most fundamental record type. Every website needs at least one A record.

### AAAA Record (IPv6 Address)

Same as A record, but for IPv6 addresses:

\`\`\`
example.com → 2606:2800:220:1:248:1893:25c8:1946
\`\`\`

### CNAME Record (Canonical Name)

Aliases one domain to another:

\`\`\`
www.example.com → example.com
\`\`\`

The alias domain inherits all DNS settings from the target.

### MX Record (Mail Exchange)

Specifies mail servers for the domain:

| Priority | Mail Server |
|----------|------------|
| 10 | mail.example.com |
| 20 | backup-mail.example.com |

Lower priority numbers are tried first.

### NS Record (Name Server)

Identifies authoritative DNS servers:

\`\`\`
example.com → ns1.example.com, ns2.example.com
\`\`\`

### TXT Record (Text)

Stores arbitrary text data, commonly used for:

- **SPF** (Sender Policy Framework) — which servers can send email for your domain
- **DKIM** (DomainKeys Identified Mail) — cryptographic email signing
- **DMARC** (Domain-based Message Authentication) — email authentication policy
- **Domain verification** — prove you own a domain (Google, Microsoft, etc.)

### SOA Record (Start of Authority)

Contains administrative information:

| Field | Meaning |
|-------|---------|
| MNAME | Primary name server |
| RNAME | Admin email address |
| Serial | Version number (increment for changes) |
| Refresh | How often to check for updates |
| Retry | How long to wait after a failed refresh |
| Expire | When to stop using the zone if no updates |
| Minimum TTL | Default cache duration |

## How to Perform a DNS Lookup

### Using ToolboxPro

Visit our [DNS Lookup Tool](/tools/dns-lookup).

**Step 1: Enter a domain**

\`\`\`
example.com
google.com
github.com
\`\`\`

**Step 2: Select record type (optional)**

By default, the tool returns all common record types. You can filter to see only:

- A (IPv4)
- AAAA (IPv6)
- CNAME (Aliases)
- MX (Mail)
- NS (Name Servers)
- TXT (Text)
- SOA (Authority)

**Step 3: Click Lookup**

Results appear in a structured table within 1-2 seconds.

**Step 4: Analyze results**

Each record shows:

- **Type** — record type (A, MX, TXT, etc.)
- **Name** — the domain/subdomain
- **Value** — the resolved data
- **TTL** — Time To Live in seconds (how long the result is cached)

## Understanding TTL (Time To Live)

TTL tells DNS resolvers how long to cache a record before checking for updates.

| TTL Value | Cache Duration | Use Case |
|-----------|---------------|----------|
| 300 (5 min) | Short | Migration/testing, change frequently |
| 3600 (1 hour) | Medium | Standard production |
| 86400 (24 hours) | Long | Stable records, rarely change |
| 604800 (7 days) | Very long | SOA records, NS records |

**Lower TTL before planned changes.** If you're migrating servers, reduce TTL to 300 seconds at least 24 hours before the change. This ensures the old records expire quickly when you switch.

## Common DNS Issues

### Propagation Delay

After changing DNS records, it takes time to propagate worldwide. Factors:

- Your TTL settings (primary factor)
- ISP caching policies
- Regional DNS resolver behavior

**Typical propagation:** 1-48 hours. Using our lookup tool from different locations helps confirm propagation.

### Missing Records

Common mistakes:

| Symptom | Likely Cause |
|---------|-------------|
| Website not loading | Missing or wrong A/AAAA record |
| Email not delivering | Missing or incorrect MX records |
| Emails marked as spam | Missing SPF/DKIM/DMARC TXT records |
| Subdomain not working | Missing CNAME record |

### DNS Resolution Failure

If a lookup returns no results:

1. Check that the domain is registered and active
2. Verify nameservers are correct and responding
3. Confirm the specific record exists
4. Check for DNSSEC validation issues

## DNS and Security

### DNSSEC

DNS Security Extensions add cryptographic signatures to DNS records, preventing DNS spoofing and cache poisoning. Our tool shows whether a domain has DNSSEC enabled.

### SPF, DKIM, and DMARC

These three TXT records protect your domain from email spoofing:

| Record | Purpose |
|--------|---------|
| SPF | Lists authorized mail servers |
| DKIM | Provides cryptographic verification |
| DMARC | Tells receivers how to handle unauthenticated email |

Example SPF record:

\`\`\`
v=spf1 include:_spf.google.com ~all
\`\`\`

This says: "Only Google's servers can send email for this domain. Others should be marked as suspicious (~all)."

## FAQ

**What's the difference between public DNS and authoritative DNS?** Public DNS resolvers (like Google 8.8.8.8) answer queries from users. Authoritative DNS servers hold the actual zone records. Our tool queries authoritative servers for the most accurate results.

**Can I look up DNS for internal/private domains?** No — private DNS zones that aren't published to public DNS servers won't be visible. Use local command-line tools (\`nslookup\`, \`dig\`) for internal DNS.

**How long does DNS propagation take?** Typically 1-48 hours, but modern CDNs and global DNS providers often complete propagation in minutes. Lower TTL values speed up future changes.

**Why do I see different results from different locations?** Cached records at various DNS resolvers. Some resolvers may still have the old TTL cached. Wait for propagation or use a tool that queries authoritative servers directly.

**Does DNS lookup work for internationalized domain names (IDN)?** Yes — the tool automatically converts IDN characters (like 中国) to Punycode format before querying.`,
  },
{
    slug: "password-strength",
    title: "Password Strength Checker: How Secure Is Your Password?",
    description: "Test password strength instantly. Analyze length, complexity, and resistance to brute-force attacks. Learn how to create unbreakable passwords.",
    date: "2026-05-23",
    readTime: "7 min read",
    category: "Utilities",
    toolSlug: "password-strength",
    content: `## Why Password Strength Matters

Every day, thousands of accounts are compromised because of weak passwords. According to cybersecurity reports:

- **81%** of data breaches involve weak or stolen passwords
- **123456** and **password** remain the most common passwords
- A weak password can be cracked in **under a second**
- A strong password can take **centuries** to crack

Your password is the first line of defense. Understanding what makes a password strong — and how to test it — is essential for staying safe online.

## How Password Strength Is Measured

### Entropy (Bit Strength)

Password strength is measured in **bits of entropy**. Each bit doubles the number of possible guesses:

| Entropy | Strength | Time to Crack |
|---------|----------|---------------|
| < 28 bits | Very Weak | Instant |
| 28-35 bits | Weak | Minutes to hours |
| 36-59 bits | Moderate | Days to years |
| 60-127 bits | Strong | Centuries |
| 128+ bits | Very Strong | Millions of years |

### Our Scoring System

Our Password Strength Checker analyzes several factors:

| Factor | Weight | What We Check |
|--------|--------|---------------|
| Length | High | Total character count |
| Character Variety | High | Uppercase, lowercase, digits, symbols |
| Patterns | Medium | Keyboard patterns, repeated chars, sequences |
| Dictionary Words | High | Common words, passwords, and phrases |
| Leaked Password Check | Medium | Comparison against known breach databases (hashed) |

### Visual Feedback

The tool provides real-time feedback:

- **Red bar** — weak, crackable instantly
- **Orange bar** — moderate, might resist casual attempts
- **Yellow bar** — decent, but could be improved
- **Light green bar** — strong, good for most uses
- **Dark green bar** — very strong, resistant to offline attacks

## Common Password Mistakes

### 1. Too Short

A 6-character password, even with symbols, can be cracked in minutes.

\`\`\`
A7$b2!  —  6 chars, looks complex but ~28 bits (WEAK)
\`\`\`

### 2. Common Substitutions

"P@ssw0rd" is not creative. Hackers know these substitutions:

| Letter | Substitution |
|--------|-------------|
| a | @, 4 |
| s | $, 5, z |
| o | 0 |
| e | 3 |
| i | 1, ! |
| t | 7 |

### 3. Personal Information

Never use:

- Your name or family names
- Birthdays or anniversaries
- Pet names
- Street names or addresses
- Phone numbers

### 4. Reusing Passwords

If one site is breached and you reuse passwords, all your accounts are at risk.

### 5. Keyboard Patterns

"qwerty", "asdfgh", "zxcvbn", and "1qaz2wsx" are instantly detected.

## How to Create a Strong Password

### Method 1: Random Passwords (Best)

Use a password manager to generate:

\`\`\`
K8#mP$2vN!qR7xL@
\`\`\`

This 16-character random string has ~104 bits of entropy.

### Method 2: Passphrases (Memorable)

Combine random words with separators:

\`\`\`
Correct-Horse-Battery-Staple!
Blue-Elephant-Dances-At-Midnight
\`\`\`

A 5-word passphrase has ~65 bits of entropy — very strong and easy to remember.

### Method 3: Pattern-Based (Less Secure)

Use a sentence you'll remember:

"I first visited Paris in 2024!" → \`IfvPi2024!\`

This is better than most passwords but not as strong as random generation.

## Password Guidelines by Use Case

| Account Type | Minimum Length | Requirements | Example |
|-------------|---------------|--------------|---------|
| Social Media | 10+ chars | Mixed case + digits | BlueFrog$42Jump |
| Email | 12+ chars | Mixed + digits + symbol | MyM@ilP@ss99! |
| Banking | 14+ chars | Maximum complexity | B@nk!$S3cur3#2026 |
| Password Manager | 16+ chars | Full random | gH7#mK2$pR9!vL4$xQ |
| Admin Accounts | 20+ chars | Full random + 2FA | J8&zN3$wQ6!cF1%vB0@x |

## Two-Factor Authentication (2FA)

Even the strongest password benefits from 2FA. Types:

| Method | Security | Convenience |
|--------|----------|-------------|
| SMS Code | Low (SIM swap risk) | High |
| Authenticator App (TOTP) | High | Medium |
| Hardware Key (FIDO2) | Very High | Low |
| Biometrics | Medium | High |

**Always enable 2FA** on email, banking, and password manager accounts.

## Password Managers

### Why Use One

- Generate strong random passwords automatically
- Store all passwords behind one master password
- Auto-fill on websites and apps
- Sync across devices
- Warn about breached or reused passwords

### Recommended Options

| Service | Free Tier | Features |
|---------|-----------|----------|
| Bitwarden | Yes | Open source, all platforms |
| 1Password | No | Polished UX, travel mode |
| KeePassXC | Yes | Local-only, no cloud |
| Apple Keychain | Yes (Apple devices) | Built-in, seamless |

## How We Check Passwords Safely

Your password **never leaves your device**. Our tool:

1. Runs entirely in your browser using JavaScript
2. Analyzes patterns, length, and character variety locally
3. Checks against a bloom filter of known leaked passwords (loaded as an encrypted, compressed dataset)
4. Shows results instantly without network transmission

**We never store, log, or transmit your password.** Not even temporarily.


### Try It Yourself

Check your password strength with our [Password Strength Checker](/tools/password-strength). Generate strong random passwords with our [Password Generator](/tools/password-generator), and securely hash them using our [Hash Generator](/tools/hash-generator).

## FAQ

**What is the most secure password length?** 16+ characters with full randomness. Each additional character exponentially increases cracking time.

**Are password managers safe?** Yes — they encrypt your vault with a strong master password. Using a password manager is vastly more secure than reusing weak passwords across sites.

**How often should I change my password?** Only change when: (1) you suspect it's compromised, (2) the service reports a breach, or (3) you shared it with someone. Regular forced changes are no longer recommended by security experts (NIST guidelines).

**What does "pwned" mean?** Your password has appeared in a known data breach. Change it immediately and use a unique password for that account.

**Can I use spaces in passwords?** Yes — most systems allow spaces. Passphrases with spaces are excellent. Some legacy systems may strip them, so test first on important accounts.`,
  },
{
    slug: "percentage-calculator",
    title: "Percentage Calculator: Calculate Percentages Instantly Online",
    description: "Free online percentage calculator for discounts, tips, taxes, and data analysis. Calculate percentage increase, decrease, and more in seconds.",
    date: "2026-05-23",
    readTime: "5 min read",
    category: "Conversion Tools",
    toolSlug: "percentage-calculator",
    content: `## Why Percentage Calculations Matter

Percentages are everywhere in daily life:

- **Shopping** — "30% off" — how much do you save?
- **Finance** — "5% APY" — what will your savings grow to?
- **Taxes** — "8% sales tax" — what's the final price?
- **Tips** — "15% gratuity" — how much to leave?
- **Data** — "22% increase" — what does that mean in raw numbers?

Calculating percentages manually is error-prone. Our Percentage Calculator handles all common scenarios instantly.

## Percentage Calculation Modes

### 1. What is X% of Y?

The most common calculation. Given a percentage and a total, find the portion.

**Formula:**
\`\`\`
Result = (Percentage ÷ 100) × Total
\`\`\`

**Example:**
\`\`\`
What is 15% of 200?
= (15 ÷ 100) × 200
= 0.15 × 200
= 30
\`\`\`

**Real-world use:** Calculate a tip on a restaurant bill. Bill is $84.50, you want to leave 18%.

\`\`\`
18% of 84.50 = 0.18 × 84.50 = $15.21 tip
Total = $84.50 + $15.21 = $99.71
\`\`\`

### 2. X is What Percent of Y?

Given two numbers, find the percentage relationship.

**Formula:**
\`\`\`
Percentage = (X ÷ Y) × 100
\`\`\`

**Example:**
\`\`\`
25 is what percent of 200?
= (25 ÷ 200) × 100
= 0.125 × 100
= 12.5%
\`\`\`

**Real-world use:** You scored 42 out of 50 on a test.

\`\`\`
42 ÷ 50 × 100 = 84%
\`\`\`

### 3. Percentage Increase / Decrease

Find the percentage change from an old value to a new value.

**Formula:**
\`\`\`
Change = ((New - Old) ÷ |Old|) × 100
\`\`\`

**Example (increase):**
\`\`\`
Salary went from $50,000 to $55,000
= ((55000 - 50000) ÷ 50000) × 100
= (5000 ÷ 50000) × 100
= 10% increase
\`\`\`

**Example (decrease):**
\`\`\`
Price dropped from $80 to $60
= ((60 - 80) ÷ 80) × 100
= (-20 ÷ 80) × 100
= -25% (25% decrease)
\`\`\`

### 4. Add / Subtract Percentage

Add a percentage to a number (e.g., adding tax) or subtract (e.g., applying a discount).

**Formula (add tax):**
\`\`\`
Total = Price × (1 + TaxRate ÷ 100)
\`\`\`

**Example:**
\`\`\`
Item costs $120, sales tax is 8%
Total = 120 × (1 + 0.08) = 120 × 1.08 = $129.60
\`\`\`

**Formula (apply discount):**
\`\`\`
Discounted = Price × (1 - Discount ÷ 100)
\`\`\`

**Example:**
\`\`\`
Jacket is $85 with 30% off
Sale price = 85 × (1 - 0.30) = 85 × 0.70 = $59.50
You save = $85 - $59.50 = $25.50
\`\`\`

## Common Percentage Scenarios

### Shopping Discounts

| Original Price | Discount | You Pay | You Save |
|---------------|----------|---------|----------|
| $50.00 | 10% | $45.00 | $5.00 |
| $50.00 | 25% | $37.50 | $12.50 |
| $50.00 | 50% | $25.00 | $25.00 |
| $100.00 | 20% | $80.00 | $20.00 |
| $100.00 | 33% | $67.00 | $33.00 |
| $200.00 | 40% | $120.00 | $80.00 |

### Financial Calculations

**Compound interest simplified:**

If you invest $10,000 at 7% annual return:

| Year | Value | Growth |
|------|-------|--------|
| 0 | $10,000 | — |
| 1 | $10,700 | $700 |
| 3 | $12,250 | $2,250 |
| 5 | $14,026 | $4,026 |
| 10 | $19,672 | $9,672 |

**Mortgage down payment:**

\`\`\`
Home price: $350,000
Down payment: 20% = $70,000
Loan amount: $280,000
\`\`\`

### Academic Grades

| Score | Out Of | Percentage | Grade |
|-------|--------|------------|-------|
| 18 | 20 | 90% | A |
| 16 | 20 | 80% | B |
| 14 | 20 | 70% | C |
| 12 | 20 | 60% | D |
| 33 | 40 | 82.5% | B |
| 85 | 100 | 85% | B |

### Business Metrics

**Profit Margin:**
\`\`\`
Revenue: $500,000
Cost: $350,000
Profit: $150,000
Margin: 150000 ÷ 500000 × 100 = 30%
\`\`\`

**Growth Rate:**
\`\`\`
Q1 sales: $100,000
Q2 sales: $130,000
Growth: ((130000 - 100000) ÷ 100000) × 100 = 30%
\`\`\`

## How to Use Our Calculator

Visit our [Percentage Calculator](/tools/percentage-calculator).

**Step 1:** Choose your calculation mode:

| Mode | What It Does |
|------|-------------|
| What is X% of Y? | Finds a percentage of a total |
| X is what % of Y? | Finds the percentage relationship |
| % Increase/Decrease | Calculates change between two values |
| Add/Subtract % | Applies a percentage to a value |

**Step 2:** Enter your numbers into the input fields.

**Step 3:** See the result instantly — no button to click. The tool updates in real time as you type.

## Tips for Manual Calculations

### Quick Mental Math

- **10%** of any number = move decimal one place left (10% of 85 = 8.5)
- **50%** of any number = half (50% of 85 = 42.5)
- **25%** of any number = quarter (25% of 85 = 21.25)
- **1%** of any number = move decimal two places left (1% of 85 = 0.85)

Combine these for other percentages:

\`\`\`
15% of 200 = 10% of 200 + 5% of 200 = 20 + 10 = 30
35% of 80 = 25% of 80 + 10% of 80 = 20 + 8 = 28
\`\`\`

### Fraction Equivalents

| Percentage | Fraction | Decimal |
|------------|----------|---------|
| 10% | 1/10 | 0.10 |
| 12.5% | 1/8 | 0.125 |
| 20% | 1/5 | 0.20 |
| 25% | 1/4 | 0.25 |
| 33.33% | 1/3 | 0.333 |
| 50% | 1/2 | 0.50 |
| 66.67% | 2/3 | 0.667 |
| 75% | 3/4 | 0.75 |

## FAQ

**What's the difference between percentage and percentage points?** A percentage point is the arithmetic difference between two percentages. If a rate goes from 5% to 7%, that's a 2 percentage point increase, but a 40% increase in the rate itself.

**How do I calculate a reverse percentage?** If you know the result and the percentage, find the original. Example: You paid $75 after a 25% discount. Original = 75 ÷ (1 - 0.25) = 75 ÷ 0.75 = $100.

**Can I use decimals in percentages?** Yes — our calculator accepts decimals. 7.5% works the same as 7.5.

**Is there a limit on how large the numbers can be?** The calculator handles numbers up to millions with precision up to 4 decimal places.

**What is a percentage error?** It compares an approximate value to an exact value: |(Approximate - Exact) ÷ Exact| × 100. Used in science, engineering, and statistics.`,
  },

];
