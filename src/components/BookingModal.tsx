import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Calendar, Phone, User, Car, Clock, FileText, Send } from 'lucide-react';
import { SERVICES_LIST, COMPANY_INFO } from '../data/mockData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
  preselectedCarTitle?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
  preselectedCarTitle
}) => {
  const [serviceId, setServiceId] = useState(preselectedServiceId || SERVICES_LIST[0].id);
  const [carTitle, setCarTitle] = useState(preselectedCarTitle || '');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('10:00 AM');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (preselectedServiceId) {
      setServiceId(preselectedServiceId);
    }
    if (preselectedCarTitle) {
      setCarTitle(preselectedCarTitle);
    }
  }, [preselectedServiceId, preselectedCarTitle]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent, viaWhatsApp: boolean = false) => {
    e.preventDefault();
    const selectedService = SERVICES_LIST.find(s => s.id === serviceId);
    const serviceName = preselectedCarTitle ? `Inquiry: ${preselectedCarTitle}` : (selectedService?.title || 'General Service');

    if (viaWhatsApp) {
      const msg = `Hello Arshi Automobile! I want to book a service:\n\n*Name:* ${fullName || 'Valued Customer'}\n*Phone:* ${phone || 'Not provided'}\n*Service/Car:* ${serviceName}\n*Vehicle:* ${carTitle || 'General'}\n*Date:* ${preferredDate || 'Earliest Available'}\n*Time:* ${preferredTime}\n*Notes:* ${notes || 'None'}`;
      const encoded = encodeURIComponent(msg);
      window.open(`https://wa.me/8801712110902?text=${encoded}`, '_blank');
    }

    const ref = `ARSHI-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs transition-opacity duration-300">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-stone-100 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#1F1F1F] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-stone-400 hover:text-white bg-stone-800 hover:bg-stone-700 p-2 rounded-full transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-2 text-[#C1121F] font-bold text-xs uppercase tracking-wider mb-1">
            <span className="w-2 h-2 rounded-full bg-[#C1121F] animate-ping" />
            <span>Quick Appointment & Inquiry</span>
          </div>
          <h3 className="text-2xl font-bold font-display text-white">
            {preselectedCarTitle ? `Inquire: ${preselectedCarTitle}` : 'Book Vehicle Care Service'}
          </h3>
          <p className="text-stone-300 text-sm mt-1">
            Rajshahi's premier automotive workshop & dealership. Fast confirmation!
          </p>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-stone-900 font-display">Service Request Received!</h4>
              <p className="text-stone-600 text-sm max-w-md mx-auto">
                Thank you, <span className="font-semibold text-stone-900">{fullName || 'Valued Customer'}</span>. Your booking reference is <span className="font-mono font-bold text-[#C1121F] bg-red-50 px-2 py-1 rounded">{bookingRef}</span>.
              </p>
              <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-left text-sm text-stone-700 space-y-1">
                <p><strong>Hotline:</strong> {COMPANY_INFO.phone}</p>
                <p><strong>Location:</strong> {COMPANY_INFO.location}</p>
                <p><strong>Service:</strong> {SERVICES_LIST.find(s => s.id === serviceId)?.title || 'Selected Service'}</p>
                <p><strong>Date & Time:</strong> {preferredDate || 'As arranged'} at {preferredTime}</p>
              </div>
              <p className="text-xs text-stone-500">
                Our representative will call your phone number (<span className="font-semibold">{phone}</span>) within 30 minutes to confirm appointment details.
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 bg-[#C1121F] text-white font-semibold rounded-xl hover:bg-[#9E0E18] transition shadow-md"
                >
                  Close & Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-4">
              {/* Service selection */}
              {!preselectedCarTitle && (
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                    Select Service *
                  </label>
                  <select
                    value={serviceId}
                    onChange={(e) => setServiceId(e.target.value)}
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-[#C1121F] focus:outline-none text-stone-900 font-medium text-sm"
                    required
                  >
                    {SERVICES_LIST.map((srv) => (
                      <option key={srv.id} value={srv.id}>
                        {srv.title} ({srv.startingPrice})
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Md. Rahat Khan"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-9 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-[#C1121F] focus:outline-none text-sm text-stone-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                    <input
                      type="tel"
                      required
                      placeholder="01712XXXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-[#C1121F] focus:outline-none text-sm text-stone-900"
                    />
                  </div>
                </div>
              </div>

              {/* Vehicle Model & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                    Vehicle Model
                  </label>
                  <div className="relative">
                    <Car className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                    <input
                      type="text"
                      placeholder="e.g. Toyota Premio 2018"
                      value={carTitle}
                      onChange={(e) => setCarTitle(e.target.value)}
                      className="w-full pl-9 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-[#C1121F] focus:outline-none text-sm text-stone-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full pl-9 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-[#C1121F] focus:outline-none text-sm text-stone-900"
                    />
                  </div>
                </div>
              </div>

              {/* Time slot & Notes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                    Preferred Time
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-[#C1121F] focus:outline-none text-xs font-medium text-stone-900"
                    >
                      <option value="09:00 AM">09:00 AM</option>
                      <option value="10:30 AM">10:30 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="03:00 PM">03:00 PM</option>
                      <option value="05:00 PM">05:00 PM</option>
                      <option value="07:00 PM">07:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                    Special Notes / Issue
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                    <input
                      type="text"
                      placeholder="e.g. Need dent repair on left door"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full pl-9 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-[#C1121F] focus:outline-none text-sm text-stone-900"
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-[#C1121F] text-white font-bold rounded-xl hover:bg-[#9E0E18] transition flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Booking Request</span>
                </button>

                <button
                  type="button"
                  onClick={(e) => handleSubmit(e, true)}
                  className="w-full py-3 px-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
                >
                  <span className="text-lg font-bold">💬</span>
                  <span>Book via WhatsApp</span>
                </button>
              </div>

              <p className="text-center text-xs text-stone-400 pt-1">
                🔒 Your contact details are secure. Or call directly: <a href="tel:01712110902" className="text-[#C1121F] font-bold hover:underline">01712110902</a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
