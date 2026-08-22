"use client";

import { whatsappHref } from "@/lib/site";
import { useLang } from "@/lib/i18n";

export function WhatsAppButton() {
  const { t } = useLang();
  return (
    <a
      href={whatsappHref(t("waDefault"))}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 end-4 z-40 hidden h-12 items-center gap-2 rounded-full bg-[#1f6b4a] px-4 text-sm text-white shadow-[0_16px_40px_-18px_rgba(31,107,74,0.8)] transition hover:bg-[#17553b] lg:inline-flex"
      aria-label={t("waAria")}
    >
      <WhatsAppIcon />
      <span className="hidden md:inline">{t("whatsappFloat")}</span>
    </a>
  );
}

export function WhatsAppIcon({ className = "h-4 w-4 fill-current" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.55 2 2.08 6.46 2.08 11.96c0 1.76.46 3.47 1.34 4.98L2 22l5.21-1.37a9.9 9.9 0 0 0 4.83 1.23h.01c5.49 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.96-7zM12.05 20.11h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.09.81.83-3.01-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.2-8.26 8.2zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.24-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.24.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.41-.56-.42l-.48-.01c-.16 0-.43.06-.65.31-.22.24-.86.84-.86 2.05s.88 2.38 1 2.54c.12.16 1.73 2.64 4.19 3.7.59.25 1.04.4 1.4.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
    </svg>
  );
}
