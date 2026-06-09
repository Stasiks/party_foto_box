import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ShieldCheck, Camera, Truck } from "lucide-react";

// Данные продуктов (оставлено 3 актуальные позиции для идеальной сетки)
const productsData = [
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

// Данные блока преимуществ (Trust/B2B фокус)
const featuresData = [
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

export default function Startseite() {
  return (
    <main className="min-h-screen">
      
      {/* 1. Hero Секция (Премиум асимметричный дизайн) */}
      <section className="pt-32 pb-6 px-4 md:px-6 max-w-[1920px] mx-auto min-h-[90vh] flex flex-col lg:flex-row gap-6">
        
        {/* Левая карточка: Текст и CTA */}
        <div className="bg-white w-full lg:w-[45%] rounded-[2.5rem] p-10 md:p-16 flex flex-col justify-center shadow-sm">
          <h1 className="text-5xl md:text-6xl font-heading text-zinc-900 leading-[1.1] tracking-tight">
            Premium Fotobox <br />
            <span className="text-red-500">Mieten</span> Hamburg
          </h1>
          <p className="mt-6 text-lg text-zinc-500 font-sans max-w-md leading-relaxed">
            Hochwertige Event-Module für Hochzeiten, Messen und Firmenevents. 100% DSGVO-konform, zuverlässig und unvergesslich.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="lg" href="/kontakt" className="rounded-full">
              Jetzt Anfragen
            </Button>
            <Button variant="outline" size="lg" href="/produkte/fotobox" className="rounded-full">
              Alle Produkte
            </Button>
          </div>
        </div>

        {/* Правая карточка: Главное изображение */}
        <div className="relative w-full lg:w-[55%] bg-zinc-200 rounded-[2.5rem] overflow-hidden min-h-[50vh] lg:min-h-full shadow-sm group">
          {/* После добавления файла в public/images/hero-fotobox.jpg,
            удалить этот div-заглушку и раскомментировать компонент <Image /> ниже.
          */}
          <div className="absolute inset-0 flex items-center justify-center bg-slate-200 text-slate-500 font-sans z-10 p-6 text-center border-4 border-dashed border-slate-300 rounded-[2.5rem]">
            Размести фото фотобудки здесь <br/> (public/images/hero-fotobox.jpg)
          </div>
          
          {/* <Image 
            src="/images/hero-fotobox.jpg" 
            alt="Fotobox mieten Hamburg" 
            fill 
            priority
            className="object-cover group-hover:scale-105 transition-transform duration-700" 
          /> */}
        </div>
      </section>

      {/* 2. Сетка продуктов (Silo-структура продвижения) */}
      <section className="py-24 px-4 md:px-6 max-w-[1920px] mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-heading text-zinc-900 tracking-tight">Entdecken Sie unsere Module</h2>
          <p className="mt-4 text-zinc-500 font-sans">Modernste Technik für maximale Interaktion auf Ihrem Event.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((product) => (
            <Card key={product.href} {...product} />
          ))}
        </div>
      </section>

      {/* 3. Блок преимуществ (Trust / USP) */}
      <section className="bg-white py-24 px-4 md:px-6 border-y border-slate-200">
        <div className="max-w-[1920px] mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-heading text-zinc-900 tracking-tight">Warum Party Box Hamburg?</h2>
            <p className="mt-4 text-zinc-500 font-sans">Professionelle Abwicklung für B2B- und B2C-Kunden.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto">
            {featuresData.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-red-500 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-xl text-zinc-900 mb-3">{feature.title}</h3>
                  <p className="font-sans text-zinc-600 text-sm leading-relaxed max-w-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
}