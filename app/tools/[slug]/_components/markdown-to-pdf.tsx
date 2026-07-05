'use client';

import { useState, useMemo, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { useLocale } from "@/lib/i18n/context";

/* ── Markdown → HTML helpers (self-contained, no external libs) ── */

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function sanitizeUrl(url: string): string {
  const allowedProtocols = ['http:', 'https:', 'mailto:', 'data:', '#'];
  try {
    const parsed = new URL(url, 'https://safe.local');
    if (!allowedProtocols.includes(parsed.protocol)) return '#';
    return url;
  } catch {
    if (url.startsWith('/') || url.startsWith('#')) return url;
    return '#';
  }
}

/** Process inline Markdown: bold, italic, code, links, images */
function processInline(text: string): string {
  let result = escapeHtml(text);

  // Images: ![alt](url)  — must run before links
  result = result.replace(
    /!\[([^\]]*)\]\(([^)]+)\)/g,
    (_, alt, url) => {
      const safeUrl = sanitizeUrl(url);
      return `<img src="${safeUrl}" alt="${alt}" style="max-width:100%;height:auto;" />`;
    }
  );

  // Links: [text](url)
  result = result.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (_, linkText, url) => {
      const safeUrl = sanitizeUrl(url);
      return `<a href="${safeUrl}" target="_blank" rel="noopener noreferrer">${linkText}</a>`;
    }
  );

  // Bold: **text** or __text__
  result = result.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  result = result.replace(/__(.+?)__/g, '<strong>$1</strong>');

  // Italic: *text* or _text_
  result = result.replace(/\*(.+?)\*/g, '<em>$1</em>');
  result = result.replace(/_([^_]+?)_/g, '<em>$1</em>');

  // Strikethrough: ~~text~~
  result = result.replace(/~~(.+?)~~/g, '<del>$1</del>');

  // Inline code: `text`
  result = result.replace(/`([^`]+)`/g, '<code>$1</code>');

  return result;
}

/** Parse a full Markdown document into an HTML string. */
function markdownToHtml(md: string): string {
  const lines = md.split('\n');
  const out: string[] = [];
  let inList: 'ul' | 'ol' | null = null;
  let inTable = false;

  const closeList = () => {
    if (inList) { out.push(`</${inList}>`); inList = null; }
  };
  const closeTable = () => {
    if (inTable) { out.push('</tbody></table>'); inTable = false; }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Fenced code block ```
    if (/^```/.test(line)) {
      closeList();
      closeTable();
      const lang = line.slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !/^```/.test(lines[i])) {
        codeLines.push(escapeHtml(lines[i]));
        i++;
      }
      const cls = lang ? ` class="language-${escapeHtml(lang)}"` : '';
      out.push(`<pre><code${cls}>${codeLines.join('\n')}</code></pre>`);
      continue;
    }

    // Headings
    const h = line.match(/^(#{1,6})\s+(.+)$/);
    if (h) {
      closeList();
      closeTable();
      out.push(`<h${h[1].length}>${processInline(h[2])}</h${h[1].length}>`);
      continue;
    }

    // Horizontal rule
    if (/^(-{3,}|\*{3,}|_{3,})\s*$/.test(line)) {
      closeList();
      closeTable();
      out.push('<hr />');
      continue;
    }

    // Blockquote
    const bq = line.match(/^>\s?(.*)$/);
    if (bq) {
      closeList();
      closeTable();
      out.push(`<blockquote>${processInline(bq[1])}</blockquote>`);
      continue;
    }

    // Table — header row separated by | with --- separator row
    if (/\|/.test(line) && i + 1 < lines.length && /^\s*\|?[\s:-]+\|[\s:-|]+\|?\s*$/.test(lines[i + 1])) {
      closeList();
      closeTable();
      const headers = line.split('|').map(c => c.trim()).filter((_, idx, arr) => {
        // keep empty cells but drop leading/trailing empty from edge pipes
        if (idx === 0 && arr[0] === '') return false;
        if (idx === arr.length - 1 && arr[arr.length - 1] === '') return false;
        return true;
      });
      out.push('<table><thead><tr>');
      headers.forEach(hdr => out.push(`<th>${processInline(hdr)}</th>`));
      out.push('</tr></thead><tbody>');
      inTable = true;
      i++; // skip separator
      continue;
    }
    if (inTable && /\|/.test(line) && line.trim() !== '') {
      const cells = line.split('|').map(c => c.trim()).filter((_, idx, arr) => {
        if (idx === 0 && arr[0] === '') return false;
        if (idx === arr.length - 1 && arr[arr.length - 1] === '') return false;
        return true;
      });
      out.push('<tr>');
      cells.forEach(c => out.push(`<td>${processInline(c)}</td>`));
      out.push('</tr>');
      continue;
    }
    if (inTable) { closeTable(); }

    // Ordered list
    const ol = line.match(/^\s*\d+\.\s+(.+)$/);
    if (ol) {
      if (inList !== 'ol') { closeList(); out.push('<ol>'); inList = 'ol'; }
      out.push(`<li>${processInline(ol[1])}</li>`);
      continue;
    }

    // Unordered list
    const ul = line.match(/^\s*[-*+]\s+(.+)$/);
    if (ul) {
      if (inList !== 'ul') { closeList(); out.push('<ul>'); inList = 'ul'; }
      out.push(`<li>${processInline(ul[1])}</li>`);
      continue;
    }

    // Blank line
    if (line.trim() === '') {
      closeList();
      continue;
    }

    // Paragraph
    closeList();
    out.push(`<p>${processInline(line)}</p>`);
  }

  closeList();
  closeTable();
  return out.join('\n');
}

