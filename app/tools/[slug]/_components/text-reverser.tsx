'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

type ReverseMode = 'all' | 'words' | 'lines';

export function TextReverserTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState<ReverseMode>('all');

  const reverseAll = (text: string) => text.split('').reverse().join('');

  const reverseWords = (text: string) =>
    text
      .split(/(\s+)/)
      .map((word) => word.split('').reverse().join(''))
      .join('');

  const reverseLines = (text: string) =>
    text.split('\n').reverse().join('\n');

  const handleReverse = () => {
    switch (mode) {
      case 'all':
        setOutput(reverseAll(input));
        break;
      case 'words':
        setOutput(reverseWords(input));
        break;
      case 'lines':
        setOutput(reverseLines(input));
        break;
    }
  };

  const modes: { value: ReverseMode; label: string }[] = [
    { value: 'all', label: 'Reverse All' },
    { value: 'words', label: 'Reverse Words' },
    { value: 'lines', label: 'Reverse Lines' },
  ];

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Enter text to reverse</label>
        <textarea
          className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text..."
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {modes.map((m) => (
          <Button
            key={m.value}
            variant={mode === m.value ? 'default' : 'outline'}
            onClick={() => setMode(m.value)}
          >
            {m.label}
          </Button>
        ))}
      </div>
      <Button onClick={handleReverse}>Reverse</Button>
      {output !== '' && (
        <div>
          <label className="block text-sm font-medium mb-1">Reversed output</label>
          <textarea
            className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm"
            value={output}
            readOnly
          />
        </div>
      )}
    </div>
  );
}
