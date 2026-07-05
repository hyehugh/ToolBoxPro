"use client";

import { useState, useMemo } from "react";
import { useLocale } from "@/lib/i18n/context";

export function WordCounterTool() {
  const { t } = useLocale();
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const raw = text;
    if (!raw.trim()) return null;

    const chars = raw.length;
    const charsNoSpaces = raw.replace(/\s/g, "").length;
    const cjkChars = (raw.match(/[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff]/g) || []).length;
    const latinWords = raw.split(/[\s]+/).filter(w => /[a-zA-Z]/.test(w));
    const words = cjkChars + latinWords.length;

    const sentences = raw.split(/[.!?。！？；;\n]+/).filter(s => s.trim()).length || (text.trim() ? 1 : 0);
    const paragraphs = raw.split(/\n\n+/).filter(p => p.trim()).length || (text.trim() ? 1 : 0);
    const readingTime = Math.max(1, Math.ceil(words / 200));
    const speakingTime = Math.max(1, Math.ceil(words / 150));
    const topKeywords = getTopKeywords(raw, 5);
    const latinAll = [...raw.matchAll(/[a-zA-Z]+/g)].map(m => m[0]);
    const longestWord = latinAll.length ? latinAll.sort((a, b) => b.length - a.length)[0] : "-";
    const shortestWord = latinAll.length ? latinAll.sort((a, b) => a.length - b.length)[0] : "-";
    const avgWordLength = latinAll.length ? Math.round(latinAll.reduce((sum, w) => sum + w.length, 0) / latinAll.length) : 0;

    return { chars, charsNoSpaces, cjkChars, words, sentences, paragraphs, readingTime, speakingTime, topKeywords, longestWord, shortestWord, avgWordLength };
  }, [text]);

  function getTopKeywords(text: string, count: number) {
    const words: Record<string, number> = {};
    const cjk = text.match(/[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff]+/g) || [];
    cjk.forEach(segment => {
      for (let i = 0; i < segment.length - 1; i++) {
        const bigram = segment.substr(i, 2);
        words[bigram] = (words[bigram] || 0) + 1;
      }
    });
    const latin = text.match(/[a-zA-Z]{3,}/g) || [];
    latin.forEach(w => { words[w.toLowerCase()] = (words[w.toLowerCase()] || 0) + 1; });
    return Object.entries(words).sort((a, b) => b[1] - a[1]).slice(0, count).map(([word, count]) => `${word} (${count})`);
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="text-sm font-medium block mb-2">{t("toolCommon.wordCounter.inputLabel")}</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={t("toolCommon.wordCounter.placeholder")}
          className="w-full h-40 p-4 border border-input rounded-lg bg-background text-sm resize-none"
        />
      </div>

      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard label={t("toolCommon.wordCounter.words")} value={stats.words} />
          <StatCard label={t("toolCommon.wordCounter.characters")} value={stats.chars} />
          <StatCard label={t("toolCommon.wordCounter.sentences")} value={stats.sentences} />
          <StatCard label={t("toolCommon.wordCounter.paragraphs")} value={stats.paragraphs} />
          <StatCard label={t("toolCommon.wordCounter.cjkChars")} value={stats.cjkChars} />
          <StatCard label={t("toolCommon.wordCounter.readingTime")} value={`${stats.readingTime} ${t("toolCommon.wordCounter.min")}`} />
          <StatCard label={t("toolCommon.wordCounter.speakingTime")} value={`${stats.speakingTime} ${t("toolCommon.wordCounter.min")}`} />
          <StatCard label={t("toolCommon.wordCounter.topKeywords")} value={stats.topKeywords[0] || "-"} />
        </div>
      )}
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="p-4 bg-card rounded-lg border border-border">
      <div className="text-xs text-muted-foreground mb-1">{label}</div>
      <div className="text-xl font-semibold">{value}</div>
    </div>
  );
}
