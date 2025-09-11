import React, { createContext, useContext, useMemo, useState } from 'react';
import en from './en.json';
import zh from './zh.json';

export type SupportedLocale = 'en' | 'zh';

type Messages = Record<string, string>;

interface I18nContextValue {
  locale: SupportedLocale;
  t: (key: string) => string;
  setLocale: (locale: SupportedLocale) => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = 'app_locale';

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [locale, setLocale] = useState<SupportedLocale>(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as SupportedLocale | null;
    if (stored === 'en' || stored === 'zh') return stored;
    const navigatorLang = (
      navigator.language ||
      navigator.languages?.[0] ||
      'en'
    ).toLowerCase();
    return navigatorLang.startsWith('zh') ? 'zh' : 'en';
  });

  const [messages, setMessages] = useState<Messages>(() =>
    locale === 'zh' ? (zh as unknown as Messages) : (en as unknown as Messages)
  );

  // Persist locale selection and update messages synchronously
  React.useEffect(() => {
    localStorage.setItem(STORAGE_KEY, locale);
    setMessages(
      locale === 'zh'
        ? (zh as unknown as Messages)
        : (en as unknown as Messages)
    );
  }, [locale]);

  const t = useMemo(() => {
    return (key: string) => messages[key] ?? key;
  }, [messages]);

  const value = useMemo<I18nContextValue>(
    () => ({ locale, t, setLocale }),
    [locale, t]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
