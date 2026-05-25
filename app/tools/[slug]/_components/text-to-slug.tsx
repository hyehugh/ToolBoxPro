'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/lib/i18n/context';

export function TextToSlugTool() {
  const { t } = useLocale();
  const [input, setInput] = useState('');
  const [slug, setSlug] = useState('');

  const convertToSlug = () => {
    const result = input
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')   // remove non-alphanumeric (keep spaces & hyphens)
      .replace(/[\s_]+/g, '-')    // replace spaces/underscores with hyphens
      .replace(/-+/g, '-')        // collapse multiple hyphens
      .replace(/^-+|-+$/g, '');   // trim leading/trailing hyphens
    setSlug(result);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">{t('toolCommon.textToSlug.input')}</label>
        <textarea
          className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g. Hello World! This is a Test..."
        />
      </div>
      <Button onClick={convertToSlug}>{t('toolCommon.slug.generate')}</Button>
      {slug && (
        <div>
          <label className="block text-sm font-medium mb-1">{t('toolCommon.slug.slug')}</label>
          <div className="rounded-md border border-input bg-muted px-3 py-2 text-sm font-mono break-all">
            {slug}
          </div>
        </div>
      )}
    </div>
  );
}
