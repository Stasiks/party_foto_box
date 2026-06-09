import Image from "next/image";
import { Product } from "@/data/products";
import { Button } from "@/components/ui/Button";

export default function ProductHero({ product }: { product: Product }) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="flex flex-col items-start">
        <h1 className="text-4xl md:text-5xl md:leading-tight font-heading text-zinc-900 mb-6">
          {product.title}
        </h1>
        <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
          {product.description}
        </p>
        <Button variant="primary" size="lg" className="rounded-xl px-8 py-4">
          Unverbindlich anfragen
        </Button>
      </div>

      <div className="relative aspect-square md:aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-zinc-100 shadow-sm border border-zinc-200/50">
        {/* Заглушка, если картинки еще нет. Для продакшена раскомментируй Image */}
        <div className="absolute inset-0 flex items-center justify-center text-zinc-400">
          Bild: {product.imageUrl}
        </div>
        
        {/* <Image 
          src={product.imageUrl} 
          alt={product.title} 
          fill 
          className="object-cover"
          priority
        /> 
        */}
      </div>
    </section>
  );
}