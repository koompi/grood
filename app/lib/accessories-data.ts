export interface Accessory {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  isBestSeller?: boolean;
}

export const categories = [
  "All",
  "Safety & Security",
  "Bags & Storage",
  "Comfort",
  "Tech",
  "Maintenance",
];

export const accessories: Accessory[] = [
  {
    id: "1",
    name: "Battery 36V 7.0Ah",
    price: 249,
    originalPrice: 299,
    rating: 5,
    reviews: 12,
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80",
    category: "Maintenance",
    isBestSeller: true,
  },
  {
    id: "2",
    name: "Front Rack",
    price: 89,
    rating: 4,
    reviews: 34,
    image: "https://images.unsplash.com/photo-1593006263593-3d9692dd5454?w=800&q=80",
    category: "Bags & Storage",
  },
  {
    id: "3",
    name: "Rear Rack for Mixte",
    price: 79,
    rating: 5,
    reviews: 8,
    image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=800&q=80",
    category: "Bags & Storage",
  },
  {
    id: "4",
    name: "Grood Smart Helmet",
    price: 129,
    rating: 5,
    reviews: 56,
    image: "https://images.unsplash.com/photo-1557803175-298c918c3eff?w=800&q=80",
    category: "Safety & Security",
    isBestSeller: true,
  },
  {
    id: "5",
    name: "Phone Mount Pro",
    price: 49,
    rating: 4,
    reviews: 120,
    image: "https://images.unsplash.com/photo-1586737526978-65f57fc9e776?w=800&q=80",
    category: "Tech",
  },
  {
    id: "6",
    name: "Comfort Saddle",
    price: 89,
    originalPrice: 110,
    rating: 5,
    reviews: 45,
    image: "https://images.unsplash.com/photo-1598289895066-6eb45ce28054?w=800&q=80",
    category: "Comfort",
  },
  {
    id: "7",
    name: "U-Lock Heavy Duty",
    price: 65,
    rating: 5,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1622439768407-353d7195a62e?w=800&q=80",
    category: "Safety & Security",
  },
  {
    id: "8",
    name: "Extra Battery 36V 15Ah",
    price: 399,
    rating: 5,
    reviews: 4,
    image: "https://images.unsplash.com/photo-1623998246726-0e31843b44b8?w=800&q=80",
    category: "Maintenance",
  },
];
