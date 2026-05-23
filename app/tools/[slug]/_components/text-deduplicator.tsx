'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function TextDeduplicatorTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const removeDuplicates = () => {
    const lines = input.split('\n');
    const seen = new Set<string>();
    const unique: string[] = [];
    for (const line of lines) {
      if (!seen.has(line)) {
        seen.add(line);
        unique.push(line);
      }
    }
    setOutput(unique.join('\n'));
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Input lines</label>
        <textarea
          className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter one item per line (duplicates will be removed)..."
        />
      </div>
      <Button onClick={removeDuplicates}>Remove Duplicates</Button>
      {output !== '' && (
        <div>
          <label className="block text-sm font-medium mb-1">Unique lines (order preserved)</label>
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
