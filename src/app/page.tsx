"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { getTemplateImageUrl } from "@/lib/assets";
import { programs } from "@/data/programs";
import { ProgramCard } from "@/components/features/ProgramCard";
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

      {/* Why Choose Us Section */}
      <div className="relative bg-gradient-to-b from-gray-50 to-gray-100 py-24 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/templates/yootheme/post/anhnui.png"
          fill
          alt="Background"
          className="absolute z-0 object-cover opacity-80"
          priority
        />

        {/* Nền núi mờ nhẹ (tùy chọn) */}
        <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-gray-300/20 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* === CỘT TRÁI: WHY CHOOSE US + TIÊU ĐỀ (gần nhau hơn) === */}
            <div className="space-y-0">
              <p className="inline-flex items-center gap-2 text-[#cbca7b] !font-bold tracking-widest uppercase text-sm mb-0 leading-none">
                <img
                  src="https://demo.awaikenthemes.com/wildex/wp-content/themes/wildex/assets/images/icon-sub-heading.svg"
                  alt="icon"
                  className="w-4 h-4 object-contain"
                />
                Why Choose Us
              </p>

              <h2 className="!mt-0 !pt-0 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl !font-bold text-gray-900 leading-tight">
                Creating unforgettable camp experiences
                <br className="hidden lg:block" />
                with safety, fun, and friendship.
              </h2>
            </div>

            {/* === CỘT PHẢI: MÔ TẢ + NÚT LEARN MORE === */}
            <div className="flex flex-col items-start">
              <p className="text-gray-600 text-sm leading-relaxed mb-10 max-w-lg">
                Go and Grow Camp has organized international summer camps and
                educational outdoor trips across multiple countries. We are
                committed to providing a safe, inclusive, and inspiring
                environment—no violence, drugs, alcohol, or cigarettes are
                permitted for any participant.
              </p>

              <button className="relative overflow-hidden group inline-flex items-center gap-4 bg-[#cbca7b] text-black font-bold px-3 py-2 rounded shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 before:absolute before:inset-0 before:bg-[#b8b76a] before:translate-y-full hover:before:translate-y-0 before:transition-transform before:duration-500">
                <span className="relative z-10">Learn More</span>
                <svg
                  className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* 4 Feature Cards - Grid 4 cột trên desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {/* Card 1 */}
            <div className="relative overflow-hidden bg-white rounded-3xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 group before:absolute before:inset-0 before:bg-gradient-to-t before:from-[#cbca7b] before:to-transparent before:translate-y-full hover:before:translate-y-0 before:transition-transform before:duration-500 before:rounded-3xl">
              <div className="relative z-10 w-16 h-16 bg-[#cbca7b] rounded-full mx-auto mb-3 flex items-center justify-center text-3xl font-bold text-black shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 25"
                  fill="currentColor"
                >
                  <path d="M22.2861 12.6035C22.286 6.86382 17.6324 2.21094 11.8926 2.21094C6.15301 2.21107 1.50016 6.8639 1.5 12.6035C1.5 18.3432 6.15291 22.9969 11.8926 22.9971C17.6325 22.9971 22.2861 18.3433 22.2861 12.6035ZM23.7861 12.6035C23.7861 19.1717 18.4609 24.4971 11.8926 24.4971C5.32448 24.4969 0 19.1716 0 12.6035C0.000155651 6.03548 5.32458 0.711074 11.8926 0.710938C18.4608 0.710938 23.786 6.03539 23.7861 12.6035Z" />
                  <path d="M23.0361 11.8535C23.4502 11.8537 23.7861 12.1894 23.7861 12.6035C23.7861 13.0176 23.4502 13.3533 23.0361 13.3535H0.75C0.335786 13.3535 0 13.0177 0 12.6035C0 12.1893 0.335786 11.8535 0.75 11.8535H23.0361Z" />
                  <path d="M11.8916 0.710938C12.117 0.711049 12.3303 0.812566 12.4727 0.987305C15.1473 4.27643 16.7071 8.33169 16.9258 12.5654C16.9271 12.5911 16.9271 12.6169 16.9258 12.6426C16.7071 16.8762 15.1473 20.9307 12.4727 24.2197C12.3303 24.3947 12.1171 24.497 11.8916 24.4971C11.6659 24.4971 11.452 24.3948 11.3096 24.2197C8.63485 20.9307 7.07519 16.8762 6.85646 12.6426C6.85513 12.6169 6.85514 12.5911 6.85646 12.5654C7.07518 8.33169 8.63484 4.27643 11.3096 0.987305L11.3662 0.925781C11.5056 0.788999 11.6941 0.710936 11.8916 0.710938ZM11.8906 2.69336C9.78175 5.57983 8.54913 9.0208 8.35646 12.6035C8.54902 16.1863 9.7818 19.6272 11.8906 22.5137C13.9997 19.6271 15.2322 16.1865 15.4248 12.6035C15.2321 9.02059 13.9997 5.57993 11.8906 2.69336Z" />
                </svg>
              </div>
              <h3 className="relative z-10 !font-bold text-gray-900 !text-xl mb-2 text-center">
                Inclusive & Welcoming
              </h3>
              <p className="relative z-10 text-gray-600 !text-lg leading-relaxed text-center mb-3">
                Every child, teen, and staff member, regardless of country or
                culture, feels comfortable and valued, creating a unique and
                unforgettable camp experience.
              </p>
            </div>

            {/* Card 2 */}
            <div className="relative overflow-hidden bg-white rounded-3xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 group before:absolute before:inset-0 before:bg-gradient-to-t before:from-[#cbca7b] before:to-transparent before:translate-y-full hover:before:translate-y-0 before:transition-transform before:duration-500 before:rounded-3xl">
              <div className="relative z-10 w-16 h-16 bg-[#cbca7b] rounded-full mx-auto mb-3 flex items-center justify-center text-3xl font-bold text-black shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 23 24"
                  fill="currentColor"
                >
                  <path d="M11.3066 0.0585938C11.449 0.0743692 11.5874 0.112869 11.7188 0.169922L11.7197 0.168945L21.3193 4.06055L21.3232 4.06152C21.5973 4.17416 21.8277 4.3661 21.9922 4.60547H21.9912C22.2058 4.89807 22.312 5.25423 22.2998 5.6123V18.1016C22.296 18.411 22.2065 18.7171 22.0361 18.9795C21.887 19.209 21.6798 19.3988 21.4326 19.5244L21.3242 19.5742L11.7236 23.5352C11.6332 23.5724 11.5363 23.5917 11.4385 23.5918H10.8623C10.7643 23.5918 10.6668 23.5725 10.5762 23.5352L0.975586 19.5742C0.680359 19.4522 0.435104 19.2419 0.264648 18.9795H0.263672C0.093556 18.7173 0.00374566 18.4113 0 18.1016V5.53613L0.00683594 5.40625C0.0342294 5.10569 0.144867 4.81501 0.332031 4.57227L0.380859 4.51465C0.544391 4.34158 0.748265 4.21115 0.975586 4.13184V4.13086L10.5762 0.170898V0.171875C10.7567 0.0926337 10.9518 0.0498047 11.1504 0.0498047L11.3066 0.0585938ZM11.1484 1.55762L1.54785 5.51758C1.53328 5.52359 1.51785 5.52715 1.50293 5.53223C1.50182 5.53865 1.50008 5.54539 1.5 5.55273V18.084L1.50684 18.1279C1.51085 18.1414 1.51625 18.1535 1.52246 18.1631C1.53438 18.1813 1.54598 18.1873 1.54883 18.1885H1.54785L11.0107 22.0918H11.29L20.752 18.1885L20.7773 18.1631C20.7894 18.1444 20.7993 18.1167 20.7998 18.084V5.6123C20.7998 5.59666 20.8008 5.58104 20.8018 5.56543C20.8039 5.53146 20.7929 5.50411 20.7822 5.49023C20.7733 5.47875 20.7641 5.46706 20.7559 5.45508C20.75 5.44655 20.7473 5.4469 20.7529 5.44922L11.1562 1.55957C11.154 1.55865 11.1517 1.55758 11.1494 1.55664L11.1484 1.55762Z" />
                  <path d="M10.4004 22.9609V9.31543C10.4004 8.90122 10.7362 8.56543 11.1504 8.56543C11.5646 8.56543 11.9004 8.90122 11.9004 9.31543V22.9609C11.9004 23.3752 11.5646 23.7109 11.1504 23.7109C10.7362 23.7109 10.4004 23.3752 10.4004 22.9609Z" />
                  <path d="M21.0881 4.4055C21.471 4.24761 21.9097 4.42986 22.0676 4.81272C22.2255 5.19553 22.0431 5.63416 21.6604 5.79221L11.4358 10.009C11.2527 10.0845 11.0476 10.0844 10.8645 10.009L0.63987 5.79221C0.257033 5.63423 0.0747161 5.1956 0.232644 4.81272C0.39063 4.42988 0.829257 4.24757 1.21214 4.4055L11.1496 8.50413L21.0881 4.4055Z" />
                </svg>
              </div>
              <h3 className="relative z-10 !font-bold text-gray-900 !text-xl mb-2 text-center">
                Adventure-Ready Experiences
              </h3>
              <p className="relative z-10 text-gray-600 !text-lg leading-relaxed text-center mb-3">
                From team challenges to outdoor exploration, creative workshops,
                and water sports, we offer a wide range of activities that build
                confidence, teamwork, and independence.
              </p>
            </div>

            {/* Card 3 */}
            <div className="relative overflow-hidden bg-white rounded-3xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 group before:absolute before:inset-0 before:bg-gradient-to-t before:from-[#cbca7b] before:to-transparent before:translate-y-full hover:before:translate-y-0 before:transition-transform before:duration-500 before:rounded-3xl">
              <div className="relative z-10 w-16 h-16 bg-[#cbca7b] rounded-full mx-auto mb-3 flex items-center justify-center text-3xl font-bold text-black shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 25"
                  fill="currentColor"
                >
                  <path d="M22.2861 5.5332C22.2861 5.22549 22.1262 4.84816 21.6553 4.41992C21.1841 3.99146 20.4607 3.57054 19.5029 3.20215C17.5923 2.46729 14.9016 1.99707 11.8926 1.99707C8.88384 1.9971 6.19376 2.46738 4.2832 3.20215C3.32539 3.57054 2.60107 3.99145 2.12988 4.41992C1.65923 4.84804 1.5 5.22556 1.5 5.5332C1.50014 5.84085 1.65912 6.21841 2.12988 6.64648C2.60107 7.07495 3.32539 7.49489 4.2832 7.86328C6.19376 8.59806 8.88382 9.06833 11.8926 9.06836C14.9016 9.06836 17.5923 8.59814 19.5029 7.86328C20.4605 7.49498 21.1841 7.07484 21.6553 6.64648C22.126 6.21841 22.286 5.84085 22.2861 5.5332ZM23.7861 5.5332C23.786 6.40867 23.3216 7.15879 22.665 7.75586C22.0085 8.35286 21.0997 8.8565 20.041 9.26367C17.9188 10.0798 15.0374 10.5684 11.8926 10.5684C8.74769 10.5683 5.86637 10.0799 3.74414 9.26367C2.68555 8.85651 1.7776 8.35284 1.12109 7.75586C0.464455 7.15876 0.00014729 6.40876 0 5.5332C0 4.65746 0.46435 3.90677 1.12109 3.30957C1.77754 2.71267 2.6857 2.20986 3.74414 1.80273C5.86637 0.986491 8.74769 0.497097 11.8926 0.49707C15.0376 0.49707 17.9187 0.986494 20.041 1.80273C21.0997 2.20991 22.0085 2.71257 22.665 3.30957C23.3217 3.90675 23.7861 4.65753 23.7861 5.5332Z" />
                  <path d="M0 19.2471V5.5332C0 5.11899 0.335786 4.7832 0.75 4.7832C1.16421 4.7832 1.5 5.11899 1.5 5.5332V19.2471C1.5 19.5544 1.65896 19.9321 2.12988 20.3604C2.60108 20.7888 3.3254 21.2087 4.2832 21.5771C6.19375 22.3121 8.88369 22.7832 11.8926 22.7832C14.9017 22.7832 17.5923 22.3122 19.5029 21.5771C20.4605 21.2087 21.1841 20.7887 21.6553 20.3604C22.1263 19.9321 22.2861 19.5544 22.2861 19.2471V5.5332C22.2861 5.11899 22.6219 4.7832 23.0361 4.7832C23.4502 4.78342 23.7861 5.11912 23.7861 5.5332V19.2471C23.7861 20.1224 23.3215 20.8727 22.665 21.4697C22.0086 22.0666 21.0996 22.5703 20.041 22.9775C17.9188 23.7939 15.0376 24.2832 11.8926 24.2832C8.7475 24.2832 5.86633 23.7939 3.74414 22.9775C2.68557 22.5703 1.77755 22.0666 1.12109 21.4697C0.464533 20.8727 0 20.1225 0 19.2471Z" />
                  <path d="M0 12.3896C0 11.9754 0.335786 11.6396 0.75 11.6396C1.16421 11.6396 1.5 11.9754 1.5 12.3896C1.5 12.6969 1.65916 13.0738 2.12988 13.502C2.60108 13.9304 3.3254 14.3513 4.2832 14.7197C6.19374 15.4546 8.88377 15.9258 11.8926 15.9258C14.9017 15.9258 17.5923 15.4547 19.5029 14.7197C20.4607 14.3513 21.1841 13.9304 21.6553 13.502C22.1262 13.0737 22.2861 12.697 22.2861 12.3896C22.2861 11.9754 22.6219 11.6396 23.0361 11.6396C23.4502 11.6399 23.7861 11.9756 23.7861 12.3896C23.7861 13.2651 23.3216 14.0153 22.665 14.6123C22.0086 15.2092 21.0996 15.7119 20.041 16.1191C17.9188 16.9355 15.0377 17.4258 11.8926 17.4258C8.7475 17.4258 5.86633 16.9355 3.74414 16.1191C2.68567 15.7119 1.77751 15.2091 1.12109 14.6123C0.464442 14.0152 0 13.2652 0 12.3896Z" />
                </svg>
              </div>
              <h3 className="relative z-10 !font-bold text-gray-900 !text-xl mb-2 text-center">
                Personal Growth & Friendship
              </h3>
              <p className="relative z-10 text-gray-600 !text-lg leading-relaxed text-center mb-3">
                Campers develop life skills, make lifelong friends, and return
                home more confident, motivated, and inspired.
              </p>
            </div>

            {/* Card 4 */}
            <div className="relative overflow-hidden bg-white rounded-3xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 group before:absolute before:inset-0 before:bg-gradient-to-t before:from-[#cbca7b] before:to-transparent before:translate-y-full hover:before:translate-y-0 before:transition-transform before:duration-500 before:rounded-3xl">
              <div className="relative z-10 w-16 h-16 bg-[#cbca7b] rounded-full mx-auto mb-3 flex items-center justify-center text-3xl font-bold text-black shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 23 25"
                  fill="currentColor"
                >
                  <path d="M10.4004 19.1357V17.4043C10.4004 16.9901 10.7362 16.6543 11.1504 16.6543C11.5646 16.6543 11.9004 16.9901 11.9004 17.4043V19.1357C11.9004 19.55 11.5646 19.8857 11.1504 19.8857C10.7362 19.8857 10.4004 19.55 10.4004 19.1357Z" />
                  <path d="M10.4004 10.4277V8.81641C10.4004 8.40219 10.7362 8.06641 11.1504 8.06641C11.5646 8.06641 11.9004 8.40219 11.9004 8.81641V10.4277C11.9004 10.8419 11.5646 11.1777 11.1504 11.1777C10.7362 11.1777 10.4004 10.8419 10.4004 10.4277Z" />
                  <path d="M20.5713 16.4961C20.5713 14.0587 19.9653 12.0715 18.7803 10.3926C17.5879 8.70348 15.7722 7.2748 13.2715 6.02441C13.0707 5.92399 12.9258 5.73844 12.876 5.51953C12.8262 5.30063 12.8771 5.07092 13.0146 4.89355L14.9971 2.33789C15.0239 2.28586 15.0411 2.22895 15.042 2.16992C15.0424 2.13653 15.0384 2.10335 15.0303 2.07129L14.9932 1.97852C14.9602 1.9197 14.9123 1.87014 14.8545 1.83594C14.8256 1.81888 14.7947 1.80579 14.7627 1.79688L14.6631 1.7832H7.4082L7.30859 1.79688C7.27659 1.8058 7.24564 1.81888 7.2168 1.83594C7.15891 1.8702 7.11097 1.91987 7.07812 1.97852C7.04539 2.03711 7.02827 2.10377 7.0293 2.1709C7.03028 2.23015 7.04698 2.28748 7.07422 2.33984L9.05859 4.91211C9.19524 5.08932 9.24497 5.31891 9.19531 5.53711C9.14559 5.75506 9.00139 5.93944 8.80176 6.04004C6.30032 7.29909 4.48469 8.73321 3.29199 10.4248C2.10664 12.106 1.50001 14.093 1.5 16.5303C1.5 18.6036 2.42323 20.0745 4.03516 21.0645C5.69116 22.0814 8.10599 22.6035 11.0361 22.6035C13.9662 22.6035 16.3798 22.0811 18.0352 21.0605C19.646 20.0674 20.5713 18.5887 20.5713 16.4961ZM22.0713 16.4961C22.0713 19.1346 20.854 21.0843 18.8223 22.3369C16.835 23.562 14.1057 24.1035 11.0361 24.1035C7.96631 24.1035 5.23685 23.563 3.25 22.3428C1.21911 21.0955 0 19.154 0 16.5303C1.08583e-05 13.8248 0.679497 11.5264 2.06543 9.56055C3.30138 7.80756 5.07033 6.36074 7.32617 5.12207L5.84766 3.20508C5.83005 3.18224 5.81369 3.1585 5.79883 3.13379C5.62792 2.84948 5.53538 2.525 5.53027 2.19336C5.52521 1.86175 5.60749 1.53449 5.76953 1.24512C5.93161 0.955747 6.16774 0.714824 6.45312 0.545898C6.73842 0.37704 7.06303 0.286132 7.39453 0.283203H14.6768L14.8008 0.288086C15.089 0.309664 15.3685 0.398206 15.6182 0.545898C15.9037 0.714893 16.1397 0.955897 16.3018 1.24512C16.4637 1.53448 16.547 1.86193 16.542 2.19336H16.541C16.5359 2.52482 16.4435 2.84935 16.2725 3.13379C16.2572 3.15911 16.2408 3.18368 16.2227 3.20703L14.749 5.10449C17.0029 6.33572 18.7706 7.77831 20.0059 9.52832C21.392 11.4922 22.0713 13.7909 22.0713 16.4961Z" />
                  <path d="M11.1747 9.76454C11.594 9.74324 12.0132 9.81161 12.4032 9.96766C12.8023 10.1274 13.1613 10.3733 13.454 10.6884C13.7359 10.9918 13.7184 11.467 13.4149 11.7489C13.1115 12.0305 12.6372 12.013 12.3554 11.7099C12.2136 11.5572 12.0392 11.4377 11.8456 11.3602C11.6522 11.2829 11.4442 11.2489 11.2362 11.2616C11.2018 11.2637 11.1671 11.2633 11.1327 11.2606C10.8694 11.2404 10.6084 11.3118 10.3925 11.4599L10.3026 11.5282C10.091 11.706 9.95147 11.9533 9.90712 12.2245C9.95383 12.4962 10.0952 12.7434 10.3075 12.9218C10.5392 13.1165 10.8374 13.2138 11.1395 13.1932C11.8289 13.1463 12.51 13.3688 13.039 13.8134C13.5678 14.2579 13.904 14.8908 13.9765 15.578C13.9819 15.6301 13.9819 15.6831 13.9765 15.7352C13.9039 16.4223 13.5677 17.0545 13.039 17.4989C12.526 17.93 11.87 18.1498 11.202 18.12C10.8245 18.1332 10.4487 18.0722 10.0956 17.9403L9.94325 17.8788C9.54117 17.7019 9.18508 17.4352 8.90224 17.0995C8.63541 16.7827 8.67631 16.3097 8.99306 16.0429C9.3098 15.7761 9.78282 15.816 10.0497 16.1327C10.1852 16.2935 10.3556 16.4212 10.5477 16.5057C10.74 16.5904 10.949 16.6297 11.1591 16.621C11.1864 16.6198 11.2138 16.6201 11.2411 16.622C11.5431 16.6426 11.8414 16.5452 12.0731 16.3505C12.2846 16.1728 12.4243 15.9265 12.4716 15.6561C12.4243 15.3858 12.2846 15.1395 12.0731 14.9618C11.8414 14.7671 11.5431 14.6697 11.2411 14.6903C10.5518 14.7373 9.87071 14.5148 9.34169 14.0702C8.81293 13.6257 8.47669 12.9935 8.40419 12.3065C8.39891 12.2564 8.39935 12.2053 8.40419 12.1552C8.47105 11.464 8.806 10.8266 9.33778 10.3798C9.85082 9.94866 10.507 9.73164 11.1747 9.76454Z" />
                </svg>
              </div>
              <h3 className="relative z-10 !font-bold text-gray-900 !text-xl mb-2 text-center">
                Safe & Responsible Environment
              </h3>
              <p className="relative z-10 text-gray-600 !text-lg leading-relaxed text-center mb-3">
                Our trained staff ensure every camper enjoys a secure,
                supportive, and funfilled experience.
              </p>
            </div>
          </div>

          {/* Tags + CTA cuối trang */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <span className="px-6 py-3 bg-white rounded-full shadow-sm flex items-center gap-2 text-gray-700 font-medium text-sm">
                <span className="w-2 h-2 bg-[#cbca7b] rounded-full"></span>
                Nature-Friendly
              </span>
              <span className="px-6 py-3 bg-white rounded-full shadow-sm flex items-center gap-2 text-gray-700 font-medium text-sm">
                <span className="w-2 h-2 bg-[#cbca7b] rounded-full"></span>
                Adventure-Ready
              </span>
              <span className="px-6 py-3 bg-white rounded-full shadow-sm flex items-center gap-2 text-gray-700 font-medium text-sm">
                <span className="w-2 h-2 bg-[#cbca7b] rounded-full"></span>
                Community Service
              </span>
              <span className="px-6 py-3 bg-white rounded-full shadow-sm flex items-center gap-2 text-gray-700 font-medium text-sm">
                <span className="w-2 h-2 bg-[#cbca7b] rounded-full"></span>
                Inspiring Locations
              </span>
            </div>

            <p className="text-gray-700 text-lg">
              Let's make something great work together.{" "}
              <a href="#" className="!text-[#cbca7b] font-bold hover:underline">
                Get Free Quote
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Activity Showcase Section */}
      <div className="relative h-[700px] overflow-hidden ">
        {/* Background Image */}
        <Image
          src="/templates/yootheme/post/anhthuyen.jpg"
          fill
          alt="Activities Background"
          className="object-cover  "
        />
        <div className="absolute inset-0 bg-gradient-to-b "></div>

        {/* Content Grid */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-0">
            {/* Card 1 - Guided Forest Hikes */}
            <div className="p-8 !text-white !border-r !border-white/10 ">
              <h3 className="text-xl !text-white !font-bold mb-2">
                Surfing Adventures
              </h3>
              <p className="text-lg !text-white/90">
                Catch the waves and learn water safety while having a blast on
                the beach.
              </p>
            </div>

            {/* Card 2 - Mountain Biking Trails */}
            <div className="p-8 !text-white !border-r !border-white/10">
              <h3 className="text-xl !text-white !font-bold mb-2">
                River Kayaking
              </h3>
              <p className="text-lg !text-white/90">
                Paddle along scenic rivers, surrounded by wildlife and stunning
                landscapes.
              </p>
            </div>

            {/* Card 3 - River Kayaking Tours */}
            <div className="p-8 !text-white !border-r !border-white/10">
              <h3 className="text-xl !text-white !font-bold mb-2">
                Campfire Nights
              </h3>
              <p className="text-lg !text-white/90">
                Gather around the fire, roast marshmallows, and share stories
                under the stars
              </p>
            </div>

            {/* Card 4 - Stargazing Nights */}
            <div className="p-8 !text-white !border-r !border-white/10">
              <h3 className="text-xl !text-white !font-bold mb-2">
                Community Service Projects
              </h3>
              <p className="text-lg !text-white/90">
                Participate in meaningful activities such as beach clean-ups,
                tree planting, and helping local community initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="uk-section uk-section-default relative overflow-hidden">
        {/* Background Image - Left Side */}
        <div className="absolute left-0 top-0 bottom-0 w-1/3 flex items-start justify-start overflow-hidden opacity-80">
          <Image
            src="/templates/yootheme/post/anhla.png"
            width={800}
            height={1200}
            alt="Background"
            className="h-full w-[200px] max-w-none -mt-[-20%]"
            // -mt-[8%] = kéo ảnh lên trên khoảng 8% chiều cao section
            // bạn có thể chỉnh thành -mt-[5%], -mt-[10%], -mt-12 tùy ý
          />
        </div>

        <div className="uk-container uk-container-large relative z-10">
          <div className="uk-grid uk-grid-large" uk-grid="">
            {/* Left Column */}
            <div className="uk-width-1-2@m">
              <p className="inline-flex items-center gap-2 !text-[#cdcc7f] !text-lg !font-bold mb-0 !tracking-wider uppercase leading-none">
                <img
                  src="https://demo.awaikenthemes.com/wildex/wp-content/themes/wildex/assets/images/icon-sub-heading.svg"
                  alt="icon"
                  className="w-4 h-4 object-contain flex-shrink-0"
                />
                FREQUENTLY ASKED QUESTIONS
              </p>

              <h2 className="text-4xl !md:text-8xl !font-bold text-gray-900 mb-4 leading-tight">
                ESSENTIAL CAMP INFO
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed !text-lg">
                Everything you need to know for a safe, fun, and unforgettable
                experience. Get quick details about our programs, activities,
                accommodations, and community projects – all in one place.
              </p>

              {/* Image with CTA Overlay */}
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src="/templates/yootheme/post/anhgirl1.jpg"
                  width={400}
                  height={500}
                  alt="Glamping"
                  className="w-full h-[500px] object-cover"
                />

                {/* CTA Overlay – siêu nhỏ gọn + icon đúng 100% */}
                <div className="absolute bottom-10 left-10 bg-black/40 backdrop-blur-md rounded-2xl px-4 py-3 flex items-center gap-3 shadow-2xl border border-white/10">
                  {/* Icon nhỏ gọn – viền trắng hoặc vàng chanh tùy ý */}
                  <div className="flex-shrink-0 w-9 h-9 bg-black rounded-full flex items-center justify-center border-3 border-white">
                    {/* Nếu muốn viền vàng chanh thì đổi border-white → border-[#cbca7b] */}
                  </div>

                  {/* Chữ – padding nhỏ, sát lề, căn giữa dọc đẹp */}
                  <div className="text-left leading-tight">
                    <p className="!text-white !font-bold !text-base !mt-3 !mb-3">
                      Need Any Help?
                    </p>
                    <p className="!text-white/90 !text-xs">
                      +(123) 456-789 | office@ggcamp.org
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - FAQ Questions */}
            <div className="uk-width-1-2@m">
              <div className="space-y-3">
                {/* Question 1 */}
                <div className="bg-white shadow-sm rounded-xl overflow-hidden">
                  <div
                    className="p-4 cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() =>
                      setOpenFaqIndex(openFaqIndex === 0 ? null : 0)
                    }
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <h3 className="text-gray-900 !font-bold !text-lg !mt-2">
                          1. Safety & Supervision?
                        </h3>
                      </div>
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={
                            openFaqIndex === 0
                              ? "M19 9l-7 7-7-7"
                              : "M9 5l7 7-7 7"
                          }
                        />
                      </svg>
                    </div>
                  </div>
                  {openFaqIndex === 0 && (
                    <div className="bg-[#d4d39a] px-1 pb-1">
                      <div className="px-4 py-4 rounded-xl ">
                        <p className="text-gray-900 !text-sm !font-semibold leading-relaxed">
                          Our trained and friendly staff are dedicated to
                          ensuring every camper feels safe and supported
                          throughout their stay. All camp sites are carefully
                          chosen and regularly inspected for safety, and every
                          activity is closely supervised. From water sports to
                          forest hikes, we maintain high safety standards while
                          encouraging campers to explore, challenge themselves,
                          and grow.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Question 2 */}
                <div className="bg-white shadow-sm rounded-xl overflow-hidden">
                  <div
                    className="p-4 cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() =>
                      setOpenFaqIndex(openFaqIndex === 1 ? null : 1)
                    }
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-3">
                        <h3 className="text-gray-900 !font-bold !text-lg !mt-2">
                          2. Food & Meals?
                        </h3>
                      </div>
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={
                            openFaqIndex === 1
                              ? "M19 9l-7 7-7-7"
                              : "M9 5l7 7-7 7"
                          }
                        />
                      </svg>
                    </div>
                  </div>
                  {openFaqIndex === 1 && (
                    <div className="bg-[#d4d39a] px-1 pb-1">
                      <div className="px-4 py-4 rounded-xl">
                        <p className="text-gray-900 !text-sm !font-semibold leading-relaxed">
                          Nutritious and balanced meals are prepared daily to
                          keep campers energized for their activities. From
                          locally sourced ingredients to delicious, kid-friendly
                          recipes, our meals also accommodate special dietary
                          needs. Mealtime is more than just food—it’s a time for
                          friends to gather, share experiences, and enjoy new
                          flavors together.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Question 3 */}
                <div className="bg-white shadow-sm rounded-xl overflow-hidden">
                  <div
                    className="p-4 cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() =>
                      setOpenFaqIndex(openFaqIndex === 2 ? null : 2)
                    }
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-3">
                        <h3 className="text-gray-900 !font-bold !text-lg !mt-2">
                          3. Activities & Adventure?
                        </h3>
                      </div>
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={
                            openFaqIndex === 2
                              ? "M19 9l-7 7-7-7"
                              : "M9 5l7 7-7 7"
                          }
                        />
                      </svg>
                    </div>
                  </div>
                  {openFaqIndex === 2 && (
                    <div className="bg-[#d4d39a] px-1 pb-1">
                      <div className="px-4 py-4 rounded-xl">
                        <p className="text-gray-900 !text-sm !font-semibold leading-relaxed">
                          Our diverse program of activities is designed to
                          challenge, inspire, and entertain. Campers can ride
                          the waves during surfing lessons, paddle scenic rivers
                          on kayaking tours, or participate in team challenges
                          and creative workshops. We also include meaningful
                          community service projects, like beach clean-ups and
                          tree planting, to teach responsibility and
                          environmental stewardship. Every activity is a chance
                          to learn, grow, and create lasting memories.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Question 4 */}
                <div className="bg-white shadow-sm rounded-xl overflow-hidden">
                  <div
                    className="p-4 cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() =>
                      setOpenFaqIndex(openFaqIndex === 3 ? null : 3)
                    }
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-3">
                        <h3 className="text-gray-900 !font-bold !text-lg !mt-2">
                          4. Can I bring my own food or cook at the campsite?
                        </h3>
                      </div>
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={
                            openFaqIndex === 3
                              ? "M19 9l-7 7-7-7"
                              : "M9 5l7 7-7 7"
                          }
                        />
                      </svg>
                    </div>
                  </div>
                  {openFaqIndex === 3 && (
                    <div className="bg-[#d4d39a] px-1 pb-1">
                      <div className="px-4 py-4 rounded-xl">
                        <p className="text-gray-900 !text-sm !font-semibold leading-relaxed">
                          Absolutely! Each site has cooking facilities including
                          BBQ grills and fire pits. You're welcome to bring your
                          own food and beverages.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Question 5 */}
                <div className="bg-white shadow-sm rounded-xl overflow-hidden">
                  <div
                    className="p-4 cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() =>
                      setOpenFaqIndex(openFaqIndex === 4 ? null : 4)
                    }
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-3">
                        <h3 className="text-gray-900 !font-bold !text-lg !mt-2">
                          5. What types of adventure activities are available?
                        </h3>
                      </div>
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={
                            openFaqIndex === 4
                              ? "M19 9l-7 7-7-7"
                              : "M9 5l7 7-7 7"
                          }
                        />
                      </svg>
                    </div>
                  </div>
                  {openFaqIndex === 4 && (
                    <div className="bg-[#d4d39a] px-1 pb-1">
                      <div className="px-4 py-4 rounded-xl">
                        <p className="text-gray-900 !text-sm !font-semibold leading-relaxed">
                          We offer hiking, kayaking, rock climbing, mountain
                          biking, fishing, and guided nature tours. Activities
                          vary by location and season.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="relative uk-section uk-section-medium">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/templates/yootheme/post/anhtour.jpg"
            fill
            alt="Partners Background"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 uk-container uk-container-large">
          <div className="text-center mb-16">
            <p className="inline-flex items-center gap-2 !text-white !text-xl !font-bold mb-4 tracking-wider">
              <img
                src="https://demo.awaikenthemes.com/wildex/wp-content/themes/wildex/assets/images/icon-sub-heading.svg"
                alt="icon"
                className="w-4 h-4 object-contain flex-shrink-0"
              />
              OUR PARTNERS
            </p>
            <h2 className="!text-white  !text-6xl !font-bold !leading-tight max-w-1xl mx-auto">
              Working with the best in outdoor living and exploration
            </h2>
          </div>

          {/* Partner Logos - Uneven Grid */}
          <div className="max-w-6xl mx-auto  mt-25 mb-16">
            {/* Row 1 - 5 logos */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-6">
              {/* Logo 1 */}
              <div className="bg-gray-100/20 backdrop-blur-sm p-3  rounded-xl flex items-center justify-center">
                <Image
                  src="https://demo.awaikenthemes.com/wildex/wp-content/uploads/2025/10/partner-logo-1.svg"
                  width={120}
                  height={32}
                  alt="Partner Logo 1"
                  className="h-8 w-auto object-contain"
                />
              </div>

              {/* Logo 2 */}
              <div className="bg-gray-100/20 backdrop-blur-sm p-3 rounded-xl flex items-center justify-center">
                <Image
                  src="https://demo.awaikenthemes.com/wildex/wp-content/uploads/2025/10/partner-logo-2.svg"
                  width={120}
                  height={32}
                  alt="Partner Logo 2"
                  className="h-8 w-auto object-contain"
                />
              </div>

              {/* Logo 3 */}
              <div className="bg-gray-100/20 backdrop-blur-sm p-3 rounded-xl flex items-center justify-center">
                <Image
                  src="https://demo.awaikenthemes.com/wildex/wp-content/uploads/2025/10/partner-logo-3.svg"
                  width={120}
                  height={32}
                  alt="Partner Logo 3"
                  className="h-8 w-auto object-contain"
                />
              </div>

              {/* Logo 4 */}
              <div className="bg-gray-100/20 backdrop-blur-sm p-3 rounded-xl flex items-center justify-center">
                <Image
                  src="https://demo.awaikenthemes.com/wildex/wp-content/uploads/2025/10/partner-logo-4.svg"
                  width={120}
                  height={32}
                  alt="Partner Logo 4"
                  className="h-8 w-auto object-contain"
                />
              </div>

              {/* Logo 5 - Repeat Logo 1 */}
              <div className="bg-gray-100/20 backdrop-blur-sm p-3 rounded-xl flex items-center justify-center">
                <Image
                  src="https://demo.awaikenthemes.com/wildex/wp-content/uploads/2025/10/partner-logo-2.svg"
                  width={120}
                  height={32}
                  alt="Partner Logo 5"
                  className="h-8 w-auto object-contain"
                />
              </div>
            </div>

            {/* Row 2 - 4 logos centered */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-4xl  mx-auto">
              {/* Logo 6 - Logo 2 */}
              <div className="bg-gray-100/20 backdrop-blur-sm p-3 rounded-xl flex items-center justify-center md:col-start-1">
                <Image
                  src="https://demo.awaikenthemes.com/wildex/wp-content/uploads/2025/10/partner-logo-2.svg"
                  width={120}
                  height={32}
                  alt="Partner Logo 6"
                  className="h-8 w-auto object-contain"
                />
              </div>

              {/* Logo 7 - Logo 3 */}
              <div className="bg-gray-100/20 backdrop-blur-sm p-3 rounded-xl flex items-center justify-center">
                <Image
                  src="https://demo.awaikenthemes.com/wildex/wp-content/uploads/2025/10/partner-logo-3.svg"
                  width={120}
                  height={32}
                  alt="Partner Logo 7"
                  className="h-8 w-auto object-contain"
                />
              </div>

              {/* Logo 8 - Logo 4 */}
              <div className="bg-gray-100/20 backdrop-blur-sm p-3 rounded-xl flex items-center justify-center">
                <Image
                  src="https://demo.awaikenthemes.com/wildex/wp-content/uploads/2025/10/partner-logo-4.svg"
                  width={120}
                  height={32}
                  alt="Partner Logo 8"
                  className="h-8 w-auto object-contain"
                />
              </div>

              {/* Logo 9 - Logo 1 */}
              <div className="bg-gray-100/20 backdrop-blur-sm p-3 rounded-xl flex items-center justify-center">
                <Image
                  src="https://demo.awaikenthemes.com/wildex/wp-content/uploads/2025/10/partner-logo-2.svg"
                  width={120}
                  height={32}
                  alt="Partner Logo 9"
                  className="h-8 w-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full transition-colors cursor-pointer">
              <span className="bg-[#cbca7b] !text-black text-xl  px-2 py-0.5 rounded-3xl">
                Free
              </span>
              <span className="!text-white font-semibold text-xl">
                Let's make something great work together.
              </span>
              <Link
                href="/booking"
                className="!text-[#cbca7b] font-bold underline hover:no-underline text-xl"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="uk-section-default uk-section uk-section-small">
        <div className="uk-container uk-container-large">
          <div
            className="uk-grid uk-grid-collapse uk-child-width-1-1"
            uk-grid=""
          >
            <div className="uk-width-1-1">
              <div
                className="uk-grid uk-grid-collapse uk-flex-middle"
                uk-grid=""
              >
                {/* Left side - Image */}
                <div className="uk-width-1-2@m uk-width-1-1">
                  <div className="relative h-[400px] overflow-hidden">
                    <Image
                      src="/templates/yootheme/post/anhsendemail.jpg"
                      width={800}
                      height={400}
                      alt="Newsletter"
                      className="!w-full !h-full !object-cover !flex-shrink-0"
                    />
                  </div>
                </div>

                {/* Right side - Newsletter Form */}
                <div className="uk-width-1-2@m uk-width-1-1">
                  <div className="bg-[#f5f1e8] p-16 h-[400px] flex flex-col justify-center">
                    <h3 className="text-2xl !font-bold !text-gray-900 mb-1">
                      Stay Updated with Our Monthly
                    </h3>
                    <div className="mb-4">
                      <h3 className="text-2xl !font-black !text-gray-900 mb-2">
                        Newsletter
                      </h3>
                      <svg
                        width="160"
                        height="12"
                        viewBox="0 0 160 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative -mt-7"
                      >
                        <path
                          d="M0 8 Q 70 1, 160 0"
                          stroke="#22c55e"
                          strokeWidth="3"
                          fill="none"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-600 mb-6 !text-lg leading-relaxed">
                      Select a category that best suites your interest. Use
                      filters to
                      <br />
                      opportunities. Don’t miss out on anything fun!
                    </p>
                    <form className="flex gap-1">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        className="flex-1 px-3 py-2 border border-gray-300 bg-white shadow-sm focus:outline-none"
                        suppressHydrationWarning
                      />
                      <button
                        type="submit"
                        className="bg-green-500 rounded hover:bg-green-600 text-white px-4 py-2 !font-bold transition-colors flex items-center justify-center gap-1.5 text-xl whitespace-nowrap focus:outline-none"
                      >
                        Subscribe
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 17L17 7M17 7H7M17 7v10"
                          />
                        </svg>
                      </button>
                    </form>
                  </div>
                </div>

                {/* Goals Box */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Header Section */}
      <div className="uk-section-default uk-section uk-section-small">
        <div className="uk-container uk-container-small">
          <div className="uk-text-center">
            <p className="text-sm text-gray-600 mb-2">Your next step</p>
            <h2 className="uk-h1 !text-[3.5rem] !font-bold !leading-tight mb-4">
              Read Every News & Blog
            </h2>
            <p className="text-gray-600 mb-2">
              Our approach combines creativity and strategy to meet your goals.
            </p>
            <p className="text-gray-600 mb-1">
              We emphasize responsiveness and personalized service.
            </p>
            <Link
              href="/booking"
              className="uk-button uk-button-primary bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold mt-4 inline-block"
            >
              Explore Now
            </Link>
          </div>
        </div>
      </div>

      {/* Latest Posts Section - ĐÃ FIX HOÀN HẢO: Sidebar nằm đúng bên phải */}
      <div className="uk-section-default uk-section py-20">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1" uk-grid="">
            {/* Cột trái: 6 bài post - masonry layout */}
            <div className="uk-width-3-5@m uk-width-1-1">
              <div
                className="uk-grid uk-grid-medium uk-child-width-1-2@m uk-child-width-1-2@s uk-child-width-1-1"
                uk-grid="masonry: true"
                uk-height-match="target: > div > div"
              >
                {/* Bài 1 */}
                <div>
                  <div className="relative overflow-hidden  group cursor-pointer shadow-lg">
                    {/* Ảnh */}
                    <Image
                      src="/templates/yootheme/post/anhnew1.jpg"
                      width={800}
                      height={600}
                      alt="Power of Consistency"
                      className="!w-[500px] !h-[350px] object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />

                    {/* Gradient ĐẬM để chữ trắng bật lên */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/30 to-transparent"></div>

                    {/* CHỮ TRẮNG 100% – DÙNG !text-white + drop-shadow để chắc chắn không bị đè */}
                    <div className="absolute bottom-0 left-6 right-6 p-5 flex flex-col gap-0">
                      {/* Nút ngày tháng – canh theo h3 */}
                      <div className="-mb-8">
                        <span className="inline-block bg-orange-400 text-white !text-xl font-extrabold px-10 py-1.5 shadow-lg">
                          June 30, 2025
                        </span>
                      </div>

                      <h3 className="!text-2xl !font-bold !text-white mb-1 leading-tight drop-shadow-2xl">
                        Power of Consistency
                      </h3>
                      <p className="!text-base !font-bold !text-white font-medium leading-relaxed drop-shadow-lg">
                        Customized training programs to enhance skills and
                        improve team performance.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bài 2 */}
                {/* Bài 2 */}
                <div>
                  <div className="relative overflow-hidden group cursor-pointer shadow-lg">
                    <Image
                      src="/templates/yootheme/post/anhnew2.jpg"
                      width={600}
                      height={520}
                      alt="You Need to Know"
                      className="!w-[500px] !h-[350px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-6 right-6 p-5 flex flex-col gap-0">
                      <div className="-mb-8">
                        <span className="inline-block bg-orange-400 !text-white !text-xl font-bold px-10 py-1.5">
                          June 30, 2025
                        </span>
                      </div>

                      <h3 className="!text-xl !font-bold !text-white mb-1 leading-tight">
                        You Need to Know
                      </h3>
                      <p className="!text-base !font-bold !text-white font-medium leading-relaxed drop-shadow-lg">
                        Expert project management ensuring timely delivery and
                        budget compliance.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bài 3 */}
                <div>
                  <div className="relative overflow-hidden group cursor-pointer shadow-lg">
                    <Image
                      src="/templates/yootheme/post/anhnew3.jpg"
                      width={600}
                      height={520}
                      alt="Common Mistakes"
                      className="!w-[500px] !h-[350px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-6 right-6 p-5 flex flex-col gap-0">
                      <div className="-mb-8">
                        <span className="inline-block bg-orange-400 !text-white !text-xl font-bold px-10 py-1.5">
                          June 30, 2025
                        </span>
                      </div>

                      <h3 className="!text-xl !font-bold !text-white mb-1 leading-tight">
                        Common Mistakes
                      </h3>
                      <p className="!text-base !font-bold !text-white font-medium leading-relaxed drop-shadow-lg">
                        Comprehensive marketing strategies focused on increasing
                        brand awareness and sales.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bài 4 */}
                <div>
                  <div className="relative overflow-hidden group cursor-pointer shadow-lg">
                    <Image
                      src="/templates/yootheme/post/anhnew4.jpg"
                      width={600}
                      height={520}
                      alt="Quality Always Wins"
                      className="!w-[500px] !h-[350px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-6 right-6 p-5 flex flex-col gap-0">
                      <div className="-mb-8">
                        <span className="inline-block bg-orange-400 !text-white !text-xl font-bold px-10 py-1.5">
                          June 30, 30, 2025
                        </span>
                      </div>

                      <h3 className="!text-xl !font-bold !text-white mb-1 leading-tight">
                        Quality Always Wins
                      </h3>
                      <p className="!text-base !font-bold !text-white font-medium leading-relaxed drop-shadow-lg">
                        Innovative design services that bring your creative
                        visions to life.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bài 5 */}
                <div>
                  <div className="relative overflow-hidden group cursor-pointer shadow-lg">
                    <Image
                      src="/templates/yootheme/post/anhnew5.jpg"
                      width={600}
                      height={520}
                      alt="Tips You Should Know"
                      className="!w-[500px] !h-[350px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-6 right-6 p-5 flex flex-col gap-0">
                      <div className="-mb-8">
                        <span className="inline-block bg-orange-400 !text-white !text-xl font-bold px-10 py-1.5">
                          June 30, 2025
                        </span>
                      </div>

                      <h3 className="!text-xl !font-bold !text-white mb-1 leading-tight">
                        Tips You Should Know
                      </h3>
                      <p className="!text-base !font-bold !text-white font-medium leading-relaxed drop-shadow-lg">
                        Reliable customer support designed to provide fast and
                        effective solutions.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bài 6 */}
                <div>
                  <div className="relative overflow-hidden group cursor-pointer shadow-lg">
                    <Image
                      src="/templates/yootheme/post/anhnew6.jpg"
                      width={600}
                      height={520}
                      alt="Make the Most of It"
                      className="!w-[500px] !h-[350px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-6 right-6 p-5 flex flex-col gap-0">
                      <div className="-mb-8">
                        <span className="inline-block bg-orange-400 !text-white !text-xl font-bold px-10 py-1.5">
                          May 31, 2025
                        </span>
                      </div>

                      <h3 className="!text-xl !font-bold !text-white mb-1 leading-tight">
                        Make the Most of It
                      </h3>
                      <p className="!text-base !font-bold !text-white font-medium leading-relaxed drop-shadow-lg">
                        Professional consulting tailored to meet your unique
                        business challenges and goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar phải – giống ảnh 100% */}
            <div className="uk-width-1-5@m uk-width-1-1 mt-8@m mt-12">
              {/* Search Box – giống ảnh: viền nhẹ, icon cam, placeholder xám */}
              <div className="bg-white  shadow-lg overflow-hidden mb-8 sticky top-24">
                <form className="relative ">
                  <input
                    type="search"
                    placeholder="Search..."
                    className="w-full px-6 py-5 border border-gray-200 !font-bold text-base !text-gray-900 placeholder-gray-400 bg-transparent focus:outline-none"
                  />
                  <button className="absolute right-0 top-0 h-full px-7 bg-orange-500 hover:bg-orange-600 transition-colors">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </form>
              </div>

              {/* Latest Posts – giống hệt ảnh */}

              <div className="py-6">
                <h3 className="text-xl !font-bold text-gray-900 mb-6">
                  Latest Posts
                </h3>

                <div className="space-y-5">
                  {/* Bài 1 */}
                  <div className="flex gap-5 group cursor-pointer">
                    <Image
                      src="/templates/yootheme/post/anhnew7.jpg"
                      width={100}
                      height={100}
                      alt="Make the Most of It"
                      // Thêm dấu ! trước w và h để ép cứng kích thước
                      // Thêm !object-cover để ép kiểu cắt ảnh
                      className="!w-[100px] !h-[100px] !object-cover flex-shrink-0 transition-all duration-300 group-hover:grayscale"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="!font-bold !text-base !text-gray-900 leading-tight !mb-2">
                        Make the Most of It
                      </h4>
                      <p className="!text-xs !font-bold !text-gray-600 !leading-relaxed !line-clamp-2">
                        Professional consulting tailored to meet your unique
                        business challenges.
                      </p>
                    </div>
                  </div>

                  {/* Bài 2 */}
                  <div className="flex gap-5 group cursor-pointer">
                    <Image
                      src="/templates/yootheme/post/anhnew8.jpg"
                      width={100}
                      height={100}
                      alt="Tips You Should Know"
                      className="!w-[100px] !h-[100px] !object-cover flex-shrink-0 transition-all duration-300 group-hover:grayscale"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="!font-bold !text-base !text-gray-900 leading-tight !mb-2">
                        Tips You Should Know
                      </h4>
                      <p className="!text-xs !font-bold !text-gray-600 !leading-relaxed !line-clamp-2">
                        Reliable customer support designed to provide fast and
                        effective solutions.
                      </p>
                    </div>
                  </div>

                  {/* Bài 3 */}
                  <div className="flex gap-5 group cursor-pointer">
                    <Image
                      src="/templates/yootheme/post/anhnew1.jpg"
                      width={100}
                      height={100}
                      alt="Quality Always Wins"
                      className="!w-[100px] !h-[100px] !object-cover flex-shrink-0 transition-all duration-300 group-hover:grayscale"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="!font-bold !text-base !text-gray-900 leading-tight !mb-2">
                        Quality Always Wins
                      </h4>
                      <p className="!text-sm !font-bold !text-gray-600 !leading-relaxed !line-clamp-2">
                        Innovative design services that bring your creative
                        visions to life.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured Card lớn – Comfort Plus */}
              <div className="relative mt-5 group">
                <Image
                  src="/templates/yootheme/post/anhnew2.jpg"
                  width={500}
                  height={250}
                  alt="Comfort Plus"
                  className="!w-[400px] !h-[250px] object-cover"
                />

                <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:opacity-0"></div>

                <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center transition-opacity duration-500 group-hover:opacity-0">
                  <h4 className="text-2xl font-bold mb-2 leading-tight !text-white">
                    Comfort Plus
                  </h4>
                  <p className="text-sm leading-relaxed opacity-95 !text-white">
                    Expert project management ensuring timely delivery and
                    budget compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
