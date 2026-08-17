export interface AutoServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  features: string[];
  startingPrice: string;
  duration: string;
  badge?: string;
  image: string;
}

export const AUTO_SERVICES: AutoServiceItem[] = [
  {
    id: "ceramic-detailing",
    title: "9H Nano Ceramic & Graphene Coating",
    category: "Detailing Studio",
    shortDesc: "Complete 3-stage rotary paint correction with 9H nano-ceramic hydrophobic glass coating for deep reflection and permanent UV/scratch shield.",
    features: [
      "3-Stage Paint Correction & Swirl Mark Removal",
      "9H Multi-Layer Certified Ceramic Coating",
      "Hydrophobic Glass & Rain Repellent Shield",
      "Alloy Wheel & Caliper Thermal Protection",
      "2-Year Warranty & Free Maintenance Scan"
    ],
    startingPrice: "BDT 7,500",
    duration: "6 - 8 Hours",
    badge: "Flagship Detailing",
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "snow-foam-wash",
    title: "Snow Foam & Underbody High-Pressure Wash",
    category: "Car Wash",
    shortDesc: "180-bar high-pressure undercarriage anti-rust wash, touchless pH-neutral snow foam bath, and deep interior vacuuming.",
    features: [
      "pH-Neutral Heavy Snow Foam Pre-Soak",
      "180-Bar High-Pressure Chassis & Wheel Arch Wash",
      "Scratchless Microfiber Hand Wash & Blower Dry",
      "Tire Deep Degreasing & Satin Dressing",
      "Full Interior Cabin Vacuum & Dashboard Polish"
    ],
    startingPrice: "BDT 400",
    duration: "35 - 45 Mins",
    badge: "Quick Service",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "dent-paint-booth",
    title: "Heated Booth Dent Repair & Oven Paint",
    category: "Body Shop",
    shortDesc: "Computerized spectrophotometer paint code matching with German Standox clear coat in a dust-free heated infrared spray booth.",
    features: [
      "OEM Color Code Digital Spectrophotometer Match",
      "Dust-Free Heated Spray Baking Booth",
      "Precision Hydraulic Panel Alignment",
      "German Ultra-Gloss Anti-Scratch Clear Coat",
      "Color Fade & Peeling Warranty"
    ],
    startingPrice: "BDT 3,500 / Panel",
    duration: "1 - 2 Days",
    badge: "Oven Baked",
    image: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "interior-steam",
    title: "Deep Interior Steam Sanitization",
    category: "Detailing Studio",
    shortDesc: "140°C high-temperature dry steam sanitization, leather seat conditioning, fabric deep extraction, and anti-bacterial ozone treatment.",
    features: [
      "140°C High-Pressure Dry Steam Sanitization",
      "Anti-Bacterial Ozone Air Purifying Treatment",
      "Deep Stains Extraction from Carpets & Roof Liner",
      "UV Protective Leather Feeding & Conditioning",
      "AC Duct Bacterial Odor Removal"
    ],
    startingPrice: "BDT 2,800",
    duration: "2 - 3 Hours",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "computerized-diagnostics",
    title: "Computerized Diagnostics & Synthetic Servicing",
    category: "Mechanical Workshop",
    shortDesc: "OBD-II live ECU scanning, hybrid battery health test, 100% synthetic engine oil change, spark plugs, and 30-point mechanical checkup.",
    features: [
      "Autel Computerized Live Sensor Diagnostic Scan",
      "Hybrid Battery Inverter & Cell Voltage Check",
      "Full Synthetic 0W-20 / 5W-30 Oil & Filter Change",
      "Throttle Body & Injector Ultrasonic Cleaning",
      "Brake Pad, Suspension & Fluid Level Inspection"
    ],
    startingPrice: "BDT 1,500",
    duration: "45 - 60 Mins",
    badge: "Essential Care",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "vehicle-inspection",
    title: "150-Point Pre-Purchase Car Inspection",
    category: "Inspection",
    shortDesc: "Complete digital paint thickness gauge check, structural chassis examination, engine compression, and Japanese auction sheet verification.",
    features: [
      "Electronic Paint Thickness Meter Test (Original vs Repaint)",
      "Chassis & Accidental Damage Physical Inspection",
      "Live Engine Compression & Transmission Health Test",
      "Authentic Japanese Auction Sheet Cross-Verification",
      "Comprehensive Digital Health Report"
    ],
    startingPrice: "BDT 2,000",
    duration: "1 - 2 Hours",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1000&q=80"
  }
];
