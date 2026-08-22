"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { useLang } from "@/lib/i18n";

export function Logo({
  className,
  priority = false,
  onLight = false,
  onClick,
}: {
  className?: string;
  priority?: boolean;
  onLight?: boolean;
  onClick?: () => void;
}) {
  const { t, lang } = useLang();

  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn("inline-flex min-w-0 items-center gap-3", className)}
      aria-label={t("logoAria")}
    >
      <Image
        src="/images/brand/mark-gold.png"
        alt=""
        width={44}
        height={40}
        priority={priority}
        className="h-10 w-auto shrink-0 object-contain"
      />
      <span className="flex min-w-0 flex-col leading-tight">
        <span
          className={cn(
            "font-serif text-[15px] tracking-[0.22em] uppercase",
            onLight ? "text-ink" : "text-ivory",
          )}
        >
          Transparency
        </span>
        <span
          className={cn(
            "mt-0.5 text-[10px] tracking-wide",
            onLight ? "text-muted" : "text-ivory/70",
          )}
        >
          {lang === "ar" ? "عيادات الشفافية لطب الأسنان" : "Dental Clinics · Jeddah"}
        </span>
      </span>
    </Link>
  );
}
