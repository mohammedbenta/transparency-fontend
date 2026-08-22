"use client";

import { useLang } from "@/lib/i18n";

export function TrustStrip() {
  const { t } = useLang();
  const items = [t("trust1"), t("trust2"), t("trust3"), t("trust4")];

  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-line sm:grid-cols-4">
        {items.map((item) => (
          <p
            key={item}
            className="bg-surface px-4 py-5 text-center text-[13px] tracking-wide text-ink sm:py-7"
          >
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}
