'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/lib/i18n/context';

const SIDE_OPTIONS = [4, 6, 8, 10, 12, 20];

const DOT_PATTERNS: Record<number, number[][]> = {
  1: [[0, 1, 0], [0, 1, 0], [0, 1, 0]],
  2: [[1, 0, 0], [0, 1, 0], [0, 0, 1]],
  3: [[1, 0, 0], [0, 1, 0], [0, 0, 1]],
  4: [[1, 0, 1], [0, 0, 0], [1, 0, 1]],
  5: [[1, 0, 1], [0, 1, 0], [1, 0, 1]],
  6: [[1, 0, 1], [1, 0, 1], [1, 0, 1]],
};

function DiceFace({ value, sides }: { value: number; sides: number }) {
  if (sides > 6) {
    return (
      <div className="w-14 h-14 rounded-lg border-2 border-foreground/20 flex items-center justify-center bg-card">
        <span className="text-lg font-mono font-bold">{value}</span>
      </div>
    );
  }

  const isD6 = sides === 6;
  const displayValue = isD6 ? value : value > 6 ? value : value;
  const dots = DOT_PATTERNS[displayValue as keyof typeof DOT_PATTERNS];

  if (!dots) {
    return (
      <div className="w-14 h-14 rounded-lg border-2 border-foreground/20 flex items-center justify-center bg-card">
        <span className="text-lg font-mono font-bold">{displayValue}</span>
      </div>
    );
  }

  return (
    <div className="w-14 h-14 rounded-lg border-2 border-foreground/20 p-2 bg-card grid grid-cols-3 grid-rows-3">
      {dots.flat().map((dot, i) => (
        <div key={i} className="flex items-center justify-center">
          {dot === 1 && (
            <div className="w-2 h-2 rounded-full bg-foreground" />
          )}
        </div>
      ))}
    </div>
  );
}

export function DiceRollerTool() {
  const { t } = useLocale();
  const [numDice, setNumDice] = useState('2');
  const [sides, setSides] = useState(6);
  const [results, setResults] = useState<number[]>([]);
  const [total, setTotal] = useState(0);

  const roll = () => {
    const count = Math.min(6, Math.max(1, parseInt(numDice) || 1));
    const rolls: number[] = [];
    let sum = 0;
    for (let i = 0; i < count; i++) {
      const val = Math.floor(Math.random() * sides) + 1;
      rolls.push(val);
      sum += val;
    }
    setResults(rolls);
    setTotal(sum);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <div className="flex-1 space-y-1">
          <label className="text-xs text-muted-foreground">{t('toolCommon.dice.count')} (1–6)</label>
          <input
            type="number"
            min={1}
            max={6}
            value={numDice}
            onChange={(e) => setNumDice(e.target.value)}
            className="w-full h-10 px-3 rounded-md border border-input bg-background font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div className="flex-1 space-y-1">
          <label className="text-xs text-muted-foreground">{t('toolCommon.dice.sides')}</label>
          <div className="flex flex-wrap gap-1">
            {SIDE_OPTIONS.map((s) => (
              <Button
                key={s}
                variant={sides === s ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSides(s)}
                className="h-8 min-w-[40px] px-2"
              >
                d{s}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <Button onClick={roll}>{t('toolCommon.dice.roll')}</Button>

      {results.length > 0 && (
        <div className="rounded-md border bg-card p-4 space-y-3">
          <div className="flex flex-wrap gap-2">
            {results.map((value, i) => (
              <DiceFace key={i} value={value} sides={sides} />
            ))}
          </div>
          <hr className="border-muted" />
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">{t('common.value')}</span>
            <span className="text-2xl font-mono font-bold">{total}</span>
          </div>
        </div>
      )}
    </div>
  );
}
