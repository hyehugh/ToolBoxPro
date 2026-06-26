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
        name: "iLovePDF Split",
        url: "https://ilovepdf.com/split_pdf",
        pros: ["Multiple split modes", "Clean interface"],
        cons: ["File size limits", "Server processing", "Daily limits on free tier"],
      },
    ],
    toolboxProAdvantages: [
      "Unlimited splits — no daily limits",
      "Files never leave your browser",
      "Extract specific pages or ranges",
      "No account required",
    ],
  },
  "image-resizer": {
    toolName: "Image Resizer",
    competitors: [
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
    ],
    toolboxProAdvantages: [
      "SHA-256, SHA-384, SHA-512 support",
      "Hash text or files — both supported",
      "Client-side processing for privacy",
      "Instant results with one-click copy",
    ],
  },
  "uuid-generator": {
    toolName: "UUID Generator",
    competitors: [
      {
        name: "UUIDGenerator.net",
        url: "https://uuidgenerator.net",
        pros: ["Simple interface", "Batch generation"],
        cons: ["Server-side generation", "Ads", "Limited format options"],
      },
    ],
    toolboxProAdvantages: [
      "Generates v4 UUIDs using Web Crypto API",
      "Bulk generation up to 1000 UUIDs",
      "Copy individual or all UUIDs",
      "No data sent to servers",
    ],
  },
  "case-converter": {
    toolName: "Text Case Converter",
    competitors: [
      {
        name: "ConvertCase.net",
        url: "https://convertcase.net",
        pros: ["Multiple case types"],
        cons: ["Heavy ads", "Slow loading", "Server processing"],
      },
    ],
    toolboxProAdvantages: [
      "Instant conversion — no waiting",
      "UPPER, lower, Title, camelCase, snake_case, and more",
      "No ads, no tracking",
      "Works offline after first load",
    ],
  },
  "text-diff-checker": {
    toolName: "Text Diff Checker",
    competitors: [
      {
        name: "DiffChecker.com",
        url: "https://diffchecker.com",
        pros: ["File upload support", "PDF diff"],
        cons: ["Requires account for history", "Server processing", "Limited free features"],
      },
    ],
    toolboxProAdvantages: [
      "No account needed — use immediately",
      "Files never leave your browser",
      "Line-by-line and character-by-character diff",
      "Copy diff results with one click",
    ],
  },
  "css-gradient": {
    toolName: "CSS Gradient Generator",
    competitors: [
      {
        name: "CSSGradient.io",
        url: "https://cssgradient.io",
        pros: ["Visual editor", "Gradient library"],
        cons: ["Complex interface for beginners", "Some features require signup"],
      },
    ],
    toolboxProAdvantages: [
      "Simple, intuitive gradient builder",
      "Linear and radial gradients",
      "Copy CSS with one click",
      "Real-time preview",
    ],
  },
  "csv-viewer": {
    toolName: "CSV Viewer & Formatter",
    competitors: [
      {
        name: "CSVViewer.net",
        url: "https://csvviewer.net",
        pros: ["Basic viewing"],
        cons: ["No editing", "Ads", "Limited format support"],
      },
    ],
    toolboxProAdvantages: [
      "Auto-detect delimiters and encoding",
      "Sort, filter, and search CSV data",
      "Export to different formats",
      "Handles large files efficiently",
    ],
  },
  "lorem-ipsum-generator": {
    toolName: "Lorem Ipsum Generator",
    competitors: [
      {
        name: "Lipsum.com",
        url: "https://lipsum.com",
        pros: ["Classic generator", "Multiple languages"],
        cons: ["Dated design", "Limited customization", "No paragraph control"],
      },
    ],
    toolboxProAdvantages: [
      "Custom paragraph count and word count",
      "Start with or without Lorem ipsum",
      "Include HTML tags option",
      "Copy with one click",
    ],
  },
  "markdown-to-html": {
    toolName: "Markdown to HTML Converter",
    competitors: [
      {
        name: "MarkdownHere",
        url: "https://markdown-here.com",
        pros: ["Browser extension", "Email friendly"],
        cons: ["Requires extension install", "Limited formatting options"],
      },
    ],
    toolboxProAdvantages: [
      "No installation required — browser-based",
      "Real-time preview as you type",
      "Supports GitHub Flavored Markdown",
      "Copy HTML or download as file",
    ],
  },
  "html-entity-converter": {
    toolName: "HTML Entity Converter",
    competitors: [
      {
        name: "FreeFormatter.com",
        url: "https://freeformatter.com/html-entity-encoder.html",
        pros: ["Multiple encoding types"],
        cons: ["Heavy page", "Many ads", "Slow loading"],
      },
    ],
    toolboxProAdvantages: [
      "Instant encode/decode toggle",
      "Handles all HTML entities",
      "Clean, fast interface",
      "One-click copy",
    ],
  },
  "timestamp-converter": {
    toolName: "Timestamp Converter",
    competitors: [
      {
        name: "EpochConverter.com",
        url: "https://epochconverter.com",
        pros: ["Calendar view", "Multiple formats"],
        cons: ["Ads", "Dated design", "Limited timezone support"],
      },
    ],
    toolboxProAdvantages: [
      "Convert timestamp to date and back",
      "Supports multiple date formats",
      "Timezone-aware conversions",
      "No ads, instant results",
    ],
  },
  "jwt-decoder": {
    toolName: "JWT Decoder",
    competitors: [
      {
        name: "jwt.io",
        url: "https://jwt.io",
        pros: ["Industry standard", "Debug features"],
        cons: ["Server-side (sends token)", "Complex interface", "Security concern with sensitive tokens"],
      },
    ],
    toolboxProAdvantages: [
      "100% client-side — token never leaves browser",
      "Clear header/payload/signature display",
      "No security risk for sensitive tokens",
      "Supports all JWT algorithms",
    ],
  },
  "ip-calculator": {
    toolName: "IP Subnet Calculator",
    competitors: [
      {
        name: "ipaddressguide.com",
        url: "https://ipaddressguide.com",
        pros: ["Simple interface"],
        cons: ["IPv4 only", "Ads", "No bulk calculation"],
      },
    ],
    toolboxProAdvantages: [
      "Supports both IPv4 and IPv6",
      "Calculate subnet, broadcast, host range",
      "CIDR notation support",
      "Clean, ad-free interface",
    ],
  },
  "color-picker": {
    toolName: "Color Picker from Image",
    competitors: [
      {
        name: "ColorPicker.com",
        url: "https://colorpicker.com",
        pros: ["Wheel interface"],
        cons: ["No image upload", "Limited export formats"],
      },
    ],
    toolboxProAdvantages: [
      "Pick colors from uploaded images",
      "Get HEX, RGB, HSL values instantly",
      "Zoom into pixels for precise picking",
      "No upload to servers — all local",
    ],
  },
  "dice-roller": {
    toolName: "Dice Roller",
    competitors: [
      {
        name: "DiceRoller.com",
        url: "https://diceroller.com",
        pros: ["Multiple dice types"],
        cons: ["Ads", "No animation", "Limited statistics"],
      },
    ],
    toolboxProAdvantages: [
      "Roll D4, D6, D8, D10, D12, D20",
      "Roll multiple dice at once",
      "Track roll history and statistics",
      "Smooth roll animation",
    ],
  },
  "password-strength": {
    toolName: "Password Strength Checker",
    competitors: [
      {
        name: "HowSecureIsMyPassword.net",
        url: "https://howsecureismypassword.net",
        pros: ["Crack time estimate"],
        cons: ["Sends password to server", "Privacy risk", "Limited analysis"],
      },
    ],
    toolboxProAdvantages: [
      "Password never leaves your browser",
      "Real-time strength analysis",
      "Shows crack time estimate",
      "Suggestions for improvement",
    ],
  },
  "percentage-calculator": {
    toolName: "Percentage Calculator",
    competitors: [
      {
        name: "Calculator.net",
        url: "https://calculator.net/percent-calculator.html",
        pros: ["Multiple calculators"],
        cons: ["Many ads", "Slow page", "Confusing interface"],
      },
    ],
    toolboxProAdvantages: [
      "Calculate percentages, increases, decreases",
      "What-if scenarios",
      "Instant results — no page reload",
      "Clean, focused interface",
    ],
  },
  "bmi-calculator": {
    toolName: "BMI Calculator",
    competitors: [
      {
        name: "CDC BMI Calculator",
        url: "https://cdc.gov/bmi",
        pros: ["Government source", "Reliable"],
        cons: ["Basic interface", "US-centric", "No history tracking"],
      },
    ],
    toolboxProAdvantages: [
      "Metric and Imperial units",
      "Health category with recommendations",
      "Clean, modern interface",
      "Mobile-friendly design",
    ],
  },
  "dns-lookup": {
    toolName: "DNS Lookup",
    competitors: [
      {
        name: "MXToolbox",
        url: "https://mxtoolbox.com",
        pros: ["Comprehensive tools", "Email diagnostics"],
        cons: ["Rate limits", "Requires signup for full features", "Server-side"],
      },
    ],
    toolboxProAdvantages: [
      "Query A, AAAA, MX, NS, TXT, CAA, SOA records",
      "No rate limits",
      "No account required",
      "Instant results",
    ],
  },
};

export function getToolComparison(slug: string): ToolComparison | undefined {
  return comparisons[slug];
}

export function getAllComparisonSlugs(): string[] {
  return Object.keys(comparisons);
}
