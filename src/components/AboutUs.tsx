import React from 'react';
import { MapPin, ShieldCheck, Award, Users, CheckCircle, Car, Wrench, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface AboutUsProps {
  lang: 'ENG' | 'বাংলা';
  onOpenBooking: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ lang, onOpenBooking }) => {
  return (
    <section id="about" className="py-12 sm:py-16 bg-[#FCFCFC] border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-64 sm:h-80">
              <img
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80"
                alt="Arshi Automobile Showroom in Sopura Rajshahi"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
                <div className="text-white">
                  <span className="px-2.5 py-1 rounded-md bg-[#1C7230] text-white text-xs font-bold uppercase tracking-wider">
                    Sopura Mothpukur
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold mt-1">
                    Arshi Automobile & Car Care Hub
                  </h3>
                </div>
              </div>
            </div>

            {/* Quick Metrics Badges */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white p-3.5 rounded-xl border border-gray-200 text-center shadow-2xs">
                <span className="text-xl sm:text-2xl font-extrabold text-[#1C7230] block">12+</span>
                <span className="text-[11px] text-gray-500 font-medium">Years in Business</span>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-gray-200 text-center shadow-2xs">
                <span className="text-xl sm:text-2xl font-extrabold text-[#1C7230] block">5,000+</span>
                <span className="text-[11px] text-gray-500 font-medium">Cars Serviced</span>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-gray-200 text-center shadow-2xs">
                <span className="text-xl sm:text-2xl font-extrabold text-[#EDB713] block">100%</span>
                <span className="text-[11px] text-gray-500 font-medium">Genuine Auctions</span>
              </div>
            </div>
          </div>

          {/* Right Column: About Description */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1C7230] bg-[#EFF7F1] px-3 py-1 rounded-full">
              <MapPin className="w-3.5 h-3.5" />
              <span>{lang === 'ENG' ? 'About Arshi Automobile' : 'আরশি অটোমোবাইল পরিচিতি'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 font-display leading-tight">
              {lang === 'ENG' ? (
                <>
                  Rajshahi's Leading Destination for <span className="text-[#1C7230]">Japanese Cars</span> & Auto Care
                </>
              ) : (
                <>
                  রাজশাহীর বিশ্বস্ত <span className="text-[#1C7230]">জাপানি গাড়ি</span> ও পূর্ণাঙ্গ অটো কেয়ার সেন্টার
                </>
              )}
            </h2>

            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
              {lang === 'ENG'
                ? 'Located at Sopura Mothpukur, Rajshahi, Arshi Automobile is dedicated to providing high-grade Japanese reconditioned vehicles with verified live auction sheets, alongside our state-of-the-art detailing studio and mechanical workshop.'
                : 'রাজশাহীর সোপুরা মঠপুকুরে অবস্থিত আরশি অটোমোবাইল জাপানি রিকন্ডিশন গাড়ি ক্রয়-বিক্রয় এবং আধুনিক অটো ডিটেইলিং সেবায় এক বিশ্বস্ত নাম।'}
            </p>

            <div className="space-y-2.5 pt-1">
              {[
                { title: 'Verified Live Japanese Auction Sheet for every car', titleBn: 'প্রতিটি গাড়ির ১০০% অথেনটিক জাপানি অকশন শিট নিশ্চয়তা' },
                { title: 'Dust-free Infrared Spray Booth for OEM Paint Finish', titleBn: 'ডাস্ট-ফ্রি ইনফ্রারেড হিটেড স্প্রে বুথে ফ্যাক্টরি গ্রেড পেইন্ট' },
                { title: 'German 9H Nano Ceramic Coating & Interior Steam Studio', titleBn: 'জার্মান ৯এইচ সিরামিক কোটিং ও ডিপ ইন্টেরিয়র স্টিম ওয়াশ' },
                { title: 'Comfortable air-conditioned customer waiting lounge', titleBn: 'সার্ভিস চলাকালীন শীতাতপ নিয়ন্ত্রিত আধুনিক কাস্টমার লাউঞ্জ' },
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-[#1C7230] flex-shrink-0" />
                  <span>{lang === 'ENG' ? point.title : point.titleBn}</span>
                </div>
              ))}
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="bg-[#1C7230] hover:bg-[#10693B] text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>{lang === 'ENG' ? 'Book a Workshop Visit' : 'ওয়ার্কশপ ভিজিট বুক করুন'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="border border-gray-300 hover:border-[#1C7230] text-gray-800 hover:text-[#1C7230] px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm transition bg-white"
              >
                <span>📞 {COMPANY_INFO.phoneFormatted}</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
