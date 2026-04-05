import { CheckoutButton } from "@/components/checkout-button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import {
  faq,
  features,
  finalCta,
  hero,
  howItWorks,
  pricing,
  problemSolution,
  proof,
  testimonials,
  trust,
} from "@/content/landing";
import type { CheckoutMode } from "@/lib/checkout";
import Image from "next/image";

type LandingPageProps = {
  checkoutMode: CheckoutMode;
  waitlistUrl: string;
};

export function LandingPage({ checkoutMode, waitlistUrl }: LandingPageProps) {
  const specialistSrc = hero.specialist.src;
  const specialistImageUnoptimized = specialistSrc.endsWith(".svg");

  return (
    <>
      <section
        id="about"
        aria-labelledby="hero-heading"
        className="scroll-mt-24 border-b border-border/60 bg-gradient-to-b from-card to-background pt-8 pb-10 sm:pt-10 sm:pb-12 lg:pt-12 lg:pb-14"
      >
        <Container>
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[300px] overflow-hidden rounded-2xl border border-border bg-background shadow-sm sm:max-w-[360px] lg:mx-0 lg:aspect-[4/5] lg:max-w-md lg:w-full">
              <Image
                src={specialistSrc}
                alt={hero.specialist.alt}
                fill
                priority
                sizes="(max-width: 1023px) 360px, (max-width: 1280px) 42vw, 448px"
                className="object-cover object-center"
                unoptimized={specialistImageUnoptimized}
              />
            </div>
            <div className="text-center lg:text-left">
              <h1
                id="hero-heading"
                className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
              >
                {hero.title}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                {hero.subtitle}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {hero.reassurance}
              </p>
              <div className="mt-7 flex items-center justify-center gap-3 sm:flex-row sm:gap-4 lg:justify-start">
                <CheckoutButton mode={checkoutMode} waitlistUrl={waitlistUrl}>
                  {hero.primaryCta}
                </CheckoutButton>
                <CheckoutButton
                  mode={checkoutMode}
                  waitlistUrl={waitlistUrl}
                  waitlistHref="#pricing"
                  variant="secondary"
                >
                  {hero.payCta}
                </CheckoutButton>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="proof-heading"
        className="border-b border-border/60 bg-card py-12"
      >
        <Container>
          <h2 id="proof-heading" className="sr-only">
            {proof.title}
          </h2>
          <ul className="grid gap-8 sm:grid-cols-3">
            {proof.items.map((item) => (
              <li
                key={item.label}
                className="text-center sm:text-left"
              >
                <p className="font-display text-2xl font-semibold text-accent">
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-muted">{item.label}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Section
        id="pain-solution"
        title={problemSolution.title}
        titleId="pain-solution-heading"
      >
        <p className="max-w-2xl text-muted">{problemSolution.intro}</p>
        <ul className="mt-10 grid gap-6 lg:grid-cols-3">
          {problemSolution.pairs.map((pair) => (
            <li
              key={pair.problem}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <h3 className="text-sm font-medium text-accent">
                {pair.problem}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {pair.solution}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="how-it-works"
        title={howItWorks.title}
        titleId="how-heading"
        className="bg-card"
      >
        <ol className="grid gap-8 md:grid-cols-3">
          {howItWorks.steps.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-border bg-background p-6"
            >
              <span
                className="font-display text-sm font-semibold text-accent"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-medium text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="features"
        title={features.title}
        titleId="features-heading"
      >
        <ul className="grid gap-6 sm:grid-cols-2">
          {features.items.map((f) => (
            <li
              key={f.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h3 className="font-medium text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {f.description}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="trust"
        title={trust.title}
        titleId="trust-heading"
        className="bg-card"
      >
        <ul className="max-w-3xl space-y-4 text-sm leading-relaxed text-muted">
          {trust.points.map((p) => (
            <li key={p} className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="testimonials"
        title={testimonials.title}
        titleId="testimonials-heading"
      >
        <ul className="grid gap-6 lg:grid-cols-3">
          {testimonials.items.map((t) => (
            <li
              key={t.author}
              className="flex flex-col rounded-2xl border border-border bg-card p-6"
            >
              <blockquote className="text-sm leading-relaxed text-muted">
                «{t.quote}»
              </blockquote>
              <footer className="mt-4 text-sm">
                <cite className="not-italic font-medium text-foreground">
                  {t.author}
                </cite>
                <span className="text-muted"> · {t.role}</span>
              </footer>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="pricing"
        title={pricing.title}
        titleId="pricing-heading"
        className="bg-card"
      >
        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-background p-8 text-center shadow-sm">
          <p className="inline-flex rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            {pricing.badge}
          </p>
          <p className="mt-4 text-muted">{pricing.description}</p>
          <ul className="mt-6 space-y-2 text-left text-sm text-muted">
            {pricing.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="text-accent" aria-hidden>
                  ✓
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex justify-center">
            <CheckoutButton mode={checkoutMode} waitlistUrl={waitlistUrl}>
              {hero.primaryCta}
            </CheckoutButton>
          </div>
        </div>
      </Section>

      <Section id="faq" title={faq.title} titleId="faq-heading">
        <div className="mx-auto max-w-2xl divide-y divide-border rounded-2xl border border-border bg-card">
          {faq.items.map((item) => (
            <details key={item.question} className="group p-5">
              <summary className="cursor-pointer list-none font-medium text-foreground outline-none marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  <span>{item.question}</span>
                  <span
                    className="text-muted transition group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Section>

      <section
        aria-labelledby="final-cta-heading"
        className="border-t border-border bg-gradient-to-b from-background to-card py-16 sm:py-20"
      >
        <Container className="text-center">
          <h2
            id="final-cta-heading"
            className="font-display text-2xl font-semibold text-foreground sm:text-3xl"
          >
            {finalCta.title}
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted">{finalCta.subtitle}</p>
          <div className="mt-8 flex justify-center">
            <CheckoutButton mode={checkoutMode} waitlistUrl={waitlistUrl}>
              {hero.primaryCta}
            </CheckoutButton>
          </div>
        </Container>
      </section>
    </>
  );
}
