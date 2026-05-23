export interface Tool {
  slug: string;
  name: string;
  description: string;
  category: "developer" | "pdf" | "image" | "text" | "conversion";
  icon: string;
  searchKeywords: string;
}

export const tools: Tool[] = [
  // === Developer Tools (10) ===
  {
    slug: "json-formatter",
    name: "JSON Formatter & Validator",
    description: "Format, validate, and beautify JSON in seconds",
    category: "developer",
    icon: "{}",
    searchKeywords: "json formatter json validator prettify json",
  },
  {
    slug: "base64-encode-decode",
    name: "Base64 Encoder/Decoder",
    description: "Encode text or files to Base64 and decode back",
    category: "developer",
    icon: "B64",
    searchKeywords: "base64 encode decode base64 converter",
  },
  {
    slug: "regex-tester",
    name: "Regex Tester",
    description: "Test regular expressions with real-time highlighting",
    category: "developer",
    icon: ".*",
    searchKeywords: "regex tester regular expression test online",
  },
  {
    slug: "color-converter",
    name: "Color Converter",
    description: "Convert between HEX, RGB, HSL, and more",
    category: "developer",
    icon: "#",
    searchKeywords: "color converter hex to rgb rgb to hex color picker",
  },
  {
    slug: "url-encoder-decoder",
    name: "URL Encoder/Decoder",
    description: "Encode and decode URL components instantly",
    category: "developer",
    icon: "URL",
    searchKeywords: "url encoder url decoder percent encoding",
  },
  {
    slug: "uuid-generator",
    name: "UUID Generator",
    description: "Generate random UUIDs v4 for unique identifiers",
    category: "developer",
    icon: "ID",
    searchKeywords: "uuid generator guid generator unique id",
  },
  {
    slug: "password-generator",
    name: "Password Generator",
    description: "Create strong, secure passwords with custom options",
    category: "developer",
    icon: "🔑",
    searchKeywords: "password generator strong password random password",
  },
  {
    slug: "hash-generator",
    name: "Hash Generator",
    description: "Generate MD5, SHA-1, SHA-256, SHA-512 hashes",
    category: "developer",
    icon: "#H",
    searchKeywords: "hash generator md5 sha256 sha1 sha512 hash online",
  },
  {
    slug: "timestamp-converter",
    name: "Timestamp Converter",
    description: "Convert between Unix timestamps and human-readable dates",
    category: "developer",
    icon: "⏱",
    searchKeywords: "timestamp converter unix timestamp epoch converter",
  },
  {
    slug: "number-base-converter",
    name: "Number Base Converter",
    description: "Convert between binary, octal, decimal, and hexadecimal",
    category: "developer",
    icon: "0x",
    searchKeywords: "binary converter hex converter decimal octal base converter",
  },
  // === Image Tools (3) ===
  {
    slug: "image-compressor",
    name: "Image Compressor",
    description: "Compress images without losing quality",
    category: "image",
    icon: "🖼",
    searchKeywords: "image compressor compress jpg png webp",
  },
  {
    slug: "image-converter",
    name: "Image Format Converter",
    description: "Convert images between JPG, PNG, WebP, and more",
    category: "image",
    icon: "↔",
    searchKeywords: "image converter jpg to png png to webp",
  },
  // === PDF Tools (1) ===
  {
    slug: "pdf-merger",
    name: "PDF Merger",
    description: "Merge multiple PDFs into one document",
    category: "pdf",
    icon: "📄",
    searchKeywords: "pdf merger combine pdf merge pdf files",
  },
  // === Text Tools (4) ===
  {
    slug: "word-counter",
    name: "Word & Character Counter",
    description: "Count words, characters, sentences, and reading time",
    category: "text",
    icon: "Wc",
    searchKeywords: "word counter character counter word count",
  },
  {
    slug: "case-converter",
    name: "Text Case Converter",
    description: "Convert text between UPPER, lower, Title, camelCase and more",
    category: "text",
    icon: "Aa",
    searchKeywords: "case converter uppercase lowercase title case camel case",
  },
  {
    slug: "lorem-ipsum-generator",
    name: "Lorem Ipsum Generator",
    description: "Generate placeholder text for mockups and designs",
    category: "text",
    icon: "¶",
    searchKeywords: "lorem ipsum generator placeholder text dummy text",
  },
  {
    slug: "text-diff-checker",
    name: "Text Diff Checker",
    description: "Compare two texts and highlight the differences",
    category: "text",
    icon: "±",
    searchKeywords: "text diff checker compare text difference online",
  },
  {
    slug: "text-repeater",
    name: "Text Repeater",
    description: "Repeat text multiple times with custom separators",
    category: "text",
    icon: "↻",
    searchKeywords: "text repeater repeat text multiple times string generator",
  },
  // === Conversion Tools (2) ===
  {
    slug: "qr-code-generator",
    name: "QR Code Generator",
    description: "Create custom QR codes for URLs, text, WiFi, and more",
    category: "conversion",
    icon: "▦",
    searchKeywords: "qr code generator create qr code qr maker",
  },
  {
    slug: "html-entity-converter",
    name: "HTML Entity Converter",
    description: "Encode and decode HTML entities like &amp; and &lt;",
    category: "conversion",
    icon: "&lt;",
    searchKeywords: "html entity encoder html entity decoder html escape",
  },
];

export const categories = [
  { id: "developer" as const, name: "Developer Tools", icon: "⌨️" },
  { id: "pdf" as const, name: "PDF Tools", icon: "📄" },
  { id: "image" as const, name: "Image Tools", icon: "🖼️" },
  { id: "text" as const, name: "Text Tools", icon: "✍️" },
  { id: "conversion" as const, name: "Conversion", icon: "🔄" },
];

export function getTool(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getToolsByCategory(category: string): Tool[] {
  return tools.filter((t) => t.category === category);
}
