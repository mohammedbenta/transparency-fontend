"use client";

import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { FinalCTA } from "@/components/home/FinalCTA";
import { useLang } from "@/lib/i18n";

export default function ServicesPage() {
  const { t } = useLang();
  return (
    <>
      <header className="bg-charcoal px-5 pb-16 pt-32 text-ivory lg:px-8 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] tracking-[0.28em] text-gold uppercase">
            {t("servicesEyebrow")}
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-light leading-snug sm:text-5xl">
            {t("servicesTitle")}
          </h1>
          <p className="mt-5 max-w-xl text-ivory/70">{t("servicesLead")}</p>
        </div>
      </header>
      <ServicesShowcase hideIntro />
      <FinalCTA />
    </>
  );
}
