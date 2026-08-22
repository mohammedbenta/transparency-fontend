"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/lib/i18n";
import { services } from "@/lib/content";

export function ServicesShowcase({
  limit,
  hideIntro = false,
}: {
  limit?: number;
  hideIntro?: boolean;
}) {
  const { t, tx } = useLang();
  const list = limit ? services.slice(0, limit) : services;

  return (
    <section id="services" className="bg-charcoal px-5 py-24 text-ivory lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {!hideIntro && (
        <Reveal>
          <p className="text-[11px] tracking-[0.28em] text-gold uppercase">
            {t("servicesEyebrow")}
          </p>
          <h2 className="mt-5 max-w-2xl text-3xl font-light leading-snug sm:text-5xl">
            {t("servicesTitle")}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-ivory/65">
            {t("servicesLead")}
          </p>
        </Reveal>
        )}

        <div className="mt-16 divide-y divide-white/10 border-y border-white/10">
          {list.map((s, i) => (
            <Reveal key={s.slug} delay={i * 40}>
              <Link
                href={`/services/${s.slug}`}
                className="group grid gap-6 py-8 md:grid-cols-12 md:items-center md:py-10"
              >
                <span className="font-serif text-2xl text-gold md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="md:col-span-4">
                  <h3 className="text-2xl font-light">{tx(s.name)}</h3>
                  <p className="mt-2 text-sm leading-7 text-ivory/60">{tx(s.problem)}</p>
                </div>
                <p className="text-sm leading-7 text-ivory/55 md:col-span-5">
                  {tx(s.summary)}
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-gold md:col-span-2 md:justify-end">
                  {t("discoverService")}
                  <span className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                    →
                  </span>
                </span>
                <div className="img-zoom relative hidden h-28 overflow-hidden md:col-span-12 md:block lg:hidden">
                  <Image
                    src={s.image}
                    alt={tx(s.imageAlt)}
                    fill
                    sizes="100vw"
                    className="object-cover opacity-80"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {limit && (
          <div className="mt-12">
            <Link
              href="/services"
              className="text-sm text-gold underline-offset-8 hover:underline"
            >
              {t("allServices")}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
