"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/lib/i18n";
import { clinicGallery } from "@/lib/content";

export function ClinicExperience() {
  const { t, tx } = useLang();

  return (
    <section id="experience" className="bg-ivory px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-[11px] tracking-[0.28em] text-gold-deep uppercase">
            {t("experienceEyebrow")}
          </p>
          <h2 className="mt-5 max-w-2xl text-3xl font-light leading-snug sm:text-5xl">
            {t("experienceTitle")}
          </h2>
          <p className="mt-5 max-w-xl text-muted">{t("experienceLead")}</p>
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-12 md:grid-rows-2">
          {clinicGallery.map((item, i) => (
            <Reveal
              key={item.src}
              delay={i * 70}
              className={
                i === 0
                  ? "md:col-span-7 md:row-span-2"
                  : i === 3
                    ? "md:col-span-12"
                    : "md:col-span-5"
              }
            >
              <figure className="img-zoom relative aspect-[4/5] md:h-full md:min-h-[16rem] md:aspect-auto">
                <Image
                  src={item.src}
                  alt={tx(item.alt)}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/70 to-transparent p-5 text-sm text-ivory">
                  {tx(item.caption)}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
