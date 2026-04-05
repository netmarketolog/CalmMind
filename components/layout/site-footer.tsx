import { footer, site } from "@/content/landing";
import { Container } from "@/components/ui/container";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <Container className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold">{site.name}</p>
          <p className="mt-2 max-w-sm text-sm text-muted">
            {footer.description}
          </p>
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">Документы</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link
                href="/legal/privacy"
                className="text-muted hover:text-foreground"
              >
                Конфиденциальность
              </Link>
            </li>
            <li>
              <Link
                href="/legal/terms"
                className="text-muted hover:text-foreground"
              >
                Условия использования
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">Контакты</p>
          <p className="mt-3 text-sm text-muted">
            <a
              className="hover:text-foreground"
              href={`mailto:${footer.contactEmail}`}
            >
              {footer.contactEmail}
            </a>
          </p>
          <ul className="mt-3 flex flex-wrap gap-4 text-sm">
            {footer.social.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  className="text-muted hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Container className="mt-10 border-t border-border pt-6">
        <p className="text-center text-xs text-muted">
          © {new Date().getFullYear()} {site.name}. Все права защищены.
        </p>
      </Container>
    </footer>
  );
}
