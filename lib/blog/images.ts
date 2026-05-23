export interface BlogImage {
  blog: string;
  toolSlug: string;
  image: string;
}

export const blogImages: BlogImage[] = [
  { blog: "how-to-format-json-online", toolSlug: "json-formatter", image: "/blog/json-formatter.png" },
  { blog: "base64-encoding-explained", toolSlug: "base64-encode-decode", image: "/blog/base64-encode-decode.png" },
  { blog: "regex-for-beginners", toolSlug: "regex-tester", image: "/blog/regex-tester.png" },
  { blog: "hex-to-rgb-color-conversion", toolSlug: "color-converter", image: "/blog/color-converter.png" },
  { blog: "compress-images-without-losing-quality", toolSlug: "image-compressor", image: "/blog/image-compressor.png" },
  { blog: "merge-pdf-files-free", toolSlug: "pdf-merger", image: "/blog/pdf-merger.png" },
  { blog: "create-custom-qr-codes", toolSlug: "qr-code-generator", image: "/blog/qr-code-generator.png" },
  { blog: "word-counter-character-count", toolSlug: "word-counter", image: "/blog/word-counter.png" },
  { blog: "url-encoding-101", toolSlug: "url-encoder-decoder", image: "/blog/url-encoder-decoder.png" },
  { blog: "best-free-developer-tools-2026", toolSlug: "image-converter", image: "/blog/image-converter.png" },
  { blog: "image-format-guide-jpg-png-webp", toolSlug: "image-converter", image: "/blog/image-converter.png" },
  { blog: "uuid-generator", toolSlug: "uuid-generator", image: "/blog/uuid-generator.png" },
  { blog: "timestamp-converter", toolSlug: "timestamp-converter", image: "/blog/timestamp-converter.png" },
  { blog: "number-base-converter", toolSlug: "number-base-converter", image: "/blog/number-base-converter.png" },
  { blog: "css-minifier", toolSlug: "css-minifier", image: "/blog/css-minifier.png" },
  { blog: "jwt-decoder", toolSlug: "jwt-decoder", image: "/blog/jwt-decoder.png" },
  { blog: "html-to-jsx", toolSlug: "html-to-jsx", image: "/blog/html-to-jsx.png" },
  { blog: "case-converter", toolSlug: "case-converter", image: "/blog/case-converter.png" },
  { blog: "text-diff-checker", toolSlug: "text-diff-checker", image: "/blog/text-diff-checker.png" },
  { blog: "lorem-ipsum-generator", toolSlug: "lorem-ipsum-generator", image: "/blog/lorem-ipsum-generator.png" },
  { blog: "text-to-slug", toolSlug: "text-to-slug", image: "/blog/text-to-slug.png" },
  { blog: "image-to-base64", toolSlug: "image-to-base64", image: "/blog/image-to-base64.png" },
  { blog: "image-filters", toolSlug: "image-filters", image: "/blog/image-filters.png" },
  { blog: "barcode-generator", toolSlug: "barcode-generator", image: "/blog/barcode-generator.png" },
  { blog: "image-to-pdf", toolSlug: "image-to-pdf", image: "/blog/image-to-pdf.png" },
  { blog: "pdf-protector", toolSlug: "pdf-protector", image: "/blog/pdf-protector.png" },
  { blog: "ssl-checker", toolSlug: "ssl-checker", image: "/blog/ssl-checker.png" },
  { blog: "dns-lookup", toolSlug: "dns-lookup", image: "/blog/dns-lookup.png" },
  { blog: "password-strength", toolSlug: "password-strength", image: "/blog/password-strength.png" },
  { blog: "percentage-calculator", toolSlug: "percentage-calculator", image: "/blog/percentage-calculator.png" },
];

export function getBlogImage(slug: string): string | undefined {
  return blogImages.find((b) => b.blog === slug)?.image;
}
