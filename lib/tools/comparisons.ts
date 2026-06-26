/**
 * Tool comparison data — shows how ToolboxPro compares to alternatives.
 * Each tool can have 1-2 competitor comparisons.
 * Renders on tool pages for SEO value and user decision-making.
 */

export interface ToolComparison {
  toolName: string;
  competitors: {
    name: string;
    url: string;
    pros: string[];
    cons: string[];
  }[];
  toolboxProAdvantages: string[];
}

const comparisons: Record<string, ToolComparison> = {
  "json-formatter": {
    toolName: "JSON Formatter & Validator",
    competitors: [
      {
        name: "JSONLint",
        url: "https://jsonlint.com",
        pros: ["Simple interface", "Quick validation"],
        cons: ["No tree view", "No minification option", "Shows ads"],
      },
      {
        name: "VS Code Built-in",
        url: "https://code.visualstudio.com",
        pros: ["Integrated in editor", "Extension support"],
        cons: ["Requires software installation", "Not browser-based"],
      },
    ],
    toolboxProAdvantages: [
      "Tree view for exploring nested JSON",
      "Format, validate, and minify in one tool",
      "No ads, no signup, completely free",
      "Works on mobile browsers",
    ],
  },
  "image-compressor": {
    toolName: "Image Compressor",
    competitors: [
      {
        name: "TinyPNG",
        url: "https://tinypng.com",
        pros: ["High quality compression", "Batch support"],
        cons: ["5 MB file limit on free tier", "Uploads files to server", "Requires email for large batches"],
      },
      {
        name: "Squoosh",
        url: "https://squoosh.app",
        pros: ["Google-made", "Side-by-side preview"],
        cons: ["Single file at a time", "No batch processing", "Complex interface"],
      },
    ],
    toolboxProAdvantages: [
      "No file size limit (browser memory permitting)",
      "Files never leave your device",
      "Batch compression for multiple files",
      "Supports JPEG, PNG, and WebP",
    ],
  },
  "pdf-merger": {
    toolName: "PDF Merger",
    competitors: [
      {
        name: "ILovePDF",
        url: "https://ilovepdf.com",
        pros: ["Many PDF tools", "Clean interface"],
        cons: ["File size limits on free tier", "Uploads files to server", "Daily usage limits"],
      },
      {
        name: "Smallpdf",
        url: "https://smallpdf.com",
        pros: ["All-in-one platform", "Cloud integration"],
        cons: ["2 free tasks/day limit", "Requires account for full features", "Server-side processing"],
      },
    ],
    toolboxProAdvantages: [
      "No usage limits — unlimited merges",
      "Files stay on your device (100% private)",
      "No account required",
      "Drag-and-drop page reordering",
    ],
  },
  "password-generator": {
    toolName: "Password Generator",
    competitors: [
      {
        name: "LastPass Generator",
        url: "https://lastpass.com",
        pros: ["Integrated with password manager", "Auto-save"],
        cons: ["Requires account", "Proprietary", "Cloud-stored"],
      },
      {
        name: "Norton Password Generator",
        url: "https://norton.com",
        pros: ["Trusted brand", "Security-focused"],
        cons: ["Requires software", "Not browser-based", "Tracks usage"],
      },
    ],
    toolboxProAdvantages: [
      "Uses Web Crypto API (cryptographically secure)",
      "No account, no storage, no tracking",
      "Fully customizable length and character sets",
      "Instant generation — no loading",
    ],
  },
  "word-counter": {
    toolName: "Word & Character Counter",
    competitors: [
      {
        name: "WordCounter.net",
        url: "https://wordcounter.net",
        pros: ["Detailed statistics", "Keyword density"],
        cons: ["Heavy ads", "Slow loading", "Tracks usage"],
      },
      {
        name: "Online-Word-Counter",
        url: "https://online-word-counter.com",
        pros: ["Simple interface"],
        cons: ["Limited features", "Ads everywhere", "No reading time estimate"],
      },
    ],
    toolboxProAdvantages: [
      "Clean, ad-free interface",
      "Real-time counting as you type",
      "Reading time and speaking time estimates",
      "Top keyword frequency analysis",
    ],
  },
  "color-converter": {
    toolName: "Color Converter",
    competitors: [
      {
        name: "Color Converter (color-converter.com)",
        url: "https://color-converter.com",
        pros: ["Multiple formats"],
        cons: ["Ads", "No visual picker", "Mobile-unfriendly"],
      },
      {
        name: "W3Schools Color Picker",
        url: "https://w3schools.com/colors/colors_picker.asp",
        pros: ["Educational", "Part of W3Schools"],
        cons: ["Limited formats", "No copy-to-clipboard", "Not a standalone tool"],
      },
    ],
    toolboxProAdvantages: [
      "Visual color picker with instant preview",
      "HEX, RGB, HSL, CMYK, HSV all at once",
      "One-click copy for any format",
      "Works perfectly on mobile",
    ],
  },
  "regex-tester": {
    toolName: "Regex Tester",
    competitors: [
      {
        name: "Regex101",
        url: "https://regex101.com",
        pros: ["Full regex engine", "Community patterns"],
        cons: ["Complex for beginners", "Requires language selection", "Dated interface"],
      },
      {
        name: "RegExr",
        url: "https://regexr.com",
        pros: ["Visual explanation", "Cheatsheet"],
        cons: ["Can be slow with large inputs", "Learning curve"],
      },
    ],
    toolboxProAdvantages: [
      "Simple, beginner-friendly interface",
      "Instant real-time matching",
      "No configuration needed",
      "Mobile-optimized design",
    ],
  },
  "pdf-splitter": {
    toolName: "PDF Splitter",
    competitors: [
      {
        name: "Smallpdf Split",
        url: "https://smallpdf.com/split-pdf",
        pros: ["Visual page selection", "Cloud integration"],
        cons: ["2 free tasks/day", "Uploads to server", "Requires account for full features"],
      },
      {
        name: "iLovePDF Split",
        url: "https://ilovepdf.com/split_pdf",
        pros: ["Multiple split modes"],
        cons: ["File size limits", "Server processing", "Daily limits"],
      },
    ],
    toolboxProAdvantages: [
      "Unlimited splits — no daily limits",
      "Files never leave your browser",
      "Extract specific pages or page ranges",
      "No account required",
    ],
  },
  "image-resizer": {
    toolName: "Image Resizer",
    competitors: [
      {
        name: "ResizeImage.net",
        url: "https://resizeimage.net",
        pros: ["Multiple output formats"],
        cons: ["Slow", "Heavy ads", "Uploads to server"],
      },
      {
        name: "Birme",
        url: "https://birme.net",
        pros: ["Batch resize", "Auto-crop"],
        cons: ["Requires upload", "No privacy guarantee", "Limited free tier"],
      },
    ],
    toolboxProAdvantages: [
      "Resize without uploading — all client-side",
      "Aspect ratio lock to prevent distortion",
      "Preview before downloading",
      "No file size or batch limits",
    ],
  },
  "hash-generator": {
    toolName: "Hash Generator",
    competitors: [
      {
        name: "Online Hash Calculator",
        url: "https://emn178.github.io/online-tools",
        pros: ["Multiple algorithms"],
        cons: ["Dated interface", "No file hashing", "Ads"],
      },
      {
        name: "HashTool",
        url: "https://hashtool.net",
        pros: ["Simple interface"],
        cons: ["Server-side processing", "File upload required", "Limited algorithms"],
      },
    ],
    toolboxProAdvantages: [
      "SHA-256, SHA-384, SHA-512 support",
      "Hash text or files — both supported",
      "Client-side processing for privacy",
      "Instant results with one-click copy",
    ],
  },
};

export function getToolComparison(slug: string): ToolComparison | undefined {
  return comparisons[slug];
}

export function getAllComparisonSlugs(): string[] {
  return Object.keys(comparisons);
}
