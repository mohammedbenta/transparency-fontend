"use client";

import { useEffect } from "react";
import { useBooking } from "@/components/BookingModal";
import { Button } from "@/components/Button";
import { useLang } from "@/lib/i18n";
import { telHref, whatsappHref } from "@/lib/site";

export default function BookingPage() {
  const { openBooking } = useBooking();
  const { t } = useLang();

  useEffect(() => {
    openBooking();
  }, [openBooking]);

  return (
    <section className="bg-ivory px-5 pb-24 pt-36 lg:px-8">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-[11px] tracking-[0.28em] text-gold-deep uppercase">
          {t("nav.booking")}
        </p>
        <h1 className="mt-4 text-4xl font-light">{t("bookingTitle")}</h1>
        <p className="mt-4 text-sm leading-7 text-muted">{t("bookingDemo")}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => openBooking()}
            className="rounded-full bg-forest px-6 py-3 text-sm text-ivory"
          >
            {t("book")}
          </button>
          <Button href={whatsappHref(t("waDefault"))} variant="ghost" external>
            {t("whatsapp")}
          </Button>
          <Button href={telHref} variant="ghost">
            {t("call")}
          </Button>
        </div>
      </div>
    </section>
  );
}
