"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLang } from "@/lib/i18n";
import { navItems } from "@/lib/content";
import { cn } from "@/lib/cn";
import { whatsappHref } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onLight = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
        onLight
          ? "bg-ivory/85 shadow-[0_1px_0_0_rgba(20,19,17,0.06),0_20px_44px_-28px_rgba(20,19,17,0.35)] backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] lg:px-8",
          scrolled ? "py-2.5" : "py-5",
        )}
      >
        <Logo priority onClick={() => setOpen(false)} />

        <nav
          className="hidden items-center gap-7 text-[12.5px] tracking-[0.03em] lg:flex"
          aria-label={t("navAria")}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative py-1 transition-colors duration-500 after:absolute after:start-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-500 after:ease-[cubic-bezier(0.16,1,0.3,1)] hover:after:w-full",
                onLight ? "text-ink/75 hover:text-ink" : "text-ivory/80 hover:text-ivory",
              )}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2.5">
          <LanguageSwitcher onLight={onLight} />
          <Link
            href="/#quick-book"
            className={cn(
              "hidden h-10 items-center rounded-full px-5 text-[12.5px] font-medium tracking-[0.05em] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:inline-flex",
              onLight
                ? "bg-forest text-ivory hover:bg-forest-deep hover:-translate-y-[1px] shadow-[0_10px_24px_-16px_rgba(28,59,52,0.6)] hover:shadow-[0_18px_32px_-16px_rgba(28,59,52,0.75)]"
                : "border border-ivory/25 bg-ivory/10 text-ivory backdrop-blur hover:border-gold hover:bg-gold hover:text-ink",
            )}
          >
            {t("book")}
          </Link>
          <button
            type="button"
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full border lg:hidden",
              onLight ? "border-ink/15 text-ink" : "border-ivory/30 text-ivory",
            )}
            aria-label={open ? t("menuClose") : t("menuOpen")}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="flex flex-col gap-1.5">
              <span
                className={cn(
                  "block h-px w-4 bg-current transition",
                  open && "translate-y-[3.5px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-px w-4 bg-current transition",
                  open && "-translate-y-[3.5px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line/60 bg-ivory/95 px-6 py-10 backdrop-blur-xl lg:hidden">
          <nav
            className="flex flex-col divide-y divide-line/70 text-ink"
            aria-label={t("menu")}
          >
            {navItems.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between py-4 text-[1.35rem] font-light tracking-[-0.01em] transition-colors hover:text-gold-deep"
              >
                <span>{t(item.key)}</span>
                <span className="font-serif text-[11px] tracking-[0.28em] text-gold-deep/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </Link>
            ))}
          </nav>
          <div className="mt-10 flex flex-col gap-3">
            <Link
              href="/#quick-book"
              onClick={() => setOpen(false)}
              className="rounded-full bg-forest py-4 text-center text-[13px] font-medium tracking-[0.05em] text-ivory shadow-[0_18px_38px_-20px_rgba(28,59,52,0.75)] transition hover:bg-forest-deep"
            >
              {t("book")}
            </Link>
            <a
              href={whatsappHref(t("waDefault"))}
              className="rounded-full border border-ink/12 py-4 text-center text-[13px] tracking-[0.05em] transition hover:border-gold-deep hover:text-gold-deep"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              {t("whatsappShort")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
