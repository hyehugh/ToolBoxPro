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
  if (trimmed) {
    if (cjkChars > 0) {
      words += cjkChars;
      const latinWords = trimmed.replace(cjkRegex, ' ').trim().split(/\s+/).filter((w) => w.length > 0);
      words += latinWords.length;
    } else {
      words = trimmed.split(/\s+/).filter((w) => w.length > 0).length;
    }
  }

  const allWords = cjkChars > 0
    ? [...(trimmed.replace(cjkRegex, ' ').trim().split(/\s+/).filter((w) => w.length > 0))]
    : (trimmed ? trimmed.split(/\s+/).filter((w) => w.length > 0) : []);
  const uniqueWords = new Set(allWords.map((w) => w.toLowerCase())).size;
  const avgWordLength = allWords.length > 0
    ? allWords.reduce((sum, w) => sum + w.length, 0) / allWords.length
    : 0;

  // Sentences: include CJK punctuation
  const sentences = text.split(/[.!?。！？；;]+/).filter((s) => s.trim().length > 0).length;
  const paragraphs = text.split(/\n\s*\n/).filter((p) => p.trim().length > 0).length;
  const lines = text.split('\n').length;

  // Top CJK bigrams (if CJK present)
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

function StatCard({ label, value }: { label: string; value: string | number }) {
  const displayValue = typeof value === 'number' ? value.toLocaleString() : value;
  return (
    <div className="rounded-md border bg-card p-3">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="text-xl font-mono font-bold">{displayValue}</div>
    </div>
  );
}

export function TextStatisticsTool() {
  const { t, locale } = useLocale();
  const isZh = locale === 'zh';
  const [text, setText] = useState('');

  const stats = useMemo(() => analyzeText(text), [text]);
  const hasCJK = stats.cjkChars > 0;

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <label className="text-xs text-muted-foreground">{t('common.input')}</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={isZh ? '在此输入或粘贴文字...' : 'Paste or type your text here...'}
          className="w-full h-48 p-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      {text && (
        <div className="space-y-6">
          {/* Character stats */}
          <div>
            <h3 className="text-sm font-medium mb-2 text-muted-foreground">
              {isZh ? '字符统计' : 'Characters'}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <StatCard label={isZh ? '总字符数' : 'Total'} value={stats.totalChars} />
              <StatCard label={isZh ? '不含空格' : 'No Spaces'} value={stats.charsNoSpaces} />
              {hasCJK && <StatCard label={isZh ? '中日韩字符' : 'CJK Chars'} value={stats.cjkChars} />}
              <StatCard label={isZh ? '字母' : 'Letters'} value={stats.letters} />
              <StatCard label={isZh ? '数字' : 'Digits'} value={stats.digits} />
              <StatCard label={isZh ? '特殊字符' : 'Special'} value={stats.specialChars} />
              <StatCard label={isZh ? '空格' : 'Spaces'} value={stats.spaces} />
            </div>
          </div>

          {/* English-specific stats (only show if letters > 0) */}
          {stats.letters > 0 && (
            <div>
              <h3 className="text-sm font-medium mb-2 text-muted-foreground">
                {isZh ? '英文字母' : 'Letters'}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <StatCard label={isZh ? '元音' : 'Vowels'} value={stats.vowels} />
                <StatCard label={isZh ? '辅音' : 'Consonants'} value={stats.consonants} />
                <StatCard
                  label={isZh ? '元辅比' : 'V/C Ratio'}
                  value={stats.consonants > 0 ? (stats.vowels / stats.consonants).toFixed(2) : 'N/A'}
                 
                />
              </div>
            </div>
          )}

          {/* Word stats */}
          <div>
            <h3 className="text-sm font-medium mb-2 text-muted-foreground">
              {isZh ? '词数统计' : 'Words'}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <StatCard label={isZh ? '总词数' : 'Total'} value={stats.words} />
              <StatCard label={isZh ? '去重词数' : 'Unique'} value={stats.uniqueWords} />
              {stats.avgWordLength > 0 && (
                <StatCard label={isZh ? '平均词长' : 'Avg Length'} value={stats.avgWordLength.toFixed(1)} />
              )}
            </div>
          </div>

          {/* CJK bigrams (only if CJK) */}
          {hasCJK && stats.topBigrams.length > 0 && (
            <div>
              <h3 className="text-sm font-medium mb-2 text-muted-foreground">
                {isZh ? '高频词' : 'Top Words (CJK)'}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {stats.topBigrams.map((bg) => (
                  <span key={bg.word} className="px-2 py-0.5 rounded-full bg-secondary text-xs">
                    {bg.word} ({bg.count})
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Structure */}
          <div>
            <h3 className="text-sm font-medium mb-2 text-muted-foreground">
              {isZh ? '结构统计' : 'Structure'}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <StatCard label={isZh ? '句子数' : 'Sentences'} value={stats.sentences} />
              <StatCard label={isZh ? '段落数' : 'Paragraphs'} value={stats.paragraphs} />
              <StatCard label={isZh ? '行数' : 'Lines'} value={stats.lines} />
            </div>
          </div>
        </div>
      )}

      {!text && (
        <div className="text-center text-sm text-muted-foreground py-8">
          {isZh ? '输入文字开始分析' : t('toolCommon.textStats.analyze')}
        </div>
      )}
    </div>
  );
}
