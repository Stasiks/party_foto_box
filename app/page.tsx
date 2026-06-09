// app/page.tsx
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { productsData, featuresData } from "@/data/home";

export default function Startseite() {
  return (
    <main className="min-h-screen">
      
      {/* 1. Hero Секция */}
      <section className="pt-32 pb-6 px-4 md:px-6 max-w-[1920px] mx-auto min-h-[90vh] flex flex-col lg:flex-row gap-6">
        
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

        <div className="relative w-full lg:w-[55%] bg-zinc-200 rounded-[2.5rem] overflow-hidden min-h-[50vh] lg:min-h-full shadow-sm group">
          {/* ВНИМАНИЕ: sizes обязателен для адаптивной загрузки нужного размера картинки. 
            Priority нужен, так как это картинка первого экрана (влияет на LCP).
          */}
          <Image 
            src="/images/hero-fotobox.jpg" 
            alt="Fotobox mieten Hamburg" 
            fill 
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700" 
          />
        </div>
      </section>

      {/* 2. Сетка продуктов */}
      <section className="py-24 px-4 md:px-6 max-w-[1920px] mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-heading text-zinc-900 tracking-tight">Entdecken Sie unsere Module</h2>
          <p className="mt-4 text-zinc-500 font-sans">Modernste Technik für maximale Interaktion auf Ihrem Event.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((product) => (
            // Card должен внутри себя тоже использовать next/image с корректным атрибутом sizes
            <Card key={product.href} {...product} />
          ))}
        </div>
      </section>

      {/* 3. Блок преимуществ */}
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