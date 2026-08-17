import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Eye, Car, Wrench, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-cars.jpg";
import { COMPANY_INFO } from "@/data/company";

export const Hero = () => {
  const handleCallNow = () => {
    window.open(`tel:${COMPANY_INFO.phone}`, '_self');
  };

  const handleWhatsApp = () => {
    window.open(COMPANY_INFO.whatsappUrl, '_blank');
  };

  const handleViewCars = () => {
    const carsSection = document.getElementById('cars-section');
    carsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewServices = () => {
    const servicesSection = document.getElementById('services-section');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden py-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Arshi Automobile & Car Hub Showroom & Service Center" 
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 text-primary border border-primary/30 text-xs sm:text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Japanese Reconditioned Cars & Master Auto Care Studio</span>
          </div>

          {/* Logo and Brand Name */}
          <div className="flex flex-col items-center mb-4">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center mb-4 shadow-lg">
              <Car className="w-9 h-9 md:w-11 md:h-11 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-wide">
              {COMPANY_INFO.name}
            </h1>
          </div>
          
          {/* Tagline */}
          <h2 className="hero-title mb-6 leading-tight">
            {COMPANY_INFO.tagline}
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-4 font-medium">
            {COMPANY_INFO.location}, Bangladesh
          </p>

          <p className="text-sm md:text-base text-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Your comprehensive automobile destination in Rajshahi for verified Japanese auction cars, 9H nano ceramic detailing, spray booth dent-paint, and computerized servicing under one roof.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3.5 justify-center items-center">
            <Button 
              onClick={handleViewCars}
              className="btn-hero text-sm sm:text-base px-6 py-3.5"
            >
              <Eye className="mr-2 h-4 w-4" />
              Available Cars
            </Button>

            <Button 
              onClick={handleViewServices}
              className="btn-secondary text-sm sm:text-base px-6 py-3.5"
            >
              <Wrench className="mr-2 h-4 w-4 text-primary" />
              Auto Care Services
            </Button>
            
            <Button 
              onClick={handleCallNow}
              className="btn-hero text-sm sm:text-base px-6 py-3.5"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
            
            <Button 
              onClick={handleWhatsApp}
              className="btn-outline text-sm sm:text-base px-6 py-3.5"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp Us
            </Button>
          </div>

          {/* Contact Number */}
          <div className="mt-8 flex justify-center items-center text-sm text-muted-foreground">
            <a 
              href={`tel:${COMPANY_INFO.phone}`} 
              className="flex items-center gap-2 hover:text-primary transition-colors font-medium bg-card/60 px-4 py-2 rounded-full border border-border"
            >
              <Phone className="h-4 w-4 text-primary" />
              <span>{COMPANY_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
