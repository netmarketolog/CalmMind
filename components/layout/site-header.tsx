"use client";

import { hero, nav, site } from "@/content/landing";
import type { CheckoutMode } from "@/lib/checkout";
import { CheckoutButton } from "@/components/checkout-button";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { useState } from "react";

type SiteHeaderProps = {
  checkoutMode: CheckoutMode;
  waitlistUrl: string;
};

export function SiteHeader({ checkoutMode, waitlistUrl }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-foreground"
        >
          {site.name}
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Основная навигация"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <CheckoutButton
            mode={checkoutMode}
            waitlistUrl={waitlistUrl}
            className="!min-h-10 !px-4 !py-2 !text-sm"
          >
            {hero.payCta}
          </CheckoutButton>
        </div>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-border md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Меню</span>
          <span aria-hidden className="flex flex-col gap-1">
            <span className="block h-0.5 w-5 bg-foreground" />
            <span className="block h-0.5 w-5 bg-foreground" />
            <span className="block h-0.5 w-5 bg-foreground" />
          </span>
        </button>
      </Container>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-border bg-background md:hidden"
        >
          <Container className="flex flex-col gap-4 py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-base text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <CheckoutButton mode={checkoutMode} waitlistUrl={waitlistUrl}>
              {hero.payCta}
            </CheckoutButton>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
