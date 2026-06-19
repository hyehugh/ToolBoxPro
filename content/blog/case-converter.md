---
slug: case-converter
title: "Text Case Converter: Upper, Lower, Title, CamelCase and More"
titleZh: "文字大小写转换：大写、小写、标题、驼峰等"
description: "Convert text between uppercase, lowercase, title case, camelCase, snake_case, kebab-case, and more. A complete guide to text case formats in programming."
descriptionZh: "在大小写、标题、驼峰、蛇形、短横等多种文本格式之间转换。编程中文本大小写格式的完整指南。"
date: 2026-05-23
readTime: "5 min read"
category: "Developer Tools"
toolSlug: "case-converter"
---

## Why Text Case Matters

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

**Which case should I use for database column names?** Most databases use snake_case (\`user_name\