"use client";

import { Reveal } from "@/components/Reveal";
import { useLang } from "@/lib/i18n";
import { journey } from "@/lib/content";

export function TreatmentJourney() {
  const { t, tx } = useLang();

  return (
    <section className="bg-ivory px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-[11px] tracking-[0.28em] text-gold-deep uppercase">
            {t("journeyEyebrow")}
          </p>
          <h2 className="mt-5 max-w-2xl text-3xl font-light leading-snug sm:text-5xl">
            {t("journeyTitle")}
          </h2>
          <p className="mt-5 max-w-lg text-muted">{t("journeyLead")}</p>
        </Reveal>

        <ol className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {journey.map((step, i) => (
            <Reveal key={step.num} delay={i * 90} className="relative">
              {i < journey.length - 1 && (
                <span className="absolute top-5 hidden h-px w-[calc(100%+2.5rem)] bg-gradient-to-l from-transparent to-gold/50 lg:block rtl:bg-gradient-to-r" />
              )}
              <li className="relative">
                <p className="font-serif text-4xl text-gold">{step.num}</p>
                <h3 className="mt-5 text-xl">{tx(step.title)}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{tx(step.body)}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
