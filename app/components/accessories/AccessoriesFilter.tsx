import { categories } from "@/app/lib/accessories-data";

interface AccessoriesFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function AccessoriesFilter({
  selectedCategory,
  onSelectCategory,
}: AccessoriesFilterProps) {
  return (
    <div className="flex overflow-x-auto py-8 px-6 gap-4 no-scrollbar justify-start md:justify-center border-b border-gray-100 dark:border-white/10 bg-white">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
            selectedCategory === category
              ? "bg-primary text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
