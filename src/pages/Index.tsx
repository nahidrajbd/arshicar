import { Hero } from "@/components/Hero";
import { Brands } from "@/components/Brands";
import { AvailableCars } from "@/components/AvailableCars";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Brands />
      <AvailableCars />
      <Services />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
