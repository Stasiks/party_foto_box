// data/home.ts
import { ShieldCheck, Camera, Truck, LucideIcon } from "lucide-react";

export interface ProductThumbnail {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const productsData: ProductThumbnail[] = [
  {
    title: "Classic Fotobox",
    description: "Der Klassiker für Hochzeiten und Geburtstage. Inklusive Druck-Flatrate und sofortigem Ausdruck.",
    imageUrl: "/images/fotobox-thumb.jpg", 
    href: "/produkte/fotobox"
  },
  {
    title: "Tiny Planet",
    description: "Faszinierende 360-Grad-Aufnahmen, die deine Gäste in den Mittelpunkt einer eigenen kleinen Welt stellen.",
    imageUrl: "/images/tiny-planet-thumb.jpg",
    href: "/produkte/tiny-planet"
  },
  {
    title: "Chromakey / Greenscreen",
    description: "Virtuelle Hintergründe in Echtzeit. Perfekt für thematische Firmenevents und individuelle Brandings.",
    imageUrl: "/images/chromakey-thumb.jpg",
    href: "/produkte/chromakey"
  }
];

export const featuresData: FeatureItem[] = [
  {
    title: "100% DSGVO-Konform",
    description: "Lokale Datenspeicherung ohne US-Server. Sichere Cloud-Galerien gehostet in Deutschland. Kein rechtliches Risiko für Unternehmen.",
    icon: ShieldCheck,
  },
  {
    title: "Premium Hardware",
    description: "Professionelle Spiegelreflexkameras (DSLR) und Studioblitze statt billiger Webcams. Perfekte Belichtung bei jedem Lichtverhältnis.",
    icon: Camera,
  },
  {
    title: "Sorglos-Service",
    description: "Pünktliche Lieferung, fachgerechter Auf- und Abbau sowie technische Einweisung in ganz Hamburg im Preis enthalten.",
    icon: Truck,
  },
];