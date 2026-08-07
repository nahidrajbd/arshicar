import React from 'react';
import { Car, Phone, MapPin, Mail, ArrowUp, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#1F1F1F] text-stone-300 border-t border-stone-800 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Company Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#C1121F] text-white flex items-center justify-center font-bold">
                <Car className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black font-display tracking-tight text-white">
                  ARSHI <span className="text-[#C1121F]">AUTOMOBILE</span>
                </span>
                <span className="text-xs uppercase font-bold tracking-wider text-stone-400">
                  & Car Hub • arshicar.com
                </span>
              </div>
            </div>

            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              Rajshahi’s premier one-stop automotive destination. Japanese reconditioned car sales, ceramic detailing, foam wash, denting & painting, engine servicing, and vehicle inspection.
            </p>

            <div className="text-xs text-stone-400 space-y-1 pt-2">
              <p>📍 {COMPANY_INFO.address}</p>
              <p>📍 {COMPANY_INFO.location}</p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold font-display uppercase tracking-wider text-white border-b border-stone-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {['Home', 'About Us', 'Services', 'Reconditioned Cars', 'Why Us', 'Gallery', 'Reviews', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:text-[#C1121F] transition flex items-center space-x-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-[#C1121F]" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Services Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold font-display uppercase tracking-wider text-white border-b border-stone-800 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>• Japanese Reconditioned Car Sales</li>
              <li>• Car Wash & Foam Bath</li>
              <li>• Ceramic Detailing & Paint Protection</li>
              <li>• 3-Step Machine Car Polish</li>
              <li>• Spray Booth Dent & Paint</li>
              <li>• Engine Servicing & Tune-Up</li>
              <li>• Interior Steam Cleaning</li>
              <li>• Engine Room Degreasing</li>
              <li>• 150-Point Vehicle Inspection</li>
            </ul>
          </div>

          {/* Contact Hotline Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold font-display uppercase tracking-wider text-white border-b border-stone-800 pb-2">
              Direct Contact
            </h4>
            
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-stone-500 block">Phone Hotline:</span>
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-base font-black text-[#C1121F] hover:underline">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div>
                <span className="text-stone-500 block">WhatsApp:</span>
                <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-bold hover:underline">
                  01712110902
                </a>
              </div>

              <div>
                <span className="text-stone-500 block">Domain:</span>
                <span className="text-stone-300 font-bold">arshicar.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} <strong className="text-stone-300 font-bold">Arshi Automobile & Car Hub</strong> (arshicar.com). All Rights Reserved. Rajshahi, Bangladesh.
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 bg-stone-800 hover:bg-[#C1121F] text-stone-300 hover:text-white rounded-xl transition flex items-center space-x-1"
            aria-label="Scroll to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
