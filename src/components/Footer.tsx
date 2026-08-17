import React from 'react';
import { Car, MapPin, Phone, Mail, Clock, MessageSquare, ShieldCheck, Heart } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface FooterProps {
  onOpenBooking: (serviceId?: string) => void;
  lang: 'ENG' | 'বাংলা';
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, lang }) => {
  return (
    <footer className="bg-[#10693B] text-white">
      {/* Upper Footer Links */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[#1C7230] flex items-center justify-center font-bold shadow">
                <Car className="w-6 h-6 text-[#1C7230]" />
              </div>
              <div>
                <span className="text-xl font-bold font-display tracking-tight text-white block">
                  ARSHI CAR HUB
                </span>
                <span className="text-[11px] text-emerald-200">
                  Automobile & Detailing Studio
                </span>
              </div>
            </div>

            <p className="text-xs text-emerald-100/80 leading-relaxed">
              {lang === 'ENG'
                ? 'Rajshahi’s premier hub for verified Japanese auction grade reconditioned cars, 9H nano ceramic detailing, and computerized servicing.'
                : 'রাজশাহীতে ভেরিফাইড জাপানি রিকন্ডিশন গাড়ি ও আধুনিক মাস্টার অটো কেয়ারের পূর্ণাঙ্গ সেন্টার।'}
            </p>

            <div className="pt-1 flex items-center gap-2">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-[#EDB713] transition"
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
                title="Call Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
                title="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Reconditioned Cars */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#EDB713] uppercase tracking-wider">
              {lang === 'ENG' ? 'Japanese Cars' : 'জাপানি গাড়ি'}
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/90">
              <li>
                <a href="#cars" className="hover:text-white transition">Toyota Premio F-EX (2018-2020)</a>
              </li>
              <li>
                <a href="#cars" className="hover:text-white transition">Toyota Harrier Luxury (2020-2022)</a>
              </li>
              <li>
                <a href="#cars" className="hover:text-white transition">Honda Vezel e:HEV Sensing</a>
              </li>
              <li>
                <a href="#cars" className="hover:text-white transition">Toyota Noah & Voxy Hybrid MPV</a>
              </li>
              <li>
                <a href="#cars" className="hover:text-white transition">Toyota Corolla Axio & Fielder</a>
              </li>
              <li>
                <a href="#cars" className="hover:text-white transition">Custom Japanese Auction Bidding</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Auto Care Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#EDB713] uppercase tracking-wider">
              {lang === 'ENG' ? 'Auto Care Services' : 'সার্ভিসসমূহ'}
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/90">
              <li>
                <a href="#services" onClick={() => onOpenBooking('ceramic-detailing')} className="hover:text-white transition">
                  9H Ceramic & Graphene Coating
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => onOpenBooking('car-wash')} className="hover:text-white transition">
                  Snow Foam & Underbody Wash
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => onOpenBooking('dent-paint')} className="hover:text-white transition">
                  Heated Spray Booth Dent & Paint
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => onOpenBooking('interior-steam')} className="hover:text-white transition">
                  Interior Dry Steam Sanitization
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => onOpenBooking('car-servicing')} className="hover:text-white transition">
                  Periodic Tune-Up & Synthetic Oil
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => onOpenBooking('vehicle-inspection')} className="hover:text-white transition">
                  150-Point Pre-Purchase Car Scan
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Showroom */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#EDB713] uppercase tracking-wider">
              {lang === 'ENG' ? 'Showroom & Studio' : 'শোরুম ও স্টুডিও'}
            </h4>
            <div className="space-y-2.5 text-xs text-emerald-100/90">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#EDB713] flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#EDB713] flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="font-bold text-white hover:text-emerald-200">
                  {COMPANY_INFO.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#EDB713] flex-shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </div>
              <div className="flex items-start gap-2 pt-1 border-t border-white/10">
                <Clock className="w-4 h-4 text-[#EDB713] flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-[#0b4d2b] border-t border-white/10 py-4 px-4 text-xs text-emerald-200/80">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#hero" className="hover:text-white transition">Back to Top ↑</a>
            <span className="text-white/20">|</span>
            <span className="text-emerald-300 font-medium">Sopura Mothpukur, Rajshahi</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
