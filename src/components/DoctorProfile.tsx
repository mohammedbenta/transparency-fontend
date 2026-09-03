"use client";

import { BookingCta } from "@/components/BookingModal";
import { Button } from "@/components/Button";
import { CEOStory } from "@/components/home/CEOStory";
import { PageHero } from "@/components/PageHero";
import { useLang } from "@/lib/i18n";
import { type doctors } from "@/lib/content";
import { whatsappHref } from "@/lib/site";

type Doctor = (typeof doctors)[number];

export function DoctorProfile({ doctor }: { doctor: Doctor }) {
  const { t, tx } = useLang();

  return (
    <>
      <PageHero
        eyebrow={tx(doctor.specialty)}
        title={tx(doctor.name)}
        lead={tx(doctor.role)}
      />

      <article className="bg-ivory px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-light tracking-[-0.015em]">{t("ceoTitle")}</h2>
          <div className="gold-rule mt-4" />
          <p className="mt-6 text-base leading-8 text-muted">{tx(doctor.bio)}</p>
          <p className="mt-6 text-sm text-muted">{tx(doctor.credentials)}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <BookingCta variant="gold" />
            <Button href={whatsappHref(t("waDefault"))} variant="ghost" external>
              {t("whatsapp")}
            </Button>
          </div>
        </div>
      </article>
      <CEOStory />
    </>
  );
}
