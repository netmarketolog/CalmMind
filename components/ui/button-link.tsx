import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-sm hover:bg-accent-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
  secondary:
    "border border-border bg-card text-foreground hover:bg-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
  ghost: "text-foreground underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
};

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external,
}: ButtonLinkProps) {
  const base =
    "inline-flex min-h-11 min-w-[44px] items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors";
  const cls = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        className={cls}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
