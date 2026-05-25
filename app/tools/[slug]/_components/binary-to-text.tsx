'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLocale } from "@/lib/i18n/context";

type Mode = 'text-to-binary' | 'binary-to-text';

export function BinaryToTextTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState<Mode>('text-to-binary');
  const [error, setError] = useState('');
  const { t } = useLocale();

  const textToBinary = (text: string): string => {
    return Array.from(text)
      .map((ch) => ch.codePointAt(0)!.toString(2).padStart(8, '0'))
      .join(' ');
  };

  const binaryToText = (binary: string): string => {
    const cleaned = binary.replace(/\s+/g, ' ');
    const bytes = cleaned.trim().split(' ');
    const result: number[] = [];
    for (const byte of bytes) {
      if (byte === '') continue;
      if (!/^[01]+$/.test(byte)) {
        throw new Error(`Invalid binary: "${byte}" — only 0 and 1 allowed`);
      }
      result.push(parseInt(byte, 2));
    }
    return String.fromCodePoint(...result);
  };

  const handleConvert = () => {
    setError('');
    if (!input.trim()) {
      setOutput('');
      return;
    }
    try {
      if (mode === 'text-to-binary') {
        setOutput(textToBinary(input));
      } else {
        setOutput(binaryToText(input));
      }
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : 'Conversion failed';
      setError(msg);
      setOutput('');
    }
  };

  const toggleMode = () => {
    setMode((prev) => (prev === 'text-to-binary' ? 'binary-to-text' : 'text-to-binary'));
    setInput('');
    setOutput('');
    setError('');
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">
        {mode === 'text-to-binary' ? t('toolCommon.binary.textToBinary') : t('toolCommon.binary.binaryToText')}
      </h2>
      <p className="text-sm text-muted-foreground">
        {t('common.convert')} between plain text and binary representation.
      </p>
      <Button variant="outline" onClick={toggleMode}>
        {t('common.convert')} to {mode === 'text-to-binary' ? t('toolCommon.binary.binaryToText') : t('toolCommon.binary.textToBinary')}
      </Button>
      <textarea
        className="w-full h-32 p-3 border rounded-md resize-y font-mono text-sm"
        placeholder={
          mode === 'text-to-binary'
            ? `${t('common.input')}...`
            : `${t('common.input')}...`
        }
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button onClick={handleConvert}>{t('common.convert')}</Button>
      {error && (
        <div className="p-3 border border-red-300 bg-red-50 rounded-md text-sm text-red-700">
          {error}
        </div>
      )}
      {output && !error && (
        <div className="mt-4">
          <label className="block text-sm font-medium mb-1">{t('common.result')}:</label>
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
            {t('common.copy')}
          </Button>
        </div>
      )}
    </div>
  );
}
