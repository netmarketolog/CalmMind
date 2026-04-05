import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { site } from "@/content/landing";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description: `Как ${site.name} обрабатывает данные пользователей.`,
};

export default function PrivacyPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <h1 className="font-display text-3xl font-semibold text-foreground">
          Политика конфиденциальности
        </h1>
        <p className="mt-4 text-sm text-muted">
          Заглушка для первой версии сайта. Здесь будет полный текст политики
          обработки персональных данных до запуска продукта и приёма платежей.
        </p>
        <p className="mt-6 text-sm leading-relaxed text-muted">
          Если у вас есть вопросы по данным и безопасности, напишите нам на
          контактный адрес в подвале страницы — мы ответим и учтём это при
          подготовке финального документа.
        </p>
      </Container>
    </div>
  );
}
