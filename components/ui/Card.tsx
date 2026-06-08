import Image from "next/image";
import { Button } from "./Button"; // Убедись, что путь корректный

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
}

export const Card = ({ title, description, imageUrl, href }: CardProps) => {
  return (
    <article className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
      
      {/* Контейнер изображения */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-50">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Текстовый блок */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className="font-heading text-2xl text-zinc-900 mb-3">{title}</h3>
        <p className="font-sans text-zinc-600 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        
        {/* Кнопка действия */}
        <div className="mt-auto pt-4 border-t border-slate-50">
          <Button variant="outline" href={href} className="w-full">
            Mehr erfahren
          </Button>
        </div>
      </div>
      
    </article>
  );
};
