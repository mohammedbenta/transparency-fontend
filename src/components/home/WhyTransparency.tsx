"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/lib/i18n";
import { principles } from "@/lib/content";

export function WhyTransparency() {
  const { t, tx } = useLang();

  return (
    <section className="bg-ivory px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-end gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <p className="text-[11px] tracking-[0.28em] text-gold-deep uppercase">
            {t("whyEyebrow")}
          </p>
          <h2 className="mt-5 max-w-xl text-3xl font-light leading-snug sm:text-5xl">
            {t("whyTitle")}
            <span className="mt-2 block text-forest">{t("whyTitle2")}</span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-8 text-muted">{t("whyLead")}</p>
        </Reveal>
        <Reveal delay={120} className="relative aspect-[4/5] lg:col-span-5">
          <div className="img-zoom absolute inset-0">
            <Image
              src="/images/clinic/lounge.jpg"
              alt={t("experienceTitle")}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>

      <div className="mx-auto mt-20 grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {principles.map((p, i) => (
          <Reveal key={p.num} delay={i * 80}>
            <p className="font-serif text-3xl text-gold">{p.num}</p>
            <div className="gold-rule mt-4" />
            <h3 className="mt-5 text-xl font-medium">{tx(p.title)}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{tx(p.body)}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
