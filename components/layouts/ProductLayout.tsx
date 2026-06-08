import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

export interface PricingPackage {
  name: string;
  price: string;
  popular?: boolean;
  features: string[];
}

export interface ProductLayoutProps {
  title: string;
  description: string;
  imageUrl: string;
  features: string[];
  specs: { label: string; value: string }[];
  packages?: PricingPackage[];
  interactiveDemo?: React.ReactNode;
}

export const ProductLayout = ({ 
  title, 
  description, 
  imageUrl, 
  features, 
  specs, 
  packages, 
  interactiveDemo 
}: ProductLayoutProps) => {
  return (
    <main className="pt-32 pb-24 min-h-screen max-w-[1920px] mx-auto px-4 md:px-6">
      
      {/* 1. Hero Секция (Плотный Bento Grid) */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        
        {/* Левая колонка (Контент) */}
        <div className="flex flex-col gap-6 md:gap-8">
          
          {/* Верхняя карточка: Заголовок и CTA */}
          <div className="bg-white p-8 md:p-10 lg:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-zinc-900 tracking-tight leading-[1.1]">
              {title}
            </h1>
            <p className="mt-6 text-lg text-zinc-600 font-sans leading-relaxed">
              {description}
            </p>
            <div className="mt-10">
              <Button variant="primary" size="lg" href="/kontakt" className="w-full sm:w-auto rounded-full text-lg px-10 py-4 shadow-md hover:shadow-lg">
                Verfügbarkeit prüfen
              </Button>
            </div>
          </div>

          {/* Нижняя карточка: Комбинированные данные (Specs + Features) */}
          <div className="flex flex-col xl:flex-row rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm flex-grow">
            
            {/* Спецификации (Светлая часть) */}
            <div className="bg-white p-8 xl:p-10 w-full xl:w-1/2 flex flex-col">
              <h2 className="text-xl font-heading text-zinc-900 mb-6">Technische Daten</h2>
              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                {specs.map((spec, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="text-xs font-sans text-zinc-500 mb-1">{spec.label}</span>
                    <span className="text-base font-medium font-sans text-zinc-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Что включено (Темная часть) */}
            <div className="bg-slate-50 p-8 xl:p-10 w-full xl:w-1/2 flex flex-col border-t xl:border-t-0 xl:border-l border-slate-200">
              <h2 className="text-xl font-heading text-zinc-900 mb-6">Was ist inklusive?</h2>
              <ul className="space-y-4">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 font-sans text-zinc-700">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" /> 
                    <span className="leading-relaxed text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Правая колонка: Главное изображение (Тянется на всю высоту левой колонки) */}
        <div className="relative w-full min-h-[60vh] lg:min-h-full bg-slate-100 rounded-[2.5rem] overflow-hidden shadow-sm h-full">
          <div className="absolute inset-4 flex items-center justify-center bg-slate-200 text-slate-500 font-sans z-10 p-6 text-center border-4 border-dashed border-slate-300 rounded-[2rem]">
            Заглушка фото <br/> ({imageUrl})
          </div>
          {/* <Image src={imageUrl} alt={title} fill priority className="object-cover" /> */}
        </div>
        
      </section>

      {/* 2. Интерактивное демо (если передано) */}
      {interactiveDemo && (
        <>
          <hr className="border-t-2 border-dashed border-slate-200 my-20 md:my-28" />
          <section className="flex flex-col items-center">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading text-zinc-900 tracking-tight">Individuelle Layouts</h2>
              <p className="mt-4 text-zinc-500 font-sans text-lg">Passen Sie den Rahmen perfekt an Ihr Event an.</p>
            </div>
            <div className="w-full max-w-4xl">
              {interactiveDemo}
            </div>
          </section>
        </>
      )}

      {/* Пунктирный разделитель перед ценами */}
      {packages && packages.length > 0 && (
        <hr className="border-t-2 border-dashed border-slate-200 my-20 md:my-28" />
      )}

      {/* 3. Тарифная сетка */}
      {packages && packages.length > 0 && (
        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading text-zinc-900 tracking-tight">Preise & Pakete</h2>
            <p className="mt-4 text-zinc-500 font-sans text-lg">Transparente Konditionen für Hamburg und Umgebung.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, idx) => (
              <div 
                key={idx} 
                className={`relative flex flex-col p-8 md:p-10 rounded-[2rem] transition-all duration-300 bg-white ${
                  pkg.popular 
                    ? "border-2 border-red-500 shadow-xl scale-100 md:scale-105 z-10" 
                    : "border border-slate-200 shadow-sm hover:shadow-md"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-heading tracking-wide shadow-sm">
                    Am beliebtesten
                  </div>
                )}
                <h3 className="text-2xl font-heading text-zinc-900 mb-2">{pkg.name}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-heading text-zinc-900">{pkg.price}</span>
                  <span className="text-zinc-500 font-sans">/ Event</span>
                </div>
                
                <ul className="flex-grow space-y-4 mb-10">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 font-sans text-zinc-600 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-red-500/80 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={pkg.popular ? "primary" : "outline"} 
                  className="w-full rounded-xl py-4"
                  href="/kontakt"
                >
                  Jetzt anfragen
                </Button>
              </div>
            ))}
          </div>
        </section>
      )}

    </main>
  );
};