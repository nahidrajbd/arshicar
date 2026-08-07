import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/mockData';
import { ServiceItem } from '../types';
import { Icon } from './Icon';
import { ArrowRight, CheckCircle2, Clock, Tag, Search, Sparkles, Filter } from 'lucide-react';

interface ServicesProps {
  onSelectServiceToBook: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceToBook }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'sales', label: 'Car Sales' },
    { id: 'cleaning', label: 'Car Wash & Cleaning' },
    { id: 'restoration', label: 'Detailing, Polish & Paint' },
    { id: 'mechanical', label: 'Servicing & Inspection' },
  ];

  const filteredServices = SERVICES_LIST.filter((service) => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-20 bg-[#121212] text-white relative border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div>
            <span className="editorial-tag">Specialized Automotive Services</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Our Business <span className="font-editorial italic font-normal text-[#C1121F]">Services</span>
          </h2>
          <p className="text-stone-300 text-base sm:text-lg font-sans">
            From importing high-grade Japanese reconditioned vehicles to deep detailing and precision paintwork, we offer complete car care under one roof in Rajshahi.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 bg-[#1E1E1E] p-4 rounded-2xl shadow-xl border border-stone-800">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-[#C1121F] text-white shadow-sm'
                    : 'bg-[#2A2A2A] text-stone-300 hover:bg-stone-800 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-stone-400" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-[#121212] border border-stone-800 rounded-xl focus:ring-2 focus:ring-[#C1121F] focus:outline-none text-white font-medium placeholder-stone-500"
            />
          </div>

        </div>

        {/* Services Grid (9 Requested Services) */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-[#1E1E1E] rounded-3xl overflow-hidden border border-stone-800 shadow-xl hover:shadow-2xl hover:border-[#C1121F]/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image & Icon Overlay */}
                <div className="relative h-48 overflow-hidden bg-stone-900">
                  <img
                    src={service.image}
                    alt={`${service.title} - Arshi Automobile Rajshahi`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] via-black/30 to-transparent" />

                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-[#C1121F] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Icon name={service.iconName} className="w-6 h-6 text-white" />
                  </div>

                  {/* Pricing tag */}
                  <div className="absolute bottom-3 right-3 bg-stone-900/90 text-white backdrop-blur-md px-3 py-1 rounded-xl text-xs font-extrabold border border-stone-700 flex items-center space-x-1">
                    <Tag className="w-3 h-3 text-[#C1121F]" />
                    <span>{service.startingPrice}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-stone-400 font-semibold">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-stone-400" />
                      <span>{service.duration}</span>
                    </span>
                    <span className="uppercase text-[10px] tracking-wider bg-[#2A2A2A] text-stone-300 px-2.5 py-0.5 rounded-full font-bold">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-white group-hover:text-[#C1121F] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-stone-300 text-xs leading-relaxed font-sans line-clamp-2">
                    {service.shortDesc}
                  </p>

                  {/* Feature Highlights */}
                  <ul className="space-y-1.5 pt-2">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs text-stone-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C1121F] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-6 pt-0 border-t border-stone-800 flex items-center gap-2 mt-4">
                <button
                  onClick={() => setSelectedServiceForModal(service)}
                  className="flex-1 py-2.5 px-3 bg-[#2A2A2A] hover:bg-stone-800 text-stone-200 rounded-xl text-xs font-bold transition text-center"
                >
                  View Details
                </button>
                <button
                  onClick={() => onSelectServiceToBook(service.id)}
                  className="flex-1 py-2.5 px-3 bg-[#C1121F] hover:bg-[#9E0E18] text-white rounded-xl text-xs font-bold transition flex items-center justify-center space-x-1 shadow-md"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Empty Search State */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12 bg-[#1E1E1E] rounded-3xl border border-stone-800 mt-8 space-y-3">
            <p className="text-stone-400 font-medium text-sm">No services matched your query "{searchQuery}".</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="text-xs font-bold text-[#C1121F] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Service Details Modal Popup */}
      {selectedServiceForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl border border-stone-200 max-h-[90vh] overflow-y-auto space-y-6">
            <button
              onClick={() => setSelectedServiceForModal(null)}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-900 bg-stone-100 rounded-full"
            >
              ✕
            </button>

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#C1121F] text-white rounded-2xl flex items-center justify-center">
                <Icon name={selectedServiceForModal.iconName} className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#C1121F] uppercase tracking-wider">{selectedServiceForModal.category}</span>
                <h3 className="text-2xl font-bold font-display text-stone-900">{selectedServiceForModal.title}</h3>
              </div>
            </div>

            <img
              src={selectedServiceForModal.image}
              alt={selectedServiceForModal.title}
              className="w-full h-56 object-cover rounded-2xl border border-stone-200"
              referrerPolicy="no-referrer"
            />

            <p className="text-stone-700 text-sm leading-relaxed">{selectedServiceForModal.fullDesc}</p>

            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-2">
              <h4 className="font-bold text-xs uppercase tracking-wider text-stone-800">What’s Included:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                {selectedServiceForModal.features.map((f, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C1121F]" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-stone-200 pt-4">
              <div>
                <div className="text-xs text-stone-500">Starting Price</div>
                <div className="text-xl font-black font-display text-[#C1121F]">{selectedServiceForModal.startingPrice}</div>
              </div>
              <button
                onClick={() => {
                  const sId = selectedServiceForModal.id;
                  setSelectedServiceForModal(null);
                  onSelectServiceToBook(sId);
                }}
                className="px-6 py-3 bg-[#C1121F] hover:bg-[#9E0E18] text-white font-bold rounded-xl text-sm transition shadow-lg"
              >
                Book This Service
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
