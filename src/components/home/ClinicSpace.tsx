"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { cn, displayHeading } from "@/lib/cn";
import { clinicSpacePhotos } from "@/lib/content";
import { useLang } from "@/lib/i18n";

export function ClinicSpace() {
  const { t, tx, lang } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const pageSizeRef = useRef(1);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => {
      pageSizeRef.current = mq.matches ? 3 : 1;
    };
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;

    const sync = () => {
      const slides = [...root.children] as HTMLElement[];
      if (!slides.length) return;
      const rootRect = root.getBoundingClientRect();
      const rtl = getComputedStyle(root).direction === "rtl";
      let best = 0;
      let bestDist = Infinity;
      slides.forEach((el, i) => {
        const r = el.getBoundingClientRect();
        const dist = rtl
          ? Math.abs(r.right - rootRect.right)
          : Math.abs(r.left - rootRect.left);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });
      indexRef.current = best;
      setActive(best);
    };

    root.addEventListener("scroll", sync, { passive: true });
    return () => root.removeEventListener("scroll", sync);
  }, []);

  const goTo = useCallback((index: number) => {
    const root = scrollerRef.current;
    if (!root) return;
    const next = Math.max(0, Math.min(clinicSpacePhotos.length - 1, index));
    indexRef.current = next;
    setActive(next);
    const child = root.children[next] as HTMLElement | undefined;
    if (!child) return;
    const delta = child.getBoundingClientRect().left - root.getBoundingClientRect().left;
    if (Math.abs(delta) < 2) return;
    root.scrollBy({ left: delta, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const root = scrollerRef.current;
    if (!section || !root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let inView = false;
    let paused = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
      },
      { threshold: 0.35 },
    );
    observer.observe(section);

    const pause = () => {
      paused = true;
    };
    const resume = () => {
      paused = false;
    };

    root.addEventListener("pointerdown", pause);
    root.addEventListener("pointerup", resume);
    root.addEventListener("pointercancel", resume);
    root.addEventListener("touchend", resume);

    const id = window.setInterval(() => {
      if (!inView || paused) return;
      const max = Math.max(0, clinicSpacePhotos.length - pageSizeRef.current);
      if (max === 0) return;
      goTo((indexRef.current + 1) % clinicSpacePhotos.length);
    }, 4000);

    return () => {
      observer.disconnect();
      window.clearInterval(id);
      root.removeEventListener("pointerdown", pause);
      root.removeEventListener("pointerup", resume);
      root.removeEventListener("pointercancel", resume);
      root.removeEventListener("touchend", resume);
    };
  }, [goTo]);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative overflow-hidden bg-forest-deep text-ivory"
    >
      <div className="pointer-events-none absolute -end-24 -top-8 h-80 w-80 rounded-full bg-gold/10 blur-[110px]" />
      <div className="pointer-events-none absolute -start-32 bottom-0 h-96 w-96 rounded-full bg-gold/[0.06] blur-[130px]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-4">
            <span aria-hidden className="h-px w-10 bg-gold/70" />
            <p className="text-[11px] tracking-normal sm:tracking-[0.32em] text-gold uppercase">
              {t("experienceEyebrow")}
            </p>
            <span aria-hidden className="h-px w-10 bg-gold/70" />
          </div>
          <h2
            className={cn(
              "mt-7 text-3xl leading-[1.15] sm:text-[3.15rem]",
              displayHeading(lang),
            )}
          >
            {t("experienceTitle")}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base font-light leading-8 text-ivory/70 sm:text-[1.05rem]">
            {t("experienceLead")}
          </p>
        </Reveal>

        <div
          ref={scrollerRef}
          className="space-scroll mt-14 w-full"
          aria-label={t("experienceEyebrow")}
        >
          {clinicSpacePhotos.map((photo) => (
            <figure
              key={photo.src}
              className="group relative aspect-[3/4] overflow-hidden rounded-[1.35rem] ring-1 ring-gold/25 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.5)]"
            >
              <Image
                src={photo.src}
                alt={tx(photo.alt)}
                fill
                sizes="(max-width: 1023px) 100vw, 33vw"
                className="object-cover object-center transition-transform duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
              />
            </figure>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {clinicSpacePhotos.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              aria-label={tx(photo.alt)}
              aria-current={i === active}
              onClick={() => goTo(i)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === active ? "w-7 bg-gold" : "w-2.5 bg-ivory/25 hover:bg-gold/70",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
