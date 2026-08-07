import { ServiceItem, ReconditionedCar, FeaturePoint, GalleryItem, Testimonial } from '../types';

export const COMPANY_INFO = {
  name: "Arshi Automobile & Car Hub",
  domain: "arshicar.com",
  phone: "01712110902",
  phoneRaw: "+8801712110902",
  whatsappUrl: "https://wa.me/8801712110902?text=Hello%20Arshi%20Automobile,%20I%20want%20to%20inquire%20about%20your%20services",
  location: "Sopura Mothpukur, Rajshahi",
  address: "Sopura Mothpukur, Rajshahi, Bangladesh",
  email: "info@arshicar.com",
  workingHours: "Saturday - Thursday: 8:30 AM - 9:00 PM | Friday: 2:30 PM - 9:00 PM",
  tagline: "Your Trusted Automobile Partner in Rajshahi",
  subtagline: "Complete Car Care Under One Roof.",
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "reconditioned-cars",
    title: "Japanese Reconditioned Cars",
    iconName: "CarFront",
    category: "sales",
    shortDesc: "100% genuine auction graded reconditioned Toyota, Honda, & Nissan cars imported directly from Japan.",
    fullDesc: "We provide high-grade Japanese reconditioned vehicles with verified auction sheets, low mileage, original paint, and complete documentation assistance for registration in Rajshahi and nationwide.",
    features: [
      "Authentic Auction Sheet Verification",
      "Low Mileage Guaranteed",
      "BRTA Registration Assistance",
      "Complimentary First Service & Polish",
      "Free Pre-delivery Inspection"
    ],
    duration: "Immediate Delivery / Pre-Order",
    startingPrice: "BDT 18.5 Lac+",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "car-wash",
    title: "Car Wash",
    iconName: "Droplets",
    category: "cleaning",
    shortDesc: "High-pressure foam wash and underbody cleaning to keep your vehicle dust-free and shining.",
    fullDesc: "Our automated and manual touchless high-pressure wash removes dirt, road salt, mud, and contaminants from the chassis, wheels, and paintwork without causing swirl marks.",
    features: [
      "pH-neutral Snow Foam Treatment",
      "Chassis High-Pressure Underwash",
      "Microfiber Hand Wash & Dry",
      "Tire & Rim Degreasing & Shine",
      "Windshield & Glass Streak-free Finish"
    ],
    duration: "30 - 45 Mins",
    startingPrice: "BDT 350",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "car-detailing",
    title: "Car Detailing",
    iconName: "Sparkles",
    category: "restoration",
    shortDesc: "Complete interior and exterior deep restoration service to restore factory showroom gloss.",
    fullDesc: "Comprehensive deep detailing using premium ceramic sealants, paint correction, interior steam sanitization, and trim restoration for a brand-new showroom finish.",
    features: [
      "Multi-stage Paint Correction",
      "Ceramic/Graphene Coating Application",
      "Deep Fabric & Leather Conditioning",
      "Headlight Restoration & Lens Clarity",
      "Alloy Wheel & Brake Caliper Coating"
    ],
    duration: "4 - 8 Hours",
    startingPrice: "BDT 3,500",
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "car-polish",
    title: "Car Polish",
    iconName: "Sun",
    category: "restoration",
    shortDesc: "3-step machine polish to eliminate swirl marks, minor scratches, and oxidation.",
    fullDesc: "Professional dual-action machine polishing using German compounds to remove haze, swirls, and light scratches while leaving a protective hydrophobic wax layer.",
    features: [
      "3-Step Paint Compounding & Polishing",
      "Swirl Mark & Hologram Removal",
      "Synthetic Sealant Wax Shield",
      "UV Rays Oxidation Protection",
      "Deep Gloss Reflector Effect"
    ],
    duration: "2 - 3 Hours",
    startingPrice: "BDT 1,800",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "dent-paint",
    title: "Dent & Paint",
    iconName: "Paintbrush",
    category: "restoration",
    shortDesc: "Computerized paint matching and precision dent removal in our climate-controlled spray booth.",
    fullDesc: "From minor bumper scratches to major body repairs, our expert craftsmen use computerized color matching and infrared curing paint booths for seamless factory-grade results.",
    features: [
      "Paintless Dent Repair (PDR)",
      "Computerized OEM Paint Matching",
      "Dust-free Heating Spray Booth",
      "Anti-rust Zinc Primer Base",
      "Clear Coat High-Gloss Finishing"
    ],
    duration: "1 - 3 Days",
    startingPrice: "BDT 2,500 / panel",
    image: "https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "car-servicing",
    title: "Car Servicing",
    iconName: "Wrench",
    category: "mechanical",
    shortDesc: "Comprehensive periodic maintenance, synthetic oil replacement, filter changes, and brake checkups.",
    fullDesc: "Complete periodic vehicle tune-up using genuine engine oils (0W-20, 5W-30), OEM oil/air filter changes, spark plug testing, suspension check, and diagnostic scanning.",
    features: [
      "Genuine Engine Oil & Filter Change",
      "AC Filter & Air Cleaner Cleaning",
      "Brake Pad & Fluid Inspection",
      "Suspension & Steering Checkup",
      "Computerized Scanner Diagnostic"
    ],
    duration: "1.5 - 2 Hours",
    startingPrice: "BDT 2,200",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "interior-cleaning",
    title: "Interior Cleaning",
    iconName: "Armchair",
    category: "cleaning",
    shortDesc: "Deep steam shampooing of seats, roof liner, carpets, and dashboard anti-bacterial treatment.",
    fullDesc: "Thorough upholstery steam washing, stain extraction, roof headline cleaning, leather moisturizing, and ozone odor elimination to make your cabin fresh and hygienic.",
    features: [
      "Hot Steam Extraction Shampooing",
      "Roof Liner & Door Panel Care",
      "Leather Seat Conditioning & Nourish",
      "AC Duct Anti-bacterial Sanitization",
      "Odor & Dust Mite Removal"
    ],
    duration: "2 - 3 Hours",
    startingPrice: "BDT 1,500",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "engine-cleaning",
    title: "Engine Room Cleaning",
    iconName: "Cpu",
    category: "cleaning",
    shortDesc: "Safe electronic-friendly dry steam degreasing and protective rubber dressing for the engine bay.",
    fullDesc: "Safely cleans oil grime, dust, and grease from the engine block and components using non-conductive cleaners, followed by heat-resistant protective dressing.",
    features: [
      "Safe Waterless / Steam Degreasing",
      "Electrical Sensors & Wiring Protection",
      "Plastic & Hose Protective Dressing",
      "Heat & Dust Repellent Sealant",
      "Improved Engine Heat Dissipation"
    ],
    duration: "45 Mins",
    startingPrice: "BDT 800",
    image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "vehicle-inspection",
    title: "Vehicle Inspection",
    iconName: "ClipboardCheck",
    category: "mechanical",
    shortDesc: "150-point comprehensive pre-purchase diagnostic and physical health report.",
    fullDesc: "Thinking of buying a used car or preparing for a long journey? Our master technicians run a computerized OBD-II scan, check paint thickness for hidden dents, suspension health, and hybrid battery status.",
    features: [
      "150-Point Digital Health Checklist",
      "OBD-II Computerized Engine Scan",
      "Hybrid Battery Cell Health Test",
      "Paint Gauge Dent & Repair Scanner",
      "Detailed Physical & Mechanical Report"
    ],
    duration: "1 Hour",
    startingPrice: "BDT 1,200",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80"
  }
];

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
    price: "BDT 38,500,00",
    transmission: "Automatic (CVT)",
    fuelType: "Octane",
    status: "In Stock",
    features: [
      "Toyota Safety Sense 2.0",
      "Beige Leather Interior",
      "Power Driver Seat",
      "Push Start & Smart Key",
      "360 Camera & Parking Sensors",
      "Original Japanese Navigation"
    ],
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "car-2",
    title: "Toyota Harrier Progressive 2021",
    make: "Toyota",
    model: "Harrier",
    year: 2021,
    engine: "2000 cc",
    color: "Attitude Black",
    mileage: "21,000 km",
    auctionGrade: "5.0 / A",
    price: "BDT 64,000,00",
    transmission: "Automatic",
    fuelType: "Octane / Hybrid",
    status: "In Stock",
    features: [
      "Panoramic Dimming Sunroof",
      "JBL Sound System",
      "Brown Premium Leather Interior",
      "Radar Cruise Control",
      "HUD Head-up Display"
    ],
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "car-3",
    title: "Toyota Noah Hybrid Si WxB 2019",
    make: "Toyota",
    model: "Noah",
    year: 2019,
    engine: "1800 cc Hybrid",
    color: "Sparkling Black",
    mileage: "36,000 km",
    auctionGrade: "4.0 / B",
    price: "BDT 34,20,000",
    transmission: "Automatic",
    fuelType: "Hybrid",
    status: "In Stock",
    features: [
      "Dual Power Sliding Doors",
      "7-Seater Captain Seats",
      "Rear Roof Monitor",
      "Ultra Fuel Efficient (22 km/L)",
      "Safety Sense Package"
    ],
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "car-4",
    title: "Honda Vezel Z Sensing 2020",
    make: "Honda",
    model: "Vezel",
    year: 2020,
    engine: "1500 cc e:HEV",
    color: "Wine Red",
    mileage: "24,000 km",
    auctionGrade: "4.5 / A",
    price: "BDT 31,80,000",
    transmission: "Dual Clutch 7-Speed",
    fuelType: "Hybrid",
    status: "In Stock",
    features: [
      "Honda Sensing Tech",
      "Half Leather Sport Seats",
      "Paddle Shifters",
      "LED Sequential Indicators",
      "Magic Rear Seats"
    ],
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80"
  }
];

