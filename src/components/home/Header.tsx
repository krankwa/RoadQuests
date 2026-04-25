import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillWave,
  faBolt,
  faTruckFast,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Header() {
  const whyChooseUs = [
    {
      icon: faMoneyBillWave,
      title: "Lower Cost",
      description: "Competitive rates for every shipment size and route.",
    },
    {
      icon: faBolt,
      title: "Fast Delivery",
      description: "On-time arrivals across Luzon, Visayas, and Mindanao.",
    },
    {
      icon: faTruckFast,
      title: "Reliable Fleet",
      description:
        "Closed vans, wing vans, and trailer trucks, well-maintained.",
    },
    {
      icon: faClock,
      title: "24/7 Service",
      description: "Dispatch and support whenever your business needs us.",
    },
  ];

  return (
    <header className="relative">
      <div className="flex flex-col items-center text-center z-10">
        <div className="w-full max-w-3xl">
          <h1 className="font-black text-4xl md:text-5xl lg:text-6xl leading-tight">
            Your Load, <span className="text-accent">Our Mission</span>
          </h1>
          <p className="text-text-secondary text-lg md:text-xl mt-4 max-w-xl mx-auto">
            Safe, reliable, and cost-efficient trucking across Luzon, Visayas,
            and Mindanao — serving manufacturers, distributors, retail chains,
            and SMEs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6">
            <Link
              href="/contact"
              className="inline-flex justify-center items-center px-8 py-3 font-semibold bg-accent text-bg-primary rounded-full hover:opacity-90 transition"
            >
              Contact Us
            </Link>
            <Link
              href="/service"
              className="inline-flex justify-center items-center px-8 py-3 font-semibold border-2 border-accent text-accent rounded-full hover:bg-accent hover:text-bg-primary transition"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-stretch gap-6 relative w-full mt-8 md:mt-12">
        <Image
          className="w-full lg:w-3/5 rounded-xl object-cover"
          src="/images/rdqstHeader.gif"
          alt="Roadquest fleet in transit"
          width={500}
          height={300}
          unoptimized
        />
        <div className="w-full lg:w-2/5 flex flex-col">
          <h2 className="text-text-primary font-extrabold text-3xl xl:text-4xl mb-3 text-center md:text-left">
            Why Choose <span className="text-accent-alt">Roadquest</span>
          </h2>
          <p className="text-text-secondary text-base md:text-lg text-center md:text-left mb-5">
            Built for businesses that depend on deliveries being on time, every
            time.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-start p-4 rounded-xl border border-text-secondary/20 bg-bg-primary hover:border-accent hover:shadow-md transition"
              >
                <div className="flex justify-center items-center size-11 rounded-full bg-accent text-bg-primary mb-3">
                  <FontAwesomeIcon icon={item.icon} className="text-xl" />
                </div>
                <h3 className="font-bold text-lg text-text-primary">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary mt-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
