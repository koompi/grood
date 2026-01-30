export default function AccessoriesHero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-primary-deep">
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          Accessories
        </h1>

        <p className="text-white/70 text-lg md:text-xl max-w-xl mx-auto">
          Gear up for the ride. Premium accessories designed to enhance your
          Grood experience.
        </p>
      </div>

      {/* Decorative background elements (optional, can be replaced with an image) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none"></div>
    </section>
  );
}
