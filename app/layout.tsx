// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Script from "next/script";

const nunito = localFont({
  src: "./fonts/Nunito-ExtraBold.woff2",
  weight: "800",
  style: "normal",
  variable: "--font-nunito",
  display: "swap",
});

const supreme = localFont({
  src: "./fonts/Supreme-Regular.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-supreme",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deinedomain.de"), // ВАЖНО: Заменить на реальный домен
  title: {
    template: "%s | Party Foto Box Hamburg",
    default: "Fotobox Mieten Hamburg - Premium Event-Module",
  },
  description: "Hochwertige Fotoboxen und Event-Module für B2B und B2C in Hamburg mieten. 100% DSGVO-konform, DSLR-Qualität und Sorglos-Service.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://foto-partybox.de",
    siteName: "Party Foto Box Hamburg",
    title: "Fotobox Mieten Hamburg - Premium Event-Module",
    description: "Hochwertige Fotoboxen und Event-Module für B2B und B2C in Hamburg mieten.",
    images: [
      {
        url: "/images/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Party Foto Box Hamburg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  
  // JSON-LD для локального бизнеса (SEO)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Party Foto Box Hamburg",
    "image": "https://foto-partybox.de/images/og-image.jpg",
    "description": "Premium Fotobox Vermietung in Hamburg & Norderstedt",
    "address": {
      "@type": "22851",
      "addressLocality": "Norderstedt",
      "addressCountry": "DE"
    },
    "priceRange": "$$",
    "telephone": "+4915111037328"
  };

  return (
    <html lang="de" className={`${nunito.variable} ${supreme.variable}`}>
      <head>
        <Script
          id="json-ld-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}