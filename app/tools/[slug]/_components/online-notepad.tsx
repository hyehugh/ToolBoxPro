'use client';

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { useLocale } from "@/lib/i18n/context";

const STORAGE_KEY = 'toolboxpro-notepad';

export function OnlineNotepadTool() {
  const [text, setText] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [savedAt, setSavedAt] = useState<string | null>(null);
  const { t } = useLocale();

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved !== null) {
        setText(saved);
      }
    } catch (e) {
      // localStorage might be unavailable (private browsing, quota exceeded)
      console.warn("Failed to load notepad from localStorage:", e);
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
      } catch (e) {
        // storage full or unavailable
        console.warn("Failed to save notepad to localStorage:", e);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [text, isLoaded]);

  const handleClear = useCallback(() => {
    setText('');
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      // ignore quota errors
      console.warn("Failed to clear notepad localStorage:", e);
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
          placeholder={t('toolCommon.notepad.autosave')}
          className="w-full min-h-[400px] p-4 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-y"
        />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex gap-4 text-xs text-muted-foreground">
          <span>{charCount} {t('toolCommon.notepad.charCount')}</span>
          <span>{wordCount} {t('toolCommon.notepad.wordCount')}</span>
          <span>{lineCount} lines</span>
          {savedAt && <span>{t('toolCommon.notepad.saved')} {savedAt}</span>}
        </div>

        {showClearConfirm ? (
          <div className="flex items-center gap-2">
            <span className="text-xs text-red-500">Clear all content?</span>
            <Button variant="destructive" size="sm" onClick={handleClear}>
              Yes, Clear
            </Button>
            <Button variant="outline" size="sm" onClick={() => setShowClearConfirm(false)}>
              {t('common.cancel')}
            </Button>
          </div>
        ) : (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowClearConfirm(true)}
            disabled={!text}
          >
            {t('common.clear')}
          </Button>
        )}
      </div>
    </div>
  );
}
