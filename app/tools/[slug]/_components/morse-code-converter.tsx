'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLocale } from "@/lib/i18n/context";

// Full Morse code map A-Z, 0-9
const CHAR_TO_MORSE: Record<string, string> = {
  A: '.-', B: '-...', C: '-.-.', D: '-..', E: '.', F: '..-.', G: '--.',
  H: '....', I: '..', J: '.---', K: '-.-', L: '.-..', M: '--', N: '-.',
  O: '---', P: '.--.', Q: '--.-', R: '.-.', S: '...', T: '-', U: '..-',
  V: '...-', W: '.--', X: '-..-', Y: '-.--', Z: '--..',
  '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
  '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
};

const MORSE_TO_CHAR: Record<string, string> = {};
for (const [char, morse] of Object.entries(CHAR_TO_MORSE)) {
  MORSE_TO_CHAR[morse] = char;
}

type Direction = 'text-to-morse' | 'morse-to-text';

export function MorseCodeConverterTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [direction, setDirection] = useState<Direction>('text-to-morse');
  const { t } = useLocale();

  const convert = () => {
    if (!input.trim()) {
      setOutput('');
      return;
    }

    if (direction === 'text-to-morse') {
      const chars = input.toUpperCase().split('');
      const morseWords: string[] = [];
      let currentWord: string[] = [];

      for (const char of chars) {
        if (char === ' ') {
          if (currentWord.length > 0) {
            morseWords.push(currentWord.join(' '));
            currentWord = [];
          }
          // Preserve multiple spaces as word separators? We'll just track.
        } else if (CHAR_TO_MORSE[char]) {
          currentWord.push(CHAR_TO_MORSE[char]);
        } else {
          // Unknown character — skip or replace with ? mark
          currentWord.push('?');
        }
      }
      if (currentWord.length > 0) {
        morseWords.push(currentWord.join(' '));
      }

      setOutput(morseWords.join(' / '));
    } else {
      // Morse to text
      const words = input.trim().split(/\s*\/\s*|\s+\/\s+/);
      const decodedWords: string[] = [];

      for (const word of words) {
        const letters = word.trim().split(/\s+/);
        const decoded = letters
          .map((m) => (MORSE_TO_CHAR[m] ? MORSE_TO_CHAR[m] : '?'))
          .join('');
        decodedWords.push(decoded);
      }

      setOutput(decodedWords.join(' '));
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Button
          variant={direction === 'text-to-morse' ? 'default' : 'outline'}
          onClick={() => { setDirection('text-to-morse'); setOutput(''); }}
        >
          {t('toolCommon.morseCode.encode')}
        </Button>
        <Button
          variant={direction === 'morse-to-text' ? 'default' : 'outline'}
          onClick={() => { setDirection('morse-to-text'); setOutput(''); }}
        >
          {t('toolCommon.morseCode.decode')}
        </Button>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          {direction === 'text-to-morse' ? 'Enter text' : 'Enter Morse code'}
        </label>
        <textarea
          className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm font-mono"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setOutput('');
          }}
          placeholder={
            direction === 'text-to-morse'
              ? 'e.g. Hello World'
              : 'e.g. .... . .-.. .-.. --- / .-- --- .-. .-.. -..'
          }
        />
      </div>

      <Button onClick={convert}>{t('common.convert')}</Button>

      {output !== '' && (
        <div>
          <label className="block text-sm font-medium mb-1">
            {direction === 'text-to-morse' ? 'Morse code' : 'Decoded text'}
          </label>
          <div className="rounded-md border border-input bg-muted px-3 py-2 text-sm font-mono break-all">
            {output}
          </div>
        </div>
      )}
    </div>
  );
}
