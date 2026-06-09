// app/produkte/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductFeatures } from "@/components/product/ProductFeatures";
import { PricingGrid } from "@/components/product/PricingGrid";
import { FrameSwapper } from "@/components/ui/FrameSwapper";
import { productsRegistry } from "@/data/products";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

// 1. Статическая генерация всех страниц на этапе сборки (SSG) для максимальной производительности
export async function generateStaticParams() {
  return Object.keys(productsRegistry).map((slug) => ({
    slug: slug,
  }));
}

// 2. Оптимизация SEO: Динамические метаданные для каждого продукта
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = productsRegistry[slug];

  if (!product) {
    return {
      title: "Produkt nicht gefunden",
    };
  }

  return {
    title: `${product.title} mieten Hamburg`,
    description: product.description,
    openGraph: {
      title: `${product.title} mieten Hamburg — Premium Event-Module`,
      description: product.description,
      url: `https://deinedomain.de/produkte/${slug}`,
      type: "website",
      images: [
        {
          url: product.imageUrl,
          width: 800,
          height: 600,
          alt: product.title,
        },
      ],
    },
  };
}

// 3. Компонент динамической страницы продукта
export default async function DynamicProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = productsRegistry[slug];

  // Защитный гард: если slug не найден в data/products.ts — отдаем 404
  if (!product) {
    notFound();
  }

  // Структурированные данные Schema.org (JSON-LD) для Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.title,
    "image": `https://deinedomain.de${product.imageUrl}`,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": "Party Foto Box Hamburg"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "EUR",
      "lowPrice": product.packages[0]?.price.replace(/[^0-9]/g, "") || "0",
      "highPrice": product.packages[product.packages.length - 1]?.price.replace(/[^0-9]/g, "") || "0",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <main className="max-w-[1920px] mx-auto px-4 md:px-6 min-h-screen pb-12">
      <Script
        id={`json-ld-product-${product.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Чистый, изолированный Hero блок продукта */}
      <ProductHero 
        title={product.title} 
        description={product.description} 
        imageUrl={product.imageUrl} 
      />
  
      {/* Спецификации оборудования */}
      <ProductFeatures 
        features={product.features} 
        specs={product.specs} 
      />

      {/* Интерактивный FrameSwapper (подключается динамически, если есть данные для демо) */}
      {product.demoFrames && (
        <section className="py-16 border-t border-slate-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading text-zinc-900 tracking-tight">
              Individuelle Layouts
            </h2>
            <p className="mt-4 text-zinc-500 font-sans text-lg">
              Wählen Sie den passenden Rahmen für Ihr Event.
            </p>
          </div>
          <FrameSwapper 
            basePhotoUrl={product.demoFrames.basePhotoUrl} 
            frames={product.demoFrames.frames}
            // Динамический контроль пропорций: узкий для обычной будки, квадратный для Tiny Planet
            aspectRatio={product.id === "fotobox" ? "aspect-[2/3]" : "aspect-square"}
          />
        </section>
      )}
      
      {/* Тарифная сетка */}
      <PricingGrid packages={product.packages} />
    </main>
  );
}