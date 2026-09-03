"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { messages, type MessageKey } from "@/lib/messages";
import type { Lang, Text } from "@/lib/content";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: MessageKey) => string;
  tx: (text: Text) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function persistLang(next: Lang) {
  window.localStorage.setItem("lang", next);
  document.cookie = `lang=${next}; Path=/; Max-Age=31536000; SameSite=Lax`;
  document.documentElement.lang = next;
  document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
}

export function LanguageProvider({
  children,
  initialLang,
}: {
  children: ReactNode;
  initialLang: Lang;
}) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    const saved = window.localStorage.getItem("lang");
    if (saved === "en" || saved === "ar") {
      persistLang(saved);
      setLangState((current) => (saved === current ? current : saved));
      return;
    }
    persistLang(initialLang);
  }, [initialLang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    persistLang(next);
  }, []);

  const t = useCallback((key: MessageKey) => messages[lang][key] ?? messages.ar[key], [lang]);
  const tx = useCallback((text: Text) => text[lang] ?? text.ar, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, tx }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
