import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { CarShowcase } from './components/CarShowcase';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CustomerReviews } from './components/CustomerReviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { CarDetailModal } from './components/CarDetailModal';
import { FloatingControls } from './components/FloatingControls';
import { ReconditionedCar } from './types';

export default function App() {
  const [lang, setLang] = useState<'ENG' | 'বাংলা'>('ENG');

  // Modals state
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | undefined>(undefined);
  const [preselectedCarTitle, setPreselectedCarTitle] = useState<string | undefined>(undefined);

  const [selectedCarForModal, setSelectedCarForModal] = useState<ReconditionedCar | null>(null);
  const [carDetailModalOpen, setCarDetailModalOpen] = useState(false);

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'ENG' ? 'বাংলা' : 'ENG'));
  };

  const handleOpenBooking = (serviceId?: string) => {
    setPreselectedServiceId(serviceId);
    setPreselectedCarTitle(undefined);
    setBookingModalOpen(true);
  };

  const handleInquireCar = (carTitle: string) => {
    setPreselectedCarTitle(carTitle);
    setPreselectedServiceId('reconditioned-cars');
    setBookingModalOpen(true);
  };

  const handleViewCarDetails = (car: ReconditionedCar) => {
    setSelectedCarForModal(car);
    setCarDetailModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FCFCFC] text-gray-900 font-sans selection:bg-[#1C7230] selection:text-white">
      {/* 1. Header & Navbar (Shomvob Style) */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        lang={lang}
        onToggleLang={handleToggleLang}
      />

      <main>
        {/* 2. Hero Section */}
        <Hero
          onOpenBooking={handleOpenBooking}
          lang={lang}
        />

        {/* 3. Static 6 Reconditioned Cars Showcase */}
        <CarShowcase
          onInquireCar={handleInquireCar}
          onViewCarDetails={handleViewCarDetails}
          lang={lang}
        />

        {/* 4. Auto Care & Detailing Services */}
        <Services
          onSelectServiceToBook={handleOpenBooking}
          lang={lang}
        />

        {/* 5. Why Choose Us */}
        <WhyChooseUs lang={lang} />

        {/* 6. About Us */}
        <AboutUs
          lang={lang}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 7. Verified Customer Reviews */}
        <CustomerReviews lang={lang} />

        {/* 8. Contact & Sopura Location */}
        <Contact lang={lang} />
      </main>

      {/* 9. Shomvob Multi-Column Footer */}
      <Footer
        onOpenBooking={handleOpenBooking}
        lang={lang}
      />

      {/* Floating WhatsApp & Scroll Controls */}
      <FloatingControls />

      {/* Car Details Modal Dialog */}
      <CarDetailModal
        car={selectedCarForModal}
        isOpen={carDetailModalOpen}
        onClose={() => setCarDetailModalOpen(false)}
        onInquire={handleInquireCar}
      />

      {/* Service & Car Inquiry Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedServiceId={preselectedServiceId}
        preselectedCarTitle={preselectedCarTitle}
        lang={lang}
      />
    </div>
  );
}
