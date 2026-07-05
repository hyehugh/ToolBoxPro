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
      { question: "Does the formatter support large JSON files?", questionZh: "格式化工具支持大型 JSON 文件吗？", answer: "Yes. The formatter handles JSON documents up to several megabytes in size. It uses an incremental parser that processes the input as a stream, so even deeply nested objects with thousands of keys render without freezing the browser tab.", answerZh: "支持。格式化工具可处理数 MB 大小的 JSON 文档。它使用增量解析器以流式方式处理输入，即使是包含数千个键的深层嵌套对象也不会导致浏览器标签页卡顿。" },
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
      { question: "Which image formats can I convert between?", questionZh: "图片转换支持哪些格式？", answer: "Supported conversions include binary, octal, decimal, and hexadecimal. Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. The tool auto-detects your input format.", answerZh: "支持的转换包括binary, octal, decimal, and hexadecimal。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "Why convert JSON to YAML for configuration files?", questionZh: "为什么要把 JSON 转为 YAML 用于配置文件？", answer: "During code review when you need to quickly convert between binary, octal, decimal, and hexadecimal, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "代码审查时需要快速convert between binary, octal, decimal, and hexadecimal，或调试数据管道时验证中间格式。在 API 开发中做快速转换也很方便。" },
    ],
  },
  {
    slug: "image-converter",
    faqs: [
      { question: "What does the Image Format Converter actually do with my input?", questionZh: "Image Format Converter具体如何处理我的输入？", answer: "Convert images between JPG, PNG, WebP, AVIF, GIF, and BMP formats. Batch convert with custom quality and dimension settings. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert images between JPG, PNG, WebP, AVIF, GIF, and BMP formats. Batch convert with custom quality and dimension settings。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What are the differences between JPG, PNG, WebP, and other formats?", questionZh: "JPG、PNG、WebP 等格式有什么区别？", answer: "JPG uses lossy compression ideal for photographs (no transparency). PNG uses lossless compression preserving transparency but larger file size. WebP offers both lossy and lossless modes with 25-35% smaller files than JPG. BMP is uncompressed and lossless. TIFF supports high bit-depth for professional printing. GIF supports simple animation but only 256 colors.", answerZh: "JPG 使用有损压缩，适合照片（不支持透明度）。PNG 使用无损压缩，保留透明度但文件较大。WebP 同时支持有损和无损模式，文件比 JPG 小 25-35%。BMP 是无压缩无损格式。TIFF 支持高位深，适合专业印刷。GIF 支持简单动画但仅限 256 色。" },
      { question: "Does converting between formats reduce image quality?", questionZh: "格式转换会降低图片质量吗？", answer: "Converting from a lossy format (JPG, WebP lossy) to any format permanently loses data already discarded. Converting from lossless (PNG, BMP, TIFF) to lossy compresses according to the quality setting you choose. Converting between lossless formats preserves pixels exactly. Converting to GIF reduces colors to 256, causing visible banding in photos.", answerZh: "从有损格式（JPG、有损 WebP）转换到任何格式都会永久丢失已丢弃的数据。从无损格式（PNG、BMP、TIFF）转换到有损格式会按你选择的质量设置进行压缩。无损格式之间转换会精确保留像素。转换为 GIF 会将颜色减少到 256 色，在照片中产生明显的色带。" },
    ],
  },
  {
    slug: "lorem-ipsum-generator",
    faqs: [
      { question: "What does the Lorem Ipsum Generator actually do with my input?", questionZh: "Lorem Ipsum Generator具体如何处理我的输入？", answer: "Generate placeholder text for design mockups, website wireframes, and print layouts. Customize paragraph count, word length, and format. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Generate placeholder text for design mockups, website wireframes, and print layouts. Customize paragraph count, word length, and format。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Can I customize the output from the Lorem Ipsum Generator?", questionZh: "可以自定义Lorem Ipsum Generator的输出吗？", answer: "Yes. After generating the default output, you can adjust parameters like length, format, and quantity. The result updates in real time as you change settings.", answerZh: "可以。生成默认输出后，你可以调整长度、格式和数量等参数。修改设置时结果会实时更新。" },
      { question: "Is the generated Lorem Ipsum real Latin?", questionZh: "生成的 Lorem Ipsum 是真正的拉丁语吗？", answer: "Lorem Ipsum is pseudo-Latin derived from a 1st-century BC text by Cicero (de Finibus Bonorum et Malorum), but the words are scrambled so it has no coherent meaning. This is intentional — designers use it to avoid distracting readers with readable content during layout work.", answerZh: "Lorem Ipsum 是源自公元前 1 世纪西塞罗著作（de Finibus Bonorum et Malorum）的伪拉丁文，但词语被打乱了，因此没有连贯的含义。这是故意的——设计师在排版工作中使用它来避免可读内容分散读者的注意力。" },
    ],
  },
  {
    slug: "text-diff-checker",
    faqs: [
      { question: "What does the Text Diff Checker actually do with my input?", questionZh: "Text Diff Checker具体如何处理我的输入？", answer: "Compare two blocks of text side by side and highlight every difference. Perfect for code reviews, document revisions, and plagiarism checks. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Compare two blocks of text side by side and highlight every difference. Perfect for code reviews, document revisions, and plagiarism checks。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "How accurate is the Text Diff Checker?", questionZh: "Text Diff Checker的准确性如何？", answer: "The Text Diff Checker uses deterministic algorithms — the same input always produces the same output. Every character is processed individually, so even single-character changes are caught and displayed.", answerZh: "Text Diff Checker使用确定性算法——相同输入始终产生相同输出。每个字符都被单独处理，即使单字符变化也能被捕获和显示。" },
      { question: "What are practical uses for repeating text?", questionZh: "重复文本的实际用途有哪些？", answer: "The json formatter & validator handles emails, articles, code comments, and data exports — any text length from a single word to full documents.", answerZh: "JSON Formatter & Validator处理邮件、文章、代码注释和数据导出——从单个词到完整文档的任意长度文本。" },
    ],
  },
  {
    slug: "text-repeater",
    faqs: [
      { question: "What does the Text Repeater actually do with my input?", questionZh: "Text Repeater具体如何处理我的输入？", answer: "Repeat any text multiple times with custom separators, line breaks, or prefixes. Generate test data, patterns, and repeated strings instantly. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Repeat any text multiple times with custom separators, line breaks, or prefixes. Generate test data, patterns, and repeated strings instantly。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the Text Repeater accept?", questionZh: "Text Repeater接受什么类型的输入？", answer: "You can paste json formatter & validator content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴JSON Formatter & Validator内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "Can it sort mixed numeric and alphabetic lines?", questionZh: "能混合排序数字行和字母行吗？", answer: "The text repeater handles emails, articles, code comments, and data exports — any text length from a single word to full documents.", answerZh: "Text Repeater处理邮件、文章、代码注释和数据导出——从单个词到完整文档的任意长度文本。" },
    ],
  },
  {
    slug: "html-entity-converter",
    faqs: [
      { question: "What does the HTML Entity Converter actually do with my input?", questionZh: "HTML Entity Converter具体如何处理我的输入？", answer: "Encode and decode HTML entities like &amp; and &lt;. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Encode and decode HTML entities like &amp; and &lt;。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What input and output formats does the HTML Entity Converter support?", questionZh: "HTML Entity Converter 支持哪些输入和输出格式？", answer: "Supported conversions include . Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. The tool auto-detects your input format.", answerZh: "支持的转换包括。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "How precise are the weight conversion results?", questionZh: "重量转换结果有多精确？", answer: "Text-based conversions through the json formatter & validator are lossless with every data point preserved. Media quality depends on target format compression.", answerZh: "通过JSON Formatter & Validator进行的文本转换是无损的，每个数据点都被保留。媒体格式质量取决于目标格式的压缩方式。" },
    ],
  },
  {
    slug: "css-minifier",
    faqs: [
      { question: "What does the CSS Minifier actually do with my input?", questionZh: "CSS Minifier具体如何处理我的输入？", answer: "Minify and compress CSS code to reduce file size and improve page load speed. Remove whitespace, comments, and redundant rules safely. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Minify and compress CSS code to reduce file size and improve page load speed. Remove whitespace, comments, and redundant rules safely。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Will minification break my code?", questionZh: "压缩会破坏我的代码吗？", answer: "No. The CSS Minifier only removes characters that don't affect execution — whitespace between tokens, comments, and optional semicolons. The minified output runs identically to the original. Always test in your environment to confirm.", answerZh: "不会。CSS Minifier只移除不影响执行的字符——标记之间的空格、注释和可选的分号。压缩后的输出与原始代码运行效果完全相同。建议在你的环境中测试确认。" },
      { question: "How much file size reduction can I expect?", questionZh: "文件体积能减少多少？", answer: "CSS files typically shrink by 30-60% depending on how many comments, indentation, and duplicate rules exist. A heavily-commented stylesheet with generous spacing compresses more than already-tight code. The savings directly reduce network transfer time and improve First Contentful Paint metrics.", answerZh: "CSS 文件通常可缩小 30-60%，具体取决于注释、缩进和重复规则的数量。注释密集、间距较大的样式表比已紧凑的代码压缩效果更好。减少的体积直接降低网络传输时间并改善首次内容绘制指标。" },
    ],
  },
  {
    slug: "json-to-yaml",
    faqs: [
      { question: "What does the JSON to YAML Converter actually do with my input?", questionZh: "JSON to YAML Converter具体如何处理我的输入？", answer: "Convert JSON data to clean YAML format and vice versa. Preserve nested structures, arrays, and data types during conversion. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert JSON data to clean YAML format and vice versa. Preserve nested structures, arrays, and data types during conversion。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What's the difference between JSON and YAML?", questionZh: "JSON 和 YAML 有什么区别？", answer: "JSON requires braces, brackets, and double-quoted strings, making it verbose but machine-friendly. YAML uses indentation for structure, supports comments, and allows unquoted strings, making it more readable for humans. YAML is common in Docker Compose, Kubernetes configs, and CI pipelines; JSON is the standard for REST APIs and web data exchange.", answerZh: "JSON 需要大括号、方括号和双引号字符串，冗长但机器友好。YAML 使用缩进表示结构，支持注释，允许不加引号的字符串，对人类更易读。YAML 常用于 Docker Compose、Kubernetes 配置和 CI 流水线；JSON 是 REST API 和 Web 数据交换的标准。" },
      { question: "Does the conversion handle nested objects and arrays?", questionZh: "转换能处理嵌套对象和数组吗？", answer: "Yes. The converter recursively processes arbitrarily deep nested objects and multi-dimensional arrays. Data types are preserved exactly: JSON strings map to YAML strings, numbers stay numeric, booleans remain booleans, and null becomes YAML's null or ~. Multi-line JSON strings are converted to YAML block scalars for readability.", answerZh: "可以。转换器递归处理任意深度的嵌套对象和多维数组。数据类型被精确保留：JSON 字符串映射为 YAML 字符串，数字保持数字类型，布尔值保持布尔值，null 变为 YAML 的 null 或 ~。多行 JSON 字符串会被转换为 YAML 块标量以提高可读性。" },
    ],
  },
  {
    slug: "string-escaper",
    faqs: [
      { question: "What does the String Escaper/Unescaper actually do with my input?", questionZh: "String Escaper/Unescaper具体如何处理我的输入？", answer: "Escape and unescape special characters in strings for JSON, HTML, URLs, SQL, and JavaScript. Handle all common escaping formats. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Escape and unescape special characters in strings for JSON, HTML, URLs, SQL, and JavaScript. Handle all common escaping formats。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the String Escaper/Unescaper accept?", questionZh: "String Escaper/Unescaper接受什么类型的输入？", answer: "You can paste base64 encoder/decoder content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴Base64 Encoder/Decoder内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "What escaping modes does this tool support?", questionZh: "这个工具支持哪些转义模式？", answer: "The tool handles five distinct escaping contexts: HTML entities (converting < to &lt;), JSON string escaping (quotes, backslashes, control characters), URL percent-encoding (spaces to %20), SQL single-quote doubling, and JavaScript Unicode escapes (\\uXXXX). Each mode follows different rules — choose the one matching your target language to avoid injection vulnerabilities.", answerZh: "该工具处理五种不同的转义场景：HTML 实体（将 < 转为 &lt;）、JSON 字符串转义（引号、反斜杠、控制字符）、URL 百分号编码（空格转 %20）、SQL 单引号双写、以及 JavaScript Unicode 转义（\\uXXXX）。每种模式遵循不同规则——选择与目标语言匹配的模式以避免注入漏洞。" },
    ],
  },
  {
    slug: "html-tag-stripper",
    faqs: [
      { question: "What does the HTML Tag Stripper actually do with my input?", questionZh: "HTML Tag Stripper具体如何处理我的输入？", answer: "Remove all HTML tags from text, keeping only content. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Remove all HTML tags from text, keeping only content。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the HTML Tag Stripper accept?", questionZh: "HTML Tag Stripper接受什么类型的输入？", answer: "You can paste regex tester content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴Regex Tester内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "When do network engineers need subnet calculations?", questionZh: "网络工程师什么时候需要子网计算？", answer: "During code review when you need to quickly remove all html tags from text, keeping only content, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "代码审查时需要快速remove all html tags from text, keeping only content，或调试数据管道时验证中间格式。在 API 开发中做快速转换也很方便。" },
    ],
  },
  {
    slug: "cron-parser",
    faqs: [
      { question: "What does the Cron Expression Parser actually do with my input?", questionZh: "Cron Expression Parser具体如何处理我的输入？", answer: "Parse cron expressions and get human-readable schedules. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Parse cron expressions and get human-readable schedules。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the Cron Expression Parser accept?", questionZh: "Cron Expression Parser接受什么类型的输入？", answer: "You can paste color converter content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴Color Converter内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "What use cases require generating custom JWTs?", questionZh: "哪些场景需要生成自定义 JWT？", answer: "During code review when you need to quickly parse cron expressions and get human-readable schedules, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "代码审查时需要快速parse cron expressions and get human-readable schedules，或调试数据管道时验证中间格式。在 API 开发中做快速转换也很方便。" },
    ],
  },
  {
    slug: "text-to-binary",
    faqs: [
      { question: "What does the Text to Binary Converter actually do with my input?", questionZh: "Text to Binary Converter具体如何处理我的输入？", answer: "Convert text to binary code and binary back to text. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert text to binary code and binary back to text。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What input and output formats does the Text to Binary Converter support?", questionZh: "Text to Binary Converter 支持哪些输入和输出格式？", answer: "Text to Binary Converter works similarly — Supported conversions include . Each format has sp...", answerZh: "Text to Binary Converter同理——支持的转换包括。每种格式有不同特点——例如 PNG 保留透明..." },
      { question: "Does deduplication preserve the original line order?", questionZh: "去重是否保持原始行顺序？", answer: "The html entity converter handles emails, articles, code comments, and data exports — any text length from a single word to full documents.", answerZh: "HTML Entity Converter处理邮件、文章、代码注释和数据导出——从单个词到完整文档的任意长度文本。" },
    ],
  },
  {
    slug: "html-preview",
    faqs: [
      { question: "What does the HTML Preview actually do with my input?", questionZh: "HTML Preview具体如何处理我的输入？", answer: "Write and preview HTML code in real-time in a sandbox. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Write and preview HTML code in real-time in a sandbox。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the HTML Preview accept?", questionZh: "HTML Preview接受什么类型的输入？", answer: "You can paste password generator content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴Password Generator内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "What scenarios call for using the HTML Preview?", questionZh: "什么场景下需要用到 HTML Preview？", answer: "During code review when you need to quickly write and preview html code in real-time in a sandbox, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "代码审查时需要快速write and preview html code in real-time in a sandbox，或调试数据管道时验证中间格式。在 API 开发中做快速转换也很方便。" },
    ],
  },
  {
    slug: "ip-calculator",
    faqs: [
      { question: "What does the IP Subnet Calculator actually do with my input?", questionZh: "IP Subnet Calculator具体如何处理我的输入？", answer: "Calculate network subnet, CIDR, broadcast, and host range. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Calculate network subnet, CIDR, broadcast, and host range。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the IP Subnet Calculator accept?", questionZh: "IP Subnet Calculator接受什么类型的输入？", answer: "You can paste uuid generator content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴UUID Generator内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "What scenarios call for using the IP Subnet Calculator?", questionZh: "什么场景下需要用到 IP Subnet Calculator？", answer: "During code review when you need to quickly calculate network subnet, cidr, broadcast, and host range, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "代码审查时需要快速calculate network subnet, cidr, broadcast, and host range，或调试数据管道时验证中间格式。在 API 开发中做快速转换也很方便。" },
    ],
  },
  {
    slug: "jwt-generator",
    faqs: [
      { question: "What does the JWT Generator actually do with my input?", questionZh: "JWT Generator具体如何处理我的输入？", answer: "Generate JWT tokens with custom header and payload. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Generate JWT tokens with custom header and payload。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Can I customize the output from the JWT Generator?", questionZh: "可以自定义JWT Generator的输出吗？", answer: "JWT Generator works similarly — Yes. After generating the default output, you can ...", answerZh: "JWT Generator同理——可以。生成默认输出后，你可以调整长度、格式和数量等参数。修改..." },
      { question: "What scenarios call for using the JWT Generator?", questionZh: "什么场景下需要用到 JWT Generator？", answer: "During code review when you need to quickly generate jwt tokens with custom header and payload, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "代码审查时需要快速generate jwt tokens with custom header and payload，或调试数据管道时验证中间格式。在 API 开发中做快速转换也很方便。" },
    ],
  },
  {
    slug: "text-to-slug",
    faqs: [
      { question: "What does the Text to URL Slug actually do with my input?", questionZh: "Text to URL Slug具体如何处理我的输入？", answer: "Convert any text into clean, SEO-friendly URL slugs. Remove special characters, normalize spaces, and generate optimized permalinks. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert any text into clean, SEO-friendly URL slugs. Remove special characters, normalize spaces, and generate optimized permalinks。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What input and output formats does the Text to URL Slug support?", questionZh: "Text to URL Slug 支持哪些输入和输出格式？", answer: "Text to URL Slug works similarly — Supported conversions include . Each format has sp...", answerZh: "Text to URL Slug同理——支持的转换包括。每种格式有不同特点——例如 PNG 保留透明..." },
      { question: "What text reversal modes are available?", questionZh: "支持哪些文本反转模式？", answer: "The html preview handles emails, articles, code comments, and data exports — any text length from a single word to full documents.", answerZh: "HTML Preview处理邮件、文章、代码注释和数据导出——从单个词到完整文档的任意长度文本。" },
    ],
  },
  {
    slug: "text-sorter",
    faqs: [
      { question: "What does the Text Sorter actually do with my input?", questionZh: "Text Sorter具体如何处理我的输入？", answer: "Sort text lines alphabetically (A-Z or Z-A), by line length, or in reverse order. Remove duplicates and organize lists instantly. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Sort text lines alphabetically (A-Z or Z-A), by line length, or in reverse order. Remove duplicates and organize lists instantly。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "How accurate is the Text Sorter?", questionZh: "Text Sorter的准确性如何？", answer: "The Text Sorter uses deterministic algorithms — the same input always produces the same output. Every character is processed individually, so even single-character changes are caught and displayed.", answerZh: "Text Sorter使用确定性算法——相同输入始终产生相同输出。每个字符都被单独处理，即使单字符变化也能被捕获和显示。" },
      { question: "Can I specify which characters appear in random strings?", questionZh: "可以指定随机字符串中包含哪些字符吗？", answer: "The text sorter handles emails, articles, code comments, and data exports — any text length from a single word to full documents.", answerZh: "Text Sorter处理邮件、文章、代码注释和数据导出——从单个词到完整文档的任意长度文本。" },
    ],
  },
  {
    slug: "text-deduplicator",
    faqs: [
      { question: "What does the Line Deduplicator actually do with my input?", questionZh: "Line Deduplicator具体如何处理我的输入？", answer: "Remove duplicate lines from text while preserving order. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Remove duplicate lines from text while preserving order。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "How accurate is the Line Deduplicator?", questionZh: "Line Deduplicator的准确性如何？", answer: "The Line Deduplicator uses deterministic algorithms — the same input always produces the same output. Every character is processed individually, so even single-character changes are caught and displayed.", answerZh: "Line Deduplicator使用确定性算法——相同输入始终产生相同输出。每个字符都被单独处理，即使单字符变化也能被捕获和显示。" },
      { question: "Does the palindrome checker ignore spaces and punctuation?", questionZh: "回文检查器会忽略空格和标点吗？", answer: "The line deduplicator handles emails, articles, code comments, and data exports — any text length from a single word to full documents.", answerZh: "Line Deduplicator处理邮件、文章、代码注释和数据导出——从单个词到完整文档的任意长度文本。" },
    ],
  },
  {
    slug: "text-reverser",
    faqs: [
      { question: "What does the Text Reverser actually do with my input?", questionZh: "Text Reverser具体如何处理我的输入？", answer: "Reverse text, words, sentences, or entire lines instantly. Useful for creating mirrored text, solving puzzles, or formatting data. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Reverse text, words, sentences, or entire lines instantly. Useful for creating mirrored text, solving puzzles, or formatting data。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the Text Reverser accept?", questionZh: "Text Reverser接受什么类型的输入？", answer: "You can paste word & character counter content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴Word & Character Counter内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "What text formats does the Text Reverser process reliably?", questionZh: "Text Reverser 能可靠地处理哪些文本格式？", answer: "The text reverser handles emails, articles, code comments, and data exports — any text length from a single word to full documents.", answerZh: "Text Reverser处理邮件、文章、代码注释和数据导出——从单个词到完整文档的任意长度文本。" },
    ],
  },
  {
    slug: "random-string-generator",
    faqs: [
      { question: "What does the Random String Generator actually do with my input?", questionZh: "Random String Generator具体如何处理我的输入？", answer: "Generate random strings with custom characters and length. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Generate random strings with custom characters and length。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Can I customize the output from the Random String Generator?", questionZh: "可以自定义Random String Generator的输出吗？", answer: "Random String Generator works similarly — Yes. After generating the default output, you can ...", answerZh: "Random String Generator同理——可以。生成默认输出后，你可以调整长度、格式和数量等参数。修改..." },
      { question: "What text formats does the Random String Generator process reliably?", questionZh: "Random String Generator 能可靠地处理哪些文本格式？", answer: "The random string generator handles emails, articles, code comments, and data exports — any text length from a single word to full documents.", answerZh: "Random String Generator处理邮件、文章、代码注释和数据导出——从单个词到完整文档的任意长度文本。" },
    ],
  },
  {
    slug: "palindrome-checker",
    faqs: [
      { question: "What does the Palindrome Checker actually do with my input?", questionZh: "Palindrome Checker具体如何处理我的输入？", answer: "Check if text reads the same forwards and backwards. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Check if text reads the same forwards and backwards。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "How accurate is the Palindrome Checker?", questionZh: "Palindrome Checker的准确性如何？", answer: "The Palindrome Checker uses deterministic algorithms — the same input always produces the same output. Every character is processed individually, so even single-character changes are caught and displayed.", answerZh: "Palindrome Checker使用确定性算法——相同输入始终产生相同输出。每个字符都被单独处理，即使单字符变化也能被捕获和显示。" },
      { question: "What text formats does the Palindrome Checker process reliably?", questionZh: "Palindrome Checker 能可靠地处理哪些文本格式？", answer: "The palindrome checker handles emails, articles, code comments, and data exports — any text length from a single word to full documents.", answerZh: "Palindrome Checker处理邮件、文章、代码注释和数据导出——从单个词到完整文档的任意长度文本。" },
    ],
  },
  {
    slug: "morse-code-converter",
    faqs: [
      { question: "What does the Morse Code Converter actually do with my input?", questionZh: "Morse Code Converter具体如何处理我的输入？", answer: "Convert text to Morse code and decode Morse code back to readable text. Learn Morse alphabet with visual audio playback support. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert text to Morse code and decode Morse code back to readable text. Learn Morse alphabet with visual audio playback support。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What input and output formats does the Morse Code Converter support?", questionZh: "Morse Code Converter 支持哪些输入和输出格式？", answer: "Morse Code Converter works similarly — Supported conversions include . Each format has sp...", answerZh: "Morse Code Converter同理——支持的转换包括。每种格式有不同特点——例如 PNG 保留透明..." },
      { question: "What text formats does the Morse Code Converter process reliably?", questionZh: "Morse Code Converter 能可靠地处理哪些文本格式？", answer: "The morse code converter handles emails, articles, code comments, and data exports — any text length from a single word to full documents.", answerZh: "Morse Code Converter处理邮件、文章、代码注释和数据导出——从单个词到完整文档的任意长度文本。" },
    ],
  },
  {
    slug: "temperature-converter",
    faqs: [
      { question: "What does the Temperature Converter actually do with my input?", questionZh: "Temperature Converter具体如何处理我的输入？", answer: "Convert temperatures between Celsius, Fahrenheit, and Kelvin scales instantly. Perfect for cooking, science, weather, and travel calculations. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert temperatures between Celsius, Fahrenheit, and Kelvin scales instantly. Perfect for cooking, science, weather, and travel calculations。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What input and output formats does the Temperature Converter support?", questionZh: "Temperature Converter 支持哪些输入和输出格式？", answer: "Supported conversions include Celsius, Fahrenheit, and Kelvin scales instantly. Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. The tool auto-detects your input format.", answerZh: "支持的转换包括Celsius, Fahrenheit, and Kelvin scales instantly。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "How precise are the length conversion results?", questionZh: "长度转换结果有多精确？", answer: "Text-based conversions through the base64 encoder/decoder are lossless with every data point preserved. Media quality depends on target format compression.", answerZh: "通过Base64 Encoder/Decoder进行的文本转换是无损的，每个数据点都被保留。媒体格式质量取决于目标格式的压缩方式。" },
    ],
  },
  {
    slug: "weight-converter",
    faqs: [
      { question: "What does the Weight Converter actually do with my input?", questionZh: "Weight Converter具体如何处理我的输入？", answer: "Convert between kilograms, pounds, ounces, and more. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert between kilograms, pounds, ounces, and more。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What input and output formats does the Weight Converter support?", questionZh: "Weight Converter 支持哪些输入和输出格式？", answer: "Supported conversions include kilograms, pounds, ounces, and more. Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. The tool auto-detects your input format.", answerZh: "支持的转换包括kilograms, pounds, ounces, and more。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "Does data size conversion handle both binary and decimal units?", questionZh: "数据大小转换支持二进制和十进制单位吗？", answer: "Text-based conversions through the regex tester are lossless with every data point preserved. Media quality depends on target format compression.", answerZh: "通过Regex Tester进行的文本转换是无损的，每个数据点都被保留。媒体格式质量取决于目标格式的压缩方式。" },
    ],
  },
  {
    slug: "length-converter",
    faqs: [
      { question: "What does the Length Converter actually do with my input?", questionZh: "Length Converter具体如何处理我的输入？", answer: "Convert between meters, feet, inches, kilometers, and miles. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert between meters, feet, inches, kilometers, and miles。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What input and output formats does the Length Converter support?", questionZh: "Length Converter 支持哪些输入和输出格式？", answer: "Supported conversions include meters, feet, inches, kilometers, and miles. Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. The tool auto-detects your input format.", answerZh: "支持的转换包括meters, feet, inches, kilometers, and miles。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "Are speed conversions accurate for scientific use?", questionZh: "速度转换对科学用途足够精确吗？", answer: "Text-based conversions through the color converter are lossless with every data point preserved. Media quality depends on target format compression.", answerZh: "通过Color Converter进行的文本转换是无损的，每个数据点都被保留。媒体格式质量取决于目标格式的压缩方式。" },
    ],
  },
  {
    slug: "data-size-converter",
    faqs: [
      { question: "What does the Data Size Converter actually do with my input?", questionZh: "Data Size Converter具体如何处理我的输入？", answer: "Convert between bytes, kilobytes, megabytes, gigabytes, terabytes and more. Compare file sizes, storage capacity, and data transfer amounts. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert between bytes, kilobytes, megabytes, gigabytes, terabytes and more. Compare file sizes, storage capacity, and data transfer amounts。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What input and output formats does the Data Size Converter support?", questionZh: "Data Size Converter 支持哪些输入和输出格式？", answer: "Supported conversions include bytes, kilobytes, megabytes, gigabytes, terabytes and more. Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. The tool auto-detects your input format.", answerZh: "支持的转换包括bytes, kilobytes, megabytes, gigabytes, terabytes and more。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "Does area conversion support surveying units?", questionZh: "面积转换支持测量单位吗？", answer: "Text-based conversions through the password generator are lossless with every data point preserved. Media quality depends on target format compression.", answerZh: "通过Password Generator进行的文本转换是无损的，每个数据点都被保留。媒体格式质量取决于目标格式的压缩方式。" },
    ],
  },
  {
    slug: "speed-converter",
    faqs: [
      { question: "What does the Speed Converter actually do with my input?", questionZh: "Speed Converter具体如何处理我的输入？", answer: "Convert speed between km/h, mph, knots, m/s, and mach. Useful for driving, aviation, marine navigation, and physics calculations. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert speed between km/h, mph, knots, m/s, and mach. Useful for driving, aviation, marine navigation, and physics calculations。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What input and output formats does the Speed Converter support?", questionZh: "Speed Converter 支持哪些输入和输出格式？", answer: "Supported conversions include km/h, mph, knots, m/s, and mach. Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. The tool auto-detects your input format.", answerZh: "支持的转换包括km/h, mph, knots, m/s, and mach。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "Does the Speed Converter preserve data integrity during conversion?", questionZh: "Speed Converter 在转换过程中保持数据完整性吗？", answer: "Text-based conversions through the uuid generator are lossless with every data point preserved. Media quality depends on target format compression.", answerZh: "通过UUID Generator进行的文本转换是无损的，每个数据点都被保留。媒体格式质量取决于目标格式的压缩方式。" },
    ],
  },
  {
    slug: "area-converter",
    faqs: [
      { question: "What does the Area Converter actually do with my input?", questionZh: "Area Converter具体如何处理我的输入？", answer: "Convert between square meters, acres, hectares, sq ft. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert between square meters, acres, hectares, sq ft。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What input and output formats does the Area Converter support?", questionZh: "Area Converter 支持哪些输入和输出格式？", answer: "Supported conversions include square meters, acres, hectares, sq ft. Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. The tool auto-detects your input format.", answerZh: "支持的转换包括square meters, acres, hectares, sq ft。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "Does the Area Converter preserve data integrity during conversion?", questionZh: "Area Converter 在转换过程中保持数据完整性吗？", answer: "Text-based conversions through the word & character counter are lossless with every data point preserved. Media quality depends on target format compression.", answerZh: "通过Word & Character Counter进行的文本转换是无损的，每个数据点都被保留。媒体格式质量取决于目标格式的压缩方式。" },
    ],
  },
  {
    slug: "image-to-base64",
    faqs: [
      { question: "What does the Image to Base64 actually do with my input?", questionZh: "Image to Base64具体如何处理我的输入？", answer: "Convert images to Base64 data URI for inline embedding. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert images to Base64 data URI for inline embedding。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What input and output formats does the Image to Base64 support?", questionZh: "Image to Base64 支持哪些输入和输出格式？", answer: "Image to Base64 works similarly — Supported conversions include . Each format has sp...", answerZh: "Image to Base64同理——支持的转换包括。每种格式有不同特点——例如 PNG 保留透明..." },
      { question: "Does the Image to Base64 handle multiple files efficiently?", questionZh: "Image to Base64 能高效处理多个文件吗？", answer: "While the tool focuses on single-image operations for speed, you can process multiple images sequentially. For automated bulk processing, consider scripting with the same algorithms.", answerZh: "虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。如需自动化批量处理，建议使用相同算法编写脚本。" },
    ],
  },
  {
    slug: "random-number-generator",
    faqs: [
      { question: "What does the Random Number Generator actually do with my input?", questionZh: "Random Number Generator具体如何处理我的输入？", answer: "Generate random numbers within a custom range. Perfect for lotteries, giveaways, statistical sampling, and game development. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Generate random numbers within a custom range. Perfect for lotteries, giveaways, statistical sampling, and game development。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Can I customize the output from the Random Number Generator?", questionZh: "可以自定义Random Number Generator的输出吗？", answer: "Random Number Generator works similarly — Yes. After generating the default output, you can ...", answerZh: "Random Number Generator同理——可以。生成默认输出后，你可以调整长度、格式和数量等参数。修改..." },
      { question: "Does this match Adobe Acrobat's PDF features?", questionZh: "这能比肩 Adobe Acrobat 的 PDF 功能吗？", answer: "The Random Number Generator covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "Random Number Generator无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "image-to-pdf",
    faqs: [
      { question: "What does the Image to PDF actually do with my input?", questionZh: "Image to PDF具体如何处理我的输入？", answer: "Convert images (JPG, PNG) into a single PDF document. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert images (JPG, PNG) into a single PDF document。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What input and output formats does the Image to PDF support?", questionZh: "Image to PDF 支持哪些输入和输出格式？", answer: "Image to PDF works similarly — Supported conversions include . Each format has sp...", answerZh: "Image to PDF同理——支持的转换包括。每种格式有不同特点——例如 PNG 保留透明..." },
      { question: "Can I split PDFs without Adobe Acrobat?", questionZh: "无需 Adobe Acrobat 就能拆分 PDF 吗？", answer: "The Image to PDF covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "Image to PDF无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "pdf-splitter",
    faqs: [
      { question: "What does the PDF Splitter actually do with my input?", questionZh: "PDF Splitter具体如何处理我的输入？", answer: "Split PDF by page ranges or extract specific pages. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Split PDF by page ranges or extract specific pages。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the PDF Splitter accept?", questionZh: "PDF Splitter接受什么类型的输入？", answer: "You can paste timestamp converter content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴Timestamp Converter内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "Is this more convenient than a spreadsheet?", questionZh: "比用电子表格更方便吗？", answer: "The PDF Splitter covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "PDF Splitter无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "pdf-rotator",
    faqs: [
      { question: "What does the PDF Rotator actually do with my input?", questionZh: "PDF Rotator具体如何处理我的输入？", answer: "Rotate PDF pages by 90, 180, or 270 degrees. Fix scanned documents, correct page orientation, and rearrange your PDF layouts. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Rotate PDF pages by 90, 180, or 270 degrees. Fix scanned documents, correct page orientation, and rearrange your PDF layouts。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the PDF Rotator accept?", questionZh: "PDF Rotator接受什么类型的输入？", answer: "You can paste image compressor content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴Image Compressor内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "Why use this instead of my phone's calculator?", questionZh: "为什么用这个而不是手机计算器？", answer: "The PDF Rotator covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "PDF Rotator无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "pdf-page-remover",
    faqs: [
      { question: "What does the PDF Page Remover actually do with my input?", questionZh: "PDF Page Remover具体如何处理我的输入？", answer: "Remove unwanted pages from your PDF documents quickly. Extract specific pages, delete blank sheets, and trim bulky files. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Remove unwanted pages from your PDF documents quickly. Extract specific pages, delete blank sheets, and trim bulky files。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the PDF Page Remover accept?", questionZh: "PDF Page Remover接受什么类型的输入？", answer: "You can paste pdf merger content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴PDF Merger内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "Can this do more than a simple age calculation?", questionZh: "这比简单算年龄能做更多吗？", answer: "The PDF Page Remover covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "PDF Page Remover无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "image-cropper",
    faqs: [
      { question: "What does the Image Cropper actually do with my input?", questionZh: "Image Cropper具体如何处理我的输入？", answer: "Crop images by dragging a selection area on canvas. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Crop images by dragging a selection area on canvas。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Do filters degrade the original image resolution?", questionZh: "滤镜会降低原始图片分辨率吗？", answer: "The Image Cropper uses browser-native Canvas API for processing. For resize operations, it applies bilinear interpolation to maintain sharpness. You can choose output format and quality level before downloading.", answerZh: "Image Cropper使用浏览器原生 Canvas API 处理图片。调整尺寸时应用双线性插值保持清晰度。下载前可选择输出格式和质量级别。" },
      { question: "Does the Image Cropper handle multiple files efficiently?", questionZh: "Image Cropper 能高效处理多个文件吗？", answer: "Image Cropper works similarly — While the tool focuses on single-image operations ...", answerZh: "Image Cropper同理——虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。..." },
    ],
  },
  {
    slug: "image-filters",
    faqs: [
      { question: "What does the Image Filters actually do with my input?", questionZh: "Image Filters具体如何处理我的输入？", answer: "Apply grayscale, sepia, blur, brightness, and contrast filters. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Apply grayscale, sepia, blur, brightness, and contrast filters。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Can I control the output resolution when merging?", questionZh: "合并时可以控制输出分辨率吗？", answer: "The Image Filters uses browser-native Canvas API for processing. For resize operations, it applies bilinear interpolation to maintain sharpness. You can choose output format and quality level before downloading.", answerZh: "Image Filters使用浏览器原生 Canvas API 处理图片。调整尺寸时应用双线性插值保持清晰度。下载前可选择输出格式和质量级别。" },
      { question: "Does the Image Filters handle multiple files efficiently?", questionZh: "Image Filters 能高效处理多个文件吗？", answer: "Image Filters works similarly — While the tool focuses on single-image operations ...", answerZh: "Image Filters同理——虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。..." },
    ],
  },
  {
    slug: "gif-maker",
    faqs: [
      { question: "What does the GIF Maker actually do with my input?", questionZh: "GIF Maker具体如何处理我的输入？", answer: "Create animated GIFs from multiple images or video clips. Set frame delay, resize output, and optimize for web or social media. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Create animated GIFs from multiple images or video clips. Set frame delay, resize output, and optimize for web or social media。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the GIF Maker accept?", questionZh: "GIF Maker接受什么类型的输入？", answer: "You can paste barcode & qr code generator content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴Barcode & QR Code Generator内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "Does the GIF Maker handle multiple files efficiently?", questionZh: "GIF Maker 能高效处理多个文件吗？", answer: "GIF Maker works similarly — While the tool focuses on single-image operations ...", answerZh: "GIF Maker同理——虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。..." },
    ],
  },
  {
    slug: "image-watermark",
    faqs: [
      { question: "What does the Image Watermark actually do with my input?", questionZh: "Image Watermark具体如何处理我的输入？", answer: "Add text watermark to images with position and opacity control. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Add text watermark to images with position and opacity control。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Do split images retain the original DPI?", questionZh: "切分后的图片保留原始 DPI 吗？", answer: "The Image Watermark uses browser-native Canvas API for processing. For resize operations, it applies bilinear interpolation to maintain sharpness. You can choose output format and quality level before downloading.", answerZh: "Image Watermark使用浏览器原生 Canvas API 处理图片。调整尺寸时应用双线性插值保持清晰度。下载前可选择输出格式和质量级别。" },
      { question: "Does the Image Watermark handle multiple files efficiently?", questionZh: "Image Watermark 能高效处理多个文件吗？", answer: "Image Watermark works similarly — While the tool focuses on single-image operations ...", answerZh: "Image Watermark同理——虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。..." },
    ],
  },
  {
    slug: "image-merge",
    faqs: [
      { question: "What does the Image Merger actually do with my input?", questionZh: "Image Merger具体如何处理我的输入？", answer: "Combine multiple images into one side by side or grid. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Combine multiple images into one side by side or grid。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Does flipping affect image metadata?", questionZh: "翻转会影响图片元数据吗？", answer: "The Image Merger uses browser-native Canvas API for processing. For resize operations, it applies bilinear interpolation to maintain sharpness. You can choose output format and quality level before downloading.", answerZh: "Image Merger使用浏览器原生 Canvas API 处理图片。调整尺寸时应用双线性插值保持清晰度。下载前可选择输出格式和质量级别。" },
      { question: "Does the Image Merger handle multiple files efficiently?", questionZh: "Image Merger 能高效处理多个文件吗？", answer: "Image Merger works similarly — While the tool focuses on single-image operations ...", answerZh: "Image Merger同理——虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。..." },
    ],
  },
  {
    slug: "image-splitter",
    faqs: [
      { question: "What does the Image Splitter actually do with my input?", questionZh: "Image Splitter具体如何处理我的输入？", answer: "Split a single image into multiple tiles by rows and columns. Perfect for creating sprite sheets, grid layouts, and image segments. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Split a single image into multiple tiles by rows and columns. Perfect for creating sprite sheets, grid layouts, and image segments。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Does adding borders change the file format?", questionZh: "添加边框会改变文件格式吗？", answer: "The Image Splitter uses browser-native Canvas API for processing. For resize operations, it applies bilinear interpolation to maintain sharpness. You can choose output format and quality level before downloading.", answerZh: "Image Splitter使用浏览器原生 Canvas API 处理图片。调整尺寸时应用双线性插值保持清晰度。下载前可选择输出格式和质量级别。" },
      { question: "Does the Image Splitter handle multiple files efficiently?", questionZh: "Image Splitter 能高效处理多个文件吗？", answer: "Image Splitter works similarly — While the tool focuses on single-image operations ...", answerZh: "Image Splitter同理——虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。..." },
    ],
  },
  {
    slug: "image-flip",
    faqs: [
      { question: "What does the Image Flip & Rotate actually do with my input?", questionZh: "Image Flip & Rotate具体如何处理我的输入？", answer: "Flip images horizontally or vertically and rotate by 90-degree increments. Mirror selfies, correct orientation, and transform photos instantly. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Flip images horizontally or vertically and rotate by 90-degree increments. Mirror selfies, correct orientation, and transform photos instantly。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Does collage generation preserve individual image quality?", questionZh: "拼贴生成会保留每张图片的质量吗？", answer: "The Image Flip & Rotate uses browser-native Canvas API for processing. For resize operations, it applies bilinear interpolation to maintain sharpness. You can choose output format and quality level before downloading.", answerZh: "Image Flip & Rotate使用浏览器原生 Canvas API 处理图片。调整尺寸时应用双线性插值保持清晰度。下载前可选择输出格式和质量级别。" },
      { question: "Does the Image Flip & Rotate handle multiple files efficiently?", questionZh: "Image Flip & Rotate 能高效处理多个文件吗？", answer: "Image Flip & Rotate works similarly — While the tool focuses on single-image operations ...", answerZh: "Image Flip & Rotate同理——虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。..." },
    ],
  },
  {
    slug: "image-border",
    faqs: [
      { question: "What does the Image Border actually do with my input?", questionZh: "Image Border具体如何处理我的输入？", answer: "Add customizable borders, frames, and padding to images. Choose colors, widths, corner radius, and shadow effects for polished photos. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Add customizable borders, frames, and padding to images. Choose colors, widths, corner radius, and shadow effects for polished photos。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Does the Image Border maintain quality after processing?", questionZh: "Image Border 处理后保持质量吗？", answer: "The Image Border uses browser-native Canvas API for processing. For resize operations, it applies bilinear interpolation to maintain sharpness. You can choose output format and quality level before downloading.", answerZh: "Image Border使用浏览器原生 Canvas API 处理图片。调整尺寸时应用双线性插值保持清晰度。下载前可选择输出格式和质量级别。" },
      { question: "Does the Image Border handle multiple files efficiently?", questionZh: "Image Border 能高效处理多个文件吗？", answer: "Image Border works similarly — While the tool focuses on single-image operations ...", answerZh: "Image Border同理——虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。..." },
    ],
  },
  {
    slug: "meme-generator",
    faqs: [
      { question: "What does the Meme Generator actually do with my input?", questionZh: "Meme Generator具体如何处理我的输入？", answer: "Create memes by adding top and bottom text to images. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Create memes by adding top and bottom text to images。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Can I customize the output from the Meme Generator?", questionZh: "可以自定义Meme Generator的输出吗？", answer: "Meme Generator works similarly — Yes. After generating the default output, you can ...", answerZh: "Meme Generator同理——可以。生成默认输出后，你可以调整长度、格式和数量等参数。修改..." },
      { question: "Does the Meme Generator handle multiple files efficiently?", questionZh: "Meme Generator 能高效处理多个文件吗？", answer: "Meme Generator works similarly — While the tool focuses on single-image operations ...", answerZh: "Meme Generator同理——虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。..." },
    ],
  },
  {
    slug: "image-to-sketch",
    faqs: [
      { question: "What does the Image to Sketch actually do with my input?", questionZh: "Image to Sketch具体如何处理我的输入？", answer: "Convert photos into pencil sketch drawings and line art. Apply artistic filters to create realistic hand-drawn effects from your images. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert photos into pencil sketch drawings and line art. Apply artistic filters to create realistic hand-drawn effects from your images。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What input and output formats does the Image to Sketch support?", questionZh: "Image to Sketch 支持哪些输入和输出格式？", answer: "Image to Sketch works similarly — Supported conversions include . Each format has sp...", answerZh: "Image to Sketch同理——支持的转换包括。每种格式有不同特点——例如 PNG 保留透明..." },
      { question: "Does the Image to Sketch handle multiple files efficiently?", questionZh: "Image to Sketch 能高效处理多个文件吗？", answer: "Image to Sketch works similarly — While the tool focuses on single-image operations ...", answerZh: "Image to Sketch同理——虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。..." },
    ],
  },
  {
    slug: "emoji-remover",
    faqs: [
      { question: "What does the Emoji Remover actually do with my input?", questionZh: "Emoji Remover具体如何处理我的输入？", answer: "Remove all emoji characters from text while keeping words. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Remove all emoji characters from text while keeping words。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the Emoji Remover accept?", questionZh: "Emoji Remover接受什么类型的输入？", answer: "You can paste dns lookup content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴DNS Lookup内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "What text formats does the Emoji Remover process reliably?", questionZh: "Emoji Remover 能可靠地处理哪些文本格式？", answer: "The temperature converter handles emails, articles, code comments, and data exports — any text length from a single word to full documents.", answerZh: "Temperature Converter处理邮件、文章、代码注释和数据导出——从单个词到完整文档的任意长度文本。" },
    ],
  },
  {
    slug: "unicode-detector",
    faqs: [
      { question: "What does the Unicode Character Detector actually do with my input?", questionZh: "Unicode Character Detector具体如何处理我的输入？", answer: "Inspect Unicode characters with codepoint and category info. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Inspect Unicode characters with codepoint and category info。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the Unicode Character Detector accept?", questionZh: "Unicode Character Detector接受什么类型的输入？", answer: "You can paste whois lookup content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴WHOIS Lookup内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "What text formats does the Unicode Character Detector process reliably?", questionZh: "Unicode Character Detector 能可靠地处理哪些文本格式？", answer: "The unicode character detector handles emails, articles, code comments, and data exports — any text length from a single word to full documents.", answerZh: "Unicode Character Detector处理邮件、文章、代码注释和数据导出——从单个词到完整文档的任意长度文本。" },
    ],
  },
  {
    slug: "caesar-cipher",
    faqs: [
      { question: "What does the Caesar Cipher actually do with my input?", questionZh: "Caesar Cipher具体如何处理我的输入？", answer: "Encode and decode text using the classic Caesar shift cipher. Choose shift values, try brute force decoding, and learn cryptography basics. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Encode and decode text using the classic Caesar shift cipher. Choose shift values, try brute force decoding, and learn cryptography basics。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the Caesar Cipher accept?", questionZh: "Caesar Cipher接受什么类型的输入？", answer: "You can paste hash generator content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴Hash Generator内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "What text formats does the Caesar Cipher process reliably?", questionZh: "Caesar Cipher 能可靠地处理哪些文本格式？", answer: "The caesar cipher handles emails, articles, code comments, and data exports — any text length from a single word to full documents.", answerZh: "Caesar Cipher处理邮件、文章、代码注释和数据导出——从单个词到完整文档的任意长度文本。" },
    ],
  },
  {
    slug: "json-diff",
    faqs: [
      { question: "What does the JSON Diff actually do with my input?", questionZh: "JSON Diff具体如何处理我的输入？", answer: "Compare two JSON objects and highlight differences. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Compare two JSON objects and highlight differences。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "How accurate is the JSON Diff?", questionZh: "JSON Diff的准确性如何？", answer: "The JSON Diff uses deterministic algorithms — the same input always produces the same output. Every character is processed individually, so even single-character changes are caught and displayed.", answerZh: "JSON Diff使用确定性算法——相同输入始终产生相同输出。每个字符都被单独处理，即使单字符变化也能被捕获和显示。" },
      { question: "What scenarios call for using the JSON Diff?", questionZh: "什么场景下需要用到 JSON Diff？", answer: "During code review when you need to quickly compare two json objects and highlight differences, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "代码审查时需要快速compare two json objects and highlight differences，或调试数据管道时验证中间格式。在 API 开发中做快速转换也很方便。" },
    ],
  },
  {
    slug: "http-status-codes",
    faqs: [
      { question: "What does the HTTP Status Codes actually do with my input?", questionZh: "HTTP Status Codes具体如何处理我的输入？", answer: "Browse and search all HTTP status codes with descriptions. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Browse and search all HTTP status codes with descriptions。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the HTTP Status Codes accept?", questionZh: "HTTP Status Codes接受什么类型的输入？", answer: "You can paste text case converter content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴Text Case Converter内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "What scenarios call for using the HTTP Status Codes?", questionZh: "什么场景下需要用到 HTTP Status Codes？", answer: "During code review when you need to quickly browse and search all http status codes with descriptions, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "代码审查时需要快速browse and search all http status codes with descriptions，或调试数据管道时验证中间格式。在 API 开发中做快速转换也很方便。" },
    ],
  },
  {
    slug: "timezone-converter",
    faqs: [
      { question: "What does the Time Zone Converter actually do with my input?", questionZh: "Time Zone Converter具体如何处理我的输入？", answer: "Convert time between different world time zones instantly. Schedule meetings across time zones and compare clocks worldwide. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert time between different world time zones instantly. Schedule meetings across time zones and compare clocks worldwide。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What input and output formats does the Time Zone Converter support?", questionZh: "Time Zone Converter 支持哪些输入和输出格式？", answer: "Supported conversions include different world time zones instantly. Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. The tool auto-detects your input format.", answerZh: "支持的转换包括different world time zones instantly。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "Is the Time Zone Converter faster than installing dedicated software?", questionZh: "Time Zone Converter 比安装专用软件更快吗？", answer: "The Time Zone Converter covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "Time Zone Converter无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "binary-to-text",
    faqs: [
      { question: "What does the Binary to Text actually do with my input?", questionZh: "Binary to Text具体如何处理我的输入？", answer: "Convert binary code to text and text back to binary. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert binary code to text and text back to binary。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What input and output formats does the Binary to Text support?", questionZh: "Binary to Text 支持哪些输入和输出格式？", answer: "Binary to Text works similarly — Supported conversions include . Each format has sp...", answerZh: "Binary to Text同理——支持的转换包括。每种格式有不同特点——例如 PNG 保留透明..." },
      { question: "What text formats does the Binary to Text process reliably?", questionZh: "Binary to Text 能可靠地处理哪些文本格式？", answer: "The json diff handles emails, articles, code comments, and data exports — any text length from a single word to full documents.", answerZh: "JSON Diff处理邮件、文章、代码注释和数据导出——从单个词到完整文档的任意长度文本。" },
    ],
  },
  {
    slug: "image-invert",
    faqs: [
      { question: "What does the Image Invert actually do with my input?", questionZh: "Image Invert具体如何处理我的输入？", answer: "Invert or negate colors in any image instantly. Create negative effects, X-ray looks, and artistic color reversals with one click. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Invert or negate colors in any image instantly. Create negative effects, X-ray looks, and artistic color reversals with one click。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Does the Image Invert maintain quality after processing?", questionZh: "Image Invert 处理后保持质量吗？", answer: "The Image Invert uses browser-native Canvas API for processing. For resize operations, it applies bilinear interpolation to maintain sharpness. You can choose output format and quality level before downloading.", answerZh: "Image Invert使用浏览器原生 Canvas API 处理图片。调整尺寸时应用双线性插值保持清晰度。下载前可选择输出格式和质量级别。" },
      { question: "Does the Image Invert handle multiple files efficiently?", questionZh: "Image Invert 能高效处理多个文件吗？", answer: "Image Invert works similarly — While the tool focuses on single-image operations ...", answerZh: "Image Invert同理——虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。..." },
    ],
  },
  {
    slug: "image-collage",
    faqs: [
      { question: "What does the Photo Collage Maker actually do with my input?", questionZh: "Photo Collage Maker具体如何处理我的输入？", answer: "Combine multiple photos into a beautiful collage grid. Choose layouts, spacing, background colors, and export in high resolution. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Combine multiple photos into a beautiful collage grid. Choose layouts, spacing, background colors, and export in high resolution。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Does the Photo Collage Maker maintain quality after processing?", questionZh: "Photo Collage Maker 处理后保持质量吗？", answer: "The Photo Collage Maker uses browser-native Canvas API for processing. For resize operations, it applies bilinear interpolation to maintain sharpness. You can choose output format and quality level before downloading.", answerZh: "Photo Collage Maker使用浏览器原生 Canvas API 处理图片。调整尺寸时应用双线性插值保持清晰度。下载前可选择输出格式和质量级别。" },
      { question: "Does the Photo Collage Maker handle multiple files efficiently?", questionZh: "Photo Collage Maker 能高效处理多个文件吗？", answer: "Photo Collage Maker works similarly — While the tool focuses on single-image operations ...", answerZh: "Photo Collage Maker同理——虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。..." },
    ],
  },
  {
    slug: "css-gradient",
    faqs: [
      { question: "What does the CSS Gradient Generator actually do with my input?", questionZh: "CSS Gradient Generator具体如何处理我的输入？", answer: "Create beautiful linear and radial CSS gradients visually. Copy the generated CSS code for backgrounds, buttons, and UI elements. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Create beautiful linear and radial CSS gradients visually. Copy the generated CSS code for backgrounds, buttons, and UI elements。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the CSS Gradient Generator accept?", questionZh: "CSS Gradient Generator接受什么类型的输入？", answer: "You can paste markdown to html content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴Markdown to HTML内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "What scenarios call for using the CSS Gradient Generator?", questionZh: "什么场景下需要用到 CSS Gradient Generator？", answer: "During code review when you need to quickly create beautiful linear and radial css gradients visually. copy the generated css code for backgrounds, buttons, and ui elements, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "代码审查时需要快速create beautiful linear and radial css gradients visually. copy the generated css code for backgrounds, buttons, and ui elements，或调试数据管道时验证中间格式。在 API 开发中做快速转换也很方便。" },
    ],
  },
  {
    slug: "css-shadow",
    faqs: [
      { question: "What does the CSS Box Shadow Generator actually do with my input?", questionZh: "CSS Box Shadow Generator具体如何处理我的输入？", answer: "Design and preview custom CSS box shadows visually. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Design and preview custom CSS box shadows visually。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the CSS Box Shadow Generator accept?", questionZh: "CSS Box Shadow Generator接受什么类型的输入？", answer: "You can paste sql formatter content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴SQL Formatter内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "What scenarios call for using the CSS Box Shadow Generator?", questionZh: "什么场景下需要用到 CSS Box Shadow Generator？", answer: "During code review when you need to quickly design and preview custom css box shadows visually, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "代码审查时需要快速design and preview custom css box shadows visually，或调试数据管道时验证中间格式。在 API 开发中做快速转换也很方便。" },
    ],
  },
  {
    slug: "json-to-typescript",
    faqs: [
      { question: "What does the JSON to TypeScript actually do with my input?", questionZh: "JSON to TypeScript具体如何处理我的输入？", answer: "Convert JSON objects into TypeScript interfaces automatically. Generate type definitions from API responses and configuration files instantly. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert JSON objects into TypeScript interfaces automatically. Generate type definitions from API responses and configuration files instantly。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What input and output formats does the JSON to TypeScript support?", questionZh: "JSON to TypeScript 支持哪些输入和输出格式？", answer: "JSON to TypeScript works similarly — Supported conversions include . Each format has sp...", answerZh: "JSON to TypeScript同理——支持的转换包括。每种格式有不同特点——例如 PNG 保留透明..." },
      { question: "What scenarios call for using the JSON to TypeScript?", questionZh: "什么场景下需要用到 JSON to TypeScript？", answer: "During code review when you need to quickly convert json objects into typescript interfaces automatically. generate type definitions from api responses and configuration files instantly, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "代码审查时需要快速convert json objects into typescript interfaces automatically. generate type definitions from api responses and configuration files instantly，或调试数据管道时验证中间格式。在 API 开发中做快速转换也很方便。" },
    ],
  },
  {
    slug: "html-to-jsx",
    faqs: [
      { question: "What does the HTML to JSX Converter actually do with my input?", questionZh: "HTML to JSX Converter具体如何处理我的输入？", answer: "Convert plain HTML code into React JSX syntax. Handle inline styles, class attributes, self-closing tags, and event handlers automatically. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert plain HTML code into React JSX syntax. Handle inline styles, class attributes, self-closing tags, and event handlers automatically。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What input and output formats does the HTML to JSX Converter support?", questionZh: "HTML to JSX Converter 支持哪些输入和输出格式？", answer: "HTML to JSX Converter works similarly — Supported conversions include . Each format has sp...", answerZh: "HTML to JSX Converter同理——支持的转换包括。每种格式有不同特点——例如 PNG 保留透明..." },
      { question: "What scenarios call for using the HTML to JSX Converter?", questionZh: "什么场景下需要用到 HTML to JSX Converter？", answer: "During code review when you need to quickly convert plain html code into react jsx syntax. handle inline styles, class attributes, self-closing tags, and event handlers automatically, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "代码审查时需要快速convert plain html code into react jsx syntax. handle inline styles, class attributes, self-closing tags, and event handlers automatically，或调试数据管道时验证中间格式。在 API 开发中做快速转换也很方便。" },
    ],
  },
  {
    slug: "color-palette",
    faqs: [
      { question: "What does the Color Palette Generator actually do with my input?", questionZh: "Color Palette Generator具体如何处理我的输入？", answer: "Generate color schemes: monochromatic, complementary, and more. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Generate color schemes: monochromatic, complementary, and more。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Which color spaces does the Color Palette Generator support?", questionZh: "Color Palette Generator支持哪些色彩空间？", answer: "The tool works with HEX (#ffffff), RGB (255,255,255), HSL, HSV, and CMYK. You can also sample colors directly from an uploaded image or use the visual picker to select any shade.", answerZh: "工具支持 HEX (#ffffff)、RGB (255,255,255)、HSL、HSV 和 CMYK。你还可以从上传的图片中直接取样，或使用可视化选择器选择任意色调。" },
      { question: "What scenarios call for using the Color Palette Generator?", questionZh: "什么场景下需要用到 Color Palette Generator？", answer: "During code review when you need to quickly generate color schemes: monochromatic, complementary, and more, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "代码审查时需要快速generate color schemes: monochromatic, complementary, and more，或调试数据管道时验证中间格式。在 API 开发中做快速转换也很方便。" },
    ],
  },
  {
    slug: "roman-numeral",
    faqs: [
      { question: "What does the Roman Numeral Converter actually do with my input?", questionZh: "Roman Numeral Converter具体如何处理我的输入？", answer: "Convert between Roman numerals and Arabic numbers instantly. Works with values from 1 to 3999, including common numeral combinations. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert between Roman numerals and Arabic numbers instantly. Works with values from 1 to 3999, including common numeral combinations。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What input and output formats does the Roman Numeral Converter support?", questionZh: "Roman Numeral Converter 支持哪些输入和输出格式？", answer: "Supported conversions include Roman numerals and Arabic numbers instantly. Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. The tool auto-detects your input format.", answerZh: "支持的转换包括Roman numerals and Arabic numbers instantly。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "Is the Roman Numeral Converter faster than installing dedicated software?", questionZh: "Roman Numeral Converter 比安装专用软件更快吗？", answer: "The Roman Numeral Converter covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "Roman Numeral Converter无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "percentage-calculator",
    faqs: [
      { question: "What does the Percentage Calculator actually do with my input?", questionZh: "Percentage Calculator具体如何处理我的输入？", answer: "Calculate percentages, what if, increase/decrease easily. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Calculate percentages, what if, increase/decrease easily。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the Percentage Calculator accept?", questionZh: "Percentage Calculator接受什么类型的输入？", answer: "You can paste csv viewer & formatter content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴CSV Viewer & Formatter内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "Is the Percentage Calculator faster than installing dedicated software?", questionZh: "Percentage Calculator 比安装专用软件更快吗？", answer: "The Percentage Calculator covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "Percentage Calculator无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "tip-calculator",
    faqs: [
      { question: "What does the Tip Calculator actually do with my input?", questionZh: "Tip Calculator具体如何处理我的输入？", answer: "Calculate tip amount, total bill, and per-person cost. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Calculate tip amount, total bill, and per-person cost。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the Tip Calculator accept?", questionZh: "Tip Calculator接受什么类型的输入？", answer: "You can paste url encoder/decoder content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴URL Encoder/Decoder内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "Is the Tip Calculator faster than installing dedicated software?", questionZh: "Tip Calculator 比安装专用软件更快吗？", answer: "The Tip Calculator covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "Tip Calculator无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "age-calculator",
    faqs: [
      { question: "What does the Age Calculator actually do with my input?", questionZh: "Age Calculator具体如何处理我的输入？", answer: "Calculate exact age in years, months, weeks, and days. Find your age on any future date or count down to your next birthday. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Calculate exact age in years, months, weeks, and days. Find your age on any future date or count down to your next birthday。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the Age Calculator accept?", questionZh: "Age Calculator接受什么类型的输入？", answer: "You can paste jwt decoder content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴JWT Decoder内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "Is the Age Calculator faster than installing dedicated software?", questionZh: "Age Calculator 比安装专用软件更快吗？", answer: "The Age Calculator covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "Age Calculator无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "bmi-calculator",
    faqs: [
      { question: "What does the BMI Calculator actually do with my input?", questionZh: "BMI Calculator具体如何处理我的输入？", answer: "Calculate Body Mass Index and check your health category. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Calculate Body Mass Index and check your health category。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the BMI Calculator accept?", questionZh: "BMI Calculator接受什么类型的输入？", answer: "You can paste number base converter content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴Number Base Converter内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "Is the BMI Calculator faster than installing dedicated software?", questionZh: "BMI Calculator 比安装专用软件更快吗？", answer: "The BMI Calculator covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "BMI Calculator无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "countdown-timer",
    faqs: [
      { question: "What does the Countdown Timer actually do with my input?", questionZh: "Countdown Timer具体如何处理我的输入？", answer: "Set a countdown to any date and time with days, hours, minutes, and seconds. Perfect for events, deadlines, and special occasions. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Set a countdown to any date and time with days, hours, minutes, and seconds. Perfect for events, deadlines, and special occasions。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the Countdown Timer accept?", questionZh: "Countdown Timer接受什么类型的输入？", answer: "You can paste image format converter content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴Image Format Converter内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "Is the Countdown Timer faster than installing dedicated software?", questionZh: "Countdown Timer 比安装专用软件更快吗？", answer: "The Countdown Timer covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "Countdown Timer无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "dice-roller",
    faqs: [
      { question: "What does the Dice Roller actually do with my input?", questionZh: "Dice Roller具体如何处理我的输入？", answer: "Roll virtual dice with 4, 6, 8, 10, 12, and 20 sides. Roll multiple dice at once for tabletop games, RPGs, and classrooms. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Roll virtual dice with 4, 6, 8, 10, 12, and 20 sides. Roll multiple dice at once for tabletop games, RPGs, and classrooms。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the Dice Roller accept?", questionZh: "Dice Roller接受什么类型的输入？", answer: "You can paste lorem ipsum generator content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴Lorem Ipsum Generator内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "Is the Dice Roller faster than installing dedicated software?", questionZh: "Dice Roller 比安装专用软件更快吗？", answer: "The Dice Roller covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "Dice Roller无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "decision-maker",
    faqs: [
      { question: "What does the Decision Maker actually do with my input?", questionZh: "Decision Maker具体如何处理我的输入？", answer: "Let fate decide — pick a random option from your list. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Let fate decide — pick a random option from your list。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the Decision Maker accept?", questionZh: "Decision Maker接受什么类型的输入？", answer: "You can paste text diff checker content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴Text Diff Checker内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "Is the Decision Maker faster than installing dedicated software?", questionZh: "Decision Maker 比安装专用软件更快吗？", answer: "The Decision Maker covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "Decision Maker无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "audio-cutter",
    faqs: [
      { question: "What does the Audio Cutter actually do with my input?", questionZh: "Audio Cutter具体如何处理我的输入？", answer: "Trim and cut audio files with an interactive waveform preview. Extract clips from MP3, WAV, and other formats right in your browser. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Trim and cut audio files with an interactive waveform preview. Extract clips from MP3, WAV, and other formats right in your browser。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the Audio Cutter accept?", questionZh: "Audio Cutter接受什么类型的输入？", answer: "You can paste text repeater content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴Text Repeater内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "Is the Audio Cutter faster than installing dedicated software?", questionZh: "Audio Cutter 比安装专用软件更快吗？", answer: "The Audio Cutter covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "Audio Cutter无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "audio-merger",
    faqs: [
      { question: "What does the Audio Merger actually do with my input?", questionZh: "Audio Merger具体如何处理我的输入？", answer: "Combine multiple audio files into one seamless track. Merge songs, recordings, or voice clips in any order with crossfade support. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Combine multiple audio files into one seamless track. Merge songs, recordings, or voice clips in any order with crossfade support。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the Audio Merger accept?", questionZh: "Audio Merger接受什么类型的输入？", answer: "You can paste html entity converter content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴HTML Entity Converter内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "Is the Audio Merger faster than installing dedicated software?", questionZh: "Audio Merger 比安装专用软件更快吗？", answer: "The Audio Merger covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "Audio Merger无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "audio-converter",
    faqs: [
      { question: "What does the Audio Converter actually do with my input?", questionZh: "Audio Converter具体如何处理我的输入？", answer: "Convert audio between WAV formats and sample rates. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert audio between WAV formats and sample rates。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What input and output formats does the Audio Converter support?", questionZh: "Audio Converter 支持哪些输入和输出格式？", answer: "Supported conversions include WAV formats and sample rates. Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. The tool auto-detects your input format.", answerZh: "支持的转换包括WAV formats and sample rates。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "Is the Audio Converter faster than installing dedicated software?", questionZh: "Audio Converter 比安装专用软件更快吗？", answer: "The Audio Converter covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "Audio Converter无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "svg-to-png",
    faqs: [
      { question: "What does the SVG to PNG Converter actually do with my input?", questionZh: "SVG to PNG Converter具体如何处理我的输入？", answer: "Convert SVG vector code or files into PNG images with custom dimensions, background colors, and scaling options for any use case. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Convert SVG vector code or files into PNG images with custom dimensions, background colors, and scaling options for any use case。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What input and output formats does the SVG to PNG Converter support?", questionZh: "SVG to PNG Converter 支持哪些输入和输出格式？", answer: "SVG to PNG Converter works similarly — Supported conversions include . Each format has sp...", answerZh: "SVG to PNG Converter同理——支持的转换包括。每种格式有不同特点——例如 PNG 保留透明..." },
      { question: "Does the SVG to PNG Converter preserve data integrity during conversion?", questionZh: "SVG to PNG Converter 在转换过程中保持数据完整性吗？", answer: "Text-based conversions through the timestamp converter are lossless with every data point preserved. Media quality depends on target format compression.", answerZh: "通过Timestamp Converter进行的文本转换是无损的，每个数据点都被保留。媒体格式质量取决于目标格式的压缩方式。" },
    ],
  },
  {
    slug: "days-between",
    faqs: [
      { question: "What does the Days Between Dates actually do with my input?", questionZh: "Days Between Dates具体如何处理我的输入？", answer: "Calculate the exact number of days between two dates. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Calculate the exact number of days between two dates。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the Days Between Dates accept?", questionZh: "Days Between Dates接受什么类型的输入？", answer: "You can paste css minifier content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴CSS Minifier内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "Is the Days Between Dates faster than installing dedicated software?", questionZh: "Days Between Dates 比安装专用软件更快吗？", answer: "The Days Between Dates covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "Days Between Dates无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "password-strength",
    faqs: [
      { question: "What does the Password Strength Checker actually do with my input?", questionZh: "Password Strength Checker具体如何处理我的输入？", answer: "Test how strong your password is with real-time analysis. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Test how strong your password is with real-time analysis。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the Password Strength Checker accept?", questionZh: "Password Strength Checker接受什么类型的输入？", answer: "You can paste json to yaml converter content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴JSON to YAML Converter内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "What scenarios call for using the Password Strength Checker?", questionZh: "什么场景下需要用到 Password Strength Checker？", answer: "During code review when you need to quickly test how strong your password is with real-time analysis, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "代码审查时需要快速test how strong your password is with real-time analysis，或调试数据管道时验证中间格式。在 API 开发中做快速转换也很方便。" },
    ],
  },
  {
    slug: "aspect-ratio-calculator",
    faqs: [
      { question: "What does the Aspect Ratio Calculator actually do with my input?", questionZh: "Aspect Ratio Calculator具体如何处理我的输入？", answer: "Calculate aspect ratios from dimensions or presets. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Calculate aspect ratios from dimensions or presets。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the Aspect Ratio Calculator accept?", questionZh: "Aspect Ratio Calculator接受什么类型的输入？", answer: "You can paste string escaper/unescaper content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴String Escaper/Unescaper内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "Is the Aspect Ratio Calculator faster than installing dedicated software?", questionZh: "Aspect Ratio Calculator 比安装专用软件更快吗？", answer: "The Aspect Ratio Calculator covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "Aspect Ratio Calculator无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "qr-reader",
    faqs: [
      { question: "What does the QR Code Reader actually do with my input?", questionZh: "QR Code Reader具体如何处理我的输入？", answer: "Decode QR codes from uploaded images instantly. Scan any QR code image to reveal the embedded URL, text, or contact information. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Decode QR codes from uploaded images instantly. Scan any QR code image to reveal the embedded URL, text, or contact information。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the QR Code Reader accept?", questionZh: "QR Code Reader接受什么类型的输入？", answer: "You can paste html tag stripper content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴HTML Tag Stripper内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "Does the QR Code Reader preserve data integrity during conversion?", questionZh: "QR Code Reader 在转换过程中保持数据完整性吗？", answer: "Text-based conversions through the image compressor are lossless with every data point preserved. Media quality depends on target format compression.", answerZh: "通过Image Compressor进行的文本转换是无损的，每个数据点都被保留。媒体格式质量取决于目标格式的压缩方式。" },
    ],
  },
  {
    slug: "color-blindness-simulator",
    faqs: [
      { question: "What does the Color Blindness Simulator actually do with my input?", questionZh: "Color Blindness Simulator具体如何处理我的输入？", answer: "Simulate how images look with various color blindness types. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Simulate how images look with various color blindness types。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "Which color spaces does the Color Blindness Simulator support?", questionZh: "Color Blindness Simulator支持哪些色彩空间？", answer: "Color Blindness Simulator works similarly — The tool works with HEX (#ffffff), RGB (255,255,25...", answerZh: "Color Blindness Simulator同理——工具支持 HEX (#ffffff)、RGB (255,25..." },
      { question: "Does the Color Blindness Simulator handle multiple files efficiently?", questionZh: "Color Blindness Simulator 能高效处理多个文件吗？", answer: "Color Blindness Simulator works similarly — While the tool focuses on single-image operations ...", answerZh: "Color Blindness Simulator同理——虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。..." },
    ],
  },
  {
    slug: "online-notepad",
    faqs: [
      { question: "What does the Online Notepad actually do with my input?", questionZh: "Online Notepad具体如何处理我的输入？", answer: "A clean, distraction-free browser-based notepad with auto-save. Write notes, code snippets, and lists that persist in your browser storage. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "A clean, distraction-free browser-based notepad with auto-save. Write notes, code snippets, and lists that persist in your browser storage。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the Online Notepad accept?", questionZh: "Online Notepad接受什么类型的输入？", answer: "You can paste cron expression parser content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴Cron Expression Parser内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "What text formats does the Online Notepad process reliably?", questionZh: "Online Notepad 能可靠地处理哪些文本格式？", answer: "The image invert handles emails, articles, code comments, and data exports — any text length from a single word to full documents.", answerZh: "Image Invert处理邮件、文章、代码注释和数据导出——从单个词到完整文档的任意长度文本。" },
    ],
  },
  {
    slug: "text-statistics",
    faqs: [
      { question: "What does the Text Statistics actually do with my input?", questionZh: "Text Statistics具体如何处理我的输入？", answer: "Detailed text analysis: letters, vowels, unique words, and more. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "Detailed text analysis: letters, vowels, unique words, and more。你将数据输入到输入框中，工具即时应用转换——无需等待，没有处理队列。" },
      { question: "What types of input does the Text Statistics accept?", questionZh: "Text Statistics接受什么类型的输入？", answer: "You can paste text to binary converter content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴Text to Binary Converter内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "What text formats does the Text Statistics process reliably?", questionZh: "Text Statistics 能可靠地处理哪些文本格式？", answer: "The text statistics handles emails, articles, code comments, and data exports — any text length from a single word to full documents.", answerZh: "Text Statistics处理邮件、文章、代码注释和数据导出——从单个词到完整文档的任意长度文本。" },
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
  {
    slug: "watermark-remover",
    faqs: [
      { question: "How does the watermark remover work?", questionZh: "去水印工具是如何工作的？", answer: "The tool uses content-aware inpainting algorithms running entirely in your browser via Canvas and WebGL. It analyzes the surrounding pixels around the selected watermark area and intelligently fills in the region to produce a clean, natural-looking result without requiring any server-side processing.", answerZh: "该工具通过 Canvas 和 WebGL 在浏览器中完全运行内容感知修复算法。它分析选定水印区域周围的像素，智能填充该区域，生成干净自然的效果，无需任何服务器端处理。" },
      { question: "Will removing a watermark reduce image quality?", questionZh: "去除水印会降低图片质量吗？", answer: "The removal is applied only to the selected watermark region. The rest of your image remains at full original resolution and quality. For large or complex watermarks over detailed backgrounds, some minor artifacts may appear, but overall image integrity is preserved.", answerZh: "去除操作仅应用于选定的水印区域。图片其余部分保持完整的原始分辨率和质量。对于覆盖复杂背景的大型水印，可能会出现少量轻微瑕疵，但整体图片完整性得到保留。" },
      { question: "Can I remove watermarks from any image format?", questionZh: "可以从任何图片格式中去除水印吗？", answer: "Yes. The tool supports JPG, PNG, WebP, BMP, and GIF formats. Simply upload your image, select the watermark area with the brush tool, and click remove. The processed image can be downloaded in your preferred format with adjustable quality settings.", answerZh: "可以。该工具支持 JPG、PNG、WebP、BMP 和 GIF 格式。只需上传图片，用画笔工具选择水印区域，然后点击去除即可。处理后的图片可以按您偏好的格式下载，并可调整质量设置。" },
    ],
  },
  {
    slug: "ocr-text-recognition",
    faqs: [
      { question: "How accurate is the OCR text recognition?", questionZh: "OCR 文字识别的准确度如何？", answer: "The tool uses Tesseract.js, an industry-leading OCR engine running entirely in your browser. It achieves 95-99% accuracy on clear printed text. Accuracy may decrease with handwritten text, low-resolution images, or unusual fonts, but the engine supports 100+ languages including Chinese, English, Japanese, and Korean.", answerZh: "该工具使用 Tesseract.js，这是一个完全在浏览器中运行的业界领先 OCR 引擎。对清晰的印刷文字准确率可达 95-99%。手写文字、低分辨率图片或特殊字体可能会降低准确率，但引擎支持包括中文、英文、日语和韩语在内的 100 多种语言。" },
      { question: "What languages does the OCR tool support?", questionZh: "OCR 工具支持哪些语言？", answer: "The tool supports over 100 languages including English, Simplified Chinese, Traditional Chinese, Japanese, Korean, Arabic, Spanish, French, German, Russian, and many more. You can select multiple languages simultaneously to recognize mixed-language documents for maximum accuracy.", answerZh: "该工具支持 100 多种语言，包括英语、简体中文、繁体中文、日语、韩语、阿拉伯语、西班牙语、法语、德语、俄语等。您可以同时选择多种语言来识别混合语言文档，以获得最高准确率。" },
      { question: "Are my uploaded images sent to a server?", questionZh: "我上传的图片会发送到服务器吗？", answer: "No. All OCR processing happens entirely in your browser using WebAssembly. Your images and the recognized text never leave your device, ensuring complete privacy for sensitive documents like invoices, contracts, or personal records.", answerZh: "不会。所有 OCR 处理都通过 WebAssembly 完全在您的浏览器中进行。您的图片和识别出的文本永远不会离开您的设备，确保发票、合同或个人记录等敏感文档的完全隐私。" },
    ],
  },
  {
    slug: "csv-visualizer",
    faqs: [
      { question: "What types of charts can I create from CSV data?", questionZh: "可以从 CSV 数据创建哪些类型的图表？", answer: "The tool supports bar charts, line charts, pie charts, scatter plots, area charts, and doughnut charts. Simply upload your CSV file, select the columns for the X and Y axes, and the tool instantly generates an interactive chart with zooming, hovering tooltips, and exportable rendering.", answerZh: "该工具支持柱状图、折线图、饼图、散点图、面积图和环形图。只需上传 CSV 文件，选择 X 轴和 Y 轴对应的列，工具即可即时生成支持缩放、悬停提示和导出功能的交互式图表。" },
      { question: "How large a CSV file can I visualize?", questionZh: "可以可视化多大的 CSV 文件？", answer: "The tool handles CSV files up to 50MB in size with tens of thousands of rows. It uses efficient streaming parsers and virtualized rendering to keep the browser responsive. All parsing and visualization happen client-side, so there are no upload limits or server round-trips.", answerZh: "该工具可处理最大 50MB、包含数万行数据的 CSV 文件。它使用高效的流式解析和虚拟化渲染来保持浏览器响应速度。所有解析和可视化均在客户端完成，因此没有上传限制或服务器往返延迟。" },
      { question: "Can I customize the chart appearance?", questionZh: "可以自定义图表外观吗？", answer: "Yes. You can customize chart colors, titles, axis labels, legends, grid lines, and animations. The tool also supports multiple data series on a single chart, trend lines, and data point labels. Export your final chart as PNG, SVG, or shareable interactive HTML.", answerZh: "可以。您可以自定义图表颜色、标题、轴标签、图例、网格线和动画。该工具还支持在单个图表上显示多个数据系列、趋势线和数据点标签。最终图表可导出为 PNG、SVG 或可共享的交互式 HTML。" },
    ],
  },
  {
    slug: "video-to-gif",
    faqs: [
      { question: "What video formats can I convert to GIF?", questionZh: "可以将哪些视频格式转换为 GIF？", answer: "The tool supports MP4, WebM, MOV, AVI, and MKV input formats. Video processing happens entirely in your browser using the WebCodecs API and FFmpeg.wasm. You can trim the video to select the exact segment you want before conversion, and the output GIF is generated without any server upload.", answerZh: "该工具支持 MP4、WebM、MOV、AVI 和 MKV 输入格式。视频处理完全通过 WebCodecs API 和 FFmpeg.wasm 在您的浏览器中进行。您可以在转换前修剪视频以选择精确的片段，生成的 GIF 输出无需任何服务器上传。" },
      { question: "How do I control the GIF quality and file size?", questionZh: "如何控制 GIF 质量和文件大小？", answer: "You can adjust frame rate (FPS), output resolution, and color palette to balance quality and file size. Lower frame rates and smaller dimensions produce smaller files. The tool also offers an optimized palette option that reduces file size by 40-60% while maintaining visual quality for web and social media use.", answerZh: "您可以调整帧率（FPS）、输出分辨率和调色板来平衡质量和文件大小。较低的帧率和较小的尺寸会生成更小的文件。该工具还提供优化的调色板选项，可将文件大小减少 40-60%，同时保持适合网页和社交媒体使用的视觉质量。" },
      { question: "Is there a video length limit for conversion?", questionZh: "转换视频有长度限制吗？", answer: "The tool can handle videos up to 100MB in size. For best results with GIF output, we recommend trimming videos to 10-30 seconds, as longer segments produce very large GIF files. The built-in timeline editor lets you precisely select start and end points before generating the GIF.", answerZh: "该工具可处理最大 100MB 的视频。为获得最佳的 GIF 输出效果，建议将视频修剪至 10-30 秒，因为较长的片段会生成非常大的 GIF 文件。内置的时间轴编辑器让您可以在生成 GIF 前精确选择起始和结束点。" },
    ],
  },
  {
    slug: "markdown-to-pdf",
    faqs: [
      { question: "What Markdown features are supported in the PDF export?", questionZh: "PDF 导出支持哪些 Markdown 功能？", answer: "The tool supports full GitHub Flavored Markdown including headings, bold, italic, code blocks with syntax highlighting, tables, blockquotes, ordered and unordered lists, images, links, horizontal rules, and task lists. Math equations via LaTeX and mermaid diagrams are also rendered in the exported PDF.", answerZh: "该工具支持完整的 GitHub 风格 Markdown，包括标题、粗体、斜体、带语法高亮的代码块、表格、引用、有序和无序列表、图片、链接、水平线和任务列表。通过 LaTeX 编写的数学公式和 Mermaid 图表也会在导出的 PDF 中渲染。" },
      { question: "Can I customize the PDF page layout and styling?", questionZh: "可以自定义 PDF 页面布局和样式吗？", answer: "Yes. You can choose page size (A4, Letter, Legal), orientation (portrait or landscape), margins, font family, font size, and line spacing. The tool also offers multiple pre-built themes including academic, technical documentation, and modern minimalist styles for professional-looking documents.", answerZh: "可以。您可以选择页面尺寸（A4、Letter、Legal）、方向（纵向或横向）、页边距、字体、字号和行距。该工具还提供多种预构建主题，包括学术、技术文档和现代简约风格，生成专业美观的文档。" },
      { question: "Does the conversion preserve images and code highlighting?", questionZh: "转换会保留图片和代码高亮吗？", answer: "Yes. Images embedded in your Markdown are rendered directly in the PDF. Code blocks are highlighted with syntax-aware coloring for 180+ programming languages. All rendering happens in your browser — your Markdown content and any embedded images never leave your device during conversion.", answerZh: "会。Markdown 中嵌入的图片会直接在 PDF 中渲染。代码块会根据 180 多种编程语言的语法进行高亮着色。所有渲染都在您的浏览器中完成——在转换过程中，您的 Markdown 内容和任何嵌入的图片都不会离开您的设备。" },
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