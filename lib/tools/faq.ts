/**
 * FAQ data for tool pages.
 * Each tool can have 3-5 common questions with answers.
 * Used for both the visible FAQ section and FAQ Schema (JSON-LD).
 */
export interface FaqItem {
  question: string;
  questionZh: string;
  answer: string;
  answerZh: string;
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
      { question: "What is a JSON formatter?", questionZh: "什么是 JSON 格式化工具？", answer: "A JSON formatter is an online tool that automatically formats, validates, and beautifies JSON data. It fixes syntax errors, adds proper indentation, and makes your JSON readable.", answerZh: "JSON 格式化工具是一个在线工具，可以自动格式化、验证和美化 JSON 数据。它能修复语法错误、添加正确的缩进，使你的 JSON 更易读。" },
      { question: "Is this JSON formatter free to use?", questionZh: "JSON 格式化工具是免费的吗？", answer: "Yes, ToolboxPro's JSON formatter is completely free. No signup required, and all processing happens in your browser — your data never leaves your device.", answerZh: "是的，ToolboxPro 的 JSON 格式化工具完全免费。无需注册，所有处理都在浏览器中完成——您的数据不会离开您的设备。" },
      { question: "Can the JSON formatter fix syntax errors?", questionZh: "JSON 格式化工具能修复语法错误吗？", answer: "Yes. The formatter detects common JSON errors like missing commas, trailing commas, unquoted keys, and mismatched brackets, then highlights the exact location of each error.", answerZh: "可以。格式化器会检测常见的 JSON 错误，如缺少逗号、尾随逗号、未加引号的键和不匹配的括号，并高亮显示每个错误的精确位置。" },
    ],
  },
  {
    slug: "base64-encode-decode",
    faqs: [
      { question: "What is Base64 encoding?", questionZh: "什么是 Base64 编码？", answer: "Base64 encoding converts binary data into a text format using 64 ASCII characters. It's commonly used for embedding images in HTML/CSS, transmitting data over email, and API authentication tokens.", answerZh: "Base64 编码将二进制数据转换为使用 64 个 ASCII 字符的文本格式。常用于在 HTML/CSS 中嵌入图片、通过电子邮件传输数据以及 API 认证令牌。" },
      { question: "Is Base64 the same as encryption?", questionZh: "Base64 和加密是一样的吗？", answer: "No. Base64 is encoding, not encryption. It's easily reversible and provides no security. Anyone can decode Base64 text back to the original data.", answerZh: "不是。Base64 是编码，不是加密。它很容易逆向还原，不提供任何安全性。任何人都可以将 Base64 文本解码回原始数据。" },
      { question: "What file types can I encode to Base64?", questionZh: "哪些文件类型可以编码为 Base64？", answer: "You can encode any file type including images (PNG, JPG, GIF), documents (PDF, TXT), and binary files. The tool accepts text input and file uploads.", answerZh: "您可以编码任何文件类型，包括图片（PNG、JPG、GIF）、文档（PDF、TXT）和二进制文件。该工具接受文本输入和文件上传。" },
    ],
  },
  {
    slug: "regex-tester",
    faqs: [
      { question: "What is a regex tester?", questionZh: "什么是正则表达式测试器？", answer: "A regex tester lets you test regular expressions against sample text in real-time. It highlights matches, shows capture groups, and helps you build and debug regex patterns.", answerZh: "正则表达式测试器让您实时对示例文本测试正则表达式。它会高亮显示匹配项、显示捕获组，帮助您构建和调试正则表达式模式。" },
      { question: "Which regex flavor does this tool support?", questionZh: "此工具支持哪种正则表达式语法？", answer: "The tool supports JavaScript regex syntax, which covers most common use cases including lookaheads, backreferences, and character classes.", answerZh: "该工具支持 JavaScript 正则表达式语法，涵盖大多数常见用例，包括前瞻断言、反向引用和字符类。" },
    ],
  },
  {
    slug: "color-converter",
    faqs: [
      { question: "What color formats can I convert between?", questionZh: "可以在哪些颜色格式之间转换？", answer: "You can convert between HEX, RGB, HSL, CMYK, and HSV color formats. Simply enter a color value in any format and see instant conversions to all others.", answerZh: "您可以在 HEX、RGB、HSL、CMYK 和 HSV 颜色格式之间转换。只需以任何格式输入颜色值，即可立即看到所有其他格式的转换结果。" },
      { question: "Can I pick colors visually?", questionZh: "可以直观地选择颜色吗？", answer: "Yes. The color picker lets you select colors visually and automatically shows the converted values in all formats.", answerZh: "可以。颜色选择器让您直观地选择颜色，并自动显示所有格式的转换值。" },
    ],
  },
  {
    slug: "password-generator",
    faqs: [
      { question: "How secure are the generated passwords?", questionZh: "生成的密码有多安全？", answer: "The passwords are generated using the browser's cryptographically secure random number generator (Web Crypto API). They are truly random and suitable for any security-sensitive application.", answerZh: "密码使用浏览器的密码学安全随机数生成器（Web Crypto API）生成。它们是真正随机的，适用于任何安全性要求高的应用。" },
      { question: "Can I customize the password criteria?", questionZh: "可以自定义密码规则吗？", answer: "Yes. You can set the password length and choose to include/exclude uppercase letters, lowercase letters, numbers, and special characters.", answerZh: "可以。您可以设置密码长度，并选择包含/排除大写字母、小写字母、数字和特殊字符。" },
      { question: "Are generated passwords stored anywhere?", questionZh: "生成的密码会被存储吗？", answer: "No. All generation happens locally in your browser. No passwords are sent to any server or stored in any database.", answerZh: "不会。所有生成过程都在您的浏览器本地完成。密码不会发送到任何服务器或存储在任何数据库中。" },
    ],
  },
  {
    slug: "uuid-generator",
    faqs: [
      { question: "What is a UUID?", questionZh: "什么是 UUID？", answer: "A UUID (Universally Unique Identifier) is a 128-bit number used to uniquely identify information in computer systems. UUIDs are formatted as 32 hexadecimal digits with hyphens.", answerZh: "UUID（通用唯一标识符）是用于在计算机系统中唯一标识信息的 128 位数字。UUID 格式为 32 个十六进制数字加连字符。" },
      { question: "Which UUID version does this tool generate?", questionZh: "此工具生成哪种版本的 UUID？", answer: "The tool generates UUID v4, which uses random numbers. This is the most commonly used version for applications requiring unique identifiers.", answerZh: "该工具生成 UUID v4，使用随机数。这是需要唯一标识符的应用中最常用的版本。" },
    ],
  },
  {
    slug: "word-counter",
    faqs: [
      { question: "What does the word counter count?", questionZh: "字数统计器统计哪些内容？", answer: "The word counter counts words, characters (with and without spaces), sentences, paragraphs, and estimated reading time. It updates in real-time as you type or paste text.", answerZh: "字数统计器统计字数、字符数（含/不含空格）、句子数、段落数和预计阅读时间。在您输入或粘贴文本时实时更新。" },
      { question: "Does it count Chinese characters correctly?", questionZh: "能正确统计中文字符吗？", answer: "Yes. The word counter handles both English words and Chinese/Japanese/Korean characters, counting each character as a word where appropriate.", answerZh: "可以。字数统计器能正确处理英文单词和中日韩字符，在适当情况下将每个字符计为一个词。" },
    ],
  },
  {
    slug: "timestamp-converter",
    faqs: [
      { question: "What timestamp formats are supported?", questionZh: "支持哪些时间戳格式？", answer: "The tool converts between Unix timestamps (seconds and milliseconds), ISO 8601 format, and human-readable date strings. It supports all common date formats.", answerZh: "该工具可在 Unix 时间戳（秒和毫秒）、ISO 8601 格式和可读日期字符串之间转换。支持所有常见日期格式。" },
      { question: "What is the current Unix timestamp?", questionZh: "当前 Unix 时间戳是多少？", answer: "You can see the live current timestamp at the top of the page. It updates every second.", answerZh: "您可以在页面顶部看到实时当前时间戳，每秒更新。" },
    ],
  },
  {
    slug: "image-compressor",
    faqs: [
      { question: "How much can I compress my images?", questionZh: "图片能压缩多少？", answer: "Compression rates vary by image type and quality setting. Typical reductions are 30-80% for JPEG images and 20-60% for PNG images with minimal visible quality loss.", answerZh: "压缩率因图片类型和质量设置而异。JPEG 图片通常可减少 30-80%，PNG 图片可减少 20-60%，且肉眼几乎看不到画质损失。" },
      { question: "Are my images uploaded to a server?", questionZh: "我的图片会上传到服务器吗？", answer: "No. All compression happens in your browser using client-side JavaScript. Your images never leave your device.", answerZh: "不会。所有压缩都在浏览器中使用客户端 JavaScript 完成。您的图片不会离开您的设备。" },
      { question: "What image formats are supported?", questionZh: "支持哪些图片格式？", answer: "The tool supports JPEG, PNG, WebP, and GIF input formats. You can output to JPEG, PNG, or WebP.", answerZh: "该工具支持 JPEG、PNG、WebP 和 GIF 输入格式。您可以输出为 JPEG、PNG 或 WebP。" },
    ],
  },
  {
    slug: "pdf-merger",
    faqs: [
      { question: "Is there a file size limit?", questionZh: "有文件大小限制吗？", answer: "The tool handles PDFs entirely in your browser, so limits depend on your device's memory. For most users, files up to 100MB per PDF work without issues.", answerZh: "该工具完全在浏览器中处理 PDF，因此限制取决于您设备的内存。对于大多数用户，每个 PDF 最多 100MB 都能正常工作。" },
      { question: "Can I reorder pages before merging?", questionZh: "合并前可以重新排列页面吗？", answer: "Yes. You can drag and drop to reorder PDF files before merging them into a single document.", answerZh: "可以。在合并为单个文档之前，您可以通过拖放重新排列 PDF 文件顺序。" },
      { question: "Are my PDF files uploaded?", questionZh: "我的 PDF 文件会被上传吗？", answer: "No. All processing happens locally in your browser. Your PDF files never leave your device.", answerZh: "不会。所有处理都在浏览器本地完成。您的 PDF 文件不会离开您的设备。" },
    ],
  },
  {
    slug: "barcode-generator",
    faqs: [
      { question: "What data can I encode in a QR code?", questionZh: "二维码中可以编码哪些数据？", answer: "You can encode text, URLs, email addresses, phone numbers, WiFi credentials, and contact information. The tool supports multiple QR code data types.", answerZh: "您可以编码文本、URL、电子邮件地址、电话号码、WiFi 凭据和联系信息。该工具支持多种二维码数据类型。" },
      { question: "Can I customize the QR code appearance?", questionZh: "可以自定义二维码外观吗？", answer: "Yes. You can change the colors, size, and error correction level. Higher error correction makes the QR code more resilient to damage.", answerZh: "可以。您可以更改颜色、大小和纠错级别。更高的纠错级别使二维码更耐损坏。" },
    ],
  },
  {
    slug: "dns-lookup",
    faqs: [
      { question: "What DNS records can I look up?", questionZh: "可以查询哪些 DNS 记录？", answer: "The tool supports A, AAAA, CNAME, MX, NS, TXT, SOA, and SRV records. You can query any domain's DNS configuration.", answerZh: "该工具支持 A、AAAA、CNAME、MX、NS、TXT、SOA 和 SRV 记录。您可以查询任何域名的 DNS 配置。" },
      { question: "Is the DNS lookup real-time?", questionZh: "DNS 查询是实时的吗？", answer: "Yes. Results are fetched in real-time from public DNS resolvers, showing the current DNS configuration for the domain.", answerZh: "是的。结果从公共 DNS 解析器实时获取，显示域名的当前 DNS 配置。" },
    ],
  },
  {
    slug: "whois-lookup",
    faqs: [
      { question: "What information does a WHOIS lookup provide?", questionZh: "WHOIS 查询提供哪些信息？", answer: "WHOIS lookups reveal domain registration details including registrar, registration date, expiration date, name servers, and registrant contact information (when available).", answerZh: "WHOIS 查询揭示域名注册详细信息，包括注册商、注册日期、过期日期、域名服务器和注册人联系信息（如果可用）。" },
      { question: "Can I look up any domain?", questionZh: "可以查询任何域名吗？", answer: "Yes. You can look up any registered domain name. Note that some registrars offer privacy protection that hides personal information.", answerZh: "可以。您可以查询任何已注册的域名。请注意，一些注册商提供隐私保护功能，会隐藏个人信息。" },
    ],
  },
  {
    slug: "hash-generator",
    faqs: [
      { question: "What hash algorithms are supported?", questionZh: "支持哪些哈希算法？", answer: "The tool supports MD5, SHA-1, SHA-256, SHA-384, and SHA-512 hash algorithms. SHA-256 and above are recommended for security-sensitive applications.", answerZh: "该工具支持 MD5、SHA-1、SHA-256、SHA-384 和 SHA-512 哈希算法。对于安全性要求高的应用，建议使用 SHA-256 及以上。" },
      { question: "Can I verify a hash value?", questionZh: "可以验证哈希值吗？", answer: "Yes. You can paste a hash value and compare it against the generated hash to verify data integrity.", answerZh: "可以。您可以粘贴哈希值并与生成的哈希进行比较，以验证数据完整性。" },
    ],
  },
  {
    slug: "case-converter",
    faqs: [
      { question: "What case formats are supported?", questionZh: "支持哪些大小写格式？", answer: "The tool supports lowercase, UPPERCASE, Title Case, Sentence case, camelCase, PascalCase, and snake_case conversions.", answerZh: "该工具支持小写、大写、标题格式、句子格式、驼峰式、帕斯卡式和蛇形式转换。" },
      { question: "Can I convert large blocks of text?", questionZh: "可以转换大段文本吗？", answer: "Yes. There's no practical text length limit. You can paste entire documents and convert the case instantly.", answerZh: "可以。没有实际的文本长度限制。您可以粘贴整个文档并即时转换大小写。" },
    ],
  },
  {
    slug: "markdown-to-html",
    faqs: [
      { question: "What Markdown features are supported?", questionZh: "支持哪些 Markdown 功能？", answer: "The tool supports headings, bold, italic, links, images, code blocks, lists, tables, blockquotes, and horizontal rules — essentially all standard Markdown syntax.", answerZh: "该工具支持标题、粗体、斜体、链接、图片、代码块、列表、表格、引用和水平线——基本上所有标准 Markdown 语法。" },
      { question: "Can I preview the HTML output?", questionZh: "可以预览 HTML 输出吗？", answer: "Yes. The tool shows both the generated HTML code and a live preview of how it renders.", answerZh: "可以。该工具同时显示生成的 HTML 代码和渲染效果的实时预览。" },
    ],
  },
  {
    slug: "sql-formatter",
    faqs: [
      { question: "Which SQL dialects are supported?", questionZh: "支持哪些 SQL 方言？", answer: "The formatter handles standard SQL syntax including SELECT, INSERT, UPDATE, DELETE, JOIN, and subqueries. It works with MySQL, PostgreSQL, SQLite, and SQL Server syntax.", answerZh: "格式化器处理标准 SQL 语法，包括 SELECT、INSERT、UPDATE、DELETE、JOIN 和子查询。适用于 MySQL、PostgreSQL、SQLite 和 SQL Server 语法。" },
    ],
  },
  {
    slug: "csv-viewer",
    faqs: [
      { question: "What CSV features are supported?", questionZh: "支持哪些 CSV 功能？", answer: "The viewer handles quoted fields, different delimiters (comma, semicolon, tab), and various encodings. It displays data in a sortable, searchable table.", answerZh: "查看器处理带引号的字段、不同的分隔符（逗号、分号、制表符）和各种编码。它以可排序、可搜索的表格显示数据。" },
    ],
  },
  {
    slug: "url-encoder-decoder",
    faqs: [
      { question: "When do I need URL encoding?", questionZh: "什么时候需要 URL 编码？", answer: "URL encoding is needed when URLs contain special characters (spaces, symbols, non-ASCII characters) that aren't safe in URLs. It converts these to percent-encoded format (e.g., space → %20).", answerZh: "当 URL 包含特殊字符（空格、符号、非 ASCII 字符）在 URL 中不安全时，需要 URL 编码。它将这些字符转换为百分号编码格式（例如空格 → %20）。" },
    ],
  },
  {
    slug: "jwt-decoder",
    faqs: [
      { question: "What is a JWT?", questionZh: "什么是 JWT？", answer: "JWT (JSON Web Token) is a compact, URL-safe token format used for authentication and information exchange. It consists of three parts: header, payload, and signature.", answerZh: "JWT（JSON Web Token）是一种紧凑的、URL 安全的令牌格式，用于身份验证和信息交换。它由三部分组成：头部、载荷和签名。" },
      { question: "Can this tool verify JWT signatures?", questionZh: "此工具可以验证 JWT 签名吗？", answer: "No. This tool decodes JWT payloads for inspection. Signature verification requires the secret key, which should never be shared.", answerZh: "不能。此工具解码 JWT 载荷用于检查。签名验证需要密钥，密钥绝不应共享。" },
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
