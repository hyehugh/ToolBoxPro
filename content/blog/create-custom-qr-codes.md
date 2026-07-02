---
slug: create-custom-qr-codes
title: "How to Create Custom QR Codes for Business"
titleZh: "如何为商业用途创建自定义二维码"
description: "Generate professional QR codes with custom colors, logos, and error correction. Perfect for marketing, menus, and events."
descriptionZh: "使用自定义颜色、Logo 和纠错生成专业二维码。适用于营销、菜单和活动。"
date: 2026-05-22
readTime: "5 min read"
category: "General"
toolSlug: "barcode-generator"
---

## What Is a QR Code and How It Works

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

Higher error correction means larger QR codes for the same data. Experiment with settings in a [QR code generator](/tools/barcode-generator) to find the right balance.

### How QR Code Scanning Works

Modern smartphones scan QR codes through the built-in camera decoder (iOS 11+ and Android 8+ both support native scanning). The process: the camera detects the three finder patterns (corner squares) to determine orientation, samples the module grid converting dark/light to binary data, applies Reed-Solomon error correction, extracts format info (mask pattern and error level), decodes the remaining data, then executes the appropriate action (open URL, display text, add contact, connect to Wi-Fi).

### Common QR Code Use Cases

**Contactless Payments** — UPI, Alipay, WeChat Pay, and European payment systems use QR codes at point-of-sale for fast, secure transactions.

**Wi-Fi Sharing** — QR codes encode SSID, password, and encryption type so guests scan to connect without typing. Many modern routers generate Wi-Fi QR codes by default.

**Event Ticketing** — Airlines, cinemas, and concerts use QR codes on digital tickets. Unique encoding prevents duplication and speeds entry validation. **Restaurant Menus** and **museum labels** also use QR codes for contactless access to digital content.

**Marketing and Tracking** — QR codes on print ads and packaging link to UTM-tagged landing pages, allowing marketers to measure scan-to-visit conversion.

If you need to generate custom QR codes with your brand colors or a logo in the center, a [custom QR code maker](/tools/qr-code-customizer) can handle that while maintaining readability by adjusting error correction appropriately. For bulk generation, use a dedicated [QR code generator](/tools/barcode-generator).

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

## Advanced Tips

### Error Correction Level Selection

QR codes use Reed-Solomon error correction with four levels. Understanding when to use each one is critical for production output:

- **Level L (7% recovery):** Use only for clean digital environments — screen-to-screen scanning with no risk of physical damage. Smallest module footprint, fastest encoding.
- **Level M (15% recovery):** The default in most generators. Good balance for standard printed QR codes on business cards, flyers, and product packaging where moderate wear is expected.
- **Level Q (25% recovery):** Required when embedding a logo. The error correction compensates for the data modules obscured by the logo image. Also recommended for industrial environments where the code may accumulate dust or minor scratches.
- **Level H (30% recovery):** Use for outdoor signage, warehouse labels, or any surface exposed to weather, chemicals, or abrasion. Also the safest choice when you plan heavy visual customization (inverted colors, rounded modules, artistic patterns).

### Logo Embedding Best Practices

To embed a logo without breaking scannability: crop the logo to a square, center it, and keep its footprint under **20% of the total QR area** (15% is safer). Convert the logo to a monochrome or limited-color version — full-color logos with gradients reduce contrast against the QR modules. Add a **quiet zone** (white margin) of at least 4 modules around the entire code, and a solid white background patch behind the logo so it doesn't blend into the data pattern. Test with at least three different scanner apps after embedding.

### Scanning Distance Optimization

The relationship between physical size and scannable distance follows a **10:1 rule** — the scanning distance is roughly 10 times the QR code's physical width. A 2-inch QR code scans reliably from about 20 inches (50 cm). For a billboard scanned from 5 meters away, you need a code at least 50 cm wide. Module density also matters: Version 10 (57×57 modules) requires more physical space per module than Version 4 (33×33) for the same scanning distance. When in doubt, generate a smaller version and scale the physical print larger rather than cramming more data into a small print.

## Common Mistakes

- **Using dark backgrounds with light codes** — inverted QR codes fail on many scanners. Always use dark modules on a light background.
- **Forgetting the quiet zone** — placing the code flush against text or graphics causes scan failures. Leave 4 modules of whitespace on every side.
- **Linking to non-mobile URLs** — if the destination page isn't mobile-friendly, the QR campaign wastes the scan. Always test the landing page on a phone.
- **Scaling raster images** — exporting as PNG then enlarging causes pixelation. Export as SVG or generate at the target print resolution (300 DPI minimum).
- **Not testing on real printed material** — on-screen testing misses reflection, texture, and lighting issues. Always scan a physical proof before mass production.

## Real-World Use Cases

- **Restaurant menus:** Generate a static QR linking to a menu URL, print on table tents. Use Level Q for coffee spills and frequent handling.
- **Event ticketing:** Dynamic QR codes with unique IDs per ticket. The server validates each scan and rejects duplicates — perfect for anti-counterfeiting.
- **Equipment maintenance tags:** Industrial QR codes on machinery linking to service logs, manuals, and parts lists. Use Level H and laminate for longevity.
- **Real estate signage:** Large-format QR on "For Sale" signs linking to virtual tours. Size for 2–3 meter scanning distance (at least 15 cm wide).
- **Wi-Fi sharing:** Encode `WIFI:T:WPA;S:NetworkName;P:password;;` so guests scan to auto-join. No typing required.
