import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, CheckCircle2, Car, Calendar, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface HeroProps {
  onOpenBooking: (serviceId?: string) => void;
  lang: 'ENG' | 'বাংলা';
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, lang }) => {
  const scrollToCars = () => {
    const el = document.getElementById('cars');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative bg-gradient-to-b from-[#EFF7F1]/70 via-[#FCFCFC] to-[#FCFCFC] py-10 sm:py-14 lg:py-18 overflow-hidden border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Pill Announcement */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EFF7F1] border border-[#28A143]/20 px-4 py-1.5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#1C7230] animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-[#10693B]">
                {lang === 'ENG'
                  ? 'Japanese Reconditioned Cars & Master Detailing Studio in Rajshahi'
                  : 'রাজশাহীতে জাপানি রিকন্ডিশন গাড়ি ও মাস্টার অটো কেয়ার হাব'}
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
                {lang === 'ENG' ? (
                  <>
                    Where Every <span className="text-[#1C7230]">Drive</span> Begins with Trust & Perfection
                  </>
                ) : (
                  <>
                    যেখানে আপনার প্রতিটি <span className="text-[#1C7230]">যাত্রা</span> শুরু হয় পূর্ণ আস্থায়
                  </>
                )}
              </h1>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed">
                {lang === 'ENG'
                  ? 'Verified Japanese auction grade reconditioned cars, 9H nano ceramic detailing, heated spray booth paint, and complete periodic servicing in Sopura Mothpukur, Rajshahi.'
                  : '১০০% ভেরিফাইড অকশন শিটের জাপানি গাড়ি, ৯এইচ ন্যানো সিরামিক কোটিং, স্প্রে বুথ ডেন্ট-পেইন্ট ও মাস্টার সার্ভিসিং।'}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={scrollToCars}
                className="bg-[#1C7230] hover:bg-[#10693B] text-white px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <Car className="w-4 h-4" />
                <span>{lang === 'ENG' ? 'Explore Reconditioned Cars' : 'জাপানি গাড়িগুলো দেখুন'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenBooking()}
                className="bg-[#EDB713] hover:bg-[#d4a310] text-[#1a2e1c] px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>{lang === 'ENG' ? 'Book Auto Care Service' : 'সার্ভিস বুক করুন'}</span>
              </button>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl border border-gray-300 hover:border-[#1C7230] bg-white text-gray-800 hover:text-[#1C7230] text-xs sm:text-sm font-semibold transition"
              >
                <Phone className="w-4 h-4 text-[#1C7230]" />
                <span>{COMPANY_INFO.phoneFormatted}</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-gray-200 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1C7230] flex-shrink-0" />
                <span className="font-semibold text-gray-800">100% Auction Sheet</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#EDB713] flex-shrink-0" />
                <span className="font-semibold text-gray-800">9H Ceramic Studio</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1C7230] flex-shrink-0" />
                <span className="font-semibold text-gray-800">Sopura, Rajshahi</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4-Grid Hero Showcase */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 h-[340px] sm:h-[400px] lg:h-[440px]">
              <div className="relative rounded-2xl overflow-hidden shadow-md group">
                <img
                  src="https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800&q=80"
                  alt="Toyota Premio Reconditioned Car Rajshahi"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3 sm:p-4">
                  <div>
                    <span className="px-2 py-0.5 rounded-md bg-[#1C7230] text-white text-[10px] font-bold uppercase">
                      Grade 4.5
                    </span>
                    <p className="text-white font-bold text-xs sm:text-sm mt-1">Toyota Premio 2020</p>
                  </div>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-md group">
                <img
                  src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80"
                  alt="Toyota Harrier SUV"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3 sm:p-4">
                  <div>
                    <span className="px-2 py-0.5 rounded-md bg-[#EDB713] text-stone-900 text-[10px] font-bold uppercase">
                      Luxury SUV
                    </span>
                    <p className="text-white font-bold text-xs sm:text-sm mt-1">Toyota Harrier 2021</p>
                  </div>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-md group">
                <img
                  src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=800&q=80"
                  alt="9H Ceramic Coating Studio"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3 sm:p-4">
                  <div>
                    <span className="px-2 py-0.5 rounded-md bg-[#1C7230] text-white text-[10px] font-bold uppercase">
                      Detailing Studio
                    </span>
                    <p className="text-white font-bold text-xs sm:text-sm mt-1">9H Ceramic Shield</p>
                  </div>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-md group">
                <img
                  src="https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80"
                  alt="Sopura Rajshahi Workshop"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3 sm:p-4">
                  <div>
                    <span className="px-2 py-0.5 rounded-md bg-stone-800 text-white text-[10px] font-bold uppercase">
                      Master Workshop
                    </span>
                    <p className="text-white font-bold text-xs sm:text-sm mt-1">Sopura Service Bay</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
