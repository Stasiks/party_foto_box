// components/ui/FrameSwapper.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

export interface Frame {
  name: string;
  overlayUrl: string;
}

interface FrameSwapperProps {
  basePhotoUrl: string;
  frames: Frame[];
  // Позволяет задать любые пропорции извне. По умолчанию - узкое портретное фото (10x15)
  aspectRatio?: string; 
}

export const FrameSwapper = ({ 
  basePhotoUrl, 
  frames, 
  aspectRatio = "aspect-[2/3]" // Узкий формат по умолчанию
}: FrameSwapperProps) => {
  const [activeFrame, setActiveFrame] = useState<Frame>(frames[0]);
  const [isImageLoading, setIsImageLoading] = useState(false);

  // Обработчик для анимации легкого "мерцания" при смене рамки
  const handleFrameChange = (frame: Frame) => {
    if (activeFrame.name === frame.name) return;
    setIsImageLoading(true);
    setActiveFrame(frame);
    setTimeout(() => setIsImageLoading(false), 200);
  };

  return (
    <div className="flex flex-col items-center bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-sm w-full max-w-2xl mx-auto">
      
      {/* Контейнер превью с динамическими пропорциями */}
      <div 
        className={`relative w-full max-w-[280px] ${aspectRatio} bg-zinc-200 rounded-sm overflow-hidden shadow-xl ring-4 ring-white transition-opacity duration-200 ${isImageLoading ? 'opacity-80' : 'opacity-100'}`}
      >
        {/* Базовое фото (фон) */}
        <Image 
          src={basePhotoUrl} 
          alt="Fotobox Basis Foto" 
          fill 
          sizes="(max-width: 768px) 280px, 280px"
          className="object-cover"
        />
        
        {/* Прозрачная рамка (PNG Overlay) */}
        <Image 
          src={activeFrame.overlayUrl} 
          alt={`Rahmen: ${activeFrame.name}`} 
          fill 
          sizes="(max-width: 768px) 280px, 280px"
          className="absolute inset-0 z-10 object-contain pointer-events-none"
        />
      </div>

      {/* Элементы управления */}
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {frames.map((frame) => (
          <button
            key={frame.name}
            onClick={() => handleFrameChange(frame)}
            className={`px-6 py-2.5 rounded-full font-sans text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 ${
              activeFrame.name === frame.name
                ? "bg-zinc-900 text-white shadow-md scale-105"
                : "bg-slate-50 text-zinc-600 border border-slate-200 hover:border-zinc-300 hover:text-zinc-900 hover:bg-white"
            }`}
          >
            {frame.name}
          </button>
        ))}
      </div>
      
      <p className="mt-6 text-xs font-sans text-zinc-400 text-center max-w-sm leading-relaxed">
        * Das ist nur ein kleines Preview. Das finale Druck-Layout wird individuell an Ihr Event und Corporate Design angepasst.
      </p>
    </div>
  );
};