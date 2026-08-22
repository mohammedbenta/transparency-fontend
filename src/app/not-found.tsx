"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";

export default function NotFound() {
  const { t } = useLang();
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-5 pt-32 text-center">
      <p className="font-serif text-6xl text-gold">404</p>
      <h1 className="mt-6 text-2xl font-light">{t("notFound")}</h1>
      <Link
        href="/"
        className="mt-8 text-sm text-forest underline-offset-8 hover:underline"
      >
        {t("notFoundCta")}
      </Link>
    </section>
  );
}
