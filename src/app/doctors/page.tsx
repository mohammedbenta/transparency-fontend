"use client";

import Link from "next/link";
import { DoctorsSection } from "@/components/home/DoctorsSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { useLang } from "@/lib/i18n";

export default function DoctorsPage() {
  const { t } = useLang();
  return (
    <>
      <header className="bg-ivory px-5 pb-8 pt-32 lg:px-8 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] tracking-[0.28em] text-gold-deep uppercase">
            {t("doctorsEyebrow")}
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-light sm:text-5xl">
            {t("doctorsTitle")}
          </h1>
        </div>
      </header>
      <DoctorsSection />
      <FinalCTA />
      <p className="sr-only">
        <Link href="/doctors/ahmed-nawawi">{t("viewProfile")}</Link>
      </p>
    </>
  );
}
