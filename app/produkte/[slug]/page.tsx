import { notFound } from "next/navigation";
import { ProductService } from "@/services/product.service";
import ProductHero from "@/components/product/ProductHero";
import ProductFeatures from "@/components/product/ProductFeatures";
import PricingGrid from "@/components/product/PricingGrid";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

// Генерация статических путей при сборке (SSG) для высокой производительности
export async function generateStaticParams() {
  const products = await ProductService.getAllProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  // В Next.js 15 обязательно извлекаем slug асинхронно
  const { slug } = await params;
  
  // Асинхронное получение данных через созданный слой сервисов
  const product = await ProductService.getProductById(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-24 max-w-[1920px] mx-auto px-4 md:px-6">
      <ProductHero product={product} />
      
      <div className="mt-16 flex flex-col gap-16">
        <ProductFeatures features={product.features} specs={product.specs} />
        <PricingGrid packages={product.packages} />
      </div>
    </main>
  );
}