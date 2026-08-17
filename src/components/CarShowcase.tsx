import React from 'react';
import { Car, Fuel, Gauge, ShieldCheck, ChevronRight, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { RECONDITIONED_CARS, COMPANY_INFO } from '../data/mockData';
import { ReconditionedCar } from '../types';

interface CarShowcaseProps {
  onInquireCar: (carTitle: string) => void;
  onViewCarDetails: (car: ReconditionedCar) => void;
  lang: 'ENG' | 'বাংলা';
}

export const CarShowcase: React.FC<CarShowcaseProps> = ({
  onInquireCar,
  onViewCarDetails,
  lang,
}) => {
  // Static list of 6 Japanese Reconditioned Cars
  const cars = RECONDITIONED_CARS.slice(0, 6);

  return (
    <section id="cars" className="py-12 sm:py-16 bg-[#FCFCFC] border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1C7230] bg-[#EFF7F1] px-3 py-1 rounded-full mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'ENG' ? 'Japanese Auction Imports' : 'জাপানি রিকন্ডিশন গাড়ি'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 font-display">
              {lang === 'ENG' ? 'Japanese Reconditioned Cars' : 'জাপানি রিকন্ডিশন গাড়িসমূহ'}
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">
              {lang === 'ENG'
                ? 'Genuine auction-graded Japanese cars available at Sopura Mothpukur showroom, Rajshahi.'
                : 'রাজশাহীর সোপুরা মঠপুকুর শোরুমে সরাসরি জাপান থেকে আমদানিকৃত ১০০% ভেরিফাইড অকশন গাড়ি।'}
            </p>
          </div>

          <div className="inline-flex items-center gap-2 bg-[#EFF7F1] border border-emerald-200 text-[#10693B] px-3.5 py-1.5 rounded-xl text-xs font-bold self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-[#1C7230] animate-pulse" />
            <span>6 Cars Ready in Showroom</span>
          </div>
        </div>

        {/* Static 6 Cars Grid (Shomvob Card Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <div
              key={car.id}
              className="shomvob-card flex flex-col justify-between overflow-hidden group cursor-pointer"
              onClick={() => onViewCarDetails(car)}
            >
              <div>
                {/* Image with Badges */}
                <div className="relative h-52 bg-gray-100 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="bg-[#1C7230] text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow">
                      Grade {car.auctionGrade}
                    </span>
                    <span className="bg-white/90 text-gray-800 text-[11px] font-bold px-2.5 py-1 rounded-md shadow backdrop-blur-xs">
                      {car.year}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="bg-stone-900/80 text-[#EDB713] text-[11px] font-bold px-2.5 py-1 rounded-md shadow backdrop-blur-xs">
                      {car.status}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 space-y-3">
                  <div>
                    <span className="text-[11px] uppercase font-bold text-gray-400 tracking-wider">
                      {car.make} • {car.bodyType}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 line-clamp-1 group-hover:text-[#1C7230] transition-colors">
                      {car.title}
                    </h3>
                  </div>

                  {/* Shomvob Specs Pills Grid */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <div className="inline-flex items-center gap-1 rounded-md bg-gray-100 px-2.5 py-1 text-xs text-gray-700 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#1C7230]" />
                      <span>{car.location}</span>
                    </div>

                    <div className="inline-flex items-center gap-1 rounded-md bg-gray-100 px-2.5 py-1 text-xs text-gray-700 font-medium">
                      <Gauge className="w-3.5 h-3.5 text-[#1C7230]" />
                      <span>{car.mileage}</span>
                    </div>

                    <div className="inline-flex items-center gap-1 rounded-md bg-gray-100 px-2.5 py-1 text-xs text-gray-700 font-medium">
                      <Fuel className="w-3.5 h-3.5 text-[#1C7230]" />
                      <span>{car.engine}</span>
                    </div>

                    <div className="inline-flex items-center gap-1 rounded-md bg-[#EFF7F1] text-[#10693B] px-2.5 py-1 text-xs font-semibold">
                      <span>{car.fuelType}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 pb-5 pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase font-medium">
                    {lang === 'ENG' ? 'Price' : 'মূল্য'}
                  </span>
                  <span className="text-base sm:text-lg font-bold text-[#1C7230]">
                    {car.price}
                  </span>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onViewCarDetails(car);
                  }}
                  className="inline-flex items-center gap-1 bg-[#1C7230] hover:bg-[#10693B] text-white px-3.5 py-2 rounded-lg text-xs font-bold transition shadow-xs cursor-pointer group/btn"
                >
                  <span>{lang === 'ENG' ? 'See Details' : 'বিস্তারিত দেখুন'}</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pre-Order Banner */}
        <div className="mt-10 bg-[#EFF7F1] border border-[#28A143]/30 rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#1C7230] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <ShieldCheck className="w-7 h-7 text-[#EDB713]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-gray-900">
                {lang === 'ENG' ? 'Need a Custom Model from Japan?' : 'জাপান থেকে পছন্দের নির্দিষ্ট গাড়ি আনতে চান?'}
              </h4>
              <p className="text-xs sm:text-sm text-gray-600">
                {lang === 'ENG'
                  ? 'We provide live auction bidding and direct import on your behalf with 100% genuine auction sheet.'
                  : 'আমরা সরাসরি জাপানের লাইভ অকশনে বিড করে আপনার কাঙ্ক্ষিত গাড়ি এনে দেব।'}
              </p>
            </div>
          </div>

          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1C7230] hover:bg-[#10693B] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition shadow-md whitespace-nowrap flex items-center gap-2"
          >
            <span>{lang === 'ENG' ? 'Talk to Auto Consultant' : 'অটো কনসালটেন্টের সাথে কথা বলুন'}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
