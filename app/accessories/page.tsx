import AccessoriesHero from "@/app/components/accessories/AccessoriesHero";
import AccessoriesList from "@/app/components/accessories/AccessoriesList";
import { accessories } from "@/app/lib/accessories-data";
import Header from "@/app/components/Header";

export default function AccessoriesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <AccessoriesHero />
      <AccessoriesList initialAccessories={accessories} />
    </main>
  );
}