export const WHY_CHOOSE_US: FeaturePoint[] = [
  {
    id: "exp-team",
    title: "Experienced Team",
    description: "Certified automotive engineers and skilled detailers with over 12+ years of hands-on experience in Japanese vehicles.",
    iconName: "UserCheck",
    statBadge: "12+ Years Exp."
  },
  {
    id: "mod-equip",
    title: "Modern Equipment",
    description: "Equipped with climate-controlled paint spray booths, computerized diagnostic scanners, German dual-action polishers, and dry steam washers.",
    iconName: "ShieldCheck",
    statBadge: "High-Tech Tools"
  },
  {
    id: "aff-price",
    title: "Affordable Pricing",
    description: "Transparent rates without hidden costs. High premium car care delivered at competitive prices tailored for Rajshahi vehicle owners.",
    iconName: "Tag",
    statBadge: "Transparent Rates"
  },
  {
    id: "trust-serv",
    title: "Trusted Service",
    description: "Built on honesty and customer satisfaction. Over 5,000+ happy car owners trust us for sales, detailing, and servicing.",
    iconName: "Award",
    statBadge: "5,000+ Clients"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Deep Snow Foam Car Wash",
    category: "Wash",
    categoryLabel: "Car Wash",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=80",
    description: "High pressure foam bathing removing road grime from Toyota Crown."
  },
  {
    id: "gal-2",
    title: "3-Step Ceramic Paint Polish",
    category: "Polish",
    categoryLabel: "Car Polish",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=800&q=80",
    description: "Restoring depth and mirror gloss finish on dark navy paintwork."
  },
  {
    id: "gal-3",
    title: "Engine Bay Steam Restoration",
    category: "BeforeAfter",
    categoryLabel: "Before & After",
    beforeImage: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
    image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=80",
    description: "Before & After transformation of oil-coated engine bay into spotless dry condition."
  },
  {
    id: "gal-4",
    title: "Precision Bumper Dent & Paint Job",
    category: "DentPaint",
    categoryLabel: "Dent & Paint",
    image: "https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=800&q=80",
    description: "Computer matched paint spray booth finishing for seamless repair."
  },
  {
    id: "gal-5",
    title: "Our Main Service Workshop",
    category: "Workshop",
    categoryLabel: "Workshop",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
    description: "Fully equipped modern bay with hydraulic lifts and computerized scanner units."
  },
  {
    id: "gal-6",
    title: "Happy Customer Reconditioned Delivery",
    category: "Delivery",
    categoryLabel: "Customer Delivery",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
    description: "Handing over fresh 4.5 Auction Grade Toyota Premio key to proud Rajshahi owner."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "rev-1",
    name: "Tanvir Ahmed",
    location: "Padma Residential Area, Rajshahi",
    carModel: "Toyota Premio 2018",
    rating: 5,
    comment: "I bought my Toyota Premio from Arshi Automobile. The auction sheet was 100% verified authentic. They even provided full ceramic polish and detailing before handing over the keys. Most trustworthy automobile shop in Rajshahi!",
    date: "July 2026",
    serviceTaken: "Reconditioned Car Purchase & Detailing"
  },
  {
    id: "rev-2",
    name: "Dr. Nazmul Hasan",
    location: "KAZI HATA, Rajshahi",
    carModel: "Toyota Harrier 2020",
    rating: 5,
    comment: "Took my Harrier for full interior steam cleaning and dent repair on the rear door. Their paint matching in the spray booth was flawless — looks like it never had a dent! Very polite team and reasonable price.",
    date: "June 2026",
    serviceTaken: "Dent & Paint + Interior Steam Cleaning"
  },
  {
    id: "rev-3",
    name: "Engr. Mahmudul Islam",
    location: "Sapura, Rajshahi",
    carModel: "Honda Vezel Hybrid",
    rating: 5,
    comment: "Regular customer for foam wash and engine room cleaning. They treat every car with utmost care using high-end microfiber towels and safe steam. Highly recommended for any car care in Rajshahi!",
    date: "August 2026",
    serviceTaken: "Car Wash & Engine Room Cleaning"
  }
];
