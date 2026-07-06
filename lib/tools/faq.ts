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
      { question: "What file types can I encode to Base64?", questionZh: "哪些文件类型可以编码为 Base64？", answer: "You can encode any file type including images (PNG, JPG, GIF), documents (PDF, TXT), and binary files. 该工具 accepts text input and file uploads.", answerZh: "您可以编码任何文件类型，包括图片（PNG、JPG、GIF）、文档（PDF、TXT）和二进制文件。该工具接受文本输入和文件上传。" },
    ],
  },
  {
    slug: "regex-tester",
    faqs: [
      { question: "What is a regex tester?", questionZh: "什么是正则表达式测试器？", answer: "A regex tester lets you test regular expressions against sample text in real-time. It highlights matches, shows capture groups, and helps you build and debug regex patterns.", answerZh: "正则表达式测试器让您实时对示例文本测试正则表达式。它会高亮显示匹配项、显示捕获组，帮助您构建和调试正则表达式模式。" },
      { question: "Which regex flavor does this tool support?", questionZh: "此工具支持哪种正则表达式语法？", answer: "该工具 supports JavaScript regex syntax, which covers most common use cases including lookaheads, backreferences, and character classes.", answerZh: "该工具支持 JavaScript 正则表达式语法，涵盖大多数常见用例，包括前瞻断言、反向引用和字符类。" },
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
      { question: "Which UUID version does this tool generate?", questionZh: "此工具生成哪种版本的 UUID？", answer: "该工具 generates UUID v4, which uses random numbers. This is the most commonly used version for applications requiring unique identifiers.", answerZh: "该工具生成 UUID v4，使用随机数。这是需要唯一标识符的应用中最常用的版本。" },
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
      { question: "What timestamp formats are supported?", questionZh: "支持哪些时间戳格式？", answer: "该工具 converts between Unix timestamps (seconds and milliseconds), ISO 8601 format, and human-readable date strings. It supports all common date formats.", answerZh: "该工具可在 Unix 时间戳（秒和毫秒）、ISO 8601 格式和可读日期字符串之间转换。支持所有常见日期格式。" },
      { question: "What is the current Unix timestamp?", questionZh: "当前 Unix 时间戳是多少？", answer: "You can see the live current timestamp at the top of the page. It updates every second.", answerZh: "您可以在页面顶部看到实时当前时间戳，每秒更新。" },
    ],
  },
  {
    slug: "image-compressor",
    faqs: [
      { question: "How much can I compress my images?", questionZh: "图片能压缩多少？", answer: "Compression rates vary by image type and quality setting. Typical reductions are 30-80% for JPEG images and 20-60% for PNG images with minimal visible quality loss.", answerZh: "压缩率因图片类型和质量设置而异。JPEG 图片通常可减少 30-80%，PNG 图片可减少 20-60%，且肉眼几乎看不到画质损失。" },
      { question: "Are my images uploaded to a server?", questionZh: "我的图片会上传到服务器吗？", answer: "No. All compression happens in your browser using client-side JavaScript. Your images never leave your device.", answerZh: "不会。所有压缩都在浏览器中使用客户端 JavaScript 完成。您的图片不会离开您的设备。" },
      { question: "What image formats are supported?", questionZh: "支持哪些图片格式？", answer: "该工具 supports JPEG, PNG, WebP, and GIF input formats. You can output to JPEG, PNG, or WebP.", answerZh: "该工具支持 JPEG、PNG、WebP 和 GIF 输入格式。您可以输出为 JPEG、PNG 或 WebP。" },
    ],
  },
  {
    slug: "pdf-merger",
    faqs: [
      { question: "Is there a file size limit?", questionZh: "有文件大小限制吗？", answer: "该工具 handles PDFs entirely in your browser, so limits depend on your device's memory. For most users, files up to 100MB per PDF work without issues.", answerZh: "该工具完全在浏览器中处理 PDF，因此限制取决于您设备的内存。对于大多数用户，每个 PDF 最多 100MB 都能正常工作。" },
      { question: "Can I reorder pages before merging?", questionZh: "合并前可以重新排列页面吗？", answer: "Yes. You can drag and drop to reorder PDF files before merging them into a single document.", answerZh: "可以。在合并为单个文档之前，您可以通过拖放重新排列 PDF 文件顺序。" },
      { question: "Are my PDF files uploaded?", questionZh: "我的 PDF 文件会被上传吗？", answer: "No. All processing happens locally in your browser. Your PDF files never leave your device.", answerZh: "不会。所有处理都在浏览器本地完成。您的 PDF 文件不会离开您的设备。" },
    ],
  },
  {
    slug: "barcode-generator",
    faqs: [
      { question: "What data can I encode in a QR code?", questionZh: "二维码中可以编码哪些数据？", answer: "You can encode text, URLs, email addresses, phone numbers, WiFi credentials, and contact information. 该工具 supports multiple QR code data types.", answerZh: "您可以编码文本、URL、电子邮件地址、电话号码、WiFi 凭据和联系信息。该工具支持多种二维码数据类型。" },
      { question: "Can I customize the QR code appearance?", questionZh: "可以自定义二维码外观吗？", answer: "Yes. You can change the colors, size, and error correction level. Higher error correction makes the QR code more resilient to damage.", answerZh: "可以。您可以更改颜色、大小和纠错级别。更高的纠错级别使二维码更耐损坏。" },
    ],
  },
  {
    slug: "dns-lookup",
    faqs: [
      { question: "What DNS records can I look up?", questionZh: "可以查询哪些 DNS 记录？", answer: "该工具 supports A, AAAA, CNAME, MX, NS, TXT, SOA, and SRV records. You can query any domain's DNS configuration.", answerZh: "该工具支持 A、AAAA、CNAME、MX、NS、TXT、SOA 和 SRV 记录。您可以查询任何域名的 DNS 配置。" },
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
      { question: "What hash algorithms are supported?", questionZh: "支持哪些哈希算法？", answer: "该工具 supports MD5, SHA-1, SHA-256, SHA-384, and SHA-512 hash algorithms. SHA-256 and above are recommended for security-sensitive applications.", answerZh: "该工具支持 MD5、SHA-1、SHA-256、SHA-384 和 SHA-512 哈希算法。对于安全性要求高的应用，建议使用 SHA-256 及以上。" },
      { question: "Can I verify a hash value?", questionZh: "可以验证哈希值吗？", answer: "Yes. You can paste a hash value and compare it against the generated hash to verify data integrity.", answerZh: "可以。您可以粘贴哈希值并与生成的哈希进行比较，以验证数据完整性。" },
    ],
  },
  {
    slug: "case-converter",
    faqs: [
      { question: "What case formats are supported?", questionZh: "支持哪些大小写格式？", answer: "该工具 supports lowercase, UPPERCASE, Title Case, Sentence case, camelCase, PascalCase, and snake_case conversions.", answerZh: "该工具支持小写、大写、标题格式、句子格式、驼峰式、帕斯卡式和蛇形式转换。" },
      { question: "Can I convert large blocks of text?", questionZh: "可以转换大段文本吗？", answer: "Yes. There's no practical text length limit. You can paste entire documents and convert the case instantly.", answerZh: "可以。没有实际的文本长度限制。您可以粘贴整个文档并即时转换大小写。" },
    ],
  },
  {
    slug: "markdown-to-html",
    faqs: [
      { question: "What Markdown features are supported?", questionZh: "支持哪些 Markdown 功能？", answer: "该工具 supports headings, bold, italic, links, images, code blocks, lists, tables, blockquotes, and horizontal rules — essentially all standard Markdown syntax.", answerZh: "该工具支持标题、粗体、斜体、链接、图片、代码块、列表、表格、引用和水平线——基本上所有标准 Markdown 语法。" },
      { question: "Can I preview the HTML output?", questionZh: "可以预览 HTML 输出吗？", answer: "Yes. 该工具 shows both the generated HTML code and a live preview of how it renders.", answerZh: "可以。该工具同时显示生成的 HTML 代码和渲染效果的实时预览。" },
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
      { question: "What does the 进制转换器 actually do with my input?", questionZh: "进制转换器具体如何处理我的输入？", answer: "Convert between binary, octal, decimal, and hexadecimal. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "在二进制、八进制、十进制和十六进制之间进行转换。" },
      { question: "Which image formats can I convert between?", questionZh: "图片转换支持哪些格式？", answer: "Supported conversions include binary, octal, decimal, and hexadecimal. Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. 该工具 auto-detects your input format.", answerZh: "支持的转换包括binary, octal, decimal, and hexadecimal。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "Why convert JSON to YAML for configuration files?", questionZh: "为什么要把 JSON 转为 YAML 用于配置文件？", answer: "During code review when you need to quickly convert between binary, octal, decimal, and hexadecimal, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "适合在需要将接口数据和配置文件统一格式时使用，例如将 REST API 返回的 JSON 转成更易读的 YAML 配置。" },
    ],
  },
  {
    slug: "image-converter",
    faqs: [
      { question: "What does the 图片格式转换器 actually do with my input?", questionZh: "图片格式转换器具体如何处理我的输入？", answer: "Convert images between JPG, PNG, WebP, AVIF, GIF, and BMP formats. Batch convert with custom quality and dimension settings. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "在 JPG、PNG、WebP、AVIF、GIF 和 BMP 格式之间转换图片。支持批量转换，并可自定义质量和尺寸设置。" },
      { question: "What are the differences between JPG, PNG, WebP, and other formats?", questionZh: "JPG、PNG、WebP 等格式有什么区别？", answer: "JPG uses lossy compression ideal for photographs (no transparency). PNG uses lossless compression preserving transparency but larger file size. WebP offers both lossy and lossless modes with 25-35% smaller files than JPG. BMP is uncompressed and lossless. TIFF supports high bit-depth for professional printing. GIF supports simple animation but only 256 colors.", answerZh: "JPG 使用有损压缩，适合照片（不支持透明度）。PNG 使用无损压缩，保留透明度但文件较大。WebP 同时支持有损和无损模式，文件比 JPG 小 25-35%。BMP 是无压缩无损格式。TIFF 支持高位深，适合专业印刷。GIF 支持简单动画但仅限 256 色。" },
      { question: "Does converting between formats reduce image quality?", questionZh: "格式转换会降低图片质量吗？", answer: "Converting from a lossy format (JPG, WebP lossy) to any format permanently loses data already discarded. Converting from lossless (PNG, BMP, TIFF) to lossy compresses according to the quality setting you choose. Converting between lossless formats preserves pixels exactly. Converting to GIF reduces colors to 256, causing visible banding in photos.", answerZh: "从有损格式（JPG、有损 WebP）转换到任何格式都会永久丢失已丢弃的数据。从无损格式（PNG、BMP、TIFF）转换到有损格式会按你选择的质量设置进行压缩。无损格式之间转换会精确保留像素。转换为 GIF 会将颜色减少到 256 色，在照片中产生明显的色带。" },
    ],
  },
  {
    slug: "lorem-ipsum-generator",
    faqs: [
      { question: "What does the Lorem Ipsum 生成器 actually do with my input?", questionZh: "Lorem Ipsum 生成器具体如何处理我的输入？", answer: "Generate placeholder text for design mockups, website wireframes, and print layouts. Customize paragraph count, word length, and format. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "为设计稿、网站线框图和印刷排版生成占位文本。可自定义段落数、字长和格式。" },
      { question: "Can I customize the output from the Lorem Ipsum 生成器?", questionZh: "可以自定义 Lorem Ipsum 生成器的输出吗？", answer: "Yes. After generating the default output, you can adjust parameters like length, format, and quantity. The result updates in real time as you change settings.", answerZh: "可以。生成默认输出后，你可以调整长度、格式和数量等参数。修改设置时结果会实时更新。" },
      { question: "Is the generated Lorem Ipsum real Latin?", questionZh: "生成的 Lorem Ipsum 是真正的拉丁语吗？", answer: "Lorem Ipsum is pseudo-Latin derived from a 1st-century BC text by Cicero (de Finibus Bonorum et Malorum), but the words are scrambled so it has no coherent meaning. This is intentional — designers use it to avoid distracting readers with readable content during layout work.", answerZh: "Lorem Ipsum 是源自公元前 1 世纪西塞罗著作（de Finibus Bonorum et Malorum）的伪拉丁文，但词语被打乱了，因此没有连贯的含义。这是故意的——设计师在排版工作中使用它来避免可读内容分散读者的注意力。" },
    ],
  },
  {
    slug: "text-diff-checker",
    faqs: [
      { question: "What does the 文本差异检查器 actually do with my input?", questionZh: "文本差异检查器具体如何处理我的输入？", answer: "Compare two blocks of text side by side and highlight every difference. Perfect for code reviews, document revisions, and plagiarism checks. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "并排比较两段文本并高亮所有差异。非常适合代码审查、文档修订和抄袭检查。" },
      { question: "How accurate is the 文本差异检查器?", questionZh: "文本差异检查器的准确性如何？", answer: "The 文本差异检查器 uses deterministic algorithms — the same input always produces the same output. Every character is processed individually, so even single-character changes are caught and displayed.", answerZh: "文本差异检查器使用确定性算法——相同输入始终产生相同输出。每个字符都被单独处理，即使单字符变化也能被捕获和显示。" },
      { question: "What are practical uses for repeating text?", questionZh: "重复文本的实际用途有哪些？", answer: "文本差异检查器 适合比较合同版本、代码变更和文档修订，无论文本长短都能精准比对。", answerZh: "JSON 格式化验证工具处理邮件、文章、代码注释和数据导出——从单个词到完整文档的任意长度文本。" },
    ],
  },
  {
    slug: "text-repeater",
    faqs: [
      { question: "What does the 文本重复器 actually do with my input?", questionZh: "文本重复器具体如何处理我的输入？", answer: "Repeat any text multiple times with custom separators, line breaks, or prefixes. Generate test data, patterns, and repeated strings instantly. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "使用自定义分隔符、换行符或前缀重复任意文本多次。即时生成测试数据、模式和重复字符串。" },
      { question: "What types of input does the 文本重复器 accept?", questionZh: "文本重复器接受什么类型的输入？", answer: "You can paste json formatter & validator content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴JSON 格式化验证工具内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "Can it sort mixed numeric and alphabetic lines?", questionZh: "能混合排序数字行和字母行吗？", answer: "The text repeater handles emails, articles, code comments, and data exports — any text length from a single word to full documents.", answerZh: "文本重复器 可处理邮件、文章、代码注释和数据导出——从单个词到完整文档的任意长度文本。" },
    ],
  },
  {
    slug: "html-entity-converter",
    faqs: [
      { question: "What does the HTML 实体转换器 actually do with my input?", questionZh: "HTML 实体转换器具体如何处理我的输入？", answer: "Encode and decode HTML entities like &amp; and &lt;. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "编码和解码 HTML 实体，例如 & 和 <。" },
      { question: "What input and output formats does the HTML 实体转换器 support?", questionZh: "HTML 实体转换器 支持哪些输入和输出格式？", answer: "支持的转换包括 HTML 实体编码与解码。每种格式都有不同特点；例如 PNG 保留透明度，而 JPG 压缩率更高。工具会自动识别你输入的格式。", answerZh: "支持的转换包括。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "How precise are the weight conversion results?", questionZh: "重量转换结果有多精确？", answer: "基于文本的 HTML 实体转换是无损的，每个数据点都会保留。媒体格式质量取决于目标格式的压缩方式。", answerZh: "通过JSON 格式化验证工具进行的文本转换是无损的，每个数据点都被保留。媒体格式质量取决于目标格式的压缩方式。" },
    ],
  },
  {
    slug: "css-minifier",
    faqs: [
      { question: "What does the CSS 压缩器 actually do with my input?", questionZh: "CSS 压缩器具体如何处理我的输入？", answer: "Minify and compress CSS code to reduce file size and improve page load speed. Remove whitespace, comments, and redundant rules safely. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "压缩和精简 CSS 代码，以减小文件体积并提升页面加载速度。安全地移除空白、注释和冗余规则。" },
      { question: "Will minification break my code?", questionZh: "压缩会破坏我的代码吗？", answer: "No. The CSS 压缩器 only removes characters that don't affect execution — whitespace between tokens, comments, and optional semicolons. The minified output runs identically to the original. Always test in your environment to confirm.", answerZh: "不会。CSS 压缩器只移除不影响执行的字符——标记之间的空格、注释和可选的分号。压缩后的输出与原始代码运行效果完全相同。建议在你的环境中测试确认。" },
      { question: "How much file size reduction can I expect?", questionZh: "文件体积能减少多少？", answer: "CSS files typically shrink by 30-60% depending on how many comments, indentation, and duplicate rules exist. A heavily-commented stylesheet with generous spacing compresses more than already-tight code. The savings directly reduce network transfer time and improve First Contentful Paint metrics.", answerZh: "CSS 文件通常可缩小 30-60%，具体取决于注释、缩进和重复规则的数量。注释密集、间距较大的样式表比已紧凑的代码压缩效果更好。减少的体积直接降低网络传输时间并改善首次内容绘制指标。" },
    ],
  },
  {
    slug: "json-to-yaml",
    faqs: [
      { question: "What does the JSON 转 YAML 转换器 actually do with my input?", questionZh: "JSON 转 YAML 转换器具体如何处理我的输入？", answer: "Convert JSON data to clean YAML format and vice versa. Preserve nested structures, arrays, and data types during conversion. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "将 JSON 数据转换为整洁的 YAML 格式，反之亦然。转换过程中保留嵌套结构、数组和数据类型。" },
      { question: "What's the difference between JSON and YAML?", questionZh: "JSON 和 YAML 有什么区别？", answer: "JSON requires braces, brackets, and double-quoted strings, making it verbose but machine-friendly. YAML uses indentation for structure, supports comments, and allows unquoted strings, making it more readable for humans. YAML is common in Docker Compose, Kubernetes configs, and CI pipelines; JSON is the standard for REST APIs and web data exchange.", answerZh: "JSON 需要大括号、方括号和双引号字符串，冗长但机器友好。YAML 使用缩进表示结构，支持注释，允许不加引号的字符串，对人类更易读。YAML 常用于 Docker Compose、Kubernetes 配置和 CI 流水线；JSON 是 REST API 和 Web 数据交换的标准。" },
      { question: "Does the conversion handle nested objects and arrays?", questionZh: "转换能处理嵌套对象和数组吗？", answer: "Yes. The converter recursively processes arbitrarily deep nested objects and multi-dimensional arrays. Data types are preserved exactly: JSON strings map to YAML strings, numbers stay numeric, booleans remain booleans, and null becomes YAML's null or ~. Multi-line JSON strings are converted to YAML block scalars for readability.", answerZh: "可以。转换器递归处理任意深度的嵌套对象和多维数组。数据类型被精确保留：JSON 字符串映射为 YAML 字符串，数字保持数字类型，布尔值保持布尔值，null 变为 YAML 的 null 或 ~。多行 JSON 字符串会被转换为 YAML 块标量以提高可读性。" },
    ],
  },
  {
    slug: "string-escaper",
    faqs: [
      { question: "What does the 字符串转义工具/Unescaper actually do with my input?", questionZh: "字符串转义工具/Unescaper具体如何处理我的输入？", answer: "Escape and unescape special characters in strings for JSON, HTML, URLs, SQL, and JavaScript. Handle all common escaping formats. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "对 JSON、HTML、URL、SQL 和 JavaScript 中的字符串特殊字符进行转义和反转义。处理所有常见转义格式。" },
      { question: "What types of input does the 字符串转义工具/Unescaper accept?", questionZh: "字符串转义工具/Unescaper接受什么类型的输入？", answer: "You can paste base64 encoder/decoder content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴Base64 编解码器内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "What escaping modes does this tool support?", questionZh: "这个工具支持哪些转义模式？", answer: "该工具 handles five distinct escaping contexts: HTML entities (converting < to &lt;), JSON string escaping (quotes, backslashes, control characters), URL percent-encoding (spaces to %20), SQL single-quote doubling, and JavaScript Unicode escapes (\\uXXXX). Each mode follows different rules — choose the one matching your target language to avoid injection vulnerabilities.", answerZh: "该工具处理五种不同的转义场景：HTML 实体（将 < 转为 &lt;）、JSON 字符串转义（引号、反斜杠、控制字符）、URL 百分号编码（空格转 %20）、SQL 单引号双写、以及 JavaScript Unicode 转义（\\uXXXX）。每种模式遵循不同规则——选择与目标语言匹配的模式以避免注入漏洞。" },
    ],
  },
  {
    slug: "html-tag-stripper",
    faqs: [
      { question: "What does the HTML 标签去除器 actually do with my input?", questionZh: "HTML 标签去除器具体如何处理我的输入？", answer: "Remove all HTML tags from text, keeping only content. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "从文本中移除所有 HTML 标签，只保留正文内容。" },
      { question: "What types of input does the HTML 标签去除器 accept?", questionZh: "HTML 标签去除器接受什么类型的输入？", answer: "You can paste regex tester content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴正则表达式测试器内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "When do network engineers need subnet calculations?", questionZh: "网络工程师什么时候需要子网计算？", answer: "During code review when you need to quickly remove all html tags from text, keeping only content, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "适合在配置网络、排查地址冲突或规划 VLAN 时，快速计算子网和主机范围。" },
    ],
  },
  {
    slug: "cron-parser",
    faqs: [
      { question: "What does the Cron 表达式解析器 actually do with my input?", questionZh: "Cron 表达式解析器具体如何处理我的输入？", answer: "Parse cron expressions and get human-readable schedules. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "解析 cron 表达式并获得可读的时间表。" },
      { question: "What types of input does the Cron 表达式解析器 accept?", questionZh: "Cron 表达式解析器接受什么类型的输入？", answer: "You can paste color converter content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "该工具专注于颜色格式转换，通常无需大文件或拖放批量输入。" },
      { question: "What use cases require generating custom JWTs?", questionZh: "哪些场景需要生成自定义 JWT？", answer: "During code review when you need to quickly parse cron expressions and get human-readable schedules, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "适合需要在 JPG、PNG、WebP 等格式间切换时使用，例如为网页瘦身或统一项目图片格式。" },
    ],
  },
  {
    slug: "text-to-binary",
    faqs: [
      { question: "What does the 文本转二进制转换器 actually do with my input?", questionZh: "文本转二进制转换器具体如何处理我的输入？", answer: "Convert text to binary code and binary back to text. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "将文本转换为二进制代码，也能将二进制转回文本。" },
      { question: "What input and output formats does the 文本转二进制转换器 support?", questionZh: "文本转二进制转换器 支持哪些输入和输出格式？", answer: "文本转二进制转换器 works similarly — Supported conversions include . Each format has sp...", answerZh: "文本转二进制转换器同理——支持的转换包括。每种格式有不同特点——例如 PNG 保留透明..." },
      { question: "Does deduplication preserve the original line order?", questionZh: "去重是否保持原始行顺序？", answer: "The html entity converter handles emails, articles, code comments, and data exports — any text length from a single word to full documents.", answerZh: "HTML 实体转换器 可处理邮件、文章、代码注释和数据导出——从单个词到完整文档的任意长度文本。" },
    ],
  },
  {
    slug: "html-preview",
    faqs: [
      { question: "What does the HTML 预览器 actually do with my input?", questionZh: "HTML 预览器具体如何处理我的输入？", answer: "Write and preview HTML code in real-time in a sandbox. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "在沙盒中实时编写并预览 HTML 代码。" },
      { question: "What types of input does the HTML 预览器 accept?", questionZh: "HTML 预览器接受什么类型的输入？", answer: "You can paste password generator content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴密码生成器内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "What scenarios call for using the HTML 预览器?", questionZh: "什么场景下需要用到 HTML 预览器？", answer: "During code review when you need to quickly write and preview html code in real-time in a sandbox, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "适合在整理文章标题、文件名或路由路径时使用，一键生成清晰且可访问的链接文本。" },
    ],
  },
  {
    slug: "ip-calculator",
    faqs: [
      { question: "What does the IP 子网计算器 actually do with my input?", questionZh: "IP 子网计算器具体如何处理我的输入？", answer: "Calculate network subnet, CIDR, broadcast, and host range. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "计算网络子网、CIDR、广播地址和主机范围。" },
      { question: "What types of input does the IP 子网计算器 accept?", questionZh: "IP 子网计算器接受什么类型的输入？", answer: "You can paste uuid generator content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴UUID 生成器内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "What scenarios call for using the IP 子网计算器?", questionZh: "什么场景下需要用到 IP 子网计算器？", answer: "During code review when you need to quickly calculate network subnet, cidr, broadcast, and host range, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "适合配置网络、排查地址冲突或规划 VLAN 时，快速计算子网和主机范围。" },
    ],
  },
  {
    slug: "jwt-generator",
    faqs: [
      { question: "What does the JWT 生成器 actually do with my input?", questionZh: "JWT 生成器具体如何处理我的输入？", answer: "Generate JWT tokens with custom header and payload. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "使用自定义头部和载荷生成 JWT 令牌。" },
      { question: "Can I customize the output from the JWT 生成器?", questionZh: "可以自定义JWT 生成器的输出吗？", answer: "JWT 生成器 works similarly — Yes. After generating the default output, you can ...", answerZh: "JWT 生成器同理——可以。生成默认输出后，你可以调整长度、格式和数量等参数。修改..." },
      { question: "What scenarios call for using the JWT 生成器?", questionZh: "什么场景下需要用到 JWT 生成器？", answer: "During code review when you need to quickly generate jwt tokens with custom header and payload, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "适合在接口调试、测试授权流程或生成演示令牌时快速组装 JWT。" },
    ],
  },
  {
    slug: "text-to-slug",
    faqs: [
      { question: "What does the 文本转 URL Slug 工具 actually do with my input?", questionZh: "文本转 URL Slug 工具具体如何处理我的输入？", answer: "Convert any text into clean, SEO-friendly URL slugs. Remove special characters, normalize spaces, and generate optimized permalinks. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "将任意文本转换为简洁、SEO 友好的 URL slug。移除特殊字符、规范化空格并生成优化的固定链接。" },
      { question: "What input and output formats does the 文本转 URL Slug 工具 support?", questionZh: "文本转 URL Slug 工具 支持哪些输入和输出格式？", answer: "文本转 URL Slug 工具 works similarly — Supported conversions include . Each format has sp...", answerZh: "文本转 URL Slug 工具同理——支持的转换包括。每种格式有不同特点——例如 PNG 保留透明..." },
      { question: "What text reversal modes are available?", questionZh: "支持哪些文本反转模式？", answer: "The html preview handles emails, articles, code comments, and data exports — any text length from a single word to full documents.", answerZh: "HTML 预览器 可处理邮件、文章、代码注释和数据导出——从单个词到完整文档的任意长度文本。" },
    ],
  },
  {
    slug: "text-sorter",
    faqs: [
      { question: "What does the 文本排序器 actually do with my input?", questionZh: "文本排序器具体如何处理我的输入？", answer: "Sort text lines alphabetically (A-Z or Z-A), by line length, or in reverse order. Remove duplicates and organize lists instantly. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "按字母顺序（A-Z 或 Z-A）、按行长度或倒序对文本行排序。即时去重并整理列表。" },
      { question: "How accurate is the 文本排序器?", questionZh: "文本排序器的准确性如何？", answer: "The 文本排序器 uses deterministic algorithms — the same input always produces the same output. Every character is processed individually, so even single-character changes are caught and displayed.", answerZh: "文本排序器使用确定性算法——相同输入始终产生相同输出。每个字符都被单独处理，即使单字符变化也能被捕获和显示。" },
      { question: "Can I specify which characters appear in random strings?", questionZh: "可以指定随机字符串中包含哪些字符吗？", answer: "The text sorter handles emails, articles, code comments, and data exports — any text length from a single word to full documents.", answerZh: "文本排序器 可处理邮件、文章、代码注释和数据导出——从单个词到完整文档的任意长度文本。" },
    ],
  },
  {
    slug: "text-deduplicator",
    faqs: [
      { question: "What does the 行去重工具 actually do with my input?", questionZh: "行去重工具具体如何处理我的输入？", answer: "Remove duplicate lines from text while preserving order. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "移除文本中的重复行，同时保留原有顺序。" },
      { question: "How accurate is the 行去重工具?", questionZh: "行去重工具的准确性如何？", answer: "The 行去重工具 uses deterministic algorithms — the same input always produces the same output. Every character is processed individually, so even single-character changes are caught and displayed.", answerZh: "行去重工具使用确定性算法——相同输入始终产生相同输出。每个字符都被单独处理，即使单字符变化也能被捕获和显示。" },
      { question: "Does the palindrome checker ignore spaces and punctuation?", questionZh: "回文检查器会忽略空格和标点吗？", answer: "The line deduplicator handles emails, articles, code comments, and data exports — any text length from a single word to full documents.", answerZh: "行去重工具 可处理邮件、文章、代码注释和数据导出——从单个词到完整文档的任意长度文本。" },
    ],
  },
  {
    slug: "text-reverser",
    faqs: [
      { question: "What does the Text Reverser actually do with my input?", questionZh: "文本反转工具具体如何处理我的输入？", answer: "Reverse text, words, sentences, or entire lines instantly. Useful for creating mirrored text, solving puzzles, or formatting data. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "即时反转文本、单词、句子或整行。适合用于制作镜像文本、解谜或格式化数据。" },
      { question: "What types of input does the Text Reverser accept?", questionZh: "文本反转工具接受什么类型的输入？", answer: "You can paste word & character counter content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴单词字符计数器内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "What text formats does the Text Reverser process reliably?", questionZh: "文本反转工具能可靠地处理哪些文本格式？", answer: "The text reverser handles emails, articles, code comments, and data exports — any text length from a single word to full documents.", answerZh: "文本反转工具可处理邮件、文章、代码注释和数据导出——从单个词到完整文档的任意长度文本。" },
    ],
  },
  {
    slug: "random-string-generator",
    faqs: [
      { question: "What does the 随机字符串生成器 actually do with my input?", questionZh: "随机字符串生成器具体如何处理我的输入？", answer: "Generate random strings with custom characters and length. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "使用自定义字符集和长度生成随机字符串。" },
      { question: "Can I customize the output from the 随机字符串生成器?", questionZh: "可以自定义随机字符串生成器的输出吗？", answer: "随机字符串生成器 works similarly — Yes. After generating the default output, you can ...", answerZh: "随机字符串生成器同理——可以。生成默认输出后，你可以调整长度、格式和数量等参数。修改..." },
      { question: "What text formats does the 随机字符串生成器 process reliably?", questionZh: "随机字符串生成器 能可靠地处理哪些文本格式？", answer: "The random string generator handles emails, articles, code comments, and data exports — any text length from a single word to full documents.", answerZh: "随机字符串生成器 可处理邮件、文章、代码注释和数据导出——从单个词到完整文档的任意长度文本。" },
    ],
  },
  {
    slug: "palindrome-checker",
    faqs: [
      { question: "What does the 回文检查器 actually do with my input?", questionZh: "回文检查器具体如何处理我的输入？", answer: "Check if text reads the same forwards and backwards. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "检查文本正读和反读是否相同。" },
      { question: "How accurate is the 回文检查器?", questionZh: "回文检查器的准确性如何？", answer: "The 回文检查器 uses deterministic algorithms — the same input always produces the same output. Every character is processed individually, so even single-character changes are caught and displayed.", answerZh: "回文检查器使用确定性算法——相同输入始终产生相同输出。每个字符都被单独处理，即使单字符变化也能被捕获和显示。" },
      { question: "What text formats does the 回文检查器 process reliably?", questionZh: "回文检查器 能可靠地处理哪些文本格式？", answer: "The palindrome checker handles emails, articles, code comments, and data exports — any text length from a single word to full documents.", answerZh: "回文检查器 可处理邮件、文章、代码注释和数据导出——从单个词到完整文档的任意长度文本。" },
    ],
  },
  {
    slug: "morse-code-converter",
    faqs: [
      { question: "What does the 摩尔斯电码转换器 actually do with my input?", questionZh: "摩尔斯电码转换器具体如何处理我的输入？", answer: "Convert text to Morse code and decode Morse code back to readable text. Learn Morse alphabet with visual audio playback support. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "将文本转换为摩尔斯电码，也能将摩尔斯电码解码回可读文本。支持可视化音频播放以学习摩尔斯字母表。" },
      { question: "What input and output formats does the 摩尔斯电码转换器 support?", questionZh: "摩尔斯电码转换器 支持哪些输入和输出格式？", answer: "摩尔斯电码转换器 works similarly — Supported conversions include . Each format has sp...", answerZh: "摩尔斯电码转换器同理——支持的转换包括。每种格式有不同特点——例如 PNG 保留透明..." },
      { question: "What text formats does the 摩尔斯电码转换器 process reliably?", questionZh: "摩尔斯电码转换器 能可靠地处理哪些文本格式？", answer: "The morse code converter handles emails, articles, code comments, and data exports — any text length from a single word to full documents.", answerZh: "摩尔斯电码转换器 可处理邮件、文章、代码注释和数据导出——从单个词到完整文档的任意长度文本。" },
    ],
  },
  {
    slug: "temperature-converter",
    faqs: [
      { question: "What does the 温度转换器 actually do with my input?", questionZh: "温度转换器具体如何处理我的输入？", answer: "Convert temperatures between Celsius, Fahrenheit, and Kelvin scales instantly. Perfect for cooking, science, weather, and travel calculations. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "即时在摄氏、华氏和开尔文温标之间转换温度。非常适合烹饪、科学、天气和旅行计算。" },
      { question: "What input and output formats does the 温度转换器 support?", questionZh: "温度转换器 支持哪些输入和输出格式？", answer: "Supported conversions include Celsius, Fahrenheit, and Kelvin scales instantly. Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. 该工具 auto-detects your input format.", answerZh: "支持摄氏、华氏和开尔文温标之间的即时转换。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "How precise are the length conversion results?", questionZh: "长度转换结果有多精确？", answer: "Text-based conversions through the base64 encoder/decoder are lossless with every data point preserved. Media quality depends on target format compression.", answerZh: "通过Base64 编解码器进行的文本转换是无损的，每个数据点都被保留。媒体格式质量取决于目标格式的压缩方式。" },
    ],
  },
  {
    slug: "weight-converter",
    faqs: [
      { question: "What does the Weight Converter actually do with my input?", questionZh: "重量转换器具体如何处理我的输入？", answer: "Convert between kilograms, pounds, ounces, and more. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "在千克、磅、盎司等单位之间进行转换。" },
      { question: "What input and output formats does the Weight Converter support?", questionZh: "重量转换器支持哪些输入和输出格式？", answer: "Supported conversions include kilograms, pounds, ounces, and more. Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. 该工具 auto-detects your input format.", answerZh: "支持的转换包括kilograms, pounds, ounces, and more。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "Does data size conversion handle both binary and decimal units?", questionZh: "数据大小转换支持二进制和十进制单位吗？", answer: "Text-based conversions through the regex tester are lossless with every data point preserved. Media quality depends on target format compression.", answerZh: "通过正则表达式测试器进行的文本转换是无损的，每个数据点都被保留。媒体格式质量取决于目标格式的压缩方式。" },
    ],
  },
  {
    slug: "length-converter",
    faqs: [
      { question: "What does the Length Converter actually do with my input?", questionZh: "长度转换器具体如何处理我的输入？", answer: "Convert between meters, feet, inches, kilometers, and miles. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "在米、英尺、英寸、公里和英里之间转换。" },
      { question: "What input and output formats does the Length Converter support?", questionZh: "长度转换器支持哪些输入和输出格式？", answer: "Supported conversions include meters, feet, inches, kilometers, and miles. Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. 该工具 auto-detects your input format.", answerZh: "支持的转换包括meters, feet, inches, kilometers, and miles。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "Are speed conversions accurate for scientific use?", questionZh: "速度转换对科学用途足够精确吗？", answer: "Text-based conversions through the color converter are lossless with every data point preserved. Media quality depends on target format compression.", answerZh: "速度转换结果保持数值精度，不会因格式转换丢失有效数字；媒体类数值的质量取决于原始数据精度。" },
    ],
  },
  {
    slug: "data-size-converter",
    faqs: [
      { question: "What does the Data Size Converter actually do with my input?", questionZh: "数据大小转换器具体如何处理我的输入？", answer: "Convert between bytes, kilobytes, megabytes, gigabytes, terabytes and more. Compare file sizes, storage capacity, and data transfer amounts. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "在字节、千字节、兆字节、吉字节、太字节等单位之间转换。比较文件大小、存储容量和数据传输量。" },
      { question: "What input and output formats does the Data Size Converter support?", questionZh: "数据大小转换器支持哪些输入和输出格式？", answer: "Supported conversions include bytes, kilobytes, megabytes, gigabytes, terabytes and more. Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. 该工具 auto-detects your input format.", answerZh: "支持在字节、千字节、兆字节、吉字节、太字节等单位之间转换。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "Does area conversion support surveying units?", questionZh: "面积转换支持测量单位吗？", answer: "Text-based conversions through the password generator are lossless with every data point preserved. Media quality depends on target format compression.", answerZh: "通过密码生成器进行的文本转换是无损的，每个数据点都被保留。媒体格式质量取决于目标格式的压缩方式。" },
    ],
  },
  {
    slug: "speed-converter",
    faqs: [
      { question: "What does the Speed Converter actually do with my input?", questionZh: "速度转换器具体如何处理我的输入？", answer: "Convert speed between km/h, mph, knots, m/s, and mach. Useful for driving, aviation, marine navigation, and physics calculations. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "在 km/h、mph、节、m/s 和马赫之间转换速度。适合驾驶、航空、航海和物理计算。" },
      { question: "What input and output formats does the Speed Converter support?", questionZh: "速度转换器支持哪些输入和输出格式？", answer: "Supported conversions include km/h, mph, knots, m/s, and mach. Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. 该工具 auto-detects your input format.", answerZh: "支持的转换包括km/h, mph, knots, m/s, and mach。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "Does the Speed Converter preserve data integrity during conversion?", questionZh: "速度转换器在转换过程中保持数据完整性吗？", answer: "Text-based conversions through the uuid generator are lossless with every data point preserved. Media quality depends on target format compression.", answerZh: "通过UUID 生成器进行的文本转换是无损的，每个数据点都被保留。媒体格式质量取决于目标格式的压缩方式。" },
    ],
  },
  {
    slug: "area-converter",
    faqs: [
      { question: "What does the Area Converter actually do with my input?", questionZh: "面积转换器具体如何处理我的输入？", answer: "Convert between square meters, acres, hectares, sq ft. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "在平方米、英亩、公顷、平方英尺等单位之间转换。" },
      { question: "What input and output formats does the Area Converter support?", questionZh: "面积转换器支持哪些输入和输出格式？", answer: "Supported conversions include square meters, acres, hectares, sq ft. Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. 该工具 auto-detects your input format.", answerZh: "支持的转换包括square meters, acres, hectares, sq ft。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "Does the Area Converter preserve data integrity during conversion?", questionZh: "面积转换器在转换过程中保持数据完整性吗？", answer: "Text-based conversions through the word & character counter are lossless with every data point preserved. Media quality depends on target format compression.", answerZh: "通过单词字符计数器进行的文本转换是无损的，每个数据点都被保留。媒体格式质量取决于目标格式的压缩方式。" },
    ],
  },
  {
    slug: "image-to-base64",
    faqs: [
      { question: "What does the 图片转 Base64 工具 actually do with my input?", questionZh: "图片转 Base64 工具具体如何处理我的输入？", answer: "Convert images to Base64 data URI for inline embedding. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "将图片转换为 Base64 data URI，以便内嵌使用。" },
      { question: "What input and output formats does the 图片转 Base64 工具 support?", questionZh: "图片转 Base64 工具 支持哪些输入和输出格式？", answer: "图片转 Base64 工具 works similarly — Supported conversions include . Each format has sp...", answerZh: "图片转 Base64 工具同理——支持的转换包括。每种格式有不同特点——例如 PNG 保留透明..." },
      { question: "Does the 图片转 Base64 工具 handle multiple files efficiently?", questionZh: "图片转 Base64 工具 能高效处理多个文件吗？", answer: "While the tool focuses on single-image operations for speed, you can process multiple images sequentially. For automated bulk processing, consider scripting with the same algorithms.", answerZh: "虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。如需自动化批量处理，建议使用相同算法编写脚本。" },
    ],
  },
  {
    slug: "random-number-generator",
    faqs: [
      { question: "What does the 随机数生成器 actually do with my input?", questionZh: "随机数生成器具体如何处理我的输入？", answer: "Generate random numbers within a custom range. Perfect for lotteries, giveaways, statistical sampling, and game development. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "在自定义范围内生成随机数。非常适合抽奖、赠品、统计抽样和游戏开发。" },
      { question: "Can I customize the output from the 随机数生成器?", questionZh: "可以自定义随机数生成器的输出吗？", answer: "随机数生成器 works similarly — Yes. After generating the default output, you can ...", answerZh: "随机数生成器同理——可以。生成默认输出后，你可以调整长度、格式和数量等参数。修改..." },
      { question: "Does this match Adobe Acrobat's PDF features?", questionZh: "这能比肩 Adobe Acrobat 的 PDF 功能吗？", answer: "The 随机数生成器 covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "随机数生成器无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "image-to-pdf",
    faqs: [
      { question: "What does the 图片转 PDF 工具 actually do with my input?", questionZh: "图片转 PDF 工具具体如何处理我的输入？", answer: "Convert images (JPG, PNG) into a single PDF document. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "将图片（JPG、PNG）转换为单个 PDF 文档。" },
      { question: "What input and output formats does the 图片转 PDF 工具 support?", questionZh: "图片转 PDF 工具 支持哪些输入和输出格式？", answer: "图片转 PDF 工具 works similarly — Supported conversions include . Each format has sp...", answerZh: "图片转 PDF 工具同理——支持的转换包括。每种格式有不同特点——例如 PNG 保留透明..." },
      { question: "Can I split PDFs without Adobe Acrobat?", questionZh: "无需 Adobe Acrobat 就能拆分 PDF 吗？", answer: "The 图片转 PDF 工具 covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "图片转 PDF 工具无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "pdf-splitter",
    faqs: [
      { question: "What does the PDF 拆分器 actually do with my input?", questionZh: "PDF 拆分器具体如何处理我的输入？", answer: "Split PDF by page ranges or extract specific pages. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "按页码范围拆分 PDF 或提取指定页面。" },
      { question: "What types of input does the PDF 拆分器 accept?", questionZh: "PDF 拆分器接受什么类型的输入？", answer: "该工具 accepts PDF files up to 50MB. Large files are processed in chunks to avoid freezing.", answerZh: "支持最大 50MB 的 PDF 文件。大文件会分块处理，避免卡顿。" },
      { question: "Is this more convenient than a spreadsheet?", questionZh: "比用电子表格更方便吗？", answer: "The PDF 拆分器 covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "PDF 拆分器无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "pdf-rotator",
    faqs: [
      { question: "What does the PDF 旋转器 actually do with my input?", questionZh: "PDF 旋转器具体如何处理我的输入？", answer: "Rotate PDF pages by 90, 180, or 270 degrees. Fix scanned documents, correct page orientation, and rearrange your PDF layouts. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "将 PDF 页面旋转 90、180 或 270 度。修复扫描文档、纠正页面方向并重新排列 PDF 布局。" },
      { question: "What types of input does the PDF 旋转器 accept?", questionZh: "PDF 旋转器接受什么类型的输入？", answer: "该工具 accepts PDF files up to 50MB. Large files are processed in chunks to avoid freezing.", answerZh: "支持最大 50MB 的 PDF 文件。大文件会分块处理，避免卡顿。" },
      { question: "Why use this instead of my phone's calculator?", questionZh: "为什么用这个而不是手机计算器？", answer: "The PDF 旋转器 covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "PDF 旋转器无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "pdf-page-remover",
    faqs: [
      { question: "What does the PDF 页面移除器 actually do with my input?", questionZh: "PDF 页面移除器具体如何处理我的输入？", answer: "Remove unwanted pages from your PDF documents quickly. Extract specific pages, delete blank sheets, and trim bulky files. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "快速从 PDF 文档中移除不需要的页面。提取指定页面、删除空白页并压缩大文件。" },
      { question: "What types of input does the PDF 页面移除器 accept?", questionZh: "PDF 页面移除器接受什么类型的输入？", answer: "You can paste pdf merger content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "直接上传需要处理的 PDF 文件即可。支持常见的 PDF 格式，大文件会分块处理避免卡顿。" },
      { question: "Can this do more than a simple age calculation?", questionZh: "这比简单算年龄能做更多吗？", answer: "The PDF 页面移除器 covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "PDF 页面移除器无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "image-cropper",
    faqs: [
      { question: "What does the 图片裁剪器 actually do with my input?", questionZh: "图片裁剪器具体如何处理我的输入？", answer: "Crop images by dragging a selection area on canvas. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "通过在画布上拖动选区来裁剪图片。" },
      { question: "Do filters degrade the original image resolution?", questionZh: "滤镜会降低原始图片分辨率吗？", answer: "The 图片裁剪器 uses browser-native Canvas API for processing. For resize operations, it applies bilinear interpolation to maintain sharpness. You can choose output format and quality level before downloading.", answerZh: "图片水印工具使用浏览器原生 Canvas API 处理图片。调整尺寸时应用双线性插值保持清晰度。下载前可选择输出格式和质量级别。" },
      { question: "Does the 图片裁剪器 handle multiple files efficiently?", questionZh: "图片裁剪器 能高效处理多个文件吗？", answer: "图片裁剪器 works similarly — While the tool focuses on single-image operations ...", answerZh: "图片裁剪器同理——虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。..." },
    ],
  },
  {
    slug: "image-filters",
    faqs: [
      { question: "What does the 图片滤镜工具 actually do with my input?", questionZh: "图片滤镜工具具体如何处理我的输入？", answer: "Apply grayscale, sepia, blur, brightness, and contrast filters. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "应用灰度、复古、模糊、亮度和对比度滤镜。" },
      { question: "Can I control the output resolution when merging?", questionZh: "合并时可以控制输出分辨率吗？", answer: "The 图片滤镜工具 uses browser-native Canvas API for processing. For resize operations, it applies bilinear interpolation to maintain sharpness. You can choose output format and quality level before downloading.", answerZh: "图片水印工具使用浏览器原生 Canvas API 处理图片。调整尺寸时应用双线性插值保持清晰度。下载前可选择输出格式和质量级别。" },
      { question: "Does the 图片滤镜工具 handle multiple files efficiently?", questionZh: "图片滤镜工具 能高效处理多个文件吗？", answer: "图片滤镜工具 works similarly — While the tool focuses on single-image operations ...", answerZh: "图片滤镜工具同理——虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。..." },
    ],
  },
  {
    slug: "gif-maker",
    faqs: [
      { question: "What does the GIF 制作工具 actually do with my input?", questionZh: "GIF 制作工具具体如何处理我的输入？", answer: "Create animated GIFs from multiple images or video clips. Set frame delay, resize output, and optimize for web or social media. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "从多张图片或视频片段创建动画 GIF。设置帧延迟、调整输出尺寸并优化用于网页或社交媒体。" },
      { question: "What types of input does the GIF 制作工具 accept?", questionZh: "GIF 制作工具接受什么类型的输入？", answer: "You can paste barcode & qr code generator content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "支持常见视频和图片格式输入，可直接上传或拖放文件。" },
      { question: "Does the GIF 制作工具 handle multiple files efficiently?", questionZh: "GIF 制作工具 能高效处理多个文件吗？", answer: "GIF 制作工具 works similarly — While the tool focuses on single-image operations ...", answerZh: "GIF 制作工具同理——虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。..." },
    ],
  },
  {
    slug: "image-watermark",
    faqs: [
      { question: "What does the 图片水印工具 actually do with my input?", questionZh: "图片水印工具具体如何处理我的输入？", answer: "Add text watermark to images with position and opacity control. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "为图片添加文字水印，并控制位置和透明度。" },
      { question: "Do split images retain the original DPI?", questionZh: "切分后的图片保留原始 DPI 吗？", answer: "The 图片水印工具 uses browser-native Canvas API for processing. For resize operations, it applies bilinear interpolation to maintain sharpness. You can choose output format and quality level before downloading.", answerZh: "图片水印工具使用浏览器原生 Canvas API 处理图片。调整尺寸时应用双线性插值保持清晰度。下载前可选择输出格式和质量级别。" },
      { question: "Does the 图片水印工具 handle multiple files efficiently?", questionZh: "图片水印工具 能高效处理多个文件吗？", answer: "图片水印工具 works similarly — While the tool focuses on single-image operations ...", answerZh: "图片水印工具同理——虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。..." },
    ],
  },
  {
    slug: "image-merge",
    faqs: [
      { question: "What does the 图片合并工具 actually do with my input?", questionZh: "图片合并工具具体如何处理我的输入？", answer: "Combine multiple images into one side by side or grid. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "将多张图片合并为一张，支持并排或网格排列。" },
      { question: "Does flipping affect image metadata?", questionZh: "翻转会影响图片元数据吗？", answer: "The 图片合并工具 uses browser-native Canvas API for processing. For resize operations, it applies bilinear interpolation to maintain sharpness. You can choose output format and quality level before downloading.", answerZh: "图片水印工具使用浏览器原生 Canvas API 处理图片。调整尺寸时应用双线性插值保持清晰度。下载前可选择输出格式和质量级别。" },
      { question: "Does the 图片合并工具 handle multiple files efficiently?", questionZh: "图片合并工具 能高效处理多个文件吗？", answer: "图片合并工具 works similarly — While the tool focuses on single-image operations ...", answerZh: "图片合并工具同理——虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。..." },
    ],
  },
  {
    slug: "image-splitter",
    faqs: [
      { question: "What does the 图片分割器 actually do with my input?", questionZh: "图片分割器具体如何处理我的输入？", answer: "Split a single image into multiple tiles by rows and columns. Perfect for creating sprite sheets, grid layouts, and image segments. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "将一张图片按行列切分为多个分片。非常适合制作精灵图、网格布局和图片分段。" },
      { question: "Does adding borders change the file format?", questionZh: "添加边框会改变文件格式吗？", answer: "The 图片分割器 uses browser-native Canvas API for processing. For resize operations, it applies bilinear interpolation to maintain sharpness. You can choose output format and quality level before downloading.", answerZh: "图片分割器使用浏览器原生 Canvas API 处理图片。调整尺寸时应用双线性插值保持清晰度。下载前可选择输出格式和质量级别。" },
      { question: "Does the 图片分割器 handle multiple files efficiently?", questionZh: "图片分割器 能高效处理多个文件吗？", answer: "图片分割器 works similarly — While the tool focuses on single-image operations ...", answerZh: "图片分割器同理——虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。..." },
    ],
  },
  {
    slug: "image-flip",
    faqs: [
      { question: "What does the 图片翻转工具 & Rotate actually do with my input?", questionZh: "图片翻转工具 & Rotate具体如何处理我的输入？", answer: "Flip images horizontally or vertically and rotate by 90-degree increments. Mirror selfies, correct orientation, and transform photos instantly. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "水平或垂直翻转图片，并以 90 度为增量旋转。即时镜像自拍、纠正方向并转换照片。" },
      { question: "Does collage generation preserve individual image quality?", questionZh: "拼贴生成会保留每张图片的质量吗？", answer: "The 图片翻转工具 & Rotate uses browser-native Canvas API for processing. For resize operations, it applies bilinear interpolation to maintain sharpness. You can choose output format and quality level before downloading.", answerZh: "图片翻转工具 & Rotate使用浏览器原生 Canvas API 处理图片。调整尺寸时应用双线性插值保持清晰度。下载前可选择输出格式和质量级别。" },
      { question: "Does the 图片翻转工具 & Rotate handle multiple files efficiently?", questionZh: "图片翻转工具 & Rotate 能高效处理多个文件吗？", answer: "图片翻转工具 & Rotate works similarly — While the tool focuses on single-image operations ...", answerZh: "图片翻转工具 & Rotate同理——虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。..." },
    ],
  },
  {
    slug: "image-border",
    faqs: [
      { question: "What does the 图片边框工具 actually do with my input?", questionZh: "图片边框工具具体如何处理我的输入？", answer: "Add customizable borders, frames, and padding to images. Choose colors, widths, corner radius, and shadow effects for polished photos. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "为图片添加可自定义的边框、画框和内边距。可选择颜色、宽度、圆角和阴影效果，让照片更精致。" },
      { question: "Does the 图片边框工具 maintain quality after processing?", questionZh: "图片边框工具 处理后保持质量吗？", answer: "The 图片边框工具 uses browser-native Canvas API for processing. For resize operations, it applies bilinear interpolation to maintain sharpness. You can choose output format and quality level before downloading.", answerZh: "图片水印工具使用浏览器原生 Canvas API 处理图片。调整尺寸时应用双线性插值保持清晰度。下载前可选择输出格式和质量级别。" },
      { question: "Does the 图片边框工具 handle multiple files efficiently?", questionZh: "图片边框工具 能高效处理多个文件吗？", answer: "图片边框工具 works similarly — While the tool focuses on single-image operations ...", answerZh: "图片边框工具同理——虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。..." },
    ],
  },
  {
    slug: "meme-generator",
    faqs: [
      { question: "What does the 表情包生成器 actually do with my input?", questionZh: "表情包生成器具体如何处理我的输入？", answer: "Create memes by adding top and bottom text to images. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "通过在图片上添加顶部和底部文字来制作表情包。" },
      { question: "Can I customize the output from the 表情包生成器?", questionZh: "可以自定义表情包生成器的输出吗？", answer: "表情包生成器 works similarly — Yes. After generating the default output, you can ...", answerZh: "表情包生成器同理——可以。生成默认输出后，你可以调整长度、格式和数量等参数。修改..." },
      { question: "Does the 表情包生成器 handle multiple files efficiently?", questionZh: "表情包生成器 能高效处理多个文件吗？", answer: "表情包生成器 works similarly — While the tool focuses on single-image operations ...", answerZh: "表情包生成器同理——虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。..." },
    ],
  },
  {
    slug: "image-to-sketch",
    faqs: [
      { question: "What does the 图片转素描工具 actually do with my input?", questionZh: "图片转素描工具具体如何处理我的输入？", answer: "Convert photos into pencil sketch drawings and line art. Apply artistic filters to create realistic hand-drawn effects from your images. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "将照片转换为铅笔画和线稿。应用艺术滤镜，为你的图片创造逼真的手绘效果。" },
      { question: "What input and output formats does the 图片转素描工具 support?", questionZh: "图片转素描工具 支持哪些输入和输出格式？", answer: "图片转素描工具 works similarly — Supported conversions include . Each format has sp...", answerZh: "图片转素描工具同理——支持的转换包括。每种格式有不同特点——例如 PNG 保留透明..." },
      { question: "Does the 图片转素描工具 handle multiple files efficiently?", questionZh: "图片转素描工具 能高效处理多个文件吗？", answer: "图片转素描工具 works similarly — While the tool focuses on single-image operations ...", answerZh: "图片转素描工具同理——虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。..." },
    ],
  },
  {
    slug: "emoji-remover",
    faqs: [
      { question: "What does the Emoji 移除器 actually do with my input?", questionZh: "Emoji 移除器具体如何处理我的输入？", answer: "Remove all emoji characters from text while keeping words. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "从文本中移除所有 emoji 字符，同时保留文字内容。" },
      { question: "What types of input does the Emoji 移除器 accept?", questionZh: "Emoji 移除器接受什么类型的输入？", answer: "You can paste dns lookup content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴DNS 查询工具内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "What text formats does the Emoji 移除器 process reliably?", questionZh: "Emoji 移除器 能可靠地处理哪些文本格式？", answer: "The temperature converter handles emails, articles, code comments, and data exports — any text length from a single word to full documents.", answerZh: "温度转换器 可处理邮件、文章、代码注释和数据导出——从单个词到完整文档的任意长度文本。" },
    ],
  },
  {
    slug: "unicode-detector",
    faqs: [
      { question: "What does the Unicode 字符检测器 actually do with my input?", questionZh: "Unicode 字符检测器具体如何处理我的输入？", answer: "Inspect Unicode characters with codepoint and category info. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "检查 Unicode 字符的码点和类别信息。" },
      { question: "What types of input does the Unicode 字符检测器 accept?", questionZh: "Unicode 字符检测器接受什么类型的输入？", answer: "You can paste whois lookup content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴WHOIS 查询工具内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "What text formats does the Unicode 字符检测器 process reliably?", questionZh: "Unicode 字符检测器 能可靠地处理哪些文本格式？", answer: "The unicode character detector handles emails, articles, code comments, and data exports — any text length from a single word to full documents.", answerZh: "Unicode 字符检测器处理邮件、文章、代码注释和数据导出——从单个词到完整文档的任意长度文本。" },
    ],
  },
  {
    slug: "caesar-cipher",
    faqs: [
      { question: "What does the 凯撒密码工具 actually do with my input?", questionZh: "凯撒密码工具具体如何处理我的输入？", answer: "Encode and decode text using the classic Caesar shift cipher. Choose shift values, try brute force decoding, and learn cryptography basics. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "使用经典的凯撒移位密码对文本进行编码和解码。可选择位移值、尝试暴力破解解码，并学习密码学基础知识。" },
      { question: "What types of input does the 凯撒密码工具 accept?", questionZh: "凯撒密码工具接受什么类型的输入？", answer: "You can paste hash generator content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴哈希生成器内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "What text formats does the 凯撒密码工具 process reliably?", questionZh: "凯撒密码工具 能可靠地处理哪些文本格式？", answer: "The caesar cipher handles emails, articles, code comments, and data exports — any text length from a single word to full documents.", answerZh: "凯撒密码工具处理邮件、文章、代码注释和数据导出——从单个词到完整文档的任意长度文本。" },
    ],
  },
  {
    slug: "json-diff",
    faqs: [
      { question: "What does the JSON 差异比较器 actually do with my input?", questionZh: "JSON 差异比较器具体如何处理我的输入？", answer: "Compare two JSON objects and highlight differences. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "比较两个 JSON 对象并高亮差异。" },
      { question: "How accurate is the JSON 差异比较器?", questionZh: "JSON 差异比较器的准确性如何？", answer: "The JSON 差异比较器 uses deterministic algorithms — the same input always produces the same output. Every character is processed individually, so even single-character changes are caught and displayed.", answerZh: "JSON 差异比较器使用确定性算法——相同输入始终产生相同输出。每个字符都被单独处理，即使单字符变化也能被捕获和显示。" },
      { question: "What scenarios call for using the JSON 差异比较器?", questionZh: "什么场景下需要用到 JSON 差异比较器？", answer: "During code review when you need to quickly compare two json objects and highlight differences, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "适合对比接口响应版本差异、配置文件变更或 API Schema 演进。" },
    ],
  },
  {
    slug: "http-status-codes",
    faqs: [
      { question: "What does the HTTP 状态码工具 actually do with my input?", questionZh: "HTTP 状态码工具具体如何处理我的输入？", answer: "Browse and search all HTTP status codes with descriptions. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "浏览并搜索所有带描述的 HTTP 状态码。" },
      { question: "What types of input does the HTTP 状态码工具 accept?", questionZh: "HTTP 状态码工具接受什么类型的输入？", answer: "You can paste text case converter content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴文本大小写转换器内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "What scenarios call for using the HTTP 状态码工具?", questionZh: "什么场景下需要用到 HTTP 状态码工具？", answer: "During code review when you need to quickly browse and search all http status codes with descriptions, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "适合排查接口报错、编写接口文档或快速查阅某个状态码含义时使用。" },
    ],
  },
  {
    slug: "timezone-converter",
    faqs: [
      { question: "What does the 时区转换器 actually do with my input?", questionZh: "时区转换器具体如何处理我的输入？", answer: "Convert time between different world time zones instantly. Schedule meetings across time zones and compare clocks worldwide. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "即时转换不同世界时区的时间。跨时区安排会议并比较全球时钟。" },
      { question: "What input and output formats does the 时区转换器 support?", questionZh: "时区转换器 支持哪些输入和输出格式？", answer: "Supported conversions include different world time zones instantly. Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. 该工具 auto-detects your input format.", answerZh: "支持的转换包括different world time zones instantly。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "Is the 时区转换器 faster than installing dedicated software?", questionZh: "时区转换器 比安装专用软件更快吗？", answer: "The 时区转换器 covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "时区转换器无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "binary-to-text",
    faqs: [
      { question: "What does the 二进制转文本工具 actually do with my input?", questionZh: "二进制转文本工具具体如何处理我的输入？", answer: "Convert binary code to text and text back to binary. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "将二进制代码转换为文本，也能将文本转回二进制。" },
      { question: "What input and output formats does the 二进制转文本工具 support?", questionZh: "二进制转文本工具 支持哪些输入和输出格式？", answer: "二进制转文本工具 works similarly — Supported conversions include . Each format has sp...", answerZh: "二进制转文本工具同理——支持的转换包括。每种格式有不同特点——例如 PNG 保留透明..." },
      { question: "What text formats does the 二进制转文本工具 process reliably?", questionZh: "二进制转文本工具 能可靠地处理哪些文本格式？", answer: "The json diff handles emails, articles, code comments, and data exports — any text length from a single word to full documents.", answerZh: "JSON 差异比较器 可处理邮件、文章、代码注释和数据导出——从单个词到完整文档的任意长度文本。" },
    ],
  },
  {
    slug: "image-invert",
    faqs: [
      { question: "What does the 图片反色工具 actually do with my input?", questionZh: "图片反色工具具体如何处理我的输入？", answer: "Invert or negate colors in any image instantly. Create negative effects, X-ray looks, and artistic color reversals with one click. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "即时反转或取反任何图片的颜色。一键创建负片效果、X 光外观和艺术色彩反转。" },
      { question: "Does the 图片反色工具 maintain quality after processing?", questionZh: "图片反色工具 处理后保持质量吗？", answer: "The 图片反色工具 uses browser-native Canvas API for processing. For resize operations, it applies bilinear interpolation to maintain sharpness. You can choose output format and quality level before downloading.", answerZh: "图片反色工具使用浏览器原生 Canvas API 处理图片。调整尺寸时应用双线性插值保持清晰度。下载前可选择输出格式和质量级别。" },
      { question: "Does the 图片反色工具 handle multiple files efficiently?", questionZh: "图片反色工具 能高效处理多个文件吗？", answer: "图片反色工具 works similarly — While the tool focuses on single-image operations ...", answerZh: "图片反色工具同理——虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。..." },
    ],
  },
  {
    slug: "image-collage",
    faqs: [
      { question: "What does the 照片拼贴工具 actually do with my input?", questionZh: "照片拼贴工具具体如何处理我的输入？", answer: "Combine multiple photos into a beautiful collage grid. Choose layouts, spacing, background colors, and export in high resolution. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "将多张照片合并为漂亮的拼图网格。可选择布局、间距、背景颜色，并以高分辨率导出。" },
      { question: "Does the 照片拼贴工具 maintain quality after processing?", questionZh: "照片拼贴工具 处理后保持质量吗？", answer: "The 照片拼贴工具 uses browser-native Canvas API for processing. For resize operations, it applies bilinear interpolation to maintain sharpness. You can choose output format and quality level before downloading.", answerZh: "照片拼贴工具使用浏览器原生 Canvas API 处理图片。调整尺寸时应用双线性插值保持清晰度。下载前可选择输出格式和质量级别。" },
      { question: "Does the 照片拼贴工具 handle multiple files efficiently?", questionZh: "照片拼贴工具 能高效处理多个文件吗？", answer: "照片拼贴工具 works similarly — While the tool focuses on single-image operations ...", answerZh: "照片拼贴工具同理——虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。..." },
    ],
  },
  {
    slug: "css-gradient",
    faqs: [
      { question: "What does the CSS 渐变生成器 actually do with my input?", questionZh: "CSS 渐变生成器具体如何处理我的输入？", answer: "Create beautiful linear and radial CSS gradients visually. Copy the generated CSS code for backgrounds, buttons, and UI elements. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "可视化地创建漂亮的线性和径向 CSS 渐变。复制生成的 CSS 代码用于背景、按钮和 UI 元素。" },
      { question: "What types of input does the CSS 渐变生成器 accept?", questionZh: "CSS 渐变生成器接受什么类型的输入？", answer: "You can paste markdown to html content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "你可以直接粘贴 CSS 代码或拖入 .css 文件。输入区域支持大文本，必要时会分块处理。" },
      { question: "What scenarios call for using the CSS 渐变生成器?", questionZh: "什么场景下需要用到 CSS 渐变生成器？", answer: "During code review when you need to quickly create beautiful linear and radial css gradients visually. copy the generated css code for backgrounds, buttons, and ui elements, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "适合快速生成并调整网页渐变背景、按钮配色或 Hero 区域视觉效果。" },
    ],
  },
  {
    slug: "css-shadow",
    faqs: [
      { question: "What does the CSS 盒阴影生成器 actually do with my input?", questionZh: "CSS 盒阴影生成器具体如何处理我的输入？", answer: "Design and preview custom CSS box shadows visually. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "可视化地设计和预览自定义 CSS 盒阴影。" },
      { question: "What types of input does the CSS 盒阴影生成器 accept?", questionZh: "CSS 盒阴影生成器接受什么类型的输入？", answer: "You can paste sql formatter content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴SQL 格式化器内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "What scenarios call for using the CSS 盒阴影生成器?", questionZh: "什么场景下需要用到 CSS 盒阴影生成器？", answer: "During code review when you need to quickly design and preview custom css box shadows visually, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "适合快速调整卡片、弹窗或按钮阴影参数，直接复制生成 CSS。" },
    ],
  },
  {
    slug: "json-to-typescript",
    faqs: [
      { question: "What does the JSON 转 TypeScript 工具 actually do with my input?", questionZh: "JSON 转 TypeScript 工具具体如何处理我的输入？", answer: "Convert JSON objects into TypeScript interfaces automatically. Generate type definitions from API responses and configuration files instantly. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "自动将 JSON 对象转换为 TypeScript 接口。即时从 API 响应和配置文件中生成类型定义。" },
      { question: "What input and output formats does the JSON 转 TypeScript 工具 support?", questionZh: "JSON 转 TypeScript 工具 支持哪些输入和输出格式？", answer: "JSON 转 TypeScript 工具 works similarly — Supported conversions include . Each format has sp...", answerZh: "JSON 转 TypeScript 工具同理——支持的转换包括。每种格式有不同特点——例如 PNG 保留透明..." },
      { question: "What scenarios call for using the JSON 转 TypeScript 工具?", questionZh: "什么场景下需要用到 JSON 转 TypeScript 工具？", answer: "During code review when you need to quickly convert json objects into typescript interfaces automatically. generate type definitions from api responses and configuration files instantly, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "适合根据接口返回 JSON 快速生成 TypeScript 类型，减少手动写 interface 的工作量。" },
    ],
  },
  {
    slug: "html-to-jsx",
    faqs: [
      { question: "What does the HTML 转 JSX 转换器 actually do with my input?", questionZh: "HTML 转 JSX 转换器具体如何处理我的输入？", answer: "Convert plain HTML code into React JSX syntax. Handle inline styles, class attributes, self-closing tags, and event handlers automatically. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "将普通 HTML 代码转换为 React JSX 语法。自动处理行内样式、class 属性、自闭合标签和事件处理器。" },
      { question: "What input and output formats does the HTML 转 JSX 转换器 support?", questionZh: "HTML 转 JSX 转换器 支持哪些输入和输出格式？", answer: "HTML 转 JSX 转换器 works similarly — Supported conversions include . Each format has sp...", answerZh: "HTML 转 JSX 转换器同理——支持的转换包括。每种格式有不同特点——例如 PNG 保留透明..." },
      { question: "What scenarios call for using the HTML 转 JSX 转换器?", questionZh: "什么场景下需要用到 HTML 转 JSX 转换器？", answer: "During code review when you need to quickly convert plain html code into react jsx syntax. handle inline styles, class attributes, self-closing tags, and event handlers automatically, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "适合将现有 HTML 片段批量迁移到 React 组件，可直接复制转换后的 JSX 使用。" },
    ],
  },
  {
    slug: "color-palette",
    faqs: [
      { question: "What does the 配色方案生成器 actually do with my input?", questionZh: "配色方案生成器具体如何处理我的输入？", answer: "Generate color schemes: monochromatic, complementary, and more. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "生成配色方案：单色、互补色等。" },
      { question: "Which color spaces does the 配色方案生成器 support?", questionZh: "配色方案生成器支持哪些色彩空间？", answer: "该工具 works with HEX (#ffffff), RGB (255,255,255), HSL, HSV, and CMYK. You can also sample colors directly from an uploaded image or use the visual picker to select any shade.", answerZh: "工具支持 HEX (#ffffff)、RGB (255,255,255)、HSL、HSV 和 CMYK。你还可以从上传的图片中直接取样，或使用可视化选择器选择任意色调。" },
      { question: "What scenarios call for using the 配色方案生成器?", questionZh: "什么场景下需要用到配色方案生成器？", answer: "During code review when you need to quickly generate color schemes: monochromatic, complementary, and more, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "适合为网页、App 或设计稿快速生成主色、辅色和强调色组合。" },
    ],
  },
  {
    slug: "roman-numeral",
    faqs: [
      { question: "What does the 罗马数字转换器 actually do with my input?", questionZh: "罗马数字转换器具体如何处理我的输入？", answer: "Convert between Roman numerals and Arabic numbers instantly. Works with values from 1 to 3999, including common numeral combinations. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "即时在罗马数字和阿拉伯数字之间转换。支持 1 到 3999 的数值，包括常见数字组合。" },
      { question: "What input and output formats does the 罗马数字转换器 support?", questionZh: "罗马数字转换器 支持哪些输入和输出格式？", answer: "Supported conversions include Roman numerals and Arabic numbers instantly. Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. 该工具 auto-detects your input format.", answerZh: "工具支持罗马数字与阿拉伯数字之间的即时转换。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "Is the 罗马数字转换器 faster than installing dedicated software?", questionZh: "罗马数字转换器 比安装专用软件更快吗？", answer: "The 罗马数字转换器 covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "罗马数字转换器无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "percentage-calculator",
    faqs: [
      { question: "What does the 百分比计算器 actually do with my input?", questionZh: "百分比计算器具体如何处理我的输入？", answer: "Calculate percentages, what if, increase/decrease easily. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "轻松计算百分比、假设分析和增减幅度。" },
      { question: "What types of input does the 百分比计算器 accept?", questionZh: "百分比计算器接受什么类型的输入？", answer: "You can paste csv viewer & formatter content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴CSV 查看格式化工具内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "Is the 百分比计算器 faster than installing dedicated software?", questionZh: "百分比计算器 比安装专用软件更快吗？", answer: "The 百分比计算器 covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "百分比计算器无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "tip-calculator",
    faqs: [
      { question: "What does the 小费计算器 actually do with my input?", questionZh: "小费计算器具体如何处理我的输入？", answer: "Calculate tip amount, total bill, and per-person cost. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "计算小费金额、总账单和人均费用。" },
      { question: "What types of input does the 小费计算器 accept?", questionZh: "小费计算器接受什么类型的输入？", answer: "You can paste url encoder/decoder content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴URL 编解码器内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "Is the 小费计算器 faster than installing dedicated software?", questionZh: "小费计算器 比安装专用软件更快吗？", answer: "The 小费计算器 covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "小费计算器无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "age-calculator",
    faqs: [
      { question: "What does the 年龄计算器 actually do with my input?", questionZh: "年龄计算器具体如何处理我的输入？", answer: "Calculate exact age in years, months, weeks, and days. Find your age on any future date or count down to your next birthday. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "精确计算年龄，以年、月、周和天为单位。查询你在未来某天的年龄，或倒数到下一个生日。" },
      { question: "What types of input does the 年龄计算器 accept?", questionZh: "年龄计算器接受什么类型的输入？", answer: "You can paste jwt decoder content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴JWT 解码器内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "Is the 年龄计算器 faster than installing dedicated software?", questionZh: "年龄计算器 比安装专用软件更快吗？", answer: "The 年龄计算器 covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "年龄计算器无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "bmi-calculator",
    faqs: [
      { question: "What does the BMI 计算器 actually do with my input?", questionZh: "BMI 计算器具体如何处理我的输入？", answer: "Calculate Body Mass Index and check your health category. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "计算身体质量指数并查看你的健康类别。" },
      { question: "What types of input does the BMI 计算器 accept?", questionZh: "BMI 计算器接受什么类型的输入？", answer: "You can paste number base converter content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴进制转换器内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "Is the BMI 计算器 faster than installing dedicated software?", questionZh: "BMI 计算器 比安装专用软件更快吗？", answer: "The BMI 计算器 covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "BMI 计算器无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "countdown-timer",
    faqs: [
      { question: "What does the 倒计时器 actually do with my input?", questionZh: "倒计时器具体如何处理我的输入？", answer: "Set a countdown to any date and time with days, hours, minutes, and seconds. Perfect for events, deadlines, and special occasions. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "设置任意日期和时间的倒计时，精确到天、小时、分钟和秒。非常适合活动、截止日期和特殊场合。" },
      { question: "What types of input does the 倒计时器 accept?", questionZh: "倒计时器接受什么类型的输入？", answer: "You can paste image format converter content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴图片格式转换器内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "Is the 倒计时器 faster than installing dedicated software?", questionZh: "倒计时器 比安装专用软件更快吗？", answer: "The 倒计时器 covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "倒计时器无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "dice-roller",
    faqs: [
      { question: "What does the 骰子工具 actually do with my input?", questionZh: "骰子工具具体如何处理我的输入？", answer: "Roll virtual dice with 4, 6, 8, 10, 12, and 20 sides. Roll multiple dice at once for tabletop games, RPGs, and classrooms. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "掷 4、6、8、10、12 和 20 面的虚拟骰子。一次掷多个骰子，适合桌面游戏、角色扮演游戏和课堂使用。" },
      { question: "What types of input does the 骰子工具 accept?", questionZh: "骰子工具接受什么类型的输入？", answer: "You can paste lorem ipsum generator content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "你可以直接粘贴文本内容或拖放文件。输入区域支持大文本，必要时会分块处理。" },
      { question: "Is the 骰子工具 faster than installing dedicated software?", questionZh: "骰子工具 比安装专用软件更快吗？", answer: "The 骰子工具 covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "骰子工具无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "decision-maker",
    faqs: [
      { question: "What does the 决策工具 actually do with my input?", questionZh: "决策工具具体如何处理我的输入？", answer: "Let fate decide — pick a random option from your list. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "让命运决定——从你的列表中随机选择一个选项。" },
      { question: "What types of input does the 决策工具 accept?", questionZh: "决策工具接受什么类型的输入？", answer: "You can paste text diff checker content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴文本差异检查器内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "Is the 决策工具 faster than installing dedicated software?", questionZh: "决策工具 比安装专用软件更快吗？", answer: "The 决策工具 covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "决策工具无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "audio-cutter",
    faqs: [
      { question: "What does the 音频剪辑器 actually do with my input?", questionZh: "音频剪辑器具体如何处理我的输入？", answer: "Trim and cut audio files with an interactive waveform preview. Extract clips from MP3, WAV, and other formats right in your browser. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "使用交互式波形预览修剪和剪辑音频文件。直接在浏览器中提取 MP3、WAV 等格式的片段。" },
      { question: "What types of input does the 音频剪辑器 accept?", questionZh: "音频剪辑器接受什么类型的输入？", answer: "You can paste text repeater content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴文本重复器内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "Is the 音频剪辑器 faster than installing dedicated software?", questionZh: "音频剪辑器 比安装专用软件更快吗？", answer: "The 音频剪辑器 covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "音频剪辑器无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "audio-merger",
    faqs: [
      { question: "What does the 音频合并器 actually do with my input?", questionZh: "音频合并器具体如何处理我的输入？", answer: "Combine multiple audio files into one seamless track. Merge songs, recordings, or voice clips in any order with crossfade support. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "将多个音频文件合并为一个无缝音轨。支持交叉淡入淡出，可按任意顺序合并歌曲、录音或语音片段。" },
      { question: "What types of input does the 音频合并器 accept?", questionZh: "音频合并器接受什么类型的输入？", answer: "You can paste html entity converter content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴HTML 实体转换器内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "Is the 音频合并器 faster than installing dedicated software?", questionZh: "音频合并器 比安装专用软件更快吗？", answer: "The 音频合并器 covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "音频合并器无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "audio-converter",
    faqs: [
      { question: "What does the 音频转换器 actually do with my input?", questionZh: "音频转换器具体如何处理我的输入？", answer: "Convert audio between WAV formats and sample rates. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "在 WAV 格式和采样率之间转换音频。" },
      { question: "What input and output formats does the 音频转换器 support?", questionZh: "音频转换器 支持哪些输入和输出格式？", answer: "Supported conversions include WAV formats and sample rates. Each format has specific characteristics — for example, PNG preserves transparency while JPG compresses more aggressively. 该工具 auto-detects your input format.", answerZh: "支持在 WAV 等格式与采样率之间转换音频。每种格式有不同特点——例如 PNG 保留透明度而 JPG 压缩率更高。工具会自动检测输入格式。" },
      { question: "Is the 音频转换器 faster than installing dedicated software?", questionZh: "音频转换器 比安装专用软件更快吗？", answer: "The 音频转换器 covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "音频转换器无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "svg-to-png",
    faqs: [
      { question: "What does the SVG 转 PNG 转换器 actually do with my input?", questionZh: "SVG 转 PNG 转换器具体如何处理我的输入？", answer: "Convert SVG vector code or files into PNG images with custom dimensions, background colors, and scaling options for any use case. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "将 SVG 矢量代码或文件转换为 PNG 图片，支持自定义尺寸、背景颜色和缩放选项，适用于各种场景。" },
      { question: "What input and output formats does the SVG 转 PNG 转换器 support?", questionZh: "SVG 转 PNG 转换器 支持哪些输入和输出格式？", answer: "SVG 转 PNG 转换器 works similarly — Supported conversions include . Each format has sp...", answerZh: "SVG 转 PNG 转换器同理——支持的转换包括。每种格式有不同特点——例如 PNG 保留透明..." },
      { question: "Does the SVG 转 PNG 转换器 preserve data integrity during conversion?", questionZh: "SVG 转 PNG 转换器 在转换过程中保持数据完整性吗？", answer: "Text-based conversions through the timestamp converter are lossless with every data point preserved. Media quality depends on target format compression.", answerZh: "通过时间戳转换器进行的文本转换是无损的，每个数据点都被保留。媒体格式质量取决于目标格式的压缩方式。" },
    ],
  },
  {
    slug: "days-between",
    faqs: [
      { question: "What does the 日期天数计算器 actually do with my input?", questionZh: "日期天数计算器具体如何处理我的输入？", answer: "Calculate the exact number of days between two dates. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "计算两个日期之间的精确天数。" },
      { question: "What types of input does the 日期天数计算器 accept?", questionZh: "日期天数计算器接受什么类型的输入？", answer: "You can paste css minifier content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴CSS 压缩器内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "Is the 日期天数计算器 faster than installing dedicated software?", questionZh: "日期天数计算器 比安装专用软件更快吗？", answer: "The 日期天数计算器 covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "日期天数计算器无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "password-strength",
    faqs: [
      { question: "What does the 密码强度检查器 actually do with my input?", questionZh: "密码强度检查器具体如何处理我的输入？", answer: "Test how strong your password is with real-time analysis. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "通过实时分析测试你的密码强度。" },
      { question: "What types of input does the 密码强度检查器 accept?", questionZh: "密码强度检查器接受什么类型的输入？", answer: "You can paste json to yaml converter content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴JSON 转 YAML 转换器内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "What scenarios call for using the 密码强度检查器?", questionZh: "什么场景下需要用到密码强度检查器？", answer: "During code review when you need to quickly test how strong your password is with real-time analysis, or when debugging data pipelines and need to verify intermediate formats. Also handy for quick conversions during API development.", answerZh: "适合在注册流程或安全策略推广时，直观展示密码强度差异。" },
    ],
  },
  {
    slug: "aspect-ratio-calculator",
    faqs: [
      { question: "What does the 宽高比计算器 actually do with my input?", questionZh: "宽高比计算器具体如何处理我的输入？", answer: "Calculate aspect ratios from dimensions or presets. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "根据尺寸或预设计算宽高比。" },
      { question: "What types of input does the 宽高比计算器 accept?", questionZh: "宽高比计算器接受什么类型的输入？", answer: "You can paste string escaper/unescaper content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "你可以直接粘贴待处理文本或拖放文件。输入区域支持大文本，必要时会分块处理。" },
      { question: "Is the 宽高比计算器 faster than installing dedicated software?", questionZh: "宽高比计算器 比安装专用软件更快吗？", answer: "The 宽高比计算器 covers 90% of common use cases without installation. For specialized workflows requiring batch processing or automation, a dedicated application may be more efficient.", answerZh: "宽高比计算器无需安装即可覆盖 90% 的常见使用场景。对于需要批量处理或自动化的专业工作流，专用应用程序可能更高效。" },
    ],
  },
  {
    slug: "qr-reader",
    faqs: [
      { question: "What does the 二维码读取器 actually do with my input?", questionZh: "二维码读取器具体如何处理我的输入？", answer: "Decode QR codes from uploaded images instantly. Scan any QR code image to reveal the embedded URL, text, or contact information. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "即时从上传的图片中解码二维码。扫描任意二维码图片以获取嵌入的 URL、文本或联系信息。" },
      { question: "What types of input does the 二维码读取器 accept?", questionZh: "二维码读取器接受什么类型的输入？", answer: "You can paste html tag stripper content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴HTML 标签去除器内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "Does the 二维码读取器 preserve data integrity during conversion?", questionZh: "二维码读取器 在转换过程中保持数据完整性吗？", answer: "Text-based conversions through the image compressor are lossless with every data point preserved. Media quality depends on target format compression.", answerZh: "通过图片压缩器进行的文本转换是无损的，每个数据点都被保留。媒体格式质量取决于目标格式的压缩方式。" },
    ],
  },
  {
    slug: "color-blindness-simulator",
    faqs: [
      { question: "What does the 色盲模拟器 actually do with my input?", questionZh: "色盲模拟器具体如何处理我的输入？", answer: "Simulate how images look with various color blindness types. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "模拟图片在不同色盲类型下的视觉效果。" },
      { question: "Which color spaces does the 色盲模拟器 support?", questionZh: "色盲模拟器支持哪些色彩空间？", answer: "色盲模拟器 works similarly — 该工具 works with HEX (#ffffff), RGB (255,255,25...", answerZh: "色盲模拟器支持查看多种色盲类型下的预览效果，可切换不同仿真等级。" },
      { question: "Does the 色盲模拟器 handle multiple files efficiently?", questionZh: "色盲模拟器 能高效处理多个文件吗？", answer: "色盲模拟器 works similarly — While the tool focuses on single-image operations ...", answerZh: "色盲模拟器同理——虽然工具专注于单图操作以保证速度，但你可以依次处理多张图片。..." },
    ],
  },
  {
    slug: "online-notepad",
    faqs: [
      { question: "What does the 在线记事本 actually do with my input?", questionZh: "在线记事本具体如何处理我的输入？", answer: "A clean, distraction-free browser-based notepad with auto-save. Write notes, code snippets, and lists that persist in your browser storage. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "一个简洁、无干扰的浏览器记事本，支持自动保存。编写笔记、代码片段和列表，并在浏览器存储中持久保存。" },
      { question: "What types of input does the 在线记事本 accept?", questionZh: "在线记事本接受什么类型的输入？", answer: "You can paste cron expression parser content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴Cron 表达式解析器内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "What text formats does the 在线记事本 process reliably?", questionZh: "在线记事本 能可靠地处理哪些文本格式？", answer: "The image invert handles emails, articles, code comments, and data exports — any text length from a single word to full documents.", answerZh: "图片反色工具 可处理邮件、文章、代码注释和数据导出——从单个词到完整文档的任意长度文本。" },
    ],
  },
  {
    slug: "text-statistics",
    faqs: [
      { question: "What does the 文本统计工具 actually do with my input?", questionZh: "文本统计工具具体如何处理我的输入？", answer: "Detailed text analysis: letters, vowels, unique words, and more. You enter your data into the input field, and the tool applies the transformation instantly — no waiting, no processing queue.", answerZh: "详细的文本分析：字母、元音、唯一单词等。" },
      { question: "What types of input does the 文本统计工具 accept?", questionZh: "文本统计工具接受什么类型的输入？", answer: "You can paste text to binary converter content directly or use drag-and-drop. Input supports up to 50MB; large text is chunked to prevent freezing.", answerZh: "可以直接粘贴文本转二进制转换器内容或使用拖放。输入区域最大支持 50MB，大文本会分块处理防止卡顿。" },
      { question: "What text formats does the 文本统计工具 process reliably?", questionZh: "文本统计工具 能可靠地处理哪些文本格式？", answer: "The text statistics handles emails, articles, code comments, and data exports — any text length from a single word to full documents.", answerZh: "文本统计工具 可处理邮件、文章、代码注释和数据导出——从单个词到完整文档的任意长度文本。" },
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
      { question: "How does the resizer maintain image quality?", questionZh: "调整尺寸时如何保持图片质量？", answer: "该工具 uses browser-native bilinear interpolation for downscaling and Lanczos resampling for upscaling. You can choose output format (JPG/PNG/WebP) and set quality from 60-100%.", answerZh: "工具使用浏览器原生双线性插值缩小，Lanczos 重采样放大。可选择输出格式（JPG/PNG/WebP）并设置 60-100% 的质量。" },
      { question: "Can I resize multiple images at once?", questionZh: "可以一次调整多张图片吗？", answer: "Currently the tool processes one image at a time for optimal quality. For batch resizing, process each image sequentially — the tool maintains consistent settings between uploads.", answerZh: "目前工具一次处理一张图片以保证最佳质量。如需批量调整，依次处理每张图片——工具在上传之间保持一致的设置。" },
      { question: "What's the maximum image size I can resize?", questionZh: "可以调整的最大图片尺寸是多少？", answer: "Images up to 50MB and 10000×10000 pixels are supported. All processing happens in your browser via Canvas API — no upload to any server required.", answerZh: "支持最大 50MB 和 10000×10000 像素的图片。所有处理通过 Canvas API 在浏览器中完成——无需上传到任何服务器。" },
    ],
  },
  {
    slug: "watermark-remover",
    faqs: [
      { question: "How does the watermark remover work?", questionZh: "去水印工具是如何工作的？", answer: "该工具 uses content-aware inpainting algorithms running entirely in your browser via Canvas and WebGL. It analyzes the surrounding pixels around the selected watermark area and intelligently fills in the region to produce a clean, natural-looking result without requiring any server-side processing.", answerZh: "该工具通过 Canvas 和 WebGL 在浏览器中完全运行内容感知修复算法。它分析选定水印区域周围的像素，智能填充该区域，生成干净自然的效果，无需任何服务器端处理。" },
      { question: "Will removing a watermark reduce image quality?", questionZh: "去除水印会降低图片质量吗？", answer: "The removal is applied only to the selected watermark region. The rest of your image remains at full original resolution and quality. For large or complex watermarks over detailed backgrounds, some minor artifacts may appear, but overall image integrity is preserved.", answerZh: "去除操作仅应用于选定的水印区域。图片其余部分保持完整的原始分辨率和质量。对于覆盖复杂背景的大型水印，可能会出现少量轻微瑕疵，但整体图片完整性得到保留。" },
      { question: "Can I remove watermarks from any image format?", questionZh: "可以从任何图片格式中去除水印吗？", answer: "Yes. 该工具 supports JPG, PNG, WebP, BMP, and GIF formats. Simply upload your image, select the watermark area with the brush tool, and click remove. The processed image can be downloaded in your preferred format with adjustable quality settings.", answerZh: "可以。该工具支持 JPG、PNG、WebP、BMP 和 GIF 格式。只需上传图片，用画笔工具选择水印区域，然后点击去除即可。处理后的图片可以按您偏好的格式下载，并可调整质量设置。" },
    ],
  },
  {
    slug: "ocr-text-recognition",
    faqs: [
      { question: "How accurate is the OCR text recognition?", questionZh: "OCR 文字识别的准确度如何？", answer: "该工具 uses Tesseract.js, an industry-leading OCR engine running entirely in your browser. It achieves 95-99% accuracy on clear printed text. Accuracy may decrease with handwritten text, low-resolution images, or unusual fonts, but the engine supports 100+ languages including Chinese, English, Japanese, and Korean.", answerZh: "该工具使用 Tesseract.js，这是一个完全在浏览器中运行的业界领先 OCR 引擎。对清晰的印刷文字准确率可达 95-99%。手写文字、低分辨率图片或特殊字体可能会降低准确率，但引擎支持包括中文、英文、日语和韩语在内的 100 多种语言。" },
      { question: "What languages does the OCR tool support?", questionZh: "OCR 工具支持哪些语言？", answer: "该工具 supports over 100 languages including English, Simplified Chinese, Traditional Chinese, Japanese, Korean, Arabic, Spanish, French, German, Russian, and many more. You can select multiple languages simultaneously to recognize mixed-language documents for maximum accuracy.", answerZh: "该工具支持 100 多种语言，包括英语、简体中文、繁体中文、日语、韩语、阿拉伯语、西班牙语、法语、德语、俄语等。您可以同时选择多种语言来识别混合语言文档，以获得最高准确率。" },
      { question: "Are my uploaded images sent to a server?", questionZh: "我上传的图片会发送到服务器吗？", answer: "No. All OCR processing happens entirely in your browser using WebAssembly. Your images and the recognized text never leave your device, ensuring complete privacy for sensitive documents like invoices, contracts, or personal records.", answerZh: "不会。所有 OCR 处理都通过 WebAssembly 完全在您的浏览器中进行。您的图片和识别出的文本永远不会离开您的设备，确保发票、合同或个人记录等敏感文档的完全隐私。" },
    ],
  },
  {
    slug: "csv-visualizer",
    faqs: [
      { question: "What types of charts can I create from CSV data?", questionZh: "可以从 CSV 数据创建哪些类型的图表？", answer: "该工具 supports bar charts, line charts, pie charts, scatter plots, area charts, and doughnut charts. Simply upload your CSV file, select the columns for the X and Y axes, and the tool instantly generates an interactive chart with zooming, hovering tooltips, and exportable rendering.", answerZh: "该工具支持柱状图、折线图、饼图、散点图、面积图和环形图。只需上传 CSV 文件，选择 X 轴和 Y 轴对应的列，工具即可即时生成支持缩放、悬停提示和导出功能的交互式图表。" },
      { question: "How large a CSV file can I visualize?", questionZh: "可以可视化多大的 CSV 文件？", answer: "该工具 handles CSV files up to 50MB in size with tens of thousands of rows. It uses efficient streaming parsers and virtualized rendering to keep the browser responsive. All parsing and visualization happen client-side, so there are no upload limits or server round-trips.", answerZh: "该工具可处理最大 50MB、包含数万行数据的 CSV 文件。它使用高效的流式解析和虚拟化渲染来保持浏览器响应速度。所有解析和可视化均在客户端完成，因此没有上传限制或服务器往返延迟。" },
      { question: "Can I customize the chart appearance?", questionZh: "可以自定义图表外观吗？", answer: "Yes. You can customize chart colors, titles, axis labels, legends, grid lines, and animations. 该工具 also supports multiple data series on a single chart, trend lines, and data point labels. Export your final chart as PNG, SVG, or shareable interactive HTML.", answerZh: "可以。您可以自定义图表颜色、标题、轴标签、图例、网格线和动画。该工具还支持在单个图表上显示多个数据系列、趋势线和数据点标签。最终图表可导出为 PNG、SVG 或可共享的交互式 HTML。" },
    ],
  },
  {
    slug: "video-to-gif",
    faqs: [
      { question: "What video formats can I convert to GIF?", questionZh: "可以将哪些视频格式转换为 GIF？", answer: "该工具 supports MP4, WebM, MOV, AVI, and MKV input formats. Video processing happens entirely in your browser using the WebCodecs API and FFmpeg.wasm. You can trim the video to select the exact segment you want before conversion, and the output GIF is generated without any server upload.", answerZh: "该工具支持 MP4、WebM、MOV、AVI 和 MKV 输入格式。视频处理完全通过 WebCodecs API 和 FFmpeg.wasm 在您的浏览器中进行。您可以在转换前修剪视频以选择精确的片段，生成的 GIF 输出无需任何服务器上传。" },
      { question: "How do I control the GIF quality and file size?", questionZh: "如何控制 GIF 质量和文件大小？", answer: "You can adjust frame rate (FPS), output resolution, and color palette to balance quality and file size. Lower frame rates and smaller dimensions produce smaller files. 该工具 also offers an optimized palette option that reduces file size by 40-60% while maintaining visual quality for web and social media use.", answerZh: "您可以调整帧率（FPS）、输出分辨率和调色板来平衡质量和文件大小。较低的帧率和较小的尺寸会生成更小的文件。该工具还提供优化的调色板选项，可将文件大小减少 40-60%，同时保持适合网页和社交媒体使用的视觉质量。" },
      { question: "Is there a video length limit for conversion?", questionZh: "转换视频有长度限制吗？", answer: "该工具 can handle videos up to 100MB in size. For best results with GIF output, we recommend trimming videos to 10-30 seconds, as longer segments produce very large GIF files. The built-in timeline editor lets you precisely select start and end points before generating the GIF.", answerZh: "该工具可处理最大 100MB 的视频。为获得最佳的 GIF 输出效果，建议将视频修剪至 10-30 秒，因为较长的片段会生成非常大的 GIF 文件。内置的时间轴编辑器让您可以在生成 GIF 前精确选择起始和结束点。" },
    ],
  },
  {
    slug: "markdown-to-pdf",
    faqs: [
      { question: "What Markdown features are supported in the PDF export?", questionZh: "PDF 导出支持哪些 Markdown 功能？", answer: "该工具 supports full GitHub Flavored Markdown including headings, bold, italic, code blocks with syntax highlighting, tables, blockquotes, ordered and unordered lists, images, links, horizontal rules, and task lists. Math equations via LaTeX and mermaid diagrams are also rendered in the exported PDF.", answerZh: "该工具支持完整的 GitHub 风格 Markdown，包括标题、粗体、斜体、带语法高亮的代码块、表格、引用、有序和无序列表、图片、链接、水平线和任务列表。通过 LaTeX 编写的数学公式和 Mermaid 图表也会在导出的 PDF 中渲染。" },
      { question: "Can I customize the PDF page layout and styling?", questionZh: "可以自定义 PDF 页面布局和样式吗？", answer: "Yes. You can choose page size (A4, Letter, Legal), orientation (portrait or landscape), margins, font family, font size, and line spacing. 该工具 also offers multiple pre-built themes including academic, technical documentation, and modern minimalist styles for professional-looking documents.", answerZh: "可以。您可以选择页面尺寸（A4、Letter、Legal）、方向（纵向或横向）、页边距、字体、字号和行距。该工具还提供多种预构建主题，包括学术、技术文档和现代简约风格，生成专业美观的文档。" },
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