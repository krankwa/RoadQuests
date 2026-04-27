import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faTruckMoving,
  faTruckRampBox,
  faBoxesStacked,
  faWeightHanging,
  faRulerCombined,
  faRoute,
} from "@fortawesome/free-solid-svg-icons";

const fleet = [
  {
    icon: faTruckMoving,
    title: "Tractor Head (Prime Mover)",
    units: 3,
    description:
      "6×4 heavy-duty prime movers paired with ISO-standard container chassis. Handles both 20 ft and 40 ft dry van containers for port-to-door and inter-depot runs across the Philippines.",
    capacity: "28–30 tons (40 ft) · 20–25 tons (20 ft)",
    dimensions: "6×4 axle · 40 ft / 20 ft trailers",
    bestFor: "Port operations, import/export, nationwide bulk haul",
    image: "/images/trucks/tractor-head.jpg",
  },
  {
    icon: faTruck,
    title: "10-Wheeler Wing Van",
    units: 2,
    description:
      "Hydraulic wing-opening side panels enable fast pallet loading and unloading at manufacturing plants and distribution hubs.",
    capacity: "Up to 12-20 tons",
    dimensions: "6×2 axle · 32–40 ft body",
    bestFor: "Manufacturer-to-distributor runs, palletized cargo",
    image: "/images/projects/wingvan.jpg",
  },
  {
    icon: faTruckRampBox,
    title: "6-Wheeler Forward (Closed Van)",
    units: 2,
    description:
      "Cab-over-engine enclosed van for medium-volume city and provincial deliveries. Fully sealed cargo bay protects goods from weather and road dust.",
    capacity: "Up to 5–6 tons",
    dimensions: "4×2 axle · 14–16 ft body",
    bestFor: "Provincial deliveries, retail supply, dry goods",
    image: "/images/trucks/6whlerLogo.png",
  },
  {
    icon: faBoxesStacked,
    title: "6-Wheeler Dropside",
    units: 1,
    description:
      "Open flatbed with folding drop sides for flexible loading of oversized, loose, or irregularly shaped cargo.",
    capacity: "Up to 5–7 tons",
    dimensions: "4×2 axle · 14–16 ft flatbed",
    bestFor: "Construction materials, farm produce, general cargo",
    image: "/images/trucks/dropside.jpg",
  },
];

const OurProject: React.FC = () => {
  return (
    <section className="w-full">
      <div className="text-center mb-10">
        <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-3">
          Our <span className="text-accent">Fleet</span>
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto text-base md:text-lg">
          A versatile mix of trucks ready for every kind of load — from small
          provincial runs to nationwide container hauls.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {fleet.map((truck) => (
          <div
            key={truck.title}
            className="group bg-bg-primary rounded-xl overflow-hidden border border-text-secondary/20 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={truck.image}
                alt={truck.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 flex justify-center items-center size-11 rounded-full bg-accent text-bg-primary shadow-lg">
                <FontAwesomeIcon icon={truck.icon} className="text-xl" />
              </div>
              <div className="absolute top-3 right-3 bg-bg-primary/90 text-text-primary text-xs font-bold px-2 py-1 rounded-full shadow">
                {truck.units} {truck.units === 1 ? "Unit" : "Units"}
              </div>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-bold text-lg text-text-primary mb-2 group-hover:text-accent transition">
                {truck.title}
              </h3>
              <p className="text-text-secondary text-sm mb-4 flex-1">
                {truck.description}
              </p>
              <div className="border-t border-text-secondary/20 pt-3 space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faWeightHanging}
                    className="text-accent-alt w-4 shrink-0"
                  />
                  <span className="text-text-primary">{truck.capacity}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faRulerCombined}
                    className="text-accent-alt w-4 shrink-0"
                  />
                  <span className="text-text-primary">{truck.dimensions}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faRoute}
                    className="text-accent-alt w-4 shrink-0"
                  />
                  <span className="text-text-secondary">{truck.bestFor}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          href="/project"
          className="inline-flex items-center gap-2 px-8 py-3 border-2 border-accent text-accent rounded-full font-semibold hover:bg-accent hover:text-bg-primary transition"
        >
          View Full Fleet Details
        </Link>
      </div>
    </section>
  );
};

export default OurProject;
