import { MessageCircle, Phone, MapPin, Mail, ShieldCheck, Star, ExternalLink } from "lucide-react";
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
            <div className="pt-2">
              <div className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2.5">
                Connect With Us
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  href={COMPANY_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-[#1877F2] hover:text-white text-primary transition-all duration-200"
                  title="Facebook Page"
                  aria-label="Facebook Page"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-[#E4405F] hover:text-white text-primary transition-all duration-200"
                  title="Instagram Profile"
                  aria-label="Instagram Profile"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href={COMPANY_INFO.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-[#FF0000] hover:text-white text-primary transition-all duration-200"
                  title="YouTube Channel"
                  aria-label="YouTube Channel"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a
                  href={COMPANY_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-[#0A66C2] hover:text-white text-primary transition-all duration-200"
                  title="LinkedIn Page"
                  aria-label="LinkedIn Page"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href={COMPANY_INFO.xUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-black hover:text-white text-primary transition-all duration-200"
                  title="X (Twitter)"
                  aria-label="X (Twitter)"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href={COMPANY_INFO.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-black hover:text-[#25F4EE] text-primary transition-all duration-200"
                  title="TikTok Profile"
                  aria-label="TikTok Profile"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01V19a6.83 6.83 0 0 1-2.02 4.88c-2.6 2.61-6.88 2.6-9.48 0-2.61-2.6-2.61-6.88 0-9.48 2.37-2.37 6.13-2.6 8.78-.65v4.25c-1.39-1.06-3.37-.93-4.63.34-1.25 1.25-1.25 3.28 0 4.53 1.25 1.25 3.28 1.25 4.53 0 .71-.71 1.05-1.7 1.05-2.7V.02z"/>
                  </svg>
                </a>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-[#25D366] hover:text-white text-primary transition-all duration-200"
                  title="WhatsApp"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-4.5 w-4.5" />
                </a>
              </div>
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

          {/* Business Hours & Google Review */}
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

            {/* Google Review Card in Footer */}
            <a
              href={COMPANY_INFO.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 bg-card/80 hover:bg-card border border-amber-500/30 hover:border-amber-500/60 rounded-xl transition-all group mt-3"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-500 group-hover:scale-105 transition-transform flex-shrink-0">
                  <Star className="w-4.5 h-4.5 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground group-hover:text-amber-400 transition-colors">
                    Review Our Business on Google
                  </div>
                  <div className="text-[11px] text-muted-foreground">
                    ⭐⭐⭐⭐⭐ Rate on Google Maps & Search
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-amber-400 transition-colors flex-shrink-0" />
            </a>
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
