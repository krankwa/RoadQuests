'use client';

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faTruckMoving,
  faTruckRampBox,
  faBoxesStacked,
  faWeightHanging,
  faRulerCombined,
} from "@fortawesome/free-solid-svg-icons";

interface Slide {
  id: number;
  username: string;
  tagline: string;
  image: string;
  profileImage: string;
}

interface DemoSliderProps {
  data: Slide[];
}

const fleet = [
  {
    icon: faTruck,
    title: "Closed Van",
    description:
      "Fully enclosed cargo space for weather-sensitive goods and secure provincial deliveries.",
    capacity: "Up to 4 tons",
    dimensions: "14–16 ft",
    image: "/images/header-image1.jpg",
  },
  {
    icon: faTruckMoving,
    title: "Wing Van",
    description:
      "Hydraulic side-opening wings for fast loading and unloading of palletized cargo.",
    capacity: "Up to 12 tons",
    dimensions: "28–32 ft",
    image: "/images/projects/project-11.jpg",
  },
  {
    icon: faTruckRampBox,
    title: "Trailer Truck",
    description:
      "High-capacity trailers built for long-haul shipments across Luzon, Visayas, and Mindanao.",
    capacity: "Up to 30 tons",
    dimensions: "40 ft",
    image: "/images/projects/project-21.jpg",
  },
  {
    icon: faBoxesStacked,
    title: "Container Hauler",
    description:
      "Port-to-door container hauling for 20ft and 40ft shipments with secure chassis mounting.",
    capacity: "20ft / 40ft containers",
    dimensions: "Port-certified",
    image: "/images/projects/project-31.jpg",
  },
];

const OurProject: React.FC<DemoSliderProps> = () => {
  return (
    <section className="w-full">
      <div className="text-center mb-10">
        <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-3">
          Our <span className="text-accent">Fleet</span>
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto text-base md:text-lg">
          A versatile mix of trucks ready for every kind of load — from small provincial runs to nationwide container hauls.
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
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-bold text-xl text-text-primary mb-2 group-hover:text-accent transition">
                {truck.title}
              </h3>
              <p className="text-text-secondary text-sm mb-4 flex-1">
                {truck.description}
              </p>
              <div className="border-t border-text-secondary/20 pt-3 space-y-2 text-sm">
                <div className="flex items-center gap-2 text-text-secondary">
                  <FontAwesomeIcon icon={faWeightHanging} className="text-accent-alt w-4" />
                  <span className="font-medium text-text-primary">{truck.capacity}</span>
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <FontAwesomeIcon icon={faRulerCombined} className="text-accent-alt w-4" />
                  <span className="font-medium text-text-primary">{truck.dimensions}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProject;
