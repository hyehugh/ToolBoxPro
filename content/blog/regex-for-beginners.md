---
slug: regex-for-beginners
title: "Regex for Beginners: How to Test Regular Expressions Online"
titleZh: "正则表达式入门：如何在线测试正则表达式"
description: "Learn regex from scratch. Patterns, quantifiers, groups, and how to test them in real-time with our free tester."
descriptionZh: "从零开始学习正则表达式。模式、量词、分组以及如何使用免费测试工具实时测试。"
date: 2026-05-22
readTime: "8 min read"
category: "Developer Tools"
toolSlug: "regex-tester"
---

## Regex Basics: A Practical Guide for Developers

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

One of the most common regex pitfalls is the difference between greedy and lazy matching. By default, quantifiers like \`*\