"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";
import { useLang } from "@/lib/i18n";
import { teamMembers } from "@/lib/content";

export function DoctorsSection({ className }: { className?: string }) {
  const { t, tx } = useLang();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const goTo = useCallback((index: number) => {
    const root = scrollerRef.current;
    if (!root) return;
    const next = (index + teamMembers.length) % teamMembers.length;
    const child = root.children[next] as HTMLElement | undefined;
    if (!child) return;
    const delta = child.getBoundingClientRect().left - root.getBoundingClientRect().left;
    root.scrollBy({ left: delta, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;
    const slides = [...root.children];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const i = slides.indexOf(visible.target);
        if (i >= 0) setActive(i);
      },
      { root, threshold: 0.55 },
    );
    slides.forEach((slide) => io.observe(slide));
    return () => io.disconnect();
  }, []);

  return (
    <section id="doctors" className={cn("bg-charcoal py-28 text-ivory lg:py-36", className)}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-4">
            <span aria-hidden className="h-px w-10 bg-gold/70" />
            <p className="text-[11px] tracking-[0.32em] text-gold uppercase">
              {t("doctorsEyebrow")}
            </p>
          </div>
          <h2 className="mt-7 max-w-2xl text-3xl font-light leading-[1.15] tracking-[-0.01em] sm:text-[3.15rem]">
            {t("doctorsTitle")}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-ivory/65 sm:text-[1.05rem]">{t("doctorsLead")}</p>
        </Reveal>

        <div
          ref={scrollerRef}
          className="team-scroll mt-14 flex snap-x snap-mandatory overflow-x-auto lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible"
        >
          {teamMembers.map((doctor) => {
            const card = (
              <div className="img-zoom relative aspect-[3/4] overflow-hidden rounded-[1.25rem] bg-ink">
                <Image
                  src={doctor.photo}
                  alt={`${tx(doctor.name)} — ${tx(doctor.role)}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover object-[center_18%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <span
                    aria-hidden
                    className="mb-4 block h-px w-8 bg-gradient-to-l from-gold to-transparent"
                  />
                  <h3 className="text-xl font-light leading-snug tracking-[-0.01em] sm:text-[1.5rem]">
                    {tx(doctor.name)}
                  </h3>
                  <p className="mt-2 text-[11px] tracking-[0.24em] text-gold uppercase">
                    {tx(doctor.role)}
                  </p>
                </div>
              </div>
            );

            const frame =
              "block overflow-hidden rounded-[1.25rem] ring-1 ring-white/[0.07] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:ring-gold/50 hover:-translate-y-1";

            return (
              <article
                key={doctor.slug}
                className="w-full shrink-0 basis-full snap-start lg:w-auto lg:basis-auto lg:snap-align-none"
              >
                {"href" in doctor && doctor.href ? (
                  <Link href={doctor.href} className={cn("group", frame)}>
                    {card}
                  </Link>
                ) : (
                  <div className={frame}>{card}</div>
                )}
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center gap-2 lg:hidden">
          {teamMembers.map((doctor, i) => (
            <button
              key={doctor.slug}
              type="button"
              aria-label={tx(doctor.name)}
              aria-current={i === active}
              onClick={() => goTo(i)}
              className={cn(
                "h-1.5 rounded-full transition",
                i === active ? "w-8 bg-gold" : "w-1.5 bg-ivory/30 hover:bg-ivory/55",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
