"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BookingCta } from "@/components/BookingModal";
import { Button } from "@/components/Button";
import { cn, displayHeading } from "@/lib/cn";
import { useLang } from "@/lib/i18n";
import { site, whatsappHref } from "@/lib/site";

export function Hero() {
  const { t, lang } = useLang();
  const mobileRef = useRef<HTMLVideoElement>(null);
  const desktopRef = useRef<HTMLVideoElement>(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const mobile = mobileRef.current;
    const desktop = desktopRef.current;
    if (!mobile || !desktop) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const wide = window.matchMedia("(min-width: 768px)");
    let inView = true;
    let alive = true;

    const onScreen = () => (wide.matches ? desktop : mobile);
    const offScreen = () => (wide.matches ? mobile : desktop);
    const file = () =>
      wide.matches ? "/videos/hero-desktop.mp4" : "/videos/hero-mobile.mp4";

    const unload = (el: HTMLVideoElement) => {
      el.pause();
      if (!el.getAttribute("src")) return;
      el.removeAttribute("src");
      el.load();
    };

    const load = (el: HTMLVideoElement, src: string) => {
      if (el.getAttribute("src") === src) return;
      el.src = src;
      el.preload = "auto";
    };

    const tick = () => {
      if (!alive) return;
      const active = onScreen();
      unload(offScreen());
      load(active, file());

      if (!inView || reduce.matches) {
        active.pause();
        return;
      }
      void active.play().catch(() => undefined);
    };

    const onPlaying = (event: Event) => {
      if (event.currentTarget === onScreen()) setLive(true);
    };

    const loopWithoutPoster = (el: HTMLVideoElement) => {
      const jump = () => {
        if (el.paused || !el.duration) return;
        if (el.currentTime >= el.duration - 0.12) el.currentTime = 0.04;
      };
      el.addEventListener("timeupdate", jump);
      return () => el.removeEventListener("timeupdate", jump);
    };

    mobile.addEventListener("playing", onPlaying);
    desktop.addEventListener("playing", onPlaying);
    const clearMobileLoop = loopWithoutPoster(mobile);
    const clearDesktopLoop = loopWithoutPoster(desktop);

    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        tick();
      },
      { threshold: 0.12 },
    );

    const section = mobile.closest("section");
    if (section) io.observe(section);
    wide.addEventListener("change", tick);
    tick();

    return () => {
      alive = false;
      io.disconnect();
      wide.removeEventListener("change", tick);
      mobile.removeEventListener("playing", onPlaying);
      desktop.removeEventListener("playing", onPlaying);
      clearMobileLoop();
      clearDesktopLoop();
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden bg-charcoal text-ivory">
      <Image
        src="/images/clinic/hero-mobile.jpg"
        alt=""
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover object-center md:hidden"
      />
      <Image
        src="/images/clinic/hero-desktop.jpg"
        alt=""
        fill
        priority
        unoptimized
        sizes="100vw"
        className="hidden object-cover object-center md:block"
      />
      <video
        ref={mobileRef}
        muted
        playsInline
        preload="none"
        aria-hidden
        className={cn(
          "absolute inset-0 h-full w-full object-cover object-center motion-reduce:hidden md:hidden",
          live ? "opacity-100" : "opacity-0",
        )}
      />
      <video
        ref={desktopRef}
        muted
        playsInline
        preload="none"
        aria-hidden
        className={cn(
          "absolute inset-0 hidden h-full w-full object-cover object-center motion-reduce:hidden md:block",
          live ? "opacity-100" : "opacity-0",
        )}
      />
      <div className="absolute inset-0 bg-gradient-to-l from-charcoal/92 via-charcoal/58 to-charcoal/25 rtl:bg-gradient-to-r" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/12 to-charcoal/50" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_60%_at_50%_100%,rgba(12,11,9,0.62),transparent_60%)]" />

      <div className="relative mx-auto flex min-h-[100svh] w-full min-w-0 max-w-7xl flex-col justify-end px-5 pt-24 pb-[max(5rem,calc(env(safe-area-inset-bottom)+3.25rem))] lg:px-8 lg:pt-28 lg:pb-24">
        <div className="flex items-center gap-4">
          <span aria-hidden className="h-px w-10 bg-gold/70" />
          <p className="text-[11px] tracking-normal sm:tracking-[0.32em] text-gold uppercase">
            {t("heroEyebrow")}
          </p>
        </div>
        <h1
          className={cn(
            "mt-7 max-w-full text-[1.9rem] leading-[1.22] sm:max-w-3xl sm:text-[3.4rem] lg:text-[4.4rem] lg:leading-[1.08]",
            displayHeading(lang),
          )}
        >
          {t("heroTitle")}{" "}
          <span className="gold-foil font-medium">{t("heroTitleEmph")}</span>
        </h1>
        <p className="mt-8 max-w-xl text-base font-light leading-8 text-ivory/75 sm:text-[1.075rem] sm:leading-9">
          {t("heroLead")}
        </p>
        <div className="mt-11 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
          <BookingCta variant="gold" arrow={false} className="btn-cta w-full sm:w-auto" />
          <Button
            href={whatsappHref(t("waDefault"))}
            variant="secondary"
            external
            arrow={false}
            className="w-full sm:w-auto"
          >
            {t("contact")}
          </Button>
        </div>
        <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <li className="inline-flex items-center gap-2.5 text-[11px] tracking-normal sm:tracking-[0.16em] text-ivory/70 uppercase">
            <StarMark />
            <span dir="ltr">{site.reviews.rating} Google</span>
          </li>
          <li className="inline-flex items-center gap-2.5 text-[11px] tracking-normal sm:tracking-[0.16em] text-ivory/70 uppercase">
            <ShieldMark />
            <span>{t("heroIconPrivacy")}</span>
          </li>
          <li className="inline-flex items-center gap-2.5 text-[11px] tracking-normal sm:tracking-[0.16em] text-ivory/70 uppercase">
            <ClockMark />
            <span>{lang === "ar" ? site.hours.timeAr : site.hours.timeEn}</span>
          </li>
        </ul>
        <div className="mt-14 flex items-center justify-between gap-6 border-t border-gold/20 pt-6">
          <div className="flex items-center gap-3 text-[11px] tracking-normal sm:tracking-[0.32em] text-ivory/60 uppercase">
            <MapMark />
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

function iconClass() {
  return "h-[1.05rem] w-[1.05rem] shrink-0 text-gold";
}

function StarMark() {
  return (
    <svg viewBox="0 0 24 24" className={iconClass()} fill="currentColor" aria-hidden>
      <path d="M12 2.6 14.7 8.8l6.8.6-5.2 4.5 1.6 6.6L12 17.2 6.1 20.5l1.6-6.6L2.5 9.4l6.8-.6z" />
    </svg>
  );
}

function ShieldMark() {
  return (
    <svg viewBox="0 0 24 24" className={iconClass()} fill="none" aria-hidden>
      <path
        d="M12 3.2 5.5 5.6v5.4c0 4.1 2.7 7.8 6.5 9 3.8-1.2 6.5-4.9 6.5-9V5.6L12 3.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 12.1 11.1 14l3.7-4.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockMark() {
  return (
    <svg viewBox="0 0 24 24" className={iconClass()} fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 7.6V12l3.2 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MapMark() {
  return (
    <svg viewBox="0 0 24 24" className={iconClass()} fill="none" aria-hidden>
      <path
        d="M12 21s6.2-5.4 6.2-10.2A6.2 6.2 0 0 0 12 4.6a6.2 6.2 0 0 0-6.2 6.2C5.8 15.6 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10.8" r="1.85" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
