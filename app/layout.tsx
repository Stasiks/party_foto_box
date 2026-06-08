// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// 1. Подключение Nunito для заголовков (ExtraBold = 800)
const nunito = localFont({
  src: "./fonts/Nunito-ExtraBold.woff2",
  weight: "800",
  style: "normal",
  variable: "--font-nunito",
  display: "swap", // Обязательно для предотвращения невидимого текста при загрузке
});

// 2. Подключение Supreme для основного текста (Regular = 400)
const supreme = localFont({
  src: "./fonts/Supreme-Regular.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-supreme",
  display: "swap",
});

// Базовые SEO-метаданные
export const metadata: Metadata = {
  title: {
    template: "%s | Fotobox Mieten Hamburg",
    default: "Fotobox Mieten Hamburg — Event-Module & Photo Booth",
  },
  description: "Hochwertige Fotoboxen und Event-Module für B2B und B2C in Hamburg mieten. DSGVO-konform und zuverlässig.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Прокидываем обе CSS-переменные в тег html
    <html lang="de" className={`${nunito.variable} ${supreme.variable}`}>
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