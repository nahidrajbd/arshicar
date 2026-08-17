import { MessageCircle, Phone, MapPin, Mail, ShieldCheck, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { COMPANY_INFO } from "@/data/company";

export const Footer = () => {
  return (
    <footer className="bg-secondary/40 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-black text-foreground tracking-tight">
              {COMPANY_INFO.name}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Rajshahi’s premier hub for verified Japanese auction-grade reconditioned cars, bank auto loans, and computerized automobile detailing.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground text-primary transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground text-primary transition-colors"
                title="Call Phone"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground text-primary transition-colors"
                title="Showroom Location on Maps"
              >
                <MapPin className="h-5 w-5" />
              </a>
              <a
                href={COMPANY_INFO.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-white text-amber-500 transition-colors"
                title="Review us on Google"
              >
                <Star className="h-5 w-5 fill-current" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-foreground uppercase tracking-wider">Showroom & Studio</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-muted-foreground hover:text-foreground font-medium">
                  {COMPANY_INFO.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-muted-foreground hover:text-foreground">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  {COMPANY_INFO.address}
                </span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-foreground uppercase tracking-wider">Business Hours</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Saturday - Thursday:</span>
                <span className="text-foreground font-medium">8:30 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Friday:</span>
                <span className="text-foreground font-medium">2:30 PM - 9:00 PM</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-xs text-primary font-medium text-center">
                Emergency Contact Available 24/7 via WhatsApp
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-end">
            <Link to="/privacy" className="hover:text-foreground transition-colors underline-offset-4 hover:underline">
              Privacy Policy
            </Link>
            <span>•</span>
            <a href="#cars-section" className="hover:text-foreground transition-colors">
              Japanese Cars
            </a>
            <span>•</span>
            <a href="#services-section" className="hover:text-foreground transition-colors">
              Auto Care Services
            </a>
            <span>•</span>
            <a 
              href={COMPANY_INFO.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 transition-colors font-medium flex items-center gap-1"
            >
              <Star className="w-3 h-3 fill-current" />
              <span>Review on Google</span>
            </a>
            <span>•</span>
            <span className="text-foreground/80">Sopura Mothpukur, Rajshahi</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
