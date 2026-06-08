"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, ShieldCheck } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Checkbox } from "@/components/ui/Checkbox";
import { Button } from "@/components/ui/Button";

export default function KontaktPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Имитация отправки данных (в будущем здесь будет fetch на Server Action или API роут)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-32 pb-24 max-w-[1920px] mx-auto px-4 md:px-6 min-h-screen">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
        
        {/* Левая колонка: Информационный блок (Занимает 5 из 12 колонок) */}
        <div className="lg:col-span-5 bg-zinc-950 text-zinc-400 p-8 md:p-12 rounded-[2.5rem] flex flex-col justify-between shadow-sm">
          <div>
            <h1 className="text-3xl md:text-4xl font-heading text-white tracking-tight mb-6">
              Lassen Sie uns Ihre <br />
              <span className="text-red-500">Party</span> planen
            </h1>
            <p className="font-sans text-sm md:text-base text-zinc-400 leading-relaxed max-w-md mb-12">
              Haben Sie Fragen zu unseren Fotoboxen oder möchten Sie ein individuelles Angebot für Ihr Firmenevent? Schreiben Sie uns – wir antworten in der Regel innerhalb von 24 Stunden.
            </p>

            {/* Сводка контактов */}
            <div className="flex flex-col gap-6 font-sans text-sm md:text-base">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center text-red-500">
                  <Phone className="w-5 h-5" />
                </div>
                <a href="tel:+490000000000" className="hover:text-white text-white font-medium transition-colors">
                  +49 (0) 123 456 789
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center text-red-500">
                  <Mail className="w-5 h-5" />
                </div>
                <a href="mailto:info@partybox-hamburg.de" className="hover:text-white text-white font-medium transition-colors">
                  info@partybox-hamburg.de
                </a>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center text-red-500 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-white font-medium leading-relaxed">
                  Musterstraße 123<br />20095 Hamburg
                </span>
              </div>
            </div>
          </div>

          {/* Нижний блок доверия */}
          <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col gap-4 font-sans text-xs">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-red-500" />
              <span>Mo - So: 08:00 - 20:00 Uhr Erreichbar</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>🔒 100% DSGVO-konforme Datenverarbeitung</span>
            </div>
          </div>
        </div>

        {/* Правая колонка: Интерактивная форма (Занимает 7 из 12 колонок) */}
        <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-center">
          <h2 className="text-2xl font-heading text-zinc-900 mb-8">Unverbindliche Mietanfrage</h2>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Input label="Ihr Name" type="text" name="name" required placeholder="Max Mustermann" />
              <Input label="E-Mail-Adresse" type="email" name="email" required placeholder="max@beispiel.de" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Input label="Datum des Events" type="date" name="date" required />
              <Input label="Telefonnummer (für Rückfragen)" type="tel" name="phone" placeholder="+49..." />
            </div>

            <Textarea 
              label="Details zu Ihrem Event (Optional)" 
              name="message" 
              placeholder="Teilen Sie uns gerne den Ort des Events, die ungefähre Gästeanzahl oder Ihr gewünschtes Paket mit..." 
            />

            {/* DSGVO Чекбокс — обязательное условие */}
            <div className="mt-2">
              <Checkbox 
                required 
                label={
                  <>
                    Ich stimme zu, dass meine Angaben aus dem Kontaktformular zur Beantwortung meiner Anfrage erhoben und verarbeitet werden. Die Daten werden nach abgeschlossener Bearbeitung gelöscht. Hinweis: Sie können Ihre Einwilligung jederzeit für die Zukunft per E-Mail an info@partybox-hamburg.de widerrufen. Detaillierte Informationen finden Sie in unserer{" "}
                    <Link href="/datenschutz" className="text-red-500 underline hover:text-orange-500 transition-colors">
                      Datenschutzerklärung
                    </Link>.
                  </>
                }
              />
            </div>

            {/* Управление статусами отправки */}
            <div className="mt-4 flex flex-col gap-4">
              <Button type="submit" variant="primary" size="lg" className="w-full rounded-xl py-4" disabled={isSubmitting}>
                {isSubmitting ? "Wird gesendet..." : "Jetzt Anfrage senden"}
              </Button>

              {submitStatus === "success" && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-sans rounded-xl text-center">
                  Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns schnellstmöglich bei Ihnen.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-800 text-sm font-sans rounded-xl text-center">
                  Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per E-Mail.
                </div>
              )}
            </div>

          </form>
        </div>

      </div>

    </main>
  );
}