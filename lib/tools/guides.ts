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

Color values appear in many incompatible formats across design tools, CSS stylesheets, image editors, and print software. A designer might receive a HEX code from Figma, need the RGB equivalent for a canvas API, and require CMYK breakdowns for a print vendor — all within a single project. Switching between these representations without a unified converter means juggling multiple tools or memorizing conversion formulas.

Type a HEX, RGB, HSL, CMYK, or HSV value and all five formats update simultaneously, with a large color swatch previewing the result. The conversion handles wide-gamut values and flags out-of-sRGB-range colors.

Color conversion math — including gamut mapping and perceptual lightness calculations — runs entirely through JavaScript in your browser session. No palette data or brand colors are transmitted externally, which matters when working with pre-launch product designs under NDA.`,
    zh: `Color Converter 是一款免费在线工具，在 HEX、RGB、HSL、CMYK 和 HSV 颜色格式之间转换，带可视化选择器。

单位换算 在日常烹饪、工程、旅行、科学和生活中经常需要. 虽然手机有基础计算器，但很少能处理你需要的所有单位。 这款工具提供全面的转换支持，即时出结果，无需记忆换算系数就能轻松切换计量体系。

主要特点包括 支持数十种单位类型、即时输入即出结果、高精度计算含正确舍入、同时显示多种单位的简洁界面、一键交换输入输出单位。 工具同时支持常见和专业单位。

输入您的数值 在输入框中输入数值，从下拉菜单选择源单位，即可同时查看所有其他单位的转换值. 无需点击按钮 — 结果随输入实时更新. 使用交换按钮反转转换方向，或从全面的列表中选择不同的单位。

所有计算 全部在浏览器中使用 JavaScript. 不会向任何服务器发送数据。 你输入的数值和转换结果完全保密。 No account, no signup, 除必要功能外不使用 Cookie.`,
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

Creating strong passwords manually is tedious and error-prone — people default to memorable patterns that are trivially crackable. This generator leverages the Web Crypto API's CSPRNG to produce truly random credentials that resist brute-force and dictionary attacks, filling a gap no built-in OS tool or password manager autofill can address on demand.

Length ranges from 8 to 64 characters with granular toggles for uppercase, lowercase, digits, and symbols, plus an option to exclude ambiguous characters like l, 1, O, and 0. Each generated password is scored for entropy so you can compare strength at a glance.

Set your desired password length (8–64 characters), toggle character types (uppercase, lowercase, numbers, symbols), and click Generate. Each password is created with the Web Crypto API's cryptographically secure random number generator — copy it instantly with one click.

Password generation happens entirely in your browser. No password is ever transmitted, logged, or stored, making this safe for creating credentials for banking, email, and work accounts.`,
    zh: `Password Generator 是一款免费在线工具，使用 Web Crypto API 生成密码学安全的随机密码。

写作者、开发者, 和内容创作者经常需要处理文本 — counting words, converting case, checking diffs, or reformatting content. 桌面文本编辑器缺少这些专业功能，而在线替代方案通常需要注册或有使用限制。 这款工具提供无限、即时的文本处理，界面简洁专注。

主要特点包括 real-实时输入即处理、支持大文本输入（最大 100,000 characters), 多种输出格式和选项、一键复制到剪贴板、清晰的视觉反馈显示变更和结果. 工具正确处理 Unicode，支持任何语言的文本。

设置密码长度（8–64 位），勾选字符类型（大写、小写、数字、符号），点击生成即可。每个密码均由 Web Crypto API 的密码学安全随机数生成器产生，一键复制。

密码生成全部在浏览器本地完成，不会传输、记录或存储任何密码。适合为银行、邮箱、工作账号创建凭证。`,
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

Shrinking image file sizes used to mean firing up a dedicated optimization app and fiddling with export presets. This compressor handles that work entirely in the browser, applying smart quantization to strip redundant data while keeping the visual appearance crisp — no installs, no subscriptions.

A quality slider lets you choose the trade-off between file size and visual fidelity, with side-by-side before/after comparison so you can see exactly what compression does to your image. Batch mode processes an entire folder of photos at once — ideal for preparing web assets or meeting email attachment size limits.

Click the file picker or drop one or more photos onto the workspace, then move the quality slider to dial in the size-versus-clarity trade-off. A live before-and-after panel shows the visual difference, and the current file size updates with every adjustment so you can stop the moment you hit your target.

Every byte of compression logic runs inside your browser tab — the original photos and their slimmed-down versions never travel across the network. That matters most when you are optimizing confidential screenshots or client product images that should not leave your machine.`,
    zh: `Image Compressor 是一款免费在线工具，在保持视觉质量的同时将图片文件大小减小 50-80%，支持 JPEG、PNG 和 WebP。

图片处理 通常需要 Photoshop 等 GIMP, 对于简单任务来说既昂贵又复杂. 这款工具为浏览器带来了核心图片处理能力。 无论你需要为网站压缩图片、为社交媒体调整尺寸、转换格式还是应用滤镜，一切都能即时完成，无需安装任何软件。

主要特点包括 drag-and-拖放上传便于文件管理、应用前实时预览、支持多种图片格式（JPEG、PNG、WebP、GIF、BMP）、可调质量和尺寸设置精确控制、支持多文件批量处理. 工具保留图片元数据并提供干净、优化的输出。

上传您的 图片——拖拽到工具区域或点击上传按钮. 通过可用的控制选项（质量滑块、尺寸输入、格式选择等）调整设置。 实时预览效果，满意后点击下载按钮保存处理后的图片。 批量操作时，选择多个文件即可一次性应用相同设置。所有图片处理 全部在浏览器中使用 Canvas API and JavaScript. 你的图片永远不会上传到任何服务器，确保完全隐私。 这对于敏感照片、商业文件或个人图片尤为重要。 No account required — just open, process, and download.`,
  },
  "image-converter": {
    en: `A free browser-based image tool that convert images between jpg, png, webp, avif, gif, and bmp formats. batch convert with custom quality and dimension settings. Process your photos and graphics directly in your browser without uploading to any server.

Switching an image from one format to another — say a transparency-heavy PNG to a compact WebP — normally calls for desktop conversion software with a learning curve. This converter performs that transformation entirely in the browser, re-encoding pixel data into whichever of six supported formats you choose.

The converter supports six major formats — JPEG, PNG, WebP, AVIF, GIF, and BMP — with per-file quality and dimension overrides so each image can be tuned individually during batch conversion. Output files retain their original color profiles for accurate cross-application rendering.

Select a target format from the dropdown, optionally cap the maximum width or height, and pick a quality level for lossy outputs. Drop in a handful of files at once and each one is converted independently, with download links appearing the instant each job finishes.

