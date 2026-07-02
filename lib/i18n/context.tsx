"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import { en } from "./en";
import { zh } from "./zh";

type Locale = "en" | "zh";

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
  tArray: (key: string) => string[];
  tRaw: (key: string) => unknown;
}

const LocaleContext = createContext<LocaleContextType | null>(null);

const STORAGE_KEY = "toolboxpro_locale";

type DictValue = string | { [key: string]: DictValue };
type Dictionary = Record<string, DictValue>;
const dictionaries: Record<Locale, Dictionary> = { en, zh };

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [dict, setDict] = useState(dictionaries.en);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "zh" || saved === "en") {
      setLocaleState(saved);
      setDict(dictionaries[saved]);
    }
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    setDict(dictionaries[newLocale]);
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
    } catch (e) {
      console.warn("Failed to save locale preference:", e);
    }
    document.documentElement.lang = newLocale;
  }, []);

  const getValue = useCallback(
    (key: string): DictValue | undefined => {
      const keys = key.split(".");
      let value: DictValue | undefined = dict as DictValue;
      for (const k of keys) {
        if (value && typeof value === "object" && k in value) {
          value = value[k];
        } else {
          console.warn(`[i18n] Missing key: ${key}`);
          return undefined;
        }
      }
      return value;
    },
    [dict]
  );

  const t = useCallback(
    (key: string, params?: Record<string, string | number>): string => {
      const result = getValue(key);
      if (typeof result === "string") {
        if (params) {
          let s = result;
          for (const [k, v] of Object.entries(params)) {
            s = s.replace(`{${k}}`, String(v));
          }
          return s;
        }
        return result;
      }
      return key;
    },
    [dict]
  );

  const tArray = useCallback(
    (key: string): string[] => {
      const result = getValue(key);
      if (Array.isArray(result)) return result as string[];
      console.warn(`[i18n] Missing array key: ${key}`);
      return [];
    },
    [dict]
  );

  const tRaw = useCallback(
    (key: string): unknown => getValue(key),
    [dict]
  );

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, tArray, tRaw }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
