/**
 * FAQ data for tool pages.
 * Each tool can have 3-5 common questions with answers.
 * Used for both the visible FAQ section and FAQ Schema (JSON-LD).
 */
export interface FaqItem {
  question: string;
  answer: string;
}

export interface ToolFaq {
  slug: string;
  faqs: FaqItem[];
}

const toolFaqs: ToolFaq[] = [
  // Developer Tools
  {
    slug: "json-formatter",
    faqs: [
      { question: "What is a JSON formatter?", answer: "A JSON formatter is an online tool that automatically formats, validates, and beautifies JSON data. It fixes syntax errors, adds proper indentation, and makes your JSON readable." },
      { question: "Is this JSON formatter free to use?", answer: "Yes, ToolboxPro's JSON formatter is completely free. No signup required, and all processing happens in your browser — your data never leaves your device." },
      { question: "Can the JSON formatter fix syntax errors?", answer: "Yes. The formatter detects common JSON errors like missing commas, trailing commas, unquoted keys, and mismatched brackets, then highlights the exact location of each error." },
    ],
  },
  {
    slug: "base64-encode-decode",
    faqs: [
      { question: "What is Base64 encoding?", answer: "Base64 encoding converts binary data into a text format using 64 ASCII characters. It's commonly used for embedding images in HTML/CSS, transmitting data over email, and API authentication tokens." },
      { question: "Is Base64 the same as encryption?", answer: "No. Base64 is encoding, not encryption. It's easily reversible and provides no security. Anyone can decode Base64 text back to the original data." },
      { question: "What file types can I encode to Base64?", answer: "You can encode any file type including images (PNG, JPG, GIF), documents (PDF, TXT), and binary files. The tool accepts text input and file uploads." },
    ],
  },
  {
    slug: "regex-tester",
    faqs: [
      { question: "What is a regex tester?", answer: "A regex tester lets you test regular expressions against sample text in real-time. It highlights matches, shows capture groups, and helps you build and debug regex patterns." },
      { question: "Which regex flavor does this tool support?", answer: "The tool supports JavaScript regex syntax, which covers most common use cases including lookaheads, backreferences, and character classes." },
    ],
  },
  {
    slug: "color-converter",
    faqs: [
      { question: "What color formats can I convert between?", answer: "You can convert between HEX, RGB, HSL, CMYK, and HSV color formats. Simply enter a color value in any format and see instant conversions to all others." },
      { question: "Can I pick colors visually?", answer: "Yes. The color picker lets you select colors visually and automatically shows the converted values in all formats." },
    ],
  },
  {
    slug: "password-generator",
    faqs: [
      { question: "How secure are the generated passwords?", answer: "The passwords are generated using the browser's cryptographically secure random number generator (Web Crypto API). They are truly random and suitable for any security-sensitive application." },
      { question: "Can I customize the password criteria?", answer: "Yes. You can set the password length and choose to include/exclude uppercase letters, lowercase letters, numbers, and special characters." },
      { question: "Are generated passwords stored anywhere?", answer: "No. All generation happens locally in your browser. No passwords are sent to any server or stored in any database." },
    ],
  },
  {
    slug: "uuid-generator",
    faqs: [
      { question: "What is a UUID?", answer: "A UUID (Universally Unique Identifier) is a 128-bit number used to uniquely identify information in computer systems. UUIDs are formatted as 32 hexadecimal digits with hyphens." },
      { question: "Which UUID version does this tool generate?", answer: "The tool generates UUID v4, which uses random numbers. This is the most commonly used version for applications requiring unique identifiers." },
    ],
  },
  {
    slug: "word-counter",
    faqs: [
      { question: "What does the word counter count?", answer: "The word counter counts words, characters (with and without spaces), sentences, paragraphs, and estimated reading time. It updates in real-time as you type or paste text." },
      { question: "Does it count Chinese characters correctly?", answer: "Yes. The word counter handles both English words and Chinese/Japanese/Korean characters, counting each character as a word where appropriate." },
    ],
  },
  {
    slug: "timestamp-converter",
    faqs: [
      { question: "What timestamp formats are supported?", answer: "The tool converts between Unix timestamps (seconds and milliseconds), ISO 8601 format, and human-readable date strings. It supports all common date formats." },
      { question: "What is the current Unix timestamp?", answer: "You can see the live current timestamp at the top of the page. It updates every second." },
    ],
  },
  {
    slug: "image-compressor",
    faqs: [
      { question: "How much can I compress my images?", answer: "Compression rates vary by image type and quality setting. Typical reductions are 30-80% for JPEG images and 20-60% for PNG images with minimal visible quality loss." },
      { question: "Are my images uploaded to a server?", answer: "No. All compression happens in your browser using client-side JavaScript. Your images never leave your device." },
      { question: "What image formats are supported?", answer: "The tool supports JPEG, PNG, WebP, and GIF input formats. You can output to JPEG, PNG, or WebP." },
    ],
  },
  {
    slug: "pdf-merger",
    faqs: [
      { question: "Is there a file size limit?", answer: "The tool handles PDFs entirely in your browser, so limits depend on your device's memory. For most users, files up to 100MB per PDF work without issues." },
      { question: "Can I reorder pages before merging?", answer: "Yes. You can drag and drop to reorder PDF files before merging them into a single document." },
      { question: "Are my PDF files uploaded?", answer: "No. All processing happens locally in your browser. Your PDF files never leave your device." },
    ],
  },
  {
    slug: "barcode-generator",
    faqs: [
      { question: "What data can I encode in a QR code?", answer: "You can encode text, URLs, email addresses, phone numbers, WiFi credentials, and contact information. The tool supports multiple QR code data types." },
      { question: "Can I customize the QR code appearance?", answer: "Yes. You can change the colors, size, and error correction level. Higher error correction makes the QR code more resilient to damage." },
    ],
  },
  {
    slug: "dns-lookup",
    faqs: [
      { question: "What DNS records can I look up?", answer: "The tool supports A, AAAA, CNAME, MX, NS, TXT, SOA, and SRV records. You can query any domain's DNS configuration." },
      { question: "Is the DNS lookup real-time?", answer: "Yes. Results are fetched in real-time from public DNS resolvers, showing the current DNS configuration for the domain." },
    ],
  },
  {
    slug: "whois-lookup",
    faqs: [
      { question: "What information does a WHOIS lookup provide?", answer: "WHOIS lookups reveal domain registration details including registrar, registration date, expiration date, name servers, and registrant contact information (when available)." },
      { question: "Can I look up any domain?", answer: "Yes. You can look up any registered domain name. Note that some registrars offer privacy protection that hides personal information." },
    ],
  },
  {
    slug: "hash-generator",
    faqs: [
      { question: "What hash algorithms are supported?", answer: "The tool supports MD5, SHA-1, SHA-256, SHA-384, and SHA-512 hash algorithms. SHA-256 and above are recommended for security-sensitive applications." },
      { question: "Can I verify a hash value?", answer: "Yes. You can paste a hash value and compare it against the generated hash to verify data integrity." },
    ],
  },
  {
    slug: "case-converter",
    faqs: [
      { question: "What case formats are supported?", answer: "The tool supports lowercase, UPPERCASE, Title Case, Sentence case, camelCase, PascalCase, and snake_case conversions." },
      { question: "Can I convert large blocks of text?", answer: "Yes. There's no practical text length limit. You can paste entire documents and convert the case instantly." },
    ],
  },
  {
    slug: "markdown-to-html",
    faqs: [
      { question: "What Markdown features are supported?", answer: "The tool supports headings, bold, italic, links, images, code blocks, lists, tables, blockquotes, and horizontal rules — essentially all standard Markdown syntax." },
      { question: "Can I preview the HTML output?", answer: "Yes. The tool shows both the generated HTML code and a live preview of how it renders." },
    ],
  },
  {
    slug: "sql-formatter",
    faqs: [
      { question: "Which SQL dialects are supported?", answer: "The formatter handles standard SQL syntax including SELECT, INSERT, UPDATE, DELETE, JOIN, and subqueries. It works with MySQL, PostgreSQL, SQLite, and SQL Server syntax." },
    ],
  },
  {
    slug: "csv-viewer",
    faqs: [
      { question: "What CSV features are supported?", answer: "The viewer handles quoted fields, different delimiters (comma, semicolon, tab), and various encodings. It displays data in a sortable, searchable table." },
    ],
  },
  {
    slug: "url-encoder-decoder",
    faqs: [
      { question: "When do I need URL encoding?", answer: "URL encoding is needed when URLs contain special characters (spaces, symbols, non-ASCII characters) that aren't safe in URLs. It converts these to percent-encoded format (e.g., space → %20)." },
    ],
  },
  {
    slug: "jwt-decoder",
    faqs: [
      { question: "What is a JWT?", answer: "JWT (JSON Web Token) is a compact, URL-safe token format used for authentication and information exchange. It consists of three parts: header, payload, and signature." },
      { question: "Can this tool verify JWT signatures?", answer: "No. This tool decodes JWT payloads for inspection. Signature verification requires the secret key, which should never be shared." },
    ],
  },
];

/**
 * Get FAQ items for a specific tool.
 */
export function getToolFaqs(slug: string): FaqItem[] {
  const found = toolFaqs.find((t) => t.slug === slug);
  return found?.faqs ?? [];
}

/**
 * Get all tool slugs that have FAQ data.
 */
export function getToolsWithFaqs(): string[] {
  return toolFaqs.map((t) => t.slug);
}


/**
 * Generate FAQ Schema (JSON-LD) for a tool page.
 */
export function generateFaqSchema(faqs: FaqItem[]): object | null {
  if (faqs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
