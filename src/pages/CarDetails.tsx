import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Phone, MessageCircle, Info, ShieldCheck, Calendar, Gauge, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { carsData } from "@/data/cars";
import { COMPANY_INFO } from "@/data/company";
import { useState, useEffect } from "react";

const CarDetails = () => {
    const { id } = useParams();
    const car = carsData.find((c) => c.id === id);
    const [activeImgIndex, setActiveImgIndex] = useState(0);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [id]);

    if (!car) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background text-foreground">
                <h1 className="text-3xl font-bold mb-4">Car details not found or unit out of stock.</h1>
                <Link to="/">
                    <Button className="btn-hero">Return to Home</Button>
                </Link>
            </div>
        );
    }

    const { name, overview, description, specs, keyFeatures, ctaTitle, ctaText, images } = car;
    const currentCoverImg = images && images.length > 0 ? images[activeImgIndex] : car.image;

    const handleWhatsApp = () => {
        const message = `Hello ${COMPANY_INFO.name}, I am interested in ${name}. Could you share auction sheet verification, price quote, and available colors?`;
        const whatsappUrl = `https://wa.me/88${COMPANY_INFO.phone}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleCall = () => {
        window.open(`tel:${COMPANY_INFO.phone}`, '_self');
    };

    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Navigation */}
            <nav className="border-b border-border bg-card/75 backdrop-blur-md sticky top-0 z-50">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center text-muted-foreground hover:text-foreground transition-colors text-sm font-semibold">
                        <ArrowLeft className="h-4 w-4 mr-2 text-primary" />
                        Back to Available Cars
                    </Link>
                    <div className="text-xs text-muted-foreground hidden sm:block">
                        <span className="text-primary font-bold">{COMPANY_INFO.shortName}</span> • Sopura Mothpukur, Rajshahi
                    </div>
                </div>
            </nav>

            <div className="container mx-auto px-4 py-8 md:py-14">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto items-start">
                    {/* Image Section */}
                    <div className="space-y-4 lg:sticky lg:top-24">
                        <div className="rounded-2xl overflow-hidden shadow-2xl relative h-[340px] sm:h-[420px] lg:h-[480px] bg-card border border-border">
                            <img
                                src={currentCoverImg}
                                alt={name}
                                className="absolute inset-0 w-full h-full object-cover transition-all duration-300"
                            />
                        </div>
                        {images && images.length > 1 && (
                            <div className="flex gap-2.5 overflow-x-auto pb-3 pt-1 scrollbar-thin">
                                {images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveImgIndex(idx)}
                                        className={`flex-shrink-0 relative h-16 w-24 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                                            activeImgIndex === idx ? "border-primary scale-105 shadow-md" : "border-transparent opacity-60 hover:opacity-100"
                                        }`}
                                    >
                                        <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Details Section */}
                    <div className="space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-semibold mb-3">
                                <ShieldCheck className="w-3.5 h-3.5" />
                                Verified Japanese Auction Unit
                            </div>
                            <h1 className="text-2xl sm:text-4xl font-black text-foreground mb-3 leading-tight">{name}</h1>
                            {specs.Price && (
                                <p className="text-2xl font-bold text-primary mb-4">
                                    Price: {specs.Price}
                                </p>
                            )}
                            <p className="text-base text-muted-foreground leading-relaxed">
                                {overview}
                            </p>
                        </div>

                        {description && (
                            <div className="p-5 rounded-xl bg-card border border-border/80">
                                <h2 className="text-base font-bold mb-2 flex items-center text-foreground">
                                    <Info className="mr-2 h-4 w-4 text-primary" /> Vehicle Overview & Details
                                </h2>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {description}
                                </p>
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* Specs */}
                            <div className="bg-secondary/20 p-5 rounded-xl border border-border">
                                <h2 className="text-base font-bold mb-3 text-foreground flex items-center gap-2">
                                    <Award className="w-4 h-4 text-primary" /> Specifications
                                </h2>
                                <ul className="space-y-2.5 text-xs sm:text-sm">
                                    {Object.entries(specs).map(([key, value]) => (
                                        <li key={key} className="flex justify-between border-b border-border/40 pb-2 last:border-0 last:pb-0">
                                            <span className="text-muted-foreground">{key}</span>
                                            <span className="text-foreground font-semibold text-right ml-3">{value as string}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Features */}
                            <div className="bg-secondary/20 p-5 rounded-xl border border-border">
                                <h2 className="text-base font-bold mb-3 flex items-center text-foreground gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-primary" /> Key Features
                                </h2>
                                <ul className="space-y-2 text-xs sm:text-sm">
                                    {keyFeatures.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <span className="text-primary mr-2 font-bold">•</span>
                                            <span className="text-foreground/90">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* CTA Box */}
                        <div className="bg-primary/5 p-6 sm:p-8 rounded-2xl border-2 border-primary/20">
                            <h3 className="text-lg font-bold mb-1.5 text-primary">{ctaTitle}</h3>
                            <p className="text-xs sm:text-sm text-muted-foreground mb-6">
                                {ctaText}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3">
                                <Button onClick={handleCall} className="btn-hero flex-1 py-5 text-base">
                                    <Phone className="mr-2 h-5 w-5" />
                                    Call Showroom
                                </Button>
                                <Button onClick={handleWhatsApp} className="btn-outline flex-1 py-5 text-base">
                                    <MessageCircle className="mr-2 h-5 w-5" />
                                    Chat on WhatsApp
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default CarDetails;
