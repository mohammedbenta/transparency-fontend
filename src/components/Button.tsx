import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "dark" | "gold";

const styles: Record<Variant, string> = {
  primary:
    "bg-forest text-ivory hover:bg-forest-deep shadow-[0_18px_38px_-20px_rgba(28,59,52,0.75)] hover:shadow-[0_24px_48px_-20px_rgba(28,59,52,0.85)] hover:-translate-y-[1px]",
  secondary:
    "bg-transparent text-ivory border border-ivory/30 hover:border-gold hover:text-gold hover:bg-ivory/[0.04]",
  ghost:
    "bg-transparent text-ink border border-ink/12 hover:border-gold-deep hover:text-gold-deep hover:bg-ink/[0.02]",
  dark: "bg-charcoal text-ivory hover:bg-ink hover:-translate-y-[1px]",
  gold: "btn-gold-metal hover:-translate-y-[1px]",
};

export function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className,
  external,
  type = "button",
  arrow = true,
}: {
  href?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  arrow?: boolean;
}) {
  const cls = cn(
    "group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-[13px] font-medium tracking-[0.05em] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform",
    styles[variant],
    className,
  );

  const inner = (
    <>
      <span>{children}</span>
      {arrow && (
        <span
          className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
          aria-hidden
        >
          →
        </span>
      )}
    </>
  );

  if (!href) {
    return (
      <button type={type} onClick={onClick} className={cls}>
        {inner}
      </button>
    );
  }

  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} onClick={onClick}>
      {inner}
    </Link>
  );
}
