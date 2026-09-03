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
      <Image
        src="/images/brand/logo-wordmark.png"
        alt=""
        width={927}
        height={170}
        priority={priority}
        className="h-8 w-auto object-contain shadow-none drop-shadow-none sm:h-9"
      />
    </Link>
  );
}
