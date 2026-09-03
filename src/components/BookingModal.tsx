"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useState,
} from "react";
import { cn } from "@/lib/cn";
import { useLang } from "@/lib/i18n";
import { doctors, services } from "@/lib/content";
import { site, telHref, whatsappHref } from "@/lib/site";
import { Button } from "@/components/Button";
import { bookingHref, handleBookingClick } from "@/lib/booking";

type Prefill = { service?: string };

type BookingContextValue = {
  openBooking: (prefill?: Prefill) => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within BookingProvider");
  return ctx;
}

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [prefill, setPrefill] = useState<Prefill>({});
  const openBooking = useCallback((next?: Prefill) => {
    setPrefill(next ?? {});
    setOpen(true);
  }, []);

  return (
    <BookingContext.Provider value={{ openBooking }}>
      {children}
      {open && (
        <BookingDialog onClose={() => setOpen(false)} prefill={prefill} />
      )}
    </BookingContext.Provider>
  );
}

export function BookingCta({
  className,
  variant = "primary",
  service,
  arrow = true,
}: {
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "dark" | "gold";
  service?: string;
  arrow?: boolean;
}) {
  const { t } = useLang();
  return (
    <Button
      href={bookingHref(service)}
      variant={variant}
      className={className}
      arrow={arrow}
      onClick={(e) => handleBookingClick(e, service)}
    >
      {t("book")}
    </Button>
  );
}

const times = ["10:00", "11:30", "13:00", "16:00", "17:30", "19:00"];

function upcomingDays(locale: string, count = 7) {
  const days: { iso: string; label: string }[] = [];
  const start = new Date();
  start.setDate(start.getDate() + 1);
  for (let i = 0; days.length < count; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    days.push({
      iso: d.toISOString().slice(0, 10),
      label: d.toLocaleDateString(locale, {
        weekday: "short",
        day: "numeric",
        month: "short",
      }),
    });
  }
  return days;
}

