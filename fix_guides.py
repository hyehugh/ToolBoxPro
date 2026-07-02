#!/usr/bin/env python3
"""Replace shared template 'how to use' and 'privacy' paragraphs with tool-specific content
for 29 slugs in lib/tools/guides.ts."""

import re

FILE = "lib/tools/guides.ts"

# Template strings to find (EN variants)
TPL_TEXT_HOWTO_EN = (
    "Paste or type your text into the input area. The tool processes it automatically "
    "in real-time, or click the action button if manual triggering is needed. Results "
    "appear instantly below the input. Use the copy button to grab the output, or clear "
    "everything to start a new task. The responsive interface works well on both desktop "
    "and mobile."
)

TPL_TEXT_PRIVACY_EN = (
    "All text processing happens locally in your browser. Your text is never sent to any "
    "server, making this tool safe for processing sensitive documents, personal notes, or "
    "confidential content. No signup, no tracking, no data collection."
)

TPL_UTIL_HOWTO_EN = (
    "Open the tool, configure your options if needed (such as length, format, or range), "
    "and click the action button. Results appear immediately. Copy the output to your "
    "clipboard, download it, or generate a new result with different settings. The entire "
    "workflow takes seconds."
)

TPL_UTIL_PRIVACY_EN = (
    "All processing happens locally in your browser. No data is uploaded, stored, or "
    "tracked. Your inputs and results are completely private. No account required, no "
    "cookies, no analytics beyond basic page views."
)

TPL_PDF_HOWTO_EN = (
    "Upload your PDF files by dragging them onto the tool or using the file picker. "
    "For merging, add multiple files and arrange them in your desired order. For "
    "splitting, select the page ranges you want to extract. For rotating, choose the "
    "rotation angle. Preview the result, then click the action button to process and "
    "download the output file."
)

TPL_PDF_PRIVACY_EN = (
    "All PDF processing happens locally in your browser using pdf-lib (a pure JavaScript "
    "library). Your documents are never uploaded to any server. This is critical for "
    "sensitive documents like contracts, tax returns, medical records, and financial "
    "statements. No account required, no file storage, no risk of data exposure."
)

# ZH template variants (note: they contain mixed Chinese/English)
TPL_TEXT_HOWTO_ZH = TPL_TEXT_HOWTO_EN  # In zh blocks, the English text is used verbatim
TPL_TEXT_PRIVACY_ZH = (
    "\u6240\u6709\u6587\u672c\u5904\u7406 happens locally in your browser. Your text is "
    "never sent to any server, making this tool safe for processing sensitive documents, "
    "personal notes, or confidential content. No signup, no tracking, no data collection."
)

TPL_UTIL_HOWTO_ZH = (
    "\u6253\u5f00\u5de5\u5177, configure your options if needed (such as length, format, "
    "or range), and click the action button. Results appear immediately. Copy the output "
    "to your clipboard, download it, or generate a new result with different settings. "
    "The entire workflow takes seconds."
)

TPL_UTIL_PRIVACY_ZH = (
    "\u6240\u6709\u5904\u7406\u90fd\u5728\u6d4f\u89c8\u5668\u672c\u5730\u5b8c\u6210 in your "
    "browser. No data is uploaded, stored, or tracked. Your inputs and results are "
    "completely private. No account required, no cookies, no analytics beyond basic page "
    "views."
)

TPL_PDF_HOWTO_ZH = (
    "\u4e0a\u4f20\u60a8\u7684 PDF files by dragging them onto the tool or using the file "
    "picker. For merging, add multiple files and arrange them in your desired order. For "
    "splitting, select the page ranges you want to extract. For rotating, choose the "
    "rotation angle. Preview the result, then click the action button to process and "
    "download the output file."
)

TPL_PDF_PRIVACY_ZH = (
    "\u6240\u6709 PDF \u5904\u7406 happens locally in your browser using pdf-lib (a pure "
    "JavaScript library). Your documents are never uploaded to any server. This is "
    "critical for sensitive documents like contracts, tax returns, medical records, and "
    "financial statements. No account required, no file storage, no risk of data exposure."
)


# ── Tool-specific replacements ──────────────────────────────────────────────
# Each entry: slug -> {
#   "type": "text" | "util" | "pdf",
#   "en_howto": str, "en_privacy": str,
#   "zh_howto": str, "zh_privacy": str,
# }

