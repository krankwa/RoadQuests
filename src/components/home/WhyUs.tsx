import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillWave,
  faBolt,
  faTruck,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const features = [
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
    icon: faTruck,
    title: "Reliable Fleet",
    description: "Closed vans, wing vans, and trailer trucks — well-maintained.",
  },
  {
    icon: faClock,
    title: "24/7 Service",
    description: "Dispatch and support whenever your business needs us.",
  },
];

export default function WhyUs() {
  return (
    <section className="text-center md:text-left">
      <h2 className="text-text-primary font-extrabold text-3xl md:text-4xl lg:text-5xl mb-3">
        Why Choose RoadQuest?
      </h2>
      <p className="text-text-secondary text-sm md:text-base lg:text-lg max-w-3xl mx-auto md:mx-0 mb-10">
        We go beyond moving cargo — we deliver reliability, speed, and value at every step of your supply chain.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white border border-[rgba(74,74,74,0.2)] rounded-xl p-4 flex flex-col gap-2 transition-all duration-200 hover:border-[#16A34A] hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)]"
          >
            <div className="w-11 h-11 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-lg">
              <FontAwesomeIcon icon={feature.icon} />
            </div>
            <h3 className="m-0 text-[17px] font-bold text-[#1A1A1A]">{feature.title}</h3>
            <p className="m-0 text-[13px] text-[#4A4A4A] leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
