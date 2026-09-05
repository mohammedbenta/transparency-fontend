"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { useLang } from "@/lib/i18n";

export function Logo({
  className,
  priority = false,
  onClick,
}: {
  className?: string;
  priority?: boolean;
  onClick?: () => void;
}) {
  const { t } = useLang();

  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn("inline-flex min-w-0 items-center", className)}
      aria-label={t("logoAria")}
    >
      <span className="relative block h-7 w-[10.75rem] sm:h-10 sm:w-[15rem]">
        <Image
          src="/images/brand/logo-wordmark.png"
          alt=""
          fill
          sizes="(max-width: 640px) 172px, 240px"
          priority={priority}
          unoptimized
          className="object-contain object-left"
        />
      </span>
    </Link>
  );
}