Format re-encoding happens on-device using the browser's native image decoders and encoders. Your source files and the newly converted copies remain in local memory and are never transmitted to a remote endpoint.`,
    zh: `图片格式转换器 是一款免费在线工具，在图片格式之间转换 JPG, PNG, WebP, AVIF, GIF, and BMP formats. 使用自定义质量和尺寸设置进行批量转换。。

图片处理 通常需要 Photoshop 等 GIMP, 对于简单任务来说既昂贵又复杂. 这款工具为浏览器带来了核心图片处理能力。 无论你需要为网站压缩图片、为社交媒体调整尺寸、转换格式还是应用滤镜，一切都能即时完成，无需安装任何软件。

主要特点包括 drag-and-拖放上传便于文件管理、应用前实时预览、支持多种图片格式（JPEG、PNG、WebP、GIF、BMP）、可调质量和尺寸设置精确控制、支持多文件批量处理. 工具保留图片元数据并提供干净、优化的输出。

上传您的 图片——拖拽到工具区域或点击上传按钮. 通过可用的控制选项（质量滑块、尺寸输入、格式选择等）调整设置。 实时预览效果，满意后点击下载按钮保存处理后的图片。 批量操作时，选择多个文件即可一次性应用相同设置。所有图片处理 全部在浏览器中使用 Canvas API and JavaScript. 你的图片永远不会上传到任何服务器，确保完全隐私。 这对于敏感照片、商业文件或个人图片尤为重要。 No account required — just open, process, and download.`,
  },
  "pdf-merger": {
    en: `A free browser-based image tool that combine multiple PDF files into a single document with page reordering. Process your photos and graphics directly in your browser without uploading to any server.

Stitching separate PDFs into one cohesive document typically requires dedicated PDF editing software or an online service that uploads your files. This merger assembles multiple PDFs into a single file entirely on your device, preserving every page in the original quality.

Drag PDFs into the tool in any order, rearrange pages with simple drag-and-drop, and merge them into a single document with a live page-count preview. The output is a standards-compliant PDF that opens correctly in every reader, from Adobe Acrobat to browser viewers.

Add PDF files through the file browser or by dropping them into the workspace, then rearrange their order by dragging the thumbnail tiles. The combined page count updates as you go, and clicking merge produces a download-ready document in seconds.

Merging is performed locally with a lightweight PDF library that runs in the browser. Your documents — contracts, invoices, reports — never leave your computer, so sensitive business paperwork stays private.`,
    zh: `PDF Merger 是一款免费在线工具，将多个 PDF 文件合并为一个文档，支持页面重新排序。

图片处理 通常需要 Photoshop 等 GIMP, 对于简单任务来说既昂贵又复杂. 这款工具为浏览器带来了核心图片处理能力。 无论你需要为网站压缩图片、为社交媒体调整尺寸、转换格式还是应用滤镜，一切都能即时完成，无需安装任何软件。

主要特点包括 drag-and-拖放上传便于文件管理、应用前实时预览、支持多种图片格式（JPEG、PNG、WebP、GIF、BMP）、可调质量和尺寸设置精确控制、支持多文件批量处理. 工具保留图片元数据并提供干净、优化的输出。

上传您的 图片——拖拽到工具区域或点击上传按钮. 通过可用的控制选项（质量滑块、尺寸输入、格式选择等）调整设置。 实时预览效果，满意后点击下载按钮保存处理后的图片。 批量操作时，选择多个文件即可一次性应用相同设置。所有图片处理 全部在浏览器中使用 Canvas API and JavaScript. 你的图片永远不会上传到任何服务器，确保完全隐私。 这对于敏感照片、商业文件或个人图片尤为重要。 No account required — just open, process, and download.`,
  },
  "word-counter": {
    en: `A free online text processing tool that count words, characters, sentences, paragraphs, and estimate reading time. Transform, analyze, and manipulate text instantly in your browser.

Content platforms like Medium, Twitter, and academic submission portals enforce strict character and word limits, yet few editors display live counts prominently. Bloggers, students, and SEO copywriters need immediate feedback on document length — including sentences, paragraphs, and reading time — to meet submission requirements without repeatedly opening a full word processor.

Live counters update on every keystroke to show word count, character count (with and without spaces), sentence count, paragraph count, and estimated reading time based on average words-per-minute. Results remain accurate even with mixed CJK and Latin text.

Paste or type your text and the counters update live as you type — no button to click. Word count, character count, sentence count, paragraph count, and estimated reading time all recalculate instantly.

All counting happens locally in your browser. Your text never leaves your device, making this safe for drafts, essays, and confidential documents.`,
    zh: `Word & Character Counter 是一款免费在线工具，统计字数、字符数、句子数、段落数并估算阅读时间。

写作者、开发者, 和内容创作者经常需要处理文本 — counting words, converting case, checking diffs, or reformatting content. 桌面文本编辑器缺少这些专业功能，而在线替代方案通常需要注册或有使用限制。 这款工具提供无限、即时的文本处理，界面简洁专注。

主要特点包括 real-实时输入即处理、支持大文本输入（最大 100,000 characters), 多种输出格式和选项、一键复制到剪贴板、清晰的视觉反馈显示变更和结果. 工具正确处理 Unicode，支持任何语言的文本。

粘贴或输入文本，字数、字符数、句子数、段落数和预估阅读时间实时更新，无需点击任何按钮。

所有统计在浏览器本地完成，文本不会离开你的设备，适合处理草稿、论文和机密文档。`,
  },
  "case-converter": {
    en: `A free online text processing tool that convert text between upper, lower, title, camelcase and more. Transform, analyze, and manipulate text instantly in your browser.

Formatting text casing correctly is a surprisingly common chore: converting SCREAMING_SNAKE_CASE constants to camelCase for JavaScript, fixing ALL-CAPS headlines, title-casing article headings, or preparing sentence case for email subjects. Most text editors only offer a single toggle, leaving developers and copywriters to retype or manually fix inconsistent casing across hundreds of lines.

Seven case modes are available — UPPERCASE, lowercase, Title Case, camelCase, PascalCase, snake_case, and CONSTANT_CASE — each applied instantly with proper handling of abbreviations and compound words.

Paste your text and pick a case mode — UPPERCASE, lowercase, Title Case, camelCase, PascalCase, snake_case, or CONSTANT_CASE. The converted text appears instantly; click Copy to grab it.

All conversion happens locally in your browser. Your text is never uploaded, making this safe for source code, variable names, and sensitive content.`,
    zh: `文本大小写转换器 是一款免费在线工具，在文本格式之间转换 UPPER, lower, Title, camel大小写等。

写作者、开发者, 和内容创作者经常需要处理文本 — counting words, converting case, checking diffs, or reformatting content. 桌面文本编辑器缺少这些专业功能，而在线替代方案通常需要注册或有使用限制。 这款工具提供无限、即时的文本处理，界面简洁专注。

主要特点包括 real-实时输入即处理、支持大文本输入（最大 100,000 characters), 多种输出格式和选项、一键复制到剪贴板、清晰的视觉反馈显示变更和结果. 工具正确处理 Unicode，支持任何语言的文本。

粘贴文本，选择转换模式（全大写、全小写、标题格、驼峰命名、贛费命名等），转换结果即时显示，一键复制。

所有转换在浏览器本地完成，文本不会上传，适合处理源代码、变量名和敏感内容。`,
  },
  "lorem-ipsum-generator": {
    en: `A free online text processing tool that generate placeholder text for design mockups, website wireframes, and print layouts. customize paragraph count, word length, and format. Transform, analyze, and manipulate text instantly in your browser.

Designers and front-end developers need realistic placeholder content to fill wireframes, prototype layouts, and demonstrate responsive behavior before real copy exists. Pasting the same "Lorem ipsum dolor sit amet" paragraph repeatedly looks unprofessional in client demos. Generating fresh, varied dummy text with adjustable paragraph counts saves time and produces more convincing mockups.

Generate between 1 and 100 paragraphs or sentences, with an option to start with the canonical 'Lorem ipsum dolor sit amet' opening and toggle between word lists of varying average length. Output is ready to paste into Figma or HTML mockups.

Choose how many paragraphs or sentences you need, optionally start with the classic 'Lorem ipsum' opening, and click Generate. Copy the placeholder text directly into your design mockup or wireframe.

Generation runs entirely client-side. No content is stored or tracked — useful when generating filler text for client mockups.`,
    zh: `Lorem Ipsum 生成器 是一款免费在线工具，为设计稿、网站线框图和打印布局生成占位文本。 自定义段落数量、词长和格式。。

写作者、开发者, 和内容创作者经常需要处理文本 — counting words, converting case, checking diffs, or reformatting content. 桌面文本编辑器缺少这些专业功能，而在线替代方案通常需要注册或有使用限制。 这款工具提供无限、即时的文本处理，界面简洁专注。

主要特点包括 real-实时输入即处理、支持大文本输入（最大 100,000 characters), 多种输出格式和选项、一键复制到剪贴板、清晰的视觉反馈显示变更和结果. 工具正确处理 Unicode，支持任何语言的文本。

设置段落或句子数量，可选择是否以经典“Lorem ipsum”开头，点击生成即可复制到设计稿或线框图中。

生成全部在客户端完成，不存储或追踪任何内容。`,
  },
  "text-diff-checker": {
    en: `A free online text processing tool that compare two blocks of text side by side and highlight every difference. perfect for code reviews, document revisions, and plagiarism checks. Transform, analyze, and manipulate text instantly in your browser.

Spotting changes between two versions of a document by eye is slow and unreliable, especially across long contracts, configuration files, or revision-tracked manuscripts. A side-by-side visual diff highlights every insertion, deletion, and modification instantly, making it indispensable for contract review, plagiarism detection, and verifying that a round-tripped format conversion preserved all content faithfully.

The side-by-side view highlights inserted lines in green, deleted lines in red, and modified lines in yellow, with word-level granularity showing exactly which words changed within each line.

Paste your original text in the left pane and the modified text in the right pane. Added lines, removed lines, and changed words are highlighted in different colors instantly as you type.

All comparison happens locally in your browser. Your text is never uploaded, making this safe for comparing contracts, legal documents, and source code revisions.`,
    zh: `文本差异检查器 是一款免费在线工具，并排比较两段文本，高亮显示所有差异。 非常适合代码审查、文档修订和抄袭检查。。

写作者、开发者, 和内容创作者经常需要处理文本 — counting words, converting case, checking diffs, or reformatting content. 桌面文本编辑器缺少这些专业功能，而在线替代方案通常需要注册或有使用限制。 这款工具提供无限、即时的文本处理，界面简洁专注。

主要特点包括 real-实时输入即处理、支持大文本输入（最大 100,000 characters), 多种输出格式和选项、一键复制到剪贴板、清晰的视觉反馈显示变更和结果. 工具正确处理 Unicode，支持任何语言的文本。

在左侧粘贴原始文本，右侧粘贴修改后的文本，新增、删除和修改的内容会实时高亮显示。

所有比较在浏览器本地完成，文本不会上传，适合比较合同、法律文书和代码修订。`,
  },
  "text-repeater": {
    en: `A free online text processing tool that repeat any text multiple times with custom separators, line breaks, or prefixes. generate test data, patterns, and repeated strings instantly. Transform, analyze, and manipulate text instantly in your browser.

Generating repeated strings programmatically saves time in scenarios ranging from test-data creation to decorative formatting. Whether you need 500 rows of sample CSV data, a border of asterisks for a comment header, or a concatenated query parameter list, manually copy-pasting is impractical. A configurable repeater with separator and prefix options handles these tasks in seconds.

Set a repeat count from 1 to 10,000, choose a separator (newline, comma, space, pipe, or custom string), and optionally append a prefix or suffix to each repetition. The output updates instantly for immediate copying.

Enter the text to repeat, set the repeat count, choose a separator (newline, comma, space, or custom), and click Repeat. The output appears instantly for one-click copying.

All repetition happens locally. Your input text never leaves your browser — safe for generating test data from sensitive templates.`,
    zh: `Text Repeater 是一款免费在线工具，使用自定义分隔符、换行符或前缀重复任意文本。 即时生成测试数据、模式和重复字符串。。

写作者、开发者, 和内容创作者经常需要处理文本 — counting words, converting case, checking diffs, or reformatting content. 桌面文本编辑器缺少这些专业功能，而在线替代方案通常需要注册或有使用限制。 这款工具提供无限、即时的文本处理，界面简洁专注。

主要特点包括 real-实时输入即处理、支持大文本输入（最大 100,000 characters), 多种输出格式和选项、一键复制到剪贴板、清晰的视觉反馈显示变更和结果. 工具正确处理 Unicode，支持任何语言的文本。

输入要重复的文本，设置重复次数，选择分隔符（换行、逗号、空格或自定义），点击重复即可一键复制。

所有重复操作在本地完成，输入文本不会离开浏览器，适合从敏感模板生成测试数据。`,
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
    en: `A SQL formatting tool that transforms messy, minified, or inconsistently indented SQL queries into clean, readable code. Paste a query from a production log or an ORM-generated string, and the formatter applies standard keyword capitalization (SELECT, FROM, WHERE, JOIN), aligns columns, and adds consistent indentation.

Developers working with raw SQL often encounter queries that are difficult to read — long single-line strings from application logs, ORM-generated SQL with nested subqueries, or legacy stored procedures with no formatting. This tool solves that by parsing your SQL and applying formatting rules based on the SQL dialect you select.

The formatter handles complex constructs including CTEs (WITH clauses), window functions, CASE expressions, and nested subqueries. You can choose between different indentation styles (2-space, 4-space, tab) and toggle keyword capitalization. The minify mode does the reverse — compressing formatted SQL into a single line for embedding in application code or API requests.`,
    zh: `SQL 格式化工具，将杂乱的 SQL 查询转换为清晰可读的代码。支持关键字大写、列对齐和缩进，可处理 CTE、窗口函数和嵌套子查询。提供压缩模式将 SQL 压缩为单行。`,
  },
  "json-to-yaml": {
    en: `A bidirectional converter between JSON and YAML formats. YAML is widely used in configuration files (Docker Compose, Kubernetes, CI/CD pipelines, Ansible) where its human-readable indentation-based structure is preferred over JSON's braces and brackets.

Paste JSON data and the tool produces clean YAML with proper nesting, quoted strings where necessary, and correct handling of arrays and nested objects. Paste YAML and get back minified or formatted JSON. The converter handles edge cases like multi-line strings (YAML block scalars), special characters that need quoting, and null values represented differently in each format.

Common use cases: converting API response JSON to YAML for a Kubernetes ConfigMap, transforming a Docker Compose YAML file into JSON for programmatic processing, or switching between configuration formats when migrating between tools.`,
    zh: `JSON 与 YAML 双向转换工具。适用于 Docker Compose、Kubernetes、CI/CD 等 YAML 配置场景。处理多行字符串、特殊字符引号和 null 值等边界情况。`,
  },
  "string-escaper": {
    en: `A string escaping and unescaping tool that handles special characters across multiple contexts. Different programming languages and data formats require different escape sequences — a string that's valid in HTML needs different escaping than one destined for JSON, a URL, or a SQL query.

The tool supports five escaping modes: HTML entities, JSON string escaping (backslash sequences), URL percent-encoding, SQL string escaping (doubling single quotes), and JavaScript/Regex escaping. Switch between modes with a single click — useful when moving data between systems.

Example: a product name like 'O'Brien "Premium" Coffee' needs different escaping for a JSON API response, an HTML page, and a SQL INSERT statement. Each context requires different escaping, and getting it wrong causes bugs or security vulnerabilities like SQL injection or XSS.`,
    zh: `字符串转义工具，支持 HTML 实体、JSON、URL、SQL 和 JavaScript/Regex 五种转义模式。一键切换，适用于跨系统数据传递场景。`,
  },
  "html-tag-stripper": {
    en: `An HTML tag remover that extracts plain text from HTML markup. Paste content from a WYSIWYG editor, a web page source, or an email template, and the tool strips all HTML tags while preserving the readable text content.

Unlike simple regex-based strippers that can mangle edge cases, this tool uses a proper HTML parser to handle nested tags correctly. It processes self-closing tags (like <br> and <img>), script and style blocks (removes their content entirely), HTML entities (decodes them), and malformed HTML gracefully.

Useful when extracting article text from a CMS export, cleaning up copy-pasted content from Word or Google Docs, preparing email content for a plain-text fallback, or removing markup before feeding text into a search index.`,
    zh: `HTML 标签移除工具，从 HTML 中提取纯文本。使用正确的 HTML 解析器处理嵌套标签、自闭合标签、script/style 块和 HTML 实体。`,
  },
  "jwt-decoder": {
    en: `A JWT (JSON Web Token) decoder that inspects the contents of authentication tokens. Paste a JWT string (three Base64URL-encoded segments separated by dots) and the tool instantly decodes the header and payload into readable JSON.

The decoded view shows all standard claims: subject, issuer, audience, expiration, issued-at, and not-before — with human-readable timestamps converted from Unix epoch. The tool highlights expired tokens and shows exactly how much time remains until expiration.

Developers use this tool when debugging authentication failures: checking why a token is rejected, verifying claim values match expected configuration, or comparing tokens issued by different auth providers. The tool also detects the signature algorithm (HS256, RS256, etc.) and warns about insecure algorithms like 'none'.`,
    zh: `JWT 解码器，无需密钥即可检查认证令牌内容。解码 header 和 payload，显示标准声明，高亮过期令牌，检测签名算法。`,
  },
  "cron-parser": {
    en: `A cron expression parser that translates scheduling syntax into human-readable descriptions. Cron expressions like '0 9 * * 1-5' are powerful but hard to read — this tool tells you exactly when a job will run next and shows the upcoming execution schedule.

The parser supports standard 5-field cron plus Quartz extensions including seconds (6-field), last day of month (L), nearest weekday (W), and specific occurrence (#). Enter your expression and see: a plain-English description, the next 5 execution times, and any syntax errors highlighted.

Common scenarios: verifying a Jenkins job schedule before deploying, debugging why a cron-triggered task runs at unexpected times, or explaining a schedule to a non-technical teammate.`,
    zh: `Cron 表达式解析器，将定时任务语法转换为可读描述。支持标准 5 字段和 Quartz 扩展（L/W/#），显示下次执行时间。`,
  },
  "text-to-binary": {
    en: `A free online text processing tool that convert text to binary code and binary back to text. Transform, analyze, and manipulate text instantly in your browser.

Translating between human-readable text and raw binary representation is a fundamental concept in computer science education, low-level debugging, and steganography puzzles. Students learning ASCII and UTF-8 encoding, developers inspecting protocol payloads, and CTF participants all need a reliable converter that handles multi-byte characters correctly — something calculators and standard text editors simply cannot do.

Each character is converted to its 8-bit ASCII/UTF-8 binary representation with space-separated formatting for readability. Decode mode accepts both space-separated groups and continuous bitstreams.

Type or paste text in the input box to see its binary representation below. Switch to decode mode to paste space-separated 8-bit binary groups and recover the original text.

All conversion happens in your browser. Neither your text nor binary data is sent anywhere — safe for encoding private messages or learning exercises.`,
    zh: `文本转二进制转换器 是一款免费在线工具，将文本转为二进制代码，二进制转为文本。

写作者、开发者, 和内容创作者经常需要处理文本 — counting words, converting case, checking diffs, or reformatting content. 桌面文本编辑器缺少这些专业功能，而在线替代方案通常需要注册或有使用限制。 这款工具提供无限、即时的文本处理，界面简洁专注。

主要特点包括 real-实时输入即处理、支持大文本输入（最大 100,000 characters), 多种输出格式和选项、一键复制到剪贴板、清晰的视觉反馈显示变更和结果. 工具正确处理 Unicode，支持任何语言的文本。

在输入框中输入或粘贴文本，即可在下方看到二进制表示。切换到解码模式可粘贴空格分隔的8位二进制还原文本。

所有转换在浏览器中完成，文本和二进制数据均不会外传。`,
  },
  "html-preview": {
    en: `A live HTML preview tool with a split-screen editor: write HTML/CSS/JS on the left, see the rendered result on the right in real-time. Every keystroke updates the preview — no save button, no page refresh.

The preview runs inside a sandboxed iframe that isolates your code from the host page, making it safe to test experimental CSS, third-party embeds, or JavaScript that manipulates the DOM. Include external libraries via CDN script tags — useful for prototyping React components, Bootstrap layouts, or D3 visualizations without a build pipeline.

Use the viewport toggle to test responsive layouts at mobile, tablet, and desktop widths. JavaScript console output appears in a dedicated panel — see errors and log messages without opening browser DevTools.`,
    zh: `实时 HTML 预览工具，分屏编辑器即时渲染。支持 CDN 库引入、响应式视口切换、控制台输出和沙箱隔离。`,
  },
  "csv-viewer": {
    en: `A CSV viewer and formatter that renders comma-separated data as an interactive table. Paste raw CSV text — from a database export, a log file, or spreadsheet copy-paste — and the tool parses it into a sortable, filterable grid with proper column alignment.

The parser handles RFC 4180 compliant CSV including quoted fields containing commas, multi-line fields wrapped in quotes, and different delimiters (comma, semicolon, tab, pipe). It auto-detects the delimiter and handles encoding issues (UTF-8 BOM, GBK for Chinese-language exports).

Features include: click any column header to sort, search across all cells, toggle between table view and raw text view, and export as clean CSV or convert to JSON. Useful for inspecting data exports or quickly scanning large CSV files without Excel.`,
    zh: `CSV 查看器和格式化工具，将 CSV 数据渲染为可排序的交互式表格。支持 RFC 4180 标准、多种分隔符和编码自动检测。`,
  },
  "ip-calculator": {
    en: `An IP subnet calculator that computes network parameters from CIDR notation (e.g., 192.168.1.0/24). Enter an IP address with subnet mask and the tool calculates: network address, broadcast address, usable host range, total host count, wildcard mask, and binary representation.

Supports both IPv4 and IPv6. For IPv4, it handles all mask sizes from /0 to /32, including the unusual /31 point-to-point links defined in RFC 3021. For IPv6, it computes the prefix, identifies the interface ID portion, and shows the compressed representation.

Network engineers use this tool when designing subnet structures for a VPC, verifying that two IPs are in the same subnet, planning IP allocation for containers, or troubleshooting routing issues.`,
    zh: `IP 子网计算器，从 CIDR 表示法计算网络参数。支持 IPv4/IPv6，计算网络地址、广播地址、主机范围和通配符掩码。`,
  },
  "jwt-generator": {
    en: `A JWT generator that creates valid authentication tokens for testing and development. Define the header (algorithm and type), specify payload claims (sub, iss, exp, custom fields), provide a secret key, and the tool generates a signed JWT string ready for API requests.

Supports three signing algorithms: HS256 (HMAC with SHA-256), RS256 (RSA signature), and ES256 (ECDSA). The tool uses the Web Crypto API for cryptographic operations — key generation and signing happen entirely in your browser.

The payload editor includes helpers for standard claims: click to insert current timestamp, calculate expiration from a duration dropdown, and add custom claims as key-value pairs. Useful for testing API authentication, generating tokens for integration tests, or verifying JWT structure before implementing auth in your backend.`,
    zh: `JWT 生成器，用于创建测试用认证令牌。支持 HS256/RS256/ES256 算法，使用 Web Crypto API 在浏览器中签名。包含标准声明辅助工具。`,
  },
  "text-to-slug": {
    en: `A free online text processing tool that convert any text into clean, seo-friendly url slugs. remove special characters, normalize spaces, and generate optimized permalinks. Transform, analyze, and manipulate text instantly in your browser.

Building SEO-friendly URLs requires transforming article titles into clean, lowercase, hyphen-separated slugs free of special characters and accents. Content management systems like WordPress auto-generate slugs, but when you are working outside a CMS — drafting redirects, configuring static-site routing, or bulk-renaming files — a dedicated slugifier normalizes text instantly and consistently.

The slugifier strips accents and diacritics, converts to lowercase, replaces spaces with your chosen separator (hyphen or underscore), and removes all non-alphanumeric characters. CJK and Cyrillic text is transliterated for URL-safe output.

Type a title or heading and the tool generates a URL-safe slug instantly — lowercase, hyphens for spaces, special characters stripped. Toggle between hyphen and underscore separators as needed.

All slug generation happens locally. Your text is never uploaded — safe for working with unpublished article titles or internal page names.`,
    zh: `Text to URL Slug 是一款免费在线工具，将任意文本转换为干净的、 SEO-friendly URL slugs. 移除特殊字符、规范化空格，生成优化的永久链接。。

写作者、开发者, 和内容创作者经常需要处理文本 — counting words, converting case, checking diffs, or reformatting content. 桌面文本编辑器缺少这些专业功能，而在线替代方案通常需要注册或有使用限制。 这款工具提供无限、即时的文本处理，界面简洁专注。

主要特点包括 real-实时输入即处理、支持大文本输入（最大 100,000 characters), 多种输出格式和选项、一键复制到剪贴板、清晰的视觉反馈显示变更和结果. 工具正确处理 Unicode，支持任何语言的文本。

输入标题或文本，工具即时生成 URL 安全的 slug（小写、空格转连字符、去除特殊字符）。可切换连字符或下划线分隔符。

所有 slug 生成在本地完成，文本不会上传，适合处理未发布的文章标题或内部页面名称。`,
  },
  "text-sorter": {
    en: `A free online text processing tool that sort text lines alphabetically (a-z or z-a), 按行长或倒序排列. remove duplicates and organize lists instantly. Transform, analyze, and manipulate text instantly in your browser.

Organizing unsorted lists — whether a jumbled export of email addresses, a backlog of task items, or genealogy records — into alphabetical or length-based order is a frequent data-cleaning step. Spreadsheet apps require import and column setup for what should be a one-second operation. Sorting lines directly, with options for case-insensitive and natural ordering, removes that friction entirely.

Four sort modes cover alphabetical ascending, alphabetical descending, line-length ascending, and reverse order — with an optional duplicate-line removal toggle that cleans up your list in the same pass.

Paste your list of lines, pick a sort mode (alphabetical A–Z, reverse Z–A, by line length, or reverse order), and optionally remove duplicates. The sorted output appears instantly.

All sorting happens locally in your browser. Your text stays on your device — safe for sorting mailing lists, log entries, or confidential data.`,
    zh: `Text Sorter 是一款免费在线工具，按字母顺序排列文本行（A-Z or Z-A), 按行长或倒序排列. 即时移除重复项并整理列表。。

写作者、开发者, 和内容创作者经常需要处理文本 — counting words, converting case, checking diffs, or reformatting content. 桌面文本编辑器缺少这些专业功能，而在线替代方案通常需要注册或有使用限制。 这款工具提供无限、即时的文本处理，界面简洁专注。

主要特点包括 real-实时输入即处理、支持大文本输入（最大 100,000 characters), 多种输出格式和选项、一键复制到剪贴板、清晰的视觉反馈显示变更和结果. 工具正确处理 Unicode，支持任何语言的文本。

粘贴行列表，选择排序模式（字母升序、降序、按行长、反序），可选去除重复行，排序结果即时显示。

所有排序在浏览器本地完成，文本保留在设备上，适合排序邮件列表、日志或机密数据。`,
  },
  "text-deduplicator": {
    en: `A free online text processing tool that remove duplicate lines from text while preserving order. Transform, analyze, and manipulate text instantly in your browser.

Duplicate lines creep into text files through copy-paste errors, merged data exports, and imperfect scraping scripts. Mailing lists with repeated addresses, log files with echoed entries, and product catalogs with duplicated SKUs all benefit from instant de-duplication. Removing repeats while preserving original order is something general-purpose editors cannot accomplish without fragile find-replace regex gymnastics.

Duplicate detection runs in linear time using a hash set, preserving the first occurrence of each line and removing all subsequent copies. A case-sensitivity toggle lets you treat 'Hello' and 'hello' as identical or distinct.

Paste lines that may contain duplicates and the tool instantly returns only unique lines, preserving their original order. Toggle case-sensitive mode if needed.

All deduplication happens locally. Your text never leaves your browser — safe for cleaning up customer lists, email addresses, or sensitive records.`,
    zh: `Line Deduplicator 是一款免费在线工具，移除文本中的重复行，同时保持顺序。

写作者、开发者, 和内容创作者经常需要处理文本 — counting words, converting case, checking diffs, or reformatting content. 桌面文本编辑器缺少这些专业功能，而在线替代方案通常需要注册或有使用限制。 这款工具提供无限、即时的文本处理，界面简洁专注。

主要特点包括 real-实时输入即处理、支持大文本输入（最大 100,000 characters), 多种输出格式和选项、一键复制到剪贴板、清晰的视觉反馈显示变更和结果. 工具正确处理 Unicode，支持任何语言的文本。

粘贴可能含有重复的行，工具即时返回仅包含唯一行的结果，保持原始顺序。可切换大小写敏感模式。

所有去重在本地完成，文本不会离开浏览器，适合清理客户列表、邮箱地址或敏感记录。`,
  },
  "text-reverser": {
    en: `A free online text processing tool that reverse text, words, sentences, 或整行即时反转。 useful for creating mirrored text, solving puzzles, or formatting data. Transform, analyze, and manipulate text instantly in your browser.

Reversing text has practical and recreational uses that go beyond novelty. Developers reverse strings to test palindrome logic, data analysts flip column orders for right-to-left language support, and puzzle enthusiasts decode mirrored writing. Standard editors offer no reversal function at all, making a dedicated tool the fastest path for character-level, word-level, or line-level flipping.

Three reversal modes are available: reverse all characters, reverse the order of words while keeping each word intact, or reverse the order of lines. Each mode processes instantly with Unicode-safe handling.

Enter text and choose a reverse mode: reverse characters, reverse word order, or reverse line order. The result appears instantly for one-click copying.

All reversal happens locally. Your text never leaves your device — safe for puzzles, data formatting, and sensitive content.`,
    zh: `Text Reverser 是一款免费在线工具，Reverse text, words, sentences, 或整行即时反转。 适用于创建镜像文字、解谜或格式化数据。。

写作者、开发者, 和内容创作者经常需要处理文本 — counting words, converting case, checking diffs, or reformatting content. 桌面文本编辑器缺少这些专业功能，而在线替代方案通常需要注册或有使用限制。 这款工具提供无限、即时的文本处理，界面简洁专注。

主要特点包括 real-实时输入即处理、支持大文本输入（最大 100,000 characters), 多种输出格式和选项、一键复制到剪贴板、清晰的视觉反馈显示变更和结果. 工具正确处理 Unicode，支持任何语言的文本。

输入文本，选择反转模式（字符反转、单词顺序反转、行顺序反转），结果即时显示，一键复制。

所有反转在本地完成，文本不会离开设备，适合解谜、格式化数据和敏感内容。`,
  },
  "random-string-generator": {
    en: `A free online utility tool that generate random strings with custom characters and length. Simple, fast, and completely private — just open and use.

Generating random strings is a frequent requirement in development and testing workflows: creating API tokens, seeding test databases with unique identifiers, producing nonce values for CSP headers, and generating coupon codes for promotions. Doing this manually or with ad-hoc scripts wastes time and often produces insufficiently random output, especially when cryptographic entropy is needed.

Choose exact character sets (a–z, A–Z, 0–9, special symbols), set lengths from 1 to 1000 characters, and generate single strings or batches of up to 100 at once. Each string uses the browser's cryptographic random source.

Set the string length, pick which character types to include (letters, digits, symbols), and click Generate. Copy the result instantly, or regenerate for a new random string.

Generation uses your browser's native random source — no strings are stored or transmitted. Safe for generating API keys, tokens, or test identifiers.`,
    zh: `随机字符串生成器 是一款免费在线工具，使用自定义字符和长度生成随机字符串。

日常任务 比如生成密码、创建 QR codes, rolling dice, or checking BMI shouldn't 需要安装软件或创建账户. 这款工具提供快速、可靠的解决方案，在浏览器中即时运行。 It's 非常适合需要快速出结果而不想安装专业软件的一次性任务.

主要特点包括 即时结果零加载时间、简洁直观界面零学习成本、可微调的自定义选项、一键复制或下载输出、适配任何设备的响应式设计。 工具专注于做好一件事，而且做得很快。

设置字符串长度，选择字符类型（字母、数字、符号），点击生成即可一键复制，或重新生成新的随机字符串。

生成使用浏览器原生随机源，不存储或传输任何字符串，适合生成 API 密钥、令牌或测试标识符。`,
  },
  "palindrome-checker": {
    en: `A free online utility tool that check if text reads the same forwards and backwards. Simple, fast, and completely private — just open and use.

Palindrome detection has both educational and practical applications: language teachers use it in exercises, developers test string-manipulation functions against it, and puzzle solvers verify word-game answers. Checking by eye is unreliable for longer phrases, especially when spaces, punctuation, and mixed casing must be normalized before comparison.

The checker normalizes input by optionally ignoring spaces, punctuation, and capitalization, then compares the string forward and backward character by character. A clear yes/no result is displayed with the normalized version highlighted.

Type or paste any text and the checker instantly tells you whether it reads the same forwards and backwards, ignoring spaces and punctuation by default.

All checking happens locally in your browser. Your text is never sent anywhere — safe for verifying private messages or code snippets.`,
    zh: `Palindrome Checker 是一款免费在线工具，检查文本是否正读反读都一样。

日常任务 比如生成密码、创建 QR codes, rolling dice, or checking BMI shouldn't 需要安装软件或创建账户. 这款工具提供快速、可靠的解决方案，在浏览器中即时运行。 It's 非常适合需要快速出结果而不想安装专业软件的一次性任务.

主要特点包括 即时结果零加载时间、简洁直观界面零学习成本、可微调的自定义选项、一键复制或下载输出、适配任何设备的响应式设计。 工具专注于做好一件事，而且做得很快。

输入或粘贴任意文本，工具即时判断它是否为回文（正反读相同），默认忽略空格和标点。

所有检查在浏览器本地完成，文本不会外传，适合验证私密消息或代码片段。`,
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

Temperature readings arrive in different scales depending on the source: weather APIs return Celsius, American oven recipes use Fahrenheit, and scientific literature relies on Kelvin. Converting between these scales mentally leads to errors that ruin recipes, skew lab results, or cause confusion when interpreting international weather forecasts.

Enter a value in Celsius, Fahrenheit, Kelvin, or Rankine and all four scales update instantly. Decimal precision is adjustable up to 4 places for scientific accuracy.

Enter a value in Celsius, Fahrenheit, Kelvin, or Rankine and all four scales update instantly. Decimal precision is adjustable up to 4 places for scientific accuracy, and the interface highlights which scale you are editing so there is no ambiguity about the source unit.

Every temperature conversion is computed through pure JavaScript arithmetic on your device. Readings from medical thermometers or industrial sensors never leave the browser, keeping sensitive health and operational data fully contained.`,
    zh: `Temperature Converter 是一款免费在线工具，在摄氏度、 Fahrenheit, 和开尔文温标即时转换. 非常适合烹饪、科学、天气和旅行计算。。

单位换算 在日常烹饪、工程、旅行、科学和生活中经常需要. 虽然手机有基础计算器，但很少能处理你需要的所有单位。 这款工具提供全面的转换支持，即时出结果，无需记忆换算系数就能轻松切换计量体系。

主要特点包括 支持数十种单位类型、即时输入即出结果、高精度计算含正确舍入、同时显示多种单位的简洁界面、一键交换输入输出单位。 工具同时支持常见和专业单位。

输入您的数值 在输入框中输入数值，从下拉菜单选择源单位，即可同时查看所有其他单位的转换值. 无需点击按钮 — 结果随输入实时更新. 使用交换按钮反转转换方向，或从全面的列表中选择不同的单位。

所有计算 全部在浏览器中使用 JavaScript. 不会向任何服务器发送数据。 你输入的数值和转换结果完全保密。 No account, no signup, 除必要功能外不使用 Cookie.`,
  },
  "weight-converter": {
    en: `A free online conversion calculator that convert between kilograms, pounds, ounces, and more. Get accurate results instantly without any software installation.

Weight measurements vary dramatically across regions and industries: a recipe calls for grams, a gym tracks body weight in pounds, shipping logistics use kilograms, and precious-metal trading references troy ounces. Navigating these systems without a reliable converter risks dosing errors in pharmaceuticals and miscalculated postage in e-commerce.

The converter handles kilograms, grams, milligrams, pounds, ounces, stones, metric tons, and carats — covering everything from cooking measurements to precious-metal weighing. Results round to sensible precision per unit.

Type a value in any supported unit — kilograms, pounds, ounces, stones, or tons — and every other unit populates immediately. Precision rounds to a sensible number of decimals for everyday use, with an option to extend digits for scientific or metallurgical applications.

Weight conversion factors execute as native JavaScript operations within the page, with zero network requests. Whether you are converting medication dosages or confidential shipping manifests, the input values remain on your machine.`,
    zh: `Weight Converter 是一款免费在线工具，在千克、磅、盎司等单位之间转换。

单位换算 在日常烹饪、工程、旅行、科学和生活中经常需要. 虽然手机有基础计算器，但很少能处理你需要的所有单位。 这款工具提供全面的转换支持，即时出结果，无需记忆换算系数就能轻松切换计量体系。

主要特点包括 支持数十种单位类型、即时输入即出结果、高精度计算含正确舍入、同时显示多种单位的简洁界面、一键交换输入输出单位。 工具同时支持常见和专业单位。

输入您的数值 在输入框中输入数值，从下拉菜单选择源单位，即可同时查看所有其他单位的转换值. 无需点击按钮 — 结果随输入实时更新. 使用交换按钮反转转换方向，或从全面的列表中选择不同的单位。

所有计算 全部在浏览器中使用 JavaScript. 不会向任何服务器发送数据。 你输入的数值和转换结果完全保密。 No account, no signup, 除必要功能外不使用 Cookie.`,
  },
  "length-converter": {
    en: `A free online conversion calculator that convert between meters, feet, inches, kilometers, and miles. Get accurate results instantly without any software installation.

Length and distance units scatter across measurement systems that rarely align: construction blueprints use feet and inches, European road signs use kilometers, fabric measurements cite yards, and scientific instruments report in nanometers. Cross-referencing these without a converter wastes time on projects spanning international teams and mixed standards.

Switch between metric units (nm, µm, mm, cm, m, km) and imperial units (inch, foot, yard, mile, nautical mile) with a single input field that updates all units at once. Engineering and surveying precisions are supported.

Input any measurement in meters, kilometers, miles, feet, inches, centimeters, or millimeters and see all equivalents render simultaneously. The converter supports fractional inch notation for woodworking and decimal precision toggles for engineering tolerances.

Distance calculations run through client-side JavaScript with no backend calls. Architectural dimensions and proprietary survey measurements stay private to your browser, which is critical when handling confidential construction or patent data.`,
    zh: `Length Converter 是一款免费在线工具，在米、英尺、英寸、公里和英里之间转换。

单位换算 在日常烹饪、工程、旅行、科学和生活中经常需要. 虽然手机有基础计算器，但很少能处理你需要的所有单位。 这款工具提供全面的转换支持，即时出结果，无需记忆换算系数就能轻松切换计量体系。

主要特点包括 支持数十种单位类型、即时输入即出结果、高精度计算含正确舍入、同时显示多种单位的简洁界面、一键交换输入输出单位。 工具同时支持常见和专业单位。

输入您的数值 在输入框中输入数值，从下拉菜单选择源单位，即可同时查看所有其他单位的转换值. 无需点击按钮 — 结果随输入实时更新. 使用交换按钮反转转换方向，或从全面的列表中选择不同的单位。

所有计算 全部在浏览器中使用 JavaScript. 不会向任何服务器发送数据。 你输入的数值和转换结果完全保密。 No account, no signup, 除必要功能外不使用 Cookie.`,
  },
  "data-size-converter": {
    en: `A free online conversion calculator that convert between bytes, kilobytes, megabytes, gigabytes, terabytes and more. compare file sizes, storage capacity, and data transfer amounts. Get accurate results instantly without any software installation.

Digital storage units confuse even experienced technologists because of the binary-versus-decimal divide: hard-drive vendors use decimal terabytes while operating systems report binary tebibytes, creating apparent capacity discrepancies. Cloud storage limits, bandwidth quotas, and database sizing all depend on understanding these distinctions precisely.

Convert between bits and bytes in both decimal (KB = 1000 bytes) and binary (KiB = 1024 bytes) conventions, covering the full range from bits to petabytes. A note clarifies which standard each result uses to prevent the common KB/KiB confusion.

Enter a value in bytes, kilobytes, megabytes, gigabytes, terabytes, or petabytes and toggle between binary (1024-based) and decimal (1000-based) conventions. The converter clearly labels each system so you never confuse a kibibyte with a kilobyte again.

Storage unit conversions are pure arithmetic executed in the browser's JavaScript engine — no server round-trips. This matters when evaluating infrastructure capacity for projects under embargo or computing storage costs for unreleased product specifications.`,
    zh: `数据大小转换器 是一款免费在线工具，在字节、千字节、兆字节、吉字节、太字节等单位之间转换。 比较文件大小、存储容量和数据传输量。。

单位换算 在日常烹饪、工程、旅行、科学和生活中经常需要. 虽然手机有基础计算器，但很少能处理你需要的所有单位。 这款工具提供全面的转换支持，即时出结果，无需记忆换算系数就能轻松切换计量体系。

主要特点包括 支持数十种单位类型、即时输入即出结果、高精度计算含正确舍入、同时显示多种单位的简洁界面、一键交换输入输出单位。 工具同时支持常见和专业单位。

输入您的数值 在输入框中输入数值，从下拉菜单选择源单位，即可同时查看所有其他单位的转换值. 无需点击按钮 — 结果随输入实时更新. 使用交换按钮反转转换方向，或从全面的列表中选择不同的单位。

所有计算 全部在浏览器中使用 JavaScript. 不会向任何服务器发送数据。 你输入的数值和转换结果完全保密。 No account, no signup, 除必要功能外不使用 Cookie.`,
  },
  "speed-converter": {
    en: `A free online conversion calculator that convert speed between km/h, mph, knots, m/s, and mach. useful for driving, aviation, marine navigation, and physics calculations. Get accurate results instantly without any software installation.

Speed measurements fragment across domains: drivers think in miles per hour or kilometers per hour, pilots reference knots and Mach numbers, physicists use meters per second, and runners track pace in minutes per kilometer. Converting between these without a dedicated tool leads to miscalibrated treadmill settings and misread aviation charts.

Translate between km/h, mph, knots, meters per second, feet per second, and Mach number — with context-aware precision that matters for driving (1 decimal), aviation (2 decimals), and physics calculations (4 decimals).

Type any speed value and instantly see equivalents in km/h, mph, knots, m/s, feet per second, and Mach. The converter preserves high decimal precision for physics calculations while rounding sensibly for everyday driving and running context.

Velocity conversions are computed entirely on your device through JavaScript. Navigation speeds and physics experiment data are never transmitted, preserving the confidentiality of sensitive flight or research parameters.`,
    zh: `Speed Converter 是一款免费在线工具，在公里/小时、英里/小时、节、米/秒和马赫之间转换速度。 适用于驾驶、航空、航海导航和物理计算。。

单位换算 在日常烹饪、工程、旅行、科学和生活中经常需要. 虽然手机有基础计算器，但很少能处理你需要的所有单位。 这款工具提供全面的转换支持，即时出结果，无需记忆换算系数就能轻松切换计量体系。

主要特点包括 支持数十种单位类型、即时输入即出结果、高精度计算含正确舍入、同时显示多种单位的简洁界面、一键交换输入输出单位。 工具同时支持常见和专业单位。

输入您的数值 在输入框中输入数值，从下拉菜单选择源单位，即可同时查看所有其他单位的转换值. 无需点击按钮 — 结果随输入实时更新. 使用交换按钮反转转换方向，或从全面的列表中选择不同的单位。

所有计算 全部在浏览器中使用 JavaScript. 不会向任何服务器发送数据。 你输入的数值和转换结果完全保密。 No account, no signup, 除必要功能外不使用 Cookie.`,
  },
  "area-converter": {
    en: `A free online conversion calculator that convert between square meters, acres, hectares, sq ft. Get accurate results instantly without any software installation.

Land area measurement diverges wildly across contexts: real estate listings cite square feet, agricultural plots use hectares and acres, flooring materials sell by the square yard, and geographic surveys reference square kilometers. Comparing a property listed in acres to a floor plan in square meters without a converter invites costly miscalculations.

Convert between square meters, square kilometers, square feet, square yards, acres, hectares, and square miles. The tool is useful for real estate listings, agricultural planning, and land surveying.

Enter an area in square meters, square feet, acres, hectares, square yards, or square miles and all units update in concert. The interface supports both imperial and metric systems simultaneously, with precision adjustable for surveying or rough estimation.

Area conversion math executes locally in your browser via JavaScript. Property dimensions and land valuations remain on your device, which is essential when evaluating real-estate deals before public announcement.`,
    zh: `Area Converter 是一款免费在线工具，在平方米、英亩、公顷、平方英尺之间转换。

单位换算 在日常烹饪、工程、旅行、科学和生活中经常需要. 虽然手机有基础计算器，但很少能处理你需要的所有单位。 这款工具提供全面的转换支持，即时出结果，无需记忆换算系数就能轻松切换计量体系。

主要特点包括 支持数十种单位类型、即时输入即出结果、高精度计算含正确舍入、同时显示多种单位的简洁界面、一键交换输入输出单位。 工具同时支持常见和专业单位。

输入您的数值 在输入框中输入数值，从下拉菜单选择源单位，即可同时查看所有其他单位的转换值. 无需点击按钮 — 结果随输入实时更新. 使用交换按钮反转转换方向，或从全面的列表中选择不同的单位。

所有计算 全部在浏览器中使用 JavaScript. 不会向任何服务器发送数据。 你输入的数值和转换结果完全保密。 No account, no signup, 除必要功能外不使用 Cookie.`,
  },
  "image-to-base64": {
    en: `A free browser-based image tool that convert images to base64 data uri 以便内嵌使用. Process your photos and graphics directly in your browser without uploading to any server.

Embedding an image directly inside HTML, CSS, or a JSON payload usually means hunting down a command-line tool to generate the data URI. This encoder turns any image into a ready-to-paste Base64 string right in the browser, complete with the correct MIME-type prefix.

The tool outputs a ready-to-paste Base64 data URI string (prefixed with the correct MIME type) as well as raw Base64, so you can drop it straight into an img src attribute, a CSS background-image property, or a JSON payload. File size and character count are displayed alongside the output.

Choose a file from disk or paste an image from your clipboard, and the encoded string appears instantly in a text area with copy and download buttons. Toggle between raw Base64 and the full data: URI scheme depending on whether you need it for an img tag or an API field.

The entire encoding pipeline runs through your browser's FileReader and btoa APIs. Neither the original binary nor the resulting string is sent anywhere, which is important when embedding private diagrams or internal screenshots into code.`,
    zh: `Image to Base64 是一款免费在线工具，将图片转换为 Base64 data URI 以便内嵌使用。

图片处理 通常需要 Photoshop 等 GIMP, 对于简单任务来说既昂贵又复杂. 这款工具为浏览器带来了核心图片处理能力。 无论你需要为网站压缩图片、为社交媒体调整尺寸、转换格式还是应用滤镜，一切都能即时完成，无需安装任何软件。

主要特点包括 drag-and-拖放上传便于文件管理、应用前实时预览、支持多种图片格式（JPEG、PNG、WebP、GIF、BMP）、可调质量和尺寸设置精确控制、支持多文件批量处理. 工具保留图片元数据并提供干净、优化的输出。

上传您的 图片——拖拽到工具区域或点击上传按钮. 通过可用的控制选项（质量滑块、尺寸输入、格式选择等）调整设置。 实时预览效果，满意后点击下载按钮保存处理后的图片。 批量操作时，选择多个文件即可一次性应用相同设置。所有图片处理 全部在浏览器中使用 Canvas API and JavaScript. 你的图片永远不会上传到任何服务器，确保完全隐私。 这对于敏感照片、商业文件或个人图片尤为重要。 No account required — just open, process, and download.`,
  },
  "random-number-generator": {
    en: `A free online utility tool that generate random numbers within a custom range. perfect for lotteries, giveaways, statistical sampling, and game development. Simple, fast, and completely private — just open and use.

Drawing random numbers within a specified range is needed for raffle draws, statistical sampling, classroom randomization, A/B test assignment, and game mechanics. Physical methods like drawing slips are impractical for large ranges, and spreadsheet RAND functions require formula setup — a purpose-built generator with inclusive range control and optional uniqueness is far more direct.

Set a min/max range, choose how many numbers to generate (1–1000), and toggle a unique-only mode that guarantees no repeats — ideal for raffles, lotteries, and statistical sampling without replacement.

Set the minimum and maximum values for your range, choose how many numbers to generate, and optionally enable unique-only mode. Click Generate for instant results.

All generation happens locally using your browser's random source. No values are stored or tracked — safe for lotteries, raffles, and statistical sampling.`,
    zh: `随机数生成器 是一款免费在线工具，在自定义范围内生成随机数。 非常适合抽奖、赠送、统计抽样和游戏开发。。

日常任务 比如生成密码、创建 QR codes, rolling dice, or checking BMI shouldn't 需要安装软件或创建账户. 这款工具提供快速、可靠的解决方案，在浏览器中即时运行。 It's 非常适合需要快速出结果而不想安装专业软件的一次性任务.

主要特点包括 即时结果零加载时间、简洁直观界面零学习成本、可微调的自定义选项、一键复制或下载输出、适配任何设备的响应式设计。 工具专注于做好一件事，而且做得很快。

设置最小和最大值，选择生成数量，可选开启仅唯一值模式，点击生成即可获得结果。

所有生成在本地使用浏览器随机源完成，不存储或追踪任何值，适合抽奖、统计抽样等场景。`,
  },
  "image-to-pdf": {
    en: `A free browser-based image tool that convert images (jpg, png) into a single pdf document. Process your photos and graphics directly in your browser without uploading to any server.

Turning a folder of photos into a shareable PDF often involves desktop publishing software or a sketchy upload-based converter. This tool wraps each image onto its own page and bundles them into a standards-compliant PDF, all without sending a single pixel to a server.

Multiple images can be combined into a single multi-page PDF, with page size and orientation options that adapt to each image's dimensions. The output PDF is lightweight and compatible with all standard PDF readers.

Add images one by one or in a batch, drag them into the desired page sequence, and choose a page orientation and margin size. A thumbnail strip shows the running page order, and the final PDF is ready to download once you are happy with the arrangement.

Page composition and PDF generation are executed locally in your browser using a client-side PDF writer. Your photos remain on your device throughout, so personal or confidential pictures never pass through a third-party server.`,
    zh: `Image to PDF 是一款免费在线工具，Convert images (JPG, PNG) into a single PDF document。

图片处理 通常需要 Photoshop 等 GIMP, 对于简单任务来说既昂贵又复杂. 这款工具为浏览器带来了核心图片处理能力。 无论你需要为网站压缩图片、为社交媒体调整尺寸、转换格式还是应用滤镜，一切都能即时完成，无需安装任何软件。

主要特点包括 drag-and-拖放上传便于文件管理、应用前实时预览、支持多种图片格式（JPEG、PNG、WebP、GIF、BMP）、可调质量和尺寸设置精确控制、支持多文件批量处理. 工具保留图片元数据并提供干净、优化的输出。

上传您的 图片——拖拽到工具区域或点击上传按钮. 通过可用的控制选项（质量滑块、尺寸输入、格式选择等）调整设置。 实时预览效果，满意后点击下载按钮保存处理后的图片。 批量操作时，选择多个文件即可一次性应用相同设置。所有图片处理 全部在浏览器中使用 Canvas API and JavaScript. 你的图片永远不会上传到任何服务器，确保完全隐私。 这对于敏感照片、商业文件或个人图片尤为重要。 No account required — just open, process, and download.`,
  },
  "pdf-splitter": {
    en: `A free browser-based image tool that split pdf 按页码范围或提取特定页面. Process your photos and graphics directly in your browser without uploading to any server.

Extracting a few pages from a large PDF usually means installing a full-featured PDF editor or trusting an online service with the entire file. This splitter lets you carve a PDF into individual pages or custom ranges entirely within the browser, handing back clean, standalone documents.

Enter page ranges like '1-3, 5, 7-10' to extract exactly the pages you need, or split a document into individual single-page PDFs. A live page thumbnail strip helps you identify the right pages before splitting.

Open a PDF and the tool renders a thumbnail of every page. Enter the page numbers or ranges you want extracted — for example 1–3 and 7 — then click split to download each resulting file or a combined subset.

All parsing and page extraction happen on your machine via a browser-based PDF library. Because the source document never gets uploaded, splitting sensitive contracts or financial statements carries zero privacy risk.`,
    zh: `PDF Splitter 是一款免费在线工具，Split PDF 按页码范围或提取特定页面。

图片处理 通常需要 Photoshop 等 GIMP, 对于简单任务来说既昂贵又复杂. 这款工具为浏览器带来了核心图片处理能力。 无论你需要为网站压缩图片、为社交媒体调整尺寸、转换格式还是应用滤镜，一切都能即时完成，无需安装任何软件。

主要特点包括 drag-and-拖放上传便于文件管理、应用前实时预览、支持多种图片格式（JPEG、PNG、WebP、GIF、BMP）、可调质量和尺寸设置精确控制、支持多文件批量处理. 工具保留图片元数据并提供干净、优化的输出。

上传您的 图片——拖拽到工具区域或点击上传按钮. 通过可用的控制选项（质量滑块、尺寸输入、格式选择等）调整设置。 实时预览效果，满意后点击下载按钮保存处理后的图片。 批量操作时，选择多个文件即可一次性应用相同设置。所有图片处理 全部在浏览器中使用 Canvas API and JavaScript. 你的图片永远不会上传到任何服务器，确保完全隐私。 这对于敏感照片、商业文件或个人图片尤为重要。 No account required — just open, process, and download.`,
  },
  "pdf-rotator": {
    en: `A free online PDF tool that rotate pdf pages by 90, 180, or 270 degrees. fix scanned documents, correct page orientation, and rearrange your pdf layouts. Work with your PDF files directly in the browser — no uploads, no waiting, no risk.

PDF manipulation 传统上需要 Adobe Acrobat 等昂贵软件 or risky online services that upload your sensitive documents. This tool lets you merge, split, rotate, or convert PDFs entirely in your browser using pdf-lib. 你的财务报表、法律文件和个人文件永远不会离开你的device, 让你完全掌控隐私.

Each page appears as a thumbnail in a visual grid where you can select individual pages or ranges, then apply 90°, 180°, or 270° rotation with a single click. A live preview shows the corrected orientation before you download.

Drag your PDF onto the tool, select the pages you want to rotate, choose 90°, 180°, or 270°, and click Rotate. Download the corrected PDF instantly.

All rotation happens locally in your browser using pdf-lib. Your PDF is never uploaded — critical for contracts, medical records, and financial statements.`,
    zh: `PDF Rotator 是一款免费在线工具，Rotate PDF pages by 90, 180, or 270 degrees. 修复扫描文档、更正页面方向，重新排列你的 PDF layouts.。

PDF 处理 传统上需要 Adobe Acrobat 等昂贵软件 或会上传敏感文档的有风险的在线服务。 这款工具可以合并、拆分、旋转或转换 PDF 全部在浏览器中使用 pdf-lib 完成。 你的财务报表、法律文件和个人文件永远不会离开你的device, 让你完全掌控隐私.

主要特点包括 drag-and-拖放上传、可视化页面预览便于选择、拖拽重排页面、精确页码范围拆分、支持加密 PDF. 工具处理任意大小的文档（在浏览器内存限制内），并生成干净、符合标准、在任何 PDF reader.

将 PDF 拖入工具，选择要旋转的页面，选择 90°、180° 或 270°，点击旋转即可下载修正后的 PDF。

所有旋转操作在浏览器本地使用 pdf-lib 完成，PDF 不会上传，对合同、医疗记录和财务报表至关重要。`,
  },
  "pdf-page-remover": {
    en: `A free online PDF tool that remove unwanted pages from your pdf documents quickly. extract specific pages, delete blank sheets, and trim bulky files. Work with your PDF files directly in the browser — no uploads, no waiting, no risk.

Removing specific pages from a PDF is common when you need to delete blank pages, extract a section, or redact sensitive content before sharing. Doing this without specialized software meant either printing, redacting, and re-scanning — or paying for Adobe Acrobat Pro.

A thumbnail view of every page lets you click-to-select individual pages for deletion, or use range input for bulk removal. The trimmed PDF is generated instantly with accurate page renumbering.

Upload your PDF, preview each page visually, select the pages you want to delete, and click Remove. Download the trimmed PDF instantly.

All page removal happens locally in your browser using pdf-lib. Your document never leaves your device — critical for sensitive PDFs like tax returns or legal filings.`,
    zh: `PDF Page Remover 是一款免费在线工具，从你的文档中删除不需要的页面 PDF documents quickly. 提取特定页面、删除空白页，精简臃肿的文件。。

PDF 处理 传统上需要 Adobe Acrobat 等昂贵软件 或会上传敏感文档的有风险的在线服务。 这款工具可以合并、拆分、旋转或转换 PDF 全部在浏览器中使用 pdf-lib 完成。 你的财务报表、法律文件和个人文件永远不会离开你的device, 让你完全掌控隐私.

主要特点包括 drag-and-拖放上传、可视化页面预览便于选择、拖拽重排页面、精确页码范围拆分、支持加密 PDF. 工具处理任意大小的文档（在浏览器内存限制内），并生成干净、符合标准、在任何 PDF reader.

上传 PDF，可视化预览每页，选择要删除的页面，点击删除即可下载裁剪后的 PDF。

所有删除操作在浏览器本地使用 pdf-lib 完成，文档不会离开设备，对税务报告、法律文件等敏感 PDF 至关重要。`,
  },
  "image-cropper": {
    en: `A free browser-based image tool that crop images by dragging a selection area on canvas. Process your photos and graphics directly in your browser without uploading to any server.

Trimming an image to a specific aspect ratio or focus area is a routine task that desktop photo editors handle with heavyweight toolbars and layers. This cropper gives you a clean, adjustable selection rectangle right in the browser, ideal for quick social-media thumbnails or product-shot framing.

An interactive crop overlay lets you drag and resize the selection rectangle directly on the canvas, with optional aspect-ratio presets for common social media sizes (1:1, 4:3, 16:9, and more). The cropped output is generated at full resolution.

Drag the crop handles to define the region, or lock to a preset ratio such as 1:1, 16:9, or 4:3 from the dropdown. The selection dimensions display in real time, and applying the crop produces an instant preview before you download.

Crop coordinates are calculated and the region is extracted using the browser's built-in canvas APIs. Nothing about your image — original or cropped — is ever transmitted over the network.`,
    zh: `Image Cropper 是一款免费在线工具，通过在画布上拖拽选择区域来裁剪图片。

图片处理 通常需要 Photoshop 等 GIMP, 对于简单任务来说既昂贵又复杂. 这款工具为浏览器带来了核心图片处理能力。 无论你需要为网站压缩图片、为社交媒体调整尺寸、转换格式还是应用滤镜，一切都能即时完成，无需安装任何软件。

主要特点包括 drag-and-拖放上传便于文件管理、应用前实时预览、支持多种图片格式（JPEG、PNG、WebP、GIF、BMP）、可调质量和尺寸设置精确控制、支持多文件批量处理. 工具保留图片元数据并提供干净、优化的输出。

上传您的 图片——拖拽到工具区域或点击上传按钮. 通过可用的控制选项（质量滑块、尺寸输入、格式选择等）调整设置。 实时预览效果，满意后点击下载按钮保存处理后的图片。 批量操作时，选择多个文件即可一次性应用相同设置。所有图片处理 全部在浏览器中使用 Canvas API and JavaScript. 你的图片永远不会上传到任何服务器，确保完全隐私。 这对于敏感照片、商业文件或个人图片尤为重要。 No account required — just open, process, and download.`,
  },
  "image-resizer": {
    en: `A free browser-based image tool that resize images to exact dimensions with aspect ratio lock. Process your photos and graphics directly in your browser without uploading to any server.

Changing the pixel dimensions of a photo is one of the most common editing tasks, yet many people still open a full image editor just to do it. This resizer adjusts width and height in the browser, applying high-quality interpolation without any software install.

Enter exact pixel dimensions or scale by percentage, with an optional aspect-ratio lock that prevents accidental distortion. Common preset sizes for social media, banners, and thumbnails speed up the workflow.

Type the target width or height in pixels or as a percentage, and the other dimension updates automatically when the aspect-ratio lock is on. Choose a resampling filter for sharp or smooth results, then download the resized image immediately.

Pixel resampling is carried out by your browser's canvas drawing routines, so the original photo and its resized copy both stay in local memory. No image data leaves your device at any point.`,
    zh: `Image Resizer 是一款免费在线工具，按精确尺寸调整图片大小，锁定宽高比。

图片处理 通常需要 Photoshop 等 GIMP, 对于简单任务来说既昂贵又复杂. 这款工具为浏览器带来了核心图片处理能力。 无论你需要为网站压缩图片、为社交媒体调整尺寸、转换格式还是应用滤镜，一切都能即时完成，无需安装任何软件。

主要特点包括 drag-and-拖放上传便于文件管理、应用前实时预览、支持多种图片格式（JPEG、PNG、WebP、GIF、BMP）、可调质量和尺寸设置精确控制、支持多文件批量处理. 工具保留图片元数据并提供干净、优化的输出。

上传您的 图片——拖拽到工具区域或点击上传按钮. 通过可用的控制选项（质量滑块、尺寸输入、格式选择等）调整设置。 实时预览效果，满意后点击下载按钮保存处理后的图片。 批量操作时，选择多个文件即可一次性应用相同设置。所有图片处理 全部在浏览器中使用 Canvas API and JavaScript. 你的图片永远不会上传到任何服务器，确保完全隐私。 这对于敏感照片、商业文件或个人图片尤为重要。 No account required — just open, process, and download.`,
  },
  "image-filters": {
    en: `A free browser-based image tool that apply grayscale, sepia, blur, brightness, 和对比度滤镜. Process your photos and graphics directly in your browser without uploading to any server.

Applying a vintage, grayscale, or high-contrast look to a photo traditionally means loading it into a desktop photo editor with complex adjustment layers. This filter tool applies a dozen common effects instantly in the browser and lets you compare them side by side.

Eight adjustable filter effects — grayscale, sepia, blur, brightness, contrast, saturation, hue rotation, and invert — can be combined and fine-tuned with live sliders. The canvas preview updates instantly as you drag each control.

Pick from filter presets like sepia, blur, sharpen, brightness, and contrast, then fine-tune each effect's intensity with a dedicated slider. The preview refreshes as you move each control, and you can chain multiple filters before downloading.

Every filter is computed through canvas pixel manipulation in your browser. The photo you load and its filtered version are processed entirely on your device with no server round-trip.`,
    zh: `Image Filters 是一款免费在线工具，Apply grayscale, sepia, blur, brightness, 和对比度滤镜。

图片处理 通常需要 Photoshop 等 GIMP, 对于简单任务来说既昂贵又复杂. 这款工具为浏览器带来了核心图片处理能力。 无论你需要为网站压缩图片、为社交媒体调整尺寸、转换格式还是应用滤镜，一切都能即时完成，无需安装任何软件。

主要特点包括 drag-and-拖放上传便于文件管理、应用前实时预览、支持多种图片格式（JPEG、PNG、WebP、GIF、BMP）、可调质量和尺寸设置精确控制、支持多文件批量处理. 工具保留图片元数据并提供干净、优化的输出。

上传您的 图片——拖拽到工具区域或点击上传按钮. 通过可用的控制选项（质量滑块、尺寸输入、格式选择等）调整设置。 实时预览效果，满意后点击下载按钮保存处理后的图片。 批量操作时，选择多个文件即可一次性应用相同设置。所有图片处理 全部在浏览器中使用 Canvas API and JavaScript. 你的图片永远不会上传到任何服务器，确保完全隐私。 这对于敏感照片、商业文件或个人图片尤为重要。 No account required — just open, process, and download.`,
  },
  "color-picker": {
    en: `A free browser-based image tool that pick colors from uploaded images or use the color selector. Process your photos and graphics directly in your browser without uploading to any server.

Grabbing the exact color value from a specific spot in an image usually requires a desktop screen-color utility or a design application's eyedropper. This picker reads pixel colors directly from any image you open, returning HEX, RGB, and HSL values on the spot.

Click anywhere on your uploaded image to sample the exact pixel color, with the HEX, RGB, and HSL values displayed side by side. A magnifier loupe helps you target individual pixels precisely, and a history panel keeps your recently picked colors.

Load an image and move your cursor across it to see the color under the pointer update in real time. Click to lock in a sample, then copy the value in your preferred notation or add it to a saved palette for later.

Color sampling is done by reading individual pixels from an in-browser canvas. Your image stays in local memory the entire time, so picking colors from confidential designs or client mockups is completely private.`,
    zh: `图片取色器 是一款免费在线工具，从上传的图片中拾取颜色或使用颜色选择器。

图片处理 通常需要 Photoshop 等 GIMP, 对于简单任务来说既昂贵又复杂. 这款工具为浏览器带来了核心图片处理能力。 无论你需要为网站压缩图片、为社交媒体调整尺寸、转换格式还是应用滤镜，一切都能即时完成，无需安装任何软件。

主要特点包括 drag-and-拖放上传便于文件管理、应用前实时预览、支持多种图片格式（JPEG、PNG、WebP、GIF、BMP）、可调质量和尺寸设置精确控制、支持多文件批量处理. 工具保留图片元数据并提供干净、优化的输出。

上传您的 图片——拖拽到工具区域或点击上传按钮. 通过可用的控制选项（质量滑块、尺寸输入、格式选择等）调整设置。 实时预览效果，满意后点击下载按钮保存处理后的图片。 批量操作时，选择多个文件即可一次性应用相同设置。所有图片处理 全部在浏览器中使用 Canvas API and JavaScript. 你的图片永远不会上传到任何服务器，确保完全隐私。 这对于敏感照片、商业文件或个人图片尤为重要。 No account required — just open, process, and download.`,
  },
  "gif-maker": {
    en: `A free browser-based image tool that create animated gifs from multiple images or video clips. set frame delay, resize output, and optimize for web or social media. Process your photos and graphics directly in your browser without uploading to any server.

Building an animated GIF from a sequence of frames typically calls for specialized animation software with timeline controls and export settings. This GIF assembler stitches your images into a looping animation entirely in the browser, no installation required.

Arrange multiple images into an animated sequence with per-frame delay control, loop options (once, infinite, or custom count), and output dimension scaling. The generated GIF is optimized for web with reduced file size through color quantization.

Add the frames in the order you want them to play, set a delay per frame in milliseconds, and choose whether the animation loops once or repeatedly. A live preview plays the sequence so you can adjust timing before downloading the final file.

Frame encoding into the GIF format is handled by a client-side encoder running in your browser. The source images and the assembled animation never leave your device during the process.`,
    zh: `GIF Maker 是一款免费在线工具，Create animated GI支持从多张图片或视频片段生成。 设置帧延迟、调整输出尺寸，为网页或社交媒体进行优化。

图片处理 通常需要 Photoshop 等 GIMP, 对于简单任务来说既昂贵又复杂. 这款工具为浏览器带来了核心图片处理能力。 无论你需要为网站压缩图片、为社交媒体调整尺寸、转换格式还是应用滤镜，一切都能即时完成，无需安装任何软件。

主要特点包括 drag-and-拖放上传便于文件管理、应用前实时预览、支持多种图片格式（JPEG、PNG、WebP、GIF、BMP）、可调质量和尺寸设置精确控制、支持多文件批量处理. 工具保留图片元数据并提供干净、优化的输出。

上传您的 图片——拖拽到工具区域或点击上传按钮. 通过可用的控制选项（质量滑块、尺寸输入、格式选择等）调整设置。 实时预览效果，满意后点击下载按钮保存处理后的图片。 批量操作时，选择多个文件即可一次性应用相同设置。所有图片处理 全部在浏览器中使用 Canvas API and JavaScript. 你的图片永远不会上传到任何服务器，确保完全隐私。 这对于敏感照片、商业文件或个人图片尤为重要。 No account required — just open, process, and download.`,
  },
  "image-watermark": {
    en: `A free browser-based image tool that add text watermark to images with position and opacity control. Process your photos and graphics directly in your browser without uploading to any server.

Protecting images with a text or logo overlay is a task professional photographers usually do in batch inside a desktop editor. This watermark tool stamps your images right in the browser, letting you position, scale, and style the overlay with live feedback.

Position the text watermark anywhere on the image using nine placement presets or custom x/y coordinates, then adjust font size, color, opacity, and rotation angle. The watermark renders crisply at the source image's full resolution.

Type your watermark text or upload a transparent PNG logo, then use the position grid and sliders to set placement, size, opacity, and rotation. The overlay renders on a live preview, and batch mode applies the same watermark to every image you load.

Watermark compositing is performed through canvas blending operations in your browser. Because the original photos and stamped copies are processed locally, your unwatermarked files are never exposed to a server.`,
    zh: `Image Watermark 是一款免费在线工具，为图片添加文字水印，控制位置和透明度。

图片处理 通常需要 Photoshop 等 GIMP, 对于简单任务来说既昂贵又复杂. 这款工具为浏览器带来了核心图片处理能力。 无论你需要为网站压缩图片、为社交媒体调整尺寸、转换格式还是应用滤镜，一切都能即时完成，无需安装任何软件。

主要特点包括 drag-and-拖放上传便于文件管理、应用前实时预览、支持多种图片格式（JPEG、PNG、WebP、GIF、BMP）、可调质量和尺寸设置精确控制、支持多文件批量处理. 工具保留图片元数据并提供干净、优化的输出。

上传您的 图片——拖拽到工具区域或点击上传按钮. 通过可用的控制选项（质量滑块、尺寸输入、格式选择等）调整设置。 实时预览效果，满意后点击下载按钮保存处理后的图片。 批量操作时，选择多个文件即可一次性应用相同设置。所有图片处理 全部在浏览器中使用 Canvas API and JavaScript. 你的图片永远不会上传到任何服务器，确保完全隐私。 这对于敏感照片、商业文件或个人图片尤为重要。 No account required — just open, process, and download.`,
  },
  "image-merge": {
    en: `A free browser-based image tool that combine multiple images into one side by side or grid. Process your photos and graphics directly in your browser without uploading to any server.

Combining two or more images into a single canvas — whether side by side or stacked vertically — normally requires a layout tool or a photo editor with manual positioning. This merger arranges multiple images on a shared canvas directly in the browser.

Combine two or more images horizontally, vertically, or in a grid layout, with adjustable spacing, background color, and automatic dimension matching. The tool calculates the output canvas size based on your arrangement choices.

Add the images you want to combine, choose a horizontal or vertical layout, and set the gap and background color between them. The merged dimensions are calculated automatically, and a preview shows the final composition before you download.

The composite canvas is assembled using browser-native canvas drawing operations. All input images and the resulting merged file remain on your device with no network transfer.`,
    zh: `Image Merger 是一款免费在线工具，将多张图片并排或按网格合并为一张。

图片处理 通常需要 Photoshop 等 GIMP, 对于简单任务来说既昂贵又复杂. 这款工具为浏览器带来了核心图片处理能力。 无论你需要为网站压缩图片、为社交媒体调整尺寸、转换格式还是应用滤镜，一切都能即时完成，无需安装任何软件。

主要特点包括 drag-and-拖放上传便于文件管理、应用前实时预览、支持多种图片格式（JPEG、PNG、WebP、GIF、BMP）、可调质量和尺寸设置精确控制、支持多文件批量处理. 工具保留图片元数据并提供干净、优化的输出。

上传您的 图片——拖拽到工具区域或点击上传按钮. 通过可用的控制选项（质量滑块、尺寸输入、格式选择等）调整设置。 实时预览效果，满意后点击下载按钮保存处理后的图片。 批量操作时，选择多个文件即可一次性应用相同设置。所有图片处理 全部在浏览器中使用 Canvas API and JavaScript. 你的图片永远不会上传到任何服务器，确保完全隐私。 这对于敏感照片、商业文件或个人图片尤为重要。 No account required — just open, process, and download.`,
  },
  "image-splitter": {
    en: `A free browser-based image tool that split a single image into multiple tiles by rows and columns. perfect for creating sprite sheets, grid layouts, and image segments. Process your photos and graphics directly in your browser without uploading to any server.

Dividing a single image into a grid of smaller tiles is useful for Instagram carousels, contact sheets, or print layouts, yet most people resort to manual cropping in a desktop editor. This splitter slices an image into rows and columns automatically, right in the browser.

Define the number of rows and columns to slice a single image into a uniform grid of tiles, each exported as an individual file. Perfect for creating Instagram grid layouts, sprite sheets, or puzzle pieces.

Load an image and set the number of rows and columns for the grid — for example 3 columns for a three-tile carousel. The tool previews the slice boundaries and lets you download every tile as an individual file or as a ZIP archive.

Grid slicing is executed through canvas region extraction in your browser. Neither the original image nor any of the generated tiles are ever sent to a remote server.`,
    zh: `Image Splitter 是一款免费在线工具，按行和列将单张图片切分为多个区块。 非常适合创建精灵表、网格布局和图片切片。。

图片处理 通常需要 Photoshop 等 GIMP, 对于简单任务来说既昂贵又复杂. 这款工具为浏览器带来了核心图片处理能力。 无论你需要为网站压缩图片、为社交媒体调整尺寸、转换格式还是应用滤镜，一切都能即时完成，无需安装任何软件。

主要特点包括 drag-and-拖放上传便于文件管理、应用前实时预览、支持多种图片格式（JPEG、PNG、WebP、GIF、BMP）、可调质量和尺寸设置精确控制、支持多文件批量处理. 工具保留图片元数据并提供干净、优化的输出。

上传您的 图片——拖拽到工具区域或点击上传按钮. 通过可用的控制选项（质量滑块、尺寸输入、格式选择等）调整设置。 实时预览效果，满意后点击下载按钮保存处理后的图片。 批量操作时，选择多个文件即可一次性应用相同设置。所有图片处理 全部在浏览器中使用 Canvas API and JavaScript. 你的图片永远不会上传到任何服务器，确保完全隐私。 这对于敏感照片、商业文件或个人图片尤为重要。 No account required — just open, process, and download.`,
  },
  "image-flip": {
    en: `A free browser-based image tool that flip images horizontally or vertically and rotate by 90-degree increments. mirror selfies, correct orientation, 并即时转换照片. Process your photos and graphics directly in your browser without uploading to any server.

Mirroring an image horizontally or vertically is a basic transformation that surprisingly few lightweight tools do well without launching a full editor. This flipper reflects your image along either axis instantly in the browser, preserving full resolution and color depth.

One-click buttons flip the image horizontally or vertically, and rotation controls work in 90-degree increments for quick orientation fixes. The tool processes at the original resolution with no quality loss.

Open an image and choose horizontal, vertical, or both as the flip direction. The mirrored preview appears immediately, and you can download the result in the original format with a single click.

Pixel reflection is a mathematically simple operation carried out by canvas transform functions in your browser. The image data never leaves your device, so flipping confidential or personal photos is risk-free.`,
    zh: `Image Flip & Rotate 是一款免费在线工具，水平或垂直翻转图片并旋转 90-degree increments. Mirror selfies, correct orientation, 并即时转换照片.。

图片处理 通常需要 Photoshop 等 GIMP, 对于简单任务来说既昂贵又复杂. 这款工具为浏览器带来了核心图片处理能力。 无论你需要为网站压缩图片、为社交媒体调整尺寸、转换格式还是应用滤镜，一切都能即时完成，无需安装任何软件。

主要特点包括 drag-and-拖放上传便于文件管理、应用前实时预览、支持多种图片格式（JPEG、PNG、WebP、GIF、BMP）、可调质量和尺寸设置精确控制、支持多文件批量处理. 工具保留图片元数据并提供干净、优化的输出。

上传您的 图片——拖拽到工具区域或点击上传按钮. 通过可用的控制选项（质量滑块、尺寸输入、格式选择等）调整设置。 实时预览效果，满意后点击下载按钮保存处理后的图片。 批量操作时，选择多个文件即可一次性应用相同设置。所有图片处理 全部在浏览器中使用 Canvas API and JavaScript. 你的图片永远不会上传到任何服务器，确保完全隐私。 这对于敏感照片、商业文件或个人图片尤为重要。 No account required — just open, process, and download.`,
  },
  "image-border": {
    en: `A free browser-based image tool that add customizable borders, frames, and padding to images. choose colors, widths, corner radius, and shadow effects for polished photos. Process your photos and graphics directly in your browser without uploading to any server.

Adding a decorative frame or solid-color border around a photo is a quick way to make thumbnails stand out, but doing it precisely usually means opening a design program. This border tool draws clean outlines around your image with adjustable width, color, and style — all in the browser.

Customize border width, color, corner radius, and optional drop shadow with a live preview that shows exactly how the frame will look. Padding between the image and border can be adjusted independently.

Enter a border width in pixels, pick a color from the swatch picker, and choose a style such as solid, dashed, or double. A live preview shows the framing effect, and batch mode applies the same border to a folder of images at once.

Border drawing is handled by canvas stroke operations running locally in your browser. Your images and their framed versions stay on your device throughout the process.`,
    zh: `Image Border 是一款免费在线工具，为图片添加可自定义的边框、框架和内边距。选择颜色、宽度、圆角半径和阴影效果来美化ed photos.。

图片处理 通常需要 Photoshop 等 GIMP, 对于简单任务来说既昂贵又复杂. 这款工具为浏览器带来了核心图片处理能力。 无论你需要为网站压缩图片、为社交媒体调整尺寸、转换格式还是应用滤镜，一切都能即时完成，无需安装任何软件。

主要特点包括 drag-and-拖放上传便于文件管理、应用前实时预览、支持多种图片格式（JPEG、PNG、WebP、GIF、BMP）、可调质量和尺寸设置精确控制、支持多文件批量处理. 工具保留图片元数据并提供干净、优化的输出。

上传您的 图片——拖拽到工具区域或点击上传按钮. 通过可用的控制选项（质量滑块、尺寸输入、格式选择等）调整设置。 实时预览效果，满意后点击下载按钮保存处理后的图片。 批量操作时，选择多个文件即可一次性应用相同设置。所有图片处理 全部在浏览器中使用 Canvas API and JavaScript. 你的图片永远不会上传到任何服务器，确保完全隐私。 这对于敏感照片、商业文件或个人图片尤为重要。 No account required — just open, process, and download.`,
  },
  "meme-generator": {
    en: `A free browser-based image tool that create memes by adding top and bottom text to images. Process your photos and graphics directly in your browser without uploading to any server.

Creating a captioned meme image conventionally means using a meme website that uploads your photo to its servers, or wrestling with text layers in a desktop editor. This generator overlays bold top and bottom captions onto any image right in the browser, in the classic Impact-font style.

Type top and bottom captions in the classic Impact font, adjust font size and stroke width, and preview the meme instantly on your uploaded image. Preset meme templates are included alongside custom image upload.

Upload a background image or pick a stock template, then type your top and bottom captions. Adjust the font size and stroke width, drag the text to reposition it, and download the finished meme as a single image.

Caption rendering is done with canvas text-drawing operations inside your browser. The background photo and the completed meme are never uploaded, so you can use personal images without any privacy concerns.`,
    zh: `Meme Generator 是一款免费在线工具，通过在图片上添加顶部和底部文字来制作表情包。

图片处理 通常需要 Photoshop 等 GIMP, 对于简单任务来说既昂贵又复杂. 这款工具为浏览器带来了核心图片处理能力。 无论你需要为网站压缩图片、为社交媒体调整尺寸、转换格式还是应用滤镜，一切都能即时完成，无需安装任何软件。

主要特点包括 drag-and-拖放上传便于文件管理、应用前实时预览、支持多种图片格式（JPEG、PNG、WebP、GIF、BMP）、可调质量和尺寸设置精确控制、支持多文件批量处理. 工具保留图片元数据并提供干净、优化的输出。

上传您的 图片——拖拽到工具区域或点击上传按钮. 通过可用的控制选项（质量滑块、尺寸输入、格式选择等）调整设置。 实时预览效果，满意后点击下载按钮保存处理后的图片。 批量操作时，选择多个文件即可一次性应用相同设置。所有图片处理 全部在浏览器中使用 Canvas API and JavaScript. 你的图片永远不会上传到任何服务器，确保完全隐私。 这对于敏感照片、商业文件或个人图片尤为重要。 No account required — just open, process, and download.`,
  },
  "image-to-sketch": {
    en: `A free browser-based image tool that convert photos into pencil sketch drawings and line art. apply artistic filters to create realistic hand-drawn effects from your images. Process your photos and graphics directly in your browser without uploading to any server.

Turning a photograph into a pencil-sketch or pencil-drawing style used to require artistic skill or specialized filter software. This sketch converter applies edge-detection and shading algorithms to produce a hand-drawn look from any photo, entirely in the browser.

Choose from multiple sketch styles — pencil, charcoal, and line art — with adjustable intensity and edge-detection sensitivity. The artistic effect renders in real time as you move the sliders.

Load a photo and adjust the edge-intensity and shading sliders until the sketch effect matches the level of detail you want. A split preview shows the original alongside the sketch so you can compare before downloading.

The sketch effect is generated through canvas convolution and pixel manipulation in your browser. The source photo and its sketched rendition stay on your device with no server involvement.`,
    zh: `Image to Sketch 是一款免费在线工具，将照片转换为铅笔素描和线条画。 应用艺术滤镜，从图片创建逼真的手绘效果。。

图片处理 通常需要 Photoshop 等 GIMP, 对于简单任务来说既昂贵又复杂. 这款工具为浏览器带来了核心图片处理能力。 无论你需要为网站压缩图片、为社交媒体调整尺寸、转换格式还是应用滤镜，一切都能即时完成，无需安装任何软件。

主要特点包括 drag-and-拖放上传便于文件管理、应用前实时预览、支持多种图片格式（JPEG、PNG、WebP、GIF、BMP）、可调质量和尺寸设置精确控制、支持多文件批量处理. 工具保留图片元数据并提供干净、优化的输出。

上传您的 图片——拖拽到工具区域或点击上传按钮. 通过可用的控制选项（质量滑块、尺寸输入、格式选择等）调整设置。 实时预览效果，满意后点击下载按钮保存处理后的图片。 批量操作时，选择多个文件即可一次性应用相同设置。所有图片处理 全部在浏览器中使用 Canvas API and JavaScript. 你的图片永远不会上传到任何服务器，确保完全隐私。 这对于敏感照片、商业文件或个人图片尤为重要。 No account required — just open, process, and download.`,
  },
  "emoji-remover": {
    en: `A free online text processing tool that remove all emoji characters from text while keeping words. Transform, analyze, and manipulate text instantly in your browser.

Emoji characters embedded in form submissions, database imports, and CSV exports frequently break downstream systems that expect plain ASCII — corrupting SQL inserts, truncating API fields, or rendering as mojibake in legacy applications. Stripping emoji while preserving the surrounding words is a cleanup step no text editor automates, yet it is essential for sanitizing user-generated content before it enters a strict-encoding pipeline.

The tool strips emoji and pictographic Unicode characters using the latest emoji property ranges, while preserving standard punctuation, symbols, and text. A removed-character count shows how many emoji were cleaned.

Paste text containing emoji and the tool instantly strips all emoji characters while preserving the surrounding words and punctuation. Copy the clean text with one click.

All processing happens locally. Your text never leaves your browser — safe for cleaning up messages, form submissions, or database content.`,
    zh: `Emoji Remover 是一款免费在线工具，移除文本中所有 emoji 字符，同时保留文字。

写作者、开发者, 和内容创作者经常需要处理文本 — counting words, converting case, checking diffs, or reformatting content. 桌面文本编辑器缺少这些专业功能，而在线替代方案通常需要注册或有使用限制。 这款工具提供无限、即时的文本处理，界面简洁专注。

主要特点包括 real-实时输入即处理、支持大文本输入（最大 100,000 characters), 多种输出格式和选项、一键复制到剪贴板、清晰的视觉反馈显示变更和结果. 工具正确处理 Unicode，支持任何语言的文本。

粘贴含有 emoji 的文本，工具即时剔除所有 emoji 字符，同时保留周围的文字和标点，一键复制纯文本。

所有处理在本地完成，文本不会离开浏览器，适合清理消息、表单提交或数据库内容。`,
  },
  "unicode-detector": {
    en: `A free online text processing tool that inspect unicode characters with codepoint and category info. Transform, analyze, and manipulate text instantly in your browser.

Invisible Unicode characters — zero-width spaces, soft hyphens, right-to-left override marks — can silently break code, cause phantom diff failures, and enable homoglyph phishing attacks. Developers debugging mysterious encoding errors and security teams auditing suspicious text need a way to inspect every character's codepoint, category, and visibility status, which no standard editor exposes in a readable breakdown.

Each character in your text is decomposed into its Unicode codepoint (U+XXXX), official name, general category, block, and UTF-8 byte sequence. The output table helps debug encoding issues and invisible characters.

Paste any text and the tool breaks it down character by character, showing each character's Unicode codepoint, name, category (letter, digit, symbol, etc.), and UTF-8 byte encoding.

All analysis happens locally in your browser. Your text is never uploaded — safe for inspecting log files, debug output, or sensitive data.`,
    zh: `Unicode Character Detector 是一款免费在线工具，查看 Unicode 字符的码点和类别信息。

写作者、开发者, 和内容创作者经常需要处理文本 — counting words, converting case, checking diffs, or reformatting content. 桌面文本编辑器缺少这些专业功能，而在线替代方案通常需要注册或有使用限制。 这款工具提供无限、即时的文本处理，界面简洁专注。

主要特点包括 real-实时输入即处理、支持大文本输入（最大 100,000 characters), 多种输出格式和选项、一键复制到剪贴板、清晰的视觉反馈显示变更和结果. 工具正确处理 Unicode，支持任何语言的文本。

粘贴任意文本，工具逐字符拆解，显示每个字符的 Unicode 码点、名称、类别（字母、数字、符号等）和 UTF-8 字节编码。

所有分析在浏览器本地完成，文本不会上传，适合检查日志文件、调试输出或敏感数据。`,
  },
  "caesar-cipher": {
    en: `A free online Caesar cipher tool that shifts each letter in your text by a fixed number of positions through the alphabet. Named after Julius Caesar — who used a shift of 3 to protect military correspondence — this is one of the oldest and simplest encryption methods, making it a staple of introductory cryptography courses and CTF puzzle challenges.

Set the shift key (1–25) and every letter moves that many places forward: with a shift of 3, A becomes D, HELLO becomes KHOOR. To decrypt, apply the same shift in reverse. The tool handles uppercase and lowercase separately and leaves numbers and symbols untouched. A brute-force mode cycles through all 25 possible shifts at once, displaying every candidate plaintext side by side — invaluable when you don't know the key and need to eyeball which result reads like real language.

This brute-force approach works precisely because Caesar's design is weak by modern standards: with only 25 possible keys, a human can crack it in seconds. That makes it an excellent teaching tool for understanding why stronger ciphers like AES replaced classical substitution. Use it to build escape-room clues, add hidden messages to games, teach the fundamentals of symmetric encryption, or analyze historical ciphers. Nothing leaves your browser.`,
    zh: `免费在线凯撒密码工具，将文本中每个字母按固定位移量在字母表中移动。以尤利乌斯·凯撒命名——他用位移3来加密军事信件，这是最古老的加密方式之一，也是密码学入门和CTF比赛的经典题型。设置位移密钥（1–25），每个字母即向前移动对应位数；解密时反向移动即可。暴力破解模式会同时显示全部25种可能结果，方便在没有密钥时找出可读明文。适用于密室逃脱谜题、游戏隐藏信息、密码学教学和历史密码分析。所有操作均在浏览器中完成。`,
  },
  "json-diff": {
    en: `A free online text processing tool that compare two json 对象并高亮差异. Transform, analyze, and manipulate text instantly in your browser.

When API responses change between deployments or configuration files drift across environments, identifying the exact structural difference between two JSON documents is critical for debugging. Nested objects, reordered arrays, and added or removed keys are easy to miss when scanning raw text. A purpose-built JSON diff tool recursively compares both structures and surfaces every discrepancy with a clear path notation.

The comparison performs a deep structural diff that traverses nested objects and arrays, highlighting added keys, removed keys, and changed values with their old and new content. JSONPath notation pinpoints exactly where each difference lives.

Paste your original JSON in the left pane and the modified JSON in the right pane. Added, removed, and changed keys and values are highlighted side by side instantly.

All comparison happens locally. Your JSON data never leaves your browser — safe for comparing API responses, config files, and sensitive payloads.`,
    zh: `JSON Diff 是一款免费在线工具，Compare two JSON 对象并高亮差异。

写作者、开发者, 和内容创作者经常需要处理文本 — counting words, converting case, checking diffs, or reformatting content. 桌面文本编辑器缺少这些专业功能，而在线替代方案通常需要注册或有使用限制。 这款工具提供无限、即时的文本处理，界面简洁专注。

主要特点包括 real-实时输入即处理、支持大文本输入（最大 100,000 characters), 多种输出格式和选项、一键复制到剪贴板、清晰的视觉反馈显示变更和结果. 工具正确处理 Unicode，支持任何语言的文本。

在左侧粘贴原始 JSON，右侧粘贴修改后的 JSON，新增、删除和修改的键值对即时并排高亮显示。

所有比较在本地完成，JSON 数据不会离开浏览器，适合比较 API 响应、配置文件和敏感载荷。`,
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

Global teams, remote freelancers, and international travelers constantly juggle time zones — scheduling a standup between Berlin and San Francisco or catching a live stream from Tokyo requires precise offset awareness. Daylight Saving Time changes and region-specific rules make mental conversions unreliable, especially across hemispheres with opposite DST schedules.

Pick a source city or timezone and a target timezone to see the converted time instantly, with a visual overlap indicator showing business-hour compatibility. Daylight Saving Time transitions are handled automatically using the IANA timezone database.

Pick any source city or UTC offset and the tool displays the corresponding local time across all major world zones side by side. A visual timeline highlights overlapping working hours, and DST adjustments apply automatically based on each region's current rules.

Timezone offset logic — including the IANA timezone database rules — is resolved entirely in-browser through JavaScript. Meeting schedules and participant locations never reach a server, keeping confidential calendar coordination private.`,
    zh: `时区转换器 是一款免费在线工具，即时在不同世界时区之间转换时间。 跨时区安排会议并比较全球时钟。。

单位换算 在日常烹饪、工程、旅行、科学和生活中经常需要. 虽然手机有基础计算器，但很少能处理你需要的所有单位。 这款工具提供全面的转换支持，即时出结果，无需记忆换算系数就能轻松切换计量体系。

主要特点包括 支持数十种单位类型、即时输入即出结果、高精度计算含正确舍入、同时显示多种单位的简洁界面、一键交换输入输出单位。 工具同时支持常见和专业单位。

输入您的数值 在输入框中输入数值，从下拉菜单选择源单位，即可同时查看所有其他单位的转换值. 无需点击按钮 — 结果随输入实时更新. 使用交换按钮反转转换方向，或从全面的列表中选择不同的单位。

所有计算 全部在浏览器中使用 JavaScript. 不会向任何服务器发送数据。 你输入的数值和转换结果完全保密。 No account, no signup, 除必要功能外不使用 Cookie.`,
  },
  "binary-to-text": {
    en: `A free online text processing tool that convert binary code to text and text back to binary. Transform, analyze, and manipulate text instantly in your browser.

Decoding sequences of 0s and 1s back into readable text is essential for interpreting raw memory dumps, analyzing network packet payloads, and solving binary-encoded puzzles in computer science courses. Converting binary by hand — grouping bits into bytes, looking up ASCII values — is slow and error-prone. A dedicated translator handles multi-byte UTF-8 sequences correctly and processes long strings instantly.

Decode mode accepts 8-bit binary groups separated by spaces or as one continuous bitstream, automatically detecting and handling both ASCII and extended character sets. The decoded text supports UTF-8 multi-byte sequences.

Paste binary digits (space-separated 8-bit groups or a continuous stream) in the input box and the decoded text appears instantly below. Switch to encode mode to convert text back to binary.

All conversion happens in your browser. Neither your text nor binary data is sent anywhere — safe for decoding private messages or learning exercises.`,
    zh: `Binary to Text 是一款免费在线工具，将二进制代码转为文本，文本转为二进制。

写作者、开发者, 和内容创作者经常需要处理文本 — counting words, converting case, checking diffs, or reformatting content. 桌面文本编辑器缺少这些专业功能，而在线替代方案通常需要注册或有使用限制。 这款工具提供无限、即时的文本处理，界面简洁专注。

主要特点包括 real-实时输入即处理、支持大文本输入（最大 100,000 characters), 多种输出格式和选项、一键复制到剪贴板、清晰的视觉反馈显示变更和结果. 工具正确处理 Unicode，支持任何语言的文本。