REPLACEMENTS = {
    "password-generator": {
        "type": "text",
        "en_howto": "Set your desired password length (8\u201364 characters), toggle character types (uppercase, lowercase, numbers, symbols), and click Generate. Each password is created with the Web Crypto API's cryptographically secure random number generator \u2014 copy it instantly with one click.",
        "en_privacy": "Password generation happens entirely in your browser. No password is ever transmitted, logged, or stored, making this safe for creating credentials for banking, email, and work accounts.",
        "zh_howto": "\u8bbe\u7f6e\u5bc6\u7801\u957f\u5ea6\uff088\u201364 \u4f4d\uff09\uff0c\u52fe\u9009\u5b57\u7b26\u7c7b\u578b\uff08\u5927\u5199\u3001\u5c0f\u5199\u3001\u6570\u5b57\u3001\u7b26\u53f7\uff09\uff0c\u70b9\u51fb\u751f\u6210\u5373\u53ef\u3002\u6bcf\u4e2a\u5bc6\u7801\u5747\u7531 Web Crypto API \u7684\u5bc6\u7801\u5b66\u5b89\u5168\u968f\u673a\u6570\u751f\u6210\u5668\u4ea7\u751f\uff0c\u4e00\u952e\u590d\u5236\u3002",
        "zh_privacy": "\u5bc6\u7801\u751f\u6210\u5168\u90e8\u5728\u6d4f\u89c8\u5668\u672c\u5730\u5b8c\u6210\uff0c\u4e0d\u4f1a\u4f20\u8f93\u3001\u8bb0\u5f55\u6216\u5b58\u50a8\u4efb\u4f55\u5bc6\u7801\u3002\u9002\u5408\u4e3a\u94f6\u884c\u3001\u90ae\u7bb1\u3001\u5de5\u4f5c\u8d26\u53f7\u521b\u5efa\u51ed\u8bc1\u3002",
    },
    "word-counter": {
        "type": "text",
        "en_howto": "Paste or type your text and the counters update live as you type \u2014 no button to click. Word count, character count, sentence count, paragraph count, and estimated reading time all recalculate instantly.",
        "en_privacy": "All counting happens locally in your browser. Your text never leaves your device, making this safe for drafts, essays, and confidential documents.",
        "zh_howto": "\u7c98\u8d34\u6216\u8f93\u5165\u6587\u672c\uff0c\u5b57\u6570\u3001\u5b57\u7b26\u6570\u3001\u53e5\u5b50\u6570\u3001\u6bb5\u843d\u6570\u548c\u9884\u4f30\u9605\u8bfb\u65f6\u95f4\u5b9e\u65f6\u66f4\u65b0\uff0c\u65e0\u9700\u70b9\u51fb\u4efb\u4f55\u6309\u94ae\u3002",
        "zh_privacy": "\u6240\u6709\u7edf\u8ba1\u5728\u6d4f\u89c8\u5668\u672c\u5730\u5b8c\u6210\uff0c\u6587\u672c\u4e0d\u4f1a\u79bb\u5f00\u4f60\u7684\u8bbe\u5907\uff0c\u9002\u5408\u5904\u7406\u8349\u7a3f\u3001\u8bba\u6587\u548c\u673a\u5bc6\u6587\u6863\u3002",
    },
    "case-converter": {
        "type": "text",
        "en_howto": "Paste your text and pick a case mode \u2014 UPPERCASE, lowercase, Title Case, camelCase, PascalCase, snake_case, or CONSTANT_CASE. The converted text appears instantly; click Copy to grab it.",
        "en_privacy": "All conversion happens locally in your browser. Your text is never uploaded, making this safe for source code, variable names, and sensitive content.",
        "zh_howto": "\u7c98\u8d34\u6587\u672c\uff0c\u9009\u62e9\u8f6c\u6362\u6a21\u5f0f\uff08\u5168\u5927\u5199\u3001\u5168\u5c0f\u5199\u3001\u6807\u9898\u683c\u3001\u9a7c\u5cf0\u547d\u540d\u3001\u8d1b\u8d39\u547d\u540d\u7b49\uff09\uff0c\u8f6c\u6362\u7ed3\u679c\u5373\u65f6\u663e\u793a\uff0c\u4e00\u952e\u590d\u5236\u3002",
        "zh_privacy": "\u6240\u6709\u8f6c\u6362\u5728\u6d4f\u89c8\u5668\u672c\u5730\u5b8c\u6210\uff0c\u6587\u672c\u4e0d\u4f1a\u4e0a\u4f20\uff0c\u9002\u5408\u5904\u7406\u6e90\u4ee3\u7801\u3001\u53d8\u91cf\u540d\u548c\u654f\u611f\u5185\u5bb9\u3002",
    },
    "lorem-ipsum-generator": {
        "type": "text",
        "en_howto": "Choose how many paragraphs or sentences you need, optionally start with the classic 'Lorem ipsum' opening, and click Generate. Copy the placeholder text directly into your design mockup or wireframe.",
        "en_privacy": "Generation runs entirely client-side. No content is stored or tracked \u2014 useful when generating filler text for client mockups.",
        "zh_howto": "\u8bbe\u7f6e\u6bb5\u843d\u6216\u53e5\u5b50\u6570\u91cf\uff0c\u53ef\u9009\u62e9\u662f\u5426\u4ee5\u7ecf\u5178\u201cLorem ipsum\u201d\u5f00\u5934\uff0c\u70b9\u51fb\u751f\u6210\u5373\u53ef\u590d\u5236\u5230\u8bbe\u8ba1\u7a3f\u6216\u7ebf\u6846\u56fe\u4e2d\u3002",
        "zh_privacy": "\u751f\u6210\u5168\u90e8\u5728\u5ba2\u6237\u7aef\u5b8c\u6210\uff0c\u4e0d\u5b58\u50a8\u6216\u8ffd\u8e2a\u4efb\u4f55\u5185\u5bb9\u3002",
    },
    "text-diff-checker": {
        "type": "text",
        "en_howto": "Paste your original text in the left pane and the modified text in the right pane. Added lines, removed lines, and changed words are highlighted in different colors instantly as you type.",
        "en_privacy": "All comparison happens locally in your browser. Your text is never uploaded, making this safe for comparing contracts, legal documents, and source code revisions.",
        "zh_howto": "\u5728\u5de6\u4fa7\u7c98\u8d34\u539f\u59cb\u6587\u672c\uff0c\u53f3\u4fa7\u7c98\u8d34\u4fee\u6539\u540e\u7684\u6587\u672c\uff0c\u65b0\u589e\u3001\u5220\u9664\u548c\u4fee\u6539\u7684\u5185\u5bb9\u4f1a\u5b9e\u65f6\u9ad8\u4eae\u663e\u793a\u3002",
        "zh_privacy": "\u6240\u6709\u6bd4\u8f83\u5728\u6d4f\u89c8\u5668\u672c\u5730\u5b8c\u6210\uff0c\u6587\u672c\u4e0d\u4f1a\u4e0a\u4f20\uff0c\u9002\u5408\u6bd4\u8f83\u5408\u540c\u3001\u6cd5\u5f8b\u6587\u4e66\u548c\u4ee3\u7801\u4fee\u8ba2\u3002",
    },
    "text-repeater": {
        "type": "text",
        "en_howto": "Enter the text to repeat, set the repeat count, choose a separator (newline, comma, space, or custom), and click Repeat. The output appears instantly for one-click copying.",
        "en_privacy": "All repetition happens locally. Your input text never leaves your browser \u2014 safe for generating test data from sensitive templates.",
        "zh_howto": "\u8f93\u5165\u8981\u91cd\u590d\u7684\u6587\u672c\uff0c\u8bbe\u7f6e\u91cd\u590d\u6b21\u6570\uff0c\u9009\u62e9\u5206\u9694\u7b26\uff08\u6362\u884c\u3001\u9017\u53f7\u3001\u7a7a\u683c\u6216\u81ea\u5b9a\u4e49\uff09\uff0c\u70b9\u51fb\u91cd\u590d\u5373\u53ef\u4e00\u952e\u590d\u5236\u3002",
        "zh_privacy": "\u6240\u6709\u91cd\u590d\u64cd\u4f5c\u5728\u672c\u5730\u5b8c\u6210\uff0c\u8f93\u5165\u6587\u672c\u4e0d\u4f1a\u79bb\u5f00\u6d4f\u89c8\u5668\uff0c\u9002\u5408\u4ece\u654f\u611f\u6a21\u677f\u751f\u6210\u6d4b\u8bd5\u6570\u636e\u3002",
    },
    "text-to-binary": {
        "type": "text",
        "en_howto": "Type or paste text in the input box to see its binary representation below. Switch to decode mode to paste space-separated 8-bit binary groups and recover the original text.",
        "en_privacy": "All conversion happens in your browser. Neither your text nor binary data is sent anywhere \u2014 safe for encoding private messages or learning exercises.",
        "zh_howto": "\u5728\u8f93\u5165\u6846\u4e2d\u8f93\u5165\u6216\u7c98\u8d34\u6587\u672c\uff0c\u5373\u53ef\u5728\u4e0b\u65b9\u770b\u5230\u4e8c\u8fdb\u5236\u8868\u793a\u3002\u5207\u6362\u5230\u89e3\u7801\u6a21\u5f0f\u53ef\u7c98\u8d34\u7a7a\u683c\u5206\u9694\u76848\u4f4d\u4e8c\u8fdb\u5236\u8fd8\u539f\u6587\u672c\u3002",
        "zh_privacy": "\u6240\u6709\u8f6c\u6362\u5728\u6d4f\u89c8\u5668\u4e2d\u5b8c\u6210\uff0c\u6587\u672c\u548c\u4e8c\u8fdb\u5236\u6570\u636e\u5747\u4e0d\u4f1a\u5916\u4f20\u3002",
    },
    "text-to-slug": {
        "type": "text",
        "en_howto": "Type a title or heading and the tool generates a URL-safe slug instantly \u2014 lowercase, hyphens for spaces, special characters stripped. Toggle between hyphen and underscore separators as needed.",
        "en_privacy": "All slug generation happens locally. Your text is never uploaded \u2014 safe for working with unpublished article titles or internal page names.",
        "zh_howto": "\u8f93\u5165\u6807\u9898\u6216\u6587\u672c\uff0c\u5de5\u5177\u5373\u65f6\u751f\u6210 URL \u5b89\u5168\u7684 slug\uff08\u5c0f\u5199\u3001\u7a7a\u683c\u8f6c\u8fde\u5b57\u7b26\u3001\u53bb\u9664\u7279\u6b8a\u5b57\u7b26\uff09\u3002\u53ef\u5207\u6362\u8fde\u5b57\u7b26\u6216\u4e0b\u5212\u7ebf\u5206\u9694\u7b26\u3002",
        "zh_privacy": "\u6240\u6709 slug \u751f\u6210\u5728\u672c\u5730\u5b8c\u6210\uff0c\u6587\u672c\u4e0d\u4f1a\u4e0a\u4f20\uff0c\u9002\u5408\u5904\u7406\u672a\u53d1\u5e03\u7684\u6587\u7ae0\u6807\u9898\u6216\u5185\u90e8\u9875\u9762\u540d\u79f0\u3002",
    },
    "text-sorter": {
        "type": "text",
        "en_howto": "Paste your list of lines, pick a sort mode (alphabetical A\u2013Z, reverse Z\u2013A, by line length, or reverse order), and optionally remove duplicates. The sorted output appears instantly.",
        "en_privacy": "All sorting happens locally in your browser. Your text stays on your device \u2014 safe for sorting mailing lists, log entries, or confidential data.",
        "zh_howto": "\u7c98\u8d34\u884c\u5217\u8868\uff0c\u9009\u62e9\u6392\u5e8f\u6a21\u5f0f\uff08\u5b57\u6bcd\u5347\u5e8f\u3001\u964d\u5e8f\u3001\u6309\u884c\u957f\u3001\u53cd\u5e8f\uff09\uff0c\u53ef\u9009\u53bb\u9664\u91cd\u590d\u884c\uff0c\u6392\u5e8f\u7ed3\u679c\u5373\u65f6\u663e\u793a\u3002",
        "zh_privacy": "\u6240\u6709\u6392\u5e8f\u5728\u6d4f\u89c8\u5668\u672c\u5730\u5b8c\u6210\uff0c\u6587\u672c\u4fdd\u7559\u5728\u8bbe\u5907\u4e0a\uff0c\u9002\u5408\u6392\u5e8f\u90ae\u4ef6\u5217\u8868\u3001\u65e5\u5fd7\u6216\u673a\u5bc6\u6570\u636e\u3002",
    },
    "text-deduplicator": {
        "type": "text",
        "en_howto": "Paste lines that may contain duplicates and the tool instantly returns only unique lines, preserving their original order. Toggle case-sensitive mode if needed.",
        "en_privacy": "All deduplication happens locally. Your text never leaves your browser \u2014 safe for cleaning up customer lists, email addresses, or sensitive records.",
        "zh_howto": "\u7c98\u8d34\u53ef\u80fd\u542b\u6709\u91cd\u590d\u7684\u884c\uff0c\u5de5\u5177\u5373\u65f6\u8fd4\u56de\u4ec5\u5305\u542b\u552f\u4e00\u884c\u7684\u7ed3\u679c\uff0c\u4fdd\u6301\u539f\u59cb\u987a\u5e8f\u3002\u53ef\u5207\u6362\u5927\u5c0f\u5199\u654f\u611f\u6a21\u5f0f\u3002",
        "zh_privacy": "\u6240\u6709\u53bb\u91cd\u5728\u672c\u5730\u5b8c\u6210\uff0c\u6587\u672c\u4e0d\u4f1a\u79bb\u5f00\u6d4f\u89c8\u5668\uff0c\u9002\u5408\u6e05\u7406\u5ba2\u6237\u5217\u8868\u3001\u90ae\u7bb1\u5730\u5740\u6216\u654f\u611f\u8bb0\u5f55\u3002",
    },
    "text-reverser": {
        "type": "text",
        "en_howto": "Enter text and choose a reverse mode: reverse characters, reverse word order, or reverse line order. The result appears instantly for one-click copying.",
        "en_privacy": "All reversal happens locally. Your text never leaves your device \u2014 safe for puzzles, data formatting, and sensitive content.",
        "zh_howto": "\u8f93\u5165\u6587\u672c\uff0c\u9009\u62e9\u53cd\u8f6c\u6a21\u5f0f\uff08\u5b57\u7b26\u53cd\u8f6c\u3001\u5355\u8bcd\u987a\u5e8f\u53cd\u8f6c\u3001\u884c\u987a\u5e8f\u53cd\u8f6c\uff09\uff0c\u7ed3\u679c\u5373\u65f6\u663e\u793a\uff0c\u4e00\u952e\u590d\u5236\u3002",
        "zh_privacy": "\u6240\u6709\u53cd\u8f6c\u5728\u672c\u5730\u5b8c\u6210\uff0c\u6587\u672c\u4e0d\u4f1a\u79bb\u5f00\u8bbe\u5907\uff0c\u9002\u5408\u89e3\u8c1c\u3001\u683c\u5f0f\u5316\u6570\u636e\u548c\u654f\u611f\u5185\u5bb9\u3002",
    },
    "random-string-generator": {
        "type": "util",
        "en_howto": "Set the string length, pick which character types to include (letters, digits, symbols), and click Generate. Copy the result instantly, or regenerate for a new random string.",
        "en_privacy": "Generation uses your browser's native random source \u2014 no strings are stored or transmitted. Safe for generating API keys, tokens, or test identifiers.",
        "zh_howto": "\u8bbe\u7f6e\u5b57\u7b26\u4e32\u957f\u5ea6\uff0c\u9009\u62e9\u5b57\u7b26\u7c7b\u578b\uff08\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u7b26\u53f7\uff09\uff0c\u70b9\u51fb\u751f\u6210\u5373\u53ef\u4e00\u952e\u590d\u5236\uff0c\u6216\u91cd\u65b0\u751f\u6210\u65b0\u7684\u968f\u673a\u5b57\u7b26\u4e32\u3002",
        "zh_privacy": "\u751f\u6210\u4f7f\u7528\u6d4f\u89c8\u5668\u539f\u751f\u968f\u673a\u6e90\uff0c\u4e0d\u5b58\u50a8\u6216\u4f20\u8f93\u4efb\u4f55\u5b57\u7b26\u4e32\uff0c\u9002\u5408\u751f\u6210 API \u5bc6\u94a5\u3001\u4ee4\u724c\u6216\u6d4b\u8bd5\u6807\u8bc6\u7b26\u3002",
    },
    "palindrome-checker": {
        "type": "util",
        "en_howto": "Type or paste any text and the checker instantly tells you whether it reads the same forwards and backwards, ignoring spaces and punctuation by default.",
        "en_privacy": "All checking happens locally in your browser. Your text is never sent anywhere \u2014 safe for verifying private messages or code snippets.",
        "zh_howto": "\u8f93\u5165\u6216\u7c98\u8d34\u4efb\u610f\u6587\u672c\uff0c\u5de5\u5177\u5373\u65f6\u5224\u65ad\u5b83\u662f\u5426\u4e3a\u56de\u6587\uff08\u6b63\u53cd\u8bfb\u76f8\u540c\uff09\uff0c\u9ed8\u8ba4\u5ffd\u7565\u7a7a\u683c\u548c\u6807\u70b9\u3002",
        "zh_privacy": "\u6240\u6709\u68c0\u67e5\u5728\u6d4f\u89c8\u5668\u672c\u5730\u5b8c\u6210\uff0c\u6587\u672c\u4e0d\u4f1a\u5916\u4f20\uff0c\u9002\u5408\u9a8c\u8bc1\u79c1\u5bc6\u6d88\u606f\u6216\u4ee3\u7801\u7247\u6bb5\u3002",
    },
    "random-number-generator": {
        "type": "util",
        "en_howto": "Set the minimum and maximum values for your range, choose how many numbers to generate, and optionally enable unique-only mode. Click Generate for instant results.",
        "en_privacy": "All generation happens locally using your browser's random source. No values are stored or tracked \u2014 safe for lotteries, raffles, and statistical sampling.",
        "zh_howto": "\u8bbe\u7f6e\u6700\u5c0f\u548c\u6700\u5927\u503c\uff0c\u9009\u62e9\u751f\u6210\u6570\u91cf\uff0c\u53ef\u9009\u5f00\u542f\u4ec5\u552f\u4e00\u503c\u6a21\u5f0f\uff0c\u70b9\u51fb\u751f\u6210\u5373\u53ef\u83b7\u5f97\u7ed3\u679c\u3002",
        "zh_privacy": "\u6240\u6709\u751f\u6210\u5728\u672c\u5730\u4f7f\u7528\u6d4f\u89c8\u5668\u968f\u673a\u6e90\u5b8c\u6210\uff0c\u4e0d\u5b58\u50a8\u6216\u8ffd\u8e2a\u4efb\u4f55\u503c\uff0c\u9002\u5408\u62bd\u5956\u3001\u7edf\u8ba1\u62bd\u6837\u7b49\u573a\u666f\u3002",
    },
    "pdf-rotator": {
        "type": "pdf",
        "en_howto": "Drag your PDF onto the tool, select the pages you want to rotate, choose 90\u00b0, 180\u00b0, or 270\u00b0, and click Rotate. Download the corrected PDF instantly.",
        "en_privacy": "All rotation happens locally in your browser using pdf-lib. Your PDF is never uploaded \u2014 critical for contracts, medical records, and financial statements.",
        "zh_howto": "\u5c06 PDF \u62d6\u5165\u5de5\u5177\uff0c\u9009\u62e9\u8981\u65cb\u8f6c\u7684\u9875\u9762\uff0c\u9009\u62e9 90\u00b0\u3001180\u00b0 \u6216 270\u00b0\uff0c\u70b9\u51fb\u65cb\u8f6c\u5373\u53ef\u4e0b\u8f7d\u4fee\u6b63\u540e\u7684 PDF\u3002",
        "zh_privacy": "\u6240\u6709\u65cb\u8f6c\u64cd\u4f5c\u5728\u6d4f\u89c8\u5668\u672c\u5730\u4f7f\u7528 pdf-lib \u5b8c\u6210\uff0cPDF \u4e0d\u4f1a\u4e0a\u4f20\uff0c\u5bf9\u5408\u540c\u3001\u533b\u7597\u8bb0\u5f55\u548c\u8d22\u52a1\u62a5\u8868\u81f3\u5173\u91cd\u8981\u3002",
    },
    "pdf-page-remover": {
        "type": "pdf",
        "en_howto": "Upload your PDF, preview each page visually, select the pages you want to delete, and click Remove. Download the trimmed PDF instantly.",
        "en_privacy": "All page removal happens locally in your browser using pdf-lib. Your document never leaves your device \u2014 critical for sensitive PDFs like tax returns or legal filings.",
        "zh_howto": "\u4e0a\u4f20 PDF\uff0c\u53ef\u89c6\u5316\u9884\u89c8\u6bcf\u9875\uff0c\u9009\u62e9\u8981\u5220\u9664\u7684\u9875\u9762\uff0c\u70b9\u51fb\u5220\u9664\u5373\u53ef\u4e0b\u8f7d\u88c1\u526a\u540e\u7684 PDF\u3002",
        "zh_privacy": "\u6240\u6709\u5220\u9664\u64cd\u4f5c\u5728\u6d4f\u89c8\u5668\u672c\u5730\u4f7f\u7528 pdf-lib \u5b8c\u6210\uff0c\u6587\u6863\u4e0d\u4f1a\u79bb\u5f00\u8bbe\u5907\uff0c\u5bf9\u7a0e\u52a1\u62a5\u544a\u3001\u6cd5\u5f8b\u6587\u4ef6\u7b49\u654f\u611f PDF \u81f3\u5173\u91cd\u8981\u3002",
    },
    "emoji-remover": {
        "type": "text",
        "en_howto": "Paste text containing emoji and the tool instantly strips all emoji characters while preserving the surrounding words and punctuation. Copy the clean text with one click.",
        "en_privacy": "All processing happens locally. Your text never leaves your browser \u2014 safe for cleaning up messages, form submissions, or database content.",
        "zh_howto": "\u7c98\u8d34\u542b\u6709 emoji \u7684\u6587\u672c\uff0c\u5de5\u5177\u5373\u65f6\u5254\u9664\u6240\u6709 emoji \u5b57\u7b26\uff0c\u540c\u65f6\u4fdd\u7559\u5468\u56f4\u7684\u6587\u5b57\u548c\u6807\u70b9\uff0c\u4e00\u952e\u590d\u5236\u7eaf\u6587\u672c\u3002",
        "zh_privacy": "\u6240\u6709\u5904\u7406\u5728\u672c\u5730\u5b8c\u6210\uff0c\u6587\u672c\u4e0d\u4f1a\u79bb\u5f00\u6d4f\u89c8\u5668\uff0c\u9002\u5408\u6e05\u7406\u6d88\u606f\u3001\u8868\u5355\u63d0\u4ea4\u6216\u6570\u636e\u5e93\u5185\u5bb9\u3002",
    },
    "unicode-detector": {
        "type": "text",
        "en_howto": "Paste any text and the tool breaks it down character by character, showing each character's Unicode codepoint, name, category (letter, digit, symbol, etc.), and UTF-8 byte encoding.",
        "en_privacy": "All analysis happens locally in your browser. Your text is never uploaded \u2014 safe for inspecting log files, debug output, or sensitive data.",
        "zh_howto": "\u7c98\u8d34\u4efb\u610f\u6587\u672c\uff0c\u5de5\u5177\u9010\u5b57\u7b26\u62c6\u89e3\uff0c\u663e\u793a\u6bcf\u4e2a\u5b57\u7b26\u7684 Unicode \u7801\u70b9\u3001\u540d\u79f0\u3001\u7c7b\u522b\uff08\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u7b26\u53f7\u7b49\uff09\u548c UTF-8 \u5b57\u8282\u7f16\u7801\u3002",
        "zh_privacy": "\u6240\u6709\u5206\u6790\u5728\u6d4f\u89c8\u5668\u672c\u5730\u5b8c\u6210\uff0c\u6587\u672c\u4e0d\u4f1a\u4e0a\u4f20\uff0c\u9002\u5408\u68c0\u67e5\u65e5\u5fd7\u6587\u4ef6\u3001\u8c03\u8bd5\u8f93\u51fa\u6216\u654f\u611f\u6570\u636e\u3002",
    },
    "json-diff": {
        "type": "text",
        "en_howto": "Paste your original JSON in the left pane and the modified JSON in the right pane. Added, removed, and changed keys and values are highlighted side by side instantly.",
        "en_privacy": "All comparison happens locally. Your JSON data never leaves your browser \u2014 safe for comparing API responses, config files, and sensitive payloads.",
        "zh_howto": "\u5728\u5de6\u4fa7\u7c98\u8d34\u539f\u59cb JSON\uff0c\u53f3\u4fa7\u7c98\u8d34\u4fee\u6539\u540e\u7684 JSON\uff0c\u65b0\u589e\u3001\u5220\u9664\u548c\u4fee\u6539\u7684\u952e\u503c\u5bf9\u5373\u65f6\u5e76\u6392\u9ad8\u4eae\u663e\u793a\u3002",
        "zh_privacy": "\u6240\u6709\u6bd4\u8f83\u5728\u672c\u5730\u5b8c\u6210\uff0cJSON \u6570\u636e\u4e0d\u4f1a\u79bb\u5f00\u6d4f\u89c8\u5668\uff0c\u9002\u5408\u6bd4\u8f83 API \u54cd\u5e94\u3001\u914d\u7f6e\u6587\u4ef6\u548c\u654f\u611f\u8f7d\u8377\u3002",
    },
    "binary-to-text": {
        "type": "text",
        "en_howto": "Paste binary digits (space-separated 8-bit groups or a continuous stream) in the input box and the decoded text appears instantly below. Switch to encode mode to convert text back to binary.",
        "en_privacy": "All conversion happens in your browser. Neither your text nor binary data is sent anywhere \u2014 safe for decoding private messages or learning exercises.",
        "zh_howto": "\u5728\u8f93\u5165\u6846\u7c98\u8d34\u4e8c\u8fdb\u5236\u6570\u5b57\uff08\u7a7a\u683c\u5206\u9694\u76848\u4f4d\u7ec4\u6216\u8fde\u7eed\u6d41\uff09\uff0c\u89e3\u7801\u540e\u7684\u6587\u672c\u5373\u65f6\u663e\u793a\u3002\u5207\u6362\u5230\u7f16\u7801\u6a21\u5f0f\u53ef\u5c06\u6587\u672c\u8f6c\u56de\u4e8c\u8fdb\u5236\u3002",
        "zh_privacy": "\u6240\u6709\u8f6c\u6362\u5728\u6d4f\u89c8\u5668\u4e2d\u5b8c\u6210\uff0c\u6587\u672c\u548c\u4e8c\u8fdb\u5236\u6570\u636e\u5747\u4e0d\u4f1a\u5916\u4f20\u3002",
    },
    "color-palette": {
        "type": "util",
        "en_howto": "Pick a base color using the color picker or enter a hex value, then choose a harmony type (complementary, analogous, triadic, tetradic, or monochromatic). Click any swatch to copy its hex code.",
        "en_privacy": "All palette generation happens locally. No colors or preferences are stored or tracked.",
        "zh_howto": "\u4f7f\u7528\u62fe\u8272\u5668\u9009\u62e9\u57fa\u8272\u6216\u8f93\u5165\u5341\u516d\u8fdb\u5236\u503c\uff0c\u9009\u62e9\u914d\u8272\u7c7b\u578b\uff08\u4e92\u8865\u3001\u7c7b\u4f3c\u3001\u4e09\u5206\u3001\u56db\u5206\u6216\u5355\u8272\uff09\uff0c\u70b9\u51fb\u4efb\u610f\u8272\u5757\u590d\u5236\u5176 hex \u503c\u3002",
        "zh_privacy": "\u6240\u6709\u8c03\u8272\u677f\u751f\u6210\u5728\u672c\u5730\u5b8c\u6210\uff0c\u4e0d\u5b58\u50a8\u6216\u8ffd\u8e2a\u4efb\u4f55\u989c\u8272\u6216\u504f\u597d\u3002",
    },
    "countdown-timer": {
        "type": "util",
        "en_howto": "Set your target date and time, optionally add a label, and the countdown begins instantly \u2014 showing days, hours, minutes, and seconds remaining. The timer keeps running even if you navigate away.",
        "en_privacy": "The countdown runs entirely in your browser. Your target date is stored locally only if you choose to save it \u2014 nothing is uploaded or tracked.",
        "zh_howto": "\u8bbe\u7f6e\u76ee\u6807\u65e5\u671f\u548c\u65f6\u95f4\uff0c\u53ef\u9009\u6dfb\u52a0\u6807\u7b7e\uff0c\u5012\u8ba1\u65f6\u5373\u5f00\u59cb\u2014\u2014\u663e\u793a\u5269\u4f59\u5929\u3001\u65f6\u3001\u5206\u3001\u79d2\u3002\u5373\u4f7f\u79bb\u5f00\u9875\u9762\u8ba1\u65f6\u5668\u4ecd\u7ee7\u7eed\u8fd0\u884c\u3002",
        "zh_privacy": "\u5012\u8ba1\u65f6\u5b8c\u5168\u5728\u6d4f\u89c8\u5668\u4e2d\u8fd0\u884c\uff0c\u76ee\u6807\u65e5\u671f\u4ec5\u5728\u4f60\u9009\u62e9\u4fdd\u5b58\u65f6\u624d\u5b58\u50a8\u5728\u672c\u5730\uff0c\u4e0d\u4f1a\u4e0a\u4f20\u6216\u88ab\u8ffd\u8e2a\u3002",
    },
    "dice-roller": {
        "type": "util",
        "en_howto": "Choose a dice type (d4, d6, d8, d10, d12, or d20), set the number of dice to roll, and click Roll. Results appear instantly with individual rolls and a total sum.",
        "en_privacy": "All rolling happens locally using your browser's random source. No results are stored or tracked \u2014 perfect for tabletop RPGs and classroom activities.",
        "zh_howto": "\u9009\u62e9\u9ab0\u5b50\u7c7b\u578b\uff08d4\u3001d6\u3001d8\u3001d10\u3001d12\u3001d20\uff09\uff0c\u8bbe\u7f6e\u9ab0\u5b50\u6570\u91cf\uff0c\u70b9\u51fb\u6eda\u52a8\u3002\u7ed3\u679c\u5373\u65f6\u663e\u793a\u5404\u9ab0\u70b9\u6570\u548c\u603b\u548c\u3002",
        "zh_privacy": "\u6240\u6709\u6eda\u52a8\u5728\u672c\u5730\u4f7f\u7528\u6d4f\u89c8\u5668\u968f\u673a\u6e90\u5b8c\u6210\uff0c\u4e0d\u5b58\u50a8\u6216\u8ffd\u8e2a\u4efb\u4f55\u7ed3\u679c\uff0c\u9002\u5408\u684c\u6e38 RPG \u548c\u8bfe\u5802\u6d3b\u52a8\u3002",
    },
    "decision-maker": {
        "type": "util",
        "en_howto": "Enter your options (one per line or separated by commas) and click Decide. The tool picks one option at random \u2014 re-click for a new decision.",
        "en_privacy": "All selection happens locally in your browser. Your options are never stored or transmitted \u2014 safe for personal or sensitive decisions.",
        "zh_howto": "\u8f93\u5165\u9009\u9879\uff08\u6bcf\u884c\u4e00\u4e2a\u6216\u7528\u9017\u53f7\u5206\u9694\uff09\uff0c\u70b9\u51fb\u51b3\u5b9a\u3002\u5de5\u5177\u968f\u673a\u9009\u51fa\u4e00\u4e2a\u9009\u9879\uff0c\u53ef\u91cd\u65b0\u70b9\u51fb\u83b7\u5f97\u65b0\u7ed3\u679c\u3002",
        "zh_privacy": "\u6240\u6709\u9009\u62e9\u5728\u6d4f\u89c8\u5668\u672c\u5730\u5b8c\u6210\uff0c\u9009\u9879\u4e0d\u4f1a\u88ab\u5b58\u50a8\u6216\u4f20\u8f93\uff0c\u9002\u5408\u4e2a\u4eba\u6216\u654f\u611f\u51b3\u7b56\u3002",
    },
    "password-strength": {
        "type": "text",
        "en_howto": "Type or paste a password and the tool scores its strength in real time \u2014 analyzing length, character variety, entropy, and common-pattern vulnerability. Suggestions appear as you type.",
        "en_privacy": "All analysis happens locally in your browser. Your password is never transmitted, logged, or stored \u2014 safe for testing real credentials.",
        "zh_howto": "\u8f93\u5165\u6216\u7c98\u8d34\u5bc6\u7801\uff0c\u5de5\u5177\u5b9e\u65f6\u8bc4\u5206\u5176\u5f3a\u5ea6\u2014\u2014\u5206\u6790\u957f\u5ea6\u3001\u5b57\u7b26\u591a\u6837\u6027\u3001\u71b5\u503c\u548c\u5e38\u89c1\u6a21\u5f0f\u6f0f\u6d1e\uff0c\u5e76\u5b9e\u65f6\u7ed9\u51fa\u5efa\u8bae\u3002",
        "zh_privacy": "\u6240\u6709\u5206\u6790\u5728\u6d4f\u89c8\u5668\u672c\u5730\u5b8c\u6210\uff0c\u5bc6\u7801\u4e0d\u4f1a\u88ab\u4f20\u8f93\u3001\u8bb0\u5f55\u6216\u5b58\u50a8\uff0c\u9002\u5408\u6d4b\u8bd5\u771f\u5b9e\u51ed\u8bc1\u3002",
    },
    "barcode-generator": {
        "type": "util",
        "en_howto": "Enter your data (text, URL, or number), choose a barcode format (Code128, EAN-13, Code39, or QR Code), adjust size if needed, and click Generate. Download the image as PNG or SVG.",
        "en_privacy": "All generation happens locally in your browser. Your data is never uploaded \u2014 safe for creating barcodes for internal product codes or private links.",
        "zh_howto": "\u8f93\u5165\u6570\u636e\uff08\u6587\u672c\u3001URL \u6216\u6570\u5b57\uff09\uff0c\u9009\u62e9\u6761\u7801\u683c\u5f0f\uff08Code128\u3001EAN-13\u3001Code39 \u6216 QR Code\uff09\uff0c\u53ef\u8c03\u6574\u5c3a\u5bf8\uff0c\u70b9\u51fb\u751f\u6210\u5373\u53ef\u4e0b\u8f7d PNG \u6216 SVG \u56fe\u7247\u3002",
        "zh_privacy": "\u6240\u6709\u751f\u6210\u5728\u6d4f\u89c8\u5668\u672c\u5730\u5b8c\u6210\uff0c\u6570\u636e\u4e0d\u4f1a\u4e0a\u4f20\uff0c\u9002\u5408\u4e3a\u5185\u90e8\u4ea7\u54c1\u4ee3\u7801\u6216\u79c1\u5bc6\u94fe\u63a5\u751f\u6210\u6761\u7801\u3002",
    },
    "qr-reader": {
        "type": "util",
        "en_howto": "Drag a QR code image onto the tool or use the file picker. The embedded URL, text, or contact data is decoded and displayed instantly \u2014 copy it with one click.",
        "en_privacy": "All decoding happens locally in your browser. Your image is never uploaded \u2014 safe for scanning QR codes containing personal or financial information.",
        "zh_howto": "\u5c06 QR \u7801\u56fe\u7247\u62d6\u5165\u5de5\u5177\u6216\u4f7f\u7528\u6587\u4ef6\u9009\u62e9\u5668\uff0c\u5d4c\u5165\u7684 URL\u3001\u6587\u672c\u6216\u8054\u7cfb\u4eba\u6570\u636e\u5373\u65f6\u89e3\u7801\u5e76\u663e\u793a\uff0c\u4e00\u952e\u590d\u5236\u3002",
        "zh_privacy": "\u6240\u6709\u89e3\u7801\u5728\u6d4f\u89c8\u5668\u672c\u5730\u5b8c\u6210\uff0c\u56fe\u7247\u4e0d\u4f1a\u4e0a\u4f20\uff0c\u9002\u5408\u626b\u63cf\u542b\u6709\u4e2a\u4eba\u6216\u8d22\u52a1\u4fe1\u606f\u7684 QR \u7801\u3002",
    },
    "online-notepad": {
        "type": "text",
        "en_howto": "Start typing immediately \u2014 no setup required. Your notes auto-save to your browser's local storage as you type, surviving page refreshes and browser restarts. Export to a .txt file anytime.",
        "en_privacy": "All notes are stored exclusively in your browser's local storage \u2014 never uploaded to any server. Clear your notes with one click to wipe them permanently from your device.",
        "zh_howto": "\u76f4\u63a5\u5f00\u59cb\u8f93\u5165\u5373\u53ef\uff0c\u65e0\u9700\u8bbe\u7f6e\u3002\u7b14\u8bb0\u5728\u8f93\u5165\u65f6\u81ea\u52a8\u4fdd\u5b58\u5230\u6d4f\u89c8\u5668\u672c\u5730\u5b58\u50a8\uff0c\u5237\u65b0\u9875\u9762\u6216\u91cd\u542f\u6d4f\u89c8\u5668\u540e\u4ecd\u7136\u4fdd\u7559\u3002\u53ef\u968f\u65f6\u5bfc\u51fa\u4e3a .txt \u6587\u4ef6\u3002",
        "zh_privacy": "\u6240\u6709\u7b14\u8bb0\u4ec5\u5b58\u50a8\u5728\u6d4f\u89c8\u5668\u7684\u672c\u5730\u5b58\u50a8\u4e2d\uff0c\u4e0d\u4f1a\u4e0a\u4f20\u5230\u4efb\u4f55\u670d\u52a1\u5668\u3002\u4e00\u952e\u6e05\u9664\u53ef\u6c38\u4e45\u5220\u9664\u8bbe\u5907\u4e0a\u7684\u7b14\u8bb0\u3002",
    },
    "text-statistics": {
        "type": "text",
        "en_howto": "Paste or type text and the tool displays a detailed breakdown: total letters, vowels, consonants, syllables, unique words, word frequency, and average word length \u2014 all updating live as you type.",
        "en_privacy": "All analysis happens locally in your browser. Your text is never uploaded \u2014 safe for analyzing essays, reports, and confidential documents.",
        "zh_howto": "\u7c98\u8d34\u6216\u8f93\u5165\u6587\u672c\uff0c\u5de5\u5177\u663e\u793a\u8be6\u7ec6\u5206\u6790\uff1a\u5b57\u6bcd\u603b\u6570\u3001\u5143\u97f3\u3001\u8f85\u97f3\u3001\u97f3\u8282\u3001\u72ec\u7279\u5355\u8bcd\u3001\u8bcd\u9891\u548c\u5e73\u5747\u8bcd\u957f\u2014\u2014\u5168\u90e8\u5b9e\u65f6\u66f4\u65b0\u3002",
        "zh_privacy": "\u6240\u6709\u5206\u6790\u5728\u6d4f\u89c8\u5668\u672c\u5730\u5b8c\u6210\uff0c\u6587\u672c\u4e0d\u4f1a\u4e0a\u4f20\uff0c\u9002\u5408\u5206\u6790\u8bba\u6587\u3001\u62a5\u544a\u548c\u673a\u5bc6\u6587\u6863\u3002",
    },
}


