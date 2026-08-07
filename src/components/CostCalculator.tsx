import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const CostCalculator: React.FC = () => {
  const [vehicleType, setVehicleType] = useState<'sedan' | 'suv' | 'microbus'>('sedan');
  const [selectedServices, setSelectedServices] = useState<string[]>(['wash', 'polish']);

  const vehicleRates = {
    sedan: { label: 'Sedan / Hatchback (Premio, Axio, Grace)', multiplier: 1.0 },
    suv: { label: 'SUV / Crossover (Harrier, Vezel, RAV4)', multiplier: 1.25 },
    microbus: { label: 'Microbus / MPV (Noah, Voxy, HiAce)', multiplier: 1.45 }
  };

  const servicePrices: Record<string, { title: string; basePrice: number }> = {
    wash: { title: 'High-Pressure Foam Wash', basePrice: 350 },
    polish: { title: '3-Step Machine Gloss Polish', basePrice: 1800 },
    detailing: { title: 'Ceramic Coating & Detailing', basePrice: 3500 },
    interior: { title: 'Hot Steam Interior Cleaning', basePrice: 1500 },
    engine: { title: 'Dry Steam Engine Bay Cleaning', basePrice: 800 },
    servicing: { title: 'Engine Oil & Filter Servicing', basePrice: 2200 },
  };

  const toggleService = (key: string) => {
    if (selectedServices.includes(key)) {
      if (selectedServices.length === 1) return; // Keep at least one
      setSelectedServices(selectedServices.filter(s => s !== key));
    } else {
      setSelectedServices([...selectedServices, key]);
    }
  };

  const calculateTotal = () => {
    const mult = vehicleRates[vehicleType].multiplier;
    const baseTotal = selectedServices.reduce((acc, key) => acc + servicePrices[key].basePrice, 0);
    const estimated = Math.round(baseTotal * mult);
    return estimated;
  };

  const handleWhatsAppQuote = () => {
    const total = calculateTotal();
    const serviceNames = selectedServices.map(k => servicePrices[k].title).join(', ');
    const vehicleText = vehicleRates[vehicleType].label;

    const msg = `Hello Arshi Automobile! I calculated an estimate on your website:\n\n*Vehicle Type:* ${vehicleText}\n*Services Selected:* ${serviceNames}\n*Estimated Total:* BDT ${total.toLocaleString()}\n\nI would like to schedule an appointment in Rajshahi.`;
    window.open(`https://wa.me/8801712110902?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section className="py-16 bg-[#1F1F1F] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Header & Options */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="mb-2">
                  <span className="editorial-tag">Instant Package Estimator</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-white">
                  Estimate Your <span className="font-editorial italic font-normal text-[#C1121F]">Vehicle Service</span> Package
                </h3>
                <p className="text-stone-400 text-xs sm:text-sm mt-1">
                  Select your vehicle type and required services to calculate a quick transparent estimate in Rajshahi.
                </p>
              </div>

              {/* Step 1: Vehicle Category */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-2">
                  1. Select Vehicle Segment
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {(Object.keys(vehicleRates) as Array<keyof typeof vehicleRates>).map((vKey) => (
                    <button
                      key={vKey}
                      onClick={() => setVehicleType(vKey)}
                      className={`p-3 rounded-2xl text-xs font-bold border text-left transition ${
                        vehicleType === vKey
                          ? 'bg-[#C1121F] text-white border-[#C1121F]'
                          : 'bg-stone-800 text-stone-300 border-stone-700 hover:bg-stone-700'
                      }`}
                    >
                      {vKey === 'sedan' && '🚗 Sedan / Hatchback'}
                      {vKey === 'suv' && '🚙 SUV / Crossover'}
                      {vKey === 'microbus' && '🚐 Microbus / MPV'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Select Services */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-2">
                  2. Choose Required Services
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {Object.entries(servicePrices).map(([sKey, item]) => {
                    const isSelected = selectedServices.includes(sKey);
                    return (
                      <button
                        key={sKey}
                        onClick={() => toggleService(sKey)}
                        className={`p-3 rounded-2xl text-xs font-semibold border flex items-center justify-between transition ${
                          isSelected
                            ? 'bg-stone-800 border-[#C1121F] text-white'
                            : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-stone-200'
                        }`}
                      >
                        <span className="flex items-center space-x-2">
                          <span className={`w-4 h-4 rounded-md flex items-center justify-center text-[10px] ${isSelected ? 'bg-[#C1121F] text-white' : 'border border-stone-600'}`}>
                            {isSelected && <Check className="w-3 h-3" />}
                          </span>
                          <span>{item.title}</span>
                        </span>
                        <span className="text-stone-400 font-mono text-[11px]">~BDT {item.basePrice}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Result Card */}
            <div className="lg:col-span-5 bg-[#1F1F1F] p-6 sm:p-8 rounded-3xl border border-stone-800 text-center space-y-6">
              <div className="text-xs text-stone-400 uppercase tracking-widest font-bold">Calculated Package Estimate</div>
              
              <div>
                <div className="text-4xl sm:text-5xl font-black font-display text-[#C1121F]">
                  BDT {calculateTotal().toLocaleString()}
                </div>
                <div className="text-xs text-stone-400 mt-1">
                  * Estimated cost for {vehicleRates[vehicleType].label.split(' ')[0]} with {selectedServices.length} selected services.
                </div>
              </div>

              <div className="bg-stone-900 p-4 rounded-2xl border border-stone-800 text-left text-xs text-stone-300 space-y-1">
                <p className="font-bold text-white flex items-center space-x-1 mb-2">
                  <Sparkles className="w-4 h-4 text-[#C1121F]" />
                  <span>Package Benefits Included:</span>
                </p>
                <p>• Complimentary tire shine & exterior dry</p>
                <p>• Verified German & Japanese cleaning products</p>
                <p>• 100% Satisfaction & money-back guarantee</p>
              </div>

              <button
                onClick={handleWhatsAppQuote}
                className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-2xl text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Book Package via WhatsApp</span>
              </button>

              <p className="text-[11px] text-stone-500">
                Or call our Rajshahi hotline directly: <a href="tel:01712110902" className="text-[#C1121F] font-bold">01712110902</a>
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
