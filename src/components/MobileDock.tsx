"use client";

import { useBooking } from "@/components/BookingModal";
import { WhatsAppIcon } from "@/components/WhatsAppButton";
import { useLang } from "@/lib/i18n";
import { whatsappHref } from "@/lib/site";

export function MobileDock() {
  const { openBooking } = useBooking();
  const { t } = useLang();

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-ivory/95 p-3 backdrop-blur-md lg:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => openBooking()}
          className="rounded-full bg-forest py-3.5 text-center text-sm font-medium text-ivory"
        >
          {t("bookShort")}
        </button>
        <a
          href={whatsappHref(t("waDefault"))}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/10 py-3.5 text-sm font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon />
          {t("whatsappShort")}
        </a>
      </div>
    </div>
  );
}
