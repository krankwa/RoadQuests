import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      title: "Provincial Deliveries",
      description:
        "Reliable door-to-door deliveries across all provinces in Luzon, Visayas, and Mindanao, ensuring your goods arrive safely and on time.",
      image: "/images/projects/provdel.jpg",
    },
    {
      title: "Container Hauling",
      description:
        "Efficient hauling of 20ft and 40ft containers from ports to warehouses or business locations nationwide.",
      image: "/images/trucks/containerWlogo.png",
    },
    {
      title: "Closed Van Transport",
      description:
        "Secure, weather-protected transport for goods requiring enclosed delivery using our fleet of closed vans.",
      image: "/images/projects/closedV.jpg",
    },
    {
      title: "Wing Van & Trailer Trucks",
      description:
        "High-capacity wing van and trailer truck services for bulk shipments and large-volume logistics requirements.",
      image: "/images/projects/wingvan.jpg",
    },
  ];

  return (
    <main className="bg-bg-secondary rounded-md min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden rounded-md">
        <Image
          src="/images/projects/backgroundvans.jpg"
          alt="Services Hero"
          fill
          className="object-cover rounded-md"
        />
        <div className="absolute inset-0 bg-text-primary/50 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-bg-primary text-4xl md:text-6xl font-extrabold mb-4">
            Our Services
          </h1>
          <p className="text-bg-primary/90 text-lg md:text-2xl max-w-2xl">
            Logistics solutions across Luzon, Visayas, and Mindanao — built for
            manufacturers, distributors, retail chains, and SMEs.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-bg-primary rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center p-6"
          >
            <div className="w-40 h-40 mb-4 relative">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="rounded-xl object-cover hover:scale-105 transition-transform duration-300 "
              />
            </div>
            <h3 className="text-accent font-bold text-xl mb-2">
              {service.title}
            </h3>
            <p className="text-text-secondary text-base">
              {service.description}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
