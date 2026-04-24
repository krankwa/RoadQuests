import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faTruckMoving,
  faTruckRampBox,
  faBoxesStacked,
  faWeightHanging,
  faRulerCombined,
  faRoute,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const fleet = [
  {
    id: 1,
    icon: faTruck,
    title: "Closed Van",
    description:
      "Fully enclosed cargo bay protecting goods from weather and road dust. Ideal for retail replenishment, dry goods, and sensitive cargo.",
    capacity: "Up to 4 tons",
    dimensions: "14 – 16 ft body",
    bestFor: "Provincial deliveries, retail supply",
    image: "/images/header-image1.jpg",
  },
  {
    id: 2,
    icon: faTruckMoving,
    title: "Wing Van",
    description:
      "Hydraulic wing-opening design enables fast side-loading and unloading of palletized shipments at manufacturing plants and distribution centers.",
    capacity: "Up to 12 tons",
    dimensions: "28 – 32 ft body",
    bestFor: "Manufacturer-to-distributor runs",
    image: "/images/projects/project-11.jpg",
  },
  {
    id: 3,
    icon: faTruckRampBox,
    title: "Trailer Truck",
    description:
      "Heavy-duty long-haul trailers built for interprovincial and inter-island deliveries across Luzon, Visayas, and Mindanao.",
    capacity: "Up to 30 tons",
    dimensions: "40 ft trailer",
    bestFor: "Nationwide bulk logistics",
    image: "/images/projects/project-21.jpg",
  },
  {
    id: 4,
    icon: faBoxesStacked,
    title: "Container Hauler",
    description:
      "Port-to-door container hauling with secure chassis mounting. Handles both dry and refrigerated container units.",
    capacity: "20 ft / 40 ft containers",
    dimensions: "ISO container-certified",
    bestFor: "Port operations, import/export",
    image: "/images/projects/project-31.jpg",
  },
];

const coverage = [
  {
    region: "Luzon",
    description:
      "Metro Manila, Central Luzon, CALABARZON, Bicol, and the Northern provinces.",
    icon: faMapLocationDot,
  },
  {
    region: "Visayas",
    description:
      "Cebu, Iloilo, Bacolod, Tacloban, and surrounding islands via RoRo routes.",
    icon: faRoute,
  },
  {
    region: "Mindanao",
    description:
      "Davao, Cagayan de Oro, General Santos, Zamboanga, and inland delivery points.",
    icon: faMapLocationDot,
  },
];

export default function FleetPage() {
  return (
    <main className="relative">
      <section className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="font-black text-4xl md:text-5xl lg:text-6xl leading-normal text-center md:text-left">
          Our <span className="text-accent">Fleet</span>
          <br />
          Ready for Every Load
        </h1>
        <p className="md:w-2/5 text-text-secondary text-lg mt-6 md:mt-0 text-center md:text-left">
          From small provincial deliveries to full container hauls, our fleet is
          built to handle the logistics demands of modern Philippine businesses.
        </p>
      </section>

      <section className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fleet.map((truck) => (
            <div
              key={truck.id}
              className="rounded-xl shadow-lg overflow-hidden border border-text-secondary/20 bg-bg-primary hover:shadow-xl transition group"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={truck.image}
                  alt={truck.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-4 left-4 flex justify-center items-center size-12 rounded-full bg-accent text-bg-primary shadow-lg">
                  <FontAwesomeIcon icon={truck.icon} className="text-xl" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-2xl mb-2 text-text-primary">
                  {truck.title}
                </h3>
                <p className="text-text-secondary mb-4">{truck.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-text-secondary/20 pt-4">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faWeightHanging}
                      className="text-accent-alt"
                    />
                    <span className="text-sm">
                      <span className="font-semibold">Capacity:</span>{" "}
                      {truck.capacity}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faRulerCombined}
                      className="text-accent-alt"
                    />
                    <span className="text-sm">
                      <span className="font-semibold">Size:</span>{" "}
                      {truck.dimensions}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 sm:col-span-2">
                    <FontAwesomeIcon
                      icon={faRoute}
                      className="text-accent-alt"
                    />
                    <span className="text-sm">
                      <span className="font-semibold">Best for:</span>{" "}
                      {truck.bestFor}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="text-center mb-10">
          <h2 className="font-extrabold text-3xl md:text-4xl lg:text-5xl mb-3">
            Nationwide <span className="text-accent-alt">Coverage</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            We serve businesses across all three major island groups of the
            Philippines.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coverage.map((area) => (
            <div
              key={area.region}
              className="p-6 rounded-xl border-2 border-text-secondary/20 bg-bg-primary hover:border-accent transition text-center"
            >
              <div className="flex justify-center items-center size-16 rounded-full bg-accent text-bg-primary mx-auto mb-4">
                <FontAwesomeIcon icon={area.icon} className="text-2xl" />
              </div>
              <h3 className="font-bold text-2xl text-text-primary mb-2">
                {area.region}
              </h3>
              <p className="text-text-secondary">{area.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 text-center bg-bg-secondary rounded-2xl p-10">
        <h2 className="text-text-primary font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
          Ready to Move Your Cargo?
        </h2>
        <p className="max-w-2xl mx-auto text-text-secondary mb-6 text-lg">
          Tell us what you need hauled — we&apos;ll match your shipment with the
          right truck and a competitive quote.
        </p>
        <Link href="/contact">
          <button className="bg-accent text-bg-primary px-8 py-3 rounded-full font-semibold cursor-pointer hover:opacity-90 transition">
            Contact Us
          </button>
        </Link>
      </section>
    </main>
  );
}
