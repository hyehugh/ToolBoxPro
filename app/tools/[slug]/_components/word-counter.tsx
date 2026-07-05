"use client";

import { useState, useMemo } from "react";
import { useLocale } from "@/lib/i18n/context";

export function WordCounterTool() {
  const { t } = useLocale();
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const trimmed = text.trim();

    // Detect CJK characters
    const cjkRegex = /[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\u30a0-\u30ff\uac00-\ud7af]/g;
    const cjkChars = (text.match(cjkRegex) || []).length;
    const hasCJK = cjkChars > 0;

    // Word count: CJK chars counted individually + Latin words
    let words = 0;
    if (trimmed) {
      if (hasCJK) {
        words += cjkChars;
        const latinWords = trimmed.replace(cjkRegex, " ").trim().split(/\s+/).filter((w) => w.length > 0);
        words += latinWords.length;
      } else {
        words = trimmed.split(/\s+/).length;
      }
    }

    const chars = text.length;
    const charsNoSpace = text.replace(/\s/g, "").length;

    // Sentence detection: both Western and CJK punctuation
    const sentences = text.split(/[.!?。！？；;]+/).filter((s) => s.trim().length > 0).length;
    const paragraphs = text.split(/\n\s*\n/).filter((s) => s.trim().length > 0).length;

    // Reading time: CJK ~300 chars/min, English ~200 words/min
    const readSpeed = hasCJK ? 300 : 200;
    const readUnits = hasCJK ? cjkChars + (words - cjkChars) : words;
    const readingTime = readUnits > 0 ? Math.max(1, Math.round(readUnits / readSpeed)) : 0;
    const speakingTime = readUnits > 0 ? Math.max(1, Math.round(readUnits / (readSpeed * 0.6))) : 0;

    // Keyword frequency — CJK bigrams + Latin words
    const freq: Record<string, number> = {};
    if (hasCJK) {
      const cjkText = text.replace(/[^\u4e00-\u9fff\u3400-\u4dbf]/g, "");
      for (let i = 0; i < cjkText.length - 1; i++) {
        const bigram = cjkText.substring(i, i + 2);
        freq[bigram] = (freq[bigram] || 0) + 1;
      }
    }
    text.toLowerCase().match(/\b[a-z]{3,}\b/g)?.forEach((w) => {
      freq[w] = (freq[w] || 0) + 1;
    });
    text.match(/\b\d+\b/g)?.forEach((n) => {
      freq[n] = (freq[n] || 0) + 1;
    });
    const topKeywords = Object.entries(freq)
      .filter(([, count]) => count >= 2)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);

    return { words, chars, charsNoSpace, sentences, paragraphs, readingTime, speakingTime, topKeywords };
  }, [text]);

  const minuteLabel = t('toolCommon.wordCounter.minute') || "min";

  return (
    <div className="space-y-4">
      <textarea
        placeholder={t('toolCommon.wordCounter.placeholder') || "Type or paste your text here..."}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full h-48 p-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: t('toolCommon.wordCounter.words'), value: stats.words },
          { label: t('toolCommon.wordCounter.characters'), value: stats.chars },
          { label: t('toolCommon.wordCounter.charactersNoSpaces'), value: stats.charsNoSpace },
          { label: t('toolCommon.wordCounter.sentences'), value: stats.sentences },
          { label: t('toolCommon.wordCounter.paragraphs'), value: stats.paragraphs },
          { label: t('toolCommon.wordCounter.readingTime'), value: `${stats.readingTime} ${minuteLabel}` },
          { label: t('toolCommon.wordCounter.speakingTime'), value: `${stats.speakingTime} ${minuteLabel}` },
        ].map(({ label, value }) => (
          <div key={label} className="p-3 rounded-md border bg-card text-center">
            <p className="text-2xl font-bold">{value}</p>
            <p className="text-xs text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>
      {stats.topKeywords.length > 0 && (
        <div>
          <p className="text-sm text-muted-foreground mb-2">{t('toolCommon.wordCounter.topKeywords') || "Top keywords"}:</p>
          <div className="flex flex-wrap gap-1.5">
            {stats.topKeywords.map(([word, count]) => (
              <span key={word} className="px-2 py-0.5 rounded-full bg-secondary text-xs">
                {word} ({count})
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
