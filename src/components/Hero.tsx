import React from 'react';
import { Calendar, Phone, ArrowRight, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface HeroProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="hero" className="relative bg-[#121212] text-white overflow-hidden py-20 lg:py-28 flex items-center min-h-[75vh]">
      {/* Dark background with subtle luxury overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=2000&q=90"
          alt="Japanese Reconditioned Cars Arshi Automobile Sopura Mothpukur Rajshahi"
          className="w-full h-full object-cover object-center opacity-25"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/90 to-[#121212]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-[#121212]/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Location Tag */}
        <div className="inline-flex items-center space-x-2 bg-[#1F1F1F] border border-stone-800 rounded-full px-5 py-2 shadow-lg">
          <MapPin className="w-3.5 h-3.5 text-[#C1121F]" />
          <span className="text-xs font-bold text-stone-300 tracking-widest uppercase">
            Sopura Mothpukur, Rajshahi
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
          Your Trusted <span className="font-editorial italic font-normal text-[#C1121F]">Automobile</span> Partner.
        </h1>

        {/* Subheadline */}
        <p className="text-stone-300 text-lg sm:text-xl font-light max-w-2xl mx-auto font-sans leading-relaxed">
          Complete Japanese car sales and premium detailing services under one roof in Sopura Mothpukur, Rajshahi.
        </p>

        {/* Primary CTAs */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto px-8 py-4 bg-[#C1121F] hover:bg-[#9E0E18] text-white font-bold text-sm uppercase tracking-wider rounded-full shadow-lg shadow-red-900/30 transition duration-300 flex items-center justify-center space-x-2 group"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Service</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="w-full sm:w-auto px-8 py-4 bg-[#1F1F1F] hover:bg-stone-800 text-stone-200 border border-stone-800 font-bold text-sm uppercase tracking-wider rounded-full transition duration-300 flex items-center justify-center space-x-2"
          >
            <Phone className="w-4 h-4 text-[#C1121F]" />
            <span>Call: {COMPANY_INFO.phone}</span>
          </a>
        </div>

        {/* Key Highlights */}
        <div className="pt-8 border-t border-stone-800/80 max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 text-stone-400 text-xs sm:text-sm font-medium">
          <div>
            <span className="text-white font-bold block text-base sm:text-lg">Japanese Imports</span>
            <span>Verified Auction Grades</span>
          </div>
          <div>
            <span className="text-[#C1121F] font-bold block text-base sm:text-lg">Detailing Studio</span>
            <span>Ceramic, Paint & Polish</span>
          </div>
          <div className="col-span-2 md:col-span-1">
            <span className="text-white font-bold block text-base sm:text-lg">Sopura Mothpukur</span>
            <span>Rajshahi's Top Workshop</span>
          </div>
        </div>
      </div>
    </section>
  );
};
