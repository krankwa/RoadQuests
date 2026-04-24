import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  {
    icon: faFacebook,
    href: "https://www.facebook.com/profile.php?id=61581160223474",
    label: "Facebook",
    color: "text-[#1877F2]",
  },
  {
    icon: faWhatsapp,
    href: "https://chat.whatsapp.com/HpkK7pgT4wyFJh0L2UgsWo",
    label: "WhatsApp",
    color: "text-[#25D366]",
  },
];

export default function Footer() {
  return (
    <>
      <div className="border-t border-text-primary/50 mt-8 sm:mt-12"></div>
      <footer className="relative mx-auto container px-4 sm:px-6 lg:px-8 py-8 mb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <Image
              width={100}
              height={100}
              className="mx-auto filter bg-secondary scale md:w-auto md:h-auto w-32"
              src="/images/74593441.png"
              alt=""
            />
            <ul className="flex justify-center gap-4">
              {socialLinks.map(({ icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex justify-center items-center size-12 border border-text-primary rounded-full"
                >
                  <FontAwesomeIcon
                    icon={icon}
                    className={`text-4xl ${color}`}
                  />
                </a>
              ))}
            </ul>
          </div>

          <div className="text-center lg:text-left md:mt-0 mt-4">
            <h1 className="font-bold text-lg sm:text-xl text-green-500">Company</h1>
            <ul className="mt-3 space-y-2 sm:space-y-3">
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/service">Our Services</a>
              </li>
              <li>
                <a href="/project">Our Fleet</a>
              </li>
              <li>
                <a href="/contact">Request a Quote</a>
              </li>
            </ul>
          </div>

          <div className="text-center lg:text-left lg:mt-0 mt-4">
            <h1 className="font-bold text-lg sm:text-xl text-green-500">Services</h1>
            <ul className="mt-3 space-y-2 sm:space-y-3">
              <li>Provincial Deliveries</li>
              <li>Container Hauling</li>
              <li>Closed Van Transport</li>
              <li>Wing Van & Trailer Trucks</li>
            </ul>
          </div>

          <div className="text-center lg:text-left lg:mt-0 mt-4">
            <h1 className="font-bold text-lg sm:text-xl text-green-500">Contact</h1>
            <ul className="mt-3 space-y-2 sm:space-y-3">
              <li>
                <a
                  href="https://www.bing.com/maps/search?v=2&pc=FACEBK&mid=8100&mkt=en-US&fbclid=IwY2xjawRXs8BleHRuA2FlbQIxMABicmlkETFLczdsOTN6cTRTTTBDbTkzc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHuzTCZ0rJ5MKmY8BehWNPGtO205PmSxrx8ozcN7Jz295XuFqw_3ras8ni_GX_aem_DyWYK9uU1mO-805x_bcxUw&FORM=FBKPL1&q=9001+Laot+Service+Road+Patubig%2C+Marilao%2C+Philippines%2C+3019&cp=14.778678%7E120.954571&lvl=16&style=r"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  9001 Laot Services Road Patubig, Marilao Bulacan
                </a>
              </li>
              <li>
                <a
                  href="mailto:roadquesttruckingservices@gmail.com"
                  className="break-all"
                >
                  roadquesttruckingservices@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+63 920-964-8531">+63 920-964-8531</a>
              </li>
            </ul>
          </div>
        </div>

        <span className="text-center block lg:mt-6 mt-10 text-sm sm:text-base">
          Copyright © 2025 Roadquest Trucking Services. All rights reserved.
        </span>
      </footer>
    </>
  );
}
