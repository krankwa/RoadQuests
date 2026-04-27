import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full">
      <main className="max-w-7xl mx-auto p-4 sm:p-6 pb-0 space-y-8">
        {/* Page Title */}
        <section className="text-center space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-accent">
            Contact Us
          </h1>
          <p className="text-text-primary">
            Have questions or need assistance? Reach us via the contact info
            below.
          </p>
        </section>

        {/* Contact Info + Form */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col justify-between p-8 rounded-3xl shadow-md space-y-6 border border-text-secondary/20">
            <div>
              <h2 className="text-text-primary text-2xl font-bold mb-3">
                Contact Info
              </h2>
              <p className="text-text-secondary mb-3">
                Reach out to our support team via:
              </p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-accent w-5 h-5"
                  />
                  <a
                    href="mailto:sales@roadquest.co"
                    className="hover:underline"
                  >
                    sales@roadquest.co
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-accent w-5 h-5"
                  />
                  <a href="tel:+639209648531" className="hover:underline">
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

          <div className="p-8 rounded-3xl shadow-md border border-text-secondary/20">
            <h2 className="text-text-primary text-2xl font-bold mb-3">
              Send us a Message
            </h2>
            <p className="text-text-secondary mb-5">
              Fill out the form and we&apos;ll reply to your email shortly.
            </p>
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
}
