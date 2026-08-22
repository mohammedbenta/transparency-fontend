"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/lib/i18n";

export function CEOStory() {
  const { t } = useLang();

  return (
    <section className="bg-forest-deep px-5 py-24 text-ivory lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12">
        <Reveal className="relative aspect-[4/5] overflow-hidden lg:col-span-5">
          <Image
            src="/images/clinic/consent.jpg"
            alt={t("ceoName")}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <p className="text-[11px] tracking-[0.22em] text-gold uppercase">
              {t("ceoEyebrow")}
            </p>
            <p className="mt-2 text-xl">{t("ceoName")}</p>
            <p className="text-sm text-ivory/65">{t("ceoRole")}</p>
          </div>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-7">
          <h2 className="text-3xl font-light leading-snug sm:text-5xl">
            {t("ceoTitle")}
          </h2>
          <div className="gold-rule mt-8" />
          <blockquote className="mt-8 max-w-2xl text-lg font-light leading-9 text-ivory/85 sm:text-2xl sm:leading-10">
            {t("ceoQuote")}
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
