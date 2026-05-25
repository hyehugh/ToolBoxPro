#!/usr/bin/env python3
"""Batch 2: Add contentZh to 9 matched blog posts in data.ts"""

import re

def escape_for_template(text):
    """Escape backticks in the text for use in a template literal.
    In the template literal, ` needs to become \`, and ``` needs to become \`\`\`"""
    # First preserve triple backticks - they become \`\`\`
    # But since single backtick will be escaped first, we need to handle this carefully
    # The source uses ``` for code blocks. In the template literal, this needs to be \`\`\`
    # In the file, this becomes \\`\\`\\`
    # For inline `code`, it needs to be \`code\`
    result = text
    # Escape each backtick
    result = result.replace('`', '\\`')
    return result

# Read the file
# Read the file
filepath = 'D:/01_Coding/60_工具网站/toolboxpro/lib/blog/data.ts'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

translations_text = r"""
SLUG:timestamp-converter
## 什么是 Unix 时间戳？

**Unix 时间戳**（也称为 Epoch 时间）是自 1970 年 1 月 1 日 00:00:00 UTC（Unix 纪元）以来经过的秒数。

当前时间戳大约是 **18 亿**，每秒增加一。

### 为什么是 1970 年？

Unix 诞生于 20 世纪 60 年代末和 70 年代初的贝尔实验室。1970 年 1 月 1 日被选为纪元，因为它是一个简洁、整齐的日期。Ken Thompson 和 Dennis Ritchie 选择了它，全世界都跟随了这一标准。

## 何时会遇到时间戳

时间戳在开发中无处不在：

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

1. **粘贴时间戳** — 自动检测秒或毫秒
2. **立即查看所有格式** — UTC、ISO 8601、本地时间、相对时间
3. **从日历中选择日期** — 获取任意日期的时间戳
4. **一键复制**任意格式

### 在代码中手动转换

\`\`\`javascript
// JavaScript — Date.now() 返回毫秒
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
ts = time.time()  // 1716451200.123456

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

2038 年 1 月 19 日，32 位有符号整数将溢出。时间戳 2147483647（最大 32 位有符号数）将翻转为 -2147483648，对应 1901 年 12 月。

**受影响的对象：** 遗留系统、嵌入式设备、旧数据库、32 位操作系统。

**解决方案：** 使用 64 位整数（可安全使用 2920 亿年）或无符号 32 位整数（可安全使用到 2106 年）。

大多数现代系统已经使用 64 位时间戳，但请检查你的嵌入式设备和旧数据库。

## 时区处理

时间戳始终是 UTC。转换为本地时间纯粹是显示逻辑：

\`\`\`javascript
// 内部始终使用 UTC
const utc = new Date("2026-05-23T12:00:00Z");
console.log(utc.getTime());  // 在任何地方值相同

// 以任意时区显示
const tokyo = utc.toLocaleString("en-US", { timeZone: "Asia/Tokyo" });
const nyc = utc.toLocaleString("en-US", { timeZone: "America/New_York" });
\`\`\`

### 最佳实践

在数据库中将时间戳存储为 UTC 整数。仅在向用户显示时转换为本地时间。这样可以避免所有与时区相关的错误。

## 常见问题

**秒和毫秒有什么区别？** 相差 1000 倍。时间戳 \`1716451200\`（秒）= 2026 年 5 月 23 日。\`1716451200000\`（毫秒）= 同一时刻。将毫秒除以 1000 即可转换为秒。

**时间戳包含时区吗？** 不——时间戳始终是 UTC。这个数字本身代表地球上的同一时刻。

**如何在 shell 脚本中获取当前时间戳？**

\`\`\`bash
# 秒
date +%s

# 毫秒
echo $(($(date +%s%N)/1000000))
\`\`\`

**什么是 ISO 8601？** 像 \`2026-05-23T14:30:00+08:00\` 这样的日期格式。它是人类可读的，并包含时区偏移。我们的工具同时显示两种格式。
END

SLUG:number-base-converter
## 为什么进制转换很重要

计算机使用二进制（基数为 2）。人类更喜欢十进制（基数为 10）。程序员使用十六进制（基数为 16）作为紧凑的简写形式。如果你处理底层数据，三种进制都需要掌握。

### 常用进制

| 基数 | 名称 | 数字 | 用途 |
|------|------|--------|----------|
| 2 | 二进制 | 0-1 | 机器码、位运算 |
| 8 | 八进制 | 0-7 | 文件权限（Unix） |
| 10 | 十进制 | 0-9 | 日常数字 |
| 16 | 十六进制 | 0-9, A-F | 内存地址、颜色、哈希值 |

## 进制的工作原理

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

将二进制数字按 4 位一组分组（从右开始），然后转换每组：

\`\`\`
二进制：1101 0101
十六进制：  D    5
结果：0xD5
\`\`\`

### 十六进制转十进制

\`\`\`
0xD5 = 13 × 16¹ + 5 × 16⁰
     = 208 + 5
     = 213₁₀
\`\`\`

## 使用 ToolboxPro 转换器

访问我们的[进制转换器](/tools/number-base-converter)：

1. **输入任意数字** — 自动检测进制
2. **同时查看所有进制** — 二进制、八进制、十进制、十六进制并排显示
3. **一键复制**任意格式
4. **支持超大数字** — 最高 64 位值

## 实际应用场景

### 1. RGB 颜色值

\`\`\`css
/* Hex 是 RGB 的十进制简写 */
#FF5733
/* FF = 255 红, 57 = 87 绿, 33 = 51 蓝 */
background-color: rgb(255, 87, 51);
\`\`\`

### 2. Unix 文件权限

\`\`\`bash
# chmod 使用八进制
chmod 755 script.sh
# 7 = rwx（所有者），5 = r-x（组），5 = r-x（其他人）
# 八进制中的 7 = 二进制中的 111 = 读 + 写 + 执行
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
MAC：00:1A:2B:3C:4D:5E
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

**计算机实际使用什么进制？** 二进制（基数为 2）。内存中的每个值——数字、文本、图像——最终都以 0 和 1 的序列存储。

**为什么程序员使用十六进制？** 十六进制是二进制的可读简写。一个十六进制位 = 4 个二进制位。阅读 \`0xFF\` 比阅读 \`0b11111111\` 容易得多。

**那 Base64 呢？** Base64 使用 64 个字符（A-Z、a-z、0-9、+、/）并将二进制数据编码为文本——请参阅我们的 [Base64 编码器/解码器](/tools/base64-encode-decode)。

**有没有比十六进制更高的进制？** 有——base32、base36、base58（比特币地址）和 base64 都很常见。我们的工具支持 2 到 36 进制。
END

SLUG:word-counter-character-count
## 什么是字数统计工具以及为什么文本指标很重要

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

**元描述的推荐长度是多少？** Google 通常显示元描述的前 150-160 个字符。保持在此范围内可确保你的完整描述出现在搜索结果中。
END

SLUG:case-converter
## 为什么文本大小写很重要

每种编程语言和框架对于命名变量、文件和函数都有自己的约定。使用错误的大小写可能会破坏你的代码或混淆协作者。

### 最常见的大小写

| 大小写 | 示例 | 使用场景 |
|------|---------|-----------------|
| **camelCase**（驼峰式） | \`myVariableName\` | JavaScript、Java、TypeScript 变量 |
| **PascalCase**（帕斯卡式） | \`MyComponentName\` | React 组件、C# 类、TypeScript 类型 |
| **snake_case**（蛇形式） | \`my_variable_name\` | Python、Ruby、Rust 变量 |
| **SCREAMING_SNAKE_CASE**（大写蛇形式） | \`MAX_RETRY_COUNT\` | 常量、环境变量 |
| **kebab-case**（烤肉串式） | \`my-component-name\` | HTML 文件、CSS 类、npm 包 |
| **Train-Case**（火车式） | \`My-Component-Name\` | HTTP 头（如 \`Content-Type\`） |
| **dot.case**（点式） | \`my.component.name\` | Java 包名、文件扩展名 |

## 如何在不同大小写之间转换

### 使用 ToolboxPro

访问我们的[大小写转换器](/tools/case-converter)：

1. **输入或粘贴文本**
2. **同时查看所有大小写** — 输入时实时预览
3. **点击任意结果**复制到剪贴板
4. **支持多词短语** — 只需用空格自然输入

### JavaScript 手动转换

\`\`\`javascript
// camelCase
"hello world".replace(/(?:^|\s+)(\w)/g, (_, c) => c.toUpperCase())
  .replace(/\s+/g, '')
  .replace(/^(.)/, c => c.toLowerCase());
// 结果："helloWorld"

// PascalCase（与 camelCase 相同但首字母大写）
"hello world".replace(/(?:^|\s+)(\w)/g, (_, c) => c.toUpperCase())
  .replace(/\s+/g, '');
// 结果："HelloWorld"

// snake_case
"hello world".toLowerCase().replace(/\s+/g, '_');
// 结果："hello_world"

// kebab-case
"hello world".toLowerCase().replace(/\s+/g, '-');
// 结果："hello-world"

// SCREAMING_SNAKE_CASE
"hello world".toUpperCase().replace(/\s+/g, '_');
// 结果："HELLO_WORLD"

// Title Case
"hello world".replace(/\w\S*/g, w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
// 结果："Hello World"
\`\`\`

## 各语言的命名约定

### JavaScript / TypeScript

\`\`\`typescript
// camelCase — 变量和函数
const userName = "Alice";
function fetchUserData() {}

// PascalCase — 类和组件
class UserService {}
function UserCard() {}

// SCREAMING_SNAKE_CASE — 常量
const MAX_FILE_SIZE = 10 * 1024 * 1024;

// kebab-case — 文件名
// user-profile.tsx, api-utils.ts
\`\`\`

### Python

\`\`\`python
# snake_case — 除类以外所有内容
user_name = "Alice"
def fetch_user_data():

# PascalCase — 仅类
class UserService:

# SCREAMING_SNAKE_CASE — 常量
MAX_FILE_SIZE = 10 * 1024 * 1024
\`\`\`

### CSS / HTML

\`\`\`css
/* kebab-case — CSS 类和 ID */
.user-profile-card {
  background-color: #fff;
  font-family: "Inter", sans-serif;
}

/* camelCase — 自定义属性（现代 CSS） */
:root {
  --primaryColor: #3498db;
  --borderRadius: 8px;
}
\`\`\`

## 特殊情况

### 缩写

对于在 camelCase 中如何处理缩写存在争议：

\`\`\`
// 选项 A：全部大写
parseJSON, HTMLParser, fetchURL

// 选项 B：驼峰式
parseJson, HtmlParser, fetchUrl

// 两者都有使用。选择一种并保持一致。
// 最常见的约定：
// JavaScript：驼峰式缩写（parseJson）
// C#：帕斯卡式缩写（ParseJSON）
\`\`\`

### 标识符中的数字

\`\`\`
// 变量可以包含数字但不能以数字开头
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
// 转换为小写会丢失标题大小写信息
"McDonald" → 小写："mcdonald" → 标题大小写："Mcdonald" ❌

// 我们的工具通过特殊规则处理此类边界情况
\`\`\`

### 2. 双重转换

\`\`\`
// 已是 camelCase，转 snake_case 再转回来
"myVariable" → snake_case："my_variable" → camelCase："myVariable" ✅

// 但要小心：
"myVariable" → 小写："myvariable" → camelCase："myvariable" ❌
\`\`\`

### 3. 区域设置问题

\`\`\`
// 土耳其语的 'i' 和 'I' 行为不同
// 在土耳其语环境中 'i'.toUpperCase() → 'İ'
// 我们的工具使用与区域无关的转换
\`\`\`

## 常见问题

**camelCase 和 PascalCase 有什么区别？** PascalCase 也将首字母大写：\`CamelCase\` vs \`camelCase\`。类和 React 组件使用 PascalCase，变量和函数使用 camelCase。

**数据库列名应该使用哪种大小写？** 大多数数据库使用 snake_case（\`user_name\`、\`created_at\`）。PostgreSQL 的惯例是 snake_case。有些团队使用 camelCase——保持一致即可。

**可以转换整个文件吗？** 我们的工具支持批量文本处理。复制文件内容并粘贴，所有大小写会立即显示。对于编程文件，建议使用特定语言的格式化工具。

**CONSTANT_CASE 和 UPPER_CASE 一样吗？** 它们是同一种——即大写蛇形式。都是指单词之间用下划线分隔的全大写形式。

**URL 中的大小写重要吗？** 大多数 Web 服务器将 URL 视为区分大小写。URL 路径应使用 kebab-case（全部小写，连字符）——这是 SEO 和可读性的推荐惯例。

**JSON 键使用什么大小写？** JSON 没有官方惯例，但在 JavaScript 生态系统中 camelCase 最常见，在 Python 生态系统中 snake_case 最常见。我们的 [JSON 格式化工具](/tools/json-formatter)可以帮助标准化你的 JSON 键。
END

SLUG:text-diff-checker
## 什么是文本差异检查器？

文本差异检查器（"difference checker"的简称）用于比较两个文本块并突出显示它们之间的差异。无论你是检查代码变更、比较文档版本，还是检查抄袭，差异工具都能精确显示发生了什么变化——精确到单个字符。

差异工具是 Git 等版本控制系统的核心组件，但独立的差异检查器在你需要快速比较而无需设置代码仓库时也非常有用。

## 为什么要使用差异检查器？

- **代码审查** — 在部署前比较脚本的新旧版本
- **文档修订** — 查看你的编辑在合同中更改了什么
- **抄袭检测** — 快速发现提交内容之间的复制内容
- **配置文件** — 捕获配置文件备份中的意外更改
- **数据迁移** — 验证源数据和目标数据在传输后是否匹配

## 差异检查的工作原理

### 逐行比较

最常见的模式。比较每一行，工具显示：

- **绿色**（新增）— 新文本中存在但旧文本中没有的行
- **红色**（删除）— 旧文本中存在但新文本中没有的行
- **白色**（未更改）— 两个版本中相同的行

### 字符级比较

对于详细编辑，字符差异显示一行*内部*的变化。如果你将"colour"改为"color"，行比较会显示整行已更改，但字符比较只会突出显示"u"被删除和"r"被添加。

### 单词级比较

介于行和字符之间的折中方案。增删按单词而非字符显示——非常适合散文和文档。

## 如何使用差异检查器

### 第 1 步：准备文本

将原始文本复制到左侧面板，将修改后的文本复制到右侧面板。顺序很重要——工具显示从*左*到*右*的变化。

### 第 2 步：即时比较

大多数差异工具在你输入或粘贴时实时更新。无需点击任何按钮——高亮显示会立即出现。

### 第 3 步：审查结果

扫描高亮显示的差异：

| 颜色 | 含义 | 检查内容 |
|-------|---------|---------------|
| 绿色 | 新增行 | 验证新内容是否正确 |
| 红色 | 删除行 | 确认删除是有意为之 |
| 黄色高亮 | 行内更改 | 仔细检查修改的单词/字符 |

### 第 4 步：复制或合并

满意后，你可以：
- 将结果复制到剪贴板
- 下载差异报告
- 手动应用更改

## 实用示例

### 示例 1：文档修订

**原始：**
\`\`\`
The quick brown fox jumps over the lazy dog.
\`\`\`

**修订后：**
\`\`\`
The quick brown fox leaps over the lazy cat.
\`\`\`

**差异结果：**
- 第 1 行："jumps" → "leaps"（单词级更改）
- 第 1 行："dog" → "cat"（单词级更改）

### 示例 2：代码变更

**之前：**
\`\`\`javascript
function greet(name) {
  return "Hello, " + name;
}
\`\`\`

**之后：**
\`\`\`javascript
function greet(name, time) {
  return \`Good \${time}, \${name}\`;
}
\`\`\`

**差异结果：**
- 函数签名中添加了参数"time"
- 返回字符串从拼接改为模板字面量
- 两行内容完全变更

## 差异算法说明

大多数差异工具（包括我们的）使用**最长公共子序列（LCS）**算法。它查找两个文本中以相同顺序出现的最长字符序列，然后将其他所有内容标记为更改。

现代实现还使用**Myers 算法**，该算法针对代码差异进行了优化，通过优先使用连续的更改块而非分散的单行差异，生成更易读的输出。

## 获得清晰差异的技巧

1. **规范化空白** — 尾随空格和不一致的缩进会产生误报
2. **修剪空行** — 开头或结尾的多余空行会显示为新增/删除
3. **使用一致的行尾** — Windows（CRLF）与 Unix（LF）的差异不可见，但会显示为整行更改
4. **对输入进行排序** — 对于无序列表，在比较前对两侧进行排序可以减少干扰

## 常见问题

**比较区分大小写吗？** 默认区分。大多数差异工具有"不区分大小写"的开关，适用于只关心内容而不关心大小写的情况。

**可以比较非常大的文件吗？** 可以。我们的差异检查器可以轻松处理最大 1MB 的文件。对于更大的文件，性能取决于浏览器的内存。

**它适用于代码还是纯文本？** 适用于任何文本。编程语言适合逐行视图，而散文更适合单词级视图。

**我的文本会上传到服务器吗？** 不会。所有操作都在浏览器中使用 JavaScript 运行。你的数据绝不会离开你的设备。

**统一差异和并排比较有什么区别？** 统一差异在单列中显示更改并附有上下文行。并排比较（我们的工具使用的）同时显示两个版本——对大多数使用场景来说更易读。
END

SLUG:lorem-ipsum-generator
## 什么是 Lorem Ipsum？

Lorem Ipsum 是设计师、开发人员和排版人员用来在真实内容准备好之前在布局中填充空间的虚拟文本。这个经典段落自 16 世纪以来一直是行业标准虚拟文本，当时一位不知名的印刷工人打乱了一段拉丁文段落，制作了一本字体样本册。

最常见的变体以以下内容开头：

> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

## 为什么要使用占位文本？

- **专注于布局** — 真实文本会分散对视觉设计决策的注意力
- **展示文本密度** — 查看你的设计如何处理不同长度的内容
- **客户演示** — 占位文本使注意力集中在结构上，而不是措辞上
- **响应式测试** — 测试文本在不同屏幕尺寸下的换行效果
- **印刷样稿** — 用看起来真实的文本填充手册、传单和海报

## 好的 Lorem Ipsum 生成器的功能

### 1. 可自定义的段落数

有时你只需要一个段落用于工具提示预览。有时你需要 20 个用于着陆页样稿。一个好的生成器让你自由选择。

### 2. 字数控制

对于精确的布局测试，精确生成 50、100 或 500 个单词。这对于以下情况至关重要：
- 测试特定字数限制下的文本截断
- 用真实的输入长度填充表单字段
- 为开发环境创建一致的测试数据

### 3. 以"Lorem Ipsum"开头

某些使用场景——尤其是面向客户的样稿——需要经典的"Lorem ipsum dolor sit amet..."开头。其他场景只需要一些拉丁文本，不关心第一行是什么。一个好的生成器让你可以自主选择。

### 4. HTML 输出

对于 Web 开发人员，生成包裹在 \`<p>\` 标签中的 Lorem Ipsum 可以在原型设计阶段节省时间：

\`\`\`html
<p>Lorem ipsum dolor sit amet...</p>
<p>Sed do eiusmod tempor...</p>
\`\`\`

### 5. 替代变体

虽然经典的 Lorem Ipsum 是拉丁文，但有时你可能想要：

- **Cicero（西塞罗）** — 公元前 45 年罗马政治家西塞罗的原始文本
- **Hacker ipsum（黑客文本）** — 技术主题的占位文本
- **Corporate ipsum（商业文本）** — 商业行话占位符
- **Pirate ipsum（海盗文本）** — 有趣的海盗主题文本

## 如何生成 Lorem Ipsum

### 使用 ToolboxPro

1. 访问我们的 [Lorem Ipsum 生成器](/tools/lorem-ipsum-generator)
2. 选择输出模式：段落、单词或字节
3. 设置数量（例如 5 个段落或 100 个单词）
4. 切换是否以"Lorem ipsum dolor sit amet"开头
5. 选择纯文本或 HTML 格式
6. 点击**生成** — 文本立即显示
7. 一键复制

### 手动生成（JavaScript）

\`\`\`javascript
const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit...";
function generateParagraphs(count) {
  return Array(count).fill(loremIpsum).join('\\n\\n');
}
\`\`\`

## 使用虚拟文本的最佳实践

1. **在用户测试中不要依赖它** — 真实用户需要真实内容才能给出准确反馈
2. **在发布前替换为真实文本** — 搜索引擎会索引你的内容；Lorem Ipsum 对 SEO 有害
3. **根据使用场景匹配段落长度** — 博客文章需要 5-10 个段落；工具提示需要 1 个
4. **网页原型使用 HTML 格式** — 节省从纯文本转换的时间
5. **考虑可读性测试** — Lorem Ipsum 不能测试易读性；为此请使用真实文本

## Lorem Ipsum 的历史

这段文字来自西塞罗写于公元前 45 年的《论善恶之极》（De Finibus Bonorum et Malorum）的第 1.10.32 和 1.10.33 节。"lorem ipsum"这两个词是"dolorem ipsum"（痛苦本身）的变体。

它在 20 世纪 60 年代随着包含 Lorem Ipsum 段落的 Letraset 字帖的发布而流行起来，后来又在 Aldus PageMaker 等桌面出版软件中得到普及。

## 常见问题

**Lorem Ipsum 是随机的吗？** 不是。它是真实拉丁文本的打乱版本。真正的随机文本看起来不会像自然语言。

**我可以在商业项目中使用 Lorem Ipsum 吗？** 可以。它是源自古代的公共领域文本。

**为什么被称为"希腊化"文本？** 在设计术语中，使用占位文本被称为"greeking"——无论文本实际上是希腊文还是拉丁文。

**生成文本的长度会变化吗？** 大多数生成器产生长度一致的段落（每段约 50-100 词）。要精确控制，请使用字数模式。

**有隐私问题吗？** 没有。生成完全在你的浏览器中完成。没有任何文本发送到任何服务器。
END

SLUG:text-to-slug
## 什么是 URL Slug？

URL Slug 是以人类可读的方式标识特定页面的 URL 部分。例如，在 URL 中：

\`\`\`
https://example.com/blog/url-slug-generator-guide
\`\`\`

Slug 是 \`url-slug-generator-guide\`。它是域名和类别路径之后的文本。

Slug 对于以下方面至关重要：
- **SEO** — 搜索引擎使用 slug 文本理解页面内容
- **可读性** — 用户在点击之前就能知道页面内容
- **分享** — 在消息或社交媒体上分享时，干净的 slug 看起来更专业
- **无障碍** — 屏幕阅读器受益于描述性的 URL 文本

## 为什么需要文本转 Slug

原始文本——尤其是标题——包含在 URL 中无效或有问题的字符：

| 字符 | 问题 | Slug 替换 |
|-----------|---------|------------------|
| 空格 | 在 URL 中无效 | 连字符 (-) |
| 大写字母 | 技术上有效但不一致 | 小写 |
| 引号 | 无效 | 移除 |
| 撇号 | 无效 | 移除或保留 |
| 逗号 | 保留字符 | 移除 |
| 括号 | 可能破坏链接解析 | 移除 |
| 冒号、分号 | 保留字符 | 移除 |
| 带重音字符 | 兼容性问题 | ASCII 等价（如 é → e） |
| 特殊字符 (!, @, #, $, %, ^, &, *) | 保留或不安全 | 移除 |
| 斜杠 (/, \\) | 路径分隔符 | 移除 |
| 多个连字符 | 产生难看的 URL | 合并为单个连字符 |
| 开头/结尾连字符 | 看起来有问题 | 修剪 |

## Slug 生成器的工作原理

### 第 1 步：规范化

将文本转换为小写，并去除开头和结尾的空白。

### 第 2 步：音译

将带重音和非 ASCII 字符转换为其最接近的 ASCII 等价字符：
- "café" → "cafe"
- "über" → "uber"
- "façade" → "facade"

### 第 3 步：移除无效字符

删除除字母、数字、空格和连字符之外的所有内容。

### 第 4 步：用连字符替换空格

将所有空格（以及允许的分隔符）替换为单个连字符。

### 第 5 步：合并和修剪

将多个连续连字符替换为单个连字符，然后修剪两端的连字符。

## 如何使用我们的文本转 Slug 工具

1. 访问我们的 [Slug 生成器](/tools/text-to-slug)
2. 输入或粘贴你的文本（例如："How to Bake a Cake in 10 Minutes!"）
3. 实时查看生成的 slug："how-to-bake-a-cake-in-10-minutes"
4. 点击**复制**将 slug 复制到剪贴板

## 示例

| 原始文本 | 生成的 Slug |
|---------------|----------------|
| My First Blog Post! | my-first-blog-post |
| 10 Ways to Save Money 💰 | 10-ways-to-save-money |
| Cómo Hacer Paella Valenciana | como-hacer-paella-valenciana |
| Tom & Jerry: The Movie (2024) | tom-jerry-the-movie-2024 |
| What's New in React 19? | whats-new-in-react-19 |
| 100% Organic Cotton — Buy Now! | 100-organic-cotton-buy-now |
| Café & Bakery | cafe-bakery |
| _Important — DO NOT DELETE_ | important-do-not-delete |

## Slug 的 SEO 最佳实践

### 应该做 ✅

- **保持简短** — 3-5 个词为最佳（Google 会在搜索结果中截断过长的 slug）
- **包含主要关键词** — slug 是一个排名因素
- **使用连字符** — Google 推荐使用连字符而非下划线
- **保持可读性** — 用户应该仅从 slug 就能理解页面的主题
- **保持一致** — 在整个网站中使用相同的 slug 格式

### 不要做 ❌

- **不要使用停用词** — 在可能的情况下删除"a"、"an"、"the"、"and"
- **不要包含日期** — 除非你的内容具有时效性，否则日期会使你的 URL 显得过时
- **发布后不要更改 slug** — 这会破坏现有链接并损失 SEO 价值
- **不要只使用 ID** — \`/p/12345\` 无法向搜索引擎提供关于你的内容的任何信息
- **不要不必要地包含子类别** — \`/products/shoes/running/nike/air-zoom\` 层级太深

## Slug 与 URL 路径的区别

Slug 是 URL 路径的最后一段。完整路径可能包含类别或日期层级：

\`\`\`
example.com/blog/2026/05/text-to-slug-guide
│                │     │   │              │
│                │     │   └── Slug       │
│                │     └── 日期段         │
│                └── 类别段              │
\`\`\`

### 在代码中生成 Slug

\`\`\`javascript
function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')  // 移除重音符号
    .replace(/[^a-z0-9\s-]/g, '')                       // 移除无效字符
    .replace(/\s+/g, '-')                                // 空格转连字符
    .replace(/-+/g, '-')                                 // 合并连字符
    .replace(/^-|-$/g, '');                              // 修剪两端
}
\`\`\`

\`\`\`python
import re
import unicodedata

def slugify(text):
    text = text.lower().strip()
    # 将重音字符转换为 ASCII
    text = unicodedata.normalize('NFKD', text)
    text = text.encode('ascii', 'ignore').decode('ascii')
    # 移除无效字符
    text = re.sub(r'[^a-z0-9\s-]', '', text)
    # 空格转连字符
    text = re.sub(r'\s+', '-', text)
    # 合并连字符并修剪
    text = re.sub(r'-+', '-', text)
    text = text.strip('-')
    return text
\`\`\`

## 常见问题

**一个好的 slug 应该有多长？** 3-5 个单词，总共 30-50 个字符。Google 通常在搜索结果中显示前 5-7 个单词，因此将关键词放在开头附近。

**Slug 中可以包含数字吗？** 可以，数字完全有效。对于列表文章（"10-tips-for-better-sleep"）和基于年份的内容（"seo-trends-2026"）尤其有用。

**slug 中的停用词应该如何处理？** 尽可能移除像"the"、"and"、"a"、"in"、"of"这样的停用词——除非没有它们语义就不完整。

**Slug 应该使用单数还是复数？** 保持一致。如果大多数页面使用复数（"tools"、"guides"），那就全部使用复数。不一致会被视为草率。

**更改 slug 后需要设置重定向吗？** 是的，始终从旧 slug 设置 301 重定向到新 slug。这保留了 SEO 价值并防止了死链。

**所有字符都小写吗？** 是的。URL 区分大小写，小写可以消除不一致性。"/My-Page"和"/my-page"被视为不同的 URL。
END

SLUG:compress-images-without-losing-quality
## 图像压缩：有损与无损——完整指南

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
A：几乎总是 JPEG。质量为 75 的 JPEG 照片通常比同等的 PNG 小 5-10 倍，且视觉差异可忽略不计。将 PNG 用于截图、图表、标志和需要透明度的图像。
END

SLUG:toolboxpro-vs-tinywow-vs-ilovepdf-privacy
## 隐私对决：三大免费工具平台如何处理你的数据

当你需要编辑 PDF、压缩图像或格式化 JSON 时，免费在线工具是显而易见的选择。但有一个问题——它们中的大多数会将你的文件上传到服务器。本比较从最重要的因素——隐私、功能、速度和成本——分析了 ToolboxPro、TinyWow 和 ILovePDF。

### 隐私与数据处理

选择在线工具时最重要的单一因素——你的数据去了哪里？

**ILovePDF** 将每个文件上传到其服务器进行处理。其隐私政策声明文件在处理后被删除，但这些文件会经过网络传输、存储在临时存储中并通过服务器内存。对于敏感文档（合同、医疗记录、财务报表），这绝对不可接受。

**TinyWow** 也在服务器端处理文件。它们通过 HTTPS 加密传输，但基本架构意味着你的数据离开了你的设备。它们的服务器在处理期间暂时存储文件。

**ToolboxPro** 在浏览器中处理所有内容。文件永远不会离开你的设备。没有上传、没有服务器端处理、没有在任何远程机器上的临时存储。JSON 格式化工具、PDF 合并器、图像压缩器——全部通过 JavaScript 或 WebAssembly 在你自己的浏览器标签页中运行。

**胜者：ToolboxPro** — 零数据传输比任何服务器端承诺都更安全。

### 可用工具

| 类别 | ToolboxPro | TinyWow | ILovePDF |
|-----------|-----------|---------|---------|
| PDF 工具 | 5 个免费 | 15+（免费增值） | 25+（免费增值） |
| 图像工具 | 10 个免费 | 10+（免费增值） | 有限 |
| 开发工具 | 25+ 免费 | 有限 | 无 |
| 文本工具 | 15+ 免费 | 部分 | 无 |
| 音频工具 | 1 个免费 | 部分 | 无 |
| 网络工具 | 3 个免费 | 无 | 无 |
| 总计（免费层级） | **100+** | ~30 | ~15 |

**胜者：ToolboxPro** — 最大的免费目录，无付费墙。

### 比较总结

| 因素 | ToolboxPro | TinyWow | ILovePDF |
|--------|-----------|---------|---------|
| 隐私 | 仅客户端 | 服务器端 | 服务器端 |
| 需要注册 | 否 | 否 | 无账户有限制 |
| 免费工具 | 100+ | ~30 免费 | ~15 免费 |
| PDF 加密 | 不可用 | 可用 | 可用 |
| 图像压缩器 | 免费 | 带水印 | 付费 |
| 离线模式 | 是（首次加载后） | 否 | 否 |
| 移动端友好 | 是 | 是 | 是 |

### 结论

**选择 ToolboxPro 如果：** 隐私是你的主要关注点，你是需要开发工具的开发者，或者你想在不注册的情况下使用 100+ 工具。

**选择 TinyWow 如果：** 你需要 PDF 加密或更喜欢更精致的用户界面。

**选择 ILovePDF 如果：** 你需要像 OCR 或电子签名这样的高级 PDF 功能，并且你愿意付费。

### 总结

对于日常使用——格式化 JSON、压缩图像、合并 PDF——ToolboxPro 提供了隐私、功能和零成本的最佳组合。
END
"""

