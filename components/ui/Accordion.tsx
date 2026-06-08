"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface AccordionItem {
  question: string;
  answer: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion = ({ items }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-4 w-full">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            className={`border rounded-2xl overflow-hidden bg-white transition-all duration-300 ${
              isOpen ? "border-red-200 shadow-md" : "border-slate-200 shadow-sm hover:border-zinc-300"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full p-6 md:p-8 flex justify-between items-center text-left focus:outline-none"
              aria-expanded={isOpen}
            >
              <h3 className="font-heading text-lg md:text-xl text-zinc-900 pr-4 leading-snug">
                {item.question}
              </h3>
              <div 
                className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
                  isOpen ? "rotate-180 bg-red-50 text-red-500" : "bg-slate-50 text-zinc-400"
                }`}
              >
                <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
              </div>
            </button>
            
            {/* CSS Grid трюк для плавной анимации высоты (от 0 до auto) */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="p-6 md:p-8 pt-0 font-sans text-zinc-600 text-base leading-relaxed border-t border-slate-50 mt-2">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};