在输入框粘贴二进制数字（空格分隔的8位组或连续流），解码后的文本即时显示。切换到编码模式可将文本转回二进制。

所有转换在浏览器中完成，文本和二进制数据均不会外传。`,
  },
  "image-invert": {
    en: `A free browser-based image tool that invert or negate colors in any image instantly. create negative effects, x-ray looks, 一键实现艺术色彩反转. Process your photos and graphics directly in your browser without uploading to any server.

Inverting the colors of an image — producing a negative — is a simple yet useful transformation for analyzing scans, creating artistic effects, or checking contrast accessibility. Rather than opening a full image editor, this inverter flips every color channel with one click in the browser.

A single click inverts every pixel's color to produce a photographic negative, useful for checking film negatives, creating artistic effects, or previewing how dark UI themes render under inverted imagery.

Open an image and toggle the invert control to produce an instant negative. You can invert all channels at once or target individual red, green, or blue channels, with a live preview reflecting each change.

Color-channel inversion is computed by iterating over pixel data in a browser canvas. The image you load and its inverted output are processed locally and never transmitted to a server.`,
    zh: `Image Invert 是一款免费在线工具，即时反转或取反任意图片的颜色。 创建负片效果, X-ray looks, 一键实现艺术色彩反转.。

图片处理 通常需要 Photoshop 等 GIMP, 对于简单任务来说既昂贵又复杂. 这款工具为浏览器带来了核心图片处理能力。 无论你需要为网站压缩图片、为社交媒体调整尺寸、转换格式还是应用滤镜，一切都能即时完成，无需安装任何软件。

