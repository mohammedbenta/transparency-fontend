"use client";

import { WhyTransparency } from "@/components/home/WhyTransparency";
import { CEOStory } from "@/components/home/CEOStory";
import { ClinicExperience } from "@/components/home/ClinicExperience";
import { DoctorsSection } from "@/components/home/DoctorsSection";
import { TreatmentJourney } from "@/components/home/TreatmentJourney";
import { FinalCTA } from "@/components/home/FinalCTA";
import { useLang } from "@/lib/i18n";

export default function AboutPage() {
  const { t } = useLang();
  return (
    <>
      <header className="bg-charcoal px-5 pb-16 pt-32 text-ivory lg:px-8 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] tracking-[0.28em] text-gold uppercase">{t("nav.about")}</p>
          <h1 className="mt-4 max-w-2xl text-4xl font-light leading-snug sm:text-6xl">
            {t("aboutHero")}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-ivory/70">{t("aboutLead")}</p>
        </div>
      </header>
      <WhyTransparency />
      <CEOStory />
      <ClinicExperience />
      <DoctorsSection />
      <TreatmentJourney />
      <FinalCTA />
    </>
  );
}
