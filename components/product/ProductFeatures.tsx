import { CheckCircle2 } from "lucide-react";

interface ProductFeaturesProps {
  features: string[];
  specs: { label: string; value: string }[];
}

export const ProductFeatures = ({ features, specs }: ProductFeaturesProps) => {
  return (
    <section className="flex flex-col xl:flex-row rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm mb-20">
      <div className="bg-white p-8 xl:p-10 w-full xl:w-1/2 flex flex-col">
        <h2 className="text-xl font-heading text-zinc-900 mb-6">Technische Daten</h2>
        <div className="grid grid-cols-2 gap-y-6 gap-x-4">
          {specs.map((spec, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-xs font-sans text-zinc-500 mb-1">{spec.label}</span>
              <span className="text-base font-medium font-sans text-zinc-900">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-50 p-8 xl:p-10 w-full xl:w-1/2 flex flex-col border-t xl:border-t-0 xl:border-l border-slate-200">
        <h2 className="text-xl font-heading text-zinc-900 mb-6">Was ist inklusive?</h2>
        <ul className="space-y-4">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 font-sans text-zinc-700">
              <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" /> 
              <span className="leading-relaxed text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};