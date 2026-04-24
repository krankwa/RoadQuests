// src/app/layout.tsx
import { Rubik } from "next/font/google";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import "../styles/globals.css";

const rubik = Rubik({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Roadquest Trucking Services",
  icons: {
    icon: "/images/business-partners/logo1.png",
  },
};
export const description = "Roadquest Trucking Services — safe, reliable, and cost-efficient trucking solutions across Luzon, Visayas, and Mindanao. Specializing in provincial deliveries and container hauling for manufacturers, distributors, retail chains, and SMEs.";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-200">
      <body className={`${rubik.className}`}>
        {/* <body > */}
        <Navbar />
        <main className="container px-4 sm:px-6 lg:px-8 mx-auto py-8 sm:py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
