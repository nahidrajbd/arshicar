import React, { useState } from 'react';
import { RECONDITIONED_CARS, COMPANY_INFO } from '../data/mockData';
import { ReconditionedCar } from '../types';
import { Car, Fuel, Gauge, Award, CheckCircle2, ShieldCheck, Phone, ChevronRight } from 'lucide-react';

interface CarShowcaseProps {
  onInquireCar: (carTitle: string) => void;
}

export const CarShowcase: React.FC<CarShowcaseProps> = ({ onInquireCar }) => {
  const [selectedCar, setSelectedCar] = useState<ReconditionedCar | null>(null);

  return (
    <section id="reconditioned" className="py-20 bg-[#1F1F1F] text-white relative overflow-hidden">
      
      {/* Background Subtle Accent Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#C1121F_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6 border-b border-stone-800 pb-8">
          <div>
            <div className="mb-3">
              <span className="editorial-tag">Japanese Reconditioned Imports</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
              Featured <span className="font-editorial italic font-normal text-[#C1121F]">Reconditioned Cars</span> for Sale
            </h2>
            <p className="text-stone-400 text-sm sm:text-base mt-2 max-w-2xl font-sans">
              Hand-picked Japanese vehicles in Rajshahi with verified auction sheets, low mileage, original factory paint, and full registration support.
            </p>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <div className="bg-stone-900 border border-stone-800 px-4 py-3 rounded-2xl text-xs text-stone-300 flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <div>
                <div className="font-bold text-white">Verified Auction Sheets</div>
                <div className="text-[10px] text-stone-400">100% Genuine Japanese Grades</div>
              </div>
            </div>
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RECONDITIONED_CARS.map((car) => (
            <div
              key={car.id}
              className="group bg-stone-900 rounded-3xl overflow-hidden border border-stone-800 hover:border-[#C1121F] transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Image & Status Badge */}
                <div className="relative h-48 overflow-hidden bg-stone-800">
                  <img
                    src={car.image}
                    alt={`${car.title} in Rajshahi`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F] via-transparent to-transparent opacity-80" />

                  {/* Auction Grade Badge */}
                  <div className="absolute top-3 left-3 bg-[#C1121F] text-white px-3 py-1 rounded-xl text-xs font-black shadow-md border border-red-500/30">
                    Grade {car.auctionGrade}
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-3 right-3 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold">
                    {car.status}
                  </div>

                  {/* Year Tag */}
                  <div className="absolute bottom-3 left-3 text-xs font-extrabold text-stone-200 bg-stone-900/80 px-2.5 py-0.5 rounded-lg border border-stone-700/80">
                    {car.year} Model
                  </div>
                </div>

                {/* Spec Highlights */}
                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-bold font-display text-white group-hover:text-[#C1121F] transition-colors leading-snug">
                    {car.title}
                  </h3>

                  {/* Specs Pill List */}
                  <div className="grid grid-cols-2 gap-2 text-xs text-stone-300 pt-1">
                    <div className="bg-stone-800/80 p-2 rounded-xl flex items-center space-x-1.5">
                      <Car className="w-3.5 h-3.5 text-[#C1121F]" />
                      <span>{car.engine}</span>
                    </div>
                    <div className="bg-stone-800/80 p-2 rounded-xl flex items-center space-x-1.5">
                      <Gauge className="w-3.5 h-3.5 text-[#C1121F]" />
                      <span>{car.mileage}</span>
                    </div>
                    <div className="bg-stone-800/80 p-2 rounded-xl flex items-center space-x-1.5">
                      <Fuel className="w-3.5 h-3.5 text-[#C1121F]" />
                      <span>{car.fuelType}</span>
                    </div>
                    <div className="bg-stone-800/80 p-2 rounded-xl flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      <span>{car.color}</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="pt-2 border-t border-stone-800 flex items-center justify-between">
                    <span className="text-xs text-stone-400">Price</span>
                    <span className="text-lg font-black font-display text-[#C1121F]">{car.price}</span>
                  </div>
                </div>
              </div>

              {/* Card Actions */}
              <div className="p-5 pt-0 grid grid-cols-2 gap-2 mt-2">
                <button
                  onClick={() => setSelectedCar(car)}
                  className="py-2.5 px-3 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-xl text-xs font-bold transition text-center"
                >
                  Full Specs
                </button>
                <button
                  onClick={() => onInquireCar(car.title)}
                  className="py-2.5 px-3 bg-[#C1121F] hover:bg-[#9E0E18] text-white rounded-xl text-xs font-bold transition flex items-center justify-center space-x-1 shadow-md"
                >
                  <span>Inquire</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Custom Pre-order Banner */}
        <div className="mt-12 bg-gradient-to-r from-stone-900 via-[#2A2A2A] to-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-left">
            <h3 className="text-2xl font-extrabold font-display text-white">
              Looking for a Specific Japanese Car Model or Color?
            </h3>
            <p className="text-stone-300 text-sm max-w-2xl">
              We import directly from USS, TAA, & JU auctions in Japan based on your exact choice of grade, budget, and features.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl text-xs uppercase tracking-wider flex items-center space-x-2 transition shadow-lg"
            >
              <span>💬 Pre-Order on WhatsApp</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-6 py-3.5 bg-[#C1121F] hover:bg-[#9E0E18] text-white font-bold rounded-2xl text-xs uppercase tracking-wider flex items-center space-x-2 transition shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Call Showroom</span>
            </a>
          </div>
        </div>

      </div>

      {/* Car Specs Modal */}
      {selectedCar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
          <div className="bg-[#1F1F1F] text-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl border border-stone-800 max-h-[90vh] overflow-y-auto space-y-6">
            <button
              onClick={() => setSelectedCar(null)}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-white bg-stone-800 rounded-full"
            >
              ✕
            </button>

            <div className="space-y-1">
              <span className="text-xs font-bold text-[#C1121F] uppercase tracking-wider">Auction Grade: {selectedCar.auctionGrade}</span>
              <h3 className="text-2xl font-bold font-display text-white">{selectedCar.title}</h3>
            </div>

            <img
              src={selectedCar.image}
              alt={selectedCar.title}
              className="w-full h-60 object-cover rounded-2xl border border-stone-800"
              referrerPolicy="no-referrer"
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-stone-800 p-3 rounded-xl">
                <span className="text-stone-400 block text-[10px]">Year</span>
                <span className="font-bold text-white text-sm">{selectedCar.year}</span>
              </div>
              <div className="bg-stone-800 p-3 rounded-xl">
                <span className="text-stone-400 block text-[10px]">Engine</span>
                <span className="font-bold text-white text-sm">{selectedCar.engine}</span>
              </div>
              <div className="bg-stone-800 p-3 rounded-xl">
                <span className="text-stone-400 block text-[10px]">Mileage</span>
                <span className="font-bold text-white text-sm">{selectedCar.mileage}</span>
              </div>
              <div className="bg-stone-800 p-3 rounded-xl">
                <span className="text-stone-400 block text-[10px]">Fuel Type</span>
                <span className="font-bold text-white text-sm">{selectedCar.fuelType}</span>
              </div>
              <div className="bg-stone-800 p-3 rounded-xl">
                <span className="text-stone-400 block text-[10px]">Transmission</span>
                <span className="font-bold text-white text-sm">{selectedCar.transmission}</span>
              </div>
              <div className="bg-stone-800 p-3 rounded-xl">
                <span className="text-stone-400 block text-[10px]">Color</span>
                <span className="font-bold text-white text-sm">{selectedCar.color}</span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-xs uppercase tracking-wider text-stone-300">Key Japanese Features:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-300">
                {selectedCar.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C1121F]" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-stone-800 pt-4">
              <div>
                <div className="text-xs text-stone-400">Asking Price</div>
                <div className="text-2xl font-black font-display text-[#C1121F]">{selectedCar.price}</div>
              </div>
              <button
                onClick={() => {
                  const title = selectedCar.title;
                  setSelectedCar(null);
                  onInquireCar(title);
                }}
                className="px-6 py-3 bg-[#C1121F] hover:bg-[#9E0E18] text-white font-bold rounded-xl text-sm transition shadow-lg"
              >
                Inquire or Test Drive
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
