import React, { useState } from 'react';
import { Sparkles, Droplets, Paintbrush, Wrench, Clock, CheckCircle2, ArrowRight, Calendar, Tag, Shield } from 'lucide-react';
import { SERVICES_LIST, COMPANY_INFO } from '../data/mockData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectServiceToBook: (serviceId?: string) => void;
  lang: 'ENG' | 'বাংলা';
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceToBook, lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredServices = SERVICES_LIST.filter((service) => {
    if (selectedCategory === 'all') return true;
    return service.category === selectedCategory;
  });

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#1C7230]" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-[#1C7230]" />;
      case 'Paintbrush':
        return <Paintbrush className="w-5 h-5 text-[#1C7230]" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-[#1C7230]" />;
      default:
        return <Shield className="w-5 h-5 text-[#1C7230]" />;
    }
  };

  return (
    <section id="services" className="py-12 sm:py-16 bg-[#FCFCFC] border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Shomvob Style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1C7230] bg-[#EFF7F1] px-3 py-1 rounded-full mb-2">
              <Wrench className="w-3.5 h-3.5" />
              <span>{lang === 'ENG' ? 'Master Detailing & Care' : 'অটো কেয়ার ও সার্ভিস'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 font-display">
              {lang === 'ENG' ? 'Expert Auto Care & Detailing Services' : 'মাস্টার অটো কেয়ার ও ডিটেইলিং সার্ভিস'}
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">
              {lang === 'ENG'
                ? 'From 9H nano ceramic shields to dust-free spray booth painting in Rajshahi.'
                : '৯এইচ ন্যানো সিরামিক কোটিং থেকে শুরু করে ডাস্ট-ফ্রি স্প্রে বুথ পেইন্টিং।'}
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-gray-100 p-1 rounded-xl border border-gray-200 self-start md:self-auto">
            {[
              { id: 'all', label: lang === 'ENG' ? 'All Services' : 'সকল সার্ভিস' },
              { id: 'restoration', label: lang === 'ENG' ? 'Detailing & Paint' : 'ডিটেইলিং ও পেইন্ট' },
              { id: 'cleaning', label: lang === 'ENG' ? 'Foam Wash & Steam' : 'ওয়াশ ও স্টিম' },
              { id: 'mechanical', label: lang === 'ENG' ? 'Servicing & Scan' : 'সার্ভিসিং ও স্ক্যান' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-[#1C7230] text-white shadow-xs'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="shomvob-card flex flex-col justify-between p-5 group"
            >
              <div>
                {/* Header with Icon & Badge */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#EFF7F1] border border-emerald-100 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1C7230] group-hover:text-white transition-colors duration-300">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <div>
                      {service.badge && (
                        <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#10693B] bg-[#EFF7F1] px-2 py-0.5 rounded-md mb-1">
                          {service.badge}
                        </span>
                      )}
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug group-hover:text-[#1C7230] transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Shomvob Specs Pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="inline-flex items-center gap-1 rounded-md bg-gray-100 px-2.5 py-1 text-xs text-gray-700 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#1C7230]" />
                    <span>{service.duration}</span>
                  </div>

                  <div className="inline-flex items-center gap-1 rounded-md bg-[#EFF7F1] px-2.5 py-1 text-xs text-[#10693B] font-bold">
                    <Tag className="w-3.5 h-3.5 text-[#1C7230]" />
                    <span>{service.startingPrice}</span>
                  </div>
                </div>

                {/* Features Checkpoints */}
                <div className="space-y-1.5 border-t border-gray-100 pt-3">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1C7230] flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Bottom CTA */}
              <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase font-medium">Starting</span>
                  <span className="text-sm sm:text-base font-bold text-[#1C7230]">
                    {service.startingPrice}
                  </span>
                </div>

                <button
                  onClick={() => onSelectServiceToBook(service.id)}
                  className="inline-flex items-center gap-1.5 bg-[#1C7230] hover:bg-[#10693B] text-white px-4 py-2 rounded-lg text-xs font-bold transition shadow-xs cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{lang === 'ENG' ? 'Book Service' : 'বুক করুন'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
