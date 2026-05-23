'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

type Mode = 'x-percent-of-y' | 'x-is-what-percent-of-y' | 'percent-change';

export function PercentageCalculatorTool() {
  const [mode, setMode] = useState<Mode>('x-percent-of-y');
  const [valA, setValA] = useState('');
  const [valB, setValB] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const a = parseFloat(valA);
    const b = parseFloat(valB);
    if (isNaN(a) || isNaN(b)) {
      setResult('Please enter valid numbers');
      return;
    }

    switch (mode) {
      case 'x-percent-of-y': {
        // What is X% of Y
        setResult(`${(a / 100) * b}`);
        break;
      }
      case 'x-is-what-percent-of-y': {
        // X is what % of Y
        if (b === 0) {
          setResult('Cannot divide by zero');
          return;
        }
        setResult(`${(a / b) * 100}%`);
        break;
      }
      case 'percent-change': {
        // Percentage increase/decrease from Y to X
        if (b === 0) {
          setResult('Cannot divide by zero');
          return;
        }
        const change = ((a - b) / b) * 100;
        const sign = change >= 0 ? '+' : '';
        setResult(`${sign}${change}%`);
        break;
      }
    }
  };

  const labelA =
    mode === 'x-percent-of-y' ? 'Percentage (X%)' :
    mode === 'x-is-what-percent-of-y' ? 'Value (X)' :
    'New value (X)';

  const labelB =
    mode === 'x-percent-of-y' ? 'Number (Y)' :
    mode === 'x-is-what-percent-of-y' ? 'Total (Y)' :
    'Original value (Y)';

  const resultLabel =
    mode === 'x-percent-of-y' ? 'Result (X% of Y)' :
    mode === 'x-is-what-percent-of-y' ? 'Result (X as % of Y)' :
    'Percentage change';

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Button
          variant={mode === 'x-percent-of-y' ? 'default' : 'outline'}
          onClick={() => { setMode('x-percent-of-y'); setResult(null); }}
        >
          X% of Y
        </Button>
        <Button
          variant={mode === 'x-is-what-percent-of-y' ? 'default' : 'outline'}
          onClick={() => { setMode('x-is-what-percent-of-y'); setResult(null); }}
        >
          X is what % of Y
        </Button>
        <Button
          variant={mode === 'percent-change' ? 'default' : 'outline'}
          onClick={() => { setMode('percent-change'); setResult(null); }}
        >
          % Increase/Decrease
        </Button>
      </div>

      <div className="flex gap-2">
        <div className="flex-1 space-y-1">
          <label className="text-xs text-muted-foreground">{labelA}</label>
          <input
            type="number"
            value={valA}
            onChange={(e) => setValA(e.target.value)}
            className="w-full h-10 px-3 rounded-md border border-input bg-background font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div className="flex-1 space-y-1">
          <label className="text-xs text-muted-foreground">{labelB}</label>
          <input
            type="number"
            value={valB}
            onChange={(e) => setValB(e.target.value)}
            className="w-full h-10 px-3 rounded-md border border-input bg-background font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      <Button onClick={calculate}>Calculate</Button>

      {result !== null && (
        <div>
          <label className="block text-sm font-medium mb-1">{resultLabel}</label>
          <div className="rounded-md border border-input bg-muted px-3 py-4 text-lg font-mono font-bold break-all">
            {result}
          </div>
        </div>
      )}
    </div>
  );
}