/* ── CSS for print/PDF and on-screen preview ── */

const PRINT_CSS = `
@page { margin: 2cm; }
* { box-sizing: border-box; }
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  line-height: 1.7;
  color: #1a1a1a;
  max-width: 780px;
  margin: 0 auto;
  padding: 24px;
  font-size: 14px;
}
h1 { font-size: 2em; margin-top: 0; border-bottom: 2px solid #e0e0e0; padding-bottom: 0.3em; }
h2 { font-size: 1.5em; border-bottom: 1px solid #e0e0e0; padding-bottom: 0.3em; }
h3 { font-size: 1.25em; }
h4 { font-size: 1.1em; }
h5 { font-size: 1em; }
h6 { font-size: 0.9em; color: #666; }
p { margin: 0.6em 0; }
a { color: #0366d6; text-decoration: none; }
a:hover { text-decoration: underline; }
img { max-width: 100%; height: auto; }
ul, ol { padding-left: 1.8em; margin: 0.5em 0; }
li { margin: 0.25em 0; }
code {
  font-family: 'SF Mono', 'Fira Code', 'Consolas', 'Courier New', monospace;
  background: #f5f5f5;
  padding: 0.15em 0.35em;
  border-radius: 3px;
  font-size: 0.88em;
}
pre {
  background: #f5f5f5;
  padding: 14px 16px;
  border-radius: 6px;
  overflow-x: auto;
  border: 1px solid #e0e0e0;
  line-height: 1.5;
}
pre code {
  background: none;
  padding: 0;
  font-size: 0.85em;
}
blockquote {
  margin: 0.8em 0;
  padding: 0.5em 1em;
  border-left: 4px solid #0366d6;
  background: #f8f9fa;
  color: #555;
}
hr { border: none; border-top: 2px solid #e0e0e0; margin: 1.5em 0; }
table {
  border-collapse: collapse;
  width: 100%;
  margin: 1em 0;
  font-size: 0.92em;
}
th, td {
  border: 1px solid #d0d0d0;
  padding: 8px 12px;
  text-align: left;
}
th { background: #f0f0f0; font-weight: 600; }
tr:nth-child(even) { background: #fafafa; }
strong { font-weight: 700; }
em { font-style: italic; }
del { text-decoration: line-through; }
`;

/* ── Component ── */

const SAMPLE_MD = `# Sample Document

## Introduction
This is a **Markdown** document that demonstrates the converter.

## Features
- Headings (H1–H6)
- **Bold** and *italic* text
- \`inline code\` and code blocks
- [Hyperlinks](https://example.com)
- Ordered and unordered lists

### Code Example
\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

### Task List
1. First item
2. Second item
3. Third item

> This is a blockquote — great for callouts and notes.

---

| Feature    | Supported |
|------------|-----------|
| Headings   | ✅        |
| Tables     | ✅        |
| Code blocks| ✅        |

Replace this text with your own Markdown, then click **Download PDF**.
`;

