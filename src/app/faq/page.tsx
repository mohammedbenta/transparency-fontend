"use client";

import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import { useLang } from "@/lib/i18n";

export default function FaqPage() {
  const { t } = useLang();
  return (
    <>
      <header className="bg-ivory px-5 pb-4 pt-32 lg:px-8 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-light sm:text-5xl">{t("faqTitle")}</h1>
        </div>
      </header>
      <FAQ />
      <FinalCTA />
    </>
  );
}
