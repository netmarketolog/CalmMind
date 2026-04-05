import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { site } from "@/content/landing";

export const metadata: Metadata = {
  title: "Условия использования",
  description: `Правила использования сервиса ${site.name}.`,
};

export default function TermsPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <h1 className="font-display text-3xl font-semibold text-foreground">
          Условия использования
        </h1>
        <p className="mt-4 text-sm text-muted">
          Заглушка для первой версии сайта. Перед оплатой и открытием доступа
          здесь появится полный договор оферты: подписка, отмена, ограничение
          ответственности и отдельный блок о том, что сервис не заменяет терапию.
        </p>
        <p className="mt-6 text-sm leading-relaxed text-muted">
          {site.name} ориентирован на бережную самоподдержку. Юридический текст
          будет согласован с вашим продуктовым и медицинским консультантом
          перед публичным запуском.
        </p>
      </Container>
    </div>
  );
}
