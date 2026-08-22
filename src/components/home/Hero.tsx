"use client";

import Image from "next/image";
import { BookingCta } from "@/components/BookingModal";
import { Button } from "@/components/Button";
import { useLang } from "@/lib/i18n";
import { whatsappHref } from "@/lib/site";

export function Hero() {
  const { t } = useLang();

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-charcoal text-ivory">
      <Image
        src="/images/clinic/reception.jpg"
        alt={t("heroTrust")}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_50%] opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-charcoal/85 via-charcoal/55 to-charcoal/25 rtl:bg-gradient-to-r" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/40" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-28 pt-32 lg:justify-center lg:px-8 lg:pb-24 lg:pt-28">
        <p className="text-[11px] tracking-[0.28em] text-gold uppercase">
          {t("heroEyebrow")}
        </p>
        <h1 className="mt-5 max-w-3xl text-[2.35rem] font-light leading-[1.25] sm:text-5xl lg:text-[4.1rem] lg:leading-[1.15]">
          {t("heroTitle")}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-8 text-ivory/75 sm:text-lg">
          {t("heroLead")}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <BookingCta variant="gold" arrow={false} className="btn-cta" />
          <Button
            href={whatsappHref(t("waDefault"))}
            variant="secondary"
            external
            arrow={false}
          >
            {t("whatsapp")}
          </Button>
        </div>
        <p className="mt-10 text-xs tracking-wide text-ivory/55">{t("heroTrust")}</p>
      </div>
    </section>
  );
}
