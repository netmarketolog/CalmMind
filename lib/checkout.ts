export type CheckoutMode = "waitlist" | "stripe";

export function getCheckoutMode(): CheckoutMode {
  const raw = process.env.NEXT_PUBLIC_CHECKOUT_MODE?.toLowerCase();
  return raw === "stripe" ? "stripe" : "waitlist";
}

export function getWaitlistUrl(): string {
  return process.env.NEXT_PUBLIC_WAITLIST_URL?.trim() ?? "";
}
