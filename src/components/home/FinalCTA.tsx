"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { BookingCta } from "@/components/BookingModal";
import { Button } from "@/components/Button";
import { useLang } from "@/lib/i18n";
import { partners } from "@/lib/content";
import { whatsappHref } from "@/lib/site";

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
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden bg-forest px-5 py-24 text-ivory lg:px-8 lg:py-32">
      <div className="pointer-events-none absolute -end-20 top-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-light leading-snug sm:text-5xl">{t("ctaTitle")}</h2>
        <p className="mx-auto mt-6 max-w-lg text-base leading-8 text-ivory/75">
          {t("ctaLead")}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <BookingCta variant="gold" />
          <Button href={whatsappHref(t("waDefault"))} variant="secondary" external>
            {t("contact")}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
