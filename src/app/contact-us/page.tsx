"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { HeroSection } from "@/components/layouts";
import { getTemplateImageUrl } from "@/lib/assets";

// Extend Window interface for Leaflet
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    L?: any;
  }
}

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  // Leaflet map initialization
  useEffect(() => {
    const initMap = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (typeof window === "undefined" || !window.L) return false;

      const mapDiv = document.getElementById("contact-map");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (!mapDiv || (mapDiv as any)._leaflet) return false;

      try {
        // Use Cebu City, Philippines coordinates
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const map = (window.L as any)
          .map("contact-map")
          .setView([10.3157, 123.8854], 15);

        // Use OpenStreetMap tiles
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window.L as any)
          .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18,
            minZoom: 0,
          })
          .addTo(map);

        // Add marker for Cebu City office
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window.L as any)
          .marker([10.3157, 123.8854])
          .addTo(map)
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .bindPopup(
            `<h3>Our Office</h3><p>Poblacion, Madridejos 22, Cebu City, Philippines</p>`
          )
          .openPopup();

        // Fix z-index for Leaflet controls to be above header
        const style = document.createElement("style");
        style.textContent = `
          .leaflet-control-container {
            z-index: 1000 !important;
          }
          .leaflet-top,
          .leaflet-bottom {
            z-index: 1000 !important;
          }
        `;
        document.head.appendChild(style);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (mapDiv as any)._leaflet = true;
        return true;
      } catch (e) {
        console.error("Error initializing map:", e);
        return false;
      }
    };

    const checkAndInit = () => {
      const mapDiv = document.getElementById("contact-map");
      if (mapDiv && window.L && typeof window.L.map === "function") {
        initMap();
        return true;
      }
      return false;
    };

    const timeout1 = setTimeout(() => {
      if (!checkAndInit()) {
        let retryCount = 0;
        const interval = setInterval(() => {
          retryCount++;
          if (checkAndInit() || retryCount >= 50) {
            clearInterval(interval);
          }
        }, 200);
      }
    }, 500);

    return () => clearTimeout(timeout1);
  }, []);
  const contactCards = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-[4vw] h-[4vw] sm:w-[3vw] sm:h-[3vw] md:w-[2vw] md:h-[2vw] lg:w-[1.5vw] lg:h-[1.5vw]"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      title: "Phone Number",
      content: ["+123456789"],
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-[4vw] h-[4vw] sm:w-[3vw] sm:h-[3vw] md:w-[2vw] md:h-[2vw] lg:w-[1.5vw] lg:h-[1.5vw]"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      title: "Email Address",
      content: ["office@ggcamp.org"],
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-[4vw] h-[4vw] sm:w-[3vw] sm:h-[3vw] md:w-[2vw] md:h-[2vw] lg:w-[1.5vw] lg:h-[1.5vw]"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      title: "Our Location",
      content: ["Poblacion, Madridejos 22, Cebu City, Philippines"],
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-[4vw] h-[4vw] sm:w-[3vw] sm:h-[3vw] md:w-[2vw] md:h-[2vw] lg:w-[1.5vw] lg:h-[1.5vw]"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: "Working hours",
      content: ["Monday to Saturday: 07pm - 05am", "Sunday: Closed"],
    },
  ];

  return (
    <>
      {/* Hero */}
      <HeroSection
        title={<>Contact Us</>}
        backgroundImage="yootheme/cache/5e/sicherheit_header-5ede6167.jpeg"
        overlayColor="rgba(0, 0, 0, 0)"
        sectionClass="uk-section-secondary uk-section-overlap uk-preserve-color uk-light"
        titleClass="uk-heading-large uk-text-center !text-[5vw]"
        enableScrollspy={true}
        backgroundPosition="top-center"
      />

      {/* Background Section */}
      <section
        className="uk-section-default uk-section-overlap uk-section uk-section-small bg-contain bg-center bg-no-repeat animate-fade-in-up"
        style={{
          backgroundImage: `url(${getTemplateImageUrl(
            "yootheme/aboutImage/bg_about.jpg"
          )})`,
          animation: "fadeInUp 1s ease-out 0.2s both",
          maxHeight: "0.1vh",
          minHeight: "0.1vh",
        }}
      >
        <div className="uk-container"></div>
      </section>

      {/* Contact Cards Section */}
      <section className="relative overflow-hidden py-[4vh] sm:py-[6vh] lg:py-[8vh] bg-[#f5f5f5]">
        <div
          className="
        absolute inset-0 pointer-events-none 
        bg-[radial-gradient(circle_at_20%_30%,rgba(76,175,80,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(255,235,59,0.1)_0%,transparent_50%)]
      "
        ></div>

        <div className="max-w-[95vw] sm:max-w-[85vw] md:max-w-[75vw] lg:max-w-[71vw] mx-auto px-[4vw] sm:px-[3vw] lg:px-[2vw] relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[3vw] sm:gap-[2vw] lg:gap-[1.5vw]">
            {contactCards.map((card, index) => (
              <div key={index} className="pb-[2vh] sm:pb-[1.5vh]">
                <div
                  className="
                bg-white rounded-xl p-[4vw] sm:p-[3vw] lg:p-[2vw] shadow-md transition-all duration-300 
                hover:-translate-y-1 hover:shadow-lg flex flex-col h-full group
              "
                >
                  <div className="w-[12vw] h-[12vw] sm:w-[8vw] sm:h-[8vw] md:w-[6vw] md:h-[6vw] lg:w-[4vw] lg:h-[4vw] rounded-full bg-[#e8f5e9] flex items-center justify-center mb-[2vh] sm:mb-[1.5vh] text-gray-600 transition-colors group-hover:bg-[#9c5d00] group-hover:text-white">
                    <div className="transition-colors">{card.icon}</div>
                  </div>

                  <div className="text-[4vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.5vw] font-bold text-[#1a1a1a] mb-[1.5vh] sm:mb-[1vh]">
                    {card.title}
                  </div>

                  <div className="text-[#666] text-[3.5vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1.2vw] leading-relaxed">
                    {card.content.map((item, i) =>
                      card.title === "Our Location" ? (
                        <p
                          key={i}
                          className="my-2 no-underline cursor-pointer hover:text-[#E9A919] transition-colors"
                          onClick={() => {
                            const mapSection =
                              document.getElementById("contact-map");
                            if (mapSection) {
                              mapSection.scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                              });
                            }
                          }}
                        >
                          {item}
                        </p>
                      ) : (
                        <p
                          key={i}
                          className="my-2 hover:text-[#E9A919] transition-colors"
                        >
                          {item}
                        </p>
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="py-[4vh] sm:py-[6vh] lg:py-[8vh] bg-white">
        <div className="max-w-[95vw] sm:max-w-[85vw] md:max-w-[75vw] lg:max-w-[71vw] mx-auto px-[4vw] sm:px-[3vw] lg:px-[2vw]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[4vw] sm:gap-[2vw] lg:gap-[1.5vw]">
            {/* Form */}
            <div className="mb-[3vh] sm:mb-[1.5vh]">
              <div className="flex items-center gap-[2vw] sm:gap-[1vw] lg:gap-[0.5vw] mb-[2vh] sm:mb-[1vh] lg:mb-[0.75vh]">
                <span className="w-[4vw] h-[4vw] sm:w-[2.5vw] sm:h-[2.5vw] lg:w-[1vw] lg:h-[1vw] flex items-center justify-center">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M8.65329 3.19601L8.00089 0.0947266L7.3485 3.19601C7.13389 4.21618 6.62715 5.15188 5.89 5.88903C5.15285 6.62617 4.21715 7.13292 3.19699 7.34752L0.0957031 7.99992L3.19699 8.65232C4.21714 8.86692 5.15285 9.37372 5.89 10.1109C6.62715 10.848 7.13389 11.7837 7.3485 12.8039L8.00089 15.9051L8.65329 12.8039C8.86789 11.7837 9.37463 10.848 10.1118 10.1109C10.849 9.37372 11.7846 8.86692 12.8048 8.65232L15.9061 7.99992L12.8048 7.34752C11.7846 7.13292 10.8489 6.62617 10.1118 5.88903C9.37463 5.15188 8.86789 4.21618 8.65329 3.19601Z"
                      fill="#CBCA7B"
                    />
                  </svg>
                </span>
                <span className="text-[3vw] sm:text-[1.8vw] md:text-[1.3vw] lg:text-[1vw] font-semibold tracking-wider text-gray-500 uppercase">
                  Contact Us
                </span>
              </div>

              <h2 className="text-[5vw] sm:text-[4vw] md:text-[3vw] lg:text-[2.5vw] font-bold text-[#1a1a1a] mb-[3vh] sm:mb-[2vh] leading-tight hover:text-[#E9A919] transition-colors">
                Let&apos;s plan your dream adventure - contact our team today
              </h2>

              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full p-[3vw] sm:p-[2vw] lg:p-[1vw] border border-gray-300 rounded-lg text-[4vw] sm:text-[2.5vw] md:text-[1.8vw] lg:text-[1.2vw] mb-[2vh] sm:mb-[1vh] 
                focus:outline-none focus:ring-2 focus:ring-[#9c5d00] focus:border-[#9c5d00]"
                />

                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full p-[3vw] sm:p-[2vw] lg:p-[1vw] border border-gray-300 rounded-lg text-[4vw] sm:text-[2.5vw] md:text-[1.8vw] lg:text-[1.2vw] mb-[2vh] sm:mb-[1vh]
                focus:outline-none focus:ring-2 focus:ring-[#9c5d00] focus:border-[#9c5d00]"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full p-[3vw] sm:p-[2vw] lg:p-[1vw] border border-gray-300 rounded-lg text-[4vw] sm:text-[2.5vw] md:text-[1.8vw] lg:text-[1.2vw] mb-[2vh] sm:mb-[1vh]
                focus:outline-none focus:ring-2 focus:ring-[#9c5d00] focus:border-[#9c5d00]"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  suppressHydrationWarning
                  className="w-full p-[3vw] sm:p-[2vw] lg:p-[1vw] border border-gray-300 rounded-lg text-[4vw] sm:text-[2.5vw] md:text-[1.8vw] lg:text-[1.2vw] mb-[2vh] sm:mb-[1vh]
                focus:outline-none focus:ring-2 focus:ring-[#9c5d00] focus:border-[#9c5d00]"
                />

                <textarea
                  name="message"
                  placeholder="Send Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full p-[3vw] sm:p-[2vw] lg:p-[1vw] border border-gray-300 rounded-lg text-[4vw] sm:text-[2.5vw] md:text-[1.8vw] lg:text-[1.2vw] mb-[2vh] sm:mb-[1vh] min-h-[20vh] sm:min-h-[15vh] 
                focus:outline-none focus:ring-2 focus:ring-[#9c5d00] focus:border-[#9c5d00]"
                />

                <button
                  type="submit"
                  className="
                bg-[#9c5d00] text-white px-[4vw] sm:px-[3vw] lg:px-[1.5vw] py-[2vh] sm:py-[1.5vh] lg:py-[0.75vh] rounded-lg text-[4vw] sm:text-[2.5vw] md:text-[1.8vw] lg:text-[1.2vw] font-semibold 
                hover:bg-[#7a4a00] hover:-translate-y-1 hover:shadow-lg 
                transition-all inline-flex items-center gap-[2vw] sm:gap-[1vw] lg:gap-[0.5vw]
              "
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="mb-[3vh] sm:mb-[1.5vh]">
              <div
                className="rounded-xl overflow-hidden shadow-md h-full min-h-[50vh] sm:min-h-[40vh] relative"
                style={{ zIndex: 1 }}
              >
                <div
                  id="contact-map"
                  className="w-full h-full min-h-[40vh]"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Script
        src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        strategy="afterInteractive"
      />
    </>
  );
}
