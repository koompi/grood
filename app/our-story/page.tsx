"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import GroodApp from "../components/GroodApp"; // Reusing the footer/app section style if needed or just footer

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
      <section className="relative h-[60vh] flex items-center justify-center bg-black/90 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50">
          <Image
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80"
            alt="Grood Workshop"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <span className="text-secondary font-bold tracking-widest text-sm uppercase mb-4 block">
            Our Journey
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Building the future of mobility
          </h1>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-6 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 md:translate-x-0 hidden md:block"></div>
          <div className="absolute left-[20px] top-0 bottom-0 w-px bg-gray-200 md:hidden"></div>

          <div className="space-y-24">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Content */}
                <div className="flex-1 md:w-1/2 pl-12 md:px-0 md:text-right">
                  <div
                    className={`md:px-12 ${index % 2 !== 0 ? "md:text-left" : ""}`}
                  >
                    <span className="text-4xl font-bold text-secondary block mb-2">
                      {event.year}
                    </span>
                    <h3 className="text-xl font-bold text-black mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed max-w-sm ml-auto">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-[20px] md:left-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-white shadow-sm -translate-x-1/2 z-10"></div>

                {/* Empty Space for Grid */}
                <div className="flex-1 md:w-1/2 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-primary-deep text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold tracking-widest text-sm uppercase mb-4 block">
              Our Values
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              What we stand for
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-primary-dark p-10 rounded-2xl border border-white/10 hover:border-secondary/50 transition-colors"
              >
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-secondary font-bold tracking-widest text-sm uppercase mb-4 block">
              Our Team
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-8">
              Riders building for riders
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Our team is made up of engineers, designers, and urban mobility
              enthusiasts who ride Grood bikes every day. We build what we ride,
              and we ride what we build.
            </p>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Headquartered in Phnom Penh with team members across Southeast
              Asia, we're a diverse group united by our passion for better
              cities.
            </p>

            <Link
              href="#"
              className="inline-flex items-center gap-2 text-black font-semibold hover:text-secondary transition-colors group"
            >
              Join our team
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          <div className="relative">
            <div className="aspect-square relative rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&q=80"
                alt="Grood Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
    </div>
  );
}
