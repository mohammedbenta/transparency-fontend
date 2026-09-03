"use client";

import Image from "next/image";
import { useLang } from "@/lib/i18n";
import { partners } from "@/lib/content";
import { site } from "@/lib/site";

export function Partners() {
  const { t } = useLang();
  return (
    <section className="border-t border-line bg-charcoal px-5 py-16 text-ivory lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-[11px] tracking-[0.28em] text-gold uppercase">
          {t("partnersEyebrow")}
        </p>
        <h2 className="mt-3 text-2xl font-light">{t("partnersTitle")}</h2>
        <p className="mt-2 text-sm text-ivory/50">{t("partnersLead")}</p>
        <div className="mt-10 flex flex-wrap items-center gap-10">
          {partners.map((p) => (
            <Image
              key={p.name}
              src={p.src}
              alt={p.name}
              width={160}
              height={48}
              className="h-8 w-auto object-contain opacity-80"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  const { t, lang } = useLang();
  const address = lang === "ar" ? site.addressAr : site.addressEn;
  const days = lang === "ar" ? site.hours.daysAr : site.hours.daysEn;
  const time = lang === "ar" ? site.hours.timeAr : site.hours.timeEn;

  return (
    <section className="relative overflow-hidden bg-forest px-5 py-24 text-ivory lg:px-8 lg:py-32">
      <div className="pointer-events-none absolute -end-24 -top-8 h-80 w-80 rounded-full bg-gold/10 blur-[110px]" />
      <div className="pointer-events-none absolute -start-32 bottom-0 h-96 w-96 rounded-full bg-gold/[0.06] blur-[130px]" />
      <div
        dir="ltr"
        className="relative mx-auto grid max-w-7xl items-stretch gap-12 lg:grid-cols-12 lg:gap-16"
      >
        <div className="relative order-2 min-h-[22rem] overflow-hidden rounded-[1.25rem] ring-1 ring-ivory/[0.08] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.5)] lg:order-1 lg:col-span-7 lg:min-h-[32rem]">
          <iframe
            title={t("locationTitle")}
            src={site.mapsEmbed}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="order-1 flex flex-col justify-center lg:order-2 lg:col-span-5">
          <div dir={lang === "ar" ? "rtl" : "ltr"}>
            <div className="flex items-center gap-4">
              <span aria-hidden className="h-px w-10 bg-gold/70" />
              <p className="text-[11px] tracking-[0.32em] text-gold uppercase">
                {t("locationTitle")}
              </p>
            </div>
            <h2 className="mt-7 text-3xl font-light leading-[1.15] tracking-[-0.01em] sm:text-[3.15rem]">
              {t("footerVisit")}
            </h2>
            <span className="mt-8 block h-px w-12 bg-gradient-to-l from-gold to-transparent" />
            <p className="mt-8 max-w-sm text-lg font-light leading-8 text-ivory/85">
              {address}
            </p>
            <p className="mt-8 text-[11px] tracking-[0.28em] text-gold uppercase">
              {t("footerHours")}
            </p>
            <p className="mt-3 text-lg font-light">{days}</p>
            <p className="mt-1 text-ivory/55">{time}</p>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-3 text-[12.5px] tracking-[0.05em] text-gold transition"
            >
              <span className="border-b border-gold/40 pb-0.5 transition group-hover:border-gold">
                {t("mapsOpen")}
              </span>
              <span
                aria-hidden
                className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
