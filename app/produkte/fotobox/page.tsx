import { ProductLayout } from "@/components/layouts/ProductLayout";
import { FrameSwapper } from "@/components/ui/FrameSwapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classic Fotobox Mieten",
  description: "Mieten Sie unsere Classic Fotobox für Hochzeiten und Firmenevents in Hamburg. Inklusive Druck-Flatrate und Accessoires.",
};

export default function FotoboxPage() {
  
  // Данные для интерактивного демо рамок
  const frameDemoData = {
    basePhotoUrl: "/images/demo-base-photo.jpg",
    frames: [
      { name: "Hochzeit", overlayUrl: "/images/frames/wedding-overlay.png" },
      { name: "Firmenevent", overlayUrl: "/images/frames/corporate-overlay.png" },
      { name: "Geburtstag", overlayUrl: "/images/frames/birthday-overlay.png" },
    ]
  };

  // Основные данные продукта
  const fotoboxData = {
    title: "Classic Fotobox",
    description: "Der perfekte Eisbrecher für Ihre Veranstaltung in Hamburg. Ausgestattet mit professioneller Studiotechnik liefert unsere Fotobox gestochen scharfe Bilder und sofortige Ausdrucke in Laborqualität.",
    imageUrl: "/images/fotobox-hero.jpg",
    specs: [
      { label: "Platzbedarf", value: "ca. 2 x 2 Meter" },
      { label: "Kamera", value: "Spiegelreflex (DSLR)" },
      { label: "Druckzeit", value: "ca. 10 Sekunden" },
      { label: "Ausdrucke", value: "Flatrate (bis 400/Rolle)" },
    ],
    features: [
      "Große Auswahl an hochwertigen und lustigen Requisiten",
      "Passwortgeschützte Online-Galerie (DSGVO-konform)",
      "Individuelles Layout für Ihre Ausdrucke",
      "Kostenloser Auf- und Abbau in Hamburg",
      "Telefonischer Support während des Events"
    ],
    // Тарифная сетка
    packages: [
      {
        name: "Digital Basic",
        price: "299€",
        features: [
          "Mietdauer für das gesamte Event",
          "Unbegrenzte digitale Fotos",
          "Online-Galerie für 3 Monate",
          "Standard Requisiten-Set",
          "Selbstabholung möglich"
        ]
      },
      {
        name: "Print Premium",
        price: "449€",
        popular: true,
        features: [
          "Alles aus Digital Basic",
          "Professioneller Fotodrucker",
          "Druck-Flatrate (bis 400 Bilder)",
          "Individuelles Print-Layout",
          "Lieferung & Aufbau in Hamburg"
        ]
      },
      {
        name: "Corporate VIP",
        price: "599€",
        features: [
          "Alles aus Print Premium",
          "Vollständiges Branding der Box",
          "DSGVO-konforme Datenerfassung",
          "Live-Slideshow auf externem Monitor",
          "Betreuung vor Ort (optional)"
        ]
      }
    ],
    // Интегрируем клиентский компонент демо в шаблон
    interactiveDemo: <FrameSwapper {...frameDemoData} />
  };

  return <ProductLayout {...fotoboxData} />;
}