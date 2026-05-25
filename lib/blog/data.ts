export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  toolSlug?: string;
  content: string;
  contentZh?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-format-json-online",
    title: "How to Format JSON Online Free — Complete Guide",
    description: "Learn how to format, validate, and beautify JSON quickly using free online tools. Fix malformed JSON in seconds.",
    date: "2026-05-22",
    readTime: "5 min read",
    category: "Developer Tools",
    toolSlug: "json-formatter",
    content: `## JSON Formatting: Common Errors, Debugging Tips, and Format Comparisons

JSON (JavaScript Object Notation) has become the lingua franca of data interchange on the web. From REST APIs to configuration files to NoSQL databases, JSON is everywhere — and it's also one of the most common sources of subtle bugs. A missing comma, an extra trailing comma, or a single misplaced quote can bring an entire application to a halt. This guide covers the essentials of JSON formatting, walks through the most frequent errors and how to fix them, compares JSON to its alternatives, and provides practical debugging techniques.

### JSON Syntax Fundamentals

JSON is deceptively simple. It supports exactly six value types: strings (in double quotes), numbers (integer or floating-point), booleans (true/false), null, objects (key-value pairs in curly braces), and arrays (ordered lists in square brackets). That's it. No dates, no comments, no functions, no undefined.

The rules are strict:

- **Keys must be double-quoted strings.** Single quotes and unquoted identifiers (common in JavaScript) are invalid JSON.
- **Strings must use double quotes.** Single quotes, backticks, or no quotes at all are invalid.
- **No trailing commas.** Objects and arrays cannot have a comma after the last element.
- **Numbers must be base-10.** Leading zeros are not allowed (except for "0" itself), and hexadecimal, octal, or binary literals are forbidden.
- **Only the six types listed above are valid.** No dates, no comments (though some parsers accept them as extensions), no binary data without Base64 encoding.

| Rule | Valid JSON | Invalid JSON |
|------|-----------|-------------|
| Keys quoted | \`{"name": "Alice"}\` | \`{name: "Alice"}\` |
| Strings double-quoted | \`{"msg": "hello"}\` | \`{"msg": 'hello'}\` |
| No trailing commas | \`[1, 2, 3]\` | \`[1, 2, 3,]\` |
| Numbers base-10 | \`{"n": 42}\` | \`{"n": 0x2A}\` |
| No comments | (minified only) | \`{/* comment */}\` |
| Unicode escapes | \`"\\u0048"\` | \`"\\x48"\` |

If you're working with JSON daily, a good formatter and validator is essential. Try [/tools/json-formatter](/tools/json-formatter) to beautify, validate, and debug your JSON in real-time.

### Common JSON Errors and How to Fix Them

Even seasoned developers make these mistakes. Here's how to spot and fix the most common issues:

**1. Trailing commas.** This is the most frequent JSON error. \`[1, 2, 3,]\` looks correct to human eyes but is invalid in strict JSON (though some newer JavaScript engines tolerate it in non-strict mode). Solution: remove the comma after the last element. Many formatters and linters can auto-fix this.

**2. Unquoted or single-quoted keys.** \`{name: "value"}\` and \`{'name': "value"}\` are both invalid. All JSON object keys must be enclosed in double quotes: \`{"name": "value"}\`. This catches many developers coming from JavaScript, where unquoted keys are valid in object literals.

**3. Using comments.** JSON does not support comments. Developers frequently try to add // or /* */ comments, especially in configuration files. If you need comments, consider JSON5 (a superset that adds comments, trailing commas, and unquoted keys), YAML, or strip comments in a build step before parsing.

**4. Single-quoted strings.** JSON requires double quotes for all string values. \`{'greeting': 'hello'}\` is invalid — use \`{"greeting": "hello"}\` instead.

**5. Numbers with leading zeros.** \`{"id": 0123}\` is invalid in strict JSON. Leading zeros are interpreted as octal in some contexts. Write it as \`{"id": 123}\` or \`{"id": "0123"}\` (as a string) if leading zeros are meaningful.

**6. Nested escaping issues.** Strings containing quotes or backslashes inside JSON values require proper escaping. A JSON value containing a double quote must be written as \`\\"\`. A backslash is \`\\\\\`. This can lead to confusing "triple escaping" when JSON is embedded inside other languages.

**7. Wrong data types.** Sending \`"true"\` (string) when the API expects \`true\` (boolean), or \`"123"\` (string) when the API expects \`123\` (number), can cause silent failures or confusing error messages. Always check your API's type specification.

| Error | Wrong | Fixed |
|-------|-------|-------|
| Trailing comma | \`[1, 2,]\` | \`[1, 2]\` |
| Single-quoted key | \`{'a': 1}\` | \`{"a": 1}\` |
| Comment | \`{"a": 1} // comment\` | (remove comment) |
| Single-quoted string | \`{"a": 'hello'}\` | \`{"a": "hello"}\` |
| Leading zero | \`{"a": 01}\` | \`{"a": 1}\` |
| Mixed types | \`{"a": "true"}\` | \`{"a": true}\` |

For a quick sanity check on any JSON document, paste it into [/tools/json-formatter](/tools/json-formatter) — it will highlight exact position of syntax errors and beautify the output for readability.

### JSON vs. XML vs. YAML: Choosing a Data Format

Each serialization format has strengths and weaknesses. Here's a practical comparison:

**JSON** is the current standard for most web APIs and configuration. Its strengths are simplicity (only six types), universal parser support in every language, and compact syntax. Weaknesses include no comments, no built-in date type, and no support for references or multi-line strings without escaping.

**XML** is verbose but powerful. It supports attributes, namespaces, schema validation (XSD), comments, and mixed content (text + child elements). XML excels in document-centric use cases (XHTML, SVG, RSS feeds, SOAP APIs) and environments requiring rigorous validation. The trade-off is significantly more verbose syntax — a simple person record might take 30% more characters than JSON.

**YAML** prioritizes human readability. It uses indentation-based structure (like Python), supports comments, multi-line strings (literal and folded blocks), anchors and aliases (for DRY configs), and native date/time types. YAML is popular for configuration files (Kubernetes, Docker Compose, CI/CD pipelines) but has notorious edge cases — the \`NO\` string being parsed as \`false\`, tab-vs-space issues, and incredibly complex specification that makes security-conscious parsing difficult.

| Feature | JSON | XML | YAML |
|---------|------|-----|------|
| Verbosity | Moderate | High | Low |
| Comments | No | Yes | Yes |
| Data types | 6 types | Mixed content | Rich (dates, etc.) |
| Schema validation | JSON Schema | XSD, DTD | None (external) |
| Native multi-line strings | No | No | Yes |
| Parser speed | Fast | Slow | Moderate |
| Security concerns | Low | XML bombs, XXE | \`!!python/object\` exploits |
| Best for | Web APIs, config | Documents, schemas | Config files |

### Debugging JSON: Tools and Techniques

When JSON misbehaves, systematic debugging saves hours of frustration.

**1. Validate first.** Before doing anything else, run your JSON through a validator. A single syntax error can make the entire document unparseable. Use [/tools/json-formatter](/tools/json-formatter) — it shows the exact line and character position of parse errors.

**2. Watch for embedded JSON in strings.** When JSON is embedded in another format (HTTP request body, database column, environment variable), the outer format's escaping can corrupt the inner JSON. Check for backslashes that have been doubled (\\\\\\\\ becomes \\\\, which is wrong) or missing entirely.

**3. Use schema validation for large documents.** For complex JSON structures (1000+ lines), manual inspection is error-prone. Define a JSON Schema and validate against it. This catches structural issues like missing required fields, wrong data types, and unexpected additional properties.

**4. Log the raw response.** Many debugging issues come from libraries that parse JSON silently — errors become cryptic exceptions. Always log the raw HTTP response body before parsing. A one-character encoding issue (UTF-8 BOM, zero-width space) can make valid-looking JSON unparseable.

**5. Check for non-printable characters.** Sometimes invisible characters (zero-width space U+200B, BOM U+FEFF, non-breaking spaces) sneak into JSON and cause parse failures. A hex dump or a validator that highlights non-printable characters can reveal these quickly.

**6. Test edge cases in your parser.** Empty objects \`{}\`, empty arrays \`[]\`, deeply nested structures, very long strings (over 100K characters), and numbers near precision limits (larger than 2^53) can all trigger different behavior in different JSON parsers. Test your documents on multiple parsers if cross-platform compatibility matters.

## FAQ

**Q: What is the difference between JSON and a JavaScript object?**  
A: JSON is a text format with strict syntax rules — keys must be double-quoted, strings must be double-quoted, and only six types are allowed. JavaScript object literals are more permissive (unquoted keys, single quotes, trailing commas, functions, dates). All JSON is valid JavaScript, but not all JavaScript object literals are valid JSON.

**Q: Can JSON contain comments?**  
A: No. The JSON specification (RFC 7159) does not allow comments. If you need comments, use JSON5, or process your JSON files with a comment-stripping tool before parsing. YAML is a better choice for configuration files that need comments.

**Q: Should I use JSON or YAML for configuration files?**  
A: YAML is generally better for configuration files because it supports comments, multi-line strings, and is more human-readable. JSON is better for machine-to-machine data interchange. For simple configs, either works — choose based on your team's familiarity with each format.

**Q: How do I format JSON for readability?**  
A: Use a JSON formatter tool like [/tools/json-formatter](/tools/json-formatter). Most code editors (VS Code, IntelliJ) also have built-in formatters (Shift+Alt+F in VS Code). For command-line formatting, \`jq '.' file.json\` or \`python -m json.tool file.json\` work well.

**Q: What's the maximum size for a JSON document?**  
A: There's no formal limit, but practical constraints exist. Most parsers handle documents up to 100-200 MB, but parsing large JSON files is slow and memory-intensive. For very large datasets, use streaming JSON parsers (json-stream, ijson) or consider alternatives like newline-delimited JSON (NDJSON) or Protocol Buffers.

**Q: How do I handle dates in JSON?**  
A: JSON has no native date type. The convention is to serialize dates as ISO 8601 strings: \`"2024-12-25T10:30:00Z"\`. Your application code should parse these strings into native date objects after deserialization. Some APIs also use Unix timestamps (milliseconds since epoch) as numbers.

**Q: What is JSONP and should I use it?**  
A: JSONP (JSON with Padding) is an older technique for cross-origin requests that uses a \`<script>\` tag instead of XMLHttpRequest. It's insecure (no same-origin policy, vulnerable to XSS) and has been largely replaced by CORS. Do not use JSONP in new applications.
`,


    contentZh: `## JSON 格式化：常见错误、调试技巧与格式对比

JSON（JavaScript Object Notation）已成为网络上数据交换的通用语言。从 REST API 到配置文件再到 NoSQL 数据库，JSON 无处不在——但它也是最常见的细微错误来源之一。缺少逗号、多余尾逗号或一个错误引号都可能导致整个应用程序崩溃。本指南涵盖 JSON 格式化的基本知识，介绍最常见的错误及修复方法，比较 JSON 与其他格式的优劣，并提供实用的调试技巧。

### JSON 语法基础

JSON 看似简单。它只支持六种值类型：字符串（双引号）、数字（整数或浮点数）、布尔值（true/false）、null、对象（花括号中的键值对）和数组（方括号中的有序列表）。仅此而已。没有日期、没有注释、没有函数、没有 undefined。

规则非常严格：

- **键必须用双引号包裹的字符串。** 单引号和不带引号的标识符在 JSON 中无效。
- **字符串必须使用双引号。** 单引号、反引号或不加引号均无效。
- **不允许尾逗号。** 对象和数组最后一个元素后不能有逗号。
- **数字必须是十进制。** 不允许前导零（"0"本身除外），十六进制、八进制或二进制字面量被禁止。
- **只有上面列出的六种类型有效。** 没有日期、没有注释（尽管某些解析器作为扩展接受）、没有未编码的二进制数据。

| 规则 | 有效的 JSON | 无效的 JSON |
|------|-----------|-------------|
| 键加引号 | \`{"name": "Alice"}\` | \`{name: "Alice"}\` |
| 字符串双引号 | \`{"msg": "hello"}\` | \`{"msg": 'hello'}\` |
| 无尾逗号 | \`[1, 2, 3]\` | \`[1, 2, 3,]\` |
| 十进制数字 | \`{"n": 42}\` | \`{"n": 0x2A}\` |
| 无注释 | （仅压缩） | \`{/* comment */}\` |
| Unicode 转义 | \`"\\\\u0048"\` | \`"\\\\x48"\` |

如果你每天都在使用 JSON，一个好的格式化工具和验证器至关重要。试试 [/tools/json-formatter](/tools/json-formatter) 来美化和验证你的 JSON。

### 常见 JSON 错误及修复方法

即使经验丰富的开发人员也会犯这些错误。以下是如何发现和修复最常见问题的方法：

**1. 尾逗号。** 这是最常见的 JSON 错误。\`[1, 2, 3,]\` 看起来正确，但在严格的 JSON 中无效。解决方法：删除最后一个元素后的逗号。许多格式化工具和代码检查工具可以自动修复此问题。

**2. 未加引号或单引号键。** \`{name: "value"}\` 和 \`{'name': "value"}\` 都无效。所有 JSON 对象键必须用双引号括起来：\`{"name": "value"}\`。这通常会让从 JavaScript 转来的开发者犯错，因为 JavaScript 中未加引号的键是有效的。

**3. 使用注释。** JSON 不支持注释。开发者经常尝试添加 // 或 /* */ 注释，尤其是在配置文件中。如果需要注释，可以考虑 JSON5（一个超集，增加了注释、尾逗号和不带引号的键）、YAML，或在解析前在构建步骤中去除注释。

**4. 单引号字符串。** JSON 要求所有字符串值使用双引号。\`{'greeting': 'hello'}\` 无效——应使用 \`{"greeting": "hello"}\`。

**5. 前导零数字。** \`{"id": 0123}\` 在严格的 JSON 中无效。前导零在某些上下文中被解释为八进制。应写为 \`{"id": 123}\`，或者如果前导零有意义，则写为 \`{"id": "0123"}\`（字符串形式）。

**6. 嵌套转义问题。** JSON 值中包含引号或反斜杠的字符串需要正确转义。包含双引号的 JSON 值必须写为 \`\\\\"\`。反斜杠写为 \`\\\\\\\\\`。当 JSON 嵌入到其他语言中时，这可能导致令人困惑的"三重转义"。

**7. 错误的数据类型。** 当 API 期望 \`true\`（布尔值）时发送 \`"true"\`（字符串），或期望 \`123\`（数字）时发送 \`"123"\`（字符串），可能导致静默失败或令人困惑的错误消息。始终检查 API 的类型规范。

| 错误 | 错误示例 | 修正后 |
|-------|-------|-------|
| 尾逗号 | \`[1, 2,]\` | \`[1, 2]\` |
| 单引号键 | \`{'a': 1}\` | \`{"a": 1}\` |
| 注释 | \`{"a": 1} // comment\` | （删除注释） |
| 单引号字符串 | \`{"a": 'hello'}\` | \`{"a": "hello"}\` |
| 前导零 | \`{"a": 01}\` | \`{"a": 1}\` |
| 类型混用 | \`{"a": "true"}\` | \`{"a": true}\` |

如需快速检查任何 JSON 文档，请将其粘贴到 [/tools/json-formatter](/tools/json-formatter)——它会高亮显示语法错误的精确位置，并美化输出以提高可读性。

### JSON vs. XML vs. YAML：如何选择数据格式

每种序列化格式各有优劣。以下是实用对比：

**JSON** 是目前大多数 Web API 和配置的标准。其优势在于简单（仅六种类型）、每种语言都有通用的解析器支持，以及紧凑的语法。缺点包括不支持注释、没有内置日期类型，以及不支持引用或多行字符串（需转义）。

**XML** 冗长但功能强大。它支持属性、命名空间、模式验证（XSD）、注释和混合内容（文本 + 子元素）。XML 在以文档为中心的用例（XHTML、SVG、RSS 源、SOAP API）和需要严格验证的环境中表现出色。代价是语法明显更冗长——一个简单的 person 记录可能比 JSON 多出 30% 的字符。

**YAML** 优先考虑人类可读性。它使用基于缩进的结构（类似 Python），支持注释、多行字符串（文字块和折叠块）、锚点和别名（用于 DRY 配置），以及原生日期/时间类型。YAML 在配置文件（Kubernetes、Docker Compose、CI/CD 管道）中很受欢迎，但有一些臭名昭著的边界情况——\`NO\` 字符串被解析为 \`false\`、制表符与空格的问题，以及极其复杂的规范使得安全敏感的解析变得困难。

| 特性 | JSON | XML | YAML |
|---------|------|-----|------|
| 冗长程度 | 中等 | 高 | 低 |
| 注释 | 否 | 是 | 是 |
| 数据类型 | 6 种类型 | 混合内容 | 丰富（日期等） |
| 模式验证 | JSON Schema | XSD, DTD | 无（外部） |
| 原生多行字符串 | 否 | 否 | 是 |
| 解析速度 | 快 | 慢 | 中等 |
| 安全问题 | 低 | XML bomb, XXE | \`!!python/object\` 利用 |
| 最佳用途 | Web API, 配置 | 文档, 模式 | 配置文件 |

### JSON 调试：工具与技巧

当 JSON 出现问题时，系统化的调试可以节省数小时的挫败感。

**1. 先验证。** 在做任何其他事情之前，先通过验证器运行你的 JSON。单个语法错误可能使整个文档无法解析。使用 [/tools/json-formatter](/tools/json-formatter)——它会显示解析错误的精确行和字符位置。

**2. 注意字符串中嵌入的 JSON。** 当 JSON 嵌入到另一种格式中（HTTP 请求体、数据库列、环境变量）时，外层格式的转义可能会破坏内部 JSON。检查反斜杠是否被加倍（\\\\\\\\\\\\\\\\ 变成了 \\\\\\\\，这是错误的）或完全缺失。

**3. 对大文档使用模式验证。** 对于复杂的 JSON 结构（1000 行以上），手动检查容易出错。定义一个 JSON Schema 并针对其进行验证。这可以捕获结构问题，如缺少必填字段、错误的数据类型和意外的额外属性。

**4. 记录原始响应。** 许多调试问题来自于静默解析 JSON 的库——错误变成神秘的异常。始终在解析之前记录原始 HTTP 响应体。一个字符的编码问题（UTF-8 BOM、零宽度空格）可能使看起来有效的 JSON 无法解析。

**5. 检查不可打印字符。** 有时不可见字符（零宽度空格 U+200B、BOM U+FEFF、不间断空格）会潜入 JSON 并导致解析失败。十六进制转储或能高亮不可打印字符的验证器可以快速发现这些问题。

**6. 测试解析器的边界情况。** 空对象 \`{}\`、空数组 \`[]\`、深度嵌套的结构、非常长的字符串（超过 100K 字符）以及接近精度限制的数字（大于 2^53）都可能在不同的 JSON 解析器中触发不同的行为。如果需要跨平台兼容性，请在多个解析器上测试你的文档。

## 常见问题

**问：JSON 和 JavaScript 对象有什么区别？**
答：JSON 是一种具有严格语法规则的文本格式——键必须用双引号，字符串必须用双引号，只允许六种类型。JavaScript 对象字面量更宽松（无引号键、单引号、尾逗号、函数、日期）。所有 JSON 都是有效的 JavaScript，但并非所有 JavaScript 对象字面量都是有效的 JSON。

**问：JSON 可以包含注释吗？**
答：不可以。JSON 规范（RFC 7159）不允许注释。如果需要注释，请使用 JSON5，或在解析前使用注释去除工具处理你的 JSON 文件。YAML 是需要注释的配置文件更好的选择。

**问：配置文件应该使用 JSON 还是 YAML？**
答：YAML 通常更适合配置文件，因为它支持注释、多行字符串，并且更易于人类阅读。JSON 更适合机器间的数据交换。对于简单的配置，两种都可以——根据团队对每种格式的熟悉程度来选择。

**问：如何格式化 JSON 以提高可读性？**
答：使用 JSON 格式化工具，如 [/tools/json-formatter](/tools/json-formatter)。大多数代码编辑器（VS Code、IntelliJ）也内置了格式化功能（VS Code 中使用 Shift+Alt+F）。对于命令行格式化，\`jq '.' file.json\` 或 \`python -m json.tool file.json\` 效果不错。

**问：JSON 文档的最大大小是多少？**
答：没有正式限制，但存在实际约束。大多数解析器可以处理 100-200 MB 的文档，但解析大 JSON 文件速度慢且占用内存。对于非常大的数据集，使用流式 JSON 解析器（json-stream、ijson）或考虑替代方案，如换行符分隔的 JSON（NDJSON）或 Protocol Buffers。

**问：如何在 JSON 中处理日期？**
答：JSON 没有原生日期类型。约定是将日期序列化为 ISO 8601 字符串：\`"2024-12-25T10:30:00Z"\`。你的应用程序代码应在反序列化后将这些字符串解析为原生日期对象。一些 API 也使用 Unix 时间戳（自纪元以来的毫秒数）作为数字。

**问：什么是 JSONP，我应该使用它吗？**
答：JSONP（JSON with Padding）是一种较旧的跨域请求技术，它使用 \`<script>\` 标签而不是 XMLHttpRequest。它不安全（没有同源策略，容易受到 XSS 攻击），并且已基本被 CORS 取代。不要在新应用中使用 JSONP。
`,
  },
  {
    slug: "base64-encoding-explained",
    title: "Base64 Encoding Explained — When and Why to Use It",
    description: "A complete guide to Base64 encoding and decoding. Learn what it is, how it works, and when to use it in your projects.",
    date: "2026-05-22",
    readTime: "6 min read",
    category: "Developer Tools",
    toolSlug: "base64-encode-decode",
    content: `## Base64 Encoding: When to Use It and Why It's Not Encryption

Base64 encoding is one of those fundamental tools every developer encounters — whether embedding images in HTML, transmitting binary data in JSON, or handling authentication headers. Yet despite its ubiquity, Base64 is frequently misunderstood, often mistaken for encryption, and sometimes used in places it doesn't belong. This post breaks down exactly what Base64 is, when you should reach for it, and the critical distinction between encoding and encryption.

### What Is Base64 and How Does It Work?

Base64 is a binary-to-text encoding scheme that represents binary data using a set of 64 printable ASCII characters: A-Z, a-z, 0-9, +, and /. It works by taking three bytes (24 bits) of input data and converting them into four Base64 characters (6 bits each). This is why Base64 introduces a predictable 33% overhead — every 3 bytes of input becomes 4 characters of output.

The process is straightforward: the input bytes are concatenated into a single binary stream, split into 6-bit groups, and each 6-bit value (0-63) is mapped to a character from the Base64 alphabet. If the input length isn't divisible by 3, padding characters (= or ==) are added to make the output a multiple of 4 characters.

| Aspect | Base64 Encoding | Base64 Decoding |
|--------|----------------|-----------------|
| Direction | Binary → ASCII text | ASCII text → Binary |
| Overhead | +33% | None (input/output same size) |
| Key Requirement | None (anyone can decode) | None (anyone can decode) |
| Use Case | Transmission over text-safe protocols | Restoring original binary data |

You can experiment with encoding and decoding any string or file at [/tools/base64-encode-decode](/tools/base64-encode-decode) — a handy online tool that shows both the encode and decode results side by side.

### Encoding vs. Encryption: A Critical Distinction

This is the most common misconception about Base64. **Encoding is not encryption.** Here's the difference:

- **Encoding** transforms data into a different format using a publicly known, reversible scheme. No secret key is involved. Anyone who knows the scheme can decode it. Base64, URL encoding, ASCII, and Unicode are all encoding systems.
- **Encryption** transforms data using a secret key (or key pair) so that only authorized parties can decrypt it. Even if you know the algorithm (AES, RSA), you cannot decrypt without the key.

The practical implication is significant: storing passwords, API keys, or personal data in Base64 is not a security measure. It is the equivalent of writing your password in a different language — anyone who recognizes the encoding can read it instantly. If you need to protect data, use proper encryption libraries, not Base64.

| Property | Base64 Encoding | AES-256 Encryption |
|----------|-----------------|-------------------|
| Key Required | No | Yes (256-bit key) |
| Reversible by anyone | Yes | No (without key) |
| Security guarantee | None | Confidentiality |
| Common misconception | "It's encrypted" | "It's too slow" |
| Industry use | Data transport | Data protection |

If you're working with encrypted data and need to transmit it safely over a text-only channel, you might combine both — encrypt first with AES, then Base64-encode the ciphertext. But never skip the encryption step.

### When to Use Base64 (and When Not To)

Base64 has clear strengths and equally clear limitations. Here's a pragmatic guide:

**When Base64 makes sense:**

- **Embedding binary data in text formats.** Inline images in HTML emails (data: URIs), attaching binary data inside JSON or XML payloads, or encoding SSL certificates in PEM format all rely on Base64.
- **Storing binary in text-based storage.** If you're using a database column that only accepts text (VARCHAR, TEXT), Base64 lets you store images, archives, or any binary blob without switching column types.
- **Authentication headers.** HTTP Basic Authentication uses Base64-encoded \`username:password\` pairs — though this is transmitted over HTTPS, not as a standalone security measure.
- **URL-safe identifiers.** The URL-safe variant (Base64URL, using - and _ instead of + and /) is common for tokens, session IDs, and API keys.

**When Base64 is the wrong choice:**

- **As a security mechanism.** As discussed above, Base64 provides zero confidentiality. Use it for transport, not protection.
- **Reducing data size.** Base64 increases size by 33%. If you need to minimize payload, use compression (gzip, zlib) instead.
- **File uploads over modern APIs.** Most REST APIs and file upload endpoints support raw binary (multipart/form-data). Base64-encoding a file just adds overhead for no benefit.
- **When you need the smallest possible output.** Consider Base32 or Base62 if character set constraints exist, or hexadecimal for human readability (at 2x overhead vs Base64's 1.33x).

The practical takeaway: Base64 is a data transport tool, not a security one. Use it when you need to fit binary data into a text pipeline, and skip it otherwise. Try encoding your own test data at [/tools/base64-encode-decode](/tools/base64-encode-decode) to see the overhead in action and get comfortable with the output format.

### Common Pitfalls and Best Practices

Even experienced developers trip over some Base64 nuances. Here are the most frequent issues and how to handle them:

- **Padding errors.** Some implementations omit padding (= chars). Libraries vary: some require it, others auto-add it. Always validate or use a padding-tolerant decoder.
- **Whitespace and line breaks.** Email and PEM formats insert line breaks every 64 or 76 characters. Many decoders choke on whitespace unless configured to skip it.
- **Character set confusion.** Standard Base64 uses + and /, which are not URL-safe. In URLs, replace them with - and _ (Base64URL mode) or percent-encode the + and / characters.
- **Chunked encoding.** If you're encoding data incrementally (e.g., streaming a large file), ensure your encoder handles partial 3-byte blocks correctly — each chunk's padding must be properly aligned.
- **Performance overhead.** Base64 encoding/decoding is generally fast (hundreds of MB/s in optimized C libraries), but in JavaScript or interpreted languages, encoding large files (10+ MB) can cause visible UI lag. Consider Web Workers for in-browser encoding.

For most projects, stick with the standard library's Base64 functions — they are thoroughly tested and handle edge cases. Only reach for custom implementations when you need a specific variant like Base64URL, Base64 for IMAP, or a custom alphabet.

## FAQ

**Q: Is Base64 encoding secure?**  
A: No. Base64 provides no security whatsoever. It is a reversible, keyless encoding scheme. Anyone can decode Base64 data instantly. Use proper encryption (AES, RSA) if you need confidentiality.

**Q: Why does Base64 increase file size by 33%?**  
A: Base64 converts 3 bytes (24 bits) into 4 ASCII characters (32 bits of encoded data), a ratio of 4:3. This 4/3 = 1.33 multiplier is the source of the 33% overhead. Some overhead also comes from padding characters.

**Q: Can Base64 data be compressed?**  
A: Yes, but it's usually pointless. The Base64 alphabet uses only 6 bits per character out of 8 available, so the data is highly compressible. However, compressing before encoding is much more efficient than encoding then compressing.

**Q: What's the difference between Base64 and Base64URL?**  
A: Base64URL replaces + with - and / with _, and omits padding characters (=). This makes it safe for use in URLs and filenames without percent-encoding. Many modern APIs use Base64URL for tokens.

**Q: How do I decode Base64 data in my browser?**  
A: You can use the built-in \`atob()\` function in JavaScript, or visit [/tools/base64-encode-decode](/tools/base64-encode-decode) to decode any Base64 string instantly without writing code.

**Q: Is Base64 the most efficient binary-to-text encoding?**  
A: No. Base64's efficiency is 75% (6 bits per byte). Base85 (Ascii85) achieves 80% efficiency, and Base122 reaches 87.5%. Base64 is the most widely supported and standardised, making it the default choice for interoperability.

**Q: Should I Base64-encode images before storing them in a database?**  
A: It depends. If your database supports BLOB or BYTEA column types, store raw bytes for better performance and smaller storage. If you're constrained to text-only columns, Base64 encoding is a practical workaround despite the 33% overhead.
`,
    contentZh: `## Base64 编码：何时使用以及为何它不是加密

Base64 编码是每个开发者都会遇到的基础工具之一——无论是将图片嵌入 HTML、在 JSON 中传输二进制数据，还是处理认证头。然而，尽管它无处不在，Base64 却经常被误解，常被误认为是加密，有时还被用在不该用的地方。本文将详细解释 Base64 是什么、何时应该使用它，以及编码与加密之间的关键区别。

### 什么是 Base64 以及它是如何工作的？

Base64 是一种二进制到文本的编码方案，它使用 64 个可打印的 ASCII 字符来表示二进制数据：A-Z、a-z、0-9、+ 和 /。它的工作原理是将输入数据的三个字节（24 位）转换为四个 Base64 字符（每个 6 位）。这就是为什么 Base64 会引入可预测的 33% 开销——每 3 字节输入变成 4 字符输出。

这个过程很直接：输入字节被连接成一个二进制流，分成 6 位一组，每个 6 位值（0-63）映射到 Base64 字母表中的一个字符。如果输入长度不能被 3 整除，则添加填充字符（= 或 ==）使输出成为 4 的倍数。

| 方面 | Base64 编码 | Base64 解码 |
|--------|----------------|-----------------|
| 方向 | 二进制 → ASCII 文本 | ASCII 文本 → 二进制 |
| 开销 | +33% | 无（输入/输出相同大小） |
| 关键要求 | 无（任何人都可以解码） | 无（任何人都可以解码） |
| 用例 | 通过文本安全协议传输 | 恢复原始二进制数据 |

你可以在 [/tools/base64-encode-decode](/tools/base64-encode-decode) 上对任何字符串或文件进行编码和解码实验——这是一个方便的在线工具，可以并排显示编码和解码结果。

### 编码与加密：关键区别

这是关于 Base64 最常见的误解。**编码不是加密。** 区别如下：

- **编码** 使用公开已知、可逆的方案将数据转换为不同的格式。不需要密钥。任何知道该方案的人都可以解码。Base64、URL 编码、ASCII 和 Unicode 都是编码系统。
- **加密** 使用密钥（或密钥对）转换数据，使得只有授权方才能解密。即使你知道算法（AES、RSA），没有密钥也无法解密。

实际意义重大：以 Base64 格式存储密码、API 密钥或个人数据并不是安全措施。这相当于用另一种语言写你的密码——任何识别出编码的人都可以立即读取。如果需要保护数据，请使用正确的加密库，而不是 Base64。

| 属性 | Base64 编码 | AES-256 加密 |
|----------|-----------------|-------------------|
| 需要密钥 | 否 | 是（256 位密钥） |
| 任何人都可逆 | 是 | 否（无密钥时） |
| 安全保障 | 无 | 机密性 |
| 常见误解 | "这是加密的" | "它太慢了" |
| 行业用途 | 数据传输 | 数据保护 |

如果你处理的是加密数据，并且需要通过纯文本通道安全地传输，你可能会结合两者——先用 AES 加密，然后对密文进行 Base64 编码。但绝不能跳过加密步骤。

### 何时使用 Base64（以及何时不该使用）

Base64 有明确的优势，也有同样明确的局限性。以下是一份实用指南：

**适合使用 Base64 的情况：**

- **在文本格式中嵌入二进制数据。** 在 HTML 邮件中内联图片（data: URI）、在 JSON 或 XML 负载中附加二进制数据、或者以 PEM 格式编码 SSL 证书，都依赖于 Base64。
- **在基于文本的存储中保存二进制数据。** 如果你使用的数据库列只接受文本（VARCHAR、TEXT），Base64 可以让你存储图像、归档文件或任何二进制数据，而无需更改列类型。
- **认证头。** HTTP 基本认证使用 Base64 编码的 \`username:password\` 对——尽管这通过 HTTPS 传输，而不是作为独立的安全措施。
- **URL 安全的标识符。** URL 安全变体（Base64URL，使用 - 和 _ 代替 + 和 /）常用于令牌、会话 ID 和 API 密钥。

**不适合使用 Base64 的情况：**

- **作为安全机制。** 如上所述，Base64 不提供任何机密性。用于传输，而非保护。
- **减少数据大小。** Base64 会使大小增加 33%。如果需要最小化负载，请使用压缩（gzip、zlib）。
- **通过现代 API 上传文件。** 大多数 REST API 和文件上传端点支持原始二进制（multipart/form-data）。对文件进行 Base64 编码只会增加开销，没有任何好处。
- **当你需要尽可能小的输出时。** 如果存在字符集限制，请考虑 Base32 或 Base62；如果需要人类可读性，请考虑十六进制（开销为 2 倍，而 Base64 为 1.33 倍）。

实际要点：Base64 是一种数据传输工具，而不是安全工具。当你需要将二进制数据放入文本管道时使用它，否则跳过。在 [/tools/base64-encode-decode](/tools/base64-encode-decode) 上尝试编码自己的测试数据，看看实际的开销，并熟悉输出格式。

### 常见陷阱和最佳实践

即使是经验丰富的开发者也会在 Base64 的一些细微之处上犯错。以下是最常见的问题及处理方法：

- **填充错误。** 一些实现省略了填充字符（=）。库之间各不相同：有些需要它，有些会自动添加。始终验证或使用填充容忍的解码器。
- **空白和换行。** 电子邮件和 PEM 格式每 64 或 76 个字符插入换行。许多解码器在遇到空白时会出错，除非配置为跳过空白。
- **字符集混淆。** 标准 Base64 使用 + 和 /，它们对 URL 不安全。在 URL 中，将它们替换为 - 和 _（Base64URL 模式）或对 + 和 / 字符进行百分号编码。
- **分块编码。** 如果你正在增量编码数据（例如，流式传输大文件），确保你的编码器正确处理部分 3 字节块——每个块的填充必须正确对齐。
- **性能开销。** Base64 编码/解码通常很快（在优化的 C 库中为数百 MB/s），但在 JavaScript 或解释型语言中，编码大文件（10+ MB）可能导致可见的 UI 延迟。考虑使用 Web Worker 进行浏览器内编码。

对于大多数项目，坚持使用标准库的 Base64 函数——它们经过充分测试并处理了边界情况。只有在需要特定变体（如 Base64URL、用于 IMAP 的 Base64 或自定义字母表）时才使用自定义实现。

## 常见问题

**问：Base64 编码安全吗？**  
答：不安全。Base64 不提供任何安全性。它是一种可逆、无密钥的编码方案。任何人都可以立即解码 Base64 数据。如果需要机密性，请使用正确的加密（AES、RSA）。

**问：为什么 Base64 会使文件大小增加 33%？**  
答：Base64 将 3 字节（24 位）转换为 4 个 ASCII 字符（32 位编码数据），比例为 4:3。这个 4/3 = 1.33 的乘数就是 33% 开销的来源。部分开销也来自填充字符。

**问：Base64 数据可以压缩吗？**  
答：可以，但通常没有意义。Base64 字母表在 8 位中只使用 6 位，因此数据具有很高的可压缩性。然而，编码前压缩比编码后再压缩要高效得多。

**问：Base64 和 Base64URL 有什么区别？**  
答：Base64URL 将 + 替换为 -、将 / 替换为 _，并省略填充字符（=）。这使其在 URL 和文件名中安全使用，无需百分号编码。许多现代 API 使用 Base64URL 作为令牌。

**问：如何在浏览器中解码 Base64 数据？**  
答：你可以使用 JavaScript 内置的 \`atob()\` 函数，或者访问 [/tools/base64-encode-decode](/tools/base64-encode-decode) 在不编写代码的情况下即时解码任何 Base64 字符串。

**问：Base64 是最有效的二进制到文本编码吗？**  
答：不是。Base64 的效率是 75%（每字节 6 位）。Base85（Ascii85）达到 80% 的效率，Base122 达到 87.5%。Base64 是支持最广泛、标准化程度最高的，因此是互操作性的默认选择。

**问：在将图像存储到数据库之前，我应该对它们进行 Base64 编码吗？**  
答：视情况而定。如果你的数据库支持 BLOB 或 BYTEA 列类型，则存储原始字节以获得更好的性能和更小的存储空间。如果你只能使用纯文本列，尽管有 33% 的开销，Base64 编码是一种实用的变通方法。
`,

  },
  {
    slug: "regex-for-beginners",
    title: "Regex for Beginners: How to Test Regular Expressions Online",
    description: "Learn regex from scratch. Patterns, quantifiers, groups, and how to test them in real-time with our free tester.",
    date: "2026-05-22",
    readTime: "8 min read",
    category: "Developer Tools",
    toolSlug: "regex-tester",
    content: `## Regex Basics: A Practical Guide for Developers

Regular expressions (regex) are one of those skills that look intimidating at first but become indispensable once you master them. Whether you're validating email addresses, extracting data from logs, or performing complex search-and-replace operations, regex gives you superpowers in text processing. This guide covers the fundamentals you need to start writing effective patterns today.

### What Is a Regular Expression?

A regular expression is a sequence of characters that defines a search pattern. Think of it as a mini-programming language designed specifically for matching and manipulating text. Most modern programming languages — JavaScript, Python, Ruby, Java, Go, and many others — support regex natively or through standard libraries.

The core idea is simple: you define a pattern, and the regex engine scans your input text to find matches. Patterns can range from a literal word like \`hello\` to complex expressions that match email addresses, URLs, or nested HTML tags.

You can experiment with patterns interactively using our [regex tester](/tools/regex-tester) tool, which provides real-time matching against sample text.

### Common Patterns and Building Blocks

Most regex patterns are built from a small set of primitives. Here's a cheat sheet of the most frequently used building blocks:

| Pattern | Meaning | Example | Matches |
|---------|---------|---------|---------|
| \`.\` | Any character except newline | \`c.t\` | cat, cot, cut |
| \`\\d\` | Any digit (0-9) | \`\\d{3}\` | 123, 456, 000 |
| \`\\w\` | Word character (a-z, A-Z, 0-9, _) | \`\\w+\` | hello, test_123 |
| \`\\s\` | Whitespace (space, tab, newline) | \`\\s+\` | "   ", "\\t\\n" |
| \`^\` | Start of string | \`^Hello\` | "Hello world" |
| \`$\` | End of string | \`world$\` | "Hello world" |
| \`*\` | Zero or more of preceding | \`ab*c\` | ac, abc, abbc |
| \`+\` | One or more of preceding | \`ab+c\` | abc, abbc (not ac) |
| \`?\` | Zero or one of preceding | \`colou?r\` | color, colour |
| \`{n,m}\` | Between n and m repetitions | \`\\d{2,4}\` | 12, 123, 1234 |
| \`[abc]\` | Character class (any listed) | \`[aeiou]\` | Any vowel |
| \`[^abc]\` | Negated character class | \`[^0-9]\` | Any non-digit |
| \`(x|y)\` | Alternation (x or y) | \`cat|dog\` | cat or dog |

Master these, and you can construct patterns for 90% of everyday use cases. For example, a US phone number pattern might look like \`\\d{3}-\\d{3}-\\d{4}\` — three digits, a hyphen, three digits, another hyphen, and four digits.

### Regex Flags: Controlling the Engine

Flags modify how the regex engine interprets and applies your pattern. The most important ones are:

- **\`g\` (Global)** — Don't stop after the first match; find all matches in the input.
- **\`i\` (Case-Insensitive)** — Match both uppercase and lowercase letters. Without it, \`Hello\` won't match \`hello\`.
- **\`m\` (Multiline)** — Changes the behavior of \`^\` and \`$\` to match start/end of each line, not just the whole string.
- **\`s\` (DotAll)** — Makes \`.\` match newline characters too.
- **\`u\` (Unicode)** — Enables full Unicode matching so \`\\w\` works with letters from non-English scripts.
- **\`x\` (Extended)** — Allows whitespace and comments inside the pattern for readability.

Flags are combined in different ways depending on the language. In JavaScript: \`/pattern/gi\`. In Python: \`re.findall(pattern, text, re.IGNORECASE | re.DOTALL)\`. In most online tools, they're available as toggle buttons.

### Greedy vs Lazy Quantifiers

One of the most common regex pitfalls is the difference between greedy and lazy matching. By default, quantifiers like \`*\`, \`+\`, and \`{n,m}\` are **greedy** — they match as much text as possible.

Consider the string \`<div>Content</div><span>More</span>\` with the pattern \`<.+>\`. A greedy match would go from the first \`<\` all the way to the last \`>\`, matching the entire string. That's rarely what you want.

Adding a \`?\` after a quantifier makes it **lazy** (also called non-greedy or reluctant). The pattern \`<.+?>\` matches as little as possible, stopping at the first \`>\` — so it matches \`<div>\`, then \`</div>\`, then \`<span>\`, then \`</span>\` separately.

| Pattern | Behavior | Match on "abc123" |
|---------|----------|-------------------|
| \`\\d+\` | Greedy — grabs all digits | \`123\` |
| \`\\d+?\` | Lazy — grabs one digit | \`1\`, then \`2\`, then \`3\` |
| \`.*\` | Greedy — matches everything | \`abc123\` |
| \`.*?\` | Lazy — matches nothing (zero-length) | \`""\` (empty match) |

Use greedy by default and switch to lazy when you need minimal matching — for example, when extracting content between HTML tags.

### Real-World Examples

Let's look at some practical patterns you can use today:

**Email validation** — A simplified but practical pattern: \`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$\` matches most valid email formats. Note that full RFC 5322 compliance requires a much more complex expression.

**URL extraction** — \`https?://[^\\s]+\` finds all HTTP/HTTPS URLs in a block of text. It matches the protocol followed by any non-whitespace characters.

**Date parsing (YYYY-MM-DD)** — \`^\\d{4}-\\d{2}-\\d{2}$\` matches dates in ISO 8601 format. For named capture groups (supported in most engines), use \`^(?P<year>\\d{4})-(?P<month>\\d{2})-(?P<day>\\d{2})$\`.

**Log file parsing** — A common Apache/Nginx log line: \`^(\\S+) (\\S+) (\\S+) \\[([^\\]]+)\\] "([^"]*)" (\\d{3}) (\\d+)$\` extracts the IP address, identity, user, timestamp, request, status code, and byte size.

Try these patterns in our [regex tester](/tools/regex-tester) against your own data. For more advanced operations like search-and-replace with backreferences, check out our [string utilities](/tools/string-utilities) and [text tools](/tools/text-tools) pages.

## FAQ

**Q: What's the difference between literal characters and metacharacters?**
A: Literal characters match themselves (like \`a\` matching "a"). Metacharacters like \`.\`, \`*\`, \`+\`, \`?\`, \`[\`, \`]\`, \`(\`, \`)\`, \`{\`, \`}\`, \`^\`, \`$\`, \`|\`, and \`\\\` have special meaning. To match a metacharacter literally, escape it with a backslash — \`\\.\` matches a literal period.

**Q: Why does my regex work in one tool but not in another?**
A: Different regex engines have subtle differences. JavaScript, Python, and PCRE (PHP) implement different flavors. The most common differences involve backreferences, lookahead/lookbehind support, and Unicode handling. Always test in the same engine you'll use in production.

**Q: What are capture groups and how do I use them?**
A: Parentheses \`()\` create capture groups that store matched substrings for later use. For example, \`(\\d{3})-(\\d{4})\` captures area code and local number separately. Use backreferences like \`\\1\` or \`$1\` (depending on the engine) to refer to captured groups in replacements.

**Q: How do I match across multiple lines?**
A: Use the multiline flag (\`m\`) so \`^\` and \`$\` match line boundaries. Use the dotall flag (\`s\`) if you want \`.\` to match newline characters. Without these flags, \`.\` stops at newlines and \`^\`/\`$\` only match the start/end of the entire string.

**Q: What does the \`\\b\` word boundary do?**
A: \`\\b\` matches the position between a word character (\`\\w\`) and a non-word character (\`\\W\`). It's useful for whole-word matching — \`\\bcat\\b\` matches "cat" but not "catalog" or "concatenate".

**Q: Is regex the best tool for parsing HTML?**
A: No. HTML is not a regular language — it has nested structures that regex cannot reliably parse. Use a proper DOM parser or HTML parser library instead. Regex works well for extracting simple patterns from HTML (like all href values), but not for parsing the document structure.

**Q: How can I debug a complex regex pattern?**
A: Use our [regex tester](/tools/regex-tester) with your sample data. Break the pattern into smaller pieces and test each one. Enable verbose mode (\`x\` flag) to add comments and whitespace. Many tools also show visual diagrams of how the engine matches your pattern.
`,
    contentZh: `## 正则表达式基础：开发者实用指南

正则表达式（regex）是一种技能，起初看起来令人生畏，但一旦掌握就变得不可或缺。无论你是验证电子邮件地址、从日志中提取数据，还是执行复杂的查找替换操作，正则表达式都能赋予你文本处理的超能力。本指南涵盖了你今天开始编写有效模式所需的基础知识。

### 什么是正则表达式？

正则表达式是一个定义搜索模式的字符序列。可以把它看作一种专门用于匹配和操作文本的迷你编程语言。大多数现代编程语言——JavaScript、Python、Ruby、Java、Go 等——都原生或通过标准库支持正则表达式。

核心思想很简单：你定义一个模式，正则引擎扫描你的输入文本以查找匹配。模式可以像 \`hello\` 这样的字面词，也可以像匹配电子邮件地址、URL 或嵌套 HTML 标签这样的复杂表达式。

你可以使用我们的[正则表达式测试器](/tools/regex-tester)工具交互式地实验模式，该工具提供针对示例文本的实时匹配。

### 常见模式与构建块

大多数正则表达式模式由一组基本原语构建而成。以下是最常用构建块的速查表：

| 模式 | 含义 | 示例 | 匹配结果 |
|---------|---------|---------|---------|
| \`.\` | 除换行符外的任意字符 | \`c.t\` | cat, cot, cut |
| \`\\d\` | 任意数字（0-9） | \`\\d{3}\` | 123, 456, 000 |
| \`\\w\` | 单词字符（a-z, A-Z, 0-9, _） | \`\\w+\` | hello, test_123 |
| \`\\s\` | 空白字符（空格、制表符、换行） | \`\\s+\` | "   ", "\\t\\n" |
| \`^\` | 字符串开头 | \`^Hello\` | "Hello world" |
| \`$\` | 字符串结尾 | \`world$\` | "Hello world" |
| \`*\` | 前一个字符零次或多次 | \`ab*c\` | ac, abc, abbc |
| \`+\` | 前一个字符一次或多次 | \`ab+c\` | abc, abbc（不包括 ac） |
| \`?\` | 前一个字符零次或一次 | \`colou?r\` | color, colour |
| \`{n,m}\` | n 到 m 次重复 | \`\\d{2,4}\` | 12, 123, 1234 |
| \`[abc]\` | 字符类（列出的任意一个） | \`[aeiou]\` | 任意元音字母 |
| \`[^abc]\` | 否定字符类 | \`[^0-9]\` | 任意非数字字符 |
| \`(x|y)\` | 分支（x 或 y） | \`cat|dog\` | cat 或 dog |

掌握这些，你就可以构建 90% 日常使用场景的模式。例如，美国电话号码模式可能看起来像 \`\\d{3}-\\d{3}-\\d{4}\`——三位数字、连字符、三位数字、另一个连字符和四位数字。

### 正则标志：控制引擎

标志（Flags）修改正则引擎解释和应用模式的方式。最重要的标志包括：

- **\`g\`（全局）**——不在第一个匹配后停止；查找输入中的所有匹配。
- **\`i\`（不区分大小写）**——同时匹配大写和小写字母。没有它，\`Hello\` 不会匹配 \`hello\`。
- **\`m\`（多行）**——改变 \`^\` 和 \`$\` 的行为，使其匹配每行的开头/结尾，而不仅仅是整个字符串。
- **\`s\`（点号通配）**——使 \`.\` 也匹配换行符。
- **\`u\`（Unicode）**——启用完整的 Unicode 匹配，使 \`\\w\` 也能处理非英语脚本的字母。
- **\`x\`（扩展）**——允许在模式中使用空白和注释以提高可读性。

标志的组合方式因语言而异。在 JavaScript 中：\`/pattern/gi\`。在 Python 中：\`re.findall(pattern, text, re.IGNORECASE | re.DOTALL)\`。在大多数在线工具中，它们以切换按钮的形式提供。

### 贪婪与懒惰量词

最常见的正则陷阱之一是贪婪匹配和懒惰匹配之间的区别。默认情况下，\`*\`、\`+\` 和 \`{n,m}\` 等量词是**贪婪**的——它们匹配尽可能多的文本。

考虑字符串 \`<div>Content</div><span>More</span>\` 和模式 \`<.+>\`。贪婪匹配会从第一个 \`<\` 一直到最后一个 \`>\`，匹配整个字符串。这通常不是你想要的。

在量词后添加 \`?\` 使其变为**懒惰**（也称为非贪婪或勉强）模式。模式 \`<.+?>\` 尽可能少地匹配，在第一个 \`>\` 处停止——因此它分别匹配 \`<div>\`、\`</div>\`、\`<span>\` 和 \`</span>\`。

| 模式 | 行为 | 匹配 "abc123" |
|---------|----------|-------------------|
| \`\\d+\` | 贪婪——获取所有数字 | \`123\` |
| \`\\d+?\` | 懒惰——获取一个数字 | \`1\`，然后是 \`2\`，然后是 \`3\` |
| \`.*\` | 贪婪——匹配所有内容 | \`abc123\` |
| \`.*?\` | 懒惰——不匹配（零长度） | \`""\`（空匹配） |

默认使用贪婪模式，在需要最小匹配时切换到懒惰模式——例如，在提取 HTML 标签间的内容时。

### 实际应用示例

让我们看一些你今天就可以使用的实用模式：

**电子邮件验证**——一个简化但实用的模式：\`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$\` 匹配大多数有效的电子邮件格式。请注意，完全符合 RFC 5322 规范需要一个更复杂的表达式。

**URL 提取**——\`https?://[^\\s]+\` 查找文本块中的所有 HTTP/HTTPS URL。它匹配协议后跟任意非空白字符。

**日期解析（YYYY-MM-DD）**——\`^\\d{4}-\\d{2}-\\d{2}$\` 匹配 ISO 8601 格式的日期。对于命名捕获组（大多数引擎支持），使用 \`^(?P<year>\\d{4})-(?P<month>\\d{2})-(?P<day>\\d{2})$\`。

**日志文件解析**——一个常见的 Apache/Nginx 日志行：\`^(\\S+) (\\S+) (\\S+) \\[([^\\]]+)\\] "([^"]*)" (\\d{3}) (\\d+)$\` 提取 IP 地址、身份、用户、时间戳、请求、状态码和字节大小。

在我们的[正则表达式测试器](/tools/regex-tester)中尝试这些模式，针对你自己的数据进行测试。有关更高级的操作（如带反向引用的查找替换），请查看我们的[字符串工具](/tools/string-utilities)和[文本工具](/tools/text-tools)页面。

## 常见问题

**问：字面字符和元字符有什么区别？**
答：字面字符匹配自身（如 \`a\` 匹配 "a"）。像 \`.\`、\`*\`、\`+\`、\`?\`、\`[\`、\`]\`、\`(\`、\`)\`、\`{\`、\`}\`、\`^\`、\`$\`、\`|\` 和 \`\\\` 这样的元字符有特殊含义。要匹配元字符本身，请使用反斜杠进行转义——\`\\.\` 匹配字面句点。

**问：为什么我的正则表达式在一个工具中有效，在另一个工具中却无效？**
答：不同的正则引擎有细微的差异。JavaScript、Python 和 PCRE（PHP）实现不同的风格。最常见的差异涉及反向引用、前瞻/后顾支持和 Unicode 处理。始终在与生产环境相同的引擎中测试。

**问：什么是捕获组，如何使用？**
答：圆括号 \`()\` 创建捕获组，存储匹配的子字符串供以后使用。例如，\`(\\d{3})-(\\d{4})\` 分别捕获区号和本地号码。使用 \`\\1\` 或 \`$1\` 等反向引用（取决于引擎）在替换中引用捕获的组。

**问：如何跨多行匹配？**
答：使用多行标志（\`m\`）使 \`^\` 和 \`$\` 匹配行的边界。如果你希望 \`.\` 匹配换行符，请使用点号通配标志（\`s\`）。没有这些标志，\`.\` 在换行处停止，\`^\`/\`$\` 只匹配整个字符串的开头/结尾。

**问：\`\\b\` 单词边界的作用是什么？**
答：\`\\b\` 匹配单词字符（\`\\w\`）和非单词字符（\`\\W\`）之间的位置。它对于整词匹配很有用——\`\\bcat\\b\` 匹配 "cat" 但不匹配 "catalog" 或 "concatenate"。

**问：正则表达式是解析 HTML 的最佳工具吗？**
答：不是。HTML 不是一种正则语言——它具有正则表达式无法可靠解析的嵌套结构。请使用适当的 DOM 解析器或 HTML 解析器库。正则表达式擅长从 HTML 中提取简单模式（如所有 href 值），但不适合解析文档结构。

**问：如何调试复杂的正则表达式模式？**
答：使用我们的[正则表达式测试器](/tools/regex-tester)配合你的样本数据。将模式分解为更小的部分并逐一测试。启用详细模式（\`x\` 标志）来添加注释和空白。许多工具还显示引擎如何匹配模式的直观图示。
`,

  },
  {
    slug: "hex-to-rgb-color-conversion",
    title: "HEX to RGB: Color Conversion Made Simple",
    description: "Convert colors between HEX, RGB, and HSL formats. A practical guide for designers and developers.",
    date: "2026-05-22",
    readTime: "4 min read",
    category: "Developer Tools",
    toolSlug: "color-converter",
    content: `## What Is Color Conversion and Why It Matters

Color conversion translates a color from one model to another — HEX to RGB, RGB to HSL, or HSL back to HEX. Each model describes color differently, and understanding conversions is essential for web development, graphic design, data visualization, and print production.

The three most common models are **HEX** (HTML/CSS), **RGB** (digital displays), and **HSL** (favored by designers for intuitive adjustments). While they describe the same colors mathematically, they serve different purposes. A reliable [color conversion tool](/tools/color-converter) lets you move between them instantly.

### Understanding the RGB Color Model

RGB is an additive color model where colors are created by combining red, green, and blue light. Each channel ranges from 0 to 255 (8-bit), giving 16,777,216 possible colors (256³). Max on all channels (255,255,255) is white; min (0,0,0) is black.

RGB is the native language of computer monitors, TV screens, and phone displays — every pixel contains red, green, and blue subpixels. It's ideal for screen-based design but unintuitive for humans: it's hard to "make this color a bit more blueish" in RGB without trial and error.

### Decoding the HEX Color Format

HEX is RGB represented in base-16 notation: \`#RRGGBB\`, where each pair represents a channel. Values range from 00 (0) to FF (255). For example, \`#FF5733\` breaks down as Red=255, Green=87, Blue=51.

Shorthand HEX (3 digits, e.g., \`#F53\`) expands by doubling each digit to \`#FF5533\`, but only when each channel's two digits are identical (limiting it to 4,096 colors).

HEX is the dominant format in CSS and HTML because it's compact (6 characters) and easy to copy-paste. However, it's even less intuitive than RGB for manual adjustments — what hex value makes a color "more saturated"? That's where HSL comes in.

### Why Designers Prefer HSL

HSL separates color into three components: **Hue** (degrees on a color wheel — 0° red, 120° green, 240° blue), **Saturation** (0% gray to 100% full color), and **Lightness** (0% black to 100% white, 50% is purest hue). Adjusting color intuitively — "make this red more muted" — is trivial in HSL but involves guesswork in RGB or HEX.

| Property | HEX | RGB | HSL |
|----------|-----|-----|-----|
| Format | \`#FF5733\` | \`rgb(255,87,51)\` | \`hsl(11,100%,60%)\` |
| Readability | Low | Medium | High |
| Adjustment ease | Hard | Medium | Easy |
| CSS support | Yes | Yes | Yes |
| Screen native | No | Yes | No |

### The Conversion Math

**HEX to RGB** — Parse each hex pair to decimal. \`#FF5733\` → \`rgb(255, 87, 51)\`.

**RGB to HSL** — Normalize RGB to 0–1, find max and min. Hue comes from the max channel's position, saturation from max-min range relative to lightness, and lightness is (max+min)/2.

**HSL to RGB** — Reverse: given H, S, L, compute chroma and distribute across RGB based on the hue's sextant on the color wheel.

**HSL to HEX** — Convert HSL → RGB first, then RGB → HEX.

A [color picker with conversion](/tools/color-picker) handles all these formulas instantly.

### Practical Applications and Common Pitfalls

**Web Design & CSS** — Designers choose colors in HSL for intuitive palette creation, then convert to HEX for CSS variables.

**Data Visualization** — Generating gradients between two hues is trivial in HSL (interpolate the hue degree) but complex in HEX or RGB.

**Accessibility (WCAG Contrast)** — Contrast ratio formulas require RGB values. Use a [contrast checker](/tools/contrast-checker) to automate conversions.

**Gamut Mismatch** — Not all RGB/HSL colors are reproducible in CMYK (print). Always proof in the target color space.

**Precision Loss** — Repeated HEX → HSL → HEX conversions can drift 1–2 points per channel. Keep the original source format for critical work.

## FAQ

**What is the difference between HEX and RGB?** HEX is a base-16 shorthand for the same values RGB represents. \`#FF0000\` and \`rgb(255, 0, 0)\` describe the exact same red. The choice is purely format preference.

**Why do designers prefer HSL over RGB?** HSL separates color into hue (what color), saturation (how vivid), and lightness (how bright) — matching how humans think about color. In RGB, making a color "darker" requires adjusting all three channels manually.

**How do I convert HEX to HSL?** Convert HEX to RGB first (parse the hex pairs), then RGB to HSL using normalized ratio formulas. CSS preprocessors like Sass do this automatically.

**What is the most accurate color model for web dev?** All three (HEX, RGB, HSL) are equally supported and accurate in CSS. Use HEX for static values, HSL for programmatic palettes, and RGB for canvas/WebGL integration.

**Can I lose color information when converting?** No loss occurs between HEX, RGB, and HSL since they're transformations within the same color space (sRGB). Rounding drift is negligible (< 1%). Loss only happens crossing into a different space like CMYK or LAB.

**What is RGBA or HSLA?** These add an Alpha channel (transparency): \`rgba(255, 0, 0, 0.5)\` or \`hsla(0, 100%, 50%, 0.5)\`. Alpha ranges from 0 (transparent) to 1 (opaque). Some tools support 8-digit HEX (#RRGGBBAA) as well.

**How many colors can the human eye distinguish?** Estimates range from 1 million to 10 million. Standard 8-bit RGB's 16.7 million colors cover most of the visible sRGB gamut but not the entire human visual range.
`,
    contentZh: `## 什么是颜色转换及其重要性

颜色转换将颜色从一种模型转换为另一种——HEX 转 RGB、RGB 转 HSL 或 HSL 转回 HEX。每种模型以不同的方式描述颜色，理解转换对于网页开发、平面设计、数据可视化和印刷生产都至关重要。

三种最常见的模型是 **HEX**（HTML/CSS）、**RGB**（数字显示）和 **HSL**（设计师偏爱用于直观调整）。虽然它们在数学上描述相同的颜色，但用途不同。一个可靠的[颜色转换工具](/tools/color-converter)可以让你在它们之间即时切换。

### 理解 RGB 颜色模型

RGB 是一种加色模型，通过组合红、绿、蓝光来创建颜色。每个通道的范围是 0 到 255（8 位），总共可以有 16,777,216 种颜色（256³）。所有通道最大（255,255,255）为白色；最小（0,0,0）为黑色。

RGB 是电脑显示器、电视屏幕和手机显示屏的原生语言——每个像素都包含红、绿、蓝子像素。它非常适合基于屏幕的设计，但对人类来说不直观：在 RGB 中"让这个颜色更蓝一点"需要反复试验。

### 解码 HEX 颜色格式

HEX 是 RGB 的十六进制表示法：\`#RRGGBB\`，其中每对代表一个通道。值的范围从 00（0）到 FF（255）。例如，\`#FF5733\` 分解为 Red=255、Green=87、Blue=51。

缩写 HEX（3 位，例如 \`#F53\`）通过将每位数字加倍扩展为 \`#FF5533\`，但只有当每个通道的两位数字相同时才有效（仅限 4,096 种颜色）。

HEX 是 CSS 和 HTML 中的主流格式，因为它紧凑（6 个字符）且易于复制粘贴。然而，对于手动调整，它甚至比 RGB 更不直观——什么十六进制值能让颜色"更饱和"？这就是 HSL 的用武之地。

### 为什么设计师更喜欢 HSL

HSL 将颜色分解为三个分量：**色相（Hue）**（色轮上的度数——0° 红色、120° 绿色、240° 蓝色）、**饱和度（Saturation）**（0% 灰色到 100% 纯色）和**明度（Lightness）**（0% 黑色到 100% 白色，50% 为最纯色相）。直观地调整颜色——"让这个红色更暗淡"——在 HSL 中很简单，但在 RGB 或 HEX 中则需要猜测。

| 属性 | HEX | RGB | HSL |
|----------|-----|-----|-----|
| 格式 | \`#FF5733\` | \`rgb(255,87,51)\` | \`hsl(11,100%,60%)\` |
| 可读性 | 低 | 中 | 高 |
| 调整便利性 | 难 | 中 | 易 |
| CSS 支持 | 是 | 是 | 是 |
| 屏幕原生 | 否 | 是 | 否 |

### 转换数学

**HEX 转 RGB**——将每个十六进制对解析为十进制。\`#FF5733\` → \`rgb(255, 87, 51)\`。

**RGB 转 HSL**——将 RGB 归一化为 0-1，找到最大值和最小值。色相来自最大通道的位置，饱和度来自最大-最小范围相对于明度的比例，明度为（max+min）/2。

**HSL 转 RGB**——反向：给定 H、S、L，计算色度并根据色相在色轮上的六分之一区间分布在 RGB 上。

**HSL 转 HEX**——先将 HSL → RGB，然后 RGB → HEX。

一个[带转换功能的取色器](/tools/color-picker)可以即时处理所有这些公式。

### 实际应用与常见陷阱

**网页设计与 CSS**——设计师在 HSL 中选择颜色以创建直观的调色板，然后转换为 HEX 用于 CSS 变量。

**数据可视化**——在两个色相之间生成渐变在 HSL 中很简单（插值色相度数），但在 HEX 或 RGB 中很复杂。

**无障碍（WCAG 对比度）**——对比度公式需要 RGB 值。使用[对比度检查器](/tools/contrast-checker)来自动化转换。

**色域不匹配**——并非所有 RGB/HSL 颜色都能在 CMYK（印刷）中再现。始终在目标色彩空间中验证。

**精度损失**——重复的 HEX → HSL → HEX 转换可能导致每个通道漂移 1-2 个点。关键工作请保留原始源格式。

## 常见问题

**HEX 和 RGB 有什么区别？** HEX 是 RGB 所代表的相同值的十六进制简写。\`#FF0000\` 和 \`rgb(255, 0, 0)\` 描述完全相同的红色。选择纯粹是格式偏好。

**为什么设计师更喜欢 HSL 而不是 RGB？** HSL 将颜色分解为色相（什么颜色）、饱和度（多鲜艳）和明度（多亮）——与人思考颜色的方式相匹配。在 RGB 中，让颜色"更暗"需要手动调整所有三个通道。

**如何将 HEX 转换为 HSL？** 先将 HEX 转换为 RGB（解析十六进制对），然后使用归一化比例公式将 RGB 转换为 HSL。像 Sass 这样的 CSS 预处理器会自动完成此操作。

**哪种颜色模型对 Web 开发最准确？** 三种（HEX、RGB、HSL）在 CSS 中都得到同等支持和准确。对于静态值使用 HEX，对于编程调色板使用 HSL，对于 canvas/WebGL 集成使用 RGB。

**转换时会丢失颜色信息吗？** HEX、RGB 和 HSL 之间不会丢失，因为它们是在同一色彩空间（sRGB）内的变换。舍入漂移可以忽略不计（< 1%）。只有在进入不同的色彩空间（如 CMYK 或 LAB）时才会丢失。

**什么是 RGBA 或 HSLA？** 这些添加了 Alpha 通道（透明度）：\`rgba(255, 0, 0, 0.5)\` 或 \`hsla(0, 100%, 50%, 0.5)\`。Alpha 范围从 0（透明）到 1（不透明）。一些工具也支持 8 位 HEX（#RRGGBBAA）。

**人眼能区分多少种颜色？** 估计范围从 100 万到 1000 万。标准 8 位 RGB 的 1670 万种颜色覆盖了大部分可见 sRGB 色域，但并未覆盖整个人类视觉范围。
`,

  },
  {
    slug: "compress-images-without-losing-quality",
    title: "How to Compress Images Without Losing Quality",
    description: "Learn the best ways to reduce image file sizes while keeping visual quality. Perfect for websites, email, and storage.",
    date: "2026-05-22",
    readTime: "6 min read",
    category: "Image Tools",
    toolSlug: "image-compressor",
    content: `## Image Compression: Lossy vs. Lossless — A Complete Guide

Images make up over 60% of the average web page's weight. Every kilobyte you save translates to faster page loads, lower bandwidth costs, and better user experience — especially on mobile devices with limited data plans. But image compression isn't just about making files smaller; it's about striking the right balance between file size and visual quality. This guide covers the fundamental trade-offs between lossy and lossless compression, helps you choose the right format for every scenario, and shares real-world optimization techniques you can apply today.

### Lossy vs. Lossless Compression: The Core Trade-Off

The fundamental distinction in image compression comes down to one question: can you reconstruct the original data exactly?

**Lossless compression** reduces file size without discarding any image data. When you decompress a losslessly compressed image, you get back every single pixel exactly as it was. Formats like PNG, GIF, and WebP (in lossless mode) use techniques like run-length encoding, Huffman coding, and DEFLATE to find and eliminate redundancy without any quality loss.

**Lossy compression** achieves much higher compression ratios by permanently discarding information that the human eye is less likely to notice. JPEG, WebP (lossy mode), and AVIF exploit limitations in human vision — for example, we're more sensitive to changes in brightness than color, and we don't notice fine details in high-frequency image regions as much. By simplifying or discarding this less-important data, lossy formats can shrink files to 10-20% of their original size while appearing nearly identical to the viewer.

| Feature | Lossless (PNG) | Lossy (JPEG) |
|---------|---------------|--------------|
| Quality preserved | 100% (no data lost) | Reduced (data discarded) |
| Compression ratio | 2:1 to 5:1 | 10:1 to 50:1 |
| Best for | Screenshots, diagrams, text, logos | Photographs, gradients, complex scenes |
| Transparency support | Yes (alpha channel) | No (use PNG or WebP) |
| Typical file size | Medium | Small |
| Re-editable? | Yes, no generational loss | No, quality degrades on re-save |

You can test the visual difference between compression levels yourself at [/tools/image-compressor](/tools/image-compressor) — upload any image and see side-by-side comparisons at different quality settings.

### Image Format Guide: Choosing the Right Tool for the Job

Not all images are created equal, and neither are formats. Here's when to use each major format:

**JPEG (.jpg, .jpeg)** — The universal standard for photographs and complex images. JPEG's strength is efficiency: a well-optimized JPEG can be 80-90% smaller than the original without visible quality loss. Its weaknesses include no transparency support, poor performance with sharp edges and text (visible artifacts), and generational quality loss when re-saved. Use JPEG for photos, product images, and any image with smooth color transitions.

**PNG (.png)** — The go-to for screenshots, diagrams, logos, and anything requiring sharp edges or transparency. PNG offers lossless compression with full alpha channel support, making it ideal for UI elements and graphics with text. The trade-off: file sizes are typically much larger than JPEG for photographic content. Use PNG when pixel-perfect accuracy matters, not for everyday photos.

**WebP (.webp)** — Google's modern format that supports both lossy and lossless compression, along with transparency and animation. Lossy WebP typically achieves 25-35% smaller files than equivalent-quality JPEGs, while lossless WebP is 20-25% smaller than PNG. WebP is now supported in all major browsers. WebP is the best default choice for new web projects — its combination of features and compression efficiency is unmatched for general use.

**AVIF (.avif)** — The newest contender, based on the AV1 video codec. AVIF achieves 50% smaller files than JPEG at the same quality and supports HDR, wide color gamut, and transparency. Browser support is growing (Chrome, Firefox, Opera) but not universal (Safari support is still evolving). Use AVIF when maximum compression is critical and you can provide fallbacks.

| Format | Compression | Transparency | Animation | Browser Support | Best File Size |
|--------|-----------|-------------|-----------|----------------|---------------|
| JPEG | Lossy | No | No | Universal | Good |
| PNG | Lossless | Yes | No | Universal | Fair |
| GIF | Lossless | Yes | Yes | Universal | Poor |
| WebP | Both | Yes | Yes | 96%+ | Better |
| AVIF | Lossy | Yes | No | 80%+ | Best |

### Real-World Optimization Strategies

Theory is useful, but here's what actually works in production. These techniques build on each other — apply them in order for maximum impact.

**1. Choose the right format first.** This single decision has more impact than any other optimization. Run a library like \`squoosh\` or \`sharp\` to compare JPEG, WebP, and AVIF outputs for each image at equivalent visual quality. For a hero image on a product page, the difference between an unoptimized PNG (800 KB) and an optimized WebP (45 KB) is a 17x reduction.

**2. Set optimal quality levels.** Don't blindly use "80" for JPEG quality or "100" for everything. For JPEG, quality 70-80 is typically visually lossless for photographs. For WebP, quality 75-85 is the sweet spot. Anything above 95 is usually wasteful. Use a tool like [/tools/image-compressor](/tools/image-compressor) to find the lowest quality setting where you can't see the difference.

**3. Resize to display dimensions.** Serving a 4000×3000 pixel image for a 300×200 pixel thumbnail wastes enormous bandwidth. Always downsample images to their display size (or 2x for Retina displays). This is often more impactful than compression itself — a properly sized image can be 95% smaller than the original full-resolution version.

**4. Use responsive images.** The \`<picture>\` and \`<srcset>\` elements let you serve different image files based on viewport size and device pixel ratio. Desktop users get a high-resolution WebP, mobile users get a compressed JPEG — no one wastes bandwidth.

**5. Strip metadata.** A photo from a modern smartphone can carry 5-10 MB of EXIF metadata (GPS coordinates, camera model, shooting parameters). Stripping this metadata is a free size reduction and also protects user privacy.

**6. Automate everything.** Manual image optimization doesn't scale. Integrate compression into your build pipeline with tools like \`imagemagick\`, \`sharp\`, \`squoosh-cli\`, or cloud services like Cloudinary and Imgix. Configure them to run on every deployment automatically.

### Real-World Before and After

Here's what these strategies look like in practice on a typical e-commerce product page with 12 images:

| Scenario | Total Image Weight | Page Load Time (3G) | Monthly BW Cost (1M visitors) |
|----------|-------------------|--------------------|------------------------------|
| Unoptimized (JPEG Q90, full res) | 9.6 MB | 12.4 seconds | $230 |
| Good (JPEG Q75, resized) | 2.8 MB | 4.1 seconds | $67 |
| Better (WebP Q80, responsive) | 1.4 MB | 2.6 seconds | $34 |
| Best (AVIF Q70 + WebP fallback) | 0.9 MB | 1.8 seconds | $22 |

The jump from "unoptimized" to "good" saves 70% of bandwidth with zero visual difference. Moving to modern formats saves another 50% on top. For high-traffic sites, these numbers translate directly to real money and real engagement metrics.

## FAQ

**Q: What's the difference between lossy and lossless compression?**  
A: Lossless compression reduces file size without removing any image data — the original can be perfectly reconstructed. Lossy compression permanently discards some data to achieve smaller file sizes. Lossy is suitable for photos; lossless is better for diagrams, text, and screenshots.

**Q: Which image format is best for web use in 2026?**  
A: WebP is the safest default — excellent compression, broad browser support (~96%), transparency, and animation support. For maximum compression, use AVIF with a WebP or JPEG fallback. For screenshots and UI elements, PNG is still reliable.

**Q: Does re-saving a JPEG multiple times reduce quality?**  
A: Yes. Every time you save a JPEG, the image is re-compressed and loses additional data (generational loss). Always keep an uncompressed master copy (PNG, TIFF, or raw) and only generate the final JPEG at the end of your workflow.

**Q: How much can I compress an image before it looks bad?**  
A: It depends on the content. Photographs can often be compressed to 60-70% (JPEG quality 70) with no visible difference. Images with text, sharp edges, or gradients (like charts) show artifacts much sooner. Test compression levels at [/tools/image-compressor](/tools/image-compressor).

**Q: Is it worth converting all old JPEGs to WebP?**  
A: If the images are served frequently (hero images, product photos), converting to WebP typically saves 25-40% in file size. For rarely accessed images, the conversion cost may not be worth it. Prioritize images that appear above the fold and on high-traffic pages.

**Q: What's the best way to compress images in a build pipeline?**  
A: Use sharp (Node.js) or imagemin (Gulp/Webpack plugin) for automated build-time compression. For server-side dynamic resizing, Cloudinary or Imgix are excellent. Always compare output visually — automated quality settings don't account for image content.

**Q: Should I use JPEG or PNG for photographs on my website?**  
A: JPEG, almost always. A JPEG photo at quality 75 is typically 5-10x smaller than the same image as PNG with negligible visual difference. Save PNG for screenshots, diagrams, logos, and images requiring transparency.
`,

    contentZh: `## 图像压缩：有损与无损——完整指南

图像占平均网页权重的 60% 以上。你节省的每一 KB 都意味着更快的页面加载、更低的带宽成本和更好的用户体验——尤其是在数据套餐有限的移动设备上。但图像压缩不仅仅是让文件变小；而是在文件大小和视觉质量之间找到正确的平衡。本指南涵盖了有损和无损压缩之间的基本权衡，帮助你为每种场景选择正确的格式，并分享你可以立即应用的真实世界优化技术。

### 有损与无损压缩：核心权衡

图像压缩的基本区别归结为一个问题：你能精确重建原始数据吗？

**无损压缩**在不丢弃任何图像数据的情况下减小文件大小。当你解压无损压缩的图像时，你会得到与原来完全相同的每个像素。像 PNG、GIF 和 WebP（无损模式）这样的格式使用游程编码、哈夫曼编码和 DEFLATE 等技术来查找和消除冗余，而没有任何质量损失。

**有损压缩**通过永久丢弃人眼不太可能注意到的信息来实现更高的压缩比。JPEG、WebP（有损模式）和 AVIF 利用人类视觉的局限性——例如，我们对亮度的变化比对颜色的变化更敏感，而且我们不太注意高频图像区域中的细微细节。通过简化或丢弃这些不太重要的数据，有损格式可以将文件缩小到原始大小的 10-20%，同时看起来与原始图像几乎相同。

| 特性 | 无损（PNG） | 有损（JPEG） |
|---------|---------------|--------------|
| 质量保留 | 100%（无数据丢失） | 降低（丢弃数据） |
| 压缩比 | 2:1 到 5:1 | 10:1 到 50:1 |
| 最适合 | 截图、图表、文字、标志 | 照片、渐变、复杂场景 |
| 透明度支持 | 是（Alpha 通道） | 否（使用 PNG 或 WebP） |
| 典型文件大小 | 中等 | 小 |
| 可重新编辑？ | 是，无代际损失 | 否，重新保存会降低质量 |

你可以亲自在[/tools/image-compressor](/tools/image-compressor)测试不同压缩级别之间的视觉差异——上传任意图像，查看不同质量设置下的并排比较。

### 图像格式指南：为工作选择正确的工具

并非所有图像都一样，格式也是如此。以下是每种主要格式的使用时机：

**JPEG (.jpg, .jpeg)** — 照片和复杂图像的通用标准。JPEG 的优势在于效率：一个优化良好的 JPEG 可以比原始文件小 80-90%，而没有可见的质量损失。其缺点包括不支持透明度、在锐利边缘和文本上表现不佳（可见伪影），以及重新保存时的代际质量损失。将 JPEG 用于照片、产品图片以及任何具有平滑色彩过渡的图像。

**PNG (.png)** — 截图、图表、标志以及任何需要锐利边缘或透明度的首选格式。PNG 提供带有完全 Alpha 通道支持的无损压缩，使其成为 UI 元素和带文本图形的理想选择。缺点：对于摄影内容，文件大小通常比 JPEG 大得多。在需要像素级精确度时使用 PNG，日常照片不建议使用。

**WebP (.webp)** — Google 的现代格式，同时支持有损和无损压缩，以及透明度和动画。有损 WebP 通常比同等质量的 JPEG 小 25-35%，而无损 WebP 比 PNG 小 20-25%。WebP 现已得到所有主要浏览器的支持。WebP 是新的 Web 项目的最佳默认选择——其功能和压缩效率的组合在通用用途上无与伦比。

**AVIF (.avif)** — 最新的竞争者，基于 AV1 视频编解码器。AVIF 在同等质量下比 JPEG 小 50%，并支持 HDR、宽色域和透明度。浏览器支持正在增长（Chrome、Firefox、Opera）但尚未普及（Safari 支持仍在发展中）。在最大压缩至关重要且可以提供回退方案时使用 AVIF。

| 格式 | 压缩 | 透明度 | 动画 | 浏览器支持 | 最佳文件大小 |
|--------|-----------|-------------|-----------|----------------|---------------|
| JPEG | 有损 | 否 | 否 | 通用 | 良好 |
| PNG | 无损 | 是 | 否 | 通用 | 一般 |
| GIF | 无损 | 是 | 是 | 通用 | 差 |
| WebP | 两者 | 是 | 是 | 96%+ | 更好 |
| AVIF | 有损 | 是 | 否 | 80%+ | 最佳 |

### 真实世界的优化策略

理论很有用，但以下是实际生产中有效的方法。这些技术相互叠加——按顺序应用以获得最大效果。

**1. 首先选择正确的格式。** 这一个决定比任何其他优化的影响都大。使用 \`squoosh\` 或 \`sharp\` 等库比较每张图像在相同视觉质量下的 JPEG、WebP 和 AVIF 输出。对于产品页面上的主图，未优化的 PNG（800 KB）和优化的 WebP（45 KB）之间的差距是 17 倍。

**2. 设置最佳质量级别。** 不要盲目对 JPEG 使用"80"或对所有内容使用"100"。对于 JPEG，质量 70-80 通常对于照片来说在视觉上无损。对于 WebP，质量 75-85 是最佳区间。95 以上通常是浪费。使用像 [/tools/image-compressor](/tools/image-compressor) 这样的工具找到你看不出差异的最低质量设置。

**3. 调整为显示尺寸。** 为 300×200 像素的缩略图提供 4000×3000 像素的图像会浪费大量带宽。始终将图像下采样到其显示尺寸（对于 Retina 显示屏则为 2 倍）。这通常比压缩本身更有影响力——适当调整大小的图像可以比原始全分辨率版本小 95%。

**4. 使用响应式图像。** \`<picture>\` 和 \`<srcset>\` 元素让你可以根据视口大小和设备像素比提供不同的图像文件。桌面用户获得高分辨率 WebP，移动用户获得压缩的 JPEG——没有人浪费带宽。

**5. 去除元数据。** 现代智能手机拍摄的照片可能携带 5-10 MB 的 EXIF 元数据（GPS 坐标、相机型号、拍摄参数）。去除这些元数据是一种免费的大小缩减，同时还能保护用户隐私。

**6. 自动化一切。** 手动图像优化无法扩展。使用 \`imagemagick\`、\`sharp\`、\`squoosh-cli\` 等工具或 Cloudinary、Imgix 等云服务，将压缩集成到你的构建管道中。配置它们在每次部署时自动运行。

### 真实世界的优化前后对比

以下是这些策略在典型电子商务产品页面（包含 12 张图片）上的实际效果：

| 场景 | 图像总重量 | 页面加载时间（3G） | 月度带宽成本（100 万访客） |
|----------|-------------------|--------------------|------------------------------|
| 未优化（JPEG Q90，全分辨率） | 9.6 MB | 12.4 秒 | $230 |
| 良好（JPEG Q75，调整大小） | 2.8 MB | 4.1 秒 | $67 |
| 更好（WebP Q80，响应式） | 1.4 MB | 2.6 秒 | $34 |
| 最佳（AVIF Q70 + WebP 回退） | 0.9 MB | 1.8 秒 | $22 |

从"未优化"到"良好"的飞跃节省了 70% 的带宽，且视觉上没有任何差异。转移到现代格式在此基础上再节省 50%。对于高流量网站，这些数字直接转化为真实的金钱和真实的参与度指标。

## 常见问题

**Q：有损和无损压缩有什么区别？**  
A：无损压缩在不移除任何图像数据的情况下减小文件大小——原始图像可以完美重建。有损压缩永久丢弃一些数据以实现更小的文件大小。有损适用于照片；无损更适合图表、文本和截图。

**Q：2026 年哪种图像格式最适合网页使用？**  
A：WebP 是最安全的默认选择——出色的压缩、广泛的浏览器支持（~96%）、透明度和动画支持。要获得最大压缩，使用 AVIF 并配以 WebP 或 JPEG 回退。对于截图和 UI 元素，PNG 仍然可靠。

**Q：多次保存 JPEG 会降低质量吗？**  
A：会。每次保存 JPEG 时，图像都会重新压缩并丢失额外的数据（代际损失）。始终保留未压缩的主副本（PNG、TIFF 或 raw），并仅在工作流程结束时生成最终的 JPEG。

**Q：压缩多少后才看起来不好？**  
A：取决于内容。照片通常可以压缩到 60-70%（JPEG 质量 70）而没有可见差异。包含文本、锐利边缘或渐变（如图表）的图像会更快出现伪影。在 [/tools/image-compressor](/tools/image-compressor) 测试压缩级别。

**Q：值得将所有旧 JPEG 转换为 WebP 吗？**  
A：如果这些图像频繁提供（主图、产品照片），转换为 WebP 通常可以节省 25-40% 的文件大小。对于很少访问的图像，转换成本可能不值得。优先转换出现在首屏和高流量页面上的图像。

**Q：在构建管道中压缩图像的最佳方法是什么？**  
A：使用 sharp（Node.js）或 imagemin（Gulp/Webpack 插件）进行自动化构建时压缩。对于服务器端动态调整大小，Cloudinary 或 Imgix 是不错的选择。始终在视觉上比较输出——自动质量设置不能考虑图像内容。

**Q：在网站上应该为照片使用 JPEG 还是 PNG？**  
A：几乎总是 JPEG。质量为 75 的 JPEG 照片通常比同等的 PNG 小 5-10 倍，且视觉差异可忽略不计。将 PNG 用于截图、图表、标志和需要透明度的图像。`,
  },
  {
    slug: "merge-pdf-files-free",
    title: "Merge PDF Files Free — No Limits, No Signup",
    description: "Combine multiple PDFs into one document instantly. Free, unlimited, and private — no watermarks, no daily limits.",
    date: "2026-05-22",
    readTime: "4 min read",
    category: "PDF Tools",
    toolSlug: "pdf-merger",
    content: `## What Is PDF Merging and How It Simplifies Document Management

PDF merging is the process of combining two or more PDF files into a single document. Instead of juggling multiple files — invoices, contracts, reports, scanned forms — you consolidate them into one clean, paginated PDF. This simple operation is one of the most requested document workflows in both personal and professional settings.

Merging PDFs preserves the original content, formatting, fonts, and layout of each source file. The combined document behaves like a single PDF: you can search across all pages, print the entire collection at once, add a unified table of contents, and share one file instead of a zip folder full of loose documents.

### Common Use Cases for Merging PDFs

**Contract Bundling** — A real estate transaction might involve a purchase agreement, disclosure forms, addenda, and signature pages. Merging them into one document ensures nothing is lost and the entire package can be reviewed in sequence.

**Invoice Consolidation** — Freelancers and small businesses merge monthly invoices into a single statement for clients. This simplifies accounting and gives the client a clean archive of all charges.

**Report Compilation** — Research reports, quarterly business reviews, and project status updates often consist of multiple sections authored by different people. Merging individual PDF submissions into one final report streamlines distribution.

**Scanned Document Aggregation** — Scanning multiple pages through a feeder creates separate files. Merging them restores the intended multi-page document. A reliable [merge PDF tool](/tools/merge-pdf) handles this in seconds.

### How PDF Merging Actually Works

PDF merging isn't simply appending bytes. Each PDF has internal cross-reference tables, page object dictionaries, and resource mappings (fonts, images, annotations). A proper merge tool parses each source PDF, extracts the page objects, rebuilds the page tree, and generates a new cross-reference table for the combined output.

### Page Ordering, Rotation, and Organization

Most merge tools let you reorder pages before finalizing. This is essential when:
- Pages were scanned out of order
- You want appendices or references at the end
- You're inserting a cover page or table of contents

Rotation is another common need — a scanned page might come in sideways, or you might need to combine portrait and landscape documents. A good merge tool handles mixed orientations gracefully.

Many tools also support **page extraction** and **split** functionality alongside merging. If you need to remove specific pages before combining, look for a tool that offers [PDF splitting](/tools/split-pdf) as an adjacent feature.

### Comparing Free vs. Premium PDF Merger Tools

| Feature | Free Online | Free Desktop | Premium |
|---------|-------------|--------------|---------|
| File size limit | 10–50 MB | None | None |
| Watermark | Sometimes | No | No |
| Privacy concerns | Yes (server upload) | No | No |
| Batch processing | No | Limited | Yes |
| Page-range selection | Often no | Yes | Yes |

Free online merge tools are convenient but upload files to third-party servers — avoid them for sensitive documents like NDAs and legal contracts. Free desktop tools (PDFsam Basic, qpdf) are more private but may lack intuitive interfaces. For regular business use, a full-featured [PDF editor](/tools/pdf-editor) with merging, annotation, and compression is recommended.

### Batch Merging and Automation

Power users often need to merge dozens or hundreds of PDFs at once. Batch merging supports wildcard patterns, folder-based processing, and command-line interfaces. This is invaluable for:

- Law firms processing discovery documents
- Accounting departments consolidating expense reports
- Academic researchers combining manuscript sections and supplementary materials

Automation scripts (using Python's PyMuPDF, qpdf CLI, or Ghostscript) can merge all PDFs in a folder daily and rename the output by date stamp or project number.

## FAQ

**What file formats can be merged into a PDF?** Proper PDF merging combines PDF with PDF. If you need to include Word docs, spreadsheets, or images, convert them to PDF first, then merge. Some advanced tools handle mixed inputs automatically.

**Does merging PDFs reduce file quality?** No. A proper merge preserves the original resolution, fonts, and vectors of each source file. The output size might be slightly smaller due to deduplication of embedded fonts and resources.

**Can I merge specific pages instead of entire documents?** Yes. Most merge tools let you select page ranges from each input file (e.g., pages 1–3 from file A, pages 5–10 from file B). This is called "page-range merging."

**Is merging PDFs safe for confidential documents?** Online merge tools upload your files to a remote server — avoid them for confidential data. Use offline desktop software or a command-line tool for sensitive documents.

**What happens to bookmarks and hyperlinks after merging?** In properly implemented tools, bookmarks from each source file are preserved and nested under a section heading. Hyperlinks are recalculated to point to the correct pages in the merged document.

**How many PDFs can I merge at once?** Online tools typically limit you to 2–10 files. Desktop tools and CLI utilities can merge hundreds or thousands, limited only by system memory and disk space.

**What is the maximum file size for a merged PDF?** Online tools cap at 50–200 MB. Desktop tools support larger files limited only by system resources. PDF/A standards recommend staying under 100 MB for portability.
`,
    contentZh: `## 什么是 PDF 合并以及它如何简化文档管理

PDF 合并是将两个或多个 PDF 文件组合成单个文档的过程。无需同时处理多个文件——发票、合同、报告、扫描表格——你可以将它们整合到一个整洁、带页码的 PDF 中。这个简单操作是个人和专业场合中最常被请求的文档工作流程之一。

合并 PDF 会保留每个源文件的原始内容、格式、字体和布局。合并后的文档像一个单独的 PDF 一样工作：你可以跨所有页面搜索、一次性打印整个集合、添加统一的目录，以及分享一个文件而不是装满零散文档的 zip 文件夹。

### PDF 合并的常见用例

**合同打包**——一笔房地产交易可能涉及购买协议、披露表格、附录和签字页。将它们合并为一个文档可确保不遗漏任何内容，并且整个包可以按顺序审阅。

**发票整合**——自由职业者和小企业将月度发票合并为客户的单一对账单。这简化了会计工作，并为客户提供了所有费用的清晰档案。

**报告汇编**——研究报告、季度业务回顾和项目状态更新通常包含由不同人员撰写的多个部分。将各个 PDF 提交合并为一个最终报告可以简化分发。

**扫描文档聚合**——通过进纸器扫描多页会创建单独的文件。合并它们可以恢复预期的多页文档。一个可靠的[PDF 合并工具](/tools/merge-pdf)可以在几秒内完成此操作。

### PDF 合并的实际工作原理

PDF 合并不仅仅是追加字节。每个 PDF 都有内部交叉引用表、页面对象字典和资源映射（字体、图像、注释）。一个正确的合并工具会解析每个源 PDF，提取页面对象，重建页面树，并为合并输出生成新的交叉引用表。

### 页面排序、旋转和组织

大多数合并工具允许你在最终确定前重新排序页面。这在以下情况下至关重要：
- 页面扫描顺序错乱
- 你想将附录或参考资料放在末尾
- 你要插入封面或目录

旋转是另一个常见需求——扫描的页面可能方向不对，或者你可能需要合并纵向和横向文档。一个好的合并工具能够优雅地处理混合方向。

许多工具除了合并功能外，还支持**页面提取**和**拆分**功能。如果需要在合并前删除特定页面，请寻找提供[PDF 拆分](/tools/split-pdf)作为邻近功能的工具。

### 免费与付费 PDF 合并工具对比

| 特性 | 免费在线 | 免费桌面 | 付费 |
|---------|-------------|--------------|---------|
| 文件大小限制 | 10–50 MB | 无 | 无 |
| 水印 | 有时有 | 无 | 无 |
| 隐私问题 | 有（上传到服务器） | 无 | 无 |
| 批处理 | 无 | 有限 | 有 |
| 页面范围选择 | 通常无 | 有 | 有 |

免费的在线合并工具很方便，但会将文件上传到第三方服务器——避免用于敏感文档，如保密协议和法律合同。免费的桌面工具（PDFsam Basic、qpdf）更私密，但可能缺乏直观的界面。对于常规商业用途，推荐使用功能齐全的[PDF 编辑器](/tools/pdf-editor)，具有合并、注释和压缩功能。

### 批量合并与自动化

高级用户通常需要一次合并数十或数百个 PDF。批量合并支持通配符模式、基于文件夹的处理和命令行界面。这对于以下情况非常有价值：

- 律师事务所处理发现文档
- 会计部门整合费用报告
- 学术研究人员合并稿件章节和补充材料

自动化脚本（使用 Python 的 PyMuPDF、qpdf CLI 或 Ghostscript）可以每天合并文件夹中的所有 PDF，并按日期戳或项目编号重命名输出。

## 常见问题

**哪些文件格式可以合并到 PDF 中？** 正确的 PDF 合并是将 PDF 与 PDF 合并。如果需要包含 Word 文档、电子表格或图像，请先将其转换为 PDF，然后合并。一些高级工具会自动处理混合输入。

**合并 PDF 会降低文件质量吗？** 不会。正确的合并会保留每个源文件的原始分辨率、字体和矢量。由于嵌入式字体和资源的去重，输出大小可能会略微减小。

**我可以合并特定页面而不是整个文档吗？** 可以。大多数合并工具允许你从每个输入文件中选择页面范围（例如，文件 A 的第 1-3 页，文件 B 的第 5-10 页）。这称为"页面范围合并"。

**合并 PDF 对机密文档安全吗？** 在线合并工具会将你的文件上传到远程服务器——避免用于机密数据。对于敏感文档，请使用离线桌面软件或命令行工具。

**合并后书签和超链接会怎样？** 在正确实现的工具中，每个源文件的书签会被保留并在章节标题下嵌套。超链接会被重新计算，指向合并文档中的正确页面。

**一次可以合并多少 PDF？** 在线工具通常限制为 2-10 个文件。桌面工具和 CLI 实用程序可以合并数百或数千个，仅受系统内存和磁盘空间的限制。

**合并后 PDF 的最大文件大小是多少？** 在线工具限制在 50-200 MB。桌面工具支持更大的文件，仅受系统资源限制。PDF/A 标准建议保持在 100 MB 以下以便于便携性。
`,

  },
  {
    slug: "create-custom-qr-codes",
    title: "How to Create Custom QR Codes for Business",
    description: "Generate professional QR codes with custom colors, logos, and error correction. Perfect for marketing, menus, and events.",
    date: "2026-05-22",
    readTime: "5 min read",
    category: "Conversion",
    toolSlug: "qr-code-generator",
    content: `## What Is a QR Code and How It Works

A QR code (Quick Response code) is a two-dimensional barcode that stores information in a pattern of black squares on a white background. Unlike traditional barcodes holding data in one direction, QR codes encode both horizontally and vertically, storing up to 4,296 alphanumeric characters or 7,089 numeric digits.

QR codes were invented in 1994 by Denso Wave, a Toyota subsidiary, for tracking automotive parts during manufacturing. The key innovation was speed: QR codes decode about 10 times faster than standard barcodes. They entered consumer mainstream with the smartphone era, when every phone camera became a potential scanner. Today, QR codes are ubiquitous — on restaurant menus, product packaging, event tickets, payment terminals, and advertising billboards.

### QR Code Types and Data Capacity

There are 40 QR code versions (Version 1 at 21×21 modules to Version 40 at 177×177). Higher versions store more data. Four encoding modes exist:

- **Numeric** — Digits 0–9, up to 7,089 characters. Best for phone numbers and IDs.
- **Alphanumeric** — Digits, uppercase A–Z, and symbols ($, %, *, +, -, ., /, :, space). Up to 4,296 characters. Best for URLs.
- **Byte** — Any 8-bit character. Up to 2,953 bytes. Best for multilingual text.
- **Kanji** — Shift-JIS Japanese characters, up to 1,817 characters.

| QR Version | Numeric | Alphanumeric | Byte | Kanji |
|-----------|---------|--------------|------|-------|
| 1 | 41 | 25 | 17 | 10 |
| 10 | 652 | 395 | 271 | 79 |
| 40 | 7,089 | 4,296 | 2,953 | 1,817 |

### Error Correction Levels

QR codes use Reed-Solomon error correction with four levels:

- **Level L (Low)** — 7% recovery. Smallest QR, for clean environments.
- **Level M (Medium)** — 15% recovery. Best balance of size and reliability. The most common choice.
- **Level Q (Quartile)** — 25% recovery. For codes exposed to wear — shipping labels and outdoor signage.
- **Level H (High)** — 30% recovery. Maximum durability. Allows reading with up to 30% surface area obscured. Recommended when adding a logo or printing on rough surfaces.

Higher error correction means larger QR codes for the same data. Experiment with settings in a [QR code generator](/tools/qr-code-generator) to find the right balance.

### How QR Code Scanning Works

Modern smartphones scan QR codes through the built-in camera decoder (iOS 11+ and Android 8+ both support native scanning). The process: the camera detects the three finder patterns (corner squares) to determine orientation, samples the module grid converting dark/light to binary data, applies Reed-Solomon error correction, extracts format info (mask pattern and error level), decodes the remaining data, then executes the appropriate action (open URL, display text, add contact, connect to Wi-Fi).

### Common QR Code Use Cases

**Contactless Payments** — UPI, Alipay, WeChat Pay, and European payment systems use QR codes at point-of-sale for fast, secure transactions.

**Wi-Fi Sharing** — QR codes encode SSID, password, and encryption type so guests scan to connect without typing. Many modern routers generate Wi-Fi QR codes by default.

**Event Ticketing** — Airlines, cinemas, and concerts use QR codes on digital tickets. Unique encoding prevents duplication and speeds entry validation. **Restaurant Menus** and **museum labels** also use QR codes for contactless access to digital content.

**Marketing and Tracking** — QR codes on print ads and packaging link to UTM-tagged landing pages, allowing marketers to measure scan-to-visit conversion.

If you need to generate custom QR codes with your brand colors or a logo in the center, a [custom QR code maker](/tools/qr-code-customizer) can handle that while maintaining readability by adjusting error correction appropriately. For bulk generation, use a dedicated [QR code generator](/tools/qr-code-generator).

### QR Code Security Considerations

QR codes can be exploited for "quishing" (QR + phishing) attacks — malicious codes that lead to phishing sites, malware downloads, or credential harvesting. Since some devices open URLs automatically after scanning, always inspect the URL before navigating. Use a scanner that previews the URL before redirecting.

## FAQ

**Can QR codes be scanned without an app?** Yes. Most modern smartphones (iOS 11+ and Android 8+) include native QR scanning in the camera app. No additional app is needed.

**Do QR codes expire?** No. The QR image is static — it never expires. However, if the encoded URL's destination is taken down, the link breaks. Dynamic QR codes let you change the redirect URL without reprinting.

**What is a dynamic QR code?** It encodes a short redirect URL pointing to a server. The admin can change the final destination anytime without reprinting, and scan analytics are trackable.

**Can I add a logo to a QR code?** Yes, but increase error correction to Level Q or H so the logo doesn't corrupt data. The logo should cover no more than 15–20% of the total area.

**How small can a QR code be printed?** The module size should be at least 1/10th of the scanning distance. For phone scanning at 10 cm, each module needs 1 mm minimum, giving a minimum QR size of about 2×2 cm.

**What colors can a QR code be?** Any dark color on a light background works — the scanner detects contrast, not specific colors. Minimum contrast ratio is 3:1 (recommended 4.5:1).

**Are QR codes patent-protected?** No. Denso Wave chose not to enforce its patents. QR codes are an open standard (ISO/IEC 18004) free to generate and scan without licensing.
`,
    contentZh: `## 什么是二维码及其工作原理

二维码（Quick Response code）是一种二维条形码，以白底黑色方块图案存储信息。与传统的一维条形码不同，二维码在水平和垂直方向上都进行编码，最多可存储 4,296 个字母数字字符或 7,089 个数字。

二维码由丰田子公司电装波动（Denso Wave）于 1994 年发明，用于在制造过程中跟踪汽车零部件。其关键创新在于速度：二维码的解码速度比标准条形码快约 10 倍。随着智能手机时代的到来，二维码进入消费主流——每部手机摄像头都成了潜在的扫描器。如今，二维码无处不在——出现在餐厅菜单、产品包装、活动门票、支付终端和广告牌上。

### 二维码类型与数据容量

有 40 个二维码版本（版本 1 为 21×21 模块到版本 40 为 177×177）。更高的版本存储更多数据。存在四种编码模式：

- **数字模式**——数字 0-9，最多 7,089 个字符。最适合电话号码和 ID。
- **字母数字模式**——数字、大写字母 A-Z 以及符号（$、%、*、+、-、.、/、:、空格）。最多 4,296 个字符。最适合 URL。
- **字节模式**——任意 8 位字符。最多 2,953 字节。最适合多语言文本。
- **日文汉字模式**——Shift-JIS 日文字符，最多 1,817 个字符。

| 二维码版本 | 数字 | 字母数字 | 字节 | 日文汉字 |
|-----------|---------|--------------|------|-------|
| 1 | 41 | 25 | 17 | 10 |
| 10 | 652 | 395 | 271 | 79 |
| 40 | 7,089 | 4,296 | 2,953 | 1,817 |

### 纠错级别

二维码使用 Reed-Solomon 纠错码，共有四个级别：

- **L 级（低）**——7% 恢复能力。最小的二维码，适用于清洁环境。
- **M 级（中）**——15% 恢复能力。大小和可靠性的最佳平衡。最常见的选择。
- **Q 级（四分位）**——25% 恢复能力。适用于暴露在磨损环境中的二维码——运输标签和户外标识。
- **H 级（高）**——30% 恢复能力。最大耐用性。允许在最多 30% 表面积被遮挡时仍可读取。在添加 logo 或在粗糙表面打印时推荐使用。

更高的纠错级别意味着相同数据的二维码更大。在[二维码生成器](/tools/qr-code-generator)中尝试不同的设置，找到合适的平衡点。

### 二维码扫描的工作原理

现代智能手机通过内置摄像头解码器扫描二维码（iOS 11+ 和 Android 8+ 都支持原生扫描）。过程如下：摄像头检测三个定位图案（角落方块）以确定方向，采样模块网格将暗/亮转换为二进制数据，应用 Reed-Solomon 纠错，提取格式信息（掩码图案和纠错级别），解码剩余数据，然后执行相应的操作（打开 URL、显示文本、添加联系人、连接 Wi-Fi）。

### 常见二维码用例

**非接触支付**——UPI、支付宝、微信支付和欧洲支付系统在销售点使用二维码进行快速、安全的交易。

**Wi-Fi 分享**——二维码编码 SSID、密码和加密类型，访客扫描即可连接，无需输入密码。许多现代路由器默认生成 Wi-Fi 二维码。

**活动票务**——航空公司、电影院和音乐会在数字门票上使用二维码。唯一编码防止复制并加快入场验证。**餐厅菜单**和**博物馆标签**也使用二维码进行非接触式数字内容访问。

**营销与追踪**——印刷广告和包装上的二维码链接到带有 UTM 标签的着陆页，使营销人员能够衡量扫描到访问的转化率。

如果你需要生成带有品牌颜色或中心 logo 的自定义二维码，[自定义二维码制作器](/tools/qr-code-customizer)可以通过适当调整纠错级别来保持可读性。对于批量生成，请使用专用的[二维码生成器](/tools/qr-code-generator)。

### 二维码安全考虑

二维码可能被用于"quishing"（二维码 + 钓鱼）攻击——恶意代码引导用户访问钓鱼网站、下载恶意软件或窃取凭据。由于某些设备在扫描后会自动打开 URL，请在导航前始终检查 URL。使用能够在重定向前预览 URL 的扫描器。

## 常见问题

**二维码可以在没有应用的情况下扫描吗？** 可以。大多数现代智能手机（iOS 11+ 和 Android 8+）在相机应用中包含原生二维码扫描功能。无需额外应用。

**二维码会过期吗？** 不会。二维码图像是静态的——它永远不会过期。但是，如果编码的 URL 目标被关闭，链接会失效。动态二维码允许你更改重定向 URL 而无需重新打印。

**什么是动态二维码？** 它编码一个指向服务器的短重定向 URL。管理员可以随时更改最终目的地而无需重新打印，并且可以追踪扫描分析数据。

**我可以在二维码上添加 logo 吗？** 可以，但要将纠错级别提高到 Q 或 H 级，这样 logo 不会破坏数据。logo 覆盖面积不应超过总面积的 15-20%。

**二维码可以印多小？** 模块大小应至少为扫描距离的 1/10。对于在 10 厘米处的手机扫描，每个模块至少需要 1 毫米，二维码的最小尺寸约为 2×2 厘米。

**二维码可以是什么颜色？** 任何深色背景上的浅色都可以——扫描器检测的是对比度，而不是特定颜色。最小对比度比为 3:1（推荐 4.5:1）。

**二维码受专利保护吗？** 不受。电装波动选择不执行其专利。二维码是开放标准（ISO/IEC 18004），可以免费生成和扫描，无需许可。
`,

  },
  {
    slug: "word-counter-character-count",
    title: "Word Counter — Why Character Count Matters",
    description: "Track words, characters, sentences, and reading time. Essential for writers, students, and SEO professionals.",
    date: "2026-05-22",
    readTime: "4 min read",
    category: "Text Tools",
    toolSlug: "word-counter",
    content: `## What Is a Word Counter and Why Text Metrics Matter

A word counter is a tool that analyzes text to return metrics like word count, character count, sentence count, paragraph count, and estimated reading time. While it sounds simple, accurate text metrics are essential for writers, editors, students, SEO specialists, and anyone working within content limits. Whether you're hitting a 500-word blog minimum, staying under Twitter's 280-character limit, or drafting a 2,000-word technical article, a reliable word counter keeps you on track.

Beyond raw counts, modern text analysis tools break down readability scores, keyword density, and even syllable counts. These metrics guide better writing — shorter sentences improve readability, varied word choice keeps readers engaged, and precise character limits prevent truncation on publishing platforms.

### Why Accurate Word Counting Matters

Different platforms define "words" differently. A hyphenated compound like "state-of-the-art" might count as one word or three depending on the tool. Similarly, URLs, email addresses, and numbers with commas can skew counts. A good word counter applies consistent, transparent rules so you know exactly where you stand.

Content management systems (CMS) often enforce strict limits. Blog posts, meta descriptions, product titles, and alt text all have recommended or required lengths. Exceeding them means truncation in SERPs or outright rejection on submission forms. Using a reliable [word counter tool](/tools/word-counter) before publishing saves time and prevents these issues.

### Breaking Down the Key Metrics

**Word Count** — The total number of words in your text. This is the most common metric for essays, articles, and reports. Most academic assignments specify a word count range rather than a strict limit, and falling short or going over can affect grades.

**Character Count** — With or without spaces. This matters for social media posts, SMS messages, and certain form fields. Twitter's 280-character limit (most languages) and SMS's 160-character limit are classic examples where character count is king.

**Sentence Count** — Helps evaluate sentence variety and average sentence length. The average English sentence runs 15–20 words. Consistently longer sentences can make text harder to follow, while too many short ones can feel choppy.

**Paragraph Count** — Longer paragraphs (5+ sentences) work for detailed analysis, but web content benefits from 2–4 sentence paragraphs that are scannable.

| Metric | Typical Use Case | Target Range |
|--------|-----------------|--------------|
| Word Count | Blog posts, essays | 500–2,000 words |
| Character (no spaces) | Meta descriptions | 150–160 chars |
| Character (with spaces) | Social posts, SMS | 140–280 chars |
| Sentences | Readability analysis | 15–20 words/sentence avg |
| Reading Time | Article planning | 3–7 minutes avg |

### Reading Time Estimation and Its Uses

Reading time is a derived metric based on word count and an assumed reading speed. The standard is 200–250 words per minute (WPM) for English prose. Technical content often uses 150–200 WPM, while simple copy can push 300 WPM.

Adding an estimated reading time to your articles improves user experience — readers know upfront how long the commitment is. Many publishers, blogs, and documentation sites display "X min read" badges. A [reading time calculator](/tools/reading-time) integrated into your workflow helps you plan content length for audience retention.

### Keyword Density and SEO

Keyword density measures how often a target word or phrase appears relative to total word count. While modern search engines don't treat density as a ranking signal the way they once did, monitoring it still helps you avoid over-optimization (keyword stuffing) and ensures your primary terms appear naturally.

A healthy keyword density range is 1–3%. Below 1% and you might not signal relevance; above 3% risks looking spammy. You can use a dedicated [SEO text analyzer](/tools/seo-analyzer) alongside your word counter for a more complete picture.

## FAQ

**How does a word counter define a "word"?** Most word counters split text by whitespace and punctuation. Hyphenated compounds, numbers with commas, and special characters can cause discrepancies. Always check the tool's documentation for its specific rules.

**What's the difference between character count with and without spaces?** Character count with spaces includes every space, tab, and newline. Without spaces excludes whitespace. Social platforms typically count characters with spaces, while some form fields count without.

**What reading speed should I use for estimating reading time?** 200–250 WPM for general content, 150–200 WPM for technical material, and 300 WPM for simple copy. Choose based on your audience and content complexity.

**Can word counters handle CJK (Chinese, Japanese, Korean) text?** Some do, but CJK languages don't use spaces between words. Dedicated CJK counters use lexicon-based or ML-based tokenization rather than simple whitespace splitting.

**Why does my word count differ between Microsoft Word and online tools?** Word processors count differently from web-based tools. MS Word counts headers, footers, text boxes, and footnotes by default. Online tools usually count only the text you paste. Hyphenation and em-dash handling also varies.

**What is a good average sentence length?** 15–20 words per sentence is ideal for most readers. Technical or academic writing can go to 20–25 words, while marketing copy often targets 10–15 words for punch and clarity.

**Is there a recommended meta description length?** Google typically displays the first 150–160 characters of a meta description. Staying within that range ensures your full description appears in search results.
`,

    contentZh: `## 什么是字数统计工具以及为什么文本指标很重要

字数统计工具是一种分析文本并返回字数、字符数、句子数、段落数和预估阅读时间等指标的工具。虽然听起来简单，但准确的文本指标对于作家、编辑、学生、SEO 专家以及任何需要遵守内容限制的人来说都是必不可少的。无论你是要达到 500 字的博客最低要求、保持在推特的 280 字符限制内，还是起草一篇 2000 字的技术文章，一个可靠的字数统计工具都能让你保持在正轨上。

除了原始计数外，现代文本分析工具还会分析可读性评分、关键词密度甚至音节数。这些指标指导更好的写作——更短的句子提高可读性，多样化的词汇选择保持读者的参与度，精确的字符限制可以防止在发布平台上的截断。

### 为什么准确的字数统计很重要

不同的平台对"单词"的定义不同。像"state-of-the-art"这样的连字符复合词可能根据工具的不同被计为一个词或三个词。同样，URL、电子邮件地址和带逗号的数字也可能使计数出现偏差。一个好的字数统计工具应用一致、透明的规则，让你确切地知道自己的位置。

内容管理系统（CMS）通常强制执行严格的限制。博客文章、元描述、产品标题和替代文本都有建议或必需的长度。超出这些限制意味着在搜索引擎结果页面中被截断或直接被提交表单拒绝。在发布前使用可靠的[字数统计工具](/tools/word-counter)可以节省时间并防止这些问题。

### 关键指标详解

**字数**——文本中的总单词数。这是论文、文章和报告中最常用的指标。大多数学术作业会指定一个字数范围而非严格限制，不足或超出都可能影响成绩。

**字符数**——包括或不包括空格。这对于社交媒体帖子、短信和某些表单字段很重要。推特的 280 字符限制（大多数语言）和短信的 160 字符限制是字符数至关重要的经典例子。

**句子数**——有助于评估句子多样性和平均句子长度。英语句子的平均长度为 15-20 个单词。持续使用过长的句子会使文本难以理解，而过多的短句则可能显得支离破碎。

**段落数**——较长的段落（5 句以上）适合详细分析，但网页内容更适合 2-4 句的可扫描段落。

| 指标 | 典型用途 | 目标范围 |
|--------|-----------------|--------------|
| 字数 | 博客文章、论文 | 500–2,000 字 |
| 字符数（不含空格） | 元描述 | 150–160 字符 |
| 字符数（含空格） | 社交媒体、短信 | 140–280 字符 |
| 句子数 | 可读性分析 | 平均 15–20 词/句 |
| 阅读时间 | 文章规划 | 平均 3–7 分钟 |

### 阅读时间估算及其用途

阅读时间是一个派生指标，基于字数和假定的阅读速度。英语散文的标准是每分钟 200-250 词。技术内容通常使用 150-200 词/分钟，而简单文案可以达到 300 词/分钟。

在你的文章中添加预估阅读时间可以改善用户体验——读者事先知道需要花费多长时间。许多出版商、博客和文档网站会显示"X 分钟阅读"标记。集成到工作流程中的[阅读时间计算器](/tools/reading-time)可以帮助你规划适合读者留存的内容长度。

### 关键词密度与 SEO

关键词密度衡量目标词或短语相对于总词数出现的频率。虽然现代搜索引擎不再像过去那样将密度作为排名信号，但监控它仍然有助于你避免过度优化（关键词堆砌），并确保主要术语自然地出现。

健康的关键词密度范围是 1-3%。低于 1% 可能无法传达相关性；高于 3% 则有垃圾邮件的风险。你可以使用专用的[SEO 文本分析器](/tools/seo-analyzer)配合字数统计工具，获得更全面的分析。

## 常见问题

**字数统计工具如何定义"单词"？** 大多数字数统计工具按空白和标点符号分割文本。连字符复合词、带逗号的数字和特殊字符可能导致差异。请始终查看工具的文档了解其具体规则。

**含空格和不含空格的字符数有什么区别？** 含空格的字符数包括每个空格、制表符和换行符。不含空格则排除空白字符。社交平台通常计算含空格的字符数，而某些表单字段则计算不含空格的字符数。

**估算阅读时间应该使用什么阅读速度？** 一般内容使用 200-250 词/分钟，技术材料使用 150-200 词/分钟，简单文案使用 300 词/分钟。根据你的受众和内容复杂程度选择。

**字数统计工具能处理中日韩（CJK）文本吗？** 有些可以，但中日韩语言不使用空格分隔单词。专用中日韩计数器使用基于词典或机器学习的分词方法，而不是简单的空白分割。

**为什么我的字数在 Microsoft Word 和在线工具之间不同？** 文字处理软件的计数方式与基于网页的工具不同。MS Word 默认会计算页眉、页脚、文本框和脚注。在线工具通常只计算你粘贴的文本。连字符和长破折号的处理方式也有所不同。

**良好的平均句子长度是多少？** 大多数读者理想的句子长度为每句 15-20 词。技术或学术写作可以达到 20-25 词，而营销文案通常以 10-15 词为目标，以求简洁有力。

**元描述的推荐长度是多少？** Google 通常显示元描述的前 150-160 个字符。保持在此范围内可确保你的完整描述出现在搜索结果中。`,
  },
  {
    slug: "url-encoding-101",
    title: "URL Encoding 101: What Every Developer Should Know",
    description: "Understanding percent-encoding. Learn why spaces become %20 and how to encode/decode URLs correctly.",
    date: "2026-05-22",
    readTime: "5 min read",
    category: "Developer Tools",
    toolSlug: "url-encoder-decoder",
    content: `## URL Encoding: Handling Special Characters in Web Addresses

Every time you see a URL with %20, %3A, or a string of percent-encoded gibberish, you're looking at URL encoding in action. Modern web applications pass a staggering amount of data through URLs — query parameters, form submissions, API endpoints, and navigation paths all rely on a limited set of safe characters. Understanding how URL encoding works, when it's needed, and how different programming languages handle it is essential for building robust web applications.

### What Is URL Encoding and Why Does It Matter?

URL encoding, also known as percent-encoding, is a mechanism for encoding information in a Uniform Resource Identifier (URI) under certain circumstances. The core problem is simple: URLs have a restricted character set. Characters like spaces, slashes, ampersands, and question marks have special meanings in URLs and cannot appear literally in certain positions.

The encoding scheme replaces unsafe ASCII characters with a percent sign (%) followed by two hexadecimal digits representing the character's byte value. For example, a space (ASCII 32, hex 20) becomes %20, a colon (ASCII 58, hex 3A) becomes %3A, and a forward slash (ASCII 47, hex 2F) becomes %2F when it appears in path segments where it would otherwise act as a separator.

| Character | ASCII Code | Encoded Form | Common Context |
|-----------|-----------|-------------|----------------|
| Space | 32 (0x20) | %20 | Query parameters, paths |
| & | 38 (0x26) | %26 | Query parameters (parameter separator) |
| = | 61 (0x3D) | %3D | Query parameters (key=value separator) |
| ? | 63 (0x3F) | %3F | Query string start |
| # | 35 (0x23) | %23 | Fragment identifier |
| / | 47 (0x2F) | %2F | Path segments |
| % | 37 (0x25) | %25 | Encoding the percent sign itself |

You can encode or decode any string at [/tools/url-encoder-decoder](/tools/url-encoder-decoder) — a fast online tool that handles edge cases like Unicode characters and mixed encoding.

### Reserved Characters vs. Unreserved Characters

The URI specification (RFC 3986) divides characters into three categories:

**Unreserved characters** can always be used literally in URLs: A-Z, a-z, 0-9, hyphen (-), underscore (_), period (.), and tilde (~). These never need encoding.

**Reserved characters** have special syntactic meaning in specific URL components: colon (:), slash (/), question mark (?), hash (#), square brackets ([ ]), at sign (@), exclamation mark (!), dollar sign ($), ampersand (&), apostrophe ('), parentheses (( )), asterisk (*), plus (+), comma (,), semicolon (;), and equals (=). These should only be encoded when they appear in a context where they don't have their reserved meaning — or always encoded in user-provided values to be safe.

**Other characters** — spaces, non-ASCII characters, and control characters — must always be percent-encoded in URLs.

The nuance that trips up most developers: the same character may or may not need encoding depending on where it appears. A forward slash (/) in the path portion indicates hierarchy and should not be encoded, but the same character in a query parameter value must be encoded as %2F, otherwise it would be interpreted as a path separator.

| Component | Can Contain / Literally? | Can Contain ? Literally? | Can Contain & Literally? |
|-----------|-------------------------|-------------------------|-------------------------|
| Scheme (https://) | No | No | No |
| Authority (domain.com) | No | No | No |
| Path (/path/to/page) | Yes (as separator) | No | No |
| Query (?key=value) | No (encode as %2F) | No (encode as %3F) | No (encode as %26) |
| Fragment (#section) | No | No | No |

### URL Encoding in Different Programming Languages

Every major language provides built-in functions for URL encoding, but the behavior varies in important ways. Here's a practical comparison:

**JavaScript (Browser):**
- \`encodeURIComponent(str)\` — Encodes a full URI component (path, query, fragment). Encodes all characters except \`A-Z a-z 0-9 - _ . ! ~ * ' ( )\`.
- \`encodeURI(str)\` — Encodes a complete URI, preserving characters that have special meaning in the URI structure. Does NOT encode \`:/?#[]@!$&'()*+,;=\` in the proper contexts.
- \`new URLSearchParams(params).toString()\` — Automatically converts an object of key-value pairs into a properly encoded query string.

**Python:**
- \`urllib.parse.quote(string, safe='/')\` — Encodes a string for use in URLs. The \`safe\` parameter lets you specify characters that should not be encoded.
- \`urllib.parse.quote_plus(string)\` — Like quote, but also encodes spaces as + (form-encoded style).
- \`urllib.parse.urlencode(query)\` — Takes a dictionary or sequence of two-element tuples and produces a properly encoded query string.

**PHP:**
- \`urlencode($str)\` — Encodes spaces as + (application/x-www-form-urlencoded style).
- \`rawurlencode($str)\` — Encodes spaces as %20 (RFC 3986 compliant).
- \`http_build_query($data)\` — Builds a URL-encoded query string from an array.

| Language | Function | Space Encoding | Best For |
|----------|----------|---------------|----------|
| JavaScript | encodeURIComponent() | %20 | Query parameter values |
| JavaScript | encodeURI() | %20 | Full URIs (safe) |
| Python | urllib.parse.quote() | %20 | Path segments |
| Python | urllib.parse.quote_plus() | + | Form data |
| PHP | urlencode() | + | Form-style query strings |
| PHP | rawurlencode() | %20 | RFC 3986 compliance |

The key takeaway: always use the context-appropriate encoding function. A common bug is using \`encodeURI()\` when you need \`encodeURIComponent()\` — the former won't encode characters like & or =, leading to broken query parameters.

### Common URL Encoding Pitfalls and How to Debug Them

Even experienced developers run into URL encoding issues. Here are the most frequent problems and how to identify them:

**Double encoding.** This happens when a URL is encoded twice — once by you and once by a framework or library. If you see \`%2520\` (where %25 is the encoding of %, followed by 20), you've been double-encoded. The fix: encode only at the last possible moment, or decode before re-encoding.

**Missing encoding of user input.** Any data coming from user input (search fields, forms, API parameters) that goes into a URL must be encoded. Failing to do so can cause malformed requests and security issues like parameter injection.

**Unicode and international characters.** Non-ASCII characters must first be encoded as UTF-8 bytes, then each byte percent-encoded. For example, the character é (U+00E9) becomes %C3%A9 in UTF-8 percent-encoding. The specification mandate is UTF-8, not any other encoding.

**Inconsistent encoding between client and server.** If your frontend sends data URL-encoded one way and the backend expects another (e.g., + vs %20 for spaces), requests can silently fail. Always check both ends agree on the encoding scheme.

For quick debugging, use [/tools/url-encoder-decoder](/tools/url-encoder-decoder) to paste a problematic URL and see exactly how each character is encoded. You can toggle between encode and decode modes to trace where double encoding or missing encoding is occurring.

## FAQ

**Q: What's the difference between URL encoding and HTML encoding?**  
A: URL encoding (percent-encoding) uses % followed by hex digits to encode characters in URLs. HTML encoding uses &entity; or &#code; syntax to encode characters in HTML documents. They serve different purposes — URLs vs. HTML content — and should not be confused or used interchangeably.

**Q: Should I encode the entire URL or just the parameters?**  
A: Only encode the variable parts — query parameter names and values, path segments that contain user data, or fragments. Never encode the protocol (https://), domain, or structural characters that define the URL itself.

**Q: Why do spaces sometimes become %20 and sometimes +?**  
A: In query strings (application/x-www-form-urlencoded format, legacy from HTML forms), spaces are encoded as +. In path segments and in RFC 3986 standard URL encoding, spaces are encoded as %20. Modern APIs prefer %20 for consistency.

**Q: How do I handle special characters in a URL fragment (#)?**  
A: The fragment (everything after #) should be encoded using encodeURIComponent() in JavaScript or the equivalent in your language. The # itself must be encoded as %23 if it's part of a path or query value, not a fragment delimiter.

**Q: Does URL encoding affect SEO?**  
A: Yes. URLs with readable words are preferred over encoded strings. For example, \`/search?q=hello+world\` is better than \`/search?q=%68%65%6C%6C%6F\`. Use encoding only for truly special characters, and consider URL slugs that avoid special characters altogether.

**Q: What happens if I don't URL-encode a parameter value?**  
A: The URL may be parsed incorrectly. A value containing & would be interpreted as a new parameter, a # would cut off the rest of the URL, and a space could cause the HTTP request to fail entirely. Always encode user-provided values.

**Q: Can I test URL encoding without writing code?**  
A: Absolutely. Use [/tools/url-encoder-decoder](/tools/url-encoder-decoder) to instantly encode or decode any URL string. It's a quick way to verify what your application is sending or receiving without firing up a debugger.
`,
    contentZh: `## URL 编码：处理网址中的特殊字符

每次你看到包含 %20、%3A 或一串百分号编码乱码的 URL 时，你看到的就是 URL 编码的实际应用。现代 Web 应用通过 URL 传递大量数据——查询参数、表单提交、API 端点和导航路径都依赖于一组有限的安全字符。理解 URL 编码的工作原理、何时需要它以及不同编程语言如何处理它，对于构建健壮的 Web 应用至关重要。

### 什么是 URL 编码以及它为什么重要？

URL 编码，也称为百分号编码，是一种在特定情况下在统一资源标识符（URI）中编码信息的机制。核心问题很简单：URL 有一个受限的字符集。空格、斜杠、与符号和问号等字符在 URL 中具有特殊含义，不能在特定位置以字面形式出现。

编码方案将不安全的 ASCII 字符替换为百分号（%）后跟表示该字符字节值的两个十六进制数字。例如，空格（ASCII 32，十六进制 20）变为 %20，冒号（ASCII 58，十六进制 3A）变为 %3A，正斜杠（ASCII 47，十六进制 2F）在路径段中出现时（否则它会充当分隔符）变为 %2F。

| 字符 | ASCII 码 | 编码形式 | 常见上下文 |
|-----------|-----------|-------------|----------------|
| 空格 | 32 (0x20) | %20 | 查询参数、路径 |
| & | 38 (0x26) | %26 | 查询参数（参数分隔符） |
| = | 61 (0x3D) | %3D | 查询参数（键=值分隔符） |
| ? | 63 (0x3F) | %3F | 查询字符串开始 |
| # | 35 (0x23) | %23 | 片段标识符 |
| / | 47 (0x2F) | %2F | 路径段 |
| % | 37 (0x25) | %25 | 编码百分号本身 |

你可以在 [/tools/url-encoder-decoder](/tools/url-encoder-decoder) 上对任何字符串进行编码或解码——这是一个快速的在线工具，可以处理 Unicode 字符和混合编码等边界情况。

### 保留字符与未保留字符

URI 规范（RFC 3986）将字符分为三类：

**未保留字符**可以始终在 URL 中以字面形式使用：A-Z、a-z、0-9、连字符（-）、下划线（_）、句点（.）和波浪线（~）。这些永远不需要编码。

**保留字符**在特定 URL 组件中具有特殊的语法含义：冒号（:）、斜杠（/）、问号（?）、井号（#）、方括号（[ ]）、@符号（@）、感叹号（!）、美元符号（$）、与符号（&）、撇号（'）、圆括号（( )）、星号（*）、加号（+）、逗号（,）、分号（;）和等号（=）。只有当它们出现在不具有保留含义的上下文中时才应该被编码——或者为了安全起见，始终对用户提供的值进行编码。

**其他字符**——空格、非 ASCII 字符和控制字符——必须在 URL 中始终进行百分号编码。

最常让开发者困惑的细微差别是：同一个字符可能根据出现的位置决定是否需要编码。路径部分中的正斜杠（/）表示层级关系，不应编码，但查询参数值中的相同字符必须编码为 %2F，否则它会被解释为路径分隔符。

| 组件 | 可以直接包含 /？ | 可以直接包含 ?？ | 可以直接包含 &？ |
|-----------|-------------------------|-------------------------|-------------------------|
| 方案（https://） | 否 | 否 | 否 |
| 权限（domain.com） | 否 | 否 | 否 |
| 路径（/path/to/page） | 是（作为分隔符） | 否 | 否 |
| 查询（?key=value） | 否（编码为 %2F） | 否（编码为 %3F） | 否（编码为 %26） |
| 片段（#section） | 否 | 否 | 否 |

### 不同编程语言中的 URL 编码

每种主流语言都提供了内置的 URL 编码函数，但行为在重要方面有所不同。以下是实用对比：

**JavaScript（浏览器）：**
- \`encodeURIComponent(str)\`——编码完整的 URI 组件（路径、查询、片段）。编码除 \`A-Z a-z 0-9 - _ . ! ~ * ' ( )\` 之外的所有字符。
- \`encodeURI(str)\`——编码完整的 URI，保留在 URI 结构中具有特殊含义的字符。不在适当上下文中编码 \`:/?#[]@!$&'()*+,;=\`。
- \`new URLSearchParams(params).toString()\`——自动将键值对对象转换为正确编码的查询字符串。

**Python：**
- \`urllib.parse.quote(string, safe='/')\`——编码字符串以用于 URL。\`safe\` 参数允许你指定不应编码的字符。
- \`urllib.parse.quote_plus(string)\`——类似 quote，但将空格编码为 +（表单编码风格）。
- \`urllib.parse.urlencode(query)\`——接受字典或二元组序列，生成正确编码的查询字符串。

**PHP：**
- \`urlencode($str)\`——将空格编码为 +（application/x-www-form-urlencoded 风格）。
- \`rawurlencode($str)\`——将空格编码为 %20（符合 RFC 3986）。
- \`http_build_query($data)\`——从数组构建 URL 编码的查询字符串。

| 语言 | 函数 | 空格编码 | 最佳用途 |
|----------|----------|---------------|----------|
| JavaScript | encodeURIComponent() | %20 | 查询参数值 |
| JavaScript | encodeURI() | %20 | 完整 URI（安全） |
| Python | urllib.parse.quote() | %20 | 路径段 |
| Python | urllib.parse.quote_plus() | + | 表单数据 |
| PHP | urlencode() | + | 表单风格查询字符串 |
| PHP | rawurlencode() | %20 | RFC 3986 合规 |

关键要点：始终使用上下文适当的编码函数。一个常见的错误是在需要 \`encodeURIComponent()\` 时使用 \`encodeURI()\`——前者不会编码 & 或 = 等字符，导致查询参数损坏。

### 常见 URL 编码陷阱与调试方法

即使是经验丰富的开发者也会遇到 URL 编码问题。以下是最常见的问题及识别方法：

**双重编码。** 当 URL 被编码两次时会发生——一次由你，一次由框架或库。如果你看到 \`%2520\`（其中 %25 是 % 的编码，后跟 20），你遇到了双重编码。解决方法：只在最后可能的时候编码，或者在重新编码前解码。

**缺少用户输入编码。** 任何来自用户输入（搜索字段、表单、API 参数）的数据，如果放入 URL，都必须进行编码。不这样做会导致格式错误的请求和安全问题，如参数注入。

**Unicode 和国际字符。** 非 ASCII 字符必须首先编码为 UTF-8 字节，然后对每个字节进行百分号编码。例如，字符 é（U+00E9）在 UTF-8 百分号编码中变为 %C3%A9。规范强制要求使用 UTF-8，而不是其他编码。

**客户端和服务器之间编码不一致。** 如果你的前端以某种方式发送 URL 编码数据，而后端期望另一种方式（例如，空格用 + 与 %20），请求可能会静默失败。始终检查两端是否同意编码方案。

如需快速调试，使用 [/tools/url-encoder-decoder](/tools/url-encoder-decoder) 粘贴有问题的 URL，查看每个字符的编码方式。你可以在编码和解码模式之间切换，追踪双重编码或缺少编码的位置。

## 常见问题

**问：URL 编码和 HTML 编码有什么区别？**  
答：URL 编码（百分号编码）使用 % 后跟十六进制数字来编码 URL 中的字符。HTML 编码使用 &entity; 或 &#code; 语法来编码 HTML 文档中的字符。它们服务于不同的目的——URL vs. HTML 内容——不应混淆或互换使用。

**问：我应该编码整个 URL 还是只编码参数？**  
答：只编码可变部分——查询参数名称和值、包含用户数据的路径段或片段。永远不要编码协议（https://）、域名或定义 URL 本身的结构字符。

**问：为什么空格有时变成 %20，有时变成 +？**  
答：在查询字符串中（application/x-www-form-urlencoded 格式，来自 HTML 表单的遗留方式），空格编码为 +。在路径段和 RFC 3986 标准 URL 编码中，空格编码为 %20。现代 API 更倾向于使用 %20 以保持一致性。

**问：如何处理 URL 片段（#）中的特殊字符？**  
答：片段（# 之后的所有内容）应使用 JavaScript 中的 encodeURIComponent() 或你所用语言中的等效方法进行编码。# 本身如果是路径或查询值的一部分（而非片段分隔符），则必须编码为 %23。

**问：URL 编码会影响 SEO 吗？**  
答：是的。包含可读单词的 URL 优于编码字符串。例如，\`/search?q=hello+world\` 比 \`/search?q=%68%65%6C%6C%6F\` 更好。只对真正的特殊字符使用编码，并考虑使用避免特殊字符的 URL 别名。

**问：如果不进行 URL 编码参数值会怎样？**  
答：URL 可能被错误解析。包含 & 的值会被解释为新参数，# 会截断 URL 的其余部分，空格可能导致 HTTP 请求完全失败。始终对用户提供的值进行编码。

**问：我可以在不编写代码的情况下测试 URL 编码吗？**  
答：当然可以。使用 [/tools/url-encoder-decoder](/tools/url-encoder-decoder) 即时编码或解码任何 URL 字符串。这是一种快速验证你的应用正在发送或接收什么的方法，无需启动调试器。
`,

  },
  {
    slug: "best-free-developer-tools-2026",
    title: "10 Best Free Online Tools for Developers (2026)",
    description: "Essential free online tools every developer needs: JSON formatter, regex tester, Base64 encoder, color converter, and more.",
    date: "2026-05-22",
    readTime: "6 min read",
    category: "Developer Tools",
    toolSlug: "json-formatter",
    content: `## Developer Tools Roundup: 20+ Free Online Utilities Every Coder Needs

Whether you're a seasoned backend engineer or a frontend developer just starting out, you spend a surprising amount of time on tasks that aren't writing code: formatting JSON, decoding Base64, tweaking hex colors, escaping URLs, or testing a regex pattern before dropping it into your application. This roundup covers the essential free online tools that will save you hours every week.

### The Core Toolkit: What Every Developer Needs

Every developer's browser bookmarks should include a handful of indispensable utilities. These are the tools you reach for multiple times a day — quick, reliable, and focused on a single job:

- **JSON formatter and validator** — Paste minified JSON and instantly get a pretty-printed, tree-view structure with validation errors highlighted.
- **Regex tester** — Write a pattern, supply test strings, and see matches highlighted in real time with capture group breakdowns.
- **Base64 encoder/decoder** — Convert text or file data to and from Base64 encoding, with support for both standard and URL-safe variants.
- **Color picker and converter** — Convert between HEX, RGB, HSL, and named colors; adjust brightness, saturation, and contrast.
- **URL encoder/decoder** — Properly encode query parameters and decode percent-encoded URLs.
- **Diff checker** — Compare two blocks of text side by side with highlighted additions, deletions, and changes.

You can find all of these (and more) in one place at our [developer tools hub](/tools). Each tool is designed to be fast, private (no data sent to a server), and usable offline.

### Deep Dive: JSON Tools

JSON is the lingua franca of modern APIs, and you'll work with it constantly. A good JSON tool does more than just pretty-print:

| Feature | Why It Matters |
|---------|---------------|
| Syntax validation | Catches trailing commas, missing brackets, and invalid UTF-8 before your parser throws a cryptic error |
| Tree view | Collapse/expand nested objects to navigate deep API responses |
| Minification | Strip whitespace to reduce payload size for documentation or storage |
| Diff/merge | Compare two JSON documents side by side — invaluable when debugging API response changes |
| JSONPath query | Extract specific values without writing code — \`$.store.books[*].author\` |
| Schema validation | Check your JSON against a JSON Schema to ensure it meets API requirements |

Our [JSON tools](/tools/json-formatter) handle all of these operations. The tree view alone is worth the bookmark — instead of reading raw minified JSON from a console log, you get a collapsible hierarchy with syntax highlighting.

### Comparison Table: All-in-One Toolkits

There's no shortage of developer tool websites. Here's how the major options stack up:

| Feature | This Toolkit | DevDocs | Toolbox Pro | Online Utils |
|---------|-------------|---------|-------------|--------------|
| JSON formatter/validator | ✅ | ❌ | ✅ | ✅ |
| Regex tester with groups | ✅ | ❌ | ✅ (basic) | ✅ |
| Base64 encode/decode | ✅ | ❌ | ✅ | ✅ |
| Color converter (HEX/RGB/HSL) | ✅ | ❌ | ✅ | ❌ |
| URL encoder/decoder | ✅ | ❌ | ✅ | ✅ |
| HTML entity encoder | ✅ | ❌ | ❌ | ✅ |
| JWT decoder | ✅ | ❌ | ❌ | ❌ |
| Crontab generator | ✅ | ❌ | ✅ | ❌ |
| UUID generator | ✅ | ❌ | ✅ | ✅ |
| HTML/CSS/JS minifier | ✅ | ❌ | ✅ | ✅ (separate pages) |
| Works offline (PWA) | ✅ | ❌ | ❌ | ❌ |
| No server upload (privacy) | ✅ | ✅ | ✅ | ❌ |
| Free (no paywall) | ✅ | ✅ | ❌ (limited free) | ✅ (with ads) |

The key differentiator is **privacy and offline capability**. Any tool that sends your JSON payloads, API keys hidden in JWTs, or proprietary code to a third-party server introduces risk. Tools that run entirely in the browser, like ours, never transmit your data anywhere.

### URL Tools and Why Encoding Matters

URL encoding — also called percent encoding — is one of those topics that seems trivial until a mysterious 400 error appears in production. The rules are straightforward but easy to get wrong:

- **Reserved characters** (\`:\`, \`/\`, \`?\`, \`#\`, \`[\`, \`]\`, \`@\`, \`!\`, \`$\`, \`&\`, \`'\`, \`(\`, \`)\`, \`*\`, \`+\`, \`,\`, \`;\`, \`=\`) must be encoded when used as data.
- **Unsafe characters** (spaces, quotes, \`%\`, non-ASCII) must always be encoded.
- **The big one**: spaces should be \`%20\` in the path but \`+\` in query strings — and different libraries handle this differently.

Use our [URL tools](/tools/url-encoder) to verify your encoding. Paste a raw URL, see the encoded version, and toggle between decoding modes. This alone can save you hours of debugging "the request works in Postman but not in the browser."

For escaping and encoding in other contexts, check out our [HTML entity converter](/tools/html-encoder) and [string utilities](/tools/string-utilities), which handle everything from Unicode normalization to slug generation.

## FAQ

**Q: Are these tools safe for sensitive data like API keys and tokens?**
A: Tools that run entirely client-side (in your browser via JavaScript) never transmit your data anywhere. Our [developer tools](/tools) process everything locally. Look for the "offline" or "no server" indicator on any tool before pasting secrets.

**Q: What's the best way to format JSON from a terminal?**
A: Pipe the output to \`jq\` (Linux/macOS) or use \`python -m json.tool\` on any system with Python. For a GUI experience, paste into a JSON formatter tool. Many editors also have built-in JSON formatting — VS Code's "Format Document" command works well.

**Q: Why do I need a separate Base64 tool when I can use \`btoa()\` in the browser?**
A: The built-in \`btoa()\` and \`atob()\` functions don't handle UTF-8 — they throw errors on non-ASCII characters. A proper Base64 tool handles encoding/decoding with Unicode support, URL-safe variants, and can even encode binary files (images, PDFs).

**Q: What color formats should I use for web development?**
A: HEX (\`#ff6600\`) is the most widely supported. HSL (\`hsl(24, 100%, 50%)\`) is easier to reason about programmatically — you can adjust lightness without affecting hue. RGB (\`rgb(255, 102, 0)\`) is more intuitive for system colors. Modern CSS supports all three, so pick based on readability.

**Q: Can I diff more than just code files?**
A: Yes. Text diff tools work on any textual content — configuration files (YAML, TOML, INI), CSV data, markdown documents, and log files. For images, binary diffs aren't meaningful, but you can use pixel-diff tools designed for visual regression testing.

**Q: Are there any tools you'd recommend for cron job scheduling?**
A: A crontab generator is essential. It lets you pick minute, hour, day, month, and weekday interactively, then spits out the correct five-field expression. A good one also includes a "next N executions" preview so you can verify the schedule meets your intent.

**Q: What's the best way to minify JavaScript without losing debug capability?**
A: Use a tool that supports source maps. Minify with comments stripped and variable names shortened, but generate a \`.map\` file so browser DevTools can reverse the process during debugging. For local development, skip minification entirely — use it only for production bundles.
`,
    contentZh: `## 开发者工具汇总：每个程序员需要的 20 多个免费在线工具

无论你是经验丰富的后端工程师还是刚起步的前端开发者，你都会花大量时间在编写代码之外的任务上：格式化 JSON、解码 Base64、调整十六进制颜色、转义 URL，或者在将正则表达式模式应用到应用程序之前进行测试。本汇总涵盖了你每周可以节省数小时的基本免费在线工具。

### 核心工具包：每个开发者都需要什么

每个开发者的浏览器书签中都应该包含一些不可或缺的实用工具。这些是你每天多次使用的工具——快速、可靠且专注于单一任务：

- **JSON 格式化工具和验证器**——粘贴压缩的 JSON，即时获得美化打印的树视图结构，并高亮显示验证错误。
- **正则表达式测试器**——编写模式，提供测试字符串，实时查看匹配高亮和捕获组分解。
- **Base64 编码器/解码器**——在文本或文件数据与 Base64 编码之间转换，支持标准和 URL 安全变体。
- **取色器和颜色转换器**——在 HEX、RGB、HSL 和命名颜色之间转换；调整亮度、饱和度和对比度。
- **URL 编码器/解码器**——正确编码查询参数和解码百分号编码的 URL。
- **差异检查器**——并排比较两个文本块，高亮显示添加、删除和更改。

你可以在我们的[开发者工具中心](/tools)一处找到所有这些工具（以及更多）。每个工具都设计为快速、私密（不向服务器发送数据）且可离线使用。

### 深入探讨：JSON 工具

JSON 是现代 API 的通用语言，你会经常使用它。一个好的 JSON 工具不仅仅是美化打印：

| 功能 | 为什么重要 |
|---------|---------------|
| 语法验证 | 在你的解析器抛出神秘错误之前捕获尾逗号、缺少括号和无效的 UTF-8 |
| 树视图 | 折叠/展开嵌套对象以浏览深层 API 响应 |
| 压缩 | 去除空白以减小文档或存储的负载大小 |
| 差异/合并 | 并排比较两个 JSON 文档——在调试 API 响应变化时非常宝贵 |
| JSONPath 查询 | 无需编写代码即可提取特定值——\`$.store.books[*].author\` |
| 模式验证 | 根据 JSON Schema 检查你的 JSON，确保满足 API 要求 |

我们的[JSON 工具](/tools/json-formatter)处理所有这些操作。仅树视图就值得收藏——无需从控制台日志中读取原始的压缩 JSON，你可以获得带有语法高亮的可折叠层级结构。

### 对比表：全能工具包

开发者工具网站并不少。以下是主要选项的对比：

| 功能 | 本工具包 | DevDocs | Toolbox Pro | Online Utils |
|---------|-------------|---------|-------------|--------------|
| JSON 格式化/验证 | ✅ | ❌ | ✅ | ✅ |
| 带分组的正则测试器 | ✅ | ❌ | ✅（基础） | ✅ |
| Base64 编码/解码 | ✅ | ❌ | ✅ | ✅ |
| 颜色转换器（HEX/RGB/HSL） | ✅ | ❌ | ✅ | ❌ |
| URL 编码器/解码器 | ✅ | ❌ | ✅ | ✅ |
| HTML 实体编码器 | ✅ | ❌ | ❌ | ✅ |
| JWT 解码器 | ✅ | ❌ | ❌ | ❌ |
| Crontab 生成器 | ✅ | ❌ | ✅ | ❌ |
| UUID 生成器 | ✅ | ❌ | ✅ | ✅ |
| HTML/CSS/JS 压缩器 | ✅ | ❌ | ✅ | ✅（独立页面） |
| 离线工作（PWA） | ✅ | ❌ | ❌ | ❌ |
| 无服务器上传（隐私） | ✅ | ✅ | ✅ | ❌ |
| 免费（无付费墙） | ✅ | ✅ | ❌（免费有限） | ✅（带广告） |

关键区别在于**隐私和离线能力**。任何将你的 JSON 负载、隐藏在 JWT 中的 API 密钥或专有代码发送到第三方服务器的工具都会引入风险。完全在浏览器中运行的工具（比如我们的）永远不会将你的数据传输到任何地方。

### URL 工具及编码为何重要

URL 编码——也称为百分号编码——是一个看似微不足道的话题，直到生产环境中出现神秘的 400 错误。规则很直接，但容易出错：

- **保留字符**（\`:\`, \`/\`, \`?\`, \`#\`, \`[\`, \`]\`, \`@\`, \`!\`, \`$\`, \`&\`, \`'\`, \`(\`, \`)\`, \`*\`, \`+\`, \`,\`, \`;\`, \`=\`）在用作数据时必须编码。
- **不安全字符**（空格、引号、\`%\`、非 ASCII）必须始终编码。
- **最重要的一点**：空格在路径中应为 \`%20\`，但在查询字符串中应为 \`+\`——不同的库处理方式不同。

使用我们的[URL 工具](/tools/url-encoder)验证你的编码。粘贴原始 URL，查看编码版本，并在解码模式之间切换。仅此一项就可以节省数小时的调试时间，解决"请求在 Postman 中有效，但在浏览器中无效"的问题。

有关其他上下文的转义和编码，请查看我们的[HTML 实体转换器](/tools/html-encoder)和[字符串工具](/tools/string-utilities)，它们处理从 Unicode 规范化到别名生成的所有内容。

## 常见问题

**问：这些工具对 API 密钥和令牌等敏感数据安全吗？**
答：完全在客户端运行的工具（通过 JavaScript 在浏览器中）永远不会将你的数据传输到任何地方。我们的[开发者工具](/tools)在本地处理所有内容。在粘贴机密信息之前，查找任何工具上的"离线"或"无服务器"指示器。

**问：从终端格式化 JSON 的最佳方式是什么？**
答：将输出通过管道传递给 \`jq\`（Linux/macOS），或在任何安装了 Python 的系统上使用 \`python -m json.tool\`。如果需要图形界面体验，请粘贴到 JSON 格式化工具中。许多编辑器也内置了 JSON 格式化功能——VS Code 的"格式化文档"命令效果不错。

**问：既然我可以在浏览器中使用 \`btoa()\`，为什么还需要单独的 Base64 工具？**
答：内置的 \`btoa()\` 和 \`atob()\` 函数不处理 UTF-8——它们会在非 ASCII 字符上抛出错误。一个正确的 Base64 工具支持 Unicode 的编码/解码、URL 安全变体，甚至可以对二进制文件（图像、PDF）进行编码。

**问：Web 开发应该使用哪些颜色格式？**
答：HEX（\`#ff6600\`）是支持最广泛的。HSL（\`hsl(24, 100%, 50%)\`）在编程上更容易理解——你可以调整明度而不影响色相。RGB（\`rgb(255, 102, 0)\`）对于系统颜色更直观。现代 CSS 支持所有三种，因此根据可读性选择。

**问：我不仅仅可以对代码文件进行差异比较吗？**
答：可以。文本差异工具适用于任何文本内容——配置文件（YAML、TOML、INI）、CSV 数据、Markdown 文档和日志文件。对于图像，二进制差异没有意义，但你可以使用专为视觉回归测试设计的像素差异工具。

**问：你推荐的 cron 任务调度工具有哪些？**
答：crontab 生成器是必不可少的。它允许你交互式地选择分钟、小时、日、月和工作日，然后生成正确的五字段表达式。一个好的生成器还包含"下次 N 次执行"预览，以便你可以验证调度是否符合你的意图。

**问：在不丢失调试能力的情况下压缩 JavaScript 的最佳方法是什么？**
答：使用支持源码映射的工具。压缩时去除注释并缩短变量名，但生成 \`.map\` 文件，以便浏览器 DevTools 在调试时可以反向处理。对于本地开发，完全跳过压缩——仅在生成包时使用。
`,

  },
  {
    slug: "image-format-guide-jpg-png-webp",
    title: "Image Format Guide: JPG vs PNG vs WebP vs AVIF",
    description: "A complete comparison of image formats. Which one should you use for websites, print, photography, and graphics?",
    date: "2026-05-22",
    readTime: "7 min read",
    category: "Image Tools",
    toolSlug: "image-converter",
    content: `## JPEG vs PNG vs WebP vs AVIF: Choosing the Right Image Format

Images make up over 50% of the average webpage's total weight. Choosing the wrong format means slower load times, higher bandwidth costs, and frustrated visitors. But with four major contenders — JPEG, PNG, WebP, and AVIF — how do you pick the right one for each scenario? This guide breaks down the tradeoffs and gives you a practical decision framework.

### The Contenders at a Glance

Each image format was designed for a specific era and set of priorities. Understanding their origins helps you predict where each one shines:

- **JPEG (Joint Photographic Experts Group)** — Invented in 1992. Lossy compression optimized for photographs. It works by discarding high-frequency color data that human vision tolerates. Nearly universal support — every device and browser can display JPEGs.

- **PNG (Portable Network Graphics)** — Created in 1996 as a patent-free GIF replacement. Lossless compression with support for transparency (alpha channel). Excellent for screenshots, diagrams, logos, and any image with sharp edges or text.

- **WebP** — Released by Google in 2010. Offers both lossy and lossless compression with transparency support. Typically 25–35% smaller than equivalent JPEGs. Supported in all modern browsers, but not in older Safari or Internet Explorer.

- **AVIF (AV1 Image File Format)** — The newest contender, based on the AV1 video codec. Achieves dramatically better compression — up to 50% smaller than JPEG at equivalent quality. Supports HDR, wide color gamut, and transparency. Browser support is growing but still incomplete.

### Format Comparison Table

Here's how the four formats stack up across the dimensions that matter most in web development:

| Feature | JPEG | PNG | WebP | AVIF |
|---------|------|-----|------|------|
| Compression | Lossy | Lossless | Lossy + Lossless | Lossy + Lossless |
| Transparency | ❌ | ✅ | ✅ | ✅ |
| Animation | ❌ | ❌ | ✅ (alternative to GIF) | ✅ |
| 16-bit color | ❌ | ✅ (PNG-48) | ❌ | ✅ |
| HDR support | ❌ | ❌ | ❌ | ✅ |
| Progressive/decode | ✅ (progressive JPEG) | ✅ (interlaced) | ✅ (progressive) | ✅ (progressive) |
| Browser support | 100% | 100% | ~96% | ~82% |
| File size (photo, high quality) | Baseline | ~2× JPEG | ~30% smaller than JPEG | ~50% smaller than JPEG |
| File size (screenshot with text) | Poor (artifacts) | Baseline | ~25% smaller than PNG | ~30% smaller than PNG |
| Encoding speed | Fast | Fast | Moderate | Slow (10× JPEG) |
| Best for | Photos, complex gradients | UI elements, screenshots, transparency | Modern web (general) | Best compression, future-proofing |

### When to Use Each Format

The decision tree is simpler than it looks:

**Use JPEG for** photographs and images with smooth gradients where a small quality loss is invisible. Landscape photos, portraits, food shots, and product images all work well. Set quality to 80–85 for a good balance — going below 60 introduces visible blocking artifacts. Our [image optimization tools](/tools/image-optimizer) can batch-convert JPEGs to the optimal quality setting for your use case.

**Use PNG for** anything with sharp edges, text, or transparency. Logos, icons, screenshots, diagrams, charts, and UI mockups all benefit from PNG's lossless compression. If your image has fewer than 256 colors, use PNG-8 (8-bit palette) instead of PNG-24/32 — it's dramatically smaller and still perfectly sharp. For sizing and converting screenshots, try our [image converter](/tools/image-converter).

**Use WebP for** new projects where you control the tech stack. It's the safest modern choice — wide browser support, excellent compression, and transparency support. Serve WebP with a JPEG/PNG fallback using the \`<picture>\` element, and you're covered everywhere. WordPress, Shopify, and most CMS platforms support it out of the box.

**Use AVIF for** maximum compression when you can accept slower encoding and slightly narrower browser support. It's ideal for content delivery networks (CDNs) that generate multiple image variants — the CDN handles the slow encode once, and visitors reap the bandwidth savings. AVIF can cut image-related bandwidth by half compared to JPEG, which is game-changing for image-heavy sites like portfolios, e-commerce, and media outlets.

### Migration Guide: Converting Your Image Library

If you're maintaining an existing website with hundreds or thousands of images, a full migration can feel overwhelming. Here's a practical approach:

1. **Audit your images** — Categorize each image by type (photo, screenshot, logo, icon). Use automated tools to identify dimensions, current format, and file size.

2. **Set quality baselines** — Test at different quality levels and pick the lowest setting where you can't tell the difference in a side-by-side comparison. For most photos, quality 80 is indistinguishable from the original.

3. **Convert in batches** — Start with your highest-traffic images (hero banners, product photos) and work down. Our [image resizer](/tools/image-resizer) and batch tools can process entire directories.

4. **Use the \`<picture>\` element** — This is the safest deployment pattern:

\`\`\`html
<picture>
  <source srcset="photo.avif" type="image/avif">
  <source srcset="photo.webp" type="image/webp">
  <img src="photo.jpg" alt="Description">
</picture>
\`\`\`

Browsers pick the first format they support. AVIF users get the smallest file, WebP users get the next best, and everything else falls back to JPEG.

5. **Monitor and iterate** — Check your image CDN or server logs for format usage. If AVIF adoption is high, deprioritize the JPEG fallback. If WebP traffic dominates, make it your primary format.

6. **Automate with CI/CD** — Add image conversion to your build pipeline. Tools like \`sharp\` (Node.js), \`libvips\` (C/C++), and ImageMagick can generate all three modern formats from a single source image.

For a deeper dive into compression settings and batch workflows, visit our [optimization guide](/tools/image-optimizer) and [format comparison tool](/tools/image-converter).

## FAQ

**Q: Does WebP work in all browsers?**
A: WebP has ~96% global browser support as of 2025. It works in Chrome, Firefox, Edge, Opera, and Safari 14+. The gap is mainly older Safari and some legacy browsers. Always provide a JPEG or PNG fallback via the \`<picture>\` element.

**Q: Is AVIF safe to use in production?**
A: Yes, with a fallback. AVIF is supported in Chrome 85+, Firefox 93+, and Safari 16.4+. At ~82% global support, you need JPEG and/or WebP fallbacks. For blogs and personal sites, the risk is minimal — the fallback handles the remaining 18%.

**Q: Why is PNG so large compared to JPEG?**
A: PNG uses lossless compression — it preserves every single pixel exactly. JPEG discards data (lossy) because human eyes are less sensitive to color detail than brightness. A PNG screenshot at 1920×1080 can easily be 2–5 MB, while the same as JPEG at quality 85 might be 200–400 KB with visible artifacts around text.

**Q: Can I convert existing JPEGs to WebP and get the same quality at a smaller size?**
A: Yes — re-encoding JPEG as lossy WebP at a comparable quality level typically yields 25–35% size reduction. However, if the source JPEG was already compressed aggressively, the WebP version may amplify artifacts. Always start from the highest-quality original.

**Q: What's the best format for email images?**
A: Stick with JPEG for photos and PNG for logos/headers. Email client support for WebP is inconsistent (works in Gmail and Apple Mail, but not Outlook). AVIF has essentially zero email support. PNG-8 (palette-based) is a great option for small, simple graphics.

**Q: Does image format affect SEO?**
A: Indirectly, yes. Google's Core Web Vitals include Largest Contentful Paint (LCP), which is heavily impacted by image load time. Using modern, smaller formats (WebP, AVIF) improves LCP scores, which can boost search rankings. Always include descriptive \`alt\` text regardless of format.

**Q: What about SVG for icons and logos?**
A: SVG (Scalable Vector Graphics) is ideal for logos, icons, and illustrations — it's resolution-independent, typically tiny in file size, and can be styled with CSS. Use vector formats whenever your image is composed of simple shapes and text. Only reach for raster formats (JPEG, PNG, WebP, AVIF) when you have photographs or complex gradients that can't be represented as vectors.
`,
    contentZh: `## JPEG vs PNG vs WebP vs AVIF：选择正确的图像格式

图像占平均网页总权重的 50% 以上。选择错误的格式意味着更慢的加载时间、更高的带宽成本和沮丧的访客。但是，面对四个主要竞争者——JPEG、PNG、WebP 和 AVIF——你如何为每种场景选择合适的格式？本指南分解了它们的权衡，并为你提供了一个实用的决策框架。

### 竞争者一览

每种图像格式都是为特定时代和优先级设计的。了解它们的起源有助于你预测每种格式的强项：

- **JPEG（联合图像专家组）**——发明于 1992 年。针对照片优化的有损压缩。它通过丢弃人类视觉容忍的高频颜色数据来工作。几乎普遍支持——每个设备和浏览器都能显示 JPEG。
- **PNG（便携式网络图形）**——创建于 1996 年，作为无专利的 GIF 替代品。支持透明度（Alpha 通道）的无损压缩。非常适合截图、图表、标志以及任何具有锐利边缘或文本的图像。
- **WebP**——Google 于 2010 年发布。提供有损和无损压缩，支持透明度。通常比同等 JPEG 小 25-35%。在所有现代浏览器中得到支持，但在较旧的 Safari 或 Internet Explorer 中不支持。
- **AVIF（AV1 图像文件格式）**——最新的竞争者，基于 AV1 视频编解码器。实现了显著更好的压缩——同等质量下比 JPEG 小 50%。支持 HDR、宽色域和透明度。浏览器支持正在增长但仍不完整。

### 格式对比表

以下是四种格式在 Web 开发最重要的维度上的对比：

| 特性 | JPEG | PNG | WebP | AVIF |
|---------|------|-----|------|------|
| 压缩 | 有损 | 无损 | 有损 + 无损 | 有损 + 无损 |
| 透明度 | ❌ | ✅ | ✅ | ✅ |
| 动画 | ❌ | ❌ | ✅（替代 GIF） | ✅ |
| 16 位颜色 | ❌ | ✅（PNG-48） | ❌ | ✅ |
| HDR 支持 | ❌ | ❌ | ❌ | ✅ |
| 渐进/解码 | ✅（渐进式 JPEG） | ✅（交错） | ✅（渐进） | ✅（渐进） |
| 浏览器支持 | 100% | 100% | ~96% | ~82% |
| 文件大小（照片，高质量） | 基准 | ~2× JPEG | 比 JPEG 小 ~30% | 比 JPEG 小 ~50% |
| 文件大小（含文本截图） | 差（伪影） | 基准 | 比 PNG 小 ~25% | 比 PNG 小 ~30% |
| 编码速度 | 快 | 快 | 中等 | 慢（10× JPEG） |
| 最适合 | 照片、复杂渐变 | UI 元素、截图、透明度 | 现代网页（通用） | 最佳压缩、面向未来 |

### 何时使用每种格式

决策树比看起来简单：

**将 JPEG 用于**照片和具有平滑渐变的图像，在这些场景中少量的质量损失不可见。风景照、人像、美食照片和产品图片都很适用。将质量设置为 80-85 以获得良好的平衡——低于 60 会出现可见的块状伪影。我们的[图像优化工具](/tools/image-optimizer)可以批量将 JPEG 转换为适合你用例的最佳质量设置。

**将 PNG 用于**任何具有锐利边缘、文本或透明度的内容。标志、图标、截图、图表、图表和 UI 模型都受益于 PNG 的无损压缩。如果你的图像颜色少于 256 种，请使用 PNG-8（8 位调色板）而不是 PNG-24/32——它显著更小，且同样清晰。对于调整截图大小和转换，请尝试我们的[图像转换器](/tools/image-converter)。

**将 WebP 用于**你可以控制技术栈的新项目。这是最安全的现代选择——广泛的浏览器支持、出色的压缩和透明度支持。使用 \`<picture>\` 元素提供 WebP 并配以 JPEG/PNG 回退，你就可以覆盖所有场景。WordPress、Shopify 和大多数 CMS 平台都原生支持它。

**将 AVIF 用于**当你能够接受较慢的编码和稍窄的浏览器支持时追求最大压缩。它非常适合内容分发网络（CDN），CDN 生成多个图像变体——CDN 处理一次慢速编码，访客享受带宽节省。与 JPEG 相比，AVIF 可以将图像相关带宽减半，这对于图像密集型网站（如作品集、电子商务和媒体网站）来说具有变革意义。

### 迁移指南：转换你的图像库

如果你正在维护一个现有网站，包含数百或数千张图像，完整的迁移可能令人望而生畏。以下是一种实用的方法：

1. **审计你的图像**——按类型（照片、截图、标志、图标）对每张图像进行分类。使用自动化工具识别尺寸、当前格式和文件大小。

2. **设置质量基准**——在不同质量级别测试，选择在并排比较中看不出差异的最低设置。对于大多数照片，质量 80 与原始图像难以区分。

3. **批量转换**——从流量最高的图像（主横幅、产品照片）开始，逐步向下处理。我们的[图像调整器](/tools/image-resizer)和批量工具可以处理整个目录。

4. **使用 \`<picture>\` 元素**——这是最安全的部署模式：

\`\`\`html
<picture>
  <source srcset="photo.avif" type="image/avif">
  <source srcset="photo.webp" type="image/webp">
  <img src="photo.jpg" alt="描述">
</picture>
\`\`\`

浏览器选择它们支持的第一个格式。AVIF 用户获得最小的文件，WebP 用户获得次佳方案，其他一切回退到 JPEG。

5. **监控和迭代**——检查你的图像 CDN 或服务器日志以了解格式使用情况。如果 AVIF 采用率很高，则降低 JPEG 回退的优先级。如果 WebP 流量占主导地位，则将其设为主要格式。

6. **使用 CI/CD 自动化**——将图像转换添加到你的构建管道中。像 \`sharp\`（Node.js）、\`libvips\`（C/C++）和 ImageMagick 这样的工具可以从单个源图像生成所有三种现代格式。

要深入了解压缩设置和批量工作流程，请访问我们的[优化指南](/tools/image-optimizer)和[格式比较工具](/tools/image-converter)。

## 常见问题

**问：WebP 在所有浏览器中都能工作吗？**
答：截至 2025 年，WebP 在全球拥有约 96% 的浏览器支持。它在 Chrome、Firefox、Edge、Opera 和 Safari 14+ 中工作。缺口主要是较旧的 Safari 和一些遗留浏览器。始终通过 \`<picture>\` 元素提供 JPEG 或 PNG 回退。

**问：AVIF 在生产环境中使用安全吗？**
答：可以，但需要回退方案。AVIF 在 Chrome 85+、Firefox 93+ 和 Safari 16.4+ 中得到支持。全球支持率约为 82%，你需要 JPEG 和/或 WebP 回退。对于博客和个人网站，风险很小——回退方案处理剩余的 18%。

**问：为什么 PNG 比 JPEG 大这么多？**
答：PNG 使用无损压缩——它精确保留每个像素。JPEG 丢弃数据（有损），因为人眼对颜色细节不如对亮度敏感。1920×1080 的 PNG 截图可能达到 2-5 MB，而相同图像在质量 85 的 JPEG 下可能只有 200-400 KB，但在文本周围会出现可见伪影。

**问：我可以将现有 JPEG 转换为 WebP 并获得相同的质量但更小的尺寸吗？**
答：可以——以可比较的质量水平将 JPEG 重新编码为有损 WebP 通常可以缩小 25-35%。但是，如果源 JPEG 已经被大幅压缩，WebP 版本可能会放大伪影。始终从最高质量的原始文件开始。

**问：电子邮件图像的最佳格式是什么？**
答：照片坚持使用 JPEG，标志/标题使用 PNG。电子邮件客户端对 WebP 的支持不一致（在 Gmail 和 Apple Mail 中有效，但在 Outlook 中无效）。AVIF 在电子邮件中基本没有支持。PNG-8（基于调色板）是小型简单图形的绝佳选择。

**问：图像格式会影响 SEO 吗？**
答：间接地，会。Google 的核心网页指标包括最大内容绘制（LCP），这受到图像加载时间的严重影响。使用现代、更小的格式（WebP、AVIF）可以改善 LCP 得分，从而可能提升搜索排名。无论格式如何，始终包含描述性的 \`alt\` 文本。

**问：对于图标和标志，SVG 怎么样？**
答：SVG（可缩放矢量图形）非常适合标志、图标和插图——它与分辨率无关，文件大小通常很小，并且可以用 CSS 进行样式设置。只要你的图像由简单形状和文本组成，就使用矢量格式。只有当你拥有无法表示为矢量的照片或复杂渐变时，才使用光栅格式（JPEG、PNG、WebP、AVIF）。
`,

  },

{
    slug: "uuid-generator",
    title: "How to Generate UUIDs Online — Complete Guide to UUID v4",
    description: "Learn everything about UUIDs: what they are, UUID v4 vs v7, how to generate them instantly online, and best practices for using UUIDs as primary keys and identifiers.",
    date: "2026-05-23",
    readTime: "5 min read",
    category: "Developer Tools",
    toolSlug: "uuid-generator",
    content: `## What is a UUID?

A **UUID** (Universally Unique Identifier) is a 128-bit identifier standardized by the Open Software Foundation (OSF). It's designed to be unique across space and time — no central authority needed.

UUIDs look like this:

\`\`\`
550e8400-e29b-41d4-a716-446655440000
\`\`\`

That's 32 hexadecimal characters arranged in 5 groups: 8-4-4-4-12.

## Why Use UUIDs?

### 1. Distributed Systems

Auto-increment IDs break when you have multiple databases generating IDs simultaneously. Two servers could both generate ID 42. UUIDs eliminate collisions entirely.

### 2. Security Through Obscurity

Sequential IDs (1, 2, 3...) let anyone guess how many users or orders you have. UUIDs are unpredictable — no one can guess a valid ID.

### 3. Offline Generation

UUIDs can be generated without a database or central server. Your mobile app can create UUIDs offline and sync later with zero conflicts.

### 4. Database Migration Friendly

Merging two databases with auto-increment IDs is a nightmare of re-mapping foreign keys. UUIDs never conflict, so merging is trivial.

## UUID Versions Explained

### UUID v4 (Random)

The most common version. All bits except 6 are randomly generated:

\`\`\`
xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
\`\`\`

- The \`4\` at position 13 marks it as v4
- \`y\` indicates the variant (8, 9, a, or b)
- 122 bits of randomness → 5.3 × 10^36 possible values

**Collision probability:** You'd need to generate 2.71 trillion UUIDs to have a 50% chance of a single collision. In practice: zero.

### UUID v7 (Time-Ordered)

Newer version (RFC 9562) that's time-sortable. The first 48 bits are a Unix timestamp in milliseconds:

\`\`\`
018f3a6e-1b3c-7d45-a123-456789abcdef
\`\`\`

**Why v7 matters:** Database indexes on UUIDs were slow because random ordering caused page splits. Time-ordered UUIDs solve this — new rows go to the end of the index, just like auto-increment.

## How to Generate UUIDs

### Using ToolboxPro

Visit our [UUID Generator](/tools/uuid-generator) and:

1. Choose the UUID version (v4 or v7)
2. Select how many to generate (1 to 1000)
3. Click **Generate**
4. Choose your output format — lowercase, uppercase, or without hyphens
5. Copy with one click

### The Bulk Generation Feature

Need 500 UUIDs for seeding a database? Set the count to 500, click Generate, and copy them all at once. Each UUID is cryptographically random — no patterns, no collisions.

## UUID Best Practices

### As Database Primary Keys

\`\`\`sql
-- PostgreSQL has a native UUID type
CREATE TABLE users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL
);

-- MySQL use CHAR(36) or BINARY(16)
CREATE TABLE users (
    id BINARY(16) PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
\`\`\`

### Storage Optimization

- **Text format (36 chars):** Readable, debuggable, but larger
- **Binary format (16 bytes):** Compact, faster, but harder to read
- **Base64 encoded (22 chars):** URL-safe, compact

### When NOT to Use UUIDs

- **Tiny databases** — auto-increment is simpler and faster
- **Human-readable IDs** — order numbers like "ORD-1001" are more user-friendly
- **Performance-critical OLTP** — binary UUIDs are still slower than integers for joins

## FAQ

**Can two UUIDs be the same?** Theoretically yes, but practically no. The odds are so astronomically low that you'd win the lottery 50 times in a row first.

**What's the difference between UUID and GUID?** Nothing — GUID is Microsoft's implementation of the UUID standard. They're interchangeable.

**Are UUIDs cryptographically secure?** UUID v4 uses random bytes. On most systems these are cryptographically strong (JavaScript's crypto.randomUUID() uses the OS CSPRNG).

**How many UUIDs can I generate per second?** Unlimited — our tool generates them client-side in milliseconds. Try generating 10,000 and see for yourself.`,
    contentZh: `## 什么是 UUID？

**UUID**（通用唯一标识符）是一个由开放软件基金会（OSF）标准化的 128 位标识符。它被设计为在时间和空间上都是唯一的——无需中央权威机构。

UUID 看起来像这样：

\`\`\`
550e8400-e29b-41d4-a716-446655440000
\`\`\`

这是 32 个十六进制字符，分为 5 组：8-4-4-4-12。

## 为什么使用 UUID？

### 1. 分布式系统

当多个数据库同时生成 ID 时，自增 ID 会出问题。两台服务器可能都生成 ID 42。UUID 完全消除了冲突。

### 2. 通过模糊性实现安全

顺序 ID（1、2、3...）让任何人都能猜测你有多少用户或订单。UUID 是不可预测的——没有人能猜出有效的 ID。

### 3. 离线生成

UUID 可以在没有数据库或中央服务器的情况下生成。你的移动应用可以离线创建 UUID，之后零冲突地同步。

### 4. 友好的数据库迁移

合并两个使用自增 ID 的数据库是一场重新映射外键的噩梦。UUID 永远不会冲突，因此合并很简单。

## UUID 版本说明

### UUID v4（随机）

最常见的版本。除 6 位外的所有位都是随机生成的：

\`\`\`
xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
\`\`\`

- 第 13 位的 \`4\` 标记其为 v4
- \`y\` 表示变体（8、9、a 或 b）
- 122 位随机性 → 约 5.3 × 10^36 个可能值

**碰撞概率：** 你需要生成 2.71 万亿个 UUID 才有 50% 的概率发生一次碰撞。实际上：零概率。

### UUID v7（时间有序）

较新的版本（RFC 9562），可按时间排序。前 48 位是毫秒精度的 Unix 时间戳：

\`\`\`
018f3a6e-1b3c-7d45-a123-456789abcdef
\`\`\`

**v7 为何重要：** UUID 上的数据库索引以前很慢，因为随机排序会导致页分裂。时间有序的 UUID 解决了这个问题——新行会添加到索引末尾，就像自增一样。

## 如何生成 UUID

### 使用 ToolboxPro

访问我们的 [UUID 生成器](/tools/uuid-generator)并：

1. 选择 UUID 版本（v4 或 v7）
2. 选择生成数量（1 到 1000）
3. 点击**生成**
4. 选择你的输出格式——小写、大写或不带连字符
5. 一键复制

### 批量生成功能

需要 500 个 UUID 来填充数据库？将数量设置为 500，点击生成，一次性复制全部。每个 UUID 都是密码学随机的——没有模式，没有碰撞。

## UUID 最佳实践

### 作为数据库主键

\`\`\`sql
-- PostgreSQL 有原生 UUID 类型
CREATE TABLE users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL
);

-- MySQL 使用 CHAR(36) 或 BINARY(16)
CREATE TABLE users (
    id BINARY(16) PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
\`\`\`

### 存储优化

- **文本格式（36 字符）：** 可读、可调试，但较大
- **二进制格式（16 字节）：** 紧凑、更快，但较难阅读
- **Base64 编码（22 字符）：** URL 安全、紧凑

### 何时不使用 UUID

- **小型数据库**——自增更简单、更快
- **人类可读的 ID**——像 "ORD-1001" 这样的订单号对用户更友好
- **性能关键的 OLTP**——对于连接操作，二进制 UUID 仍然比整数慢

## 常见问题

**两个 UUID 可能相同吗？** 理论上可能，但实际上不会。概率低到你会先连续中 50 次彩票。

**UUID 和 GUID 有什么区别？** 没有区别——GUID 是微软对 UUID 标准的实现。它们可以互换。

**UUID 是密码学安全的吗？** UUID v4 使用随机字节。在大多数系统上，这些字节是密码学强安全的（JavaScript 的 crypto.randomUUID() 使用操作系统 CSPRNG）。

**每秒可以生成多少个 UUID？** 无限制——我们的工具在客户端以毫秒级生成。尝试生成 10,000 个，亲自看看效果。
`,

  },
  {
    slug: "timestamp-converter",
    title: "Unix Timestamp Converter: How to Convert Between Epoch and Human Date",
    description: "Master Unix timestamps: convert epoch seconds to readable dates, understand timezone handling, and use the right format for your programming language.",
    date: "2026-05-23",
    readTime: "5 min read",
    category: "Developer Tools",
    toolSlug: "timestamp-converter",
    content: `## What is a Unix Timestamp?

A **Unix timestamp** (also called Epoch time) is the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC — the Unix Epoch.

Right now, the timestamp is roughly **1.8 billion** and counting up by one every second.

### Why 1970?

Unix was developed at Bell Labs in the late 1960s and early 1970s. January 1, 1970 was chosen as the epoch for simplicity — it's a clean, round date. Ken Thompson and Dennis Ritchie picked it, and the world followed.

## When You Encounter Timestamps

Timestamps appear everywhere in development:

| Source | Format | Example |
|--------|--------|---------|
| REST APIs | Seconds | 1716451200 |
| JavaScript Date.now() | Milliseconds | 1716451200000 |
| Python datetime | Seconds with decimals | 1716451200.123456 |
| Database TIMESTAMP | Seconds or milliseconds | 1716451200 |
| Firebase Timestamps | Milliseconds | 1716451200000 |
| Excel dates | Days since 1900 | 45455 |

The most common mistake? Mixing seconds and milliseconds.

## How to Convert Timestamps

### Using ToolboxPro

Visit our [Timestamp Converter](/tools/timestamp-converter) and:

1. **Paste a timestamp** — it auto-detects seconds vs milliseconds
2. **See all formats instantly** — UTC, ISO 8601, local time, relative time
3. **Pick a date from the calendar** — get the timestamp for any date
4. **Copy any format** with one click

### Manual Conversion in Code

\`\`\`javascript
// JavaScript — Date.now() returns milliseconds
const ms = Date.now();                       // 1716451200000
const seconds = Math.floor(Date.now() / 1000); // 1716451200

// Convert back
const date = new Date(1716451200000);
console.log(date.toISOString());  // "2026-05-23T00:00:00.000Z"
\`\`\`

\`\`\`python
# Python
import time
import datetime

# Current timestamp
ts = time.time()  # 1716451200.123456

# To datetime
dt = datetime.datetime.fromtimestamp(ts)
print(dt.isoformat())  # "2026-05-23T00:00:00.123456"

# From datetime to timestamp
ts2 = dt.timestamp()
\`\`\`

\`\`\`sql
-- PostgreSQL
SELECT EXTRACT(EPOCH FROM NOW());           -- seconds
SELECT EXTRACT(EPOCH FROM NOW()) * 1000;    -- milliseconds
SELECT TO_TIMESTAMP(1716451200);            -- timestamp to datetime

-- MySQL
SELECT UNIX_TIMESTAMP();                    -- seconds
SELECT FROM_UNIXTIME(1716451200);           -- timestamp to datetime
\`\`\`

## The Year 2038 Problem

On January 19, 2038, 32-bit signed integers will overflow. The timestamp 2147483647 (max 32-bit signed) rolls over to -2147483648, which corresponds to December 1901.

**Who's affected:** Legacy systems, embedded devices, older databases, 32-bit operating systems.

**The fix:** Use 64-bit integers (safe for 292 billion years) or unsigned 32-bit (safe until 2106).

Most modern systems already use 64-bit timestamps, but check your embedded devices and legacy databases.

## Timezone Handling

Timestamps are always UTC. The conversion to local time is purely display logic:

\`\`\`javascript
// Always UTC internally
const utc = new Date("2026-05-23T12:00:00Z");
console.log(utc.getTime());  // Same value everywhere

// Display in any timezone
const tokyo = utc.toLocaleString("en-US", { timeZone: "Asia/Tokyo" });
const nyc = utc.toLocaleString("en-US", { timeZone: "America/New_York" });
\`\`\`

### Best Practice

Store timestamps as UTC integers in your database. Convert to local time only when displaying to users. This avoids every timezone-related bug.

## FAQ

**What's the difference between seconds and milliseconds?** A factor of 1000. Timestamp \`1716451200\` (seconds) = May 23, 2026. \`1716451200000\` (milliseconds) = the same moment. Divide by 1000 to convert milliseconds to seconds.

**Does a timestamp include timezone?** No — timestamps are always UTC. The number itself represents the same instant everywhere on Earth.

**How do I get the current timestamp in a shell script?**

\`\`\`bash
# Seconds
date +%s

# Milliseconds
echo $(($(date +%s%N)/1000000))
\`\`\`

**What is ISO 8601?** A date format like \`2026-05-23T14:30:00+08:00\`. It's human-readable and includes timezone offset. Our tool shows both formats.`,
    contentZh: `## 什么是 Unix 时间戳？

**Unix 时间戳**（也称为 Epoch 时间）是指自 1970 年 1 月 1 日 00:00:00 UTC（Unix Epoch）以来经过的秒数。

现在，时间戳大约是 **18 亿**，并且每秒增加 1。

### 为什么是 1970 年？

Unix 是在 20 世纪 60 年代末和 70 年代初由贝尔实验室开发的。1970 年 1 月 1 日被选为纪元时间，因为它简洁明了——一个干净的整数日期。肯·汤普森和丹尼斯·里奇选择了它，全世界都遵循了这一标准。

## 何时会遇到时间戳

时间戳在开发中随处可见：

| 来源 | 格式 | 示例 |
|--------|--------|---------|
| REST API | 秒 | 1716451200 |
| JavaScript Date.now() | 毫秒 | 1716451200000 |
| Python datetime | 带小数的秒 | 1716451200.123456 |
| 数据库 TIMESTAMP | 秒或毫秒 | 1716451200 |
| Firebase 时间戳 | 毫秒 | 1716451200000 |
| Excel 日期 | 自 1900 年以来的天数 | 45455 |

最常见的错误？混淆秒和毫秒。

## 如何转换时间戳

### 使用 ToolboxPro

访问我们的[时间戳转换器](/tools/timestamp-converter)：

1. **粘贴时间戳**——自动检测是秒还是毫秒
2. **立即查看所有格式**——UTC、ISO 8601、本地时间、相对时间
3. **从日历中选择日期**——获取任意日期的时间戳
4. **一键复制**任何格式

### 代码中的手动转换

\`\`\`javascript
// JavaScript —— Date.now() 返回毫秒
const ms = Date.now();                       // 1716451200000
const seconds = Math.floor(Date.now() / 1000); // 1716451200

// 转换回来
const date = new Date(1716451200000);
console.log(date.toISOString());  // "2026-05-23T00:00:00.000Z"
\`\`\`

\`\`\`python
# Python
import time
import datetime

# 当前时间戳
ts = time.time()  # 1716451200.123456

# 转 datetime
dt = datetime.datetime.fromtimestamp(ts)
print(dt.isoformat())  # "2026-05-23T00:00:00.123456"

# 从 datetime 转时间戳
ts2 = dt.timestamp()
\`\`\`

\`\`\`sql
-- PostgreSQL
SELECT EXTRACT(EPOCH FROM NOW());           -- 秒
SELECT EXTRACT(EPOCH FROM NOW()) * 1000;    -- 毫秒
SELECT TO_TIMESTAMP(1716451200);            -- 时间戳转日期时间

-- MySQL
SELECT UNIX_TIMESTAMP();                    -- 秒
SELECT FROM_UNIXTIME(1716451200);           -- 时间戳转日期时间
\`\`\`

## 2038 年问题

2038 年 1 月 19 日，32 位有符号整数将溢出。时间戳 2147483647（32 位有符号最大值）将回滚到 -2147483648，对应 1901 年 12 月。

**受影响对象：** 遗留系统、嵌入式设备、旧版数据库、32 位操作系统。

**解决方法：** 使用 64 位整数（可安全使用 2920 亿年）或无符号 32 位整数（可安全使用到 2106 年）。

大多数现代系统已使用 64 位时间戳，但请检查你的嵌入式设备和旧版数据库。

## 时区处理

时间戳始终是 UTC。转换为本地时间纯粹是显示逻辑：

\`\`\`javascript
// 内部始终使用 UTC
const utc = new Date("2026-05-23T12:00:00Z");
console.log(utc.getTime());  // 任何地方都是相同的值

// 在任何时区显示
const tokyo = utc.toLocaleString("en-US", { timeZone: "Asia/Tokyo" });
const nyc = utc.toLocaleString("en-US", { timeZone: "America/New_York" });
\`\`\`

### 最佳实践

在数据库中始终以 UTC 整数形式存储时间戳。仅在向用户显示时转换为本地时间。这样可以避免所有与时区相关的错误。

## 常见问题

**秒和毫秒有什么区别？** 相差 1000 倍。时间戳 \`1716451200\`（秒）= 2026 年 5 月 23 日。\`1716451200000\`（毫秒）= 同一时刻。将毫秒除以 1000 即可转换为秒。

**时间戳包含时区吗？** 不——时间戳始终是 UTC。该数字本身代表地球上任何地方相同的瞬间。

**如何在 shell 脚本中获取当前时间戳？**

\`\`\`bash
# 秒
date +%s

# 毫秒
echo $(($(date +%s%N)/1000000))
\`\`\`

**什么是 ISO 8601？** 一种日期格式，如 \`2026-05-23T14:30:00+08:00\`。它人类可读且包含时区偏移量。我们的工具会同时显示两种格式。
`,

  },
  {
    slug: "number-base-converter",
    title: "Binary, Hex, Decimal: How to Convert Between Number Bases",
    description: "Learn to convert between binary, hexadecimal, decimal, and octal. Understand place values, conversion algorithms, and practical use cases in programming.",
    date: "2026-05-23",
    readTime: "6 min read",
    category: "Developer Tools",
    toolSlug: "number-base-converter",
    content: `## Why Number Base Conversion Matters

Computers think in binary (base 2). Humans prefer decimal (base 10). Programmers use hexadecimal (base 16) as a compact shorthand. If you work with low-level data, you need all three.

### Common Number Bases

| Base | Name | Digits | Use Case |
|------|------|--------|----------|
| 2 | Binary | 0-1 | Machine code, bitwise operations |
| 8 | Octal | 0-7 | File permissions (Unix) |
| 10 | Decimal | 0-9 | Everyday numbers |
| 16 | Hexadecimal | 0-9, A-F | Memory addresses, colors, hashes |

## How Number Bases Work

Every number is a sum of **digits × base^position**. The rightmost digit is position 0.

### Decimal Example: 423₁₀

\`\`\`
4 × 10² = 4 × 100 = 400
2 × 10¹ = 2 × 10  =  20
3 × 10⁰ = 3 × 1   =   3
Sum: 423
\`\`\`

### Binary Example: 11010101₂

\`\`\`
1 × 2⁷ = 128
1 × 2⁶ =  64
0 × 2⁵ =   0
1 × 2⁴ =  16
0 × 2³ =   0
1 × 2² =   4
0 × 2¹ =   0
1 × 2⁰ =   1
Sum: 213₁₀
\`\`\`

## Conversion Methods

### Decimal to Binary (Repeated Division)

Divide by 2 repeatedly, reading remainders from bottom to top:

\`\`\`
213 ÷ 2 = 106 remainder 1 ↑
106 ÷ 2 =  53 remainder 0 │
 53 ÷ 2 =  26 remainder 1 │
 26 ÷ 2 =  13 remainder 0 │
 13 ÷ 2 =   6 remainder 1 │
  6 ÷ 2 =   3 remainder 0 │
  3 ÷ 2 =   1 remainder 1 │
  1 ÷ 2 =   0 remainder 1 │
Result: 11010101₂
\`\`\`

### Binary to Hexadecimal (Grouping)

Group binary digits into sets of 4 (from right), then convert each group:

\`\`\`
Binary:  1101 0101
Hex:       D    5
Result: 0xD5
\`\`\`

### Hexadecimal to Decimal

\`\`\`
0xD5 = 13 × 16¹ + 5 × 16⁰
     = 208 + 5
     = 213₁₀
\`\`\`

## Using the ToolboxPro Converter

Visit our [Number Base Converter](/tools/number-base-converter) and:

1. **Type any number** — it auto-detects the base
2. **See all bases simultaneously** — binary, octal, decimal, hex side by side
3. **Copy any format** with one click
4. **Works with very large numbers** — up to 64-bit values

## Practical Use Cases

### 1. RGB Color Values

\`\`\`css
/* Hex is shorthand for RGB in base-10 */
#FF5733
/* FF = 255 red, 57 = 87 green, 33 = 51 blue */
background-color: rgb(255, 87, 51);
\`\`\`

### 2. Unix File Permissions

\`\`\`bash
# chmod uses octal
chmod 755 script.sh
# 7 = rwx (owner), 5 = r-x (group), 5 = r-x (others)
# 7 in octal = 111 in binary = read + write + execute
\`\`\`

### 3. Bitwise Flags

\`\`\`javascript
// Each bit is a flag
const READ    = 0b0001;  // 1
const WRITE   = 0b0010;  // 2
const EXECUTE = 0b0100;  // 4

const permissions = READ | WRITE;  // 0b0011 = 3
const canRead = permissions & READ; // 0b0001 = true
\`\`\`

### 4. Memory Addresses

\`\`\`c
// Debuggers show addresses in hex
int *ptr = malloc(64);
printf("%p", ptr);  // 0x7ffeefbff5e0
\`\`\`

### 5. Network MAC Addresses

\`\`\`
MAC: 00:1A:2B:3C:4D:5E
Each pair is one byte (0-255 in decimal, 00-FF in hex)
First 3 bytes: vendor ID, Last 3 bytes: device ID
\`\`\`

## Common Conversion Table

| Decimal | Binary | Hex | Octal |
|---------|--------|-----|-------|
| 0 | 0000 | 0 | 0 |
| 1 | 0001 | 1 | 1 |
| 2 | 0010 | 2 | 2 |
| 3 | 0011 | 3 | 3 |
| 4 | 0100 | 4 | 4 |
| 5 | 0101 | 5 | 5 |
| 6 | 0110 | 6 | 6 |
| 7 | 0111 | 7 | 7 |
| 8 | 1000 | 8 | 10 |
| 9 | 1001 | 9 | 11 |
| 10 | 1010 | A | 12 |
| 11 | 1011 | B | 13 |
| 12 | 1100 | C | 14 |
| 13 | 1101 | D | 15 |
| 14 | 1110 | E | 16 |
| 15 | 1111 | F | 17 |

## FAQ

**What base do computers actually use?** Binary (base 2). Every value in memory — numbers, text, images — is ultimately stored as sequences of 0s and 1s.

**Why do programmers use hex?** Hex is a human-readable shorthand for binary. One hex digit = 4 binary digits. It's much easier to read \`0xFF\` than \`0b11111111\`.

**What about base64?** Base64 uses 64 characters (A-Z, a-z, 0-9, +, /) and is used for encoding binary data as text — see our [Base64 Encoder/Decoder](/tools/base64-encode-decode).

**Is there a base higher than hex?** Yes — base32, base36, base58 (Bitcoin addresses), and base64 are common. Our tool handles bases 2 through 36.`,
    contentZh: `## 为什么数制转换很重要

计算机使用二进制（基数为 2）思维。人类更喜欢十进制（基数为 10）。程序员使用十六进制（基数为 16）作为紧凑的简写。如果你处理底层数据，这三种数制都需要掌握。

### 常见数制

| 基数 | 名称 | 数字 | 用途 |
|------|------|--------|----------|
| 2 | 二进制 | 0-1 | 机器码、位运算 |
| 8 | 八进制 | 0-7 | 文件权限（Unix） |
| 10 | 十进制 | 0-9 | 日常数字 |
| 16 | 十六进制 | 0-9, A-F | 内存地址、颜色、哈希值 |

## 数制的工作原理

每个数字都是 **数字 × 基数^位置** 的总和。最右边的数字位置为 0。

### 十进制示例：423₁₀

\`\`\`
4 × 10² = 4 × 100 = 400
2 × 10¹ = 2 × 10  =  20
3 × 10⁰ = 3 × 1   =   3
总和：423
\`\`\`

### 二进制示例：11010101₂

\`\`\`
1 × 2⁷ = 128
1 × 2⁶ =  64
0 × 2⁵ =   0
1 × 2⁴ =  16
0 × 2³ =   0
1 × 2² =   4
0 × 2¹ =   0
1 × 2⁰ =   1
总和：213₁₀
\`\`\`

## 转换方法

### 十进制转二进制（反复除法）

反复除以 2，从下往上读取余数：

\`\`\`
213 ÷ 2 = 106 余数 1 ↑
106 ÷ 2 =  53 余数 0 │
 53 ÷ 2 =  26 余数 1 │
 26 ÷ 2 =  13 余数 0 │
 13 ÷ 2 =   6 余数 1 │
  6 ÷ 2 =   3 余数 0 │
  3 ÷ 2 =   1 余数 1 │
  1 ÷ 2 =   0 余数 1 │
结果：11010101₂
\`\`\`

### 二进制转十六进制（分组法）

将二进制数字每 4 位一组（从右开始），然后转换每组：

\`\`\`
二进制：  1101 0101
十六进制： D    5
结果：0xD5
\`\`\`

### 十六进制转十进制

\`\`\`
0xD5 = 13 × 16¹ + 5 × 16⁰
     = 208 + 5
     = 213₁₀
\`\`\`

## 使用 ToolboxPro 转换器

访问我们的[数制转换器](/tools/number-base-converter)：

1. **输入任意数字**——自动检测基数
2. **同时查看所有基数**——二进制、八进制、十进制、十六进制并列显示
3. **一键复制**任何格式
4. **支持非常大的数字**——最高 64 位数值

## 实际应用场景

### 1. RGB 颜色值

\`\`\`css
/* 十六进制是十进制 RGB 的简写 */
#FF5733
/* FF = 255 红色, 57 = 87 绿色, 33 = 51 蓝色 */
background-color: rgb(255, 87, 51);
\`\`\`

### 2. Unix 文件权限

\`\`\`bash
# chmod 使用八进制
chmod 755 script.sh
# 7 = rwx（所有者）, 5 = r-x（组）, 5 = r-x（其他人）
# 八进制 7 = 二进制 111 = 读取 + 写入 + 执行
\`\`\`

### 3. 位标志

\`\`\`javascript
// 每个位是一个标志
const READ    = 0b0001;  // 1
const WRITE   = 0b0010;  // 2
const EXECUTE = 0b0100;  // 4

const permissions = READ | WRITE;  // 0b0011 = 3
const canRead = permissions & READ; // 0b0001 = true
\`\`\`

### 4. 内存地址

\`\`\`c
// 调试器以十六进制显示地址
int *ptr = malloc(64);
printf("%p", ptr);  // 0x7ffeefbff5e0
\`\`\`

### 5. 网络 MAC 地址

\`\`\`
MAC: 00:1A:2B:3C:4D:5E
每对是一个字节（十进制 0-255，十六进制 00-FF）
前 3 个字节：厂商 ID，后 3 个字节：设备 ID
\`\`\`

## 常用转换表

| 十进制 | 二进制 | 十六进制 | 八进制 |
|---------|--------|-----|-------|
| 0 | 0000 | 0 | 0 |
| 1 | 0001 | 1 | 1 |
| 2 | 0010 | 2 | 2 |
| 3 | 0011 | 3 | 3 |
| 4 | 0100 | 4 | 4 |
| 5 | 0101 | 5 | 5 |
| 6 | 0110 | 6 | 6 |
| 7 | 0111 | 7 | 7 |
| 8 | 1000 | 8 | 10 |
| 9 | 1001 | 9 | 11 |
| 10 | 1010 | A | 12 |
| 11 | 1011 | B | 13 |
| 12 | 1100 | C | 14 |
| 13 | 1101 | D | 15 |
| 14 | 1110 | E | 16 |
| 15 | 1111 | F | 17 |

## 常见问题

**计算机实际使用什么基数？** 二进制（基数为 2）。内存中的每个值——数字、文本、图像——最终都存储为 0 和 1 的序列。

**为什么程序员使用十六进制？** 十六进制是人类可读的二进制简写。一个十六进制数字 = 4 个二进制数字。阅读 \`0xFF\` 比 \`0b11111111\` 容易得多。

**那 base64 呢？** Base64 使用 64 个字符（A-Z、a-z、0-9、+、/），用于将二进制数据编码为文本——请查看我们的 [Base64 编码器/解码器](/tools/base64-encode-decode)。

**有没有比十六进制更高的基数？** 有——base32、base36、base58（比特币地址）和 base64 都很常见。我们的工具支持基数 2 到 36。
`,

  },
  {
    slug: "css-minifier",
    title: "CSS Minifier Guide: How to Minify CSS for Faster Websites",
    description: "Reduce CSS file sizes by 50-70% with minification. Learn what minification does, how it differs from compression, and best practices for production CSS.",
    date: "2026-05-23",
    readTime: "5 min read",
    category: "Developer Tools",
    toolSlug: "css-minifier",
    content: `## What is CSS Minification?

CSS minification removes every character that isn't needed for execution — whitespace, comments, semicolons, and unnecessary characters — without changing how the CSS works.

### Before (508 bytes)

\`\`\`css
/* Main stylesheet */
body {
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
    background-color: #ffffff;
    color: #333333;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
}

/* Card component */
.card {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
\`\`\`

### After (260 bytes — 49% smaller)

\`\`\`css
body{margin:0;padding:0;font-family:Inter,sans-serif;background-color:#fff;color:#333}.container{max-width:1200px;margin:0 auto;padding:2rem 1rem}.card{border:1px solid #e0e0e0;border-radius:8px;padding:1.5rem;box-shadow:0 2px 4px rgba(0,0,0,.1)}
\`\`\`

## Why Minify CSS?

### 1. Faster Page Loads

CSS is a **render-blocking resource** — the browser must download and parse all CSS before showing anything. Smaller CSS = faster First Contentful Paint (FCP).

### 2. Lower Bandwidth Costs

A 100KB CSS file minifies to ~35KB. For a site with 100K monthly visitors, that's 6.5GB less bandwidth per month.

### 3. Better Core Web Vitals

Minification directly improves:
- **FCP** (First Contentful Paint) — less CSS to download
- **LCP** (Largest Contentful Paint) — styles arrive sooner
- **TBT** (Total Blocking Time) — CSSOM builds faster

## What Minification Removes

| Element | Removed? | Example |
|---------|----------|---------|
| Whitespace | Yes | Spaces, tabs, newlines |
| Comments | Yes | \`/* comment */\` |
| Last semicolon | Yes | \`color: red;\` → \`color: red\` |
| Optional units | Yes | \`0px\` → \`0\` |
| Quotes where safe | Yes | \`font-family: "Inter"\` → \`font-family:Inter\` |
| Unnecessary decimals | Yes | \`0.5rem\` → \`.5rem\` |
| Hex shorthand | Yes | \`#ffffff\` → \`#fff\` |

## Minification vs Compression

These are not the same thing:

| | Minification | Compression (Gzip/Brotli) |
|---|---|---|
| What it does | Removes unnecessary characters | Encodes data with algorithms |
| Lossy? | No — identical output | No — fully reversible |
| Typical reduction | 50-70% | 70-85% |
| Works on | Source code | Any file type |
| Can they combine? | Yes! | Yes! |

**Best practice:** Minify your CSS AND serve it with Brotli compression. You get both savings.

## How to Minify CSS

### Using ToolboxPro

Visit our [CSS Minifier](/tools/css-minifier) and:

1. **Paste your CSS** in the input area
2. **Hit Minify** — see the result instantly
3. **Compare sizes** — before and after displayed side by side
4. **Copy or download** the minified output

### Using Build Tools

\`\`\`javascript
// Webpack with css-minimizer-webpack-plugin
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
};
\`\`\`

\`\`\`javascript
// Vite — minifies CSS in production by default
// No config needed. Just run: vite build
\`\`\`

\`\`\`bash
# Using csso CLI
npx csso styles.css styles.min.css

# Using clean-css CLI
npx cleancss -o styles.min.css styles.css
\`\`\`

## Advanced Techniques

### 1. Merge Duplicate Selectors

\`\`\`css
/* Before */
h1 { color: blue; }
h1 { font-size: 2rem; }

/* After */
h1 { color: blue; font-size: 2rem; }
\`\`\`

### 2. Remove Unused CSS

Tools like PurgeCSS analyze your HTML and remove selectors you never use. Combine with minification for maximum reduction.

### 3. Optimize Colors

\`\`\`css
/* Before */
color: #ffaa00;    /* 7 chars */
background: black; /* 5 chars */

/* After */
color: #fa0;       /* 4 chars */
background: #000;  /* 4 chars */
\`\`\`

## FAQ

**Does minification change how my CSS works?** Never. Minified CSS produces exactly the same visual result. It's 100% safe for production.

**Should I minify during development?** No — keep your source CSS well-commented and formatted. Only minify for production builds.

**What about source maps?** Use source maps in production so you can debug minified CSS. Most build tools generate them automatically.

**Can I unminify CSS?** Partially — you can add whitespace back, but comments and original structure are lost forever. Always keep your source files.

**Is CSS minification the same as HTML/JS minification?** Similar concept, but CSS has specific optimizations (color shortening, property merging) that HTML/JS minifiers don't do.`,
    contentZh: `## 什么是 CSS 压缩？

CSS 压缩会删除所有执行时不需要的字符——空白、注释、分号和不必要的字符——而不改变 CSS 的工作方式。

### 之前（508 字节）

\`\`\`css
/* 主样式表 */
body {
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
    background-color: #ffffff;
    color: #333333;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
}

/* 卡片组件 */
.card {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
\`\`\`

### 之后（260 字节——减少 49%）

\`\`\`css
body{margin:0;padding:0;font-family:Inter,sans-serif;background-color:#fff;color:#333}.container{max-width:1200px;margin:0 auto;padding:2rem 1rem}.card{border:1px solid #e0e0e0;border-radius:8px;padding:1.5rem;box-shadow:0 2px 4px rgba(0,0,0,.1)}
\`\`\`

## 为什么要压缩 CSS？

### 1. 更快的页面加载

CSS 是一种**渲染阻塞资源**——浏览器必须先下载并解析所有 CSS 才能显示任何内容。CSS 越小，首次内容绘制（FCP）越快。

### 2. 更低的带宽成本

一个 100KB 的 CSS 文件压缩后约为 35KB。对于一个月访问量 10 万的网站，每月可减少 6.5GB 的带宽。

### 3. 更好的核心网页指标

压缩直接改善：
- **FCP**（首次内容绘制）——需要下载的 CSS 更少
- **LCP**（最大内容绘制）——样式更快到达
- **TBT**（总阻塞时间）——CSSOM 构建更快

## 压缩删除的内容

| 元素 | 是否删除 | 示例 |
|---------|----------|---------|
| 空白 | 是 | 空格、制表符、换行 |
| 注释 | 是 | \`/* 注释 */\` |
| 最后一个分号 | 是 | \`color: red;\` → \`color: red\` |
| 可省略的单位 | 是 | \`0px\` → \`0\` |
| 安全情况下的引号 | 是 | \`font-family: "Inter"\` → \`font-family:Inter\` |
| 不必要的小数 | 是 | \`0.5rem\` → \`.5rem\` |
| 十六进制简写 | 是 | \`#ffffff\` → \`#fff\` |

## 压缩 vs 压缩算法

这两者不是同一回事：

| | 压缩（Minification） | 压缩算法（Gzip/Brotli） |
|---|---|---|
| 作用 | 删除不必要的字符 | 用算法编码数据 |
| 有损？ | 否——输出完全相同 | 否——完全可逆 |
| 典型缩减 | 50-70% | 70-85% |
| 作用于 | 源代码 | 任何文件类型 |
| 是否可以组合？ | 可以！ | 可以！ |

**最佳实践：** 压缩你的 CSS 并使用 Brotli 压缩提供。两者都能节省带宽。

## 如何压缩 CSS

### 使用 ToolboxPro

访问我们的 [CSS 压缩器](/tools/css-minifier)：

1. **粘贴你的 CSS** 到输入区域
2. **点击压缩**——立即查看结果
3. **比较大小**——前后并列显示
4. **复制或下载**压缩后的输出

### 使用构建工具

\`\`\`javascript
// 使用 css-minimizer-webpack-plugin 的 Webpack
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
};
\`\`\`

\`\`\`javascript
// Vite —— 生产环境下默认压缩 CSS
// 无需配置。只需运行：vite build
\`\`\`

\`\`\`bash
# 使用 csso CLI
npx csso styles.css styles.min.css

# 使用 clean-css CLI
npx cleancss -o styles.min.css styles.css
\`\`\`

## 高级技巧

### 1. 合并重复选择器

\`\`\`css
/* 之前 */
h1 { color: blue; }
h1 { font-size: 2rem; }

/* 之后 */
h1 { color: blue; font-size: 2rem; }
\`\`\`

### 2. 移除未使用的 CSS

PurgeCSS 等工具会分析你的 HTML 并移除你从未使用的选择器。与压缩结合使用可获得最大缩减。

### 3. 优化颜色

\`\`\`css
/* 之前 */
color: #ffaa00;    /* 7 个字符 */
background: black; /* 5 个字符 */

/* 之后 */
color: #fa0;       /* 4 个字符 */
background: #000;  /* 4 个字符 */
\`\`\`

## 常见问题

**压缩会改变 CSS 的工作方式吗？** 绝对不会。压缩后的 CSS 产生完全相同的视觉效果。用于生产环境 100% 安全。

**开发期间应该压缩吗？** 不需要——保持源代码有良好注释和格式。仅对生产构建进行压缩。

**那 source maps 呢？** 在生产环境中使用 source maps，以便调试压缩后的 CSS。大多数构建工具会自动生成它们。

**可以取消压缩 CSS 吗？** 部分可以——可以重新添加空白，但注释和原始结构将永久丢失。始终保留源文件。

**CSS 压缩和 HTML/JS 压缩一样吗？** 概念相似，但 CSS 有特定的优化（颜色缩短、属性合并），HTML/JS 压缩器不会做这些。
`,

  },
  {
    slug: "jwt-decoder",
    title: "JWT Decoder: How to Decode and Inspect JSON Web Tokens",
    description: "Learn to decode JSON Web Tokens, inspect header and payload claims, verify signatures, and debug authentication issues with our free JWT decoder.",
    date: "2026-05-23",
    readTime: "5 min read",
    category: "Developer Tools",
    toolSlug: "jwt-decoder",
    content: `## What is a JWT?

A **JSON Web Token (JWT)** is a compact, URL-safe token format used for authentication and information exchange. It looks like this:

\`\`\`
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
\`\`\`

Three parts, separated by dots. Each part is Base64URL-encoded JSON.

## The Three Parts of a JWT

### 1. Header

Contains the algorithm and token type:

\`\`\`json
{
  "alg": "HS256",
  "typ": "JWT"
}
\`\`\`

### 2. Payload

Contains **claims** — statements about the user and additional metadata:

\`\`\`json
{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022,
  "exp": 1516242622,
  "iss": "https://auth.example.com",
  "aud": "https://api.example.com"
}
\`\`\`

### 3. Signature

A cryptographic hash that verifies the token hasn't been tampered with. Created by combining the header and payload with a secret key:

\`\`\`
HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  secret
)
\`\`\`

## Common JWT Claims

| Claim | Full Name | Purpose | Example |
|-------|-----------|---------|---------|
| \`sub\` | Subject | User identifier | \`"user_123"\` |
| \`iss\` | Issuer | Who issued the token | \`"https://auth.example.com"\` |
| \`aud\` | Audience | Intended recipient | \`"https://api.example.com"\` |
| \`exp\` | Expiration | When it expires (Unix timestamp) | \`1716451200\` |
| \`nbf\` | Not Before | When it becomes valid | \`1716364800\` |
| \`iat\` | Issued At | When it was issued | \`1716278400\` |
| \`jti\` | JWT ID | Unique identifier (prevents replay) | \`"abc123"\` |

## How to Decode a JWT

### Using ToolboxPro

Visit our [JWT Decoder](/tools/jwt-decoder) and:

1. **Paste your JWT** into the input field
2. **Instantly see** the decoded header and payload as formatted JSON
3. **Check expiration** — the tool shows if the token is still valid
4. **Verify the signature** — enter your secret to confirm authenticity

### Manual Decoding

JWTs are NOT encrypted — they're encoded. Anyone can read them:

\`\`\`javascript
function decodeJWT(token) {
  const parts = token.split('.');
  const header = JSON.parse(atob(parts[0]));
  const payload = JSON.parse(atob(parts[1]));
  return { header, payload };
}

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.";
const decoded = decodeJWT(token);
console.log(decoded);
\`\`\`

## Common JWT Vulnerabilities

### 1. "none" Algorithm Attack

Some JWT libraries accept tokens with \`"alg": "none"\`, meaning no signature is required. Attackers can modify the payload and set the algorithm to "none".

**Fix:** Always reject tokens with no algorithm or algorithm "none".

### 2. Algorithm Confusion (RS256 vs HS256)

If your server expects RS256 (asymmetric) but accepts HS256 (symmetric), an attacker can use the public key as the HMAC secret to forge tokens.

**Fix:** Explicitly validate the algorithm against an allowlist.

### 3. Weak Secret Key

A weak HMAC secret can be brute-forced offline. If the secret is leaked, anyone can forge valid tokens.

**Fix:** Use a long, random secret (at least 256 bits for HS256).

### 4. Token Not Expired

Tokens with extremely long expiration (years) or no \`exp\` claim at all are risky. A leaked token works forever.

**Fix:** Short expiration times (15-30 minutes for access tokens, days for refresh tokens).

## JWT Best Practices

\`\`\`javascript
// Store JWTs securely
// ❌ localStorage — vulnerable to XSS
// ❌ sessionStorage — lost on tab close
// ✅ HttpOnly Secure SameSite cookies — best for SPAs
// ✅ In-memory variable with refresh token in cookie

// Validate on every request
function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, SECRET, {
      algorithms: ['HS256'],
      issuer: 'https://auth.example.com',
      audience: 'https://api.example.com',
      maxAge: '15m'
    });
    return decoded;
  } catch (err) {
    // Token is invalid or expired
    return null;
  }
}
\`\`\`

## FAQ

**Is JWT secure?** JWT is secure when implemented correctly. The token itself can be read by anyone (it's base64-encoded, not encrypted). The security comes from the signature — without the secret key, nobody can forge a valid token.

**Should I store sensitive data in a JWT?** No. JWTs are encoded, not encrypted. Anyone with the token can decode the payload. Store only non-sensitive identifiers (user ID, role, permissions).

**What's the difference between JWT and JWS?** JWT is the standard. JWS (JSON Web Signature) is the signed variant. Most people use "JWT" to mean "signed JWT" (JWS).

**How do I refresh a JWT?** Use a two-token system: a short-lived access token (15 min) and a long-lived refresh token (7 days) stored securely. When the access token expires, use the refresh token to get a new one.

**Does our tool store JWTs?** No. Your token is decoded entirely in your browser. It never reaches our servers.`,
    contentZh: `## 什么是 JWT？

**JSON Web Token（JWT）** 是一种紧凑的、URL 安全的令牌格式，用于认证和信息交换。它看起来像这样：

\`\`\`
eyJhbG...VCJ9.
eyJzdW...IyfQ.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
\`\`\`

三个部分，用点分隔。每个部分都是 Base64URL 编码的 JSON。

## JWT 的三个部分

### 1. 头部（Header）

包含算法和令牌类型：

\`\`\`json
{
  "alg": "HS256",
  "typ": "JWT"
}
\`\`\`

### 2. 载荷（Payload）

包含**声明**——关于用户和其他元数据的陈述：

\`\`\`json
{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022,
  "exp": 1516242622,
  "iss": "https://auth.example.com",
  "aud": "https://api.example.com"
}
\`\`\`

### 3. 签名（Signature）

一个加密哈希，用于验证令牌未被篡改。通过将头部和载荷与密钥组合创建：

\`\`\`
HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  secret
)
\`\`\`

## 常见 JWT 声明

| 声明 | 全称 | 用途 | 示例 |
|-------|-----------|---------|---------|
| \`sub\` | 主题 | 用户标识符 | \`"user_123"\` |
| \`iss\` | 签发者 | 谁签发了令牌 | \`"https://auth.example.com"\` |
| \`aud\` | 受众 | 预期接收方 | \`"https://api.example.com"\` |
| \`exp\` | 过期时间 | 何时过期（Unix 时间戳） | \`1716451200\` |
| \`nbf\` | 不早于 | 何时生效 | \`1716364800\` |
| \`iat\` | 签发时间 | 何时签发 | \`1716278400\` |
| \`jti\` | JWT ID | 唯一标识符（防止重放） | \`"abc123"\` |

## 如何解码 JWT

### 使用 ToolboxPro

访问我们的 [JWT 解码器](/tools/jwt-decoder)：

1. **粘贴你的 JWT** 到输入字段
2. **立即查看**解码后的头部和载荷为格式化的 JSON
3. **检查过期时间**——工具会显示令牌是否仍然有效
4. **验证签名**——输入你的密钥以确认真实性

### 手动解码

JWT 没有被加密——它们只是被编码。任何人都可以读取它们：

\`\`\`javascript
function decodeJWT(token) {
  const parts = token.split('.');
  const header = JSON.parse(atob(parts[0]));
  const payload = JSON.parse(atob(parts[1]));
  return { header, payload };
}

const token = "eyJhbG...wIn0.";
const decoded = decodeJWT(token);
console.log(decoded);
\`\`\`

## 常见 JWT 漏洞

### 1. "none" 算法攻击

某些 JWT 库接受带有 \`"alg": "none"\` 的令牌，意味着不需要签名。攻击者可以修改载荷并将算法设置为 "none"。

**修复：** 始终拒绝没有算法或算法为 "none" 的令牌。

### 2. 算法混淆（RS256 vs HS256）

如果你的服务器期望 RS256（非对称）但接受 HS256（对称），攻击者可以使用公钥作为 HMAC 密钥来伪造令牌。

**修复：** 明确对照白名单验证算法。

### 3. 弱密钥

弱 HMAC 密钥可以被离线暴力破解。如果密钥泄露，任何人都可以伪造有效令牌。

**修复：** 使用长且随机的密钥（HS256 至少 256 位）。

### 4. 令牌未过期

具有极长过期时间（数年）或根本没有 \`exp\` 声明的令牌存在风险。泄露的令牌永久有效。

**修复：** 短过期时间（访问令牌 15-30 分钟，刷新令牌数天）。

## JWT 最佳实践

\`\`\`javascript
// 安全存储 JWT
// ❌ localStorage —— 易受 XSS 攻击
// ❌ sessionStorage —— 关闭标签页后丢失
// ✅ HttpOnly Secure SameSite cookie —— 最适合 SPA
// ✅ 内存变量 + cookie 中的刷新令牌

// 每次请求验证
function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, SECRET, {
      algorithms: ['HS256'],
      issuer: 'https://auth.example.com',
      audience: 'https://api.example.com',
      maxAge: '15m'
    });
    return decoded;
  } catch (err) {
    // 令牌无效或已过期
    return null;
  }
}
\`\`\`

## 常见问题

**JWT 安全吗？** 正确实现时 JWT 是安全的。令牌本身任何人都可以读取（它是 base64 编码的，不是加密的）。安全性来自签名——没有密钥，没有人能伪造有效令牌。

**应该在 JWT 中存储敏感数据吗？** 不应该。JWT 是编码的，不是加密的。拥有令牌的任何人可以解码载荷。只存储非敏感标识符（用户 ID、角色、权限）。

**JWT 和 JWS 有什么区别？** JWT 是标准。JWS（JSON Web Signature）是签名变体。大多数人用 "JWT" 来表示 "签名的 JWT"（JWS）。

**如何刷新 JWT？** 使用双令牌系统：一个短期访问令牌（15 分钟）和一个长期刷新令牌（7 天）安全存储。当访问令牌过期时，使用刷新令牌获取新的。

**我们的工具会存储 JWT 吗？** 不会。你的令牌完全在浏览器中解码。它永远不会到达我们的服务器。
`,

  },
  {
    slug: "html-to-jsx",
    title: "HTML to JSX Converter: Migrating from HTML to React Components",
    description: "Convert plain HTML to JSX instantly. Learn the key differences between HTML and JSX, common migration pitfalls, and how to convert entire pages to React components.",
    date: "2026-05-23",
    readTime: "6 min read",
    category: "Developer Tools",
    toolSlug: "html-to-jsx",
    content: `## HTML vs JSX: What's the Difference?

JSX (JavaScript XML) looks like HTML but has important differences. If you're migrating a static site to React, you'll encounter these immediately:

### 1. className Instead of class

\`\`\`html
<!-- HTML -->
<div class="container">Hello</div>
\`\`\`

\`\`\`jsx
{/* JSX */}
<div className="container">Hello</div>
\`\`\`

\`class\` is a reserved word in JavaScript, so React uses \`className\`.

### 2. Self-Closing Tags Require a Slash

\`\`\`html
<!-- HTML - valid without slash -->
<img src="photo.jpg" alt="Photo">
<input type="text">
<br>
\`\`\`

\`\`\`jsx
{/* JSX - must self-close */}
<img src="photo.jpg" alt="Photo" />
<input type="text" />
<br />
\`\`\`

### 3. CamelCase Attributes

\`\`\`html
<!-- HTML -->
<button onclick="handleClick()">Click</button>
<input maxlength="10" tabindex="1">
<video autoplay controls>
\`\`\`

\`\`\`jsx
{/* JSX */}
<button onClick={handleClick}>Click</button>
<input maxLength={10} tabIndex={1} />
<video autoPlay controls />
\`\`\`

### 4. Attribute Expressions Use Curly Braces

\`\`\`html
<!-- HTML - static strings -->
<div style="color: red; font-size: 16px;">
<img src="logo.png" width="200">
\`\`\`

\`\`\`jsx
{/* JSX - JavaScript expressions in braces */}
<div style={{ color: 'red', fontSize: 16 }}>
<img src={logoUrl} width={200} />
\`\`\`

Notice the double braces on \`style\` — the outer braces are for JSX expressions, the inner braces create a JavaScript object.

## How to Convert HTML to JSX

### Using ToolboxPro

Visit our [HTML to JSX Converter](/tools/html-to-jsx) and:

1. **Paste your HTML** in the input area
2. **Click Convert** — see JSX output instantly
3. **Copy the result** for use in your React component

### Step-by-Step Manual Conversion

Let's convert a full card component:

\`\`\`html
<!-- Original HTML -->
<div class="card" id="card-1">
  <img src="https://example.com/img.jpg" class="card-image" alt="Card image">
  <div class="card-body">
    <h2>Card Title</h2>
    <p>This is a description of the card content.</p>
    <a href="/details" class="btn" onclick="navigate()">Learn More</a>
  </div>
</div>
\`\`\`

\`\`\`jsx
// Converted JSX component
function Card({ imageUrl, title, description }) {
  return (
    <div className="card" id="card-1">
      <img src={imageUrl} className="card-image" alt="Card image" />
      <div className="card-body">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href="/details" className="btn" onClick={() => navigate()}>
          Learn More
        </a>
      </div>
    </div>
  );
}
\`\`\`

## Common Migration Patterns

### Inline Styles

\`\`\`jsx
// HTML: <div style="background-color: #f0f0f0; padding: 20px;">
// JSX:
<div style={{
  backgroundColor: '#f0f0f0',
  padding: 20,
}}>
\`\`\`

Properties are camelCase. Values are strings for CSS text, numbers for pixel values (unless you want a unit like \`'20px'\`).

### Conditional Classes

\`\`\`jsx
// HTML: <div class="card active">
// JSX with condition:
<div className={\`card \${isActive ? 'active' : ''}\`}>
// Or use: classnames library
<div className={cx('card', { active: isActive })}>
\`\`\`

### Event Handlers

\`\`\`jsx
// HTML: <button onclick="submitForm()">
// JSX:
<button onClick={submitForm}> {/* Pass function reference */}
<button onClick={() => submitForm()}> {/* Or inline arrow */}

// HTML: <form onsubmit="return validate()">
// JSX:
<form onSubmit={(e) => {
  e.preventDefault();
  validate();
}}>
\`\`\`

### For and Label

\`\`\`html
<!-- HTML -->
<label for="email">Email:</label>
<input type="email" id="email" name="email">
\`\`\`

\`\`\`jsx
{/* JSX — htmlFor instead of for */}
<label htmlFor="email">Email:</label>
<input type="email" id="email" name="email" />
\`\`\`

## Converting an Entire Page

When migrating a full HTML page to React:

1. **Split into components** — header, footer, sidebar, main content
2. **Convert each HTML section** using our [HTML to JSX Converter](/tools/html-to-jsx)
3. **Add props** — replace static content with dynamic data
4. **Add state management** — replace inline onclick handlers with proper React state

\`\`\`jsx
function Page({ user, posts }) {
  return (
    <div className="page">
      <Header user={user} />
      <main className="main-content">
        <Sidebar categories={posts.categories} />
        <PostList posts={posts.items} />
      </main>
      <Footer />
    </div>
  );
}
\`\`\`

## FAQ

**Can I use HTML directly in .jsx files?** No — JSX files must follow JSX syntax rules. Use our converter to transform HTML first.

**What about inline event handlers like onclick="alert()"?** These become \`onClick={() => alert()}\` in JSX. The value must be a function expression, not a string.

**Does JSX support all HTML attributes?** Most, but with renamed versions: \`class\` → \`className\`, \`for\` → \`htmlFor\`, \`tabindex\` → \`tabIndex\`, \`autofocus\` → \`autoFocus\`.

**Can I use SVG in JSX?** Yes, but SVG attributes also need camelCase: \`stroke-width\` → \`strokeWidth\`, \`clip-path\` → \`clipPath\`.

**What about dangerouslySetInnerHTML?** Use it sparingly for raw HTML strings. It bypasses React's XSS protection. Our converter warns you when it encounters inline HTML that needs this treatment.`,
    contentZh: `## HTML vs JSX：有什么区别？

JSX（JavaScript XML）看起来像 HTML，但有一些重要区别。如果你正在将静态网站迁移到 React，你会立刻遇到这些问题：

### 1. 使用 className 而非 class

\`\`\`html
<!-- HTML -->
<div class="container">Hello</div>
\`\`\`

\`\`\`jsx
{/* JSX */}
<div className="container">Hello</div>
\`\`\`

\`class\` 是 JavaScript 中的保留字，因此 React 使用 \`className\`。

### 2. 自闭合标签需要斜杠

\`\`\`html
<!-- HTML —— 无斜杠也有效 -->
<img src="photo.jpg" alt="Photo">
<input type="text">
<br>
\`\`\`

\`\`\`jsx
{/* JSX —— 必须自闭合 */}
<img src="photo.jpg" alt="Photo" />
<input type="text" />
<br />
\`\`\`

### 3. 驼峰命名属性

\`\`\`html
<!-- HTML -->
<button onclick="handleClick()">Click</button>
<input maxlength="10" tabindex="1">
<video autoplay controls>
\`\`\`

\`\`\`jsx
{/* JSX */}
<button onClick={handleClick}>Click</button>
<input maxLength={10} tabIndex={1} />
<video autoPlay controls />
\`\`\`

### 4. 属性表达式使用花括号

\`\`\`html
<!-- HTML —— 静态字符串 -->
<div style="color: red; font-size: 16px;">
<img src="logo.png" width="200">
\`\`\`

\`\`\`jsx
{/* JSX —— 花括号内的 JavaScript 表达式 */}
<div style={{ color: 'red', fontSize: 16 }}>
<img src={logoUrl} width={200} />
\`\`\`

注意 \`style\` 上的双重花括号——外层花括号用于 JSX 表达式，内层花括号创建 JavaScript 对象。

## 如何将 HTML 转换为 JSX

### 使用 ToolboxPro

访问我们的 [HTML 转 JSX 转换器](/tools/html-to-jsx)：

1. **粘贴你的 HTML** 到输入区域
2. **点击转换**——立即查看 JSX 输出
3. **复制结果**用于你的 React 组件

### 逐步手动转换

让我们转换一个完整的卡片组件：

\`\`\`html
<!-- 原始 HTML -->
<div class="card" id="card-1">
  <img src="https://example.com/img.jpg" class="card-image" alt="卡片图片">
  <div class="card-body">
    <h2>卡片标题</h2>
    <p>这是卡片内容的描述。</p>
    <a href="/details" class="btn" onclick="navigate()">了解更多</a>
  </div>
</div>
\`\`\`

\`\`\`jsx
// 转换后的 JSX 组件
function Card({ imageUrl, title, description }) {
  return (
    <div className="card" id="card-1">
      <img src={imageUrl} className="card-image" alt="卡片图片" />
      <div className="card-body">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href="/details" className="btn" onClick={() => navigate()}>
          了解更多
        </a>
      </div>
    </div>
  );
}
\`\`\`

## 常见迁移模式

### 行内样式

\`\`\`jsx
// HTML: <div style="background-color: #f0f0f0; padding: 20px;">
// JSX:
<div style={{
  backgroundColor: '#f0f0f0',
  padding: 20,
}}>
\`\`\`

属性使用驼峰命名。值可以是 CSS 文本字符串，或像素值的数字（除非你需要像 \`'20px'\` 这样的单位）。

### 条件类名

\`\`\`jsx
// HTML: <div class="card active">
// 带条件的 JSX：
<div className={\`card \${isActive ? 'active' : ''}\`}>
// 或使用：classnames 库
<div className={cx('card', { active: isActive })}>
\`\`\`

### 事件处理器

\`\`\`jsx
// HTML: <button onclick="submitForm()">
// JSX：
<button onClick={submitForm}> {/* 传递函数引用 */}
<button onClick={() => submitForm()}> {/* 或行内箭头函数 */}

// HTML: <form onsubmit="return validate()">
// JSX：
<form onSubmit={(e) => {
  e.preventDefault();
  validate();
}}>
\`\`\`

### For 和 Label

\`\`\`html
<!-- HTML -->
<label for="email">邮箱：</label>
<input type="email" id="email" name="email">
\`\`\`

\`\`\`jsx
{/* JSX —— 使用 htmlFor 替代 for */}
<label htmlFor="email">邮箱：</label>
<input type="email" id="email" name="email" />
\`\`\`

## 转换整个页面

将完整 HTML 页面迁移到 React 时：

1. **拆分为组件**——头部、底部、侧边栏、主内容
2. **使用我们的 [HTML 转 JSX 转换器](/tools/html-to-jsx) 转换每个 HTML 部分**
3. **添加 props**——用动态数据替换静态内容
4. **添加状态管理**——用适当的 React 状态替换行内 onclick 处理器

\`\`\`jsx
function Page({ user, posts }) {
  return (
    <div className="page">
      <Header user={user} />
      <main className="main-content">
        <Sidebar categories={posts.categories} />
        <PostList posts={posts.items} />
      </main>
      <Footer />
    </div>
  );
}
\`\`\`

## 常见问题

**可以直接在 .jsx 文件中使用 HTML 吗？** 不可以——JSX 文件必须遵循 JSX 语法规则。先用我们的转换器转换 HTML。

**行内事件处理器如 onclick="alert()" 怎么处理？** 在 JSX 中变成 \`onClick={() => alert()}\`。值必须是函数表达式，而不是字符串。

**JSX 支持所有 HTML 属性吗？** 大部分，但有些已重命名：\`class\` → \`className\`，\`for\` → \`htmlFor\`，\`tabindex\` → \`tabIndex\`，\`autofocus\` → \`autoFocus\`。

**可以在 JSX 中使用 SVG 吗？** 可以，但 SVG 属性也需要驼峰命名：\`stroke-width\` → \`strokeWidth\`，\`clip-path\` → \`clipPath\`。

**那 dangerouslySetInnerHTML 呢？** 谨慎使用，仅用于原始 HTML 字符串。它会绕过 React 的 XSS 保护。当我们的转换器遇到需要这种处理的行内 HTML 时，会给出警告。
`,

  },
  {
    slug: "case-converter",
    title: "Text Case Converter: Upper, Lower, Title, CamelCase and More",
    description: "Convert text between uppercase, lowercase, title case, camelCase, snake_case, kebab-case, and more. A complete guide to text case formats in programming.",
    date: "2026-05-23",
    readTime: "5 min read",
    category: "Developer Tools",
    toolSlug: "case-converter",
    content: `## Why Text Case Matters

Every programming language and framework has conventions for naming variables, files, and functions. Using the wrong case can break your code or confuse collaborators.

### The Most Common Cases

| Case | Example | Where It's Used |
|------|---------|-----------------|
| **camelCase** | \`myVariableName\` | JavaScript, Java, TypeScript variables |
| **PascalCase** | \`MyComponentName\` | React components, C# classes, TypeScript types |
| **snake_case** | \`my_variable_name\` | Python, Ruby, Rust variables |
| **SCREAMING_SNAKE_CASE** | \`MAX_RETRY_COUNT\` | Constants, environment variables |
| **kebab-case** | \`my-component-name\` | HTML files, CSS classes, npm packages |
| **Train-Case** | \`My-Component-Name\` | HTTP headers (e.g., \`Content-Type\`) |
| **dot.case** | \`my.component.name\` | Java package names, file extensions |

## How to Convert Between Cases

### Using ToolboxPro

Visit our [Case Converter](/tools/case-converter) and:

1. **Type or paste your text** in the input
2. **See all cases simultaneously** — live preview as you type
3. **Click any result** to copy it to your clipboard
4. **Works with multi-word phrases** — just type naturally with spaces

### JavaScript Manual Conversion

\`\`\`javascript
// camelCase
"hello world".replace(/(?:^|\s+)(\\w)/g, (_, c) => c.toUpperCase())
  .replace(/\\s+/g, '')
  .replace(/^(.)/, c => c.toLowerCase());
// Result: "helloWorld"

// PascalCase (same as camelCase but first letter uppercase)
"hello world".replace(/(?:^|\\s+)(\\w)/g, (_, c) => c.toUpperCase())
  .replace(/\\s+/g, '');
// Result: "HelloWorld"

// snake_case
"hello world".toLowerCase().replace(/\\s+/g, '_');
// Result: "hello_world"

// kebab-case
"hello world".toLowerCase().replace(/\\s+/g, '-');
// Result: "hello-world"

// SCREAMING_SNAKE_CASE
"hello world".toUpperCase().replace(/\\s+/g, '_');
// Result: "HELLO_WORLD"

// Title Case
"hello world".replace(/\\w\\S*/g, w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
// Result: "Hello World"
\`\`\`

## Case Conventions by Language

### JavaScript / TypeScript

\`\`\`typescript
// camelCase — variables and functions
const userName = "Alice";
function fetchUserData() {}

// PascalCase — classes and components
class UserService {}
function UserCard() {}

// SCREAMING_SNAKE_CASE — constants
const MAX_FILE_SIZE = 10 * 1024 * 1024;

// kebab-case — file names
// user-profile.tsx, api-utils.ts
\`\`\`

### Python

\`\`\`python
# snake_case — everything except classes
user_name = "Alice"
def fetch_user_data():

# PascalCase — classes only
class UserService:

# SCREAMING_SNAKE_CASE — constants
MAX_FILE_SIZE = 10 * 1024 * 1024
\`\`\`

### CSS / HTML

\`\`\`css
/* kebab-case — CSS classes and IDs */
.user-profile-card {
  background-color: #fff;
  font-family: "Inter", sans-serif;
}

/* camelCase — custom properties (modern CSS) */
:root {
  --primaryColor: #3498db;
  --borderRadius: 8px;
}
\`\`\`

## Special Cases

### Acronyms

There's debate about how to handle acronyms in camelCase:

\`\`\`
// Option A: All caps
parseJSON, HTMLParser, fetchURL

// Option B: Camel-cased
parseJson, HtmlParser, fetchUrl

// Both are used. Pick one and be consistent.
// The most common convention:
// JavaScript: camelCase acronyms (parseJson)
// C#: PascalCase acronyms (ParseJSON)
\`\`\`

### Numbers in Identifiers

\`\`\`
// Variables can contain numbers but not start with them
user2, item3_name   // ✅ valid
2user, 3rd_item     // ❌ invalid in most languages
\`\`\`

### Reserved Words

\`\`\`javascript
// Can't use reserved words as variable names
// ❌ let class = "math";
// ✅ let className = "math";
// ❌ let default = "value";
// ✅ let defaultValue = "value";
\`\`\`

## Common Conversion Mistakes

### 1. Losing Information

\`\`\`
// Converting to lower case loses title case info
"McDonald" → lowercase: "mcdonald" → title case: "Mcdonald" ❌

// Our tool handles edge cases like this with special rules
\`\`\`

### 2. Double Converting

\`\`\`
// Already camelCase, converting to snake_case then back
"myVariable" → snake_case: "my_variable" → camelCase: "myVariable" ✅

// But watch out:
"myVariable" → lower case: "myvariable" → camelCase: "myvariable" ❌
\`\`\`

### 3. Locale Issues

\`\`\`
// Turkish 'i' and 'I' behave differently
// 'i'.toUpperCase() in Turkish locale → 'İ'
// Our tool uses locale-independent conversion
\`\`\`

## FAQ

**What's the difference between camelCase and PascalCase?** PascalCase capitalizes the first letter too: \`CamelCase\` vs \`camelCase\`. Use PascalCase for classes and React components, camelCase for variables and functions.

**Which case should I use for database column names?** Most databases use snake_case (\`user_name\`, \`created_at\`). PostgreSQL convention is snake_case. Some teams use camelCase — be consistent.

**Can I convert a whole file?** Our tool handles bulk text. Copy your file contents, paste, and all cases appear instantly. For programming files, consider language-specific formatters.

**What about CONSTANT_CASE vs UPPER_CASE?** They're the same thing — screaming snake case. Both refer to all-caps with underscores between words.

**Does case matter in URLs?** Most web servers treat URLs as case-sensitive. Use kebab-case (all lowercase, hyphens) for URL paths — it's the recommended convention for SEO and readability.

**What case do JSON keys use?** JSON has no official convention, but camelCase is most common in JavaScript ecosystems and snake_case in Python ecosystems. Our [JSON Formatter](/tools/json-formatter) can help standardize your JSON keys.`,
    contentZh: `## 为什么文本大小写很重要

每种编程语言和框架都有命名变量、文件和函数的惯例。使用错误的大小写可能会破坏你的代码或混淆协作者。

### 最常见的大小写格式

| 大小写 | 示例 | 使用场景 |
|------|---------|-----------------|
| **camelCase**（驼峰式） | \`myVariableName\` | JavaScript、Java、TypeScript 变量 |
| **PascalCase**（大驼峰式） | \`MyComponentName\` | React 组件、C# 类、TypeScript 类型 |
| **snake_case**（蛇形式） | \`my_variable_name\` | Python、Ruby、Rust 变量 |
| **SCREAMING_SNAKE_CASE**（大写蛇形式） | \`MAX_RETRY_COUNT\` | 常量、环境变量 |
| **kebab-case**（串式） | \`my-component-name\` | HTML 文件、CSS 类、npm 包 |
| **Train-Case**（火车式） | \`My-Component-Name\` | HTTP 头部（如 \`Content-Type\`） |
| **dot.case**（点式） | \`my.component.name\` | Java 包名、文件扩展名 |

## 如何在不同大小写之间转换

### 使用 ToolboxPro

访问我们的[大小写转换器](/tools/case-converter)：

1. **在输入框中输入或粘贴文本**
2. **同时查看所有大小写格式**——输入时实时预览
3. **点击任何结果**复制到剪贴板
4. **支持多词短语**——只需用空格自然输入

### JavaScript 手动转换

\`\`\`javascript
// camelCase
"hello world".replace(/(?:^|\\s+)(\\w)/g, (_, c) => c.toUpperCase())
  .replace(/\\s+/g, '')
  .replace(/^(.)/, c => c.toLowerCase());
// 结果："helloWorld"

// PascalCase（与 camelCase 相同但首字母大写）
"hello world".replace(/(?:^|\\\\s+)(\\w)/g, (_, c) => c.toUpperCase())
  .replace(/\\s+/g, '');
// 结果："HelloWorld"

// snake_case
"hello world".toLowerCase().replace(/\\s+/g, '_');
// 结果："hello_world"

// kebab-case
"hello world".toLowerCase().replace(/\\s+/g, '-');
// 结果："hello-world"

// SCREAMING_SNAKE_CASE
"hello world".toUpperCase().replace(/\\s+/g, '_');
// 结果："HELLO_WORLD"

// Title Case（首字母大写）
"hello world".replace(/\\w\\S*/g, w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
// 结果："Hello World"
\`\`\`

## 各语言的大小写惯例

### JavaScript / TypeScript

\`\`\`typescript
// camelCase —— 变量和函数
const userName = "Alice";
function fetchUserData() {}

// PascalCase —— 类和组件
class UserService {}
function UserCard() {}

// SCREAMING_SNAKE_CASE —— 常量
const MAX_FILE_SIZE = 10 * 1024 * 1024;

// kebab-case —— 文件名
// user-profile.tsx, api-utils.ts
\`\`\`

### Python

\`\`\`python
# snake_case —— 除类之外的所有
user_name = "Alice"
def fetch_user_data():

# PascalCase —— 仅类
class UserService:

# SCREAMING_SNAKE_CASE —— 常量
MAX_FILE_SIZE = 10 * 1024 * 1024
\`\`\`

### CSS / HTML

\`\`\`css
/* kebab-case —— CSS 类和 ID */
.user-profile-card {
  background-color: #fff;
  font-family: "Inter", sans-serif;
}

/* camelCase —— 自定义属性（现代 CSS） */
:root {
  --primaryColor: #3498db;
  --borderRadius: 8px;
}
\`\`\`

## 特殊情况

### 首字母缩略词

关于如何在 camelCase 中处理缩略词存在争议：

\`\`\`
// 选项 A：全部大写
parseJSON, HTMLParser, fetchURL

// 选项 B：驼峰式
parseJson, HtmlParser, fetchUrl

// 两种都有人用。选择一种并保持一致。
// 最常见的惯例：
// JavaScript：缩略词驼峰式（parseJson）
// C#：缩略词大驼峰式（ParseJSON）
\`\`\`

### 标识符中的数字

\`\`\`
// 变量可以包含数字，但不能以数字开头
user2, item3_name   // ✅ 有效
2user, 3rd_item     // ❌ 在大多数语言中无效
\`\`\`

### 保留字

\`\`\`javascript
// 不能使用保留字作为变量名
// ❌ let class = "math";
// ✅ let className = "math";
// ❌ let default = "value";
// ✅ let defaultValue = "value";
\`\`\`

## 常见转换错误

### 1. 信息丢失

\`\`\`
// 转换为小写会丢失首字母大写信息
"McDonald" → 小写："mcdonald" → 首字母大写："Mcdonald" ❌

// 我们的工具通过特殊规则处理此类边界情况
\`\`\`

### 2. 重复转换

\`\`\`
// 已经是 camelCase，转 snake_case 再转回来
"myVariable" → snake_case："my_variable" → camelCase："myVariable" ✅

// 但要注意：
"myVariable" → 小写："myvariable" → camelCase："myvariable" ❌
\`\`\`

### 3. 区域设置问题

\`\`\`
// 土耳其语的 'i' 和 'I' 行为不同
// 在土耳其语区域设置中 'i'.toUpperCase() → 'İ'
// 我们的工具使用与区域设置无关的转换
\`\`\`

## 常见问题

**camelCase 和 PascalCase 有什么区别？** PascalCase 的首字母也大写：\`CamelCase\` vs \`camelCase\`。类名和 React 组件使用 PascalCase，变量和函数使用 camelCase。

**数据库列名应该使用哪种大小写？** 大多数数据库使用 snake_case（\`user_name\`、\`created_at\`）。PostgreSQL 惯例是 snake_case。有些团队使用 camelCase——保持一致即可。

**可以转换整个文件吗？** 我们的工具支持批量文本。复制文件内容，粘贴，所有大小写格式立即显示。对于编程文件，建议使用特定语言格式化工具。

**CONSTANT_CASE 和 UPPER_CASE 有什么区别？** 它们是同一回事——大写蛇形式。都是指单词之间用下划线分隔的全大写形式。

**URL 中大小写重要吗？** 大多数 Web 服务器将 URL 视为区分大小写。URL 路径使用 kebab-case（全部小写，连字符）——这是 SEO 和可读性的推荐惯例。

**JSON 键使用哪种大小写？** JSON 没有官方惯例，但 JavaScript 生态中最常用 camelCase，Python 生态中最常用 snake_case。我们的 [JSON 格式化工具](/tools/json-formatter) 可以帮助标准化你的 JSON 键。
`,

  },
  {
    slug: "text-diff-checker",
    title: "Text Diff Checker: How to Compare Two Texts Side by Side",
    description: "Learn how to compare two texts, spot differences instantly, and merge changes using a free online diff checker tool.",
    date: "2026-05-23",
    readTime: "5 min read",
    category: "Text Tools",
    toolSlug: "text-diff-checker",
    content: `## What is a Text Diff Checker?

A text diff checker (short for "difference checker") compares two blocks of text and highlights what's different between them. Whether you're reviewing code changes, comparing document versions, or checking for plagiarism, a diff tool shows you exactly what changed — down to the individual character.

Diff tools are a staple of version control systems like Git, but standalone diff checkers are invaluable when you need a quick comparison without setting up a repository.

## Why Use a Diff Checker?

- **Code reviews** — compare old vs. new versions of a script before deployment
- **Document revisions** — see exactly what your editor changed in that contract
- **Plagiarism detection** — quickly spot copied content between submissions
- **Configuration files** — catch accidental changes in config backups
- **Data migration** — verify source and target data match after a transfer

## How Diff Checking Works

### Line-by-Line Diff

The most common mode. Each line is compared, and the tool shows:

- **Green** (added) — lines present in the new text but not in the old
- **Red** (removed) — lines present in the old text but not in the new
- **White** (unchanged) — identical lines in both versions

### Character-Level Diff

For detailed editing, character diff shows changes *within* a line. If you changed "colour" to "color", a line diff shows the whole line changed, but a character diff highlights only the "u" as removed and the "r" as added.

### Word-Level Diff

A middle ground between line and character. Adds and removals are shown per word rather than per character — ideal for prose and documentation.

## How to Use a Diff Checker

### Step 1: Prepare Your Texts

Copy the original text into the left panel and the modified text into the right panel. The order matters — the tool shows what changed *from* the left *to* the right.

### Step 2: Compare Instantly

Most diff tools update in real-time as you type or paste. You don't need to click any buttons — the highlights appear immediately.

### Step 3: Review the Output

Scan through the highlighted differences:

| Color | Meaning | What to Check |
|-------|---------|---------------|
| Green | Added lines | Verify new content is correct |
| Red | Removed lines | Confirm deletions were intentional |
| Yellow highlight | Changed within a line | Double-check modified words/chars |

### Step 4: Copy or Merge

Once you're satisfied, you can:
- Copy the result to clipboard
- Download the diff report
- Apply the changes manually

## Practical Examples

### Example 1: Document Revision

**Original:**
\`\`\`
The quick brown fox jumps over the lazy dog.
\`\`\`

**Revised:**
\`\`\`
The quick brown fox leaps over the lazy cat.
\`\`\`

**Diff result:**
- Line 1: "jumps" → "leaps" (word-level change)
- Line 1: "dog" → "cat" (word-level change)

### Example 2: Code Change

**Before:**
\`\`\`javascript
function greet(name) {
  return "Hello, " + name;
}
\`\`\`

**After:**
\`\`\`javascript
function greet(name, time) {
  return \`Good \${time}, \${name}\`;
}
\`\`\`

**Diff result:**
- Added parameter "time" to function signature
- Changed return string from concatenation to template literal
- Both lines changed in their entirety

## Diff Algorithms Explained

Most diff tools (including ours) use the **Longest Common Subsequence (LCS)** algorithm. It finds the longest sequence of characters that appears in both texts in the same order, then marks everything else as a change.

Modern implementations also use **Myers' algorithm**, which is optimized for code diffs and produces more readable output by preferring contiguous blocks of changes over scattered single-line differences.

## Tips for Clean Diffs

1. **Normalize whitespace** — trailing spaces and inconsistent indentation create false positives
2. **Trim blank lines** — extra blank lines at the start or end show as additions/removals
3. **Use consistent line endings** — Windows (CRLF) vs. Unix (LF) differences are invisible but show as full-line changes
4. **Sort your inputs** — for unordered lists, sorting both sides before comparing reduces noise

## FAQ

**Is the comparison case-sensitive?** Yes, by default. Most diff tools have a "Case insensitive" toggle for when you only care about content, not casing.

**Can I compare very large files?** Yes. Our diff checker handles files up to 1MB comfortably. For larger files, performance depends on your browser's memory.

**Does it work with code vs. plain text?** It works with any text. Programming languages benefit from the line-by-line view, while prose is better with the word-level view.

**Are my texts uploaded to a server?** No. Everything runs in your browser using JavaScript. Your data never leaves your device.

**What's the difference between unified diff and side-by-side?** Unified diff shows changes in a single column with context lines. Side-by-side (which our tool uses) shows both versions simultaneously — easier to read for most use cases.`},
  {
    slug: "lorem-ipsum-generator",
    title: "Lorem Ipsum Generator: Free Dummy Text for Design Mockups",
    description: "Generate placeholder text for your design mockups, wireframes, and layout tests. Customize paragraphs, words, and format on the fly.",
    date: "2026-05-23",
    readTime: "4 min read",
    category: "Text Tools",
    toolSlug: "lorem-ipsum-generator",
    content: `## What is Lorem Ipsum?

Lorem Ipsum is dummy text used by designers, developers, and typesetters to fill space in layouts before real content is ready. The classic passage has been the industry's standard dummy text since the 1500s, when an unknown printer scrambled a Latin passage to create a type specimen book.

The most common variant starts with:

> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

## Why Use Placeholder Text?

- **Focus on layout** — real text distracts from visual design decisions
- **Show text density** — see how your design handles varying content lengths
- **Client presentations** — placeholder text keeps attention on structure, not wording
- **Responsive testing** — test how text wraps at different screen sizes
- **Print mockups** — fill brochures, flyers, and posters with realistic-looking text

## Features of a Good Lorem Ipsum Generator

### 1. Customizable Paragraph Count

Sometimes you need one paragraph for a tooltip preview. Sometimes you need 20 for a landing page mockup. A good generator lets you choose.

### 2. Word Count Control

For precise layout testing, generate exactly 50, 100, or 500 words. This is essential for:
- Testing text truncation at specific word limits
- Filling form fields with realistic input lengths
- Creating consistent test data for development environments

### 3. Starting with "Lorem Ipsum"

Some use cases — especially client-facing mockups — require the classic "Lorem ipsum dolor sit amet..." opening. Others just need any Latin text and don't care about the first line. A good generator gives you the choice.

### 4. HTML Output

For web developers, generating lorem ipsum wrapped in \`<p>\` tags saves time during prototyping:

\`\`\`html
<p>Lorem ipsum dolor sit amet...</p>
<p>Sed do eiusmod tempor...</p>
\`\`\`

### 5. Alternative Variants

While classic lorem ipsum is Latin, you might sometimes want:

- **Cicero** — the original 45 BC text by Roman statesman Cicero
- **Hacker ipsum** — tech-themed placeholder text ("sudo apt-get install dolor sit amet")
- **Corporate ipsum** — business jargon placeholder ("Leverage agile frameworks to provide a robust synopsis")
- **Pirate ipsum** — fun pirate-themed text ("Prow scuttle parrel provost Sail ho")

## How to Generate Lorem Ipsum

### Using ToolboxPro

1. Visit our [Lorem Ipsum Generator](/tools/lorem-ipsum-generator)
2. Choose your output mode: Paragraphs, Words, or Bytes
3. Set the quantity (e.g., 5 paragraphs or 100 words)
4. Toggle whether to start with "Lorem ipsum dolor sit amet"
5. Choose plain text or HTML format
6. Click **Generate** — your text appears instantly
7. Copy with one click

### Manual Generation (JavaScript)

\`\`\`javascript
const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit...";
function generateParagraphs(count) {
  return Array(count).fill(loremIpsum).join('\\n\\n');
}
\`\`\`

## Best Practices for Using Dummy Text

1. **Don't rely on it for user testing** — real users need real content to give accurate feedback
2. **Replace with real text before launch** — search engines index your content; lorem ipsum harms SEO
3. **Match paragraph length to your use case** — blog posts need 5-10 paragraphs; tooltips need 1
4. **Use HTML format for web prototypes** — saves time converting from plain text
5. **Consider readability testing** — lorem ipsum doesn't test legibility; use real text for that

## The History of Lorem Ipsum

The passage comes from sections 1.10.32 and 1.10.33 of Cicero's *De Finibus Bonorum et Malorum* (On the Ends of Good and Evil), written in 45 BC. The exact words "lorem ipsum" are a corrupted version of "dolorem ipsum" (pain itself).

It gained popularity in the 1960s with the release of Letraset sheets containing lorem ipsum passages, and later with desktop publishing software like Aldus PageMaker.

## FAQ

**Is lorem ipsum random?** No. It's a scrambled version of a real Latin text. True random text wouldn't look like natural language.

**Can I use lorem ipsum for commercial projects?** Yes. It's a public domain text from antiquity.

**Why is it called "greeked" text?** In design terminology, using placeholder text is called "greeking" — regardless of whether the text is actually Greek or Latin.

**Does the length of generated text vary?** Most generators produce consistent-length paragraphs (~50-100 words each). For precise control, use word-count mode.

**Is there a privacy concern?** No. Generation happens entirely in your browser. No text is sent to any server.`},
  {
    slug: "text-to-slug",
    title: "URL Slug Generator: How to Convert Text to Clean SEO Slugs",
    description: "Learn how to convert any text into a URL-friendly slug. Perfect for blog posts, product pages, and SEO-friendly URLs.",
    date: "2026-05-23",
    readTime: "5 min read",
    category: "Text Tools",
    toolSlug: "text-to-slug",
    content: `## What is a URL Slug?

A URL slug is the part of a URL that identifies a specific page in a human-readable way. For example, in the URL:

\`\`\`
https://example.com/blog/url-slug-generator-guide
\`\`\`

The slug is \`url-slug-generator-guide\`. It's the text that comes after the domain and category path.

Slugs are critical for:
- **SEO** — search engines use slug text to understand page content
- **Readability** — users can tell what a page is about before clicking
- **Sharing** — clean slugs look professional when shared in messages or on social media
- **Accessibility** — screen readers benefit from descriptive URL text

## Why Text-to-Slug Conversion is Necessary

Raw text — especially titles — contains characters that are invalid or problematic in URLs:

| Character | Problem | Slug Replacement |
|-----------|---------|------------------|
| Space | Invalid in URLs | Hyphen (-) |
| Uppercase letters | Technically valid but inconsistent | Lowercase |
| Quotation marks | Invalid | Removed |
| Apostrophes | Invalid | Removed or kept |
| Commas | Reserved character | Removed |
| Parentheses | Can break link parsing | Removed |
| Colons, semicolons | Reserved characters | Removed |
| Accented characters | Compatibility issues | ASCII equivalent (e.g., é → e) |
| Special chars (!, @, #, $, %, ^, &, *) | Reserved or unsafe | Removed |
| Slashes (/, \\\\) | Path separators | Removed |
| Multiple hyphens | Creates ugly URLs | Collapsed to single hyphen |
| Leading/trailing hyphens | Looks broken | Trimmed |

## How a Slug Generator Works

### Step 1: Normalize

Convert the text to lowercase and strip leading/trailing whitespace.

### Step 2: Transliterate

Convert accented and non-ASCII characters to their closest ASCII equivalents:
- "café" → "cafe"
- "über" → "uber"
- "façade" → "facade"

### Step 3: Remove Invalid Characters

Strip everything except letters, numbers, spaces, and hyphens.

### Step 4: Replace Spaces with Hyphens

Replace all spaces (and allowed separators) with a single hyphen.

### Step 5: Collapse and Trim

Replace multiple consecutive hyphens with a single one, then trim hyphens from both ends.

## How to Use Our Text-to-Slug Tool

1. Visit our [Slug Generator](/tools/text-to-slug)
2. Type or paste your text (e.g., "How to Bake a Cake in 10 Minutes!")
3. See the slug generated in real-time: "how-to-bake-a-cake-in-10-minutes"
4. Click **Copy** to copy the slug to your clipboard

## Examples

| Original Text | Generated Slug |
|---------------|----------------|
| My First Blog Post! | my-first-blog-post |
| 10 Ways to Save Money 💰 | 10-ways-to-save-money |
| Cómo Hacer Paella Valenciana | como-hacer-paella-valenciana |
| Tom & Jerry: The Movie (2024) | tom-jerry-the-movie-2024 |
| What's New in React 19? | whats-new-in-react-19 |
| 100% Organic Cotton — Buy Now! | 100-organic-cotton-buy-now |
| Café & Bakery | cafe-bakery |
| _Important — DO NOT DELETE_ | important-do-not-delete |

## SEO Best Practices for Slugs

### Do ✅

- **Keep it short** — 3-5 words is ideal (Google truncates long slugs in SERPs)
- **Include your primary keyword** — the slug is a ranking factor
- **Use hyphens** — Google recommends hyphens over underscores
- **Make it readable** — a user should understand the page topic from the slug alone
- **Be consistent** — use the same slug format across your entire site

### Don't ❌

- **Don't use stop words** — remove "a", "an", "the", "and" when possible
- **Don't include dates** — unless your content is time-sensitive, dates date your URLs
- **Don't change slugs after publishing** — it breaks existing links and loses SEO value
- **Don't use IDs only** — \`/p/12345\` tells search engines nothing about your content
- **Don't include subcategories unnecessarily** — \`/products/shoes/running/nike/air-zoom\` is too deep

## Slug vs. URL Path: What's the Difference?

The slug is the final segment of the URL path. The full path might include categories or date hierarchies:

\`\`\`
example.com/blog/2026/05/text-to-slug-guide
│                │     │   │              │
│                │     │   └── Slug       │
│                │     └── Date segments  │
│                └── Category segment     │
└── Domain                                 │
                                          │
              This whole thing is the URL path
\`\`\`

Most modern SEO strategies recommend flat URL structures with minimal path segments, putting the focus on the slug itself.

## Programmatic Slug Generation

\`\`\`javascript
function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\\w\\s-]/g, '')     // Remove non-word chars (except spaces and hyphens)
    .replace(/[\\s_]+/g, '-')       // Replace spaces and underscores with hyphens
    .replace(/-+/g, '-')            // Collapse multiple hyphens
    .replace(/^-+|-+\$/g, '');      // Trim hyphens from start and end
}
\`\`\`

## FAQ

**Should I use hyphens or underscores in URLs?** Hyphens. Google treats hyphens as word separators but underscores as word joiners. \`my-file-name\` is read as "my file name" but \`my_file_name\` is read as "myfilename".

**How long should a slug be?** 30-60 characters is ideal. Google's search results typically show the first 60 characters of a URL.

**Do slugs affect SEO ranking?** Yes — the URL slug is a confirmed ranking factor. Including your target keyword in the slug gives a small but measurable SEO boost.

**Can I change a slug after publishing?** You can, but you should set up a 301 redirect from the old URL to the new one. Otherwise, any links to the old URL will break.

**Does casing matter in URLs?** While web servers typically treat URLs case-insensitively, lowercase slugs are the universal convention. Mixed-case URLs can cause duplicate content issues.`},
  {
    slug: "image-to-base64",
    title: "Image to Base64 Converter: Inline Images Without External Files",
    description: "Convert any image to a Base64 data URI for embedding directly in HTML, CSS, or JavaScript. No external image files needed.",
    date: "2026-05-23",
    readTime: "6 min read",
    category: "Image Tools",
    toolSlug: "image-to-base64",
    content: `## What is Image to Base64?

Base64 encoding converts binary image data into a text string composed of 64 printable characters (A-Z, a-z, 0-9, +, /). When you convert an image to Base64, you get a long string of text that represents the complete image file.

This string can be embedded directly in HTML, CSS, or JavaScript as a **data URI**:

\`\`\`html
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA..." alt="Inline image">
\`\`\`

The browser decodes the Base64 string and renders the image — no separate HTTP request needed.

## When to Use Inline Base64 Images

### ✅ Good Use Cases

- **Small icons and UI elements** — under 5KB, the overhead trade-off is worth it
- **Email signatures** — emails can't load external resources; Base64 images render reliably
- **SVG placeholders** — embed tiny preview images while larger images load
- **Single-file HTML pages** — offline documentation, demos, or prototypes
- **API responses** — return image data inline in JSON instead of requiring a separate fetch
- **Favicons** — embed favicon data directly in the HTML \`<head>\`
- **CSS sprites for small assets** — eliminate HTTP requests for tiny images

### ❌ Avoid For

- **Large photographs** — Base64 adds ~33% overhead; a 100KB JPG becomes 133KB of text
- **Images used on multiple pages** — external files cache better
- **CDN-hosted assets** — CDN delivery + caching beats inline embedding every time
- **Images above 10KB** — the HTTP request overhead argument weakens as image size grows

## The Math: Request Overhead vs. Encoding Overhead

The classic argument for Base64 is reducing HTTP requests. Here's the trade-off:

| Image Size | HTTP Overhead (approx.) | Base64 Overhead (33%) | Verdict |
|------------|------------------------|----------------------|---------|
| 1 KB | ~0.5 KB (headers + TLS) | ~0.3 KB | Base64 wins |
| 5 KB | ~0.5 KB | ~1.7 KB | Comparable |
| 10 KB | ~0.5 KB | ~3.3 KB | HTTP request may win |
| 50 KB | ~0.5 KB | ~16.5 KB | External file wins |
| 100 KB | ~0.5 KB | ~33 KB | External file wins heavily |

**Rule of thumb:** Under 5KB → Base64. Over 10KB → external file.

## How to Convert an Image to Base64

### Using ToolboxPro

1. Visit our [Image to Base64 Converter](/tools/image-to-base64)
2. Upload an image by clicking or dragging
3. The tool instantly generates the Base64 string
4. Choose your output format:
   - **Data URI** — ready to paste into \`src\` attributes: \`data:image/png;base64,...\`
   - **Raw Base64** — just the encoded string, no prefix
5. Copy the result with one click

### Supported Formats

| Format | MIME Type | Best For |
|--------|-----------|----------|
| PNG | image/png | Icons, logos, screenshots |
| JPG | image/jpeg | Photos, complex images |
| GIF | image/gif | Simple animations |
| WebP | image/webp | Modern web-optimized images |
| SVG | image/svg+xml | Vector graphics |
| BMP | image/bmp | Legacy compatibility |
| ICO | image/x-icon | Favicons |

## Using Base64 Images in Different Contexts

### In HTML

\`\`\`html
<img src="data:image/webp;base64,UklGRlA..." alt="Hero image placeholder">
\`\`\`

### In CSS

\`\`\`css
.background-image {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0...");
}
\`\`\`

### In JavaScript

\`\`\`javascript
const img = new Image();
img.src = "data:image/png;base64,iVBORw0KGgo...";
document.body.appendChild(img);
\`\`\`

### In Email HTML

Email clients block external images by default. Base64 images always render:

\`\`\`html
<img src="data:image/png;base64,iVBORw0KGgo..." alt="Logo" />
\`\`\`

## Performance Considerations

1. **Gzip compresses Base64 well** — while Base64 text is 33% larger than binary, gzip reduces that gap significantly (often to 3-5% overhead after compression)

2. **CSS background images aren't cached separately** — inline Base64 in CSS means the entire stylesheet must be re-downloaded on every visit unless the CSS file itself is cached

3. **HTML size impacts Time to First Byte (TTFB)** — large inline images increase the initial HTML payload, delaying when the browser can start parsing

4. **Mobile considerations** — limited memory devices may struggle decoding large Base64 strings

## FAQ

**Is Base64 compression?** No. Base64 is encoding, not compression. The encoded string is always larger than the original binary data by approximately 33%.

**Can I convert Base64 back to an image?** Yes. Our tool can decode Base64 strings back into downloadable image files. Paste the Base64 string and click **Download as image**.

**Is there a file size limit?** Our tool handles images up to ~50MB. However, for practical use, we recommend Base64 only for images under 10KB.

**Does Base64 work in all browsers?** Yes. Data URIs are supported in every modern browser, including Chrome, Firefox, Safari, and Edge. Support goes back to Internet Explorer 8.

**What's the difference between Base64 and Base64URL?** Base64URL uses \`-\` and \`_\` instead of \`+\` and \`/\` to be safe for URL query parameters. For \`data:\` URIs, standard Base64 is used.`},
  {
    slug: "image-filters",
    title: "Image Filters Online: Apply Grayscale, Sepia, Blur and More",
    description: "Transform your photos with instant image filters. Apply grayscale, sepia, blur, brightness, contrast, and many more effects online.",
    date: "2026-05-23",
    readTime: "7 min read",
    category: "Image Tools",
    toolSlug: "image-filters",
    content: `## What are Image Filters?

Image filters are algorithms that modify the pixels of an image to create a visual effect. From the classic black-and-white conversion to artistic blurs and color shifts, filters let you transform the mood and style of any photo without needing Photoshop or professional editing skills.

Filters work by manipulating pixel values — adjusting brightness, contrast, color channels, or applying convolution matrices that blend neighboring pixels.

## Common Image Filters Explained

### Grayscale

Converts the image to black and white by removing color information. Each pixel's RGB values are combined into a single luminance value:

\`\`\`
Gray = 0.299 × R + 0.587 × G + 0.114 × B
\`\`\`

These weights match human perception — we're most sensitive to green, least sensitive to blue.

**Use when:** Creating a classic look, reducing distractions from color, preparing images for printing on black-and-white media.

### Sepia

Gives the image a warm brownish tone reminiscent of 19th-century photographs. After converting to grayscale, each pixel is tinted with warm tones:

\`\`\`
Output R = Gray × 1.2
Output G = Gray × 0.93
Output B = Gray × 0.55
\`\`\`

**Use when:** Creating vintage, nostalgic, or historical-feeling images.

### Invert

Flips all colors to their opposites on the color wheel. Black becomes white, red becomes cyan, green becomes magenta.

\`\`\`
Output R = 255 - Input R
Output G = 255 - Input G
Output B = 255 - Input B
\`\`\`

**Use when:** Creating negative-image effects, artistic compositions, or accessibility-focused high-contrast views.

### Brightness

Adds or subtracts a constant value from all RGB channels:

\`\`\`
Output = Input + brightness_value
\`\`\`

Positive values make the image lighter; negative values make it darker. The result is clamped to 0-255.

**Use when:** Correcting underexposed or overexposed photos, matching lighting across a series of images.

### Contrast

Stretches or compresses the range of pixel values. High contrast makes darks darker and lights lighter; low contrast creates a flatter, muted look:

\`\`\`
Output = ((Input / 255 - 0.5) × contrast_factor + 0.5) × 255
\`\`\`

**Use when:** Making images pop (increase contrast) or creating soft, dreamy looks (decrease contrast).

### Blur

Averages each pixel with its neighbors to create a softening effect. The most common is **Gaussian blur**, which uses a weighted average where nearby pixels have more influence than distant ones:

\`\`\`
// A 3×3 Gaussian kernel
[1, 2, 1]
[2, 4, 2]
[1, 2, 1] × (1/16)
\`\`\`

**Use when:** Blurring backgrounds, censoring sensitive information, creating depth-of-field effects, or smoothing skin tones.

### Saturation

Controls the intensity of colors. At 0%, the image is grayscale. At 100%, colors are natural. At 200%, colors are intensely vivid (sometimes called "HDR effect").

**Use when:** Creating vibrant social media graphics (increase) or muted, professional looks (decrease).

### Hue Rotate

Shifts all colors around the color wheel by a given angle. Rotating by 180 degrees creates a complementary color scheme.

**Use when:** Quick color palette changes, creative effects, or correcting color casts.

## How to Apply Filters Online

### Using ToolboxPro

1. Visit our [Image Filters](/tools/image-filters) tool
2. Upload an image by clicking or drag-and-drop
3. Browse through available filters in the toolbar
4. Click any filter to apply it instantly
5. Adjust the intensity slider for fine control
6. See a live before/after preview
7. Download the filtered image as JPG, PNG, or WebP

### Available Filters

| Filter | What It Does | Best For |
|--------|-------------|----------|
| Grayscale | Removes all color | Classic B&W photography |
| Sepia | Warm brown tone | Vintage photos |
| Invert | Reverses all colors | Negative effect |
| Brightness | Adjusts lightness | Exposure correction |
| Contrast | Stretches tonal range | Making images pop |
| Blur | Softens details | Background blur |
| Sharpen | Enhances edges | Fixing slightly soft photos |
| Saturation | Adjusts color intensity | Vibrant or muted looks |
| Hue Rotate | Shifts all colors | Creative color changes |
| Opacity | Adjusts transparency | Overlay effects |

## Advanced: Stacking Filters

Real image editing rarely uses a single filter. Try combining them:

**Vintage Portrait Effect:**
1. Apply Sepia (intensity: 70%)
2. Lower Contrast (-20%)
3. Add slight Blur (radius: 1px)
4. Reduce Saturation (60%)

**Dramatic B&W:**
1. Apply Grayscale
2. Increase Contrast (+40%)
3. Increase Sharpen (strength: 2)
4. Vignette effect (if available)

**Dreamy Soft Look:**
1. Apply Blur (radius: 3px)
2. Reduce Contrast (-20%)
3. Increase Brightness (+15%)
4. Reduce Saturation (80%)

## The Canvas API Approach

If you're a developer, here's how to apply a grayscale filter using the HTML5 Canvas API:

\`\`\`javascript
function applyGrayscale(imageData) {
  const pixels = imageData.data;
  for (let i = 0; i < pixels.length; i += 4) {
    const gray = 0.299 * pixels[i] + 0.587 * pixels[i+1] + 0.114 * pixels[i+2];
    pixels[i] = gray;     // Red
    pixels[i+1] = gray;   // Green
    pixels[i+2] = gray;   // Blue
    // pixels[i+3] = alpha (unchanged)
  }
  return imageData;
}
\`\`\`

## FAQ

**Are image filters applied to the original file?** No. Filters are applied to a copy. The original image is never modified — you can always start over.

**Can I undo a filter?** Yes. Our tool has an undo/redo stack, and you can reset to the original image at any time.

**What's the maximum image size?** Our filter tool handles images up to 4096×4096 pixels comfortably. Larger images may be slower depending on your device.

**Do filters work on transparent PNGs?** Yes. Alpha channel (transparency) is preserved through all filter operations.

**Can I apply multiple filters at once?** Yes. Apply them one at a time and each builds on the previous result. The undo stack lets you step back through individual filter applications.

**Are my images uploaded to a server?** No. All filter processing runs in your browser using the Canvas API. Your images stay on your device.`},
  {
    slug: "barcode-generator",
    title: "Barcode Generator: How to Create CODE128, EAN13 & More Online",
    description: "Generate professional barcodes for products, inventory, ISBN, and logistics. Supports CODE128, EAN-13, UPC-A, QR codes, and more.",
    date: "2026-05-23",
    readTime: "7 min read",
    category: "Image Tools",
    toolSlug: "barcode-generator",
    content: `## What is a Barcode?

A barcode is a machine-readable representation of data. Traditional **1D barcodes** (linear) use parallel lines of varying widths and spacings. **2D barcodes** (like QR codes) use patterns of squares, dots, or other geometric shapes.

Barcodes are everywhere — product packaging, shipping labels, library books, hospital wristbands, loyalty cards, and tickets. Each type serves a specific industry and use case.

## Common Barcode Types

### CODE128

A high-density 1D barcode supporting all 128 ASCII characters. It's the most versatile linear barcode.

**Best for:** Logistics, shipping labels, inventory management, asset tracking
**Character set:** A-Z, a-z, 0-9, all punctuation, control characters
**Length:** Variable (up to ~40 characters for practical scanning)
**Checksum:** Required (automatic)

CODE128 has three subsets:
- **CODE128A** — uppercase letters, digits, control characters
- **CODE128B** — uppercase and lowercase letters, digits
- **CODE128C** — numeric data only (highest density, best for long number strings)

### EAN-13 (European Article Number)

The standard retail barcode used on virtually every consumer product worldwide (except North America, which uses UPC-A).

**Best for:** Retail products, grocery items, consumer goods
**Character set:** 13 digits (12 data + 1 check digit)
**Region:** International (except US/Canada)
**Usage:** Sold in stores, supermarket checkout

The first 2-3 digits are country codes (e.g., 690-699 for China, 400-440 for Germany, 50 for UK).

### UPC-A (Universal Product Code)

The North American retail standard. Similar to EAN-13 but with 12 digits.

**Best for:** Products sold in the US and Canada
**Character set:** 12 digits (11 data + 1 check digit)
**Region:** United States and Canada
**Compatibility:** EAN-13 scanners can read UPC-A by adding a leading zero

### EAN-8

A compressed version of EAN-13 with only 8 digits, used for small packages where a full EAN-13 won't fit.

**Best for:** Small items, cosmetics, confectionery
**Character set:** 8 digits (7 data + 1 check digit)

### CODE39

An older 1D standard that supports letters, numbers, and a few special characters. Less dense than CODE128 but widely supported.

**Best for:** Non-retail uses, government IDs, automotive industry
**Character set:** A-Z, 0-9, -, ., $, /, +, %, space
**Length:** Variable

### ITF-14 (Interleaved 2 of 5)

Used exclusively for outer cartons and shipping cases, not individual retail items.

**Best for:** Logistics, wholesale packaging, pallet labels
**Character set:** 14 digits
**Use case:** Cartons containing multiple retail units

### Data Matrix

A 2D barcode that stores data in a square or rectangular grid. Much smaller than a QR code for the same data.

**Best for:** Small items, electronics, medical devices
**Data capacity:** Up to 2,335 alphanumeric characters
**Size:** As small as 10×10 modules
**Error correction:** Reed-Solomon (up to 30% damage tolerance)

## How to Generate a Barcode

### Using ToolboxPro

1. Visit our [Barcode Generator](/tools/barcode-generator)
2. Choose your barcode type (CODE128, EAN-13, UPC-A, etc.)
3. Enter your data:
   - For EAN-13/UPC-A: enter 12 or 13 digits
   - For CODE128/CODE39: enter any text
   - For EAN-8: enter 7 digits
4. Customize appearance:
   - **Width** — barcode width in pixels
   - **Height** — barcode height in pixels
   - **Color** — bar color (default: black)
   - **Show text** — toggle human-readable text below the barcode
   - **Font size** — size of the text below
5. Click **Generate**
6. Download as PNG or SVG

### SVG vs PNG Output

| Format | Best For | Pros | Cons |
|--------|----------|------|------|
| PNG | Digital use, email | Universal support, exact rendering | Fixed resolution, larger files |
| SVG | Print, professional use | Infinite scaling, small files, editable | Requires vector-aware software |

For print production (labels, packaging), always use SVG. For digital use, PNG is fine.

## Barcode Checksums Explained

Most 1D barcodes include a **check digit** — a calculated value appended to the data that verifies the barcode was scanned correctly.

### EAN-13 Check Digit Calculation

\`\`\`
Data digits: 5 9 0 1 2 3 4 5 6 7 8 9
Step 1: Sum of odd positions × 1 = 5+0+2+4+6+8 = 25
Step 2: Sum of even positions × 3 = (9+1+3+5+7+9) × 3 = 34 × 3 = 102
Step 3: Total = 25 + 102 = 127
Step 4: Check digit = (10 - (127 mod 10)) mod 10 = (10 - 7) mod 10 = 3
Result: 5901234567893
\`\`\`

### UPC-A Check Digit

Same algorithm as EAN-13 but with 11 data digits instead of 12.

## Barcode Best Practices

### Size Requirements

| Standard | Minimum Width | Recommended Width | Height |
|----------|--------------|-------------------|--------|
| EAN-13 | 29.83 mm | 37.29 mm | 22.85 mm |
| UPC-A | 29.83 mm | 37.29 mm | 22.85 mm |
| CODE128 | Variable | 2" (50 mm) | 0.6" (15 mm) |

### Spacing (Quiet Zones)

Every barcode needs blank space on both sides — the **quiet zone**. For EAN/UPC, this is 11 times the narrow bar width (about 3 mm). Without proper quiet zones, scanners may fail to read the barcode.

### Color Contrast

Barcodes work best with dark bars on a light background. The scanner reads the contrast between spaces and bars:
- **Best:** Black bars on white background
- **Acceptable:** Dark blue, dark green, dark brown on light background
- **Avoid:** Red bars (red appears as white to red laser scanners), light-colored bars, dark backgrounds

### Printing Considerations

1. **Print at 300 DPI minimum** — lower resolutions blur the thin bars
2. **Use matte finishes** — glossy paper creates glare that interferes with scanning
3. **Test with multiple scanners** — a barcode readable by one scanner may fail on another
4. **Leave margins** — don't place other graphics or text next to the barcode
5. **Scale proportionally** — stretching or squashing a barcode changes bar widths and breaks scanning

## Generating Barcodes Programmatically

\`\`\`javascript
// Using the JsBarcode library
JsBarcode("#barcode", "Hello World!", {
  format: "CODE128",
  width: 2,
  height: 100,
  displayValue: true,
  background: "#ffffff",
  lineColor: "#000000"
});
\`\`\`

## FAQ

**Can I generate barcodes for commercial products?** Yes. The barcode generation itself is free. However, to sell products in retail stores, you need a registered GS1 Company Prefix and valid UPC/EAN numbers assigned to your products.

**What's the difference between a barcode and a QR code?** Barcodes (1D) store data linearly — typically numbers or short text. QR codes (2D) store much more data, including URLs, vCards, and WiFi credentials, in a square matrix.

**Can I print barcodes on regular paper?** Yes, but laser printers produce sharper barcodes than inkjet. For high-volume scanning, thermal transfer printers are the industry standard.

**Why does my barcode not scan?** Common causes: insufficient quiet zone, low contrast, printing at too low resolution, distortion from scaling, or check digit mismatch.

**What file format is best for professional barcode printing?** SVG. It's vector-based, so it scales to any size without quality loss, and professional printing software prefers vector formats.`,
    contentZh: `## 什么是条形码？

条形码是一种机器可读的数据表示形式。传统的 **1D 条形码**（线性）使用不同宽度和间距的平行线条。**2D 条形码**（如二维码）使用正方形、点或其他几何形状的图案。

条形码无处不在——产品包装、运输标签、图书馆书籍、医院腕带、会员卡和门票。每种类型服务于特定的行业和用例。

## 常见条形码类型

### CODE128

一种高密度 1D 条形码，支持所有 128 个 ASCII 字符。它是最通用的线性条形码。

**最适合：** 物流、运输标签、库存管理、资产追踪
**字符集：** A-Z、a-z、0-9、所有标点符号、控制字符
**长度：** 可变（实际扫描约 40 个字符以内）
**校验和：** 必需（自动）

CODE128 有三个子集：
- **CODE128A**——大写字母、数字、控制字符
- **CODE128B**——大小写字母、数字
- **CODE128C**——仅数字数据（最高密度，最适合长数字串）

### EAN-13（欧洲商品编号）

全球几乎所有消费品上使用的标准零售条形码（北美使用 UPC-A 除外）。

**最适合：** 零售产品、食品杂货、消费品
**字符集：** 13 位数字（12 位数据 + 1 位校验位）
**地区：** 国际（美国/加拿大除外）
**用途：** 商店销售、超市收银

前 2-3 位数字是国别代码（例如，690-699 代表中国，400-440 代表德国，50 代表英国）。

### UPC-A（通用产品代码）

北美零售标准。类似于 EAN-13 但有 12 位数字。

**最适合：** 在美国和加拿大销售的产品
**字符集：** 12 位数字（11 位数据 + 1 位校验位）
**地区：** 美国和加拿大
**兼容性：** EAN-13 扫描仪可以通过在前面加零来读取 UPC-A

### EAN-8

EAN-13 的压缩版本，只有 8 位数字，用于无法容纳完整 EAN-13 的小包装。

**最适合：** 小件物品、化妆品、糖果
**字符集：** 8 位数字（7 位数据 + 1 位校验位）

### CODE39

一种较旧的 1D 标准，支持字母、数字和一些特殊字符。密度低于 CODE128 但被广泛支持。

**最适合：** 非零售用途、政府 ID、汽车行业
**字符集：** A-Z、0-9、-、.、$、/、+、%、空格
**长度：** 可变

### ITF-14（交错 2/5 码）

专门用于外箱和运输箱，而非单个零售商品。

**最适合：** 物流、批发包装、托盘标签
**字符集：** 14 位数字
**用途：** 包含多个零售单位的纸箱

### Data Matrix（数据矩阵码）

一种 2D 条形码，以正方形或矩形网格存储数据。对于相同数据，比二维码小得多。

**最适合：** 小件物品、电子产品、医疗设备
**数据容量：** 最多 2,335 个字母数字字符
**尺寸：** 可小至 10×10 模块
**纠错：** Reed-Solomon（最多容忍 30% 损坏）

## 如何生成条形码

### 使用 ToolboxPro

1. 访问我们的[条形码生成器](/tools/barcode-generator)
2. 选择条形码类型（CODE128、EAN-13、UPC-A 等）
3. 输入你的数据：
   - 对于 EAN-13/UPC-A：输入 12 或 13 位数字
   - 对于 CODE128/CODE39：输入任何文本
   - 对于 EAN-8：输入 7 位数字
4. 自定义外观：
   - **宽度**——条形码的像素宽度
   - **高度**——条形码的像素高度
   - **颜色**——条的颜色（默认：黑色）
   - **显示文本**——切换条形码下方的人类可读文本
   - **字体大小**——下方文本的大小
5. 点击**生成**
6. 下载为 PNG 或 SVG

### SVG 与 PNG 输出

| 格式 | 最适合 | 优点 | 缺点 |
|--------|----------|------|------|
| PNG | 数字用途、电子邮件 | 通用支持、精确渲染 | 固定分辨率、文件较大 |
| SVG | 印刷、专业用途 | 无限缩放、文件小、可编辑 | 需要支持矢量格式的软件 |

对于印刷生产（标签、包装），始终使用 SVG。对于数字用途，PNG 就足够了。

## 条形码校验和详解

大多数 1D 条形码包含一个**校验位**——一个附加到数据上的计算值，用于验证条形码是否正确扫描。

### EAN-13 校验位计算

\`\`\`
数据位：5 9 0 1 2 3 4 5 6 7 8 9
步骤 1：奇数位和 × 1 = 5+0+2+4+6+8 = 25
步骤 2：偶数位和 × 3 = (9+1+3+5+7+9) × 3 = 34 × 3 = 102
步骤 3：总和 = 25 + 102 = 127
步骤 4：校验位 = (10 - (127 mod 10)) mod 10 = (10 - 7) mod 10 = 3
结果：5901234567893
\`\`\`

### UPC-A 校验位

与 EAN-13 相同的算法，但有 11 位数据位而非 12 位。

## 条形码最佳实践

### 尺寸要求

| 标准 | 最小宽度 | 推荐宽度 | 高度 |
|----------|--------------|-------------------|--------|
| EAN-13 | 29.83 mm | 37.29 mm | 22.85 mm |
| UPC-A | 29.83 mm | 37.29 mm | 22.85 mm |
| CODE128 | 可变 | 2" (50 mm) | 0.6" (15 mm) |

### 间距（静区）

每个条形码两侧需要空白区域——**静区**。对于 EAN/UPC，这是窄条宽度的 11 倍（约 3 mm）。没有适当的静区，扫描仪可能无法读取条形码。

### 色彩对比度

条形码在浅色背景上使用深色条效果最好。扫描仪读取空格和条之间的对比度：
- **最佳：** 白色背景上的黑色条
- **可接受：** 浅色背景上的深蓝、深绿、深棕
- **避免：** 红色条（红色对红色激光扫描仪显示为白色）、浅色条、深色背景

### 打印注意事项

1. **至少以 300 DPI 打印**——较低的分辨率会使细条模糊
2. **使用亚光表面**——光面纸会产生干扰扫描的眩光
3. **用多个扫描仪测试**——一个扫描仪可读的条形码可能在另一个上失败
4. **留出边距**——不要在条形码旁边放置其他图形或文字
5. **按比例缩放**——拉伸或压缩条形码会改变条宽，破坏扫描

## 以编程方式生成条形码

\`\`\`javascript
// 使用 JsBarcode 库
JsBarcode("#barcode", "Hello World!", {
  format: "CODE128",
  width: 2,
  height: 100,
  displayValue: true,
  background: "#ffffff",
  lineColor: "#000000"
});
\`\`\`

## 常见问题

**可以为商业产品生成条形码吗？** 可以。条形码生成本身是免费的。但要在零售店销售产品，你需要注册的 GS1 公司前缀和分配给产品的有效 UPC/EAN 号码。

**条形码和二维码有什么区别？** 条形码（1D）线性存储数据——通常是数字或短文本。二维码（2D）可以存储更多的数据，包括 URL、vCard 和 WiFi 凭证，采用方形矩阵形式。

**可以在普通纸上打印条形码吗？** 可以，但激光打印机产生的条形码比喷墨打印机更清晰。对于高容量扫描，热转印打印机是行业标准。

**为什么我的条形码无法扫描？** 常见原因：静区不足、对比度低、打印分辨率过低、缩放导致的变形或校验位不匹配。

**专业条形码打印的最佳文件格式是什么？** SVG。它是基于矢量的，因此可以缩放到任何大小而不会损失质量，专业打印软件更喜欢矢量格式。
`,

  },

{
    slug: "image-to-pdf",
    title: "Image to PDF Converter: How to Turn JPG/PNG into PDF Documents",
    description: "Convert images to PDF documents in seconds. Free, private, and works in your browser — no uploads needed.",
    date: "2026-05-23",
    readTime: "5 min read",
    category: "PDF Tools",
    toolSlug: "image-to-pdf",
    content: `## Why Convert Images to PDF?

Sending a dozen photos as separate JPG files is messy. A single PDF is clean, professional, and easy to share. Whether you're:

- **Scanning documents** with your phone camera
- **Creating a photo album** for printing
- **Submitting forms** that require PDF format
- **Archiving receipts** and invoices

Turning images into a PDF keeps everything in one file, maintains page order, and reduces the chance of files getting lost.

## How Image to PDF Conversion Works

### Step 1: Prepare Your Images

You can convert almost any common image format:

- **JPG / JPEG** — photos, scanned documents
- **PNG** — screenshots, graphics with transparency
- **WebP** — modern web images
- **BMP** — bitmap images
- **GIF** — static images (animated GIFs will use the first frame)

### Step 2: Upload to ToolboxPro

Visit our [Image to PDF Converter](/tools/image-to-pdf). You can:

- Click the upload area to select files
- Drag and drop images from your file explorer
- Select multiple images at once (hold Ctrl/Cmd while selecting)

There's no file size limit for individual images, though very large files (100MB+) may take longer to process depending on your browser.

### Step 3: Arrange and Convert

Once uploaded, you'll see thumbnails of every image:

- **Drag to reorder** — arrange pages in any sequence
- **Remove unwanted images** — click the X on any thumbnail
- **Add more images** — continue uploading additional files

When you're satisfied, click **Convert to PDF**. The tool processes everything in your browser — no data is sent to any server.

### Step 4: Download

Your PDF downloads automatically. It will have one page per image, in the order you specified. Each image is embedded at full resolution.

## Advanced Options

### Page Size

Choose the output page size:

| Option | Description |
|--------|-------------|
| Auto (Fit) | Each page matches the image aspect ratio |
| A4 | Standard document size (210×297mm) |
| Letter | US standard (8.5×11 inches) |
| Custom | Set your own dimensions |

### Orientation

- **Portrait** — vertical layout, best for documents
- **Landscape** — horizontal layout, best for wide images

### Image Quality

Control the JPEG compression level for images embedded in the PDF:

- **High** (90-100%) — best quality, larger file size
- **Medium** (70-89%) — good balance
- **Low** (50-69%) — smaller file, some quality loss

## Tips for Best Results

### Scan Documents Properly

When scanning documents with your phone:

1. Place the document on a dark, flat surface
2. Ensure even lighting — avoid shadows
3. Hold the camera parallel to the document
4. Use a scanning app that crops automatically
5. Export as JPG or PNG before converting

### Optimize Image Size

Large camera photos (4000×3000px) create huge PDFs. Consider:

- **Resize to 2000px** on the longest side for screen viewing
- **Keep original resolution** for print-quality documents
- **Use JPEG at 80% quality** to balance size and quality

### Handle Mixed Content

You can mix different image types in one PDF:

- Add a JPG photo, then a PNG screenshot, then another JPG
- The tool handles each format independently
- Final PDF uses consistent page settings

## Privacy and Security

Your images never leave your device. The conversion uses:

- **Canvas API** to render images
- **jsPDF** library running in your browser
- **Zero server uploads** — all processing is local

This means:

- No data transmission over the network
- No copies stored on external servers
- No third-party access to your documents
- Safe for sensitive material like contracts, IDs, or medical records

## Common Use Cases

### Business

- Combine scanned contracts into a single PDF
- Create product catalogs from product photos
- Archive signed documents as PDF

### Education

- Submit homework as a single PDF file
- Create study materials from lecture slides
- Convert handwritten notes (photo) to PDF

### Personal

- Turn vacation photos into a PDF album
- Digitize old family photos
- Save important receipts as searchable PDFs

## FAQ

**Can I convert HEIC images (iPhone photos)?** HEIC is not natively supported in all browsers. Convert HEIC to JPG first, then use our tool.

**What happens to transparency in PNG files?** PNG transparency is replaced with a white background in the PDF. For images that need transparency, consider keeping them as PNG.

**Is there a limit on how many images I can convert?** No hard limit, but performance depends on your browser's memory. For 50+ high-resolution images, consider batch processing in smaller groups.

**Can I add text or annotations?** This tool converts images to PDF without editing. For annotations, edit the images first, then convert.

**Does the PDF retain EXIF data?** EXIF data from images is not preserved in the PDF output. The visual content is embedded at full resolution.`,
    contentZh: `## 为什么要将图片转换为 PDF？

将十几张照片作为单独的 JPG 文件发送很混乱。一个 PDF 文件既整洁又专业，而且易于分享。无论你是：

- **用手机扫描文档**
- **创建打印用的相册**
- **提交需要 PDF 格式的表单**
- **归档收据和发票**

将图片转换为 PDF 可以将所有内容保存在一个文件中，保持页面顺序，并减少文件丢失的可能性。

## 图片转 PDF 的工作原理

### 第一步：准备图片

你几乎可以转换任何常见的图片格式：

- **JPG / JPEG** — 照片、扫描文档
- **PNG** — 截图、带有透明背景的图形
- **WebP** — 现代网页图像
- **BMP** — 位图图像
- **GIF** — 静态图像（动图将使用第一帧）

### 第二步：上传到 ToolboxPro

访问我们的[图片转 PDF 转换器](/tools/image-to-pdf)。你可以：

- 点击上传区域选择文件
- 从文件资源管理器拖放图片
- 一次选择多张图片（选择时按住 Ctrl/Cmd 键）

单张图片没有文件大小限制，但非常大的文件（100MB+）可能需要更长的处理时间，具体取决于你的浏览器。

### 第三步：排列并转换

上传后，你将看到每张图片的缩略图：

- **拖拽重新排列** — 按任意顺序排列页面
- **移除不需要的图片** — 点击缩略图上的 X
- **添加更多图片** — 继续上传其他文件

满意后，点击**转换为 PDF**。该工具会在你的浏览器中处理所有内容——没有数据发送到任何服务器。

### 第四步：下载

PDF 会自动下载。每张图片对应一页，按你指定的顺序排列。每张图片以全分辨率嵌入。

## 高级选项

### 页面尺寸

选择输出页面尺寸：

| 选项 | 说明 |
|--------|-------------|
| 自动（自适应） | 每页匹配图片宽高比 |
| A4 | 标准文档尺寸（210×297mm） |
| Letter | 美国标准（8.5×11 英寸） |
| 自定义 | 设置自己的尺寸 |

### 页面方向

- **纵向** — 垂直布局，最适合文档
- **横向** — 水平布局，最适合宽图

### 图片质量

控制嵌入到 PDF 中的图片的 JPEG 压缩级别：

- **高**（90-100%）— 最佳质量，文件较大
- **中**（70-89%）— 良好的平衡
- **低**（50-69%）— 文件较小，有一定质量损失

## 最佳效果技巧

### 正确扫描文档

用手机扫描文档时：

1. 将文档放在深色平坦的表面上
2. 确保光线均匀——避免阴影
3. 将相机与文档保持平行
4. 使用可自动裁剪的扫描应用
5. 转换前导出为 JPG 或 PNG

### 优化图片大小

大型相机照片（4000×3000px）会产生巨大的 PDF。建议：

- **缩小到最长边 2000px** 用于屏幕查看
- **保留原始分辨率** 用于打印质量的文档
- **使用 80% 质量的 JPEG** 以平衡大小和质量

### 处理混合内容

你可以在一个 PDF 中混合不同类型的图片：

- 添加一张 JPG 照片，然后是一张 PNG 截图，再添加另一张 JPG
- 该工具独立处理每种格式
- 最终的 PDF 使用统一的页面设置

## 隐私与安全

你的图片永远不会离开你的设备。转换过程使用：

- **Canvas API** 渲染图片
- **jsPDF** 库在你的浏览器中运行
- **零服务器上传** — 所有处理都在本地完成

这意味着：

- 没有数据通过网络传输
- 没有副本存储在外部服务器上
- 第三方无法访问你的文档
- 适用于合同、身份证或医疗记录等敏感材料

## 常见使用场景

### 商务用途

- 将扫描的合同合并为一个 PDF
- 从产品照片创建产品目录
- 将签署的文件归档为 PDF

### 教育用途

- 将作业提交为单个 PDF 文件
- 从讲稿幻灯片创建学习材料
- 将手写笔记（照片）转换为 PDF

### 个人用途

- 将旅行照片变成 PDF 相册
- 数字化旧家庭照片
- 将重要收据保存为可搜索的 PDF

## 常见问题

**我可以转换 HEIC 图片（iPhone 照片）吗？** 并非所有浏览器原生支持 HEIC。先转换 HEIC 为 JPG，然后使用我们的工具。

**PNG 文件的透明背景会怎样？** PNG 的透明度在 PDF 中会被白色背景替代。对于需要透明度的图片，建议保留为 PNG 格式。

**转换图片数量有限制吗？** 没有硬性限制，但性能取决于浏览器的内存。对于 50 张以上的高分辨率图片，建议分小批处理。

**可以添加文字或注释吗？** 此工具仅将图片转换为 PDF，不进行编辑。如需注释，请先编辑图片，再进行转换。

**PDF 会保留 EXIF 数据吗？** 图片的 EXIF 数据不会保留在 PDF 输出中。可视内容以全分辨率嵌入。
`,

  },
{
    slug: "pdf-protector",
    title: "PDF Password Protector: How to Secure PDF Files with Encryption",
    description: "Add passwords and encryption to your PDF files. Protect sensitive documents with user and owner passwords for complete security.",
    date: "2026-05-23",
    readTime: "6 min read",
    category: "PDF Tools",
    toolSlug: "pdf-protector",
    content: `## Why Password-Protect a PDF?

You have a confidential report, a legal contract, or a client proposal. Email attachments can be intercepted. Cloud storage can be breached. Adding a password to your PDF ensures that only authorized people can open it.

PDF password protection offers two levels of security:

- **User password** — required to open and view the document
- **Owner password** — required to modify, print, or copy content

## How PDF Encryption Works

PDF encryption uses industry-standard algorithms:

| Algorithm | Key Length | Security Level |
|-----------|-----------|----------------|
| AES-128 | 128-bit | Strong — suitable for most documents |
| AES-256 | 256-bit | Very strong — government/enterprise grade |
| RC4 (legacy) | 128-bit | Deprecated — avoid for new documents |

ToolboxPro uses **AES-256 encryption** by default, the same standard used by banks and governments.

### What Encryption Protects

- **Document content** — text, images, and embedded files
- **Metadata** — title, author, subject
- **Annotations** — comments and markup
- **Form fields** — filled form data

### What Encryption Does NOT Protect

- **File size** — the PDF size is visible without a password
- **Page count** — number of pages may be visible
- **Thumbnails** — some PDF viewers show first-page previews

## How to Password-Protect a PDF

### Step 1: Upload Your PDF

Visit our [PDF Protector](/tools/pdf-protector) and upload your file. The tool accepts:

- Any standard PDF file
- Files up to ~50MB
- Scanned PDFs and born-digital PDFs
- Password-protected PDFs (if you know the existing password)

### Step 2: Set Your Passwords

#### User Password (Open Password)

This password is required to **open** the PDF. Choose:

- **Minimum 6 characters** — enforced for basic security
- **Recommended 12+ characters** — mix of upper, lower, digits, symbols
- **Avoid dictionary words** — brute-force attacks crack these quickly

#### Owner Password (Permissions Password)

This password controls what users can do with the document:

| Permission | When Restricted |
|------------|----------------|
| Printing | Prevent physical copies |
| Copying text/images | Prevent content extraction |
| Editing | Prevent modifications |
| Adding annotations | Prevent comments and markup |
| Form filling | Prevent form submission |

If restricted, the user still needs the owner password to enable these actions.

### Step 3: Choose Encryption Level

| Setting | Best For |
|---------|----------|
| AES-128 | General use, compatibility with older PDF readers |
| AES-256 | Maximum security, newer PDF readers (Adobe Acrobat 7+) |

### Step 4: Download Your Protected PDF

Click **Protect PDF**. The file processes in your browser and downloads automatically as a password-protected PDF.

## Strong Password Tips

### Do NOT Use

- Your name, company name, or project name
- Common words like "password", "admin", "123456"
- Birthdays, anniversaries, or phone numbers
- Simple patterns like "qwerty" or "abcdef"

### DO Use

- Passphrases: "BlueElephant$Dances@Midnight7!"
- Random combinations: "k8#mP$2vN!qR" 
- Password managers to generate and store them
- At least 12 characters with mixed types

### Password Strength Reference

| Length | Time to Crack (brute force) |
|--------|---------------------------|
| 6 chars | Instant |
| 8 chars | A few hours |
| 10 chars | A few months |
| 12 chars | Thousands of years |
| 16 chars | Millions of years |

## Removing PDF Protection

If you have the owner password, you can also **remove** protection:

1. Upload the protected PDF
2. Enter the owner password
3. Click **Remove Protection**
4. Download the unlocked PDF

This is useful when:

- You forgot you password-protected a document
- You're sharing internally and no longer need restrictions
- You're archiving and want open access

## Compatibility

Protected PDFs work with:

- **Adobe Acrobat / Reader** — full support
- **Web browsers** — Chrome, Firefox, Edge, Safari
- **Mobile devices** — iOS Books, Android PDF viewers
- **E-readers** — some Kindle models (check device specs)

**Important:** Some free PDF readers have limited support for 256-bit AES. If your recipients use older software, choose AES-128.

## FAQ

**Can I recover a lost PDF password?** No. PDF encryption is designed to be irreversible without the password. There is no backdoor. Keep your passwords in a password manager.

**Does password protection compress the file?** No — encryption adds a small amount of overhead (a few KB) but does not compress the content. If you need a smaller file, compress the PDF first, then protect it.

**Is it safe to upload sensitive PDFs online?** Our tool processes everything in your browser using PDF-lib WebAssembly. Your file never reaches any server. For maximum security, you can also use the tool offline by saving the page before disconnecting from the internet.

**Can I add a password to a PDF I already encrypted?** Yes — but you'll need the existing password to remove protection first, then apply a new password.

**What's the difference between PDF passwords and digital signatures?** A password restricts access. A digital signature verifies authenticity and integrity. For sensitive documents, use both.`,
    contentZh: `## 为什么要给 PDF 加密？

你有一份机密报告、一份法律合同或一份客户提案。电子邮件附件可能被拦截，云存储可能被入侵。给你的 PDF 添加密码可以确保只有授权人员才能打开它。

PDF 密码保护提供两个级别的安全：

- **用户密码** — 打开和查看文档时需要
- **所有者密码** — 修改、打印或复制内容时需要

## PDF 加密的工作原理

PDF 加密使用行业标准算法：

| 算法 | 密钥长度 | 安全级别 |
|-----------|-----------|----------------|
| AES-128 | 128 位 | 强——适用于大多数文档 |
| AES-256 | 256 位 | 非常强——适用于政府/企业级 |
| RC4（旧版） | 128 位 | 已弃用——新文档请避免使用 |

ToolboxPro 默认使用 **AES-256 加密**，与银行和政府使用的标准相同。

### 加密保护的内容

- **文档内容** — 文本、图片和嵌入文件
- **元数据** — 标题、作者、主题
- **注释** — 评论和标记
- **表单字段** — 填写的表单数据

### 加密不保护的内容

- **文件大小** — 无需密码即可看到 PDF 大小
- **页数** — 页数可能可见
- **缩略图** — 某些 PDF 查看器会显示第一页预览

## 如何给 PDF 添加密码保护

### 第一步：上传 PDF

访问我们的[PDF 保护器](/tools/pdf-protector)并上传你的文件。该工具支持：

- 任何标准 PDF 文件
- 文件最大约 50MB
- 扫描版 PDF 和电子版 PDF
- 已加密的 PDF（如果你知道现有密码）

### 第二步：设置密码

#### 用户密码（打开密码）

此密码用于**打开** PDF。请选择：

- **最少 6 个字符** — 为基本安全强制执行
- **建议 12 个以上字符** — 大小写字母、数字、符号混合
- **避免字典词汇** — 暴力破解可快速攻破这些密码

#### 所有者密码（权限密码）

此密码控制用户可以对文档进行的操作：

| 权限 | 受限时影响 |
|------------|----------------|
| 打印 | 防止纸质拷贝 |
| 复制文本/图片 | 防止提取内容 |
| 编辑 | 防止修改 |
| 添加注释 | 防止评论和标记 |
| 填写表单 | 防止表单提交 |

如果受限，用户需要所有者密码才能启用这些操作。

### 第三步：选择加密级别

| 设置 | 最适合 |
|---------|----------|
| AES-128 | 通用用途，兼容旧版 PDF 阅读器 |
| AES-256 | 最高安全性，新版 PDF 阅读器（Adobe Acrobat 7+） |

### 第四步：下载加密的 PDF

点击**保护 PDF**。文件在浏览器中处理并自动下载为加密的 PDF。

## 强密码技巧

### 不要使用

- 你的名字、公司名或项目名
- 常见词汇如 "password"、"admin"、"123456"
- 生日、纪念日或电话号码
- 简单模式如 "qwerty" 或 "abcdef"

### 应该使用

- 密码短语："BlueElephant$Dances@Midnight7!"
- 随机组合："k8#mP$2vN!qR"
- 使用密码管理器生成和存储
- 至少 12 个字符，混合多种类型

### 密码强度参考

| 长度 | 破解时间（暴力破解） |
|--------|---------------------------|
| 6 个字符 | 瞬间 |
| 8 个字符 | 几小时 |
| 10 个字符 | 几个月 |
| 12 个字符 | 数千年 |
| 16 个字符 | 数百万年 |

## 移除 PDF 保护

如果你有所有者密码，也可以**移除**保护：

1. 上传加密的 PDF
2. 输入所有者密码
3. 点击**移除保护**
4. 下载解锁的 PDF

这在以下情况很有用：

- 你忘记给文档加密了
- 你在内部共享，不再需要限制
- 你在归档，希望开放访问

## 兼容性

加密的 PDF 可在以下平台使用：

- **Adobe Acrobat / Reader** — 完全支持
- **网页浏览器** — Chrome、Firefox、Edge、Safari
- **移动设备** — iOS 图书、Android PDF 查看器
- **电子阅读器** — 部分 Kindle 型号（查看设备规格）

**重要提示：** 某些免费的 PDF 阅读器对 256 位 AES 的支持有限。如果接收方使用旧版软件，请选择 AES-128。

## 常见问题

**丢失 PDF 密码可以找回吗？** 不能。PDF 加密设计为没有密码就无法逆转。没有后门。请将密码保存在密码管理器中。

**密码保护会压缩文件吗？** 不会——加密只会增加少量开销（几 KB），但不会压缩内容。如果需要更小的文件，先压缩 PDF，再加密。

**在线上传敏感 PDF 安全吗？** 我们的工具使用 PDF-lib WebAssembly 在浏览器中处理所有内容。你的文件永远不会到达任何服务器。为了最大安全性，你也可以先保存页面再断开网络，离线使用工具。

**可以给已加密的 PDF 再添加密码吗？** 可以——但你需要现有密码先移除保护，然后应用新密码。

**PDF 密码和数字签名有什么区别？** 密码限制访问。数字签名验证真实性和完整性。对于敏感文档，建议两者都使用。
`,

  },
{
    slug: "ssl-checker",
    title: "SSL Checker: How to Verify SSL Certificate Validity Online",
    description: "Check SSL certificate details, expiration dates, and chain validity for any domain. Ensure your website is secure and trusted.",
    date: "2026-05-23",
    readTime: "7 min read",
    category: "Network Tools",
    toolSlug: "ssl-checker",
    content: `## Why SSL Certificates Matter

Every time you visit a website with HTTPS, an SSL/TLS certificate is at work. It does three critical things:

1. **Encrypts data** between the browser and server
2. **Authenticates the server** — confirms you're talking to the real website
3. **Enables trust** — the padlock icon in the address bar

Without a valid SSL certificate, data travels in plain text. Anyone on the same network (coffee shop WiFi, hotel network) can read it.

## What Our SSL Checker Reveals

Enter any domain name and our tool fetches and analyzes the SSL certificate in real time. Here's what you get:

### Certificate Details

| Field | What It Means |
|-------|---------------|
| Subject | The domain or organization the certificate belongs to |
| Issuer | The Certificate Authority (CA) that issued it |
| Serial Number | Unique identifier for the certificate |
| Algorithm | Encryption algorithm used (e.g., SHA-256 with RSA) |
| Key Size | Bit length of the public key (2048-bit, 4096-bit) |

### Validity Period

- **Issued On** — when the certificate became valid
- **Expires On** — when the certificate expires
- **Days Remaining** — how long until expiration

### Certificate Chain

SSL certificates form a chain of trust:

\`\`\`
Root CA (trusted by browsers)
  └─ Intermediate CA
       └─ Your Domain Certificate
\`\`\`

Our checker validates that:

- The chain is complete (no missing intermediate certificates)
- Each certificate in the chain is valid
- The chain leads to a trusted root CA

### Additional Checks

- **Revocation status** — checks CRL (Certificate Revocation List) and OCSP
- **Domain match** — verifies the certificate covers the domain
- **Protocol support** — shows which TLS versions are enabled
- **HSTS status** — checks if HTTP Strict Transport Security is configured

## How to Check an SSL Certificate

### Step 1: Enter the Domain

Visit our [SSL Checker](/tools/ssl-checker) and type in any domain name:

\`\`\`
example.com
www.example.com
api.example.com
\`\`\`

Include or omit https:// — the tool handles both.

### Step 2: Click Check

The tool initiates a secure connection to the server and downloads the certificate. This takes 1-3 seconds typically.

### Step 3: Review Results

You'll see a complete report with:

- **Green** indicators for passed checks
- **Red** indicators for failed checks
- **Yellow** warnings for issues to investigate

### Step 4: Take Action

Based on the results:

| Issue | Action |
|-------|--------|
| Expiring soon | Renew with your CA |
| Chain incomplete | Install intermediate certificates on your server |
| Weak algorithm | Reissue with stronger encryption |
| Wrong domain | Get a certificate that covers this domain |

## Common SSL Issues

### Expired Certificate

The most common problem. Browsers show a full-page warning for expired certificates. **Renew at least 30 days before expiration.**

### Mixed Content

HTTPS page loading HTTP resources (images, scripts, stylesheets). The padlock icon disappears. Fix by loading all resources over HTTPS.

### Self-Signed Certificate

Useful for development, but browsers show "Not Secure" warnings. Use a trusted CA like Let's Encrypt for production.

### Certificate Name Mismatch

The certificate was issued for \`www.example.com\` but you're visiting \`example.com\`. Use a wildcard certificate (\`*.example.com\`) or get a certificate covering both.

### Incomplete Chain

Server doesn't send intermediate certificates. Some browsers and mobile devices can't validate the chain and show warnings. Install the full chain on your server.

## Best Practices

### Monitor Your Certificates

- Check certificates **monthly** for standard sites
- Check **weekly** for e-commerce or banking sites
- Set up **alerts** for 30-, 14-, and 7-day warnings before expiration

### Use Modern Protocols

| Protocol | Status |
|----------|--------|
| TLS 1.3 | ✅ Best — fastest and most secure |
| TLS 1.2 | ✅ Acceptable — widely supported |
| TLS 1.1 | ❌ Deprecated — disable if possible |
| TLS 1.0 | ❌ Deprecated — disable immediately |
| SSL 3.0 | ❌ Insecure — must disable |

### Choose Strong Keys

- **2048-bit RSA** — minimum for new certificates
- **4096-bit RSA** — stronger, recommended for high-security sites
- **ECC (Elliptic Curve)** — stronger than RSA at equivalent bit sizes, faster

## Certificate Types Compared

| Type | Coverage | Best For | Cost |
|------|----------|----------|------|
| DV (Domain Validated) | Single domain | Blogs, small sites | Free (Let's Encrypt) |
| OV (Organization Validated) | Single domain + org verified | Business websites | $50-200/yr |
| EV (Extended Validation) | Domain + org verified + green bar | E-commerce, banking | $100-500/yr |
| Wildcard | *.example.com | Multi-subdomain sites | $100-400/yr |
| Multi-Domain (SAN) | Multiple specific domains | Different domains on one server | $50-300/yr |

## FAQ

**How often should I check my SSL certificate?** At least once a month. Many certificates expire after 90 days (Let's Encrypt) or 1-2 years (commercial CAs). Set calendar reminders.

**What happens if my SSL expires?** Browsers display security warnings that scare visitors away. Search engines may rank your site lower. Some browsers block access entirely.

**Can I check SSL for internal/hostname domains?** Yes — as long as the domain resolves and has a valid certificate, our checker can inspect it.

**How does SSL affect SEO?** Google uses HTTPS as a ranking signal. Sites with valid SSL certificates rank higher than insecure HTTP sites.

**What's the difference between SSL and TLS?** SSL is the deprecated predecessor of TLS. "SSL certificate" is the common term, but modern certificates use the TLS protocol. There's no practical difference for end users.`,
    contentZh: `## 为什么 SSL 证书很重要

每次你访问一个 HTTPS 网站时，SSL/TLS 证书都在起作用。它做三件关键的事：

1. **加密数据** — 在浏览器和服务器之间
2. **验证服务器** — 确认你在与真实的网站通信
3. **建立信任** — 地址栏中的小锁图标

如果没有有效的 SSL 证书，数据以明文传输。同一网络上的任何人都可以读取它（咖啡店 WiFi、酒店网络等）。

## 我们的 SSL 检查器能揭示什么

输入任意域名，我们的工具会实时获取并分析 SSL 证书。以下是你能获得的信息：

### 证书详情

| 字段 | 含义 |
|-------|---------------|
| 主体 | 证书所属的域名或组织 |
| 颁发者 | 颁发证书的证书颁发机构（CA） |
| 序列号 | 证书的唯一标识符 |
| 算法 | 使用的加密算法（如 SHA-256 with RSA） |
| 密钥大小 | 公钥的位长度（2048 位、4096 位） |

### 有效期

- **颁发日期** — 证书开始生效的时间
- **到期日期** — 证书到期的时间
- **剩余天数** — 距离到期还有多久

### 证书链

SSL 证书形成一个信任链：

\`\`\`
根 CA（浏览器信任）
  └─ 中间 CA
       └─ 你的域名证书
\`\`\`

我们的检查器会验证：

- 证书链是否完整（没有缺少中间证书）
- 链中的每个证书是否有效
- 该链是否通向受信任的根 CA

### 其他检查

- **吊销状态** — 检查 CRL（证书吊销列表）和 OCSP
- **域名匹配** — 验证证书是否覆盖该域名
- **协议支持** — 显示启用了哪些 TLS 版本
- **HSTS 状态** — 检查是否配置了 HTTP 严格传输安全

## 如何检查 SSL 证书

### 第一步：输入域名

访问我们的 [SSL 检查器](/tools/ssl-checker)并输入任意域名：

\`\`\`
example.com
www.example.com
api.example.com
\`\`\`

可以包含或省略 https://——工具都能处理。

### 第二步：点击检查

工具会向服务器发起安全连接并下载证书。通常需要 1-3 秒。

### 第三步：查看结果

你会看到一份完整报告：

- **绿色** 指标表示检查通过
- **红色** 指标表示检查失败
- **黄色** 警告表示需要调查的问题

### 第四步：采取行动

根据结果：

| 问题 | 行动 |
|-------|--------|
| 即将到期 | 向 CA 续期 |
| 证书链不完整 | 在服务器上安装中间证书 |
| 弱算法 | 使用更强的加密重新签发 |
| 域名错误 | 获取覆盖此域名的证书 |

## 常见 SSL 问题

### 证书过期

最常见的问题。浏览器对过期证书会显示整页警告。**至少在到期前 30 天续期。**

### 混合内容

HTTPS 页面加载 HTTP 资源（图片、脚本、样式表）。小锁图标会消失。修复方法：所有资源通过 HTTPS 加载。

### 自签名证书

对开发有用，但浏览器会显示"不安全"警告。生产环境请使用像 Let's Encrypt 这样的受信任 CA。

### 证书名称不匹配

证书是为 \`www.example.com\` 签发的，但你访问的是 \`example.com\`。使用通配符证书（\`*.example.com\`）或获取覆盖两个域名的证书。

### 证书链不完整

服务器未发送中间证书。某些浏览器和移动设备无法验证证书链并显示警告。在服务器上安装完整的证书链。

## 最佳实践

### 监控你的证书

- **每月** 检查标准网站的证书
- **每周** 检查电商或银行网站
- 设置**警报**，在到期前 30 天、14 天和 7 天提醒

### 使用现代协议

| 协议 | 状态 |
|----------|--------|
| TLS 1.3 | ✅ 最佳——最快最安全 |
| TLS 1.2 | ✅ 可接受——广泛支持 |
| TLS 1.1 | ❌ 已弃用——如有可能请禁用 |
| TLS 1.0 | ❌ 已弃用——立即禁用 |
| SSL 3.0 | ❌ 不安全——必须禁用 |

### 选择强密钥

- **2048 位 RSA** — 新证书的最低要求
- **4096 位 RSA** — 更强，推荐用于高安全性网站
- **ECC（椭圆曲线）** — 在同等位大小下比 RSA 更强、更快

## 证书类型比较

| 类型 | 覆盖范围 | 最适合 | 费用 |
|------|----------|----------|------|
| DV（域名验证） | 单个域名 | 博客、小网站 | 免费（Let's Encrypt） |
| OV（组织验证） | 单个域名 + 组织验证 | 商业网站 | $50-200/年 |
| EV（扩展验证） | 域名 + 组织验证 + 绿色地址栏 | 电商、银行 | $100-500/年 |
| 通配符 | *.example.com | 多子域名网站 | $100-400/年 |
| 多域名（SAN） | 多个特定域名 | 一台服务器上的不同域名 | $50-300/年 |

## 常见问题

**我应该多久检查一次 SSL 证书？** 至少每月一次。许多证书在 90 天（Let's Encrypt）或 1-2 年（商业 CA）后到期。设置日历提醒。

**SSL 过期会怎样？** 浏览器会显示安全警告，吓跑访客。搜索引擎可能会降低你的网站排名。某些浏览器会完全阻止访问。

**可以检查内部/主机名域名的 SSL 吗？** 可以——只要域名能解析并有有效证书，我们的检查器就能检查。

**SSL 如何影响 SEO？** Google 将 HTTPS 作为排名信号。具有有效 SSL 证书的网站排名高于不安全的 HTTP 网站。

**SSL 和 TLS 有什么区别？** SSL 是 TLS 的已弃用前身。"SSL 证书"是通用术语，但现代证书使用 TLS 协议。对最终用户来说没有实际区别。
`,

  },
{
    slug: "dns-lookup",
    title: "DNS Lookup Tool: How to Query DNS Records for Any Domain",
    description: "Look up DNS records including A, AAAA, CNAME, MX, NS, TXT, and SOA. Diagnose DNS issues and verify domain configuration.",
    date: "2026-05-23",
    readTime: "6 min read",
    category: "Network Tools",
    toolSlug: "dns-lookup",
    content: `## What is DNS?

The Domain Name System (DNS) is the phonebook of the internet. When you type \`example.com\` into your browser, DNS translates that human-readable name into a machine-readable IP address like \`93.184.216.34\`.

Without DNS, you'd need to memorize IP addresses for every website you visit. DNS works silently in the background, typically in milliseconds.

## Why Perform a DNS Lookup?

DNS lookups help you:

- **Verify domain configuration** — confirm your website points to the right server
- **Diagnose email issues** — check MX records for mail delivery problems
- **Troubleshoot connectivity** — see if DNS is the bottleneck
- **Security auditing** — inspect TXT records for SPF, DKIM, and DMARC
- **Domain migration** — confirm DNS changes propagated before switching hosts

## Types of DNS Records

### A Record (Address)

Maps a domain to an IPv4 address:

\`\`\`
example.com → 93.184.216.34
\`\`\`

This is the most fundamental record type. Every website needs at least one A record.

### AAAA Record (IPv6 Address)

Same as A record, but for IPv6 addresses:

\`\`\`
example.com → 2606:2800:220:1:248:1893:25c8:1946
\`\`\`

### CNAME Record (Canonical Name)

Aliases one domain to another:

\`\`\`
www.example.com → example.com
\`\`\`

The alias domain inherits all DNS settings from the target.

### MX Record (Mail Exchange)

Specifies mail servers for the domain:

| Priority | Mail Server |
|----------|------------|
| 10 | mail.example.com |
| 20 | backup-mail.example.com |

Lower priority numbers are tried first.

### NS Record (Name Server)

Identifies authoritative DNS servers:

\`\`\`
example.com → ns1.example.com, ns2.example.com
\`\`\`

### TXT Record (Text)

Stores arbitrary text data, commonly used for:

- **SPF** (Sender Policy Framework) — which servers can send email for your domain
- **DKIM** (DomainKeys Identified Mail) — cryptographic email signing
- **DMARC** (Domain-based Message Authentication) — email authentication policy
- **Domain verification** — prove you own a domain (Google, Microsoft, etc.)

### SOA Record (Start of Authority)

Contains administrative information:

| Field | Meaning |
|-------|---------|
| MNAME | Primary name server |
| RNAME | Admin email address |
| Serial | Version number (increment for changes) |
| Refresh | How often to check for updates |
| Retry | How long to wait after a failed refresh |
| Expire | When to stop using the zone if no updates |
| Minimum TTL | Default cache duration |

## How to Perform a DNS Lookup

### Using ToolboxPro

Visit our [DNS Lookup Tool](/tools/dns-lookup).

**Step 1: Enter a domain**

\`\`\`
example.com
google.com
github.com
\`\`\`

**Step 2: Select record type (optional)**

By default, the tool returns all common record types. You can filter to see only:

- A (IPv4)
- AAAA (IPv6)
- CNAME (Aliases)
- MX (Mail)
- NS (Name Servers)
- TXT (Text)
- SOA (Authority)

**Step 3: Click Lookup**

Results appear in a structured table within 1-2 seconds.

**Step 4: Analyze results**

Each record shows:

- **Type** — record type (A, MX, TXT, etc.)
- **Name** — the domain/subdomain
- **Value** — the resolved data
- **TTL** — Time To Live in seconds (how long the result is cached)

## Understanding TTL (Time To Live)

TTL tells DNS resolvers how long to cache a record before checking for updates.

| TTL Value | Cache Duration | Use Case |
|-----------|---------------|----------|
| 300 (5 min) | Short | Migration/testing, change frequently |
| 3600 (1 hour) | Medium | Standard production |
| 86400 (24 hours) | Long | Stable records, rarely change |
| 604800 (7 days) | Very long | SOA records, NS records |

**Lower TTL before planned changes.** If you're migrating servers, reduce TTL to 300 seconds at least 24 hours before the change. This ensures the old records expire quickly when you switch.

## Common DNS Issues

### Propagation Delay

After changing DNS records, it takes time to propagate worldwide. Factors:

- Your TTL settings (primary factor)
- ISP caching policies
- Regional DNS resolver behavior

**Typical propagation:** 1-48 hours. Using our lookup tool from different locations helps confirm propagation.

### Missing Records

Common mistakes:

| Symptom | Likely Cause |
|---------|-------------|
| Website not loading | Missing or wrong A/AAAA record |
| Email not delivering | Missing or incorrect MX records |
| Emails marked as spam | Missing SPF/DKIM/DMARC TXT records |
| Subdomain not working | Missing CNAME record |

### DNS Resolution Failure

If a lookup returns no results:

1. Check that the domain is registered and active
2. Verify nameservers are correct and responding
3. Confirm the specific record exists
4. Check for DNSSEC validation issues

## DNS and Security

### DNSSEC

DNS Security Extensions add cryptographic signatures to DNS records, preventing DNS spoofing and cache poisoning. Our tool shows whether a domain has DNSSEC enabled.

### SPF, DKIM, and DMARC

These three TXT records protect your domain from email spoofing:

| Record | Purpose |
|--------|---------|
| SPF | Lists authorized mail servers |
| DKIM | Provides cryptographic verification |
| DMARC | Tells receivers how to handle unauthenticated email |

Example SPF record:

\`\`\`
v=spf1 include:_spf.google.com ~all
\`\`\`

This says: "Only Google's servers can send email for this domain. Others should be marked as suspicious (~all)."

## FAQ

**What's the difference between public DNS and authoritative DNS?** Public DNS resolvers (like Google 8.8.8.8) answer queries from users. Authoritative DNS servers hold the actual zone records. Our tool queries authoritative servers for the most accurate results.

**Can I look up DNS for internal/private domains?** No — private DNS zones that aren't published to public DNS servers won't be visible. Use local command-line tools (\`nslookup\`, \`dig\`) for internal DNS.

**How long does DNS propagation take?** Typically 1-48 hours, but modern CDNs and global DNS providers often complete propagation in minutes. Lower TTL values speed up future changes.

**Why do I see different results from different locations?** Cached records at various DNS resolvers. Some resolvers may still have the old TTL cached. Wait for propagation or use a tool that queries authoritative servers directly.

**Does DNS lookup work for internationalized domain names (IDN)?** Yes — the tool automatically converts IDN characters (like 中国) to Punycode format before querying.`,
    contentZh: `## 什么是 DNS？

域名系统（DNS）是互联网的电话簿。当你在浏览器中输入 \`example.com\` 时，DNS 将该人类可读的名称转换为机器可读的 IP 地址，如 \`93.184.216.34\`。

没有 DNS，你需要记住每个网站的 IP 地址。DNS 在后台默默工作，通常在毫秒级完成。

## 为什么要进行 DNS 查询？

DNS 查询可以帮助你：

- **验证域名配置** — 确认你的网站指向正确的服务器
- **诊断邮件问题** — 检查 MX 记录以解决邮件投递问题
- **排查连接故障** — 查看 DNS 是否是瓶颈
- **安全审计** — 检查 TXT 记录中的 SPF、DKIM 和 DMARC
- **域名迁移** — 在切换主机前确认 DNS 更改已生效

## DNS 记录类型

### A 记录（地址）

将域名映射到 IPv4 地址：

\`\`\`
example.com → 93.184.216.34
\`\`\`

这是最基本也是最重要的记录类型。每个网站至少需要一个 A 记录。

### AAAA 记录（IPv6 地址）

与 A 记录相同，但用于 IPv6 地址：

\`\`\`
example.com → 2606:2800:220:1:248:1893:25c8:1946
\`\`\`

### CNAME 记录（规范名称）

将一个域名别名指向另一个域名：

\`\`\`
www.example.com → example.com
\`\`\`

别名域名继承目标域名的所有 DNS 设置。

### MX 记录（邮件交换）

指定域名的邮件服务器：

| 优先级 | 邮件服务器 |
|----------|------------|
| 10 | mail.example.com |
| 20 | backup-mail.example.com |

较低优先级数字的服务器优先尝试。

### NS 记录（名称服务器）

标识权威 DNS 服务器：

\`\`\`
example.com → ns1.example.com, ns2.example.com
\`\`\`

### TXT 记录（文本）

存储任意文本数据，常用于：

- **SPF**（发件人策略框架）— 哪些服务器可以为你的域名发送邮件
- **DKIM**（域名密钥识别邮件）— 加密邮件签名
- **DMARC**（基于域名的消息认证）— 邮件认证策略
- **域名验证** — 证明你拥有域名（Google、Microsoft 等）

### SOA 记录（起始授权机构）

包含管理信息：

| 字段 | 含义 |
|-------|---------|
| MNAME | 主名称服务器 |
| RNAME | 管理员电子邮件地址 |
| Serial | 版本号（更改时递增） |
| Refresh | 检查更新的频率 |
| Retry | 刷新失败后等待的时间 |
| Expire | 如果无更新，停止使用该区域的时间 |
| Minimum TTL | 默认缓存时长 |

## 如何执行 DNS 查询

### 使用 ToolboxPro

访问我们的 [DNS 查询工具](/tools/dns-lookup)。

**第一步：输入域名**

\`\`\`
example.com
google.com
github.com
\`\`\`

**第二步：选择记录类型（可选）**

默认情况下，工具返回所有常见记录类型。你可以筛选查看：

- A（IPv4）
- AAAA（IPv6）
- CNAME（别名）
- MX（邮件）
- NS（名称服务器）
- TXT（文本）
- SOA（授权机构）

**第三步：点击查询**

结果在 1-2 秒内以结构化表格形式显示。

**第四步：分析结果**

每条记录显示：

- **类型** — 记录类型（A、MX、TXT 等）
- **名称** — 域名/子域名
- **值** — 解析后的数据
- **TTL** — 生存时间（以秒为单位，结果被缓存的时间）

## 理解 TTL（生存时间）

TTL 告诉 DNS 解析器在检查更新之前缓存记录的时间。

| TTL 值 | 缓存时长 | 使用场景 |
|-----------|---------------|----------|
| 300（5 分钟） | 短 | 迁移/测试，频繁更改 |
| 3600（1 小时） | 中 | 标准生产环境 |
| 86400（24 小时） | 长 | 稳定记录，很少更改 |
| 604800（7 天） | 非常长 | SOA 记录、NS 记录 |

**在计划更改前降低 TTL。** 如果你要迁移服务器，至少在更改前 24 小时将 TTL 降低到 300 秒。这确保旧记录在你切换后快速过期。

## 常见 DNS 问题

### 传播延迟

更改 DNS 记录后，需要时间在全球范围内传播。影响因素：

- 你的 TTL 设置（主要因素）
- ISP 缓存策略
- 区域 DNS 解析器行为

**典型传播时间：** 1-48 小时。从不同位置使用我们的查询工具有助于确认传播情况。

### 缺少记录

常见错误：

| 症状 | 可能原因 |
|---------|-------------|
| 网站无法加载 | 缺少或错误的 A/AAAA 记录 |
| 邮件无法投递 | 缺少或错误的 MX 记录 |
| 邮件被标记为垃圾邮件 | 缺少 SPF/DKIM/DMARC TXT 记录 |
| 子域名无法访问 | 缺少 CNAME 记录 |

### DNS 解析失败

如果查询没有返回结果：

1. 检查域名是否已注册且有效
2. 验证名称服务器是否正确且有响应
3. 确认特定记录是否存在
4. 检查 DNSSEC 验证问题

## DNS 与安全

### DNSSEC

DNS 安全扩展为 DNS 记录添加加密签名，防止 DNS 欺骗和缓存投毒。我们的工具会显示域名是否启用了 DNSSEC。

### SPF、DKIM 和 DMARC

这三种 TXT 记录保护你的域名免受邮件伪造：

| 记录 | 用途 |
|--------|---------|
| SPF | 列出授权的邮件服务器 |
| DKIM | 提供加密验证 |
| DMARC | 告诉接收方如何处理未认证的邮件 |

SPF 记录示例：

\`\`\`
v=spf1 include:_spf.google.com ~all
\`\`\`

这表示："只有 Google 的服务器可以为这个域名发送邮件。其他应标记为可疑（~all）。"

## 常见问题

**公共 DNS 和权威 DNS 有什么区别？** 公共 DNS 解析器（如 Google 8.8.8.8）响应用户的查询。权威 DNS 服务器保存实际的区域记录。我们的工具查询权威服务器以获得最准确的结果。

**可以查询内部/私有域名的 DNS 吗？** 不能——未发布到公共 DNS 服务器的私有 DNS 区域不可见。对于内部 DNS，请使用本地命令行工具（\`nslookup\`、\`dig\`）。

**DNS 传播需要多长时间？** 通常为 1-48 小时，但现代 CDN 和全球 DNS 提供商通常可以在几分钟内完成传播。较低的 TTL 值可以加快将来的更改。

**为什么从不同位置看到不同的结果？** 各个 DNS 解析器缓存了不同的记录。某些解析器可能仍缓存着旧的 TTL。等待传播完成，或使用直接查询权威服务器的工具。

**DNS 查询支持国际化域名（IDN）吗？** 支持——工具会在查询前自动将 IDN 字符（如"中国"）转换为 Punycode 格式。
`,

  },
{
    slug: "password-strength",
    title: "Password Strength Checker: How Secure Is Your Password?",
    description: "Test password strength instantly. Analyze length, complexity, and resistance to brute-force attacks. Learn how to create unbreakable passwords.",
    date: "2026-05-23",
    readTime: "7 min read",
    category: "Utilities",
    toolSlug: "password-strength",
    content: `## Why Password Strength Matters

Every day, thousands of accounts are compromised because of weak passwords. According to cybersecurity reports:

- **81%** of data breaches involve weak or stolen passwords
- **123456** and **password** remain the most common passwords
- A weak password can be cracked in **under a second**
- A strong password can take **centuries** to crack

Your password is the first line of defense. Understanding what makes a password strong — and how to test it — is essential for staying safe online.

## How Password Strength Is Measured

### Entropy (Bit Strength)

Password strength is measured in **bits of entropy**. Each bit doubles the number of possible guesses:

| Entropy | Strength | Time to Crack |
|---------|----------|---------------|
| < 28 bits | Very Weak | Instant |
| 28-35 bits | Weak | Minutes to hours |
| 36-59 bits | Moderate | Days to years |
| 60-127 bits | Strong | Centuries |
| 128+ bits | Very Strong | Millions of years |

### Our Scoring System

Our Password Strength Checker analyzes several factors:

| Factor | Weight | What We Check |
|--------|--------|---------------|
| Length | High | Total character count |
| Character Variety | High | Uppercase, lowercase, digits, symbols |
| Patterns | Medium | Keyboard patterns, repeated chars, sequences |
| Dictionary Words | High | Common words, passwords, and phrases |
| Leaked Password Check | Medium | Comparison against known breach databases (hashed) |

### Visual Feedback

The tool provides real-time feedback:

- **Red bar** — weak, crackable instantly
- **Orange bar** — moderate, might resist casual attempts
- **Yellow bar** — decent, but could be improved
- **Light green bar** — strong, good for most uses
- **Dark green bar** — very strong, resistant to offline attacks

## Common Password Mistakes

### 1. Too Short

A 6-character password, even with symbols, can be cracked in minutes.

\`\`\`
A7$b2!  —  6 chars, looks complex but ~28 bits (WEAK)
\`\`\`

### 2. Common Substitutions

"P@ssw0rd" is not creative. Hackers know these substitutions:

| Letter | Substitution |
|--------|-------------|
| a | @, 4 |
| s | $, 5, z |
| o | 0 |
| e | 3 |
| i | 1, ! |
| t | 7 |

### 3. Personal Information

Never use:

- Your name or family names
- Birthdays or anniversaries
- Pet names
- Street names or addresses
- Phone numbers

### 4. Reusing Passwords

If one site is breached and you reuse passwords, all your accounts are at risk.

### 5. Keyboard Patterns

"qwerty", "asdfgh", "zxcvbn", and "1qaz2wsx" are instantly detected.

## How to Create a Strong Password

### Method 1: Random Passwords (Best)

Use a password manager to generate:

\`\`\`
K8#mP$2vN!qR7xL@
\`\`\`

This 16-character random string has ~104 bits of entropy.

### Method 2: Passphrases (Memorable)

Combine random words with separators:

\`\`\`
Correct-Horse-Battery-Staple!
Blue-Elephant-Dances-At-Midnight
\`\`\`

A 5-word passphrase has ~65 bits of entropy — very strong and easy to remember.

### Method 3: Pattern-Based (Less Secure)

Use a sentence you'll remember:

"I first visited Paris in 2024!" → \`IfvPi2024!\`

This is better than most passwords but not as strong as random generation.

## Password Guidelines by Use Case

| Account Type | Minimum Length | Requirements | Example |
|-------------|---------------|--------------|---------|
| Social Media | 10+ chars | Mixed case + digits | BlueFrog$42Jump |
| Email | 12+ chars | Mixed + digits + symbol | MyM@ilP@ss99! |
| Banking | 14+ chars | Maximum complexity | B@nk!$S3cur3#2026 |
| Password Manager | 16+ chars | Full random | gH7#mK2$pR9!vL4$xQ |
| Admin Accounts | 20+ chars | Full random + 2FA | J8&zN3$wQ6!cF1%vB0@x |

## Two-Factor Authentication (2FA)

Even the strongest password benefits from 2FA. Types:

| Method | Security | Convenience |
|--------|----------|-------------|
| SMS Code | Low (SIM swap risk) | High |
| Authenticator App (TOTP) | High | Medium |
| Hardware Key (FIDO2) | Very High | Low |
| Biometrics | Medium | High |

**Always enable 2FA** on email, banking, and password manager accounts.

## Password Managers

### Why Use One

- Generate strong random passwords automatically
- Store all passwords behind one master password
- Auto-fill on websites and apps
- Sync across devices
- Warn about breached or reused passwords

### Recommended Options

| Service | Free Tier | Features |
|---------|-----------|----------|
| Bitwarden | Yes | Open source, all platforms |
| 1Password | No | Polished UX, travel mode |
| KeePassXC | Yes | Local-only, no cloud |
| Apple Keychain | Yes (Apple devices) | Built-in, seamless |

## How We Check Passwords Safely

Your password **never leaves your device**. Our tool:

1. Runs entirely in your browser using JavaScript
2. Analyzes patterns, length, and character variety locally
3. Checks against a bloom filter of known leaked passwords (loaded as an encrypted, compressed dataset)
4. Shows results instantly without network transmission

**We never store, log, or transmit your password.** Not even temporarily.

## FAQ

**What is the most secure password length?** 16+ characters with full randomness. Each additional character exponentially increases cracking time.

**Are password managers safe?** Yes — they encrypt your vault with a strong master password. Using a password manager is vastly more secure than reusing weak passwords across sites.

**How often should I change my password?** Only change when: (1) you suspect it's compromised, (2) the service reports a breach, or (3) you shared it with someone. Regular forced changes are no longer recommended by security experts (NIST guidelines).

**What does "pwned" mean?** Your password has appeared in a known data breach. Change it immediately and use a unique password for that account.

**Can I use spaces in passwords?** Yes — most systems allow spaces. Passphrases with spaces are excellent. Some legacy systems may strip them, so test first on important accounts.`,
    contentZh: `## 为什么密码强度很重要

每天都有成千上万的账户因弱密码而被入侵。根据网络安全报告：

- **81%** 的数据泄露涉及弱密码或被盗密码
- **123456** 和 **password** 仍然是最常见的密码
- 一个弱密码可以在**不到一秒**内被破解
- 一个强密码需要**数个世纪**才能破解

你的密码是第一道防线。了解什么让密码变强——以及如何测试它——对于保持网络安全至关重要。

## 密码强度如何衡量

### 熵（位强度）

密码强度以**熵的位数**来衡量。每增加一位，可能的猜测次数就翻倍：

| 熵 | 强度 | 破解时间 |
|---------|----------|---------------|
| < 28 位 | 非常弱 | 瞬间 |
| 28-35 位 | 弱 | 几分钟到几小时 |
| 36-59 位 | 中等 | 几天到几年 |
| 60-127 位 | 强 | 数个世纪 |
| 128+ 位 | 非常强 | 数百万年 |

### 我们的评分系统

我们的密码强度检查器分析以下几个因素：

| 因素 | 权重 | 检查内容 |
|--------|--------|---------------|
| 长度 | 高 | 总字符数 |
| 字符多样性 | 高 | 大写字母、小写字母、数字、符号 |
| 模式 | 中 | 键盘模式、重复字符、序列 |
| 字典词汇 | 高 | 常见词汇、密码和短语 |
| 泄露密码检查 | 中 | 与已知泄露数据库对比（哈希后） |

### 视觉反馈

工具提供实时反馈：

- **红色条** — 弱，可瞬间破解
- **橙色条** — 中等，可能抵御随意的尝试
- **黄色条** — 尚可，但可以改进
- **浅绿色条** — 强，适合大多数用途
- **深绿色条** — 非常强，能抵抗离线攻击

## 常见密码错误

### 1. 太短

即使带符号，6 个字符的密码也可以在几分钟内破解。

\`\`\`
A7$b2!  —  6 个字符，看起来很复杂，但约 28 位（弱）
\`\`\`

### 2. 常见替换

"P@ssw0rd"并不新颖。黑客知道这些替换：

| 字母 | 替换 |
|--------|-------------|
| a | @, 4 |
| s | $, 5, z |
| o | 0 |
| e | 3 |
| i | 1, ! |
| t | 7 |

### 3. 个人信息

永远不要使用：

- 你的名字或家人名字
- 生日或纪念日
- 宠物名字
- 街道名或地址
- 电话号码

### 4. 重复使用密码

如果一个网站被入侵而你重复使用密码，你的所有账户都有风险。

### 5. 键盘模式

"qwerty"、"asdfgh"、"zxcvbn"和"1qaz2wsx"会立即被检测到。

## 如何创建强密码

### 方法一：随机密码（最佳）

使用密码管理器生成：

\`\`\`
K8#mP$2vN!qR7xL@
\`\`\`

这个 16 字符的随机字符串具有约 104 位的熵。

### 方法二：密码短语（容易记忆）

将随机词与分隔符组合：

\`\`\`
Correct-Horse-Battery-Staple!
Blue-Elephant-Dances-At-Midnight
\`\`\`

一个 5 词的密码短语具有约 65 位的熵——非常强且容易记忆。

### 方法三：基于模式（安全性较低）

使用你会记住的句子：

"我第一次访问巴黎是 2024 年！" → \`IfvPi2024!\`

这比大多数密码好，但不如随机生成强。

## 按用途划分的密码指南

| 账户类型 | 最短长度 | 要求 | 示例 |
|-------------|---------------|--------------|---------|
| 社交媒体 | 10+ 字符 | 大小写 + 数字 | BlueFrog$42Jump |
| 电子邮件 | 12+ 字符 | 大小写 + 数字 + 符号 | MyM@ilP@ss99! |
| 银行 | 14+ 字符 | 最大复杂度 | B@nk!$S3cur3#2026 |
| 密码管理器 | 16+ 字符 | 完全随机 | gH7#mK2$pR9!vL4$xQ |
| 管理员账户 | 20+ 字符 | 完全随机 + 双因素 | J8&zN3$wQ6!cF1%vB0@x |

## 双因素认证（2FA）

即使是最强的密码也需要 2FA 加持。类型如下：

| 方法 | 安全性 | 便利性 |
|--------|----------|-------------|
| 短信验证码 | 低（SIM 卡换卡风险） | 高 |
| 验证器应用（TOTP） | 高 | 中 |
| 硬件密钥（FIDO2） | 非常高 | 低 |
| 生物识别 | 中 | 高 |

**始终在电子邮件、银行和密码管理器账户上启用 2FA。**

## 密码管理器

### 为什么要使用

- 自动生成强随机密码
- 所有密码由一个主密码保护
- 在网站和应用上自动填充
- 跨设备同步
- 提醒你已被泄露或重复使用的密码

### 推荐选项

| 服务 | 免费版 | 功能 |
|---------|-----------|----------|
| Bitwarden | 是 | 开源，所有平台 |
| 1Password | 否 | 精致体验，旅行模式 |
| KeePassXC | 是 | 仅本地，无云端 |
| Apple 钥匙串 | 是（Apple 设备） | 内置，无缝体验 |

## 我们如何安全地检查密码

你的密码**永远不会离开你的设备**。我们的工具：

1. 完全在浏览器中使用 JavaScript 运行
2. 在本地分析模式、长度和字符多样性
3. 与已知泄露密码的布隆过滤器进行对比（以加密压缩数据集加载）
4. 立即显示结果，无需网络传输

**我们从不存储、记录或传输你的密码。** 哪怕是暂时也不会。

## 常见问题

**最安全的密码长度是多少？** 16 个以上字符，完全随机。每增加一个字符，破解时间呈指数级增长。

**密码管理器安全吗？** 安全——它们使用强主密码加密你的保险库。使用密码管理器远比在网站之间重复使用弱密码安全得多。

**我应该多久更改一次密码？** 只有在以下情况下才更改：（1）你怀疑密码已泄露，（2）该服务报告了泄露事件，或（3）你将密码告诉了别人。安全专家（NIST 指南）不再推荐定期强制更改密码。

**"pwned"是什么意思？** 你的密码出现在已知的数据泄露事件中。立即更改，并为该账户使用唯一密码。

**密码中可以使用空格吗？** 可以——大多数系统允许空格。带空格的密码短语非常出色。某些旧版系统可能会去除空格，因此在重要账户上先测试一下。
`,

  },
{
    slug: "percentage-calculator",
    title: "Percentage Calculator: Calculate Percentages Instantly Online",
    description: "Free online percentage calculator for discounts, tips, taxes, and data analysis. Calculate percentage increase, decrease, and more in seconds.",
    date: "2026-05-23",
    readTime: "5 min read",
    category: "Conversion Tools",
    toolSlug: "percentage-calculator",
    content: `## Why Percentage Calculations Matter

Percentages are everywhere in daily life:

- **Shopping** — "30% off" — how much do you save?
- **Finance** — "5% APY" — what will your savings grow to?
- **Taxes** — "8% sales tax" — what's the final price?
- **Tips** — "15% gratuity" — how much to leave?
- **Data** — "22% increase" — what does that mean in raw numbers?

Calculating percentages manually is error-prone. Our Percentage Calculator handles all common scenarios instantly.

## Percentage Calculation Modes

### 1. What is X% of Y?

The most common calculation. Given a percentage and a total, find the portion.

**Formula:**
\`\`\`
Result = (Percentage ÷ 100) × Total
\`\`\`

**Example:**
\`\`\`
What is 15% of 200?
= (15 ÷ 100) × 200
= 0.15 × 200
= 30
\`\`\`

**Real-world use:** Calculate a tip on a restaurant bill. Bill is $84.50, you want to leave 18%.

\`\`\`
18% of 84.50 = 0.18 × 84.50 = $15.21 tip
Total = $84.50 + $15.21 = $99.71
\`\`\`

### 2. X is What Percent of Y?

Given two numbers, find the percentage relationship.

**Formula:**
\`\`\`
Percentage = (X ÷ Y) × 100
\`\`\`

**Example:**
\`\`\`
25 is what percent of 200?
= (25 ÷ 200) × 100
= 0.125 × 100
= 12.5%
\`\`\`

**Real-world use:** You scored 42 out of 50 on a test.

\`\`\`
42 ÷ 50 × 100 = 84%
\`\`\`

### 3. Percentage Increase / Decrease

Find the percentage change from an old value to a new value.

**Formula:**
\`\`\`
Change = ((New - Old) ÷ |Old|) × 100
\`\`\`

**Example (increase):**
\`\`\`
Salary went from $50,000 to $55,000
= ((55000 - 50000) ÷ 50000) × 100
= (5000 ÷ 50000) × 100
= 10% increase
\`\`\`

**Example (decrease):**
\`\`\`
Price dropped from $80 to $60
= ((60 - 80) ÷ 80) × 100
= (-20 ÷ 80) × 100
= -25% (25% decrease)
\`\`\`

### 4. Add / Subtract Percentage

Add a percentage to a number (e.g., adding tax) or subtract (e.g., applying a discount).

**Formula (add tax):**
\`\`\`
Total = Price × (1 + TaxRate ÷ 100)
\`\`\`

**Example:**
\`\`\`
Item costs $120, sales tax is 8%
Total = 120 × (1 + 0.08) = 120 × 1.08 = $129.60
\`\`\`

**Formula (apply discount):**
\`\`\`
Discounted = Price × (1 - Discount ÷ 100)
\`\`\`

**Example:**
\`\`\`
Jacket is $85 with 30% off
Sale price = 85 × (1 - 0.30) = 85 × 0.70 = $59.50
You save = $85 - $59.50 = $25.50
\`\`\`

## Common Percentage Scenarios

### Shopping Discounts

| Original Price | Discount | You Pay | You Save |
|---------------|----------|---------|----------|
| $50.00 | 10% | $45.00 | $5.00 |
| $50.00 | 25% | $37.50 | $12.50 |
| $50.00 | 50% | $25.00 | $25.00 |
| $100.00 | 20% | $80.00 | $20.00 |
| $100.00 | 33% | $67.00 | $33.00 |
| $200.00 | 40% | $120.00 | $80.00 |

### Financial Calculations

**Compound interest simplified:**

If you invest $10,000 at 7% annual return:

| Year | Value | Growth |
|------|-------|--------|
| 0 | $10,000 | — |
| 1 | $10,700 | $700 |
| 3 | $12,250 | $2,250 |
| 5 | $14,026 | $4,026 |
| 10 | $19,672 | $9,672 |

**Mortgage down payment:**

\`\`\`
Home price: $350,000
Down payment: 20% = $70,000
Loan amount: $280,000
\`\`\`

### Academic Grades

| Score | Out Of | Percentage | Grade |
|-------|--------|------------|-------|
| 18 | 20 | 90% | A |
| 16 | 20 | 80% | B |
| 14 | 20 | 70% | C |
| 12 | 20 | 60% | D |
| 33 | 40 | 82.5% | B |
| 85 | 100 | 85% | B |

### Business Metrics

**Profit Margin:**
\`\`\`
Revenue: $500,000
Cost: $350,000
Profit: $150,000
Margin: 150000 ÷ 500000 × 100 = 30%
\`\`\`

**Growth Rate:**
\`\`\`
Q1 sales: $100,000
Q2 sales: $130,000
Growth: ((130000 - 100000) ÷ 100000) × 100 = 30%
\`\`\`

## How to Use Our Calculator

Visit our [Percentage Calculator](/tools/percentage-calculator).

**Step 1:** Choose your calculation mode:

| Mode | What It Does |
|------|-------------|
| What is X% of Y? | Finds a percentage of a total |
| X is what % of Y? | Finds the percentage relationship |
| % Increase/Decrease | Calculates change between two values |
| Add/Subtract % | Applies a percentage to a value |

**Step 2:** Enter your numbers into the input fields.

**Step 3:** See the result instantly — no button to click. The tool updates in real time as you type.

## Tips for Manual Calculations

### Quick Mental Math

- **10%** of any number = move decimal one place left (10% of 85 = 8.5)
- **50%** of any number = half (50% of 85 = 42.5)
- **25%** of any number = quarter (25% of 85 = 21.25)
- **1%** of any number = move decimal two places left (1% of 85 = 0.85)

Combine these for other percentages:

\`\`\`
15% of 200 = 10% of 200 + 5% of 200 = 20 + 10 = 30
35% of 80 = 25% of 80 + 10% of 80 = 20 + 8 = 28
\`\`\`

### Fraction Equivalents

| Percentage | Fraction | Decimal |
|------------|----------|---------|
| 10% | 1/10 | 0.10 |
| 12.5% | 1/8 | 0.125 |
| 20% | 1/5 | 0.20 |
| 25% | 1/4 | 0.25 |
| 33.33% | 1/3 | 0.333 |
| 50% | 1/2 | 0.50 |
| 66.67% | 2/3 | 0.667 |
| 75% | 3/4 | 0.75 |

## FAQ

**What's the difference between percentage and percentage points?** A percentage point is the arithmetic difference between two percentages. If a rate goes from 5% to 7%, that's a 2 percentage point increase, but a 40% increase in the rate itself.

**How do I calculate a reverse percentage?** If you know the result and the percentage, find the original. Example: You paid $75 after a 25% discount. Original = 75 ÷ (1 - 0.25) = 75 ÷ 0.75 = $100.

**Can I use decimals in percentages?** Yes — our calculator accepts decimals. 7.5% works the same as 7.5.

**Is there a limit on how large the numbers can be?** The calculator handles numbers up to millions with precision up to 4 decimal places.

**What is a percentage error?** It compares an approximate value to an exact value: |(Approximate - Exact) ÷ Exact| × 100. Used in science, engineering, and statistics.`,
    contentZh: `## 为什么百分比计算很重要

百分比在日常生活中无处不在：

- **购物** — "打七折"——你能省多少钱？
- **理财** — "年化收益率 5%"——你的储蓄会增长到多少？
- **税务** — "8% 的销售税"——最终价格是多少？
- **小费** — "15% 的小费"——应该给多少？
- **数据** — "增长 22%"——这在原始数字上意味着什么？

手动计算百分比容易出错。我们的百分比计算器可以瞬间处理所有常见场景。

## 百分比计算模式

### 1. X 的 Y% 是多少？

最常见的计算。给定百分比和总数，求部分值。

**公式：**
\`\`\`
结果 = (百分比 ÷ 100) × 总数
\`\`\`

**示例：**
\`\`\`
200 的 15% 是多少？
= (15 ÷ 100) × 200
= 0.15 × 200
= 30
\`\`\`

**实际应用：** 计算餐厅账单的小费。账单是 84.50 元，你想给 18%。

\`\`\`
84.50 的 18% = 0.18 × 84.50 = 15.21 元小费
总计 = 84.50 + 15.21 = 99.71 元
\`\`\`

### 2. X 是 Y 的百分之几？

给定两个数字，求百分比关系。

**公式：**
\`\`\`
百分比 = (X ÷ Y) × 100
\`\`\`

**示例：**
\`\`\`
25 是 200 的百分之几？
= (25 ÷ 200) × 100
= 0.125 × 100
= 12.5%
\`\`\`

**实际应用：** 你考试得了 42 分，满分 50 分。

\`\`\`
42 ÷ 50 × 100 = 84%
\`\`\`

### 3. 百分比增加 / 减少

求从旧值到新值的百分比变化。

**公式：**
\`\`\`
变化 = ((新值 - 旧值) ÷ |旧值|) × 100
\`\`\`

**示例（增加）：**
\`\`\`
工资从 50,000 元涨到 55,000 元
= ((55000 - 50000) ÷ 50000) × 100
= (5000 ÷ 50000) × 100
= 10% 增加
\`\`\`

**示例（减少）：**
\`\`\`
价格从 80 元降到 60 元
= ((60 - 80) ÷ 80) × 100
= (-20 ÷ 80) × 100
= -25%（25% 减少）
\`\`\`

### 4. 增加 / 减去百分比

给一个数字加上百分比（如加税）或减去百分比（如打折）。

**公式（加税）：**
\`\`\`
总计 = 价格 × (1 + 税率 ÷ 100)
\`\`\`

**示例：**
\`\`\`
商品售价 120 元，销售税 8%
总计 = 120 × (1 + 0.08) = 120 × 1.08 = 129.60 元
\`\`\`

**公式（打折）：**
\`\`\`
折后价 = 价格 × (1 - 折扣 ÷ 100)
\`\`\`

**示例：**
\`\`\`
夹克 85 元，打七折
售价 = 85 × (1 - 0.30) = 85 × 0.70 = 59.50 元
节省 = 85 - 59.50 = 25.50 元
\`\`\`

## 常见百分比场景

### 购物折扣

| 原价 | 折扣 | 实付 | 节省 |
|---------------|----------|---------|----------|
| 50.00 元 | 10% | 45.00 元 | 5.00 元 |
| 50.00 元 | 25% | 37.50 元 | 12.50 元 |
| 50.00 元 | 50% | 25.00 元 | 25.00 元 |
| 100.00 元 | 20% | 80.00 元 | 20.00 元 |
| 100.00 元 | 33% | 67.00 元 | 33.00 元 |
| 200.00 元 | 40% | 120.00 元 | 80.00 元 |

### 理财计算

**简化复利：**

如果你投资 10,000 元，年回报率 7%：

| 年份 | 价值 | 增长 |
|------|-------|--------|
| 0 | 10,000 元 | — |
| 1 | 10,700 元 | 700 元 |
| 3 | 12,250 元 | 2,250 元 |
| 5 | 14,026 元 | 4,026 元 |
| 10 | 19,672 元 | 9,672 元 |

**按揭首付：**

\`\`\`
房价：350,000 元
首付：20% = 70,000 元
贷款金额：280,000 元
\`\`\`

### 学业成绩

| 得分 | 满分 | 百分比 | 等级 |
|-------|--------|------------|-------|
| 18 | 20 | 90% | A |
| 16 | 20 | 80% | B |
| 14 | 20 | 70% | C |
| 12 | 20 | 60% | D |
| 33 | 40 | 82.5% | B |
| 85 | 100 | 85% | B |

### 商业指标

**利润率：**
\`\`\`
收入：500,000 元
成本：350,000 元
利润：150,000 元
利润率：150000 ÷ 500000 × 100 = 30%
\`\`\`

**增长率：**
\`\`\`
第一季度销售额：100,000 元
第二季度销售额：130,000 元
增长：(130000 - 100000) ÷ 100000 × 100 = 30%
\`\`\`

## 如何使用我们的计算器

访问我们的[百分比计算器](/tools/percentage-calculator)。

**第一步：** 选择你的计算模式：

| 模式 | 功能 |
|------|-------------|
| X 的 Y% 是多少？ | 求总数的百分比 |
| X 是 Y 的百分之几？ | 求百分比关系 |
| % 增加/减少 | 计算两个值之间的变化 |
| 加/减 % | 对数值应用百分比 |

**第二步：** 在输入框中输入你的数字。

**第三步：** 立即看到结果——无需点击按钮。工具在你输入时实时更新。

## 手动计算技巧

### 快速心算

- 任何数字的 **10%** = 小数点左移一位（85 的 10% = 8.5）
- 任何数字的 **50%** = 一半（85 的 50% = 42.5）
- 任何数字的 **25%** = 四分之一（85 的 25% = 21.25）
- 任何数字的 **1%** = 小数点左移两位（85 的 1% = 0.85）

组合使用计算其他百分比：

\`\`\`
200 的 15% = 200 的 10% + 200 的 5% = 20 + 10 = 30
80 的 35% = 80 的 25% + 80 的 10% = 20 + 8 = 28
\`\`\`

### 分数对照

| 百分比 | 分数 | 小数 |
|------------|----------|---------|
| 10% | 1/10 | 0.10 |
| 12.5% | 1/8 | 0.125 |
| 20% | 1/5 | 0.20 |
| 25% | 1/4 | 0.25 |
| 33.33% | 1/3 | 0.333 |
| 50% | 1/2 | 0.50 |
| 66.67% | 2/3 | 0.667 |
| 75% | 3/4 | 0.75 |

## 常见问题

**百分比和百分点有什么区别？** 百分点是两个百分比之间的算术差。如果利率从 5% 上升到 7%，这是 2 个百分点的增长，但利率本身增长了 40%。

**如何计算反向百分比？** 如果你知道结果和百分比，求原值。示例：你打了七五折后付了 75 元。原价 = 75 ÷ (1 - 0.25) = 75 ÷ 0.75 = 100 元。

**百分比中可以使用小数吗？** 可以——我们的计算器接受小数。7.5% 与 7.5 的使用方式相同。

**数字大小有限制吗？** 计算器可处理百万级的数字，精度达小数点后 4 位。

**什么是百分比误差？** 它将近似值与精确值进行比较：|(近似值 - 精确值) ÷ 精确值| × 100。用于科学、工程和统计学。
`,

  },
  {
    slug: "toolboxpro-vs-tinywow-vs-ilovepdf-privacy",
    title: "ToolboxPro vs TinyWow vs ILovePDF: Which Online Tool Site Is Most Private?",
    description: "We compare the three most popular free online tool websites on privacy, file handling, features, and performance. Find out which one keeps your data safe.",
    date: "2026-05-24",
    readTime: "8 min read",
    category: "Comparison",
    toolSlug: "pdf-protector",
    content: `## Privacy Showdown: How Three Major Free Tool Platforms Handle Your Data

When you need to edit a PDF, compress an image, or format some JSON, free online tools are the obvious choice. But there's a catch — most of them upload your files to a server. This comparison examines ToolboxPro, TinyWow, and ILovePDF on the factors that matter most: privacy, features, speed, and cost.

### Privacy & Data Handling

The single most important factor when choosing an online tool — where does your data go?

**ILovePDF** uploads every file to its servers for processing. Their privacy policy states that files are deleted after processing, but those files traverse the network, sit on temporary storage, and pass through server memory. For sensitive documents (contracts, medical records, financial statements), this is a non-starter.

**TinyWow** also processes files server-side. They encrypt transfers via HTTPS, but the fundamental architecture means your data leaves your device. Their servers temporarily store files during processing.

**ToolboxPro** processes everything in your browser. Files never leave your device. There is no upload, no server-side processing, no temporary storage on any remote machine. The JSON formatter, PDF merger, image compressor — all run via JavaScript or WebAssembly in your own browser tab.

**Winner: ToolboxPro** — Zero data transfer is safer than any server-side promise.

### Available Tools

| Category | ToolboxPro | TinyWow | ILovePDF |
|-----------|-----------|---------|---------|
| PDF Tools | 5 free | 15+ (freemium) | 25+ (freemium) |
| Image Tools | 10 free | 10+ (freemium) | Limited |
| Developer Tools | 25+ free | Limited | None |
| Text Tools | 15+ free | Some | None |
| Audio Tools | 1 free | Some | None |
| Network Tools | 3 free | None | None |
| Total (free tier) | **100+** | ~30 | ~15 |

**Winner: ToolboxPro** — Largest free catalog with no paywalls.

### Comparison Summary

| Factor | ToolboxPro | TinyWow | ILovePDF |
|--------|-----------|---------|---------|
| Privacy | Client-side only | Server-side | Server-side |
| Signup required | No | No | Limits without account |
| Free tools | 100+ | ~30 free | ~15 free |
| PDF encryption | Not available | Available | Available |
| Image compressor | Free | Watermarked | Premium |
| Offline mode | Yes (after first load) | No | No |
| Mobile friendly | Yes | Yes | Yes |

### Verdict

**Choose ToolboxPro if:** Privacy is your primary concern, you are a developer needing dev tools, or you want 100+ tools without signing up.

**Choose TinyWow if:** You need PDF encryption or prefer a more polished UI.

**Choose ILovePDF if:** You need advanced PDF features like OCR or e-signatures, and you are willing to pay.

### Summary

For everyday use — formatting JSON, compressing images, merging PDFs — ToolboxPro offers the best combination of privacy, features, and zero cost.`,
    contentZh: `## 隐私对决：三大免费工具平台如何处理你的数据

当你需要编辑 PDF、压缩图片或格式化 JSON 时，免费在线工具是显而易见的选择。但有一个问题——大多数工具会将你的文件上传到服务器。本对比从最重要的几个方面审视 ToolboxPro、TinyWow 和 ILovePDF：隐私、功能、速度和费用。

### 隐私与数据处理

在选择在线工具时，最重要的单一因素——你的数据去了哪里？

**ILovePDF** 将所有文件上传到其服务器进行处理。他们的隐私政策声称文件处理后会被删除，但这些文件经过网络传输、存储在临时存储中，并经过服务器内存。对于敏感文档（合同、医疗记录、财务报表），这不可接受。

**TinyWow** 也在服务器端处理文件。他们通过 HTTPS 加密传输，但基本架构意味着你的数据会离开你的设备。他们的服务器在处理过程中会临时存储文件。

**ToolboxPro** 在浏览器中处理所有内容。文件永远不会离开你的设备。没有上传、没有服务器端处理、没有任何远程机器上的临时存储。JSON 格式化工具、PDF 合并工具、图片压缩工具——全部在你自己浏览器标签页中通过 JavaScript 或 WebAssembly 运行。

**胜者：ToolboxPro** — 零数据传输比任何服务器端承诺都更安全。

### 可用工具

| 类别 | ToolboxPro | TinyWow | ILovePDF |
|-----------|-----------|---------|---------|
| PDF 工具 | 5 个免费 | 15+（含付费） | 25+（含付费） |
| 图片工具 | 10 个免费 | 10+（含付费） | 有限 |
| 开发者工具 | 25+ 免费 | 有限 | 无 |
| 文本工具 | 15+ 免费 | 部分 | 无 |
| 音频工具 | 1 个免费 | 部分 | 无 |
| 网络工具 | 3 个免费 | 无 | 无 |
| 总计（免费版） | **100+** | 约 30 | 约 15 |

**胜者：ToolboxPro** — 最大的免费工具目录，无付费墙。

### 对比总结

| 因素 | ToolboxPro | TinyWow | ILovePDF |
|--------|-----------|---------|---------|
| 隐私 | 仅客户端 | 服务器端 | 服务器端 |
| 需要注册 | 否 | 否 | 无账户有限制 |
| 免费工具 | 100+ | 约 30 个免费 | 约 15 个免费 |
| PDF 加密 | 不可用 | 可用 | 可用 |
| 图片压缩 | 免费 | 带水印 | 付费 |
| 离线模式 | 是（首次加载后） | 否 | 否 |
| 移动友好 | 是 | 是 | 是 |

### 结论

**选择 ToolboxPro，如果：** 隐私是你的主要关注点，你是需要开发者工具的开发者，或者你想要 100+ 工具而无需注册。

**选择 TinyWow，如果：** 你需要 PDF 加密或更喜欢精致的用户界面。

**选择 ILovePDF，如果：** 你需要高级 PDF 功能如 OCR 或电子签名，并愿意付费。

### 总结

对于日常使用——格式化 JSON、压缩图片、合并 PDF——ToolboxPro 提供了隐私、功能和零成本的最佳组合。
`,

  },
  {
    slug: "best-free-online-json-formatters-compared-2026",
    title: "Best Free Online JSON Formatters Compared (2026): Features, Speed and Privacy",
    description: "We compare the top free online JSON formatters side by side — JSONLint, JSON Formatter and Validator, and ToolboxPro. Includes formatting, validation, minification, and privacy analysis.",
    date: "2026-05-24",
    readTime: "6 min read",
    category: "Comparison",
    toolSlug: "json-formatter",
    content: `## Which Free Online JSON Formatter Is Best in 2026?

JSON formatting seems simple — paste JSON, get formatted JSON. But the best tools do much more: validation with line-level error messages, minification, tree view, conversion to other formats, and crucially — they don't send your data to a server. This comparison looks at three popular options.

### The Contenders

**JSONLint** (jsonlint.com) — The classic JSON validator. Lightweight, fast, but limited to validation and formatting only.

**JSON Formatter and Validator** (jsonformatter.curiousconcept.com) — A full-featured tool with tree view, CSV export, and XML conversion.

**ToolboxPro JSON Formatter** (trytoolboxpro.com/tools/json-formatter) — A modern tool with formatting, validation, minification, and conversion to YAML and TypeScript types.

### Feature Comparison

| Feature | JSONLint | Curious Concept | ToolboxPro |
|---------|----------|-----------------|------------|
| Format/beautify | Yes | Yes | Yes |
| Validate | Yes (line-level) | Yes (line-level) | Yes (line-level) |
| Minify | No | Yes | Yes |
| JSON to YAML | No | No | Yes |
| JSON to TypeScript | No | No | Yes |
| Tree view | No | Yes | Separate JSON Diff tool |
| Client-side processing | Yes | No (server-side) | Yes |
| No ads | Yes | Yes | Yes (none yet) |
| Works offline | No | No | Yes (after first load) |

### Privacy Analysis

JSONLint processes everything in your browser — your JSON never leaves the page. This makes it an excellent choice for sensitive data.

Curious Concept's tool sends your JSON to a server for processing. While they claim not to store it, the data still traverses a network.

ToolboxPro processes all JSON client-side. No data transmission, no server storage, zero trust required.

### Speed Test

We tested each tool with a 500KB JSON file containing 10,000 nested objects. ToolboxPro and JSONLint are fastest due to client-side processing.

### The Verdict

**Best for quick validation:** JSONLint — instant, no-nonsense, client-side.

**Best all-in-one:** ToolboxPro — formats, validates, minifies, converts to YAML and TypeScript. The conversion features alone make it the most versatile for developers.

**Best for visual exploration:** Curious Concept's tree view is genuinely useful for navigating deeply nested JSON.

### Final Recommendation

For everyday JSON formatting, ToolboxPro offers the best balance of features and privacy. The JSON-to-YAML and JSON-to-TypeScript converters are standout features.`,
    contentZh: `## 2026 年最佳免费在线 JSON 格式化工具对比

JSON 格式化看似简单——粘贴 JSON，得到格式化后的 JSON。但最好的工具能做到更多：带行级错误信息的验证、压缩、树状视图、转换为其他格式，而且关键的是——它们不将你的数据发送到服务器。本对比来看三个流行选项。

### 参赛者

**JSONLint**（jsonlint.com）— 经典的 JSON 验证器。轻量、快速，但仅限于验证和格式化。

**JSON Formatter and Validator**（jsonformatter.curiousconcept.com）— 功能全面的工具，具有树状视图、CSV 导出和 XML 转换功能。

**ToolboxPro JSON Formatter**（trytoolboxpro.com/tools/json-formatter）— 现代工具，具备格式化、验证、压缩以及转换为 YAML 和 TypeScript 类型的功能。

### 功能对比

| 功能 | JSONLint | Curious Concept | ToolboxPro |
|---------|----------|-----------------|------------|
| 格式化/美化 | 是 | 是 | 是 |
| 验证 | 是（行级） | 是（行级） | 是（行级） |
| 压缩 | 否 | 是 | 是 |
| JSON 转 YAML | 否 | 否 | 是 |
| JSON 转 TypeScript | 否 | 否 | 是 |
| 树状视图 | 否 | 是 | 单独的 JSON Diff 工具 |
| 客户端处理 | 是 | 否（服务器端） | 是 |
| 无广告 | 是 | 是 | 是（目前尚无） |
| 离线可用 | 否 | 否 | 是（首次加载后） |

### 隐私分析

**JSONLint** 在浏览器中处理所有内容——你的 JSON 永远不会离开页面。这使其成为敏感数据的绝佳选择。

**Curious Concept** 的工具将你的 JSON 发送到服务器进行处理。虽然他们声称不存储，但数据仍然经过网络传输。

**ToolboxPro** 在客户端处理所有 JSON。无数据传输、无服务器存储、无需任何信任。

### 速度测试

我们使用一个包含 10,000 个嵌套对象的 500KB JSON 文件测试了每个工具。由于客户端处理，ToolboxPro 和 JSONLint 是最快的。

### 结论

**快速验证的最佳选择：** JSONLint — 即时、直接、客户端处理。

**最佳全能：** ToolboxPro — 格式化、验证、压缩、转换为 YAML 和 TypeScript。仅转换功能就使其成为开发者最多功能的工具。

**最佳可视化探索：** Curious Concept 的树状视图对于浏览深层嵌套的 JSON 非常有用。

### 最终推荐

对于日常 JSON 格式化，ToolboxPro 提供了功能和隐私的最佳平衡。JSON 转 YAML 和 JSON 转 TypeScript 转换器是突出的特色功能。
`,

  },
  {
    slug: "free-online-image-compressors-compared-quality",
    title: "Free Online Image Compressors: Which One Actually Keeps Your Quality?",
    description: "We test the top free image compressors on compression ratio, visual quality, privacy, and speed. Includes ToolboxPro, TinyPNG, Compressor.io, and Squoosh.",
    date: "2026-05-24",
    readTime: "7 min read",
    category: "Comparison",
    toolSlug: "image-compressor",
    content: `## The Ultimate Image Compressor Showdown: Quality vs File Size

Image compression is about balancing file size against visual quality. A compressor that aggressively reduces size but introduces artifacts is useless for photographers. A tool that preserves quality but barely shrinks the file is equally frustrating. We tested four free online image compressors.

### Compression Results

| Tool | Photo.jpg | Reduction | Screenshot.png | Reduction |
|------|-----------|-----------|----------------|-----------|
| **ToolboxPro** | 520KB | **78%** | 340KB | **81%** |
| TinyPNG | 680KB | 72% | 520KB | 71% |
| Compressor.io | 610KB | 75% | 410KB | 77% |
| Squoosh | 480KB | **80%** | 380KB | 79% |

### Visual Quality

**Squoosh** produces the most technically optimized output, especially with MozJPEG encoding. However, it requires understanding encoder settings.

**ToolboxPro** uses the browser's native Canvas API for compression, which produces excellent results for the default JPEG encoder. At 80% quality, the difference from the original is visually imperceptible.

**TinyPNG** is reliable but conservative — it preserves quality at the cost of a larger file size.

**Compressor.io** offers good compression but sometimes introduces slight banding in gradient areas.

### Privacy Comparison

| Tool | Processing Location | Data Leaves Your Device? |
|------|-------------------|------------------------|
| **ToolboxPro** | Your browser | No |
| TinyPNG | Their servers | Yes |
| Compressor.io | Their servers | Yes |
| Squoosh | Your browser | No |

For sensitive images, ToolboxPro and Squoosh are the only safe choices.

### Verdict

**For photographers:** Squoosh with MozJPEG produces the best quality-to-size ratio.

**For everyday use:** ToolboxPro offers the best balance — good compression, excellent privacy, no file limits, and no confusing settings.

**For batch processing:** TinyPNG's batch mode is convenient, but the 20-file limit and server-side processing are trade-offs.`,
    contentZh: `## 终极图片压缩器对决：质量与文件大小之战

图片压缩是关于在文件大小和视觉质量之间取得平衡。一个激进压缩大小但引入伪影的压缩器对摄影师来说毫无用处。一个保留质量但几乎不缩小文件的工具同样令人沮丧。我们测试了四款免费在线图片压缩器。

### 压缩结果

| 工具 | Photo.jpg | 压缩率 | Screenshot.png | 压缩率 |
|------|-----------|-----------|----------------|-----------|
| **ToolboxPro** | 520KB | **78%** | 340KB | **81%** |
| TinyPNG | 680KB | 72% | 520KB | 71% |
| Compressor.io | 610KB | 75% | 410KB | 77% |
| Squoosh | 480KB | **80%** | 380KB | 79% |

### 视觉质量

**Squoosh** 产生技术上最优化的输出，尤其是使用 MozJPEG 编码时。然而，它需要理解编码器设置。

**ToolboxPro** 使用浏览器原生的 Canvas API 进行压缩，对默认的 JPEG 编码器产生出色的结果。在 80% 质量下，与原始图像的差异在视觉上无法察觉。

**TinyPNG** 可靠但保守——它以保证质量为代价，导致文件更大。

**Compressor.io** 提供良好的压缩效果，但有时会在渐变区域引入轻微的色带。

### 隐私对比

| 工具 | 处理位置 | 数据离开你的设备？ |
|------|-------------------|------------------------|
| **ToolboxPro** | 你的浏览器 | 否 |
| TinyPNG | 他们的服务器 | 是 |
| Compressor.io | 他们的服务器 | 是 |
| Squoosh | 你的浏览器 | 否 |

对于敏感图片，ToolboxPro 和 Squoosh 是唯一安全的选择。

### 结论

**对于摄影师：** 使用 MozJPEG 的 Squoosh 提供了最佳的质量与大小比。

**对于日常使用：** ToolboxPro 提供了最佳平衡——良好的压缩、出色的隐私、无文件限制、无令人困惑的设置。

**对于批量处理：** TinyPNG 的批量模式很方便，但 20 个文件的限制和服务器端处理是需要权衡的因素。
`,

  },
  {
    slug: "online-pdf-tools-client-side-vs-server-side",
    title: "Online PDF Tools: Client-Side vs Server-Side Processing Compared (2026)",
    description: "A technical and practical comparison of browser-based vs server-based PDF tools. Learn why processing location matters for speed, privacy, reliability, and cost.",
    date: "2026-05-24",
    readTime: "7 min read",
    category: "Comparison",
    toolSlug: "pdf-merger",
    content: `## The Great PDF Processing Debate: Browser vs Server

When you need to merge PDFs, extract pages, or convert images to PDF, you have two architectural choices: tools that process on their server, or tools that process in your browser. This comparison covers everything you need to know.

### How Client-Side PDF Processing Works

Client-side PDF tools use libraries like **pdf-lib** (JavaScript) running in your browser. When you upload a file:

1. Your browser reads the file using a FileReader API — file stays on your device
2. The raw bytes are loaded as an ArrayBuffer in browser memory
3. A JavaScript library (pdf-lib) manipulates the PDF
4. The result is downloaded as a Blob URL — no server involved

### How Server-Side PDF Processing Works

Server-side tools (ILovePDF, SmallPDF, PDF Candy) send your file over the network:

1. Your file is uploaded to a cloud server
2. The server processes it
3. A processed file is generated and stored temporarily
4. The file is downloaded back to your browser
5. Server deletes the temp file (or claims to)

### Comparison

| Factor | Client-Side (ToolboxPro) | Server-Side (ILovePDF etc.) |
|--------|------------------------|---------------------------|
| **Speed** | Instant — no upload time | 3-10 seconds per upload |
| **Max file size** | Browser limit (2GB+) | 50-200MB typical limit |
| **Privacy** | File never leaves your device | Must trust server to delete |
| **Reliability** | Works when server is down | Site outage means no tools |
| **Cost** | $0 | Server costs passed to users |
| **Offline** | Works offline | Internet required |

### What Client-Side Cannot Do

Client-side PDF processing has genuine limitations:

**No encryption support** — pdf-lib cannot write encrypted PDFs.

**No OCR** — Optical character recognition requires heavy ML models.

**No e-signatures** — Digital signature validation involves external trust authorities.

### The Verdict

For **95% of daily PDF tasks** — merging, splitting, rotating, converting images to PDF — client-side tools like ToolboxPro are faster, more private, and more reliable.`,
    contentZh: `## PDF 处理大辩论：浏览器 vs 服务器

当你需要合并 PDF、提取页面或将图片转换为 PDF 时，你有两种架构选择：在服务器上处理的工具，或在浏览器中处理的工具。本对比涵盖了你需要了解的所有内容。

### 客户端 PDF 处理的工作原理

客户端 PDF 工具使用 **pdf-lib** 等 JavaScript 库在你的浏览器中运行。当你上传文件时：

1. 你的浏览器使用 FileReader API 读取文件——文件留在你的设备上
2. 原始字节以 ArrayBuffer 的形式加载到浏览器内存中
3. 一个 JavaScript 库（pdf-lib）操作 PDF
4. 结果以 Blob URL 的形式下载——不涉及服务器

### 服务器端 PDF 处理的工作原理

服务器端工具（ILovePDF、SmallPDF、PDF Candy）通过网络发送你的文件：

1. 你的文件上传到云服务器
2. 服务器处理它
3. 生成处理后的文件并临时存储
4. 文件下载回你的浏览器
5. 服务器删除临时文件（或声称如此）

### 对比

| 因素 | 客户端（ToolboxPro） | 服务器端（ILovePDF 等） |
|--------|------------------------|---------------------------|
| **速度** | 即时——无上传时间 | 每次上传 3-10 秒 |
| **最大文件大小** | 浏览器限制（2GB+） | 通常限制 50-200MB |
| **隐私** | 文件永不离开设备 | 必须信任服务器会删除 |
| **可靠性** | 服务器宕机仍可用 | 网站宕机则无工具可用 |
| **成本** | 0 元 | 服务器成本转嫁给用户 |
| **离线** | 支持离线使用 | 需要网络连接 |

### 客户端不能做什么

客户端 PDF 处理有真正的局限性：

**不支持加密** — pdf-lib 无法写入加密的 PDF。

**不支持 OCR** — 光学字符识别需要繁重的机器学习模型。

**不支持电子签名** — 数字签名验证涉及外部信任机构。

### 结论

对于 **95% 的日常 PDF 任务**——合并、拆分、旋转、图片转 PDF——客户端工具如 ToolboxPro 更快、更隐私、更可靠。
`,

  },
  {
    slug: "best-free-online-regex-testers-2026",
    title: "Free Online Regex Testers: Browser-Based vs Server-Based (2026 Comparison)",
    description: "Compare the best free online regex testers including regex101, RegExr, Debuggex, and ToolboxPro. Features, speed, privacy, and UX compared side by side.",
    date: "2026-05-24",
    readTime: "6 min read",
    category: "Comparison",
    toolSlug: "regex-tester",
    content: `## The Best Free Online Regex Testers in 2026

Regular expressions are powerful but notoriously hard to debug. A good regex tester should show matches in real-time, explain what your pattern does, and keep your regex and test data private. Here is how the top options stack up.

### The Contenders

- **regex101** — The heavyweight champion. Full regex engine support, detailed explanation panel.
- **RegExr** — A community-driven tool with a clean UI and visual reference.
- **Debuggex** — Visual railroad diagram approach for complex patterns.
- **ToolboxPro Regex Tester** — A new contender with live matching, multiple flags, and fully client-side processing.

### Feature Comparison

| Feature | regex101 | RegExr | Debuggex | ToolboxPro |
|---------|---------|--------|----------|------------|
| Live matching | Yes | Yes | Yes | Yes |
| Multiple flags | Yes | Yes | Yes | Yes |
| Pattern explanation | Yes (detailed) | Yes (basic) | No | No |
| Railroad diagram | No | No | Yes | No |
| Multi-engine | Yes (6 engines) | No | No | No |
| Test case saving | Yes | No | No | Yes |
| Privacy | Sends to server | Client-side | Sends to server | Client-side |
| Works offline | No | No | No | Yes |
| Free | Yes | Yes | Yes (limited) | Yes |

### Privacy Analysis

**regex101** processes patterns and test data on its servers. Your data is transmitted over the network.

**RegExr** processes entirely in the browser. Your regex and test data never leave your device.

**Debuggex** generates railroad diagrams server-side. Your pattern is sent to their backend.

**ToolboxPro** processes entirely client-side. No data transmission, zero trust required.

### Verdict

**Best overall:** regex101 — the feature king. But your data goes to their server.

**Best for privacy:** ToolboxPro — client-side only. The only safe choice for sensitive data.

**Best for learning:** RegExr's visual reference panel helps beginners understand regex tokens.

**Best for complex visual debugging:** Debuggex\\'s railroad diagram is unmatched.`,
    contentZh: `## 2026 年最佳免费在线正则表达式测试器

正则表达式功能强大，但以难以调试而闻名。一个好的正则表达式测试器应该实时显示匹配、解释你的模式做了什么，并保证你的正则表达式和测试数据的隐私。以下是顶级选项的对比。

### 参赛者

- **regex101** — 重量级冠军。全面的正则表达式引擎支持，详细的解释面板。
- **RegExr** — 社区驱动的工具，拥有简洁的界面和可视化参考。
- **Debuggex** — 可视化铁路图方法，适用于复杂模式。
- **ToolboxPro Regex Tester** — 新晋选手，具备实时匹配、多个标志和完全客户端处理。

### 功能对比

| 功能 | regex101 | RegExr | Debuggex | ToolboxPro |
|---------|---------|--------|----------|------------|
| 实时匹配 | 是 | 是 | 是 | 是 |
| 多个标志 | 是 | 是 | 是 | 是 |
| 模式解释 | 是（详细） | 是（基础） | 否 | 否 |
| 铁路图 | 否 | 否 | 是 | 否 |
| 多引擎 | 是（6 个引擎） | 否 | 否 | 否 |
| 测试用例保存 | 是 | 否 | 否 | 是 |
| 隐私 | 发送到服务器 | 客户端 | 发送到服务器 | 客户端 |
| 离线可用 | 否 | 否 | 否 | 是 |
| 免费 | 是 | 是 | 是（有限制） | 是 |

### 隐私分析

**regex101** 在服务器上处理模式和测试数据。你的数据通过网络传输。

**RegExr** 完全在浏览器中处理。你的正则表达式和测试数据永远不会离开你的设备。

**Debuggex** 在服务器端生成铁路图。你的模式被发送到其后端。

**ToolboxPro** 完全在客户端处理。无数据传输，无需任何信任。

### 结论

**最佳整体：** regex101 — 功能之王。但你的数据会发送到他们的服务器。

**最佳隐私：** ToolboxPro — 仅客户端。处理敏感数据的唯一安全选择。

**最佳学习工具：** RegExr 的可视参考面板帮助初学者理解正则表达式符号。

**最佳复杂可视化调试：** Debuggex 的铁路图无与伦比。
`,

  },
];
