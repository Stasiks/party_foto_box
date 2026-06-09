import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export interface PricingPackage {
  name: string;
  price: string;
  popular?: boolean;
  features: string[];
}

export const PricingGrid = ({ packages }: { packages: PricingPackage[] }) => {
  if (!packages || packages.length === 0) return null;

  return (
    <section className="pb-24">
      <hr className="border-t-2 border-dashed border-slate-200 mb-20" />
      <div className="text-center mb-16">
        <h2 className="text-4xl font-heading text-zinc-900 tracking-tight">Preise & Pakete</h2>
        <p className="mt-4 text-zinc-500 font-sans text-lg">Transparente Konditionen für Hamburg und Umgebung.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {packages.map((pkg, idx) => (
          <div 
            key={idx} 
            className={`relative flex flex-col p-8 md:p-10 rounded-[2rem] transition-all bg-white ${
              pkg.popular 
                ? "border-2 border-red-500 shadow-xl scale-100 md:scale-105 z-10" 
                : "border border-slate-200 shadow-sm"
            }`}
          >
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-heading tracking-wide">
                Am beliebtesten
              </div>
            )}
            <h3 className="text-2xl font-heading text-zinc-900 mb-2">{pkg.name}</h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-heading text-zinc-900">{pkg.price}</span>
              <span className="text-zinc-500 font-sans">/ Event</span>
            </div>
            
            <ul className="flex-grow space-y-4 mb-10">
              {pkg.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 font-sans text-zinc-600 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-red-500/80 flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <Button 
              variant={pkg.popular ? "primary" : "outline"} 
              className="w-full rounded-xl py-4"
              href="/kontakt"
            >
              Jetzt anfragen
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};