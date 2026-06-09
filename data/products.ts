// data/products.ts

export interface PricingPackage {
  name: string;
  price: string;
  popular?: boolean;
  features: string[];
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  // ... старые поля
  demoFrames?: {
    basePhotoUrl: string;
    frames: { name: string; overlayUrl: string }[];
  };
}

export interface Product {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  specs: ProductSpec[];
  features: string[];
  packages: PricingPackage[];
}

export const productsRegistry: Record<string, Product> = {
  "fotobox": {
    id: "fotobox",
    title: "Classic Fotobox",
    description: "Der absolute Klassiker für Hochzeiten, Geburtstage und Firmenfeiern in Hamburg. Ausgestattet mit einer professionellen Spiegelreflexkamera, Studioblitz und Hochleistungsdrucker für perfekte Ergebnisse in Sekunden.",
    imageUrl: "/images/fotobox-main.jpg",
    demoFrames: {
    basePhotoUrl: "/images/demo-base.jpg",
    frames: [
      { name: "Hochzeit Klassik", overlayUrl: "/images/frames/wedding-1.png" },
      { name: "Minimalistisch", overlayUrl: "/images/frames/minimal-1.png" },
      { name: "Party Time", overlayUrl: "/images/frames/party-1.png" }
    ]
},
    specs: [
      { label: "Kamera", value: "Canon EOS DSLR" },
      { label: "Ausdruck", value: "DNP Fotodrucker (ca. 9 Sek)" },
      { label: "Beleuchtung", value: "Professioneller Studioblitz" },
      { label: "Platzbedarf", value: "ca. 2x2 Meter" }
    ],
    features: [
      "Unbegrenzte digitale Aufnahmen",
      "Sofortdruck-Flatrate (bis zu 400 Prints)",
      "Individuelles Drucklayout mit Logo/Namen",
      "Große Requisiten-Box (Hüte, Brillen, Schilder)",
      "Online-Galerie mit Passwort für alle Gäste",
      "Kostenloser Auf- und Abbau in Hamburg"
    ],
    packages: [
      {
        name: "Digital",
        price: "249€",
        features: ["Alle Bilder digital", "Online Galerie", "Requisiten", "Auf- & Abbau in HH"]
      },
      {
        name: "Print",
        price: "349€",
        popular: true,
        features: ["Sofortdruck Flatrate", "Layout-Design", "Alle digitalen Bilder", "Premium Requisiten"]
      },
      {
        name: "All-Inclusive",
        price: "499€",
        features: ["Betreuung vor Ort (4h)", "VIP Requisiten", "Gästebuch-Service", "Alle Bilder auf USB-Stick"]
      }
    ]
  },
  "tiny-planet": {
    id: "tiny-planet",
    title: "Tiny Planet 360°",
    description: "Faszinierende 360-Grad-Aufnahmen, die deine Gäste in den Mittelpunkt einer eigenen kleinen Welt stellen. Perfekt für moderne Events.",
    imageUrl: "/images/tiny-planet-main.jpg",
    specs: [
      { label: "Kamera", value: "360° Premium Cam" },
      { label: "Format", value: "Digital (Social Media Ready)" },
      { label: "Effekte", value: "Tiny Planet Overlay" },
      { label: "Platzbedarf", value: "ca. 3x3 Meter" }
    ],
    features: [
      "Interaktive 360-Grad Ansicht",
      "Direkter QR-Code Download",
      "Live-Vorschau auf dem Monitor",
      "Gebrandete Overlays für Unternehmen"
    ],
    packages: [
      {
        name: "Standard",
        price: "399€",
        features: ["4 Stunden Laufzeit", "QR-Code Share", "Digital Flatrate"]
      },
      {
        name: "Premium",
        price: "549€",
        popular: true,
        features: ["Ganze Nacht", "Custom Branding", "Live-Support", "Social Wall Integration"]
      }
    ]
  },
  "chromakey": {
    id: "chromakey",
    title: "Chromakey / Greenscreen",
    description: "Virtuelle Hintergründe in Echtzeit. Perfekt für thematische Firmenevents und individuelle Brandings.",
    imageUrl: "/images/chromakey-main.jpg",
    specs: [
      { label: "Hintergrund", value: "Pro Greenscreen-Wall" },
      { label: "Software", value: "Live-Keying AI" },
      { label: "Drucker", value: "Highspeed Thermosublimation" },
      { label: "Platzbedarf", value: "ca. 3x4 Meter" }
    ],
    features: [
      "Echtzeit-Hintergrundwechsel",
      "Bis zu 10 custom Hintergründe zur Auswahl",
      "Studio-Ausleuchtung inklusive",
      "Perfekt für Corporate Branding"
    ],
    packages: [
      {
        name: "Business B2B",
        price: "699€",
        popular: true,
        features: ["Custom Hintergründe", "Druck Flatrate", "Analytics & DSGVO-Lead Gen", "Full Service"]
      }
    ]
  }
};