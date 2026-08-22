import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "dark" | "gold";

const styles: Record<Variant, string> = {
  primary:
    "bg-forest text-ivory hover:bg-forest-deep shadow-[0_14px_32px_-16px_rgba(28,59,52,0.65)]",
  secondary:
    "bg-transparent text-ivory border border-ivory/35 hover:border-gold hover:text-gold",
  ghost:
    "bg-transparent text-ink border border-ink/12 hover:border-gold-deep hover:text-gold-deep",
  dark: "bg-charcoal text-ivory hover:bg-ink",
  gold: "bg-gold text-ink hover:bg-gold-deep hover:text-ivory",
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
  onClick?: () => void;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  arrow?: boolean;
}) {
  const cls = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300",
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
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
