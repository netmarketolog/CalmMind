# CalmMind

Лендинг продукта в нише психологического благополучия: спокойный тон, SEO-разметка и задел под Stripe, личный кабинет и блог.

Стек: [Next.js](https://nextjs.org) (App Router), TypeScript, Tailwind CSS v4.

## Локальная разработка

Скопируйте переменные окружения и при необходимости заполните их:

```bash
cp .env.example .env.local
```

Запуск dev-сервера:

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Скрипты

- `npm run dev` — разработка
- `npm run build` — production-сборка
- `npm run start` — запуск после `build`
- `npm run lint` — ESLint

## Деплой на Render

1. Создайте **Web Service**, укажите репозиторий и команду сборки: `npm install && npm run build`, старт: `npm run start`.
2. Выберите среду **Node** версии **20+** (в репозитории есть [`.nvmrc`](.nvmrc) с `22`).
3. В **Environment** задайте как минимум:
   - `NEXT_PUBLIC_SITE_URL` — публичный URL сервиса, например `https://calmmind.onrender.com` (без слэша в конце по желанию, код нормализует).
   - `NEXT_PUBLIC_CHECKOUT_MODE` — `waitlist` или `stripe`.
   - При `waitlist`: `NEXT_PUBLIC_WAITLIST_URL` — ссылка на форму листа ожидания.
4. **Health check** (опционально): путь `/api/health` — ответ `200` и JSON с `ok: true`.

Подробнее о деплое Next.js: [Next.js — Deploying](https://nextjs.org/docs/app/building-your-application/deploying).

## Структура (кратко)

- `app/(site)/` — публичные страницы сайта (лендинг, юр. страницы) с общим header/footer; имя группы не попадает в URL.
- `app/api/health` — проверка живости для Render.
- `app/api/checkout` — заглушка под Stripe Checkout (POST).
- `content/landing.ts` — тексты и структура блоков лендинга.
- `components/landing/` — секции страницы.
- `components/ui/` — переиспользуемые примитивы.

## Лицензия

Приватный репозиторий — уточните у владельца проекта.
