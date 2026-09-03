import type { Lang } from "@/lib/content";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function displayHeading(lang: Lang) {
  return lang === "en"
    ? "font-serif font-medium tracking-[-0.02em]"
    : "font-light tracking-[-0.015em]";
}

export function formatFromUsd(lang: Lang, amount: number) {
  const n = amount.toLocaleString(lang === "ar" ? "ar-SA" : "en-US");
  return lang === "ar" ? `تبدأ من ${n} دولار` : `From $${n}`;
}
