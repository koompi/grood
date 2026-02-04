"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

const timelineEvents = [
  {
    year: "2020",
    title: "The Beginning",
    description:
      "Grood was founded in Phnom Penh with a simple mission: make urban mobility sustainable, stylish, and accessible.",
  },
  {
    year: "2021",
    title: "First Prototype",
    description:
      "After months of research and development, we unveiled our first prototype at Cambodia Tech Summit.",
  },
  {
    year: "2022",
    title: "S1 Launch",
    description:
      "The Grood S1 launched to critical acclaim, selling out within the first month.",
  },
  {
    year: "2023",
    title: "Scaling Up",
    description:
      "We opened our flagship store and expanded our team to meet growing demand.",
  },
];

const values = [
  {
    title: "Rider First",
    description:
      "Every decision we make starts with the rider. We design for real city life, real commutes, real adventures.",
  },
  {
    title: "Built to Last",
    description:
      "Quality over quantity. Our bikes are engineered to ride for years, not months. We stand behind every Grood.",
  },
  {
    title: "Sustainable Future",
    description:
      "Electric mobility is just the start. We're committed to reducing our environmental impact at every step.",
  },
];

export default function OurStory() {
  return (
    <div className="bg-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-primary-deep text-white overflow-hidden">
        {/* <div className="absolute inset-0 z-0 opacity-50">
          <Image
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80"
            alt="Grood Workshop"
            fill
            className="object-cover"
          />
        </div> */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <span className="text-secondary font-bold tracking-widest text-sm uppercase mb-4 block">
            Building the future of mobility
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Introducing Grood
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* What is Grood */}
            <div>
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/oldbike.jpg"
                  alt="Grood E-Bike"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-secondary-deep font-bold tracking-widest text-sm uppercase mb-4 block">
                What is Grood E-Bikes?
              </span>
              <p className="text-gray-600 text-lg leading-relaxed">
                Drawing inspiration from the iconic Cambodian bicycle designs of
                the late 1970s, these bikes combine a classic aesthetic with
                modern technology. Grood has redefined urban mobility in
                Cambodia with its collection of chic, high-performance electric
                bicycles for eco-conscious riders without compromising on style.
              </p>
            </div>

            {/* Who's behind */}
            <div>
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/bikes/siemreap/2.jpg"
                  alt="Grood Team"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-secondary-deep font-bold tracking-widest text-sm uppercase mb-4 block">
                Who&apos;s behind this project?
              </span>
              <p className="text-gray-600 text-lg leading-relaxed">
                We created Grood bicycles back in 2020 as a classic style
                bicycle concept. What started as a passion project has grown
                into Cambodia&apos;s leading electric bicycle brand.
              </p>
            </div>
          </div>

          {/* Designed in Cambodia */}
          <div className="mt-16 p-10 bg-[#FAFAFA] rounded-3xl">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center shrink-0">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-2">
                  Designed & Assembled in Cambodia
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Grood aims to expertly design and assemble every bike,
                  ensuring it fulfills our precise standards and specifications.
                  Every Grood is proudly made in Cambodia.
                </p>
              </div>
            </div>
          </div>

          {/* Workshop Image */}
          <div className="mt-16 relative aspect-21/9 rounded-3xl overflow-hidden">
            <Image
              src="/images/bikes/siemreap/design.jpg"
              alt="Grood Workshop in Cambodia"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
