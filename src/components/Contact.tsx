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
              <h5 className="font-semibold text-foreground text-sm mb-3">Follow our official channels:</h5>
              <div className="flex flex-wrap gap-2">
                <a
                  href={COMPANY_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-card rounded-lg border border-border flex items-center justify-center hover:bg-[#1877F2] hover:text-white text-muted-foreground transition-colors"
                  title="Facebook"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-card rounded-lg border border-border flex items-center justify-center hover:bg-[#E4405F] hover:text-white text-muted-foreground transition-colors"
                  title="Instagram"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href={COMPANY_INFO.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-card rounded-lg border border-border flex items-center justify-center hover:bg-[#FF0000] hover:text-white text-muted-foreground transition-colors"
                  title="YouTube"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a
                  href={COMPANY_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-card rounded-lg border border-border flex items-center justify-center hover:bg-[#0A66C2] hover:text-white text-muted-foreground transition-colors"
                  title="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href={COMPANY_INFO.xUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-card rounded-lg border border-border flex items-center justify-center hover:bg-black hover:text-white text-muted-foreground transition-colors"
                  title="X"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href={COMPANY_INFO.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-card rounded-lg border border-border flex items-center justify-center hover:bg-black hover:text-[#25F4EE] text-muted-foreground transition-colors"
                  title="TikTok"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01V19a6.83 6.83 0 0 1-2.02 4.88c-2.6 2.61-6.88 2.6-9.48 0-2.61-2.6-2.61-6.88 0-9.48 2.37-2.37 6.13-2.6 8.78-.65v4.25c-1.39-1.06-3.37-.93-4.63.34-1.25 1.25-1.25 3.28 0 4.53 1.25 1.25 3.28 1.25 4.53 0 .71-.71 1.05-1.7 1.05-2.7V.02z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
