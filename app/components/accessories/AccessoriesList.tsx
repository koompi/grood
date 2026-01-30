"use client";

import { useState } from "react";
import { Accessory } from "@/app/lib/accessories-data";
import AccessoriesFilter from "./AccessoriesFilter";
import ProductCard from "./ProductCard";

interface AccessoriesListProps {
  initialAccessories: Accessory[];
}

export default function AccessoriesList({
  initialAccessories,
}: AccessoriesListProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredAccessories =
    selectedCategory === "All"
      ? initialAccessories
      : initialAccessories.filter((item) => item.category === selectedCategory);

  return (
    <section className="bg-white min-h-screen">
      <AccessoriesFilter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {filteredAccessories.map((accessory) => (
            <ProductCard key={accessory.id} product={accessory} />
          ))}
        </div>

        {filteredAccessories.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              No accessories found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