主要特点包括 drag-and-拖放上传便于文件管理、应用前实时预览、支持多种图片格式（JPEG、PNG、WebP、GIF、BMP）、可调质量和尺寸设置精确控制、支持多文件批量处理. 工具保留图片元数据并提供干净、优化的输出。

上传您的 图片——拖拽到工具区域或点击上传按钮. 通过可用的控制选项（质量滑块、尺寸输入、格式选择等）调整设置。 实时预览效果，满意后点击下载按钮保存处理后的图片。 批量操作时，选择多个文件即可一次性应用相同设置。所有图片处理 全部在浏览器中使用 Canvas API and JavaScript. 你的图片永远不会上传到任何服务器，确保完全隐私。 这对于敏感照片、商业文件或个人图片尤为重要。 No account required — just open, process, and download.`,
  },
  "image-collage": {
    en: `A free browser-based image tool that combine multiple photos into a beautiful collage grid. choose layouts, spacing, background colors, 并以高分辨率导出. Process your photos and graphics directly in your browser without uploading to any server.

Assembling a visually appealing collage from multiple photos traditionally requires scrapbooking software or a design application with layout templates. This collage maker arranges several images into a polished grid or freestyle layout directly in the browser, ready for social media or printing.

Select from grid layouts (2x2, 3x3, mosaics), set spacing between photos, choose a background color, and drag images into position. Export resolutions go up to 4K for print-quality collages.

