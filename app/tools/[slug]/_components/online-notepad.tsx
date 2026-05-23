'use client';

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';

const STORAGE_KEY = 'toolboxpro-notepad';

export function OnlineNotepadTool() {
  const [text, setText] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [savedAt, setSavedAt] = useState<string | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved !== null) {
        setText(saved);
      }
    } catch {
      // localStorage might be unavailable
    }
    setIsLoaded(true);
  }, []);

  // Auto-save to localStorage with debounce
  useEffect(() => {
    if (!isLoaded) return;
    const timer = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, text);
        setSavedAt(new Date().toLocaleTimeString());
      } catch {
        // storage full or unavailable
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [text, isLoaded]);

  const handleClear = useCallback(() => {
    setText('');
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setShowClearConfirm(false);
    setSavedAt(null);
  }, []);

  const charCount = text.length;
  const wordCount = text.trim()
    ? text.trim().split(/\s+/).filter(Boolean).length
    : 0;
  const lineCount = text ? text.split('\n').length : 0;

  if (!isLoaded) {
    return <div className="h-48 animate-pulse rounded-md bg-muted" />;
  }

  return (
    <div className="space-y-3">
      <div className="space-y-1">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing here... Your notes are saved automatically."
          className="w-full min-h-[400px] p-4 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-y"
        />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex gap-4 text-xs text-muted-foreground">
          <span>{charCount} characters</span>
          <span>{wordCount} words</span>
          <span>{lineCount} lines</span>
          {savedAt && <span>Saved at {savedAt}</span>}
        </div>

        {showClearConfirm ? (
          <div className="flex items-center gap-2">
            <span className="text-xs text-red-500">Clear all content?</span>
            <Button variant="destructive" size="sm" onClick={handleClear}>
              Yes, Clear
            </Button>
            <Button variant="outline" size="sm" onClick={() => setShowClearConfirm(false)}>
              Cancel
            </Button>
          </div>
        ) : (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowClearConfirm(true)}
            disabled={!text}
          >
            Clear
          </Button>
        )}
      </div>
    </div>
  );
}
