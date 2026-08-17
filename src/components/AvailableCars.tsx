import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Phone, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { carsData } from "@/data/cars";
import { COMPANY_INFO } from "@/data/company";

export const AvailableCars = () => {
  return (
    <section id="cars-section" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Available Japanese Cars</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-sm md:text-base">
          Browse our collection of verified Japanese reconditioned vehicles in Rajshahi.
          All cars come with verifiable auction sheets, genuine mileage, and full technical warranty.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {carsData.map((car) => (
            <div key={car.id} className="car-card group flex flex-col justify-between">
              <div>
                {/* Car Image */}
                <div className="relative overflow-hidden rounded-lg mb-4 bg-muted/40 aspect-[16/10]">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground font-semibold px-2.5 py-0.5">
                    In Stock
                  </Badge>
                  {car.specs.Price && (
                    <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-sm text-white px-3 py-1 rounded-md text-sm font-bold border border-white/20">
                      {car.specs.Price}
                    </div>
                  )}
                </div>

                {/* Car Details */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground line-clamp-1">{car.name}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {car.overview}
                  </p>

                  {/* Specs Quick Pill */}
                  <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-muted-foreground">
                    {car.specs.Year && (
                      <span className="bg-secondary/60 px-2 py-0.5 rounded border border-border">
                        Year: {car.specs.Year}
                      </span>
                    )}
                    {car.specs["Auction/Grade"] && (
                      <span className="bg-secondary/60 px-2 py-0.5 rounded border border-border">
                        Grade: {car.specs["Auction/Grade"]}
                      </span>
                    )}
                    {car.specs.Mileage && (
                      <span className="bg-secondary/60 px-2 py-0.5 rounded border border-border">
                        {car.specs.Mileage}
                      </span>
                    )}
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {car.keyFeatures.slice(0, 2).map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-[11px] bg-card/40 border-border/70 text-foreground/80">
                        <CheckCircle2 className="w-3 h-3 mr-1 text-primary inline" />
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-6 mt-auto">
                <Link to={`/cars/${car.id}`} className="flex-1">
                  <Button className="btn-secondary w-full text-sm">
                    <Eye className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                </Link>
                <Button
                  onClick={() => window.open(`tel:${COMPANY_INFO.phone}`, '_self')}
                  className="btn-outline px-3"
                  aria-label="Call Now"
                  title="Call Us Directly"
                >
                  <Phone className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action for Custom Auction Bidding */}
        <div className="text-center mt-14 p-8 rounded-2xl bg-card border border-border/80 max-w-3xl mx-auto shadow-card">
          <h3 className="text-xl font-bold text-foreground mb-2">
            Looking for a specific model or custom Japanese auction import?
          </h3>
          <p className="text-muted-foreground text-sm mb-6 max-w-xl mx-auto">
            We can bid directly on USS, TAA, CAA live Japanese auctions and deliver your custom spec car to Rajshahi.
          </p>
          <Button
            onClick={() => window.open(COMPANY_INFO.whatsappUrl, '_blank')}
            className="btn-hero text-base"
          >
            Request Custom Auction Import on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};
