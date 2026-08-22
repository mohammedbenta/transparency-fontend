"use client";

import { BookingCta } from "@/components/BookingModal";
import { Button } from "@/components/Button";
import { CEOStory } from "@/components/home/CEOStory";
import { FinalCTA } from "@/components/home/FinalCTA";
import { useLang } from "@/lib/i18n";
import { type doctors } from "@/lib/content";
import { whatsappHref } from "@/lib/site";

type Doctor = (typeof doctors)[number];

export function DoctorProfile({ doctor }: { doctor: Doctor }) {
  const { t, tx } = useLang();

  return (
    <>
      <header className="bg-charcoal px-5 pb-20 pt-32 text-ivory lg:px-8 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <p className="font-serif text-8xl text-gold/25">{doctor.initials}</p>
          <p className="mt-6 text-[11px] tracking-[0.22em] text-gold uppercase">
            {tx(doctor.specialty)}
          </p>
          <h1 className="mt-3 text-4xl font-light sm:text-6xl">{tx(doctor.name)}</h1>
          <p className="mt-3 text-ivory/65">{tx(doctor.role)}</p>
          <div className="mt-10">
            <BookingCta variant="gold" />
          </div>
        </div>
      </header>

      <article className="bg-ivory px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-light">{t("ceoTitle")}</h2>
          <div className="gold-rule mt-4" />
          <p className="mt-6 text-base leading-8 text-muted">{tx(doctor.bio)}</p>
          <p className="mt-6 text-sm text-muted">{tx(doctor.credentials)}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <BookingCta />
            <Button href={whatsappHref(t("waDefault"))} variant="ghost" external>
              {t("whatsapp")}
            </Button>
          </div>
        </div>
      </article>
      <CEOStory />
      <FinalCTA />
    </>
  );
}
