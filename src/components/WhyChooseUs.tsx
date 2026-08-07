import React from 'react';
import { WHY_CHOOSE_US } from '../data/mockData';
import { Icon } from './Icon';
import { ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 bg-[#181818] text-white relative overflow-hidden border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div>
            <span className="editorial-tag">Why Car Owners Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Why Choose <span className="font-editorial italic font-normal text-[#C1121F]">Arshi Automobile</span>?
          </h2>
          <p className="text-stone-300 text-base sm:text-lg font-sans">
            We combine high-tech German & Japanese equipment with certified engineers to deliver unmatched accuracy, safety, and gloss for your vehicle in Rajshahi.
          </p>
        </div>

        {/* 4 Requested Feature Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US.map((feat) => (
            <div
              key={feat.id}
              className="group bg-[#222222] rounded-3xl p-8 border border-stone-800 hover:border-[#C1121F] hover:shadow-2xl transition-all duration-300 relative flex flex-col justify-between"
            >
              <div>
                {/* Stat Badge if available */}
                {feat.statBadge && (
                  <div className="absolute top-6 right-6 text-[10px] uppercase font-extrabold tracking-wider bg-[#2A2A2A] text-stone-300 px-2.5 py-1 rounded-full group-hover:bg-[#C1121F] group-hover:text-white transition-colors">
                    {feat.statBadge}
                  </div>
                )}

                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-[#1A1A1A] text-[#C1121F] border border-stone-800 shadow-sm flex items-center justify-center mb-6 group-hover:bg-[#C1121F] group-hover:text-white group-hover:border-[#C1121F] transition-all duration-300">
                  <Icon name={feat.iconName} className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold font-display text-white mb-3 group-hover:text-[#C1121F] transition-colors">
                  {feat.title}
                </h3>

                <p className="text-stone-300 text-sm leading-relaxed font-sans">
                  {feat.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-800 flex items-center space-x-2 text-xs font-bold text-stone-400">
                <CheckCircle2 className="w-4 h-4 text-[#C1121F]" />
                <span>Verified Rajshahi Workshop</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Guarantee Box */}
        <div className="mt-14 bg-[#121212] text-white rounded-3xl p-8 border border-stone-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-2xl bg-[#C1121F] text-white flex items-center justify-center shrink-0">
              <Sparkles className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-xl font-bold font-display text-white">100% Quality & Service Satisfaction Guarantee</h4>
              <p className="text-stone-400 text-xs sm:text-sm">If you're not completely satisfied with our cleaning or polish work, we will re-do it for free!</p>
            </div>
          </div>

          <a
            href="tel:01712110902"
            className="px-6 py-3.5 bg-white text-stone-900 hover:bg-stone-100 font-extrabold text-xs uppercase tracking-wider rounded-xl shrink-0 transition"
          >
            📞 Call Hotline: 01712110902
          </a>
        </div>

      </div>
    </section>
  );
};
