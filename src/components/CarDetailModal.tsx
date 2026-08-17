import React from 'react';
import { X, CheckCircle, ShieldCheck, MapPin, Gauge, Fuel, Calendar, Zap, MessageSquare, Phone, Award } from 'lucide-react';
import { ReconditionedCar } from '../types';
import { COMPANY_INFO } from '../data/mockData';

interface CarDetailModalProps {
  car: ReconditionedCar | null;
  isOpen: boolean;
  onClose: () => void;
  onInquire: (carTitle: string) => void;
}

export const CarDetailModal: React.FC<CarDetailModalProps> = ({
  car,
  isOpen,
  onClose,
  onInquire,
}) => {
  if (!isOpen || !car) return null;

  const whatsappInquiryUrl = `https://wa.me/8801712110902?text=Hello%20Arshi%20Automobile,%20I%20am%20interested%20in%20buying%20the%20${encodeURIComponent(
    car.title
  )}%20(Price:%20${encodeURIComponent(car.price)}).%20Please%20share%20the%20auction%20sheet.`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden animate-fadeIn border border-gray-100 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#1C7230] text-white p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
              <Award className="w-5 h-5 text-[#EDB713]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider font-bold bg-[#EDB713] text-stone-900 px-2 py-0.5 rounded">
                  Auction Grade: {car.auctionGrade}
                </span>
                <span className="text-xs text-emerald-100 bg-white/10 px-2 py-0.5 rounded">
                  {car.status}
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold font-display text-white mt-1">
                {car.title}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-2 rounded-lg hover:bg-white/10 transition cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scroll Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          {/* Main Image */}
          <div className="relative h-56 sm:h-72 rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
            <img
              src={car.image}
              alt={car.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3 bg-black/75 text-white px-3 py-1 rounded-lg text-xs font-semibold backdrop-blur-xs flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#EDB713]" />
              <span>Available at {car.location}</span>
            </div>
            <div className="absolute bottom-3 right-3 bg-[#1C7230] text-white px-3.5 py-1.5 rounded-lg text-sm sm:text-base font-bold shadow">
              {car.price}
            </div>
          </div>

          {/* Quick Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm">
            <div className="bg-[#EFF7F1] p-3 rounded-xl border border-emerald-100">
              <span className="text-gray-500 block text-[11px]">Engine & Fuel</span>
              <span className="font-bold text-gray-900 mt-0.5 block">{car.engine}</span>
              <span className="text-[#1C7230] text-[11px] font-medium">{car.fuelType}</span>
            </div>

            <div className="bg-[#EFF7F1] p-3 rounded-xl border border-emerald-100">
              <span className="text-gray-500 block text-[11px]">Mileage</span>
              <span className="font-bold text-gray-900 mt-0.5 block">{car.mileage}</span>
              <span className="text-[#1C7230] text-[11px] font-medium">Verified Odometer</span>
            </div>

            <div className="bg-[#EFF7F1] p-3 rounded-xl border border-emerald-100">
              <span className="text-gray-500 block text-[11px]">Model Year</span>
              <span className="font-bold text-gray-900 mt-0.5 block">{car.year}</span>
              <span className="text-[#1C7230] text-[11px] font-medium">{car.bodyType}</span>
            </div>

            <div className="bg-[#EFF7F1] p-3 rounded-xl border border-emerald-100">
              <span className="text-gray-500 block text-[11px]">Transmission</span>
              <span className="font-bold text-gray-900 mt-0.5 block">{car.transmission}</span>
              <span className="text-[#1C7230] text-[11px] font-medium">{car.color}</span>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#1C7230]" />
              <span>Features & Package Highlights</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {car.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 bg-gray-50 p-2.5 rounded-lg border border-gray-100"
                >
                  <CheckCircle className="w-4 h-4 text-[#1C7230] flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Japanese Auction Verification Trust Note */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 flex items-start gap-3 text-xs sm:text-sm text-amber-900">
            <ShieldCheck className="w-5 h-5 text-[#EDB713] flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block">100% Genuine Auction Sheet Guarantee</span>
              <p className="text-amber-800 text-xs mt-0.5">
                We provide the original live auction sheet verification from Japanese auction houses (USS, TAA, CAA). You can cross-verify chassis number, odometer reading, and grade before purchase.
              </p>
            </div>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="bg-gray-50 border-t border-gray-200 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-left w-full sm:w-auto">
            <span className="text-xs text-gray-500 block">Offer Price</span>
            <span className="text-xl font-bold text-[#1C7230]">{car.price}</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm shadow-xs transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Inquiry</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onInquire(car.title);
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 bg-[#1C7230] hover:bg-[#10693B] text-white px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm shadow-md transition cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Book Showroom Visit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
