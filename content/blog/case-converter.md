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

**Which case should I use for database column names?** Most databases use snake_case (\`user_name\`, \`created_at\`) because it's SQL-standard and case-insensitive in most engines. PostgreSQL folds unquoted identifiers to lowercase, so \`UserName\` becomes \`username\` — a common source of confusion.

## Naming Conventions Across Languages Compared

Different ecosystems have deeply entrenched conventions. Violating them makes your code feel foreign to other developers:

| Language | Variables | Functions | Classes | Constants | Files |
|----------|-----------|-----------|---------|-----------|-------|
| **JavaScript/TS** | camelCase | camelCase | PascalCase | SCREAMING_SNAKE | kebab-case |
| **Python** | snake_case | snake_case | PascalCase | SCREAMING_SNAKE | snake_case |
| **Java** | camelCase | camelCase | PascalCase | SCREAMING_SNAKE | PascalCase |
| **Go** | camelCase | PascalCase (exported) | PascalCase | SCREAMING_SNAKE | snake_case |
| **Rust** | snake_case | snake_case | PascalCase | SCREAMING_SNAKE | snake_case |
| **C#** | camelCase | PascalCase | PascalCase | PascalCase | PascalCase |
| **Ruby** | snake_case | snake_case | PascalCase | SCREAMING_SNAKE | snake_case |

**Go's convention is unique:** exported (public) identifiers use PascalCase, unexported (private) ones use camelCase. The case of the first letter IS the visibility modifier — there are no \`public\` or \`private\` keywords.

### When Languages Collide

Full-stack projects often span multiple conventions. A typical setup: Python backend with \`user_name\` in the API → JavaScript frontend expecting \`userName\`. Two solutions:

1. **Transform at the API boundary** — convert all keys to camelCase in your API response layer before sending to the frontend.
2. **Use a shared schema** — generate types from OpenAPI/Swagger and let code generators handle the conversion.

\`\`\`javascript
// Converting API response keys from snake_case to camelCase
function toCamelCase(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      key.replace(/_([a-z])/g, (_, c) => c.toUpperCase()),
      value
    ])
  );
}
\`\`\`

## Bulk Renaming Tools and Techniques

When refactoring a codebase from one naming convention to another, manual find-and-replace is error-prone. Here are reliable approaches:

### VS Code (Built-in)

Use **Find and Replace** with regex (Ctrl+H, enable regex with \`.*\` icon):

- **snake_case → camelCase:** Find \`_([a-z])\`, Replace with \`$1\` after uppercasing — use the "Preserve Case" toggle.
- **camelCase → snake_case:** Find \`([a-z])([A-Z])\`, Replace with \`$1_$2\`, then lowercase the result.

### Command-Line Tools

\`\`\`bash
# Install the 'change-case' CLI tool
npm install -g change-case

# Batch rename files in a directory
for f in *.js; do
  new_name=$(echo "$f" | sed -E 's/([a-z])([A-Z])/\1-\2/g' | tr '[:upper:]' '[:lower:]')
  mv "$f" "$new_name"
done
\`\`\`

### IDE Refactoring (Safest)

IntelliJ, WebStorm, and VS Code's TypeScript language server support **Rename Symbol** (F2), which renames all references across the project. This is safer than text-based find-and-replace because it understands scope.

## SEO and URL Case Sensitivity

URLs are technically case-sensitive after the domain, but the convention matters for SEO:

- **Google treats URLs as case-sensitive.** \`/About-Us\` and \`/about-us\` are different pages. If both return content, you have duplicate content issues.
- **Use kebab-case for URLs.** \`/blog/how-to-use-regex\` is more readable and SEO-friendly than \`/blog/howToUseRegex\` or \`/blog/how_to_use_regex\`.
- **Redirect uppercase to lowercase.** Add a 301 redirect so any uppercase URL variants point to the canonical lowercase version:

\`\`\`nginx
# Nginx: force lowercase URLs
if ($request_uri ~ [A-Z]) {
  return 301 https://$host$request_uri; # then lowercase via rewrite map
}
\`\`\`

## Advanced Tips

- **Be consistent within a file, not just a project.** Mixing \`fetchUserData\` and \`get_user_data\` in the same module signals sloppy refactoring. Linters like ESLint and Ruff can enforce naming rules automatically.
- **Use SCREAMING_SNAKE_CASE for environment variables.** Every CI/CD platform, Docker setup, and shell convention expects \`DATABASE_URL\`, not \`databaseUrl\`. Breaking this convention causes subtle config-loading bugs.
- **Prefix boolean variables with \`is\`, \`has\`, or \`should\`.** \`isLoading\`, \`hasPermission\`, \`shouldRedirect\` — these read as questions and make conditional logic self-documenting.
- **Avoid abbreviations in public APIs.** \`usr\` instead of \`user\` saves 2 characters but confuses every consumer. Internal private variables can be abbreviated; public interfaces should be explicit.