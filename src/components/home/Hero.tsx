"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { BookingCta } from "@/components/BookingModal";
import { Button } from "@/components/Button";
import { useLang } from "@/lib/i18n";
import { whatsappHref } from "@/lib/site";

export function Hero() {
  const { t } = useLang();
  const mobileRef = useRef<HTMLVideoElement>(null);
  const desktopRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mobile = mobileRef.current;
    const desktop = desktopRef.current;
    if (!mobile || !desktop) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const wide = window.matchMedia("(min-width: 768px)");

    const sync = (inView: boolean) => {
      const primary = wide.matches ? desktop : mobile;
      const other = wide.matches ? mobile : desktop;
      other.pause();
      other.preload = "none";
      primary.preload = "auto";
      if (!inView || reduce.matches) {
        primary.pause();
        return;
      }
      void primary.play().catch(() => undefined);
    };

    let inView = true;
    const apply = () => sync(inView);

    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        apply();
      },
      { threshold: 0.12 },
    );

    const section = mobile.closest("section");
    if (section) io.observe(section);
    wide.addEventListener("change", apply);
    apply();

    return () => {
      io.disconnect();
      wide.removeEventListener("change", apply);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden bg-charcoal text-ivory">
      <video
        ref={mobileRef}
        src="/videos/hero-mobile.mp4"
        poster="/images/clinic/hero-mobile.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover object-center opacity-70 motion-reduce:hidden md:hidden"
      />
      <video
        ref={desktopRef}
        src="/videos/hero-desktop.mp4"
        poster="/images/clinic/hero-desktop.jpg"
        muted
        loop
        playsInline
        preload="none"
        aria-hidden
        className="absolute inset-0 hidden h-full w-full object-cover object-center opacity-70 motion-reduce:hidden md:block"
      />
      <Image
        src="/images/clinic/hero-mobile.jpg"
        alt={t("heroTrust")}
        fill
        priority
        sizes="100vw"
        className="hidden object-cover object-center opacity-70 motion-reduce:block md:hidden"
      />
      <Image
        src="/images/clinic/hero-desktop.jpg"
        alt={t("heroTrust")}
        fill
        sizes="100vw"
        className="hidden object-cover object-center opacity-70 md:motion-reduce:block"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-charcoal/90 via-charcoal/55 to-charcoal/20 rtl:bg-gradient-to-r" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/10 to-charcoal/45" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_60%_at_50%_100%,rgba(20,19,17,0.55),transparent_60%)]" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pt-24 pb-[max(5rem,calc(env(safe-area-inset-bottom)+3.25rem))] lg:px-8 lg:pt-28 lg:pb-24">
        <div className="flex items-center gap-4">
          <span aria-hidden className="h-px w-10 bg-gold/70" />
          <p className="text-[11px] tracking-[0.32em] text-gold uppercase">
            {t("heroEyebrow")}
          </p>
        </div>
        <h1 className="mt-7 max-w-3xl text-[2.5rem] font-light leading-[1.12] tracking-[-0.015em] sm:text-[3.4rem] lg:text-[4.4rem] lg:leading-[1.08]">
          {t("heroTitle")}{" "}
          <span className="font-medium">{t("heroTitleEmph")}</span>
        </h1>
        <p className="mt-8 max-w-xl text-base leading-8 text-ivory/75 sm:text-[1.075rem] sm:leading-9">
          {t("heroLead")}
        </p>
        <div className="mt-11 flex flex-wrap items-center gap-3">
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
        <div className="mt-14 flex items-center justify-between gap-6 border-t border-ivory/10 pt-6">
          <div className="flex items-center gap-3 text-[11px] tracking-[0.32em] text-ivory/60 uppercase">
            <span aria-hidden className="h-px w-6 bg-gold/70" />
            <span>{t("heroTrust")}</span>
          </div>
          <div
            aria-hidden
            className="hidden items-center gap-3 text-[10px] tracking-[0.32em] text-ivory/40 uppercase sm:flex"
          >
            <span>Scroll</span>
            <span className="relative block h-8 w-px overflow-hidden bg-ivory/15">
              <span className="absolute inset-x-0 top-0 h-3 animate-[heroScroll_2.4s_var(--ease-lux)_infinite] bg-gold" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
