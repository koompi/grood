// Grood Convert - E-Bike Conversion Kit Data

export interface ConvertKitSpecs {
  motor: string;
  motorPower: string;
  range: string;
  battery: string;
  batteryCapacity: string;
  chargeTime: string;
  weight: string;
  topSpeed: string;
  wheelSizes: string;
  brakeTypes: string;
  connectivity: string;
  warranty: string;
}

export interface ConvertKit {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  priceFormatted: string;
  specs: ConvertKitSpecs;
  features: string[];
  images: string[];
}

export interface ConvertAccessory {
  id: string;
  name: string;
  price: number;
  priceFormatted: string;
  image: string;
  description: string;
}

export interface WheelSize {
  id: string;
  label: string;
  value: string;
}

export interface Review {
  id: string;
  name: string;
  text: string;
  rating: number;
  verified: boolean;
  date: string;
}

export interface InstallationStep {
  number: string;
  title: string;
  description: string;
  image?: string;
}

export interface Hotspot {
  id: string;
  title: string;
  subtitle: string;
  specs: string[];
  position: {
    left: string;
    top: string;
  };
}

export interface PackageItem {
  name: string;
  description?: string;
}

// Main product data
export const convertKit: ConvertKit = {
  id: "grood-convert",
  name: "Grood Convertion Kit",
  tagline: "Your ideal one-stop solution for eBike kits",
  description:
    "The easiest way to electrify your existing bike. Install in 15 minutes, ride electric for years.",
  price: 420,
  priceFormatted: "$420",
  specs: {
    motor: "350W Hub Motor",
    motorPower: "350W",
    range: "40km",
    battery: "360Wh",
    batteryCapacity: "360Wh",
    chargeTime: "2.5 hours",
    weight: "~5kg",
    topSpeed: "25 km/h",
    wheelSizes: '20" / 24" / 26" / 27.5" / 28" / 29"',
    brakeTypes: "Disc and rim compatible",
    connectivity: "Bluetooth (iOS 12+ / Android 6+)",
    warranty: "2 years",
  },
  features: [
    "Adaptability: 6 bottle sizes, 5.2-20Ah batteries, 250/350/500W motors with front/rear/dual drive options. Transforms any bike into a smart, high-performance e-bike.",
    "Discreet design: Sleek, minimalist aesthetics preserve your bike's original look while achieving factory-standard e-bike integration through precision engineering. Ultra-lightweight, modular design (Battery Bottle + Motor)",
  ],
  images: [
    "/images/convert/kit.jpg",
    "/images/convert/1.jpg",
    "/images/convert/2.png",
  ],
};

// Wheel sizes
export const wheelSizes: WheelSize[] = [
  { id: "20", label: '20"', value: "20" },
  { id: "24", label: '24"', value: "24" },
  { id: "26", label: '26"', value: "26" },
  { id: "27.5", label: '27.5"', value: "27.5" },
  { id: "28", label: '28"', value: "28" },
  { id: "29", label: '29"', value: "29" },
];

// Accessories for upsell
export const accessories: ConvertAccessory[] = [
  // {
  //   id: "lcd-display",
  //   name: "Bluetooth LCD Display",
  //   price: 59,
  //   priceFormatted: "$59",
  //   image: "/images/bikes/siemreap/white/handle.JPG",
  //   description: "Real-time speed, battery, and distance display",
  // },
  {
    id: "anti-theft",
    name: "Anti-theft Security Bolt",
    price: 29,
    priceFormatted: "$29",
    image: "/images/bikes/siemreap/white/spring.JPG",
    description: "Secure your motor wheel with tamper-proof bolts",
  },
  {
    id: "phone-mount",
    name: "Grood Phone Mount",
    price: 19,
    priceFormatted: "$19",
    image: "/images/bikes/siemreap/white/light.JPG",
    description: "Universal mount for navigation and app control",
  },
];

// Customer reviews
export const reviews: Review[] = [
  {
    id: "1",
    name: "Sarah M.",
    text: "Installed it on my old Trek in exactly 15 minutes. Now my commute is a breeze. Best purchase I've made this year!",
    rating: 5,
    verified: true,
    date: "2025-12-15",
  },
  {
    id: "2",
    name: "Michael T.",
    text: "The 40km range is accurate. I've been using it daily for 3 months and the battery holds up great. Super quiet motor too.",
    rating: 5,
    verified: true,
    date: "2025-11-28",
  },
  {
    id: "3",
    name: "Emma L.",
    text: "I was skeptical about conversion kits but this one is legit. Quality components and the app works perfectly.",
    rating: 5,
    verified: true,
    date: "2025-11-10",
  },
  {
    id: "4",
    name: "David K.",
    text: "Hills are no longer a problem. The 350W motor handles inclines effortlessly. My vintage Schwinn is now electric!",
    rating: 5,
    verified: true,
    date: "2025-10-22",
  },
  {
    id: "5",
    name: "Lisa R.",
    text: "Great customer support helped me pick the right wheel size. Installation was simple and the kit looks sleek on my bike.",
    rating: 4,
    verified: true,
    date: "2025-10-05",
  },
];

