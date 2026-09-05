"use client";

import { FormEvent, useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { cn, displayHeading } from "@/lib/cn";
import { useLang } from "@/lib/i18n";
import { clinicGallery, reviewsPhotos, testimonials, services } from "@/lib/content";
import { site, telHref, whatsappHref } from "@/lib/site";
import { BOOKING_ID, scrollToBooking } from "@/lib/booking";

export function Testimonials() {
  const { t, tx, lang } = useLang();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [pairMode, setPairMode] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setPairMode(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const pageSize = pairMode ? 2 : 1;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setPhotoIndex((i) => (i + 1) % reviewsPhotos.length);
    }, 4500);
    return () => window.clearInterval(id);
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

  function goTo(index: number) {
    const snapped = pageSize === 2 ? index - (index % 2) : index;
    const next = Math.max(0, Math.min(testimonials.length - 1, snapped));
    const child = scrollerRef.current?.children[next] as HTMLElement | undefined;
    child?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  }

  return (
    <section id="testimonials" className="overflow-x-clip bg-cream px-5 py-28 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid min-w-0 items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
          <figure className="relative aspect-[3/4] w-full min-w-0 overflow-hidden bg-ink ring-1 ring-gold/25 [border-radius:999px_999px_1.75rem_1.75rem] lg:col-span-5 lg:aspect-auto lg:h-full lg:min-h-[28rem] lg:[border-radius:1.35rem]">
            <Image
              key={reviewsPhotos[photoIndex].src}
              src={reviewsPhotos[photoIndex].src}
              alt={tx(reviewsPhotos[photoIndex].alt)}
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-[40%_50%] [border-radius:999px_999px_1.75rem_1.75rem] lg:[border-radius:1.35rem]"
              priority
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/15 to-transparent [border-radius:999px_999px_1.75rem_1.75rem] lg:from-charcoal/90 lg:via-charcoal/45 lg:to-charcoal/20 lg:[border-radius:1.35rem]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
              <QuoteMark />
              <div className="mt-5 flex items-center gap-4">
                <span aria-hidden className="h-px w-10 bg-gold/70" />
                <p className="text-[11px] tracking-normal sm:tracking-[0.32em] text-gold uppercase">
                  {t("reviewsEyebrow")}
                </p>
              </div>
              <h2
                className={cn(
                  "mt-4 text-3xl leading-[1.15] text-ivory sm:text-[2.5rem]",
                  displayHeading(lang),
                )}
              >
                {t("reviewsTitle")}
              </h2>
            </figcaption>
          </figure>

          <Reveal className="flex min-w-0 flex-col lg:col-span-7">
            <div className="flex min-w-0 items-center gap-1">
              <button
                type="button"
                onClick={() => goTo(active - pageSize)}
                disabled={active < pageSize}
                aria-label={t("reviewPrev")}
                className="hidden h-11 w-11 shrink-0 place-items-center rounded-full border border-gold bg-ivory text-xl text-ink shadow-[0_8px_24px_-12px_rgba(20,19,17,0.45)] transition hover:bg-gold hover:text-ivory disabled:opacity-30 lg:grid"
              >
                ‹
              </button>
              <div
                ref={scrollerRef}
                className="reviews-scroll flex min-w-0 flex-1 snap-x snap-mandatory overflow-x-auto lg:grid lg:grid-flow-col lg:grid-rows-2 lg:auto-cols-[100%] lg:gap-5"
              >
                {testimonials.map((item) => (
                  <article
                    key={item.id}
                    className="w-full min-w-0 shrink-0 basis-full snap-start lg:min-h-0 lg:w-auto lg:shrink lg:basis-auto"
                  >
                    <blockquote className="flex h-full flex-col rounded-[1.35rem] bg-ivory p-6 ring-1 ring-gold/25 shadow-[0_10px_28px_-12px_rgba(20,19,17,0.12)] sm:p-8 lg:p-7">
                      <header className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <Image
                            src={item.photo}
                            alt={tx(item.name)}
                            width={64}
                            height={64}
                            className="h-16 w-16 rounded-2xl object-contain"
                          />
                          <cite className="not-italic">
                            <span className="flex items-center gap-1.5 text-base text-ink">
                              <span>{tx(item.name)}</span>
                              {item.verified ? (
                                <VerifiedMark label={t("reviewVerified")} />
                              ) : null}
                            </span>
                            <span className="mt-1.5 flex gap-0.5 text-[13px] leading-none text-gold" aria-hidden>
                              {Array.from({ length: 5 }).map((_, star) => (
                                <span key={star}>★</span>
                              ))}
                            </span>
                          </cite>
                        </div>
                        <span className="inline-flex items-center gap-2">
                          <GoogleMark label={site.reviews.platform} />
                          <span className="text-[11px] leading-tight text-muted">
                            Google
                            <span className="block">reviews</span>
                          </span>
                        </span>
                      </header>
                      <p className="mt-6 whitespace-pre-line text-lg font-light leading-9 text-ink sm:text-2xl sm:leading-[1.6] lg:text-base lg:leading-7">
                        “{tx(item.quote)}”
                      </p>
                    </blockquote>
                  </article>
                ))}
              </div>
              <button
                type="button"
                onClick={() => goTo(active + pageSize)}
                disabled={active >= testimonials.length - pageSize}
                aria-label={t("reviewNext")}
                className="hidden h-11 w-11 shrink-0 place-items-center rounded-full border border-gold bg-ivory text-xl text-ink shadow-[0_8px_24px_-12px_rgba(20,19,17,0.45)] transition hover:bg-gold hover:text-ivory disabled:opacity-30 lg:grid"
              >
                ›
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => goTo(active - pageSize)}
                disabled={active < pageSize}
                aria-label={t("reviewPrev")}
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold bg-ivory text-xl text-ink shadow-[0_8px_24px_-12px_rgba(20,19,17,0.45)] transition hover:bg-gold hover:text-ivory disabled:opacity-30 lg:hidden"
              >
                ‹
              </button>
              <div className="flex items-center justify-center gap-2">
                {testimonials.map((item, i) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-label={tx(item.name)}
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
                onClick={() => goTo(active + pageSize)}
                disabled={active >= testimonials.length - pageSize}
                aria-label={t("reviewNext")}
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold bg-ivory text-xl text-ink shadow-[0_8px_24px_-12px_rgba(20,19,17,0.45)] transition hover:bg-gold hover:text-ivory disabled:opacity-30 lg:hidden"
              >
                ›
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function QuoteMark() {
  const goldId = useId();

  return (
    <svg
      viewBox="0 0 72 52"
      className="h-12 w-[4.15rem] sm:h-14 sm:w-[4.85rem]"
      aria-hidden
    >
      <defs>
        <linearGradient id={goldId} x1="12%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#f0e2c4" />
          <stop offset="42%" stopColor="#c9a56a" />
          <stop offset="100%" stopColor="#8d6a3a" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${goldId})`}
        d="M4.2 30.6C4.2 18.4 11.6 8.6 24.8 5.2l1.7 5.1C17.4 12.8 13.6 18.6 13.6 26.4c2.6-1.4 5.9-1.3 8.4.4 2.7 1.9 4.2 5.1 4 8.7-.3 6.2-5.1 11-11.6 11-6.1 0-10.2-6.2-10.2-15.9Zm35.6 0C39.8 18.4 47.2 8.6 60.4 5.2l1.7 5.1C53 12.8 49.2 18.6 49.2 26.4c2.6-1.4 5.9-1.3 8.4.4 2.7 1.9 4.2 5.1 4 8.7-.3 6.2-5.1 11-11.6 11-6.1 0-10.2-6.2-10.2-15.9Z"
      />
    </svg>
  );
}

function GoogleMark({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("shrink-0", className ?? "h-7 w-7")}
      role="img"
      aria-label={label}
    >
      <title>{label}</title>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function VerifiedMark({ label }: { label: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-[1.15rem] w-[1.15rem] shrink-0 text-[#1a73e8]"
      role="img"
      aria-label={label}
    >
      <title>{label}</title>
      <circle cx="10" cy="10" r="10" fill="currentColor" />
      <path
        d="M5.8 10.4 8.5 13.1 14.3 7.2"
        fill="none"
        stroke="#f4efe6"
        strokeWidth="1.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ReviewsTrust() {
  const { tx, lang } = useLang();
  const reception = clinicGallery[0];

  return (
    <section className="border-t border-line bg-ivory">
      <div
        id="quick-book"
        className="relative min-h-[42rem] scroll-mt-28 overflow-hidden bg-charcoal sm:min-h-[38rem] lg:min-h-[44rem]"
      >
        <Image
          src={reception.src}
          alt={tx(reception.alt)}
          fill
          sizes="100vw"
          className={cn(
            "object-cover",
            lang === "en"
              ? "object-[32%_48%] max-lg:scale-x-[-1] max-lg:object-[68%_48%]"
              : "object-[32%_48%]",
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-charcoal/80 via-charcoal/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-transparent to-charcoal/20" />

        <div className="relative mx-auto flex min-h-[42rem] max-w-7xl items-end px-5 py-10 sm:min-h-[38rem] sm:items-center lg:min-h-[44rem] lg:px-8">
          <QuickBookForm />
        </div>
      </div>
    </section>
  );
}

function QuickBookForm() {
  const { t, tx, lang } = useLang();
  const headingId = useId();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (window.location.hash === `#${BOOKING_ID}`) {
      window.requestAnimationFrame(() => {
        scrollToBooking();
      });
    }
  }, []);

  useEffect(() => {
    const apply = (slug: string | null) => {
      if (!slug) return;
      if (slug === "consult" || services.some((s) => s.slug === slug)) {
        setService(slug);
      }
    };

    apply(new URLSearchParams(window.location.search).get("service"));

    const onPrefill = (event: Event) => {
      apply((event as CustomEvent<{ service?: string }>).detail?.service ?? null);
    };
    window.addEventListener("tclinics:booking-service", onPrefill);
    return () => window.removeEventListener("tclinics:booking-service", onPrefill);
  }, []);

  const selected = services.find((s) => s.slug === service);
  const serviceLabel =
    service === "consult" ? t("consult") : selected ? tx(selected.name) : "";

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !service) {
      setError(t("bookingError"));
      return;
    }
    setError("");
    setSent(true);
  }

  const waMessage =
    lang === "ar"
      ? `مرحباً، أنا ${name.trim()}. أرغب في حجز موعد (${serviceLabel}) في عيادات الشفافية لطب الأسنان. رقمي: ${phone.trim()}`
      : `Hello, this is ${name.trim()}. I would like to book a visit (${serviceLabel}) at Transparency Dental Clinics. My number: ${phone.trim()}`;

  return (
    <form
      onSubmit={onSubmit}
      aria-labelledby={headingId}
      className="quick-book mx-auto w-full max-w-[22rem] border-s-2 border-gold ps-6 text-ivory lg:mx-0 ltr:lg:ms-auto"
    >
      {sent ? (
        <div>
          <p className="font-serif text-3xl text-ivory">{t("bookingSuccessTitle")}</p>
          <p className="mt-3 text-sm leading-7 text-ivory/90">{t("bookingSuccess")}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Button
              href={whatsappHref(waMessage)}
              variant="gold"
              external
              arrow={false}
            >
              {t("whatsappShort")}
            </Button>
            <Button href={telHref} variant="secondary" arrow={false}>
              {t("call")}
            </Button>
          </div>
        </div>
      ) : (
        <>
          <p className="text-[11px] tracking-normal sm:tracking-[0.32em] text-gold uppercase">
            {t("nav.booking")}
          </p>
          <h2
            id={headingId}
            className={cn(
              "mt-3 text-3xl leading-snug sm:text-4xl",
              displayHeading(lang),
            )}
          >
            {t("reviewsBookTitle")}
          </h2>
          <p className="mt-3 text-sm leading-7 text-ivory/90">{t("reviewsBookLead")}</p>

          <label className="mt-7 block text-sm">
            <span className="mb-1.5 block text-ivory">{t("bookingName")}</span>
            <input
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder={t("bookingNameExample")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-2xl border bg-transparent px-4 py-3.5 text-sm text-ivory outline-none transition placeholder:text-ivory/40"
            />
          </label>

          <label className="mt-4 block text-sm">
            <span className="mb-1.5 block text-ivory">{t("bookingPhone")}</span>
            <input
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              inputMode="tel"
              dir="ltr"
              placeholder={t("bookingPhoneExample")}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={cn(
                "w-full rounded-2xl border bg-transparent px-4 py-3.5 text-sm text-ivory outline-none transition placeholder:text-ivory/40",
                lang === "en" ? "text-left" : "text-right",
              )}
            />
          </label>

          <label className="mt-4 block text-sm">
            <span className="mb-1.5 block text-ivory">{t("bookingStep1")}</span>
            <select
              name="service"
              required
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full appearance-none rounded-2xl border bg-transparent px-4 py-3.5 text-sm text-ivory outline-none transition"
            >
              <option value="" disabled>
                {t("bookingStep1")}
              </option>
              <option value="consult">{t("consult")}</option>
              {services.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {tx(s.name)}
                </option>
              ))}
            </select>
          </label>

          {error ? (
            <p className="mt-3 text-sm text-gold" role="alert">
              {error}
            </p>
          ) : null}

          <Button type="submit" variant="gold" arrow={false} className="btn-cta mt-6 w-full">
            {t("book")}
          </Button>
          <p className="mt-3 text-xs leading-6 text-ivory/80">{t("bookingDemo")}</p>
        </>
      )}
    </form>
  );
}
