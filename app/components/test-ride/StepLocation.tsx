import Image from "next/image";
import { Store } from "@/app/lib/test-ride-data";

interface StepLocationProps {
  stores: Store[];
  onSelectStore: (store: Store) => void;
}

export default function StepLocation({
  stores,
  onSelectStore,
}: StepLocationProps) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Choose a store near you</h2>
        <p className="text-gray-500">
          Select a location to see available test ride slots
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {stores.map((store) => (
          <button
            key={store.id}
            onClick={() => onSelectStore(store)}
            className="group text-left bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-secondary transition-all duration-300"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={store.image}
                alt={store.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-1 group-hover:text-secondary transition-colors">
                {store.name}
              </h3>
              <p className="text-gray-500 text-sm mb-4">{store.address}</p>
              <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 6V12L16 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {store.hours}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
