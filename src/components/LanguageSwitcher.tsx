"use client";

import { cn } from "@/lib/cn";
import { useLang } from "@/lib/i18n";

export function LanguageSwitcher({
  onLight = false,
}: {
  onLight?: boolean;
}) {
  const { lang, setLang, t } = useLang();

  return (
    <div
      className={cn(
        "flex h-9 overflow-hidden rounded-full border text-[11px] font-medium tracking-wide",
        onLight ? "border-ink/15" : "border-ivory/25",
      )}
      role="group"
      aria-label={t("lang")}
    >
      <button
        type="button"
        onClick={() => setLang("ar")}
        className={cn(
          "h-9 px-2.5 transition",
          lang === "ar"
            ? onLight
              ? "bg-forest text-ivory"
              : "bg-ivory text-ink"
            : onLight
              ? "text-muted hover:text-ink"
              : "text-ivory/75 hover:text-ivory",
        )}
        aria-pressed={lang === "ar"}
        aria-label={t("ar")}
      >
        AR
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={cn(
          "h-9 px-2.5 transition",
          lang === "en"
            ? onLight
              ? "bg-forest text-ivory"
              : "bg-ivory text-ink"
            : onLight
              ? "text-muted hover:text-ink"
              : "text-ivory/75 hover:text-ivory",
        )}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}
