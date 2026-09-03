"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { teamMembers } from "@/lib/content";
import { useLang } from "@/lib/i18n";

const numClass =
  "stat-num font-sans text-[2.75rem] font-light leading-none tabular-nums tracking-[-0.04em] text-gold sm:text-6xl lg:text-[4.35rem]";

const labelClass =
  "mt-2.5 max-w-[11rem] text-[11px] leading-4 tracking-[0.18em] text-ivory/55 uppercase sm:mt-3.5 sm:max-w-none sm:text-[12px] sm:leading-5 sm:tracking-[0.24em]";

export function TrustStrip() {
  const { t } = useLang();
  const started = useInViewOnce();

  return (
    <section id="trust" className="bg-forest-deep">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="hairline" />
        <ul className="grid grid-cols-2 gap-x-6 gap-y-10 py-10 sm:gap-x-8 sm:py-14 lg:grid-cols-4 lg:gap-0 lg:py-16">
          <li className="min-w-0">
            <a
              href={site.reviews.mapsReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center transition hover:opacity-80"
            >
              <span className="flex items-center gap-1.5 sm:gap-3">
                <StarIcon />
                <StatNum
                  value={site.reviews.rating}
                  decimals={1}
                  started={started}
                />
              </span>
              <span className={labelClass}>{t("trustRating")}</span>
            </a>
          </li>
          <li className="relative min-w-0 lg:before:absolute lg:before:inset-y-1 lg:before:start-0 lg:before:w-px lg:before:bg-gold/20">
            <div className="flex flex-col items-center text-center">
              <StatNum
                value={teamMembers.length}
                started={started}
                delay={90}
              />
              <span className={labelClass}>{t("trustConsultants")}</span>
            </div>
          </li>
          <li className="relative min-w-0 lg:before:absolute lg:before:inset-y-1 lg:before:start-0 lg:before:w-px lg:before:bg-gold/20">
            <div className="flex flex-col items-center text-center">
              <StatNum
                value={site.proof.patients}
                locale
                suffix="+"
                started={started}
                delay={160}
              />
              <span className={labelClass}>{t("trustPatients")}</span>
            </div>
          </li>
          <li className="relative min-w-0 lg:before:absolute lg:before:inset-y-1 lg:before:start-0 lg:before:w-px lg:before:bg-gold/20">
            <div className="flex flex-col items-center text-center">
              <StatNum
                value={site.proof.years}
                suffix="+"
                started={started}
                delay={230}
              />
              <span className={labelClass}>{t("trustYears")}</span>
            </div>
          </li>
        </ul>
        <div className="hairline" />
      </div>
    </section>
  );
}

function StatNum({
  value,
  decimals = 0,
  locale = false,
  suffix = "",
  started,
  delay = 0,
}: {
  value: number;
  decimals?: number;
  locale?: boolean;
  suffix?: string;
  started: boolean;
  delay?: number;
}) {
  const current = useCountUp(value, started, delay);
  const text = formatStat(current, decimals, locale) + suffix;
  const final = formatStat(value, decimals, locale) + suffix;

  return (
    <span className={numClass} dir="ltr" aria-label={final}>
      {text}
    </span>
  );
}

function formatStat(n: number, decimals: number, locale: boolean) {
  if (locale) {
    return Math.round(n).toLocaleString("en-US");
  }
  return n.toFixed(decimals);
}

function useInViewOnce() {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = document.getElementById("trust");
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return started;
}

function useCountUp(target: number, started: boolean, delay: number) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!started) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setValue(target);
      return;
    }

    let raf = 0;
    let timer = 0;
    const duration = 1600;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    const run = () => {
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / duration);
        setValue(target * ease(p));
        if (p < 1) raf = requestAnimationFrame(tick);
        else setValue(target);
      };
      raf = requestAnimationFrame(tick);
    };

    if (delay) timer = window.setTimeout(run, delay);
    else run();

    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [started, target, delay]);

  return value;
}

function StarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 fill-gold sm:h-8 sm:w-8 lg:h-9 lg:w-9"
      aria-hidden
    >
      <path d="M12 2.6 14.7 8.8l6.8.6-5.2 4.5 1.6 6.6L12 17.2 6.1 20.5l1.6-6.6L2.5 9.4l6.8-.6z" />
    </svg>
  );
}
