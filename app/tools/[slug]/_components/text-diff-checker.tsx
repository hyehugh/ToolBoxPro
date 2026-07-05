"use client";

import { useState, useMemo } from "react";
import { useLocale } from "@/lib/i18n/context";

export function TextDiffCheckerTool() {
  const { t } = useLocale();
  const [textA, setTextA] = useState("");
  const [textB, setTextB] = useState("");

  const diff = useMemo(() => {
    const linesA = textA.split("\n");
    const linesB = textB.split("\n");
    const n = linesA.length;
    const m = linesB.length;

    // Build the LCS length table. dp[i][j] = LCS length of linesA[0..i-1]
    // and linesB[0..j-1]. O(n*m) space; fine for typical text input sizes.
    const dp: number[][] = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= m; j++) {
        if (linesA[i - 1] === linesB[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }

    // Backtrack to produce the diff sequence. Inserting a single line in the
    // middle no longer marks every subsequent line as changed.
    const result: { type: "same" | "added" | "removed"; content: string }[] = [];
    let i = n, j = m;
    while (i > 0 || j > 0) {
      if (i > 0 && j > 0 && linesA[i - 1] === linesB[j - 1]) {
        result.push({ type: "same", content: linesA[i - 1] });
        i--; j--;
      } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
        result.push({ type: "added", content: linesB[j - 1] });
        j--;
      } else {
        result.push({ type: "removed", content: linesA[i - 1] });
        i--;
      }
    }
    result.reverse();
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
