'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLocale } from "@/lib/i18n/context";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function markdownToHtml(md: string): string {
  const lines = md.split('\n');
  const htmlLines: string[] = [];
  let inList = false;
  let listType: 'ul' | 'ol' | null = null;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Headers
    const headerMatch = line.match(/^(#{1,6})\s+(.+)$/);
    if (headerMatch) {
      if (inList) { htmlLines.push(`</${listType}>`); inList = false; listType = null; }
      const level = headerMatch[1].length;
      const content = processInline(headerMatch[2]);
      htmlLines.push(`<h${level}>${content}</h${level}>`);
      continue;
    }

    // Horizontal rule
    if (/^(-{3,}|\*{3,}|_{3,})\s*$/.test(line)) {
      if (inList) { htmlLines.push(`</${listType}>`); inList = false; listType = null; }
      htmlLines.push('<hr />');
      continue;
    }

    // Ordered list
    const olMatch = line.match(/^\s*\d+\.\s+(.+)$/);
    if (olMatch) {
      if (!inList) { htmlLines.push('<ol>'); inList = true; listType = 'ol'; }
      htmlLines.push(`<li>${processInline(olMatch[1])}</li>`);
      continue;
    }

    // Unordered list
    const ulMatch = line.match(/^\s*[-*+]\s+(.+)$/);
    if (ulMatch) {
      if (!inList) { htmlLines.push('<ul>'); inList = true; listType = 'ul'; }
      htmlLines.push(`<li>${processInline(ulMatch[1])}</li>`);
      continue;
    }

    // Close list if we were in one and now have a non-list line
    if (inList) {
      if (line.trim() === '') {
        htmlLines.push(`</${listType}>`);
        inList = false;
        listType = null;
        htmlLines.push('');
        continue;
      }
    }

    // Code block (```)
    if (/^```/.test(line)) {
      if (inList) { htmlLines.push(`</${listType}>`); inList = false; listType = null; }
      const lang = line.slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !/^```/.test(lines[i])) {
        codeLines.push(escapeHtml(lines[i]));
        i++;
      }
      const escapedCode = codeLines.join('\n');
      if (lang) {
        htmlLines.push(`<pre><code class="language-${escapeHtml(lang)}">${escapedCode}</code></pre>`);
      } else {
        htmlLines.push(`<pre><code>${escapedCode}</code></pre>`);
      }
      continue;
    }

    // Inline code (single backtick — handle lines that are entirely code)
    const inlineCodeMatch = line.match(/^`(.+)`$/);
    if (inlineCodeMatch && !line.includes('``')) {
      if (inList) { htmlLines.push(`</${listType}>`); inList = false; listType = null; }
      htmlLines.push(`<code>${escapeHtml(inlineCodeMatch[1])}</code>`);
      continue;
    }

    // Blockquote
    const bqMatch = line.match(/^>\s?(.*)$/);
    if (bqMatch) {
      if (inList) { htmlLines.push(`</${listType}>`); inList = false; listType = null; }
      htmlLines.push(`<blockquote>${processInline(bqMatch[1])}</blockquote>`);
      continue;
    }

    // Empty line
    if (line.trim() === '') {
      htmlLines.push('');
      continue;
    }

    // Paragraph
    if (inList) { htmlLines.push(`</${listType}>`); inList = false; listType = null; }
    htmlLines.push(`<p>${processInline(line)}</p>`);
  }

  // Close any open list
  if (inList) {
    htmlLines.push(`</${listType}>`);
  }

  return htmlLines.join('\n');
}

function processInline(text: string): string {
  let result = escapeHtml(text);

  // Bold: **text** or __text__
  result = result.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  result = result.replace(/__(.+?)__/g, '<strong>$1</strong>');

  // Italic: *text* or _text_
  result = result.replace(/\*(.+?)\*/g, '<em>$1</em>');
  result = result.replace(/_([^_]+?)_/g, '<em>$1</em>');

  // Inline code: `text`
  result = result.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Links: [text](url) — only allow safe protocols
  result = result.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (_, text, url) => {
      const safeUrl = sanitizeUrl(url);
      return `<a href="${safeUrl}" target="_blank" rel="noopener noreferrer">${text}</a>`;
    }
  );

  // Images: ![alt](url) — only allow safe protocols
  result = result.replace(
    /!\[([^\]]*)\]\(([^)]+)\)/g,
    (_, alt, url) => {
      const safeUrl = sanitizeUrl(url);
      return `<img src="${safeUrl}" alt="${alt}" />`;
    }
  );

  return result;
}

function sanitizeUrl(url: string): string {
  const allowedProtocols = ['http:', 'https:', 'mailto:', '#'];
  try {
    const parsed = new URL(url, 'https://safe.local');
    if (!allowedProtocols.includes(parsed.protocol)) {
      return '#';
    }
    return url;
  } catch {
    // Relative URLs or invalid URLs — allow through (# is handled above)
    if (url.startsWith('/') || url.startsWith('#')) return url;
    return '#';
  }
}

export function MarkdownToHtmlTool() {
  const { t } = useLocale();
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleConvert = () => {
    setOutput(markdownToHtml(input));
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">{t('toolCommon.markdown.title')}</h2>
      <p className="text-sm text-muted-foreground">
        {t('toolCommon.markdown.description')}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">{t('toolCommon.markdown.input')}</label>
          <textarea
            className="w-full h-80 p-3 border rounded-md resize-y font-mono text-sm"
            placeholder={`# Hello World\n\nThis is **bold** and *italic*.\n\n- List item 1\n- List item 2\n\n\`inline code\`\n\n[A link](https://example.com)`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">{t('toolCommon.markdown.preview')}</label>
          <div
            className="w-full h-80 p-3 border rounded-md overflow-y-auto bg-white prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: output }}
          />
        </div>
      </div>
      <Button onClick={handleConvert}>{t('toolCommon.markdown.convert')}</Button>
      {output && (
        <div className="mt-4">
          <label className="block text-sm font-medium mb-1">{t('toolCommon.markdown.htmlSource')}:</label>
          <textarea
            className="w-full h-40 p-3 border rounded-md resize-y font-mono text-sm"
            value={output}
            readOnly
          />
          <Button
            variant="outline"
            className="mt-2"
            onClick={() => navigator.clipboard.writeText(output)}
          >
            {t('common.copy')}
          </Button>
        </div>
      )}
    </div>
  );
}
