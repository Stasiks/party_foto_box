import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { HelpCircle, Wrench, CreditCard } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Häufig gestellte Fragen zur Fotobox Miete",
  description: "Antworten auf alle Fragen rund um Technik, Platzbedarf, WLAN und Buchung unserer Event-Module in Hamburg.",
};

// SEO-оптимизированные массивы данных
const bookingFaq = [
  {
    question: "Wie weit im Voraus sollte ich buchen?",
    answer: "Besonders in der Hochzeits-Saison (Mai bis September) und vor Weihnachten sind unsere Module schnell ausgebucht. Wir empfehlen eine Buchung mindestens 3 bis 6 Monate im Voraus. Last-Minute-Anfragen sind je nach Verfügbarkeit natürlich auch möglich.",
  },
  {
    question: "Ist eine Stornierung möglich?",
    answer: "Ja. Bis zu 30 Tage vor dem Event können Sie kostenfrei stornieren. Danach fallen gestaffelte Stornierungsgebühren an, die Sie transparent in unseren AGB nachlesen können.",
  },
  {
    question: "Wie funktioniert die Bezahlung?",
    answer: "Nach Bestätigung Ihrer Buchung erhalten Sie eine Rechnung. Sie können bequem per Überweisung zahlen. Für Firmenkunden bieten wir Kauf auf Rechnung mit einem Zahlungsziel von 14 Tagen nach dem Event an.",
  }
];

const technicalFaq = [
  {
    question: "Wie viel Platz wird für die Fotobox benötigt?",
    answer: "Für die optimale Nutzung der Classic Fotobox inklusive Hintergrundsystem und Gästen empfehlen wir eine freie Fläche von ca. 2,5 x 2,5 Metern. Die absolute Mindestfläche beträgt 2 x 2 Meter. Für den 360 Video Spinner benötigen wir mindestens 3 x 3 Meter, um die Sicherheit durch den rotierenden Arm zu gewährleisten.",
  },
  {
    question: "Wird ein Stromanschluss benötigt?",
    answer: "Ja, wir benötigen eine handelsübliche 230V Steckdose in direkter Nähe (max. 10 Meter Entfernung) zum Aufstellort. Um Spannungsabfälle zu vermeiden, sollte der Stromkreis nicht durch starkes Catering-Equipment (z.B. Waffeleisen, Fritteusen) belastet sein.",
  },
  {
    question: "Braucht die Fotobox zwingend WLAN?",
    answer: "Nein, der Fotodruck und das Speichern der Bilder funktionieren komplett offline. Wenn Sie jedoch Features wie das sofortige Versenden der Bilder per E-Mail oder QR-Code nutzen möchten, ist ein stabiles WLAN-Netzwerk am Aufstellort zwingend erforderlich. Alternativ können wir auf Anfrage einen LTE-Router stellen (Empfang vorausgesetzt).",
  },
  {
    question: "Wie lange dauert der Aufbau?",
    answer: "Der Aufbau sowie die professionelle Einmessung von Kamera und Blitzen dauert in der Regel etwa 45 bis 60 Minuten. Wir planen diese Zeit immer großzügig vor dem offiziellen Start Ihres Events ein, um einen reibungslosen Ablauf zu garantieren.",
  }
];

const privacyFaq = [
  {
    question: "Werden die Fotos gespeichert und wer hat Zugriff?",
    answer: "Datenschutz (DSGVO) hat bei uns höchste Priorität. Alle Bilder werden lokal auf dem Gerät gespeichert und anschließend in eine passwortgeschützte Cloud-Galerie geladen, die in Deutschland gehostet wird. Nur Sie und Ihre Gäste erhalten den Zugangscode.",
  },
  {
    question: "Können wir das Layout der Bilder anpassen?",
    answer: "Selbstverständlich! Egal ob Firmenlogo, Hochzeitsdatum oder ein komplett eigenes Design im Corporate Identity Ihres Unternehmens – wir passen das Layout der Ausdrucke im Vorfeld exakt an Ihre Wünsche an.",
  }
];

export default function FAQPage() {
  return (
    <main className="pt-32 pb-24 min-h-screen">
      
      {/* Hero Block */}
      <section className="bg-white py-16 px-4 md:px-6 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-zinc-900 tracking-tight leading-[1.1]">
            Häufig gestellte <br /> <span className="text-red-500">Fragen</span>
          </h1>
          <p className="mt-6 text-lg text-zinc-600 font-sans max-w-2xl mx-auto">
            Alles, was Sie für die Planung wissen müssen. Fehlt eine Information? Kontaktieren Sie uns direkt.
          </p>
        </div>
      </section>

      {/* FAQ Content Grid */}
      <section className="max-w-4xl mx-auto px-4 md:px-6 py-16">
        
        {/* Category: Buchung */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center text-zinc-900">
              <CreditCard className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-heading text-zinc-900">Buchung & Service</h2>
          </div>
          <Accordion items={bookingFaq} />
        </div>

        {/* Category: Technik */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center text-zinc-900">
              <Wrench className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-heading text-zinc-900">Technik & Platzbedarf</h2>
          </div>
          <Accordion items={technicalFaq} />
        </div>

        {/* Category: Datenschutz & Individualisierung */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center text-zinc-900">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-heading text-zinc-900">Datenschutz & Layout</h2>
          </div>
          <Accordion items={privacyFaq} />
        </div>

        {/* CTA Block */}
        <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-16 text-center shadow-xl mt-12">
          <h2 className="text-3xl font-heading text-white mb-4">Ihre Frage war nicht dabei?</h2>
          <p className="text-zinc-400 font-sans mb-8 max-w-lg mx-auto">
            Unser technischer Support und Event-Planungs-Team steht Ihnen gerne zur Verfügung.
          </p>
          <Button variant="primary" size="lg" href="/kontakt" className="rounded-full px-10">
            Kontakt aufnehmen
          </Button>
        </div>

      </section>
    </main>
  );
}