"use client";

import Image from "next/image";
import Link from "next/link";
import { BookingCta } from "@/components/BookingModal";
import { Button } from "@/components/Button";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import { useLang } from "@/lib/i18n";
import { doctors, type Service } from "@/lib/content";
import { whatsappHref } from "@/lib/site";

export function ServiceDetail({ service }: { service: Service }) {
  const { t, tx } = useLang();
  const doctor = doctors[0];

  const blocks = [
    { title: { ar: "ما هي هذه العناية؟", en: "What this care is" }, body: service.what },
    { title: { ar: "لمن هي؟", en: "Who it is for" }, body: service.who },
    { title: { ar: "كيف تبدو التجربة؟", en: "What the visit feels like" }, body: service.experience },
    { title: { ar: "لماذا الشفافية؟", en: "Why Transparency" }, body: service.why },
  ];

  return (
    <>
      <header className="relative min-h-[70vh] overflow-hidden bg-charcoal text-ivory">
        <Image
          src={service.image}
          alt={tx(service.imageAlt)}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/30" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 lg:px-8">
          <Link href="/services" className="text-sm text-gold">
            {t("allServices")}
          </Link>
          <h1 className="mt-4 max-w-3xl text-4xl font-light leading-snug sm:text-6xl">
            {tx(service.name)}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-ivory/75">
            {tx(service.problem)}
          </p>
          <div className="mt-8">
            <BookingCta variant="gold" service={service.slug} />
          </div>
        </div>
      </header>

      <article className="bg-ivory px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
          <div className="space-y-16 lg:col-span-8">
            {blocks.map((b) => (
              <section key={b.title.en}>
                <h2 className="text-2xl font-light sm:text-3xl">{tx(b.title)}</h2>
                <div className="gold-rule mt-4" />
                <p className="mt-6 max-w-2xl text-base leading-8 text-muted">{tx(b.body)}</p>
              </section>
            ))}

            <section>
              <h2 className="text-2xl font-light sm:text-3xl">
                {t("doctorsTitle")}
              </h2>
              <div className="gold-rule mt-4" />
              <p className="mt-6 max-w-2xl text-sm leading-7 text-muted">
                {tx(doctor.bio)}
              </p>
              <Link
                href={`/doctors/${doctor.slug}`}
                className="mt-4 inline-block text-sm text-forest underline-offset-8 hover:underline"
              >
                {tx(doctor.name)} — {t("viewProfile")}
              </Link>
            </section>
          </div>

          <aside className="h-fit rounded-2xl border border-line bg-surface p-8 lg:col-span-4 lg:sticky lg:top-24">
            <p className="text-[11px] tracking-[0.22em] text-gold-deep uppercase">
              {t("book")}
            </p>
            <p className="mt-3 text-lg leading-8">{tx(service.summary)}</p>
            <div className="mt-8 flex flex-col gap-3">
              <BookingCta service={service.slug} />
              <Button href={whatsappHref(t("waDefault"))} variant="ghost" external>
                {t("whatsapp")}
              </Button>
            </div>
          </aside>
        </div>
      </article>

      <FAQ />
      <FinalCTA />
    </>
  );
}
