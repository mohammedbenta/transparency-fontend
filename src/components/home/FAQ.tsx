"use client";

import { useId, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/lib/i18n";
import { faqs } from "@/lib/content";
import { cn, displayHeading } from "@/lib/cn";

export function FAQ({ hideIntro = false }: { hideIntro?: boolean }) {
  const { t, tx, lang } = useLang();
  const [open, setOpen] = useState(0);
  const base = useId();

  return (
    <section
      id="faq"
      className={cn(
        "bg-ivory px-5 lg:px-8",
        hideIntro ? "pb-24 pt-8 lg:pb-32" : "py-24 lg:py-32",
      )}
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
        {!hideIntro ? (
          <Reveal className="lg:col-span-5">
            <p className="eyebrow-rule text-[11px] tracking-normal sm:tracking-[0.32em] text-gold-deep uppercase">
              {t("faqEyebrow")}
            </p>
            <h2
              className={cn(
                "mt-7 text-3xl leading-[1.15] sm:text-5xl",
                displayHeading(lang),
              )}
            >
              {t("faqTitle")}
            </h2>
            <p className="mt-5 font-light leading-8 text-muted">{t("faqLead")}</p>
          </Reveal>
        ) : null}
        <div className={hideIntro ? "mx-auto w-full max-w-3xl lg:col-span-12" : "lg:col-span-7"}>
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
