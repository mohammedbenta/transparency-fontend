"use client";

import Link from "next/link";
import { Logo } from "@/components/Logo";
import { useLang } from "@/lib/i18n";
import { navItems, services } from "@/lib/content";
import { site, telHref, mailHref, whatsappHref } from "@/lib/site";

export function Footer() {
  const { t, tx, lang } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-charcoal text-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <Logo onLight={false} />
          <p className="mt-6 max-w-sm text-sm leading-8 text-ivory/65">
            {t("footerBlurb")}
          </p>
        </div>

        <div className="lg:col-span-2">
          <p className="text-[11px] tracking-[0.22em] text-gold uppercase">{t("footerNav")}</p>
          <ul className="mt-4 space-y-3 text-sm text-ivory/80">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-gold">
                  {t(item.key)}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/faq" className="transition hover:text-gold">
                {t("nav.faq")}
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="text-[11px] tracking-[0.22em] text-gold uppercase">{t("footerServices")}</p>
          <ul className="mt-4 space-y-3 text-sm text-ivory/80">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="transition hover:text-gold">
                  {tx(s.name)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="text-[11px] tracking-[0.22em] text-gold uppercase">{t("footerContact")}</p>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-ivory/80">
            <li>
              <a href={telHref} className="hover:text-gold" dir="ltr">
                {site.phoneIntl}
              </a>
            </li>
            <li>
              <a
                href={whatsappHref(t("waDefault"))}
                className="hover:text-gold"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("whatsappShort")}
              </a>
            </li>
            <li>
              <a href={mailHref} className="hover:text-gold" dir="ltr">
                {site.email}
              </a>
            </li>
            <li>{lang === "ar" ? site.addressAr : site.addressEn}</li>
            <li>
              <a
                href={site.instagram}
                className="hover:text-gold"
                target="_blank"
                rel="noopener noreferrer"
              >
                {site.instagramHandle}
              </a>
            </li>
            <li className="pt-2 text-ivory/55">
              <span className="block text-[11px] tracking-[0.18em] text-gold uppercase">
                {t("footerHours")}
              </span>
              {t("footerHoursNote")}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-ivory/45 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © {year} {lang === "ar" ? site.nameAr : site.nameEn}. {t("footerRights")}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="hover:text-gold">
              {t("privacy")}
            </Link>
            <Link href="/terms" className="hover:text-gold">
              {t("terms")}
            </Link>
          </div>
        </div>
        <p className="mx-auto max-w-7xl px-5 pb-8 text-[11px] text-ivory/35 lg:px-8">
          {t("footerDemo")}
        </p>
      </div>
    </footer>
  );
}
