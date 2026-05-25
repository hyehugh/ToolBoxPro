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

  const jsonToYaml = (obj: unknown, indent = 0): string => {
    const pad = "  ".repeat(indent);
    if (obj === null || obj === undefined) return "null";
    if (typeof obj === "string") {
      if (obj.includes(":") || obj.includes("#") || obj.includes("\n") || obj === "") {
        return `"${obj.replace(/"/g, '\\"')}"`;
      }
      return obj;
    }
    if (typeof obj === "number" || typeof obj === "boolean") return String(obj);
    if (Array.isArray(obj)) {
      if (obj.length === 0) return "[]";
      return obj
        .map((item) => `${pad}- ${jsonToYaml(item, indent + 1).trimStart()}`)
        .join("\n");
    }
    if (typeof obj === "object") {
      const keys = Object.keys(obj as Record<string, unknown>);
      if (keys.length === 0) return "{}";
      return keys
        .map((key) => `${pad}${key}: ${jsonToYaml((obj as Record<string, unknown>)[key], indent + 1).trimStart()}`)
        .join("\n");
    }
    return String(obj);
  };

  const yamlToJson = (yaml: string): string => {
    const lines = yaml.split("\n");
    const result: Record<string, unknown> = {};
    const path: (string | number)[] = [];
    const stack: unknown[] = [result];

    for (const line of lines) {
      if (line.trim() === "" || line.trim().startsWith("#")) continue;
      const indent = line.search(/\S/);
      const content = line.trim();

      while (path.length > 0 && indent <= (path[path.length - 1] as unknown as { indent: number }).indent) {
        path.pop();
        stack.pop();
      }

      if (content.startsWith("- ")) {
        const val = content.slice(2).trim();
        const parent = stack[stack.length - 1] as unknown[];
        const parsed = isNaN(Number(val)) ? (val === "null" ? null : val === "true" ? true : val === "false" ? false : val) : Number(val);
        parent.push(parsed);
      } else if (content.includes(":")) {
        const colonIdx = content.indexOf(":");
        const key = content.slice(0, colonIdx).trim();
        let val: unknown = content.slice(colonIdx + 1).trim();

        if (val === "") {
          const newObj: Record<string, unknown> = {};
          const parent = stack[stack.length - 1] as Record<string, unknown>;
          parent[key] = newObj;
          stack.push(newObj);
          path.push({ indent, key } as unknown as never);
        } else {
          val = isNaN(Number(val)) ? (val === "null" ? null : val === "true" ? true : val === "false" ? false : val) : Number(val);
          const parent = stack[stack.length - 1] as Record<string, unknown>;
          parent[key] = val;
        }
      }
    }

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
