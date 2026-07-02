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
  {
    slug: "number-base-converter",
    faqs: [
      { question: "What is Number Base Converter?", questionZh: "什么是Number Base Converter？", answer: "Number Base Converter is Convert between binary, octal, decimal, and hexadecimal. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Number Base Converter是一个Convert between binary, octal, decimal, and hexadecimal。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Number Base Converter free to use?", questionZh: "Number Base Converter是免费的吗？", answer: "Yes, Number Base Converter is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Number Base Converter完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "What formats does the Number Base Converter support?", questionZh: "Number Base Converter支持哪些格式？", answer: "The Number Base Converter supports all common formats relevant to its function. All conversion happens instantly in your browser with no file uploads required.", answerZh: "Number Base Converter支持与其功能相关的所有常见格式。所有转换都在浏览器中即时完成，无需上传文件。" },
    ],
  },
  {
    slug: "image-converter",
    faqs: [
      { question: "What is Image Format Converter?", questionZh: "什么是Image Format Converter？", answer: "Image Format Converter is Convert images between JPG, PNG, WebP, AVIF, GIF, and BMP formats. Batch convert with custom quality and dimension settings.. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Image Format Converter是一个Convert images between JPG, PNG, WebP, AVIF, GIF, and BMP formats. Batch convert with custom quality and dimension settings.。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Image Format Converter free to use?", questionZh: "Image Format Converter是免费的吗？", answer: "Yes, Image Format Converter is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Image Format Converter完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "What formats does the Image Format Converter support?", questionZh: "Image Format Converter支持哪些格式？", answer: "The Image Format Converter supports all common formats relevant to its function. All conversion happens instantly in your browser with no file uploads required.", answerZh: "Image Format Converter支持与其功能相关的所有常见格式。所有转换都在浏览器中即时完成，无需上传文件。" },
    ],
  },
  {
    slug: "lorem-ipsum-generator",
    faqs: [
      { question: "What is Lorem Ipsum Generator?", questionZh: "什么是Lorem Ipsum Generator？", answer: "Lorem Ipsum Generator is Generate placeholder text for design mockups, website wireframes, and print layouts. Customize paragraph count, word length, and format.. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Lorem Ipsum Generator是一个Generate placeholder text for design mockups, website wireframes, and print layouts. Customize paragraph count, word length, and format.。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Lorem Ipsum Generator free to use?", questionZh: "Lorem Ipsum Generator是免费的吗？", answer: "Yes, Lorem Ipsum Generator is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Lorem Ipsum Generator完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Do I need to install anything to use the Lorem Ipsum Generator?", questionZh: "使用Lorem Ipsum Generator需要安装什么吗？", answer: "No installation needed. The Lorem Ipsum Generator runs entirely in your web browser. Just visit the page and start using it immediately on any device.", answerZh: "无需安装。Lorem Ipsum Generator完全在您的网络浏览器中运行。只需访问页面即可在任何设备上立即使用。" },
    ],
  },
  {
    slug: "text-diff-checker",
    faqs: [
      { question: "What is Text Diff Checker?", questionZh: "什么是Text Diff Checker？", answer: "Text Diff Checker is Compare two blocks of text side by side and highlight every difference. Perfect for code reviews, document revisions, and plagiarism checks.. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Text Diff Checker是一个Compare two blocks of text side by side and highlight every difference. Perfect for code reviews, document revisions, and plagiarism checks.。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Text Diff Checker free to use?", questionZh: "Text Diff Checker是免费的吗？", answer: "Yes, Text Diff Checker is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Text Diff Checker完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Is my data safe when using the Text Diff Checker?", questionZh: "使用Text Diff Checker时我的数据安全吗？", answer: "Yes, completely safe. The Text Diff Checker processes all data locally in your browser. Nothing is uploaded to any server, making it safe for sensitive information.", answerZh: "完全安全。Text Diff Checker在浏览器本地处理所有数据，不上传到任何服务器，适合处理敏感信息。" },
    ],
  },
  {
    slug: "text-repeater",
    faqs: [
      { question: "What is Text Repeater?", questionZh: "什么是Text Repeater？", answer: "Text Repeater is Repeat any text multiple times with custom separators, line breaks, or prefixes. Generate test data, patterns, and repeated strings instantly.. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Text Repeater是一个Repeat any text multiple times with custom separators, line breaks, or prefixes. Generate test data, patterns, and repeated strings instantly.。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Text Repeater free to use?", questionZh: "Text Repeater是免费的吗？", answer: "Yes, Text Repeater is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Text Repeater完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the Text Repeater on mobile?", questionZh: "可以在手机上使用Text Repeater吗？", answer: "Yes, the Text Repeater is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，Text Repeater完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "html-entity-converter",
    faqs: [
      { question: "What is HTML Entity Converter?", questionZh: "什么是HTML Entity Converter？", answer: "HTML Entity Converter is Encode and decode HTML entities like &amp; and &lt;. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "HTML Entity Converter是一个Encode and decode HTML entities like &amp; and &lt;。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is HTML Entity Converter free to use?", questionZh: "HTML Entity Converter是免费的吗？", answer: "Yes, HTML Entity Converter is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，HTML Entity Converter完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "What formats does the HTML Entity Converter support?", questionZh: "HTML Entity Converter支持哪些格式？", answer: "The HTML Entity Converter supports all common formats relevant to its function. All conversion happens instantly in your browser with no file uploads required.", answerZh: "HTML Entity Converter支持与其功能相关的所有常见格式。所有转换都在浏览器中即时完成，无需上传文件。" },
    ],
  },
  {
    slug: "css-minifier",
    faqs: [
      { question: "What is CSS Minifier?", questionZh: "什么是CSS Minifier？", answer: "CSS Minifier is Minify and compress CSS code to reduce file size and improve page load speed. Remove whitespace, comments, and redundant rules safely.. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "CSS Minifier是一个Minify and compress CSS code to reduce file size and improve page load speed. Remove whitespace, comments, and redundant rules safely.。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is CSS Minifier free to use?", questionZh: "CSS Minifier是免费的吗？", answer: "Yes, CSS Minifier is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，CSS Minifier完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the CSS Minifier on mobile?", questionZh: "可以在手机上使用CSS Minifier吗？", answer: "Yes, the CSS Minifier is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，CSS Minifier完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "json-to-yaml",
    faqs: [
      { question: "What is JSON to YAML Converter?", questionZh: "什么是JSON to YAML Converter？", answer: "JSON to YAML Converter is Convert JSON data to clean YAML format and vice versa. Preserve nested structures, arrays, and data types during conversion.. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "JSON to YAML Converter是一个Convert JSON data to clean YAML format and vice versa. Preserve nested structures, arrays, and data types during conversion.。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is JSON to YAML Converter free to use?", questionZh: "JSON to YAML Converter是免费的吗？", answer: "Yes, JSON to YAML Converter is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，JSON to YAML Converter完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the JSON to YAML Converter on mobile?", questionZh: "可以在手机上使用JSON to YAML Converter吗？", answer: "Yes, the JSON to YAML Converter is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，JSON to YAML Converter完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "string-escaper",
    faqs: [
      { question: "What is String Escaper/Unescaper?", questionZh: "什么是String Escaper/Unescaper？", answer: "String Escaper/Unescaper is Escape and unescape special characters in strings for JSON, HTML, URLs, SQL, and JavaScript. Handle all common escaping formats.. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "String Escaper/Unescaper是一个Escape and unescape special characters in strings for JSON, HTML, URLs, SQL, and JavaScript. Handle all common escaping formats.。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is String Escaper/Unescaper free to use?", questionZh: "String Escaper/Unescaper是免费的吗？", answer: "Yes, String Escaper/Unescaper is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，String Escaper/Unescaper完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the String Escaper/Unescaper on mobile?", questionZh: "可以在手机上使用String Escaper/Unescaper吗？", answer: "Yes, the String Escaper/Unescaper is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，String Escaper/Unescaper完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "html-tag-stripper",
    faqs: [
      { question: "What is HTML Tag Stripper?", questionZh: "什么是HTML Tag Stripper？", answer: "HTML Tag Stripper is Remove all HTML tags from text, keeping only content. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "HTML Tag Stripper是一个Remove all HTML tags from text, keeping only content。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is HTML Tag Stripper free to use?", questionZh: "HTML Tag Stripper是免费的吗？", answer: "Yes, HTML Tag Stripper is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，HTML Tag Stripper完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the HTML Tag Stripper on mobile?", questionZh: "可以在手机上使用HTML Tag Stripper吗？", answer: "Yes, the HTML Tag Stripper is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，HTML Tag Stripper完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "cron-parser",
    faqs: [
      { question: "What is Cron Expression Parser?", questionZh: "什么是Cron Expression Parser？", answer: "Cron Expression Parser is Parse cron expressions and get human-readable schedules. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Cron Expression Parser是一个Parse cron expressions and get human-readable schedules。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Cron Expression Parser free to use?", questionZh: "Cron Expression Parser是免费的吗？", answer: "Yes, Cron Expression Parser is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Cron Expression Parser完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the Cron Expression Parser on mobile?", questionZh: "可以在手机上使用Cron Expression Parser吗？", answer: "Yes, the Cron Expression Parser is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，Cron Expression Parser完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "text-to-binary",
    faqs: [
      { question: "What is Text to Binary Converter?", questionZh: "什么是Text to Binary Converter？", answer: "Text to Binary Converter is Convert text to binary code and binary back to text. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Text to Binary Converter是一个Convert text to binary code and binary back to text。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Text to Binary Converter free to use?", questionZh: "Text to Binary Converter是免费的吗？", answer: "Yes, Text to Binary Converter is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Text to Binary Converter完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the Text to Binary Converter on mobile?", questionZh: "可以在手机上使用Text to Binary Converter吗？", answer: "Yes, the Text to Binary Converter is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，Text to Binary Converter完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "html-preview",
    faqs: [
      { question: "What is HTML Preview?", questionZh: "什么是HTML Preview？", answer: "HTML Preview is Write and preview HTML code in real-time in a sandbox. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "HTML Preview是一个Write and preview HTML code in real-time in a sandbox。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is HTML Preview free to use?", questionZh: "HTML Preview是免费的吗？", answer: "Yes, HTML Preview is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，HTML Preview完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the HTML Preview on mobile?", questionZh: "可以在手机上使用HTML Preview吗？", answer: "Yes, the HTML Preview is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，HTML Preview完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "ip-calculator",
    faqs: [
      { question: "What is IP Subnet Calculator?", questionZh: "什么是IP Subnet Calculator？", answer: "IP Subnet Calculator is Calculate network subnet, CIDR, broadcast, and host range. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "IP Subnet Calculator是一个Calculate network subnet, CIDR, broadcast, and host range。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is IP Subnet Calculator free to use?", questionZh: "IP Subnet Calculator是免费的吗？", answer: "Yes, IP Subnet Calculator is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，IP Subnet Calculator完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the IP Subnet Calculator on mobile?", questionZh: "可以在手机上使用IP Subnet Calculator吗？", answer: "Yes, the IP Subnet Calculator is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，IP Subnet Calculator完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "jwt-generator",
    faqs: [
      { question: "What is JWT Generator?", questionZh: "什么是JWT Generator？", answer: "JWT Generator is Generate JWT tokens with custom header and payload. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "JWT Generator是一个Generate JWT tokens with custom header and payload。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is JWT Generator free to use?", questionZh: "JWT Generator是免费的吗？", answer: "Yes, JWT Generator is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，JWT Generator完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Do I need to install anything to use the JWT Generator?", questionZh: "使用JWT Generator需要安装什么吗？", answer: "No installation needed. The JWT Generator runs entirely in your web browser. Just visit the page and start using it immediately on any device.", answerZh: "无需安装。JWT Generator完全在您的网络浏览器中运行。只需访问页面即可在任何设备上立即使用。" },
    ],
  },
  {
    slug: "text-to-slug",
    faqs: [
      { question: "What is Text to URL Slug?", questionZh: "什么是Text to URL Slug？", answer: "Text to URL Slug is Convert any text into clean, SEO-friendly URL slugs. Remove special characters, normalize spaces, and generate optimized permalinks.. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Text to URL Slug是一个Convert any text into clean, SEO-friendly URL slugs. Remove special characters, normalize spaces, and generate optimized permalinks.。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Text to URL Slug free to use?", questionZh: "Text to URL Slug是免费的吗？", answer: "Yes, Text to URL Slug is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Text to URL Slug完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the Text to URL Slug on mobile?", questionZh: "可以在手机上使用Text to URL Slug吗？", answer: "Yes, the Text to URL Slug is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，Text to URL Slug完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "text-sorter",
    faqs: [
      { question: "What is Text Sorter?", questionZh: "什么是Text Sorter？", answer: "Text Sorter is Sort text lines alphabetically (A-Z or Z-A), by line length, or in reverse order. Remove duplicates and organize lists instantly.. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Text Sorter是一个Sort text lines alphabetically (A-Z or Z-A), by line length, or in reverse order. Remove duplicates and organize lists instantly.。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Text Sorter free to use?", questionZh: "Text Sorter是免费的吗？", answer: "Yes, Text Sorter is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Text Sorter完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the Text Sorter on mobile?", questionZh: "可以在手机上使用Text Sorter吗？", answer: "Yes, the Text Sorter is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，Text Sorter完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "text-deduplicator",
    faqs: [
      { question: "What is Line Deduplicator?", questionZh: "什么是Line Deduplicator？", answer: "Line Deduplicator is Remove duplicate lines from text while preserving order. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Line Deduplicator是一个Remove duplicate lines from text while preserving order。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Line Deduplicator free to use?", questionZh: "Line Deduplicator是免费的吗？", answer: "Yes, Line Deduplicator is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Line Deduplicator完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the Line Deduplicator on mobile?", questionZh: "可以在手机上使用Line Deduplicator吗？", answer: "Yes, the Line Deduplicator is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，Line Deduplicator完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "text-reverser",
    faqs: [
      { question: "What is Text Reverser?", questionZh: "什么是Text Reverser？", answer: "Text Reverser is Reverse text, words, sentences, or entire lines instantly. Useful for creating mirrored text, solving puzzles, or formatting data.. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Text Reverser是一个Reverse text, words, sentences, or entire lines instantly. Useful for creating mirrored text, solving puzzles, or formatting data.。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Text Reverser free to use?", questionZh: "Text Reverser是免费的吗？", answer: "Yes, Text Reverser is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Text Reverser完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the Text Reverser on mobile?", questionZh: "可以在手机上使用Text Reverser吗？", answer: "Yes, the Text Reverser is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，Text Reverser完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "random-string-generator",
    faqs: [
      { question: "What is Random String Generator?", questionZh: "什么是Random String Generator？", answer: "Random String Generator is Generate random strings with custom characters and length. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Random String Generator是一个Generate random strings with custom characters and length。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Random String Generator free to use?", questionZh: "Random String Generator是免费的吗？", answer: "Yes, Random String Generator is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Random String Generator完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Do I need to install anything to use the Random String Generator?", questionZh: "使用Random String Generator需要安装什么吗？", answer: "No installation needed. The Random String Generator runs entirely in your web browser. Just visit the page and start using it immediately on any device.", answerZh: "无需安装。Random String Generator完全在您的网络浏览器中运行。只需访问页面即可在任何设备上立即使用。" },
    ],
  },
  {
    slug: "palindrome-checker",
    faqs: [
      { question: "What is Palindrome Checker?", questionZh: "什么是Palindrome Checker？", answer: "Palindrome Checker is Check if text reads the same forwards and backwards. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Palindrome Checker是一个Check if text reads the same forwards and backwards。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Palindrome Checker free to use?", questionZh: "Palindrome Checker是免费的吗？", answer: "Yes, Palindrome Checker is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Palindrome Checker完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Is my data safe when using the Palindrome Checker?", questionZh: "使用Palindrome Checker时我的数据安全吗？", answer: "Yes, completely safe. The Palindrome Checker processes all data locally in your browser. Nothing is uploaded to any server, making it safe for sensitive information.", answerZh: "完全安全。Palindrome Checker在浏览器本地处理所有数据，不上传到任何服务器，适合处理敏感信息。" },
    ],
  },
  {
    slug: "morse-code-converter",
    faqs: [
      { question: "What is Morse Code Converter?", questionZh: "什么是Morse Code Converter？", answer: "Morse Code Converter is Convert text to Morse code and decode Morse code back to readable text. Learn Morse alphabet with visual audio playback support.. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Morse Code Converter是一个Convert text to Morse code and decode Morse code back to readable text. Learn Morse alphabet with visual audio playback support.。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Morse Code Converter free to use?", questionZh: "Morse Code Converter是免费的吗？", answer: "Yes, Morse Code Converter is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Morse Code Converter完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "What formats does the Morse Code Converter support?", questionZh: "Morse Code Converter支持哪些格式？", answer: "The Morse Code Converter supports all common formats relevant to its function. All conversion happens instantly in your browser with no file uploads required.", answerZh: "Morse Code Converter支持与其功能相关的所有常见格式。所有转换都在浏览器中即时完成，无需上传文件。" },
    ],
  },
  {
    slug: "temperature-converter",
    faqs: [
      { question: "What is Temperature Converter?", questionZh: "什么是Temperature Converter？", answer: "Temperature Converter is Convert temperatures between Celsius, Fahrenheit, and Kelvin scales instantly. Perfect for cooking, science, weather, and travel calculations.. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Temperature Converter是一个Convert temperatures between Celsius, Fahrenheit, and Kelvin scales instantly. Perfect for cooking, science, weather, and travel calculations.。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Temperature Converter free to use?", questionZh: "Temperature Converter是免费的吗？", answer: "Yes, Temperature Converter is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Temperature Converter完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "What formats does the Temperature Converter support?", questionZh: "Temperature Converter支持哪些格式？", answer: "The Temperature Converter supports all common formats relevant to its function. All conversion happens instantly in your browser with no file uploads required.", answerZh: "Temperature Converter支持与其功能相关的所有常见格式。所有转换都在浏览器中即时完成，无需上传文件。" },
    ],
  },
  {
    slug: "weight-converter",
    faqs: [
      { question: "What is Weight Converter?", questionZh: "什么是Weight Converter？", answer: "Weight Converter is Convert between kilograms, pounds, ounces, and more. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Weight Converter是一个Convert between kilograms, pounds, ounces, and more。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Weight Converter free to use?", questionZh: "Weight Converter是免费的吗？", answer: "Yes, Weight Converter is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Weight Converter完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "What formats does the Weight Converter support?", questionZh: "Weight Converter支持哪些格式？", answer: "The Weight Converter supports all common formats relevant to its function. All conversion happens instantly in your browser with no file uploads required.", answerZh: "Weight Converter支持与其功能相关的所有常见格式。所有转换都在浏览器中即时完成，无需上传文件。" },
    ],
  },
  {
    slug: "length-converter",
    faqs: [
      { question: "What is Length Converter?", questionZh: "什么是Length Converter？", answer: "Length Converter is Convert between meters, feet, inches, kilometers, and miles. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Length Converter是一个Convert between meters, feet, inches, kilometers, and miles。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Length Converter free to use?", questionZh: "Length Converter是免费的吗？", answer: "Yes, Length Converter is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Length Converter完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "What formats does the Length Converter support?", questionZh: "Length Converter支持哪些格式？", answer: "The Length Converter supports all common formats relevant to its function. All conversion happens instantly in your browser with no file uploads required.", answerZh: "Length Converter支持与其功能相关的所有常见格式。所有转换都在浏览器中即时完成，无需上传文件。" },
    ],
  },
  {
    slug: "data-size-converter",
    faqs: [
      { question: "What is Data Size Converter?", questionZh: "什么是Data Size Converter？", answer: "Data Size Converter is Convert between bytes, kilobytes, megabytes, gigabytes, terabytes and more. Compare file sizes, storage capacity, and data transfer amounts.. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Data Size Converter是一个Convert between bytes, kilobytes, megabytes, gigabytes, terabytes and more. Compare file sizes, storage capacity, and data transfer amounts.。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Data Size Converter free to use?", questionZh: "Data Size Converter是免费的吗？", answer: "Yes, Data Size Converter is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Data Size Converter完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "What formats does the Data Size Converter support?", questionZh: "Data Size Converter支持哪些格式？", answer: "The Data Size Converter supports all common formats relevant to its function. All conversion happens instantly in your browser with no file uploads required.", answerZh: "Data Size Converter支持与其功能相关的所有常见格式。所有转换都在浏览器中即时完成，无需上传文件。" },
    ],
  },
  {
    slug: "speed-converter",
    faqs: [
      { question: "What is Speed Converter?", questionZh: "什么是Speed Converter？", answer: "Speed Converter is Convert speed between km/h, mph, knots, m/s, and mach. Useful for driving, aviation, marine navigation, and physics calculations.. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Speed Converter是一个Convert speed between km/h, mph, knots, m/s, and mach. Useful for driving, aviation, marine navigation, and physics calculations.。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Speed Converter free to use?", questionZh: "Speed Converter是免费的吗？", answer: "Yes, Speed Converter is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Speed Converter完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "What formats does the Speed Converter support?", questionZh: "Speed Converter支持哪些格式？", answer: "The Speed Converter supports all common formats relevant to its function. All conversion happens instantly in your browser with no file uploads required.", answerZh: "Speed Converter支持与其功能相关的所有常见格式。所有转换都在浏览器中即时完成，无需上传文件。" },
    ],
  },
  {
    slug: "area-converter",
    faqs: [
      { question: "What is Area Converter?", questionZh: "什么是Area Converter？", answer: "Area Converter is Convert between square meters, acres, hectares, sq ft. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Area Converter是一个Convert between square meters, acres, hectares, sq ft。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Area Converter free to use?", questionZh: "Area Converter是免费的吗？", answer: "Yes, Area Converter is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Area Converter完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "What formats does the Area Converter support?", questionZh: "Area Converter支持哪些格式？", answer: "The Area Converter supports all common formats relevant to its function. All conversion happens instantly in your browser with no file uploads required.", answerZh: "Area Converter支持与其功能相关的所有常见格式。所有转换都在浏览器中即时完成，无需上传文件。" },
    ],
  },
  {
    slug: "image-to-base64",
    faqs: [
      { question: "What is Image to Base64?", questionZh: "什么是Image to Base64？", answer: "Image to Base64 is Convert images to Base64 data URI for inline embedding. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Image to Base64是一个Convert images to Base64 data URI for inline embedding。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Image to Base64 free to use?", questionZh: "Image to Base64是免费的吗？", answer: "Yes, Image to Base64 is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Image to Base64完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the Image to Base64 on mobile?", questionZh: "可以在手机上使用Image to Base64吗？", answer: "Yes, the Image to Base64 is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，Image to Base64完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "random-number-generator",
    faqs: [
      { question: "What is Random Number Generator?", questionZh: "什么是Random Number Generator？", answer: "Random Number Generator is Generate random numbers within a custom range. Perfect for lotteries, giveaways, statistical sampling, and game development.. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Random Number Generator是一个Generate random numbers within a custom range. Perfect for lotteries, giveaways, statistical sampling, and game development.。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Random Number Generator free to use?", questionZh: "Random Number Generator是免费的吗？", answer: "Yes, Random Number Generator is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Random Number Generator完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Do I need to install anything to use the Random Number Generator?", questionZh: "使用Random Number Generator需要安装什么吗？", answer: "No installation needed. The Random Number Generator runs entirely in your web browser. Just visit the page and start using it immediately on any device.", answerZh: "无需安装。Random Number Generator完全在您的网络浏览器中运行。只需访问页面即可在任何设备上立即使用。" },
    ],
  },
  {
    slug: "image-to-pdf",
    faqs: [
      { question: "What is Image to PDF?", questionZh: "什么是Image to PDF？", answer: "Image to PDF is Convert images (JPG, PNG) into a single PDF document. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Image to PDF是一个Convert images (JPG, PNG) into a single PDF document。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Image to PDF free to use?", questionZh: "Image to PDF是免费的吗？", answer: "Yes, Image to PDF is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Image to PDF完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the Image to PDF on mobile?", questionZh: "可以在手机上使用Image to PDF吗？", answer: "Yes, the Image to PDF is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，Image to PDF完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "pdf-splitter",
    faqs: [
      { question: "What is PDF Splitter?", questionZh: "什么是PDF Splitter？", answer: "PDF Splitter is Split PDF by page ranges or extract specific pages. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "PDF Splitter是一个Split PDF by page ranges or extract specific pages。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is PDF Splitter free to use?", questionZh: "PDF Splitter是免费的吗？", answer: "Yes, PDF Splitter is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，PDF Splitter完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the PDF Splitter on mobile?", questionZh: "可以在手机上使用PDF Splitter吗？", answer: "Yes, the PDF Splitter is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，PDF Splitter完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "pdf-rotator",
    faqs: [
      { question: "What is PDF Rotator?", questionZh: "什么是PDF Rotator？", answer: "PDF Rotator is Rotate PDF pages by 90, 180, or 270 degrees. Fix scanned documents, correct page orientation, and rearrange your PDF layouts.. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "PDF Rotator是一个Rotate PDF pages by 90, 180, or 270 degrees. Fix scanned documents, correct page orientation, and rearrange your PDF layouts.。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is PDF Rotator free to use?", questionZh: "PDF Rotator是免费的吗？", answer: "Yes, PDF Rotator is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，PDF Rotator完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the PDF Rotator on mobile?", questionZh: "可以在手机上使用PDF Rotator吗？", answer: "Yes, the PDF Rotator is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，PDF Rotator完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "pdf-page-remover",
    faqs: [
      { question: "What is PDF Page Remover?", questionZh: "什么是PDF Page Remover？", answer: "PDF Page Remover is Remove unwanted pages from your PDF documents quickly. Extract specific pages, delete blank sheets, and trim bulky files.. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "PDF Page Remover是一个Remove unwanted pages from your PDF documents quickly. Extract specific pages, delete blank sheets, and trim bulky files.。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is PDF Page Remover free to use?", questionZh: "PDF Page Remover是免费的吗？", answer: "Yes, PDF Page Remover is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，PDF Page Remover完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the PDF Page Remover on mobile?", questionZh: "可以在手机上使用PDF Page Remover吗？", answer: "Yes, the PDF Page Remover is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，PDF Page Remover完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "image-cropper",
    faqs: [
      { question: "What is Image Cropper?", questionZh: "什么是Image Cropper？", answer: "Image Cropper is Crop images by dragging a selection area on canvas. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Image Cropper是一个Crop images by dragging a selection area on canvas。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Image Cropper free to use?", questionZh: "Image Cropper是免费的吗？", answer: "Yes, Image Cropper is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Image Cropper完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the Image Cropper on mobile?", questionZh: "可以在手机上使用Image Cropper吗？", answer: "Yes, the Image Cropper is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，Image Cropper完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "image-resizer",
    faqs: [
      { question: "What is Image Resizer?", questionZh: "什么是Image Resizer？", answer: "Image Resizer is Resize images to exact dimensions with aspect ratio lock. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Image Resizer是一个Resize images to exact dimensions with aspect ratio lock。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Image Resizer free to use?", questionZh: "Image Resizer是免费的吗？", answer: "Yes, Image Resizer is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Image Resizer完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the Image Resizer on mobile?", questionZh: "可以在手机上使用Image Resizer吗？", answer: "Yes, the Image Resizer is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，Image Resizer完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "image-filters",
    faqs: [
      { question: "What is Image Filters?", questionZh: "什么是Image Filters？", answer: "Image Filters is Apply grayscale, sepia, blur, brightness, and contrast filters. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Image Filters是一个Apply grayscale, sepia, blur, brightness, and contrast filters。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Image Filters free to use?", questionZh: "Image Filters是免费的吗？", answer: "Yes, Image Filters is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Image Filters完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the Image Filters on mobile?", questionZh: "可以在手机上使用Image Filters吗？", answer: "Yes, the Image Filters is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，Image Filters完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "color-picker",
    faqs: [
      { question: "What is Color Picker from Image?", questionZh: "什么是Color Picker from Image？", answer: "Color Picker from Image is Pick colors from uploaded images or use the color selector. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Color Picker from Image是一个Pick colors from uploaded images or use the color selector。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Color Picker from Image free to use?", questionZh: "Color Picker from Image是免费的吗？", answer: "Yes, Color Picker from Image is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Color Picker from Image完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the Color Picker from Image on mobile?", questionZh: "可以在手机上使用Color Picker from Image吗？", answer: "Yes, the Color Picker from Image is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，Color Picker from Image完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "gif-maker",
    faqs: [
      { question: "What is GIF Maker?", questionZh: "什么是GIF Maker？", answer: "GIF Maker is Create animated GIFs from multiple images or video clips. Set frame delay, resize output, and optimize for web or social media.. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "GIF Maker是一个Create animated GIFs from multiple images or video clips. Set frame delay, resize output, and optimize for web or social media.。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is GIF Maker free to use?", questionZh: "GIF Maker是免费的吗？", answer: "Yes, GIF Maker is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，GIF Maker完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the GIF Maker on mobile?", questionZh: "可以在手机上使用GIF Maker吗？", answer: "Yes, the GIF Maker is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，GIF Maker完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "image-watermark",
    faqs: [
      { question: "What is Image Watermark?", questionZh: "什么是Image Watermark？", answer: "Image Watermark is Add text watermark to images with position and opacity control. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Image Watermark是一个Add text watermark to images with position and opacity control。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Image Watermark free to use?", questionZh: "Image Watermark是免费的吗？", answer: "Yes, Image Watermark is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Image Watermark完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the Image Watermark on mobile?", questionZh: "可以在手机上使用Image Watermark吗？", answer: "Yes, the Image Watermark is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，Image Watermark完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "image-merge",
    faqs: [
      { question: "What is Image Merger?", questionZh: "什么是Image Merger？", answer: "Image Merger is Combine multiple images into one side by side or grid. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Image Merger是一个Combine multiple images into one side by side or grid。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Image Merger free to use?", questionZh: "Image Merger是免费的吗？", answer: "Yes, Image Merger is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Image Merger完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the Image Merger on mobile?", questionZh: "可以在手机上使用Image Merger吗？", answer: "Yes, the Image Merger is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，Image Merger完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "image-splitter",
    faqs: [
      { question: "What is Image Splitter?", questionZh: "什么是Image Splitter？", answer: "Image Splitter is Split a single image into multiple tiles by rows and columns. Perfect for creating sprite sheets, grid layouts, and image segments.. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Image Splitter是一个Split a single image into multiple tiles by rows and columns. Perfect for creating sprite sheets, grid layouts, and image segments.。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Image Splitter free to use?", questionZh: "Image Splitter是免费的吗？", answer: "Yes, Image Splitter is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Image Splitter完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the Image Splitter on mobile?", questionZh: "可以在手机上使用Image Splitter吗？", answer: "Yes, the Image Splitter is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，Image Splitter完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "image-flip",
    faqs: [
      { question: "What is Image Flip & Rotate?", questionZh: "什么是Image Flip & Rotate？", answer: "Image Flip & Rotate is Flip images horizontally or vertically and rotate by 90-degree increments. Mirror selfies, correct orientation, and transform photos instantly.. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Image Flip & Rotate是一个Flip images horizontally or vertically and rotate by 90-degree increments. Mirror selfies, correct orientation, and transform photos instantly.。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Image Flip & Rotate free to use?", questionZh: "Image Flip & Rotate是免费的吗？", answer: "Yes, Image Flip & Rotate is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Image Flip & Rotate完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the Image Flip & Rotate on mobile?", questionZh: "可以在手机上使用Image Flip & Rotate吗？", answer: "Yes, the Image Flip & Rotate is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，Image Flip & Rotate完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "image-border",
    faqs: [
      { question: "What is Image Border?", questionZh: "什么是Image Border？", answer: "Image Border is Add customizable borders, frames, and padding to images. Choose colors, widths, corner radius, and shadow effects for polished photos.. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Image Border是一个Add customizable borders, frames, and padding to images. Choose colors, widths, corner radius, and shadow effects for polished photos.。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Image Border free to use?", questionZh: "Image Border是免费的吗？", answer: "Yes, Image Border is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Image Border完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the Image Border on mobile?", questionZh: "可以在手机上使用Image Border吗？", answer: "Yes, the Image Border is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，Image Border完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "meme-generator",
    faqs: [
      { question: "What is Meme Generator?", questionZh: "什么是Meme Generator？", answer: "Meme Generator is Create memes by adding top and bottom text to images. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Meme Generator是一个Create memes by adding top and bottom text to images。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Meme Generator free to use?", questionZh: "Meme Generator是免费的吗？", answer: "Yes, Meme Generator is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Meme Generator完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Do I need to install anything to use the Meme Generator?", questionZh: "使用Meme Generator需要安装什么吗？", answer: "No installation needed. The Meme Generator runs entirely in your web browser. Just visit the page and start using it immediately on any device.", answerZh: "无需安装。Meme Generator完全在您的网络浏览器中运行。只需访问页面即可在任何设备上立即使用。" },
    ],
  },
  {
    slug: "image-to-sketch",
    faqs: [
      { question: "What is Image to Sketch?", questionZh: "什么是Image to Sketch？", answer: "Image to Sketch is Convert photos into pencil sketch drawings and line art. Apply artistic filters to create realistic hand-drawn effects from your images.. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Image to Sketch是一个Convert photos into pencil sketch drawings and line art. Apply artistic filters to create realistic hand-drawn effects from your images.。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Image to Sketch free to use?", questionZh: "Image to Sketch是免费的吗？", answer: "Yes, Image to Sketch is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Image to Sketch完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the Image to Sketch on mobile?", questionZh: "可以在手机上使用Image to Sketch吗？", answer: "Yes, the Image to Sketch is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，Image to Sketch完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "emoji-remover",
    faqs: [
      { question: "What is Emoji Remover?", questionZh: "什么是Emoji Remover？", answer: "Emoji Remover is Remove all emoji characters from text while keeping words. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Emoji Remover是一个Remove all emoji characters from text while keeping words。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Emoji Remover free to use?", questionZh: "Emoji Remover是免费的吗？", answer: "Yes, Emoji Remover is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Emoji Remover完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the Emoji Remover on mobile?", questionZh: "可以在手机上使用Emoji Remover吗？", answer: "Yes, the Emoji Remover is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，Emoji Remover完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "unicode-detector",
    faqs: [
      { question: "What is Unicode Character Detector?", questionZh: "什么是Unicode Character Detector？", answer: "Unicode Character Detector is Inspect Unicode characters with codepoint and category info. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Unicode Character Detector是一个Inspect Unicode characters with codepoint and category info。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Unicode Character Detector free to use?", questionZh: "Unicode Character Detector是免费的吗？", answer: "Yes, Unicode Character Detector is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Unicode Character Detector完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the Unicode Character Detector on mobile?", questionZh: "可以在手机上使用Unicode Character Detector吗？", answer: "Yes, the Unicode Character Detector is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，Unicode Character Detector完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "caesar-cipher",
    faqs: [
      { question: "What is Caesar Cipher?", questionZh: "什么是Caesar Cipher？", answer: "Caesar Cipher is Encode and decode text using the classic Caesar shift cipher. Choose shift values, try brute force decoding, and learn cryptography basics.. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Caesar Cipher是一个Encode and decode text using the classic Caesar shift cipher. Choose shift values, try brute force decoding, and learn cryptography basics.。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Caesar Cipher free to use?", questionZh: "Caesar Cipher是免费的吗？", answer: "Yes, Caesar Cipher is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Caesar Cipher完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the Caesar Cipher on mobile?", questionZh: "可以在手机上使用Caesar Cipher吗？", answer: "Yes, the Caesar Cipher is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，Caesar Cipher完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "json-diff",
    faqs: [
      { question: "What is JSON Diff?", questionZh: "什么是JSON Diff？", answer: "JSON Diff is Compare two JSON objects and highlight differences. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "JSON Diff是一个Compare two JSON objects and highlight differences。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is JSON Diff free to use?", questionZh: "JSON Diff是免费的吗？", answer: "Yes, JSON Diff is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，JSON Diff完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the JSON Diff on mobile?", questionZh: "可以在手机上使用JSON Diff吗？", answer: "Yes, the JSON Diff is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，JSON Diff完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "http-status-codes",
    faqs: [
      { question: "What is HTTP Status Codes?", questionZh: "什么是HTTP Status Codes？", answer: "HTTP Status Codes is Browse and search all HTTP status codes with descriptions. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "HTTP Status Codes是一个Browse and search all HTTP status codes with descriptions。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is HTTP Status Codes free to use?", questionZh: "HTTP Status Codes是免费的吗？", answer: "Yes, HTTP Status Codes is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，HTTP Status Codes完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the HTTP Status Codes on mobile?", questionZh: "可以在手机上使用HTTP Status Codes吗？", answer: "Yes, the HTTP Status Codes is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，HTTP Status Codes完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "timezone-converter",
    faqs: [
      { question: "What is Time Zone Converter?", questionZh: "什么是Time Zone Converter？", answer: "Time Zone Converter is Convert time between different world time zones instantly. Schedule meetings across time zones and compare clocks worldwide.. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Time Zone Converter是一个Convert time between different world time zones instantly. Schedule meetings across time zones and compare clocks worldwide.。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Time Zone Converter free to use?", questionZh: "Time Zone Converter是免费的吗？", answer: "Yes, Time Zone Converter is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Time Zone Converter完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "What formats does the Time Zone Converter support?", questionZh: "Time Zone Converter支持哪些格式？", answer: "The Time Zone Converter supports all common formats relevant to its function. All conversion happens instantly in your browser with no file uploads required.", answerZh: "Time Zone Converter支持与其功能相关的所有常见格式。所有转换都在浏览器中即时完成，无需上传文件。" },
    ],
  },
  {
    slug: "binary-to-text",
    faqs: [
      { question: "What is Binary to Text?", questionZh: "什么是Binary to Text？", answer: "Binary to Text is Convert binary code to text and text back to binary. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Binary to Text是一个Convert binary code to text and text back to binary。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Binary to Text free to use?", questionZh: "Binary to Text是免费的吗？", answer: "Yes, Binary to Text is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Binary to Text完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the Binary to Text on mobile?", questionZh: "可以在手机上使用Binary to Text吗？", answer: "Yes, the Binary to Text is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，Binary to Text完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "image-invert",
    faqs: [
      { question: "What is Image Invert?", questionZh: "什么是Image Invert？", answer: "Image Invert is Invert or negate colors in any image instantly. Create negative effects, X-ray looks, and artistic color reversals with one click.. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Image Invert是一个Invert or negate colors in any image instantly. Create negative effects, X-ray looks, and artistic color reversals with one click.。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Image Invert free to use?", questionZh: "Image Invert是免费的吗？", answer: "Yes, Image Invert is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Image Invert完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the Image Invert on mobile?", questionZh: "可以在手机上使用Image Invert吗？", answer: "Yes, the Image Invert is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，Image Invert完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "image-collage",
    faqs: [
      { question: "What is Photo Collage Maker?", questionZh: "什么是Photo Collage Maker？", answer: "Photo Collage Maker is Combine multiple photos into a beautiful collage grid. Choose layouts, spacing, background colors, and export in high resolution.. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Photo Collage Maker是一个Combine multiple photos into a beautiful collage grid. Choose layouts, spacing, background colors, and export in high resolution.。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Photo Collage Maker free to use?", questionZh: "Photo Collage Maker是免费的吗？", answer: "Yes, Photo Collage Maker is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Photo Collage Maker完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the Photo Collage Maker on mobile?", questionZh: "可以在手机上使用Photo Collage Maker吗？", answer: "Yes, the Photo Collage Maker is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，Photo Collage Maker完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "css-gradient",
    faqs: [
      { question: "What is CSS Gradient Generator?", questionZh: "什么是CSS Gradient Generator？", answer: "CSS Gradient Generator is Create beautiful linear and radial CSS gradients visually. Copy the generated CSS code for backgrounds, buttons, and UI elements.. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "CSS Gradient Generator是一个Create beautiful linear and radial CSS gradients visually. Copy the generated CSS code for backgrounds, buttons, and UI elements.。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is CSS Gradient Generator free to use?", questionZh: "CSS Gradient Generator是免费的吗？", answer: "Yes, CSS Gradient Generator is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，CSS Gradient Generator完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the CSS Gradient Generator on mobile?", questionZh: "可以在手机上使用CSS Gradient Generator吗？", answer: "Yes, the CSS Gradient Generator is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，CSS Gradient Generator完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "css-shadow",
    faqs: [
      { question: "What is CSS Box Shadow Generator?", questionZh: "什么是CSS Box Shadow Generator？", answer: "CSS Box Shadow Generator is Design and preview custom CSS box shadows visually. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "CSS Box Shadow Generator是一个Design and preview custom CSS box shadows visually。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is CSS Box Shadow Generator free to use?", questionZh: "CSS Box Shadow Generator是免费的吗？", answer: "Yes, CSS Box Shadow Generator is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，CSS Box Shadow Generator完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the CSS Box Shadow Generator on mobile?", questionZh: "可以在手机上使用CSS Box Shadow Generator吗？", answer: "Yes, the CSS Box Shadow Generator is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，CSS Box Shadow Generator完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "json-to-typescript",
    faqs: [
      { question: "What is JSON to TypeScript?", questionZh: "什么是JSON to TypeScript？", answer: "JSON to TypeScript is Convert JSON objects into TypeScript interfaces automatically. Generate type definitions from API responses and configuration files instantly.. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "JSON to TypeScript是一个Convert JSON objects into TypeScript interfaces automatically. Generate type definitions from API responses and configuration files instantly.。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is JSON to TypeScript free to use?", questionZh: "JSON to TypeScript是免费的吗？", answer: "Yes, JSON to TypeScript is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，JSON to TypeScript完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the JSON to TypeScript on mobile?", questionZh: "可以在手机上使用JSON to TypeScript吗？", answer: "Yes, the JSON to TypeScript is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，JSON to TypeScript完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "html-to-jsx",
    faqs: [
      { question: "What is HTML to JSX Converter?", questionZh: "什么是HTML to JSX Converter？", answer: "HTML to JSX Converter is Convert plain HTML code into React JSX syntax. Handle inline styles, class attributes, self-closing tags, and event handlers automatically.. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "HTML to JSX Converter是一个Convert plain HTML code into React JSX syntax. Handle inline styles, class attributes, self-closing tags, and event handlers automatically.。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is HTML to JSX Converter free to use?", questionZh: "HTML to JSX Converter是免费的吗？", answer: "Yes, HTML to JSX Converter is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，HTML to JSX Converter完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the HTML to JSX Converter on mobile?", questionZh: "可以在手机上使用HTML to JSX Converter吗？", answer: "Yes, the HTML to JSX Converter is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，HTML to JSX Converter完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "color-palette",
    faqs: [
      { question: "What is Color Palette Generator?", questionZh: "什么是Color Palette Generator？", answer: "Color Palette Generator is Generate color schemes: monochromatic, complementary, and more. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Color Palette Generator是一个Generate color schemes: monochromatic, complementary, and more。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Color Palette Generator free to use?", questionZh: "Color Palette Generator是免费的吗？", answer: "Yes, Color Palette Generator is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Color Palette Generator完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the Color Palette Generator on mobile?", questionZh: "可以在手机上使用Color Palette Generator吗？", answer: "Yes, the Color Palette Generator is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，Color Palette Generator完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "roman-numeral",
    faqs: [
      { question: "What is Roman Numeral Converter?", questionZh: "什么是Roman Numeral Converter？", answer: "Roman Numeral Converter is Convert between Roman numerals and Arabic numbers instantly. Works with values from 1 to 3999, including common numeral combinations.. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Roman Numeral Converter是一个Convert between Roman numerals and Arabic numbers instantly. Works with values from 1 to 3999, including common numeral combinations.。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Roman Numeral Converter free to use?", questionZh: "Roman Numeral Converter是免费的吗？", answer: "Yes, Roman Numeral Converter is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Roman Numeral Converter完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the Roman Numeral Converter on mobile?", questionZh: "可以在手机上使用Roman Numeral Converter吗？", answer: "Yes, the Roman Numeral Converter is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，Roman Numeral Converter完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "percentage-calculator",
    faqs: [
      { question: "What is Percentage Calculator?", questionZh: "什么是Percentage Calculator？", answer: "Percentage Calculator is Calculate percentages, what if, increase/decrease easily. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Percentage Calculator是一个Calculate percentages, what if, increase/decrease easily。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Percentage Calculator free to use?", questionZh: "Percentage Calculator是免费的吗？", answer: "Yes, Percentage Calculator is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Percentage Calculator完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the Percentage Calculator on mobile?", questionZh: "可以在手机上使用Percentage Calculator吗？", answer: "Yes, the Percentage Calculator is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，Percentage Calculator完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "tip-calculator",
    faqs: [
      { question: "What is Tip Calculator?", questionZh: "什么是Tip Calculator？", answer: "Tip Calculator is Calculate tip amount, total bill, and per-person cost. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Tip Calculator是一个Calculate tip amount, total bill, and per-person cost。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Tip Calculator free to use?", questionZh: "Tip Calculator是免费的吗？", answer: "Yes, Tip Calculator is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Tip Calculator完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the Tip Calculator on mobile?", questionZh: "可以在手机上使用Tip Calculator吗？", answer: "Yes, the Tip Calculator is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，Tip Calculator完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "age-calculator",
    faqs: [
      { question: "What is Age Calculator?", questionZh: "什么是Age Calculator？", answer: "Age Calculator is Calculate exact age in years, months, weeks, and days. Find your age on any future date or count down to your next birthday.. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Age Calculator是一个Calculate exact age in years, months, weeks, and days. Find your age on any future date or count down to your next birthday.。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Age Calculator free to use?", questionZh: "Age Calculator是免费的吗？", answer: "Yes, Age Calculator is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Age Calculator完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the Age Calculator on mobile?", questionZh: "可以在手机上使用Age Calculator吗？", answer: "Yes, the Age Calculator is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，Age Calculator完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "bmi-calculator",
    faqs: [
      { question: "What is BMI Calculator?", questionZh: "什么是BMI Calculator？", answer: "BMI Calculator is Calculate Body Mass Index and check your health category. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "BMI Calculator是一个Calculate Body Mass Index and check your health category。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is BMI Calculator free to use?", questionZh: "BMI Calculator是免费的吗？", answer: "Yes, BMI Calculator is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，BMI Calculator完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the BMI Calculator on mobile?", questionZh: "可以在手机上使用BMI Calculator吗？", answer: "Yes, the BMI Calculator is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，BMI Calculator完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "countdown-timer",
    faqs: [
      { question: "What is Countdown Timer?", questionZh: "什么是Countdown Timer？", answer: "Countdown Timer is Set a countdown to any date and time with days, hours, minutes, and seconds. Perfect for events, deadlines, and special occasions.. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Countdown Timer是一个Set a countdown to any date and time with days, hours, minutes, and seconds. Perfect for events, deadlines, and special occasions.。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Countdown Timer free to use?", questionZh: "Countdown Timer是免费的吗？", answer: "Yes, Countdown Timer is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Countdown Timer完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the Countdown Timer on mobile?", questionZh: "可以在手机上使用Countdown Timer吗？", answer: "Yes, the Countdown Timer is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，Countdown Timer完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "dice-roller",
    faqs: [
      { question: "What is Dice Roller?", questionZh: "什么是Dice Roller？", answer: "Dice Roller is Roll virtual dice with 4, 6, 8, 10, 12, and 20 sides. Roll multiple dice at once for tabletop games, RPGs, and classrooms.. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Dice Roller是一个Roll virtual dice with 4, 6, 8, 10, 12, and 20 sides. Roll multiple dice at once for tabletop games, RPGs, and classrooms.。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Dice Roller free to use?", questionZh: "Dice Roller是免费的吗？", answer: "Yes, Dice Roller is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Dice Roller完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the Dice Roller on mobile?", questionZh: "可以在手机上使用Dice Roller吗？", answer: "Yes, the Dice Roller is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，Dice Roller完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "decision-maker",
    faqs: [
      { question: "What is Decision Maker?", questionZh: "什么是Decision Maker？", answer: "Decision Maker is Let fate decide — pick a random option from your list. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Decision Maker是一个Let fate decide — pick a random option from your list。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Decision Maker free to use?", questionZh: "Decision Maker是免费的吗？", answer: "Yes, Decision Maker is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Decision Maker完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the Decision Maker on mobile?", questionZh: "可以在手机上使用Decision Maker吗？", answer: "Yes, the Decision Maker is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，Decision Maker完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "audio-cutter",
    faqs: [
      { question: "What is Audio Cutter?", questionZh: "什么是Audio Cutter？", answer: "Audio Cutter is Trim and cut audio files with an interactive waveform preview. Extract clips from MP3, WAV, and other formats right in your browser.. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Audio Cutter是一个Trim and cut audio files with an interactive waveform preview. Extract clips from MP3, WAV, and other formats right in your browser.。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Audio Cutter free to use?", questionZh: "Audio Cutter是免费的吗？", answer: "Yes, Audio Cutter is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Audio Cutter完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the Audio Cutter on mobile?", questionZh: "可以在手机上使用Audio Cutter吗？", answer: "Yes, the Audio Cutter is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，Audio Cutter完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "audio-merger",
    faqs: [
      { question: "What is Audio Merger?", questionZh: "什么是Audio Merger？", answer: "Audio Merger is Combine multiple audio files into one seamless track. Merge songs, recordings, or voice clips in any order with crossfade support.. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Audio Merger是一个Combine multiple audio files into one seamless track. Merge songs, recordings, or voice clips in any order with crossfade support.。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Audio Merger free to use?", questionZh: "Audio Merger是免费的吗？", answer: "Yes, Audio Merger is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Audio Merger完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the Audio Merger on mobile?", questionZh: "可以在手机上使用Audio Merger吗？", answer: "Yes, the Audio Merger is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，Audio Merger完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "audio-converter",
    faqs: [
      { question: "What is Audio Converter?", questionZh: "什么是Audio Converter？", answer: "Audio Converter is Convert audio between WAV formats and sample rates. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Audio Converter是一个Convert audio between WAV formats and sample rates。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Audio Converter free to use?", questionZh: "Audio Converter是免费的吗？", answer: "Yes, Audio Converter is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Audio Converter完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "What formats does the Audio Converter support?", questionZh: "Audio Converter支持哪些格式？", answer: "The Audio Converter supports all common formats relevant to its function. All conversion happens instantly in your browser with no file uploads required.", answerZh: "Audio Converter支持与其功能相关的所有常见格式。所有转换都在浏览器中即时完成，无需上传文件。" },
    ],
  },
  {
    slug: "svg-to-png",
    faqs: [
      { question: "What is SVG to PNG Converter?", questionZh: "什么是SVG to PNG Converter？", answer: "SVG to PNG Converter is Convert SVG vector code or files into PNG images with custom dimensions, background colors, and scaling options for any use case.. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "SVG to PNG Converter是一个Convert SVG vector code or files into PNG images with custom dimensions, background colors, and scaling options for any use case.。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is SVG to PNG Converter free to use?", questionZh: "SVG to PNG Converter是免费的吗？", answer: "Yes, SVG to PNG Converter is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，SVG to PNG Converter完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the SVG to PNG Converter on mobile?", questionZh: "可以在手机上使用SVG to PNG Converter吗？", answer: "Yes, the SVG to PNG Converter is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，SVG to PNG Converter完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "days-between",
    faqs: [
      { question: "What is Days Between Dates?", questionZh: "什么是Days Between Dates？", answer: "Days Between Dates is Calculate the exact number of days between two dates. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Days Between Dates是一个Calculate the exact number of days between two dates。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Days Between Dates free to use?", questionZh: "Days Between Dates是免费的吗？", answer: "Yes, Days Between Dates is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Days Between Dates完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the Days Between Dates on mobile?", questionZh: "可以在手机上使用Days Between Dates吗？", answer: "Yes, the Days Between Dates is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，Days Between Dates完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "password-strength",
    faqs: [
      { question: "What is Password Strength Checker?", questionZh: "什么是Password Strength Checker？", answer: "Password Strength Checker is Test how strong your password is with real-time analysis. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Password Strength Checker是一个Test how strong your password is with real-time analysis。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Password Strength Checker free to use?", questionZh: "Password Strength Checker是免费的吗？", answer: "Yes, Password Strength Checker is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Password Strength Checker完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the Password Strength Checker on mobile?", questionZh: "可以在手机上使用Password Strength Checker吗？", answer: "Yes, the Password Strength Checker is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，Password Strength Checker完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "aspect-ratio-calculator",
    faqs: [
      { question: "What is Aspect Ratio Calculator?", questionZh: "什么是Aspect Ratio Calculator？", answer: "Aspect Ratio Calculator is Calculate aspect ratios from dimensions or presets. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Aspect Ratio Calculator是一个Calculate aspect ratios from dimensions or presets。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Aspect Ratio Calculator free to use?", questionZh: "Aspect Ratio Calculator是免费的吗？", answer: "Yes, Aspect Ratio Calculator is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Aspect Ratio Calculator完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the Aspect Ratio Calculator on mobile?", questionZh: "可以在手机上使用Aspect Ratio Calculator吗？", answer: "Yes, the Aspect Ratio Calculator is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，Aspect Ratio Calculator完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "qr-reader",
    faqs: [
      { question: "What is QR Code Reader?", questionZh: "什么是QR Code Reader？", answer: "QR Code Reader is Decode QR codes from uploaded images instantly. Scan any QR code image to reveal the embedded URL, text, or contact information.. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "QR Code Reader是一个Decode QR codes from uploaded images instantly. Scan any QR code image to reveal the embedded URL, text, or contact information.。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is QR Code Reader free to use?", questionZh: "QR Code Reader是免费的吗？", answer: "Yes, QR Code Reader is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，QR Code Reader完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the QR Code Reader on mobile?", questionZh: "可以在手机上使用QR Code Reader吗？", answer: "Yes, the QR Code Reader is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，QR Code Reader完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "color-blindness-simulator",
    faqs: [
      { question: "What is Color Blindness Simulator?", questionZh: "什么是Color Blindness Simulator？", answer: "Color Blindness Simulator is Simulate how images look with various color blindness types. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Color Blindness Simulator是一个Simulate how images look with various color blindness types。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Color Blindness Simulator free to use?", questionZh: "Color Blindness Simulator是免费的吗？", answer: "Yes, Color Blindness Simulator is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Color Blindness Simulator完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the Color Blindness Simulator on mobile?", questionZh: "可以在手机上使用Color Blindness Simulator吗？", answer: "Yes, the Color Blindness Simulator is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，Color Blindness Simulator完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "online-notepad",
    faqs: [
      { question: "What is Online Notepad?", questionZh: "什么是Online Notepad？", answer: "Online Notepad is A clean, distraction-free browser-based notepad with auto-save. Write notes, code snippets, and lists that persist in your browser storage.. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Online Notepad是一个A clean, distraction-free browser-based notepad with auto-save. Write notes, code snippets, and lists that persist in your browser storage.。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Online Notepad free to use?", questionZh: "Online Notepad是免费的吗？", answer: "Yes, Online Notepad is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Online Notepad完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the Online Notepad on mobile?", questionZh: "可以在手机上使用Online Notepad吗？", answer: "Yes, the Online Notepad is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，Online Notepad完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
    ],
  },
  {
    slug: "text-statistics",
    faqs: [
      { question: "What is Text Statistics?", questionZh: "什么是Text Statistics？", answer: "Text Statistics is Detailed text analysis: letters, vowels, unique words, and more. It runs entirely in your browser with no signup required, and all processing is 100% client-side.", answerZh: "Text Statistics是一个Detailed text analysis: letters, vowels, unique words, and more。它完全在浏览器中运行，无需注册，所有处理100%在客户端完成。" },
      { question: "Is Text Statistics free to use?", questionZh: "Text Statistics是免费的吗？", answer: "Yes, Text Statistics is completely free. No account, no signup, no hidden fees. All features are available to everyone.", answerZh: "是的，Text Statistics完全免费。无需账户、无需注册、没有隐藏费用。所有功能对所有人开放。" },
      { question: "Can I use the Text Statistics on mobile?", questionZh: "可以在手机上使用Text Statistics吗？", answer: "Yes, the Text Statistics is fully responsive and works on all mobile devices, tablets, and desktop computers. The interface adapts to your screen size automatically.", answerZh: "可以，Text Statistics完全响应式设计，支持所有手机、平板和桌面电脑。界面会自动适应您的屏幕尺寸。" },
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