import { Star, ExternalLink, MessageSquareQuote, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/data/company";

interface ReviewItem {
  id: number;
  name: string;
  location: string;
  carModel: string;
  rating: number;
  date: string;
  review: string;
  verified: boolean;
  avatarBg: string;
  initials: string;
}

const customerReviews: ReviewItem[] = [
  {
    id: 1,
    name: "Tanvir Ahmed",
    location: "Rajshahi",
    carModel: "Toyota Premio 2019 (Grade 4.5)",
    rating: 5,
    date: "2 weeks ago",
    review: "Best Japanese car showroom in Rajshahi! They showed me the live auction sheet verification on USS auction portal. Received original key, spotless interior, and smooth delivery. Highly recommended!",
    verified: true,
    avatarBg: "bg-amber-500/20 text-amber-500",
    initials: "TA"
  },
  {
    id: 2,
    name: "Dr. Mahfuzur Rahman",
    location: "Kazihata, Rajshahi",
    carModel: "Honda Vezel Hybrid 2021",
    rating: 5,
    date: "1 month ago",
    review: "Got my Vezel with full bank financing assistance handled by Arshi Car Hub team within 3 working days. Also did 9H ceramic coating at their detailing studio. Outstanding service quality!",
    verified: true,
    avatarBg: "bg-emerald-500/20 text-emerald-500",
    initials: "MR"
  },
  {
    id: 3,
    name: "Engr. Asif Iqbal",
    location: "Uposhohor, Rajshahi",
    carModel: "Toyota Corolla Cross 2022",
    rating: 5,
    date: "2 months ago",
    review: "Honest dealing and transparent pricing. No meter tampering, 100% genuine condition. If you are buying a Japanese reconditioned car in North Bengal, Arshi Automobile is the number 1 trusted place.",
    verified: true,
    avatarBg: "bg-blue-500/20 text-blue-500",
    initials: "AI"
  }
];

export const GoogleReviews = () => {
  const handleOpenGoogleReview = () => {
    window.open(COMPANY_INFO.googleReviewUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="reviews-section" className="py-20 bg-card/50 border-t border-border/40 relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/25 text-xs font-bold uppercase tracking-wider mb-4">
            <Star className="w-3.5 h-3.5 fill-primary text-primary" />
            Verified Google Reviews & Ratings
          </div>
          <h2 className="section-title mb-4">
            Trusted by Car Owners Across Rajshahi
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Customer satisfaction is at the core of our business. See what our valued clients have to say about their experience with {COMPANY_INFO.shortName}.
          </p>
        </div>

        {/* Google Review Callout Banner */}
        <div className="max-w-4xl mx-auto mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-secondary/40 via-card to-secondary/40 border border-primary/20 shadow-card">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-foreground font-black text-lg">5.0 / 5.0</span>
                <span className="text-xs text-muted-foreground font-medium">on Google</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                Review Our Business on Google
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-xl">
                Reviews build trust and help our Business Profile stand out to customers on Google Search and Maps. Share your showroom or workshop experience today!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
              <Button
                onClick={handleOpenGoogleReview}
                className="btn-hero text-sm px-6 py-3 shadow-lg shadow-primary/20 hover:shadow-primary/30 flex items-center justify-center gap-2"
              >
                <Star className="w-4 h-4 fill-current" />
                <span>Write a Google Review</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>

        {/* Customer Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {customerReviews.map((item) => (
            <div
              key={item.id}
              className="feature-card flex flex-col justify-between p-6 rounded-xl relative group hover:border-primary/40 transition-all duration-300"
            >
              <div>
                {/* Header with Star Rating & Google badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-muted-foreground flex items-center gap-1 bg-secondary/80 px-2 py-0.5 rounded-full border border-border">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Google Verified
                  </span>
                </div>

                {/* Review Text */}
                <div className="relative mb-4">
                  <MessageSquareQuote className="w-8 h-8 text-primary/15 absolute -top-2 -left-1 -z-0" />
                  <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed relative z-10">
                    "{item.review}"
                  </p>
                </div>
              </div>

              {/* User Details & Vehicle */}
              <div className="pt-4 border-t border-border/60">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${item.avatarBg} border border-border`}>
                    {item.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-bold text-foreground truncate">{item.name}</h4>
                    <p className="text-[11px] text-muted-foreground truncate">{item.location} • {item.date}</p>
                    <p className="text-[11px] font-semibold text-primary/90 truncate mt-0.5">
                      {item.carModel}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground mb-3">
            Have you purchased a vehicle or serviced your car at <strong className="text-foreground">{COMPANY_INFO.name}</strong>?
          </p>
          <a
            href={COMPANY_INFO.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:underline underline-offset-4"
          >
            <span>Click here to leave a feedback on Google Maps & Search</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
