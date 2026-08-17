import { ServiceItem, ReconditionedCar, FeaturePoint, GalleryItem, Testimonial } from '../types';

export const COMPANY_INFO = {
  name: "Arshi Automobile & Car Hub",
  shortName: "Arshi Car Hub",
  domain: "arshicar.com",
  phone: "01712110902",
  phoneRaw: "+8801712110902",
  phoneFormatted: "+880 1712-110902",
  whatsappUrl: "https://wa.me/8801712110902?text=Hello%20Arshi%20Automobile,%20I%20am%20interested%20in%20your%20services/cars",
  location: "Sopura Mothpukur, Rajshahi",
  address: "Sopura Mothpukur, Near BSCIC Industrial Area, Rajshahi-6203, Bangladesh",
  googleMapsUrl: "https://maps.google.com/?q=Sopura+Mothpukur+Rajshahi",
  email: "info@arshicar.com",
  workingHours: "Sat - Thu: 8:30 AM - 9:00 PM | Fri: 2:30 PM - 9:00 PM",
  tagline: "The Smartest Automobile Platform to Buy Japanese Cars & Auto Care in Rajshahi.",
  subtagline: "Where Every Drive Begins — Verified Japanese Reconditioned Cars & Master Detailing Studio Under One Roof."
};

export const RECONDITIONED_CARS: ReconditionedCar[] = [
  {
    id: "car-1",
    title: "Toyota Premio F-EX Package 2020",
    make: "Toyota",
    model: "Premio",
    year: 2020,
    engine: "1500 cc",
    color: "Pearl White",
    mileage: "28,500 km",
    auctionGrade: "4.5 / A",
    price: "BDT 38,50,000",
    rawPriceNumber: 3850000,
    transmission: "Automatic (CVT)",
    fuelType: "Octane",
    bodyType: "Sedan",
    location: "Sopura, Rajshahi",
    status: "In Stock",
    verifiedAuction: true,
    features: [
      "Toyota Safety Sense 2.0",
      "Beige Premium Leather Interior",
      "Power Driver Seat & Lumbar Support",
      "Push Start & Smart Keyless Entry",
      "360 Degree Camera & Parking Sensors",
      "Original Japanese Touchscreen Navigation"
    ],
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1000&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "car-2",
    title: "Toyota Harrier Progressive Leather 2021",
    make: "Toyota",
    model: "Harrier",
    year: 2021,
    engine: "2000 cc",
    color: "Attitude Black Mica",
    mileage: "21,000 km",
    auctionGrade: "5.0 / A",
    price: "BDT 64,00,000",
    rawPriceNumber: 6400000,
    transmission: "Automatic 8-Speed",
    fuelType: "Octane / Hybrid",
    bodyType: "SUV",
    location: "Sopura, Rajshahi",
    status: "In Stock",
    verifiedAuction: true,
    features: [
      "Electrochromic Panoramic Dimming Sunroof",
      "JBL 9-Speaker Premium Surround Sound",
      "Brown Executive Leather Upholstery",
      "Radar Dynamic Radar Cruise Control",
      "Head-Up Display (HUD) & Memory Seats",
      "Hands-free Power Tailgate with Kick Sensor"
    ],
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "car-3",
    title: "Honda Vezel e:HEV Z Sensing 2021",
    make: "Honda",
    model: "Vezel",
    year: 2021,
    engine: "1500 cc Hybrid",
    color: "Crystal Red Metallic",
    mileage: "24,500 km",
    auctionGrade: "4.5 / A",
    price: "BDT 32,80,000",
    rawPriceNumber: 3280000,
    transmission: "e-CVT Automatic",
    fuelType: "Hybrid",
    bodyType: "SUV",
    location: "Sopura, Rajshahi",
    status: "In Stock",
    verifiedAuction: true,
    features: [
      "Honda SENSING Suite with Lane Keep Assist",
      "Half Leather Sport Heated Seats",
      "Panoramic Glass Roof & Ambient Lighting",
      "Apple CarPlay & Wireless Charger",
      "Sequential LED Turn Indicators",
      "24 km/L Certified Fuel Efficiency"
    ],
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "car-4",
    title: "Toyota Noah Hybrid Si WxB 2019",
    make: "Toyota",
    model: "Noah",
    year: 2019,
    engine: "1800 cc Hybrid",
    color: "Sparkling Black Pearl",
    mileage: "36,200 km",
    auctionGrade: "4.0 / B",
    price: "BDT 34,50,000",
    rawPriceNumber: 3450000,
    transmission: "Automatic",
    fuelType: "Hybrid",
    bodyType: "MPV",
    location: "Sopura, Rajshahi",
    status: "In Stock",
    verifiedAuction: true,
    features: [
      "Dual Power Automatic Sliding Doors",
      "7-Seater Luxury Captain Seats",
      "Rear Ceiling Entertainment Screen",
      "WxB Special Aero Bodykit & Smoked Chrome",
      "Dual Zone Climate Control with Nanoe Clean"
    ],
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "car-5",
    title: "Toyota Corolla Cross Z Hybrid 2022",
    make: "Toyota",
    model: "Corolla Cross",
    year: 2022,
    engine: "1800 cc Hybrid",
    color: "Cement Grey",
    mileage: "18,000 km",
    auctionGrade: "5.0 / A",
    price: "BDT 42,50,000",
    rawPriceNumber: 4250000,
    transmission: "Automatic",
    fuelType: "Hybrid",
    bodyType: "SUV",
    location: "Sopura, Rajshahi",
    status: "Upcoming",
    verifiedAuction: true,
    features: [
      "Top-tier Z Grade with Panoramic Roof",
      "18-inch Diamond Cut Alloy Wheels",
      "Full Digital Instrument Cluster",
      "Blind Spot Monitoring & Cross Traffic Alert",
      "Premium Terra Cotta Leather Accents"
    ],
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "car-6",
    title: "Toyota Corolla Axio Hybrid G 2019",
    make: "Toyota",
    model: "Corolla Axio",
    year: 2019,
    engine: "1500 cc Hybrid",
    color: "Silver Metallic",
    mileage: "42,000 km",
    auctionGrade: "4.0 / B",
    price: "BDT 22,80,000",
    rawPriceNumber: 2280000,
    transmission: "Automatic",
    fuelType: "Hybrid",
    bodyType: "Sedan",
    location: "Sopura, Rajshahi",
    status: "In Stock",
    verifiedAuction: true,
    features: [
      "Toyota Safety Sense C Package",
      "Push Start & Climate Control AC",
      "Projector LED Headlamps",
      "Outstanding Mileage (28 km/L)",
      "Low Maintenance & High Reliability"
    ],
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1000&q=80"
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "ceramic-detailing",
    title: "9H Ceramic & Graphene Coating",
    iconName: "Sparkles",
    category: "restoration",
    shortDesc: "Complete 3-stage paint correction with German hydrophobic ceramic glass coating for ultra gloss and scratch protection.",
    fullDesc: "Our flagship detailing package restores deeper depth, diamond-like reflection, and permanent hydrophobic protection against UV sun oxidation, acid rain, bird droppings, and swirl marks.",
    features: [
      "3-Stage Rotary & Dual-Action Paint Correction",
      "Certified 9H Nano-Ceramic 3-Layer Coat",
      "Windshield & Glass Rain Repellent Treatment",
      "Alloy Wheel & Brake Caliper Thermal Shield",
      "Interior Leather & Upholstery Anti-Stain Coating",
      "2-Year Gloss & Hydrophobic Warranty"
    ],
    duration: "6 - 8 Hours",
    startingPrice: "BDT 7,500",
    badge: "Most Popular",
    popular: true,
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "car-wash",
    title: "Premium Snow Foam & Underbody Wash",
    iconName: "Droplets",
    category: "cleaning",
    shortDesc: "High-pressure touchless snow foam wash, chassis anti-rust underwash, and tire dressing.",
    fullDesc: "Touchless pH-neutral snow foam bath that loosens stubborn mud and road grime, followed by 180-bar high-pressure underbody rinse, microfiber hand dry, and tire satin dressing.",
    features: [
      "pH-Neutral Heavy Snow Foam Pre-Soak",
      "180-Bar Chassis & Wheel Arch Wash",
      "Scratchless Microfiber Mitt Hand Wash",
      "Tire & Rim Deep Degreasing & Dressing",
      "Interior Vacuum & Windshield Streak-Free Clean"
    ],
    duration: "35 - 45 Mins",
    startingPrice: "BDT 400",
    badge: "Quick Service",
    popular: true,
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "dent-paint",
    title: "Booth Paint & Precision Dent Repair",
    iconName: "Paintbrush",
    category: "restoration",
    shortDesc: "Computerized spectrophotometer color matching and dust-free heated spray booth baking.",
    fullDesc: "From minor bumper scratches to extensive body panel restoration, we utilize computerized paint matching with German Standox clear coats and dust-free infrared curing booths.",
    features: [
      "Computerized OEM Paint Code Matching",
      "Paintless Dent Repair (PDR) Technique",
      "Anti-Corrosive Zinc Epoxy Primer Base",
      "Dust-Free Heated Spray Booth Baking",
      "Clear Coat Wet Sanding & Mirror Polish"
    ],
    duration: "1 - 2 Days",
    startingPrice: "BDT 2,500 / panel",
    badge: "Factory Finish",
    popular: false,
    image: "https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "car-servicing",
    title: "Complete Periodic Maintenance & Tune-Up",
    iconName: "Wrench",
    category: "mechanical",
    shortDesc: "Full synthetic Japanese oil change, spark plug tuning, brake service, and OBD scanner check.",
    fullDesc: "Comprehensive periodic service using genuine OEM engine oils (0W-20 / 5W-30), OEM oil & cabin air filters, throttle body cleaning, brake pads inspection, and 50-point safety check.",
    features: [
      "Genuine Japanese Synthetic Engine Oil & Filter",
      "Electronic Throttle Body & Air Cleaner Tuning",
      "Brake Caliper Servicing & Fluid Flush",
      "Suspension, Bushing & Steering System Check",
      "Computerized OBD-II Diagnostics Health Report"
    ],
    duration: "1.5 - 2 Hours",
    startingPrice: "BDT 2,800",
    badge: "Essential Care",
    popular: true,
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "interior-steam",
    title: "Interior Deep Steam Sanitization",
    iconName: "Armchair",
    category: "cleaning",
    shortDesc: "Hot steam extraction of fabric/leather seats, roof headliner, carpets, and AC odor elimination.",
    fullDesc: "Eliminate bacteria, allergen dust mites, and stubborn stains with 140°C high-temperature dry steam extraction shampooing for leather, fabric, floor mats, and AC ducts.",
    features: [
      "140°C High-Pressure Dry Steam Stain Extraction",
      "Roof Headliner & Door Fabric Shampooing",
      "Leather Seat Conditioning with UV Balms",
      "AC Duct Bacterial Ozone Disinfection",
      "Odor, Pet Hair & Allergen Elimination"
    ],
    duration: "2 - 3 Hours",
    startingPrice: "BDT 1,600",
    badge: "100% Hygienic",
    popular: false,
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "vehicle-inspection",
    title: "150-Point Pre-Purchase Car Inspection",
    iconName: "ClipboardCheck",
    category: "mechanical",
    shortDesc: "Digital paint thickness scan for hidden accident repairs, hybrid battery cell check, and road test.",
    fullDesc: "Planning to purchase a reconditioned or used car? Our master technicians perform an exhaustive inspection including paint meter tests, computerized engine scanning, and hybrid battery diagnostics.",
    features: [
      "Paint Thickness Gauge for Hidden Dent/Repairs",
      "OBD-II Live Computer Diagnostic Scan",
      "Hybrid Battery Cell Voltage & Capacity Test",
      "Undercarriage Rust & Suspension Play Check",
      "Written 150-Point Digital Health Certificate"
    ],
    duration: "1 Hour",
    startingPrice: "BDT 1,500",
    badge: "Certified Report",
    popular: false,
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80"
  }
];

