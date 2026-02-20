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

export interface EquipmentSpec {
  riderProfile: string;
  maxLoad: string;
  motorController: string;
  batteryCharger: string;
  chargingLifetime: string;
  warranty: {
    motor: string;
    battery: string;
  };
}

export interface ComponentSpec {
  name: string;
  value: string;
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
  mobileImage?: string;
  features: BikeFeature[];
  components: BikeComponent[];
  equipment?: EquipmentSpec;
  componentSpecs?: ComponentSpec[];
}

export const bikes: Record<string, Bike> = {
  siemreap: {
    id: "siemreap",
    name: "Siem Reap",
    model: "HERITAGE COLLECTION",
    tagline: "Where tradition meets innovation",
    description:
      "Classic design meets modern technology. Elegant, effortless city riding.",
    price: "$1,249",
    priceNumber: 1249,
    color: "Forest Green",
    specs: {
      range: "80km",
      rangeLabel: "Battery Range",
      speed: "30",
      speedLabel: "Top Speed",
      speedSub: "km/h assisted",
      weight: "20kg",
      weightLabel: "Weight",
      battery: "540Wh",
      batteryLabel: "Battery",
      batterySub: "5hr to full",
      motor: "350W",
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
    mobileImage: "/images/bikes/siemreap/white/mobile-bg.JPG",
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
        subtitle: "Ultra-Light",
        description:
          "Power that disappears into the design. Go further, charge faster, ride longer.",
        image: "/images/bikes/siemreap/white/battery.JPG",
        specs: ["80km Range", "2.55kg Weight", "5hr Charge", "800 Cycles"],
      },
      {
        title: "Compact Motor",
        subtitle: "350W Rear Hub Motor",
        description:
          "Silent strength when you need it. Conquer hills effortlessly, arrive without sweat.",
        image: "/images/bikes/siemreap/white/spring.JPG",
        specs: ["350W Power", "35km/h Max", "5 Assist Levels"],
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
    equipment: {
      riderProfile: "160cm to 195cm",
      maxLoad: "120kg",
      motorController: "Smart 100G (36V*350W)",
      batteryCharger: "36V, 15AH, Samsung Cell Charger 3A",
      chargingLifetime: "5 hours, 800 times",
      warranty: {
        motor: "2 years",
        battery: "1 year",
      },
    },
    componentSpecs: [
      { name: "Tires", value: "Kenda, 700*45C" },
      {
        name: "Saddles and Seat Post",
        value: "Selle Royal, Vivo, Aluminum, 300mm",
      },
      { name: "Crank", value: "Alloy, 44T" },
      { name: "Gears", value: "Shimano, 9s altus M2000 & 2010" },
      { name: "Brakes", value: "Hydraulic disc brakes, Shimano MT200" },
      { name: "Chain", value: "KMC x9" },
      { name: "Kick Stand", value: "Double foot, middle support" },
      { name: "Lock", value: "Integrated code ring lock" },
    ],
  },
  cargodoekdoek: {
    id: "cargodoekdoek",
    name: "Cargo Doek Doek",
    model: "CARGO COLLECTION",
    tagline: "Haul more, worry less",
    description:
      "Built for serious cargo. Family trips, business deliveries, or adventure loads—carry it all with ease.",
    price: "$1,780",
    priceNumber: 1780,
    color: "Desert Sand",
    specs: {
      range: "50km",
      rangeLabel: "Battery Range",
      speed: "30",
      speedLabel: "Top Speed",
      speedSub: "km/h assisted",
      weight: "28kg",
      weightLabel: "Weight",
      battery: "540Wh",
      batteryLabel: "Battery",
      batterySub: "3hr to full",
      motor: "350W",
      motorLabel: "Motor",
    },
    images: [
      "/images/bikes/cargo/background3.JPG",
      "/images/bikes/cargo/gear.JPG",
      "/images/bikes/cargo/cargo.JPG",
      "/images/bikes/cargo/spring.JPG",
      "/images/bikes/cargo/background3.JPG",
      "/images/bikes/cargo/battery.JPG",
    ],
    mobileImage: "/images/bikes/cargo/mobile-bg.JPG",
    features: [
      {
        title: "Massive Capacity",
        desc: "Front and rear cargo areas designed to carry up to 80kg total load",
      },
      {
        title: "Powerful Assist",
        desc: "350W motor makes hauling heavy loads feel effortless",
      },
      {
        title: "Family Ready",
        desc: "Safely transport kids, groceries, or gear with stability in mind",
      },
    ],
    components: [
      {
        title: "Extended Battery",
        subtitle: "36V 14Ah High-Capacity",
        description:
          "More power for bigger loads. Go the distance with cargo, not range anxiety.",
        image: "/images/bikes/cargo/battery.JPG",
        specs: ["50km Range", "2.9kg Weight", "5hr Charge", "1000 Cycles"],
      },
      {
        title: "Cargo Motor",
        subtitle: "350W Mid-Drive Motor",
        description:
          "Engineered for weight. Climb hills loaded, accelerate smoothly, arrive on time.",
        image: "/images/bikes/cargo/spring.JPG",
        specs: ["350W Power", "30km/h Max", "5 Assist Levels"],
      },
      {
        title: "Utility Design",
        subtitle: "Purpose-Built Frame",
        description:
          "Every line serves a function. Load, secure, ride—repeat daily without compromise.",
        image: "/images/bikes/cargo/background2.JPG",
        specs: ["150kg Capacity", "Integrated Mounts", "Weather Resistant"],
      },
      {
        title: "8 Speed Gear",
        subtitle: "Shimano Nexus Hub",
        description:
          "Internal gearing for reliability. Low maintenance, smooth shifts under load.",
        image: "/images/bikes/cargo/gear.JPG",
        specs: [],
      },
      {
        title: "Cargo Assist",
        subtitle: "Load-Sensing Technology",
        description:
          "Smart power that adapts to your cargo. Heavy or light, the ride feels the same.",
        image: "/images/bikes/cargo/cargo.JPG",
        specs: ["5 Power Levels", "Walk Assist Mode"],
      },
      {
        title: "Heavy-Duty Build",
        subtitle: "Reinforced Steel Frame",
        description:
          "Built to work hard every day. Commercial-grade durability for years of service.",
        image: "/images/bikes/cargo/background2.JPG",
        specs: ["28kg Frame", "Double-Wall Rims", "Industrial Components"],
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
    price: "$690",
    priceNumber: 690,
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
      battery: "252Wh",
      batteryLabel: "Battery",
      batterySub: "3hr to full",
      motor: "350W",
      motorLabel: "Motor",
    },
    images: [
      "/images/bikes/phnompenh/background.jpg",
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
