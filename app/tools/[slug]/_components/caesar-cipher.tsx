'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function CaesarCipherTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [shift, setShift] = useState(3);

  const shiftText = (text: string, shiftAmount: number): string => {
    return text
      .split('')
      .map((ch) => {
        const code = ch.charCodeAt(0);
        if (code >= 65 && code <= 90) {
          // Uppercase
          return String.fromCharCode(((code - 65 + shiftAmount + 26) % 26) + 65);
        }
        if (code >= 97 && code <= 122) {
          // Lowercase
          return String.fromCharCode(((code - 97 + shiftAmount + 26) % 26) + 97);
        }
        return ch;
      })
      .join('');
  };

  const handleEncode = () => {
    setOutput(shiftText(input, shift));
  };

  const handleDecode = () => {
    setOutput(shiftText(input, -shift));
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Caesar Cipher</h2>
      <p className="text-sm text-muted-foreground">
        Shift each letter by a set amount. Only letters A-Z and a-z are affected.
      </p>
      <div className="space-y-2">
        <label className="block text-sm font-medium">
          Shift: <span className="font-mono">{shift}</span>
        </label>
        <input
          type="range"
          min={1}
          max={25}
          value={shift}
          onChange={(e) => setShift(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>1</span>
          <span>13 (ROT13)</span>
          <span>25</span>
        </div>
      </div>
      <textarea
        className="w-full h-32 p-3 border rounded-md resize-y font-mono text-sm"
        placeholder="Enter text to encode or decode..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="flex gap-2">
        <Button onClick={handleEncode}>Encode</Button>
        <Button variant="outline" onClick={handleDecode}>Decode</Button>
      </div>
      {output && (
        <div className="mt-4">
          <label className="block text-sm font-medium mb-1">Result:</label>
          <textarea
            className="w-full h-32 p-3 border rounded-md resize-y font-mono text-sm"
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
