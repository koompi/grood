import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductShowcase from "./components/ProductShowcase";
import ConvertSection from "./components/ConvertSection";
import SmartFeatures from "./components/SmartFeatures";
import GroodApp from "./components/GroodApp";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductShowcase />
        <ConvertSection />
        <SmartFeatures />
        <GroodApp />
      </main>
    </>
  );
}
