import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faEye,
  faHandshake,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {
  return (
    <main className="bg-bg-secondary rounded-md">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden rounded-md">
        <Image
          src="/images/rdqstHeader.gif"
          alt="Hero Background"
          fill
          className="object-cover rounded-md"
          unoptimized
        />
        <div className="absolute inset-0 bg-text-primary/50 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-bg-primary text-4xl md:text-6xl font-extrabold mb-4">
            Roadquest Trucking Services
          </h1>
          <p className="text-bg-primary/90 text-lg md:text-2xl max-w-2xl">
            Safe, reliable, and cost-efficient logistics across Luzon, Visayas,
            and Mindanao.
          </p>
        </div>
      </section>

      <section className="container mx-auto p-6 space-y-12">
        {/* About Section */}
        <div className="overflow-hidden rounded-2xl shadow-lg bg-bg-primary">
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-accent mb-4">
                Est. 2025 · Marilao, Bulacan
              </span>
              <h2 className="font-extrabold text-3xl md:text-4xl xl:text-5xl text-text-primary leading-tight mb-4">
                Moving the Philippines,
                <br />
                <span className="text-accent">One Load at a Time</span>
              </h2>
              <p className="text-text-secondary text-lg mb-8 max-w-lg">
                Roadquest Trucking Services is a sole proprietorship
                specializing in provincial deliveries and container hauling
                across Luzon, Visayas, and Mindanao — serving manufacturers,
                distributors, retail chains, and SMEs.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-xl bg-bg-secondary">
                  <p className="text-3xl font-black text-accent">8</p>
                  <p className="text-xs text-text-secondary font-medium mt-1">
                    Fleet Units
                  </p>
                </div>
                <div className="text-center p-4 rounded-xl bg-bg-secondary">
                  <p className="text-3xl font-black text-accent">24/7</p>
                  <p className="text-xs text-text-secondary font-medium mt-1">
                    Operations
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-2/5 /10 flex justify-center items-center p-10 min-h-[300px]">
              <Image
                src="/images/business-partners/logo1.png"
                alt="Roadquest Logo"
                width={320}
                height={320}
                className="object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 bg-bg-primary rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
          <div className="basis-1/2 flex justify-center items-center">
            <div className="flex justify-center items-center size-52 rounded-full bg-accent/10 text-accent">
              <FontAwesomeIcon icon={faBullseye} className="text-8xl" />
            </div>
          </div>
          <div className="basis-1/2 text-left">
            <h3 className="text-accent font-bold text-2xl mb-2">Our Mission</h3>
            <p className="text-text-secondary text-lg">
              To provide safe, reliable, and cost-efficient trucking services
              that connect businesses and communities across the Philippines,
              ensuring on-time deliveries and excellent customer care.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 bg-bg-primary rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
          <div className="basis-1/2 text-left">
            <h3 className="text-accent font-bold text-2xl mb-2">Our Vision</h3>
            <p className="text-text-secondary text-lg">
              To be the most trusted and preferred trucking company in the
              Philippines, recognized for excellence in service, innovation in
              logistics, and commitment to customer satisfaction. To expand our
              fleet and services nationwide, making logistics easier and more
              affordable for every business we serve.
            </p>
          </div>
          <div className="basis-1/2 flex justify-center items-center">
            <div className="flex justify-center items-center size-52 rounded-full bg-accent/10 text-accent">
              <FontAwesomeIcon icon={faEye} className="text-8xl" />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 bg-bg-primary rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
          <div className="basis-1/2 flex justify-center items-center">
            <div className="flex justify-center items-center size-52 rounded-full bg-accent/10 text-accent">
              <FontAwesomeIcon icon={faHandshake} className="text-8xl" />
            </div>
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

        {/* Fleet Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 bg-bg-primary rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
          <div className="basis-1/2 text-left">
            <h3 className="text-accent font-bold text-2xl mb-2">Our Fleet</h3>
            <p className="text-text-secondary text-lg">
              Our fleet of closed vans, wing vans, and trailer trucks is
              regularly maintained to ensure safe and timely deliveries across
              every major route in Luzon, Visayas, and Mindanao.
            </p>
          </div>
          <div className="basis-1/2 flex justify-center items-center">
            <div className="flex justify-center items-center size-52 rounded-full bg-accent/10 text-accent">
              <FontAwesomeIcon icon={faTruckFast} className="text-8xl" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
