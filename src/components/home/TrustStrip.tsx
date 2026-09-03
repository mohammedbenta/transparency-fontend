"use client";

import { site } from "@/lib/site";
import { teamMembers } from "@/lib/content";
import { useLang } from "@/lib/i18n";

const patientsLabel = String(site.proof.patients);
const yearsLabel = String(site.proof.years);
const consultantsLabel = String(teamMembers.length);

const numClass =
  "font-sans text-[1.65rem] font-light leading-none tabular-nums tracking-tight text-gold sm:text-5xl lg:text-[3.5rem]";

export function TrustStrip() {
  const { t } = useLang();

  return (
    <section className="bg-forest">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="hairline" />
        <ul className="flex flex-nowrap items-start justify-between gap-2 py-8 sm:justify-center sm:gap-0 sm:py-12 lg:py-14">
          <li className="min-w-0">
            <a
              href={site.reviews.mapsReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-start transition hover:opacity-80"
            >
              <span className="flex items-center gap-1 sm:gap-2.5">
                <StarIcon />
                <span className={numClass} dir="ltr">
                  {site.reviews.rating}
                </span>
              </span>
              <span className="mt-2 text-start text-[10px] leading-4 tracking-[0.24em] text-ivory/55 uppercase sm:mt-3 sm:text-[11px] sm:leading-5 sm:tracking-[0.28em]">
                {t("trustRating")}
              </span>
            </a>
          </li>
          <Dot />
          <li className="min-w-0">
            <div className="flex flex-col items-start">
              <span className={numClass} dir="ltr">
                {consultantsLabel}
              </span>
              <span className="mt-2 text-start text-[10px] leading-4 tracking-[0.24em] text-ivory/55 uppercase sm:mt-3 sm:text-[11px] sm:leading-5 sm:tracking-[0.28em]">
                {t("trustConsultants")}
              </span>
            </div>
          </li>
          <Dot />
          <li className="min-w-0">
            <div className="flex flex-col items-start">
              <span className={numClass} dir="ltr">
                {patientsLabel}
              </span>
              <span className="mt-2 text-start text-[10px] leading-4 tracking-[0.24em] text-ivory/55 uppercase sm:mt-3 sm:text-[11px] sm:leading-5 sm:tracking-[0.28em]">
                {t("trustPatients")}
              </span>
            </div>
          </li>
          <Dot />
          <li className="min-w-0">
            <div className="flex flex-col items-start">
              <span className={numClass} dir="ltr">
                {yearsLabel}
              </span>
              <span className="mt-2 text-start text-[10px] leading-4 tracking-[0.24em] text-ivory/55 uppercase sm:mt-3 sm:text-[11px] sm:leading-5 sm:tracking-[0.28em]">
                {t("trustYears")}
              </span>
            </div>
          </li>
        </ul>
        <div className="hairline" />
      </div>
    </section>
  );
}

function Dot() {
  return (
    <li
      aria-hidden
      className="mt-3 h-1 w-1 shrink-0 self-start rounded-full bg-gold/55 sm:mx-8 sm:mt-6 lg:mx-12"
    />
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-gold sm:h-8 sm:w-8" aria-hidden>
      <path d="M12 2.6 14.7 8.8l6.8.6-5.2 4.5 1.6 6.6L12 17.2 6.1 20.5l1.6-6.6L2.5 9.4l6.8-.6z" />
    </svg>
  );
}
