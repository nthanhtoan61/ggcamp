"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { getTemplateImageUrl } from "@/lib/assets";
import { programs } from "@/data/programs";
import { ProgramCard } from "@/components/features/ProgramCard";
import { useScrollTrigger } from "@/lib/utils";
import ActivityShowcase from "@/components/home/ActivityShowcase";
import BlogHeroSection from "@/components/home/BlogHeroSection";
import FAQSection from "@/components/home/FAQSection";
import { Lasso } from "lucide-react";
import LatestPostsSection from "@/components/home/LatestPostsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import NewsletterSection from "@/components/home/NewsletterSection";
import Newsletter from "@/components/layouts/Newsletter";
import PartnersSection from "@/components/home/PartnersSection";
import { AboutSection } from "@/components/features/AboutSection";
import { HeroSection } from "@/components/layouts";

// Declare jQuery for TypeScript
declare const jQuery: any;

export default function HomePage() {
  const [filteredPrograms, setFilteredPrograms] = useState(programs);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [seeMoreHovered, setSeeMoreHovered] = useState(false);
  const [seeMoreCoords, setSeeMoreCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    const applyFilters = () => {
      // Lấy params từ URL hash hoặc search
      const hash = window.location.hash;
      const searchParams = new URLSearchParams(window.location.search);

      let field4 = "";
      let field5 = "";
      let field6 = "";
      let field7 = "";

      // Nếu có hash với params
      if (hash.includes("?")) {
        const hashParams = new URLSearchParams(hash.split("?")[1]);
        field4 = hashParams.get("field_4") || searchParams.get("field_4") || "";
        field5 = hashParams.get("field_5") || searchParams.get("field_5") || "";
        field6 = hashParams.get("field_6") || searchParams.get("field_6") || "";
        field7 = hashParams.get("field_7") || searchParams.get("field_7") || "";
      } else {
        // Kiểm tra search params
        field4 = searchParams.get("field_4") || "";
        field5 = searchParams.get("field_5") || "";
        field6 = searchParams.get("field_6") || "";
        field7 = searchParams.get("field_7") || "";
      }

      // Set values vào hidden fields và multiselect
      if (field4) {
        const hiddenField4 = document.getElementById(
          "field_4"
        ) as HTMLInputElement;
        if (hiddenField4) hiddenField4.value = field4;
        // Set selected values trong multiselect
        if (typeof jQuery !== "undefined" && jQuery.fn.multiselect) {
          const values = field4.split(",");
          jQuery("#field_4_select").multiselect("select", values);
        }
      }
      if (field5) {
        const hiddenField5 = document.getElementById(
          "field_5"
        ) as HTMLInputElement;
        if (hiddenField5) hiddenField5.value = field5;
        if (typeof jQuery !== "undefined" && jQuery.fn.multiselect) {
          const values = field5.split(",");
          jQuery("#field_5_select").multiselect("select", values);
        }
      }
      if (field6) {
        const hiddenField6 = document.getElementById(
          "field_6"
        ) as HTMLInputElement;
        if (hiddenField6) hiddenField6.value = field6;
        if (typeof jQuery !== "undefined" && jQuery.fn.multiselect) {
          const values = field6.split(",");
          jQuery("#field_6_select").multiselect("select", values);
        }
      }
      if (field7) {
        const field7Select = document.getElementById(
          "field_7_select"
        ) as HTMLSelectElement;
        if (field7Select) field7Select.value = field7;
      }

      // Apply filters
      if (field4 || field5 || field6 || field7) {
        let filtered = [...programs];

        // Filter by program (multiple values)
        if (field4) {
          const programValues = field4.split(",");
          const programMap: Record<string, string> = {
            adventure: "adventure-sports-creative",
            fishing: "fishing",
            "arts-crafts": "arts-crafts",
            englisch: "englischcamps",
            "englisch-toefl": "englisch-toefl",
            soccer: "soccer",
            husky: "husky-camp",
            climbing: "climbing",
            "top-rope": "climbing",
            horseback: "horseback-riding",
            diving: "diving",
            tennis: "tennis",
            icit: "icit",
            leadership: "leadership",
            "water-sports": "multi-water-adventure",
            dlrg: "lifeguarding",
            swimming: "swimming",
            sailing: "sailing",
            skating: "skating",
            space: "space-exploration",
            spanish: "spanishcourse",
            survival: "survival",
            dancing: "dancing",
            windsurf: "windsurfing",
            german: "german-camps",
            coding: "coding",
          };
          filtered = filtered.filter((p) =>
            programValues.some(
              (v) =>
                p.id === programMap[v] ||
                p.slug === programMap[v] ||
                p.slug === v
            )
          );
        }

        // Filter by season (multiple values)
        if (field5) {
          const seasonValues = field5.split(",");
          filtered = filtered.filter((p) =>
            seasonValues.some((s) => p.seasons.includes(s))
          );
        }

        // Filter by location (multiple values)
        if (field6) {
          const locationValues = field6.split(",");
          filtered = filtered.filter((p) =>
            locationValues.some((l) => {
              const locationMap: Record<string, string> = {
                philippines: "philippines",
                vietnam: "vietnam",
                portugal: "portugal",
                china: "china",
                thailand: "thailand",
                malaysia: "malaysia",
              };
              const locationStr = locationMap[l] || l;
              return p.location
                .toLowerCase()
                .includes(locationStr.toLowerCase());
            })
          );
        }

        // Filter by age (single value)
        if (field7) {
          const age = parseInt(field7);
          filtered = filtered.filter((p) => {
            const ageMatch = p.age.match(/(\d+)\s*-\s*(\d+)/);
            if (ageMatch) {
              const minAge = parseInt(ageMatch[1]);
              const maxAge = parseInt(ageMatch[2]);
              return age >= minAge && age <= maxAge;
            }
            return true;
          });
        }

        setFilteredPrograms(filtered);
      } else {
        setFilteredPrograms(programs);
      }
    };

    // Khởi tạo multiselect khi jQuery đã sẵn sàng
    const initMultiselect = () => {
      if (typeof jQuery !== "undefined" && jQuery.fn.multiselect) {
        jQuery(".multiselect[multiple]").multiselect({
          texts: {
            placeholder: "",
            selectedOptions: "",
          },
          selectAll: false,
          selectGroup: true,
        });
        // Apply filters sau khi multiselect đã khởi tạo
        applyFilters();
      } else {
        // Retry sau 100ms nếu jQuery chưa sẵn sàng
        window.setTimeout(() => {
          initMultiselect();
        }, 100);
      }
    };

    // Chờ DOM và jQuery sẵn sàng
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initMultiselect);
    } else {
      initMultiselect();
    }

    // Listen for hash changes
    window.addEventListener("hashchange", applyFilters);

    return () => {
      window.removeEventListener("hashchange", applyFilters);
    };
  }, []);

  const handleFilterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Update hidden fields with current multiselect values before processing
    if (typeof jQuery !== "undefined" && jQuery.fn.multiselect) {
      document
        .querySelectorAll(".multiselect")
        .forEach(function (selectElement) {
          const select = jQuery(selectElement);
          const hiddenFieldId = select.attr("data-hidden");
          const hiddenField = document.getElementById(
            hiddenFieldId
          ) as HTMLInputElement;
          const selectedValues = select.val(); // Get values from MultiSelect

          if (hiddenField) {
            hiddenField.value = selectedValues ? selectedValues.join(",") : "";
          }
        });
    }

    // Get values from hidden fields (which are updated by the multiselect)
    const field4Hidden = document.getElementById("field_4") as HTMLInputElement;
    const field5Hidden = document.getElementById("field_5") as HTMLInputElement;
    const field6Hidden = document.getElementById("field_6") as HTMLInputElement;
    const field7Select = document.getElementById(
      "field_7_select"
    ) as HTMLSelectElement;

    const field4 = field4Hidden?.value || "";
    const field5 = field5Hidden?.value || "";
    const field6 = field6Hidden?.value || "";
    const field7 = field7Select?.value || "";

    const params = new URLSearchParams();
    if (field4) params.set("field_4", field4);
    if (field5) params.set("field_5", field5);
    if (field6) params.set("field_6", field6);
    if (field7) params.set("field_7", field7);

    // Apply filter immediately
    let filtered = [...programs];

    // Filter by program (multiple values)
    if (field4) {
      const programValues = field4.split(",");
      const programMap: Record<string, string> = {
        adventure: "adventure-sports-creative",
        fishing: "fishing",
        "arts-crafts": "arts-crafts",
        englisch: "englischcamps",
        "englisch-toefl": "englisch-toefl",
        soccer: "soccer",
        husky: "husky-camp",
        climbing: "climbing",
        "top-rope": "climbing",
        horseback: "horseback-riding",
        diving: "diving",
        tennis: "tennis",
        icit: "icit",
        leadership: "leadership",
        "water-sports": "multi-water-adventure",
        dlrg: "lifeguarding",
        swimming: "swimming",
        sailing: "sailing",
        skating: "skating",
        space: "space-exploration",
        spanish: "spanishcourse",
        survival: "survival",
        dancing: "dancing",
        windsurf: "windsurfing",
        german: "german-camps",
        coding: "coding",
      };
      filtered = filtered.filter((p) =>
        programValues.some(
          (v) =>
            p.id === programMap[v] || p.slug === programMap[v] || p.slug === v
        )
      );
    }

    // Filter by season (multiple values)
    if (field5) {
      const seasonValues = field5.split(",");
      filtered = filtered.filter((p) =>
        seasonValues.some((s) => p.seasons.includes(s))
      );
    }

    // Filter by location (multiple values)
    if (field6) {
      const locationValues = field6.split(",");
      filtered = filtered.filter((p) =>
        locationValues.some((l) => {
          // Map location values to actual location strings
          const locationMap: Record<string, string> = {
            philippines: "philippines",
            vietnam: "vietnam",
            portugal: "portugal",
            china: "china",
            thailand: "thailand",
            malaysia: "malaysia",
          };
          const locationStr = locationMap[l] || l;
          return p.location.toLowerCase().includes(locationStr.toLowerCase());
        })
      );
    }

    // Filter by age (single value)
    if (field7) {
      const age = parseInt(field7);
      filtered = filtered.filter((p) => {
        const ageMatch = p.age.match(/(\d+)\s*-\s*(\d+)/);
        if (ageMatch) {
          const minAge = parseInt(ageMatch[1]);
          const maxAge = parseInt(ageMatch[2]);
          return age >= minAge && age <= maxAge;
        }
        return true;
      });
    }

    setFilteredPrograms(filtered);

    // Update URL without reload
    const queryString = params.toString();
    const newUrl = queryString ? `/#searchform?${queryString}` : `/#searchform`;
    window.history.pushState({}, "", newUrl);

    // Scroll to searchform
    const searchForm = document.getElementById("searchform");
    if (searchForm) {
      searchForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main id="tm-main">
      {/* Hero Section */}
      <HeroSection
        title={<>Discover Adventure and Friendship</>}
        subtitle="Immerse yourself in a realm filled with excitement, discovery, and memorable experiences. Venture into nature, engage in thrilling activities, and forge lasting memories that you will cherish forever."
        backgroundImage="yootheme/banner/b3.jpg"
        overlayColor="rgba(0, 0, 0, 0)"
        sectionClass="uk-section-secondary uk-section-overlap uk-preserve-color uk-light"
        titleClass="uk-heading-large uk-text-center !text-[8vw] md:!text-[5vw] max-sm:leading-tight"
        enableScrollspy={true}
        backgroundPosition="top-center"
        buttonContent={
          <Link href="/booking">
              <button
                className="ripple-button mt-6 max-sm:mt-4 hero-button max-sm:text-[3.8vw] max-sm:px-[5vw] max-sm:py-[2.5vw]"
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setCoords({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                  });
                  setHovered(true);
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setCoords({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                  });
                }}
                onMouseLeave={() => setHovered(false)}
              >
                <span className={`button-text ${hovered ? "hovered" : ""} max-sm:gap-[1.5vw]`}>
                  Book Your Smile
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="currentColor"
                    className="button-icon max-sm:w-[4.5vw] max-sm:h-[4.5vw]"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.1103 5.37457C13.5933 6.89163 10.771 6.83466 9.19008 5.25375L8.5419 4.60556L7.29739 5.85007L7.94557 6.49825C9.09544 7.64813 10.6581 8.24259 12.21 8.2749L4.53199 15.9529L5.82836 17.2493L13.5063 9.57126C13.5387 11.1231 14.1331 12.6858 15.283 13.8357L15.9312 14.4839L17.1757 13.2393L16.5275 12.5912C14.9466 11.0103 14.8896 8.18799 16.4067 6.67094L17.0289 6.04868L15.7326 4.75232L15.1103 5.37457Z"
                    />
                  </svg>
                </span>

                <span
                  className={`ripple-circle ${
                    hovered ? "ripple-in" : "ripple-out"
                  }`}
                  style={{ left: coords.x, top: coords.y }}
                ></span>
            </button>
          </Link>
        }
      >
        {/* Contact Box */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-3 2xl:gap-6 px-4 md:px-6 2xl:px-16 py-4 md:py-4 2xl:py-5 rounded-xl text-white shadow-md backdrop-blur-sm contact-box w-full" style={{ backgroundColor: 'rgba(128, 128, 128, 0.3)' }}>
            <div className="flex items-start gap-2 2xl:gap-3 max-sm:hidden">
              <div className="p-2 rounded-full"></div>
              <div className="!text-[1.7vw] 2xl:!text-[1.8vw] text-white font-semibold leading-snug !text-left">
                <div>Your Adventure Journey</div>
                <div>Start Here!</div>
              </div>
            </div>
            <div className="w-px h-6 2xl:h-8 bg-white/30 max-sm:hidden"></div>

            {/* Call */}
            <a href="tel:+123456789" className="group flex items-center gap-2 md:gap-2 2xl:gap-3 w-full md:w-auto">
              <div className="p-2 md:p-3 rounded-full transition-colors duration-300 group-hover:bg-[#9c5d00]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="text-white md:w-6 md:h-6"
                >
                  <path d="M8.8457 5.93115C8.84567 5.64689 8.73343 5.37413 8.53418 5.17139L5.28808 1.92432L5.208 1.85303C5.01329 1.69665 4.76943 1.61084 4.51757 1.61084C4.23001 1.61094 3.95373 1.72334 3.74804 1.92432L3.00586 2.68408L2.99609 2.69385C2.22454 3.45523 1.73864 4.45915 1.62011 5.53662C1.50186 6.61196 1.75664 7.69523 2.34179 8.60498C5.83558 13.7515 10.2803 18.1831 15.4365 21.6626C16.3449 22.2448 17.4253 22.4983 18.498 22.3804C19.5755 22.2619 20.5794 21.7759 21.3408 21.0044L21.3506 20.9946L22.1113 20.2495C22.3112 20.044 22.4238 19.7696 22.4238 19.4829C22.4238 19.1951 22.3115 18.9182 22.1103 18.7124L18.8447 15.4819C18.6423 15.284 18.3701 15.1725 18.0869 15.1724C17.8026 15.1724 17.5289 15.2837 17.3262 15.4829L16.8008 14.9487L17.3252 15.4849C16.8392 15.96 16.1865 16.226 15.5068 16.2261C14.8271 16.2261 14.1736 15.9601 13.6875 15.4849L8.53906 10.3354C8.29886 10.0975 8.1071 9.81434 7.97656 9.50244C7.84519 9.18854 7.77734 8.85152 7.77734 8.51123C7.77734 8.17096 7.84519 7.83391 7.97656 7.52002C8.10639 7.20982 8.29582 6.92801 8.53418 6.69092C8.73343 6.48815 8.8457 6.21544 8.8457 5.93115Z" />
                </svg>
              </div>
              <div className="flex flex-col gap-y-0.5 2xl:gap-y-1 items-start">
                <h3 className="!text-white !font-semibold !text-[4vw] md:!text-[1.7vw] 2xl:!text-[1.8vw] !mb-0 !mt-0">
                  Call us
                </h3>
                <span className="!text-[3.5vw] md:!text-[1vw] 2xl:!text-[1.2vw] text-white font-semibold">
                  +(123) 456 789
                </span>
              </div>
            </a>
            <div className="w-full md:w-px h-px md:h-6 2xl:h-8 bg-white/30"></div>

            {/* Email */}
            <a
              href="mailto:office@ggcamp.org"
              className="group flex items-center gap-2 md:gap-2 2xl:gap-3 w-full md:w-auto"
            >
              <div className="p-2 md:p-3 rounded-full transition-colors duration-300 group-hover:bg-[#9c5d00]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="text-white md:w-6 md:h-6"
                >
                  <path d="M20 4H4C2.897 4 2 4.897 2 6v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 5.333-8-5.333V6h16zm0 12H4V8.489l8 5.333 8-5.333V18z" />
                </svg>
              </div>
              <div className="flex flex-col gap-y-0.5 2xl:gap-y-1 items-start">
                <h3 className="!text-white !font-semibold !text-[4vw] md:!text-[1.7vw] 2xl:!text-[1.8vw] !mb-0 !mt-0">
                  Email
                </h3>
                <span className="!text-[3.5vw] md:!text-[1vw] 2xl:!text-[1.2vw] text-white font-semibold">
                  office@ggcamp.org
                </span>
              </div>
            </a>
            <div className="w-full md:w-px h-px md:h-6 2xl:h-8 bg-white/30"></div>

            {/* Working Hours */}
            <a href="#" className="group flex items-center gap-2 md:gap-2 2xl:gap-3 w-full md:w-auto">
              <div className="p-2 md:p-3 rounded-full transition-colors duration-300 group-hover:bg-[#9c5d00]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="text-white md:w-6 md:h-6"
                >
                  <path d="M12 1.75C6.072 1.75 1.25 6.572 1.25 12.5S6.072 23.25 12 23.25 22.75 18.428 22.75 12.5 17.928 1.75 12 1.75zm0 20c-4.69 0-8.5-3.81-8.5-8.5s3.81-8.5 8.5-8.5 8.5 3.81 8.5 8.5-3.81 8.5-8.5 8.5z" />
                  <path d="M12.75 7h-1.5v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
                </svg>
              </div>
              <div className="flex flex-col gap-y-0.5 2xl:gap-y-1 items-start">
                <h3 className="!text-white !font-semibold !text-[4vw] md:!text-[1.7vw] 2xl:!text-[1.8vw] !mb-0 !mt-0">
                  Working Hours
                </h3>
                <span className="!text-[3.5vw] md:!text-[1vw] 2xl:!text-[1.2vw] text-white font-semibold">
                  Mon-Sat 08:pm - 05:am
                </span>
              </div>
            </a>
        </div>
      </HeroSection>


      {/*About Us*/}
      <AboutSection />

      {/* Programs Section */}
      <div className="uk-section-default uk-section uk-section-small">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1">
              <h2 className="uk-h2 uk-text-center@m uk-text-center">
                <p className="!text-[5vw] !font-bold">Activities</p>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="uk-section-default uk-section uk-padding-remove-top">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1">
              <div id="page#2" className="uk-margin">
                <div
                  className="uk-grid uk-child-width-1-1 uk-child-width-1-3@m uk-grid-match"
                  uk-grid=""
                >
                  {filteredPrograms.slice(0, 6).map((program) => (
                    <ProgramCard key={program.id} {...program} />
                  ))}
                </div>
                {/* See More Button */}
                <div className="uk-text-center uk-margin-large">
                  <Link href="/activities">
                    <button
                      className="about-button inline-flex items-center ripple-button mt-6 transition-all duration-700 opacity-100 translate-y-0"
                      onMouseEnter={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        setSeeMoreCoords({
                          x: e.clientX - rect.left,
                          y: e.clientY - rect.top,
                        });
                        setSeeMoreHovered(true);
                      }}
                      onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        setSeeMoreCoords({
                          x: e.clientX - rect.left,
                          y: e.clientY - rect.top,
                        });
                      }}
                      onMouseLeave={() => setSeeMoreHovered(false)}
                    >
                      <span
                        className={`button-text ${
                          seeMoreHovered ? "hovered" : ""
                        }`}
                      >
                        See More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="currentColor"
                          className="button-icon"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.1103 5.37457C13.5933 6.89163 10.771 6.83466 9.19008 5.25375L8.5419 4.60556L7.29739 5.85007L7.94557 6.49825C9.09544 7.64813 10.6581 8.24259 12.21 8.2749L4.53199 15.9529L5.82836 17.2493L13.5063 9.57126C13.5387 11.1231 14.1331 12.6858 15.283 13.8357L15.9312 14.4839L17.1757 13.2393L16.5275 12.5912C14.9466 11.0103 14.8896 8.18799 16.4067 6.67094L17.0289 6.04868L15.7326 4.75232L15.1103 5.37457Z"
                          />
                        </svg>
                      </span>
                      <span
                        className={`ripple-circle ${
                          seeMoreHovered ? "ripple-in" : "ripple-out"
                        }`}
                        style={{ left: seeMoreCoords.x, top: seeMoreCoords.y }}
                      ></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="uk-background-norepeat uk-background-center-center"
        style={{
          backgroundImage: `url(${getTemplateImageUrl(
            "yootheme/banner/b8.jpg"
          )})`,
          minHeight: "800px",
          width: "100%",
          backgroundSize: "contain",
          height: "300px",
          backgroundPosition: "left center",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          <div
            className="uk-text-center"
            style={{
              position: "absolute",
              top: "50%",
              right: "0",
              transform: "translateY(-50%)",
              backgroundColor: "#f9f9f7",
              padding: "3vw 4vw",
              borderRadius: "0",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
              zIndex: 10,
              border: "2px solid #f0f0f0",
              height: "80%",
              width: "70%",
              marginRight: "1.5vw",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100px",
              }}
            >
              <div style={{ paddingLeft: "10px" }}>
                <h2
                  style={{
                    textAlign: "left",
                    fontFamily: "Arial, sans-serif",
                    fontSize: "1.5vw",
                    fontWeight: "600",
                    marginBottom: "30px",
                    whiteSpace: "nowrap",
                    letterSpacing: "0px",
                  }}
                >
                  02&nbsp;&nbsp;&nbsp;&nbsp;——&nbsp;&nbsp;&nbsp;&nbsp;Who&nbsp;We&nbsp;Are
                </h2>

                <h1
                  style={{
                    textAlign: "left",
                    fontFamily: "'Prompt', sans-serif",
                    fontSize: "3vw",
                    fontWeight: "600",
                    whiteSpace: "nowrap",
                    letterSpacing: "0px",
                    lineHeight: "0.9",
                  }}
                >
                  Company Mission & Vision
                </h1>
              </div>

              {/* 3 div hình vuông nằm ngang */}
              {/* 3 div hình vuông nằm ngang */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "1vw",
                  marginTop: "2vw",
                }}
              >
                {/* Mission Box */}
                <div
                  style={{
                    flex: "1",
                    minHeight: "10vw",
                    backgroundColor: "#f9f9f7",
                    padding: "1vw",
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "left",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    borderRadius: "0.5vw",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#ffffff";
                    e.currentTarget.style.boxShadow = "0 0 1vw rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#f9f9f7";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Mission Icon - Target/Compass */}
                  <div
                    style={{
                      width: "3vw",
                      height: "3vw",
                      backgroundColor: "#9c5d00",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75vw",
                      borderRadius: "0.6vw",
                      boxShadow: "0 0.2vw 0.4vw rgba(156, 93, 0, 0.2)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.4vw"
                      height="1.4vw"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                      <line x1="12" y1="2" x2="12" y2="6" />
                      <line x1="12" y1="18" x2="12" y2="22" />
                      <line x1="2" y1="12" x2="6" y2="12" />
                      <line x1="18" y1="12" x2="22" y2="12" />
                    </svg>
                  </div>
                  <h3
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: "1.5vw",
                      fontWeight: "700",
                      marginBottom: "0.75vw",
                      color: "#333",
                    }}
                  >
                    Our Mission
                  </h3>
                  <p
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: "1vw",
                      fontWeight: "400",
                      color: "#666",
                      lineHeight: "1.5",
                      flex: "1",
                    }}
                  >
                    We provide a safe, inclusive, and inspiring environment
                    where children and teens can explore, learn, and grow
                    through adventure, creativity, and friendship.
                  </p>
                  <div
                    style={{
                      width: "4.25vw",
                      height: "0.15vw",
                      margin: "0px",
                      backgroundColor: "#9c5d00",
                    }}
                  ></div>
                </div>

                {/* Vision Box */}
                <div
                  style={{
                    flex: "1",
                    minHeight: "10vw",
                    backgroundColor: "#f9f9f7",
                    padding: "1vw",
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "left",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    borderRadius: "0.5vw",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#ffffff";
                    e.currentTarget.style.boxShadow = "0 0 1vw rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#f9f9f7";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Vision Icon - Eye */}
                  <div
                    style={{
                      width: "3vw",
                      height: "3vw",
                      backgroundColor: "#9c5d00",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75vw",
                      borderRadius: "0.6vw",
                      boxShadow: "0 0.2vw 0.4vw rgba(156, 93, 0, 0.2)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.4vw"
                      height="1.4vw"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <h3
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: "1.5vw",
                      fontWeight: "700",
                      marginBottom: "0.75vw",
                      color: "#333",
                    }}
                  >
                    Our Vision
                  </h3>
                  <p
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: "1vw",
                      fontWeight: "400",
                      color: "#666",
                      lineHeight: "1.5",
                      flex: "1",
                    }}
                  >
                    We aim to be a leading international camp experience that
                    nurtures onfident, responsible, and compassionate young
                    individuals connected to nature and their communities.
                  </p>
                  <div
                    style={{
                      width: "4.25vw",
                      height: "0.15vw",
                      margin: "0px",
                      backgroundColor: "#9c5d00",
                    }}
                  ></div>
                </div>

                {/* Goals Box */}
                <div
                  style={{
                    flex: "1",
                    minHeight: "10vw",
                    backgroundColor: "#f9f9f7",
                    padding: "1vw",
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "left",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    borderRadius: "0.5vw",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#ffffff";
                    e.currentTarget.style.boxShadow = "0 0 1vw rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#f9f9f7";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Goals Icon - Trophy/Flag */}
                  <div
                    style={{
                      width: "3vw",
                      height: "3vw",
                      backgroundColor: "#9c5d00",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.75vw",
                      borderRadius: "0.6vw",
                      boxShadow: "0 0.2vw 0.4vw rgba(156, 93, 0, 0.2)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.4vw"
                      height="1.4vw"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                      <path d="M4 22h16" />
                      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                    </svg>
                  </div>
                  <h3
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: "1.5vw",
                      fontWeight: "700",
                      marginBottom: "0.75vw",
                      color: "#333",
                    }}
                  >
                    Company Goals
                  </h3>
                  <p
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: "1vw",
                      fontWeight: "400",
                      color: "#666",
                      lineHeight: "1.5",
                      flex: "1",
                    }}
                  >
                    Through hands-on activities, community service, and outdoor
                    adventures, we help campers build independence, teamwork,
                    and lifelong memories.
                  </p>
                  <div
                    style={{
                      width: "4.25vw",
                      height: "0.15vw",
                      margin: "0px",
                      backgroundColor: "#9c5d00",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhyChooseUs />
      <ActivityShowcase />
      <FAQSection />
      <PartnersSection />
      <Newsletter />
      <BlogHeroSection />
      <LatestPostsSection />
    </main>
  );
}
