import type { Metadata } from "next";
import { Literata, Manrope } from "next/font/google";
import "./globals.css";
import { getSiteUrl } from "@/lib/site-url";
import { site } from "@/content/landing";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
});

const literata = Literata({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — спокойствие и опора при тревоге`,
    template: `%s · ${site.name}`,
  },
  description:
    "Мягкие практики для снижения тревоги и большей эмоциональной устойчивости. Без давления — в вашем темпе.",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: site.name,
    title: `${site.name} — спокойствие и опора при тревоге`,
    description:
      "Короткие практики, понятные шаги и бережный подход к эмоциональному балансу.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — спокойствие и опора при тревоге`,
    description:
      "Короткие практики, понятные шаги и бережный подход к эмоциональному балансу.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${literata.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full font-sans text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-card focus:px-4 focus:py-2 focus:text-sm focus:text-foreground focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Перейти к содержимому
        </a>
        {children}
      </body>
    </html>
  );
}
