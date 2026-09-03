"use client";

import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { PageHero } from "@/components/PageHero";
import { useLang } from "@/lib/i18n";

export default function ServicesPage() {
  const { t } = useLang();
  return (
    <>
      <PageHero
        eyebrow={t("servicesEyebrow")}
        title={t("servicesTitle")}
        lead={t("servicesLead")}
      />
      <ServicesShowcase hideIntro />
    </>
  );
}