export function MarkdownToPdfTool() {
  const { locale } = useLocale();
  const [input, setInput] = useState(SAMPLE_MD);

  const html = useMemo(() => markdownToHtml(input), [input]);

  const handlePrint = useCallback(() => {
    const win = window.open('', '_blank', 'width=900,height=700');
    if (!win) {
      alert(locale === 'zh'
        ? '请允许弹出窗口以生成 PDF'
        : 'Please allow pop-ups to generate the PDF');
      return;
    }
    win.document.write(`<!DOCTYPE html>
<html lang="${locale === 'zh' ? 'zh-CN' : 'en'}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(locale === 'zh' ? 'Markdown 转 PDF' : 'Markdown to PDF')}</title>
<style>${PRINT_CSS}</style>
</head>
<body>
${html}
</body>
</html>`);
    win.document.close();
    // Wait for content/images to render before printing
    win.onload = () => {
      setTimeout(() => {
        win.focus();
        win.print();
      }, 300);
    };
    // Fallback in case onload already fired or doesn't fire
    setTimeout(() => {
      try {
        win.focus();
        win.print();
      } catch { /* already printing */ }
    }, 800);
  }, [html, locale]);

  const handleDownloadHtml = useCallback(() => {
    const fullHtml = `<!DOCTYPE html>
<html lang="${locale === 'zh' ? 'zh-CN' : 'en'}">
<head>
<meta charset="UTF-8">
<title>${escapeHtml(locale === 'zh' ? 'Markdown 文档' : 'Markdown Document')}</title>
<style>${PRINT_CSS}</style>
</head>
<body>
${html}
</body>
</html>`;
    const blob = new Blob([fullHtml], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'markdown-document.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [html, locale]);

  const isZh = locale === 'zh';

  const labels = {
    title: isZh ? 'Markdown 转 PDF 转换器' : 'Markdown to PDF Converter',
    subtitle: isZh
      ? '将 Markdown 转换为精美排版的 PDF 文档。支持标题、列表、代码块、表格和图片。所有渲染均在浏览器中完成。'
      : 'Convert Markdown to beautifully formatted PDF documents. Supports headings, lists, code blocks, tables, and images. All rendering happens in your browser.',
    inputLabel: isZh ? 'Markdown 输入' : 'Markdown Input',
    previewLabel: isZh ? '实时预览' : 'Live Preview',
    downloadPdf: isZh ? '📄 下载 PDF' : '📄 Download PDF',
    downloadHtml: isZh ? '💾 下载 HTML' : '💾 Download HTML',
    clear: isZh ? '清空' : 'Clear',
    sample: isZh ? '加载示例' : 'Load Sample',
    copy: isZh ? '复制' : 'Copy',
    copied: isZh ? '已复制!' : 'Copied!',
    printHint: isZh
      ? '点击"下载 PDF"后，在打印对话框的目标中选择"另存为 PDF"。'
      : 'After clicking "Download PDF", choose "Save as PDF" as the destination in the print dialog.',
    placeholder: '# Hello World\n\nStart typing **Markdown** here...',
  };

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(input);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">{labels.title}</h2>
      <p className="text-sm text-muted-foreground">{labels.subtitle}</p>

      <div className="flex flex-wrap gap-2">
        <Button onClick={handlePrint}>{labels.downloadPdf}</Button>
        <Button variant="outline" onClick={handleDownloadHtml}>{labels.downloadHtml}</Button>
        <Button variant="outline" onClick={() => setInput(SAMPLE_MD)}>{labels.sample}</Button>
        <Button variant="outline" onClick={handleCopy}>{copied ? labels.copied : labels.copy}</Button>
        <Button variant="ghost" onClick={() => setInput('')}>{labels.clear}</Button>
      </div>

      <p className="text-xs text-muted-foreground bg-muted/50 rounded-md px-3 py-2">
        💡 {labels.printHint}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">{labels.inputLabel}</label>
          <textarea
            className="w-full h-[600px] p-4 border rounded-md resize-y font-mono text-sm leading-relaxed bg-background"
            placeholder={labels.placeholder}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            spellCheck={false}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">{labels.previewLabel}</label>
          <div
            className="w-full h-[600px] p-6 border rounded-md overflow-y-auto bg-white prose prose-sm max-w-none shadow-inner"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </div>
  );
}
