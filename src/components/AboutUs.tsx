import React from 'react';
import { UserCheck, Sparkles, ShieldCheck, HeartHandshake, CheckCircle2, Award } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#181818] text-white relative overflow-hidden border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-800">
              <img
                src="https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80"
                alt="Arshi Automobile Workshop & Showroom in Sopura Mothpukur Rajshahi"
                className="w-full h-[450px] object-cover transform hover:scale-105 transition-transform duration-700 opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#1F1F1F]/90 backdrop-blur-md p-4 rounded-2xl border border-stone-800 shadow-xl flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#C1121F] uppercase tracking-wider">Rajshahi Center of Excellence</div>
                  <div className="text-lg font-bold text-white font-display">12+ Years Automotive Leadership</div>
                </div>
                <div className="w-12 h-12 bg-[#C1121F] text-white rounded-xl flex items-center justify-center font-black font-display text-xl">
                  100%
                </div>
              </div>
            </div>

            {/* Small floating decorative card */}
            <div className="absolute -top-6 -right-6 bg-[#C1121F] text-white p-5 rounded-2xl shadow-xl hidden sm:block max-w-[200px]">
              <Award className="w-8 h-8 mb-2 text-white" />
              <div className="font-bold text-sm">Verified Japanese Imports</div>
              <div className="text-xs text-red-100">100% Genuine Auction Sheets</div>
            </div>
          </div>

          {/* Copy Content */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="editorial-tag">About Arshi Automobile & Car Hub</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white leading-tight">
              Rajshahi’s Premier Destination for <span className="font-editorial italic font-normal text-[#C1121F]">Japanese Cars</span> & Advanced Auto Care
            </h2>

            <p className="text-stone-300 leading-relaxed text-base font-sans">
              Founded with a passion for automotive excellence, <strong className="text-white font-bold">Arshi Automobile & Car Hub</strong> is Rajshahi's most trusted complete vehicle solutions center. We bridge the gap between high-grade Japanese reconditioned car sales and world-class detailing & mechanical maintenance.
            </p>

            <p className="text-stone-300 leading-relaxed text-base font-sans">
              Whether you are looking to purchase an authentic auction-graded Japanese vehicle (Toyota, Honda, Nissan) or seeking precision dent & paint, ceramic coating, steam washing, or computerized engine diagnostics, our state-of-the-art facility at Sopura Mothpukur, Rajshahi provides complete peace of mind.
            </p>

            {/* 4 Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="bg-[#222222] p-4 rounded-2xl border border-stone-800 hover:border-[#C1121F]/60 transition group">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#C1121F]/20 text-[#C1121F] flex items-center justify-center group-hover:bg-[#C1121F] group-hover:text-white transition-colors">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold font-display text-white text-base">Professional Team</h3>
                </div>
                <p className="text-stone-400 text-xs leading-normal">
                  Factory-trained mechanics, master detailers, and Japanese car specialists with years of hands-on experience.
                </p>
              </div>

              <div className="bg-[#222222] p-4 rounded-2xl border border-stone-800 hover:border-[#C1121F]/60 transition group">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#C1121F]/20 text-[#C1121F] flex items-center justify-center group-hover:bg-[#C1121F] group-hover:text-white transition-colors">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold font-display text-white text-base">Quality Service</h3>
                </div>
                <p className="text-stone-400 text-xs leading-normal">
                  Uncompromised attention to detail using original OEM spare parts, German polishes, and premium synthetic oils.
                </p>
              </div>

              <div className="bg-[#222222] p-4 rounded-2xl border border-stone-800 hover:border-[#C1121F]/60 transition group">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#C1121F]/20 text-[#C1121F] flex items-center justify-center group-hover:bg-[#C1121F] group-hover:text-white transition-colors">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold font-display text-white text-base">Modern Equipment</h3>
                </div>
                <p className="text-stone-400 text-xs leading-normal">
                  Heated spray booth, computerized diagnostic scanners, high-pressure underwash, and dry steam generators.
                </p>
              </div>

              <div className="bg-[#222222] p-4 rounded-2xl border border-stone-800 hover:border-[#C1121F]/60 transition group">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#C1121F]/20 text-[#C1121F] flex items-center justify-center group-hover:bg-[#C1121F] group-hover:text-white transition-colors">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold font-display text-white text-base">Customer Satisfaction</h3>
                </div>
                <p className="text-stone-400 text-xs leading-normal">
                  Transparent pricing, quick turnaround, and 100% satisfaction commitment on every repair or sales service.
                </p>
              </div>

            </div>

            <div className="pt-2 flex items-center space-x-6 text-sm font-semibold text-stone-300 border-t border-stone-800">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-[#C1121F]" />
                <span>BRTA Docs Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-[#C1121F]" />
                <span>Sopura Mothpukur, Rajshahi</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
