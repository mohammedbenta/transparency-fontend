"use client";

import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { useLang } from "@/lib/i18n";
import { navItems, partners, featuredServices } from "@/lib/content";
import { site, mailHref, whatsappHref } from "@/lib/site";
import { bookingHref, handleBookingClick } from "@/lib/booking";

export function Footer() {
  const { t, tx, lang } = useLang();
  const year = new Date().getFullYear();
  const address = lang === "ar" ? site.addressAr : site.addressEn;
  const days = lang === "ar" ? site.hours.daysAr : site.hours.daysEn;
  const time = lang === "ar" ? site.hours.timeAr : site.hours.timeEn;
  const name = lang === "ar" ? site.nameAr : site.nameEn;
  const city = lang === "ar" ? site.cityAr : site.cityEn;

  return (
    <footer className="bg-charcoal text-ivory">
      <div className="h-px bg-gradient-to-l from-transparent via-gold/60 to-transparent" />

      <div className="mx-auto flex max-w-7xl flex-col px-5 pt-20 pb-14 lg:px-8 lg:pt-28 lg:pb-16">
        <div className="relative order-2 mt-16 overflow-hidden rounded-[1.35rem] ring-1 ring-gold/25 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.55)] lg:hidden">
          <FooterMap title={t("locationTitle")} />
        </div>

        <div className="order-1 grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-0">
          <div className="sm:col-span-2 lg:col-span-4">
            <Logo className="[&_span]:h-9 [&_span]:w-[13.5rem] sm:[&_span]:h-10 sm:[&_span]:w-[15rem]" />
            <p className="mt-6 max-w-sm text-sm font-light leading-7 text-ivory/55">
              {t("footerBlurb")}
            </p>
            <Link
              href={bookingHref()}
              onClick={handleBookingClick}
              className="group mt-8 inline-flex h-11 items-center gap-3 rounded-full border border-gold/45 px-6 text-[12.5px] tracking-[0.05em] text-gold transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-gold hover:bg-gold hover:text-ink hover:-translate-y-[1px]"
            >
              <span>{t("book")}</span>
              <span
                aria-hidden
                className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
              >
                →
              </span>
            </Link>
            <div className="relative mt-10 hidden overflow-hidden rounded-[1.35rem] ring-1 ring-gold/25 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.55)] lg:block">
              <FooterMap title={t("locationTitle")} compact />
            </div>
          </div>

          <nav aria-label={t("footerNav")} className="lg:col-span-2">
            <p className="text-[11px] tracking-[0.28em] text-gold uppercase">
              {t("footerNav")}
            </p>
            <ul className="mt-6 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-light text-ivory/70 transition hover:text-gold"
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t("footerServices")} className="lg:col-span-3">
            <p className="text-[11px] tracking-[0.28em] text-gold uppercase">
              {t("footerServices")}
            </p>
            <ul className="mt-6 space-y-3">
              {featuredServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm font-light text-ivory/70 transition hover:text-gold"
                  >
                    {tx(service.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="sm:col-span-2 lg:col-span-3">
            <p className="text-[11px] tracking-[0.28em] text-gold uppercase">
              {t("footerVisit")}
            </p>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block max-w-xs text-sm font-light leading-7 text-ivory/70 transition hover:text-gold"
            >
              {address}
            </a>
            <p className="mt-8 text-[11px] tracking-[0.28em] text-gold uppercase">
              {t("footerHours")}
            </p>
            <p className="mt-3 text-sm font-light text-ivory/85">{days}</p>
            <p className="mt-1 text-sm font-light text-ivory/50">{time}</p>
            <ul className="mt-8 space-y-3 text-sm font-light text-ivory/70">
              <li>
                <a
                  href={mailHref}
                  className="transition hover:text-gold"
                  dir="ltr"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref(t("waDefault"))}
                  className="transition hover:text-gold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("whatsappShort")}
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  className="transition hover:text-gold"
                  dir="ltr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {site.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="order-3 mt-16 flex flex-col gap-8 border-t border-white/[0.07] pt-12 sm:flex-row sm:items-center sm:justify-between lg:mt-20">
          <div className="flex items-center gap-4">
            <span aria-hidden className="h-px w-10 bg-gold/60" />
            <p className="text-[11px] tracking-[0.32em] text-gold/85 uppercase">
              {t("partnersEyebrow")}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-10 sm:gap-12">
            {partners.map((p) => (
              <Image
                key={p.name}
                src={p.src}
                alt={p.name}
                width={160}
                height={48}
                unoptimized
                className="h-7 w-auto max-w-[8.5rem] object-contain object-center opacity-60 transition-opacity duration-500 hover:opacity-100 sm:h-8"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 text-[11px] tracking-wide text-ivory/35 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © {year} {name}
            <span className="mx-2 text-ivory/20">·</span>
            {city}
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/privacy" className="transition hover:text-gold">
              {t("privacy")}
            </Link>
            <Link href="/terms" className="transition hover:text-gold">
              {t("terms")}
            </Link>
            <span className="hidden h-3 w-px bg-white/10 sm:block" />
            <a
              href={site.instagram}
              aria-label={t("igAria")}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-gold"
            >
              <InstagramIcon />
            </a>
            <a
              href={site.linkedin}
              aria-label={t("liAria")}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-gold"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterMap({ title, compact = false }: { title: string; compact?: boolean }) {
  return (
    <div
      className={
        compact
          ? "relative aspect-[4/3] min-h-[12rem]"
          : "relative aspect-[16/10] min-h-[14rem] sm:aspect-[21/9]"
      }
    >
      <iframe
        title={title}
        src={site.mapsEmbed}
        className="absolute inset-0 h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
      <path d="M12 7.2A4.8 4.8 0 1 0 16.8 12 4.8 4.8 0 0 0 12 7.2Zm0 7.92A3.12 3.12 0 1 1 15.12 12 3.13 3.13 0 0 1 12 15.12ZM17.64 6.72a1.12 1.12 0 1 1-1.12-1.12 1.12 1.12 0 0 1 1.12 1.12ZM21.6 7.2a5.76 5.76 0 0 0-1.57-4.08A5.84 5.84 0 0 0 16 1.56c-1.6-.08-6.4-.08-8 0A5.84 5.84 0 0 0 3.97 3.1 5.8 5.8 0 0 0 2.4 7.18c-.08 1.6-.08 6.4 0 8a5.76 5.76 0 0 0 1.57 4.08 5.9 5.9 0 0 0 4.08 1.58c1.6.08 6.4.08 8 0a5.84 5.84 0 0 0 4.08-1.58 5.8 5.8 0 0 0 1.57-4.08c.08-1.6.08-6.38 0-8Zm-2.16 9.7a3.36 3.36 0 0 1-1.9 1.9c-1.31.52-4.43.4-5.54.4s-4.24.11-5.54-.4a3.36 3.36 0 0 1-1.9-1.9c-.52-1.31-.4-4.43-.4-5.54s-.11-4.24.4-5.54a3.36 3.36 0 0 1 1.9-1.9c1.31-.52 4.43-.4 5.54-.4s4.24-.11 5.54.4a3.36 3.36 0 0 1 1.9 1.9c.52 1.31.4 4.43.4 5.54s.13 4.24-.4 5.54Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z" />
    </svg>
  );
}
