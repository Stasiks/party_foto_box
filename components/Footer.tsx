// components/Footer.tsx
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
// Убрал импорт Image, если логотипа пока нет

const supportLinks = [
  { name: "FAQ", href: "/faq" },
  { name: "Technical Guide", href: "/technical-guide" },
  { name: "Preise", href: "/preise" },
];

const legalLinks = [
  { name: "Impressum", href: "/impressum" },
  { name: "Datenschutz", href: "/datenschutz" },
  { name: "AGB", href: "/agb" },
];

export const Footer = () => {
  return (
    // bg-slate-900 - это глубокий графитово-сизый цвет
    <footer className="bg-slate-900 text-slate-300 py-12 md:py-16 mt-auto">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          <div className="flex flex-col gap-4">
            <Link href="/" className="font-heading text-2xl text-white tracking-tight">
              Party Foto Box
            </Link>
            <p className="font-sans text-sm leading-relaxed mt-2 text-slate-400">
              Hochwertige Fotoboxen und Event-Module für Hochzeiten, Firmenfeiern und Messen in Hamburg und Umgebung. 100% DSGVO-konform.
            </p>
          </div>

          <div>
            <h3 className="text-white font-heading text-lg mb-4">Kontakt</h3>
            <ul className="flex flex-col gap-3 font-sans text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-red-500" />
                <a href="tel:+490000000000" className="hover:text-white transition-colors">+49 (0) 123 456 789</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-red-500" />
                <a href="mailto:info@partybox-hamburg.de" className="hover:text-white transition-colors">info@partybox-hamburg.de</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-red-500 mt-0.5" />
                <span>Musterstraße 123<br/>20095 Hamburg</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-heading text-lg mb-4">Kundenservice</h3>
            <ul className="flex flex-col gap-2 font-sans text-sm">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-heading text-lg mb-4">Rechtliches</h3>
            <ul className="flex flex-col gap-2 font-sans text-sm">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-slate-500">
          <p>© {new Date().getFullYear()} Party Box Hamburg. Alle Rechte vorbehalten.</p>
          <p>Entwickelt für unvergessliche Events.</p>
        </div>

      </div>
    </footer>
  );
};