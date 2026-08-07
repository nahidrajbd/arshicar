import React, { useState } from 'react';
import { Phone, MapPin, Mail, Clock, Send, MessageCircle, CheckCircle, Navigation, Car } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('General Service Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#181818] text-white relative border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div>
            <span className="editorial-tag">Visit Showroom & Workshop in Rajshahi</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Contact Us & <span className="font-editorial italic font-normal text-[#C1121F]">Get in Touch</span>
          </h2>
          <p className="text-stone-300 text-base sm:text-lg font-sans">
            Have questions about Japanese car imports, detailing prices, or appointment slots? Contact our team in Sopura Mothpukur, Rajshahi today!
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details & Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#121212] text-white p-8 rounded-3xl border border-stone-800 shadow-2xl space-y-6">
              <div className="border-b border-stone-800 pb-4">
                <h3 className="text-2xl font-bold font-display text-white">
                  Arshi Automobile & Car Hub
                </h3>
                <p className="text-stone-400 text-xs mt-1">Domain: <a href="https://arshicar.com" target="_blank" rel="noopener noreferrer" className="text-[#C1121F] font-bold hover:underline">arshicar.com</a></p>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#C1121F] text-white flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-stone-400">Business Address</h4>
                  <p className="text-sm font-semibold text-white mt-0.5">{COMPANY_INFO.address}</p>
                  <p className="text-xs text-stone-400 mt-0.5">Location: {COMPANY_INFO.location}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#C1121F] text-white flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-stone-400">Direct Call Phone</h4>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-lg font-black text-[#C1121F] hover:underline block mt-0.5">
                    {COMPANY_INFO.phone}
                  </a>
                  <p className="text-xs text-stone-400">Call anytime during working hours</p>
                </div>
              </div>

              {/* WhatsApp Quick Trigger */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-1">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-stone-400">Instant WhatsApp Chat</h4>
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-emerald-400 font-bold text-sm hover:underline mt-1"
                  >
                    <span>Click Here to Chat on WhatsApp</span>
                    <Navigation className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-4 border-t border-stone-800 pt-4">
                <div className="w-10 h-10 rounded-xl bg-stone-800 text-stone-300 flex items-center justify-center shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-stone-400">Business Hours</h4>
                  <p className="text-xs text-stone-300 mt-0.5">{COMPANY_INFO.workingHours}</p>
                </div>
              </div>

              {/* WhatsApp Action Button */}
              <div className="pt-2">
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Connect via WhatsApp</span>
                </a>
              </div>

            </div>
          </div>

          {/* Contact Form & Google Maps */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Contact Form */}
            <div className="bg-[#222222] p-6 sm:p-8 rounded-3xl border border-stone-800 shadow-2xl">
              <h3 className="text-xl font-bold font-display text-white mb-1">
                Send Us a Direct Message
              </h3>
              <p className="text-stone-400 text-xs mb-6 font-sans">
                Fill in your contact info below. Our team in Sopura Mothpukur, Rajshahi will call or message you promptly.
              </p>

              {submitted ? (
                <div className="p-6 bg-emerald-950/80 border border-emerald-800 rounded-2xl text-center space-y-2">
                  <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-emerald-200">Message Sent Successfully!</h4>
                  <p className="text-xs text-emerald-300">
                    Thank you <span className="font-bold text-white">{name}</span>. We received your request regarding <span className="font-bold text-white">{service}</span> and will contact <span className="font-bold text-white">{phone}</span> shortly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setName(''); setMessage(''); }}
                    className="mt-2 text-xs font-bold text-emerald-400 underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 bg-[#121212] border border-stone-800 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C1121F] placeholder-stone-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="01712XXXXXX"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 bg-[#121212] border border-stone-800 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C1121F] placeholder-stone-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1">
                      Service Interest
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-3 bg-[#121212] border border-stone-800 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C1121F]"
                    >
                      <option value="Japanese Reconditioned Car Purchase">Japanese Reconditioned Car Purchase</option>
                      <option value="Car Wash & Polish">Car Wash & Polish</option>
                      <option value="Car Detailing & Ceramic">Car Detailing & Ceramic</option>
                      <option value="Dent & Paint Booth Work">Dent & Paint Booth Work</option>
                      <option value="Car Servicing & Diagnostic">Car Servicing & Diagnostic</option>
                      <option value="Interior / Engine Room Cleaning">Interior / Engine Room Cleaning</option>
                      <option value="General Vehicle Inspection">General Vehicle Inspection</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Write your car model and query details..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 bg-[#121212] border border-stone-800 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C1121F] placeholder-stone-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#C1121F] hover:bg-[#9E0E18] text-white font-extrabold rounded-xl text-xs uppercase tracking-wider transition flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Google Maps Location Card */}
            <div className="bg-[#121212] text-white p-6 rounded-3xl border border-stone-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-[#C1121F]" />
                  <span className="font-bold text-sm font-display">Showroom & Workshop Map Location</span>
                </div>
                <span className="text-xs text-stone-400">Sopura Mothpukur, Rajshahi</span>
              </div>

              {/* Map Canvas Visual */}
              <div className="relative h-64 rounded-2xl overflow-hidden border border-stone-800 bg-stone-900 flex items-center justify-center">
                <iframe
                  title="Arshi Automobile Sopura Mothpukur Rajshahi Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.3751240180!2d88.6010!3d24.3850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbef0000000001%3A0x1000000000000000!2sSopura%20Mothpukur%2C%20Rajshahi!5e0!3m2!1sen!2sbd!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.1)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full opacity-90 hover:opacity-100 transition-opacity"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-3 left-3 right-3 bg-[#1F1F1F]/90 backdrop-blur-md p-3 rounded-xl border border-stone-800 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    <Car className="w-4 h-4 text-[#C1121F]" />
                    <span className="font-bold text-white">Sopura Mothpukur, Rajshahi</span>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Sopura+Mothpukur+Rajshahi+Bangladesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C1121F] font-bold hover:underline"
                  >
                    Open Maps ↗
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
