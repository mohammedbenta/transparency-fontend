"use client";

import { Reveal } from "@/components/Reveal";
import { useLang } from "@/lib/i18n";
import { testimonials } from "@/lib/content";
import { site } from "@/lib/site";

export function Testimonials() {
  const { t, tx } = useLang();
  const item = testimonials[0];

  return (
    <section id="testimonials" className="bg-surface px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-[11px] tracking-[0.28em] text-gold-deep uppercase">
            {t("reviewsEyebrow")}
          </p>
          <h2 className="mt-5 text-3xl font-light sm:text-5xl">{t("reviewsTitle")}</h2>
          <p className="mt-4 text-muted">{t("reviewsLead")}</p>
        </Reveal>

        <Reveal delay={80}>
          <blockquote className="mt-14 max-w-4xl border-s-2 border-gold ps-8">
            <p className="text-xl font-light leading-10 text-ink sm:text-3xl sm:leading-[1.55]">
              “{tx(item.quote)}”
            </p>
            <footer className="mt-8">
              <cite className="not-italic">
                <span className="block text-base text-ink">{tx(item.name)}</span>
                <span className="mt-1 block text-sm text-muted">{tx(item.role)}</span>
              </cite>
              <span className="mt-4 inline-block text-gold" aria-label="5">
                ★★★★★
              </span>
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}

export function ReviewsTrust() {
  const { t } = useLang();
  const { rating, count, platform, mapsReviewsUrl } = site.reviews;

  return (
    <section className="border-y border-line bg-ivory">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-10 sm:flex-row sm:items-center lg:px-8">
        <div>
          <p className="font-serif text-5xl text-forest">
            {rating}
            <span className="ms-2 text-2xl text-gold">★</span>
          </p>
          <p className="mt-2 text-sm text-muted">
            {platform} · {count.toLocaleString()} {t("googleNote")}
          </p>
        </div>
        <a
          href={mapsReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-forest underline-offset-8 hover:underline"
        >
          {t("googleCta")}
        </a>
      </div>
    </section>
  );
}
