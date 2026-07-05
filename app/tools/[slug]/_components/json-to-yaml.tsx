"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

export function JsonToYamlTool() {
  const { t } = useLocale();
  const [jsonInput, setJsonInput] = useState("");
  const [yamlInput, setYamlInput] = useState("");
  const [jsonOutput, setJsonOutput] = useState("");
  const [yamlOutput, setYamlOutput] = useState("");
  const [mode, setMode] = useState<"toYaml" | "toJson">("toYaml");

  // Format a scalar value for YAML output (strings may need quoting).
  const formatScalar = (v: unknown): string => {
    if (v === null || v === undefined) return "null";
    if (typeof v === "boolean") return v ? "true" : "false";
    if (typeof v === "number") return String(v);
    // string
    const s = v as string;
    if (s === "" || /[:#\-?,[\]{}&*!|>'"%@`]/.test(s) || /^\s|\s$/.test(s) || s === "null" || s === "true" || s === "false" || !isNaN(Number(s))) {
      return `"${s.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
    }
    return s;
  };

  const jsonToYaml = (obj: unknown, indent = 0): string => {
    const pad = "  ".repeat(indent);

    if (obj === null || obj === undefined) return "null";
    if (typeof obj !== "object") return formatScalar(obj);

    if (Array.isArray(obj)) {
      if (obj.length === 0) return "[]";
      return obj
        .map((item) => {
          if (item !== null && typeof item === "object") {
            // Nested complex value: put "- " then first key on same line, rest indented.
            const block = jsonToYaml(item, indent + 1);
            // The first line of `block` already has indent+1 padding; we replace it
            // with `- ` + its content (stripping the leading pad) so the dash stays
            // aligned with the parent indent.
            const lines = block.split("\n");
            const firstLineContent = lines[0].replace(/^\s+/, "");
            const restLines = lines.slice(1);
            return `${pad}- ${firstLineContent}${restLines.length ? "\n" + restLines.join("\n") : ""}`;
          }
          return `${pad}- ${formatScalar(item)}`;
        })
        .join("\n");
    }

    const entries = Object.entries(obj as Record<string, unknown>);
    if (entries.length === 0) return "{}";
    return entries
      .map(([key, value]) => {
        if (value !== null && typeof value === "object") {
          const block = jsonToYaml(value, indent + 1);
          return `${pad}${key}:\n${block}`;
        }
        return `${pad}${key}: ${formatScalar(value)}`;
      })
      .join("\n");
  };

  // Minimal YAML parser supporting nested maps, arrays, scalars, and inline
  // quoted strings — enough to round-trip the YAML produced above.
  const parseScalar = (raw: string): unknown => {
    const v = raw.trim();
    if (v === "") return null;
    if (v === "null" || v === "~") return null;
    if (v === "true") return true;
    if (v === "false") return false;
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
      const inner = v.slice(1, -1);
      return v.startsWith('"') ? inner.replace(/\\"/g, '"').replace(/\\\\/g, "\\") : inner;
    }
    const num = Number(v);
    return isNaN(num) ? v : num;
  };

  const yamlToJson = (yaml: string): string => {
    const lines = yaml.split("\n").filter((l) => l.trim() !== "" && !l.trim().startsWith("#"));
    if (lines.length === 0) return "{}";

    const peekIndent = (i: number) => lines[i].search(/\S/);

    // If the first non-blank line is an array item, the root is an array; otherwise an object.
    const build = (startIdx: number, indent: number): { value: unknown; next: number } => {
      let i = startIdx;
      if (lines[i].trim().startsWith("- ")) {
        const arr: unknown[] = [];
        while (i < lines.length && peekIndent(i) === indent && lines[i].trim().startsWith("- ")) {
          const content = lines[i].trim().slice(2);
          const childIndent = lines[i].indexOf("-") + 1;
          if (content.includes(":") && !content.startsWith('"') && !content.startsWith("'")) {
            // "- key: value" or "- key:" with a nested block
            const colonIdx = content.indexOf(":");
            const key = content.slice(0, colonIdx).trim();
            const rest = content.slice(colonIdx + 1).trim();
            const obj: Record<string, unknown> = {};
            if (rest === "") {
              const child = build(i + 1, childIndent + 1 > peekIndent(i + 1) ? peekIndent(i + 1) : childIndent + 1);
              obj[key] = child.value;
              i = child.next;
            } else {
              obj[key] = parseScalar(rest);
              i += 1;
            }
            // Continue consuming further keys at childIndent+1 indent belonging to the same array item
            while (i < lines.length && peekIndent(i) > indent && !lines[i].trim().startsWith("- ")) {
              const line2 = lines[i].trim();
              const colonIdx2 = line2.indexOf(":");
              if (colonIdx2 === -1) break;
              const k2 = line2.slice(0, colonIdx2).trim();
              const rest2 = line2.slice(colonIdx2 + 1).trim();
              if (rest2 === "") {
                const child = build(i + 1, peekIndent(i + 1));
                obj[k2] = child.value;
                i = child.next;
              } else {
                obj[k2] = parseScalar(rest2);
                i += 1;
              }
            }
            arr.push(obj);
          } else {
            arr.push(parseScalar(content));
            i += 1;
          }
        }
        return { value: arr, next: i };
      }

      // Object block
      const obj: Record<string, unknown> = {};
      while (i < lines.length && peekIndent(i) === indent && !lines[i].trim().startsWith("- ")) {
        const line = lines[i].trim();
        const colonIdx = line.indexOf(":");
        if (colonIdx === -1) {
          i += 1;
          continue;
        }
        const key = line.slice(0, colonIdx).trim();
        const rest = line.slice(colonIdx + 1).trim();
        if (rest === "") {
          // nested block at deeper indent
          if (i + 1 < lines.length && peekIndent(i + 1) > indent) {
            const child = build(i + 1, peekIndent(i + 1));
            obj[key] = child.value;
            i = child.next;
          } else {
            obj[key] = null;
            i += 1;
          }
        } else {
          obj[key] = parseScalar(rest);
          i += 1;
        }
      }
      return { value: obj, next: i };
    };

    const result = build(0, peekIndent(0)).value;
    return JSON.stringify(result, null, 2);
  };

  const convertToYaml = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      setYamlOutput(jsonToYaml(parsed));
      setMode("toYaml");
    } catch {
      setYamlOutput(t('toolCommon.jsonToYaml.invalidJson'));
    }
  };

  const convertToJson = () => {
    try {
      setJsonOutput(yamlToJson(yamlInput));
      setMode("toJson");
    } catch {
      setJsonOutput(t('toolCommon.jsonToYaml.invalidYaml'));
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">{t('toolCommon.jsonToYaml.jsonInput')}</label>
          <textarea
            className="w-full h-40 p-3 border rounded font-mono text-sm"
            placeholder='{"name": "John", "age": 30}'
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
          />
          <Button className="mt-2" onClick={convertToYaml}>
            {t('common.convert')} YAML
          </Button>
          {mode === "toYaml" && yamlOutput && (
            <div className="mt-2">
              <label className="block text-sm font-medium mb-1">{t('toolCommon.jsonToYaml.yamlOutput')}</label>
              <textarea
                className="w-full h-40 p-3 border rounded font-mono text-sm"
                value={yamlOutput}
                readOnly
              />
            </div>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">{t('toolCommon.jsonToYaml.yamlInput')}</label>
          <textarea
            className="w-full h-40 p-3 border rounded font-mono text-sm"
            placeholder="name: John\nage: 30"
            value={yamlInput}
            onChange={(e) => setYamlInput(e.target.value)}
          />
          <Button className="mt-2" onClick={convertToJson}>
            {t('common.convert')} JSON
          </Button>
          {mode === "toJson" && jsonOutput && (
            <div className="mt-2">
              <label className="block text-sm font-medium mb-1">{t('toolCommon.jsonToYaml.jsonOutput')}</label>
              <textarea
                className="w-full h-40 p-3 border rounded font-mono text-sm"
                value={jsonOutput}
                readOnly
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
