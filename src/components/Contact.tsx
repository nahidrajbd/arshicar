import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin, Clock, Mail, Star, ExternalLink } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export const Contact = () => {
  const handleCall = (number: string) => {
    window.open(`tel:${number}`, '_self');
  };

  const handleWhatsApp = (number: string) => {
    window.open(`https://wa.me/88${number}?text=Hello%20Arshi%20Automobile,%20I%20am%20interested%20in%20your%20cars/services`, '_blank');
  };

  const handleDirections = () => {
    window.open(COMPANY_INFO.googleMapsUrl, '_blank');
  };

  const handleGoogleReview = () => {
    window.open(COMPANY_INFO.googleReviewUrl, '_blank');
  };

  return (
    <section id="contact-section" className="py-20 bg-secondary/10 border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Contact Us</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to find your ideal Japanese car or book a showroom visit in Rajshahi? Get in touch with our team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact Information Cards */}
          <div className="space-y-6">
            {/* Phone & WhatsApp */}
            <div className="feature-card text-left p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Call & WhatsApp</h3>
                  <p className="text-xs text-muted-foreground">Direct Hotline Support</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-background/60 rounded-xl border border-border gap-3">
                  <span className="text-lg font-bold text-foreground">📞 {COMPANY_INFO.phoneFormatted}</span>
                  <div className="flex gap-2">
                    <Button 
                      onClick={() => handleCall(COMPANY_INFO.phone)}
                      size="sm"
                      className="btn-secondary"
                    >
                      Call
                    </Button>
                    <Button 
                      onClick={() => handleWhatsApp(COMPANY_INFO.phone)}
                      size="sm"
                      className="btn-outline"
                    >
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Location & Showroom */}
            <div className="feature-card text-left p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Visit Our Showroom</h3>
                  <p className="text-xs text-muted-foreground">Sopura Mothpukur, Rajshahi</p>
                </div>
              </div>
              
              <p className="text-sm md:text-base text-foreground/90 mb-5 leading-relaxed">
                <strong className="text-foreground">{COMPANY_INFO.name}</strong><br />
                {COMPANY_INFO.address}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-2.5">
                <Button 
                  onClick={handleDirections}
                  className="btn-outline flex-1"
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Showroom Directions
                </Button>
                <Button 
                  onClick={handleGoogleReview}
                  className="btn-secondary flex-1"
                >
                  <Star className="mr-2 h-4 w-4 fill-current text-amber-400" />
                  Review on Google
                </Button>
              </div>
            </div>

            {/* Business Hours */}
            <div className="feature-card text-left p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Business Hours</h3>
                  <p className="text-xs text-muted-foreground">Showroom & Workshop Timing</p>
                </div>
              </div>
              
              <div className="space-y-2.5 text-sm text-muted-foreground">
                <div className="flex justify-between border-b border-border/40 pb-2">
                  <span>{COMPANY_INFO.workingHoursWeekday.split(':')[0]}:</span>
                  <span className="text-foreground font-semibold">8:30 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-border/40 pb-2">
                  <span>{COMPANY_INFO.workingHoursFriday.split(':')[0]}:</span>
                  <span className="text-foreground font-semibold">2:30 PM - 9:00 PM</span>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-xs text-center text-primary font-semibold">
                    📞 24/7 WhatsApp Hotline: {COMPANY_INFO.phoneFormatted}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact & WhatsApp Action */}
          <div className="feature-card text-left flex flex-col justify-between p-6 sm:p-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Quick Vehicle Inquiry</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Looking for Japanese auction sheets, pricing breakdown, or trade-in valuation? WhatsApp is our fastest response channel.
              </p>
              
              <div className="text-center py-6 bg-card/60 rounded-xl border border-border/70 mb-6">
                <MessageCircle className="h-14 w-14 text-primary mx-auto mb-3" />
                <h4 className="text-lg font-bold text-foreground mb-1">
                  Instant Response on WhatsApp
                </h4>
                <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                  Our sales specialists will share complete high-res photo sets, auction sheet translation, and live stock updates.
                </p>
              </div>

              <div className="space-y-3">
                <Button 
                  onClick={() => handleWhatsApp(COMPANY_INFO.phone)}
                  className="btn-hero w-full py-5 text-base"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp — {COMPANY_INFO.phoneFormatted}
                </Button>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="w-full flex items-center justify-center gap-2 p-3 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-border">
              <h5 className="font-semibold text-foreground text-sm mb-3">How we assist you:</h5>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>• Live Japanese auction bidding & direct ship import</li>
                <li>• Ready stock viewing & verified auction grading</li>
                <li>• Fast bank loan approval with minimal paperwork</li>
                <li>• BRTA registration & fitness documentation</li>
                <li>• Ceramic coating, detailing & full servicing warranty</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
