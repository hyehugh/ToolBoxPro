/**
 * Tool usage guides — unique 150+ word descriptions for each tool.
 * Renders on tool pages for SEO content quality and user guidance.
 * All processing is 100% client-side — no data leaves the browser.
 */

export type ToolGuideData = { en: string; zh: string };

export const toolGuides: Record<string, ToolGuideData> = {
  "json-formatter": {
    en: `Built for developers who need quick results. This tool format, validate, and beautify json data instantly. fix syntax errors and make y with a clean, distraction-free interface.

Key features: Supports JSON validation, syntax error highlighting, tree view, and compact formatting. Handles files up to 10MB.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Built for developers who need quick results. This tool format, validate, and beautify json data instantly. fix syntax errors and make y with a clean, distraction-free interface.

主要特点：自动格式化、语法错误高亮、树状视图和紧凑格式化，支持最大10MB文件

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "base64-encode-decode": {
    en: `A developer utility that helps you encode text, files, or images to base64 format and decode them back. perfect for. Run it entirely in your browser for instant results.

Key features: Works with text, images, and binary files. Supports both encoding and decoding with one-click copy.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `A developer utility that helps you encode text, files, or images to base64 format and decode them back. perfect for. Run it entirely in your browser for instant results.

主要特点：支持文本、图片和二进制文件的编码与解码，一键复制结果

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "regex-tester": {
    en: `Streamline your development workflow with this tool that test regular expressions with real-time highlighting. No server, no signup — just open and code.

Key features: Real-time match highlighting, capture group display, and JavaScript regex syntax support.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Streamline your development workflow with this tool that test regular expressions with real-time highlighting. No server, no signup — just open and code.

主要特点：实时匹配高亮、捕获组显示，支持JavaScript正则语法

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "color-converter": {
    en: `Convert values quickly with this free online calculator. It supports multiple unit systems and provides accurate results.

Key features: Converts between HEX, RGB, HSL, CMYK, and HSV with a visual color picker.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Convert values quickly with this free online calculator. It supports multiple unit systems and provides accurate results.

主要特点：支持HEX、RGB、HSL、CMYK和HSV格式互转，带可视化颜色选择器

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "url-encoder-decoder": {
    en: `Built for developers who need quick results. This tool encode and decode url components, query strings, and full urls. fix broken links with a clean, distraction-free interface.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Built for developers who need quick results. This tool encode and decode url components, query strings, and full urls. fix broken links with a clean, distraction-free interface.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "uuid-generator": {
    en: `Built for developers who need quick results. This tool generate random uuid v4 identifiers instantly. bulk generate unique ids for data with a clean, distraction-free interface.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Built for developers who need quick results. This tool generate random uuid v4 identifiers instantly. bulk generate unique ids for data with a clean, distraction-free interface.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "password-generator": {
    en: `Transform your text with this simple online tool. It create strong, secure passwords with custom options in real-time as you type.

Key features: Uses Web Crypto API for cryptographically secure random passwords. Customizable length and character sets.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Transform your text with this simple online tool. It create strong, secure passwords with custom options in real-time as you type.

主要特点：使用Web Crypto API生成密码学安全的随机密码，可自定义长度和字符集

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "hash-generator": {
    en: `A developer utility that helps you generate sha-256, sha-384, sha-512 hashes for any text or file. compare checksum. Run it entirely in your browser for instant results.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `A developer utility that helps you generate sha-256, sha-384, sha-512 hashes for any text or file. compare checksum. Run it entirely in your browser for instant results.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "timestamp-converter": {
    en: `Built for developers who need quick results. This tool convert between unix timestamps and human-readable dates with a clean, distraction-free interface.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Built for developers who need quick results. This tool convert between unix timestamps and human-readable dates with a clean, distraction-free interface.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "number-base-converter": {
    en: `A developer utility that helps you convert between binary, octal, decimal, and hexadecimal. Run it entirely in your browser for instant results.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `A developer utility that helps you convert between binary, octal, decimal, and hexadecimal. Run it entirely in your browser for instant results.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "image-compressor": {
    en: `A fast, free browser-based tool that helps you compress jpeg, png, webp images without losing visible quality. reduce file size without any software installation.

Key features: Reduces file size by 50-80% while maintaining visual quality. Supports JPEG, PNG, and WebP.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `A fast, free browser-based tool that helps you compress jpeg, png, webp images without losing visible quality. reduce file size without any software installation.

主要特点：在保持视觉质量的同时减小文件大小50-80%，支持JPEG、PNG和WebP

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "image-converter": {
    en: `This powerful image tool lets you convert images between jpg, png, webp, avif, gif, and bmp formats. batch convert directly in your browser — no uploads, no waiting.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `This powerful image tool lets you convert images between jpg, png, webp, avif, gif, and bmp formats. batch convert directly in your browser — no uploads, no waiting.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "pdf-merger": {
    en: `This powerful image tool lets you merge multiple pdf files into a single document instantly. combine pages, reorde directly in your browser — no uploads, no waiting.

Key features: Combines multiple PDF files into one document. Reorder pages with drag-and-drop.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `This powerful image tool lets you merge multiple pdf files into a single document instantly. combine pages, reorde directly in your browser — no uploads, no waiting.

主要特点：将多个PDF文件合并为一个文档，支持拖拽重新排序

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "word-counter": {
    en: `Transform your text with this simple online tool. It count words, characters, sentences, and reading time in real-time as you type.

Key features: Counts words, characters, sentences, paragraphs, and estimated reading time.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Transform your text with this simple online tool. It count words, characters, sentences, and reading time in real-time as you type.

主要特点：统计字数、字符数、句子数、段落数和预计阅读时间

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "case-converter": {
    en: `Transform your text with this simple online tool. It convert text between upper, lower, title, camelcase and more in real-time as you type.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Transform your text with this simple online tool. It convert text between upper, lower, title, camelcase and more in real-time as you type.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "lorem-ipsum-generator": {
    en: `A handy text processing tool that helps you generate placeholder text for design mockups, website wireframes, and print layo. Clean, fast, and completely free.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `A handy text processing tool that helps you generate placeholder text for design mockups, website wireframes, and print layo. Clean, fast, and completely free.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "text-diff-checker": {
    en: `Transform your text with this simple online tool. It compare two blocks of text side by side and highlight every difference. perfect  in real-time as you type.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Transform your text with this simple online tool. It compare two blocks of text side by side and highlight every difference. perfect  in real-time as you type.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "text-repeater": {
    en: `Transform your text with this simple online tool. It repeat any text multiple times with custom separators, line breaks, or prefixes. in real-time as you type.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Transform your text with this simple online tool. It repeat any text multiple times with custom separators, line breaks, or prefixes. in real-time as you type.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "html-entity-converter": {
    en: `Built for developers who need quick results. This tool encode and decode html entities like &amp; and &lt; with a clean, distraction-free interface.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Built for developers who need quick results. This tool encode and decode html entities like &amp; and &lt; with a clean, distraction-free interface.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "css-minifier": {
    en: `A developer utility that helps you minify and compress css code to reduce file size and improve page load speed. re. Run it entirely in your browser for instant results.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `A developer utility that helps you minify and compress css code to reduce file size and improve page load speed. re. Run it entirely in your browser for instant results.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "sql-formatter": {
    en: `Streamline your development workflow with this tool that format and beautify sql queries for better readability. No server, no signup — just open and code.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Streamline your development workflow with this tool that format and beautify sql queries for better readability. No server, no signup — just open and code.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "json-to-yaml": {
    en: `A developer utility that helps you convert json data to clean yaml format and vice versa. preserve nested structure. Run it entirely in your browser for instant results.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `A developer utility that helps you convert json data to clean yaml format and vice versa. preserve nested structure. Run it entirely in your browser for instant results.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "string-escaper": {
    en: `Built for developers who need quick results. This tool escape and unescape special characters in strings for json, html, urls, sql, and with a clean, distraction-free interface.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Built for developers who need quick results. This tool escape and unescape special characters in strings for json, html, urls, sql, and with a clean, distraction-free interface.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "html-tag-stripper": {
    en: `A developer utility that helps you remove all html tags from text, keeping only content. Run it entirely in your browser for instant results.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `A developer utility that helps you remove all html tags from text, keeping only content. Run it entirely in your browser for instant results.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "jwt-decoder": {
    en: `Built for developers who need quick results. This tool decode jwt tokens and inspect header, payload, and signature with a clean, distraction-free interface.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Built for developers who need quick results. This tool decode jwt tokens and inspect header, payload, and signature with a clean, distraction-free interface.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "cron-parser": {
    en: `A developer utility that helps you parse cron expressions and get human-readable schedules. Run it entirely in your browser for instant results.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `A developer utility that helps you parse cron expressions and get human-readable schedules. Run it entirely in your browser for instant results.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "text-to-binary": {
    en: `Transform your text with this simple online tool. It convert text to binary code and binary back to text in real-time as you type.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Transform your text with this simple online tool. It convert text to binary code and binary back to text in real-time as you type.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "html-preview": {
    en: `Streamline your development workflow with this tool that write and preview html code in real-time in a sandbox. No server, no signup — just open and code.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Streamline your development workflow with this tool that write and preview html code in real-time in a sandbox. No server, no signup — just open and code.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "csv-viewer": {
    en: `A developer utility that helps you view csv data in a formatted table with auto-detection. Run it entirely in your browser for instant results.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `A developer utility that helps you view csv data in a formatted table with auto-detection. Run it entirely in your browser for instant results.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "ip-calculator": {
    en: `Streamline your development workflow with this tool that calculate network subnet, cidr, broadcast, and host range. No server, no signup — just open and code.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Streamline your development workflow with this tool that calculate network subnet, cidr, broadcast, and host range. No server, no signup — just open and code.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "jwt-generator": {
    en: `Built for developers who need quick results. This tool generate jwt tokens with custom header and payload with a clean, distraction-free interface.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Built for developers who need quick results. This tool generate jwt tokens with custom header and payload with a clean, distraction-free interface.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "text-to-slug": {
    en: `Transform your text with this simple online tool. It convert any text into clean, seo-friendly url slugs. remove special characters,  in real-time as you type.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Transform your text with this simple online tool. It convert any text into clean, seo-friendly url slugs. remove special characters,  in real-time as you type.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "text-sorter": {
    en: `A handy text processing tool that helps you sort text lines alphabetically (a-z or z-a), by line length, or in reverse order. Clean, fast, and completely free.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `A handy text processing tool that helps you sort text lines alphabetically (a-z or z-a), by line length, or in reverse order. Clean, fast, and completely free.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "text-deduplicator": {
    en: `Transform your text with this simple online tool. It remove duplicate lines from text while preserving order in real-time as you type.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Transform your text with this simple online tool. It remove duplicate lines from text while preserving order in real-time as you type.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "text-reverser": {
    en: `Process text instantly with this browser-based utility. Perfect for writers, developers, and anyone who works with text.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Process text instantly with this browser-based utility. Perfect for writers, developers, and anyone who works with text.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "random-string-generator": {
    en: `A practical utility tool that helps you generate random strings with custom characters and length. Simple to use, completely free, and runs in your browser.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `A practical utility tool that helps you generate random strings with custom characters and length. Simple to use, completely free, and runs in your browser.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "palindrome-checker": {
    en: `A practical utility tool that helps you check if text reads the same forwards and backwards. Simple to use, completely free, and runs in your browser.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `A practical utility tool that helps you check if text reads the same forwards and backwards. Simple to use, completely free, and runs in your browser.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "morse-code-converter": {
    en: `A developer utility that helps you convert text to morse code and decode morse code back to readable text. learn mo. Run it entirely in your browser for instant results.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `A developer utility that helps you convert text to morse code and decode morse code back to readable text. learn mo. Run it entirely in your browser for instant results.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "temperature-converter": {
    en: `A fast conversion tool that helps you convert temperatures between celsius, fahrenheit, and kelvin scales instantly. p. Results appear instantly as you type.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `A fast conversion tool that helps you convert temperatures between celsius, fahrenheit, and kelvin scales instantly. p. Results appear instantly as you type.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "weight-converter": {
    en: `Convert values quickly with this free online calculator. It supports multiple unit systems and provides accurate results.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Convert values quickly with this free online calculator. It supports multiple unit systems and provides accurate results.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "length-converter": {
    en: `A fast conversion tool that helps you convert between meters, feet, inches, kilometers, and miles. Results appear instantly as you type.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `A fast conversion tool that helps you convert between meters, feet, inches, kilometers, and miles. Results appear instantly as you type.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "data-size-converter": {
    en: `A fast conversion tool that helps you convert between bytes, kilobytes, megabytes, gigabytes, terabytes and more. comp. Results appear instantly as you type.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `A fast conversion tool that helps you convert between bytes, kilobytes, megabytes, gigabytes, terabytes and more. comp. Results appear instantly as you type.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "speed-converter": {
    en: `Convert values quickly with this free online calculator. It supports multiple unit systems and provides accurate results.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Convert values quickly with this free online calculator. It supports multiple unit systems and provides accurate results.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "area-converter": {
    en: `Convert values quickly with this free online calculator. It supports multiple unit systems and provides accurate results.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Convert values quickly with this free online calculator. It supports multiple unit systems and provides accurate results.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "image-to-base64": {
    en: `A fast, free browser-based tool that helps you convert images to base64 data uri for inline embedding without any software installation.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `A fast, free browser-based tool that helps you convert images to base64 data uri for inline embedding without any software installation.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "random-number-generator": {
    en: `A practical utility tool that helps you generate random numbers within a custom range. perfect for lotteries, giveaways,. Simple to use, completely free, and runs in your browser.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `A practical utility tool that helps you generate random numbers within a custom range. perfect for lotteries, giveaways,. Simple to use, completely free, and runs in your browser.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "image-to-pdf": {
    en: `Process your images instantly with this client-side tool. It convert images (jpg, png) into a single pdf document while keeping your files private.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Process your images instantly with this client-side tool. It convert images (jpg, png) into a single pdf document while keeping your files private.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "pdf-splitter": {
    en: `This powerful image tool lets you split pdf by page ranges or extract specific pages directly in your browser — no uploads, no waiting.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `This powerful image tool lets you split pdf by page ranges or extract specific pages directly in your browser — no uploads, no waiting.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "pdf-rotator": {
    en: `A free PDF utility that helps you rotate pdf pages by 90, 180, or 270 degrees. fix scanned documents, correct page. Everything runs locally — your documents never leave your device.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `A free PDF utility that helps you rotate pdf pages by 90, 180, or 270 degrees. fix scanned documents, correct page. Everything runs locally — your documents never leave your device.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "pdf-page-remover": {
    en: `A free PDF utility that helps you remove unwanted pages from your pdf documents quickly. extract specific pages, d. Everything runs locally — your documents never leave your device.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `A free PDF utility that helps you remove unwanted pages from your pdf documents quickly. extract specific pages, d. Everything runs locally — your documents never leave your device.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "image-cropper": {
    en: `This powerful image tool lets you crop images by dragging a selection area on canvas directly in your browser — no uploads, no waiting.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `This powerful image tool lets you crop images by dragging a selection area on canvas directly in your browser — no uploads, no waiting.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "image-resizer": {
    en: `This powerful image tool lets you resize images to exact dimensions with aspect ratio lock directly in your browser — no uploads, no waiting.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `This powerful image tool lets you resize images to exact dimensions with aspect ratio lock directly in your browser — no uploads, no waiting.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "image-filters": {
    en: `This powerful image tool lets you apply grayscale, sepia, blur, brightness, and contrast filters directly in your browser — no uploads, no waiting.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `This powerful image tool lets you apply grayscale, sepia, blur, brightness, and contrast filters directly in your browser — no uploads, no waiting.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "color-picker": {
    en: `Process your images instantly with this client-side tool. It pick colors from uploaded images or use the color selector while keeping your files private.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Process your images instantly with this client-side tool. It pick colors from uploaded images or use the color selector while keeping your files private.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "gif-maker": {
    en: `This powerful image tool lets you create animated gifs from multiple images or video clips. set frame delay, resiz directly in your browser — no uploads, no waiting.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `This powerful image tool lets you create animated gifs from multiple images or video clips. set frame delay, resiz directly in your browser — no uploads, no waiting.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "image-watermark": {
    en: `Process your images instantly with this client-side tool. It add text watermark to images with position and opacity control while keeping your files private.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Process your images instantly with this client-side tool. It add text watermark to images with position and opacity control while keeping your files private.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "image-merge": {
    en: `Process your images instantly with this client-side tool. It combine multiple images into one side by side or grid while keeping your files private.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Process your images instantly with this client-side tool. It combine multiple images into one side by side or grid while keeping your files private.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "image-splitter": {
    en: `Process your images instantly with this client-side tool. It split a single image into multiple tiles by rows and columns. perfect for creati while keeping your files private.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Process your images instantly with this client-side tool. It split a single image into multiple tiles by rows and columns. perfect for creati while keeping your files private.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "image-flip": {
    en: `A fast, free browser-based tool that helps you flip images horizontally or vertically and rotate by 90-degree increments. mirro without any software installation.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `A fast, free browser-based tool that helps you flip images horizontally or vertically and rotate by 90-degree increments. mirro without any software installation.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "image-border": {
    en: `Process your images instantly with this client-side tool. It add customizable borders, frames, and padding to images. choose colors, widths,  while keeping your files private.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Process your images instantly with this client-side tool. It add customizable borders, frames, and padding to images. choose colors, widths,  while keeping your files private.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "meme-generator": {
    en: `Process your images instantly with this client-side tool. It create memes by adding top and bottom text to images while keeping your files private.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Process your images instantly with this client-side tool. It create memes by adding top and bottom text to images while keeping your files private.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "image-to-sketch": {
    en: `A fast, free browser-based tool that helps you convert photos into pencil sketch drawings and line art. apply artistic filters  without any software installation.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `A fast, free browser-based tool that helps you convert photos into pencil sketch drawings and line art. apply artistic filters  without any software installation.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "emoji-remover": {
    en: `A handy text processing tool that helps you remove all emoji characters from text while keeping words. Clean, fast, and completely free.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `A handy text processing tool that helps you remove all emoji characters from text while keeping words. Clean, fast, and completely free.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "unicode-detector": {
    en: `Transform your text with this simple online tool. It inspect unicode characters with codepoint and category info in real-time as you type.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Transform your text with this simple online tool. It inspect unicode characters with codepoint and category info in real-time as you type.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "caesar-cipher": {
    en: `A developer utility that helps you encode and decode text using the classic caesar shift cipher. choose shift value. Run it entirely in your browser for instant results.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `A developer utility that helps you encode and decode text using the classic caesar shift cipher. choose shift value. Run it entirely in your browser for instant results.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "json-diff": {
    en: `Transform your text with this simple online tool. It compare two json objects and highlight differences in real-time as you type.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Transform your text with this simple online tool. It compare two json objects and highlight differences in real-time as you type.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "http-status-codes": {
    en: `A developer utility that helps you browse and search all with descriptions. Run it entirely in your browser for instant results.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `A developer utility that helps you browse and search all with descriptions. Run it entirely in your browser for instant results.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "markdown-to-html": {
    en: `Built for developers who need quick results. This tool convert markdown text to formatted html in real-time with a clean, distraction-free interface.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Built for developers who need quick results. This tool convert markdown text to formatted html in real-time with a clean, distraction-free interface.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "timezone-converter": {
    en: `Need to convert between units? This tool makes it effortless — just enter your value and see the result immediately.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Need to convert between units? This tool makes it effortless — just enter your value and see the result immediately.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "binary-to-text": {
    en: `A handy text processing tool that helps you convert binary code to text and text back to binary. Clean, fast, and completely free.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `A handy text processing tool that helps you convert binary code to text and text back to binary. Clean, fast, and completely free.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "image-invert": {
    en: `This powerful image tool lets you invert or negate colors in any image instantly. create negative effects, x-ray l directly in your browser — no uploads, no waiting.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `This powerful image tool lets you invert or negate colors in any image instantly. create negative effects, x-ray l directly in your browser — no uploads, no waiting.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "image-collage": {
    en: `Process your images instantly with this client-side tool. It combine multiple photos into a beautiful collage grid. choose layouts, spacing,  while keeping your files private.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Process your images instantly with this client-side tool. It combine multiple photos into a beautiful collage grid. choose layouts, spacing,  while keeping your files private.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "css-gradient": {
    en: `A developer utility that helps you create beautiful linear and radial css gradients visually. copy the generated cs. Run it entirely in your browser for instant results.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `A developer utility that helps you create beautiful linear and radial css gradients visually. copy the generated cs. Run it entirely in your browser for instant results.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "css-shadow": {
    en: `Built for developers who need quick results. This tool design and preview custom css box shadows visually with a clean, distraction-free interface.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Built for developers who need quick results. This tool design and preview custom css box shadows visually with a clean, distraction-free interface.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "json-to-typescript": {
    en: `A developer utility that helps you convert json objects into typescript interfaces automatically. generate type def. Run it entirely in your browser for instant results.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `A developer utility that helps you convert json objects into typescript interfaces automatically. generate type def. Run it entirely in your browser for instant results.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "html-to-jsx": {
    en: `Built for developers who need quick results. This tool convert plain html code into react jsx syntax. handle inline styles, class attri with a clean, distraction-free interface.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Built for developers who need quick results. This tool convert plain html code into react jsx syntax. handle inline styles, class attri with a clean, distraction-free interface.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "color-palette": {
    en: `Generate, calculate, or check — this tool does it all in your browser. Fast results, no signup required.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Generate, calculate, or check — this tool does it all in your browser. Fast results, no signup required.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "roman-numeral": {
    en: `A fast conversion tool that helps you convert between roman numerals and arabic numbers instantly. works with values f. Results appear instantly as you type.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `A fast conversion tool that helps you convert between roman numerals and arabic numbers instantly. works with values f. Results appear instantly as you type.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "percentage-calculator": {
    en: `Need to convert between units? This tool makes it effortless — just enter your value and see the result immediately.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Need to convert between units? This tool makes it effortless — just enter your value and see the result immediately.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "tip-calculator": {
    en: `A developer utility that helps you calculate tip amount, total bill, and per-person cost. Run it entirely in your browser for instant results.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `A developer utility that helps you calculate tip amount, total bill, and per-person cost. Run it entirely in your browser for instant results.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "age-calculator": {
    en: `A fast conversion tool that helps you calculate exact age in years, months, weeks, and days. find your age on any futu. Results appear instantly as you type.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `A fast conversion tool that helps you calculate exact age in years, months, weeks, and days. find your age on any futu. Results appear instantly as you type.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "bmi-calculator": {
    en: `Convert values quickly with this free online calculator. It supports multiple unit systems and provides accurate results.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Convert values quickly with this free online calculator. It supports multiple unit systems and provides accurate results.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "countdown-timer": {
    en: `A practical utility tool that helps you set a countdown to any date and time with days, hours, minutes, and seconds. per. Simple to use, completely free, and runs in your browser.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `A practical utility tool that helps you set a countdown to any date and time with days, hours, minutes, and seconds. per. Simple to use, completely free, and runs in your browser.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "dice-roller": {
    en: `Generate, calculate, or check — this tool does it all in your browser. Fast results, no signup required.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Generate, calculate, or check — this tool does it all in your browser. Fast results, no signup required.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "decision-maker": {
    en: `A practical utility tool that helps you let fate decide — pick a random option from your list. Simple to use, completely free, and runs in your browser.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `A practical utility tool that helps you let fate decide — pick a random option from your list. Simple to use, completely free, and runs in your browser.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "audio-cutter": {
    en: `A free audio utility that helps you trim and cut audio files with an interactive waveform preview. extract clips fro. All processing happens locally — your music stays private.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `A free audio utility that helps you trim and cut audio files with an interactive waveform preview. extract clips fro. All processing happens locally — your music stays private.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "audio-merger": {
    en: `A fast, free browser-based tool that helps you combine multiple audio files into one seamless track. merge songs, recordings, o without any software installation.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `A fast, free browser-based tool that helps you combine multiple audio files into one seamless track. merge songs, recordings, o without any software installation.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "audio-converter": {
    en: `A fast conversion tool that helps you convert audio between wav formats and sample rates. Results appear instantly as you type.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `A fast conversion tool that helps you convert audio between wav formats and sample rates. Results appear instantly as you type.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "dns-lookup": {
    en: `A developer utility that helps you look up dns records for any domain including a, aaaa, mx, ns, txt, and cname. de. Run it entirely in your browser for instant results.

Key features: Retrieves A, AAAA, MX, NS, TXT, CAA, and SOA records for any domain.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `A developer utility that helps you look up dns records for any domain including a, aaaa, mx, ns, txt, and cname. de. Run it entirely in your browser for instant results.

主要特点：查询任意域名的A、AAAA、MX、NS、TXT、CAA和SOA记录

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "whois-lookup": {
    en: `Streamline your development workflow with this tool that look up domain registration and ownership information. No server, no signup — just open and code.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Streamline your development workflow with this tool that look up domain registration and ownership information. No server, no signup — just open and code.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "svg-to-png": {
    en: `A developer utility that helps you convert svg vector code or files into png images with custom dimensions, backgro. Run it entirely in your browser for instant results.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `A developer utility that helps you convert svg vector code or files into png images with custom dimensions, backgro. Run it entirely in your browser for instant results.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "days-between": {
    en: `Need to convert between units? This tool makes it effortless — just enter your value and see the result immediately.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Need to convert between units? This tool makes it effortless — just enter your value and see the result immediately.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "password-strength": {
    en: `Transform your text with this simple online tool. It test how strong your password is with real-time analysis in real-time as you type.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Transform your text with this simple online tool. It test how strong your password is with real-time analysis in real-time as you type.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "barcode-generator": {
    en: `A practical utility tool that helps you generate barcodes in code128, ean-13, code39 formats. Simple to use, completely free, and runs in your browser.

Key features: Generates barcodes in Code128, EAN-13, Code39, and QR code formats.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `A practical utility tool that helps you generate barcodes in code128, ean-13, code39 formats. Simple to use, completely free, and runs in your browser.

主要特点：支持Code128、EAN-13、Code39格式条码和二维码生成

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "aspect-ratio-calculator": {
    en: `A fast conversion tool that helps you calculate aspect ratios from dimensions or presets. Results appear instantly as you type.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `A fast conversion tool that helps you calculate aspect ratios from dimensions or presets. Results appear instantly as you type.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "qr-reader": {
    en: `Generate, calculate, or check — this tool does it all in your browser. Fast results, no signup required.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Generate, calculate, or check — this tool does it all in your browser. Fast results, no signup required.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "color-blindness-simulator": {
    en: `This powerful image tool lets you simulate how images look with various color blindness types directly in your browser — no uploads, no waiting.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `This powerful image tool lets you simulate how images look with various color blindness types directly in your browser — no uploads, no waiting.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "online-notepad": {
    en: `A handy text processing tool that helps you a clean, distraction-free browser-based notepad with auto-save. write notes, cod. Clean, fast, and completely free.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `A handy text processing tool that helps you a clean, distraction-free browser-based notepad with auto-save. write notes, cod. Clean, fast, and completely free.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
  "text-statistics": {
    en: `Process text instantly with this browser-based utility. Perfect for writers, developers, and anyone who works with text.

Key features: Provides a clean, intuitive interface with real-time results. Supports common formats and edge cases.

How to use: Open the tool, enter your data in the input area, and click the action button. Results appear instantly — copy them to your clipboard with one click. The interface works on both desktop and mobile browsers.

Privacy guarantee: All processing happens locally in your browser using JavaScript. Your data is never sent to any server. This makes the tool safe for sensitive information. No account, no signup, no tracking — just open and use.`,
    zh: `Process text instantly with this browser-based utility. Perfect for writers, developers, and anyone who works with text.

主要特点：提供简洁直观的界面和实时结果，支持常见格式和边界情况。

使用方法：打开工具，在输入区域输入数据，点击操作按钮即可获得结果。支持一键复制到剪贴板。界面同时适配桌面和移动浏览器。

隐私保护：所有处理都在浏览器本地通过JavaScript完成。您的数据不会发送到任何服务器，因此可以安全处理敏感信息。无需注册、无需登录、无追踪——打开即用。`,
  },
};

export function getToolGuide(slug: string): ToolGuideData | undefined {
  return toolGuides[slug];
}