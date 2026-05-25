"use client";

import { useState, useMemo } from "react";
import { useLocale } from "@/lib/i18n/context";

export function WordCounterTool() {
  const { t } = useLocale();
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const chars = text.length;
    const charsNoSpace = text.replace(/\s/g, "").length;
    const sentences = text.split(/[.!?]+/).filter(Boolean).length;
    const paragraphs = text.split(/\n\s*\n/).filter(Boolean).length;
    const readingTime = Math.max(1, Math.round(words / 200));
    const speakingTime = Math.max(1, Math.round(words / 150));

    // Keyword frequency
    const freq: Record<string, number> = {};
    text.toLowerCase().match(/\b\w{3,}\b/g)?.forEach((w) => {
      freq[w] = (freq[w] || 0) + 1;
    });
    const topKeywords = Object.entries(freq)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);

    return { words, chars, charsNoSpace, sentences, paragraphs, readingTime, speakingTime, topKeywords };
  }, [text]);

  return (
    <div className="space-y-4">
      <textarea
        placeholder="Type or paste your text here..."
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
          { label: t('toolCommon.wordCounter.readingTime'), value: `${stats.readingTime} min` },
          { label: t('toolCommon.wordCounter.speakingTime'), value: `${stats.speakingTime} min` },
        ].map(({ label, value }) => (
          <div key={label} className="p-3 rounded-md border bg-card text-center">
            <p className="text-2xl font-bold">{value}</p>
            <p className="text-xs text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>
      {stats.topKeywords.length > 0 && (
        <div>
          <p className="text-sm text-muted-foreground mb-2">{t('common.result')}:</p>
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
