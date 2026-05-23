'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function TextToSlugTool() {
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
        <label className="block text-sm font-medium mb-1">Enter text to convert</label>
        <textarea
          className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g. Hello World! This is a Test..."
        />
      </div>
      <Button onClick={convertToSlug}>Convert to Slug</Button>
      {slug && (
        <div>
          <label className="block text-sm font-medium mb-1">Slug</label>
          <div className="rounded-md border border-input bg-muted px-3 py-2 text-sm font-mono break-all">
            {slug}
          </div>
        </div>
      )}
    </div>
  );
}