// Installation steps
export const installationSteps: InstallationStep[] = [
  {
    number: "01",
    title: "Receive your kit at home",
    description:
      "Delivered within 3-5 business days, fully equipped and ready to install. Everything you need is in the box.",
    image: "/images/bikes/siemreap/white/body.JPG",
  },
  {
    number: "02",
    title: "Swap the front wheel",
    description:
      "Remove your front wheel, replace with the Grood motorized wheel. All tools are included in the kit.",
    image: "/images/bikes/siemreap/white/spring.JPG",
  },
  {
    number: "03",
    title: "Mount the battery",
    description:
      "Attach the bottle-style battery to your frame using the included mount. Connect the simple cable to the motor.",
    image: "/images/bikes/siemreap/white/battery.JPG",
  },
  {
    number: "04",
    title: "Pair & ride",
    description:
      "Download the Grood app, connect via Bluetooth, customize your settings, and start riding electric.",
    image: "/images/bikes/siemreap/white/handle.JPG",
  },
];

// Interactive hotspots for product showcase
export const hotspots: Hotspot[] = [
  {
    id: "battery",
    title: "360Wh Battery",
    subtitle: "40km range, 2.5hr charge",
    specs: ["1.5kg", "800 cycles", "Removable"],
    position: { left: "40%", top: "75%" },
  },
  {
    id: "motor",
    title: "350W Hub Motor",
    subtitle: "Silent power, instant torque",
    specs: ["25km/h max", "5 assist levels", "Weatherproof"],
    position: { left: "75%", top: "55%" },
  },
  {
    id: "sensor",
    title: "Smart Pedal Sensor",
    subtitle: "Activates based on pedaling",
    specs: ["Instant response", "Natural feel", "Easy clip-on"],
    position: { left: "28%", top: "83%" },
  },
  {
    id: "tools",
    title: "Everything Included",
    subtitle: "Tools, cables, manual",
    specs: ["No skills needed", "All hardware", "Video guide"],
    position: { left: "38%", top: "55%" },
  },
];

// Package contents
export const packageContents: PackageItem[] = [
  { name: "Motorized wheel", description: "With city tire and black rim" },
  { name: "360Wh Battery", description: "Bottle-style, removable" },
  { name: "Battery frame mount", description: "Universal fit" },
  { name: "Charger", description: "Fast charging, 2.5hr to full" },
  { name: "Pedal sensor", description: "Clip-on installation" },
];

// Technical specifications for accordion
export const technicalSpecs = [
  { label: "Motor Power", value: "250W / 350W / 500W" },
  { label: "Drive Options", value: "Front / Rear / Dual drive" },
  { label: "Battery Capacity", value: "5.2-20Ah" },
  { label: "Battery Sizes", value: "6 bottle sizes available" },
  { label: "Top Speed", value: "25 km/h assisted" },
  { label: "Design", value: "Ultra-lightweight, modular" },
  { label: "Wheel Sizes", value: '20" / 24" / 26" / 27.5" / 28" / 29"' },
  { label: "Brake Types", value: "Disc and rim compatible" },
  { label: "Warranty", value: "2 years full coverage" },
];

// Features for features grid
export const features = [
  {
    id: "anti-theft",
    title: "Anti-theft Security",
    description:
      "GPS tracking, remote motor disable, and audible alarm keep your kit safe.",
    icon: "shield",
  },
  {
    id: "slope",
    title: "Slope Detection",
    description:
      "Smart sensor automatically adjusts power based on incline for effortless climbing.",
    icon: "mountain",
  },
  {
    id: "tracking",
    title: "Performance Tracking",
    description:
      "Monitor distance, speed, battery life, and riding stats in the Grood app.",
    icon: "chart",
  },
];

// Trust badges
export const trustBadges = [
  {
    id: "warranty",
    title: "2-Year Warranty",
    description: "Full coverage on all components",
    icon: "warranty",
  },
  {
    id: "returns",
    title: "30-Day Returns",
    description: "Test at home, return if not satisfied",
    icon: "returns",
  },
  {
    id: "delivery",
    title: "Free Delivery",
    description: "Within 3-5 business days",
    icon: "delivery",
  },
  {
    id: "payment",
    title: "Secure Payment",
    description: "Encrypted checkout",
    icon: "payment",
  },
];

// Announcement bar messages
export const announcements = [
  "Free Shipping on All Orders",
  "2-Year Warranty Included",
  "30-Day Money-Back Guarantee",
];
