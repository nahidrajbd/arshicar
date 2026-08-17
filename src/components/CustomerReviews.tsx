import React from 'react';
import { Star, MessageSquare, CheckCircle, Quote, ThumbsUp } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

interface CustomerReviewsProps {
  lang: 'ENG' | 'বাংলা';
}

export const CustomerReviews: React.FC<CustomerReviewsProps> = ({ lang }) => {
  return (
    <section id="reviews" className="py-12 sm:py-16 bg-[#EFF7F1]/30 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1C7230] bg-[#EFF7F1] px-3 py-1 rounded-full mb-2">
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>{lang === 'ENG' ? 'Verified Client Feedback' : 'গ্রাহক পর্যালোচনা ও সন্তুষ্টি'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 font-display">
            {lang === 'ENG' ? 'What Rajshahi Car Owners Say' : 'রাজশাহীর গাড়ি মালিকদের মতামত'}
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            {lang === 'ENG'
              ? 'Real feedback from car buyers, detailing clients, and regular servicing visitors.'
              : 'প্রকৃত গ্রাহকদের অভিজ্ঞতা ও আমাদের কাজের নির্ভরযোগ্যতার প্রমাণ।'}
          </p>
        </div>

        {/* 3 Testimonials Grid (Shomvob Card Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="shomvob-card p-5 sm:p-6 flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#EDB713] text-[#EDB713]" />
                  ))}
                  <span className="text-xs font-bold text-gray-800 ml-1.5">5.0</span>
                </div>

                {/* Comment */}
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed italic">
                  "{review.comment}"
                </p>

                {/* Service Tag */}
                <div className="pt-1">
                  <span className="inline-block text-[11px] font-semibold text-[#10693B] bg-[#EFF7F1] px-2.5 py-1 rounded-md">
                    {review.serviceTaken}
                  </span>
                </div>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{review.name}</h4>
                  <p className="text-[11px] text-gray-500">{review.location}</p>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-medium text-[#1C7230] block">{review.carModel}</span>
                  <span className="text-[10px] text-gray-400">{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