def get_templates(slg_type):
    """Return (howto_template, privacy_template) for EN and ZH based on type."""
    if slg_type == "text":
        return {
            "en_howto": TPL_TEXT_HOWTO_EN,
            "en_privacy": TPL_TEXT_PRIVACY_EN,
            "zh_howto": TPL_TEXT_HOWTO_ZH,
            "zh_privacy": TPL_TEXT_PRIVACY_ZH,
        }
    elif slg_type == "util":
        return {
            "en_howto": TPL_UTIL_HOWTO_EN,
            "en_privacy": TPL_UTIL_PRIVACY_EN,
            "zh_howto": TPL_UTIL_HOWTO_ZH,
            "zh_privacy": TPL_UTIL_PRIVACY_ZH,
        }
    elif slg_type == "pdf":
        return {
            "en_howto": TPL_PDF_HOWTO_EN,
            "en_privacy": TPL_PDF_PRIVACY_EN,
            "zh_howto": TPL_PDF_HOWTO_ZH,
            "zh_privacy": TPL_PDF_PRIVACY_ZH,
        }


def main():
    with open(FILE, "r", encoding="utf-8") as f:
        content = f.read()

    stats = {"ok": 0, "fail": []}

    for slug, data in REPLACEMENTS.items():
        templates = get_templates(data["type"])

        # For each template key, do a positional replacement within the slug's block
        # Strategy: find the slug's block boundaries, then replace within that slice

        # Find the slug block: "slug": { ... },
        slug_pattern = f'  "{slug}": {{'
        slug_start = content.find(slug_pattern)
        if slug_start == -1:
            stats["fail"].append(f"{slug}: slug not found")
            continue

        # Find the end of this block (next "slug": { at same indent, or closing })
        # Look for the next `  },` at the same indent level
        next_block = content.find('\n  },\n  "', slug_start)
        if next_block == -1:
            # might be last entry
            next_block = content.find('\n  },\n};', slug_start)
        if next_block == -1:
            stats["fail"].append(f"{slug}: block end not found")
            continue

        block_end = next_block + 4  # include the },
        block = content[slug_start:block_end]

        # Replace each template string within this block.
        # For "text" type: EN howto template == ZH howto template (English text appears
        # verbatim in both en: and zh: blocks). So we replace the 1st occurrence with EN
        # content and the 2nd with ZH content. Same for privacy in text type.
        replaced_block = block
        success = True

        # Build replacement pairs: (old_string, new_string) in positional order
        pairs = []
        if data["type"] == "text":
            # en_howto and zh_howto share the same template string
            pairs.append((TPL_TEXT_HOWTO_EN, data["en_howto"]))
            pairs.append((TPL_TEXT_HOWTO_ZH, data["zh_howto"]))
            # privacy: en and zh templates differ
            pairs.append((TPL_TEXT_PRIVACY_EN, data["en_privacy"]))
            pairs.append((TPL_TEXT_PRIVACY_ZH, data["zh_privacy"]))
        else:
            pairs.append((templates["en_howto"], data["en_howto"]))
            pairs.append((templates["en_privacy"], data["en_privacy"]))
            pairs.append((templates["zh_howto"], data["zh_howto"]))
            pairs.append((templates["zh_privacy"], data["zh_privacy"]))

        for old_val, new_val in pairs:
            count = replaced_block.count(old_val)
            if count == 0:
                # Might already be replaced if en==zh template; skip gracefully
                continue
            replaced_block = replaced_block.replace(old_val, new_val, 1)

        if success:
            content = content[:slug_start] + replaced_block + content[block_end:]
            stats["ok"] += 1

    # Write the result
    with open(FILE, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"Success: {stats['ok']}/{len(REPLACEMENTS)}")
    if stats["fail"]:
        print("Failures:")
        for f in stats["fail"]:
            print(f"  - {f}")
    else:
        print("All replacements completed successfully!")


if __name__ == "__main__":
    main()
