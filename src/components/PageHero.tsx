"use client";

import { cn, displayHeading } from "@/lib/cn";
import { useLang } from "@/lib/i18n";

export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  const { lang } = useLang();

  return (
    <header className="relative overflow-hidden bg-charcoal px-5 pb-20 pt-36 text-ivory lg:px-8 lg:pt-44 lg:pb-24">
      <div aria-hidden className="page-hero-glow pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-7xl">
        <p className="eyebrow-rule text-[11px] tracking-[0.32em] text-gold uppercase">
          {eyebrow}
        </p>
        <h1
          className={cn(
            "mt-7 max-w-2xl text-4xl leading-[1.12] sm:text-6xl",
            displayHeading(lang),
          )}
        >
          {title}
        </h1>
        {lead ? (
          <p className="mt-6 max-w-xl text-lg font-light leading-8 text-ivory/70">
            {lead}
          </p>
        ) : null}
      </div>
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-l from-transparent via-gold/55 to-transparent"
      />
    </header>
  );
}
