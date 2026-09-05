"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { cn, displayHeading } from "@/lib/cn";
import { useLang } from "@/lib/i18n";
import { beforeAfter } from "@/lib/content";

export function BeforeAfter() {
  const { t, tx, lang } = useLang();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;

    const update = () => {
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
      setActive(best);
    };

    update();
    root.addEventListener("scroll", update, { passive: true });
    return () => root.removeEventListener("scroll", update);
  }, []);

  function goTo(index: number) {
    const next = Math.max(0, Math.min(beforeAfter.length - 1, index));
    const child = scrollerRef.current?.children[next] as HTMLElement | undefined;
    child?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  }

  return (
    <section id="results" className="bg-ivory py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-4">
            <span aria-hidden className="h-px w-10 bg-gold/70" />
            <p className="text-[11px] tracking-normal sm:tracking-[0.32em] text-gold-deep uppercase">
              {t("baEyebrow")}
            </p>
            <span aria-hidden className="h-px w-10 bg-gold/70" />
          </div>
          <h2
            className={cn(
              "mt-7 text-3xl leading-[1.15] sm:text-[3.15rem]",
              displayHeading(lang),
            )}
          >
            {t("baTitle")}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-muted sm:text-[1.05rem]">{t("baLead")}</p>
        </Reveal>
      </div>

      <div className="mt-12 px-5 lg:px-8">
        <div
          ref={scrollerRef}
          className="ba-scroll mx-auto flex max-w-7xl snap-x snap-mandatory gap-3 overflow-x-auto lg:gap-5"
        >
          {beforeAfter.map((item) => (
            <article
              key={item.id}
              className="w-full shrink-0 snap-start lg:w-[calc((100%-2.5rem)/3)]"
            >
              <Compare
                before={item.before}
                after={item.after}
                alt={tx(item.title)}
                beforeLift={
                  "beforeLift" in item && typeof item.beforeLift === "number"
                    ? item.beforeLift
                    : undefined
                }
              />
            </article>
          ))}
        </div>
        <div className="mx-auto mt-8 flex max-w-7xl items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => goTo(active - 1)}
            disabled={active === 0}
            aria-label={t("baPrev")}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold bg-ivory text-xl text-ink shadow-[0_8px_24px_-12px_rgba(20,19,17,0.45)] transition hover:bg-gold hover:text-ivory disabled:opacity-30"
          >
            ‹
          </button>
          <div className="flex items-center justify-center gap-2">
            {beforeAfter.map((item, i) => (
              <button
                key={item.id}
                type="button"
                aria-label={tx(item.title)}
                aria-current={i === active}
                onClick={() => goTo(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === active ? "w-7 bg-gold" : "w-2.5 bg-sand hover:bg-gold/70",
                )}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            disabled={active === beforeAfter.length - 1}
            aria-label={t("baNext")}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold bg-ivory text-xl text-ink shadow-[0_8px_24px_-12px_rgba(20,19,17,0.45)] transition hover:bg-gold hover:text-ivory disabled:opacity-30"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

function Compare({
  before,
  after,
  alt,
  beforeLift,
}: {
  before: string;
  after: string;
  alt: string;
  beforeLift?: number;
}) {
  const { t, lang } = useLang();
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const labelId = useId();

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width;
    setPos(Math.min(92, Math.max(8, x * 100)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    e.stopPropagation();
    dragging.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    update(e.clientX);
  };

  const clip =
    lang === "ar"
      ? `inset(0 0 0 ${pos}%)`
      : `inset(0 ${100 - pos}% 0 0)`;

  return (
    <div
      ref={ref}
      className="relative aspect-[5/3] cursor-ew-resize touch-none select-none overflow-hidden rounded-[1.35rem] bg-charcoal ring-1 ring-gold/25 shadow-[0_24px_60px_-30px_rgba(12,11,9,0.45)]"
      onPointerDown={onPointerDown}
      onPointerMove={(e) => dragging.current && update(e.clientX)}
      onPointerUp={() => {
        dragging.current = false;
      }}
      onPointerCancel={() => {
        dragging.current = false;
      }}
      role="slider"
      aria-labelledby={labelId}
      aria-valuemin={8}
      aria-valuemax={92}
      aria-valuenow={Math.round(pos)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPos((p) => Math.max(8, p - 4));
        if (e.key === "ArrowRight") setPos((p) => Math.min(92, p + 4));
      }}
    >
      <Image
        src={after}
        alt=""
        fill
        sizes="(max-width: 1023px) 100vw, 33vw"
        className="object-cover object-center"
        draggable={false}
      />
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: clip }}>
        <div
          className="absolute inset-x-0 top-0"
          style={{
            height: beforeLift ? `${100 + beforeLift}%` : "100%",
          }}
        >
          <Image
            src={before}
            alt=""
            fill
            sizes="(max-width: 1023px) 100vw, 33vw"
            className="object-cover object-center"
            draggable={false}
          />
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-px bg-gradient-to-b from-gold/60 via-gold to-gold/60"
        style={{ left: `${pos}%` }}
      >
        <span className="absolute top-1/2 left-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gold/70 bg-ivory/95 text-xs tracking-[0.1em] text-ink shadow-[0_10px_28px_-12px_rgba(20,19,17,0.55)] backdrop-blur">
          ‹ ›
        </span>
      </div>

      <span className="pointer-events-none absolute start-4 top-4 rounded-full border border-ivory/20 bg-charcoal/60 px-3.5 py-1 text-[10px] tracking-normal text-ivory/85 uppercase backdrop-blur sm:tracking-[0.28em]">
        {t("baBefore")}
      </span>
      <span className="pointer-events-none absolute end-4 top-4 rounded-full bg-gold px-3.5 py-1 text-[10px] tracking-normal text-ink uppercase sm:tracking-[0.28em]">
        {t("baAfter")}
      </span>
      <span id={labelId} className="sr-only">
        {alt}
      </span>
    </div>
  );
}
