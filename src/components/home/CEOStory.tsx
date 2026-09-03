"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/lib/i18n";
import { ceoValues } from "@/lib/content";

export function CEOStory() {
  const { t, tx } = useLang();

  return (
    <section className="relative bg-ivory px-5 py-28 lg:px-8 lg:py-40">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line to-transparent"
      />
      <div className="mx-auto grid max-w-7xl items-stretch gap-14 lg:grid-cols-12 lg:gap-24">
        <Reveal
          className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-ink shadow-[0_40px_80px_-40px_rgba(20,19,17,0.35)] sm:aspect-[3/4] lg:col-span-5 lg:aspect-auto lg:min-h-[42rem]"
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
          <div className="flex items-center gap-4">
            <span aria-hidden className="h-px w-10 bg-gold/70" />
            <p className="text-[11px] tracking-[0.32em] text-gold-deep uppercase">
              {t("ceoEyebrow")}
            </p>
          </div>
          <h2 className="mt-7 max-w-xl text-3xl font-light leading-[1.15] tracking-[-0.01em] sm:text-[3.15rem]">
            {t("ceoTitle")}
          </h2>
          <blockquote className="relative mt-10 max-w-xl text-lg font-light leading-9 text-ink/75 sm:text-[1.3rem] sm:leading-[1.75]">
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

          <ul className="mt-16 grid gap-px overflow-hidden rounded-[1.25rem] border border-line bg-line sm:grid-cols-3">
            {ceoValues.map((item, i) => (
              <li
                key={item.id}
                className="group relative flex flex-col gap-5 bg-ivory p-7 transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-surface sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/45 bg-gold/[0.04] text-gold-deep transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-gold group-hover:bg-gold/10 group-hover:text-gold-deep">
                    <ValueIcon id={item.id} />
                  </span>
                  <span className="font-serif text-xl italic text-gold-deep/50">
                    0{i + 1}
                  </span>
                </div>
                <span
                  aria-hidden
                  className="h-px w-8 bg-gradient-to-l from-gold/70 to-transparent transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-14 group-hover:from-gold"
                />
                <div>
                  <p className="text-[15px] font-medium tracking-[-0.005em] text-ink sm:text-base">
                    {tx(item.label)}
                  </p>
                  <p className="mt-3 text-[13.5px] font-light leading-7 text-muted sm:text-sm sm:leading-7">
                    {tx(item.body)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
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

  if (id === "beyond") {
    return (
      <svg {...common}>
        <path
          d="M3.5 18.5 9 10.5l3.2 4.2L16.2 8l4.3 10.5"
          stroke="currentColor"
          strokeWidth="1.55"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          d="M12.2 5.2 13 7.1l2 .6-1.6 1.3.5 2-1.9-1.1-1.9 1.1.5-2-1.6-1.3 2-.6z"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (id === "personalized") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="2.1" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="5.4" stroke="currentColor" strokeWidth="1.45" />
        <path
          d="M12 3.4a8.6 8.6 0 0 1 8.6 8.6"
          stroke="currentColor"
          strokeWidth="1.45"
          strokeLinecap="round"
        />
        <path
          d="M12 20.6A8.6 8.6 0 0 1 3.4 12"
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
        d="M5.2 19.2V11.4A6.8 6.8 0 0 1 12 4.6a6.8 6.8 0 0 1 6.8 6.8v7.8"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
      />
      <path
        d="M5.2 19.2h13.6"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
      />
      <path
        d="M12 4.6v7.4"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
      />
      <circle cx="12" cy="13.4" r="1.15" fill="currentColor" />
    </svg>
  );
}
