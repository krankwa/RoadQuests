"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
    alert(
      "Your message has been sent! Our support team will contact you soon.",
    );
  };

  return (
    <div className="min-h-screen w-full">
      <main className="max-w-7xl mx-auto p-4 sm:p-6 pb-0 space-y-8">
        {/* Page Title */}
        <section className="text-center space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-accent">
            Contact Us
          </h1>
          <p className="text-text-primary">
            Have questions or need assistance? Fill out the form below or reach
            us via the contact info.
          </p>
        </section>

        {/* Main Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="flex flex-col">
            <form
              onSubmit={handleSubmit}
              className="flex-1 p-8 rounded-3xl shadow-md space-y-6 border border-text-secondary -200"
            >
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-text-secondary -300 p-3 focus:ring-2 focus:ring-accent outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-text-secondary -300 p-3 focus:ring-2 focus:ring-accent outline-none transition"
                />
              </div>

              <div className="flex-1 flex flex-col">
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full flex-1 rounded-xl border border-text-secondary -300 p-3 focus:ring-2 focus:ring-accent outline-none transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-bg-primary py-3 rounded-xl font-semibold hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <div className="flex-1 flex flex-col justify-between p-8 rounded-3xl shadow-md space-y-6 border border-text-secondary -200">
              <div>
                <h2 className="text-text-primary text-2xl font-bold mb-3">
                  Contact Info
                </h2>
                <p className="text-text-secondary mb-3">
                  Reach out to our support team via:
                </p>
                <ul className="space-y-3 text-text-secondary -800">
                  <li className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-accent w-5 h-5"
                    />
                    <a
                      href="mailto:roadquesttruckingservices@gmail.com"
                      className="hover:underline"
                    >
                      roadquesttruckingservices@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="text-accent w-5 h-5"
                    />
                    <a href="tel:+63 920-964-8531" className="hover:underline">
                      +63 920-964-8531
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="text-accent w-5 h-5"
                    />
                    <a
                      href="https://www.bing.com/maps/search?v=2&pc=FACEBK&mid=8100&mkt=en-US&fbclid=IwY2xjawRXs8BleHRuA2FlbQIxMABicmlkETFLczdsOTN6cTRTTTBDbTkzc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHuzTCZ0rJ5MKmY8BehWNPGtO205PmSxrx8ozcN7Jz295XuFqw_3ras8ni_GX_aem_DyWYK9uU1mO-805x_bcxUw&FORM=FBKPL1&q=9001+Laot+Service+Road+Patubig%2C+Marilao%2C+Philippines%2C+3019&cp=14.778678%7E120.954571&lvl=16&style=r"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      9001 Laot Services Road Patubig, Marilao Bulacan
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="text-[#1877F2] w-5 h-5"
                    />
                    <a
                      href="https://www.facebook.com/profile.php?id=61581160223474"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Roadquest on Facebook
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      className="text-[#25D366] w-5 h-5"
                    />
                    <a
                      href="https://chat.whatsapp.com/HpkK7pgT4wyFJh0L2UgsWo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Join our WhatsApp Group
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-text-primary text-2xl font-bold mb-3">
                  Working Hours
                </h2>
                <p className="text-text-secondary flex items-start gap-2">
                  <FontAwesomeIcon
                    icon={faClock}
                    className="text-accent w-5 h-5 mt-1"
                  />
                  <span>
                    Monday to Sunday: 24/7 Service Available <br />
                    Always ready to take your delivery requests.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
