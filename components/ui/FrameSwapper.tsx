"use client";

import { useState } from "react";
import Image from "next/image";

interface Frame {
  name: string;
  overlayUrl: string;
}

interface FrameSwapperProps {
  basePhotoUrl: string;
  frames: Frame[];
}

export const FrameSwapper = ({ basePhotoUrl, frames }: FrameSwapperProps) => {
  const [activeFrame, setActiveFrame] = useState<Frame>(frames[0]);

  return (
    <div className="flex flex-col items-center bg-slate-50 p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-sm w-full">
      
      {/* Контейнер превью */}
      <div className="relative w-full max-w-sm aspect-[3/4] bg-zinc-200 rounded-xl overflow-hidden shadow-md">
        {/* Базовое фото (фон) */}
        <Image 
          src={basePhotoUrl} 
          alt="Fotobox Beispiel" 
          fill 
          className="object-cover"
        />
        {/* Прозрачная рамка (PNG Overlay) */}
        <Image 
          src={activeFrame.overlayUrl} 
          alt={`Rahmen: ${activeFrame.name}`} 
          fill 
          className="absolute inset-0 z-10 object-contain pointer-events-none"
        />
        
        {/* Заглушка, если картинок еще нет */}
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/80 p-4 text-center text-sm font-sans text-zinc-500 border-2 border-dashed border-zinc-400 m-4 rounded-lg">
          Для работы демо нужны: <br/>1. Базовое фото ({basePhotoUrl})<br/>2. Прозрачные рамки PNG
        </div>
      </div>

      {/* Элементы управления */}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {frames.map((frame) => (
          <button
            key={frame.name}
            onClick={() => setActiveFrame(frame)}
            className={`px-5 py-2.5 rounded-full font-sans text-sm font-medium transition-all duration-300 ${
              activeFrame.name === frame.name
                ? "bg-zinc-900 text-white shadow-md scale-105"
                : "bg-white text-zinc-600 border border-slate-200 hover:border-zinc-400 hover:text-zinc-900"
            }`}
          >
            {frame.name}
          </button>
        ))}
      </div>
      <p className="mt-4 text-xs font-sans text-zinc-400 text-center max-w-xs">
        * Das Layout wird individuell an Ihr Event und Corporate Design angepasst.
      </p>
    </div>
  );
};