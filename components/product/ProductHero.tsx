import Image from "next/image";
import { Button } from "@/components/ui/Button";

interface ProductHeroProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const ProductHero = ({ title, description, imageUrl }: ProductHeroProps) => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 pt-32 pb-12">
      <div className="bg-white p-8 md:p-10 lg:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-zinc-900 tracking-tight leading-[1.1]">
          {title}
        </h1>
        <p className="mt-6 text-lg text-zinc-600 font-sans leading-relaxed">
          {description}
        </p>
        <div className="mt-10">
          <Button variant="primary" size="lg" href="/kontakt" className="w-full sm:w-auto rounded-full text-lg px-10 py-4">
            Verfügbarkeit prüfen
          </Button>
        </div>
      </div>

      <div className="relative w-full min-h-[50vh] lg:min-h-full bg-zinc-100 rounded-[2.5rem] overflow-hidden shadow-sm">
        {/* Заглушка, пока нет реальных фото. Как появятся - удали этот div и раскомментируй Image */}
        <div className="absolute inset-4 flex items-center justify-center bg-slate-200 text-slate-500 font-sans z-10 border-4 border-dashed border-slate-300 rounded-[2rem]">
          Заглушка: {imageUrl}
        </div>
        
        {/* <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          priority 
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover" 
        /> 
        */}
      </div>
    </section>
  );
};