"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const products = [
  { name: "Fotobox", href: "/produkte/fotobox" },
  { name: "Tiny Planet", href: "/produkte/tiny-planet" },
  { name: "Chromakey", href: "/produkte/chromakey" },
  { name: "360 Video Spinner", href: "/produkte/360-video-spinner" },
  { name: "Bullet Time", href: "/produkte/bullet-time" },
];

const events = [
  { name: "Hochzeit", href: "/events/hochzeit" },
  { name: "Firmenevent", href: "/events/firmenevent" },
  { name: "Geburtstag", href: "/events/geburtstag" },
  { name: "Messe", href: "/events/messe" },
  { name: "Weihnachtsfeier", href: "/events/weihnachtsfeier" },
];

const kundenservice = [
  { name: "FAQ", href: "/faq" },
  { name: "Technical Guide", href: "/technical-guide" },
];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`fixed left-0 w-full z-50 transition-all duration-500 ease-in-out ${isScrolled ? "top-0" : "top-6"}`}>
      
      <div 
        className={`mx-auto flex items-center justify-between transition-all duration-500 ease-in-out ${
          isScrolled 
            ? "w-full bg-white/95 backdrop-blur-md border-b border-slate-200 h-20 px-6 lg:px-10 rounded-none" 
            : "w-[95%] max-w-[1920px] bg-white rounded-full shadow-sm h-20 px-6 lg:px-10 border border-transparent"
        }`}
      >
        
        <Link href="/" className="flex-shrink-0" onClick={closeMobileMenu}>
          <Image 
            src="/logo.png" 
            alt="Party Box Hamburg" 
            width={160} 
            height={50} 
            priority
            className="h-auto w-auto" 
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-sans font-medium text-zinc-900">
          
          <div className="relative group h-full flex items-center">
            <button className="flex items-center gap-1 hover:text-primary transition-colors py-8 focus:outline-none">
              Produkte <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-[70px] left-0 hidden group-hover:flex flex-col bg-white border border-slate-100 shadow-xl rounded-2xl py-2 w-56 opacity-0 group-hover:opacity-100 transition-opacity">
              {products.map((product) => (
                <Link key={product.href} href={product.href} className="block mx-2 my-1 px-4 py-2.5 text-sm text-zinc-800 rounded-lg hover:bg-orange-50 hover:text-accent transition-colors">
                  {product.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="relative group h-full flex items-center">
            <button className="flex items-center gap-1 hover:text-primary transition-colors py-8 focus:outline-none">
              Events <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-[70px] left-0 hidden group-hover:flex flex-col bg-white border border-slate-100 shadow-xl rounded-2xl py-2 w-56 opacity-0 group-hover:opacity-100 transition-opacity">
              {events.map((event) => (
                <Link key={event.href} href={event.href} className="block mx-2 my-1 px-4 py-2.5 text-sm text-zinc-800 rounded-lg hover:bg-orange-50 hover:text-accent transition-colors">
                  {event.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="relative group h-full flex items-center">
            <button className="flex items-center gap-1 hover:text-primary transition-colors py-8 focus:outline-none">
              Kundenservice <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-[70px] left-0 hidden group-hover:flex flex-col bg-white border border-slate-100 shadow-xl rounded-2xl py-2 w-56 opacity-0 group-hover:opacity-100 transition-opacity">
              {kundenservice.map((item) => (
                <Link key={item.href} href={item.href} className="block mx-2 my-1 px-4 py-2.5 text-sm text-zinc-800 rounded-lg hover:bg-orange-50 hover:text-accent transition-colors">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/preise" className="hover:text-primary transition-colors">Preise</Link>
          <Link href="/galerie" className="hover:text-primary transition-colors">Galerie</Link>
        </nav>

        <div className="hidden lg:block">
          <Link href="/kontakt" className="bg-zinc-900 text-white px-6 py-2.5 rounded-full font-heading hover:bg-primary transition-colors shadow-sm text-sm">
            Anfragen
          </Link>
        </div>

        <button className="lg:hidden text-zinc-900 p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-[110%] left-1/2 -translate-x-1/2 w-[95%] bg-white rounded-3xl border border-slate-100 px-6 py-6 shadow-2xl overflow-y-auto max-h-[80vh]">
          <div className="flex flex-col gap-6 font-sans text-zinc-900 text-lg">
            
            <div className="flex flex-col gap-3">
              <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Schnellzugriff</span>
              <Link href="/produkte/fotobox" onClick={closeMobileMenu}>Fotobox</Link>
              <Link href="/events/hochzeit" onClick={closeMobileMenu}>Hochzeit</Link>
              <Link href="/preise" onClick={closeMobileMenu} className="text-primary font-medium">Preise</Link>
              <Link href="/galerie" onClick={closeMobileMenu}>Galerie</Link>
            </div>

            <hr className="border-slate-100" />

            <div className="flex flex-col gap-3">
              <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Kundenservice</span>
              {kundenservice.map((item) => (
                <Link key={item.href} href={item.href} onClick={closeMobileMenu}>
                  {item.name}
                </Link>
              ))}
            </div>

            <Link href="/kontakt" className="mt-4 bg-primary text-white text-center py-3.5 rounded-xl font-heading shadow-sm" onClick={closeMobileMenu}>
              Jetzt Anfragen
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};