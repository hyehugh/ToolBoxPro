/**
 * Tool usage guides — detailed 250-350 word descriptions for each tool.
 * Renders on tool pages for SEO content quality and user guidance.
 * All processing is 100% client-side — no data leaves the browser.
 */

export type ToolGuideData = { en: string; zh: string };

export const toolGuides: Record<string, ToolGuideData> = {
  "json-formatter": {
    en: `A developer-focused online tool that format, validate, and beautify JSON data with syntax error detection and tree view. Built for speed and accuracy, it processes your input instantly without any server uploads.

Developers often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

Key features include real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

Simply paste or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

All processing happens locally in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
    zh: `JSON Formatter & Validator 是一款免费在线工具，格式化、验证和美化 JSON 数据，支持语法错误检测和树状视图。

开发者 often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

主要特点包括 real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

只需粘贴 or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

所有处理都在浏览器本地完成 in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
  },
  "base64-encode-decode": {
    en: `A developer-focused online tool that encode text, images, and binary files to Base64 and decode them back. Built for speed and accuracy, it processes your input instantly without any server uploads.

Developers often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

Key features include real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

Simply paste or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

All processing happens locally in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
    zh: `Base64 Encoder/Decoder 是一款免费在线工具，将文本、图片和二进制文件编码为 Base64 并解码还原。

开发者 often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

主要特点包括 real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

只需粘贴 or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

所有处理都在浏览器本地完成 in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
  },
  "regex-tester": {
    en: `A developer-focused online tool that test regular expressions against sample text with real-time match highlighting. Built for speed and accuracy, it processes your input instantly without any server uploads.

Developers often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

Key features include real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

Simply paste or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

All processing happens locally in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
    zh: `Regex Tester 是一款免费在线工具，对示例文本测试正则表达式，实时高亮显示匹配结果。

开发者 often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

主要特点包括 real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

只需粘贴 or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

所有处理都在浏览器本地完成 in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
  },
  "color-converter": {
    en: `A free online conversion calculator that convert colors between HEX, RGB, HSL, CMYK, and HSV with a visual picker. Get accurate results instantly without any software installation.

Unit conversions are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

Key features include support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

Enter your value in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

All calculations happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
    zh: `Color Converter 是一款免费在线工具，在 HEX、RGB、HSL、CMYK 和 HSV 颜色格式之间转换，带可视化选择器。

单位换算 are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

主要特点包括 support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

输入您的数值 in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

所有计算 happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
  },
  "url-encoder-decoder": {
    en: `A developer-focused online tool that encode and decode url components, query strings, and full urls. fix broken links and prepare urls for api requests safely. Built for speed and accuracy, it processes your input instantly without any server uploads.

Developers often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

Key features include real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

Simply paste or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

All processing happens locally in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
    zh: `URL Encoder/Decoder 是一款免费在线工具，Encode and decode URL components, query strings, and full URLs. Fix broken links and prepare URLs for API requests safely.。

开发者 often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

主要特点包括 real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

只需粘贴 or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

所有处理都在浏览器本地完成 in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
  },
  "uuid-generator": {
    en: `A developer-focused online tool that generate random uuid v4 identifiers instantly. bulk generate unique ids for databases, apis, distributed systems, and test data. Built for speed and accuracy, it processes your input instantly without any server uploads.

Developers often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

Key features include real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

Simply paste or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

All processing happens locally in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
    zh: `UUID Generator 是一款免费在线工具，Generate random UUID v4 identifiers instantly. Bulk generate unique IDs for databases, APIs, distributed systems, and test data.。

开发者 often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

主要特点包括 real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

只需粘贴 or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

所有处理都在浏览器本地完成 in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
  },
  "password-generator": {
    en: `A free online text processing tool that create cryptographically secure random passwords using the Web Crypto API. Transform, analyze, and manipulate text instantly in your browser.

Writers, developers, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

Key features include real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

All text processing happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
    zh: `Password Generator 是一款免费在线工具，使用 Web Crypto API 生成密码学安全的随机密码。

写作者、开发者, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

主要特点包括 real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

所有文本处理 happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
  },
  "hash-generator": {
    en: `A developer-focused online tool that generate sha-256, sha-384, sha-512 hashes for any text or file. compare checksums and verify data integrity with multiple hash algorithms. Built for speed and accuracy, it processes your input instantly without any server uploads.

Developers often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

Key features include real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

Simply paste or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

All processing happens locally in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
    zh: `Hash Generator 是一款免费在线工具，Generate SHA-256, SHA-384, SHA-512 hashes for any text or file. Compare checksums and verify data integrity with multiple hash algorithms.。

开发者 often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

主要特点包括 real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

只需粘贴 or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

所有处理都在浏览器本地完成 in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
  },
  "timestamp-converter": {
    en: `A developer-focused online tool that convert between unix timestamps and human-readable dates. Built for speed and accuracy, it processes your input instantly without any server uploads.

Developers often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

Key features include real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

Simply paste or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

All processing happens locally in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
    zh: `Timestamp Converter 是一款免费在线工具，Convert between Unix timestamps and human-readable dates。

开发者 often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

主要特点包括 real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

只需粘贴 or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

所有处理都在浏览器本地完成 in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
  },
  "number-base-converter": {
    en: `A developer-focused online tool that convert between binary, octal, decimal, and hexadecimal. Built for speed and accuracy, it processes your input instantly without any server uploads.

Developers often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

Key features include real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

Simply paste or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

All processing happens locally in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
    zh: `Number Base Converter 是一款免费在线工具，Convert between binary, octal, decimal, and hexadecimal。

开发者 often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

主要特点包括 real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

只需粘贴 or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

所有处理都在浏览器本地完成 in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
  },
  "image-compressor": {
    en: `A free browser-based image tool that reduce image file size by 50-80% while maintaining visual quality for JPEG, PNG, and WebP. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `Image Compressor 是一款免费在线工具，在保持视觉质量的同时将图片文件大小减小 50-80%，支持 JPEG、PNG 和 WebP。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "image-converter": {
    en: `A free browser-based image tool that convert images between jpg, png, webp, avif, gif, and bmp formats. batch convert with custom quality and dimension settings. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `Image Format Converter 是一款免费在线工具，Convert images between JPG, PNG, WebP, AVIF, GIF, and BMP formats. Batch convert with custom quality and dimension settings.。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "pdf-merger": {
    en: `A free browser-based image tool that combine multiple PDF files into a single document with page reordering. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `PDF Merger 是一款免费在线工具，将多个 PDF 文件合并为一个文档，支持页面重新排序。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "word-counter": {
    en: `A free online text processing tool that count words, characters, sentences, paragraphs, and estimate reading time. Transform, analyze, and manipulate text instantly in your browser.

Writers, developers, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

Key features include real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

All text processing happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
    zh: `Word & Character Counter 是一款免费在线工具，统计字数、字符数、句子数、段落数并估算阅读时间。

写作者、开发者, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

主要特点包括 real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

所有文本处理 happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
  },
  "case-converter": {
    en: `A free online text processing tool that convert text between upper, lower, title, camelcase and more. Transform, analyze, and manipulate text instantly in your browser.

Writers, developers, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

Key features include real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

All text processing happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
    zh: `Text Case Converter 是一款免费在线工具，Convert text between UPPER, lower, Title, camelCase and more。

写作者、开发者, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

主要特点包括 real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

所有文本处理 happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
  },
  "lorem-ipsum-generator": {
    en: `A free online text processing tool that generate placeholder text for design mockups, website wireframes, and print layouts. customize paragraph count, word length, and format. Transform, analyze, and manipulate text instantly in your browser.

Writers, developers, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

Key features include real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

All text processing happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
    zh: `Lorem Ipsum Generator 是一款免费在线工具，Generate placeholder text for design mockups, website wireframes, and print layouts. Customize paragraph count, word length, and format.。

写作者、开发者, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

主要特点包括 real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

所有文本处理 happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
  },
  "text-diff-checker": {
    en: `A free online text processing tool that compare two blocks of text side by side and highlight every difference. perfect for code reviews, document revisions, and plagiarism checks. Transform, analyze, and manipulate text instantly in your browser.

Writers, developers, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

Key features include real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

All text processing happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
    zh: `Text Diff Checker 是一款免费在线工具，Compare two blocks of text side by side and highlight every difference. Perfect for code reviews, document revisions, and plagiarism checks.。

写作者、开发者, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

主要特点包括 real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

所有文本处理 happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
  },
  "text-repeater": {
    en: `A free online text processing tool that repeat any text multiple times with custom separators, line breaks, or prefixes. generate test data, patterns, and repeated strings instantly. Transform, analyze, and manipulate text instantly in your browser.

Writers, developers, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

Key features include real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

All text processing happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
    zh: `Text Repeater 是一款免费在线工具，Repeat any text multiple times with custom separators, line breaks, or prefixes. Generate test data, patterns, and repeated strings instantly.。

写作者、开发者, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

主要特点包括 real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

所有文本处理 happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
  },
  "html-entity-converter": {
    en: `A developer-focused online tool that encode and decode html entities like &amp; and &lt;. Built for speed and accuracy, it processes your input instantly without any server uploads.

Developers often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

Key features include real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

Simply paste or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

All processing happens locally in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
    zh: `HTML Entity Converter 是一款免费在线工具，Encode and decode HTML entities like &amp; and &lt;。

开发者 often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

主要特点包括 real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

只需粘贴 or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

所有处理都在浏览器本地完成 in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
  },
  "css-minifier": {
    en: `A developer-focused online tool that minify and compress css code to reduce file size and improve page load speed. remove whitespace, comments, and redundant rules safely. Built for speed and accuracy, it processes your input instantly without any server uploads.

Developers often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

Key features include real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

Simply paste or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

All processing happens locally in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
    zh: `CSS Minifier 是一款免费在线工具，Minify and compress CSS code to reduce file size and improve page load speed. Remove whitespace, comments, and redundant rules safely.。

开发者 often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

主要特点包括 real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

只需粘贴 or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

所有处理都在浏览器本地完成 in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
  },
  "sql-formatter": {
    en: `A developer-focused online tool that format and beautify sql queries for better readability. Built for speed and accuracy, it processes your input instantly without any server uploads.

Developers often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

Key features include real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

Simply paste or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

All processing happens locally in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
    zh: `SQL Formatter 是一款免费在线工具，Format and beautify SQL queries for better readability。

开发者 often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

主要特点包括 real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

只需粘贴 or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

所有处理都在浏览器本地完成 in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
  },
  "json-to-yaml": {
    en: `A developer-focused online tool that convert json data to clean yaml format and vice versa. preserve nested structures, arrays, and data types during conversion. Built for speed and accuracy, it processes your input instantly without any server uploads.

Developers often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

Key features include real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

Simply paste or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

All processing happens locally in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
    zh: `JSON to YAML Converter 是一款免费在线工具，Convert JSON data to clean YAML format and vice versa. Preserve nested structures, arrays, and data types during conversion.。

开发者 often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

主要特点包括 real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

只需粘贴 or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

所有处理都在浏览器本地完成 in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
  },
  "string-escaper": {
    en: `A developer-focused online tool that escape and unescape special characters in strings for json, html, urls, sql, and javascript. handle all common escaping formats. Built for speed and accuracy, it processes your input instantly without any server uploads.

Developers often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

Key features include real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

Simply paste or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

All processing happens locally in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
    zh: `String Escaper/Unescaper 是一款免费在线工具，Escape and unescape special characters in strings for JSON, HTML, URLs, SQL, and JavaScript. Handle all common escaping formats.。

开发者 often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

主要特点包括 real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

只需粘贴 or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

所有处理都在浏览器本地完成 in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
  },
  "html-tag-stripper": {
    en: `A developer-focused online tool that remove all html tags from text, keeping only content. Built for speed and accuracy, it processes your input instantly without any server uploads.

Developers often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

Key features include real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

Simply paste or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

All processing happens locally in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
    zh: `HTML Tag Stripper 是一款免费在线工具，Remove all HTML tags from text, keeping only content。

开发者 often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

主要特点包括 real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

只需粘贴 or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

所有处理都在浏览器本地完成 in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
  },
  "jwt-decoder": {
    en: `A developer-focused online tool that decode jwt tokens and inspect header, payload, and signature. Built for speed and accuracy, it processes your input instantly without any server uploads.

Developers often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

Key features include real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

Simply paste or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

All processing happens locally in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
    zh: `JWT Decoder 是一款免费在线工具，Decode JWT tokens and inspect header, payload, and signature。

开发者 often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

主要特点包括 real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

只需粘贴 or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

所有处理都在浏览器本地完成 in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
  },
  "cron-parser": {
    en: `A developer-focused online tool that parse cron expressions and get human-readable schedules. Built for speed and accuracy, it processes your input instantly without any server uploads.

Developers often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

Key features include real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

Simply paste or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

All processing happens locally in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
    zh: `Cron Expression Parser 是一款免费在线工具，Parse cron expressions and get human-readable schedules。

开发者 often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

主要特点包括 real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

只需粘贴 or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

所有处理都在浏览器本地完成 in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
  },
  "text-to-binary": {
    en: `A free online text processing tool that convert text to binary code and binary back to text. Transform, analyze, and manipulate text instantly in your browser.

Writers, developers, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

Key features include real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

All text processing happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
    zh: `Text to Binary Converter 是一款免费在线工具，Convert text to binary code and binary back to text。

写作者、开发者, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

主要特点包括 real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

所有文本处理 happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
  },
  "html-preview": {
    en: `A developer-focused online tool that write and preview html code in real-time in a sandbox. Built for speed and accuracy, it processes your input instantly without any server uploads.

Developers often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

Key features include real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

Simply paste or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

All processing happens locally in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
    zh: `HTML Preview 是一款免费在线工具，Write and preview HTML code in real-time in a sandbox。

开发者 often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

主要特点包括 real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

只需粘贴 or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

所有处理都在浏览器本地完成 in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
  },
  "csv-viewer": {
    en: `A developer-focused online tool that view csv data in a formatted table with auto-detection. Built for speed and accuracy, it processes your input instantly without any server uploads.

Developers often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

Key features include real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

Simply paste or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

All processing happens locally in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
    zh: `CSV Viewer & Formatter 是一款免费在线工具，View CSV data in a formatted table with auto-detection。

开发者 often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

主要特点包括 real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

只需粘贴 or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

所有处理都在浏览器本地完成 in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
  },
  "ip-calculator": {
    en: `A developer-focused online tool that calculate network subnet, cidr, broadcast, and host range. Built for speed and accuracy, it processes your input instantly without any server uploads.

Developers often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

Key features include real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

Simply paste or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

All processing happens locally in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
    zh: `IP Subnet Calculator 是一款免费在线工具，Calculate network subnet, CIDR, broadcast, and host range。

开发者 often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

主要特点包括 real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

只需粘贴 or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

所有处理都在浏览器本地完成 in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
  },
  "jwt-generator": {
    en: `A developer-focused online tool that generate jwt tokens with custom header and payload. Built for speed and accuracy, it processes your input instantly without any server uploads.

Developers often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

Key features include real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

Simply paste or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

All processing happens locally in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
    zh: `JWT Generator 是一款免费在线工具，Generate JWT tokens with custom header and payload。

开发者 often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

主要特点包括 real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

只需粘贴 or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

所有处理都在浏览器本地完成 in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
  },
  "text-to-slug": {
    en: `A free online text processing tool that convert any text into clean, seo-friendly url slugs. remove special characters, normalize spaces, and generate optimized permalinks. Transform, analyze, and manipulate text instantly in your browser.

Writers, developers, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

Key features include real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

All text processing happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
    zh: `Text to URL Slug 是一款免费在线工具，Convert any text into clean, SEO-friendly URL slugs. Remove special characters, normalize spaces, and generate optimized permalinks.。

写作者、开发者, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

主要特点包括 real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

所有文本处理 happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
  },
  "text-sorter": {
    en: `A free online text processing tool that sort text lines alphabetically (a-z or z-a), by line length, or in reverse order. remove duplicates and organize lists instantly. Transform, analyze, and manipulate text instantly in your browser.

Writers, developers, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

Key features include real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

All text processing happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
    zh: `Text Sorter 是一款免费在线工具，Sort text lines alphabetically (A-Z or Z-A), by line length, or in reverse order. Remove duplicates and organize lists instantly.。

写作者、开发者, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

主要特点包括 real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

所有文本处理 happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
  },
  "text-deduplicator": {
    en: `A free online text processing tool that remove duplicate lines from text while preserving order. Transform, analyze, and manipulate text instantly in your browser.

Writers, developers, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

Key features include real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

All text processing happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
    zh: `Line Deduplicator 是一款免费在线工具，Remove duplicate lines from text while preserving order。

写作者、开发者, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

主要特点包括 real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

所有文本处理 happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
  },
  "text-reverser": {
    en: `A free online text processing tool that reverse text, words, sentences, or entire lines instantly. useful for creating mirrored text, solving puzzles, or formatting data. Transform, analyze, and manipulate text instantly in your browser.

Writers, developers, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

Key features include real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

All text processing happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
    zh: `Text Reverser 是一款免费在线工具，Reverse text, words, sentences, or entire lines instantly. Useful for creating mirrored text, solving puzzles, or formatting data.。

写作者、开发者, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

主要特点包括 real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

所有文本处理 happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
  },
  "random-string-generator": {
    en: `A free online utility tool that generate random strings with custom characters and length. Simple, fast, and completely private — just open and use.

Everyday tasks like generating passwords, creating QR codes, rolling dice, or checking BMI shouldn't require installing software or creating accounts. This tool provides a quick, reliable solution that works instantly in your browser. It's perfect for one-off tasks where you need a fast result without the overhead of specialized software.

Key features include instant results with no loading time, a clean and intuitive interface that requires no learning curve, customizable options for fine-tuning results, one-click copy or download for output, and responsive design that works on any device. The tool is designed to do one thing well and do it fast.

Open the tool, configure your options if needed (such as length, format, or range), and click the action button. Results appear immediately. Copy the output to your clipboard, download it, or generate a new result with different settings. The entire workflow takes seconds.

All processing happens locally in your browser. No data is uploaded, stored, or tracked. Your inputs and results are completely private. No account required, no cookies, no analytics beyond basic page views.`,
    zh: `Random String Generator 是一款免费在线工具，Generate random strings with custom characters and length。

日常任务 like generating passwords, creating QR codes, rolling dice, or checking BMI shouldn't require installing software or creating accounts. This tool provides a quick, reliable solution that works instantly in your browser. It's perfect for one-off tasks where you need a fast result without the overhead of specialized software.

主要特点包括 instant results with no loading time, a clean and intuitive interface that requires no learning curve, customizable options for fine-tuning results, one-click copy or download for output, and responsive design that works on any device. The tool is designed to do one thing well and do it fast.

打开工具, configure your options if needed (such as length, format, or range), and click the action button. Results appear immediately. Copy the output to your clipboard, download it, or generate a new result with different settings. The entire workflow takes seconds.

所有处理都在浏览器本地完成 in your browser. No data is uploaded, stored, or tracked. Your inputs and results are completely private. No account required, no cookies, no analytics beyond basic page views.`,
  },
  "palindrome-checker": {
    en: `A free online utility tool that check if text reads the same forwards and backwards. Simple, fast, and completely private — just open and use.

Everyday tasks like generating passwords, creating QR codes, rolling dice, or checking BMI shouldn't require installing software or creating accounts. This tool provides a quick, reliable solution that works instantly in your browser. It's perfect for one-off tasks where you need a fast result without the overhead of specialized software.

Key features include instant results with no loading time, a clean and intuitive interface that requires no learning curve, customizable options for fine-tuning results, one-click copy or download for output, and responsive design that works on any device. The tool is designed to do one thing well and do it fast.

Open the tool, configure your options if needed (such as length, format, or range), and click the action button. Results appear immediately. Copy the output to your clipboard, download it, or generate a new result with different settings. The entire workflow takes seconds.

All processing happens locally in your browser. No data is uploaded, stored, or tracked. Your inputs and results are completely private. No account required, no cookies, no analytics beyond basic page views.`,
    zh: `Palindrome Checker 是一款免费在线工具，Check if text reads the same forwards and backwards。

日常任务 like generating passwords, creating QR codes, rolling dice, or checking BMI shouldn't require installing software or creating accounts. This tool provides a quick, reliable solution that works instantly in your browser. It's perfect for one-off tasks where you need a fast result without the overhead of specialized software.

主要特点包括 instant results with no loading time, a clean and intuitive interface that requires no learning curve, customizable options for fine-tuning results, one-click copy or download for output, and responsive design that works on any device. The tool is designed to do one thing well and do it fast.

打开工具, configure your options if needed (such as length, format, or range), and click the action button. Results appear immediately. Copy the output to your clipboard, download it, or generate a new result with different settings. The entire workflow takes seconds.

所有处理都在浏览器本地完成 in your browser. No data is uploaded, stored, or tracked. Your inputs and results are completely private. No account required, no cookies, no analytics beyond basic page views.`,
  },
  "morse-code-converter": {
    en: `A developer-focused online tool that convert text to morse code and decode morse code back to readable text. learn morse alphabet with visual audio playback support. Built for speed and accuracy, it processes your input instantly without any server uploads.

Developers often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

Key features include real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

Simply paste or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

All processing happens locally in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
    zh: `Morse Code Converter 是一款免费在线工具，Convert text to Morse code and decode Morse code back to readable text. Learn Morse alphabet with visual audio playback support.。

开发者 often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

主要特点包括 real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

只需粘贴 or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

所有处理都在浏览器本地完成 in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
  },
  "temperature-converter": {
    en: `A free online conversion calculator that convert temperatures between celsius, fahrenheit, and kelvin scales instantly. perfect for cooking, science, weather, and travel calculations. Get accurate results instantly without any software installation.

Unit conversions are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

Key features include support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

Enter your value in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

All calculations happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
    zh: `Temperature Converter 是一款免费在线工具，Convert temperatures between Celsius, Fahrenheit, and Kelvin scales instantly. Perfect for cooking, science, weather, and travel calculations.。

单位换算 are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

主要特点包括 support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

输入您的数值 in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

所有计算 happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
  },
  "weight-converter": {
    en: `A free online conversion calculator that convert between kilograms, pounds, ounces, and more. Get accurate results instantly without any software installation.

Unit conversions are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

Key features include support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

Enter your value in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

All calculations happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
    zh: `Weight Converter 是一款免费在线工具，Convert between kilograms, pounds, ounces, and more。

单位换算 are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

主要特点包括 support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

输入您的数值 in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

所有计算 happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
  },
  "length-converter": {
    en: `A free online conversion calculator that convert between meters, feet, inches, kilometers, and miles. Get accurate results instantly without any software installation.

Unit conversions are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

Key features include support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

Enter your value in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

All calculations happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
    zh: `Length Converter 是一款免费在线工具，Convert between meters, feet, inches, kilometers, and miles。

单位换算 are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

主要特点包括 support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

输入您的数值 in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

所有计算 happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
  },
  "data-size-converter": {
    en: `A free online conversion calculator that convert between bytes, kilobytes, megabytes, gigabytes, terabytes and more. compare file sizes, storage capacity, and data transfer amounts. Get accurate results instantly without any software installation.

Unit conversions are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

Key features include support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

Enter your value in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

All calculations happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
    zh: `Data Size Converter 是一款免费在线工具，Convert between bytes, kilobytes, megabytes, gigabytes, terabytes and more. Compare file sizes, storage capacity, and data transfer amounts.。

单位换算 are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

主要特点包括 support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

输入您的数值 in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

所有计算 happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
  },
  "speed-converter": {
    en: `A free online conversion calculator that convert speed between km/h, mph, knots, m/s, and mach. useful for driving, aviation, marine navigation, and physics calculations. Get accurate results instantly without any software installation.

Unit conversions are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

Key features include support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

Enter your value in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

All calculations happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
    zh: `Speed Converter 是一款免费在线工具，Convert speed between km/h, mph, knots, m/s, and mach. Useful for driving, aviation, marine navigation, and physics calculations.。

单位换算 are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

主要特点包括 support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

输入您的数值 in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

所有计算 happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
  },
  "area-converter": {
    en: `A free online conversion calculator that convert between square meters, acres, hectares, sq ft. Get accurate results instantly without any software installation.

Unit conversions are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

Key features include support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

Enter your value in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

All calculations happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
    zh: `Area Converter 是一款免费在线工具，Convert between square meters, acres, hectares, sq ft。

单位换算 are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

主要特点包括 support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

输入您的数值 in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

所有计算 happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
  },
  "image-to-base64": {
    en: `A free browser-based image tool that convert images to base64 data uri for inline embedding. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `Image to Base64 是一款免费在线工具，Convert images to Base64 data URI for inline embedding。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "random-number-generator": {
    en: `A free online utility tool that generate random numbers within a custom range. perfect for lotteries, giveaways, statistical sampling, and game development. Simple, fast, and completely private — just open and use.

Everyday tasks like generating passwords, creating QR codes, rolling dice, or checking BMI shouldn't require installing software or creating accounts. This tool provides a quick, reliable solution that works instantly in your browser. It's perfect for one-off tasks where you need a fast result without the overhead of specialized software.

Key features include instant results with no loading time, a clean and intuitive interface that requires no learning curve, customizable options for fine-tuning results, one-click copy or download for output, and responsive design that works on any device. The tool is designed to do one thing well and do it fast.

Open the tool, configure your options if needed (such as length, format, or range), and click the action button. Results appear immediately. Copy the output to your clipboard, download it, or generate a new result with different settings. The entire workflow takes seconds.

All processing happens locally in your browser. No data is uploaded, stored, or tracked. Your inputs and results are completely private. No account required, no cookies, no analytics beyond basic page views.`,
    zh: `Random Number Generator 是一款免费在线工具，Generate random numbers within a custom range. Perfect for lotteries, giveaways, statistical sampling, and game development.。

日常任务 like generating passwords, creating QR codes, rolling dice, or checking BMI shouldn't require installing software or creating accounts. This tool provides a quick, reliable solution that works instantly in your browser. It's perfect for one-off tasks where you need a fast result without the overhead of specialized software.

主要特点包括 instant results with no loading time, a clean and intuitive interface that requires no learning curve, customizable options for fine-tuning results, one-click copy or download for output, and responsive design that works on any device. The tool is designed to do one thing well and do it fast.

打开工具, configure your options if needed (such as length, format, or range), and click the action button. Results appear immediately. Copy the output to your clipboard, download it, or generate a new result with different settings. The entire workflow takes seconds.

所有处理都在浏览器本地完成 in your browser. No data is uploaded, stored, or tracked. Your inputs and results are completely private. No account required, no cookies, no analytics beyond basic page views.`,
  },
  "image-to-pdf": {
    en: `A free browser-based image tool that convert images (jpg, png) into a single pdf document. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `Image to PDF 是一款免费在线工具，Convert images (JPG, PNG) into a single PDF document。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "pdf-splitter": {
    en: `A free browser-based image tool that split pdf by page ranges or extract specific pages. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `PDF Splitter 是一款免费在线工具，Split PDF by page ranges or extract specific pages。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "pdf-rotator": {
    en: `A free online PDF tool that rotate pdf pages by 90, 180, or 270 degrees. fix scanned documents, correct page orientation, and rearrange your pdf layouts. Work with your PDF files directly in the browser — no uploads, no waiting, no risk.

PDF manipulation traditionally requires expensive software like Adobe Acrobat or risky online services that upload your sensitive documents. This tool lets you merge, split, rotate, or convert PDFs entirely in your browser using pdf-lib. Your financial statements, legal documents, and personal files never leave your device, giving you complete control over your privacy.

Key features include drag-and-drop file upload, visual page preview for easy selection, drag-and-drop page reordering, precise page range selection for splitting, and support for encrypted PDFs. The tool handles documents of any size (within browser memory limits) and produces clean, standards-compliant output that opens correctly in any PDF reader.

Upload your PDF files by dragging them onto the tool or using the file picker. For merging, add multiple files and arrange them in your desired order. For splitting, select the page ranges you want to extract. For rotating, choose the rotation angle. Preview the result, then click the action button to process and download the output file.

All PDF processing happens locally in your browser using pdf-lib (a pure JavaScript library). Your documents are never uploaded to any server. This is critical for sensitive documents like contracts, tax returns, medical records, and financial statements. No account required, no file storage, no risk of data exposure.`,
    zh: `PDF Rotator 是一款免费在线工具，Rotate PDF pages by 90, 180, or 270 degrees. Fix scanned documents, correct page orientation, and rearrange your PDF layouts.。

PDF 处理 traditionally requires expensive software like Adobe Acrobat or risky online services that upload your sensitive documents. This tool lets you merge, split, rotate, or convert PDFs entirely in your browser using pdf-lib. Your financial statements, legal documents, and personal files never leave your device, giving you complete control over your privacy.

主要特点包括 drag-and-drop file upload, visual page preview for easy selection, drag-and-drop page reordering, precise page range selection for splitting, and support for encrypted PDFs. The tool handles documents of any size (within browser memory limits) and produces clean, standards-compliant output that opens correctly in any PDF reader.

上传您的 PDF files by dragging them onto the tool or using the file picker. For merging, add multiple files and arrange them in your desired order. For splitting, select the page ranges you want to extract. For rotating, choose the rotation angle. Preview the result, then click the action button to process and download the output file.

所有 PDF 处理 happens locally in your browser using pdf-lib (a pure JavaScript library). Your documents are never uploaded to any server. This is critical for sensitive documents like contracts, tax returns, medical records, and financial statements. No account required, no file storage, no risk of data exposure.`,
  },
  "pdf-page-remover": {
    en: `A free online PDF tool that remove unwanted pages from your pdf documents quickly. extract specific pages, delete blank sheets, and trim bulky files. Work with your PDF files directly in the browser — no uploads, no waiting, no risk.

PDF manipulation traditionally requires expensive software like Adobe Acrobat or risky online services that upload your sensitive documents. This tool lets you merge, split, rotate, or convert PDFs entirely in your browser using pdf-lib. Your financial statements, legal documents, and personal files never leave your device, giving you complete control over your privacy.

Key features include drag-and-drop file upload, visual page preview for easy selection, drag-and-drop page reordering, precise page range selection for splitting, and support for encrypted PDFs. The tool handles documents of any size (within browser memory limits) and produces clean, standards-compliant output that opens correctly in any PDF reader.

Upload your PDF files by dragging them onto the tool or using the file picker. For merging, add multiple files and arrange them in your desired order. For splitting, select the page ranges you want to extract. For rotating, choose the rotation angle. Preview the result, then click the action button to process and download the output file.

All PDF processing happens locally in your browser using pdf-lib (a pure JavaScript library). Your documents are never uploaded to any server. This is critical for sensitive documents like contracts, tax returns, medical records, and financial statements. No account required, no file storage, no risk of data exposure.`,
    zh: `PDF Page Remover 是一款免费在线工具，Remove unwanted pages from your PDF documents quickly. Extract specific pages, delete blank sheets, and trim bulky files.。

PDF 处理 traditionally requires expensive software like Adobe Acrobat or risky online services that upload your sensitive documents. This tool lets you merge, split, rotate, or convert PDFs entirely in your browser using pdf-lib. Your financial statements, legal documents, and personal files never leave your device, giving you complete control over your privacy.

主要特点包括 drag-and-drop file upload, visual page preview for easy selection, drag-and-drop page reordering, precise page range selection for splitting, and support for encrypted PDFs. The tool handles documents of any size (within browser memory limits) and produces clean, standards-compliant output that opens correctly in any PDF reader.

上传您的 PDF files by dragging them onto the tool or using the file picker. For merging, add multiple files and arrange them in your desired order. For splitting, select the page ranges you want to extract. For rotating, choose the rotation angle. Preview the result, then click the action button to process and download the output file.

所有 PDF 处理 happens locally in your browser using pdf-lib (a pure JavaScript library). Your documents are never uploaded to any server. This is critical for sensitive documents like contracts, tax returns, medical records, and financial statements. No account required, no file storage, no risk of data exposure.`,
  },
  "image-cropper": {
    en: `A free browser-based image tool that crop images by dragging a selection area on canvas. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `Image Cropper 是一款免费在线工具，Crop images by dragging a selection area on canvas。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "image-resizer": {
    en: `A free browser-based image tool that resize images to exact dimensions with aspect ratio lock. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `Image Resizer 是一款免费在线工具，Resize images to exact dimensions with aspect ratio lock。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "image-filters": {
    en: `A free browser-based image tool that apply grayscale, sepia, blur, brightness, and contrast filters. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `Image Filters 是一款免费在线工具，Apply grayscale, sepia, blur, brightness, and contrast filters。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "color-picker": {
    en: `A free browser-based image tool that pick colors from uploaded images or use the color selector. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `Color Picker from Image 是一款免费在线工具，Pick colors from uploaded images or use the color selector。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "gif-maker": {
    en: `A free browser-based image tool that create animated gifs from multiple images or video clips. set frame delay, resize output, and optimize for web or social media. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `GIF Maker 是一款免费在线工具，Create animated GIFs from multiple images or video clips. Set frame delay, resize output, and optimize for web or social media.。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "image-watermark": {
    en: `A free browser-based image tool that add text watermark to images with position and opacity control. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `Image Watermark 是一款免费在线工具，Add text watermark to images with position and opacity control。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "image-merge": {
    en: `A free browser-based image tool that combine multiple images into one side by side or grid. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `Image Merger 是一款免费在线工具，Combine multiple images into one side by side or grid。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "image-splitter": {
    en: `A free browser-based image tool that split a single image into multiple tiles by rows and columns. perfect for creating sprite sheets, grid layouts, and image segments. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `Image Splitter 是一款免费在线工具，Split a single image into multiple tiles by rows and columns. Perfect for creating sprite sheets, grid layouts, and image segments.。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "image-flip": {
    en: `A free browser-based image tool that flip images horizontally or vertically and rotate by 90-degree increments. mirror selfies, correct orientation, and transform photos instantly. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `Image Flip & Rotate 是一款免费在线工具，Flip images horizontally or vertically and rotate by 90-degree increments. Mirror selfies, correct orientation, and transform photos instantly.。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "image-border": {
    en: `A free browser-based image tool that add customizable borders, frames, and padding to images. choose colors, widths, corner radius, and shadow effects for polished photos. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `Image Border 是一款免费在线工具，Add customizable borders, frames, and padding to images. Choose colors, widths, corner radius, and shadow effects for polished photos.。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "meme-generator": {
    en: `A free browser-based image tool that create memes by adding top and bottom text to images. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `Meme Generator 是一款免费在线工具，Create memes by adding top and bottom text to images。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "image-to-sketch": {
    en: `A free browser-based image tool that convert photos into pencil sketch drawings and line art. apply artistic filters to create realistic hand-drawn effects from your images. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `Image to Sketch 是一款免费在线工具，Convert photos into pencil sketch drawings and line art. Apply artistic filters to create realistic hand-drawn effects from your images.。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "emoji-remover": {
    en: `A free online text processing tool that remove all emoji characters from text while keeping words. Transform, analyze, and manipulate text instantly in your browser.

Writers, developers, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

Key features include real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

All text processing happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
    zh: `Emoji Remover 是一款免费在线工具，Remove all emoji characters from text while keeping words。

写作者、开发者, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

主要特点包括 real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

所有文本处理 happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
  },
  "unicode-detector": {
    en: `A free online text processing tool that inspect unicode characters with codepoint and category info. Transform, analyze, and manipulate text instantly in your browser.

Writers, developers, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

Key features include real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

All text processing happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
    zh: `Unicode Character Detector 是一款免费在线工具，Inspect Unicode characters with codepoint and category info。

写作者、开发者, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

主要特点包括 real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

所有文本处理 happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
  },
  "caesar-cipher": {
    en: `A developer-focused online tool that encode and decode text using the classic caesar shift cipher. choose shift values, try brute force decoding, and learn cryptography basics. Built for speed and accuracy, it processes your input instantly without any server uploads.

Developers often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

Key features include real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

Simply paste or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

All processing happens locally in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
    zh: `Caesar Cipher 是一款免费在线工具，Encode and decode text using the classic Caesar shift cipher. Choose shift values, try brute force decoding, and learn cryptography basics.。

开发者 often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

主要特点包括 real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

只需粘贴 or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

所有处理都在浏览器本地完成 in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
  },
  "json-diff": {
    en: `A free online text processing tool that compare two json objects and highlight differences. Transform, analyze, and manipulate text instantly in your browser.

Writers, developers, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

Key features include real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

All text processing happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
    zh: `JSON Diff 是一款免费在线工具，Compare two JSON objects and highlight differences。

写作者、开发者, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

主要特点包括 real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

所有文本处理 happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
  },
  "http-status-codes": {
    en: `A developer-focused online tool that browse and search all http status codes with descriptions. Built for speed and accuracy, it processes your input instantly without any server uploads.

Developers often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

Key features include real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

Simply paste or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

All processing happens locally in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
    zh: `HTTP Status Codes 是一款免费在线工具，Browse and search all HTTP status codes with descriptions。

开发者 often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

主要特点包括 real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

只需粘贴 or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

所有处理都在浏览器本地完成 in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
  },
  "markdown-to-html": {
    en: `A developer-focused online tool that convert markdown text to formatted html in real-time. Built for speed and accuracy, it processes your input instantly without any server uploads.

Developers often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

Key features include real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

Simply paste or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

All processing happens locally in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
    zh: `Markdown to HTML 是一款免费在线工具，Convert Markdown text to formatted HTML in real-time。

开发者 often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

主要特点包括 real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

只需粘贴 or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

所有处理都在浏览器本地完成 in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
  },
  "timezone-converter": {
    en: `A free online conversion calculator that convert time between different world time zones instantly. schedule meetings across time zones and compare clocks worldwide. Get accurate results instantly without any software installation.

Unit conversions are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

Key features include support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

Enter your value in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

All calculations happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
    zh: `Time Zone Converter 是一款免费在线工具，Convert time between different world time zones instantly. Schedule meetings across time zones and compare clocks worldwide.。

单位换算 are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

主要特点包括 support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

输入您的数值 in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

所有计算 happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
  },
  "binary-to-text": {
    en: `A free online text processing tool that convert binary code to text and text back to binary. Transform, analyze, and manipulate text instantly in your browser.

Writers, developers, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

Key features include real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

All text processing happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
    zh: `Binary to Text 是一款免费在线工具，Convert binary code to text and text back to binary。

写作者、开发者, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

主要特点包括 real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

所有文本处理 happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
  },
  "image-invert": {
    en: `A free browser-based image tool that invert or negate colors in any image instantly. create negative effects, x-ray looks, and artistic color reversals with one click. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `Image Invert 是一款免费在线工具，Invert or negate colors in any image instantly. Create negative effects, X-ray looks, and artistic color reversals with one click.。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "image-collage": {
    en: `A free browser-based image tool that combine multiple photos into a beautiful collage grid. choose layouts, spacing, background colors, and export in high resolution. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `Photo Collage Maker 是一款免费在线工具，Combine multiple photos into a beautiful collage grid. Choose layouts, spacing, background colors, and export in high resolution.。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "css-gradient": {
    en: `A developer-focused online tool that create beautiful linear and radial css gradients visually. copy the generated css code for backgrounds, buttons, and ui elements. Built for speed and accuracy, it processes your input instantly without any server uploads.

Developers often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

Key features include real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

Simply paste or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

All processing happens locally in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
    zh: `CSS Gradient Generator 是一款免费在线工具，Create beautiful linear and radial CSS gradients visually. Copy the generated CSS code for backgrounds, buttons, and UI elements.。

开发者 often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

主要特点包括 real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

只需粘贴 or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

所有处理都在浏览器本地完成 in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
  },
  "css-shadow": {
    en: `A developer-focused online tool that design and preview custom css box shadows visually. Built for speed and accuracy, it processes your input instantly without any server uploads.

Developers often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

Key features include real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

Simply paste or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

All processing happens locally in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
    zh: `CSS Box Shadow Generator 是一款免费在线工具，Design and preview custom CSS box shadows visually。

开发者 often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

主要特点包括 real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

只需粘贴 or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

所有处理都在浏览器本地完成 in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
  },
  "json-to-typescript": {
    en: `A developer-focused online tool that convert json objects into typescript interfaces automatically. generate type definitions from api responses and configuration files instantly. Built for speed and accuracy, it processes your input instantly without any server uploads.

Developers often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

Key features include real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

Simply paste or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

All processing happens locally in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
    zh: `JSON to TypeScript 是一款免费在线工具，Convert JSON objects into TypeScript interfaces automatically. Generate type definitions from API responses and configuration files instantly.。

开发者 often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

主要特点包括 real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

只需粘贴 or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

所有处理都在浏览器本地完成 in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
  },
  "html-to-jsx": {
    en: `A developer-focused online tool that convert plain html code into react jsx syntax. handle inline styles, class attributes, self-closing tags, and event handlers automatically. Built for speed and accuracy, it processes your input instantly without any server uploads.

Developers often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

Key features include real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

Simply paste or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

All processing happens locally in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
    zh: `HTML to JSX Converter 是一款免费在线工具，Convert plain HTML code into React JSX syntax. Handle inline styles, class attributes, self-closing tags, and event handlers automatically.。

开发者 often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

主要特点包括 real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

只需粘贴 or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

所有处理都在浏览器本地完成 in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
  },
  "color-palette": {
    en: `A free online utility tool that generate color schemes: monochromatic, complementary, and more. Simple, fast, and completely private — just open and use.

Everyday tasks like generating passwords, creating QR codes, rolling dice, or checking BMI shouldn't require installing software or creating accounts. This tool provides a quick, reliable solution that works instantly in your browser. It's perfect for one-off tasks where you need a fast result without the overhead of specialized software.

Key features include instant results with no loading time, a clean and intuitive interface that requires no learning curve, customizable options for fine-tuning results, one-click copy or download for output, and responsive design that works on any device. The tool is designed to do one thing well and do it fast.

Open the tool, configure your options if needed (such as length, format, or range), and click the action button. Results appear immediately. Copy the output to your clipboard, download it, or generate a new result with different settings. The entire workflow takes seconds.

All processing happens locally in your browser. No data is uploaded, stored, or tracked. Your inputs and results are completely private. No account required, no cookies, no analytics beyond basic page views.`,
    zh: `Color Palette Generator 是一款免费在线工具，Generate color schemes: monochromatic, complementary, and more。

日常任务 like generating passwords, creating QR codes, rolling dice, or checking BMI shouldn't require installing software or creating accounts. This tool provides a quick, reliable solution that works instantly in your browser. It's perfect for one-off tasks where you need a fast result without the overhead of specialized software.

主要特点包括 instant results with no loading time, a clean and intuitive interface that requires no learning curve, customizable options for fine-tuning results, one-click copy or download for output, and responsive design that works on any device. The tool is designed to do one thing well and do it fast.

打开工具, configure your options if needed (such as length, format, or range), and click the action button. Results appear immediately. Copy the output to your clipboard, download it, or generate a new result with different settings. The entire workflow takes seconds.

所有处理都在浏览器本地完成 in your browser. No data is uploaded, stored, or tracked. Your inputs and results are completely private. No account required, no cookies, no analytics beyond basic page views.`,
  },
  "roman-numeral": {
    en: `A free online conversion calculator that convert between roman numerals and arabic numbers instantly. works with values from 1 to 3999, including common numeral combinations. Get accurate results instantly without any software installation.

Unit conversions are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

Key features include support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

Enter your value in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

All calculations happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
    zh: `Roman Numeral Converter 是一款免费在线工具，Convert between Roman numerals and Arabic numbers instantly. Works with values from 1 to 3999, including common numeral combinations.。

单位换算 are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

主要特点包括 support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

输入您的数值 in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

所有计算 happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
  },
  "percentage-calculator": {
    en: `A free online conversion calculator that calculate percentages, what if, increase/decrease easily. Get accurate results instantly without any software installation.

Unit conversions are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

Key features include support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

Enter your value in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

All calculations happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
    zh: `Percentage Calculator 是一款免费在线工具，Calculate percentages, what if, increase/decrease easily。

单位换算 are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

主要特点包括 support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

输入您的数值 in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

所有计算 happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
  },
  "tip-calculator": {
    en: `A developer-focused online tool that calculate tip amount, total bill, and per-person cost. Built for speed and accuracy, it processes your input instantly without any server uploads.

Developers often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

Key features include real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

Simply paste or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

All processing happens locally in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
    zh: `Tip Calculator 是一款免费在线工具，Calculate tip amount, total bill, and per-person cost。

开发者 often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

主要特点包括 real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

只需粘贴 or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

所有处理都在浏览器本地完成 in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
  },
  "age-calculator": {
    en: `A free online conversion calculator that calculate exact age in years, months, weeks, and days. find your age on any future date or count down to your next birthday. Get accurate results instantly without any software installation.

Unit conversions are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

Key features include support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

Enter your value in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

All calculations happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
    zh: `Age Calculator 是一款免费在线工具，Calculate exact age in years, months, weeks, and days. Find your age on any future date or count down to your next birthday.。

单位换算 are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

主要特点包括 support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

输入您的数值 in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

所有计算 happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
  },
  "bmi-calculator": {
    en: `A free online conversion calculator that calculate body mass index and check your health category. Get accurate results instantly without any software installation.

Unit conversions are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

Key features include support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

Enter your value in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

All calculations happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
    zh: `BMI Calculator 是一款免费在线工具，Calculate Body Mass Index and check your health category。

单位换算 are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

主要特点包括 support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

输入您的数值 in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

所有计算 happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
  },
  "countdown-timer": {
    en: `A free online utility tool that set a countdown to any date and time with days, hours, minutes, and seconds. perfect for events, deadlines, and special occasions. Simple, fast, and completely private — just open and use.

Everyday tasks like generating passwords, creating QR codes, rolling dice, or checking BMI shouldn't require installing software or creating accounts. This tool provides a quick, reliable solution that works instantly in your browser. It's perfect for one-off tasks where you need a fast result without the overhead of specialized software.

Key features include instant results with no loading time, a clean and intuitive interface that requires no learning curve, customizable options for fine-tuning results, one-click copy or download for output, and responsive design that works on any device. The tool is designed to do one thing well and do it fast.

Open the tool, configure your options if needed (such as length, format, or range), and click the action button. Results appear immediately. Copy the output to your clipboard, download it, or generate a new result with different settings. The entire workflow takes seconds.

All processing happens locally in your browser. No data is uploaded, stored, or tracked. Your inputs and results are completely private. No account required, no cookies, no analytics beyond basic page views.`,
    zh: `Countdown Timer 是一款免费在线工具，Set a countdown to any date and time with days, hours, minutes, and seconds. Perfect for events, deadlines, and special occasions.。

日常任务 like generating passwords, creating QR codes, rolling dice, or checking BMI shouldn't require installing software or creating accounts. This tool provides a quick, reliable solution that works instantly in your browser. It's perfect for one-off tasks where you need a fast result without the overhead of specialized software.

主要特点包括 instant results with no loading time, a clean and intuitive interface that requires no learning curve, customizable options for fine-tuning results, one-click copy or download for output, and responsive design that works on any device. The tool is designed to do one thing well and do it fast.

打开工具, configure your options if needed (such as length, format, or range), and click the action button. Results appear immediately. Copy the output to your clipboard, download it, or generate a new result with different settings. The entire workflow takes seconds.

所有处理都在浏览器本地完成 in your browser. No data is uploaded, stored, or tracked. Your inputs and results are completely private. No account required, no cookies, no analytics beyond basic page views.`,
  },
  "dice-roller": {
    en: `A free online utility tool that roll virtual dice with 4, 6, 8, 10, 12, and 20 sides. roll multiple dice at once for tabletop games, rpgs, and classrooms. Simple, fast, and completely private — just open and use.

Everyday tasks like generating passwords, creating QR codes, rolling dice, or checking BMI shouldn't require installing software or creating accounts. This tool provides a quick, reliable solution that works instantly in your browser. It's perfect for one-off tasks where you need a fast result without the overhead of specialized software.

Key features include instant results with no loading time, a clean and intuitive interface that requires no learning curve, customizable options for fine-tuning results, one-click copy or download for output, and responsive design that works on any device. The tool is designed to do one thing well and do it fast.

Open the tool, configure your options if needed (such as length, format, or range), and click the action button. Results appear immediately. Copy the output to your clipboard, download it, or generate a new result with different settings. The entire workflow takes seconds.

All processing happens locally in your browser. No data is uploaded, stored, or tracked. Your inputs and results are completely private. No account required, no cookies, no analytics beyond basic page views.`,
    zh: `Dice Roller 是一款免费在线工具，Roll virtual dice with 4, 6, 8, 10, 12, and 20 sides. Roll multiple dice at once for tabletop games, RPGs, and classrooms.。

日常任务 like generating passwords, creating QR codes, rolling dice, or checking BMI shouldn't require installing software or creating accounts. This tool provides a quick, reliable solution that works instantly in your browser. It's perfect for one-off tasks where you need a fast result without the overhead of specialized software.

主要特点包括 instant results with no loading time, a clean and intuitive interface that requires no learning curve, customizable options for fine-tuning results, one-click copy or download for output, and responsive design that works on any device. The tool is designed to do one thing well and do it fast.

打开工具, configure your options if needed (such as length, format, or range), and click the action button. Results appear immediately. Copy the output to your clipboard, download it, or generate a new result with different settings. The entire workflow takes seconds.

所有处理都在浏览器本地完成 in your browser. No data is uploaded, stored, or tracked. Your inputs and results are completely private. No account required, no cookies, no analytics beyond basic page views.`,
  },
  "decision-maker": {
    en: `A free online utility tool that let fate decide — pick a random option from your list. Simple, fast, and completely private — just open and use.

Everyday tasks like generating passwords, creating QR codes, rolling dice, or checking BMI shouldn't require installing software or creating accounts. This tool provides a quick, reliable solution that works instantly in your browser. It's perfect for one-off tasks where you need a fast result without the overhead of specialized software.

Key features include instant results with no loading time, a clean and intuitive interface that requires no learning curve, customizable options for fine-tuning results, one-click copy or download for output, and responsive design that works on any device. The tool is designed to do one thing well and do it fast.

Open the tool, configure your options if needed (such as length, format, or range), and click the action button. Results appear immediately. Copy the output to your clipboard, download it, or generate a new result with different settings. The entire workflow takes seconds.

All processing happens locally in your browser. No data is uploaded, stored, or tracked. Your inputs and results are completely private. No account required, no cookies, no analytics beyond basic page views.`,
    zh: `Decision Maker 是一款免费在线工具，Let fate decide — pick a random option from your list。

日常任务 like generating passwords, creating QR codes, rolling dice, or checking BMI shouldn't require installing software or creating accounts. This tool provides a quick, reliable solution that works instantly in your browser. It's perfect for one-off tasks where you need a fast result without the overhead of specialized software.

主要特点包括 instant results with no loading time, a clean and intuitive interface that requires no learning curve, customizable options for fine-tuning results, one-click copy or download for output, and responsive design that works on any device. The tool is designed to do one thing well and do it fast.

打开工具, configure your options if needed (such as length, format, or range), and click the action button. Results appear immediately. Copy the output to your clipboard, download it, or generate a new result with different settings. The entire workflow takes seconds.

所有处理都在浏览器本地完成 in your browser. No data is uploaded, stored, or tracked. Your inputs and results are completely private. No account required, no cookies, no analytics beyond basic page views.`,
  },
  "audio-cutter": {
    en: `A free browser-based audio tool that trim and cut audio files with an interactive waveform preview. extract clips from mp3, wav, and other formats right in your browser. Process your music and sound files without uploading to any server.

Audio editing traditionally requires desktop software like Audacity or Adobe Audition, which are complex and resource-heavy for simple tasks. This tool brings essential audio processing to your browser, letting you trim, merge, or convert audio files instantly. It's perfect for quick edits, format conversions, or preparing audio for projects.

Key features include visual waveform display for precise editing, drag-and-drop file upload, support for multiple audio formats (MP3, WAV, OGG, M4A), real-time preview of edits, and high-quality output with configurable bitrate and sample rate options.

Upload your audio file by dragging it onto the tool or using the file picker. Use the waveform display to select the portion you want to keep (for trimming) or arrange multiple files (for merging). Preview your edits, adjust settings if needed, and click the export button to download the processed audio.

All audio processing happens locally in your browser using the Web Audio API. Your music and sound files are never uploaded to any server. This ensures complete privacy for personal recordings, music projects, and sensitive audio content. No account required.`,
    zh: `Audio Cutter 是一款免费在线工具，Trim and cut audio files with an interactive waveform preview. Extract clips from MP3, WAV, and other formats right in your browser.。

音频编辑 traditionally requires desktop software like Audacity or Adobe Audition, which are complex and resource-heavy for simple tasks. This tool brings essential audio processing to your browser, letting you trim, merge, or convert audio files instantly. It's perfect for quick edits, format conversions, or preparing audio for projects.

主要特点包括 visual waveform display for precise editing, drag-and-drop file upload, support for multiple audio formats (MP3, WAV, OGG, M4A), real-time preview of edits, and high-quality output with configurable bitrate and sample rate options.

上传您的 audio file by dragging it onto the tool or using the file picker. Use the waveform display to select the portion you want to keep (for trimming) or arrange multiple files (for merging). Preview your edits, adjust settings if needed, and click the export button to download the processed audio.

所有音频处理 happens locally in your browser using the Web Audio API. Your music and sound files are never uploaded to any server. This ensures complete privacy for personal recordings, music projects, and sensitive audio content. No account required.`,
  },
  "audio-merger": {
    en: `A free browser-based image tool that combine multiple audio files into one seamless track. merge songs, recordings, or voice clips in any order with crossfade support. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `Audio Merger 是一款免费在线工具，Combine multiple audio files into one seamless track. Merge songs, recordings, or voice clips in any order with crossfade support.。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "audio-converter": {
    en: `A free online conversion calculator that convert audio between wav formats and sample rates. Get accurate results instantly without any software installation.

Unit conversions are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

Key features include support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

Enter your value in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

All calculations happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
    zh: `Audio Converter 是一款免费在线工具，Convert audio between WAV formats and sample rates。

单位换算 are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

主要特点包括 support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

输入您的数值 in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

所有计算 happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
  },
  "dns-lookup": {
    en: `A free online network lookup tool that query A, AAAA, MX, NS, TXT, CAA, and SOA records for any domain. Query domain information and DNS records instantly from your browser.

Network administrators, web developers, and IT professionals need to look up DNS records, check domain registrations, and diagnose network issues regularly. Command-line tools like \`dig\` and \`whois\` require terminal access and technical knowledge. This tool provides the same information through an intuitive web interface, accessible from any device.

Key features include support for all major DNS record types (A, AAAA, MX, NS, TXT, CNAME, SOA), instant results with clear formatting, domain availability and registration information, WHOIS data with privacy protection details, and a clean interface that makes complex DNS data easy to understand.

Enter the domain name in the input field, select the DNS record type you want to query (or choose 'All' for a comprehensive view), and click the lookup button. Results appear instantly with formatted DNS records, WHOIS information, and any available registration details.

DNS queries are performed through public DNS resolvers — no personal information is collected or stored. The tool does not track your lookups or store query history. Your network diagnostics remain completely private.`,
    zh: `DNS Lookup 是一款免费在线工具，查询任意域名的 A、AAAA、MX、NS、TXT、CAA 和 SOA 记录。

网络管理员, web developers, and IT professionals need to look up DNS records, check domain registrations, and diagnose network issues regularly. Command-line tools like \`dig\` and \`whois\` require terminal access and technical knowledge. This tool provides the same information through an intuitive web interface, accessible from any device.

主要特点包括 support for all major DNS record types (A, AAAA, MX, NS, TXT, CNAME, SOA), instant results with clear formatting, domain availability and registration information, WHOIS data with privacy protection details, and a clean interface that makes complex DNS data easy to understand.

输入域名 name in the input field, select the DNS record type you want to query (or choose 'All' for a comprehensive view), and click the lookup button. Results appear instantly with formatted DNS records, WHOIS information, and any available registration details.

DNS 查询 are performed through public DNS resolvers — no personal information is collected or stored. The tool does not track your lookups or store query history. Your network diagnostics remain completely private.`,
  },
  "whois-lookup": {
    en: `A free online network lookup tool that look up domain registration and ownership information. Query domain information and DNS records instantly from your browser.

Network administrators, web developers, and IT professionals need to look up DNS records, check domain registrations, and diagnose network issues regularly. Command-line tools like \`dig\` and \`whois\` require terminal access and technical knowledge. This tool provides the same information through an intuitive web interface, accessible from any device.

Key features include support for all major DNS record types (A, AAAA, MX, NS, TXT, CNAME, SOA), instant results with clear formatting, domain availability and registration information, WHOIS data with privacy protection details, and a clean interface that makes complex DNS data easy to understand.

Enter the domain name in the input field, select the DNS record type you want to query (or choose 'All' for a comprehensive view), and click the lookup button. Results appear instantly with formatted DNS records, WHOIS information, and any available registration details.

DNS queries are performed through public DNS resolvers — no personal information is collected or stored. The tool does not track your lookups or store query history. Your network diagnostics remain completely private.`,
    zh: `WHOIS Lookup 是一款免费在线工具，Look up domain registration and ownership information。

网络管理员, web developers, and IT professionals need to look up DNS records, check domain registrations, and diagnose network issues regularly. Command-line tools like \`dig\` and \`whois\` require terminal access and technical knowledge. This tool provides the same information through an intuitive web interface, accessible from any device.

主要特点包括 support for all major DNS record types (A, AAAA, MX, NS, TXT, CNAME, SOA), instant results with clear formatting, domain availability and registration information, WHOIS data with privacy protection details, and a clean interface that makes complex DNS data easy to understand.

输入域名 name in the input field, select the DNS record type you want to query (or choose 'All' for a comprehensive view), and click the lookup button. Results appear instantly with formatted DNS records, WHOIS information, and any available registration details.

DNS 查询 are performed through public DNS resolvers — no personal information is collected or stored. The tool does not track your lookups or store query history. Your network diagnostics remain completely private.`,
  },
  "svg-to-png": {
    en: `A developer-focused online tool that convert svg vector code or files into png images with custom dimensions, background colors, and scaling options for any use case. Built for speed and accuracy, it processes your input instantly without any server uploads.

Developers often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

Key features include real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

Simply paste or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

All processing happens locally in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
    zh: `SVG to PNG Converter 是一款免费在线工具，Convert SVG vector code or files into PNG images with custom dimensions, background colors, and scaling options for any use case.。

开发者 often need quick conversions, validations, or formatting while coding. Instead of installing heavy desktop software or writing custom scripts, this tool provides instant results right in your browser. Whether you're debugging an API response, validating configuration files, or testing regex patterns, having a reliable browser-based tool saves precious development time.

主要特点包括 real-time processing with instant feedback, support for common edge cases and error handling, a clean distraction-free interface designed for productivity, and the ability to copy results with a single click. The tool handles input of any reasonable size and provides clear, formatted output that's easy to read and use.

只需粘贴 or type your data into the input area, configure any available options (such as output format or processing mode), and click the action button. Results appear instantly below the input. You can copy the output to your clipboard, download it as a file, or clear the input to start fresh. The interface works identically on desktop and mobile browsers.

所有处理都在浏览器本地完成 in your browser using JavaScript — your data is never sent to any server. This makes the tool safe for processing sensitive information like API keys, configuration files, or proprietary code. No account, no signup, no tracking.`,
  },
  "days-between": {
    en: `A free online conversion calculator that calculate the exact number of days between two dates. Get accurate results instantly without any software installation.

Unit conversions are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

Key features include support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

Enter your value in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

All calculations happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
    zh: `Days Between Dates 是一款免费在线工具，Calculate the exact number of days between two dates。

单位换算 are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

主要特点包括 support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

输入您的数值 in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

所有计算 happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
  },
  "password-strength": {
    en: `A free online text processing tool that test how strong your password is with real-time analysis. Transform, analyze, and manipulate text instantly in your browser.

Writers, developers, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

Key features include real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

All text processing happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
    zh: `Password Strength Checker 是一款免费在线工具，Test how strong your password is with real-time analysis。

写作者、开发者, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

主要特点包括 real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

所有文本处理 happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
  },
  "barcode-generator": {
    en: `A free online utility tool that generate barcodes in Code128, EAN-13, Code39 formats and QR codes. Simple, fast, and completely private — just open and use.

Everyday tasks like generating passwords, creating QR codes, rolling dice, or checking BMI shouldn't require installing software or creating accounts. This tool provides a quick, reliable solution that works instantly in your browser. It's perfect for one-off tasks where you need a fast result without the overhead of specialized software.

Key features include instant results with no loading time, a clean and intuitive interface that requires no learning curve, customizable options for fine-tuning results, one-click copy or download for output, and responsive design that works on any device. The tool is designed to do one thing well and do it fast.

Open the tool, configure your options if needed (such as length, format, or range), and click the action button. Results appear immediately. Copy the output to your clipboard, download it, or generate a new result with different settings. The entire workflow takes seconds.

All processing happens locally in your browser. No data is uploaded, stored, or tracked. Your inputs and results are completely private. No account required, no cookies, no analytics beyond basic page views.`,
    zh: `Barcode & QR Code Generator 是一款免费在线工具，生成 Code128、EAN-13、Code39 格式条码和二维码。

日常任务 like generating passwords, creating QR codes, rolling dice, or checking BMI shouldn't require installing software or creating accounts. This tool provides a quick, reliable solution that works instantly in your browser. It's perfect for one-off tasks where you need a fast result without the overhead of specialized software.

主要特点包括 instant results with no loading time, a clean and intuitive interface that requires no learning curve, customizable options for fine-tuning results, one-click copy or download for output, and responsive design that works on any device. The tool is designed to do one thing well and do it fast.

打开工具, configure your options if needed (such as length, format, or range), and click the action button. Results appear immediately. Copy the output to your clipboard, download it, or generate a new result with different settings. The entire workflow takes seconds.

所有处理都在浏览器本地完成 in your browser. No data is uploaded, stored, or tracked. Your inputs and results are completely private. No account required, no cookies, no analytics beyond basic page views.`,
  },
  "aspect-ratio-calculator": {
    en: `A free online conversion calculator that calculate aspect ratios from dimensions or presets. Get accurate results instantly without any software installation.

Unit conversions are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

Key features include support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

Enter your value in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

All calculations happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
    zh: `Aspect Ratio Calculator 是一款免费在线工具，Calculate aspect ratios from dimensions or presets。

单位换算 are needed daily in cooking, engineering, travel, science, and everyday life. While your phone has a basic calculator, it rarely handles all the units you need. This tool provides comprehensive conversion support with instant results, making it easy to switch between measurement systems without memorizing conversion factors.

主要特点包括 support for dozens of unit types, instant results as you type, high-precision calculations with proper rounding, a clean interface showing multiple unit options simultaneously, and the ability to swap input and output units with one click. The tool handles both common and specialized units.

输入您的数值 in the input field, select the source unit from the dropdown, and see the converted value in all other units simultaneously. No need to click a button — results update in real-time as you type. Use the swap button to reverse the conversion direction, or select a different unit from the comprehensive list.

所有计算 happen locally in your browser using JavaScript. No data is sent to any server. Your input values and conversion results stay completely private. No account, no signup, no cookies beyond essential functionality.`,
  },
  "qr-reader": {
    en: `A free online utility tool that decode qr codes from uploaded images instantly. scan any qr code image to reveal the embedded url, text, or contact information. Simple, fast, and completely private — just open and use.

Everyday tasks like generating passwords, creating QR codes, rolling dice, or checking BMI shouldn't require installing software or creating accounts. This tool provides a quick, reliable solution that works instantly in your browser. It's perfect for one-off tasks where you need a fast result without the overhead of specialized software.

Key features include instant results with no loading time, a clean and intuitive interface that requires no learning curve, customizable options for fine-tuning results, one-click copy or download for output, and responsive design that works on any device. The tool is designed to do one thing well and do it fast.

Open the tool, configure your options if needed (such as length, format, or range), and click the action button. Results appear immediately. Copy the output to your clipboard, download it, or generate a new result with different settings. The entire workflow takes seconds.

All processing happens locally in your browser. No data is uploaded, stored, or tracked. Your inputs and results are completely private. No account required, no cookies, no analytics beyond basic page views.`,
    zh: `QR Code Reader 是一款免费在线工具，Decode QR codes from uploaded images instantly. Scan any QR code image to reveal the embedded URL, text, or contact information.。

日常任务 like generating passwords, creating QR codes, rolling dice, or checking BMI shouldn't require installing software or creating accounts. This tool provides a quick, reliable solution that works instantly in your browser. It's perfect for one-off tasks where you need a fast result without the overhead of specialized software.

主要特点包括 instant results with no loading time, a clean and intuitive interface that requires no learning curve, customizable options for fine-tuning results, one-click copy or download for output, and responsive design that works on any device. The tool is designed to do one thing well and do it fast.

打开工具, configure your options if needed (such as length, format, or range), and click the action button. Results appear immediately. Copy the output to your clipboard, download it, or generate a new result with different settings. The entire workflow takes seconds.

所有处理都在浏览器本地完成 in your browser. No data is uploaded, stored, or tracked. Your inputs and results are completely private. No account required, no cookies, no analytics beyond basic page views.`,
  },
  "color-blindness-simulator": {
    en: `A free browser-based image tool that simulate how images look with various color blindness types. Process your photos and graphics directly in your browser without uploading to any server.

Image processing usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

Key features include drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

Upload your image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

All image processing happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
    zh: `Color Blindness Simulator 是一款免费在线工具，Simulate how images look with various color blindness types。

图片处理 usually requires desktop software like Photoshop or GIMP, which are expensive and complex for simple tasks. This tool brings essential image processing capabilities to your browser. Whether you need to compress images for your website, resize photos for social media, convert between formats, or apply filters, you can do it all instantly without installing anything.

主要特点包括 drag-and-drop upload for easy file handling, real-time preview of changes before applying them, support for multiple image formats (JPEG, PNG, WebP, GIF, BMP), adjustable quality and size settings for precise control, and batch processing for multiple files at once. The tool preserves image metadata and provides clean, optimized output.

上传您的 image by dragging it onto the tool area or clicking the upload button. Adjust settings using the available controls (quality slider, dimension inputs, format selection, etc.). Preview the result in real-time, and when satisfied, click the download button to save the processed image. For batch operations, select multiple files and apply the same settings to all of them.

所有图片处理 happens locally in your browser using Canvas API and JavaScript. Your images are never uploaded to any server, ensuring complete privacy. This is especially important for sensitive photos, business documents, or personal images. No account required — just open, process, and download.`,
  },
  "online-notepad": {
    en: `A free online text processing tool that a clean, distraction-free browser-based notepad with auto-save. write notes, code snippets, and lists that persist in your browser storage. Transform, analyze, and manipulate text instantly in your browser.

Writers, developers, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

Key features include real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

All text processing happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
    zh: `Online Notepad 是一款免费在线工具，A clean, distraction-free browser-based notepad with auto-save. Write notes, code snippets, and lists that persist in your browser storage.。

写作者、开发者, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

主要特点包括 real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

所有文本处理 happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
  },
  "text-statistics": {
    en: `A free online text processing tool that detailed text analysis: letters, vowels, unique words, and more. Transform, analyze, and manipulate text instantly in your browser.

Writers, developers, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

Key features include real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

All text processing happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
    zh: `Text Statistics 是一款免费在线工具，Detailed text analysis: letters, vowels, unique words, and more。

写作者、开发者, and content creators frequently need to process text — counting words, converting case, checking diffs, or reformatting content. Desktop text editors lack these specialized features, and online alternatives often require signup or have usage limits. This tool provides unlimited, instant text processing with a clean, focused interface.

主要特点包括 real-time processing as you type, support for large text inputs (up to 100,000 characters), multiple output formats and options, one-click copy to clipboard, and clear visual feedback for changes and results. The tool handles Unicode correctly and works with text in any language.

Paste or type your text into the input area. The tool processes it automatically in real-time, or click the action button if manual triggering is needed. Results appear instantly below the input. Use the copy button to grab the output, or clear everything to start a new task. The responsive interface works well on both desktop and mobile.

所有文本处理 happens locally in your browser. Your text is never sent to any server, making this tool safe for processing sensitive documents, personal notes, or confidential content. No signup, no tracking, no data collection.`,
  },
};

export function getToolGuide(slug: string): ToolGuideData | undefined {
  return toolGuides[slug];
}