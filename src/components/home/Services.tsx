import { FocusCards } from "@/components/ui/focus-cards";

export default function Services() {
  const cards = [
    {
      title: "Provincial Deliveries",
      src: "/images/medium-shot-low-angle-view-smiling-engineer1.jpg",
    },
    {
      title: "Container Hauling",
      src: "/images/medium-shot-low-angle-view-smiling-engineer1.jpg",
    },
    {
      title: "Closed Van Transport",
      src: "/images/medium-shot-low-angle-view-smiling-engineer1.jpg",
    },
    {
      title: "Trailer Truck Logistics",
      src: "/images/medium-shot-low-angle-view-smiling-engineer1.jpg",
    },
  ];

  return (
    <section className="text-center md:text-left">
      <h2 className="text-text-primary font-extrabold text-3xl md:text-4xl lg:text-5xl mb-3">Services Tailored to You</h2>
      <p className="text-text-secondary text-sm md:text-base lg:text-lg max-w-3xl mx-auto md:mx-0">
        We provide comprehensive trucking and logistics services tailored to meet your business needs. Our reliable fleet ensures safe, timely, and cost-efficient deliveries across Luzon, Visayas, and Mindanao.
      </p>
      <FocusCards cards={cards} />
    </section>
  );
}