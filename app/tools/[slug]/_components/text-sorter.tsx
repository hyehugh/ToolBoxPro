'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function TextSorterTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const sortAsc = () => {
    const lines = input.split('\n');
    lines.sort((a, b) => a.localeCompare(b));
    setOutput(lines.join('\n'));
  };

  const sortDesc = () => {
    const lines = input.split('\n');
    lines.sort((a, b) => b.localeCompare(a));
    setOutput(lines.join('\n'));
  };

  const sortByLength = () => {
    const lines = input.split('\n');
    lines.sort((a, b) => a.length - b.length);
    setOutput(lines.join('\n'));
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Input lines</label>
        <textarea
          className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter one item per line..."
        />
      </div>
      <div className="flex flex-wrap gap-2">
        <Button onClick={sortAsc}>Sort A → Z</Button>
        <Button onClick={sortDesc}>Sort Z → A</Button>
        <Button onClick={sortByLength}>Sort by Length</Button>
      </div>
      {output !== '' && (
        <div>
          <label className="block text-sm font-medium mb-1">Sorted output</label>
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
