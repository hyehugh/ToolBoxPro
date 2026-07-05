'use client';

import { useState, useMemo } from 'react';
import { useLocale } from '@/lib/i18n/context';

interface TextStats {
  totalChars: number;
  charsNoSpaces: number;
  cjkChars: number;
  letters: number;
  digits: number;
  specialChars: number;
  spaces: number;
  vowels: number;
  consonants: number;
  words: number;
  uniqueWords: number;
  avgWordLength: number;
  sentences: number;
  paragraphs: number;
  lines: number;
  topBigrams: { word: string; count: number }[];
}

function analyzeText(text: string): TextStats {
  const totalChars = text.length;
  const charsNoSpaces = text.replace(/\s/g, '').length;
  const cjkRegex = /[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\u30a0-\u30ff\uac00-\ud7af]/g;
  const cjkChars = (text.match(cjkRegex) || []).length;
  const letters = (text.match(/[a-zA-Z]/g) || []).length;
  const digits = (text.match(/[0-9]/g) || []).length;
  const spaces = (text.match(/\s/g) || []).length;
  const specialChars = totalChars - letters - digits - spaces - cjkChars;
  const vowels = (text.match(/[aeiouAEIOU]/g) || []).length;
  const consonants = (text.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g) || []).length;

  // Word count: CJK chars counted individually + Latin words
  let words = 0;
  const trimmed = text.trim();
  const allWords: string[] = [];
  if (trimmed) {
    if (cjkChars > 0) {
      words += cjkChars;
      const latinParts = trimmed.replace(cjkRegex, ' ').trim().split(/\s+/).filter((w) => w.length > 0);
      allWords.push(...latinParts);
      words += latinParts.length;
    } else {
      const latinParts = trimmed.split(/\s+/).filter((w) => w.length > 0);
      allWords.push(...latinParts);
      words = latinParts.length;
    }
  }
  const uniqueWords = new Set(allWords.map((w) => w.toLowerCase())).size;
  const avgWordLength = allWords.length > 0
    ? allWords.reduce((sum, w) => sum + w.length, 0) / allWords.length
    : 0;

  // Sentences: include CJK punctuation
  const sentences = text.split(/[.!?。！？；;]+/).filter((s) => s.trim().length > 0).length;
  const paragraphs = text.split(/\n\s*\n/).filter((p) => p.trim().length > 0).length;
  const lines = text.split('\n').length;

  // Top CJK bigrams
  const topBigrams: { word: string; count: number }[] = [];
  if (cjkChars > 4) {
    const cjkText = text.replace(/[^\u4e00-\u9fff\u3400-\u4dbf]/g, '');
    const bigramFreq: Record<string, number> = {};
    for (let i = 0; i < cjkText.length - 1; i++) {
      const bg = cjkText.substring(i, i + 2);
      bigramFreq[bg] = (bigramFreq[bg] || 0) + 1;
    }
    topBigrams.push(...Object.entries(bigramFreq)
      .filter(([, c]) => c >= 2)
      .map(([word, count]) => ({ word, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5));
  }

  return {
    totalChars, charsNoSpaces, cjkChars, letters, digits, specialChars, spaces,
    vowels, consonants, words, uniqueWords, avgWordLength,
    sentences, paragraphs, lines, topBigrams,
  };
}

export function TextStatisticsTool() {
  const { t } = useLocale();
  const [text, setText] = useState('');

  const stats = useMemo(() => analyzeText(text), [text]);
  const hasCJK = stats.cjkChars > 0;
  const S = (key: string) => t(`toolCommon.textStats.${key}`);

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <label className="text-xs text-muted-foreground">{t('common.input')}</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={S('placeholder') || 'Paste or type your text here...'}
          className="w-full h-48 p-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      {text ? (
        <div className="space-y-6">
          {/* Character stats */}
          <div>
            <h3 className="text-sm font-medium mb-2 text-muted-foreground">{S('characters')}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="rounded-md border bg-card p-3"><div className="text-xs text-muted-foreground">{S('characters')}</div><div className="text-xl font-mono font-bold">{stats.totalChars.toLocaleString()}</div></div>
              <div className="rounded-md border bg-card p-3"><div className="text-xs text-muted-foreground">{S('noSpaces')}</div><div className="text-xl font-mono font-bold">{stats.charsNoSpaces.toLocaleString()}</div></div>
              {hasCJK && <div className="rounded-md border bg-card p-3"><div className="text-xs text-muted-foreground">{S('cjkChars')}</div><div className="text-xl font-mono font-bold">{stats.cjkChars.toLocaleString()}</div></div>}
              <div className="rounded-md border bg-card p-3"><div className="text-xs text-muted-foreground">{S('letters')}</div><div className="text-xl font-mono font-bold">{stats.letters.toLocaleString()}</div></div>
              <div className="rounded-md border bg-card p-3"><div className="text-xs text-muted-foreground">{S('digits')}</div><div className="text-xl font-mono font-bold">{stats.digits.toLocaleString()}</div></div>
              <div className="rounded-md border bg-card p-3"><div className="text-xs text-muted-foreground">{S('specialChars')}</div><div className="text-xl font-mono font-bold">{stats.specialChars.toLocaleString()}</div></div>
              <div className="rounded-md border bg-card p-3"><div className="text-xs text-muted-foreground">{S('spaces')}</div><div className="text-xl font-mono font-bold">{stats.spaces.toLocaleString()}</div></div>
            </div>
          </div>

          {/* English letters (only if Latin text present) */}
          {stats.letters > 0 && (
            <div>
              <h3 className="text-sm font-medium mb-2 text-muted-foreground">{S('letters')}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="rounded-md border bg-card p-3"><div className="text-xs text-muted-foreground">{S('vowels')}</div><div className="text-xl font-mono font-bold">{stats.vowels.toLocaleString()}</div></div>
                <div className="rounded-md border bg-card p-3"><div className="text-xs text-muted-foreground">{S('consonants')}</div><div className="text-xl font-mono font-bold">{stats.consonants.toLocaleString()}</div></div>
                <div className="rounded-md border bg-card p-3"><div className="text-xs text-muted-foreground">{S('vcRatio')}</div><div className="text-xl font-mono font-bold">{stats.consonants > 0 ? (stats.vowels / stats.consonants).toFixed(2) : 'N/A'}</div></div>
              </div>
            </div>
          )}

          {/* Word stats */}
          <div>
            <h3 className="text-sm font-medium mb-2 text-muted-foreground">{S('totalWords')}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="rounded-md border bg-card p-3"><div className="text-xs text-muted-foreground">{S('totalWords')}</div><div className="text-xl font-mono font-bold">{stats.words.toLocaleString()}</div></div>
              <div className="rounded-md border bg-card p-3"><div className="text-xs text-muted-foreground">{S('uniqueWords')}</div><div className="text-xl font-mono font-bold">{stats.uniqueWords.toLocaleString()}</div></div>
              {stats.avgWordLength > 0 && <div className="rounded-md border bg-card p-3"><div className="text-xs text-muted-foreground">{S('avgLength')}</div><div className="text-xl font-mono font-bold">{stats.avgWordLength.toFixed(1)}</div></div>}
            </div>
          </div>

          {/* CJK bigrams */}
          {hasCJK && stats.topBigrams.length > 0 && (
            <div>
              <h3 className="text-sm font-medium mb-2 text-muted-foreground">{S('topWordsCJK')}</h3>
              <div className="flex flex-wrap gap-1.5">
                {stats.topBigrams.map((bg) => (
                  <span key={bg.word} className="px-2 py-0.5 rounded-full bg-secondary text-xs">{bg.word} ({bg.count})</span>
                ))}
              </div>
            </div>
          )}

          {/* Structure */}
          <div>
            <h3 className="text-sm font-medium mb-2 text-muted-foreground">{S('structure')}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="rounded-md border bg-card p-3"><div className="text-xs text-muted-foreground">{S('sentences')}</div><div className="text-xl font-mono font-bold">{stats.sentences.toLocaleString()}</div></div>
              <div className="rounded-md border bg-card p-3"><div className="text-xs text-muted-foreground">{S('paragraphs')}</div><div className="text-xl font-mono font-bold">{stats.paragraphs.toLocaleString()}</div></div>
              <div className="rounded-md border bg-card p-3"><div className="text-xs text-muted-foreground">{S('lines')}</div><div className="text-xl font-mono font-bold">{stats.lines.toLocaleString()}</div></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-sm text-muted-foreground py-8">{S('enterToAnalyze') || S('analyze')}</div>
      )}
    </div>
  );
}
