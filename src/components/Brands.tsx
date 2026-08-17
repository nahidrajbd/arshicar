import toyotaLogo from "@/assets/brands/toyota-logo.png";
import hondaLogo from "@/assets/brands/honda-logo.png";
import mitsubishiLogo from "@/assets/brands/mitsubishi-logo.png";
import nissanLogo from "@/assets/brands/nissan-logo.png";
import suzukiLogo from "@/assets/brands/suzuki-logo.png";
import hyundaiLogo from "@/assets/brands/hyundai-logo.png";

const brands = [
  { name: "Toyota", logo: toyotaLogo },
  { name: "Honda", logo: hondaLogo },
  { name: "Mitsubishi", logo: mitsubishiLogo },
  { name: "Nissan", logo: nissanLogo },
  { name: "Suzuki", logo: suzukiLogo },
  { name: "Hyundai", logo: hyundaiLogo },
];

export const Brands = () => {
  return (
    <section className="py-16 md:py-20 bg-card border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
            Trusted Brands We Deal
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Specializing in certified Japanese vehicles from the world's most trusted manufacturers
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 items-center">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group flex items-center justify-center p-6 bg-background rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="h-10 md:h-12 w-auto opacity-75 group-hover:opacity-100 transition-opacity duration-300 filter brightness-90 group-hover:brightness-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
