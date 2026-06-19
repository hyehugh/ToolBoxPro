---
slug: number-base-converter
title: "Binary, Hex, Decimal: How to Convert Between Number Bases"
titleZh: "二进制、十六进制、十进制：如何在数制之间转换"
description: "Learn to convert between binary, hexadecimal, decimal, and octal. Understand place values, conversion algorithms, and practical use cases in programming."
descriptionZh: "学习在二进制、十六进制、十进制和八进制之间转换。理解位值、转换算法和编程中的实际用例。"
date: 2026-05-23
readTime: "6 min read"
category: "Developer Tools"
toolSlug: "number-base-converter"
---

## Why Number Base Conversion Matters

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

**Is there a base higher than hex?** Yes — base32, base36, base58 (Bitcoin addresses), and base64 are common. Our tool handles bases 2 through 36.