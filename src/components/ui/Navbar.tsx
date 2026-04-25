"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/ui/Button";

const navbarList = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Services", link: "/service" },
  { title: "Fleet", link: "/project" },
  { title: "Contact", link: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      id="navbar"
      className="flex items-center justify-between px-4 sm:px-6 sticky top-0 z-50 bg-bg-primary border-b border-text-secondary/10 shadow-sm"
    >
      <div className="flex items-center gap-4">
        <Image
          className="rounded-lg"
          src="/images/logo1.png"
          alt="Logo"
          width={80}
          height={80}
        />

        <ul
          className={`menu flex flex-col lg:flex-row absolute lg:relative top-full left-0 w-full lg:w-auto bg-bg-primary lg:bg-transparent shadow-md lg:shadow-none border-b border-text-secondary/10 lg:border-none z-50 transition-all duration-300 ease-in-out ${
            menuOpen
              ? "opacity-100 pointer-events-auto translate-y-0"
              : "opacity-0 pointer-events-none -translate-y-2 lg:opacity-100 lg:pointer-events-auto lg:translate-y-0"
          }`}
        >
          {navbarList.map((item, index) => (
            <li
              key={index}
              className="relative font-bold mx-1 text-center lg:text-left"
            >
              <Link
                href={item.link}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-3 lg:px-4 lg:py-2 text-[17px] tracking-[1px] cursor-pointer transition duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[4px] after:bg-accent after:rounded after:scale-0 after:transition-transform after:origin-right hover:after:scale-100 hover:after:origin-left ${pathname === item.link ? "font-bold text-accent after:scale-100" : "text-text-primary"}`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <button
        className="lg:hidden block p-2 text-text-primary z-50"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="text-xl" />
      </button>

      <div className="hidden lg:block text-right">
        <Button link="/contact" text="Contact Us" />
      </div>
    </nav>
  );
}
