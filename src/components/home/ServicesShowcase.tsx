"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { cn, displayHeading, formatFromUsd } from "@/lib/cn";
import { useLang } from "@/lib/i18n";
import { featuredServices } from "@/lib/content";

export function ServicesShowcase({ hideIntro = false }: { hideIntro?: boolean }) {
  const { t, tx, lang } = useLang();

  return (
    <section id="services" className="relative bg-cream px-5 py-28 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-7xl">
        {!hideIntro && (
          <Reveal className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-4">
              <span aria-hidden className="h-px w-10 bg-gold/70" />
              <p className="text-[11px] tracking-normal sm:tracking-[0.32em] text-gold-deep uppercase">
                {t("servicesEyebrow")}
              </p>
              <span aria-hidden className="h-px w-10 bg-gold/70" />
            </div>
            <h2
              className={cn(
                "mt-7 text-3xl leading-[1.15] sm:text-[3.15rem]",
                displayHeading(lang),
              )}
            >
              {t("servicesTitle")}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-muted sm:text-[1.05rem]">
              {t("servicesLead")}
            </p>
          </Reveal>
        )}

        <div className={hideIntro ? "grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6" : "mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"}>
          {featuredServices.map((s, i) => (
            <Reveal key={s.slug} delay={i * 70}>
              <Link
                href={`/services/${s.slug}`}
                className="group relative block h-full overflow-hidden rounded-[1.35rem] bg-surface vip-panel-light transition-[box-shadow,transform] duration-700 hover:-translate-y-1.5 hover:shadow-[0_32px_64px_-28px_rgb(16_14_11_/_0.28)]"
              >
                <div className="img-zoom relative aspect-[5/4] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={tx(s.imageAlt)}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={cn(
                      "object-cover transition-opacity duration-500 group-hover:opacity-95",
                      s.slug === "smile-design" &&
                        "origin-[center_80%] scale-[1.12] object-[50%_88%]",
                    )}
                  />
                </div>
                <div className="px-6 pb-7 pt-5 sm:px-8 sm:pb-8 sm:pt-6">
                  <h3
                    className={cn(
                      "text-2xl tracking-tight sm:text-[1.7rem]",
                      displayHeading(lang),
                    )}
                  >
                    {tx(s.name)}
                  </h3>
                  {s.fromUsd ? (
                    <p className="mt-2 font-serif text-sm tracking-[0.08em] text-gold-deep">
                      {formatFromUsd(lang, s.fromUsd)}
                    </p>
                  ) : null}
                  <p className="mt-3 max-w-md text-sm leading-7 text-muted">
                    {tx(s.problem)}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm text-gold-deep">
                    {t("discoverService")}
                    <span className="transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

