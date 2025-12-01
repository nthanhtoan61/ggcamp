"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { HeroSection } from "@/components/layouts";

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
        // Use London coordinates for the map (as shown in the image)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const map = (window.L as any)
          .map("contact-map")
          .setView([51.505, -0.09], 13);

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

        // Add marker for London Eye (as shown in the image)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window.L as any)
          .marker([51.5033, -0.1195])
          .addTo(map)
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .bindPopup(
            `<h3>London Eye</h3><p>Riverside Building, County Hall, Westminster Bridge Rd, London SE1 7PB, United Kingdom</p>`
          )
          .openPopup();

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
          className="w-6 h-6"
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
          className="w-6 h-6"
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
          className="w-6 h-6"
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
          className="w-6 h-6"
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
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .contact-cards-section {
              background: #f5f5f5;
              padding: 4vw 0;
              position: relative;
              overflow: hidden;
            }
            .contact-cards-section::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-image: 
                radial-gradient(circle at 20% 30%, rgba(76, 175, 80, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(255, 235, 59, 0.1) 0%, transparent 50%);
              pointer-events: none;
            }
            .contact-card {
              background: white;
              border-radius: 0.75vw;
              padding: 2vw;
              box-shadow: 0 0.125vw 0.5vw rgba(0, 0, 0, 0.08);
              transition: all 0.3s ease;
              height: 100%;
              display: flex;
              flex-direction: column;
            }
            .contact-card:hover {
              transform: translateY(-0.25vw);
              box-shadow: 0 0.25vw 1vw rgba(0, 0, 0, 0.12);
            }
            .contact-card-icon {
              width: 3.75vw;
              height: 3.75vw;
              border-radius: 50%;
              background: #e8f5e9;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 1.5vw;
              color: #9c5d00;
            }
            .contact-card-title {
              font-size: 1.25vw;
              font-weight: 700;
              color: #1a1a1a;
              margin-bottom: 1vw;
            }
            .contact-card-content {
              color: #666;
              font-size: 0.99vw;
              line-height: 1.6;
            }
            .contact-card-content p {
              margin: 0.5vw 0;
            }
            .contact-card-content p:hover {
              color: #E9A919;
              transition: color 0.3s ease;
            }
            @media (max-width: 960px) {
              .contact-cards-section {
                padding: 2vw 0;
              }
              .contact-card {
                margin-bottom: 1.5vw;
              }
              .contact-card-title {
                font-size: 1.5vw;
              }
              .contact-card-content {
                font-size: 1.2vw;
              }
              .contact-form-heading {
                font-size: 2.5vw;
              }
            }
            @media (max-width: 640px) {
              .contact-card-title {
                font-size: 2vw;
              }
              .contact-card-content {
                font-size: 1.5vw;
              }
              .contact-form-heading {
                font-size: 3vw;
              }
              .contact-form-title-text {
                font-size: 1.2vw;
              }
            }
            /* Hero title responsive */
            @media (max-width: 960px) {
              .uk-heading-large {
                font-size: 6vw !important;
              }
            }
            @media (max-width: 640px) {
              .uk-heading-large {
                font-size: 8vw !important;
              }
            }
            .contact-form-section {
              padding: 4vw 0;
              background: white;
            }
            .contact-form-title {
              display: flex;
              align-items: center;
              gap: 0.5vw;
              margin-bottom: 1vw;
              justify-content: flex-start;
            }
            .contact-form-title-star {
              width: 1vw;
              height: 1vw;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-shrink: 0;
            }
            .contact-form-title-text {
              font-size: 0.875vw;
              font-weight: 600;
              color: #666;
              letter-spacing: 0.05em;
              text-transform: uppercase;
              display: flex;
              align-items: center;
            }
            .contact-form-heading {
              font-size: 2.1vw;
              font-weight: 700;
              color: #1a1a1a;
              margin-bottom: 2vw;
              line-height: 1.2;
            }
            .contact-form-heading:hover {
              color: #E9A919;
              transition: color 0.3s ease;
            }
            .contact-form-input {
              width: 100%;
              padding: 0.875vw 1vw;
              border: 0.0625vw solid #e0e0e0;
              border-radius: 0.5vw;
              font-size: 0.95vw;
              transition: all 0.3s;
              margin-bottom: 1vw;
            }
            .contact-form-input:focus {
              outline: none;
              border-color: #9c5d00;
              box-shadow: 0 0 0 0.1875vw rgba(76, 175, 80, 0.1);
            }
            .contact-form-textarea {
              width: 100%;
              padding: 0.875vw 1vw;
              border: 0.0625vw solid #e0e0e0;
              border-radius: 0.5vw;
              font-size: 0.95vw;
              min-height: 7.5vw;
              resize: vertical;
              transition: all 0.3s;
              margin-bottom: 1vw;
              font-family: inherit;
            }
            .contact-form-textarea:focus {
              outline: none;
              border-color: #9c5d00;
              box-shadow: 0 0 0 0.1875vw rgba(76, 175, 80, 0.1);
            }
            .contact-form-button {
              background: #9c5d00;
              color: white;
              padding: 0.75vw 1.5vw;
              border: none;
              border-radius: 0.5vw;
              font-size: 0.875vw;
              font-weight: 600;
              cursor: pointer;
              transition: all 0.3s;
              display: inline-flex;
              align-items: center;
              gap: 0.5vw;
            }
            .contact-form-button:hover {
              background: #9c5d00;
              transform: translateY(-0.125vw);
              box-shadow: 0 0.25vw 0.75vw rgba(76, 175, 80, 0.3);
            }
            .contact-map-container {
              height: 100%;
              min-height: 31.25vw;
              border-radius: 0.75vw;
              overflow: hidden;
              box-shadow: 0 0.125vw 0.5vw rgba(0, 0, 0, 0.1);
            }
            #contact-map {
              width: 100%;
              height: 100%;
              min-height: 31.25vw;
            }
            @media (max-width: 960px) {
              .contact-form-section {
                padding: 2vw 0;
              }
              .contact-map-container {
                margin-top: 2vw;
                min-height: 40vw;
              }
              .contact-form-input,
              .contact-form-textarea {
                font-size: 1.2vw;
                padding: 1vw 1.2vw;
              }
              .contact-form-button {
                font-size: 1.2vw;
                padding: 1vw 2vw;
              }
            }
            @media (max-width: 640px) {
              .contact-form-section {
                padding: 2vw 0;
              }
              .contact-form-heading {
                font-size: 3vw;
                margin-bottom: 2vw;
              }
              .contact-form-input,
              .contact-form-textarea {
                font-size: 1.5vw;
                padding: 1.2vw;
              }
              .contact-form-button {
                width: 100%;
                justify-content: center;
                font-size: 1.5vw;
                padding: 1.2vw 2vw;
              }
              .contact-map-container {
                min-height: 50vw;
              }
              .contact-form-title-star {
                width: 1.5vw;
                height: 1.5vw;
              }
            }
          `,
        }}
      />

      {/* Hero Section */}
      <HeroSection
        title="Contact Us"
        backgroundImage="yootheme/banner/b3.jpg"
        overlayColor="rgba(0, 0, 0, 0.19)"
        sectionClass="uk-section-default uk-preserve-color uk-light"
        titleClass="uk-heading-large uk-text-center !text-[5vw]"
        enableScrollspy={false}
      />

      {/* Contact Cards Section */}
      <section className="contact-cards-section">
        <div className="uk-container uk-container-large uk-position-relative">
          <div className="uk-grid tm-grid-expand uk-child-width-1-2@s uk-child-width-1-4@m uk-grid-margin">
            {contactCards.map((card, index) => (
              <div key={index}>
                <div className="contact-card">
                  <div className="contact-card-icon">{card.icon}</div>
                  <h3 className="contact-card-title">{card.title}</h3>
                  <div className="contact-card-content">
                    {card.content.map((item, itemIndex) => (
                      <p key={itemIndex}>{item}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="contact-form-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-2@m uk-grid-margin">
            {/* Contact Form */}
            <div>
              <div className="contact-form-title">
                <span className="contact-form-title-star">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_227_7478)">
                      <mask
                        id="mask0_227_7478"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="16"
                        height="16"
                      >
                        <path d="M0 0H16V16H0V0Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_227_7478)">
                        <path
                          d="M8.65329 3.19601L8.00089 0.0947266L7.3485 3.19601C7.13389 4.21618 6.62715 5.15188 5.89 5.88903C5.15285 6.62617 4.21715 7.13292 3.19699 7.34752L0.0957031 7.99992L3.19699 8.65232C4.21714 8.86692 5.15285 9.37372 5.89 10.1109C6.62715 10.848 7.13389 11.7837 7.3485 12.8039L8.00089 15.9051L8.65329 12.8039C8.86789 11.7837 9.37463 10.848 10.1118 10.1109C10.849 9.37372 11.7846 8.86692 12.8048 8.65232L15.9061 7.99992L12.8048 7.34752C11.7846 7.13292 10.8489 6.62617 10.1118 5.88903C9.37463 5.15188 8.86789 4.21618 8.65329 3.19601Z"
                          fill="#CBCA7B"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_227_7478">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span className="contact-form-title-text">CONTACT US</span>
              </div>
              <h2 className="contact-form-heading">
                Let&apos;s plan your dream adventure - contact our team today
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="uk-grid uk-grid-small uk-child-width-1-2@s">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="contact-form-input"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="contact-form-input"
                      required
                    />
                  </div>
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="contact-form-input"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="contact-form-input"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Send Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="contact-form-textarea"
                  required
                />
                <button type="submit" className="contact-form-button">
                  Send Message
                </button>
              </form>
            </div>

            {/* Map */}
            <div>
              <div className="contact-map-container">
                <div id="contact-map"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leaflet Scripts */}
      <Script
        src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        strategy="afterInteractive"
      />
    </>
  );
}
