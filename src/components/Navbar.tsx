import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Car, Calendar, MapPin, MessageSquare, ChevronDown } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
  lang: 'ENG' | 'বাংলা';
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, lang, onToggleLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

    const sections = ['hero', 'cars', 'services', 'why-us', 'reviews', 'contact'];
    for (const section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom >= 140) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

const navLinks = [
  { name: lang === 'ENG' ? 'Home' : 'হোম', href: '#hero', id: 'hero' },
  { name: lang === 'ENG' ? 'Reconditioned Cars' : 'জাপানি গাড়ি', href: '#cars', id: 'cars' },
  { name: lang === 'ENG' ? 'Services' : 'সার্ভিসসমূহ', href: '#services', id: 'services' },
  { name: lang === 'ENG' ? 'Why Arshi' : 'কেন আমরা', href: '#why-us', id: 'why-us' },
  { name: lang === 'ENG' ? 'Reviews' : 'মতামত', href: '#reviews', id: 'reviews' },
  { name: lang === 'ENG' ? 'Contact' : 'যোগাযোগ', href: '#contact', id: 'contact' },
];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 75;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Main Navbar */}
      <div className="bg-[#1C7230] text-white py-3 transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-white text-[#1C7230] flex items-center justify-center shadow-md font-black text-xl group-hover:scale-105 transition-transform duration-200">
              <Car className="w-6 h-6 text-[#1C7230]" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-white font-display">
                  ARSHI
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-white/20 text-[#EDB713] uppercase tracking-wider">
                  Car Hub
                </span>
              </div>
              <span className="text-[11px] text-emerald-100 font-medium tracking-wide">
                {lang === 'ENG' ? 'Automobile & Detailing' : 'অটোমোবাইল ও ডিটেইলিং'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[#10693B] text-white shadow-inner font-semibold'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls (Language toggle & Booking) */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Language Switcher */}
            <div className="flex items-center border border-white/40 rounded-lg overflow-hidden bg-black/10">
              <button
                onClick={onToggleLang}
                className={`px-2.5 py-1 text-xs font-bold transition-all cursor-pointer ${
                  lang === 'ENG'
                    ? 'bg-white text-[#1C7230]'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                ENG
              </button>
              <button
                onClick={onToggleLang}
                className={`px-2.5 py-1 text-xs font-bold transition-all cursor-pointer ${
                  lang === 'বাংলা'
                    ? 'bg-white text-[#1C7230]'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                বাংলা
              </button>
            </div>

            {/* Direct WhatsApp / Call */}
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/40 text-white hover:bg-white/10 text-xs font-semibold transition"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#EDB713]" />
              <span>WhatsApp</span>
            </a>

            {/* Book Service Action Button */}
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-1.5 bg-[#EDB713] hover:bg-[#d4a310] text-[#1a2e1c] font-bold text-xs sm:text-sm px-3.5 sm:px-4 py-2 rounded-lg transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>{lang === 'ENG' ? 'Book Service' : 'সার্ভিস বুক করুন'}</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-white hover:bg-white/10 rounded-lg focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#10693B] border-t border-white/10 px-4 pt-3 pb-6 space-y-1.5 mt-2 shadow-2xl animate-fadeIn">
            <div className="text-xs text-emerald-200 pb-2 border-b border-white/10 flex justify-between items-center">
              <span>📍 {COMPANY_INFO.location}</span>
              <a href={`tel:${COMPANY_INFO.phone}`} className="text-[#EDB713] font-bold">
                📞 {COMPANY_INFO.phone}
              </a>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-2 rounded-md text-white hover:bg-white/10 font-medium text-sm transition"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 grid grid-cols-2 gap-2">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="py-2.5 bg-white/10 text-white text-center font-semibold text-xs rounded-lg flex items-center justify-center space-x-1 border border-white/20"
              >
                <Phone className="w-3.5 h-3.5 text-[#EDB713]" />
                <span>Call Us</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="py-2.5 bg-[#EDB713] text-[#1a2e1c] text-center font-bold text-xs rounded-lg flex items-center justify-center space-x-1 shadow"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Service</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
