"use client";

import { useState, useMemo } from "react";
import { useLocale } from "@/lib/i18n/context";

export function WordCounterTool() {
  const { t, locale } = useLocale();
  const [text, setText] = useState("");
  const isZh = locale === "zh";

  const stats = useMemo(() => {
    const trimmed = text.trim();

    // Detect if text contains CJK characters
    const cjkRegex = /[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\u30a0-\u30ff\uac00-\ud7af]/g;
    const cjkChars = (text.match(cjkRegex) || []).length;
    const hasCJK = cjkChars > 0;

    // Word count: for English = space-separated words; for CJK = characters + non-CJK words
    // Mixed text: CJK chars count individually, Latin words count as words
    let words = 0;
    if (trimmed) {
      if (hasCJK) {
        // Count CJK characters individually
        words += cjkChars;
        // Count Latin/number words (not part of CJK)
        const latinWords = trimmed.replace(cjkRegex, " ").trim().split(/\s+/).filter((w) => w.length > 0);
        words += latinWords.length;
      } else {
        words = trimmed.split(/\s+/).length;
      }
    }

    const chars = text.length;
    const charsNoSpace = text.replace(/\s/g, "").length;
    // Sentence detection: include both Western and CJK punctuation
    const sentences = text.split(/[.!?。！？；;]+/).filter((s) => s.trim().length > 0).length;
    const paragraphs = text.split(/\n\s*\n/).filter((s) => s.trim().length > 0).length;

    // Reading time: CJK ~300 chars/min, English ~200 words/min
    const readSpeed = hasCJK ? 300 : 200;
    const readUnits = hasCJK ? cjkChars + (words - cjkChars) : words;
    const readingTime = readUnits > 0 ? Math.max(1, Math.round(readUnits / readSpeed)) : 0;
    const speakingTime = readUnits > 0 ? Math.max(1, Math.round(readUnits / (readSpeed * 0.6))) : 0;

    // Keyword frequency — support both CJK and Latin
    const freq: Record<string, number> = {};
    if (hasCJK) {
      // For CJK: extract 2-char bigrams (most meaningful Chinese word unit)
      const cjkText = text.replace(/[^\u4e00-\u9fff\u3400-\u4dbf]/g, "");
      for (let i = 0; i < cjkText.length - 1; i++) {
        const bigram = cjkText.substring(i, i + 2);
        freq[bigram] = (freq[bigram] || 0) + 1;
      }
    }
    // For Latin: extract words with 3+ chars
    text.toLowerCase().match(/\b[a-z]{3,}\b/g)?.forEach((w) => {
      freq[w] = (freq[w] || 0) + 1;
    });
    // Also match numbers
    text.match(/\b\d+\b/g)?.forEach((n) => {
      freq[n] = (freq[n] || 0) + 1;
    });
    const topKeywords = Object.entries(freq)
      .filter(([, count]) => count >= 2) // Only show keywords appearing 2+ times
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);

    return { words, chars, charsNoSpace, sentences, paragraphs, readingTime, speakingTime, topKeywords };
  }, [text]);

  const placeholder = isZh ? "在此输入或粘贴文字..." : "Type or paste your text here...";

  return (
    <div className="space-y-4">
      <textarea
        placeholder={placeholder}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full h-48 p-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: isZh ? "词数" : t('toolCommon.wordCounter.words'), value: stats.words },
          { label: isZh ? "字符数" : t('toolCommon.wordCounter.characters'), value: stats.chars },
          { label: isZh ? "不含空格" : t('toolCommon.wordCounter.charactersNoSpaces'), value: stats.charsNoSpace },
          { label: isZh ? "句子数" : t('toolCommon.wordCounter.sentences'), value: stats.sentences },
          { label: isZh ? "段落数" : t('toolCommon.wordCounter.paragraphs'), value: stats.paragraphs },
          { label: isZh ? "阅读时间" : t('toolCommon.wordCounter.readingTime'), value: stats.readingTime > 0 ? `${stats.readingTime} ${isZh ? "分钟" : "min"}` : `0 ${isZh ? "分钟" : "min"}` },
          { label: isZh ? "朗读时间" : t('toolCommon.wordCounter.speakingTime'), value: stats.speakingTime > 0 ? `${stats.speakingTime} ${isZh ? "分钟" : "min"}` : `0 ${isZh ? "分钟" : "min"}` },
        ].map(({ label, value }) => (
          <div key={label} className="p-3 rounded-md border bg-card text-center">
            <p className="text-2xl font-bold">{value}</p>
            <p className="text-xs text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>
      {stats.topKeywords.length > 0 && (
        <div>
          <p className="text-sm text-muted-foreground mb-2">{isZh ? "高频词：" : "Top keywords:"}</p>
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