# Parse the translations text into a dict
parsed = {}
lines = translations_text.strip().split('\n')
current_slug = None
current_text = []
for line in lines:
    if line.startswith('SLUG:'):
        if current_slug:
            parsed[current_slug] = '\n'.join(current_text)
        current_slug = line[5:].strip()
        current_text = []
    elif line == 'END':
        if current_slug:
            parsed[current_slug] = '\n'.join(current_text)
        current_slug = None
        current_text = []
    else:
        if current_slug:
            current_text.append(line)

if current_slug and current_text:
    parsed[current_slug] = '\n'.join(current_text)

def insert_content_zh(text, slug, translation):
    """Insert contentZh field after the content field for the given blog post slug."""
    # Find the slug
    slug_pattern = f'    slug: "{slug}",'
    idx = text.find(slug_pattern)
    if idx == -1:
        print(f"  WARNING: Slug '{slug}' not found!")
        return text
    
    # Find the start of the content field
    content_start = text.find('\n    content: `', idx)
    if content_start == -1:
        print(f"  WARNING: content field not found for '{slug}'!")
        return text
    
    # Find the opening backtick of the template literal
    content_open_quote = text.find('`', content_start + len('\n    content: '))
    
    # Find the closing backtick+comma that ends this content block
    # It's `,\n  }, or `,\n  { or `,\n];
    # Handle both LF and CRLF line endings
    search_start = content_open_quote + 1
    while True:
        close_marker_lf = text.find('\n`,\n', search_start)
        close_marker_crlf = text.find('\r\n`,\r\n', search_start)
        # Use the one that appears first (or whichever exists)
        if close_marker_lf == -1:
            close_marker = close_marker_crlf
        elif close_marker_crlf == -1:
            close_marker = close_marker_lf
        else:
            close_marker = min(close_marker_lf, close_marker_crlf)
        
        if close_marker == -1:
            print(f"  ERROR: Could not find closing backtick for '{slug}'!")
            return text
        
        # Check what follows to confirm this is the right closing
        after_start = close_marker + 2  # skip backtick+comma
        # Account for \r before \n if CRLF
        if text[close_marker:close_marker+4] == '\n`,\n':
            after_start = close_marker + 4  # skip \n`,\n
        else:
            after_start = close_marker + 6  # skip \r\n`,\r\n
            
        after = text[after_start:after_start + 10]
        lf = '\n'
        crlf = '\r\n'
        nl = crlf if '\r\n' in text[:100] else lf
        if after.startswith('  },' + nl) or after.startswith('  },' + nl + '  {') or after.startswith('  },' + nl + '];'):
            content_end = close_marker + 1  # position of backtick
            # Insert contentZh after the backtick+comma+newline
            indent = '    '
            content_zh_field = nl + indent + 'contentZh: `' + translation + '`,' + nl
            text = text[:after_start] + content_zh_field + text[after_start:]
            print(f"  ✓ Added contentZh for '{slug}'")
            return text
        
        search_start = close_marker + 1
    
    return text

# Process each slug
print("Adding contentZh for batch 2 posts...")
print(f"Found {len(parsed)} translations")
for slug in parsed:
    print(f"Processing: {slug}")
    content = insert_content_zh(content, slug, parsed[slug])

# Write back
with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("\nDone! Added contentZh for", len(parsed), "posts.")
