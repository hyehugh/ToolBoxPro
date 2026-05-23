"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function HtmlToJsxTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const convert = () => {
    setError("");
    setOutput("");

    if (!input.trim()) {
      setError("Please enter some HTML first.");
      return;
    }

    try {
      const jsx = convertHtmlToJsx(input);
      setOutput(jsx);
    } catch (e: any) {
      setError(e.message || "Conversion failed.");
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = output;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm text-muted-foreground block mb-1">
          Paste HTML here
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`<div class="container">\n  <h1>Hello World</h1>\n  <p>This is HTML</p>\n</div>`}
          className="w-full h-48 p-3 border rounded-lg bg-background text-sm font-mono resize-y"
        />
      </div>

      <Button onClick={convert} className="w-full" disabled={!input.trim()}>
        Convert to JSX
      </Button>

      {error && (
        <p className="text-sm text-red-500 bg-red-50 dark:bg-red-950/20 p-2 rounded">
          {error}
        </p>
      )}

      {output && (
        <div className="space-y-2">
          <label className="text-sm text-muted-foreground block">JSX</label>
          <pre className="bg-muted p-3 rounded-lg text-sm overflow-x-auto max-h-64 overflow-y-auto">
            <code>{output}</code>
          </pre>
          <Button onClick={handleCopy} className="w-full">
            {copied ? "Copied!" : "Copy JSX"}
          </Button>
        </div>
      )}
    </div>
  );
}

// Simple HTML to JSX converter using regex/string manipulation
function convertHtmlToJsx(html: string): string {
  // Self-closing tags
  const selfClosing = new Set([
    "area", "base", "br", "col", "embed", "hr", "img", "input",
    "link", "meta", "param", "source", "track", "wbr",
  ]);

  // Attributes that need renaming
  const attrMap: Record<string, string> = {
    class: "className",
    for: "htmlFor",
    autofocus: "autoFocus",
    autocomplete: "autoComplete",
    autoplay: "autoPlay",
    charset: "charSet",
    contenteditable: "contentEditable",
    crossorigin: "crossOrigin",
    datetime: "dateTime",
    enctype: "encType",
    formaction: "formAction",
    formenctype: "formEncType",
    formmethod: "formMethod",
    formnovalidate: "formNoValidate",
    formtarget: "formTarget",
    frameborder: "frameBorder",
    inputmode: "inputMode",
    ismap: "isMap",
    maxlength: "maxLength",
    mediagroup: "mediaGroup",
    minlength: "minLength",
    novalidate: "noValidate",
    playsinline: "playsInline",
    readonly: "readOnly",
    srcdoc: "srcDoc",
    srclang: "srcLang",
    srcset: "srcSet",
    tabindex: "tabIndex",
    usemap: "useMap",
    colspan: "colSpan",
    rowspan: "rowSpan",
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    valign: "vAlign",
    allowfullscreen: "allowFullScreen",
  };

  // Boolean attributes
  const booleanAttrs = new Set([
    "disabled", "checked", "selected", "required", "readonly", "multiple",
    "autoplay", "controls", "loop", "muted", "hidden", "open", "reversed",
    "itemscope", "noshade", "nowrap", "declare", "defer", "async",
    "ismap", "novalidate", "formnovalidate", "playsinline",
  ]);

  // Remove HTML comments
  let result = html.replace(/<!--[\s\S]*?-->/g, "");

  // Convert attributes
  // Match tags and their attributes
  result = result.replace(/<(\w[\w-]*)([^>]*)>/g, (match, tagName, attrs) => {
    const isSelfClosing = selfClosing.has(tagName.toLowerCase());

    // Process attributes
    let processedAttrs = attrs.replace(
      /(\w[\w-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|(\S+)))?/g,
      (full, attrName, dqValue, sqValue, unquotedValue) => {
        const value = dqValue ?? sqValue ?? unquotedValue ?? "";
        const mapped = attrMap[attrName.toLowerCase()] || attrName;

        // Remove dashes -> camelCase for data-* and aria-* (keep as-is for simplicity)
        const finalName = mapped;

        // Boolean attributes without value
        if (booleanAttrs.has(attrName.toLowerCase()) && value === "") {
          return finalName;
        }

        // Style attribute: keep as string
        return `${finalName}="${value}"`;
      }
    );

    // Clean up double spaces
    processedAttrs = processedAttrs.replace(/\s+/g, " ").trim();

    if (isSelfClosing) {
      return processedAttrs ? `<${tagName} ${processedAttrs} />` : `<${tagName} />`;
    }

    return processedAttrs ? `<${tagName} ${processedAttrs}>` : `<${tagName}>`;
  });

  // Handle <style> tags: wrap content in JSX expression
  result = result.replace(/<style>([\s\S]*?)<\/style>/g, (_, content) => {
    return `<style>{\`${content}\`}</style>`;
  });

  // Handle inline event handlers (onclick -> onClick, etc.)
  result = result.replace(
    /\bon(\w+)\s*=\s*"([^"]*)"/gi,
    (_, event, handler) => {
      const eventName = `on${event.charAt(0).toUpperCase()}${event.slice(1)}`;
      return `${eventName}={${handler}}`;
    }
  );

  return result;
}
