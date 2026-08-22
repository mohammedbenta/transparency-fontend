"use client";

import { useId, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/lib/i18n";
import { faqs } from "@/lib/content";
import { cn } from "@/lib/cn";

export function FAQ() {
  const { t, tx } = useLang();
  const [open, setOpen] = useState(0);
  const base = useId();

  return (
    <section id="faq" className="bg-ivory px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="text-[11px] tracking-[0.28em] text-gold-deep uppercase">
            {t("faqEyebrow")}
          </p>
          <h2 className="mt-5 text-3xl font-light leading-snug sm:text-5xl">
            {t("faqTitle")}
          </h2>
          <p className="mt-5 text-muted">{t("faqLead")}</p>
        </Reveal>
        <div className="lg:col-span-7">
          {faqs.map((item, i) => {
            const panel = `${base}-p-${i}`;
            const btn = `${base}-b-${i}`;
            const isOpen = open === i;
            return (
              <Reveal key={item.q.ar} delay={i * 40}>
                <div className="border-b border-line">
                  <h3>
                    <button
                      type="button"
                      id={btn}
                      aria-expanded={isOpen}
                      aria-controls={panel}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="flex w-full items-start justify-between gap-6 py-5 text-start"
                    >
                      <span className="text-base sm:text-lg">{tx(item.q)}</span>
                      <span
                        className={cn(
                          "mt-1 text-gold transition",
                          isOpen && "rotate-45",
                        )}
                        aria-hidden
                      >
                        +
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panel}
                    role="region"
                    aria-labelledby={btn}
                    hidden={!isOpen}
                    className="pb-5 text-sm leading-7 text-muted"
                  >
                    {tx(item.a)}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
