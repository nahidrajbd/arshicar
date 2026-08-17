import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Car, Phone, User, CheckCircle2, MessageSquare, ShieldCheck, Tag } from 'lucide-react';
import { SERVICES_LIST, COMPANY_INFO } from '../data/mockData';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
  preselectedCarTitle?: string;
  lang?: 'ENG' | 'বাংলা';
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
  preselectedCarTitle,
  lang = 'ENG',
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    serviceId: preselectedServiceId || 'car-wash',
    carMakeModel: preselectedCarTitle || '',
    preferredDate: '',
    preferredTime: '10:00 AM',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: preselectedServiceId }));
    }
    if (preselectedCarTitle) {
      setFormData((prev) => ({
        ...prev,
        serviceId: 'reconditioned-cars',
        carMakeModel: preselectedCarTitle,
        notes: `Inquiry regarding ${preselectedCarTitle}`,
      }));
    }
  }, [preselectedServiceId, preselectedCarTitle]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  const selectedService = SERVICES_LIST.find((s) => s.id === formData.serviceId);

  const directWhatsAppUrl = `https://wa.me/8801712110902?text=Hello%20Arshi%20Automobile,%20I%20want%20to%20book%20service:%20${encodeURIComponent(
    selectedService?.title || 'Auto Care'
  )}%20for%20my%20car:%20${encodeURIComponent(formData.carMakeModel || 'My Car')}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-fadeIn border border-gray-100">
        {/* Modal Header */}
        <div className="bg-[#1C7230] text-white p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
              <Calendar className="w-5 h-5 text-[#EDB713]" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold font-display text-white">
                {preselectedCarTitle ? 'Showroom Inquiry & Visit' : 'Book Auto Care Service'}
              </h2>
              <p className="text-xs text-emerald-100">
                Sopura Mothpukur, Rajshahi Workshop Bay
              </p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="text-white/80 hover:text-white p-2 rounded-lg hover:bg-white/10 transition cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#EFF7F1] text-[#1C7230] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 font-display">
                  Booking Request Received!
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 max-w-sm mx-auto mt-1 leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Our service advisor in Sopura, Rajshahi will contact you at <strong>{formData.phone}</strong> to confirm your appointment.
                </p>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Confirmation on WhatsApp</span>
                </a>
                <button
                  onClick={handleResetAndClose}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold py-2.5 px-4 rounded-xl transition cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service Selection */}
              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1 uppercase tracking-wider">
                  Service / Inquiry *
                </label>
                <select
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-[#1C7230] outline-none transition cursor-pointer font-medium"
                >
                  <option value="reconditioned-cars">Japanese Reconditioned Car Purchase</option>
                  {SERVICES_LIST.map((srv) => (
                    <option key={srv.id} value={srv.id}>
                      {srv.title} ({srv.startingPrice})
                    </option>
                  ))}
                </select>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tanvir Ahmed"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-[#1C7230] outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">
                    Mobile Phone *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="017XXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-[#1C7230] outline-none transition"
                    />
                  </div>
                </div>
              </div>

              {/* Vehicle Model & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">
                    Car Model / Year
                  </label>
                  <div className="relative">
                    <Car className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Premio 2019"
                      value={formData.carMakeModel}
                      onChange={(e) => setFormData({ ...formData, carMakeModel: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-[#1C7230] outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-[#1C7230] outline-none transition"
                  />
                </div>
              </div>

              {/* Special Instructions */}
              <div>
                <label className="text-xs font-semibold text-gray-700 block mb-1">
                  Additional Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="Any specific issues or requests..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-[#1C7230] outline-none transition"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#1C7230] hover:bg-[#10693B] text-white font-bold text-xs sm:text-sm py-3.5 rounded-xl transition shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Confirm Appointment Request</span>
              </button>

              <div className="text-center">
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#25D366] font-semibold hover:underline"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Or book instantly via WhatsApp</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
