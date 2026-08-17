import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageSquare, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const FloatingControls: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-2.5">
      {/* WhatsApp Quick Connect Button */}
      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-110 group relative"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="absolute right-14 bg-stone-900 text-white text-xs font-semibold px-2.5 py-1 rounded-md shadow whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 bg-white hover:bg-gray-100 text-[#1C7230] border border-gray-200 rounded-full shadow-md flex items-center justify-center transition-all hover:scale-105 cursor-pointer animate-fadeIn"
          title="Scroll to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};
