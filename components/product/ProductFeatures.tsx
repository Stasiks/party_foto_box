import { ProductSpec } from "@/data/products";
import { Check } from "lucide-react";

interface ProductFeaturesProps {
  features: string[];
  specs: ProductSpec[];
}

export default function ProductFeatures({ features, specs }: ProductFeaturesProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 bg-zinc-50 p-8 md:p-12 rounded-[2.5rem] border border-zinc-100">
      {/* Характеристики (Specs) */}
      <div>
        <h3 className="text-2xl font-heading text-zinc-900 mb-8">Spezifikationen</h3>
        <dl className="flex flex-col gap-4">
          {specs.map((spec, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:justify-between border-b border-zinc-200 pb-4">
              <dt className="text-sm font-medium text-zinc-500 mb-1 sm:mb-0">{spec.label}</dt>
              <dd className="text-base text-zinc-900 font-medium">{spec.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Особенности (Features) */}
      <div>
        <h3 className="text-2xl font-heading text-zinc-900 mb-8">Ihre Vorteile</h3>
        <ul className="flex flex-col gap-4">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <div className="mt-1 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-600">
                <Check className="w-3.5 h-3.5" strokeWidth={3} />
              </div>
              <span className="text-zinc-700 leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}