Choose a collage template or start from a blank canvas, then drop images into each slot and drag them into position. Adjust spacing, corner rounding, and background color, and swap layouts on the fly with an instant preview before exporting.

Collage composition is rendered entirely through canvas operations in your browser. Every photo you add and the finished collage remain on your device, making it safe to use personal or family pictures.`,
    zh: `照片拼贴制作器 是一款免费在线工具，将多张照片合并为精美的拼贴网格。 Choose layouts, spacing, background colors, 并以高分辨率导出.。

图片处理 通常需要 Photoshop 等 GIMP, 对于简单任务来说既昂贵又复杂. 这款工具为浏览器带来了核心图片处理能力。 无论你需要为网站压缩图片、为社交媒体调整尺寸、转换格式还是应用滤镜，一切都能即时完成，无需安装任何软件。

主要特点包括 drag-and-拖放上传便于文件管理、应用前实时预览、支持多种图片格式（JPEG、PNG、WebP、GIF、BMP）、可调质量和尺寸设置精确控制、支持多文件批量处理. 工具保留图片元数据并提供干净、优化的输出。

上传您的 图片——拖拽到工具区域或点击上传按钮. 通过可用的控制选项（质量滑块、尺寸输入、格式选择等）调整设置。 实时预览效果，满意后点击下载按钮保存处理后的图片。 批量操作时，选择多个文件即可一次性应用相同设置。所有图片处理 全部在浏览器中使用 Canvas API and JavaScript. 你的图片永远不会上传到任何服务器，确保完全隐私。 这对于敏感照片、商业文件或个人图片尤为重要。 No account required — just open, process, and download.`,
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

Building harmonious color palettes is a core step in brand design, UI theming, and data-visualization styling. Designers need complementary, analogous, triadic, and monochromatic schemes derived from a single seed color, but iterating through color-theory relationships manually is slow and requires deep knowledge of the HSL color wheel.

Pick a base color via the picker or hex input, then choose from five harmony rules — complementary, analogous, triadic, tetradic, and monochromatic — to generate a coordinated five-swatch palette. Each swatch copies its hex code on click.

Pick a base color using the color picker or enter a hex value, then choose a harmony type (complementary, analogous, triadic, tetradic, or monochromatic). Click any swatch to copy its hex code.

All palette generation happens locally. No colors or preferences are stored or tracked.`,
    zh: `调色板生成器 是一款免费在线工具，生成配色方案: monochromatic, complementary, and more。

日常任务 比如生成密码、创建 QR codes, rolling dice, or checking BMI shouldn't 需要安装软件或创建账户. 这款工具提供快速、可靠的解决方案，在浏览器中即时运行。 It's 非常适合需要快速出结果而不想安装专业软件的一次性任务.

主要特点包括 即时结果零加载时间、简洁直观界面零学习成本、可微调的自定义选项、一键复制或下载输出、适配任何设备的响应式设计。 工具专注于做好一件事，而且做得很快。

使用拾色器选择基色或输入十六进制值，选择配色类型（互补、类似、三分、四分或单色），点击任意色块复制其 hex 值。

所有调色板生成在本地完成，不存储或追踪任何颜色或偏好。`,
  },
  "roman-numeral": {
    en: `A free online conversion calculator that convert between roman numerals and arabic numbers instantly. works with values from 1 to 3999, 包括常见数字组合. Get accurate results instantly without any software installation.

Roman numerals persist in surprising places: movie copyright dates, book chapter headings, clock faces, royal regnal numbers, sporting event titles like Super Bowl LVIII, and outline structures in academic writing. Translating between Arabic numbers and Roman notation by hand requires memorizing subtractive rules (IV, IX, XL) that trip up even confident users.

Enter any number from 1 to 3999 to get its Roman numeral equivalent, or type a Roman numeral to convert back to Arabic. The tool validates subtractive notation rules (IV, IX, XL, XC, CD, CM) and flags invalid combinations.

Type any number from 1 to 3999 and the Roman numeral equivalent appears instantly — or paste a Roman numeral and get its Arabic value with validation that flags invalid combinations. The converter handles standard subtractive notation and explains the breakdown of each symbol.

Numeral conversion logic runs as pure JavaScript in your browser with no external API calls. This keeps the tool instantly available offline, which is useful in classrooms and exam settings where network access may be restricted.`,
    zh: `罗马数字转换器 是一款免费在线工具，即时在罗马数字和阿拉伯数字之间转换。 支持以下范围的数值： 1 to 3999, 包括常见数字组合.。

单位换算 在日常烹饪、工程、旅行、科学和生活中经常需要. 虽然手机有基础计算器，但很少能处理你需要的所有单位。 这款工具提供全面的转换支持，即时出结果，无需记忆换算系数就能轻松切换计量体系。

主要特点包括 支持数十种单位类型、即时输入即出结果、高精度计算含正确舍入、同时显示多种单位的简洁界面、一键交换输入输出单位。 工具同时支持常见和专业单位。

输入您的数值 在输入框中输入数值，从下拉菜单选择源单位，即可同时查看所有其他单位的转换值. 无需点击按钮 — 结果随输入实时更新. 使用交换按钮反转转换方向，或从全面的列表中选择不同的单位。

所有计算 全部在浏览器中使用 JavaScript. 不会向任何服务器发送数据。 你输入的数值和转换结果完全保密。 No account, no signup, 除必要功能外不使用 Cookie.`,
  },
  "percentage-calculator": {
    en: `A free online conversion calculator that calculate percentages, what if, increase/decrease easily. Get accurate results instantly without any software installation.

Percentage calculations surface constantly: discount pricing during sales, tax rates on invoices, tip amounts at restaurants, grade scores in education, and margin analysis in business reports. Mental percentage math is notoriously error-prone, especially for percentage-change and percentage-of scenarios that trip up even numerate professionals.

Three calculation modes cover 'X% of Y', 'X is what % of Y', and 'percentage increase/decrease from X to Y' — each updating instantly as you type the inputs.

Choose a calculation mode — percentage of a number, what percent X is of Y, or percentage increase/decrease — enter your values, and the result appears immediately with the underlying formula shown for transparency. Multiple modes let you switch between discount math and growth-rate analysis without re-entering data.

All percentage computations execute as client-side JavaScript arithmetic. Financial figures, salary data, and pricing models remain entirely within the browser session — no sensitive business metrics are ever transmitted or logged remotely.`,
    zh: `Percentage Calculator 是一款免费在线工具，Calculate percentages, what if, increase/decrease easily。

单位换算 在日常烹饪、工程、旅行、科学和生活中经常需要. 虽然手机有基础计算器，但很少能处理你需要的所有单位。 这款工具提供全面的转换支持，即时出结果，无需记忆换算系数就能轻松切换计量体系。

主要特点包括 支持数十种单位类型、即时输入即出结果、高精度计算含正确舍入、同时显示多种单位的简洁界面、一键交换输入输出单位。 工具同时支持常见和专业单位。

输入您的数值 在输入框中输入数值，从下拉菜单选择源单位，即可同时查看所有其他单位的转换值. 无需点击按钮 — 结果随输入实时更新. 使用交换按钮反转转换方向，或从全面的列表中选择不同的单位。

所有计算 全部在浏览器中使用 JavaScript. 不会向任何服务器发送数据。 你输入的数值和转换结果完全保密。 No account, no signup, 除必要功能外不使用 Cookie.`,
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

Calculating exact age — down to years, months, and days — is necessary for eligibility verification, insurance underwriting, visa applications, retirement planning, and birthday countdowns. Calendar quirks like leap years and varying month lengths make manual computation unreliable, particularly when the span crosses multiple decades.

Enter a birth date and optionally a target date to see the exact age broken down into years, months, weeks, days, hours, and even seconds. A next-birthday countdown shows days remaining until the next milestone.

Enter a birth date and optionally a target date to receive a precise breakdown in years, months, weeks, and days. The calculator also shows total days lived and the next birthday countdown, with leap-year logic handled automatically.

Age computation runs entirely through JavaScript's native Date object in your browser. Personal birth dates and identity-related information never leave your device, which is essential for privacy-sensitive eligibility and documentation tasks.`,
    zh: `Age Calculator 是一款免费在线工具，精确计算年龄，显示年、月、周和天。 查看未来某天的年龄，或倒数到下一个生日。。

单位换算 在日常烹饪、工程、旅行、科学和生活中经常需要. 虽然手机有基础计算器，但很少能处理你需要的所有单位。 这款工具提供全面的转换支持，即时出结果，无需记忆换算系数就能轻松切换计量体系。

主要特点包括 支持数十种单位类型、即时输入即出结果、高精度计算含正确舍入、同时显示多种单位的简洁界面、一键交换输入输出单位。 工具同时支持常见和专业单位。

输入您的数值 在输入框中输入数值，从下拉菜单选择源单位，即可同时查看所有其他单位的转换值. 无需点击按钮 — 结果随输入实时更新. 使用交换按钮反转转换方向，或从全面的列表中选择不同的单位。

所有计算 全部在浏览器中使用 JavaScript. 不会向任何服务器发送数据。 你输入的数值和转换结果完全保密。 No account, no signup, 除必要功能外不使用 Cookie.`,
  },
  "bmi-calculator": {
    en: `A free online conversion calculator that calculate body mass index and check your health category. Get accurate results instantly without any software installation.

Body Mass Index remains the most widely used screening metric for healthy weight ranges, appearing in fitness apps, medical intake forms, and insurance assessments. Computing BMI requires dividing weight by height squared with unit conversion between metric and imperial — a formula that is cumbersome to apply mentally and prone to rounding errors.

Enter height and weight in metric or imperial units, and the tool computes BMI to one decimal place, classifies the result (underweight, normal, overweight, or obese), and shows the healthy weight range for your height.

Select metric or imperial units, enter your height and weight, and the BMI value appears instantly alongside its WHO health category (underweight, normal, overweight, or obese). The interface also shows the healthy weight range for your specific height.

BMI calculation runs as client-side JavaScript with no server transmission. Health and body measurements — sensitive personal data — stay completely private within your browser session, requiring no account or medical portal login.`,
    zh: `BMI Calculator 是一款免费在线工具，计算身体质量指数并查看健康等级。

单位换算 在日常烹饪、工程、旅行、科学和生活中经常需要. 虽然手机有基础计算器，但很少能处理你需要的所有单位。 这款工具提供全面的转换支持，即时出结果，无需记忆换算系数就能轻松切换计量体系。

主要特点包括 支持数十种单位类型、即时输入即出结果、高精度计算含正确舍入、同时显示多种单位的简洁界面、一键交换输入输出单位。 工具同时支持常见和专业单位。

输入您的数值 在输入框中输入数值，从下拉菜单选择源单位，即可同时查看所有其他单位的转换值. 无需点击按钮 — 结果随输入实时更新. 使用交换按钮反转转换方向，或从全面的列表中选择不同的单位。

所有计算 全部在浏览器中使用 JavaScript. 不会向任何服务器发送数据。 你输入的数值和转换结果完全保密。 No account, no signup, 除必要功能外不使用 Cookie.`,
  },
  "countdown-timer": {
    en: `A free online utility tool that set a countdown to any date and time with days, hours, minutes, and seconds. perfect for events, deadlines, and special occasions. Simple, fast, and completely private — just open and use.

Tracking time until a future event — a product launch, exam date, retirement, or holiday — is a surprisingly common need that calendar apps handle clumsily at best. A dedicated countdown provides persistent, real-time precision down to the second, with the ability to monitor multiple milestones simultaneously without installing timer software or enabling notifications.

Set a target date and time down to the second, optionally add a custom label, and the countdown displays days, hours, minutes, and seconds remaining in real time. The timer persists across page refreshes using localStorage.

Set your target date and time, optionally add a label, and the countdown begins instantly — showing days, hours, minutes, and seconds remaining. The timer keeps running even if you navigate away.

The countdown runs entirely in your browser. Your target date is stored locally only if you choose to save it — nothing is uploaded or tracked.`,
    zh: `Countdown Timer 是一款免费在线工具，设置到任意日期和时间的倒计时，显示天、时、分、秒。 非常适合活动、截止日期和特殊场合。

日常任务 比如生成密码、创建 QR codes, rolling dice, or checking BMI shouldn't 需要安装软件或创建账户. 这款工具提供快速、可靠的解决方案，在浏览器中即时运行。 It's 非常适合需要快速出结果而不想安装专业软件的一次性任务.

主要特点包括 即时结果零加载时间、简洁直观界面零学习成本、可微调的自定义选项、一键复制或下载输出、适配任何设备的响应式设计。 工具专注于做好一件事，而且做得很快。

设置目标日期和时间，可选添加标签，倒计时即开始——显示剩余天、时、分、秒。即使离开页面计时器仍继续运行。

倒计时完全在浏览器中运行，目标日期仅在你选择保存时才存储在本地，不会上传或被追踪。`,
  },
  "dice-roller": {
    en: `A free online utility tool that roll virtual dice with 4, 6, 8, 10, 12, and 20 sides. roll multiple dice at once for tabletop games, rpgs, and classrooms. Simple, fast, and completely private — just open and use.

Rolling dice digitally serves tabletop RPG players running remote sessions, teachers using probability demonstrations, and game developers prototyping mechanics. Physical dice are easily lost and limited to standard shapes, whereas a virtual roller supports d4 through d20, rolls multiple dice at once, and logs results — no bag of dice or flat surface required.

Select from six dice types (d4, d6, d8, d10, d12, d20), roll up to 20 dice at once, and see individual results plus a computed total. Modifier support adds or subtracts a flat bonus — perfect for D&D and other tabletop RPGs.

Choose a dice type (d4, d6, d8, d10, d12, or d20), set the number of dice to roll, and click Roll. Results appear instantly with individual rolls and a total sum.

All rolling happens locally using your browser's random source. No results are stored or tracked — perfect for tabletop RPGs and classroom activities.`,
    zh: `Dice Roller 是一款免费在线工具，掷自定义面数的 4, 6, 8, 10, 12, and 20 sides. 为桌游一次掷多个骰子， RPGs, and classrooms.。

日常任务 比如生成密码、创建 QR codes, rolling dice, or checking BMI shouldn't 需要安装软件或创建账户. 这款工具提供快速、可靠的解决方案，在浏览器中即时运行。 It's 非常适合需要快速出结果而不想安装专业软件的一次性任务.

主要特点包括 即时结果零加载时间、简洁直观界面零学习成本、可微调的自定义选项、一键复制或下载输出、适配任何设备的响应式设计。 工具专注于做好一件事，而且做得很快。

选择骰子类型（d4、d6、d8、d10、d12、d20），设置骰子数量，点击滚动。结果即时显示各骰点数和总和。

所有滚动在本地使用浏览器随机源完成，不存储或追踪任何结果，适合桌游 RPG 和课堂活动。`,
  },
  "decision-maker": {
    en: `A free online utility tool that let fate decide — pick a 列表中的随机选项. Simple, fast, and completely private — just open and use.

Breaking indecision — choosing a restaurant, assigning a task owner, picking a winner from a giveaway — is a small but real friction point throughout the day. Flipping a coin is binary and biased toward recall; a random picker that accepts any number of weighted or unweighted options resolves the choice fairly and removes the psychological burden of deciding.

Enter options separated by newlines or commas, then click to let the tool pick one at random. A spinning-wheel animation adds suspense before revealing the choice, and you can re-roll as many times as needed.

Enter your options (one per line or separated by commas) and click Decide. The tool picks one option at random — re-click for a new decision.

All selection happens locally in your browser. Your options are never stored or transmitted — safe for personal or sensitive decisions.`,
    zh: `Decision Maker 是一款免费在线工具，让命运决定 — pick a 列表中的随机选项。

日常任务 比如生成密码、创建 QR codes, rolling dice, or checking BMI shouldn't 需要安装软件或创建账户. 这款工具提供快速、可靠的解决方案，在浏览器中即时运行。 It's 非常适合需要快速出结果而不想安装专业软件的一次性任务.

主要特点包括 即时结果零加载时间、简洁直观界面零学习成本、可微调的自定义选项、一键复制或下载输出、适配任何设备的响应式设计。 工具专注于做好一件事，而且做得很快。

输入选项（每行一个或用逗号分隔），点击决定。工具随机选出一个选项，可重新点击获得新结果。

所有选择在浏览器本地完成，选项不会被存储或传输，适合个人或敏感决策。`,
  },
  "audio-cutter": {
    en: `A free browser-based audio tool that trim and cut audio files with an interactive waveform preview. extract clips from mp3, wav, 等格式，全部在浏览器中完成. Process your music and sound files without uploading to any server.

Audio editing 传统上需要 Audacity 等桌面软件 or Adobe Audition, which are complex and resource-heavy for simple tasks. 这款工具为浏览器带来了核心音频处理能力，可以即时裁剪、合并或转换音频文件。 It's 非常适合快速编辑、格式转换或为项目准备音频.

Key features include 可视化波形显示精确编辑、拖放文件上传、支持多种音频格式（MP3、WAV、OGG、M4A），实时实时预览编辑、可配置比特率和采样率的高质量输出.

Upload your 音频文件——拖拽到工具上或使用文件选择器. 使用波形显示选择要保留的部分（用于裁剪）或排列多个文件（用于合并）。 预览编辑结果，按需调整设置，点击导出按钮下载处理后的音频。

All audio processing 全部在浏览器中使用 Web Audio API. Your music and sound files are never uploaded to any server. This ensures complete privacy for personal recordings, music projects, and sensitive audio content. No account required.`,
    zh: `Audio Cutter 是一款免费在线工具，通过交互式波形预览来裁剪和切割音频文件。 从 MP3, WAV, 等格式，全部在浏览器中完成.。

音频编辑 传统上需要 Audacity 等桌面软件 或 Adobe Audition 对于简单任务来说过于复杂且占用资源。 这款工具为浏览器带来了核心音频处理能力，可以即时裁剪、合并或转换音频文件。 It's 非常适合快速编辑、格式转换或为项目准备音频.

主要特点包括 可视化波形显示精确编辑、拖放文件上传、支持多种音频格式（MP3、WAV、OGG、M4A），实时实时预览编辑、可配置比特率和采样率的高质量输出.

上传您的 音频文件——拖拽到工具上或使用文件选择器. 使用波形显示选择要保留的部分（用于裁剪）或排列多个文件（用于合并）。 预览编辑结果，按需调整设置，点击导出按钮下载处理后的音频。

所有音频处理 全部在浏览器中使用 Web Audio API. 你的音乐和音频文件永远不会上传到任何服务器。 这确保了个人录音、音乐项目和敏感音频内容的完全隐私。 No account required.`,
  },
  "audio-merger": {
    en: `A free browser-based image tool that combine multiple audio files into one seamless track. merge songs, recordings, 或语音片段，支持任意排列和交叉淡入淡出. Process your photos and graphics directly in your browser without uploading to any server.

Joining multiple audio clips into one continuous track is a job normally reserved for digital audio workstation software with complex timelines. This audio merger concatenates WAV and MP3 files into a single track right in the browser, with no plug-ins or uploads.

Arrange audio clips in any order on a timeline, add optional crossfade transitions between tracks, and export as a single continuous file. The tool preserves the original sample rate and bitrate for maximum fidelity.

Add audio files in the order you want them to play, optionally trimming the start and end of each clip. Choose an output format, preview the combined timeline, and download the merged track when it sounds right.

Audio concatenation is handled by the browser's Web Audio API and encoder libraries. Your sound files and the resulting track are processed entirely on your device and are never sent to a remote server.`,
    zh: `Audio Merger 是一款免费在线工具，将多个音频文件合并为一个无缝音轨。 Merge songs, recordings, 或语音片段，支持任意排列和交叉淡入淡出.。

图片处理 通常需要 Photoshop 等 GIMP, 对于简单任务来说既昂贵又复杂. 这款工具为浏览器带来了核心图片处理能力。 无论你需要为网站压缩图片、为社交媒体调整尺寸、转换格式还是应用滤镜，一切都能即时完成，无需安装任何软件。

主要特点包括 drag-and-拖放上传便于文件管理、应用前实时预览、支持多种图片格式（JPEG、PNG、WebP、GIF、BMP）、可调质量和尺寸设置精确控制、支持多文件批量处理. 工具保留图片元数据并提供干净、优化的输出。

上传您的 图片——拖拽到工具区域或点击上传按钮. 通过可用的控制选项（质量滑块、尺寸输入、格式选择等）调整设置。 实时预览效果，满意后点击下载按钮保存处理后的图片。 批量操作时，选择多个文件即可一次性应用相同设置。所有图片处理 全部在浏览器中使用 Canvas API and JavaScript. 你的图片永远不会上传到任何服务器，确保完全隐私。 这对于敏感照片、商业文件或个人图片尤为重要。 No account required — just open, process, and download.`,
  },
  "audio-converter": {
    en: `A free online conversion calculator that convert audio between wav 格式和采样率. Get accurate results instantly without any software installation.

Audio file 格式和采样率 create compatibility headaches across platforms: professional DAWs export at 48 kHz/24-bit, voice assistants expect 16 kHz mono WAV, and web playback often requires downsampling for bandwidth optimization. Converting between these configurations without specialized audio software typically means installing bulky DAWs or command-在线工具如 FFmpeg.

Adjust sample rate (8 kHz to 48 kHz), bit depth (8/16/24/32-bit), and channel configuration (mono/stereo) for WAV file conversion. The output preserves audio fidelity while matching the target application's requirements.

Upload an audio file and select the target format, sample rate, and channel configuration. The conversion processes the waveform in-browser using the Web Audio API, with a preview player for verifying output quality before download.

Audio processing happens entirely through the browser's Web Audio API — the file is decoded, resampled, and re-encoded without any upload to a remote server. Voice memos, interview recordings, and unreleased music tracks never leave your device.`,
    zh: `Audio Converter 是一款免费在线工具，在音频格式之间转换 WAV 格式和采样率。

单位换算 在日常烹饪、工程、旅行、科学和生活中经常需要. 虽然手机有基础计算器，但很少能处理你需要的所有单位。 这款工具提供全面的转换支持，即时出结果，无需记忆换算系数就能轻松切换计量体系。

主要特点包括 支持数十种单位类型、即时输入即出结果、高精度计算含正确舍入、同时显示多种单位的简洁界面、一键交换输入输出单位。 工具同时支持常见和专业单位。

输入您的数值 在输入框中输入数值，从下拉菜单选择源单位，即可同时查看所有其他单位的转换值. 无需点击按钮 — 结果随输入实时更新. 使用交换按钮反转转换方向，或从全面的列表中选择不同的单位。

所有计算 全部在浏览器中使用 JavaScript. 不会向任何服务器发送数据。 你输入的数值和转换结果完全保密。 No account, no signup, 除必要功能外不使用 Cookie.`,
  },
  "dns-lookup": {
    en: `A free online network lookup tool that query A, AAAA, MX, NS, TXT, CAA, and SOA records for any domain. Query domain information and DNS records instantly from your browser.

Network administrators, web developers, and IT 专业人员需要查询 DNS records, 查询域名注册信息、定期诊断网络问题. Command-在线工具如 \`dig\` and \`whois\` require terminal access and technical knowledge. This tool provides the same information through an intuitive web interface, accessible from any device.

Key features include support for all major DNS record types (A, AAAA, MX, NS, TXT, CNAME, SOA), instant results with clear formatting, domain availability and registration information, WHOIS data with privacy protection details, and a clean interface that makes complex DNS data easy to understand.

Enter the domain name in the input field, select the DNS record type you want to query (or choose 'All' for a comprehensive view), and click the lookup button. Results appear instantly with formatted DNS records, WHOIS information, and any available registration details.

DNS queries are performed through public DNS resolvers — no personal information is collected or stored. The tool does not track your lookups or store query history. Your network diagnostics remain completely private.`,
    zh: `DNS Lookup 是一款免费在线工具，查询任意域名的 A、AAAA、MX、NS、TXT、CAA 和 SOA 记录。

网络管理员, web developers, and IT 专业人员需要查询 DNS records, 查询域名注册信息、定期诊断网络问题. Command-在线工具如 \`dig\` and \`whois\` require terminal access and technical knowledge. This tool provides the same information through an intuitive web interface, accessible from any device.

主要特点包括 support for all major DNS record types (A, AAAA, MX, NS, TXT, CNAME, SOA), instant results with clear formatting, domain availability and registration information, WHOIS data with privacy protection details, and a clean interface that makes complex DNS data easy to understand.

输入域名 name in the input field, select the DNS record type you want to query (or choose 'All' for a comprehensive view), and click the lookup button. Results appear instantly with formatted DNS records, WHOIS information, and any available registration details.

DNS 查询 are performed through public DNS resolvers — no personal information is collected or stored. The tool does not track your lookups or store query history. Your network diagnostics remain completely private.`,
  },
  "whois-lookup": {
    en: `A free online network lookup tool that look up domain registration and ownership information. Query domain information and DNS records instantly from your browser.

WHOIS queries contact the domain registrar's database to retrieve registration details, name server assignments, and expiration dates. This is critical for domain acquisition due diligence, security incident response, and identifying fraudulent or parked domains.\`dig\` and \`whois\` require terminal access and technical knowledge. This tool provides the same information through an intuitive web interface, accessible from any device.

Key features include support for all major DNS record types (A, AAAA, MX, NS, TXT, CNAME, SOA), instant results with clear formatting, domain availability and registration information, WHOIS data with privacy protection details, and a clean interface that makes complex DNS data easy to understand.

Enter the domain name in the input field, select the DNS record type you want to query (or choose 'All' for a comprehensive view), and click the lookup button. Results appear instantly with formatted DNS records, WHOIS information, and any available registration details.

DNS queries are performed through public DNS resolvers — no personal information is collected or stored. The tool does not track your lookups or store query history. Your network diagnostics remain completely private.`,
    zh: `WHOIS Lookup 是一款免费在线工具，查询域名注册和所有权信息。

网络管理员, web developers, and IT 专业人员需要查询 DNS records, 查询域名注册信息、定期诊断网络问题. Command-在线工具如 \`dig\` and \`whois\` require terminal access and technical knowledge. This tool provides the same information through an intuitive web interface, accessible from any device.

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

Counting the days between two dates is essential for project deadline tracking, contract duration calculations, pregnancy week counting, visa-validity periods, and financial interest accrual. Manual counting across calendar boundaries — especially spanning leap years — is tedious and error-prone without a dedicated date calculator.

Pick two dates and the tool calculates the exact day count, plus a breakdown showing weeks and months for context. Business-day mode optionally excludes weekends for project planning and contract deadlines.

Select a start and end date using the calendar pickers and the tool displays the exact difference in total days, weeks, months, and years. An option to exclude weekends makes it useful for business-day and sprint-duration calculations.

Date-difference arithmetic executes through JavaScript's native Date object entirely in the browser. Contract deadlines, medical timelines, and project schedules — potentially confidential — are processed locally with no server round-trip.`,
    zh: `日期天数计算器 是一款免费在线工具，计算两个日期之间的精确天数。

单位换算 在日常烹饪、工程、旅行、科学和生活中经常需要. 虽然手机有基础计算器，但很少能处理你需要的所有单位。 这款工具提供全面的转换支持，即时出结果，无需记忆换算系数就能轻松切换计量体系。

主要特点包括 支持数十种单位类型、即时输入即出结果、高精度计算含正确舍入、同时显示多种单位的简洁界面、一键交换输入输出单位。 工具同时支持常见和专业单位。

输入您的数值 在输入框中输入数值，从下拉菜单选择源单位，即可同时查看所有其他单位的转换值. 无需点击按钮 — 结果随输入实时更新. 使用交换按钮反转转换方向，或从全面的列表中选择不同的单位。

所有计算 全部在浏览器中使用 JavaScript. 不会向任何服务器发送数据。 你输入的数值和转换结果完全保密。 No account, no signup, 除必要功能外不使用 Cookie.`,
  },
  "password-strength": {
    en: `A free online text processing tool that test how strong your password is with real-time analysis. Transform, analyze, and manipulate text instantly in your browser.

Most people overestimate how strong their passwords are — an 8-character mix of letters and numbers falls to a GPU cluster in minutes. Auditing credential strength against entropy estimates, character-set diversity, and known breach dictionaries gives users honest feedback before they rely on a weak password for sensitive accounts, something no browser's built-in strength bar communicates with real depth.

The analyzer evaluates entropy in bits, checks against a database of common passwords, detects sequential and repeated patterns, and rates the result on a 0–100 scale with actionable suggestions for improvement.

Type or paste a password and the tool scores its strength in real time — analyzing length, character variety, entropy, and common-pattern vulnerability. Suggestions appear as you type.

All analysis happens locally in your browser. Your password is never transmitted, logged, or stored — safe for testing real credentials.`,
    zh: `密码强度检查器 是一款免费在线工具，通过实时分析测试密码强度。

写作者、开发者, 和内容创作者经常需要处理文本 — counting words, converting case, checking diffs, or reformatting content. 桌面文本编辑器缺少这些专业功能，而在线替代方案通常需要注册或有使用限制。 这款工具提供无限、即时的文本处理，界面简洁专注。

主要特点包括 real-实时输入即处理、支持大文本输入（最大 100,000 characters), 多种输出格式和选项、一键复制到剪贴板、清晰的视觉反馈显示变更和结果. 工具正确处理 Unicode，支持任何语言的文本。

输入或粘贴密码，工具实时评分其强度——分析长度、字符多样性、熵值和常见模式漏洞，并实时给出建议。

所有分析在浏览器本地完成，密码不会被传输、记录或存储，适合测试真实凭证。`,
  },
  "barcode-generator": {
    en: `A free online utility tool that generate barcodes in Code128, EAN-13, Code39 formats and QR codes. Simple, fast, and completely private — just open and use.

Generating barcodes is essential for retail product labeling, inventory management, shipping labels, event ticketing, and library cataloging. Creating Code128, EAN-13, or Code39 barcodes typically requires dedicated software or paid SaaS subscriptions, yet the encoding logic is straightforward enough to run entirely in a browser with no installation.

Supports four formats — Code128 (universal), EAN-13 (retail products), Code39 (industrial), and QR Code (URLs and text) — with adjustable module size, margin, and output as PNG or SVG. QR codes can encode up to 2,953 bytes.

Enter your data (text, URL, or number), choose a barcode format (Code128, EAN-13, Code39, or QR Code), adjust size if needed, and click Generate. Download the image as PNG or SVG.

All generation happens locally in your browser. Your data is never uploaded — safe for creating barcodes for internal product codes or private links.`,
    zh: `Barcode & QR Code Generator 是一款免费在线工具，生成 Code128、EAN-13、Code39 格式条码和二维码。

日常任务 比如生成密码、创建 QR codes, rolling dice, or checking BMI shouldn't 需要安装软件或创建账户. 这款工具提供快速、可靠的解决方案，在浏览器中即时运行。 It's 非常适合需要快速出结果而不想安装专业软件的一次性任务.

主要特点包括 即时结果零加载时间、简洁直观界面零学习成本、可微调的自定义选项、一键复制或下载输出、适配任何设备的响应式设计。 工具专注于做好一件事，而且做得很快。

输入数据（文本、URL 或数字），选择条码格式（Code128、EAN-13、Code39 或 QR Code），可调整尺寸，点击生成即可下载 PNG 或 SVG 图片。

所有生成在浏览器本地完成，数据不会上传，适合为内部产品代码或私密链接生成条码。`,
  },
  "aspect-ratio-calculator": {
    en: `A free online conversion calculator that calculate aspect ratios from dimensions or presets. Get accurate results instantly without any software installation.

Aspect ratio calculations are critical for video production, UI design, photography cropping, and print layout: matching a 16:9 thumbnail, preserving a 4:3 sensor crop, or fitting content into a 21:9 ultrawide banner without distortion. Guessing dimensions by eye leads to stretched images and letterboxing artifacts.

Enter any two dimensions (width and height) to get the simplified ratio, or choose a common preset (16:9, 4:3, 21:9, 1:1) and calculate the matching dimensions for any target resolution. Pixel-perfect results for video, display, and print.

Enter any two dimensions or pick a common ratio preset (16:9, 4:3, 1:1, 9:16, 21:9) and the tool computes the matching width, height, and exact ratio in reduced form. A visual preview rectangle shows the proportions graphically.

Ratio reduction and dimension math run as pure JavaScript arithmetic within the page. Design specifications and unreleased product dimensions are never sent to any server, keeping proprietary creative work private.`,
    zh: `宽高比计算器 是一款免费在线工具，从尺寸或预设值计算宽高比。

单位换算 在日常烹饪、工程、旅行、科学和生活中经常需要. 虽然手机有基础计算器，但很少能处理你需要的所有单位。 这款工具提供全面的转换支持，即时出结果，无需记忆换算系数就能轻松切换计量体系。

主要特点包括 支持数十种单位类型、即时输入即出结果、高精度计算含正确舍入、同时显示多种单位的简洁界面、一键交换输入输出单位。 工具同时支持常见和专业单位。

输入您的数值 在输入框中输入数值，从下拉菜单选择源单位，即可同时查看所有其他单位的转换值. 无需点击按钮 — 结果随输入实时更新. 使用交换按钮反转转换方向，或从全面的列表中选择不同的单位。

所有计算 全部在浏览器中使用 JavaScript. 不会向任何服务器发送数据。 你输入的数值和转换结果完全保密。 No account, no signup, 除必要功能外不使用 Cookie.`,
  },
  "qr-reader": {
    en: `A free online utility tool that decode qr 从上传的图片中即时. scan any qr 码图片以显示嵌入的 url, text, or contact information. Simple, fast, and completely private — just open and use.

Decoding QR codes from images is necessary when a phone camera cannot scan directly — for instance, extracting a URL from a screenshot, verifying a printed event ticket's embedded data, or reading a Wi-Fi credential code from a shared photo. Browser-native barcode detection APIs make this possible without installing a dedicated scanning app.

Drag or upload any image containing a QR code and the decoder extracts the embedded URL, plain text, vCard contact, or Wi-Fi credentials instantly. The tool works entirely offline and supports QR codes embedded in photos or screenshots.

Drag a QR code image onto the tool or use the file picker. The embedded URL, text, or contact data is decoded and displayed instantly — copy it with one click.

All decoding happens locally in your browser. Your image is never uploaded — safe for scanning QR codes containing personal or financial information.`,
    zh: `QR Code Reader 是一款免费在线工具，Decode QR 从上传的图片中即时. Scan any QR 码图片以显示嵌入的 URL, text, or contact information.。

日常任务 比如生成密码、创建 QR codes, rolling dice, or checking BMI shouldn't 需要安装软件或创建账户. 这款工具提供快速、可靠的解决方案，在浏览器中即时运行。 It's 非常适合需要快速出结果而不想安装专业软件的一次性任务.

主要特点包括 即时结果零加载时间、简洁直观界面零学习成本、可微调的自定义选项、一键复制或下载输出、适配任何设备的响应式设计。 工具专注于做好一件事，而且做得很快。

将 QR 码图片拖入工具或使用文件选择器，嵌入的 URL、文本或联系人数据即时解码并显示，一键复制。

所有解码在浏览器本地完成，图片不会上传，适合扫描含有个人或财务信息的 QR 码。`,
  },
  "color-blindness-simulator": {
    en: `A free browser-based image tool that simulate how images look with various color blindness types. Process your photos and graphics directly in your browser without uploading to any server.

Understanding how your designs appear to users with color vision deficiencies is an accessibility step that once required specialized simulation plug-ins. This simulator re-renders any image through the lens of eight common color-blindness types, all in real time within the browser.

Switch between eight simulation modes — protanopia, deuteranopia, tritanopia, achromatopsia, and their anomalous variants — to see your image through each type of color vision deficiency. A split-view comparison shows the original alongside the simulated result.

Load an image and select a deficiency type from the dropdown — deuteranopia, protanopia, tritanopia, or achromatopsia, among others. The simulated view appears immediately, and a side-by-side toggle lets you compare it against the original color perception.

Color-matrix transformations for each deficiency type are applied to pixel data through canvas operations in your browser. The image you are testing is never uploaded, so you can safely evaluate confidential designs or client work.`,
    zh: `色盲模拟器 是一款免费在线工具，模拟不同色盲类型下图片的视觉效果。

图片处理 通常需要 Photoshop 等 GIMP, 对于简单任务来说既昂贵又复杂. 这款工具为浏览器带来了核心图片处理能力。 无论你需要为网站压缩图片、为社交媒体调整尺寸、转换格式还是应用滤镜，一切都能即时完成，无需安装任何软件。

主要特点包括 drag-and-拖放上传便于文件管理、应用前实时预览、支持多种图片格式（JPEG、PNG、WebP、GIF、BMP）、可调质量和尺寸设置精确控制、支持多文件批量处理. 工具保留图片元数据并提供干净、优化的输出。

上传您的 图片——拖拽到工具区域或点击上传按钮. 通过可用的控制选项（质量滑块、尺寸输入、格式选择等）调整设置。 实时预览效果，满意后点击下载按钮保存处理后的图片。 批量操作时，选择多个文件即可一次性应用相同设置。所有图片处理 全部在浏览器中使用 Canvas API and JavaScript. 你的图片永远不会上传到任何服务器，确保完全隐私。 这对于敏感照片、商业文件或个人图片尤为重要。 No account required — just open, process, and download.`,
  },
  "online-notepad": {
    en: `A free online text processing tool that a clean, distraction-免费的浏览器记事本，支持自动保存. write notes, code snippets, 和列表持久保存在浏览器存储中. Transform, analyze, and manipulate text instantly in your browser.

Jotting down a quick idea, pasting a code snippet, or drafting a temporary message shouldn't require launching a heavyweight word processor or signing into a cloud account. A browser-based notepad with auto-save to localStorage gives you an always-available scratch pad that persists between sessions, loads instantly, and never demands a login — ideal for capturing thoughts before they vanish.

Typing auto-saves to localStorage on every keystroke — no save button, no sync, no account. A word count and character count are displayed in the footer, and the content survives browser restarts and accidental tab closures.

Start typing immediately — no setup required. Your notes auto-save to your browser's local storage as you type, surviving page refreshes and browser restarts. Export to a .txt file anytime.

All notes are stored exclusively in your browser's local storage — never uploaded to any server. Clear your notes with one click to wipe them permanently from your device.`,
    zh: `Online Notepad 是一款免费在线工具，A clean, distraction-免费的浏览器记事本，支持自动保存. Write notes, code snippets, 和列表持久保存在浏览器存储中.。

写作者、开发者, 和内容创作者经常需要处理文本 — counting words, converting case, checking diffs, or reformatting content. 桌面文本编辑器缺少这些专业功能，而在线替代方案通常需要注册或有使用限制。 这款工具提供无限、即时的文本处理，界面简洁专注。

主要特点包括 real-实时输入即处理、支持大文本输入（最大 100,000 characters), 多种输出格式和选项、一键复制到剪贴板、清晰的视觉反馈显示变更和结果. 工具正确处理 Unicode，支持任何语言的文本。

直接开始输入即可，无需设置。笔记在输入时自动保存到浏览器本地存储，刷新页面或重启浏览器后仍然保留。可随时导出为 .txt 文件。

所有笔记仅存储在浏览器的本地存储中，不会上传到任何服务器。一键清除可永久删除设备上的笔记。`,
  },
  "text-statistics": {
    en: `A free online text processing tool that detailed text analysis: letters, vowels, unique words, and more. Transform, analyze, and manipulate text instantly in your browser.

Beyond simple word counts, deeper text analytics — vowel ratios, letter-frequency distributions, unique-word ratios, and syllable estimates — reveal readability levels and linguistic patterns that matter for language learning, stylometric analysis, and accessibility auditing. Standard word processors stop at a basic count, leaving writers and researchers without the quantitative insight a dedicated statistical breakdown provides.

The analysis breaks down total characters, letters, vowels, consonants, syllables (estimated), unique words, total words, average word length, and the ten most frequent words with counts. Every metric recalculates live as you type.

Paste or type text and the tool displays a detailed breakdown: total letters, vowels, consonants, syllables, unique words, word frequency, and average word length — all updating live as you type.

All analysis happens locally in your browser. Your text is never uploaded — safe for analyzing essays, reports, and confidential documents.`,
    zh: `Text Statistics 是一款免费在线工具，详细文本分析: letters, vowels, unique words, and more。

写作者、开发者, 和内容创作者经常需要处理文本 — counting words, converting case, checking diffs, or reformatting content. 桌面文本编辑器缺少这些专业功能，而在线替代方案通常需要注册或有使用限制。 这款工具提供无限、即时的文本处理，界面简洁专注。

主要特点包括 real-实时输入即处理、支持大文本输入（最大 100,000 characters), 多种输出格式和选项、一键复制到剪贴板、清晰的视觉反馈显示变更和结果. 工具正确处理 Unicode，支持任何语言的文本。

粘贴或输入文本，工具显示详细分析：字母总数、元音、辅音、音节、独特单词、词频和平均词长——全部实时更新。

所有分析在浏览器本地完成，文本不会上传，适合分析论文、报告和机密文档。`,
  },
};

export function getToolGuide(slug: string): ToolGuideData | undefined {
  return toolGuides[slug];
}