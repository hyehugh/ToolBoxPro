"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

const LORUM = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos.",
  "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam.",
  "Eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem ut enim ad minima veniam.",
  "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
];

export function LoremIpsumGeneratorTool() {
  const { t } = useLocale();
  const [type, setType] = useState<"paragraphs" | "words" | "sentences">("paragraphs");
  const [count, setCount] = useState(3);
  const [output, setOutput] = useState("");

  const generate = () => {
    let result = "";
    if (type === "paragraphs") {
      for (let i = 0; i < count; i++) {
        const shuffled = [...LORUM].sort(() => Math.random() - 0.5);
        result += shuffled.slice(0, 3 + Math.floor(Math.random() * 3)).join(" ") + "\n\n";
      }
    } else if (type === "sentences") {
      for (let i = 0; i < count; i++) {
        result += LORUM[i % LORUM.length] + " ";
      }
    } else {
      const all = LORUM.join(" ").split(" ");
      for (let i = 0; i < count; i++) {
        result += all[i % all.length] + " ";
      }
    }
    setOutput(result.trim());
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex gap-1 bg-secondary rounded-lg p-1">
          {(["paragraphs", "sentences", "words"] as const).map((tp) => (
            <button
              key={tp}
              onClick={() => setType(tp)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                type === tp ? "bg-background shadow-sm" : "text-muted-foreground"
              }`}
            >
              {tp === "paragraphs" ? t('toolCommon.loremIpsum.paragraphs') : tp === "sentences" ? t('toolCommon.loremIpsum.sentences') : t('toolCommon.loremIpsum.words')}
            </button>
          ))}
        </div>
        <label className="text-sm">
          {type === "paragraphs" ? `${t('toolCommon.loremIpsum.paragraphs')}: ${count}` : type === "sentences" ? `${t('toolCommon.loremIpsum.sentences')}: ${count}` : `${t('toolCommon.loremIpsum.words')}: ${count}`}
        </label>
        <input type="range" min={1} max={20} value={count} onChange={(e) => setCount(+e.target.value)} className="w-32" />
      </div>
      <Button onClick={generate}>{t('toolCommon.loremIpsum.generate')}</Button>
      {output && (
        <div className="space-y-2">
          <textarea readOnly value={output} className="w-full h-48 p-3 rounded-md border border-input bg-muted text-sm" />
          <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(output)}>{t('common.copy')}</Button>
        </div>
      )}
    </div>
  );
}
