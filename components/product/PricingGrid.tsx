import { PricingPackage } from "@/data/products";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";

export default function PricingGrid({ packages }: { packages: PricingPackage[] }) {
  if (!packages || packages.length === 0) return null;

  return (
    <section>
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-heading text-zinc-900 mb-4">
          Transparente Preise
        </h2>
        <p className="text-zinc-600">
          Wählen Sie das passende Paket für Ihr Event. Keine versteckten Kosten.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
        {packages.map((pkg, idx) => {
          const isPopular = pkg.popular;
          
          return (
            <div 
              key={idx} 
              className={`relative p-8 md:p-10 rounded-[2.5rem] flex flex-col h-full transition-transform duration-300 hover:-translate-y-1 ${
                isPopular 
                  ? 'bg-zinc-950 text-white shadow-2xl shadow-zinc-900/20' 
                  : 'bg-white border border-zinc-200 shadow-sm'
              }`}
            >
              {isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase">
                  Bestseller
                </div>
              )}
              
              <h3 className={`text-xl font-heading mb-2 ${isPopular ? 'text-zinc-100' : 'text-zinc-900'}`}>
                {pkg.name}
              </h3>
              
              <div className="mb-8">
                <span className="text-4xl md:text-5xl font-heading">{pkg.price}</span>
              </div>
              
              <ul className="flex flex-col gap-4 mb-10 flex-1">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <Check 
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isPopular ? 'text-red-500' : 'text-emerald-500'}`} 
                    />
                    <span className={`text-sm leading-relaxed ${isPopular ? 'text-zinc-300' : 'text-zinc-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={isPopular ? "primary" : "outline"} 
                className="w-full rounded-xl py-6"
              >
                Jetzt buchen
              </Button>
            </div>
          );
        })}
      </div>
    </section>
  );
}