"use client";

import { useLang } from "@/lib/i18n";

export function SkipLink() {
  const { t } = useLang();
  return (
    <a
      href="#content"
      className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-ivory focus:px-4 focus:py-2 focus:text-sm focus:text-ink"
    >
      {t("skip")}
    </a>
  );
}
