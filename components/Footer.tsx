import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

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
    <footer className="bg-brand-dark text-brand-light py-12 md:py-16 mt-auto">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          <div className="flex flex-col gap-4">
            <Link href="/">
              <Image 
                src="/logo.png" 
                alt="Party Box Hamburg" 
                width={150} 
                height={50}
                className="brightness-0 invert opacity-90"
              />
            </Link>
            <p className="font-sans text-sm leading-relaxed mt-2 opacity-80">
              Hochwertige Fotoboxen und Event-Module für Hochzeiten, Firmenfeiern und Messen in Hamburg und Umgebung. 100% DSGVO-konform.
            </p>
          </div>

          <div>
            <h3 className="text-white font-heading text-lg mb-4">Kontakt</h3>
            <ul className="flex flex-col gap-3 font-sans text-sm opacity-90">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-product-red" />
                <a href="tel:+490000000000" className="hover:text-white transition-colors">+49 (0) 123 456 789</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-product-red" />
                <a href="mailto:info@partybox-hamburg.de" className="hover:text-white transition-colors">info@partybox-hamburg.de</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-product-red mt-0.5" />
                <span>Musterstraße 123<br/>20095 Hamburg</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-heading text-lg mb-4">Kundenservice</h3>
            <ul className="flex flex-col gap-2 font-sans text-sm opacity-90">
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
            <ul className="flex flex-col gap-2 font-sans text-sm opacity-90">
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

        <div className="pt-8 border-t border-brand-primary/30 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans opacity-70">
          <p>© {new Date().getFullYear()} Party Box Hamburg. Alle Rechte vorbehalten.</p>
          <p>Entwickelt für unvergessliche Events.</p>
        </div>

      </div>
    </footer>
  );
};