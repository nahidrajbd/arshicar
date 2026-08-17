import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, CheckCircle2, Calendar } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface ContactProps {
  lang: 'ENG' | 'বাংলা';
}

export const Contact: React.FC<ContactProps> = ({ lang }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    topic: 'car_inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Auto reset after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', topic: 'car_inquiry', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 bg-[#FCFCFC] border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1C7230] bg-[#EFF7F1] px-3 py-1 rounded-full mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>{lang === 'ENG' ? 'Get In Touch' : 'যোগাযোগ ও অবস্থান'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 font-display">
            {lang === 'ENG' ? 'Visit Our Showroom & Service Bay' : 'সরাসরি আমাদের শোরুম ও ওয়ার্কশপে আসুন'}
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            {lang === 'ENG'
              ? 'Conveniently located at Sopura Mothpukur, Rajshahi with dedicated parking.'
              : 'রাজশাহীর সোপুরা মঠপুকুরে আমাদের নিজস্ব শোরুম ও সুপরিসর সার্ভিস বে।'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Location Card */}
            <div className="shomvob-card p-5">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#EFF7F1] flex items-center justify-center flex-shrink-0 text-[#1C7230]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">{lang === 'ENG' ? 'Address & Location' : 'ঠিকানা'}</h3>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">{COMPANY_INFO.address}</p>
                  <a
                    href={COMPANY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs font-bold text-[#1C7230] hover:underline mt-2"
                  >
                    {lang === 'ENG' ? 'View on Google Maps →' : 'গুগল ম্যাপে দেখুন →'}
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Phone & WhatsApp */}
            <div className="shomvob-card p-5">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#EFF7F1] flex items-center justify-center flex-shrink-0 text-[#1C7230]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">{lang === 'ENG' ? 'Phone & WhatsApp' : 'ফোন ও হোয়াটসঅ্যাপ'}</h3>
                  <p className="text-xs text-gray-600 mt-0.5">Call our auto consultants directly:</p>
                  <div className="flex items-center gap-3 mt-2">
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="text-sm font-bold text-[#1C7230] hover:underline"
                    >
                      {COMPANY_INFO.phoneFormatted}
                    </a>
                    <a
                      href={COMPANY_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-2xs hover:bg-[#20bd5a] transition"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="shomvob-card p-5">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#EFF7F1] flex items-center justify-center flex-shrink-0 text-[#1C7230]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">{lang === 'ENG' ? 'Operating Hours' : 'কার্যকাল'}</h3>
                  <p className="text-xs text-gray-600 mt-1">{COMPANY_INFO.workingHours}</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-1 font-display">
              {lang === 'ENG' ? 'Send a Direct Message' : 'আমাদের সরাসরি বার্তা পাঠান'}
            </h3>
            <p className="text-xs text-gray-500 mb-5">
              {lang === 'ENG'
                ? 'Have a question about a reconditioned car or detailing package? We will reply within 30 minutes.'
                : 'গাড়ি বা কোনো সার্ভিসিং সংক্রান্ত প্রশ্ন থাকলে ফর্মটি পূরণ করুন, আমরা দ্রুত যোগাযোগ করব।'}
            </p>

            {submitted ? (
              <div className="bg-[#EFF7F1] border border-[#28A143]/30 rounded-xl p-6 text-center space-y-2 animate-fadeIn">
                <CheckCircle2 className="w-10 h-10 text-[#1C7230] mx-auto" />
                <h4 className="font-bold text-gray-900 text-base">
                  {lang === 'ENG' ? 'Thank you! Message Received.' : 'ধন্যবাদ! আপনার বার্তাটি পেয়েছি।'}
                </h4>
                <p className="text-xs text-gray-600">
                  {lang === 'ENG'
                    ? 'Our team will call you back shortly at your provided phone number.'
                    : 'আমাদের প্রতিনিধি খুব শীঘ্রই আপনার মোবাইল নম্বরে যোগাযোগ করবেন।'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-700 block mb-1">
                      {lang === 'ENG' ? 'Your Full Name *' : 'আপনার পুরো নাম *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Tanvir Ahmed"
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-[#1C7230] outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-700 block mb-1">
                      {lang === 'ENG' ? 'Mobile Number *' : 'মোবাইল নম্বর *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="017XXXXXXXX"
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-[#1C7230] outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">
                    {lang === 'ENG' ? 'Inquiry Topic' : 'বিষয়'}
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-[#1C7230] outline-none transition cursor-pointer"
                  >
                    <option value="car_inquiry">Japanese Reconditioned Car Purchase</option>
                    <option value="ceramic_coating">9H Ceramic Detailing Package</option>
                    <option value="dent_paint">Spray Booth Dent & Paint Repair</option>
                    <option value="periodic_service">Periodic Maintenance & Servicing</option>
                    <option value="pre_purchase_inspection">150-Point Pre-Purchase Car Inspection</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">
                    {lang === 'ENG' ? 'Your Message or Car Model Details' : 'বার্তা বা গাড়ির বিবরণ'}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you are looking for..."
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-[#1C7230] outline-none transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1C7230] hover:bg-[#10693B] text-white font-bold text-xs sm:text-sm py-3 rounded-xl transition shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{lang === 'ENG' ? 'Submit Inquiry' : 'বার্তা পাঠান'}</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
