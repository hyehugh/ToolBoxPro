'use client';

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';

const VOWELS = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

interface TextStats {
  totalChars: number;
  charsNoSpaces: number;
  letters: number;
  digits: number;
  specialChars: number;
  spaces: number;
  vowels: number;
  consonants: number;
  words: number;
  uniqueWords: number;
  avgWordLength: number;
  longestWord: string;
  shortestWord: string;
  mostCommonLetter: { letter: string; count: number };
  sentences: number;
  paragraphs: number;
  lines: number;
}

function analyzeText(text: string): TextStats {
  const totalChars = text.length;
  const charsNoSpaces = text.replace(/\s/g, '').length;
  const letters = (text.match(/[a-zA-Z]/g) || []).length;
  const digits = (text.match(/[0-9]/g) || []).length;
  const specialChars = (text.match(/[^a-zA-Z0-9\s]/g) || []).length;
  const spaces = (text.match(/\s/g) || []).length;
  const vowels = (text.match(/[aeiouAEIOU]/g) || []).length;
  const consonants = (text.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g) || []).length;

  const words = text.trim()
    ? text.trim().split(/\s+/).filter((w) => w.length > 0)
    : [];
  const wordCount = words.length;
  const uniqueWords = new Set(words.map((w) => w.toLowerCase())).size;
  const avgWordLength = wordCount > 0
    ? words.reduce((sum, w) => sum + w.length, 0) / wordCount
    : 0;

  const longestWord = wordCount > 0
    ? words.reduce((a, b) => (a.length >= b.length ? a : b), '')
    : '';
  const shortestWord = wordCount > 0
    ? words.reduce((a, b) => (a.length <= b.length && a.length > 0 ? a : b), '')
    : '';

  // Most common letter
  const letterCounts: Record<string, number> = {};
  for (const ch of text) {
    if (/[a-zA-Z]/.test(ch)) {
      const lower = ch.toLowerCase();
      letterCounts[lower] = (letterCounts[lower] || 0) + 1;
    }
  }
  let mostCommonLetter = { letter: '', count: 0 };
  for (const [letter, count] of Object.entries(letterCounts)) {
    if (count > mostCommonLetter.count) {
      mostCommonLetter = { letter, count };
    }
  }

  const sentences = (text.match(/[.!?]+/g) || []).filter(Boolean).length || (wordCount > 0 ? 1 : 0);
  const paragraphs = text.split(/\n\s*\n/).filter((p) => p.trim().length > 0).length || 0;
  const lines = text.split('\n').length;

  return {
    totalChars, charsNoSpaces, letters, digits, specialChars, spaces,
    vowels, consonants, words: wordCount, uniqueWords, avgWordLength,
    longestWord, shortestWord, mostCommonLetter, sentences, paragraphs, lines,
  };
}

