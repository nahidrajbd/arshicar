import { Shield, CreditCard, Award, Wrench } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

const features = [
  {
    icon: Shield,
    title: "Trusted Source in Rajshahi",
    description: "Centrally located at Sopura Mothpukur with a wide selection of premium Japanese reconditioned vehicles and complete transparency."
  },
  {
    icon: Award,
    title: "100% Verified Auction Sheet",
    description: "Every single vehicle comes with verifiable Japanese auction inspection sheet (USS/TAA/CAA), genuine mileage, and authentic grade."
  },
  {
    icon: CreditCard,
    title: "Easy Bank Loan Facility",
    description: "Hassle-free auto financing assistance with major commercial banks and NBFIs in Bangladesh with competitive interest rates."
  },
  {
    icon: Wrench,
    title: "Master Detailing & Support",
    description: "In-house auto care & detailing studio for periodic maintenance, ceramic protection, and comprehensive after-sales warranty."
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose {COMPANY_INFO.shortName}?</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We are committed to delivering the most reliable and premium car buying experience in Rajshahi, backed by verified authenticity and expert automotive care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="feature-card group flex flex-col items-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 border border-primary/20">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 rounded-xl bg-card border border-border/80 shadow-sm space-y-1.5">
            <div className="text-3xl md:text-4xl font-black text-primary">500+</div>
            <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider font-semibold">Cars Delivered</div>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border/80 shadow-sm space-y-1.5">
            <div className="text-3xl md:text-4xl font-black text-primary">10+</div>
            <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider font-semibold">Years Trust</div>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border/80 shadow-sm space-y-1.5">
            <div className="text-3xl md:text-4xl font-black text-primary">100%</div>
            <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider font-semibold">Verified Auction</div>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border/80 shadow-sm space-y-1.5">
            <div className="text-3xl md:text-4xl font-black text-primary">24/7</div>
            <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider font-semibold">WhatsApp Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};
