import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Car, Calendar, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Section tracker
      const sections = ['hero', 'about', 'services', 'reconditioned', 'why-us', 'gallery', 'reviews', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
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
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Reconditioned Cars', href: '#reconditioned' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top Banner Bar for Rajshahi contact info */}
      <div className="bg-[#1F1F1F] text-stone-300 text-xs py-1.5 border-b border-stone-800 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1.5 text-stone-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Rajshahi's Trusted Car Hub</span>
            </span>
            <span className="text-stone-600">|</span>
            <span>📍 Sopura Mothpukur, Rajshahi</span>
          </div>

          <div className="flex items-center space-x-4">
            <span>Sat - Thu: 8:30 AM - 9:00 PM</span>
            <span className="text-stone-600">|</span>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="text-[#C1121F] font-bold hover:text-red-400 flex items-center space-x-1 transition"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#1F1F1F]/95 backdrop-blur-md shadow-xl border-b border-stone-800 py-3'
            : 'bg-[#1F1F1F] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Company Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#C1121F] text-white flex items-center justify-center shadow-md group-hover:bg-[#9E0E18] transition-colors duration-300">
              <Car className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black font-display tracking-tight text-white flex items-center">
                ARSHI <span className="text-[#C1121F] ml-1.5">AUTOMOBILE</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 flex items-center gap-1.5">
                <span>& Car Hub</span>
                <span className="w-1 h-1 rounded-full bg-[#C1121F]" />
                <span className="text-stone-300">arshicar.com</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 rounded-lg text-xs font-bold transition-all duration-200 tracking-wide ${
                    isActive
                      ? 'text-white bg-[#C1121F] shadow-xs'
                      : 'text-stone-300 hover:text-white hover:bg-stone-800'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Call & Book buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-3.5 py-2 text-stone-300 hover:text-white bg-stone-800 hover:bg-stone-700 rounded-xl text-xs font-bold flex items-center space-x-1.5 border border-stone-700 transition"
            >
              <Phone className="w-3.5 h-3.5 text-[#C1121F]" />
              <span>Call Now</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="px-4 py-2.5 bg-[#C1121F] text-white text-xs font-bold rounded-xl hover:bg-[#9E0E18] transition shadow-md hover:shadow-lg flex items-center space-x-1.5 tracking-wide"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Service</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 bg-[#C1121F] text-white text-xs font-bold rounded-lg"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-300 hover:text-white bg-stone-800 rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1F1F1F] border-b border-stone-800 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl animate-fadeIn">
            <div className="text-xs text-stone-400 pb-2 border-b border-stone-800 flex justify-between items-center">
              <span>📍 Rajshahi, Bangladesh</span>
              <a href={`tel:${COMPANY_INFO.phone}`} className="text-[#C1121F] font-bold">
                📞 {COMPANY_INFO.phone}
              </a>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-4 py-2.5 rounded-xl text-stone-200 hover:text-white hover:bg-[#C1121F] font-semibold text-sm transition"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 grid grid-cols-2 gap-2">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-full py-2.5 bg-stone-800 text-stone-200 text-center font-bold text-xs rounded-xl flex items-center justify-center space-x-1 border border-stone-700"
              >
                <Phone className="w-3.5 h-3.5 text-[#C1121F]" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-2.5 bg-[#C1121F] text-white text-center font-bold text-xs rounded-xl flex items-center justify-center space-x-1"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Service</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
