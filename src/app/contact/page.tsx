"use client";

import { useState } from "react";
import { BookingCta } from "@/components/BookingModal";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { useLang } from "@/lib/i18n";
import { site, telHref, mailHref, whatsappHref } from "@/lib/site";

export default function ContactPage() {
  const { t, lang } = useLang();
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow={t("nav.contact")}
        title={t("contactHero")}
        lead={t("contactLead")}
      />

      <section className="bg-ivory px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-5">
            <ContactRow label={t("call")} href={telHref} value={site.phoneIntl} ltr />
            <ContactRow
              label={t("whatsappShort")}
              href={whatsappHref(t("waDefault"))}
              value={site.phoneIntl}
              ltr
              external
            />
            <ContactRow label="Email" href={mailHref} value={site.email} ltr />
            <div>
              <p className="text-[11px] tracking-normal sm:tracking-[0.2em] text-gold-deep uppercase">
                {t("locationTitle")}
              </p>
              <p className="mt-2 leading-8">
                {lang === "ar" ? site.addressAr : site.addressEn}
              </p>
            </div>
            <div>
              <p className="text-[11px] tracking-normal sm:tracking-[0.2em] text-gold-deep uppercase">
                {t("footerHours")}
              </p>
              <p className="mt-2 text-lg font-light leading-8">
                {lang === "ar" ? site.hours.daysAr : site.hours.daysEn}
              </p>
              <p className="mt-1 text-muted">
                {lang === "ar" ? site.hours.timeAr : site.hours.timeEn}
              </p>
            </div>
            <BookingCta variant="gold" />
          </div>

          <div className="lg:col-span-7">
            {sent ? (
              <p className="border border-line bg-surface p-10 text-lg">{t("formThanks")}</p>
            ) : (
              <form
                className="grid gap-4 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <Field label={t("formFirst")} name="first" required />
                <Field label={t("formLast")} name="last" required />
                <Field label={t("formEmail")} name="email" type="email" />
                <Field label={t("formPhone")} name="phone" required dir="ltr" />
                <div className="sm:col-span-2">
                  <Field label={t("formSubject")} name="subject" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm">
                    <span className="mb-1.5 block text-muted">{t("formMessage")}</span>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="w-full rounded-2xl border border-line bg-surface px-4 py-3 outline-none transition focus:border-gold"
                    />
                  </label>
                </div>
                <div className="sm:col-span-2">
                  <Button type="submit">{t("formSend")}</Button>
                  <p className="mt-3 text-xs text-muted">{t("footerDemo")}</p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-light">{t("locationTitle")}</h2>
          <div className="mt-8 overflow-hidden rounded-[1.35rem] border border-gold/25">
            <iframe
              title={t("locationTitle")}
              src={site.mapsEmbed}
              className="h-[22rem] w-full border-0 grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href={site.mapsUrl}
            className="mt-4 inline-block text-sm text-forest underline-offset-8 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Maps
          </a>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  label,
  href,
  value,
  ltr,
  external,
}: {
  label: string;
  href: string;
  value: string;
  ltr?: boolean;
  external?: boolean;
}) {
  return (
    <div>
      <p className="text-[11px] tracking-normal sm:tracking-[0.2em] text-gold-deep uppercase">{label}</p>
      <a
        href={href}
        className="mt-2 inline-block text-lg hover:text-forest"
        dir={ltr ? "ltr" : undefined}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {value}
      </a>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  dir,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  dir?: "ltr" | "rtl";
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block text-muted">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        dir={dir}
        className="w-full rounded-2xl border border-line bg-surface px-4 py-3 outline-none transition focus:border-gold"
      />
    </label>
  );
}
