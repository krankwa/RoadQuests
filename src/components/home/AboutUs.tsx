import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
    return (
        <section className="flex flex-col-reverse lg:flex-row justify-between items-stretch">
            <div className="basis-1/2 text-center md:text-left px-4 flex flex-col">
                <h2 className="font-extrabold text-3xl md:text-4xl lg:text-5xl lg:mt-0 mt-5 my-2">About Us</h2>
                <div className="sm:text-lg font-medium sm:mt-6 mt-3 lg:line-clamp-[8] line-clamp-[10] flex-1">
                    Established in 2025, Roadquest Trucking Services is a sole proprietorship based in Marilao, Bulacan, specializing in provincial deliveries and container hauling across Luzon, Visayas, and Mindanao.<br />
                    Equipped with a reliable fleet of closed vans, wing vans, and trailer trucks, we provide safe, timely, and cost-efficient logistics solutions tailored to the needs of manufacturers, distributors, retail chains, and SMEs.
                </div>
                <div className="mt-5">
                    <Link href="/about" className="inline-flex items-center justify-center px-10 py-3 font-medium text-xl bg-accent text-bg-primary rounded-full w-full sm:w-auto">
                        Learn More
                    </Link>
                </div>
            </div>
            <div className="basis-1/2 flex justify-center">
                <Image className="rounded-md w-full max-w-md md:max-w-none" width={1000} height={1000} src={'/images/about-us1.jpg'} alt="About Us" />
            </div>
        </section>
    )
}