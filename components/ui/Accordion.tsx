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
              isOpen ? "border-brand-primary shadow-md" : "border-slate-200 shadow-sm hover:border-brand-primary/50"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full p-6 md:p-8 flex justify-between items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              aria-expanded={isOpen}
            >
              <h3 className="font-heading text-lg md:text-xl text-brand-dark pr-4 leading-snug">
                {item.question}
              </h3>
              <div 
                className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
                  isOpen ? "rotate-180 bg-brand-light text-brand-primary" : "bg-bg-main text-text-secondary"
                }`}
              >
                <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
              </div>
            </button>
            
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="p-6 md:p-8 pt-0 font-sans text-text-secondary text-base leading-relaxed border-t border-brand-light/30 mt-2">
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