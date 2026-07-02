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
      { question: "What does the Number Base Converter actually do with my input?", questionZh: "Number Base Converter具体如何处理我的输入？", answer: "Convert between binary, octal, decimal, and hexadecimal. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert between binary, octal, decimal, and hexadecimal。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Which formats can I convert between?", questionZh: "可以在哪些格式之间转换？", answer: "Supported conversions include binary, octal, decimal, and hexadecimal. Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. The tool auto-detects your input format.", answerZh: "支持的转换包括binary, octal, decimal, and hexadecimal。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "When would a developer reach for this tool?", questionZh: "开发者什么时候会用到这个工具？", answer: "During code review when you need to quickly convert between binary, octal, decimal, and hexadecimal, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "代码审查时需要快速convert between binary, octal, decimal, and hexadecimal，或调试数据管道时验证中间格式。在 API 开发中做快速转换也很方便。" },
    ],
  },
  {
    slug: "image-converter",
    faqs: [
      { question: "What does the Image Format Converter actually do with my input?", questionZh: "Image Format Converter具体如何处理我的输入？", answer: "Convert images between JPG, PNG, WebP, AVIF, GIF, and BMP formats. Batch convert with custom quality and dimension settings. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert images between JPG, PNG, WebP, AVIF, GIF, and BMP formats. Batch convert with custom quality and dimension settings。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Which formats can I convert between?", questionZh: "可以在哪些格式之间转换？", answer: "Supported conversions include JPG, PNG, WebP, AVIF, GIF, and BMP formats. Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. The tool auto-detects your input format.", answerZh: "支持的转换包括JPG, PNG, WebP, AVIF, GIF, and BMP formats。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "Can I use this for bulk image processing?", questionZh: "可以用来批量处理图片吗？", answer: "While the tool focuses on single-image operations for speed, you can process multiple images sequentially. For automated bulk processing, consider scripting with the same algorithms.", answerZh: "虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。如需自动化批量处理，建议使用相同算法编写脚本。" },
    ],
  },
  {
    slug: "lorem-ipsum-generator",
    faqs: [
      { question: "What does the Lorem Ipsum Generator actually do with my input?", questionZh: "Lorem Ipsum Generator具体如何处理我的输入？", answer: "Generate placeholder text for design mockups, website wireframes, and print layouts. Customize paragraph count, word length, and format. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Generate placeholder text for design mockups, website wireframes, and print layouts. Customize paragraph count, word length, and format。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Can I customize the output from the Lorem Ipsum Generator?", questionZh: "可以自定义Lorem Ipsum Generator的输出吗？", answer: "Yes. After generating the default output, you can adjust parameters like length, format, and quantity. The result updates in real time as you change settings.", answerZh: "可以。生成默认输出后，你可以调整长度、格式和数量等参数。修改设置时结果会实时更新。" },
      { question: "What kind of text works best with this tool?", questionZh: "什么样的文本最适合这个工具？", answer: "Any plain text — from emails and articles to code comments and data exports. The tool processes text of any length, from a single word to entire documents.", answerZh: "任何纯文本——从邮件和文章到代码注释和数据导出。工具处理任意长度的文本，从单个词到整个文档。" },
    ],
  },
  {
    slug: "text-diff-checker",
    faqs: [
      { question: "What does the Text Diff Checker actually do with my input?", questionZh: "Text Diff Checker具体如何处理我的输入？", answer: "Compare two blocks of text side by side and highlight every difference. Perfect for code reviews, document revisions, and plagiarism checks. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Compare two blocks of text side by side and highlight every difference. Perfect for code reviews, document revisions, and plagiarism checks。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "How accurate is the Text Diff Checker?", questionZh: "Text Diff Checker的准确性如何？", answer: "The Text Diff Checker uses deterministic algorithms — the same input always produces the same output. Every character is processed individually, so even single-character changes are caught and displayed.", answerZh: "Text Diff Checker使用确定性算法——相同输入始终产生相同输出。每个字符都被单独处理，即使单字符变化也能被捕获和显示。" },
      { question: "What kind of text works best with this tool?", questionZh: "什么样的文本最适合这个工具？", answer: "Any plain text — from emails and articles to code comments and data exports. The tool processes text of any length, from a single word to entire documents.", answerZh: "任何纯文本——从邮件和文章到代码注释和数据导出。工具处理任意长度的文本，从单个词到整个文档。" },
    ],
  },
  {
    slug: "text-repeater",
    faqs: [
      { question: "What does the Text Repeater actually do with my input?", questionZh: "Text Repeater具体如何处理我的输入？", answer: "Repeat any text multiple times with custom separators, line breaks, or prefixes. Generate test data, patterns, and repeated strings instantly. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Repeat any text multiple times with custom separators, line breaks, or prefixes. Generate test data, patterns, and repeated strings instantly。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the Text Repeater accept?", questionZh: "Text Repeater接受什么类型的输入？", answer: "The tool accepts plain text input via paste, type, or drag-and-drop. For file-based tools, you can upload files up to 50MB. Large inputs are processed in chunks to prevent browser freezing.", answerZh: "工具接受通过粘贴、输入或拖放方式的纯文本输入。对于文件类工具，可上传最大 50MB 的文件。大输入会分块处理以防止浏览器卡顿。" },
      { question: "What kind of text works best with this tool?", questionZh: "什么样的文本最适合这个工具？", answer: "Any plain text — from emails and articles to code comments and data exports. The tool processes text of any length, from a single word to entire documents.", answerZh: "任何纯文本——从邮件和文章到代码注释和数据导出。工具处理任意长度的文本，从单个词到整个文档。" },
    ],
  },
  {
    slug: "html-entity-converter",
    faqs: [
      { question: "What does the HTML Entity Converter actually do with my input?", questionZh: "HTML Entity Converter具体如何处理我的输入？", answer: "Encode and decode HTML entities like &amp; and &lt;. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Encode and decode HTML entities like &amp; and &lt;。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Which formats can I convert between?", questionZh: "可以在哪些格式之间转换？", answer: "Supported conversions include . Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. The tool auto-detects your input format.", answerZh: "支持的转换包括。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "Is the conversion lossless?", questionZh: "转换是无损的吗？", answer: "Text-based conversions (JSON to YAML, CSV to JSON) are lossless — every data point is preserved. For media formats, quality depends on the target format's compression.", answerZh: "基于文本的转换（JSON 转 YAML、CSV 转 JSON）是无损的——每个数据点都被保留。对于媒体格式，质量取决于目标格式的压缩方式。" },
    ],
  },
  {
    slug: "css-minifier",
    faqs: [
      { question: "What does the CSS Minifier actually do with my input?", questionZh: "CSS Minifier具体如何处理我的输入？", answer: "Minify and compress CSS code to reduce file size and improve page load speed. Remove whitespace, comments, and redundant rules safely. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Minify and compress CSS code to reduce file size and improve page load speed. Remove whitespace, comments, and redundant rules safely。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Will minification break my code?", questionZh: "压缩会破坏我的代码吗？", answer: "No. The CSS Minifier only removes characters that don't affect execution — whitespace between tokens, comments, and optional semicolons. The minified output runs identically to the original. Always test in your environment to confirm.", answerZh: "不会。CSS Minifier只移除不影响执行的字符——标记之间的空格、注释和可选的分号。压缩后的输出与原始代码运行效果完全相同。建议在你的环境中测试确认。" },
      { question: "When would a developer reach for this tool?", questionZh: "开发者什么时候会用到这个工具？", answer: "During code review when you need to quickly minify and compress css code to reduce file size and improve page load speed. remove whitespace, comments, and redundant rules safely, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "代码审查时需要快速minify and compress css code to reduce file size and improve page load speed. remove whitespace, comments, and redundant rules safely，或调试数据管道时验证中间格式。在 API 开发中做快速转换也很方便。" },
    ],
  },
  {
    slug: "json-to-yaml",
    faqs: [
      { question: "What does the JSON to YAML Converter actually do with my input?", questionZh: "JSON to YAML Converter具体如何处理我的输入？", answer: "Convert JSON data to clean YAML format and vice versa. Preserve nested structures, arrays, and data types during conversion. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert JSON data to clean YAML format and vice versa. Preserve nested structures, arrays, and data types during conversion。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Which formats can I convert between?", questionZh: "可以在哪些格式之间转换？", answer: "Supported conversions include . Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. The tool auto-detects your input format.", answerZh: "支持的转换包括。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "When would a developer reach for this tool?", questionZh: "开发者什么时候会用到这个工具？", answer: "During code review when you need to quickly convert json data to clean yaml format and vice versa. preserve nested structures, arrays, and data types during conversion, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "代码审查时需要快速convert json data to clean yaml format and vice versa. preserve nested structures, arrays, and data types during conversion，或调试数据管道时验证中间格式。在 API 开发中做快速转换也很方便。" },
    ],
  },
  {
    slug: "string-escaper",
    faqs: [
      { question: "What does the String Escaper/Unescaper actually do with my input?", questionZh: "String Escaper/Unescaper具体如何处理我的输入？", answer: "Escape and unescape special characters in strings for JSON, HTML, URLs, SQL, and JavaScript. Handle all common escaping formats. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Escape and unescape special characters in strings for JSON, HTML, URLs, SQL, and JavaScript. Handle all common escaping formats。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the String Escaper/Unescaper accept?", questionZh: "String Escaper/Unescaper接受什么类型的输入？", answer: "The tool accepts plain text input via paste, type, or drag-and-drop. For file-based tools, you can upload files up to 50MB. Large inputs are processed in chunks to prevent browser freezing.", answerZh: "工具接受通过粘贴、输入或拖放方式的纯文本输入。对于文件类工具，可上传最大 50MB 的文件。大输入会分块处理以防止浏览器卡顿。" },
      { question: "When would a developer reach for this tool?", questionZh: "开发者什么时候会用到这个工具？", answer: "During code review when you need to quickly escape and unescape special characters in strings for json, html, urls, sql, and javascript. handle all common escaping formats, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "代码审查时需要快速escape and unescape special characters in strings for json, html, urls, sql, and javascript. handle all common escaping formats，或调试数据管道时验证中间格式。在 API 开发中做快速转换也很方便。" },
    ],
  },
  {
    slug: "html-tag-stripper",
    faqs: [
      { question: "What does the HTML Tag Stripper actually do with my input?", questionZh: "HTML Tag Stripper具体如何处理我的输入？", answer: "Remove all HTML tags from text, keeping only content. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Remove all HTML tags from text, keeping only content。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the HTML Tag Stripper accept?", questionZh: "HTML Tag Stripper接受什么类型的输入？", answer: "The tool accepts plain text input via paste, type, or drag-and-drop. For file-based tools, you can upload files up to 50MB. Large inputs are processed in chunks to prevent browser freezing.", answerZh: "工具接受通过粘贴、输入或拖放方式的纯文本输入。对于文件类工具，可上传最大 50MB 的文件。大输入会分块处理以防止浏览器卡顿。" },
      { question: "When would a developer reach for this tool?", questionZh: "开发者什么时候会用到这个工具？", answer: "During code review when you need to quickly remove all html tags from text, keeping only content, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "代码审查时需要快速remove all html tags from text, keeping only content，或调试数据管道时验证中间格式。在 API 开发中做快速转换也很方便。" },
    ],
  },
  {
    slug: "cron-parser",
    faqs: [
      { question: "What does the Cron Expression Parser actually do with my input?", questionZh: "Cron Expression Parser具体如何处理我的输入？", answer: "Parse cron expressions and get human-readable schedules. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Parse cron expressions and get human-readable schedules。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the Cron Expression Parser accept?", questionZh: "Cron Expression Parser接受什么类型的输入？", answer: "The tool accepts plain text input via paste, type, or drag-and-drop. For file-based tools, you can upload files up to 50MB. Large inputs are processed in chunks to prevent browser freezing.", answerZh: "工具接受通过粘贴、输入或拖放方式的纯文本输入。对于文件类工具，可上传最大 50MB 的文件。大输入会分块处理以防止浏览器卡顿。" },
      { question: "When would a developer reach for this tool?", questionZh: "开发者什么时候会用到这个工具？", answer: "During code review when you need to quickly parse cron expressions and get human-readable schedules, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "代码审查时需要快速parse cron expressions and get human-readable schedules，或调试数据管道时验证中间格式。在 API 开发中做快速转换也很方便。" },
    ],
  },
  {
    slug: "text-to-binary",
    faqs: [
      { question: "What does the Text to Binary Converter actually do with my input?", questionZh: "Text to Binary Converter具体如何处理我的输入？", answer: "Convert text to binary code and binary back to text. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert text to binary code and binary back to text。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Which formats can I convert between?", questionZh: "可以在哪些格式之间转换？", answer: "Supported conversions include . Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. The tool auto-detects your input format.", answerZh: "支持的转换包括。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "What kind of text works best with this tool?", questionZh: "什么样的文本最适合这个工具？", answer: "Any plain text — from emails and articles to code comments and data exports. The tool processes text of any length, from a single word to entire documents.", answerZh: "任何纯文本——从邮件和文章到代码注释和数据导出。工具处理任意长度的文本，从单个词到整个文档。" },
    ],
  },
  {
    slug: "html-preview",
    faqs: [
      { question: "What does the HTML Preview actually do with my input?", questionZh: "HTML Preview具体如何处理我的输入？", answer: "Write and preview HTML code in real-time in a sandbox. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Write and preview HTML code in real-time in a sandbox。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the HTML Preview accept?", questionZh: "HTML Preview接受什么类型的输入？", answer: "The tool accepts plain text input via paste, type, or drag-and-drop. For file-based tools, you can upload files up to 50MB. Large inputs are processed in chunks to prevent browser freezing.", answerZh: "工具接受通过粘贴、输入或拖放方式的纯文本输入。对于文件类工具，可上传最大 50MB 的文件。大输入会分块处理以防止浏览器卡顿。" },
      { question: "When would a developer reach for this tool?", questionZh: "开发者什么时候会用到这个工具？", answer: "During code review when you need to quickly write and preview html code in real-time in a sandbox, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "代码审查时需要快速write and preview html code in real-time in a sandbox，或调试数据管道时验证中间格式。在 API 开发中做快速转换也很方便。" },
    ],
  },
  {
    slug: "ip-calculator",
    faqs: [
      { question: "What does the IP Subnet Calculator actually do with my input?", questionZh: "IP Subnet Calculator具体如何处理我的输入？", answer: "Calculate network subnet, CIDR, broadcast, and host range. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Calculate network subnet, CIDR, broadcast, and host range。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the IP Subnet Calculator accept?", questionZh: "IP Subnet Calculator接受什么类型的输入？", answer: "The tool accepts plain text input via paste, type, or drag-and-drop. For file-based tools, you can upload files up to 50MB. Large inputs are processed in chunks to prevent browser freezing.", answerZh: "工具接受通过粘贴、输入或拖放方式的纯文本输入。对于文件类工具，可上传最大 50MB 的文件。大输入会分块处理以防止浏览器卡顿。" },
      { question: "When would a developer reach for this tool?", questionZh: "开发者什么时候会用到这个工具？", answer: "During code review when you need to quickly calculate network subnet, cidr, broadcast, and host range, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "代码审查时需要快速calculate network subnet, cidr, broadcast, and host range，或调试数据管道时验证中间格式。在 API 开发中做快速转换也很方便。" },
    ],
  },
  {
    slug: "jwt-generator",
    faqs: [
      { question: "What does the JWT Generator actually do with my input?", questionZh: "JWT Generator具体如何处理我的输入？", answer: "Generate JWT tokens with custom header and payload. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Generate JWT tokens with custom header and payload。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Can I customize the output from the JWT Generator?", questionZh: "可以自定义JWT Generator的输出吗？", answer: "Yes. After generating the default output, you can adjust parameters like length, format, and quantity. The result updates in real time as you change settings.", answerZh: "可以。生成默认输出后，你可以调整长度、格式和数量等参数。修改设置时结果会实时更新。" },
      { question: "When would a developer reach for this tool?", questionZh: "开发者什么时候会用到这个工具？", answer: "During code review when you need to quickly generate jwt tokens with custom header and payload, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "代码审查时需要快速generate jwt tokens with custom header and payload，或调试数据管道时验证中间格式。在 API 开发中做快速转换也很方便。" },
    ],
  },
  {
    slug: "text-to-slug",
    faqs: [
      { question: "What does the Text to URL Slug actually do with my input?", questionZh: "Text to URL Slug具体如何处理我的输入？", answer: "Convert any text into clean, SEO-friendly URL slugs. Remove special characters, normalize spaces, and generate optimized permalinks. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert any text into clean, SEO-friendly URL slugs. Remove special characters, normalize spaces, and generate optimized permalinks。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Which formats can I convert between?", questionZh: "可以在哪些格式之间转换？", answer: "Supported conversions include . Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. The tool auto-detects your input format.", answerZh: "支持的转换包括。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "What kind of text works best with this tool?", questionZh: "什么样的文本最适合这个工具？", answer: "Any plain text — from emails and articles to code comments and data exports. The tool processes text of any length, from a single word to entire documents.", answerZh: "任何纯文本——从邮件和文章到代码注释和数据导出。工具处理任意长度的文本，从单个词到整个文档。" },
    ],
  },
  {
    slug: "text-sorter",
    faqs: [
      { question: "What does the Text Sorter actually do with my input?", questionZh: "Text Sorter具体如何处理我的输入？", answer: "Sort text lines alphabetically (A-Z or Z-A), by line length, or in reverse order. Remove duplicates and organize lists instantly. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Sort text lines alphabetically (A-Z or Z-A), by line length, or in reverse order. Remove duplicates and organize lists instantly。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "How accurate is the Text Sorter?", questionZh: "Text Sorter的准确性如何？", answer: "The Text Sorter uses deterministic algorithms — the same input always produces the same output. Every character is processed individually, so even single-character changes are caught and displayed.", answerZh: "Text Sorter使用确定性算法——相同输入始终产生相同输出。每个字符都被单独处理，即使单字符变化也能被捕获和显示。" },
      { question: "What kind of text works best with this tool?", questionZh: "什么样的文本最适合这个工具？", answer: "Any plain text — from emails and articles to code comments and data exports. The tool processes text of any length, from a single word to entire documents.", answerZh: "任何纯文本——从邮件和文章到代码注释和数据导出。工具处理任意长度的文本，从单个词到整个文档。" },
    ],
  },
  {
    slug: "text-deduplicator",
    faqs: [
      { question: "What does the Line Deduplicator actually do with my input?", questionZh: "Line Deduplicator具体如何处理我的输入？", answer: "Remove duplicate lines from text while preserving order. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Remove duplicate lines from text while preserving order。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "How accurate is the Line Deduplicator?", questionZh: "Line Deduplicator的准确性如何？", answer: "The Line Deduplicator uses deterministic algorithms — the same input always produces the same output. Every character is processed individually, so even single-character changes are caught and displayed.", answerZh: "Line Deduplicator使用确定性算法——相同输入始终产生相同输出。每个字符都被单独处理，即使单字符变化也能被捕获和显示。" },
      { question: "What kind of text works best with this tool?", questionZh: "什么样的文本最适合这个工具？", answer: "Any plain text — from emails and articles to code comments and data exports. The tool processes text of any length, from a single word to entire documents.", answerZh: "任何纯文本——从邮件和文章到代码注释和数据导出。工具处理任意长度的文本，从单个词到整个文档。" },
    ],
  },
  {
    slug: "text-reverser",
    faqs: [
      { question: "What does the Text Reverser actually do with my input?", questionZh: "Text Reverser具体如何处理我的输入？", answer: "Reverse text, words, sentences, or entire lines instantly. Useful for creating mirrored text, solving puzzles, or formatting data. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Reverse text, words, sentences, or entire lines instantly. Useful for creating mirrored text, solving puzzles, or formatting data。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the Text Reverser accept?", questionZh: "Text Reverser接受什么类型的输入？", answer: "The tool accepts plain text input via paste, type, or drag-and-drop. For file-based tools, you can upload files up to 50MB. Large inputs are processed in chunks to prevent browser freezing.", answerZh: "工具接受通过粘贴、输入或拖放方式的纯文本输入。对于文件类工具，可上传最大 50MB 的文件。大输入会分块处理以防止浏览器卡顿。" },
      { question: "What kind of text works best with this tool?", questionZh: "什么样的文本最适合这个工具？", answer: "Any plain text — from emails and articles to code comments and data exports. The tool processes text of any length, from a single word to entire documents.", answerZh: "任何纯文本——从邮件和文章到代码注释和数据导出。工具处理任意长度的文本，从单个词到整个文档。" },
    ],
  },
  {
    slug: "random-string-generator",
    faqs: [
      { question: "What does the Random String Generator actually do with my input?", questionZh: "Random String Generator具体如何处理我的输入？", answer: "Generate random strings with custom characters and length. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Generate random strings with custom characters and length。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Can I customize the output from the Random String Generator?", questionZh: "可以自定义Random String Generator的输出吗？", answer: "Yes. After generating the default output, you can adjust parameters like length, format, and quantity. The result updates in real time as you change settings.", answerZh: "可以。生成默认输出后，你可以调整长度、格式和数量等参数。修改设置时结果会实时更新。" },
      { question: "What kind of text works best with this tool?", questionZh: "什么样的文本最适合这个工具？", answer: "Any plain text — from emails and articles to code comments and data exports. The tool processes text of any length, from a single word to entire documents.", answerZh: "任何纯文本——从邮件和文章到代码注释和数据导出。工具处理任意长度的文本，从单个词到整个文档。" },
    ],
  },
  {
    slug: "palindrome-checker",
    faqs: [
      { question: "What does the Palindrome Checker actually do with my input?", questionZh: "Palindrome Checker具体如何处理我的输入？", answer: "Check if text reads the same forwards and backwards. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Check if text reads the same forwards and backwards。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "How accurate is the Palindrome Checker?", questionZh: "Palindrome Checker的准确性如何？", answer: "The Palindrome Checker uses deterministic algorithms — the same input always produces the same output. Every character is processed individually, so even single-character changes are caught and displayed.", answerZh: "Palindrome Checker使用确定性算法——相同输入始终产生相同输出。每个字符都被单独处理，即使单字符变化也能被捕获和显示。" },
      { question: "What kind of text works best with this tool?", questionZh: "什么样的文本最适合这个工具？", answer: "Any plain text — from emails and articles to code comments and data exports. The tool processes text of any length, from a single word to entire documents.", answerZh: "任何纯文本——从邮件和文章到代码注释和数据导出。工具处理任意长度的文本，从单个词到整个文档。" },
    ],
  },
  {
    slug: "morse-code-converter",
    faqs: [
      { question: "What does the Morse Code Converter actually do with my input?", questionZh: "Morse Code Converter具体如何处理我的输入？", answer: "Convert text to Morse code and decode Morse code back to readable text. Learn Morse alphabet with visual audio playback support. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert text to Morse code and decode Morse code back to readable text. Learn Morse alphabet with visual audio playback support。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Which formats can I convert between?", questionZh: "可以在哪些格式之间转换？", answer: "Supported conversions include . Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. The tool auto-detects your input format.", answerZh: "支持的转换包括。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "What kind of text works best with this tool?", questionZh: "什么样的文本最适合这个工具？", answer: "Any plain text — from emails and articles to code comments and data exports. The tool processes text of any length, from a single word to entire documents.", answerZh: "任何纯文本——从邮件和文章到代码注释和数据导出。工具处理任意长度的文本，从单个词到整个文档。" },
    ],
  },
  {
    slug: "temperature-converter",
    faqs: [
      { question: "What does the Temperature Converter actually do with my input?", questionZh: "Temperature Converter具体如何处理我的输入？", answer: "Convert temperatures between Celsius, Fahrenheit, and Kelvin scales instantly. Perfect for cooking, science, weather, and travel calculations. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert temperatures between Celsius, Fahrenheit, and Kelvin scales instantly. Perfect for cooking, science, weather, and travel calculations。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Which formats can I convert between?", questionZh: "可以在哪些格式之间转换？", answer: "Supported conversions include Celsius, Fahrenheit, and Kelvin scales instantly. Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. The tool auto-detects your input format.", answerZh: "支持的转换包括Celsius, Fahrenheit, and Kelvin scales instantly。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "Is the conversion lossless?", questionZh: "转换是无损的吗？", answer: "Text-based conversions (JSON to YAML, CSV to JSON) are lossless — every data point is preserved. For media formats, quality depends on the target format's compression.", answerZh: "基于文本的转换（JSON 转 YAML、CSV 转 JSON）是无损的——每个数据点都被保留。对于媒体格式，质量取决于目标格式的压缩方式。" },
    ],
  },
  {
    slug: "weight-converter",
    faqs: [
      { question: "What does the Weight Converter actually do with my input?", questionZh: "Weight Converter具体如何处理我的输入？", answer: "Convert between kilograms, pounds, ounces, and more. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert between kilograms, pounds, ounces, and more。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Which formats can I convert between?", questionZh: "可以在哪些格式之间转换？", answer: "Supported conversions include kilograms, pounds, ounces, and more. Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. The tool auto-detects your input format.", answerZh: "支持的转换包括kilograms, pounds, ounces, and more。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "Is the conversion lossless?", questionZh: "转换是无损的吗？", answer: "Text-based conversions (JSON to YAML, CSV to JSON) are lossless — every data point is preserved. For media formats, quality depends on the target format's compression.", answerZh: "基于文本的转换（JSON 转 YAML、CSV 转 JSON）是无损的——每个数据点都被保留。对于媒体格式，质量取决于目标格式的压缩方式。" },
    ],
  },
  {
    slug: "length-converter",
    faqs: [
      { question: "What does the Length Converter actually do with my input?", questionZh: "Length Converter具体如何处理我的输入？", answer: "Convert between meters, feet, inches, kilometers, and miles. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert between meters, feet, inches, kilometers, and miles。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Which formats can I convert between?", questionZh: "可以在哪些格式之间转换？", answer: "Supported conversions include meters, feet, inches, kilometers, and miles. Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. The tool auto-detects your input format.", answerZh: "支持的转换包括meters, feet, inches, kilometers, and miles。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "Is the conversion lossless?", questionZh: "转换是无损的吗？", answer: "Text-based conversions (JSON to YAML, CSV to JSON) are lossless — every data point is preserved. For media formats, quality depends on the target format's compression.", answerZh: "基于文本的转换（JSON 转 YAML、CSV 转 JSON）是无损的——每个数据点都被保留。对于媒体格式，质量取决于目标格式的压缩方式。" },
    ],
  },
  {
    slug: "data-size-converter",
    faqs: [
      { question: "What does the Data Size Converter actually do with my input?", questionZh: "Data Size Converter具体如何处理我的输入？", answer: "Convert between bytes, kilobytes, megabytes, gigabytes, terabytes and more. Compare file sizes, storage capacity, and data transfer amounts. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert between bytes, kilobytes, megabytes, gigabytes, terabytes and more. Compare file sizes, storage capacity, and data transfer amounts。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Which formats can I convert between?", questionZh: "可以在哪些格式之间转换？", answer: "Supported conversions include bytes, kilobytes, megabytes, gigabytes, terabytes and more. Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. The tool auto-detects your input format.", answerZh: "支持的转换包括bytes, kilobytes, megabytes, gigabytes, terabytes and more。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "Is the conversion lossless?", questionZh: "转换是无损的吗？", answer: "Text-based conversions (JSON to YAML, CSV to JSON) are lossless — every data point is preserved. For media formats, quality depends on the target format's compression.", answerZh: "基于文本的转换（JSON 转 YAML、CSV 转 JSON）是无损的——每个数据点都被保留。对于媒体格式，质量取决于目标格式的压缩方式。" },
    ],
  },
  {
    slug: "speed-converter",
    faqs: [
      { question: "What does the Speed Converter actually do with my input?", questionZh: "Speed Converter具体如何处理我的输入？", answer: "Convert speed between km/h, mph, knots, m/s, and mach. Useful for driving, aviation, marine navigation, and physics calculations. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert speed between km/h, mph, knots, m/s, and mach. Useful for driving, aviation, marine navigation, and physics calculations。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Which formats can I convert between?", questionZh: "可以在哪些格式之间转换？", answer: "Supported conversions include km/h, mph, knots, m/s, and mach. Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. The tool auto-detects your input format.", answerZh: "支持的转换包括km/h, mph, knots, m/s, and mach。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "Is the conversion lossless?", questionZh: "转换是无损的吗？", answer: "Text-based conversions (JSON to YAML, CSV to JSON) are lossless — every data point is preserved. For media formats, quality depends on the target format's compression.", answerZh: "基于文本的转换（JSON 转 YAML、CSV 转 JSON）是无损的——每个数据点都被保留。对于媒体格式，质量取决于目标格式的压缩方式。" },
    ],
  },
  {
    slug: "area-converter",
    faqs: [
      { question: "What does the Area Converter actually do with my input?", questionZh: "Area Converter具体如何处理我的输入？", answer: "Convert between square meters, acres, hectares, sq ft. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert between square meters, acres, hectares, sq ft。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Which formats can I convert between?", questionZh: "可以在哪些格式之间转换？", answer: "Supported conversions include square meters, acres, hectares, sq ft. Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. The tool auto-detects your input format.", answerZh: "支持的转换包括square meters, acres, hectares, sq ft。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "Is the conversion lossless?", questionZh: "转换是无损的吗？", answer: "Text-based conversions (JSON to YAML, CSV to JSON) are lossless — every data point is preserved. For media formats, quality depends on the target format's compression.", answerZh: "基于文本的转换（JSON 转 YAML、CSV 转 JSON）是无损的——每个数据点都被保留。对于媒体格式，质量取决于目标格式的压缩方式。" },
    ],
  },
  {
    slug: "image-to-base64",
    faqs: [
      { question: "What does the Image to Base64 actually do with my input?", questionZh: "Image to Base64具体如何处理我的输入？", answer: "Convert images to Base64 data URI for inline embedding. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert images to Base64 data URI for inline embedding。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Which formats can I convert between?", questionZh: "可以在哪些格式之间转换？", answer: "Supported conversions include . Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. The tool auto-detects your input format.", answerZh: "支持的转换包括。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "Can I use this for bulk image processing?", questionZh: "可以用来批量处理图片吗？", answer: "While the tool focuses on single-image operations for speed, you can process multiple images sequentially. For automated bulk processing, consider scripting with the same algorithms.", answerZh: "虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。如需自动化批量处理，建议使用相同算法编写脚本。" },
    ],
  },
  {
    slug: "random-number-generator",
    faqs: [
      { question: "What does the Random Number Generator actually do with my input?", questionZh: "Random Number Generator具体如何处理我的输入？", answer: "Generate random numbers within a custom range. Perfect for lotteries, giveaways, statistical sampling, and game development. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Generate random numbers within a custom range. Perfect for lotteries, giveaways, statistical sampling, and game development。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Can I customize the output from the Random Number Generator?", questionZh: "可以自定义Random Number Generator的输出吗？", answer: "Yes. After generating the default output, you can adjust parameters like length, format, and quantity. The result updates in real time as you change settings.", answerZh: "可以。生成默认输出后，你可以调整长度、格式和数量等参数。修改设置时结果会实时更新。" },
      { question: "How does this compare to desktop software?", questionZh: "跟桌面软件相比怎么样？", answer: "The Random Number Generator covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "Random Number Generator无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "image-to-pdf",
    faqs: [
      { question: "What does the Image to PDF actually do with my input?", questionZh: "Image to PDF具体如何处理我的输入？", answer: "Convert images (JPG, PNG) into a single PDF document. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert images (JPG, PNG) into a single PDF document。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Which formats can I convert between?", questionZh: "可以在哪些格式之间转换？", answer: "Supported conversions include . Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. The tool auto-detects your input format.", answerZh: "支持的转换包括。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "How does this compare to desktop software?", questionZh: "跟桌面软件相比怎么样？", answer: "The Image to PDF covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "Image to PDF无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "pdf-splitter",
    faqs: [
      { question: "What does the PDF Splitter actually do with my input?", questionZh: "PDF Splitter具体如何处理我的输入？", answer: "Split PDF by page ranges or extract specific pages. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Split PDF by page ranges or extract specific pages。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the PDF Splitter accept?", questionZh: "PDF Splitter接受什么类型的输入？", answer: "The tool accepts plain text input via paste, type, or drag-and-drop. For file-based tools, you can upload files up to 50MB. Large inputs are processed in chunks to prevent browser freezing.", answerZh: "工具接受通过粘贴、输入或拖放方式的纯文本输入。对于文件类工具，可上传最大 50MB 的文件。大输入会分块处理以防止浏览器卡顿。" },
      { question: "How does this compare to desktop software?", questionZh: "跟桌面软件相比怎么样？", answer: "The PDF Splitter covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "PDF Splitter无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "pdf-rotator",
    faqs: [
      { question: "What does the PDF Rotator actually do with my input?", questionZh: "PDF Rotator具体如何处理我的输入？", answer: "Rotate PDF pages by 90, 180, or 270 degrees. Fix scanned documents, correct page orientation, and rearrange your PDF layouts. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Rotate PDF pages by 90, 180, or 270 degrees. Fix scanned documents, correct page orientation, and rearrange your PDF layouts。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the PDF Rotator accept?", questionZh: "PDF Rotator接受什么类型的输入？", answer: "The tool accepts plain text input via paste, type, or drag-and-drop. For file-based tools, you can upload files up to 50MB. Large inputs are processed in chunks to prevent browser freezing.", answerZh: "工具接受通过粘贴、输入或拖放方式的纯文本输入。对于文件类工具，可上传最大 50MB 的文件。大输入会分块处理以防止浏览器卡顿。" },
      { question: "How does this compare to desktop software?", questionZh: "跟桌面软件相比怎么样？", answer: "The PDF Rotator covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "PDF Rotator无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "pdf-page-remover",
    faqs: [
      { question: "What does the PDF Page Remover actually do with my input?", questionZh: "PDF Page Remover具体如何处理我的输入？", answer: "Remove unwanted pages from your PDF documents quickly. Extract specific pages, delete blank sheets, and trim bulky files. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Remove unwanted pages from your PDF documents quickly. Extract specific pages, delete blank sheets, and trim bulky files。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the PDF Page Remover accept?", questionZh: "PDF Page Remover接受什么类型的输入？", answer: "The tool accepts plain text input via paste, type, or drag-and-drop. For file-based tools, you can upload files up to 50MB. Large inputs are processed in chunks to prevent browser freezing.", answerZh: "工具接受通过粘贴、输入或拖放方式的纯文本输入。对于文件类工具，可上传最大 50MB 的文件。大输入会分块处理以防止浏览器卡顿。" },
      { question: "How does this compare to desktop software?", questionZh: "跟桌面软件相比怎么样？", answer: "The PDF Page Remover covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "PDF Page Remover无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "image-cropper",
    faqs: [
      { question: "What does the Image Cropper actually do with my input?", questionZh: "Image Cropper具体如何处理我的输入？", answer: "Crop images by dragging a selection area on canvas. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Crop images by dragging a selection area on canvas。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What happens to image quality after processing?", questionZh: "处理后图片质量会怎样？", answer: "The Image Cropper uses browser-native Canvas API for processing. For resize operations, it applies bilinear interpolation to maintain sharpness. You can choose output format and quality level before downloading.", answerZh: "Image Cropper使用浏览器原生 Canvas API 处理图片。调整尺寸时应用双线性插值保持清晰度。下载前可选择输出格式和质量级别。" },
      { question: "Can I use this for bulk image processing?", questionZh: "可以用来批量处理图片吗？", answer: "While the tool focuses on single-image operations for speed, you can process multiple images sequentially. For automated bulk processing, consider scripting with the same algorithms.", answerZh: "虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。如需自动化批量处理，建议使用相同算法编写脚本。" },
    ],
  },
  {
    slug: "image-filters",
    faqs: [
      { question: "What does the Image Filters actually do with my input?", questionZh: "Image Filters具体如何处理我的输入？", answer: "Apply grayscale, sepia, blur, brightness, and contrast filters. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Apply grayscale, sepia, blur, brightness, and contrast filters。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What happens to image quality after processing?", questionZh: "处理后图片质量会怎样？", answer: "The Image Filters uses browser-native Canvas API for processing. For resize operations, it applies bilinear interpolation to maintain sharpness. You can choose output format and quality level before downloading.", answerZh: "Image Filters使用浏览器原生 Canvas API 处理图片。调整尺寸时应用双线性插值保持清晰度。下载前可选择输出格式和质量级别。" },
      { question: "Can I use this for bulk image processing?", questionZh: "可以用来批量处理图片吗？", answer: "While the tool focuses on single-image operations for speed, you can process multiple images sequentially. For automated bulk processing, consider scripting with the same algorithms.", answerZh: "虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。如需自动化批量处理，建议使用相同算法编写脚本。" },
    ],
  },
  {
    slug: "gif-maker",
    faqs: [
      { question: "What does the GIF Maker actually do with my input?", questionZh: "GIF Maker具体如何处理我的输入？", answer: "Create animated GIFs from multiple images or video clips. Set frame delay, resize output, and optimize for web or social media. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Create animated GIFs from multiple images or video clips. Set frame delay, resize output, and optimize for web or social media。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the GIF Maker accept?", questionZh: "GIF Maker接受什么类型的输入？", answer: "The tool accepts plain text input via paste, type, or drag-and-drop. For file-based tools, you can upload files up to 50MB. Large inputs are processed in chunks to prevent browser freezing.", answerZh: "工具接受通过粘贴、输入或拖放方式的纯文本输入。对于文件类工具，可上传最大 50MB 的文件。大输入会分块处理以防止浏览器卡顿。" },
      { question: "Can I use this for bulk image processing?", questionZh: "可以用来批量处理图片吗？", answer: "While the tool focuses on single-image operations for speed, you can process multiple images sequentially. For automated bulk processing, consider scripting with the same algorithms.", answerZh: "虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。如需自动化批量处理，建议使用相同算法编写脚本。" },
    ],
  },
  {
    slug: "image-watermark",
    faqs: [
      { question: "What does the Image Watermark actually do with my input?", questionZh: "Image Watermark具体如何处理我的输入？", answer: "Add text watermark to images with position and opacity control. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Add text watermark to images with position and opacity control。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What happens to image quality after processing?", questionZh: "处理后图片质量会怎样？", answer: "The Image Watermark uses browser-native Canvas API for processing. For resize operations, it applies bilinear interpolation to maintain sharpness. You can choose output format and quality level before downloading.", answerZh: "Image Watermark使用浏览器原生 Canvas API 处理图片。调整尺寸时应用双线性插值保持清晰度。下载前可选择输出格式和质量级别。" },
      { question: "Can I use this for bulk image processing?", questionZh: "可以用来批量处理图片吗？", answer: "While the tool focuses on single-image operations for speed, you can process multiple images sequentially. For automated bulk processing, consider scripting with the same algorithms.", answerZh: "虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。如需自动化批量处理，建议使用相同算法编写脚本。" },
    ],
  },
  {
    slug: "image-merge",
    faqs: [
      { question: "What does the Image Merger actually do with my input?", questionZh: "Image Merger具体如何处理我的输入？", answer: "Combine multiple images into one side by side or grid. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Combine multiple images into one side by side or grid。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What happens to image quality after processing?", questionZh: "处理后图片质量会怎样？", answer: "The Image Merger uses browser-native Canvas API for processing. For resize operations, it applies bilinear interpolation to maintain sharpness. You can choose output format and quality level before downloading.", answerZh: "Image Merger使用浏览器原生 Canvas API 处理图片。调整尺寸时应用双线性插值保持清晰度。下载前可选择输出格式和质量级别。" },
      { question: "Can I use this for bulk image processing?", questionZh: "可以用来批量处理图片吗？", answer: "While the tool focuses on single-image operations for speed, you can process multiple images sequentially. For automated bulk processing, consider scripting with the same algorithms.", answerZh: "虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。如需自动化批量处理，建议使用相同算法编写脚本。" },
    ],
  },
  {
    slug: "image-splitter",
    faqs: [
      { question: "What does the Image Splitter actually do with my input?", questionZh: "Image Splitter具体如何处理我的输入？", answer: "Split a single image into multiple tiles by rows and columns. Perfect for creating sprite sheets, grid layouts, and image segments. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Split a single image into multiple tiles by rows and columns. Perfect for creating sprite sheets, grid layouts, and image segments。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What happens to image quality after processing?", questionZh: "处理后图片质量会怎样？", answer: "The Image Splitter uses browser-native Canvas API for processing. For resize operations, it applies bilinear interpolation to maintain sharpness. You can choose output format and quality level before downloading.", answerZh: "Image Splitter使用浏览器原生 Canvas API 处理图片。调整尺寸时应用双线性插值保持清晰度。下载前可选择输出格式和质量级别。" },
      { question: "Can I use this for bulk image processing?", questionZh: "可以用来批量处理图片吗？", answer: "While the tool focuses on single-image operations for speed, you can process multiple images sequentially. For automated bulk processing, consider scripting with the same algorithms.", answerZh: "虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。如需自动化批量处理，建议使用相同算法编写脚本。" },
    ],
  },
  {
    slug: "image-flip",
    faqs: [
      { question: "What does the Image Flip & Rotate actually do with my input?", questionZh: "Image Flip & Rotate具体如何处理我的输入？", answer: "Flip images horizontally or vertically and rotate by 90-degree increments. Mirror selfies, correct orientation, and transform photos instantly. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Flip images horizontally or vertically and rotate by 90-degree increments. Mirror selfies, correct orientation, and transform photos instantly。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What happens to image quality after processing?", questionZh: "处理后图片质量会怎样？", answer: "The Image Flip & Rotate uses browser-native Canvas API for processing. For resize operations, it applies bilinear interpolation to maintain sharpness. You can choose output format and quality level before downloading.", answerZh: "Image Flip & Rotate使用浏览器原生 Canvas API 处理图片。调整尺寸时应用双线性插值保持清晰度。下载前可选择输出格式和质量级别。" },
      { question: "Can I use this for bulk image processing?", questionZh: "可以用来批量处理图片吗？", answer: "While the tool focuses on single-image operations for speed, you can process multiple images sequentially. For automated bulk processing, consider scripting with the same algorithms.", answerZh: "虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。如需自动化批量处理，建议使用相同算法编写脚本。" },
    ],
  },
  {
    slug: "image-border",
    faqs: [
      { question: "What does the Image Border actually do with my input?", questionZh: "Image Border具体如何处理我的输入？", answer: "Add customizable borders, frames, and padding to images. Choose colors, widths, corner radius, and shadow effects for polished photos. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Add customizable borders, frames, and padding to images. Choose colors, widths, corner radius, and shadow effects for polished photos。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What happens to image quality after processing?", questionZh: "处理后图片质量会怎样？", answer: "The Image Border uses browser-native Canvas API for processing. For resize operations, it applies bilinear interpolation to maintain sharpness. You can choose output format and quality level before downloading.", answerZh: "Image Border使用浏览器原生 Canvas API 处理图片。调整尺寸时应用双线性插值保持清晰度。下载前可选择输出格式和质量级别。" },
      { question: "Can I use this for bulk image processing?", questionZh: "可以用来批量处理图片吗？", answer: "While the tool focuses on single-image operations for speed, you can process multiple images sequentially. For automated bulk processing, consider scripting with the same algorithms.", answerZh: "虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。如需自动化批量处理，建议使用相同算法编写脚本。" },
    ],
  },
  {
    slug: "meme-generator",
    faqs: [
      { question: "What does the Meme Generator actually do with my input?", questionZh: "Meme Generator具体如何处理我的输入？", answer: "Create memes by adding top and bottom text to images. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Create memes by adding top and bottom text to images。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Can I customize the output from the Meme Generator?", questionZh: "可以自定义Meme Generator的输出吗？", answer: "Yes. After generating the default output, you can adjust parameters like length, format, and quantity. The result updates in real time as you change settings.", answerZh: "可以。生成默认输出后，你可以调整长度、格式和数量等参数。修改设置时结果会实时更新。" },
      { question: "Can I use this for bulk image processing?", questionZh: "可以用来批量处理图片吗？", answer: "While the tool focuses on single-image operations for speed, you can process multiple images sequentially. For automated bulk processing, consider scripting with the same algorithms.", answerZh: "虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。如需自动化批量处理，建议使用相同算法编写脚本。" },
    ],
  },
  {
    slug: "image-to-sketch",
    faqs: [
      { question: "What does the Image to Sketch actually do with my input?", questionZh: "Image to Sketch具体如何处理我的输入？", answer: "Convert photos into pencil sketch drawings and line art. Apply artistic filters to create realistic hand-drawn effects from your images. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert photos into pencil sketch drawings and line art. Apply artistic filters to create realistic hand-drawn effects from your images。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Which formats can I convert between?", questionZh: "可以在哪些格式之间转换？", answer: "Supported conversions include . Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. The tool auto-detects your input format.", answerZh: "支持的转换包括。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "Can I use this for bulk image processing?", questionZh: "可以用来批量处理图片吗？", answer: "While the tool focuses on single-image operations for speed, you can process multiple images sequentially. For automated bulk processing, consider scripting with the same algorithms.", answerZh: "虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。如需自动化批量处理，建议使用相同算法编写脚本。" },
    ],
  },
  {
    slug: "emoji-remover",
    faqs: [
      { question: "What does the Emoji Remover actually do with my input?", questionZh: "Emoji Remover具体如何处理我的输入？", answer: "Remove all emoji characters from text while keeping words. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Remove all emoji characters from text while keeping words。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the Emoji Remover accept?", questionZh: "Emoji Remover接受什么类型的输入？", answer: "The tool accepts plain text input via paste, type, or drag-and-drop. For file-based tools, you can upload files up to 50MB. Large inputs are processed in chunks to prevent browser freezing.", answerZh: "工具接受通过粘贴、输入或拖放方式的纯文本输入。对于文件类工具，可上传最大 50MB 的文件。大输入会分块处理以防止浏览器卡顿。" },
      { question: "What kind of text works best with this tool?", questionZh: "什么样的文本最适合这个工具？", answer: "Any plain text — from emails and articles to code comments and data exports. The tool processes text of any length, from a single word to entire documents.", answerZh: "任何纯文本——从邮件和文章到代码注释和数据导出。工具处理任意长度的文本，从单个词到整个文档。" },
    ],
  },
  {
    slug: "unicode-detector",
    faqs: [
      { question: "What does the Unicode Character Detector actually do with my input?", questionZh: "Unicode Character Detector具体如何处理我的输入？", answer: "Inspect Unicode characters with codepoint and category info. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Inspect Unicode characters with codepoint and category info。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the Unicode Character Detector accept?", questionZh: "Unicode Character Detector接受什么类型的输入？", answer: "The tool accepts plain text input via paste, type, or drag-and-drop. For file-based tools, you can upload files up to 50MB. Large inputs are processed in chunks to prevent browser freezing.", answerZh: "工具接受通过粘贴、输入或拖放方式的纯文本输入。对于文件类工具，可上传最大 50MB 的文件。大输入会分块处理以防止浏览器卡顿。" },
      { question: "What kind of text works best with this tool?", questionZh: "什么样的文本最适合这个工具？", answer: "Any plain text — from emails and articles to code comments and data exports. The tool processes text of any length, from a single word to entire documents.", answerZh: "任何纯文本——从邮件和文章到代码注释和数据导出。工具处理任意长度的文本，从单个词到整个文档。" },
    ],
  },
  {
    slug: "caesar-cipher",
    faqs: [
      { question: "What does the Caesar Cipher actually do with my input?", questionZh: "Caesar Cipher具体如何处理我的输入？", answer: "Encode and decode text using the classic Caesar shift cipher. Choose shift values, try brute force decoding, and learn cryptography basics. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Encode and decode text using the classic Caesar shift cipher. Choose shift values, try brute force decoding, and learn cryptography basics。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the Caesar Cipher accept?", questionZh: "Caesar Cipher接受什么类型的输入？", answer: "The tool accepts plain text input via paste, type, or drag-and-drop. For file-based tools, you can upload files up to 50MB. Large inputs are processed in chunks to prevent browser freezing.", answerZh: "工具接受通过粘贴、输入或拖放方式的纯文本输入。对于文件类工具，可上传最大 50MB 的文件。大输入会分块处理以防止浏览器卡顿。" },
      { question: "What kind of text works best with this tool?", questionZh: "什么样的文本最适合这个工具？", answer: "Any plain text — from emails and articles to code comments and data exports. The tool processes text of any length, from a single word to entire documents.", answerZh: "任何纯文本——从邮件和文章到代码注释和数据导出。工具处理任意长度的文本，从单个词到整个文档。" },
    ],
  },
  {
    slug: "json-diff",
    faqs: [
      { question: "What does the JSON Diff actually do with my input?", questionZh: "JSON Diff具体如何处理我的输入？", answer: "Compare two JSON objects and highlight differences. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Compare two JSON objects and highlight differences。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "How accurate is the JSON Diff?", questionZh: "JSON Diff的准确性如何？", answer: "The JSON Diff uses deterministic algorithms — the same input always produces the same output. Every character is processed individually, so even single-character changes are caught and displayed.", answerZh: "JSON Diff使用确定性算法——相同输入始终产生相同输出。每个字符都被单独处理，即使单字符变化也能被捕获和显示。" },
      { question: "When would a developer reach for this tool?", questionZh: "开发者什么时候会用到这个工具？", answer: "During code review when you need to quickly compare two json objects and highlight differences, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "代码审查时需要快速compare two json objects and highlight differences，或调试数据管道时验证中间格式。在 API 开发中做快速转换也很方便。" },
    ],
  },
  {
    slug: "http-status-codes",
    faqs: [
      { question: "What does the HTTP Status Codes actually do with my input?", questionZh: "HTTP Status Codes具体如何处理我的输入？", answer: "Browse and search all HTTP status codes with descriptions. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Browse and search all HTTP status codes with descriptions。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the HTTP Status Codes accept?", questionZh: "HTTP Status Codes接受什么类型的输入？", answer: "The tool accepts plain text input via paste, type, or drag-and-drop. For file-based tools, you can upload files up to 50MB. Large inputs are processed in chunks to prevent browser freezing.", answerZh: "工具接受通过粘贴、输入或拖放方式的纯文本输入。对于文件类工具，可上传最大 50MB 的文件。大输入会分块处理以防止浏览器卡顿。" },
      { question: "When would a developer reach for this tool?", questionZh: "开发者什么时候会用到这个工具？", answer: "During code review when you need to quickly browse and search all http status codes with descriptions, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "代码审查时需要快速browse and search all http status codes with descriptions，或调试数据管道时验证中间格式。在 API 开发中做快速转换也很方便。" },
    ],
  },
  {
    slug: "timezone-converter",
    faqs: [
      { question: "What does the Time Zone Converter actually do with my input?", questionZh: "Time Zone Converter具体如何处理我的输入？", answer: "Convert time between different world time zones instantly. Schedule meetings across time zones and compare clocks worldwide. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert time between different world time zones instantly. Schedule meetings across time zones and compare clocks worldwide。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Which formats can I convert between?", questionZh: "可以在哪些格式之间转换？", answer: "Supported conversions include different world time zones instantly. Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. The tool auto-detects your input format.", answerZh: "支持的转换包括different world time zones instantly。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "How does this compare to desktop software?", questionZh: "跟桌面软件相比怎么样？", answer: "The Time Zone Converter covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "Time Zone Converter无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "binary-to-text",
    faqs: [
      { question: "What does the Binary to Text actually do with my input?", questionZh: "Binary to Text具体如何处理我的输入？", answer: "Convert binary code to text and text back to binary. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert binary code to text and text back to binary。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Which formats can I convert between?", questionZh: "可以在哪些格式之间转换？", answer: "Supported conversions include . Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. The tool auto-detects your input format.", answerZh: "支持的转换包括。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "What kind of text works best with this tool?", questionZh: "什么样的文本最适合这个工具？", answer: "Any plain text — from emails and articles to code comments and data exports. The tool processes text of any length, from a single word to entire documents.", answerZh: "任何纯文本——从邮件和文章到代码注释和数据导出。工具处理任意长度的文本，从单个词到整个文档。" },
    ],
  },
  {
    slug: "image-invert",
    faqs: [
      { question: "What does the Image Invert actually do with my input?", questionZh: "Image Invert具体如何处理我的输入？", answer: "Invert or negate colors in any image instantly. Create negative effects, X-ray looks, and artistic color reversals with one click. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Invert or negate colors in any image instantly. Create negative effects, X-ray looks, and artistic color reversals with one click。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What happens to image quality after processing?", questionZh: "处理后图片质量会怎样？", answer: "The Image Invert uses browser-native Canvas API for processing. For resize operations, it applies bilinear interpolation to maintain sharpness. You can choose output format and quality level before downloading.", answerZh: "Image Invert使用浏览器原生 Canvas API 处理图片。调整尺寸时应用双线性插值保持清晰度。下载前可选择输出格式和质量级别。" },
      { question: "Can I use this for bulk image processing?", questionZh: "可以用来批量处理图片吗？", answer: "While the tool focuses on single-image operations for speed, you can process multiple images sequentially. For automated bulk processing, consider scripting with the same algorithms.", answerZh: "虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。如需自动化批量处理，建议使用相同算法编写脚本。" },
    ],
  },
  {
    slug: "image-collage",
    faqs: [
      { question: "What does the Photo Collage Maker actually do with my input?", questionZh: "Photo Collage Maker具体如何处理我的输入？", answer: "Combine multiple photos into a beautiful collage grid. Choose layouts, spacing, background colors, and export in high resolution. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Combine multiple photos into a beautiful collage grid. Choose layouts, spacing, background colors, and export in high resolution。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What happens to image quality after processing?", questionZh: "处理后图片质量会怎样？", answer: "The Photo Collage Maker uses browser-native Canvas API for processing. For resize operations, it applies bilinear interpolation to maintain sharpness. You can choose output format and quality level before downloading.", answerZh: "Photo Collage Maker使用浏览器原生 Canvas API 处理图片。调整尺寸时应用双线性插值保持清晰度。下载前可选择输出格式和质量级别。" },
      { question: "Can I use this for bulk image processing?", questionZh: "可以用来批量处理图片吗？", answer: "While the tool focuses on single-image operations for speed, you can process multiple images sequentially. For automated bulk processing, consider scripting with the same algorithms.", answerZh: "虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。如需自动化批量处理，建议使用相同算法编写脚本。" },
    ],
  },
  {
    slug: "css-gradient",
    faqs: [
      { question: "What does the CSS Gradient Generator actually do with my input?", questionZh: "CSS Gradient Generator具体如何处理我的输入？", answer: "Create beautiful linear and radial CSS gradients visually. Copy the generated CSS code for backgrounds, buttons, and UI elements. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Create beautiful linear and radial CSS gradients visually. Copy the generated CSS code for backgrounds, buttons, and UI elements。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the CSS Gradient Generator accept?", questionZh: "CSS Gradient Generator接受什么类型的输入？", answer: "The tool accepts plain text input via paste, type, or drag-and-drop. For file-based tools, you can upload files up to 50MB. Large inputs are processed in chunks to prevent browser freezing.", answerZh: "工具接受通过粘贴、输入或拖放方式的纯文本输入。对于文件类工具，可上传最大 50MB 的文件。大输入会分块处理以防止浏览器卡顿。" },
      { question: "When would a developer reach for this tool?", questionZh: "开发者什么时候会用到这个工具？", answer: "During code review when you need to quickly create beautiful linear and radial css gradients visually. copy the generated css code for backgrounds, buttons, and ui elements, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "代码审查时需要快速create beautiful linear and radial css gradients visually. copy the generated css code for backgrounds, buttons, and ui elements，或调试数据管道时验证中间格式。在 API 开发中做快速转换也很方便。" },
    ],
  },
  {
    slug: "css-shadow",
    faqs: [
      { question: "What does the CSS Box Shadow Generator actually do with my input?", questionZh: "CSS Box Shadow Generator具体如何处理我的输入？", answer: "Design and preview custom CSS box shadows visually. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Design and preview custom CSS box shadows visually。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the CSS Box Shadow Generator accept?", questionZh: "CSS Box Shadow Generator接受什么类型的输入？", answer: "The tool accepts plain text input via paste, type, or drag-and-drop. For file-based tools, you can upload files up to 50MB. Large inputs are processed in chunks to prevent browser freezing.", answerZh: "工具接受通过粘贴、输入或拖放方式的纯文本输入。对于文件类工具，可上传最大 50MB 的文件。大输入会分块处理以防止浏览器卡顿。" },
      { question: "When would a developer reach for this tool?", questionZh: "开发者什么时候会用到这个工具？", answer: "During code review when you need to quickly design and preview custom css box shadows visually, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "代码审查时需要快速design and preview custom css box shadows visually，或调试数据管道时验证中间格式。在 API 开发中做快速转换也很方便。" },
    ],
  },
  {
    slug: "json-to-typescript",
    faqs: [
      { question: "What does the JSON to TypeScript actually do with my input?", questionZh: "JSON to TypeScript具体如何处理我的输入？", answer: "Convert JSON objects into TypeScript interfaces automatically. Generate type definitions from API responses and configuration files instantly. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert JSON objects into TypeScript interfaces automatically. Generate type definitions from API responses and configuration files instantly。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Which formats can I convert between?", questionZh: "可以在哪些格式之间转换？", answer: "Supported conversions include . Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. The tool auto-detects your input format.", answerZh: "支持的转换包括。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "When would a developer reach for this tool?", questionZh: "开发者什么时候会用到这个工具？", answer: "During code review when you need to quickly convert json objects into typescript interfaces automatically. generate type definitions from api responses and configuration files instantly, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "代码审查时需要快速convert json objects into typescript interfaces automatically. generate type definitions from api responses and configuration files instantly，或调试数据管道时验证中间格式。在 API 开发中做快速转换也很方便。" },
    ],
  },
  {
    slug: "html-to-jsx",
    faqs: [
      { question: "What does the HTML to JSX Converter actually do with my input?", questionZh: "HTML to JSX Converter具体如何处理我的输入？", answer: "Convert plain HTML code into React JSX syntax. Handle inline styles, class attributes, self-closing tags, and event handlers automatically. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert plain HTML code into React JSX syntax. Handle inline styles, class attributes, self-closing tags, and event handlers automatically。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Which formats can I convert between?", questionZh: "可以在哪些格式之间转换？", answer: "Supported conversions include . Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. The tool auto-detects your input format.", answerZh: "支持的转换包括。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "When would a developer reach for this tool?", questionZh: "开发者什么时候会用到这个工具？", answer: "During code review when you need to quickly convert plain html code into react jsx syntax. handle inline styles, class attributes, self-closing tags, and event handlers automatically, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "代码审查时需要快速convert plain html code into react jsx syntax. handle inline styles, class attributes, self-closing tags, and event handlers automatically，或调试数据管道时验证中间格式。在 API 开发中做快速转换也很方便。" },
    ],
  },
  {
    slug: "color-palette",
    faqs: [
      { question: "What does the Color Palette Generator actually do with my input?", questionZh: "Color Palette Generator具体如何处理我的输入？", answer: "Generate color schemes: monochromatic, complementary, and more. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Generate color schemes: monochromatic, complementary, and more。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Which color spaces does the Color Palette Generator support?", questionZh: "Color Palette Generator支持哪些色彩空间？", answer: "The tool works with HEX (#ffffff), RGB (255,255,255), HSL, HSV, and CMYK. You can also sample colors directly from an uploaded image or use the visual picker to select any shade.", answerZh: "工具支持 HEX (#ffffff)、RGB (255,255,255)、HSL、HSV 和 CMYK。你还可以从上传的图片中直接取样，或使用可视化选择器选择任意色调。" },
      { question: "When would a developer reach for this tool?", questionZh: "开发者什么时候会用到这个工具？", answer: "During code review when you need to quickly generate color schemes: monochromatic, complementary, and more, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "代码审查时需要快速generate color schemes: monochromatic, complementary, and more，或调试数据管道时验证中间格式。在 API 开发中做快速转换也很方便。" },
    ],
  },
  {
    slug: "roman-numeral",
    faqs: [
      { question: "What does the Roman Numeral Converter actually do with my input?", questionZh: "Roman Numeral Converter具体如何处理我的输入？", answer: "Convert between Roman numerals and Arabic numbers instantly. Works with values from 1 to 3999, including common numeral combinations. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert between Roman numerals and Arabic numbers instantly. Works with values from 1 to 3999, including common numeral combinations。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Which formats can I convert between?", questionZh: "可以在哪些格式之间转换？", answer: "Supported conversions include Roman numerals and Arabic numbers instantly. Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. The tool auto-detects your input format.", answerZh: "支持的转换包括Roman numerals and Arabic numbers instantly。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "How does this compare to desktop software?", questionZh: "跟桌面软件相比怎么样？", answer: "The Roman Numeral Converter covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "Roman Numeral Converter无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "percentage-calculator",
    faqs: [
      { question: "What does the Percentage Calculator actually do with my input?", questionZh: "Percentage Calculator具体如何处理我的输入？", answer: "Calculate percentages, what if, increase/decrease easily. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Calculate percentages, what if, increase/decrease easily。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the Percentage Calculator accept?", questionZh: "Percentage Calculator接受什么类型的输入？", answer: "The tool accepts plain text input via paste, type, or drag-and-drop. For file-based tools, you can upload files up to 50MB. Large inputs are processed in chunks to prevent browser freezing.", answerZh: "工具接受通过粘贴、输入或拖放方式的纯文本输入。对于文件类工具，可上传最大 50MB 的文件。大输入会分块处理以防止浏览器卡顿。" },
      { question: "How does this compare to desktop software?", questionZh: "跟桌面软件相比怎么样？", answer: "The Percentage Calculator covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "Percentage Calculator无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "tip-calculator",
    faqs: [
      { question: "What does the Tip Calculator actually do with my input?", questionZh: "Tip Calculator具体如何处理我的输入？", answer: "Calculate tip amount, total bill, and per-person cost. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Calculate tip amount, total bill, and per-person cost。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the Tip Calculator accept?", questionZh: "Tip Calculator接受什么类型的输入？", answer: "The tool accepts plain text input via paste, type, or drag-and-drop. For file-based tools, you can upload files up to 50MB. Large inputs are processed in chunks to prevent browser freezing.", answerZh: "工具接受通过粘贴、输入或拖放方式的纯文本输入。对于文件类工具，可上传最大 50MB 的文件。大输入会分块处理以防止浏览器卡顿。" },
      { question: "How does this compare to desktop software?", questionZh: "跟桌面软件相比怎么样？", answer: "The Tip Calculator covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "Tip Calculator无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "age-calculator",
    faqs: [
      { question: "What does the Age Calculator actually do with my input?", questionZh: "Age Calculator具体如何处理我的输入？", answer: "Calculate exact age in years, months, weeks, and days. Find your age on any future date or count down to your next birthday. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Calculate exact age in years, months, weeks, and days. Find your age on any future date or count down to your next birthday。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the Age Calculator accept?", questionZh: "Age Calculator接受什么类型的输入？", answer: "The tool accepts plain text input via paste, type, or drag-and-drop. For file-based tools, you can upload files up to 50MB. Large inputs are processed in chunks to prevent browser freezing.", answerZh: "工具接受通过粘贴、输入或拖放方式的纯文本输入。对于文件类工具，可上传最大 50MB 的文件。大输入会分块处理以防止浏览器卡顿。" },
      { question: "How does this compare to desktop software?", questionZh: "跟桌面软件相比怎么样？", answer: "The Age Calculator covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "Age Calculator无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "bmi-calculator",
    faqs: [
      { question: "What does the BMI Calculator actually do with my input?", questionZh: "BMI Calculator具体如何处理我的输入？", answer: "Calculate Body Mass Index and check your health category. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Calculate Body Mass Index and check your health category。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the BMI Calculator accept?", questionZh: "BMI Calculator接受什么类型的输入？", answer: "The tool accepts plain text input via paste, type, or drag-and-drop. For file-based tools, you can upload files up to 50MB. Large inputs are processed in chunks to prevent browser freezing.", answerZh: "工具接受通过粘贴、输入或拖放方式的纯文本输入。对于文件类工具，可上传最大 50MB 的文件。大输入会分块处理以防止浏览器卡顿。" },
      { question: "How does this compare to desktop software?", questionZh: "跟桌面软件相比怎么样？", answer: "The BMI Calculator covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "BMI Calculator无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "countdown-timer",
    faqs: [
      { question: "What does the Countdown Timer actually do with my input?", questionZh: "Countdown Timer具体如何处理我的输入？", answer: "Set a countdown to any date and time with days, hours, minutes, and seconds. Perfect for events, deadlines, and special occasions. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Set a countdown to any date and time with days, hours, minutes, and seconds. Perfect for events, deadlines, and special occasions。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the Countdown Timer accept?", questionZh: "Countdown Timer接受什么类型的输入？", answer: "The tool accepts plain text input via paste, type, or drag-and-drop. For file-based tools, you can upload files up to 50MB. Large inputs are processed in chunks to prevent browser freezing.", answerZh: "工具接受通过粘贴、输入或拖放方式的纯文本输入。对于文件类工具，可上传最大 50MB 的文件。大输入会分块处理以防止浏览器卡顿。" },
      { question: "How does this compare to desktop software?", questionZh: "跟桌面软件相比怎么样？", answer: "The Countdown Timer covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "Countdown Timer无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "dice-roller",
    faqs: [
      { question: "What does the Dice Roller actually do with my input?", questionZh: "Dice Roller具体如何处理我的输入？", answer: "Roll virtual dice with 4, 6, 8, 10, 12, and 20 sides. Roll multiple dice at once for tabletop games, RPGs, and classrooms. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Roll virtual dice with 4, 6, 8, 10, 12, and 20 sides. Roll multiple dice at once for tabletop games, RPGs, and classrooms。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the Dice Roller accept?", questionZh: "Dice Roller接受什么类型的输入？", answer: "The tool accepts plain text input via paste, type, or drag-and-drop. For file-based tools, you can upload files up to 50MB. Large inputs are processed in chunks to prevent browser freezing.", answerZh: "工具接受通过粘贴、输入或拖放方式的纯文本输入。对于文件类工具，可上传最大 50MB 的文件。大输入会分块处理以防止浏览器卡顿。" },
      { question: "How does this compare to desktop software?", questionZh: "跟桌面软件相比怎么样？", answer: "The Dice Roller covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "Dice Roller无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "decision-maker",
    faqs: [
      { question: "What does the Decision Maker actually do with my input?", questionZh: "Decision Maker具体如何处理我的输入？", answer: "Let fate decide — pick a random option from your list. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Let fate decide — pick a random option from your list。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the Decision Maker accept?", questionZh: "Decision Maker接受什么类型的输入？", answer: "The tool accepts plain text input via paste, type, or drag-and-drop. For file-based tools, you can upload files up to 50MB. Large inputs are processed in chunks to prevent browser freezing.", answerZh: "工具接受通过粘贴、输入或拖放方式的纯文本输入。对于文件类工具，可上传最大 50MB 的文件。大输入会分块处理以防止浏览器卡顿。" },
      { question: "How does this compare to desktop software?", questionZh: "跟桌面软件相比怎么样？", answer: "The Decision Maker covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "Decision Maker无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "audio-cutter",
    faqs: [
      { question: "What does the Audio Cutter actually do with my input?", questionZh: "Audio Cutter具体如何处理我的输入？", answer: "Trim and cut audio files with an interactive waveform preview. Extract clips from MP3, WAV, and other formats right in your browser. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Trim and cut audio files with an interactive waveform preview. Extract clips from MP3, WAV, and other formats right in your browser。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the Audio Cutter accept?", questionZh: "Audio Cutter接受什么类型的输入？", answer: "The tool accepts plain text input via paste, type, or drag-and-drop. For file-based tools, you can upload files up to 50MB. Large inputs are processed in chunks to prevent browser freezing.", answerZh: "工具接受通过粘贴、输入或拖放方式的纯文本输入。对于文件类工具，可上传最大 50MB 的文件。大输入会分块处理以防止浏览器卡顿。" },
      { question: "How does this compare to desktop software?", questionZh: "跟桌面软件相比怎么样？", answer: "The Audio Cutter covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "Audio Cutter无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "audio-merger",
    faqs: [
      { question: "What does the Audio Merger actually do with my input?", questionZh: "Audio Merger具体如何处理我的输入？", answer: "Combine multiple audio files into one seamless track. Merge songs, recordings, or voice clips in any order with crossfade support. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Combine multiple audio files into one seamless track. Merge songs, recordings, or voice clips in any order with crossfade support。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the Audio Merger accept?", questionZh: "Audio Merger接受什么类型的输入？", answer: "The tool accepts plain text input via paste, type, or drag-and-drop. For file-based tools, you can upload files up to 50MB. Large inputs are processed in chunks to prevent browser freezing.", answerZh: "工具接受通过粘贴、输入或拖放方式的纯文本输入。对于文件类工具，可上传最大 50MB 的文件。大输入会分块处理以防止浏览器卡顿。" },
      { question: "How does this compare to desktop software?", questionZh: "跟桌面软件相比怎么样？", answer: "The Audio Merger covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "Audio Merger无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "audio-converter",
    faqs: [
      { question: "What does the Audio Converter actually do with my input?", questionZh: "Audio Converter具体如何处理我的输入？", answer: "Convert audio between WAV formats and sample rates. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert audio between WAV formats and sample rates。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Which formats can I convert between?", questionZh: "可以在哪些格式之间转换？", answer: "Supported conversions include WAV formats and sample rates. Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. The tool auto-detects your input format.", answerZh: "支持的转换包括WAV formats and sample rates。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "How does this compare to desktop software?", questionZh: "跟桌面软件相比怎么样？", answer: "The Audio Converter covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "Audio Converter无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "svg-to-png",
    faqs: [
      { question: "What does the SVG to PNG Converter actually do with my input?", questionZh: "SVG to PNG Converter具体如何处理我的输入？", answer: "Convert SVG vector code or files into PNG images with custom dimensions, background colors, and scaling options for any use case. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert SVG vector code or files into PNG images with custom dimensions, background colors, and scaling options for any use case。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Which formats can I convert between?", questionZh: "可以在哪些格式之间转换？", answer: "Supported conversions include . Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. The tool auto-detects your input format.", answerZh: "支持的转换包括。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "Is the conversion lossless?", questionZh: "转换是无损的吗？", answer: "Text-based conversions (JSON to YAML, CSV to JSON) are lossless — every data point is preserved. For media formats, quality depends on the target format's compression.", answerZh: "基于文本的转换（JSON 转 YAML、CSV 转 JSON）是无损的——每个数据点都被保留。对于媒体格式，质量取决于目标格式的压缩方式。" },
    ],
  },
  {
    slug: "days-between",
    faqs: [
      { question: "What does the Days Between Dates actually do with my input?", questionZh: "Days Between Dates具体如何处理我的输入？", answer: "Calculate the exact number of days between two dates. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Calculate the exact number of days between two dates。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the Days Between Dates accept?", questionZh: "Days Between Dates接受什么类型的输入？", answer: "The tool accepts plain text input via paste, type, or drag-and-drop. For file-based tools, you can upload files up to 50MB. Large inputs are processed in chunks to prevent browser freezing.", answerZh: "工具接受通过粘贴、输入或拖放方式的纯文本输入。对于文件类工具，可上传最大 50MB 的文件。大输入会分块处理以防止浏览器卡顿。" },
      { question: "How does this compare to desktop software?", questionZh: "跟桌面软件相比怎么样？", answer: "The Days Between Dates covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "Days Between Dates无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "password-strength",
    faqs: [
      { question: "What does the Password Strength Checker actually do with my input?", questionZh: "Password Strength Checker具体如何处理我的输入？", answer: "Test how strong your password is with real-time analysis. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Test how strong your password is with real-time analysis。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the Password Strength Checker accept?", questionZh: "Password Strength Checker接受什么类型的输入？", answer: "The tool accepts plain text input via paste, type, or drag-and-drop. For file-based tools, you can upload files up to 50MB. Large inputs are processed in chunks to prevent browser freezing.", answerZh: "工具接受通过粘贴、输入或拖放方式的纯文本输入。对于文件类工具，可上传最大 50MB 的文件。大输入会分块处理以防止浏览器卡顿。" },
      { question: "When would a developer reach for this tool?", questionZh: "开发者什么时候会用到这个工具？", answer: "During code review when you need to quickly test how strong your password is with real-time analysis, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "代码审查时需要快速test how strong your password is with real-time analysis，或调试数据管道时验证中间格式。在 API 开发中做快速转换也很方便。" },
    ],
  },
  {
    slug: "aspect-ratio-calculator",
    faqs: [
      { question: "What does the Aspect Ratio Calculator actually do with my input?", questionZh: "Aspect Ratio Calculator具体如何处理我的输入？", answer: "Calculate aspect ratios from dimensions or presets. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Calculate aspect ratios from dimensions or presets。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the Aspect Ratio Calculator accept?", questionZh: "Aspect Ratio Calculator接受什么类型的输入？", answer: "The tool accepts plain text input via paste, type, or drag-and-drop. For file-based tools, you can upload files up to 50MB. Large inputs are processed in chunks to prevent browser freezing.", answerZh: "工具接受通过粘贴、输入或拖放方式的纯文本输入。对于文件类工具，可上传最大 50MB 的文件。大输入会分块处理以防止浏览器卡顿。" },
      { question: "How does this compare to desktop software?", questionZh: "跟桌面软件相比怎么样？", answer: "The Aspect Ratio Calculator covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "Aspect Ratio Calculator无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "qr-reader",
    faqs: [
      { question: "What does the QR Code Reader actually do with my input?", questionZh: "QR Code Reader具体如何处理我的输入？", answer: "Decode QR codes from uploaded images instantly. Scan any QR code image to reveal the embedded URL, text, or contact information. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Decode QR codes from uploaded images instantly. Scan any QR code image to reveal the embedded URL, text, or contact information。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the QR Code Reader accept?", questionZh: "QR Code Reader接受什么类型的输入？", answer: "The tool accepts plain text input via paste, type, or drag-and-drop. For file-based tools, you can upload files up to 50MB. Large inputs are processed in chunks to prevent browser freezing.", answerZh: "工具接受通过粘贴、输入或拖放方式的纯文本输入。对于文件类工具，可上传最大 50MB 的文件。大输入会分块处理以防止浏览器卡顿。" },
      { question: "Is the conversion lossless?", questionZh: "转换是无损的吗？", answer: "Text-based conversions (JSON to YAML, CSV to JSON) are lossless — every data point is preserved. For media formats, quality depends on the target format's compression.", answerZh: "基于文本的转换（JSON 转 YAML、CSV 转 JSON）是无损的——每个数据点都被保留。对于媒体格式，质量取决于目标格式的压缩方式。" },
    ],
  },
  {
    slug: "color-blindness-simulator",
    faqs: [
      { question: "What does the Color Blindness Simulator actually do with my input?", questionZh: "Color Blindness Simulator具体如何处理我的输入？", answer: "Simulate how images look with various color blindness types. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Simulate how images look with various color blindness types。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Which color spaces does the Color Blindness Simulator support?", questionZh: "Color Blindness Simulator支持哪些色彩空间？", answer: "The tool works with HEX (#ffffff), RGB (255,255,255), HSL, HSV, and CMYK. You can also sample colors directly from an uploaded image or use the visual picker to select any shade.", answerZh: "工具支持 HEX (#ffffff)、RGB (255,255,255)、HSL、HSV 和 CMYK。你还可以从上传的图片中直接取样，或使用可视化选择器选择任意色调。" },
      { question: "Can I use this for bulk image processing?", questionZh: "可以用来批量处理图片吗？", answer: "While the tool focuses on single-image operations for speed, you can process multiple images sequentially. For automated bulk processing, consider scripting with the same algorithms.", answerZh: "虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。如需自动化批量处理，建议使用相同算法编写脚本。" },
    ],
  },
  {
    slug: "online-notepad",
    faqs: [
      { question: "What does the Online Notepad actually do with my input?", questionZh: "Online Notepad具体如何处理我的输入？", answer: "A clean, distraction-free browser-based notepad with auto-save. Write notes, code snippets, and lists that persist in your browser storage. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "A clean, distraction-free browser-based notepad with auto-save. Write notes, code snippets, and lists that persist in your browser storage。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the Online Notepad accept?", questionZh: "Online Notepad接受什么类型的输入？", answer: "The tool accepts plain text input via paste, type, or drag-and-drop. For file-based tools, you can upload files up to 50MB. Large inputs are processed in chunks to prevent browser freezing.", answerZh: "工具接受通过粘贴、输入或拖放方式的纯文本输入。对于文件类工具，可上传最大 50MB 的文件。大输入会分块处理以防止浏览器卡顿。" },
      { question: "What kind of text works best with this tool?", questionZh: "什么样的文本最适合这个工具？", answer: "Any plain text — from emails and articles to code comments and data exports. The tool processes text of any length, from a single word to entire documents.", answerZh: "任何纯文本——从邮件和文章到代码注释和数据导出。工具处理任意长度的文本，从单个词到整个文档。" },
    ],
  },
  {
    slug: "text-statistics",
    faqs: [
      { question: "What does the Text Statistics actually do with my input?", questionZh: "Text Statistics具体如何处理我的输入？", answer: "Detailed text analysis: letters, vowels, unique words, and more. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Detailed text analysis: letters, vowels, unique words, and more。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the Text Statistics accept?", questionZh: "Text Statistics接受什么类型的输入？", answer: "The tool accepts plain text input via paste, type, or drag-and-drop. For file-based tools, you can upload files up to 50MB. Large inputs are processed in chunks to prevent browser freezing.", answerZh: "工具接受通过粘贴、输入或拖放方式的纯文本输入。对于文件类工具，可上传最大 50MB 的文件。大输入会分块处理以防止浏览器卡顿。" },
      { question: "What kind of text works best with this tool?", questionZh: "什么样的文本最适合这个工具？", answer: "Any plain text — from emails and articles to code comments and data exports. The tool processes text of any length, from a single word to entire documents.", answerZh: "任何纯文本——从邮件和文章到代码注释和数据导出。工具处理任意长度的文本，从单个词到整个文档。" },
    ],
  },
  {
    slug: "color-picker",
    faqs: [
      { question: "How do I pick a color from an image?", questionZh: "如何从图片中取色？", answer: "Upload an image and click anywhere on it — the tool extracts the exact pixel color and converts it to HEX, RGB, and HSL formats simultaneously.", answerZh: "上传图片后点击任意位置——工具提取精确像素颜色，同时转换为 HEX、RGB 和 HSL 格式。" },
      { question: "What color formats does the picker output?", questionZh: "取色器输出哪些颜色格式？", answer: "HEX (#ffffff), RGB (255,255,255), HSL (0°,0%,100%), and HSV. You can copy any format with a single click for use in CSS, design tools, or code.", answerZh: "HEX (#ffffff)、RGB (255,255,255)、HSL (0°,0%,100%) 和 HSV。一键复制任意格式，用于 CSS、设计工具或代码中。" },
      { question: "Can I adjust the color after picking?", questionZh: "取色后可以调整颜色吗？", answer: "Yes. After picking, use the HSL sliders to fine-tune hue, saturation, and lightness. The preview updates in real time and all format values update together.", answerZh: "可以。取色后使用 HSL 滑块微调色相、饱和度和亮度。预览实时更新，所有格式值同步变化。" },
    ],
  },
  {
    slug: "image-resizer",
    faqs: [
      { question: "How does the resizer maintain image quality?", questionZh: "调整尺寸时如何保持图片质量？", answer: "The tool uses browser-native bilinear interpolation for downscaling and Lanczos resampling for upscaling. You can choose output format (JPG/PNG/WebP) and set quality from 60-100%.", answerZh: "工具使用浏览器原生双线性插值缩小，Lanczos 重采样放大。可选择输出格式（JPG/PNG/WebP）并设置 60-100% 的质量。" },
      { question: "Can I resize multiple images at once?", questionZh: "可以一次调整多张图片吗？", answer: "Currently the tool processes one image at a time for optimal quality. For batch resizing, process each image sequentially — the tool maintains consistent settings between uploads.", answerZh: "目前工具一次处理一张图片以保证最佳质量。如需批量调整，依次处理每张图片——工具在上传之间保持一致的设置。" },
      { question: "What's the maximum image size I can resize?", questionZh: "可以调整的最大图片尺寸是多少？", answer: "Images up to 50MB and 10000×10000 pixels are supported. All processing happens in your browser via Canvas API — no upload to any server required.", answerZh: "支持最大 50MB 和 10000×10000 像素的图片。所有处理通过 Canvas API 在浏览器中完成——无需上传到任何服务器。" },
    ],
  },
];

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