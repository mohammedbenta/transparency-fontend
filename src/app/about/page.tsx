"use client";

import { CEOStory } from "@/components/home/CEOStory";
import { DoctorsSection } from "@/components/home/DoctorsSection";
import { PageHero } from "@/components/PageHero";
import { useLang } from "@/lib/i18n";

export default function AboutPage() {
  const { t } = useLang();
  return (
    <>
      <PageHero
        eyebrow={t("nav.about")}
        title={t("aboutHero")}
        lead={t("aboutLead")}
      />
      <CEOStory />
      <DoctorsSection />
    </>
  );
}
