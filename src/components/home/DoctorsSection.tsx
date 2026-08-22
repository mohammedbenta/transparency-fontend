"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/lib/i18n";
import { doctors, services } from "@/lib/content";

export function DoctorsSection() {
  const { t, tx } = useLang();
  const doctor = doctors[0];
  const specialties = services.map((s) => tx(s.name));

  return (
    <section id="doctors" className="bg-surface px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-[11px] tracking-[0.28em] text-gold-deep uppercase">
            {t("doctorsEyebrow")}
          </p>
          <h2 className="mt-5 max-w-2xl text-3xl font-light leading-snug sm:text-5xl">
            {t("doctorsTitle")}
          </h2>
          <p className="mt-5 max-w-xl text-muted">{t("doctorsLead")}</p>
        </Reveal>

        <Reveal delay={80} className="mt-14 grid gap-8 lg:grid-cols-12">
          <article className="relative overflow-hidden bg-charcoal text-ivory lg:col-span-7">
            <div className="absolute inset-y-0 end-0 w-1/3 bg-gradient-to-l from-gold/10 to-transparent rtl:bg-gradient-to-r" />
            <div className="relative flex min-h-[28rem] flex-col justify-end p-8 sm:p-12">
              <span className="font-serif text-7xl text-gold/30">{doctor.initials}</span>
              <p className="mt-8 text-[11px] tracking-[0.22em] text-gold uppercase">
                {tx(doctor.specialty)}
              </p>
              <h3 className="mt-3 text-3xl font-light">{tx(doctor.name)}</h3>
              <p className="mt-2 text-sm text-ivory/65">{tx(doctor.role)}</p>
              <p className="mt-6 max-w-md text-sm leading-7 text-ivory/70">
                {tx(doctor.bio)}
              </p>
              <Link
                href={`/doctors/${doctor.slug}`}
                className="mt-8 inline-flex text-sm text-gold underline-offset-8 hover:underline"
              >
                {t("viewProfile")}
              </Link>
            </div>
          </article>

          <div className="flex flex-col justify-between gap-8 border border-line p-8 lg:col-span-5">
            <div>
              <p className="text-[11px] tracking-[0.22em] text-gold-deep uppercase">
                {t("teamSpecialties")}
              </p>
              <ul className="mt-6 space-y-3">
                {specialties.map((name) => (
                  <li
                    key={name}
                    className="border-b border-line pb-3 text-sm text-ink"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-xs leading-6 text-muted">{t("doctorsNote")}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