function BookingDialog({
  onClose,
  prefill,
}: {
  onClose: () => void;
  prefill: Prefill;
}) {
  const titleId = useId();
  const { lang, t, tx } = useLang();
  const days = useMemo(
    () => upcomingDays(lang === "en" ? "en-GB" : "ar-SA"),
    [lang],
  );

  const [step, setStep] = useState(1);
  const [service, setService] = useState(prefill.service ?? "");
  const [doctor, setDoctor] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const serviceLabel =
    service === "consult"
      ? t("consult")
      : services.find((s) => s.slug === service)
        ? tx(services.find((s) => s.slug === service)!.name)
        : "";

  const doctorLabel =
    doctor === "any"
      ? t("anyDoctor")
      : doctors.find((d) => d.slug === doctor)
        ? tx(doctors.find((d) => d.slug === doctor)!.name)
        : "";

  const canNext =
    (step === 1 && service) ||
    (step === 2 && doctor) ||
    (step === 3 && day && time) ||
    (step === 4 && name.trim() && phone.trim()) ||
    step === 5;

  const submit = () => {
    if (!name.trim() || !phone.trim() || !service || !day || !time) {
      setError(t("bookingError"));
      return;
    }
    setDone(true);
  };

  const steps = [
    t("bookingStep1"),
    t("bookingStep2"),
    t("bookingStep3"),
    t("bookingStep4"),
    t("bookingStep5"),
  ];

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-ink/55 p-0 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onClose}
    >
      <div
        className="max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-t-3xl bg-surface sm:rounded-3xl vip-panel-light"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-5">
          <div>
            <p className="text-[11px] tracking-[0.22em] text-gold-deep uppercase">
              Transparency
            </p>
            <h2 id={titleId} className="mt-1 text-xl text-ink">
              {t("bookingTitle")}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-9 w-9 place-items-center rounded-full border border-ink/10 text-muted"
            aria-label={t("bookingClose")}
          >
            ×
          </button>
        </div>

        <p className="px-6 pt-4 text-xs leading-6 text-muted">{t("bookingDemo")}</p>

        {!done && (
          <ol className="mx-6 mt-5 flex gap-1" aria-label="progress">
            {steps.map((label, i) => (
              <li key={label} className="flex-1">
                <span
                  className={cn(
                    "block h-0.5 rounded-full",
                    i + 1 <= step ? "bg-gold" : "bg-line",
                  )}
                />
                <span className="mt-2 hidden text-[10px] text-muted sm:block">
                  {label}
                </span>
              </li>
            ))}
          </ol>
        )}

        <div className="px-6 py-6">
          {done ? (
            <div className="py-8 text-center">
              <p className="font-serif text-3xl text-forest">{t("bookingSuccessTitle")}</p>
              <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-muted">
                {t("bookingSuccess")}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button href={whatsappHref(t("waDefault"))} external>
                  {t("whatsappShort")}
                </Button>
                <Button href={telHref} variant="ghost">
                  {t("call")}
                </Button>
              </div>
            </div>
          ) : (
            <>
              {step === 1 && (
                <div className="grid gap-2">
                  <Choice
                    active={service === "consult"}
                    onClick={() => setService("consult")}
                    title={t("consult")}
                  />
                  {services.map((s) => (
                    <Choice
                      key={s.slug}
                      active={service === s.slug}
                      onClick={() => setService(s.slug)}
                      title={tx(s.name)}
                      subtitle={tx(s.problem)}
                    />
                  ))}
                </div>
              )}

              {step === 2 && (
                <div className="grid gap-2">
                  <Choice
                    active={doctor === "any"}
                    onClick={() => setDoctor("any")}
                    title={t("anyDoctor")}
                  />
                  {doctors.map((d) => (
                    <Choice
                      key={d.slug}
                      active={doctor === d.slug}
                      onClick={() => setDoctor(d.slug)}
                      title={tx(d.name)}
                      subtitle={tx(d.role)}
                    />
                  ))}
                </div>
              )}

              {step === 3 && (
                <div>
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {days.map((d) => (
                      <button
                        key={d.iso}
                        type="button"
                        onClick={() => setDay(d.iso)}
                        className={cn(
                          "min-w-[5.2rem] rounded-2xl border px-3 py-3 text-sm",
                          day === d.iso
                            ? "border-gold bg-gold/15 text-ink"
                            : "border-line text-muted hover:border-gold",
                        )}
                      >
                        {d.label}
                      </button>
                    ))}
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {times.map((tm) => (
                      <button
                        key={tm}
                        type="button"
                        onClick={() => setTime(tm)}
                        className={cn(
                          "rounded-full border py-2.5 text-sm tabular-nums",
                          time === tm
                            ? "border-gold bg-gold/15"
                            : "border-line text-muted hover:border-gold",
                        )}
                        dir="ltr"
                      >
                        {tm}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="grid gap-4">
                  <Field
                    label={t("bookingName")}
                    value={name}
                    onChange={setName}
                    autoComplete="name"
                  />
                  <Field
                    label={t("bookingPhone")}
                    value={phone}
                    onChange={setPhone}
                    autoComplete="tel"
                    dir="ltr"
                  />
                  <Field
                    label={t("bookingNote")}
                    value={note}
                    onChange={setNote}
                    multiline
                  />
                </div>
              )}

              {step === 5 && (
                <dl className="space-y-3 text-sm">
                  <Row label={t("bookingStep1")} value={serviceLabel} />
                  <Row label={t("bookingStep2")} value={doctorLabel} />
                  <Row
                    label={t("bookingStep3")}
                    value={`${day} · ${time}`}
                    ltr
                  />
                  <Row label={t("bookingName")} value={name} />
                  <Row label={t("bookingPhone")} value={phone} ltr />
                </dl>
              )}

              {error && <p className="mt-4 text-sm text-red-800">{error}</p>}

              <div className="mt-8 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.max(1, s - 1))}
                  className="text-sm text-muted disabled:opacity-30"
                  disabled={step === 1}
                >
                  {t("bookingBack")}
                </button>
                {step < 5 ? (
                  <button
                    type="button"
                    disabled={!canNext}
                    onClick={() => {
                      if (!canNext) {
                        setError(t("bookingError"));
                        return;
                      }
                      setError("");
                      setStep((s) => s + 1);
                    }}
                    className="rounded-full btn-gold-metal px-6 py-2.5 text-sm disabled:opacity-40"
                  >
                    {t("bookingNext")}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={submit}
                    className="rounded-full btn-gold-metal px-6 py-2.5 text-sm"
                  >
                    {t("bookingSubmit")}
                  </button>
                )}
              </div>

              <p className="mt-6 text-center text-xs text-muted">
                {t("bookingOr")}{" "}
                <a href={telHref} className="text-forest underline-offset-4 hover:underline" dir="ltr">
                  {site.phoneDisplay}
                </a>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Choice({
  active,
  onClick,
  title,
  subtitle,
}: {
  active: boolean;
  onClick: () => void;
  title: string;
  subtitle?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-2xl border px-4 py-3 text-start transition",
        active ? "border-gold bg-gold/10" : "border-line hover:border-gold/60",
      )}
    >
      <span className="block text-sm text-ink">{title}</span>
      {subtitle && (
        <span className="mt-1 block text-xs leading-5 text-muted">{subtitle}</span>
      )}
    </button>
  );
}

function Field({
  label,
  value,
  onChange,
  multiline,
  autoComplete,
  dir,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
  autoComplete?: string;
  dir?: "ltr" | "rtl";
}) {
  const cls =
    "w-full rounded-2xl border border-line bg-ivory px-4 py-3 text-sm outline-none transition focus:border-gold";
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block text-muted">{label}</span>
      {multiline ? (
        <textarea
          rows={3}
          className={cls}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input
          className={cls}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoComplete={autoComplete}
          dir={dir}
        />
      )}
    </label>
  );
}

function Row({
  label,
  value,
  ltr,
}: {
  label: string;
  value: string;
  ltr?: boolean;
}) {
  return (
    <div className="flex justify-between gap-4 border-b border-line py-2">
      <dt className="text-muted">{label}</dt>
      <dd className="text-ink" dir={ltr ? "ltr" : undefined}>
        {value}
      </dd>
    </div>
  );
}
