"use client";

import { FAQ } from "@/components/home/FAQ";
import { PageHero } from "@/components/PageHero";
import { useLang } from "@/lib/i18n";

export default function FaqPage() {
  const { t } = useLang();
  return (
    <>
      <PageHero eyebrow={t("faqEyebrow")} title={t("faqTitle")} lead={t("faqLead")} />
      <FAQ hideIntro />
    </>
  );
}
