import { LandingPage } from "@/components/landing/landing-page";
import { site } from "@/content/landing";
import { getCheckoutMode, getWaitlistUrl } from "@/lib/checkout";
import { getSiteUrl } from "@/lib/site-url";

export default function HomePage() {
  const checkoutMode = getCheckoutMode();
  const waitlistUrl = getWaitlistUrl();
  const base = getSiteUrl();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${base}/#organization`,
        name: site.name,
        url: base,
        description:
          "Продукт для мягкой работы с тревогой и эмоциональным балансом через короткие практики.",
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: base,
        name: site.name,
        publisher: { "@id": `${base}/#organization` },
        inLanguage: "ru-RU",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingPage checkoutMode={checkoutMode} waitlistUrl={waitlistUrl} />
    </>
  );
}
