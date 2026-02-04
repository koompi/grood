import { ReactNode } from "react";

export interface BikeSpecs {
  range: string;
  rangeLabel: string;
  speed: string;
  speedLabel: string;
  speedSub: string;
  weight: string;
  weightLabel: string;
  battery: string;
  batteryLabel: string;
  batterySub: string;
  motor: string;
  motorLabel: string;
}

export interface BikeFeature {
  title: string;
  desc: string;
}

export interface BikeComponent {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  specs: string[];
}

export interface Bike {
  id: string;
  name: string;
  model: string;
  tagline: string;
  description: string;
  price: string;
  priceNumber: number;
  color: string;
  soldOut?: boolean;
  specs: BikeSpecs;
  images: string[];
  features: BikeFeature[];
  components: BikeComponent[];
}

export const bikes: Record<string, Bike> = {
  siemreap: {
    id: "siemreap",
    name: "Siem Reap",
    model: "HERITAGE COLLECTION",
    tagline: "Where tradition meets innovation",
    description:
      "Classic design meets modern technology. Elegant, effortless city riding.",
    price: "$0.05",
    priceNumber: 0.05,
    color: "Forest Green",
    specs: {
      range: "40km",
      rangeLabel: "Battery Range",
      speed: "25",
      speedLabel: "Top Speed",
      speedSub: "km/h assisted",
      weight: "18kg",
      weightLabel: "Weight",
      battery: "360Wh",
      batteryLabel: "Battery",
      batterySub: "2.5hr to full",
      motor: "250W",
      motorLabel: "Motor",
    },
    images: [
      "/images/bikes/siemreap/white/bg.JPG",
      "/images/bikes/siemreap/white/body.JPG",
      "/images/bikes/siemreap/white/spring.JPG",
      "/images/bikes/siemreap/white/light.JPG",
      "/images/bikes/siemreap/white/handle.JPG",
      "/images/bikes/siemreap/white/battery.JPG",
    ],
    features: [
      {
        title: "Classic Design",
        desc: "Timeless aesthetics inspired by heritage craftsmanship",
      },
      {
        title: "Smooth Ride",
        desc: "Comfortable geometry perfect for daily commuting",
      },
      {
        title: "Built to Last",
        desc: "Premium materials for years of reliable service",
      },
    ],
    components: [
      {
        title: "Invisible Battery",
        subtitle: "36V 7.0Ah Ultra-Light",
        description:
          "Power that disappears into the design. Go further, charge faster, ride longer.",
        image: "/images/bikes/siemreap/white/battery.JPG",
        specs: ["40km Range", "1.16kg Weight", "2hr Charge", "800 Cycles"],
      },
      {
        title: "Compact Motor",
        subtitle: "350W Rear Hub Motor",
        description:
          "Silent strength when you need it. Conquer hills effortlessly, arrive without sweat.",
        image: "/images/bikes/siemreap/white/spring.JPG",
        specs: ["350W Power", "32km/h Max", "5 Assist Levels"],
      },
      {
        title: "Minimalist Design",
        subtitle: "Subtle & User-Friendly",
        description:
          "Nothing unnecessary. Everything intentional. Ride with clarity, day or night.",
        image: "/images/bikes/siemreap/white/assemble.JPG",
        specs: ["Clean Interface", "100lux Lighting", "Intuitive Controls"],
      },
      {
        title: "9 Speed Gear",
        subtitle: "Shimano Drivetrain",
        description:
          "The perfect gear, every time. Trusted by professionals, loved by commuters.",
        image: "/images/bikes/siemreap/white/handle.JPG",
        specs: ["9 Speed Shimano", "Proven Durability", "Smooth Shifting"],
      },
      {
        title: "Pedal Assistance",
        subtitle: "Intelligent Power Delivery",
        description:
          "Your effort, amplified. Feel the joy of cycling without the exhaustion.",
        image: "/images/bikes/siemreap/white/paddle.JPG",
        specs: ["5 Power Levels", "Natural Feel", "Ride Without Power"],
      },
      {
        title: "Lightness Built to Last",
        subtitle: "Premium Steel Construction",
        description:
          "Carry it upstairs. Park it anywhere. Built for years of daily adventures.",
        image: "/images/bikes/siemreap/white/logo.JPG",
        specs: ["Under 20kg", "TIG Welded Steel", "Durable Components"],
      },
    ],
  },
  phnompenh: {
    id: "phnompenh",
    name: "Phnom Penh",
    model: "URBAN SERIES",
    tagline: "Built for the modern city",
    description:
      "High-performance for the fast-paced urban lifestyle. Power meets precision.",
    price: "$0.05",
    priceNumber: 0.05,
    color: "Midnight Black",
    soldOut: true,
    specs: {
      range: "40km",
      rangeLabel: "Battery Range",
      speed: "30",
      speedLabel: "Top Speed",
      speedSub: "km/h assisted",
      weight: "20kg",
      weightLabel: "Weight",
      battery: "504Wh",
      batteryLabel: "Battery",
      batterySub: "3hr to full",
      motor: "350W",
      motorLabel: "Motor",
    },
    images: [
      "/images/bikes/phnompenh/banner.jpg",
      "/images/bikes/phnompenh/gear.jpg",
      "/images/bikes/phnompenh/spring.jpg",
      "/images/bikes/phnompenh/seat.jpg",
      "/images/bikes/phnompenh/handle.jpg",
      "/images/bikes/phnompenh/battery.jpg",
    ],
    features: [
      {
        title: "Maximum Power",
        desc: "350W motor for conquering hills and quick acceleration",
      },
      {
        title: "Extended Range",
        desc: "65km range for all-day riding without worry",
      },
      {
        title: "Smart Connected",
        desc: "Integrated display with GPS and smartphone sync",
      },
    ],
    components: [
      {
        title: "Invisible Battery",
        subtitle: "36V 15Ah Extended Range",
        description:
          "All-day freedom without range anxiety. Power hidden in plain sight.",
        image: "/images/bikes/phnompenh/battery.jpg",
        specs: ["80km Range", "2.9kg Weight", "3hr Charge", "800 Cycles"],
      },
      {
        title: "Compact Motor",
        subtitle: "350W Rear Hub Motor",
        description:
          "Silent strength when you need it. Conquer hills effortlessly, arrive without sweat.",
        image: "/images/bikes/phnompenh/spring.jpg",
        specs: ["350W Power", "32km/h Max", "5 Assist Levels"],
      },
      {
        title: "Minimalist Design",
        subtitle: "Subtle & User-Friendly",
        description:
          "Nothing unnecessary. Everything intentional. Ride with clarity, day or night.",
        image: "/images/bikes/phnompenh/design.jpg",
        specs: ["Clean Interface", "100lux Lighting", "Intuitive Controls"],
      },
      {
        title: "9 Speed Gear",
        subtitle: "Shimano Drivetrain",
        description:
          "The perfect gear, every time. Trusted by professionals, loved by commuters.",
        image: "/images/bikes/phnompenh/2.jpg",
        specs: ["9 Speed Shimano", "Proven Durability", "Smooth Shifting"],
      },
      {
        title: "Pedal Assistance",
        subtitle: "Intelligent Power Delivery",
        description:
          "Your effort, amplified. Feel the joy of cycling without the exhaustion.",
        image: "/images/bikes/phnompenh/brake.jpg",
        specs: ["5 Power Levels", "Natural Feel", "Ride Without Power"],
      },
      {
        title: "Lightness Built to Last",
        subtitle: "Premium Steel Construction",
        description:
          "Carry it upstairs. Park it anywhere. Built for years of daily adventures.",
        image: "/images/bikes/phnompenh/pp.jpg",
        specs: ["Under 20kg", "TIG Welded Steel", "Durable Components"],
      },
    ],
  },
};

export function getBikeById(id: string): Bike | undefined {
  return bikes[id.toLowerCase()];
}

export function getAllBikes(): Bike[] {
  return Object.values(bikes);
}

export function getAllBikeIds(): string[] {
  return Object.keys(bikes);
}
