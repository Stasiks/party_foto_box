import { Zap, Move, CloudSun, Truck, ShieldAlert, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Guide & Location-Checkliste | Party Box Hamburg",
  description: "Technische Voraussetzungen und Richtlinien für den Aufbau von Fotoboxen und 360-Grad-Videospinnern vor Ort.",
};

const technicalGuidelines = [
  {
    title: "Stromversorgung",
    icon: Zap,
    critical: true,
    points: [
      "1x separate 230V / 16A Schuko-Steckdose in max. 10 Metern Entfernung.",
      "Der Stromkreis darf nicht mit Gastro-Equipment (Kaffeemaschinen, Waffeleisen) geteilt werden (Gefahr von Spannungsabfällen bei Blitzzündung).",
      "Dauerstrom erforderlich. Keine Schaltung über Zeitschaltuhren oder Lichtschalter der Location."
    ]
  },
  {
    title: "Platzbedarf & Untergrund",
    icon: Move,
    critical: false,
    points: [
      "Classic Fotobox: Mindestens 2,0 x 2,0 Meter Stellfläche (Empfohlen: 2,5 x 2,5 Meter).",
      "360° Video Spinner: Absolut freie Fläche von mindestens 3,0 x 3,0 Metern erforderlich.",
      "Der Untergrund muss absolut eben, fest, trocken und vibrationsfrei sein (kein loser Sand, tiefer Rasen или wackelige Bühnenelemente)."
    ]
  },
  {
    title: "Outdoor-Richtlinien",
    icon: CloudSun,
    critical: true,
    points: [
      "Betrieb im Freien nur unter einem komplett wasserdichten, windgeschützten Zelt oder Pavillon gestattet.",
      "Absoluter Schutz vor direkter Sonneneinstrahlung (Gefahr von Kamera-Überhitzung und Fehlbelichtung).",
      "Betriebstemperatur zwischen +10°C und +35°C. Bei Sturm, Starkregen oder Frost wird der Betrieb aus Sicherheitsgründen eingestellt."
    ]
  },
  {
    title: "Logistik & Zugänglichkeit",
    icon: Truck,
    critical: false,
    points: [
      "Barrierefreier Zugang zum Aufstellort (Rampen, Fahrstühle bei Stockwerkswechsel).",
      "Türbreiten von mindestens 80 cm für den Transport in professionellen Flightcases erforderlich.",
      "Kostenfreier Be- und Entladebereich in direkter Nähe zum Gebäude/Eingang der Location."
    ]
  }
];

export default function TechnicalGuidePage() {
  return (
    <main className="pt-32 pb-24 min-h-screen">
      
      {/* Шапка страницы */}
      <section className="bg-white py-16 px-4 md:px-6 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-sans font-bold uppercase tracking-wider text-red-500">Für Veranstalter & Locations</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-zinc-900 tracking-tight leading-[1.1] mt-3">
            Technical <span className="text-red-500">Guide</span>
          </h1>
          <p className="mt-6 text-lg text-zinc-600 font-sans max-w-2xl mx-auto leading-relaxed">
            Wichtige technische Voraussetzungen und Richtlinien für den reibungslosen Aufbau und sicheren Betrieb unserer Event-Module vor Ort.
          </p>
        </div>
      </section>

      {/* Основная сетка Bento Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {technicalGuidelines.map((guide, idx) => {
            const Icon = guide.icon;
            return (
              <div 
                key={idx} 
                className={`p-8 md:p-10 rounded-[2.5rem] border shadow-sm flex flex-col justify-between bg-white ${
                  guide.critical ? "border-red-100" : "border-slate-100"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                      guide.critical ? "bg-red-50 text-red-500" : "bg-slate-50 text-zinc-900"
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    {guide.critical && (
                      <span className="flex items-center gap-1.5 px-3 py-1 bg-red-50 rounded-full text-xs font-sans font-semibold text-red-600 uppercase tracking-wider">
                        <ShieldAlert className="w-3.5 h-3.5" /> Kritisch
                      </span>
                    )}
                  </div>
                  
                  <h2 className="text-2xl font-heading text-zinc-900 mb-6">{guide.title}</h2>
                  
                  <ul className="space-y-4">
                    {guide.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3 font-sans text-sm md:text-base text-zinc-600">
                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          guide.critical ? "text-red-500/80" : "text-zinc-400"
                        }`} />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Пунктирный разделитель */}
        <hr className="border-t-2 border-dashed border-slate-200 my-20 md:my-24" />

        {/* Информационный блок о разграничении ответственности */}
        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 md:p-16 max-w-5xl mx-auto flex flex-col lg:flex-row gap-10 items-center justify-between shadow-xl">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-heading text-white mb-4">Location-Checkliste benötigt?</h2>
            <p className="text-zinc-400 font-sans text-sm md:text-base leading-relaxed">
              Senden Sie diesen Guide direkt an Ihren Event-Manager oder die Location-Leitung. Sollten die Voraussetzungen vor Ort abweichen, kontaktieren Sie uns bitte rechtzeitig für eine individuelle technische Lösung.
            </p>
          </div>
          <div className="flex-shrink-0 w-full lg:w-auto">
            <Button variant="primary" size="lg" href="/kontakt" className="w-full lg:w-auto rounded-full px-8">
              Fragen zur Technik?
            </Button>
          </div>
        </div>

      </section>
    </main>
  );
}