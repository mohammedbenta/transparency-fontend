"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { useLang } from "@/lib/i18n";
import { telHref, whatsappHref } from "@/lib/site";

export function StickyActions() {
  const { t } = useLang();
  const pathname = usePathname();
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const form = document.getElementById("quick-book");
    const inView = { hero: false, form: false };

    const apply = () => setHidden(inView.hero || inView.form);

    if (!hero && !form) {
      setHidden(false);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target.id === "hero") inView.hero = entry.isIntersecting;
          if (entry.target.id === "quick-book") inView.form = entry.isIntersecting;
        }
        apply();
      },
      { threshold: 0.08 },
    );

    if (hero) io.observe(hero);
    if (form) io.observe(form);
    return () => io.disconnect();
  }, [pathname]);

  return (
    <div
      className={cn(
        "fixed bottom-6 right-4 z-40 flex flex-col gap-3 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] sm:bottom-8",
        hidden ? "pointer-events-none translate-y-4 opacity-0" : "translate-y-0 opacity-100",
      )}
    >
      <a
        href={telHref}
        aria-label={t("callAria")}
        className="group grid h-14 w-14 place-items-center rounded-full text-ink shadow-[0_18px_44px_-18px_rgba(194,160,106,0.9),0_0_0_1px_rgba(255,252,245,0.25)_inset] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] [background-image:linear-gradient(160deg,#e7d3ab_0%,#c2a06a_42%,#8d6c3e_100%)] hover:-translate-y-0.5 hover:text-ivory hover:shadow-[0_24px_54px_-18px_rgba(194,160,106,1)] hover:[background-image:linear-gradient(160deg,#c2a06a_0%,#967548_55%,#7a5c32_100%)]"
      >
        <PhoneIcon />
      </a>
      <a
        href={whatsappHref(t("waDefault"))}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("waAria")}
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_18px_44px_-18px_rgba(37,211,102,0.9)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-[#1ebe57] hover:shadow-[0_24px_54px_-18px_rgba(37,211,102,1)]"
      >
        <WhatsAppIcon className="h-7 w-7 fill-current" />
      </a>
    </div>
  );
}

export function WhatsAppIcon({ className = "h-4 w-4 fill-current" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.55 2 2.08 6.46 2.08 11.96c0 1.76.46 3.47 1.34 4.98L2 22l5.21-1.37a9.9 9.9 0 0 0 4.83 1.23h.01c5.49 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.96-7zM12.05 20.11h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.09.81.83-3.01-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.2-8.26 8.2zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.24-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.24.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.41-.56-.42l-.48-.01c-.16 0-.43.06-.65.31-.22.24-.86.84-.86 2.05s.88 2.38 1 2.54c.12.16 1.73 2.64 4.19 3.7.59.25 1.04.4 1.4.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7 fill-current"
      aria-hidden
    >
      <path d="M6.6 10.8c1.4 2.7 3.9 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11.6 21 3 12.4 3 2c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2.2 2.9z" />
    </svg>
  );
}
