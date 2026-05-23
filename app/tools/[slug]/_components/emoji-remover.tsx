'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function EmojiRemoverTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const emojiRegex = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu;

  const handleRemove = () => {
    setOutput(input.replace(emojiRegex, ''));
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Emoji Remover</h2>
      <p className="text-sm text-muted-foreground">
        Paste text containing emojis and remove them all at once.
      </p>
      <textarea
        className="w-full h-40 p-3 border rounded-md resize-y font-mono text-sm"
        placeholder="Paste text with emojis here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button onClick={handleRemove}>Remove Emoji</Button>
      {output && (
        <div className="mt-4">
          <label className="block text-sm font-medium mb-1">Result:</label>
          <textarea
            className="w-full h-40 p-3 border rounded-md resize-y font-mono text-sm"
            value={output}
            readOnly
          />
          <Button
            variant="outline"
            className="mt-2"
            onClick={() => navigator.clipboard.writeText(output)}
          >
            Copy to Clipboard
          </Button>
        </div>
      )}
    </div>
  );
}
