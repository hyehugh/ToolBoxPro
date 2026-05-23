'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

type Direction = 'to-roman' | 'from-roman';

function toRoman(num: number): string {
  if (num <= 0 || num > 3999) return 'Number must be between 1 and 3999';
  const map: [number, string][] = [
    [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
    [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
    [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
  ];
  let result = '';
  let n = num;
  for (const [value, symbol] of map) {
    while (n >= value) {
      result += symbol;
      n -= value;
    }
  }
  return result;
}

function fromRoman(roman: string): string {
  const map: Record<string, number> = {
    M: 1000, CM: 900, D: 500, CD: 400,
    C: 100, XC: 90, L: 50, XL: 40,
    X: 10, IX: 9, V: 5, IV: 4, I: 1,
  };
  const s = roman.toUpperCase().trim();
  if (!s) return '';
  const regex = /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
  if (!regex.test(s)) return 'Invalid Roman numeral';
  let result = 0;
  let i = 0;
  while (i < s.length) {
    const two = s.substring(i, i + 2);
    if (map[two] !== undefined) {
      result += map[two];
      i += 2;
    } else {
      result += map[s[i]];
      i += 1;
    }
  }
  return result <= 3999 ? String(result) : 'Invalid';
}

export function RomanNumeralTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [direction, setDirection] = useState<Direction>('to-roman');

  const convert = () => {
    if (!input.trim()) {
      setOutput('');
      return;
    }
    if (direction === 'to-roman') {
      const num = parseInt(input, 10);
      if (isNaN(num)) {
        setOutput('Please enter a valid number');
      } else {
        setOutput(toRoman(num));
      }
    } else {
      setOutput(fromRoman(input));
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Button
          variant={direction === 'to-roman' ? 'default' : 'outline'}
          onClick={() => { setDirection('to-roman'); setOutput(''); }}
        >
          Number → Roman
        </Button>
        <Button
          variant={direction === 'from-roman' ? 'default' : 'outline'}
          onClick={() => { setDirection('from-roman'); setOutput(''); }}
        >
          Roman → Number
        </Button>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          {direction === 'to-roman' ? 'Enter a number (1–3999)' : 'Enter Roman numeral'}
        </label>
        <input
          className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-ring"
          value={input}
          onChange={(e) => { setInput(e.target.value); setOutput(''); }}
          placeholder={direction === 'to-roman' ? 'e.g. 2024' : 'e.g. MMXXIV'}
        />
      </div>

      <Button onClick={convert}>Convert</Button>

      {output !== '' && (
        <div>
          <label className="block text-sm font-medium mb-1">
            {direction === 'to-roman' ? 'Roman numeral' : 'Number'}
          </label>
          <div className="rounded-md border border-input bg-muted px-3 py-4 text-lg font-mono font-bold break-all">
            {output}
          </div>
        </div>
      )}
    </div>
  );
}
