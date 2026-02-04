export interface Accessory {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  description?: string;
  isBestSeller?: boolean;
}

export const categories = ["All", "Batteries", "Racks"];

export const accessories: Accessory[] = [
  {
    id: "1",
    name: "Extra Battery",
    price: 249,
    rating: 5,
    reviews: 12,
    image: "/images/bikes/siemreap/white/battery.JPG",
    category: "Batteries",
    description:
      "Battery for Grood. 36V 7.0Ah and more than 40 km of autonomy in just 1.16 kg. 36V 15Ah and 80 km of autonomy in just 2.9 kg. Battery's lifespan is around 800 charges.",
    isBestSeller: true,
  },
  {
    id: "2",
    name: "Front Rack",
    price: 89,
    rating: 4,
    reviews: 34,
    image: "/images/bikes/siemreap/white/handle.JPG",
    category: "Racks",
    description: "Specs coming soon.",
  },
  {
    id: "3",
    name: "Rear Rack for Mixte",
    price: 79,
    rating: 5,
    reviews: 8,
    image: "/images/bikes/siemreap/white/backrack.JPG",
    category: "Racks",
    description: "Specs coming soon.",
  },
];
