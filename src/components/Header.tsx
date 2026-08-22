"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useBooking } from "@/components/BookingModal";
import { useLang } from "@/lib/i18n";
import { navItems } from "@/lib/content";
import { cn } from "@/lib/cn";
import { whatsappHref } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { openBooking } = useBooking();
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
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        onLight
          ? "bg-ivory/92 shadow-[0_12px_40px_-24px_rgba(20,19,17,0.35)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 transition-all duration-500 lg:px-8",
          scrolled ? "py-2.5" : "py-4",
        )}
      >
        <Logo priority onLight={onLight} onClick={() => setOpen(false)} />

        <nav
          className="hidden items-center gap-6 text-[13px] lg:flex"
          aria-label={t("navAria")}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative py-1 transition-colors after:absolute after:start-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full",
                onLight ? "text-ink/80 hover:text-ink" : "text-ivory/85 hover:text-ivory",
              )}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <LanguageSwitcher onLight={onLight} />
          <button
            type="button"
            onClick={() => openBooking()}
            className={cn(
              "hidden h-10 items-center rounded-full px-4 text-[13px] font-medium transition lg:inline-flex",
              onLight
                ? "bg-forest text-ivory hover:bg-forest-deep"
                : "bg-ivory text-ink hover:bg-gold",
            )}
          >
            {t("book")}
          </button>
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
        <div className="border-t border-line bg-ivory px-6 py-8 lg:hidden">
          <nav className="flex flex-col gap-4 text-lg text-ink" aria-label={t("menu")}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-1"
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>
          <div className="mt-8 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                openBooking();
              }}
              className="rounded-full bg-forest py-3.5 text-center font-medium text-ivory"
            >
              {t("book")}
            </button>
            <a
              href={whatsappHref(t("waDefault"))}
              className="rounded-full border border-ink/10 py-3.5 text-center text-sm"
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
