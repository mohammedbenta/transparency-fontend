"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { cn, displayHeading } from "@/lib/cn";
import { useLang } from "@/lib/i18n";
import { ceoValues } from "@/lib/content";

export function CEOStory() {
  const { t, tx, lang } = useLang();

  return (
    <section className="relative bg-ivory px-5 py-28 lg:px-8 lg:py-40">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line to-transparent"
      />
      <div className="mx-auto grid max-w-7xl items-stretch gap-14 lg:grid-cols-12 lg:gap-24">
        <Reveal
          className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-ink shadow-[0_10px_28px_-6px_rgba(20,19,17,0.16)] sm:aspect-[3/4] lg:col-span-5 lg:aspect-auto lg:min-h-[42rem]"
        >
          <Image
            src="/images/doctors/ahmed-nawawi-ceo.jpg"
            alt={t("ceoName")}
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover object-[50%_20%] transition-transform duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 text-ivory sm:p-10">
            <span
              aria-hidden
              className="mb-5 block h-px w-10 bg-gradient-to-l from-gold to-transparent"
            />
            <p className="text-xl font-light leading-snug tracking-[-0.01em] sm:text-[1.6rem]">
              {t("ceoName")}
            </p>
            <p className="mt-2 text-[11px] tracking-[0.28em] text-gold uppercase">
              {t("ceoRole")}
            </p>
          </div>
        </Reveal>

        <Reveal delay={100} className="flex flex-col justify-center lg:col-span-7 lg:py-6">
          <div className="flex w-full max-w-xl flex-col">
          <div className="flex items-center gap-4">
            <span aria-hidden className="h-px w-10 bg-gold/70" />
            <p className="text-[11px] tracking-[0.32em] text-gold-deep uppercase">
              {t("ceoEyebrow")}
            </p>
          </div>
          <h2
            className={cn(
              "mt-7 text-3xl leading-[1.15] sm:text-[3.15rem]",
              displayHeading(lang),
            )}
          >
            {t("ceoTitle")}
          </h2>
          <blockquote className="relative mt-10 text-lg font-light leading-9 text-ink/75 sm:text-[1.3rem] sm:leading-[1.75]">
            <span
              aria-hidden
              className="absolute -top-6 -start-1 font-serif text-6xl leading-none text-gold/40 select-none sm:-top-8 sm:text-7xl"
            >
              “
            </span>
            {t("ceoQuote")}
          </blockquote>
          <div className="mt-8 flex items-center gap-4">
            <span
              aria-hidden
              className="font-serif text-3xl italic text-gold-deep/85 sm:text-[2rem]"
            >
              {t("ceoSign")}
            </span>
            <span aria-hidden className="h-px flex-1 max-w-16 bg-gold/40" />
            <span className="text-[11px] tracking-[0.28em] text-muted uppercase">
              {t("ceoRole")}
            </span>
          </div>

          <ul className="mt-16 grid w-full grid-cols-1 items-stretch gap-px overflow-hidden rounded-[1.35rem] border border-gold/25 bg-gold/15 sm:grid-cols-3">
            {ceoValues.map((item) => (
              <li
                key={item.id}
                className="group relative flex h-full flex-row items-start gap-4 bg-ivory p-5 transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-surface sm:flex-col sm:gap-5 sm:p-6"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/45 bg-gold/[0.04] text-gold-deep transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-gold group-hover:bg-gold/10 group-hover:text-gold-deep">
                  <ValueIcon id={item.id} />
                </span>
                <span
                  aria-hidden
                  className="hidden h-px w-8 bg-gradient-to-l from-gold/70 to-transparent transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-14 group-hover:from-gold sm:block"
                />
                <div className="min-w-0 flex-1">
                  <p className="text-[15px] font-medium tracking-[-0.005em] text-ink sm:text-base">
                    {tx(item.label)}
                  </p>
                  <p className="mt-2 text-[13.5px] font-light leading-7 text-muted sm:mt-3 sm:text-sm sm:leading-7">
                    {tx(item.body)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ValueIcon({ id }: { id: (typeof ceoValues)[number]["id"] }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    className: "h-7 w-7",
    "aria-hidden": true as const,
  };

  if (id === "care-luxury") {
    return (
      <svg {...common}>
        <path
          d="M12 20.4c-4.4-3.6-7.2-6.6-7.2-10.1A4.15 4.15 0 0 1 12 6.4a4.15 4.15 0 0 1 7.2 3.9c0 3.5-2.8 6.5-7.2 10.1Z"
          stroke="currentColor"
          strokeWidth="1.55"
          strokeLinejoin="round"
        />
        <path
          d="M12 4.2v1.4M16.1 5.15l-.7 1.2M7.9 5.15l.7 1.2"
          stroke="currentColor"
          strokeWidth="1.45"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (id === "private-visit") {
    return (
      <svg {...common}>
        <path
          d="M12 3.6 5.4 6.2v5.6c0 4.2 2.8 8 6.6 9.2 3.8-1.2 6.6-5 6.6-9.2V6.2L12 3.6Z"
          stroke="currentColor"
          strokeWidth="1.55"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10.6" r="1.7" stroke="currentColor" strokeWidth="1.45" />
        <path
          d="M9.6 15.1c.6-1.2 1.5-1.8 2.4-1.8s1.8.6 2.4 1.8"
          stroke="currentColor"
          strokeWidth="1.45"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path
        d="M4.6 19.4V9.8L12 4.8l7.4 5v9.6"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M9.4 19.4v-5.2h5.2v5.2"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinejoin="round"
      />
      <path
        d="M8.2 11.6h7.6"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
      />
    </svg>
  );
}
