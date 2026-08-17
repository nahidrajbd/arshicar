import React from 'react';
import { ShieldCheck, Award, Wrench, Tag, CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/mockData';

interface WhyChooseUsProps {
  lang: 'ENG' | 'বাংলা';
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ lang }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#1C7230]" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-[#1C7230]" />;
      case 'Tag':
        return <Tag className="w-6 h-6 text-[#1C7230]" />;
      case 'Award':
        return <Award className="w-6 h-6 text-[#1C7230]" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-[#1C7230]" />;
    }
  };

  return (
    <section id="why-us" className="py-12 sm:py-16 bg-[#FCFCFC] border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1C7230] bg-[#EFF7F1] px-3 py-1 rounded-full mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>{lang === 'ENG' ? 'Trusted by 5,000+ Car Owners' : '৫,০০০+ গাড়ি মালিকের বিশ্বস্ত সঙ্গী'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 font-display">
            {lang === 'ENG' ? 'Why Choose Arshi Automobile?' : 'কেন আরশি অটোমোবাইল বেছে নেবেন?'}
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            {lang === 'ENG'
              ? 'Setting the benchmark for automobile sales and master detailing in Rajshahi.'
              : 'রাজশাহীতে আধুনিক গাড়ি বিক্রয় ও সর্বোচ্চ মানের অটো কেয়ার সেবার নিশ্চয়তা।'}
          </p>
        </div>

        {/* 4-Grid Cards (Shomvob Feature Card Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="shomvob-card p-5 sm:p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EFF7F1] flex items-center justify-center group-hover:bg-[#1C7230] group-hover:text-white transition-colors duration-300">
                    {getIcon(item.iconName)}
                  </div>
                  {item.statBadge && (
                    <span className="text-[11px] font-bold text-[#10693B] bg-[#EFF7F1] px-2.5 py-1 rounded-md">
                      {item.statBadge}
                    </span>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-[#1C7230] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
