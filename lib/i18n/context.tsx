"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import { en } from "./en";
import { zh } from "./zh";

type Locale = "en" | "zh";

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, params?: Record<string, any>) => any;
}

const LocaleContext = createContext<LocaleContextType | null>(null);

const STORAGE_KEY = "toolboxpro_locale";

const dictionaries: Record<Locale, Record<string, any>> = { en, zh };

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
    } catch {}
    document.documentElement.lang = newLocale;
  }, []);

  const t = useCallback(
    (key: string, params?: Record<string, any>): any => {
      const keys = key.split(".");
      let value: any = dict;
      for (const k of keys) {
        if (value && typeof value === "object" && k in value) {
          value = value[k];
        } else {
          console.warn(`[i18n] Missing key: ${key}`);
          return key;
        }
      }
      if (typeof value === "string" && params) {
        for (const [k, v] of Object.entries(params)) {
          value = value.replace(`{${k}}`, String(v));
        }
      }
      return typeof value === "string" ? value : value;
    },
    [dict]
  );

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
