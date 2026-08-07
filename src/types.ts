export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  duration: string;
  startingPrice: string;
  category: 'cleaning' | 'restoration' | 'mechanical' | 'sales';
  image: string;
}

export interface ReconditionedCar {
  id: string;
  title: string;
  make: string;
  model: string;
  year: number;
  engine: string;
  color: string;
  mileage: string;
  auctionGrade: string;
  price: string;
  transmission: string;
  fuelType: string;
  features: string[];
  image: string;
  status: 'In Stock' | 'Upcoming' | 'Sold';
}

export interface FeaturePoint {
  id: string;
  title: string;
  description: string;
  iconName: string;
  statBadge?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Wash' | 'BeforeAfter' | 'DentPaint' | 'Workshop' | 'Polish' | 'Delivery';
  categoryLabel: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  carModel: string;
  rating: number;
  comment: string;
  date: string;
  serviceTaken: string;
  avatarUrl?: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email?: string;
  serviceId: string;
  carMakeModel: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}
