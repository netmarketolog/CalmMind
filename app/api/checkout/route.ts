import { NextResponse } from "next/server";

/**
 * Заглушка под Stripe Checkout.
 * Следующий этап: stripe.checkout.sessions.create + redirect на session.url
 */
export async function POST() {
  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) {
    return NextResponse.json(
      { error: "Платежи ещё не настроены (нет STRIPE_SECRET_KEY)." },
      { status: 503 },
    );
  }

  return NextResponse.json(
    {
      error:
        "Stripe подключён, но создание сессии ещё не реализовано. Добавьте price id и вызов checkout.sessions.create.",
    },
    { status: 501 },
  );
}