export const CATEGORIES_LIST = [
  { id: 'all', name: 'All Cars & Services', count: '12 Available', icon: 'Car' },
  { id: 'sedan', name: 'Sedans (Premio, Axio)', count: '6 Vehicles', icon: 'CarFront' },
  { id: 'suv', name: 'SUVs & Crossovers (Harrier, Vezel)', count: '4 Vehicles', icon: 'Shield' },
  { id: 'hybrid', name: 'Hybrids & EVs', count: '5 Vehicles', icon: 'Zap' },
  { id: 'detailing', name: 'Ceramic Coating & Polish', count: '4 Packages', icon: 'Sparkles' },
  { id: 'maintenance', name: 'Servicing & Repairs', count: '3 Packages', icon: 'Wrench' },
];

export const WHY_CHOOSE_US: FeaturePoint[] = [
  {
    id: "exp-team",
    title: "100% Genuine Japanese Auction Sheets",
    description: "Every reconditioned car comes with verified auction sheets directly from USS, TAA, & CAA auctions in Japan with zero odometer tampering.",
    iconName: "ShieldCheck",
    statBadge: "Verified Auction"
  },
  {
    id: "mod-equip",
    title: "Modern European Detailing Equipment",
    description: "Equipped with dust-free infrared paint baking booths, German dual-action Rupes polishers, and 140°C dry steam sanitizers.",
    iconName: "Wrench",
    statBadge: "High-Tech Studio"
  },
  {
    id: "aff-price",
    title: "Transparent & Competitive Pricing",
    description: "Clear fixed rates with no hidden costs. High-end showroom quality and detailing craftsmanship at honest Rajshahi rates.",
    iconName: "Tag",
    statBadge: "Best Value"
  },
  {
    id: "trust-serv",
    title: "5,000+ Satisfied Clients in Rajshahi",
    description: "Serving car enthusiasts across Rajshahi Division with complete after-sales warranty, registration help, and continuous car care.",
    iconName: "Award",
    statBadge: "5,000+ Happy Owners"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Touchless High-Pressure Snow Foam Bath",
    category: "Wash",
    categoryLabel: "Snow Foam Wash",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=80",
    description: "Chassis underwash and swirl-free snow foam bath for Toyota Crown."
  },
  {
    id: "gal-2",
    title: "9H Ceramic Coating Mirror Reflection",
    category: "Polish",
    categoryLabel: "Ceramic Detailing",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=800&q=80",
    description: "Multi-stage paint correction and 9H hydrophobic coating on Toyota Harrier."
  },
  {
    id: "gal-3",
    title: "Engine Bay Steam Restoration",
    category: "BeforeAfter",
    categoryLabel: "Engine Steam",
    beforeImage: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
    image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=80",
    description: "Safe non-conductive steam cleaning removing oil sludge and grease."
  },
  {
    id: "gal-4",
    title: "Computerized Spray Booth Bumper Paint",
    category: "DentPaint",
    categoryLabel: "Dent & Paint",
    image: "https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=800&q=80",
    description: "Dust-free infrared paint baking booth matching factory pearl white."
  },
  {
    id: "gal-5",
    title: "Modern Service Bays in Sopura",
    category: "Workshop",
    categoryLabel: "Showroom & Workshop",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
    description: "Hydraulic lifts, computerized scan tools, and comfortable AC customer lounge."
  },
  {
    id: "gal-6",
    title: "Fresh Japanese Car Key Handover",
    category: "Delivery",
    categoryLabel: "Customer Handover",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
    description: "Delivering a certified Grade 5 Toyota Premio to proud owner in Rajshahi."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "rev-1",
    name: "Dr. Tanvir Ahmed",
    location: "Padma Residential Area, Rajshahi",
    carModel: "Toyota Premio F-EX 2020",
    rating: 5,
    comment: "I purchased my Toyota Premio from Arshi Automobile. The auction sheet was 100% authentic and verified. They performed a full complimentary 9H ceramic coating before handover. Best showroom in Rajshahi!",
    date: "July 2026",
    serviceTaken: "Japanese Reconditioned Car Purchase & Detailing"
  },
  {
    id: "rev-2",
    name: "Engr. Nazmul Hasan",
    location: "Kazihata, Rajshahi",
    carModel: "Toyota Harrier Progressive",
    rating: 5,
    comment: "Had deep scratch dents on the passenger door. Arshi's paint booth matched the factory pearl paint seamlessly with zero difference. The staff is polite, professional, and transparent about costs.",
    date: "June 2026",
    serviceTaken: "Dent & Paint + Interior Steam Sanitization"
  },
  {
    id: "rev-3",
    name: "Mahmudul Islam",
    location: "Sopura, Rajshahi",
    carModel: "Honda Vezel Hybrid",
    rating: 5,
    comment: "Regular client for their snow foam wash and periodic engine tune-up. They handle hybrid cars with great technical competence. Highly recommended!",
    date: "August 2026",
    serviceTaken: "Periodic Maintenance & Snow Foam Wash"
  }
];
