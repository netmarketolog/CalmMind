"use client";

import type { CheckoutMode } from "@/lib/checkout";
import { useState } from "react";

type ButtonVariant = "primary" | "secondary";

type CheckoutButtonProps = {
  mode: CheckoutMode;
  waitlistUrl: string;
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  /** В режиме waitlist: явный URL или якорь (иначе NEXT_PUBLIC_WAITLIST_URL или #faq). */
  waitlistHref?: string;
};

const variantClass: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white shadow-sm hover:bg-accent-muted focus-visible:outline-ring",
  secondary:
    "border border-border bg-card text-foreground shadow-sm hover:bg-background focus-visible:outline-ring",
};

export function CheckoutButton({
  mode,
  waitlistUrl,
  children,
  className = "",
  variant = "primary",
  waitlistHref,
}: CheckoutButtonProps) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const base =
    "inline-flex min-h-11 min-w-[44px] items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60";

  const appearance = `${base} ${variantClass[variant]} ${className}`;

  if (mode === "waitlist") {
    const resolved =
      waitlistHref?.trim() || waitlistUrl.trim() || "#faq";
    const href = resolved;
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={appearance}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  async function handleClick() {
    setError(null);
    setPending(true);
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = (await res.json().catch(() => null)) as
        | { url?: string; error?: string }
        | null;
      if (res.ok && data?.url) {
        window.location.href = data.url;
        return;
      }
      setError(data?.error ?? "Оплата временно недоступна. Попробуйте позже.");
    } catch {
      setError("Не удалось связаться с сервером. Проверьте сеть.");
    } finally {
      setPending(false);
    }
  }

  return (
    <span className="inline-flex flex-col items-stretch gap-1">
      <button
        type="button"
        className={appearance}
        onClick={handleClick}
        disabled={pending}
      >
        {pending ? "Открываем оплату…" : children}
      </button>
      {error ? (
        <span className="text-center text-xs text-red-700" role="status">
          {error}
        </span>
      ) : null}
    </span>
  );
}
