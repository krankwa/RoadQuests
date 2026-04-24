import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-bg-secondary rounded-md">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden rounded-md">
        <Image
          src="/images/about-us1.jpg"
          alt="Hero Background"
          fill
          className="object-cover rounded-md"
        />
        <div className="absolute inset-0 bg-text-primary/50 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-bg-primary text-4xl md:text-6xl font-extrabold mb-4">Roadquest Trucking Services</h1>
          <p className="text-bg-primary/90 text-lg md:text-2xl max-w-2xl">
            Safe, reliable, and cost-efficient logistics across Luzon, Visayas, and Mindanao.
          </p>
        </div>
      </section>

      <section className="container mx-auto p-6 space-y-12">
        {/* About Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 bg-bg-primary rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
          <div className="basis-1/2 text-center md:text-left flex flex-col justify-center">
            <h2 className="text-accent font-extrabold text-3xl md:text-4xl mb-3">About Roadquest Trucking Services</h2>
            <p className="text-text-secondary text-lg sm:text-xl">
              Established in 2025, Roadquest Trucking Services is a sole proprietorship based in Marilao, Bulacan. We specialize in provincial deliveries and container hauling across Luzon, Visayas, and Mindanao, serving manufacturers, distributors, retail chains, and SMEs with a reliable fleet of closed vans, wing vans, and trailer trucks.
            </p>
          </div>
          <div className="basis-1/2 flex justify-center items-center">
            <Image
              src="/images/about-us1.jpg"
              alt="Company Team"
              width={420}
              height={420}
              className="rounded-xl shadow-lg object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 bg-bg-primary rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
          <div className="basis-1/2 flex justify-center items-center">
            <Image
              src="/images/medium-shot-low-angle-view-smiling-engineer1.jpg"
              alt="Company Mission"
              width={420}
              height={420}
              className="rounded-xl shadow-lg object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="basis-1/2 text-left">
            <h3 className="text-accent font-bold text-2xl mb-2">Our Mission</h3>
            <p className="text-text-secondary text-lg">
              To provide safe, reliable, and cost-efficient trucking services that connect businesses and communities across the Philippines, ensuring on-time deliveries and excellent customer care.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 bg-bg-primary rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
          <div className="basis-1/2 text-left">
            <h3 className="text-accent font-bold text-2xl mb-2">Our Vision</h3>
            <p className="text-text-secondary text-lg">
              To be the most trusted and preferred trucking company in the Philippines, recognized for excellence in service, innovation in logistics, and commitment to customer satisfaction. To expand our fleet and services nationwide, making logistics easier and more affordable for every business we serve.
            </p>
          </div>
          <div className="basis-1/2 flex justify-center items-center">
            <Image
              src="/images/projects/project-11.jpg"
              alt="Company Vision"
              width={420}
              height={420}
              className="rounded-xl shadow-lg object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 bg-bg-primary rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
          <div className="basis-1/2 flex justify-center items-center">
            <Image
              src="/images/business-partners/preview1.jpg"
              alt="Company Values"
              width={420}
              height={420}
              className="rounded-xl shadow-lg object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="basis-1/2 text-left">
            <h3 className="text-accent font-bold text-2xl mb-2">Our Values</h3>
            <ul className="list-disc pl-5 space-y-2 text-text-secondary text-lg">
              <li>Safety and reliability in every delivery</li>
              <li>Commitment to on-time service and customer care</li>
              <li>Cost-efficient logistics solutions for all business sizes</li>
              <li>24/7 availability and responsive support</li>
            </ul>
          </div>
        </div>

        {/* Team Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 bg-bg-primary rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
          <div className="basis-1/2 text-left">
            <h3 className="text-accent font-bold text-2xl mb-2">Our Fleet</h3>
            <p className="text-text-secondary text-lg">
              Our fleet of closed vans, wing vans, and trailer trucks is regularly maintained to ensure safe and timely deliveries across every major route in Luzon, Visayas, and Mindanao.
            </p>
          </div>
          <div className="basis-1/2 flex justify-center items-center">
            <Image
              src="/images/business-partners/preview1.jpg"
              alt="Team Member"
              width={420}
              height={420}
              className="rounded-xl shadow-lg object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
