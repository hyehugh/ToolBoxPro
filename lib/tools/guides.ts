/**
 * Tool usage guides — detailed 250-350 word descriptions for each tool.
 * Renders on tool pages for SEO content quality and user guidance.
 * All processing is 100% client-side — no data leaves the browser.
 */

export type ToolGuideData = { en: string; zh: string };

export const toolGuides: Record<string, ToolGuideData> = {
  "json-formatter": {
    en: `JSON Formatter & Validator takes minified or messy JSON and restructures it into properly indented, color-coded output that you can actually read. Paste a webhook payload from Stripe, a GraphQL response, or a Kubernetes manifest and the tool immediately tells you whether the structure is valid — and if not, exactly which line and character broke.

The parser surfaces specific error types: missing commas, trailing commas, unquoted keys, single-quote strings, and unescaped control characters. Each error message points to the exact position, so you spend seconds debugging instead of scanning hundreds of lines. The tree view lets you collapse nested objects and arrays, which is invaluable when navigating deep API responses from services like AWS or GitHub.

Use cases come up constantly during development: inspecting fetch() responses in the browser console, verifying config files before deployment, comparing API request and response bodies, preparing fixture data for unit tests, or cleaning up JSON exported from a database. The indentation width is adjustable (2, 4, or tab), and you can minify output back to a single line for production payloads where byte count matters.

Everything runs through the browser's native JSON.parse — no external libraries, no network calls. Large payloads from production APIs work without freezing. Copy the formatted result with one keystroke or download it as a .json file for your test suite.`,
    zh: `JSON 格式化工具将压缩或混乱的 JSON 重新缩进、着色，让结构一目了然。粘贴 Stripe webhook、GraphQL 响应或 Kubernetes 配置，工具会立即告诉你 JSON 是否有效——如果有错误，精确定位到具体行和字符。

解析器识别多种错误类型：缺少逗号、多余逗号、未加引号的键、单引号字符串、未转义控制字符。树状视图支持折叠嵌套对象和数组，浏览 AWS、GitHub 等深层 API 响应时非常实用。

常见场景：检查 fetch 响应、部署前验证配置、对比请求与响应体、准备测试数据、清理数据库导出。缩进宽度可选 2/4/Tab，也可将输出压缩为单行用于生产环境。全部基于浏览器原生 JSON.parse，无需联网，大体积生产 API 数据也能流畅处理。一键复制或下载 .json 文件。`,
  },
  "base64-encode-decode": {
    en: `Base64 Encoder/Decoder converts between raw text or binary and Base64 notation — the encoding that embeds binary data inside JSON, HTML, CSS, and URLs without breaking their syntax. The tool handles UTF-8 text correctly, so strings with emoji, CJK characters, and accented letters round-trip without mojibake.

Encoding is something developers reach for in surprisingly many situations: embedding a small logo as a data URI in CSS to avoid an extra HTTP request, passing binary file content through a JSON API field, storing image uploads in localStorage, authorizing HTTP Basic Auth headers (which are Base64-encoded "user:password"), or transferring email attachments via MIME. The tool also decodes JWT payload segments, which are Base64url-encoded.

Drop a file onto the input and get its Base64 representation instantly, useful for building data-URI sprites or testing API endpoints that accept inline binary. The decoder accepts both standard Base64 and the URL-safe variant (using - and _ instead of + and /), and strips whitespace/newlines that often wrap long Base64 blobs in email and certificate exports.

The entire conversion runs in JavaScript using the browser's built-in btoa/atob and TextEncoder APIs. Nothing is uploaded, which matters when you're encoding API credentials or decoding tokens that carry personal data.`,
    zh: `Base64 编解码工具在原始文本/二进制与 Base64 表示之间互转——这种编码方式让二进制数据能嵌入 JSON、HTML、CSS、URL 而不破坏语法。工具正确处理 UTF-8 文本，emoji、中日韩字符、重音字母均能无损往返。

常见场景：将小 logo 编码为 CSS data URI 以减少 HTTP 请求、通过 JSON API 字段传递二进制内容、在 localStorage 存储图片、构造 HTTP Basic Auth 头（即 Base64 编码的"用户:密码"）、解码 JWT payload 段（Base64url 编码）。

拖拽文件即可获得其 Base64 表示，适用于构建 data-URI 雪碧图或测试接受内联二进制的 API 端点。解码器同时接受标准 Base64 和 URL 安全变体，并自动去除邮件/证书导出中常见的换行和空白。全部基于浏览器原生 btoa/atob 和 TextEncoder，无任何上传，处理 API 凭证或携带个人信息的 token 时更安全。`,
  },
  "regex-tester": {
    en: `Regex Tester lets you write a pattern and immediately see which parts of your sample text it matches, with each match highlighted in a distinct color. Toggle the standard flags — global (g), case-insensitive (i), multiline (m), dot-all (s), sticky (y), and unicode (u) — and the match set updates as you flip each switch.

The tool draws on JavaScript's native RegExp engine, so results match what your code will actually do at runtime. That matters because regex flavors differ across languages: a pattern that works in Python's re module or Java's java.util.regex may behave differently in a browser. Testing here removes that guesswork before you ship.

Practical scenarios show up everywhere: validating email addresses and phone numbers in form inputs, extracting all URLs from a block of HTML, parsing log lines into structured fields, stripping markdown formatting, finding duplicate words in a document, or splitting a CSV-like string on delimiters that may or may not be quoted. Capture groups are displayed individually, so you can confirm that your parentheses grabbed exactly the substring you expected.

Each match shows its index position, the full matched text, and the contents of every capture group. Invalid patterns produce a clear syntax error pointing to the problematic token, rather than failing silently.`,
    zh: `正则表达式测试工具让你编写模式后立即看到示例文本中的匹配部分，每个匹配以不同颜色高亮。可切换标准标志——全局(g)、忽略大小写(i)、多行(m)、dot-all(s)、sticky(y)、unicode(u)——切换时匹配结果实时更新。

工具基于 JavaScript 原生 RegExp 引擎，结果与代码运行时行为一致。这点很关键，因为不同语言的正则风格不同：Python re 或 Java 模式在浏览器中可能表现不同，在此测试可消除猜测。

常见场景：表单邮箱/手机号验证、从 HTML 中提取所有 URL、将日志行解析为结构化字段、去除 Markdown 格式、查找文档中重复单词、按可能带引号的分隔符拆分 CSV 字符串。捕获组单独显示，确认括号抓取了预期子串。每个匹配显示索引位置、完整匹配文本和各捕获组内容。无效模式会给出指向问题 token 的明确语法错误。`,
  },
  "color-converter": {
    en: `A free online conversion calculator that convert colors between HEX, RGB, HSL, CMYK, and HSV with a visual picker. Get accurate results instantly without any software installation.

Unit conversions are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

Key features include support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

Enter your value in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

All calculations happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
    zh: `Color Converter 是一款免费在线工具，在 HEX、RGB、HSL、CMYK 和 HSV 颜色格式之间转换，带可视化选择器。

单位换算 are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

主要特点包括 support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

输入您的数值 in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

所有计算 happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
  },
  "url-encoder-decoder": {
    en: `URL Encoder/Decoder applies percent-encoding to any string so that reserved characters — spaces, ampersands, equals signs, slashes, Unicode — become safe for use inside a URL. Drop in a query string like "q=hello world&lang=zh-CN" and watch each unsafe character get replaced with its %XX equivalent. Decoding reverses the process, turning %20 back into a space and %2F into a slash.

This matters in practice far more often than people expect. When you construct a fetch() URL with user-supplied search terms, an unencoded space or & will silently corrupt the request. OAuth redirect URIs, pre-signed S3 links, mailto: links with subject and body parameters, and encoded state parameters in OAuth flows all require correct percent-encoding. If you've ever pasted a URL with a "+" where a space should be, or seen "%20" in a browser address bar, that's this encoding at work.

The tool distinguishes between encodeURIComponent (which encodes the entire string including slashes, suitable for a query parameter value) and encodeURI (which preserves slashes and other structural characters, suitable for a full URL). Both directions handle UTF-8 correctly, so Chinese, Arabic, and emoji characters encode and decode without corruption.`,
    zh: `URL 编解码工具对任意字符串应用百分号编码，将空格、&、=、/、Unicode 等保留字符转为 URL 安全形式。输入"q=hello world&lang=zh-CN"，每个不安全字符都会被替换为 %XX 等价物。解码则反向操作，将 %20 还原为空格、%2F 还原为斜杠。

实际场景比想象中多：用用户输入构造 fetch URL 时，未编码的空格或 & 会静默破坏请求；OAuth 重定向 URI、S3 预签名链接、带 subject/body 参数的 mailto 链接、OAuth state 参数都要求正确百分号编码。浏览器地址栏里的"%20"就是这种编码。

工具区分 encodeURIComponent（编码整个字符串含斜杠，适合查询参数值）和 encodeURI（保留斜杠等结构字符，适合完整 URL）。两个方向均正确处理 UTF-8，中文、阿拉伯文、emoji 编解码无乱码。`,
  },
  "uuid-generator": {
    en: `UUID Generator produces RFC 4122 version 4 universally unique identifiers — 128-bit random values like "f47ac10b-58cc-4372-a567-0e02b2c3d479" that are effectively guaranteed never to collide, even when generated across millions of machines. Set a count and generate a batch of hundreds at once for database seeding, test fixtures, or Kafka event IDs.

UUIDs solve a real distributed-systems problem. If your PostgreSQL table uses SERIAL primary keys, anyone who inspects your API can count how many orders you've processed. Switching to UUID v4 hides that information and lets different services generate IDs independently without a central coordinator — essential for microservices, offline-first apps, and multi-region writes. They're also the standard identifier in AWS resources, GraphQL node IDs, and many SaaS webhook payloads.

The tool uses crypto.getRandomValues(), the same cryptographically strong random source your browser uses for TLS, so the IDs are suitable for session tokens and security-sensitive contexts where Math.random() would be predictable. You can toggle between hyphenated format (the standard 8-4-4-4-12 layout), compact hex without hyphens, or wrapped in braces for Microsoft GUID conventions.`,
    zh: `UUID 生成器产生 RFC 4122 v4 通用唯一标识符——128 位随机值如"f47ac10b-58cc-4372-a567-0e02b2c3d479"，碰撞概率极低，即使跨数百万台机器生成也几乎不会重复。设置数量即可一次批量生成数百个，用于数据库种子数据、测试夹具或 Kafka 事件 ID。

UUID 解决真实的分布式系统问题。PostgreSQL 表若用 SERIAL 主键，任何人通过 API 即可推断业务量。切换到 UUID v4 可隐藏该信息，并允许不同服务独立生成 ID 而无需中央协调——对微服务、离线优先应用、多区域写入至关重要。它也是 AWS 资源、GraphQL 节点 ID 和许多 SaaS webhook 的标准标识符。

工具使用 crypto.getRandomValues()，即浏览器用于 TLS 的密码学强随机源，ID 可用于会话 token 等安全敏感场景，Math.random() 在这种场景下可预测。格式可选带连字符的标准 8-4-4-4-12、无连字符紧凑十六进制，或加花括号的 Microsoft GUID 风格。`,
  },
  "password-generator": {
    en: `A free online text processing tool that create cryptographically secure random passwords using the Web Crypto API. Transform, analyze, and manipulate text instantly in your browser.

Writers, developers, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

Key features include real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

All text processing happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
    zh: `Password Generator 是一款免费在线工具，使用 Web Crypto API 生成密码学安全的随机密码。

写作者、开发者, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

主要特点包括 real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

所有文本处理 happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
  },
  "hash-generator": {
    en: `Hash Generator computes cryptographic digests — SHA-1, SHA-256, SHA-384, SHA-512, and MD5 — for any text or file you provide. The same input always produces the same fixed-length hex string, which is why hashes are the backbone of data integrity checks, password storage, and digital signatures.

When you download a large installer or ISO, the publisher often lists its SHA-256 checksum alongside the download link. Run the file through this tool and compare the output to that published value — if they match, you know the file wasn't tampered with in transit. Developers also hash files to detect changes in build artifacts, verify that a Docker image layer hasn't changed, or deduplicate content-addressed storage like Git does internally.

For text, the tool is useful when generating a cache key from a configuration string (if the hash changes, the cache invalidates), creating a deterministic ID from a compound value, or verifying that two API responses are byte-identical without diffing them. Drop a file onto the input area to hash its full binary content — useful for PDFs, images, and archives where a single corrupted byte must be caught.

All algorithms use the Web Crypto API (SubtleCrypto), which runs natively and handles multi-megabyte files without blocking the UI.`,
    zh: `哈希生成器为任意文本或文件计算密码学摘要——SHA-1、SHA-256、SHA-384、SHA-512、MD5。相同输入始终产生相同固定长度十六进制字符串，因此哈希是数据完整性校验、密码存储、数字签名的基石。

下载大型安装包或 ISO 时，发布方常在链接旁列出 SHA-256 校验和。将文件拖入本工具，比较输出与发布值——若一致则确认文件未被篡改。开发者还用哈希检测构建产物变更、验证 Docker 镜像层未变，或实现 Git 那样的内容寻址存储去重。

文本场景：从配置字符串生成缓存键（哈希变则缓存失效）、从复合值生成确定性 ID、无需 diff 即可验证两个 API 响应逐字节一致。拖入文件可对完整二进制内容计算哈希——适用于 PDF、图片、压缩包，能捕获单个损坏字节。所有算法基于 Web Crypto API（SubtleCrypto），原生运行，处理数十兆文件不阻塞界面。`,
  },
  "timestamp-converter": {
    en: `Timestamp Converter translates between Unix epoch seconds (or milliseconds) and human-readable calendar dates. Paste "1699999200" and see "2023-11-15 00:00:00 UTC"; type a date and get the exact integer a database or API expects.

Unix timestamps are everywhere in backend systems because they sidestep timezone ambiguity entirely — a single integer that any database column (BIGINT), log format, or JSON field can store and sort. You'll encounter them in MongoDB's _id, in file modification times returned by stat(), in JWT "exp" and "iat" claims, in cron job schedules, in AWS CloudWatch log event timestamps, and in every system that needs to compare dates across timezones without parsing overhead.

The tool shows both UTC and your local timezone side by side, which resolves the classic "is this timestamp in UTC or my local time?" confusion that causes production bugs. It handles millisecond timestamps (13 digits, used by Java, JavaScript Date.now(), and Java) and second timestamps (10 digits, used by C, Go time.Unix(), and most SQL databases) — automatically detecting which you meant.

Supports relative input too: type "+7 days" or "now" to compute future or past timestamps, useful for setting cookie expiry, cache TTLs, or token expiration windows.`,
    zh: `时间戳转换工具在 Unix epoch 秒（或毫秒）与人类可读日历日期之间互转。粘贴"1699999200"得到"2023-11-15 00:00:00 UTC"；输入日期则得到数据库或 API 所需的整数。

Unix 时间戳在后端无处不在，因为它完全规避时区歧义——单个整数可被任何数据库列（BIGINT）、日志格式或 JSON 字段存储和排序。你会在 MongoDB _id、stat() 返回的文件修改时间、JWT 的 exp/iat 声明、cron 任务计划、AWS CloudWatch 日志事件时间戳，以及任何需跨时区比较日期而不产生解析开销的系统中遇到它。

工具同时显示 UTC 和本地时区，解决"这时间戳是 UTC 还是本地时间"的经典困惑——这类困惑常导致生产 bug。自动识别毫秒时间戳（13 位，Java、JavaScript Date.now() 使用）和秒时间戳（10 位，C、Go time.Unix()、多数 SQL 数据库使用）。

还支持相对输入：输入"+7 days"或"now"计算未来或过去时间戳，适用于设置 cookie 过期、缓存 TTL 或 token 有效期。`,
  },
  "number-base-converter": {
    en: `Number Base Converter translates an integer between binary (base 2), octal (base 8), decimal (base 10), and hexadecimal (base 16) — the four numbering systems that show up constantly in low-level programming, networking, and debugging. Type "255" and instantly see it as 0b11111111, 0o377, and 0xFF simultaneously.

Hex is the lingua franca of memory addresses, color codes, MAC addresses, and binary file formats. When your debugger shows a pointer value like 0x7ffee8b2c000, this tool confirms what that number actually is in decimal. When you're writing a CSS color like #FF8800, the hex pairs map to RGB decimal values (255, 136, 0). When configuring subnet masks, file permissions (chmod 755), or reading assembly instructions, base conversion is the bridge between the human-readable and machine-native representations.

The converter handles both unsigned integers and signed two's-complement values, which matters when you're working with 8-bit, 16-bit, or 32-bit registers in embedded systems or reverse engineering. Input can include standard prefixes (0x, 0b, 0o) or be plain digits — the tool auto-detects the base from context.

Large values up to 53-bit precision (JavaScript's safe integer limit) are supported, covering the full range of IPv6 addresses and 64-bit memory offsets you'll encounter in practice.`,
    zh: `进制转换工具在二进制（base 2）、八进制（base 8）、十进制（base 10）、十六进制（base 16）之间互转——这四种进制在底层编程、网络、调试中无处不在。输入"255"即可同时看到 0b11111111、0o377、0xFF。

十六进制是内存地址、颜色代码、MAC 地址、二进制文件格式的通用语言。调试器显示指针 0x7ffee8b2c000 时，本工具确认其十进制值。写 CSS 颜色 #FF8800 时，hex 对应 RGB 十进制（255, 136, 0）。配置子网掩码、文件权限（chmod 755）、阅读汇编指令时，进制转换是人与机器表示之间的桥梁。

转换器同时处理无符号整数和有符号补码值，处理嵌入式系统或逆向工程中的 8/16/32 位寄存器时很关键。输入可含标准前缀（0x、0b、0o）或纯数字——工具自动检测进制。支持最大 53 位精度（JavaScript 安全整数范围），覆盖实际场景中的完整 IPv6 地址和 64 位内存偏移。`,
  },
  "image-compressor": {
    en: `A free browser-based image tool that reduce image file size by 50-80% while maintaining visual quality for JPEG, PNG, and WebP. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `Image Compressor 是一款免费在线工具，在保持视觉质量的同时将图片文件大小减小 50-80%，支持 JPEG、PNG 和 WebP。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "image-converter": {
    en: `A free browser-based image tool that convert images between jpg, png, webp, avif, gif, and bmp formats. batch convert with custom quality and dimension settings. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `Image Format Converter 是一款免费在线工具，Convert images between JPG, PNG, WebP, AVIF, GIF, and BMP formats. Batch convert with custom quality and dimension settings.。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "pdf-merger": {
    en: `A free browser-based image tool that combine multiple PDF files into a single document with page reordering. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `PDF Merger 是一款免费在线工具，将多个 PDF 文件合并为一个文档，支持页面重新排序。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "word-counter": {
    en: `A free online text processing tool that count words, characters, sentences, paragraphs, and estimate reading time. Transform, analyze, and manipulate text instantly in your browser.

Writers, developers, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

Key features include real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

All text processing happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
    zh: `Word & Character Counter 是一款免费在线工具，统计字数、字符数、句子数、段落数并估算阅读时间。

写作者、开发者, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

主要特点包括 real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

所有文本处理 happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
  },
  "case-converter": {
    en: `A free online text processing tool that convert text between upper, lower, title, camelcase and more. Transform, analyze, and manipulate text instantly in your browser.

Writers, developers, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

Key features include real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

All text processing happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
    zh: `Text Case Converter 是一款免费在线工具，Convert text between UPPER, lower, Title, camelCase and more。

写作者、开发者, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

主要特点包括 real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

所有文本处理 happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
  },
  "lorem-ipsum-generator": {
    en: `A free online text processing tool that generate placeholder text for design mockups, website wireframes, and print layouts. customize paragraph count, word length, and format. Transform, analyze, and manipulate text instantly in your browser.

Writers, developers, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

Key features include real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

All text processing happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
    zh: `Lorem Ipsum Generator 是一款免费在线工具，Generate placeholder text for design mockups, website wireframes, and print layouts. Customize paragraph count, word length, and format.。

写作者、开发者, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

主要特点包括 real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

所有文本处理 happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
  },
  "text-diff-checker": {
    en: `A free online text processing tool that compare two blocks of text side by side and highlight every difference. perfect for code reviews, document revisions, and plagiarism checks. Transform, analyze, and manipulate text instantly in your browser.

Writers, developers, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

Key features include real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

All text processing happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
    zh: `Text Diff Checker 是一款免费在线工具，Compare two blocks of text side by side and highlight every difference. Perfect for code reviews, document revisions, and plagiarism checks.。

写作者、开发者, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

主要特点包括 real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

所有文本处理 happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
  },
  "text-repeater": {
    en: `A free online text processing tool that repeat any text multiple times with custom separators, line breaks, or prefixes. generate test data, patterns, and repeated strings instantly. Transform, analyze, and manipulate text instantly in your browser.

Writers, developers, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

Key features include real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

All text processing happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
    zh: `Text Repeater 是一款免费在线工具，Repeat any text multiple times with custom separators, line breaks, or prefixes. Generate test data, patterns, and repeated strings instantly.。

写作者、开发者, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

主要特点包括 real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

所有文本处理 happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
  },
  "html-entity-converter": {
    en: `HTML Entity Converter switches text between its raw form and HTML-entity-encoded form — the &amp; &lt; &gt; &quot; and &#NNNN; sequences that prevent characters from being interpreted as HTML markup. The five characters that always need encoding inside HTML content are & < > " and ', and this tool handles all of them correctly.

You need this when rendering user-generated content inside a web page. If a blog comment contains the text "<script>alert(1)</script>" and you insert it into the DOM without encoding, the browser executes it — that's a stored XSS vulnerability. Encoding < as &lt; turns it into visible text instead of a live tag. The same applies when displaying JSON or code snippets inside <pre> blocks: angle brackets and ampersands must be escaped or they'll be parsed as tags and character references.

The tool offers both named entities (&amp; &lt; &gt; — the human-readable form) and numeric entities (&#38; &#60; — the universal form that covers every Unicode codepoint, including emoji and CJK characters that have no named equivalent). Use named entities for the common five; use numeric for everything else.

Decoding reverses the process: paste text scraped from a web page that's full of &nbsp; and &#8217; entities and get clean readable text back.`,
    zh: `HTML 实体转换工具在原始文本与 HTML 实体编码形式之间切换——即 &amp; &lt; &gt; &quot; 和 &#NNNN; 序列，防止字符被解释为 HTML 标签。HTML 内容中始终需编码的五个字符是 & < > " 和 '，本工具正确处理全部。

在网页中渲染用户生成内容时需要它。若博客评论含"<script>alert(1)</script>"且未编码即插入 DOM，浏览器会执行它——这就是存储型 XSS 漏洞。将 < 编码为 &lt; 即变为可见文本而非活动标签。在 <pre> 块中显示 JSON 或代码片段时同理：尖括号和 & 必须转义，否则会被解析为标签和字符引用。

工具提供命名实体（&amp; &lt; &gt; —人类可读形式）和数字实体（&#38; &#60; —覆盖每个 Unicode 码位的通用形式，含无命名等价物的 emoji 和中日韩字符）。常用五个用命名实体，其余用数字实体。解码反向操作：粘贴从网页抓取的含 &nbsp; 和 &#8217; 实体文本，即可得到干净可读文本。`,
  },
  "css-minifier": {
    en: `CSS Minifier strips every byte that isn't strictly necessary from your stylesheet: whitespace, comments, trailing semicolons, unit values where zero is implied (0px → 0), and redundant color notation (#ffffff → #fff). Paste a 45 KB development stylesheet and get back a 28 KB production file that renders identically.

Smaller CSS means faster First Contentful Paint. On mobile networks a 17 KB reduction can shave 80-120ms off load time — meaningful when Google's Core Web Vitals threshold for "good" LCP is 2.5 seconds. Every kilobyte removed from the critical render-blocking CSS in <head> directly improves that metric, which is why minification is a default step in every modern build pipeline (Webpack, Vite, esbuild, PostCSS).

This tool is the manual escape hatch: minify a CSS snippet for an email template where build tools aren't available, compress an inline style attribute, reduce the payload of a dynamically injected style tag, or check what your bundler's minifier actually produced. It preserves CSS custom properties (variables), calc() expressions, and modern features like @layer and :has() that older minifiers corrupt.

The before-and-after byte counts are shown so you can quantify the savings, and the minified output is valid CSS that you can paste directly into a <style> tag or .css file.`,
    zh: `CSS 压缩工具从样式表中剔除每一字节非必要内容：空白、注释、多余分号、可省略的单位值（0px → 0）、冗余颜色写法（#ffffff → #fff）。粘贴 45KB 开发样式表，得到 28KB 生产文件，渲染效果完全相同。

更小的 CSS 意味着更快的首次内容绘制。移动网络上减少 17KB 可缩短 80-120ms 加载时间——Google Core Web Vitals 的"良好"LCP 阈值为 2.5 秒，这点优化很关键。<head> 中关键渲染阻塞 CSS 每减少一千字节都直接改善该指标，因此压缩是现代构建流水线（Webpack、Vite、esbuild、PostCSS）的默认步骤。

本工具是手动逃生通道：为无法使用构建工具的邮件模板压缩 CSS 片段、压缩内联 style 属性、减小动态注入 style 标签的载荷、或检查打包器压缩器的实际产出。保留 CSS 自定义属性（变量）、calc() 表达式、以及旧压缩器会损坏的 @layer 和 :has() 等现代特性。压缩前后字节数一目了然，输出为有效 CSS，可直接粘贴到 <style> 标签或 .css 文件。`,
  },
  "sql-formatter": {
    en: `A developer-focused online tool that format and beautify sql queries for better readability. Built for speed and accuracy, it processes your input instantly without any server uploads.

Developers often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

Key features include real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

Simply paste or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

All processing happens locally in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
    zh: `SQL Formatter 是一款免费在线工具，Format and beautify SQL queries for better readability。

开发者 often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

主要特点包括 real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

只需粘贴 or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

所有处理都在浏览器本地完成 in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
  },
  "json-to-yaml": {
    en: `A developer-focused online tool that convert json data to clean yaml format and vice versa. preserve nested structures, arrays, and data types during conversion. Built for speed and accuracy, it processes your input instantly without any server uploads.

Developers often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

Key features include real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

Simply paste or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

All processing happens locally in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
    zh: `JSON to YAML Converter 是一款免费在线工具，Convert JSON data to clean YAML format and vice versa. Preserve nested structures, arrays, and data types during conversion.。

开发者 often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

主要特点包括 real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

只需粘贴 or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

所有处理都在浏览器本地完成 in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
  },
  "string-escaper": {
    en: `A developer-focused online tool that escape and unescape special characters in strings for json, html, urls, sql, and javascript. handle all common escaping formats. Built for speed and accuracy, it processes your input instantly without any server uploads.

Developers often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

Key features include real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

Simply paste or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

All processing happens locally in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
    zh: `String Escaper/Unescaper 是一款免费在线工具，Escape and unescape special characters in strings for JSON, HTML, URLs, SQL, and JavaScript. Handle all common escaping formats.。

开发者 often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

主要特点包括 real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

只需粘贴 or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

所有处理都在浏览器本地完成 in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
  },
  "html-tag-stripper": {
    en: `A developer-focused online tool that remove all html tags from text, keeping only content. Built for speed and accuracy, it processes your input instantly without any server uploads.

Developers often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

Key features include real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

Simply paste or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

All processing happens locally in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
    zh: `HTML Tag Stripper 是一款免费在线工具，Remove all HTML tags from text, keeping only content。

开发者 often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

主要特点包括 real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

只需粘贴 or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

所有处理都在浏览器本地完成 in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
  },
  "jwt-decoder": {
    en: `A developer-focused online tool that decode jwt tokens and inspect header, payload, and signature. Built for speed and accuracy, it processes your input instantly without any server uploads.

Developers often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

Key features include real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

Simply paste or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

All processing happens locally in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
    zh: `JWT Decoder 是一款免费在线工具，Decode JWT tokens and inspect header, payload, and signature。

开发者 often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

主要特点包括 real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

只需粘贴 or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

所有处理都在浏览器本地完成 in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
  },
  "cron-parser": {
    en: `A developer-focused online tool that parse cron expressions and get human-readable schedules. Built for speed and accuracy, it processes your input instantly without any server uploads.

Developers often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

Key features include real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

Simply paste or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

All processing happens locally in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
    zh: `Cron Expression Parser 是一款免费在线工具，Parse cron expressions and get human-readable schedules。

开发者 often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

主要特点包括 real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

只需粘贴 or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

所有处理都在浏览器本地完成 in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
  },
  "text-to-binary": {
    en: `A free online text processing tool that convert text to binary code and binary back to text. Transform, analyze, and manipulate text instantly in your browser.

Writers, developers, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

Key features include real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

All text processing happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
    zh: `Text to Binary Converter 是一款免费在线工具，Convert text to binary code and binary back to text。

写作者、开发者, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

主要特点包括 real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

所有文本处理 happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
  },
  "html-preview": {
    en: `A developer-focused online tool that write and preview html code in real-time in a sandbox. Built for speed and accuracy, it processes your input instantly without any server uploads.

Developers often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

Key features include real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

Simply paste or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

All processing happens locally in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
    zh: `HTML Preview 是一款免费在线工具，Write and preview HTML code in real-time in a sandbox。

开发者 often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

主要特点包括 real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

只需粘贴 or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

所有处理都在浏览器本地完成 in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
  },
  "csv-viewer": {
    en: `A developer-focused online tool that view csv data in a formatted table with auto-detection. Built for speed and accuracy, it processes your input instantly without any server uploads.

Developers often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

Key features include real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

Simply paste or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

All processing happens locally in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
    zh: `CSV Viewer & Formatter 是一款免费在线工具，View CSV data in a formatted table with auto-detection。

开发者 often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

主要特点包括 real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

只需粘贴 or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

所有处理都在浏览器本地完成 in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
  },
  "ip-calculator": {
    en: `A developer-focused online tool that calculate network subnet, cidr, broadcast, and host range. Built for speed and accuracy, it processes your input instantly without any server uploads.

Developers often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

Key features include real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

Simply paste or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

All processing happens locally in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
    zh: `IP Subnet Calculator 是一款免费在线工具，Calculate network subnet, CIDR, broadcast, and host range。

开发者 often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

主要特点包括 real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

只需粘贴 or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

所有处理都在浏览器本地完成 in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
  },
  "jwt-generator": {
    en: `A developer-focused online tool that generate jwt tokens with custom header and payload. Built for speed and accuracy, it processes your input instantly without any server uploads.

Developers often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

Key features include real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

Simply paste or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

All processing happens locally in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
    zh: `JWT Generator 是一款免费在线工具，Generate JWT tokens with custom header and payload。

开发者 often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

主要特点包括 real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

只需粘贴 or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

所有处理都在浏览器本地完成 in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
  },
  "text-to-slug": {
    en: `A free online text processing tool that convert any text into clean, seo-friendly url slugs. remove special characters, normalize spaces, and generate optimized permalinks. Transform, analyze, and manipulate text instantly in your browser.

Writers, developers, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

Key features include real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

All text processing happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
    zh: `Text to URL Slug 是一款免费在线工具，Convert any text into clean, SEO-friendly URL slugs. Remove special characters, normalize spaces, and generate optimized permalinks.。

写作者、开发者, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

主要特点包括 real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

所有文本处理 happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
  },
  "text-sorter": {
    en: `A free online text processing tool that sort text lines alphabetically (a-z or z-a), by line length, or in reverse order. remove duplicates and organize lists instantly. Transform, analyze, and manipulate text instantly in your browser.

Writers, developers, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

Key features include real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

All text processing happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
    zh: `Text Sorter 是一款免费在线工具，Sort text lines alphabetically (A-Z or Z-A), by line length, or in reverse order. Remove duplicates and organize lists instantly.。

写作者、开发者, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

主要特点包括 real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

所有文本处理 happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
  },
  "text-deduplicator": {
    en: `A free online text processing tool that remove duplicate lines from text while preserving order. Transform, analyze, and manipulate text instantly in your browser.

Writers, developers, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

Key features include real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

All text processing happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
    zh: `Line Deduplicator 是一款免费在线工具，Remove duplicate lines from text while preserving order。

写作者、开发者, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

主要特点包括 real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

所有文本处理 happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
  },
  "text-reverser": {
    en: `A free online text processing tool that reverse text, words, sentences, or entire lines instantly. useful for creating mirrored text, solving puzzles, or formatting data. Transform, analyze, and manipulate text instantly in your browser.

Writers, developers, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

Key features include real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

All text processing happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
    zh: `Text Reverser 是一款免费在线工具，Reverse text, words, sentences, or entire lines instantly. Useful for creating mirrored text, solving puzzles, or formatting data.。

写作者、开发者, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

主要特点包括 real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

所有文本处理 happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
  },
  "random-string-generator": {
    en: `A free online utility tool that generate random strings with custom characters and length. Simple, fast, and completely private — just open and use.

Everyday tasks like generating passwords, creating QR codes, rolling dice, or checking BMI shouldn't require installing software or creating accounts. This tool provides a quick, reliable solution that works instantly in your browser. It's perfect for one-off tasks where you need a fast result without the overhead of specialized software.

Key features include instant results with no loading time, a clean and intuitive interface that requires no learning curve, customizable options for fine-tuning results, one-click copy or download for output, and responsive design that works on any device. The tool is designed to do one thing well and do it fast.

Open the tool, configure your options if needed (such as length, format, or range), and click the action button. Results appear immediately. Copy the output to your clipboard, download it, or generate a new result with different settings. The entire workflow takes seconds.

All processing happens locally in your browser. No data is uploaded, stored, or tracked. Your inputs and results are completely private. No account required, no cookies, no analytics beyond basic page views.`,
    zh: `Random String Generator 是一款免费在线工具，Generate random strings with custom characters and length。

日常任务 like generating passwords, creating QR codes, rolling dice, or checking BMI shouldn't require installing software or creating accounts. This tool provides a quick, reliable solution that works instantly in your browser. It's perfect for one-off tasks where you need a fast result without the overhead of specialized software.

主要特点包括 instant results with no loading time, a clean and intuitive interface that requires no learning curve, customizable options for fine-tuning results, one-click copy or download for output, and responsive design that works on any device. The tool is designed to do one thing well and do it fast.

打开工具, configure your options if needed (such as length, format, or range), and click the action button. Results appear immediately. Copy the output to your clipboard, download it, or generate a new result with different settings. The entire workflow takes seconds.

所有处理都在浏览器本地完成 in your browser. No data is uploaded, stored, or tracked. Your inputs and results are completely private. No account required, no cookies, no analytics beyond basic page views.`,
  },
  "palindrome-checker": {
    en: `A free online utility tool that check if text reads the same forwards and backwards. Simple, fast, and completely private — just open and use.

Everyday tasks like generating passwords, creating QR codes, rolling dice, or checking BMI shouldn't require installing software or creating accounts. This tool provides a quick, reliable solution that works instantly in your browser. It's perfect for one-off tasks where you need a fast result without the overhead of specialized software.

Key features include instant results with no loading time, a clean and intuitive interface that requires no learning curve, customizable options for fine-tuning results, one-click copy or download for output, and responsive design that works on any device. The tool is designed to do one thing well and do it fast.

Open the tool, configure your options if needed (such as length, format, or range), and click the action button. Results appear immediately. Copy the output to your clipboard, download it, or generate a new result with different settings. The entire workflow takes seconds.

All processing happens locally in your browser. No data is uploaded, stored, or tracked. Your inputs and results are completely private. No account required, no cookies, no analytics beyond basic page views.`,
    zh: `Palindrome Checker 是一款免费在线工具，Check if text reads the same forwards and backwards。

日常任务 like generating passwords, creating QR codes, rolling dice, or checking BMI shouldn't require installing software or creating accounts. This tool provides a quick, reliable solution that works instantly in your browser. It's perfect for one-off tasks where you need a fast result without the overhead of specialized software.

主要特点包括 instant results with no loading time, a clean and intuitive interface that requires no learning curve, customizable options for fine-tuning results, one-click copy or download for output, and responsive design that works on any device. The tool is designed to do one thing well and do it fast.

打开工具, configure your options if needed (such as length, format, or range), and click the action button. Results appear immediately. Copy the output to your clipboard, download it, or generate a new result with different settings. The entire workflow takes seconds.

所有处理都在浏览器本地完成 in your browser. No data is uploaded, stored, or tracked. Your inputs and results are completely private. No account required, no cookies, no analytics beyond basic page views.`,
  },
  "morse-code-converter": {
    en: `A free online Morse code translator that converts plain text into dots and dashes — and decodes Morse signals back into readable words. Perfect for ham radio operators, scouting activities, cryptography students, and anyone fascinated by this 1800s communication system that's still in active use today.

Morse code assigns short signals (dots) and long signals (dashes) to each letter and number. SOS, the universal distress signal, is universally recognized as three dots, three dashes, three dots (··· ─── ···). Knowing even a few letters can be genuinely useful in emergencies where voice communication isn't possible.

Type your message and the tool translates it character by character, handling letters A–Z, digits 0–9, and common punctuation. Spaces between words become slash separators for readability. Paste Morse sequences back in and recover the original text. A built-in audio player lets you hear the rhythm of each character, which is how operators originally learned the code — by ear, not by memorizing charts.

Practical uses include encoding hidden messages in puzzles and escape rooms, building educational demos for STEM classes, practicing for amateur radio licensing exams, or simply exploring one of the oldest digital encoding systems ever invented. Every conversion runs entirely in your browser with no data sent anywhere.`,
    zh: `免费在线摩尔斯电码翻译器，将文字转换为点和划，也能将摩尔斯信号解码为可读文字。适合业余无线电操作员、童子军活动、密码学学习和紧急通讯爱好者使用。输入文字后逐字符翻译，支持字母、数字和标点；粘贴摩尔斯序列即可还原原文。内置音频播放器可播放每个字符的节奏，帮助你像早期操作员那样靠听觉学习。适用于谜题设计、STEM教学演示、业余无线电执照考试练习等场景。全部转换在浏览器本地完成。`,
  },
  "temperature-converter": {
    en: `A free online conversion calculator that convert temperatures between celsius, fahrenheit, and kelvin scales instantly. perfect for cooking, science, weather, and travel calculations. Get accurate results instantly without any software installation.

Unit conversions are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

Key features include support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

Enter your value in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

All calculations happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
    zh: `Temperature Converter 是一款免费在线工具，Convert temperatures between Celsius, Fahrenheit, and Kelvin scales instantly. Perfect for cooking, science, weather, and travel calculations.。

单位换算 are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

主要特点包括 support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

输入您的数值 in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

所有计算 happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
  },
  "weight-converter": {
    en: `A free online conversion calculator that convert between kilograms, pounds, ounces, and more. Get accurate results instantly without any software installation.

Unit conversions are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

Key features include support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

Enter your value in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

All calculations happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
    zh: `Weight Converter 是一款免费在线工具，Convert between kilograms, pounds, ounces, and more。

单位换算 are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

主要特点包括 support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

输入您的数值 in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

所有计算 happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
  },
  "length-converter": {
    en: `A free online conversion calculator that convert between meters, feet, inches, kilometers, and miles. Get accurate results instantly without any software installation.

Unit conversions are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

Key features include support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

Enter your value in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

All calculations happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
    zh: `Length Converter 是一款免费在线工具，Convert between meters, feet, inches, kilometers, and miles。

单位换算 are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

主要特点包括 support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

输入您的数值 in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

所有计算 happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
  },
  "data-size-converter": {
    en: `A free online conversion calculator that convert between bytes, kilobytes, megabytes, gigabytes, terabytes and more. compare file sizes, storage capacity, and data transfer amounts. Get accurate results instantly without any software installation.

Unit conversions are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

Key features include support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

Enter your value in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

All calculations happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
    zh: `Data Size Converter 是一款免费在线工具，Convert between bytes, kilobytes, megabytes, gigabytes, terabytes and more. Compare file sizes, storage capacity, and data transfer amounts.。

单位换算 are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

主要特点包括 support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

输入您的数值 in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

所有计算 happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
  },
  "speed-converter": {
    en: `A free online conversion calculator that convert speed between km/h, mph, knots, m/s, and mach. useful for driving, aviation, marine navigation, and physics calculations. Get accurate results instantly without any software installation.

Unit conversions are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

Key features include support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

Enter your value in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

All calculations happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
    zh: `Speed Converter 是一款免费在线工具，Convert speed between km/h, mph, knots, m/s, and mach. Useful for driving, aviation, marine navigation, and physics calculations.。

单位换算 are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

主要特点包括 support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

输入您的数值 in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

所有计算 happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
  },
  "area-converter": {
    en: `A free online conversion calculator that convert between square meters, acres, hectares, sq ft. Get accurate results instantly without any software installation.

Unit conversions are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

Key features include support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

Enter your value in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

All calculations happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
    zh: `Area Converter 是一款免费在线工具，Convert between square meters, acres, hectares, sq ft。

单位换算 are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

主要特点包括 support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

输入您的数值 in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

所有计算 happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
  },
  "image-to-base64": {
    en: `A free browser-based image tool that convert images to base64 data uri for inline embedding. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `Image to Base64 是一款免费在线工具，Convert images to Base64 data URI for inline embedding。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "random-number-generator": {
    en: `A free online utility tool that generate random numbers within a custom range. perfect for lotteries, giveaways, statistical sampling, and game development. Simple, fast, and completely private — just open and use.

Everyday tasks like generating passwords, creating QR codes, rolling dice, or checking BMI shouldn't require installing software or creating accounts. This tool provides a quick, reliable solution that works instantly in your browser. It's perfect for one-off tasks where you need a fast result without the overhead of specialized software.

Key features include instant results with no loading time, a clean and intuitive interface that requires no learning curve, customizable options for fine-tuning results, one-click copy or download for output, and responsive design that works on any device. The tool is designed to do one thing well and do it fast.

Open the tool, configure your options if needed (such as length, format, or range), and click the action button. Results appear immediately. Copy the output to your clipboard, download it, or generate a new result with different settings. The entire workflow takes seconds.

All processing happens locally in your browser. No data is uploaded, stored, or tracked. Your inputs and results are completely private. No account required, no cookies, no analytics beyond basic page views.`,
    zh: `Random Number Generator 是一款免费在线工具，Generate random numbers within a custom range. Perfect for lotteries, giveaways, statistical sampling, and game development.。

日常任务 like generating passwords, creating QR codes, rolling dice, or checking BMI shouldn't require installing software or creating accounts. This tool provides a quick, reliable solution that works instantly in your browser. It's perfect for one-off tasks where you need a fast result without the overhead of specialized software.

主要特点包括 instant results with no loading time, a clean and intuitive interface that requires no learning curve, customizable options for fine-tuning results, one-click copy or download for output, and responsive design that works on any device. The tool is designed to do one thing well and do it fast.

打开工具, configure your options if needed (such as length, format, or range), and click the action button. Results appear immediately. Copy the output to your clipboard, download it, or generate a new result with different settings. The entire workflow takes seconds.

所有处理都在浏览器本地完成 in your browser. No data is uploaded, stored, or tracked. Your inputs and results are completely private. No account required, no cookies, no analytics beyond basic page views.`,
  },
  "image-to-pdf": {
    en: `A free browser-based image tool that convert images (jpg, png) into a single pdf document. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `Image to PDF 是一款免费在线工具，Convert images (JPG, PNG) into a single PDF document。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "pdf-splitter": {
    en: `A free browser-based image tool that split pdf by page ranges or extract specific pages. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `PDF Splitter 是一款免费在线工具，Split PDF by page ranges or extract specific pages。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "pdf-rotator": {
    en: `A free online PDF tool that rotate pdf pages by 90, 180, or 270 degrees. fix scanned documents, correct page orientation, and rearrange your pdf layouts. Work with your PDF files directly in the browser — no uploads, no waiting, no risk.

PDF manipulation traditionally requires expensive software like Adobe Acrobat or risky online services that upload your sensitive documents. This tool lets you merge, split, rotate, or convert PDFs entirely in your browser using pdf-lib. Your financial statements, legal documents, and personal files never leave your device, giving you complete control over your privacy.

Key features include drag-and-drop file upload, visual page preview for easy selection, drag-and-drop page reordering, precise page range selection for splitting, and support for encrypted PDFs. The tool handles documents of any size (within browser memory limits) and produces clean, standards-compliant output that opens correctly in any PDF reader.

Upload your PDF files by dragging them onto the tool or using the file picker. For merging, add multiple files and arrange them in your desired order. For splitting, select the page ranges you want to extract. For rotating, choose the rotation angle. Preview the result, then click the action button to process and download the output file.

All PDF processing happens locally in your browser using pdf-lib (a pure JavaScript library). Your documents are never uploaded to any server. This is critical for sensitive documents like contracts, tax returns, medical records, and financial statements. No account required, no file storage, no risk of data exposure.`,
    zh: `PDF Rotator 是一款免费在线工具，Rotate PDF pages by 90, 180, or 270 degrees. Fix scanned documents, correct page orientation, and rearrange your PDF layouts.。

PDF 处理 traditionally requires expensive software like Adobe Acrobat or risky online services that upload your sensitive documents. This tool lets you merge, split, rotate, or convert PDFs entirely in your browser using pdf-lib. Your financial statements, legal documents, and personal files never leave your device, giving you complete control over your privacy.

主要特点包括 drag-and-drop file upload, visual page preview for easy selection, drag-and-drop page reordering, precise page range selection for splitting, and support for encrypted PDFs. The tool handles documents of any size (within browser memory limits) and produces clean, standards-compliant output that opens correctly in any PDF reader.

上传您的 PDF files by dragging them onto the tool or using the file picker. For merging, add multiple files and arrange them in your desired order. For splitting, select the page ranges you want to extract. For rotating, choose the rotation angle. Preview the result, then click the action button to process and download the output file.

所有 PDF 处理 happens locally in your browser using pdf-lib (a pure JavaScript library). Your documents are never uploaded to any server. This is critical for sensitive documents like contracts, tax returns, medical records, and financial statements. No account required, no file storage, no risk of data exposure.`,
  },
  "pdf-page-remover": {
    en: `A free online PDF tool that remove unwanted pages from your pdf documents quickly. extract specific pages, delete blank sheets, and trim bulky files. Work with your PDF files directly in the browser — no uploads, no waiting, no risk.

PDF manipulation traditionally requires expensive software like Adobe Acrobat or risky online services that upload your sensitive documents. This tool lets you merge, split, rotate, or convert PDFs entirely in your browser using pdf-lib. Your financial statements, legal documents, and personal files never leave your device, giving you complete control over your privacy.

Key features include drag-and-drop file upload, visual page preview for easy selection, drag-and-drop page reordering, precise page range selection for splitting, and support for encrypted PDFs. The tool handles documents of any size (within browser memory limits) and produces clean, standards-compliant output that opens correctly in any PDF reader.

Upload your PDF files by dragging them onto the tool or using the file picker. For merging, add multiple files and arrange them in your desired order. For splitting, select the page ranges you want to extract. For rotating, choose the rotation angle. Preview the result, then click the action button to process and download the output file.

All PDF processing happens locally in your browser using pdf-lib (a pure JavaScript library). Your documents are never uploaded to any server. This is critical for sensitive documents like contracts, tax returns, medical records, and financial statements. No account required, no file storage, no risk of data exposure.`,
    zh: `PDF Page Remover 是一款免费在线工具，Remove unwanted pages from your PDF documents quickly. Extract specific pages, delete blank sheets, and trim bulky files.。

PDF 处理 traditionally requires expensive software like Adobe Acrobat or risky online services that upload your sensitive documents. This tool lets you merge, split, rotate, or convert PDFs entirely in your browser using pdf-lib. Your financial statements, legal documents, and personal files never leave your device, giving you complete control over your privacy.

主要特点包括 drag-and-drop file upload, visual page preview for easy selection, drag-and-drop page reordering, precise page range selection for splitting, and support for encrypted PDFs. The tool handles documents of any size (within browser memory limits) and produces clean, standards-compliant output that opens correctly in any PDF reader.

上传您的 PDF files by dragging them onto the tool or using the file picker. For merging, add multiple files and arrange them in your desired order. For splitting, select the page ranges you want to extract. For rotating, choose the rotation angle. Preview the result, then click the action button to process and download the output file.

所有 PDF 处理 happens locally in your browser using pdf-lib (a pure JavaScript library). Your documents are never uploaded to any server. This is critical for sensitive documents like contracts, tax returns, medical records, and financial statements. No account required, no file storage, no risk of data exposure.`,
  },
  "image-cropper": {
    en: `A free browser-based image tool that crop images by dragging a selection area on canvas. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `Image Cropper 是一款免费在线工具，Crop images by dragging a selection area on canvas。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "image-resizer": {
    en: `A free browser-based image tool that resize images to exact dimensions with aspect ratio lock. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `Image Resizer 是一款免费在线工具，Resize images to exact dimensions with aspect ratio lock。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "image-filters": {
    en: `A free browser-based image tool that apply grayscale, sepia, blur, brightness, and contrast filters. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `Image Filters 是一款免费在线工具，Apply grayscale, sepia, blur, brightness, and contrast filters。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "color-picker": {
    en: `A free browser-based image tool that pick colors from uploaded images or use the color selector. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `Color Picker from Image 是一款免费在线工具，Pick colors from uploaded images or use the color selector。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "gif-maker": {
    en: `A free browser-based image tool that create animated gifs from multiple images or video clips. set frame delay, resize output, and optimize for web or social media. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `GIF Maker 是一款免费在线工具，Create animated GIFs from multiple images or video clips. Set frame delay, resize output, and optimize for web or social media.。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "image-watermark": {
    en: `A free browser-based image tool that add text watermark to images with position and opacity control. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `Image Watermark 是一款免费在线工具，Add text watermark to images with position and opacity control。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "image-merge": {
    en: `A free browser-based image tool that combine multiple images into one side by side or grid. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `Image Merger 是一款免费在线工具，Combine multiple images into one side by side or grid。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "image-splitter": {
    en: `A free browser-based image tool that split a single image into multiple tiles by rows and columns. perfect for creating sprite sheets, grid layouts, and image segments. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `Image Splitter 是一款免费在线工具，Split a single image into multiple tiles by rows and columns. Perfect for creating sprite sheets, grid layouts, and image segments.。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "image-flip": {
    en: `A free browser-based image tool that flip images horizontally or vertically and rotate by 90-degree increments. mirror selfies, correct orientation, and transform photos instantly. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `Image Flip & Rotate 是一款免费在线工具，Flip images horizontally or vertically and rotate by 90-degree increments. Mirror selfies, correct orientation, and transform photos instantly.。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "image-border": {
    en: `A free browser-based image tool that add customizable borders, frames, and padding to images. choose colors, widths, corner radius, and shadow effects for polished photos. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `Image Border 是一款免费在线工具，Add customizable borders, frames, and padding to images. Choose colors, widths, corner radius, and shadow effects for polished photos.。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "meme-generator": {
    en: `A free browser-based image tool that create memes by adding top and bottom text to images. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `Meme Generator 是一款免费在线工具，Create memes by adding top and bottom text to images。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "image-to-sketch": {
    en: `A free browser-based image tool that convert photos into pencil sketch drawings and line art. apply artistic filters to create realistic hand-drawn effects from your images. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `Image to Sketch 是一款免费在线工具，Convert photos into pencil sketch drawings and line art. Apply artistic filters to create realistic hand-drawn effects from your images.。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "emoji-remover": {
    en: `A free online text processing tool that remove all emoji characters from text while keeping words. Transform, analyze, and manipulate text instantly in your browser.

Writers, developers, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

Key features include real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

All text processing happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
    zh: `Emoji Remover 是一款免费在线工具，Remove all emoji characters from text while keeping words。

写作者、开发者, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

主要特点包括 real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

所有文本处理 happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
  },
  "unicode-detector": {
    en: `A free online text processing tool that inspect unicode characters with codepoint and category info. Transform, analyze, and manipulate text instantly in your browser.

Writers, developers, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

Key features include real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

All text processing happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
    zh: `Unicode Character Detector 是一款免费在线工具，Inspect Unicode characters with codepoint and category info。

写作者、开发者, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

主要特点包括 real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

所有文本处理 happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
  },
  "caesar-cipher": {
    en: `A free online Caesar cipher tool that shifts each letter in your text by a fixed number of positions through the alphabet. Named after Julius Caesar — who used a shift of 3 to protect military correspondence — this is one of the oldest and simplest encryption methods, making it a staple of introductory cryptography courses and CTF puzzle challenges.

Set the shift key (1–25) and every letter moves that many places forward: with a shift of 3, A becomes D, HELLO becomes KHOOR. To decrypt, apply the same shift in reverse. The tool handles uppercase and lowercase separately and leaves numbers and symbols untouched. A brute-force mode cycles through all 25 possible shifts at once, displaying every candidate plaintext side by side — invaluable when you don't know the key and need to eyeball which result reads like real language.

This brute-force approach works precisely because Caesar's design is weak by modern standards: with only 25 possible keys, a human can crack it in seconds. That makes it an excellent teaching tool for understanding why stronger ciphers like AES replaced classical substitution. Use it to build escape-room clues, add hidden messages to games, teach the fundamentals of symmetric encryption, or analyze historical ciphers. Nothing leaves your browser.`,
    zh: `免费在线凯撒密码工具，将文本中每个字母按固定位移量在字母表中移动。以尤利乌斯·凯撒命名——他用位移3来加密军事信件，这是最古老的加密方式之一，也是密码学入门和CTF比赛的经典题型。设置位移密钥（1–25），每个字母即向前移动对应位数；解密时反向移动即可。暴力破解模式会同时显示全部25种可能结果，方便在没有密钥时找出可读明文。适用于密室逃脱谜题、游戏隐藏信息、密码学教学和历史密码分析。所有操作均在浏览器中完成。`,
  },
  "json-diff": {
    en: `A free online text processing tool that compare two json objects and highlight differences. Transform, analyze, and manipulate text instantly in your browser.

Writers, developers, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

Key features include real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

All text processing happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
    zh: `JSON Diff 是一款免费在线工具，Compare two JSON objects and highlight differences。

写作者、开发者, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

主要特点包括 real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

所有文本处理 happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
  },
  "http-status-codes": {
    en: `A free online reference that lists every HTTP status code defined by IANA — from the familiar 200 OK and 404 Not Found to the nuanced 418 I'm a Teapot and the HTTP/2-specific 425 Too Early. Search by number or keyword and immediately see the category, official description, and typical use scenario.

HTTP status codes are grouped into five families. 1xx codes carry provisional information, 2xx signals success, 3xx handles redirects and caching, 4xx flags client errors (bad requests, missing auth, rate limits), and 5xx indicates the server ran into trouble. Knowing these families lets you triage problems fast — a 502 Bad Gateway points upstream, while a 401 Unauthorized points at your credentials.

Developers reach for this reference daily: choosing the right code when designing a REST API (should a soft delete return 200 or 204?), diagnosing why a fetch call failed (is it CORS, a bad token, or a server crash?), or writing middleware that maps errors to appropriate responses. Each entry explains whether the code is standardized, which browsers and frameworks support it, and how it differs from similar codes — for instance, 403 Forbidden versus 401 Unauthorized, or 301 versus 302 redirects.

The entire lookup runs in your browser with an offline-capable database, so it's handy even on flaky connections.`,
    zh: `免费在线 HTTP 状态码速查表，列出 IANA 定义的所有状态码——从常见的 200 OK、404 Not Found 到 418 I'm a Teapot 和 HTTP/2 专用的 425 Too Early。按数字或关键词搜索即可查看分类、官方描述和典型使用场景。状态码分为五类：1xx 临时信息、2xx 成功、3xx 重定向与缓存、4xx 客户端错误、5xx 服务器错误。每日 API 设计、请求调试、中间件开发均可快速查阅，如 403 与 401 的区别、301 与 302 重定向差异等。内置离线数据库，弱网环境同样可用。`,
  },
  "markdown-to-html": {
    en: `A free online Markdown renderer that transforms plain-text Markdown into clean, styled HTML as you type. Write headings, bold and italic emphasis, links, images, code blocks, tables, task lists, and blockquotes — then grab the generated HTML for your blog, documentation site, email template, or CMS.

Markdown was created by John Gruber in 2004 as a lightweight alternative to hand-writing HTML tags. It powers README files on GitHub, posts on Reddit and Stack Overflow, documentation in nearly every open-source project, and notes in apps like Obsidian and Notion. If you write technical content, you already use Markdown daily.

This tool supports the full CommonMark specification plus popular extensions: fenced code blocks with syntax highlighting, strikethrough text, auto-linked URLs, and footnotes. The split-pane layout shows your raw Markdown on the left and the rendered preview on the right, updating with every keystroke. Toggle the preview to full width when you want to see exactly how content will look on a published page, or copy the raw HTML output — complete with semantic tags — to paste into a WordPress custom HTML block, a static-site generator template, or an HTML email.

Writers use it to draft newsletter issues, developers to preview README changes before committing, and teams to review documentation drafts collaboratively.`,
    zh: `免费在线 Markdown 转 HTML 工具，输入即实时渲染。支持标题、加粗斜体、链接、图片、代码块、表格、任务列表、引用等全部 CommonMark 语法及常用扩展（围栏代码块语法高亮、删除线、自动链接、脚注）。左右分栏布局，左侧编辑原始 Markdown，右侧实时预览渲染效果。可切换全宽预览查看最终排版，也可一键复制带语义化标签的 HTML 代码，粘贴到 WordPress 自定义 HTML 块、静态网站模板或邮件模板中。适合撰写技术文档、README 预览、博客内容和邮件简报。`,
  },
  "timezone-converter": {
    en: `A free online conversion calculator that convert time between different world time zones instantly. schedule meetings across time zones and compare clocks worldwide. Get accurate results instantly without any software installation.

Unit conversions are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

Key features include support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

Enter your value in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

All calculations happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
    zh: `Time Zone Converter 是一款免费在线工具，Convert time between different world time zones instantly. Schedule meetings across time zones and compare clocks worldwide.。

单位换算 are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

主要特点包括 support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

输入您的数值 in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

所有计算 happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
  },
  "binary-to-text": {
    en: `A free online text processing tool that convert binary code to text and text back to binary. Transform, analyze, and manipulate text instantly in your browser.

Writers, developers, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

Key features include real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

All text processing happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
    zh: `Binary to Text 是一款免费在线工具，Convert binary code to text and text back to binary。

写作者、开发者, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

主要特点包括 real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

所有文本处理 happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
  },
  "image-invert": {
    en: `A free browser-based image tool that invert or negate colors in any image instantly. create negative effects, x-ray looks, and artistic color reversals with one click. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `Image Invert 是一款免费在线工具，Invert or negate colors in any image instantly. Create negative effects, X-ray looks, and artistic color reversals with one click.。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "image-collage": {
    en: `A free browser-based image tool that combine multiple photos into a beautiful collage grid. choose layouts, spacing, background colors, and export in high resolution. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `Photo Collage Maker 是一款免费在线工具，Combine multiple photos into a beautiful collage grid. Choose layouts, spacing, background colors, and export in high resolution.。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "css-gradient": {
    en: `A free online CSS gradient generator that lets you build linear, radial, and conic gradients through a visual editor — then exports ready-to-paste CSS for your stylesheets. Drag color stops along the gradient bar, adjust the angle in degrees, and fine-tune opacity and blending to produce the exact effect you want.

Gradients add depth and dimension that flat colors can't match. A subtle 90-degree linear gradient from #667eea to #764ba2 can give a hero section a premium feel; a radial gradient centered on the upper-left creates a spotlight effect on a card or button. Conic gradients, newer and less widely used, are perfect for pie charts, color wheels, and angular background patterns.

The editor supports multi-stop gradients with up to a dozen color points, each individually positionable. Pick colors using the native browser picker, paste hex values directly, or sample from a curated palette. The angle dial snaps to common increments (0°, 45°, 90°, 135°, 180°) but accepts any value. Repeating gradients are supported for striped and textured backgrounds. The generated code includes standard vendor prefixes so it works across Chrome, Firefox, Safari, and Edge.

Designers use it to prototype hero backgrounds, button hover states, loading spinners, and decorative section dividers before committing the CSS to production.`,
    zh: `免费在线 CSS 渐变生成器，通过可视化编辑器构建线性、径向和锥形渐变，并导出可直接粘贴的 CSS 代码。拖动色标、调整角度、微调透明度即可生成所需效果。渐变能为平面色彩增添层次感——从 #667eea 到 #764ba2 的线性渐变让英雄区域更有质感，径向渐变模拟聚光灯效果，锥形渐变适合饼图和色轮。支持多达十余个色标的复杂渐变，可输入十六进制色值、使用拾色器或从预设调色板选取。角度可吸附到 0°/45°/90°/135°/180°，也支持任意值。生成的代码含浏览器前缀，兼容 Chrome、Firefox、Safari、Edge。适合制作背景、按钮悬停态、加载动画和装饰分隔线。`,
  },
  "css-shadow": {
    en: `A free online CSS box-shadow generator that lets you compose layered shadows with full visual control — then exports the exact CSS string for your stylesheet. Adjust horizontal and vertical offset, blur radius, spread radius, shadow color (with alpha), and toggle between outer drop shadows and inner insets.

Box shadows are one of the most versatile tools in CSS for creating depth, elevation, and visual hierarchy. A soft, low-offset shadow gives a card the feeling of floating above the page — the kind of effect Material Design popularized. A sharp, zero-blur shadow creates a retro, sticker-like outline. Inset shadows simulate pressed buttons and inset form fields, while multiple stacked shadows at increasing blur radii produce smooth, realistic elevation used by modern component libraries like Radix and Shadcn.

This editor goes beyond a single shadow: stack as many layers as you need, reorder them with drag-and-drop, and fine-tune each independently. The live preview updates pixel-by-pixel as you drag sliders or type values. Toggle between light and dark background modes to see how your shadow reads on different surfaces. Color supports hex, rgba, and hsla formats with an alpha slider for translucency.

Copy the generated box-shadow property, vendor-ready, into Tailwind arbitrary values, CSS modules, or inline styles.`,
    zh: `免费在线 CSS box-shadow 生成器，可视化构建多层阴影并导出精确的 CSS 代码。可调节水平偏移、垂直偏移、模糊半径、扩展半径、阴影颜色（含透明度），并切换外阴影与内阴影。盒阴影是 CSS 中营造层次感和视觉层级的核心手段：低偏移柔阴影让卡片有悬浮感（Material Design 风格），零模糊硬阴影打造复古贴纸轮廓，内阴影模拟按钮按下效果。支持多层叠加、拖拽排序、逐层独立调整，实时预览随滑动即时更新。可切换明暗背景查看效果。颜色支持 hex、rgba、hsla 格式。生成的代码可直接粘贴到 Tailwind 自定义值、CSS 模块或内联样式中。`,
  },
  "json-to-typescript": {
    en: `A free online converter that takes any JSON object — from a raw API response, a config file, or a database row — and generates typed TypeScript interfaces and types for it. Paste JSON on the left, get ready-to-use type definitions on the right.

When you're building a TypeScript app, hand-writing interfaces for large or unfamiliar payloads is tedious and error-prone. This tool reads the structure of your JSON and infers the shape: objects become interfaces, arrays get typed by their first element, nullables are marked optional, and deeply nested data produces properly named, hierarchical types. It handles common scenarios like union types (a field that can be string or number), arrays of mixed types, and optional properties inferred from missing keys.

Typical workflow: copy a sample response from Postman or your browser's network tab, paste it in, and immediately get interfaces you can paste into a .ts file. Use the generated types with fetch wrappers, React props, Zod schemas, or API client generators. The tool also offers naming options — choose interface vs type alias, configure root type naming, and toggle between readonly and mutable properties.

Everything runs client-side, so even proprietary or internal API shapes never leave your machine. It's a daily time-saver for frontend and full-stack developers working in typed codebases.`,
    zh: `免费在线 JSON 转 TypeScript 工具，将任意 JSON 对象（API 响应、配置文件、数据库记录）自动生成类型定义。粘贴 JSON 即可获得可用的接口和类型。工具会分析 JSON 结构并推断形状：对象转为 interface，数组按首个元素推断类型，可空字段标记为可选，深层嵌套数据生成带命名的层级类型。支持联合类型、混合数组和可选属性推断。典型用法：从 Postman 或浏览器网络面板复制示例响应，粘贴后直接获得可放入 .ts 文件的接口定义，配合 fetch 封装、React props、Zod schema 或 API 客户端使用。可选命名方式（interface/type alias）、根类型命名、readonly/可变切换。全部在客户端运行，内部 API 结构不会外泄。`,
  },
  "html-to-jsx": {
    en: `A free online converter that transforms standard HTML markup into valid JSX — the JavaScript XML syntax used by React. Paste HTML from a design mockup, a Bootstrap snippet, or an email template and get JSX you can drop straight into a React component's return statement.

JSX looks like HTML but follows stricter rules. This tool handles the conversions that trip developers up: class attributes become className, for attributes become htmlFor, inline style strings are converted to style objects with camelCased properties (font-size becomes fontSize), self-closing tags like <img> and <br> get the required trailing slash, and HTML comments are converted to JSX expression-block comments. Boolean and numeric attributes are quoted or wrapped as needed.

The converter also handles less obvious cases: reserved words like class and for, data-* and aria-* attributes (which pass through unchanged), SVG elements that need namespace adjustments, and HTML entities that need proper escaping in JSX text. It produces clean, formatted output that respects indentation and can be further prettified with Prettier.

Common scenarios: migrating an existing HTML site to React piece by piece, converting a Tailwind HTML prototype into React components, turning a CodePen HTML demo into a Storybook story, or cleaning up copy-pasted HTML from design tools like Figma's dev-mode export.`,
    zh: `免费在线 HTML 转 JSX 工具，将标准 HTML 标记转换为 React 使用的 JSX 语法。粘贴设计稿、Bootstrap 片段或邮件模板的 HTML，即可获得可直接放入 React 组件 return 语句的 JSX 代码。JSX 看似 HTML 但规则更严格，本工具自动处理常见转换陷阱：class 变 className、for 变 htmlFor、行内样式字符串转为驼峰命名属性对象（font-size 变 fontSize）、自闭合标签（img/br）补全斜杠、HTML 注释转为 JSX 表达式注释。还处理保留字、data-*/aria-* 属性、SVG 命名空间和 HTML 实体转义。适用场景：HTML 网站迁移至 React、Tailwind HTML 原型转组件、CodePen 演示转 Storybook 故事、Figma 开发模式导出 HTML 清理。`,
  },
  "color-palette": {
    en: `A free online utility tool that generate color schemes: monochromatic, complementary, and more. Simple, fast, and completely private — just open and use.

Everyday tasks like generating passwords, creating QR codes, rolling dice, or checking BMI shouldn't require installing software or creating accounts. This tool provides a quick, reliable solution that works instantly in your browser. It's perfect for one-off tasks where you need a fast result without the overhead of specialized software.

Key features include instant results with no loading time, a clean and intuitive interface that requires no learning curve, customizable options for fine-tuning results, one-click copy or download for output, and responsive design that works on any device. The tool is designed to do one thing well and do it fast.

Open the tool, configure your options if needed (such as length, format, or range), and click the action button. Results appear immediately. Copy the output to your clipboard, download it, or generate a new result with different settings. The entire workflow takes seconds.

All processing happens locally in your browser. No data is uploaded, stored, or tracked. Your inputs and results are completely private. No account required, no cookies, no analytics beyond basic page views.`,
    zh: `Color Palette Generator 是一款免费在线工具，Generate color schemes: monochromatic, complementary, and more。

日常任务 like generating passwords, creating QR codes, rolling dice, or checking BMI shouldn't require installing software or creating accounts. This tool provides a quick, reliable solution that works instantly in your browser. It's perfect for one-off tasks where you need a fast result without the overhead of specialized software.

主要特点包括 instant results with no loading time, a clean and intuitive interface that requires no learning curve, customizable options for fine-tuning results, one-click copy or download for output, and responsive design that works on any device. The tool is designed to do one thing well and do it fast.

打开工具, configure your options if needed (such as length, format, or range), and click the action button. Results appear immediately. Copy the output to your clipboard, download it, or generate a new result with different settings. The entire workflow takes seconds.

所有处理都在浏览器本地完成 in your browser. No data is uploaded, stored, or tracked. Your inputs and results are completely private. No account required, no cookies, no analytics beyond basic page views.`,
  },
  "roman-numeral": {
    en: `A free online conversion calculator that convert between roman numerals and arabic numbers instantly. works with values from 1 to 3999, including common numeral combinations. Get accurate results instantly without any software installation.

Unit conversions are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

Key features include support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

Enter your value in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

All calculations happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
    zh: `Roman Numeral Converter 是一款免费在线工具，Convert between Roman numerals and Arabic numbers instantly. Works with values from 1 to 3999, including common numeral combinations.。

单位换算 are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

主要特点包括 support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

输入您的数值 in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

所有计算 happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
  },
  "percentage-calculator": {
    en: `A free online conversion calculator that calculate percentages, what if, increase/decrease easily. Get accurate results instantly without any software installation.

Unit conversions are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

Key features include support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

Enter your value in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

All calculations happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
    zh: `Percentage Calculator 是一款免费在线工具，Calculate percentages, what if, increase/decrease easily。

单位换算 are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

主要特点包括 support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

输入您的数值 in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

所有计算 happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
  },
  "tip-calculator": {
    en: `A free online tip calculator that splits restaurant bills, service charges, and group expenses fairly. Enter the subtotal, choose a tip percentage, set the number of diners, and instantly see the per-person share — including the tip breakdown and grand total.

Tipping customs vary wildly around the world. In the United States, 15–20% is standard for sit-down service and tipping is effectively mandatory, as servers rely on it for wages. In Japan, tipping is uncommon and can even cause confusion. In much of Europe, a service charge is already included on the bill, so an extra 5–10% is a courtesy rounding-up rather than an expectation. This tool lets you pick any percentage from 0 to 30 and beyond, so it works wherever you are.

Beyond restaurants, use it to split shared Uber rides, divvy up a group takeout order, calculate service charges for hair salons and spa appointments, or settle a bar tab among friends. Adjust the tip independently of the split — for example, tip 18% but split only the food cost among five people while one person covers drinks. Round up to avoid awkward coin splitting.

The calculator handles edge cases like tax-inclusive vs exclusive totals, uneven group sizes, and custom tip amounts entered as a flat dollar figure rather than a percentage.`,
    zh: `免费在线小费计算器，公平分摊餐费、服务费和团体开支。输入小计金额、选择小费比例、设置用餐人数，即可即时查看每人应付金额（含小费明细和总计）。全球各地小费习俗差异很大：美国堂食标准为 15–20%，日本基本不付小费，欧洲多数已含服务费额外付 5–10% 即可。工具支持 0–30% 及以上任意比例。除餐厅外，还可用于拼车费用分摊、团体外卖、美发美容服务费、朋友间酒水结账等场景。小费比例可独立于分摊人数调整，也支持按固定金额而非百分比输入小费。`,
  },
  "age-calculator": {
    en: `A free online conversion calculator that calculate exact age in years, months, weeks, and days. find your age on any future date or count down to your next birthday. Get accurate results instantly without any software installation.

Unit conversions are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

Key features include support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

Enter your value in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

All calculations happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
    zh: `Age Calculator 是一款免费在线工具，Calculate exact age in years, months, weeks, and days. Find your age on any future date or count down to your next birthday.。

单位换算 are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

主要特点包括 support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

输入您的数值 in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

所有计算 happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
  },
  "bmi-calculator": {
    en: `A free online conversion calculator that calculate body mass index and check your health category. Get accurate results instantly without any software installation.

Unit conversions are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

Key features include support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

Enter your value in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

All calculations happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
    zh: `BMI Calculator 是一款免费在线工具，Calculate Body Mass Index and check your health category。

单位换算 are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

主要特点包括 support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

输入您的数值 in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

所有计算 happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
  },
  "countdown-timer": {
    en: `A free online utility tool that set a countdown to any date and time with days, hours, minutes, and seconds. perfect for events, deadlines, and special occasions. Simple, fast, and completely private — just open and use.

Everyday tasks like generating passwords, creating QR codes, rolling dice, or checking BMI shouldn't require installing software or creating accounts. This tool provides a quick, reliable solution that works instantly in your browser. It's perfect for one-off tasks where you need a fast result without the overhead of specialized software.

Key features include instant results with no loading time, a clean and intuitive interface that requires no learning curve, customizable options for fine-tuning results, one-click copy or download for output, and responsive design that works on any device. The tool is designed to do one thing well and do it fast.

Open the tool, configure your options if needed (such as length, format, or range), and click the action button. Results appear immediately. Copy the output to your clipboard, download it, or generate a new result with different settings. The entire workflow takes seconds.

All processing happens locally in your browser. No data is uploaded, stored, or tracked. Your inputs and results are completely private. No account required, no cookies, no analytics beyond basic page views.`,
    zh: `Countdown Timer 是一款免费在线工具，Set a countdown to any date and time with days, hours, minutes, and seconds. Perfect for events, deadlines, and special occasions.。

日常任务 like generating passwords, creating QR codes, rolling dice, or checking BMI shouldn't require installing software or creating accounts. This tool provides a quick, reliable solution that works instantly in your browser. It's perfect for one-off tasks where you need a fast result without the overhead of specialized software.

主要特点包括 instant results with no loading time, a clean and intuitive interface that requires no learning curve, customizable options for fine-tuning results, one-click copy or download for output, and responsive design that works on any device. The tool is designed to do one thing well and do it fast.

打开工具, configure your options if needed (such as length, format, or range), and click the action button. Results appear immediately. Copy the output to your clipboard, download it, or generate a new result with different settings. The entire workflow takes seconds.

所有处理都在浏览器本地完成 in your browser. No data is uploaded, stored, or tracked. Your inputs and results are completely private. No account required, no cookies, no analytics beyond basic page views.`,
  },
  "dice-roller": {
    en: `A free online utility tool that roll virtual dice with 4, 6, 8, 10, 12, and 20 sides. roll multiple dice at once for tabletop games, rpgs, and classrooms. Simple, fast, and completely private — just open and use.

Everyday tasks like generating passwords, creating QR codes, rolling dice, or checking BMI shouldn't require installing software or creating accounts. This tool provides a quick, reliable solution that works instantly in your browser. It's perfect for one-off tasks where you need a fast result without the overhead of specialized software.

Key features include instant results with no loading time, a clean and intuitive interface that requires no learning curve, customizable options for fine-tuning results, one-click copy or download for output, and responsive design that works on any device. The tool is designed to do one thing well and do it fast.

Open the tool, configure your options if needed (such as length, format, or range), and click the action button. Results appear immediately. Copy the output to your clipboard, download it, or generate a new result with different settings. The entire workflow takes seconds.

All processing happens locally in your browser. No data is uploaded, stored, or tracked. Your inputs and results are completely private. No account required, no cookies, no analytics beyond basic page views.`,
    zh: `Dice Roller 是一款免费在线工具，Roll virtual dice with 4, 6, 8, 10, 12, and 20 sides. Roll multiple dice at once for tabletop games, RPGs, and classrooms.。

日常任务 like generating passwords, creating QR codes, rolling dice, or checking BMI shouldn't require installing software or creating accounts. This tool provides a quick, reliable solution that works instantly in your browser. It's perfect for one-off tasks where you need a fast result without the overhead of specialized software.

主要特点包括 instant results with no loading time, a clean and intuitive interface that requires no learning curve, customizable options for fine-tuning results, one-click copy or download for output, and responsive design that works on any device. The tool is designed to do one thing well and do it fast.

打开工具, configure your options if needed (such as length, format, or range), and click the action button. Results appear immediately. Copy the output to your clipboard, download it, or generate a new result with different settings. The entire workflow takes seconds.

所有处理都在浏览器本地完成 in your browser. No data is uploaded, stored, or tracked. Your inputs and results are completely private. No account required, no cookies, no analytics beyond basic page views.`,
  },
  "decision-maker": {
    en: `A free online utility tool that let fate decide — pick a random option from your list. Simple, fast, and completely private — just open and use.

Everyday tasks like generating passwords, creating QR codes, rolling dice, or checking BMI shouldn't require installing software or creating accounts. This tool provides a quick, reliable solution that works instantly in your browser. It's perfect for one-off tasks where you need a fast result without the overhead of specialized software.

Key features include instant results with no loading time, a clean and intuitive interface that requires no learning curve, customizable options for fine-tuning results, one-click copy or download for output, and responsive design that works on any device. The tool is designed to do one thing well and do it fast.

Open the tool, configure your options if needed (such as length, format, or range), and click the action button. Results appear immediately. Copy the output to your clipboard, download it, or generate a new result with different settings. The entire workflow takes seconds.

All processing happens locally in your browser. No data is uploaded, stored, or tracked. Your inputs and results are completely private. No account required, no cookies, no analytics beyond basic page views.`,
    zh: `Decision Maker 是一款免费在线工具，Let fate decide — pick a random option from your list。

日常任务 like generating passwords, creating QR codes, rolling dice, or checking BMI shouldn't require installing software or creating accounts. This tool provides a quick, reliable solution that works instantly in your browser. It's perfect for one-off tasks where you need a fast result without the overhead of specialized software.

主要特点包括 instant results with no loading time, a clean and intuitive interface that requires no learning curve, customizable options for fine-tuning results, one-click copy or download for output, and responsive design that works on any device. The tool is designed to do one thing well and do it fast.

打开工具, configure your options if needed (such as length, format, or range), and click the action button. Results appear immediately. Copy the output to your clipboard, download it, or generate a new result with different settings. The entire workflow takes seconds.

所有处理都在浏览器本地完成 in your browser. No data is uploaded, stored, or tracked. Your inputs and results are completely private. No account required, no cookies, no analytics beyond basic page views.`,
  },
  "audio-cutter": {
    en: `A free browser-based audio tool that trim and cut audio files with an interactive waveform preview. extract clips from mp3, wav, and other formats right in your browser. Process your music and sound files without uploading to any server.

Audio editing traditionally requires desktop software like Audacity or Adobe Audition, which are complex and resource-heavy for simple tasks. This tool brings essential audio processing to your browser, letting you trim, merge, or convert audio files instantly. It's perfect for quick edits, format conversions, or preparing audio for projects.

Key features include visual waveform display for precise editing, drag-and-drop file upload, support for multiple audio formats (MP3, WAV, OGG, M4A), real-time preview of edits, and high-quality output with configurable bitrate and sample rate options.

Upload your audio file by dragging it onto the tool or using the file picker. Use the waveform display to select the portion you want to keep (for trimming) or arrange multiple files (for merging). Preview your edits, adjust settings if needed, and click the export button to download the processed audio.

All audio processing happens locally in your browser using the Web Audio API. Your music and sound files are never uploaded to any server. This ensures complete privacy for personal recordings, music projects, and sensitive audio content. No account required.`,
    zh: `Audio Cutter 是一款免费在线工具，Trim and cut audio files with an interactive waveform preview. Extract clips from MP3, WAV, and other formats right in your browser.。

音频编辑 traditionally requires desktop software like Audacity or Adobe Audition, which are complex and resource-heavy for simple tasks. This tool brings essential audio processing to your browser, letting you trim, merge, or convert audio files instantly. It's perfect for quick edits, format conversions, or preparing audio for projects.

主要特点包括 visual waveform display for precise editing, drag-and-drop file upload, support for multiple audio formats (MP3, WAV, OGG, M4A), real-time preview of edits, and high-quality output with configurable bitrate and sample rate options.

上传您的 audio file by dragging it onto the tool or using the file picker. Use the waveform display to select the portion you want to keep (for trimming) or arrange multiple files (for merging). Preview your edits, adjust settings if needed, and click the export button to download the processed audio.

所有音频处理 happens locally in your browser using the Web Audio API. Your music and sound files are never uploaded to any server. This ensures complete privacy for personal recordings, music projects, and sensitive audio content. No account required.`,
  },
  "audio-merger": {
    en: `A free browser-based image tool that combine multiple audio files into one seamless track. merge songs, recordings, or voice clips in any order with crossfade support. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `Audio Merger 是一款免费在线工具，Combine multiple audio files into one seamless track. Merge songs, recordings, or voice clips in any order with crossfade support.。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "audio-converter": {
    en: `A free online conversion calculator that convert audio between wav formats and sample rates. Get accurate results instantly without any software installation.

Unit conversions are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

Key features include support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

Enter your value in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

All calculations happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
    zh: `Audio Converter 是一款免费在线工具，Convert audio between WAV formats and sample rates。

单位换算 are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

主要特点包括 support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

输入您的数值 in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

所有计算 happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
  },
  "dns-lookup": {
    en: `A free online network lookup tool that query A, AAAA, MX, NS, TXT, CAA, and SOA records for any domain. Query domain information and DNS records instantly from your browser.

Network administrators, web developers, and IT professionals need to look up DNS records, check domain registrations, and diagnose network issues regularly. Command-line tools like \`dig\` and \`whois\` require terminal access and technical knowledge. This tool provides the same information through an intuitive web interface, accessible from any device.

Key features include support for all major DNS record types (A, AAAA, MX, NS, TXT, CNAME, SOA), instant results with clear formatting, domain availability and registration information, WHOIS data with privacy protection details, and a clean interface that makes complex DNS data easy to understand.

Enter the domain name in the input field, select the DNS record type you want to query (or choose 'All' for a comprehensive view), and click the lookup button. Results appear instantly with formatted DNS records, WHOIS information, and any available registration details.

DNS queries are performed through public DNS resolvers — no personal information is collected or stored. The tool does not track your lookups or store query history. Your network diagnostics remain completely private.`,
    zh: `DNS Lookup 是一款免费在线工具，查询任意域名的 A、AAAA、MX、NS、TXT、CAA 和 SOA 记录。

网络管理员, web developers, and IT professionals need to look up DNS records, check domain registrations, and diagnose network issues regularly. Command-line tools like \`dig\` and \`whois\` require terminal access and technical knowledge. This tool provides the same information through an intuitive web interface, accessible from any device.

主要特点包括 support for all major DNS record types (A, AAAA, MX, NS, TXT, CNAME, SOA), instant results with clear formatting, domain availability and registration information, WHOIS data with privacy protection details, and a clean interface that makes complex DNS data easy to understand.

输入域名 name in the input field, select the DNS record type you want to query (or choose 'All' for a comprehensive view), and click the lookup button. Results appear instantly with formatted DNS records, WHOIS information, and any available registration details.

DNS 查询 are performed through public DNS resolvers — no personal information is collected or stored. The tool does not track your lookups or store query history. Your network diagnostics remain completely private.`,
  },
  "whois-lookup": {
    en: `A free online network lookup tool that look up domain registration and ownership information. Query domain information and DNS records instantly from your browser.

Network administrators, web developers, and IT professionals need to look up DNS records, check domain registrations, and diagnose network issues regularly. Command-line tools like \`dig\` and \`whois\` require terminal access and technical knowledge. This tool provides the same information through an intuitive web interface, accessible from any device.

Key features include support for all major DNS record types (A, AAAA, MX, NS, TXT, CNAME, SOA), instant results with clear formatting, domain availability and registration information, WHOIS data with privacy protection details, and a clean interface that makes complex DNS data easy to understand.

Enter the domain name in the input field, select the DNS record type you want to query (or choose 'All' for a comprehensive view), and click the lookup button. Results appear instantly with formatted DNS records, WHOIS information, and any available registration details.

DNS queries are performed through public DNS resolvers — no personal information is collected or stored. The tool does not track your lookups or store query history. Your network diagnostics remain completely private.`,
    zh: `WHOIS Lookup 是一款免费在线工具，Look up domain registration and ownership information。

网络管理员, web developers, and IT professionals need to look up DNS records, check domain registrations, and diagnose network issues regularly. Command-line tools like \`dig\` and \`whois\` require terminal access and technical knowledge. This tool provides the same information through an intuitive web interface, accessible from any device.

主要特点包括 support for all major DNS record types (A, AAAA, MX, NS, TXT, CNAME, SOA), instant results with clear formatting, domain availability and registration information, WHOIS data with privacy protection details, and a clean interface that makes complex DNS data easy to understand.

输入域名 name in the input field, select the DNS record type you want to query (or choose 'All' for a comprehensive view), and click the lookup button. Results appear instantly with formatted DNS records, WHOIS information, and any available registration details.

DNS 查询 are performed through public DNS resolvers — no personal information is collected or stored. The tool does not track your lookups or store query history. Your network diagnostics remain completely private.`,
  },
  "svg-to-png": {
    en: `A free online SVG to PNG converter that rasterizes vector graphics into pixel-based PNG images — right in your browser, with no upload step. Paste raw SVG markup or drop in an .svg file, set the target width and height in pixels, pick a background color (transparent, white, or custom), and download a crisp PNG at whatever resolution you need.

SVG files are resolution-independent and tiny in file size, which makes them ideal for logos, icons, and illustrations on the web. But many contexts still demand a raster PNG: app store screenshots, Open Graph preview images for social sharing, email signatures (where SVG support is spotty), favicon generation, printable documents, and legacy systems that only accept raster formats.

This tool gives you control over the rasterization. Scale up a 24px icon to 512px for a high-resolution app icon without quality loss — something impossible with raster-to-raster upscaling. Export with a transparent background for overlaying on colored surfaces, or bake in a solid background for email and document use. The converter respects SVG features like gradients, filters, and embedded fonts, rendering them faithfully via the browser's native SVG engine.

Designers use it to generate favicon sets, produce social preview images from vector source, and batch-export icon variants at multiple sizes for app development.`,
    zh: `免费在线 SVG 转 PNG 工具，将矢量图形光栅化为像素级 PNG 图片，全部在浏览器中完成无需上传。粘贴 SVG 代码或拖入 .svg 文件，设置目标宽高（像素）、选择背景色（透明/白色/自定义），即可下载所需分辨率的 PNG。SVG 矢量图体积小且不失真，适合网页 Logo、图标和插画，但许多场景仍需 PNG：应用商店截图、社交分享预览图、邮件签名（SVG 兼容性差）、favicon 生成、打印文档等。工具可将 24px 图标放大至 512px 生成高清应用图标（矢量放大无损），支持透明背景导出或烘焙实色背景。忠实渲染渐变、滤镜和内嵌字体。适合生成 favicon 套件、社交预览图和多尺寸图标批量导出。`,
  },
  "days-between": {
    en: `A free online conversion calculator that calculate the exact number of days between two dates. Get accurate results instantly without any software installation.

Unit conversions are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

Key features include support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

Enter your value in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

All calculations happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
    zh: `Days Between Dates 是一款免费在线工具，Calculate the exact number of days between two dates。

单位换算 are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

主要特点包括 support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

输入您的数值 in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

所有计算 happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
  },
  "password-strength": {
    en: `A free online text processing tool that test how strong your password is with real-time analysis. Transform, analyze, and manipulate text instantly in your browser.

Writers, developers, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

Key features include real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

All text processing happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
    zh: `Password Strength Checker 是一款免费在线工具，Test how strong your password is with real-time analysis。

写作者、开发者, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

主要特点包括 real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

所有文本处理 happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
  },
  "barcode-generator": {
    en: `A free online utility tool that generate barcodes in Code128, EAN-13, Code39 formats and QR codes. Simple, fast, and completely private — just open and use.

Everyday tasks like generating passwords, creating QR codes, rolling dice, or checking BMI shouldn't require installing software or creating accounts. This tool provides a quick, reliable solution that works instantly in your browser. It's perfect for one-off tasks where you need a fast result without the overhead of specialized software.

Key features include instant results with no loading time, a clean and intuitive interface that requires no learning curve, customizable options for fine-tuning results, one-click copy or download for output, and responsive design that works on any device. The tool is designed to do one thing well and do it fast.

Open the tool, configure your options if needed (such as length, format, or range), and click the action button. Results appear immediately. Copy the output to your clipboard, download it, or generate a new result with different settings. The entire workflow takes seconds.

All processing happens locally in your browser. No data is uploaded, stored, or tracked. Your inputs and results are completely private. No account required, no cookies, no analytics beyond basic page views.`,
    zh: `Barcode & QR Code Generator 是一款免费在线工具，生成 Code128、EAN-13、Code39 格式条码和二维码。

日常任务 like generating passwords, creating QR codes, rolling dice, or checking BMI shouldn't require installing software or creating accounts. This tool provides a quick, reliable solution that works instantly in your browser. It's perfect for one-off tasks where you need a fast result without the overhead of specialized software.

主要特点包括 instant results with no loading time, a clean and intuitive interface that requires no learning curve, customizable options for fine-tuning results, one-click copy or download for output, and responsive design that works on any device. The tool is designed to do one thing well and do it fast.

打开工具, configure your options if needed (such as length, format, or range), and click the action button. Results appear immediately. Copy the output to your clipboard, download it, or generate a new result with different settings. The entire workflow takes seconds.

所有处理都在浏览器本地完成 in your browser. No data is uploaded, stored, or tracked. Your inputs and results are completely private. No account required, no cookies, no analytics beyond basic page views.`,
  },
  "aspect-ratio-calculator": {
    en: `A free online conversion calculator that calculate aspect ratios from dimensions or presets. Get accurate results instantly without any software installation.

Unit conversions are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

Key features include support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

Enter your value in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

All calculations happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
    zh: `Aspect Ratio Calculator 是一款免费在线工具，Calculate aspect ratios from dimensions or presets。

单位换算 are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

主要特点包括 support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

输入您的数值 in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

所有计算 happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
  },
  "qr-reader": {
    en: `A free online utility tool that decode qr codes from uploaded images instantly. scan any qr code image to reveal the embedded url, text, or contact information. Simple, fast, and completely private — just open and use.

Everyday tasks like generating passwords, creating QR codes, rolling dice, or checking BMI shouldn't require installing software or creating accounts. This tool provides a quick, reliable solution that works instantly in your browser. It's perfect for one-off tasks where you need a fast result without the overhead of specialized software.

Key features include instant results with no loading time, a clean and intuitive interface that requires no learning curve, customizable options for fine-tuning results, one-click copy or download for output, and responsive design that works on any device. The tool is designed to do one thing well and do it fast.

Open the tool, configure your options if needed (such as length, format, or range), and click the action button. Results appear immediately. Copy the output to your clipboard, download it, or generate a new result with different settings. The entire workflow takes seconds.

All processing happens locally in your browser. No data is uploaded, stored, or tracked. Your inputs and results are completely private. No account required, no cookies, no analytics beyond basic page views.`,
    zh: `QR Code Reader 是一款免费在线工具，Decode QR codes from uploaded images instantly. Scan any QR code image to reveal the embedded URL, text, or contact information.。

日常任务 like generating passwords, creating QR codes, rolling dice, or checking BMI shouldn't require installing software or creating accounts. This tool provides a quick, reliable solution that works instantly in your browser. It's perfect for one-off tasks where you need a fast result without the overhead of specialized software.

主要特点包括 instant results with no loading time, a clean and intuitive interface that requires no learning curve, customizable options for fine-tuning results, one-click copy or download for output, and responsive design that works on any device. The tool is designed to do one thing well and do it fast.

打开工具, configure your options if needed (such as length, format, or range), and click the action button. Results appear immediately. Copy the output to your clipboard, download it, or generate a new result with different settings. The entire workflow takes seconds.

所有处理都在浏览器本地完成 in your browser. No data is uploaded, stored, or tracked. Your inputs and results are completely private. No account required, no cookies, no analytics beyond basic page views.`,
  },
  "color-blindness-simulator": {
    en: `A free browser-based image tool that simulate how images look with various color blindness types. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `Color Blindness Simulator 是一款免费在线工具，Simulate how images look with various color blindness types。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "online-notepad": {
    en: `A free online text processing tool that a clean, distraction-free browser-based notepad with auto-save. write notes, code snippets, and lists that persist in your browser storage. Transform, analyze, and manipulate text instantly in your browser.

Writers, developers, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

Key features include real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

All text processing happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
    zh: `Online Notepad 是一款免费在线工具，A clean, distraction-free browser-based notepad with auto-save. Write notes, code snippets, and lists that persist in your browser storage.。

写作者、开发者, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

主要特点包括 real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

所有文本处理 happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
  },
  "text-statistics": {
    en: `A free online text processing tool that detailed text analysis: letters, vowels, unique words, and more. Transform, analyze, and manipulate text instantly in your browser.

Writers, developers, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

Key features include real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

All text processing happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
    zh: `Text Statistics 是一款免费在线工具，Detailed text analysis: letters, vowels, unique words, and more。

写作者、开发者, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

主要特点包括 real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

所有文本处理 happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
  },
};

export function getToolGuide(slug: string): ToolGuideData | undefined {
  return toolGuides[slug];
}