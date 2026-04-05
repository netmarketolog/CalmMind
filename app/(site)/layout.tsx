import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getCheckoutMode, getWaitlistUrl } from "@/lib/checkout";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const checkoutMode = getCheckoutMode();
  const waitlistUrl = getWaitlistUrl();

  return (
    <>
      <SiteHeader checkoutMode={checkoutMode} waitlistUrl={waitlistUrl} />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </>
  );
}
