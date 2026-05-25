'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLocale } from "@/lib/i18n/context";

export function PalindromeCheckerTool() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const { t } = useLocale();

  const checkPalindrome = () => {
    if (!input.trim()) {
      setResult(null);
      return;
    }
    // Strip non-alphanumeric characters, lowercase, for the check
    const cleaned = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const isPalindrome = cleaned === cleaned.split('').reverse().join('');
    setResult(isPalindrome ? 'yes' : 'no');
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Enter text to check</label>
        <input
          type="text"
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setResult(null);
          }}
          placeholder="e.g. racecar or A man, a plan, a canal, Panama"
        />
      </div>
      <Button onClick={checkPalindrome}>{t('toolCommon.palindrome.check')}</Button>
      {result === 'yes' && (
        <div className="rounded-md border border-green-500 bg-green-50 dark:bg-green-950 px-3 py-2 text-sm text-green-700 dark:text-green-300">
          {t('toolCommon.palindrome.isPalindrome')}
        </div>
      )}
      {result === 'no' && (
        <div className="rounded-md border border-red-500 bg-red-50 dark:bg-red-950 px-3 py-2 text-sm text-red-700 dark:text-red-300">
          {t('toolCommon.palindrome.notPalindrome')}
        </div>
      )}
    </div>
  );
}
