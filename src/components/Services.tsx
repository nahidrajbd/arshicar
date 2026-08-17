import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wrench, Phone, MessageCircle, CheckCircle2, Clock, Sparkles } from "lucide-react";
import { AUTO_SERVICES, AutoServiceItem } from "@/data/services";
import { COMPANY_INFO } from "@/data/company";

export const Services = () => {
  const handleBookService = (serviceTitle: string) => {
    const message = `Hello ${COMPANY_INFO.name}, I would like to book an appointment for: ${serviceTitle}. Please share available slots and estimates.`;
    const whatsappUrl = `https://wa.me/88${COMPANY_INFO.phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    window.open(`tel:${COMPANY_INFO.phone}`, '_self');
  };

  return (
    <section id="services-section" className="py-20 bg-card/40 border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/25 text-xs font-bold uppercase tracking-wider mb-4">
            <Wrench className="w-3.5 h-3.5" />
            Master Auto Care & Detailing Studio
          </div>
          <h2 className="section-title mb-4">Auto Care & Workshop Services</h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            From 9H nano ceramic paint protection and touchless snow foam washing to heated booth dent-paint and computerized diagnostics—we keep your car performing and looking brand new.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AUTO_SERVICES.map((service: AutoServiceItem) => (
            <div key={service.id} className="car-card group flex flex-col justify-between">
              <div>
                {/* Service Image Banner */}
                <div className="relative overflow-hidden rounded-lg mb-4 bg-muted/40 aspect-[16/10]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <Badge className="absolute top-3 left-3 bg-secondary/90 text-secondary-foreground font-semibold px-2.5 py-0.5 border border-border backdrop-blur-sm">
                    {service.category}
                  </Badge>
                  {service.badge && (
                    <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground font-semibold px-2.5 py-0.5">
                      {service.badge}
                    </Badge>
                  )}
                  <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-md text-xs font-bold border border-white/20">
                    Starts: {service.startingPrice}
                  </div>
                </div>

                {/* Service Details */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-foreground line-clamp-1">{service.title}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground pt-1 pb-1">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    <span>Estimated Time: <strong className="text-foreground">{service.duration}</strong></span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-1.5 pt-2 border-t border-border/50">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-start gap-1.5 text-xs text-foreground/85">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-6 mt-auto">
                <Button
                  onClick={() => handleBookService(service.title)}
                  className="btn-secondary flex-1 text-xs sm:text-sm py-2.5"
                >
                  <MessageCircle className="mr-1.5 h-4 w-4" />
                  Book Service
                </Button>
                <Button
                  onClick={handleCall}
                  className="btn-outline px-3"
                  aria-label="Call Service Advisor"
                  title="Call Service Advisor"
                >
                  <Phone className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Equipment Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-card border border-border/80 text-center max-w-4xl mx-auto shadow-card">
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-xs sm:text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-2 text-foreground font-semibold">
              <Sparkles className="w-4 h-4 text-primary" /> Italian High-Pressure Washers
            </span>
            <span className="flex items-center gap-2 text-foreground font-semibold">
              <Sparkles className="w-4 h-4 text-primary" /> Infrared Heated Paint Booth
            </span>
            <span className="flex items-center gap-2 text-foreground font-semibold">
              <Sparkles className="w-4 h-4 text-primary" /> Autel Live OBD-II Diagnostic Scanner
            </span>
          </div>
          <p className="text-xs text-muted-foreground mb-5">
            Visit our Sopura Mothpukur facility or book in advance to skip the queue.
          </p>
          <Button
            onClick={() => handleBookService("General Workshop & Detailing Booking")}
            className="btn-hero text-sm"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Book Your Car Care Slot on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};
