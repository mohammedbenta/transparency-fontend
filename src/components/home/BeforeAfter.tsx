"use client";

import Image from "next/image";
import { useCallback, useId, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/lib/i18n";
import { beforeAfter } from "@/lib/content";
import { site } from "@/lib/site";

export function BeforeAfter() {
  const { t, tx } = useLang();
  const featured = beforeAfter[0];
  const rest = beforeAfter.slice(1);

  return (
    <section id="results" className="bg-surface px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-[11px] tracking-[0.28em] text-gold-deep uppercase">
            {t("baEyebrow")}
          </p>
          <h2 className="mt-5 max-w-2xl text-3xl font-light leading-snug sm:text-5xl">
            {t("baTitle")}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-muted">{t("baLead")}</p>
        </Reveal>

        <Reveal delay={80} className="mt-14">
          <Compare
            before={featured.before}
            after={featured.after}
            alt={tx(featured.title)}
            large
          />
          <p className="mt-4 text-lg">{tx(featured.title)}</p>
          <p className="mt-1 max-w-2xl text-sm leading-7 text-muted">
            {tx(featured.caption)}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {rest.map((item, i) => (
            <Reveal key={item.id} delay={i * 60}>
              <Compare before={item.before} after={item.after} alt={tx(item.title)} />
              <p className="mt-4 text-base">{tx(item.title)}</p>
              <p className="mt-1 text-sm leading-7 text-muted">{tx(item.caption)}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-xs leading-6 text-muted">{t("baNote")}</p>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-forest underline-offset-8 hover:underline"
          >
            {t("baInstagram")} · {site.instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
}

function Compare({
  before,
  after,
  alt,
  large = false,
}: {
  before: string;
  after: string;
  alt: string;
  large?: boolean;
}) {
  const { t, lang } = useLang();
  const [pos, setPos] = useState(52);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const labelId = useId();

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const rtl = getComputedStyle(el).direction === "rtl";
    const x = (clientX - rect.left) / rect.width;
    const value = rtl ? 1 - x : x;
    setPos(Math.min(92, Math.max(8, value * 100)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    update(e.clientX);
  };

  const clip =
    lang === "ar"
      ? `inset(0 0 0 ${100 - pos}%)`
      : `inset(0 ${100 - pos}% 0 0)`;

  return (
    <div
      ref={ref}
      className="relative cursor-ew-resize overflow-hidden bg-charcoal select-none aspect-[5/3] touch-none"
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
        const dir = lang === "ar" ? -1 : 1;
        if (e.key === "ArrowLeft") setPos((p) => Math.max(8, p - 4 * dir));
        if (e.key === "ArrowRight") setPos((p) => Math.min(92, p + 4 * dir));
      }}
    >
      <Image
        src={after}
        alt=""
        fill
        sizes={large ? "(max-width: 1024px) 100vw, 80vw" : "(max-width: 768px) 100vw, 50vw"}
        className="object-cover object-center"
        draggable={false}
      />
      <div className="absolute inset-0" style={{ clipPath: clip }}>
        <Image
          src={before}
          alt=""
          fill
          sizes={large ? "(max-width: 1024px) 100vw, 80vw" : "(max-width: 768px) 100vw, 50vw"}
          className="object-cover object-center"
          draggable={false}
        />
      </div>

      <div
        className="absolute inset-y-0 z-10 w-px bg-gold"
        style={{ insetInlineStart: `${pos}%` }}
      >
        <span className="absolute top-1/2 start-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gold bg-ivory text-sm text-ink shadow-md">
          ‹ ›
        </span>
      </div>

      <span className="pointer-events-none absolute start-3 top-3 rounded-full bg-charcoal/70 px-3 py-1 text-[11px] tracking-wide text-ivory">
        {t("baBefore")}
      </span>
      <span className="pointer-events-none absolute end-3 top-3 rounded-full bg-gold/90 px-3 py-1 text-[11px] tracking-wide text-ink">
        {t("baAfter")}
      </span>
      <span id={labelId} className="sr-only">
        {alt}
      </span>
    </div>
  );
}
