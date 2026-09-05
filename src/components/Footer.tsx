"use client";

import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { useLang } from "@/lib/i18n";
import { partners } from "@/lib/content";
import { site, telHref, mailHref } from "@/lib/site";

function FooterContactLinks({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="text-[11px] tracking-normal sm:tracking-[0.28em] text-gold uppercase">
        {label}
      </p>
      <ul className="mt-6 space-y-4">
        <li>
          <a
            href={telHref}
            className="inline-flex items-center gap-3 text-sm font-light text-ivory/80 transition hover:text-gold"
          >
            <PhoneIcon />
            <span dir="ltr">00966 55 881 7388</span>
          </a>
        </li>
        <li>
          <a
            href={mailHref}
            className="inline-flex min-w-0 items-center gap-3 text-sm font-light text-ivory/80 transition hover:text-gold"
          >
            <MailIcon />
            <span dir="ltr" className="break-all">
              {site.email}
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}

function FooterPartners({
  label,
  className,
  compact = false,
}: {
  label: string;
  className?: string;
  compact?: boolean;
}) {
  return (
    <div className={className}>
      <p className="text-[11px] tracking-normal sm:tracking-[0.28em] text-gold uppercase">
        {label}
      </p>
      <div className="mt-6 flex flex-col items-start gap-6">
        <Image
          src={partners[0].src}
          alt={partners[0].name}
          width={360}
          height={120}
          unoptimized
          className={
            compact
              ? "h-12 w-auto max-w-full object-contain object-start opacity-80 transition-opacity duration-500 hover:opacity-100"
              : "h-16 w-auto max-w-[14rem] object-contain object-start opacity-80 transition-opacity duration-500 hover:opacity-100 sm:h-20"
          }
        />
        <div className="flex flex-wrap items-center gap-5 sm:gap-8">
          {partners.slice(1).map((p) => (
            <Image
              key={p.name}
              src={p.src}
              alt={p.name}
              width={200}
              height={64}
              unoptimized
              className={
                compact
                  ? "h-5 w-auto max-w-[5.5rem] object-contain object-center opacity-70 transition-opacity duration-500 hover:opacity-100"
                  : "h-6 w-auto max-w-[6.5rem] object-contain object-center opacity-70 transition-opacity duration-500 hover:opacity-100 sm:h-7"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FooterMap({
  title,
  fill = false,
}: {
  title: string;
  fill?: boolean;
}) {
  return (
    <div
      className={
        fill
          ? "relative h-full min-h-[22rem]"
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

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[1.05rem] w-[1.05rem] shrink-0 text-gold"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[1.05rem] w-[1.05rem] shrink-0 text-gold"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[1.05rem] w-[1.05rem] shrink-0 text-gold"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
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

export function Footer() {
  const { t, lang } = useLang();
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
        <p className="order-4 mt-8 flex items-center justify-center gap-3 text-sm font-light text-ivory/80 lg:hidden">
          <ClockIcon />
          <span>
            <span className="text-ivory/85">{days}</span>
            <span className="mx-2 text-ivory/25">·</span>
            <span className="text-ivory/55">{time}</span>
          </span>
        </p>
        <div className="relative order-2 mt-6 overflow-hidden rounded-[1.35rem] ring-1 ring-gold/25 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.55)] lg:hidden">
          <FooterMap title={t("locationTitle")} />
        </div>
        <div className="order-3 mt-12 grid grid-cols-2 items-start gap-6 lg:hidden">
          <FooterContactLinks label={t("contact")} />
          <FooterPartners label={t("partnersEyebrow")} compact />
        </div>

        <div className="order-1 grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-stretch lg:gap-x-16">
          <div className="flex min-w-0 flex-col items-center text-center lg:items-start lg:text-start">
            <Logo className="[&_span]:h-9 [&_span]:w-[13.5rem] sm:[&_span]:h-10 sm:[&_span]:w-[15rem]" />
            <p className="mt-6 max-w-sm text-sm font-light leading-7 text-ivory/55">
              {t("footerBlurb")}
            </p>
            <FooterPartners label={t("partnersEyebrow")} className="mt-10 hidden lg:block" />
          </div>

          <div className="text-center lg:w-max lg:max-w-sm lg:justify-self-center lg:text-start">
            <FooterContactLinks
              label={t("contact")}
              className="hidden lg:block"
            />
            <p className="text-[11px] tracking-normal sm:tracking-[0.28em] text-gold uppercase lg:mt-10">
              {t("footerVisit")}
            </p>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 mx-auto block max-w-xs text-sm font-light leading-7 text-ivory/70 transition hover:text-gold lg:mx-0"
            >
              {address}
            </a>
            <div className="hidden lg:block">
              <p className="mt-8 text-[11px] tracking-normal sm:tracking-[0.28em] text-gold uppercase">
                {t("footerHours")}
              </p>
              <p className="mt-3 text-sm font-light text-ivory/85">{days}</p>
              <p className="mt-1 text-sm font-light text-ivory/50">{time}</p>
            </div>
          </div>

          <div className="relative hidden min-h-[22rem] min-w-0 overflow-hidden rounded-[1.35rem] ring-1 ring-gold/25 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.55)] lg:block">
            <FooterMap title={t("locationTitle")} fill />
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-5 py-5 text-center text-[11px] tracking-wide text-ivory/35 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2 lg:flex-nowrap lg:items-center lg:justify-between lg:px-8 lg:text-start">
          <p>
            © {year} {name}
            <span className="mx-2 text-ivory/20">·</span>
            {city}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
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

