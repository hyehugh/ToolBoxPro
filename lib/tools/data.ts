export interface Tool {
  slug: string;
  name: string;
  description: string;
  category: "developer" | "pdf" | "image" | "text" | "conversion";
  icon: string;
  searchKeywords: string;
}

export const tools: Tool[] = [
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
  {
    slug: "pdf-merger",
    name: "PDF Merger",
    description: "Merge multiple PDFs into one document",
    category: "pdf",
    icon: "📄",
    searchKeywords: "pdf merger combine pdf merge pdf files",
  },
  {
    slug: "qr-code-generator",
    name: "QR Code Generator",
    description: "Create custom QR codes for URLs, text, WiFi, and more",
    category: "conversion",
    icon: "▦",
    searchKeywords: "qr code generator create qr code qr maker",
  },
  {
    slug: "word-counter",
    name: "Word & Character Counter",
    description: "Count words, characters, sentences, and reading time",
    category: "text",
    icon: "Wc",
    searchKeywords: "word counter character counter word count",
  },
];

export const categories = [
  { id: "developer" as const, name: "Developer Tools", icon: "⌨️" },
  { id: "pdf" as const, name: "PDF Tools", icon: "📄" },
  { id: "image" as const, name: "Image Tools", icon: "🖼️" },
  { id: "text" as const, name: "Text & AI", icon: "✍️" },
  { id: "conversion" as const, name: "Conversion", icon: "🔄" },
];

export function getTool(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getToolsByCategory(category: string): Tool[] {
  return tools.filter((t) => t.category === category);
}
