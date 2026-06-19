---
slug: jwt-decoder
title: "JWT Decoder: How to Decode and Inspect JSON Web Tokens"
titleZh: "JWT 解码器：如何解码和检查 JSON Web Token"
description: "Learn to decode JSON Web Tokens, inspect header and payload claims, verify signatures, and debug authentication issues with our free JWT decoder."
descriptionZh: "学习解码 JSON Web Token，检查头部和载荷声明，验证签名，使用免费 JWT 解码器调试认证问题。"
date: 2026-05-23
readTime: "5 min read"
category: "Developer Tools"
toolSlug: "jwt-decoder"
---

## What is a JWT?

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
\`\`\`

## Common JWT Vulnerabilities

### 1. "none" Algorithm Attack

Some JWT libraries accept tokens with \`"alg": "none"\