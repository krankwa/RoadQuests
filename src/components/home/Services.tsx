export default function Services() {
  return (
    <section className="text-center md:text-left">
      <h2 className="text-text-primary font-extrabold text-3xl md:text-4xl lg:text-5xl mb-3">
        Services Tailored to You
      </h2>
      <p className="text-text-secondary text-sm md:text-base lg:text-lg max-w-3xl mx-auto md:mx-0 mb-10">
        We provide comprehensive trucking and logistics services tailored to
        meet your business needs. Our reliable fleet ensures safe, timely, and
        cost-efficient deliveries across Luzon, Visayas, and Mindanao.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Provincial Deliveries */}
        <div className="service-card bg-white rounded-xl overflow-hidden flex flex-col items-center text-center px-5 py-6 shadow-[0_4px_6px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300">
          <div className="icon-wrap w-24 h-24 rounded-xl bg-[#FEF2F2] flex items-center justify-center mb-4 transition-colors duration-300">
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="icon-stroke"
                d="M26 6C19.373 6 14 11.373 14 18c0 9 12 22 12 22s12-13 12-22c0-6.627-5.373-12-12-12z"
                stroke="#DC2626"
                strokeWidth="2.5"
                strokeLinejoin="round"
                style={{ transition: "stroke 0.3s" }}
              />
              <circle
                className="icon-fill"
                cx="26"
                cy="18"
                r="4"
                fill="#DC2626"
                style={{ transition: "fill 0.3s" }}
              />
              <path
                className="icon-stroke"
                d="M10 40h32"
                stroke="#DC2626"
                strokeWidth="2.5"
                strokeLinecap="round"
                style={{ transition: "stroke 0.3s" }}
              />
              <path
                className="icon-stroke"
                d="M14 40l-4 6M38 40l4 6"
                stroke="#DC2626"
                strokeWidth="2"
                strokeLinecap="round"
                style={{ transition: "stroke 0.3s" }}
              />
            </svg>
          </div>
          <h3
            className="m-0 mb-2 text-base font-bold transition-colors duration-300"
            style={{ color: "#DC2626" }}
          >
            Provincial Deliveries
          </h3>
          <p className="m-0 text-[13px] text-[#4A4A4A] leading-relaxed">
            Reliable door-to-door deliveries across all provinces in Luzon,
            Visayas, and Mindanao.
          </p>
        </div>

        {/* Container Hauling */}
        <div className="service-card bg-white rounded-xl overflow-hidden flex flex-col items-center text-center px-5 py-6 shadow-[0_4px_6px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300">
          <div className="icon-wrap w-24 h-24 rounded-xl bg-[#FEF2F2] flex items-center justify-content-center justify-center mb-4 transition-colors duration-300">
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                className="icon-stroke"
                x="6"
                y="14"
                width="40"
                height="22"
                rx="2"
                stroke="#DC2626"
                strokeWidth="2.5"
                style={{ transition: "stroke 0.3s" }}
              />
              <line
                className="icon-stroke"
                x1="16"
                y1="14"
                x2="16"
                y2="36"
                stroke="#DC2626"
                strokeWidth="2"
                style={{ transition: "stroke 0.3s" }}
              />
              <line
                className="icon-stroke"
                x1="26"
                y1="14"
                x2="26"
                y2="36"
                stroke="#DC2626"
                strokeWidth="2"
                style={{ transition: "stroke 0.3s" }}
              />
              <line
                className="icon-stroke"
                x1="36"
                y1="14"
                x2="36"
                y2="36"
                stroke="#DC2626"
                strokeWidth="2"
                style={{ transition: "stroke 0.3s" }}
              />
              <circle
                className="icon-fill"
                cx="14"
                cy="40"
                r="3"
                fill="#DC2626"
                style={{ transition: "fill 0.3s" }}
              />
              <circle
                className="icon-fill"
                cx="38"
                cy="40"
                r="3"
                fill="#DC2626"
                style={{ transition: "fill 0.3s" }}
              />
              <line
                className="icon-stroke"
                x1="6"
                y1="40"
                x2="46"
                y2="40"
                stroke="#DC2626"
                strokeWidth="2"
                strokeLinecap="round"
                style={{ transition: "stroke 0.3s" }}
              />
            </svg>
          </div>
          <h3
            className="m-0 mb-2 text-base font-bold transition-colors duration-300"
            style={{ color: "#DC2626" }}
          >
            Container Hauling
          </h3>
          <p className="m-0 text-[13px] text-[#4A4A4A] leading-relaxed">
            Efficient hauling of 20ft and 40ft containers from ports to
            warehouses nationwide.
          </p>
        </div>

        {/* Closed Van Transport */}
        <div className="service-card bg-white rounded-xl overflow-hidden flex flex-col items-center text-center px-5 py-6 shadow-[0_4px_6px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300">
          <div className="icon-wrap w-24 h-24 rounded-xl bg-[#FEF2F2] flex items-center justify-center mb-4 transition-colors duration-300">
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                className="icon-stroke"
                x="3"
                y="14"
                width="26"
                height="20"
                rx="2"
                stroke="#DC2626"
                strokeWidth="2.5"
                style={{ transition: "stroke 0.3s" }}
              />
              <path
                className="icon-stroke"
                d="M29 20h10l4 5v9H29V20z"
                stroke="#DC2626"
                strokeWidth="2.5"
                strokeLinejoin="round"
                style={{ transition: "stroke 0.3s" }}
              />
              <rect
                className="icon-fill"
                x="31"
                y="22"
                width="6"
                height="5"
                rx="1"
                fill="#DC2626"
                opacity="0.35"
                style={{ transition: "fill 0.3s" }}
              />
              <circle
                className="icon-fill"
                cx="11"
                cy="37"
                r="4.5"
                fill="#DC2626"
                style={{ transition: "fill 0.3s" }}
              />
              <circle
                className="icon-bg"
                cx="11"
                cy="37"
                r="1.8"
                fill="#FEF2F2"
                style={{ transition: "fill 0.3s" }}
              />
              <circle
                className="icon-fill"
                cx="38"
                cy="37"
                r="4.5"
                fill="#DC2626"
                style={{ transition: "fill 0.3s" }}
              />
              <circle
                className="icon-bg"
                cx="38"
                cy="37"
                r="1.8"
                fill="#FEF2F2"
                style={{ transition: "fill 0.3s" }}
              />
              <line
                className="icon-stroke"
                x1="3"
                y1="34"
                x2="43"
                y2="34"
                stroke="#DC2626"
                strokeWidth="1.5"
                strokeLinecap="round"
                style={{ transition: "stroke 0.3s" }}
              />
            </svg>
          </div>
          <h3
            className="m-0 mb-2 text-base font-bold transition-colors duration-300"
            style={{ color: "#DC2626" }}
          >
            Closed Van Transport
          </h3>
          <p className="m-0 text-[13px] text-[#4A4A4A] leading-relaxed">
            Secure, weather-protected transport for goods using our fleet of
            closed vans.
          </p>
        </div>

        {/* Wing Van & Trailer Trucks */}
        <div className="service-card bg-white rounded-xl overflow-hidden flex flex-col items-center text-center px-5 py-6 shadow-[0_4px_6px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300">
          <div className="icon-wrap w-24 h-24 rounded-xl bg-[#FEF2F2] flex items-center justify-center mb-4 transition-colors duration-300">
            <svg
              width="56"
              height="52"
              viewBox="0 0 56 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                className="icon-stroke"
                x="2"
                y="16"
                width="30"
                height="18"
                rx="2"
                stroke="#DC2626"
                strokeWidth="2.5"
                style={{ transition: "stroke 0.3s" }}
              />
              <line
                className="icon-stroke"
                x1="2"
                y1="16"
                x2="8"
                y2="34"
                stroke="#DC2626"
                strokeWidth="1"
                opacity="0.4"
                style={{ transition: "stroke 0.3s" }}
              />
              <line
                className="icon-stroke"
                x1="32"
                y1="16"
                x2="26"
                y2="34"
                stroke="#DC2626"
                strokeWidth="1"
                opacity="0.4"
                style={{ transition: "stroke 0.3s" }}
              />
              <rect
                className="icon-fill"
                x="32"
                y="27"
                width="4"
                height="4"
                rx="1"
                fill="#DC2626"
                style={{ transition: "fill 0.3s" }}
              />
              <rect
                className="icon-stroke"
                x="36"
                y="20"
                width="16"
                height="14"
                rx="2"
                stroke="#DC2626"
                strokeWidth="2.5"
                style={{ transition: "stroke 0.3s" }}
              />
              <rect
                className="icon-fill"
                x="38"
                y="22"
                width="9"
                height="6"
                rx="1"
                fill="#DC2626"
                opacity="0.35"
                style={{ transition: "fill 0.3s" }}
              />
              <line
                className="icon-stroke"
                x1="50"
                y1="20"
                x2="50"
                y2="13"
                stroke="#DC2626"
                strokeWidth="2"
                strokeLinecap="round"
                style={{ transition: "stroke 0.3s" }}
              />
              <circle
                className="icon-fill"
                cx="9"
                cy="37"
                r="4"
                fill="#DC2626"
                style={{ transition: "fill 0.3s" }}
              />
              <circle
                className="icon-bg"
                cx="9"
                cy="37"
                r="1.6"
                fill="#FEF2F2"
                style={{ transition: "fill 0.3s" }}
              />
              <circle
                className="icon-fill"
                cx="22"
                cy="37"
                r="4"
                fill="#DC2626"
                style={{ transition: "fill 0.3s" }}
              />
              <circle
                className="icon-bg"
                cx="22"
                cy="37"
                r="1.6"
                fill="#FEF2F2"
                style={{ transition: "fill 0.3s" }}
              />
              <circle
                className="icon-fill"
                cx="41"
                cy="37"
                r="4"
                fill="#DC2626"
                style={{ transition: "fill 0.3s" }}
              />
              <circle
                className="icon-bg"
                cx="41"
                cy="37"
                r="1.6"
                fill="#FEF2F2"
                style={{ transition: "fill 0.3s" }}
              />
            </svg>
          </div>
          <h3
            className="m-0 mb-2 text-base font-bold transition-colors duration-300"
            style={{ color: "#DC2626" }}
          >
            Wing Van & Trailer Trucks
          </h3>
          <p className="m-0 text-[13px] text-[#4A4A4A] leading-relaxed">
            High-capacity services for bulk shipments and large-volume
            logistics.
          </p>
        </div>
      </div>
    </section>
  );
}
