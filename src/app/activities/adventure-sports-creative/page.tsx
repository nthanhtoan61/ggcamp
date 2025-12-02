"use client";

import type { Metadata } from "next";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { getTemplateImageUrl } from "@/lib/assets";
import { HeroSection } from "@/components";
import { Star, MapPin ,Clock, Moon, Ticket } from "lucide-react";

export default function AdventureSportsCreativePage({}) {
  const [activeAccordion, setActiveAccordion] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  // Fix: Use lazy initialization to read from localStorage only once during component initialization
  const [camp, setCamp] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("campData");
      return stored ? JSON.parse(stored) : null;
    }
    return null;
  });
  const tours = [
    {
      id: 1,
      title: "Volcanoes and Waterfalls",
      rating: 4.9,
      reviews: 25,
      location: "Hilo, Hawaii",
      price: 1500,
      originalPrice: 1800,
      image:
        "https://images.unsplash.com/photo-1542259009477-d625272157b7?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Exploring the Fjords",
      rating: 4.9,
      reviews: 28,
      location: "Bergen, Norway",
      price: 1900,
      originalPrice: 2200,
      image:
        "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Safari in Style",
      rating: 4.9,
      reviews: 35,
      location: "Okavango Delta, Botswana",
      price: 4500,
      originalPrice: 5000,
      image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      title: "Cherry Blossom Tour",
      rating: 4.8,
      reviews: 22,
      location: "Kyoto, Japan",
      price: 1200,
      originalPrice: 1800,
      image:
        "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=400&h=300&fit=crop",
    },
  ];

  const slides = [
    {
      url: "/templates/yootheme/activities/activity-details/bg-ad1.png",
      alt: "Smiling boys sitting inside a shared camp tent",
    },
    {
      url: "/templates/yootheme/activities/activity-details/bg-ad2.png",
      alt: "Child practicing archery in a forest setting",
    },

    {
      url: "/templates/yootheme/activities/activity-details/bg-ad3.png",
      alt: "Cozy wooden cabin with bunk beds",
    },
  ];

  const services = [
    { name: "Overview", href: "#overview" },
    { name: "Location", href: "#location" },
    { name: "Accommodation Options", href: "#accommodation" },
    { name: "Program", href: "#program" },
    { name: "Meals On Site", href: "#meals" },
    { name: "Team and Supervision", href: "#team" },
    { name: "Coverage and Insurance", href: "#coverage" },
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      {/* Hero Section */}

      <HeroSection
        title=" Adventure, Sports & Creative Camps in Germany"
        backgroundImage="yootheme/cache/04/01-Abenteuercamp-Bogenschieen-044ac9af.jpg"
        overlayColor="rgba(0, 0, 0, 0.19)"
        sectionClass="uk-section-default uk-preserve-color uk-light"
        titleClass="uk-heading-large uk-text-center"
      />

      {/* Basic Info Section */}
      <div
        id="Start"
        className="uk-section-default uk-section uk-padding-remove-bottom "
      >
        <div className="uk-container ">
          <div className="uk-grid tm-grid-expand uk-grid-margin" uk-grid="">
            <div className="uk-light uk-width-1-3@s uk-width-1-6@m">
              <div>
                <center>
                  <div id="proSealWidget"></div>
                </center>
              </div>
            </div>
            <div className="uk-width-1-3 uk-width-1-3@s uk-width-1-6@m">
              <div className="uk-margin uk-text-center">
                <span
                  className="uk-text-primary"
                  uk-icon="icon: location; width: 50; height: 50;"
                ></span>
              </div>
              <div className="uk-panel uk-margin uk-text-center">
                <p>Germany</p>
              </div>
            </div>
            <div className="uk-width-1-3 uk-width-1-3@s uk-width-1-6@m">
              <div className="uk-margin uk-text-center">
                <span
                  className="uk-text-primary"
                  uk-icon="icon: users; width: 50; height: 50;"
                ></span>
              </div>
              <div className="uk-panel uk-margin uk-text-center">
                <p>
                  7 - 17 years
                  <br />
                  Separated by age groups
                </p>
              </div>
            </div>
            <div className="uk-width-1-3 uk-width-1-3@s uk-width-1-6@m">
              <div className="uk-margin uk-text-center">
                <span
                  className="uk-text-primary"
                  uk-icon="icon: home; width: 50; height: 50;"
                ></span>
              </div>
              <div className="uk-panel uk-margin uk-text-center">
                <p>Tent & Cabin/House</p>
              </div>
            </div>
            <div className="uk-width-1-3 uk-width-1-3@s uk-width-1-6@m">
              <div className="uk-margin uk-text-center">
                <span
                  className="uk-text-primary"
                  uk-icon="icon: heart; width: 50; height: 50;"
                ></span>
              </div>
              <div className="uk-panel uk-margin uk-text-center">
                <p>Around-the-Clock Care & All Meals Included</p>
              </div>
            </div>
            <div className="uk-width-1-3 uk-width-1-3@s uk-width-1-6@m">
              <div className="uk-margin uk-text-center">
                <span
                  className="uk-text-primary"
                  uk-icon="icon: comments; width: 50; height: 50;"
                ></span>
              </div>
              <div className="uk-panel uk-margin uk-text-center">
                <p>
                  Bilingual
                  <br />
                  GER & EN
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lüneburger Heide Section */}

      <div
        style={{
          backgroundColor: "#f8f9fa",
          minHeight: "100vh",
          padding: "60px 0",
        }}
      >
        <div
          style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 20px" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: "30px",
            }}
          >
            {/* Left Sidebar */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {/* Explore Services Card */}
              <div
                className="fadeInUp"
                style={{
                  background: "black",
                  borderRadius: "8px",
                  padding: "30px",
                  animation: "fadeInUp 0.6s ease-out",
                }}
              >
                <h3
                  style={{
                    color: "#fff",
                    fontSize: "24px",
                    fontWeight: "600",
                    marginBottom: "30px",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                  }}
                >
                  Explore Our services
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {services.map((service, idx) => (
                    <li key={idx} style={{ marginBottom: "15px" }}>
                      <a
                        href={service.href}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          color: "#999",
                          textDecoration: "none",
                          fontSize: "16px",
                          transition: "all 0.3s ease",
                          padding: "5px 0",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#fff";
                          e.currentTarget.style.paddingLeft = "5px";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "#999";
                          e.currentTarget.style.paddingLeft = "0";
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="currentColor"
                        >
                          <path d="M11.7495 0.251043C12.0842 0.585767 12.0842 1.12847 11.7495 1.4632L2.03546 11.1772C1.70074 11.512 1.15803 11.512 0.823308 11.1772C0.488585 10.8425 0.488585 10.2999 0.823308 9.96514L10.5374 0.251043C10.8721 -0.0836809 11.4148 -0.0836809 11.7495 0.251043Z" />
                          <path d="M0 0.857123C0 0.383751 0.383751 0 0.857123 0H11.1426C11.616 0 11.9997 0.383751 11.9997 0.857123V11.1426C11.9997 11.616 11.616 11.9997 11.1426 11.9997C10.6692 11.9997 10.2855 11.616 10.2855 11.1426V1.71425H0.857123C0.383751 1.71425 0 1.3305 0 0.857123Z" />
                        </svg>
                        <span>{service.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="p-4">
                  <a href={`/booking`} className="block">
                    <div className="uk-button uk-button-default w-full">
                      Booking
                    </div>
                  </a>
                </div>
              </div>

              {/* Contact Card */}

              <div
                className="fadeInUp"
                style={{
                  background: "black",
                  borderRadius: "8px",
                  padding: "40px 30px",
                  animation: "fadeInUp 0.6s ease-out 0.1s backwards",
                }}
              >
                <div style={{ marginBottom: "30px" }}>
                  <div style={{ marginBottom: "20px" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="currentColor"
                      style={{ color: "yellow" }}
                    >
                      <path d="M9.96387 23.2148C9.96387 22.9402 9.85433 22.6766 9.66016 22.4824C9.46597 22.2882 9.20247 22.1787 8.92773 22.1787H5.35645C4.60821 22.1787 3.89044 22.4758 3.36133 23.0049C2.83224 23.534 2.53519 24.2518 2.53516 25V30.3574C2.53519 31.1057 2.83227 31.8235 3.36133 32.3525C3.89043 32.8816 4.60823 33.1787 5.35645 33.1787H8.92773C9.20247 33.1787 9.46597 33.0692 9.66016 32.875C9.85433 32.6808 9.96387 32.4173 9.96387 32.1426V23.2148ZM11.4639 32.1426C11.4639 32.8151 11.1963 33.4609 10.7207 33.9365L10.7197 33.9355C10.2442 34.4109 9.60001 34.6787 8.92773 34.6787H5.35645C4.21037 34.6787 3.11117 34.2235 2.30078 33.4131C1.49035 32.6027 1.03519 31.5035 1.03516 30.3574V25C1.03519 23.8539 1.4904 22.7548 2.30078 21.9443C3.11116 21.1341 4.21036 20.6787 5.35645 20.6787H8.92773C9.60001 20.6787 10.2442 20.9465 10.7197 21.4219L10.7207 21.4209C11.1963 21.8965 11.4639 22.5424 11.4639 23.2148V32.1426Z"></path>
                      <path d="M38.5352 23.2148C38.5352 22.5425 38.8023 21.8973 39.2773 21.4219V21.4209C39.7529 20.9453 40.3988 20.6787 41.0713 20.6787H44.6426C45.7886 20.6788 46.8879 21.134 47.6982 21.9443C48.5086 22.7547 48.9638 23.854 48.9639 25V30.3574C48.9638 31.5035 48.5086 32.6028 47.6982 33.4131C46.8879 34.2235 45.7886 34.6787 44.6426 34.6787H41.0713C40.3988 34.6787 39.7529 34.4121 39.2773 33.9365V33.9355C38.8023 33.4601 38.5352 32.815 38.5352 32.1426V23.2148ZM40.0352 32.1426C40.0352 32.4172 40.1447 32.6807 40.3389 32.875C40.5331 33.0692 40.7966 33.1787 41.0713 33.1787H44.6426C45.3908 33.1787 46.1087 32.8816 46.6377 32.3525C47.1668 31.8235 47.4638 31.1057 47.4639 30.3574V25C47.4638 24.2518 47.1668 23.534 46.6377 23.0049C46.1087 22.4759 45.3908 22.1788 44.6426 22.1787H41.0713C40.7966 22.1787 40.5331 22.2882 40.3389 22.4824C40.1447 22.6767 40.0352 22.9403 40.0352 23.2148V32.1426Z"></path>
                      <path d="M40.3184 36.6074V33.9287C40.3184 33.5146 40.6543 33.1789 41.0684 33.1787C41.4826 33.1787 41.8184 33.5145 41.8184 33.9287V36.6074C41.8183 38.7007 40.987 40.7084 39.5068 42.1885C38.0267 43.6687 36.019 44.5 33.9258 44.5C33.5116 44.5 33.1758 44.1642 33.1758 43.75C33.1758 43.3358 33.5116 43 33.9258 43C35.6213 43 37.2475 42.3268 38.4463 41.1279C39.6451 39.9291 40.3183 38.3029 40.3184 36.6074Z"></path>
                      <path d="M33.1807 43.75C33.1805 42.7651 32.7891 41.8204 32.0928 41.124C31.3962 40.4275 30.4509 40.0361 29.4658 40.0361H24.1084C23.1235 40.0362 22.179 40.4276 21.4824 41.124C20.786 41.8204 20.3946 42.765 20.3945 43.75C20.3945 44.7351 20.7859 45.6804 21.4824 46.377C22.179 47.0733 23.1235 47.4647 24.1084 47.4648H29.4658C30.4509 47.4648 31.3962 47.0735 32.0928 46.377C32.7893 45.6804 33.1807 44.735 33.1807 43.75ZM34.6807 43.75C34.6807 45.1328 34.1312 46.4596 33.1533 47.4375C32.1755 48.4154 30.8487 48.9648 29.4658 48.9648H24.1084C22.7257 48.9647 21.3997 48.4152 20.4219 47.4375C19.444 46.4596 18.8945 45.1329 18.8945 43.75C18.8946 42.3673 19.4441 41.0413 20.4219 40.0635C21.3997 39.0857 22.7257 38.5362 24.1084 38.5361H29.4658C30.8487 38.5361 32.1755 39.0856 33.1533 40.0635C34.131 41.0412 34.6805 42.3674 34.6807 43.75Z"></path>
                      <path d="M40.3184 21.4287V17.8574C40.3183 13.794 38.7044 9.89673 35.8311 7.02344C32.9577 4.1502 29.0605 2.53613 24.9971 2.53613C20.9337 2.53618 17.0364 4.15017 14.1631 7.02344C11.2899 9.89674 9.67582 13.794 9.67578 17.8574V21.4287C9.67578 21.8429 9.33999 22.1787 8.92578 22.1787C8.51157 22.1787 8.17578 21.8429 8.17578 21.4287V17.8574C8.17582 13.3962 9.94803 9.11748 13.1025 5.96289C16.2571 2.80831 20.5358 1.03618 24.9971 1.03613C29.4583 1.03613 33.737 2.80835 36.8916 5.96289C40.0462 9.11749 41.8183 13.3962 41.8184 17.8574V21.4287C41.8184 21.8429 41.4826 22.1787 41.0684 22.1787C40.6543 22.1786 40.3184 21.8428 40.3184 21.4287Z"></path>
                      <path d="M18.8945 19.6436V14.2861C18.8945 13.8719 19.2303 13.5361 19.6445 13.5361C20.0587 13.5361 20.3945 13.8719 20.3945 14.2861V19.6436C20.3944 20.0576 20.0586 20.3936 19.6445 20.3936C19.2304 20.3936 18.8947 20.0576 18.8945 19.6436Z"></path>
                      <path d="M29.6055 19.6436V14.2861C29.6055 13.8719 29.9413 13.5361 30.3555 13.5361C30.7697 13.5361 31.1055 13.8719 31.1055 14.2861V19.6436C31.1053 20.0576 30.7696 20.3936 30.3555 20.3936C29.9414 20.3936 29.6056 20.0576 29.6055 19.6436Z"></path>
                      <path d="M18.8945 26.7861C18.8945 26.3719 19.2303 26.0361 19.6445 26.0361C20.0587 26.0361 20.3945 26.3719 20.3945 26.7861C20.3945 27.6395 20.8577 28.3145 21.7002 28.8125C22.56 29.3208 23.7586 29.5986 25.002 29.5986C26.245 29.5986 27.443 29.3206 28.3027 28.8125C29.1452 28.3145 29.6084 27.6395 29.6084 26.7861C29.6084 26.3721 29.9444 26.0364 30.3584 26.0361C30.7726 26.0361 31.1084 26.3719 31.1084 26.7861C31.1084 28.3077 30.2328 29.414 29.0664 30.1035C27.9174 30.7827 26.4371 31.0986 25.002 31.0986C23.5667 31.0986 22.0856 30.7827 20.9365 30.1035C19.7703 29.414 18.8945 28.3076 18.8945 26.7861Z"></path>
                    </svg>
                  </div>
                  <h3
                    style={{
                      color: "#fff",
                      fontSize: "20px",
                      fontWeight: "600",
                      lineHeight: "1.4",
                    }}
                  >
                    Let&apos;s plan your perfect nature escape
                  </h3>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: "15px" }}>
                    <a
                      href="tel:+(123)-456-789"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        color: "#999",
                        textDecoration: "none",
                        fontSize: "16px",
                        transition: "color 0.3s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#fff")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#999")
                      }
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M8.8457 5.93115C8.84567 5.64689 8.73343 5.37413 8.53418 5.17139L5.28808 1.92432L5.208 1.85303C5.01329 1.69665 4.76943 1.61084 4.51757 1.61084C4.23001 1.61094 3.95373 1.72334 3.74804 1.92432L3.00586 2.68408L2.99609 2.69385C2.22454 3.45523 1.73864 4.45915 1.62011 5.53662C1.50186 6.61196 1.75664 7.69523 2.34179 8.60498C5.83558 13.7515 10.2803 18.1831 15.4365 21.6626C16.3449 22.2448 17.4253 22.4983 18.498 22.3804C19.5755 22.2619 20.5794 21.7759 21.3408 21.0044L21.3506 20.9946L22.1113 20.2495C22.3112 20.044 22.4238 19.7696 22.4238 19.4829C22.4238 19.1951 22.3115 18.9182 22.1103 18.7124L18.8447 15.4819C18.6423 15.284 18.3701 15.1725 18.0869 15.1724C17.8026 15.1724 17.5289 15.2837 17.3262 15.4829L16.8008 14.9487L17.3252 15.4849C16.8392 15.96 16.1865 16.226 15.5068 16.2261C14.8271 16.2261 14.1736 15.9601 13.6875 15.4849L8.53906 10.3354C8.29886 10.0975 8.1071 9.81434 7.97656 9.50244C7.84519 9.18854 7.77734 8.85152 7.77734 8.51123C7.77734 8.17096 7.84519 7.83391 7.97656 7.52002C8.10639 7.20982 8.29582 6.92801 8.53418 6.69092C8.73343 6.48815 8.8457 6.21544 8.8457 5.93115Z" />
                      </svg>
                      <span>+(123)-456-789</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:hello@ggcamp.org"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        color: "#999",
                        textDecoration: "none",
                        fontSize: "16px",
                        transition: "color 0.3s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#fff")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#999")
                      }
                    >
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      <span>hello@ggcamp.org</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="max-w-md mx-auto p-6 bg-gray-50 min-h-screen">
                <div className="text-[1.7vw] font-bold text-gray-900 mb-6">
                  Upcoming Tour
                </div>

                <div className="space-y-4">
                  {tours.map((tour) => (
                    <div
                      key={tour.id}
                      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
                    >
                      <div className="flex gap-4 p-4">
                        {/* Tour Image */}
                        <div className="flex-shrink-0">
                          <img
                            src={tour.image}
                            alt={tour.title}
                            className="w-24 h-24 rounded-lg object-cover"
                          />
                        </div>

                        {/* Tour Details */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {tour.title}
                          </h3>

                          {/* Rating */}
                          <div className="flex items-center gap-1 mb-2">
                            <Star className="w-4 h-4 fill-gray-900 text-gray-900" />
                            <span className="font-semibold text-gray-900">
                              {tour.rating}
                            </span>
                            <span className="text-sm text-gray-500">
                              ({tour.reviews} reviews)
                            </span>
                          </div>

                          {/* Location */}
                          <div className="flex items-center gap-1 mb-3">
                            <MapPin className="w-4 h-4 text-gray-600" />
                            <span className="text-sm text-gray-600">
                              {tour.location}
                            </span>
                          </div>

                          {/* Price */}
                          <div className="flex items-center gap-2">
                            <span className="text-xl font-bold text-gray-900">
                              ${tour.price}
                            </span>
                            <span className="text-sm text-red-500 line-through">
                              ${tour.originalPrice}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "30px" }}
            >
              {/* Main Image */}
              <div
                className="fadeInUp relative z-10 rounded-2xl overflow-hidden group cursor-pointer"
                style={{
                  position: "relative",
                  borderRadius: "8px",
                  overflow: "hidden",
                  animation: "fadeInUp 0.6s ease-out",
                }}
              >
                <img
                  src={slides[currentSlide].url}
               
                  alt={slides[currentSlide].alt}
                  style={{
                    width: "100%",
                    height: "500px",
                    objectFit: "cover",
                    display: "block", 
                  }}
                />
                <div className="absolute top-1/2 left-1/2 w-[200%] h-0 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white/30  z-20 pointer-events-none group-hover:transition-all group-hover:duration-600 group-hover:ease-linear group-hover:h-[250%] group-hover:bg-transparent" />
                

                {/* Overlay Gradient */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "250px",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)",
                    pointerEvents: "none",
                  }}
                />
                

                {/* Title and Info - Bottom Left */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "30px",
                    left: "30px",
                    color: "#fff",
                    zIndex: 2,
                  }}
                >
                  <div
                    className="text-[3vw]"
                    style={{
                      color: "#fff",

                      fontWeight: "700",
                      margin: "0 0 15px 0",
                      textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
                      letterSpacing: "-0.5px",
                    }}
                  >
                    {camp?.locations.map((item: string) => {
                      const capitalize =
                        item.charAt(0).toUpperCase() + item.slice(1);
                      const comma =
                        camp?.locations.indexOf(item) <
                        camp?.locations.length - 1
                          ? ", "
                          : "";
                      return (
                        <span key={item}>
                          {capitalize}
                          {comma}
                        </span>
                      );
                    })}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      {camp?.season.map((item: string, index: number) => {
                        const capitalize =
                          item.charAt(0).toUpperCase() + item.slice(1);
                        const comma =
                          index < camp.season.length - 1 ? ", " : "";

                        return (
                          <div className="text-[1vw]" key={item}>
                            {capitalize}
                            {comma}
                          </div>
                        );
                      })}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                      <div className="text-[1w]">GER</div>
                    </div>
                  </div>
                </div>

                

                {/* Slider Dots - Bottom Center */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    gap: "8px",
                    zIndex: 2,
                  }}
                >
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      style={{
                        width: idx === currentSlide ? "24px" : "8px",
                        height: "8px",
                        borderRadius: "4px",
                        border: "none",
                        background:
                          idx === currentSlide
                            ? "#fff"
                            : "rgba(255,255,255,0.5)",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                    />
                  ))}
                </div>
              </div>

                <div className="w-full mt-5">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Event Schedule</h2>
      
      <div className="border-t border-b border-gray-200 py-6">
        <div className="flex flex-row items-center justify-between gap-8">
          {/* Start Date */}
          <div className="flex items-start gap-3">
            <Clock className="w-6 h-6 text-gray-700 mt-1" />
            <div style={{ color: " #9c5d00" }}>
              <h3 className="text-sm font-semibold mb-1">Start Date</h3>
              <p className="text-base  font-medium">06/15/2024</p>
            </div>
          </div>
          
          {/* Duration */}
          <div className="flex items-start gap-3">
            <Moon className="w-6 h-6 text-gray-700 mt-1" />
            <div style={{ color: " #9c5d00" }}>
              <h3 className="text-sm font-semibold mb-1">Duration</h3>
              <p className="text-base font-medium">7 Days 6 Nights</p>
            </div>
          </div>
          
          {/* Total Ticket */}
          <div className="flex items-start gap-3">
            <Ticket className="w-6 h-6 text-gray-700 mt-1" />
            <div style={{ color: " #9c5d00" }}>
              <h3 className="text-sm font-semibold mb-1">Total Ticket</h3>
              <p className="text-base font-medium">$48/50</p>
            </div>
          </div>
        </div>
      </div>
    </div>

              {/* Description */}
              <div
                className="fadeInUp"
                style={{
                  animation: "fadeInUp 0.6s ease-out 0.1s backwards",
                }}
              >
                <div
                  id="overview"
                  className="text-[1w]"
                  style={{
                    lineHeight: "1.8",
                    color: "#666",
                    marginBottom: "15px",
                  }}
                >
                  Nestled in the lush landscapes of Madridejos, Cebu Island, the
                  Exploration Camp offers a vibrant mix of adventure, nature,
                  and community. Campers wake up to tropical surroundings, enjoy
                  engaging activities, and explore the beauty of the island
                  while building friendships and unforgettable memories.
                </div>
              </div>

              {/* Service Overview */}
              <div
                className="fadeInUp"
                style={{
                  animation: "fadeInUp 0.6s ease-out 0.2s backwards",
                }}
              >
                <div
                  className="text-[1.7vw]"
                  style={{
                    fontWeight: "600",
                    color: "#1a1a1a",
                    marginBottom: "20px",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                  }}
                >
                  Overview
                </div>
                <div
                  className="text-[1vw]"
                  style={{
                    lineHeight: "1.8",
                    color: "#666",
                    marginBottom: "30px",
                  }}
                >
                  The Exploration Camp offers young explorers aged 12 to 18 a
                  chance to experience nature, culture and people against the
                  picturesque scenes of the Philippines. Aiming to inspire,
                  challenge and nurture a love of learning in each and every
                  child, the camp combines outdoor adventures, engaging creative
                  projects and incredible group efforts – all within a spirited
                  international setting.
                </div>

                {/* Features Grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "30px",
                    marginTop: "40px",
                  }}
                >
                  <div>
                    <div
                      className="fadeInUp"
                      style={{
                        marginBottom: "30px",
                        animation: "fadeInUp 0.6s ease-out 0.3s backwards",
                      }}
                    >
                      <div
                        className="text-[1.7vw]"
                        style={{
                          fontWeight: "600",
                          color: "#1a1a1a",
                          marginBottom: "15px",
                        }}
                      >
                        Key features
                      </div>
                    </div>
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                      }}
                    >
                      {[
                        "Ages 12–18, open to all levels",
                        "Outdoor, sports, creative & evening activities",
                        "Cool, impactful excursions and trips",
                        "2 English-speaking camp environment",
                        "Dorm accommodation with full board",
                        "24/7 care from GGCamp teamers",
                        "Digital Detox: phones only during siesta",
                        "Arrival/departure shuttle service",
                      ].map((feature, idx) => (
                        <li
                          key={idx}
                          className="fadeInUp"
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            marginBottom: "15px",
                            fontSize: "15px",
                            color: "#666",
                            animation: `fadeInUp 0.6s ease-out ${
                              0.4 + idx * 0.1
                            }s backwards`,
                          }}
                        >
                          <svg
                            style={{ marginTop: "3px", flexShrink: 0 }}
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <circle cx="10" cy="10" r="10" fill="#9c5d00" />
                            <path
                              d="M6 10l3 3 5-6"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="text-[1vw]">{feature}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative z-10 rounded-2xl overflow-hidden group cursor-pointer">
                      <img
                        src="/templates/yootheme/activities/activity-details/bg-ad4.png"
                        alt="Adventure camp activities"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                      />
                     <div className="absolute top-1/2 left-1/2 w-[200%] h-0 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white/30  z-20 pointer-events-none group-hover:transition-all group-hover:duration-600 group-hover:ease-linear group-hover:h-[250%] group-hover:bg-transparent" />
                  </div>
                </div>
              </div>

              <div id="location"></div>

              <div
                className="fadeInUp"
                style={{
                  animation: "fadeInUp 0.6s ease-out 0.4s backwards",
                }}
              >
                <div
                  className="text-[1.7vw]"
                  style={{
                    fontWeight: "600",
                    color: "#1a1a1a",
                    marginBottom: "20px",
                  }}
                >
                  Location
                </div>
                <div
                  className="text-[1vw]"
                  style={{
                    lineHeight: "1.8",
                    color: "#666",
                    marginBottom: "40px",
                  }}
                >
                  Your stay at Exploration Camp in Cebu City comes with more
                  than just a place to spend your summer—it’s a complete
                  experience designed for learning, adventure, connection, and
                  community. From the moment you arrive, every detail is taken
                  care of. Explore the stunning island of Cebu, just a short
                  walk from a quaint fishing village with traditional farms and
                  charming timber framed homes. Enjoy activities across our
                  expansive campgrounds, from kayaking and bouncing on water
                  trampolines to building rafts and conquering the high ropes
                  course. With fellow campers from around the world, you can
                  improve your English skills, forge lasting friendships, and
                  immerse yourself in the authentic spirit of camp.
                </div>
                <div style={{ display: "flex", gap: "30px", height: "400px" }}>
                  <div
                    className="relative z-10 rounded-2xl overflow-hidden group cursor-pointer"
                    style={{
                      flex: "7 1 0",
                      overflow: "hidden",
                      borderRadius: "8px",
                    }}
                  >
                    <img
                      src="/templates/yootheme/activities/activity-details/bg-ad5.png"
                      alt="Adventure camp activities"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                   <div className="absolute top-1/2 left-1/2 w-[200%] h-0 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white/30  z-20 pointer-events-none group-hover:transition-all group-hover:duration-600 group-hover:ease-linear group-hover:h-[250%] group-hover:bg-transparent" />

                  </div>
                  <div
                    className="relative z-10 rounded-2xl overflow-hidden group cursor-pointer"
                    style={{
                      flex: "3 1 0",
                      overflow: "hidden",
                      borderRadius: "8px",
                    }}
                  >
                    <img
                      src="/templates/yootheme/activities/activity-details/bg-ad6.png"
                      alt="Adventure camp activities"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <div className="absolute top-1/2 left-1/2 w-[200%] h-0 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white/30  z-20 pointer-events-none group-hover:transition-all group-hover:duration-600 group-hover:ease-linear group-hover:h-[250%] group-hover:bg-transparent" />

                  </div>
                </div>
              </div>
              <div id="meals"></div>
              <div
                className="fadeInUp "
                style={{
                  animation: "fadeInUp 0.6s ease-out 0.4s backwards",
                }}
              >
                <div
                  className="text-[1.7vw]"
                  style={{
                    fontWeight: "600",
                    color: "#1a1a1a",
                    marginBottom: "20px",
                  }}
                >
                  Meal On Site
                </div>
                <div
                  className="text-[1vw]"
                  style={{
                    lineHeight: "1.8",
                    color: "#666",
                    marginBottom: "40px",
                  }}
                >
                  Indulge in three scrumptious meals each day—fresh, diverse,
                  and absolutely delightful! Whether you have a vegetarian,
                  gluten-free, or lactose-free diet, simply inform us in
                  advance, and we’ll take care of your needs.
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "30px",
                  }}
                >
                  {[
                    {
                      title: "Breakfast",
                      desc: "Start your day with a hearty buffet of fresh bread, seasonal fruits, muesli, milk , juice, and tea—perfect fuel for all your exciting activities",
                      delay: "0.5s",
                    },
                    {
                      title: "Lunch",
                      desc: "Feast on warm, delicious dishes made entirely from scratch, featuring seafood, meats, vegetables, and rice to satisfy every appetite and keep you energized",
                      delay: "0.6s",
                    },
                    {
                      title: "Dinner",
                      desc: "Savor authentic local flavors with carefully prepared meals, served fresh to delight your taste buds after a full day of adventure and exploration.",
                      delay: "0.7s",
                    },
                    {
                      title: "Snacks and Refreshments",
                      desc: "Stay energized with fresh fruits, afternoon treats, and plenty of water throughout the day, keeping you ready for every experience",
                      delay: "0.8s",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="fadeInUp"
                      style={{
                        animation: `fadeInUp 0.6s ease-out ${item.delay} backwards`,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          marginBottom: "12px",
                        }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <circle cx="10" cy="10" r="10" fill="#9c5d00" />
                          <path
                            d="M6 10l3 3 5-6"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div
                          className="text-[1.7vw]"
                          style={{
                            fontWeight: "600",
                            color: "#1a1a1a",
                            margin: 0,
                          }}
                        >
                          {item.title}
                        </div>
                      </div>
                      <div
                        className="text-[1vw]"
                        style={{
                          lineHeight: "1.7",
                          color: "#666",
                          margin: 0,
                        }}
                      >
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  id="coverage"
                  className="text-[1vw]"
                  style={{
                    lineHeight: "1.8",
                    color: "#666",
                    margin: "40px 0",
                  }}
                >
                  And the highlight? Everything is made from scratch—no instant
                  meals here! Enjoy authentic dishes that not only taste
                  incredible but also provide you with a true taste of local
                  cuisine to fuel your adventures!
                </div>
              </div>

              {/* Package at a Glance */}
              <div
                className="fadeInUp"
                style={{
                  animation: "fadeInUp 0.6s ease-out 0.4s backwards",
                }}
              >
                <div
                  className="text-[1.7vw]"
                  style={{
                    fontWeight: "600",
                    color: "#1a1a1a",
                    marginBottom: "15px",
                  }}
                >
                  Coverage and Insurance
                </div>
                <div
                  className="text-[1vw]"
                  style={{
                    lineHeight: "1.7",
                    color: "#999",
                    marginBottom: "40px",
                  }}
                >
                  Whether it’s everyday bumps and scrapes to unexpected
                  emergencies, our International Insurance Package gives your
                  child all-round protection. Covering accidents, health issues,
                  and other unforeseen events, it ensures peace of mind for
                  parents while keeping children safe and supported throughout
                  their entire journey.
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "30px",
                  }}
                >
                  {/* Include Column */}
                  <div
                    style={{
                      background: "#ffff",
                      borderRadius: "8px",
                      padding: "35px 30px",
                    }}
                  >
                    <div
                      className="text-[1.7vw]"
                      style={{
                        fontWeight: "700",
                        color: "#1a1a1a",
                        marginBottom: "12px",
                      }}
                    >
                      Camp Insurance Package
                    </div>
                    <div
                      className="text-[1vw]"
                      style={{
                        lineHeight: "1.6",
                        color: "#999",
                        marginBottom: "25px",
                      }}
                    >
                      With this, every risk is going to be covered, and
                      participants will stay completely safe the entire time
                      they are in camp.
                    </div>
                    <hr />
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px",
                      }}
                    >
                      {[
                        "Accidents and medical visits are covered",
                        "Protection against property damage",
                        "Price: Depending on the camping trip selected",
                      ].map((item, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",

                            color: "#666",
                            lineHeight: "1.6",
                          }}
                        >
                          <svg
                            style={{ marginTop: "2px", flexShrink: 0 }}
                            width="7"
                            height="7"
                            viewBox="0 0 18 18"
                            fill="none"
                          >
                            <circle cx="9" cy="9" r="9" fill="#9c5d00" />
                          </svg>
                          <div className="text-[0.86vw]">{item}</div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Exclude Column */}
                  <div
                    style={{
                      background: "#ffff",
                      borderRadius: "8px",
                      padding: "35px 30px",
                    }}
                  >
                    <div
                      className="text-[1.7vw]"
                      style={{
                        fontWeight: "700",
                        color: "#1a1a1a",
                        marginBottom: "12px",
                      }}
                    >
                      Travel Cancellation Guarantee
                    </div>
                    <div
                      className="text-[1vw]"
                      style={{
                        lineHeight: "1.6",
                        color: "#999",
                        marginBottom: "25px",
                      }}
                    >
                      Our promise ensures a full refund for cancellations due to
                      illness or unforeseen events before camp starts, giving
                      you peace of mind and flexible plans.
                    </div>
                    <hr />
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px",
                      }}
                    >
                      {[
                        " Valid until one week before camp",
                        "Covers cancellations for illness, accidents, or exams",
                        "Refund applies to the full program cost",
                      ].map((item, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",

                            color: "#666",
                            lineHeight: "1.6",
                          }}
                        >
                          <svg
                            style={{ marginTop: "2px", flexShrink: 0 }}
                            width="7"
                            height="7"
                            viewBox="0 0 18 18"
                            fill="none"
                          >
                            <circle cx="9" cy="9" r="9" fill="#9c5d00" />
                          </svg>
                          <div className="text-[0.86vw]">{item}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQ */}
            </div>
          </div>
        </div>

        <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .fadeInUp {
          animation-fill-mode: backwards;
        }
      `}</style>
      </div>

      {/* Bayerischer Wald Section */}
      <div
        id="Regen"
        className="uk-section-muted uk-section uk-padding-remove-bottom"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-grid-margin" uk-grid="">
            <div className="uk-grid-item-match uk-width-2-3@m">
              <div className="uk-card-default uk-card uk-card-body">
                <h2 className="uk-h2">
                  Adventure Camp Regen – Your Summer Camp in Bavaria!
                </h2>
                <div className="uk-panel uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin">
                  <p>
                    Action, Sports &amp; Creativity – Our Kids &amp; Teen Camps
                    in the Bavarian Forest Have It All!
                    <br />
                    Climbing, outdoor challenges, team games, and creative
                    workshops make your holidays truly unforgettable.
                  </p>
                  <p>
                    No extra profile needed – if you don&apos;t choose Horseback
                    Riding or Survival, you&apos;ll automatically be part of the
                    Adventure Base Program!
                    <br />
                    Experience nature, sports, and an international community at
                    its best.
                  </p>
                  <p>Book your Adventure Camp and safe your spot!</p>
                </div>
                <div
                  className="uk-slider-container uk-margin uk-text-center"
                  uk-slider="sets: 1; center: 1; velocity: 1; autoplay: 1;  autoplayInterval: 4000;"
                >
                  <div className="uk-position-relative">
                    <div className="uk-slider-items uk-grid">
                      <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                        <div
                          className="el-item uk-inline-clip uk-transition-toggle"
                          tabIndex={0}
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/d3/reg_programm_archery-d31dea56.jpg"
                            )}
                            width={1260}
                            height={837}
                            alt="Girl aiming with bow and arrow – archery activity for kids at outdoor summer camp"
                            loading="lazy"
                            className="el-image uk-transition-scale-up uk-transition-opaque"
                          />
                        </div>
                      </div>
                      <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                        <div
                          className="el-item uk-inline-clip uk-transition-toggle"
                          tabIndex={0}
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/d3/reg_programm_games-d3b4af4a.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Group of children being welcomed at language camp – beginning of an exciting adventure week in Regen"
                            loading="lazy"
                            className="el-image uk-transition-scale-up uk-transition-opaque"
                          />
                        </div>
                      </div>
                      <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                        <div
                          className="el-item uk-inline-clip uk-transition-toggle"
                          tabIndex={0}
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/d6/01-Regen-Sport-Camp-Location-d6d81402.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Aerial view of Sportcamp Regen with sports fields and scenic nature – active summer camp in the Bavarian Forest"
                            loading="lazy"
                            className="el-image uk-transition-scale-up uk-transition-opaque"
                          />
                        </div>
                      </div>
                      <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                        <div
                          className="el-item uk-inline-clip uk-transition-toggle"
                          tabIndex={0}
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/fc/03-Regen-Sport-Camp-Bridge-fc7e5448.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Outdoor climbing and ziplining under a stone viaduct – thrilling activities at summer camp in the Bavarian Forest"
                            loading="lazy"
                            className="el-image uk-transition-scale-up uk-transition-opaque"
                          />
                        </div>
                      </div>
                      <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                        <div
                          className="el-item uk-inline-clip uk-transition-toggle"
                          tabIndex={0}
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/cd/02-Regen-Language-Camp-Kayak-cd591e8f.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Children on a canoeing trip through nature – outdoor language Go and Grow Camp with expert supervision in Regen"
                            loading="lazy"
                            className="el-image uk-transition-scale-up uk-transition-opaque"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="uk-margin-top" uk-inverse="">
                    <ul
                      className="el-nav uk-slider-nav uk-dotnav uk-flex-center"
                      uk-margin=""
                    ></ul>
                  </div>
                </div>
                {/* Accordion for Regen - Similar structure to Walsrode but with Regen-specific content */}
                <div id="AccordionRegen">
                  <div
                    uk-accordion="collapsible: false;"
                    id="js-4"
                    className="custom_acc_691a9ce46a7b9"
                  >
                    <div id="js-4_0" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          All the Key Facts at a Glance
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <ul style={{ listStyleType: "disc" }}>
                            <li>
                              <strong>Choose your focus:</strong> 4 exciting
                              profile sessions (2.5 hrs each) packed with
                              sports, adventure, or creative fun
                            </li>
                            <li>
                              <strong>Daily variety:</strong> Enjoy even more
                              activities outside your profile – outdoor games,
                              sports, creativity, campfires, disco nights & more
                            </li>
                            <li>
                              <strong>Awesome excursions</strong> for 2-week
                              campers: overnight hike under the stars or a trip
                              to Munich
                            </li>
                            <li>
                              <strong>Bilingual camp vibe:</strong> English &
                              German – learn languages naturally in an
                              international setting
                            </li>
                            <li>
                              <strong>Accommodation:</strong> Stay in tents &
                              tiny houses at the campsite, or in wooden cabins &
                              solid lodges at the BLSV grounds
                            </li>
                            <li>
                              <strong>Full board:</strong> 7-day stay (Sun–Sat),
                              6 nights with freshly prepared meals
                            </li>
                            <li>
                              <strong>24/7 support:</strong> Our dedicated
                              teamers are always nearby and happy to help
                            </li>
                            <li>
                              <strong>Digital Detox:</strong> Phones and
                              electronics only allowed during siesta
                            </li>
                            <li>
                              <strong>Arrival & departure made easy:</strong>{" "}
                              Shuttle service from train stations and airports
                              available
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div id="js-4_1" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <div className="text-[1.7vw] el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Location
                        </div>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div
                          id="jp_accordation_section_691a9ce46aac7"
                          className="jp_section_content"
                        >
                          <div className="uk-container">
                            <div
                              className="uk-grid tm-grid-expand uk-grid-margin"
                              uk-grid=""
                            >
                              <div className="uk-width-1-2@m">
                                <div
                                  className="uk-position-relative uk-position-z-index uk-dark uk-margin"
                                  style={{ minHeight: "50vh" }}
                                  uk-map=""
                                  data-map-type="leaflet"
                                >
                                  <script
                                    type="application/json"
                                    dangerouslySetInnerHTML={{
                                      __html: JSON.stringify({
                                        markers: [
                                          {
                                            lat: 48.9666,
                                            lng: 13.1128,
                                            title: "Bayerischer Wald",
                                            show_popup: true,
                                          },
                                        ],
                                        controls: true,
                                        dragging: true,
                                        max_zoom: "18",
                                        min_zoom: "0",
                                        poi: false,
                                        type: "roadmap",
                                        zoom: "5",
                                        zooming: false,
                                        center: { lat: 48.9666, lng: 13.1128 },
                                        lazyload: true,
                                        library: "leaflet",
                                        baseUrl:
                                          "/templates/yootheme/vendor/assets/leaflet/leaflet/dist",
                                      }),
                                    }}
                                  />
                                  <div className="el-item uk-text-default uk-font-default uk-margin-remove-first-child">
                                    <h3 className="el-title uk-margin-top uk-margin-remove-bottom">
                                      Bayerischer Wald
                                    </h3>
                                    <div className="uk-margin-top">
                                      <Link
                                        href="/destinations/germany-adventure-camp-bayerischer-wald"
                                        target="_blank"
                                        className="el-link uk-button uk-button-default"
                                      >
                                        Info - Location
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="uk-width-1-2@m">
                                <div className="uk-panel uk-margin">
                                  <h4>
                                    Welcome to Regen – Your Adventure in the
                                    Bavarian Forest!
                                  </h4>
                                  <p>
                                    Our Go and Grow Camp in Regen is located
                                    right in the heart of the Bavarian Forest –
                                    one of South Germany&apos;s most beautiful
                                    natural landscapes. Surrounded by forests,
                                    rolling hills, and crystal-clear rivers,
                                    it&apos;s the perfect place for adventure,
                                    sports, and creative camps in southern
                                    Germany.
                                  </p>
                                  <p>
                                    <strong>Pure action &amp; nature!</strong>
                                    <br />
                                    Whether it&apos;s canoeing, kayaking,
                                    climbing, or team-building – this is where
                                    the fun really begins!
                                    <br />
                                    In cooperation with the Bavarian Sports
                                    Association (BLSV), we use top-class sports
                                    facilities on-site and nearby to offer even
                                    more variety and excitement.
                                  </p>
                                  <p>
                                    <strong>
                                      International community &amp; real camp
                                      spirit!
                                    </strong>
                                    <br />
                                    Our bilingual teamers (English/German)
                                    create an inspiring and welcoming
                                    atmosphere.
                                  </p>
                                  <p>
                                    Whether you&apos;re an outdoor enthusiast,
                                    sports lover, or language explorer – this
                                    camp is one-of-a-kind!
                                    <br />
                                    <strong>
                                      We can&apos;t wait to welcome you!
                                    </strong>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <style
                  dangerouslySetInnerHTML={{
                    __html: `
                    .custom_acc_691a9ce46a7b9 .uk-accordion-title * {
                      color: #000000 !important;
                    }
                    .custom_acc_691a9ce46a7b9 .uk-accordion-title {
                      padding: 10px !important;
                      color: #000000 !important;
                      background: #ffffff !important;
                      border: 1px solid #ffaa00 !important;
                      position: relative;
                      padding-left: 60px !important;
                    }
                    .custom_acc_691a9ce46a7b9 .uk-accordion-title::before {
                      display: block;
                      position: absolute;
                      top: 0;
                      bottom: 0;
                      background-color: #ffaa00 !important;
                      background-size: 30px !important;
                      margin-left: 0px;
                      background-repeat: repeat;
                      width: 50px;
                      height: 100%;
                      background-repeat: no-repeat;
                      background-position: center center;
                      left: 0;
                      margin-right: 15px;
                      margin-left: 0px;
                      content: "+";
                      color: white;
                      font-size: 24px;
                      font-weight: bold;
                      text-align: center;
                      line-height: 1;
                    }
                    .custom_acc_691a9ce46a7b9 .uk-open > .uk-accordion-title::before {
                      content: "−";
                    }
                    .custom_acc_691a9ce46a7b9 .uk-accordion-content {
                      border: 1px solid #ffaa00 !important;
                      background: #ffffff !important;
                      padding: 15px !important;
                      margin-top: 15px !important;
                    }
                    .custom_acc_691a9ce46a7b9 > :nth-child(n + 2) {
                      border: unset !important;
                      box-shadow: unset !important;
                    }
                  `,
                  }}
                />
              </div>
            </div>
            <div className="uk-width-1-3@m">
              <div className="uk-card-default uk-card uk-card-body">
                <h3 className="uk-h3">Quick Facts</h3>
                <ul className="uk-list uk-list-divider">
                  <li>
                    <strong>Location:</strong> Bayerischer Wald (Regen)
                  </li>
                  <li>
                    <strong>Ages:</strong> 7 - 16 years
                  </li>
                  <li>
                    <strong>Price:</strong> from 395 USD
                  </li>
                  <li>
                    <strong>Duration:</strong> from 7 days
                  </li>
                </ul>
                <Link
                  href="/destinations/germany-adventure-camp-bayerischer-wald"
                  className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-top"
                >
                  View Location
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      {/* <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h2 uk-text-center">Booking</h2>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
              <div className="uk-panel uk-margin">
                <div style={{ textAlign: "center" }}>
                  <iframe
                    src="https://www.bookacamp.de/en/booking/form/view-by-camp/ds7fdn347dsfndsf74n37en37en37dnd/walsrode"
                    title="Bookacamp, die Buchungsplattform von Go and Grow Camp"
                    allowFullScreen={true}
                    width="1000"
                    height="1700"
                    frameBorder="0"
                    allowFullScreen={true}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Testimonial Section */}
      <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-small">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-grid-item-match uk-width-1-1">
              <div className="uk-card-default uk-card uk-card-body">
                <blockquote
                  className="uk-width-2xlarge uk-text-left uk-scrollspy-inview"
                  uk-scrollspy-class=""
                >
                  <p>
                    Perfect Adventure & Sports Camp! Our children tried so many
                    exciting activities - climbing, canoeing, archery, and more.
                    The variety kept them engaged and active all week. They
                    learned new skills, pushed their limits, and had an absolute
                    blast. The best summer camp experience!
                  </p>
                  <footer className="el-footer">
                    <cite className="el-author">
                      <a
                        href="https://maps.app.goo.gl/FdniYSE33xQapbBs5"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Lisa G. auf Google
                      </a>
                    </cite>
                  </footer>
                </blockquote>
                <div uk-scrollspy-class="" className="uk-scrollspy-inview">
                  <center>
                    <div className="pe-richsnippets"></div>
                    <Script
                      type="text/javascript"
                      src="https://www.provenexpert.com/widget/richsnippet497f.js?l=en&u=1Z3p4tQZkSQphSwAi92ZltwA0ZwAkWUZ&v=2"
                      async
                    />
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
