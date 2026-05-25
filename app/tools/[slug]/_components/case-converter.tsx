"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n/context";

type CaseType = "upper" | "lower" | "title" | "sentence" | "camel" | "pascal" | "snake" | "kebab";

const CASES: { id: CaseType; labelKey: string }[] = [
  { id: "upper", labelKey: "toolCommon.caseConverter.uppercase" },
  { id: "lower", labelKey: "toolCommon.caseConverter.lowercase" },
  { id: "title", labelKey: "toolCommon.caseConverter.titleCase" },
  { id: "sentence", labelKey: "toolCommon.caseConverter.sentence" },
  { id: "camel", labelKey: "toolCommon.caseConverter.camelCase" },
  { id: "pascal", labelKey: "toolCommon.caseConverter.pascalCase" },
  { id: "snake", labelKey: "toolCommon.caseConverter.snakeCase" },
  { id: "kebab", labelKey: "toolCommon.caseConverter.kebabCase" },
];

export function CaseConverterTool() {
  const [input, setInput] = useState("");
  const [activeCase, setActiveCase] = useState<CaseType>("upper");
  const { t } = useLocale();

  const convert = (text: string, type: CaseType): string => {
    switch (type) {
      case "upper": return text.toUpperCase();
      case "lower": return text.toLowerCase();
      case "title": return text.replace(/\w\S*/g, (w) => w[0].toUpperCase() + w.slice(1).toLowerCase());
      case "sentence": return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
      case "camel": return text.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase());
      case "pascal": return text.toLowerCase().replace(/(^|[^a-zA-Z0-9]+)(.)/g, (_, _s, c) => c.toUpperCase());
      case "snake": return text.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "_");
      case "kebab": return text.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "-");
    }
  };

  const output = input ? convert(input, activeCase) : "";

  return (
    <div className="space-y-4">
      <textarea
        placeholder={`${t('common.input')}...`}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full h-32 p-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {CASES.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveCase(c.id)}
            className={`px-3 py-2 rounded-md text-sm font-medium border transition-colors ${
              activeCase === c.id
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card border-input hover:bg-accent"
            }`}
          >
            {t(c.labelKey)}
          </button>
        ))}
      </div>
      {output && (
        <div className="space-y-2">
          <div className="p-3 rounded-md border bg-card font-mono text-sm">{output}</div>
          <button
            onClick={() => navigator.clipboard.writeText(output)}
            className="px-3 py-1.5 rounded-md text-sm border border-input bg-background hover:bg-accent"
          >
            {t('common.copy')}
          </button>
        </div>
      )}
    </div>
  );
}
