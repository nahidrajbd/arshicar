import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { CarShowcase } from './components/CarShowcase';
import { CostCalculator } from './components/CostCalculator';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { CustomerReviews } from './components/CustomerReviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingControls } from './components/FloatingControls';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | undefined>(undefined);
  const [preselectedCarTitle, setPreselectedCarTitle] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceId?: string) => {
    setPreselectedServiceId(serviceId);
    setPreselectedCarTitle(undefined);
    setBookingModalOpen(true);
  };

  const handleInquireCar = (carTitle: string) => {
    setPreselectedCarTitle(carTitle);
    setPreselectedServiceId(undefined);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-stone-100 font-sans selection:bg-[#C1121F] selection:text-white">
      {/* Sticky Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main>
        {/* 1. Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. About Us */}
        <AboutUs />

        {/* 3. Our Services */}
        <Services onSelectServiceToBook={handleOpenBooking} />

        {/* Japanese Reconditioned Cars Showcase */}
        <CarShowcase onInquireCar={handleInquireCar} />

        {/* Service Package Cost Estimator */}
        <CostCalculator />

        {/* 4. Why Choose Us */}
        <WhyChooseUs />

        {/* 5. Gallery */}
        <Gallery />

        {/* 6. Customer Reviews */}
        <CustomerReviews />

        {/* 7. Contact */}
        <Contact />
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* Floating controls (WhatsApp + Scroll to top) */}
      <FloatingControls />

      {/* Booking / Inquiry Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedServiceId={preselectedServiceId}
        preselectedCarTitle={preselectedCarTitle}
      />
    </div>
  );
}
