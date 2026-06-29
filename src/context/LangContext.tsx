"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import en from "@/locales/en.json";
import nl from "@/locales/nl.json";
import nlBE from "@/locales/nl-BE.json";
import fr from "@/locales/fr.json";

export type Lang = "en" | "nl" | "nl-BE" | "fr";

const locales: Record<Lang, any> = { en, nl, "nl-BE": nlBE, fr };

const LANG_LABELS: Record<Lang, string> = {
  en: "EN",
  nl: "NL",
  "nl-BE": "NL-BE",
  fr: "FR",
};

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  langLabel: string;
  allLangs: Lang[];
}

const LangContext = createContext<LangContextType>({
  lang: "en",
  setLang: () => {},
  t: (key) => key,
  langLabel: "EN",
  allLangs: ["en", "nl", "nl-BE", "fr"],
});

function getNestedValue(obj: any, key: string): string {
  const keys = key.split(".");
  let val = obj;
  for (const k of keys) {
    if (val && typeof val === "object" && k in val) {
      val = val[k];
    } else {
      return key;
    }
  }
  return typeof val === "string" ? val : key;
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const t = (key: string): string => {
    return getNestedValue(locales[lang], key);
  };

  return (
    <LangContext.Provider value={{
      lang,
      setLang,
      t,
      langLabel: LANG_LABELS[lang],
      allLangs: ["en", "nl", "nl-BE", "fr"],
    }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
