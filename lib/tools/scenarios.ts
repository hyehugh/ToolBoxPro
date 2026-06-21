export const toolScenarios: Record<string, { title: string; icon: string; description: string }[]> = {
  "json-formatter": [
    { title: "Debug API Responses", icon: "🔍", description: "Paste raw JSON from APIs to instantly spot syntax errors and validate structure." },
    { title: "Beautify Config Files", icon: "✨", description: "Format minified JSON configs to make them readable and editable." },
    { title: "Compare Data Structures", icon: "📊", description: "Visualize nested JSON objects to understand complex data relationships." },
  ],
  "base64-encode-decode": [
    { title: "Embed Images in HTML", icon: "🖼", description: "Convert images to Base64 strings for inline embedding in emails or HTML." },
    { title: "Transfer Binary Data", icon: "📦", description: "Safely encode binary data as text for transmission over text-only channels." },
    { title: "Decode JWT Payloads", icon: "🔑", description: "Quickly decode Base64-encoded JWT token payloads for debugging." },
  ],
  "regex-tester": [
    { title: "Validate Email Formats", icon: "📧", description: "Test regex patterns against email addresses to ensure correct matching." },
    { title: "Extract Data from Text", icon: "🎯", description: "Build patterns to extract phone numbers, URLs, or custom data from strings." },
    { title: "Refactor Search Patterns", icon: "🔄", description: "Iterate on regex patterns with real-time highlighting before deploying." },
  ],
  "password-generator": [
    { title: "Secure WiFi Passwords", icon: "📶", description: "Generate strong, random passwords for your home or office WiFi network." },
    { title: "Create API Keys", icon: "🗝", description: "Generate cryptographically secure random strings for API authentication." },
    { title: "Test Password Strength", icon: "💪", description: "Create passwords of varying complexity to test your security validation logic." },
  ],
  "image-compressor": [
    { title: "Optimize Blog Images", icon: "📝", description: "Compress screenshots and photos before uploading to reduce page load times." },
    { title: "Email Attachments", icon: "📎", description: "Shrink image file sizes to stay within email attachment limits." },
    { title: "Social Media Uploads", icon: "📱", description: "Reduce file sizes while maintaining quality for faster uploads." },
  ],
  "barcode-generator": [
    { title: "WiFi Sharing", icon: "📶", description: "Create QR codes for WiFi credentials so guests can connect instantly." },
    { title: "Business Cards", icon: "💼", description: "Add QR codes linking to your portfolio or LinkedIn profile." },
    { title: "Event Check-in", icon: "📋", description: "Generate QR codes for event registration or ticket validation." },
  ],
  "color-converter": [
    { title: "Design System Colors", icon: "🎨", description: "Convert between HEX, RGB, and HSL to match design system specifications." },
    { title: "CSS Color Values", icon: "💻", description: "Quickly get the right color format for CSS, Tailwind, or inline styles." },
    { title: "Accessibility Checks", icon: "♿", description: "Convert colors to check contrast ratios for WCAG compliance." },
  ],
  "url-encoder-decoder": [
    { title: "API Query Parameters", icon: "🔗", description: "Encode special characters in URLs for correct API request formatting." },
    { title: "Decode Tracking Links", icon: "🕵", description: "Decode shortened or encoded URLs to see the actual destination." },
    { title: "Form Data Preparation", icon: "📋", description: "Encode form field values for proper HTTP POST request construction." },
  ],
  "word-counter": [
    { title: "Essay Word Limits", icon: "📚", description: "Check word and character counts to meet assignment or submission requirements." },
    { title: "SEO Content Length", icon: "🔎", description: "Verify article length for optimal search engine ranking." },
    { title: "Social Media Limits", icon: "💬", description: "Count characters to stay within platform limits (Twitter, LinkedIn, etc.)." },
  ],
  "uuid-generator": [
    { title: "Database Primary Keys", icon: "🗄", description: "Generate unique identifiers for database records without sequential guessing." },
    { title: "Test Data Creation", icon: "🧪", description: "Bulk generate UUIDs for load testing and data seeding." },
    { title: "Session Tokens", icon: "🎫", description: "Create unique session identifiers for web application authentication." },
  ],
};

export function getToolScenarios(slug: string) {
  return toolScenarios[slug] || [
    { title: "Quick Processing", icon: "⚡", description: "Process data instantly in your browser — no uploads needed." },
    { title: "Privacy-First", icon: "🔒", description: "All processing happens locally. Your data never leaves your device." },
    { title: "No Sign-up Required", icon: "🚀", description: "Start using the tool immediately without creating an account." },
  ];
}
