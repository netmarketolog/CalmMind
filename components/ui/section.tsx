import type { ReactNode } from "react";
import { Container } from "./container";

type SectionProps = {
  id: string;
  title: string;
  titleId: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export function Section({
  id,
  title,
  titleId,
  children,
  className = "",
  containerClassName = "",
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={`scroll-mt-24 py-16 sm:py-20 ${className}`}
    >
      <Container className={containerClassName}>
        <h2
          id={titleId}
          className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          {title}
        </h2>
        <div className="mt-8">{children}</div>
      </Container>
    </section>
  );
}
