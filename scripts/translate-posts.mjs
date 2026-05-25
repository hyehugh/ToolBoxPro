// Script to add contentZh fields to blog posts
import fs from 'fs';
import path from 'path';

const filePath = path.resolve('D:/01_Coding/60_工具网站/toolboxpro/lib/blog/data.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// Translations map: slug -> contentZh
const translations = {};

// ============ POST 1: how-to-format-json-online ============
translations['how-to-format-json-online'] = `## JSON 格式化：常见错误、调试技巧与格式比较

JSON（JavaScript 对象表示法）已成为网络数据交换的通用语言。从 REST API 到配置文件，再到 NoSQL 数据库，JSON 无处不在——但它也是最常见的细微 Bug 来源之一。一个缺失的逗号、一个多余的行尾逗号或一个放错位置的引号，就可能导致整个应用程序崩溃。本指南涵盖 JSON 格式化的基础知识，介绍最常见的错误及其修复方法，比较 JSON 与其他替代格式，并提供实用的调试技巧。

### JSON 语法基础

JSON 看似简单，实际上它只支持六种值类型：字符串（双引号括起）、数字（整数或浮点数）、布尔值（true/false）、null、对象（花括号中的键值对）和数组（方括号中的有序列表）。仅此而已。没有日期、没有注释、没有函数、没有 undefined。

规则非常严格：

- **键名必须使用双引号括起的字符串。** 单引号和不加引号的标识符（在 JavaScript 中常见）在 JSON 中无效。
- **字符串必须使用双引号。** 单引号、反引号或不加引号都无效。
- **不允许行尾逗号。** 对象和数组的最后一个元素后面不能有逗号。
- **数字必须是十进制。** 不允许前导零（"0"本身除外），禁止使用十六进制、八进制或二进制字面量。
- **只有上述六种类型有效。** 没有日期、没有注释（尽管某些解析器将其作为扩展接受）、没有未经 Base64 编码的二进制数据。

| 规则 | 有效 JSON | 无效 JSON |
|------|----------|----------|
| 键名加引号 | \\\`{"name": "Alice"}\\\` | \\\`{name: "Alice"}\\\` |
| 字符串双引号 | \\\`{"msg": "hello"}\\\` | \\\`{"msg": 'hello'}\\\` |
| 无行尾逗号 | \\\`[1, 2, 3]\\\` | \\\`[1, 2, 3,]\\\` |
| 数字十进制 | \\\`{"n": 42}\\\` | \\\`{"n": 0x2A}\\\` |
| 无注释 | （仅压缩版） | \\\`{/* comment */}\\\` |
| Unicode 转义 | \\\`"\\\\u0048"\\\` | \\\`"\\\\x48"\\\` |

如果你每天都要处理 JSON，一个好用的格式化和验证工具必不可少。尝试使用 [/tools/json-formatter](/tools/json-formatter) 来美化、验证和实时调试你的 JSON。

### 常见 JSON 错误及修复方法

即使是经验丰富的开发者也会犯这些错误。以下是如何发现并修复最常见的问题：

**1. 行尾逗号。** 这是最频繁的 JSON 错误。\\\`[1, 2, 3,]\\\` 在人类看来是正确的，但在严格的 JSON 中无效（尽管一些较新的 JavaScript 引擎在非严格模式下容忍它）。解决方法：删除最后一个元素后的逗号。许多格式化工具和 linter 可以自动修复此问题。

**2. 未加引号或单引号的键名。** \\\`{name: "value"}\\\` 和 \\\`{'name': "value"}\\\` 都无效。所有 JSON 对象键名必须用双引号括起：\\\`{"name": "value"}\\\`。这一点会难倒许多从 JavaScript 转来的开发者，因为在 JavaScript 中，不加引号的键名在对象字面量中是有效的。

**3. 使用注释。** JSON 不支持注释。开发者经常尝试添加 // 或 /* */ 注释，尤其是在配置文件中。如果需要注释，可以考虑 JSON5（一个超集，增加了注释、行尾逗号和不加引号的键名）、YAML，或在解析前通过构建步骤去除注释。

**4. 单引号字符串。** JSON 要求所有字符串值使用双引号。\\\`{'greeting': 'hello'}\\\` 无效——请使用 \\\`{"greeting": "hello"}\\\` 代替。

**5. 带前导零的数字。** \\\`{"id": 0123}\\\` 在严格的 JSON 中无效。前导零在某些上下文中会被解释为八进制。请写为 \\\`{"id": 123}\\\`，如果前导零有意义，则写为 \\\`{"id": "0123"}\\\`（作为字符串）。

**6. 嵌套转义问题。** JSON 值中包含引号或反斜杠的字符串需要正确转义。包含双引号的 JSON 值必须写为 \\\`\\\\"\\\`。反斜杠写为 \\\`\\\\\\\\\\\`。当 JSON 嵌入其他语言时，这可能导致令人困惑的"三重转义"问题。

**7. 错误的数据类型。** 当 API 期望 \\\`true\\\`（布尔值）时发送 \\\`"true"\\\`（字符串），或期望 \\\`123\\\`（数字）时发送 \\\`"123"\\\`（字符串），可能导致静默失败或令人困惑的错误消息。务必检查 API 的类型规范。

| 错误 | 错误示例 | 正确示例 |
|-------|--------|--------|
| 行尾逗号 | \\\`[1, 2,]\\\` | \\\`[1, 2]\\\` |
| 单引号键名 | \\\`{'a': 1}\\\` | \\\`{"a": 1}\\\` |
| 注释 | \\\`{"a": 1} // comment\\\` | （删除注释） |
| 单引号字符串 | \\\`{"a": 'hello'}\\\` | \\\`{"a": "hello"}\\\` |
| 前导零 | \\\`{"a": 01}\\\` | \\\`{"a": 1}\\\` |
| 类型混淆 | \\\`{"a": "true"}\\\` | \\\`{"a": true}\\\` |

如需快速检查任何 JSON 文档，请将其粘贴到 [/tools/json-formatter](/tools/json-formatter) —— 它会高亮显示语法错误的精确位置，并美化输出以便阅读。

### JSON vs. XML vs. YAML：选择数据格式

每种序列化格式都有其优势和劣势。以下是实际对比：

**JSON** 是目前大多数 Web API 和配置的标准。其优势在于简单（仅六种类型）、每种语言都有通用的解析器支持以及语法简洁。缺点包括不支持注释、没有内置日期类型，以及不支持引用或多行字符串（除非转义）。

**XML** 冗长但功能强大。它支持属性、命名空间、模式验证（XSD）、注释和混合内容（文本+子元素）。XML 在以文档为中心的使用场景（XHTML、SVG、RSS 提要、SOAP API）和要求严格验证的环境中表现出色。代价是语法更加冗长——一个简单的个人记录可能比 JSON 多占用 30% 的字符。

**YAML** 优先考虑人类可读性。它使用基于缩进的结构（类似 Python），支持注释、多行字符串（逐字块和折叠块）、锚点和别名（用于 DRY 配置）以及原生日期/时间类型。YAML 在配置文件中非常流行（Kubernetes、Docker Compose、CI/CD 流水线），但也有一些著名的边界情况——\\\`NO\\\` 字符串被解析为 \\\`false\\\`、制表符与空格的问题，以及极其复杂的规范使得安全解析变得困难。

| 特性 | JSON | XML | YAML |
|---------|------|-----|------|
| 冗长程度 | 中等 | 高 | 低 |
| 注释 | 不支持 | 支持 | 支持 |
| 数据类型 | 6 种类型 | 混合内容 | 丰富（日期等） |
| 模式验证 | JSON Schema | XSD, DTD | 无（外部） |
| 原生多行字符串 | 不支持 | 不支持 | 支持 |
| 解析速度 | 快 | 慢 | 中等 |
| 安全问题 | 低 | XML 炸弹, XXE | \\\`!!python/object\\\` 利用 |
| 最适合 | Web API, 配置 | 文档, 模式 | 配置文件 |

### 调试 JSON：工具与技巧

当 JSON 行为异常时，系统化的调试可以节省大量时间。

**1. 先验证。** 在做任何其他事情之前，先通过验证器运行你的 JSON。一个语法错误就可能导致整个文档无法解析。使用 [/tools/json-formatter](/tools/json-formatter)——它会显示解析错误的精确行号和字符位置。

**2. 注意嵌入在字符串中的 JSON。** 当 JSON 嵌入其他格式（HTTP 请求体、数据库列、环境变量）时，外部格式的转义可能会破坏内部 JSON。检查反斜杠是否被加倍（\\\\\\\\ 变成了 \\\\，这是错误的）或完全缺失。

**3. 对大型文档使用模式验证。** 对于复杂的 JSON 结构（1000+ 行），手动检查容易出错。定义 JSON Schema 并据此验证。这可以捕获结构性问题，如缺少必填字段、错误的数据类型和意外出现的额外属性。

**4. 记录原始响应。** 许多调试问题源于静默解析 JSON 的库——错误变成了神秘的异常。始终在解析之前记录原始 HTTP 响应体。一个字符的编码问题（UTF-8 BOM、零宽空格）就可能使看起来很正常的 JSON 无法解析。

**5. 检查不可打印字符。** 有时不可见字符（零宽空格 U+200B、BOM U+FEFF、不间断空格）会混入 JSON 并导致解析失败。十六进制转储或能高亮显示不可打印字符的验证器可以快速发现这些问题。

**6. 测试解析器中的边界情况。** 空对象 \\\`{}\\\`、空数组 \\\`[]\\\`、深层嵌套的结构、非常长的字符串（超过 10 万字符）以及接近精度极限的数字（大于 2^53）都可能在不同的 JSON 解析器中触发不同的行为。如果跨平台兼容性很重要，请在多个解析器上测试你的文档。

## 常见问题解答

**问：JSON 和 JavaScript 对象有什么区别？**  
答：JSON 是一种具有严格语法规则的文本格式——键名必须用双引号括起，字符串必须用双引号括起，只允许六种类型。JavaScript 对象字面量更加宽松（不加引号的键名、单引号、行尾逗号、函数、日期）。所有 JSON 都是有效的 JavaScript，但并非所有 JavaScript 对象字面量都是有效的 JSON。

**问：JSON 可以包含注释吗？**  
答：不可以。JSON 规范（RFC 7159）不允许包含注释。如果需要注释，请使用 JSON5，或在解析前使用注释剥离工具处理你的 JSON 文件。YAML 是包含注释的配置文件的最佳选择。

**问：配置文件应该使用 JSON 还是 YAML？**  
答：YAML 通常更适合配置文件，因为它支持注释、多行字符串并且更具可读性。JSON 更适合机器对机器的数据交换。对于简单的配置，两者都可以——根据团队对每种格式的熟悉程度来选择。

**问：如何格式化 JSON 以便阅读？**  
答：使用 JSON 格式化工具，如 [/tools/json-formatter](/tools/json-formatter)。大多数代码编辑器（VS Code、IntelliJ）也有内置格式化程序（VS Code 中的 Shift+Alt+F）。对于命令行格式化，\\\`jq '.' file.json\\\` 或 \\\`python -m json.tool file.json\\\` 效果很好。

**问：JSON 文档的最大大小是多少？**  
答：没有正式的限制，但存在实际约束。大多数解析器可以处理 100-200 MB 的文档，但解析大型 JSON 文件速度慢且内存消耗大。对于非常大的数据集，请使用流式 JSON 解析器（json-stream、ijson）或考虑替代方案，如换行符分隔的 JSON（NDJSON）或 Protocol Buffers。

**问：如何在 JSON 中处理日期？**  
答：JSON 没有原生日期类型。约定是将日期序列化为 ISO 8601 字符串：\\\`"2024-12-25T10:30:00Z"\\\`。应用程序代码应在反序列化后将这些字符串解析为原生日期对象。一些 API 也使用 Unix 时间戳（自纪元以来的毫秒数）作为数字。

**问：什么是 JSONP，我应该使用它吗？**  
答：JSONP（带填充的 JSON）是一种较旧的跨域请求技术，它使用 \\\`<script>\\\` 标签而不是 XMLHttpRequest。它不安全（没有同源策略，容易受到 XSS 攻击），并且已被 CORS 大量取代。在新应用程序中不要使用 JSONP。`;

console.log('Translations defined for:', Object.keys(translations).length, 'posts');

// For each post slug in the file, find the content closing and add contentZh
// We need to match: content: \`...\`,  and then add contentZh: \`...\`,
// Strategy: Find the pattern "content: \`" and the corresponding closing "\`," then insert contentZh after it

// Since the file uses template literals, let's find each post object and modify it
// We'll work by finding slug patterns and inserting after their content closing

// Simple approach: find each slug and then add contentZh after the content closing
const slugs = Object.keys(translations);
for (const slug of slugs) {
  const zhContent = translations[slug];
  // Find the pattern: after the content closing backtick for this slug's post
  // We'll match each post by its slug and add contentZh after the content field
  
  // The pattern is: the slug line, then some lines, then content: \`...\`, then },
  // We need to find and insert after the content closing backtick + comma
  
  // Let's find by slug and then look for the closing backtick + comma pattern
  const slugRegex = new RegExp(`slug: "${slug}"`);
  const slugMatch = content.match(slugRegex);
  if (!slugMatch) {
    console.log(`Slug "${slug}" not found in file, skipping.`);
    continue;
  }
  
  // Find the position of this slug, then find the next "\`," that closes content
  const slugPos = slugMatch.index;
  const afterSlug = content.slice(slugPos);
  
  // Find the post object end - \`,\n  },
  const postEndMatch = afterSlug.match(/`,\s*\n\s*\},\n/);
  if (!postEndMatch) {
    console.log(`Could not find post end for slug "${slug}"`);
    continue;
  }
  
  const postEndPos = slugPos + postEndMatch.index + postEndMatch[0].length;
  
  // Insert contentZh before the closing of the post object
  const insertion = `    contentZh: \`${zhContent}\`,\n  },\n`;
  content = content.slice(0, postEndPos - postEndMatch[0].length) + `\`,\n    contentZh: \`${zhContent}\`,\n  },\n` + content.slice(postEndPos);
  
  console.log(`Added contentZh for slug: ${slug}`);
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Done!');
