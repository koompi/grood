import AccessoriesHero from "@/app/components/accessories/AccessoriesHero";
import AccessoriesList from "@/app/components/accessories/AccessoriesList";
import CityCommuterBundle from "@/app/components/accessories/CityCommuterBundle";
import { accessories } from "@/app/lib/accessories-data";
import Header from "@/app/components/Header";

export default function AccessoriesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <AccessoriesHero />
      <AccessoriesList initialAccessories={accessories} />
      <CityCommuterBundle />

      {/* Simple Footer (reused/placeholder if no global footer exists) */}
      <footer className="bg-black text-white/50 py-12 text-center text-sm border-t border-white/10">
        <p>
          &copy; {new Date().getFullYear()} GROOD MOTORS. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