export function TextStatisticsTool() {
  const [text, setText] = useState('');

  const stats = useMemo(() => analyzeText(text), [text]);

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <label className="text-xs text-muted-foreground">Enter text to analyze</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste or type your text here..."
          className="w-full h-48 p-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      {text && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {/* Character stats */}
          <div className="rounded-md border bg-card p-3">
            <div className="text-xs text-muted-foreground">Total Characters</div>
            <div className="text-xl font-mono font-bold">{stats.totalChars.toLocaleString()}</div>
          </div>
          <div className="rounded-md border bg-card p-3">
            <div className="text-xs text-muted-foreground">Characters (no spaces)</div>
            <div className="text-xl font-mono font-bold">{stats.charsNoSpaces.toLocaleString()}</div>
          </div>
          <div className="rounded-md border bg-card p-3">
            <div className="text-xs text-muted-foreground">Letters</div>
            <div className="text-xl font-mono font-bold">{stats.letters.toLocaleString()}</div>
          </div>
          <div className="rounded-md border bg-card p-3">
            <div className="text-xs text-muted-foreground">Digits</div>
            <div className="text-xl font-mono font-bold">{stats.digits.toLocaleString()}</div>
          </div>
          <div className="rounded-md border bg-card p-3">
            <div className="text-xs text-muted-foreground">Special Characters</div>
            <div className="text-xl font-mono font-bold">{stats.specialChars.toLocaleString()}</div>
          </div>
          <div className="rounded-md border bg-card p-3">
            <div className="text-xs text-muted-foreground">Spaces</div>
            <div className="text-xl font-mono font-bold">{stats.spaces.toLocaleString()}</div>
          </div>

          {/* Vowel/Consonant */}
          <div className="rounded-md border bg-card p-3">
            <div className="text-xs text-muted-foreground">Vowels</div>
            <div className="text-xl font-mono font-bold">{stats.vowels.toLocaleString()}</div>
          </div>
          <div className="rounded-md border bg-card p-3">
            <div className="text-xs text-muted-foreground">Consonants</div>
            <div className="text-xl font-mono font-bold">{stats.consonants.toLocaleString()}</div>
          </div>
          <div className="rounded-md border bg-card p-3">
            <div className="text-xs text-muted-foreground">Vowel/Consonant Ratio</div>
            <div className="text-xl font-mono font-bold">
              {stats.consonants > 0 ? (stats.vowels / stats.consonants).toFixed(2) : 'N/A'}
            </div>
          </div>

          {/* Word stats */}
          <div className="rounded-md border bg-card p-3">
            <div className="text-xs text-muted-foreground">Total Words</div>
            <div className="text-xl font-mono font-bold">{stats.words.toLocaleString()}</div>
          </div>
          <div className="rounded-md border bg-card p-3">
            <div className="text-xs text-muted-foreground">Unique Words</div>
            <div className="text-xl font-mono font-bold">{stats.uniqueWords.toLocaleString()}</div>
          </div>
          <div className="rounded-md border bg-card p-3">
            <div className="text-xs text-muted-foreground">Avg Word Length</div>
            <div className="text-xl font-mono font-bold">{stats.avgWordLength.toFixed(1)}</div>
          </div>

          {/* Longest/Shortest */}
          <div className="rounded-md border bg-card p-3 col-span-1">
            <div className="text-xs text-muted-foreground">Longest Word</div>
            <div className="text-sm font-mono font-bold truncate" title={stats.longestWord}>
              {stats.longestWord || 'N/A'}
            </div>
            <div className="text-xs text-muted-foreground mt-1">{stats.longestWord.length} chars</div>
          </div>
          <div className="rounded-md border bg-card p-3 col-span-1">
            <div className="text-xs text-muted-foreground">Shortest Word</div>
            <div className="text-sm font-mono font-bold">{stats.shortestWord || 'N/A'}</div>
            <div className="text-xs text-muted-foreground mt-1">{stats.shortestWord.length} chars</div>
          </div>
          <div className="rounded-md border bg-card p-3 col-span-1">
            <div className="text-xs text-muted-foreground">Most Common Letter</div>
            <div className="text-xl font-mono font-bold">
              &ldquo;{stats.mostCommonLetter.letter || 'N/A'}&rdquo;
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              {stats.mostCommonLetter.count.toLocaleString()} occurrences
            </div>
          </div>

          {/* Structure */}
          <div className="rounded-md border bg-card p-3">
            <div className="text-xs text-muted-foreground">Sentences</div>
            <div className="text-xl font-mono font-bold">{stats.sentences.toLocaleString()}</div>
          </div>
          <div className="rounded-md border bg-card p-3">
            <div className="text-xs text-muted-foreground">Paragraphs</div>
            <div className="text-xl font-mono font-bold">{stats.paragraphs.toLocaleString()}</div>
          </div>
          <div className="rounded-md border bg-card p-3">
            <div className="text-xs text-muted-foreground">Lines</div>
            <div className="text-xl font-mono font-bold">{stats.lines.toLocaleString()}</div>
          </div>
        </div>
      )}

      {!text && (
        <div className="text-center text-sm text-muted-foreground py-8">
          Enter text above to see detailed statistics
        </div>
      )}
    </div>
  );
}
