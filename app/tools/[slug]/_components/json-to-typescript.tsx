"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

export function JsonToTypescriptTool() {
  const { t } = useLocale();
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const generateInterface = () => {
    setError("");
    setOutput("");

    if (!input.trim()) {
      setError(t('toolCommon.jsonToTs.pasteJson'));
      return;
    }

    let parsed: unknown;
    try {
      parsed = JSON.parse(input);
    } catch {
      setError(t('toolCommon.jsonToTs.invalidJson'));
      return;
    }

    try {
      const result = convertToInterface(parsed, t('toolCommon.jsonToTs.rootName'));
      setOutput(result);
    } catch (e: any) {
      setError(e.message || t('toolCommon.jsonToTs.failed'));
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
          {t('toolCommon.jsonToTs.pasteJson')}
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`{\n  "name": "John",\n  "age": 30,\n  "active": true\n}`}
          className="w-full h-48 p-3 border rounded-lg bg-background text-sm font-mono resize-y"
        />
      </div>

      <Button onClick={generateInterface} className="w-full" disabled={!input.trim()}>
        {t('toolCommon.jsonToTs.convert')}
      </Button>

      {error && (
        <p className="text-sm text-red-500 bg-red-50 dark:bg-red-950/20 p-2 rounded">
          {error}
        </p>
      )}

      {output && (
        <div className="space-y-2">
          <label className="text-sm text-muted-foreground block">
            {t('toolCommon.jsonToTs.typeScriptInterface')}
          </label>
          <pre className="bg-muted p-3 rounded-lg text-sm overflow-x-auto max-h-64 overflow-y-auto">
            <code>{output}</code>
          </pre>
          <Button onClick={handleCopy} className="w-full">
            {copied ? t('common.copied') : t('toolCommon.jsonToTs.copyInterface')}
          </Button>
        </div>
      )}
    </div>
  );
}

function toPascalCase(str: string): string {
  return str
    .replace(/[^a-zA-Z0-9_]/g, "_")
    .replace(/(?:^|_)(\w)/g, (_, c) => c.toUpperCase())
    .replace(/^(\d)/, "_$1");
}

function getTsType(value: unknown, key: string): string {
  if (value === null) return "any";
  if (typeof value === "string") return "string";
  if (typeof value === "number") {
    return Number.isInteger(value) ? "number" : "number";
  }
  if (typeof value === "boolean") return "boolean";
  if (Array.isArray(value)) {
    if (value.length === 0) return "any[]";
    const elementTypes = [...new Set(value.map((v) => getTsType(v, key)))];
    if (elementTypes.length === 1) return `${elementTypes[0]}[]`;
    return `(${elementTypes.join(" | ")})[]`;
  }
  if (typeof value === "object") {
    return toPascalCase(key);
  }
  return "any";
}

function convertToInterface(obj: unknown, name: string, depth = 0): string {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    return `type ${name} = ${getTsType(obj, name)};`;
  }

  const childIndent = "  ".repeat(depth + 1);
  const closingIndent = "  ".repeat(depth);

  const entries = Object.entries(obj as Record<string, unknown>);
  const lines: string[] = [];
  const subInterfaces: string[] = [];

  lines.push(`export interface ${name} {`);

  for (const [key, value] of entries) {
    const safeKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key)
      ? key
      : `"${key}"`;
    const tsType = getTsType(value, key);

    if (
      typeof value === "object" &&
      value !== null &&
      !Array.isArray(value)
    ) {
      const subName = toPascalCase(key);
      subInterfaces.push(convertToInterface(value, subName, depth + 1));
      lines.push(`${childIndent}${safeKey}: ${subName};`);
    } else if (Array.isArray(value) && value.length > 0) {
      const first = value[0];
      if (typeof first === "object" && first !== null) {
        const arrName = toPascalCase(key);
        const elemName = arrName.endsWith("s")
          ? arrName.slice(0, -1)
          : arrName + "Item";
        subInterfaces.push(convertToInterface(first, elemName, depth + 1));
        lines.push(`${childIndent}${safeKey}: ${elemName}[];`);
      } else {
        lines.push(`${childIndent}${safeKey}: ${tsType};`);
      }
    } else {
      lines.push(`${childIndent}${safeKey}: ${tsType};`);
    }
  }

  lines.push(`${closingIndent}}`);

  if (depth === 0 && subInterfaces.length > 0) {
    lines.push("");
    lines.push(...subInterfaces);
  }

  return lines.join("\n");
}
