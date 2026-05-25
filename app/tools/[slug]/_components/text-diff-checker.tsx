"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

export function TextDiffCheckerTool() {
  const { t } = useLocale();
  const [textA, setTextA] = useState("");
  const [textB, setTextB] = useState("");

  const diff = useMemo(() => {
    const linesA = textA.split("\n");
    const linesB = textB.split("\n");
    const maxLen = Math.max(linesA.length, linesB.length);
    const result: { type: "same" | "added" | "removed"; content: string }[] = [];

    for (let i = 0; i < maxLen; i++) {
      if (i >= linesA.length) {
        result.push({ type: "added", content: linesB[i] });
      } else if (i >= linesB.length) {
        result.push({ type: "removed", content: linesA[i] });
      } else if (linesA[i] === linesB[i]) {
        result.push({ type: "same", content: linesA[i] });
      } else {
        result.push({ type: "removed", content: linesA[i] });
        result.push({ type: "added", content: linesB[i] });
      }
    }
    return result;
  }, [textA, textB]);

  const stats = useMemo(() => {
    const added = diff.filter((d) => d.type === "added").length;
    const removed = diff.filter((d) => d.type === "removed").length;
    return { added, removed, same: diff.filter((d) => d.type === "same").length };
  }, [diff]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-muted-foreground mb-1">{t('toolCommon.textDiff.original')}</p>
          <textarea
            placeholder={t('common.text')}
            value={textA}
            onChange={(e) => setTextA(e.target.value)}
            className="w-full h-40 p-3 rounded-md border border-input bg-background text-sm font-mono focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-1">{t('toolCommon.textDiff.modified')}</p>
          <textarea
            placeholder={t('common.text')}
            value={textB}
            onChange={(e) => setTextB(e.target.value)}
            className="w-full h-40 p-3 rounded-md border border-input bg-background text-sm font-mono focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      {textA && textB && (
        <>
          <div className="flex gap-4 text-sm">
            <span className="text-green-500">+{stats.added} {t('toolCommon.textDiff.additions')}</span>
            <span className="text-red-500">-{stats.removed} {t('toolCommon.textDiff.deletions')}</span>
            <span className="text-muted-foreground">{stats.same} unchanged</span>
          </div>
          <div className="border rounded-md max-h-60 overflow-y-auto font-mono text-sm">
            {diff.map((line, i) => (
              <div
                key={i}
                className={`px-3 py-1 border-b last:border-b-0 ${
                  line.type === "added" ? "bg-green-500/10 text-green-700 dark:text-green-400" :
                  line.type === "removed" ? "bg-red-500/10 text-red-700 dark:text-red-400" : ""
                }`}
              >
                {line.type === "added" ? "+ " : line.type === "removed" ? "- " : "  "}
                {line.content || " "}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
