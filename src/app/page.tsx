"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { getTemplateImageUrl } from "@/lib/assets";
import { programs } from "@/data/programs";
import { ProgramCard } from "@/components/features/ProgramCard";
import { useScrollTrigger } from "@/lib/utils";

// Declare jQuery for TypeScript
declare const jQuery: any;

export default function HomePage() {
  const [filteredPrograms, setFilteredPrograms] = useState(programs);
  const [scrollY, setScrollY] = useState(0);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [seeMoreCoords, setSeeMoreCoords] = useState({ x: 0, y: 0 });
  const [seeMoreHovered, setSeeMoreHovered] = useState(false);
  const avatars = [
    "yootheme/aboutImage/profile-face_1.jpg",
    "yootheme/aboutImage/young-tourist-sitting-tent.jpg",
    "yootheme/aboutImage/portrait-young-male-tourist-standing-forest-with-tent.jpg",
  ];
  // Refs for scroll-triggered animations in About Us section
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollTrigger(ref);

  // Individual refs for each animated element
  const aboutUsTitleRef = useRef<HTMLHeadingElement>(null);
  const creatingCampsTitleRef = useRef<HTMLHeadingElement>(null);
  const descriptionTextRef = useRef<HTMLParagraphElement>(null);
  const iconListRef = useRef<HTMLUListElement>(null);
  const quoteTextRef = useRef<HTMLParagraphElement>(null);
  const learnMoreButtonRef = useRef<HTMLButtonElement>(null);

  // Refs for image elements
  const mainImage1Ref = useRef<HTMLDivElement>(null);
  const mainImage2Ref = useRef<HTMLDivElement>(null);
  const extraImageRef = useRef<HTMLDivElement>(null);

  // Refs for author images and counter
  const authorImagesRef = useRef<HTMLDivElement>(null);
  const adventurerTextRef = useRef<HTMLParagraphElement>(null);
    
  // Visibility states for each element
  const isAboutUsTitleVisible = useScrollTrigger(aboutUsTitleRef);
  const isCreatingCampsTitleVisible = useScrollTrigger(creatingCampsTitleRef);
  const isDescriptionTextVisible = useScrollTrigger(descriptionTextRef);
  const isIconListVisible = useScrollTrigger(iconListRef);
  const isQuoteTextVisible = useScrollTrigger(quoteTextRef);
  const isLearnMoreButtonVisible = useScrollTrigger(learnMoreButtonRef);
    
  // Visibility states for image elements
  const isMainImage1Visible = useScrollTrigger(mainImage1Ref);
  const isMainImage2Visible = useScrollTrigger(mainImage2Ref);
  const isExtraImageVisible = useScrollTrigger(extraImageRef);
    
  // Visibility states for author images and counter
  const isAuthorImagesVisible = useScrollTrigger(authorImagesRef);
  const isAdventurerTextVisible = useScrollTrigger(adventurerTextRef);
  const [count, setCount] = useState(0);
  const countedRef = useRef(false); // đảm bảo chỉ count 1 lần

  const circleRef = (el: HTMLDivElement | null) => {
    if (!el || countedRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            countedRef.current = true;
            const target = 50;
            const duration = 3000;
            let startTime: number | null = null;

            const step = (timestamp: number) => {
              if (!startTime) startTime = timestamp;
              const progress = timestamp - startTime;
              const current = Math.min(Math.floor((progress / duration) * target), target);
              setCount(current);
              if (current < target) {
                requestAnimationFrame(step);
              }
            };

            requestAnimationFrame(step);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
  };

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
        const hiddenField4 = document.getElementById("field_4") as HTMLInputElement;
        if (hiddenField4) hiddenField4.value = field4;
        // Set selected values trong multiselect
        if (typeof jQuery !== "undefined" && jQuery.fn.multiselect) {
          const values = field4.split(",");
          jQuery("#field_4_select").multiselect("select", values);
        }
      }
      if (field5) {
        const hiddenField5 = document.getElementById("field_5") as HTMLInputElement;
        if (hiddenField5) hiddenField5.value = field5;
        if (typeof jQuery !== "undefined" && jQuery.fn.multiselect) {
          const values = field5.split(",");
          jQuery("#field_5_select").multiselect("select", values);
        }
      }
      if (field6) {
        const hiddenField6 = document.getElementById("field_6") as HTMLInputElement;
        if (hiddenField6) hiddenField6.value = field6;
        if (typeof jQuery !== "undefined" && jQuery.fn.multiselect) {
          const values = field6.split(",");
          jQuery("#field_6_select").multiselect("select", values);
        }
      }
      if (field7) {
        const field7Select = document.getElementById("field_7_select") as HTMLSelectElement;
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
              (v) => p.id === programMap[v] || p.slug === programMap[v] || p.slug === v
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
                "philippines": "philippines",
                "vietnam": "vietnam",
                "portugal": "portugal",
                "china": "china",
                "thailand": "thailand",
                "malaysia": "malaysia",
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
            selectedOptions: ""
          },
          selectAll: false,
          selectGroup: true
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
      document.querySelectorAll('.multiselect').forEach(function (selectElement) {
        const select = jQuery(selectElement);
        const hiddenFieldId = select.attr('data-hidden');
        const hiddenField = document.getElementById(hiddenFieldId) as HTMLInputElement | null;
        const selectedValues = select.val(); // Get values from MultiSelect

        if (hiddenField) {
          hiddenField.value = selectedValues ? selectedValues.join(',') : '';
        }
      });
    }

    // Get values from hidden fields (which are updated by the multiselect)
    const field4Hidden = document.getElementById("field_4") as HTMLInputElement;
    const field5Hidden = document.getElementById("field_5") as HTMLInputElement;
    const field6Hidden = document.getElementById("field_6") as HTMLInputElement;
    const field7Select = document.getElementById("field_7_select") as HTMLSelectElement;

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
          (v) => p.id === programMap[v] || p.slug === programMap[v] || p.slug === v
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
            "philippines": "philippines",
            "vietnam": "vietnam",
            "portugal": "portugal",
            "china": "china",
            "thailand": "thailand",
            "malaysia": "malaysia",
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
      {/* Hero Section với Background Image và Filter Form */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          #page\\#0,
          #page\\#0 .el-title {
            text-shadow: 0px 0px 10px #00000099;
          }
          #page\\#1 {
            background: rgba(0, 0, 0, 0.55);
            padding: 20px;
            padding-bottom: 80px;
            margin-bottom: -100px;
          }
          #searchform {
            background: #006533;
          }
          #page\\#2 .el-meta {
            position: absolute;
            top: 0;
            right: 25px;
            background: #fff;
            padding: 3px 15px;
            font-size: 16px;
            font-weight: bold;
            border-radius: 10px;
          }
        `,
        }}
      />

      <div className="relative w-full h-screen hero-section">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center hero-background"
          style={{
            backgroundImage: `url(${getTemplateImageUrl("yootheme/banner/b3.jpg")})`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div> {/* Overlay */}
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="!text-white font-bold drop-shadow-xl !font-bold opacity-0 animate-fadeUp !text[5vw] hero-heading">
            Discover Adventure and Friendship
          </h1>
          <p className="!text-[1.667vw] !text-white mt-4 max-w-2xl drop-shadow-md opacity-0 animate-fadeUp animate-delay-200 hero-paragraph">
            Immerse yourself in a realm filled with excitement, discovery, and memorable experiences. Venture into nature, engage in thrilling activities, and forge lasting memories that you will cherish forever.
          </p>

          <Link href="/booking">
            <button
              className="ripple-button mt-6 opacity-0 animate-fadeUp animate-delay-400 hero-button"
              onMouseEnter={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                setHovered(true);
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
              }}
              onMouseLeave={() => setHovered(false)}
            >
              <span className={` button-text ${hovered ? "hovered" : ""}`}>
                Book Your Smile
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
                className={`ripple-circle ${hovered ? "ripple-in" : "ripple-out"}`}
                style={{ left: coords.x, top: coords.y }}
              ></span>
            </button>
          </Link>
          {/* Contact Info Inline Box */}
          <div className="mt-30 flex flex-row justify-center items-center gap-6 bg-black/50 p-4 rounded-xl text-white shadow-md text-sm backdrop-blur-sm contact-box opacity-0 animate-fadeUp animate-delay-600">

            <div className="flex items-start gap-2">
              <div className="p-2 rounded-full">{/* Optional icon */}</div>

              <div className="!text-[1.667vw] text-white font-semibold leading-snug !text-left">
                <div>Your Adventure Journey</div>
                <div>Start Here!</div>
              </div>
            </div>

            <div className="w-px h-6 bg-white/30"></div> {/* Divider */}

            {/* Call */}
            <a href="tel:+123456789" className="group flex items-center gap-3">
              {/* Icon */}
              <div className="p-3 rounded-full transition-colors duration-300 group-hover:bg-[#9c5d00]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-white">
                  <path d="M8.8457 5.93115C8.84567 5.64689 8.73343 5.37413 8.53418 5.17139L5.28808 1.92432L5.208 1.85303C5.01329 1.69665 4.76943 1.61084 4.51757 1.61084C4.23001 1.61094 3.95373 1.72334 3.74804 1.92432L3.00586 2.68408L2.99609 2.69385C2.22454 3.45523 1.73864 4.45915 1.62011 5.53662C1.50186 6.61196 1.75664 7.69523 2.34179 8.60498C5.83558 13.7515 10.2803 18.1831 15.4365 21.6626C16.3449 22.2448 17.4253 22.4983 18.498 22.3804C19.5755 22.2619 20.5794 21.7759 21.3408 21.0044L21.3506 20.9946L22.1113 20.2495C22.3112 20.044 22.4238 19.7696 22.4238 19.4829C22.4238 19.1951 22.3115 18.9182 22.1103 18.7124L18.8447 15.4819C18.6423 15.284 18.3701 15.1725 18.0869 15.1724C17.8026 15.1724 17.5289 15.2837 17.3262 15.4829L16.8008 14.9487L17.3252 15.4849C16.8392 15.96 16.1865 16.226 15.5068 16.2261C14.8271 16.2261 14.1736 15.9601 13.6875 15.4849L8.53906 10.3354C8.29886 10.0975 8.1071 9.81434 7.97656 9.50244C7.84519 9.18854 7.77734 8.85152 7.77734 8.51123C7.77734 8.17096 7.84519 7.83391 7.97656 7.52002C8.10639 7.20982 8.29582 6.92801 8.53418 6.69092C8.73343 6.48815 8.8457 6.21544 8.8457 5.93115Z" />
                </svg>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-y-1 items-start">
                <h3 className="!text-white !font-semibold !text-[1.667vw] !mb-1 !mt-1">Call us</h3>
                <span className="!text-[1.667vw] text-white text-base font-semibold">+(123) 456 789</span>
              </div>
            </a>

            <div className="w-px h-6 bg-white/30"></div> {/* Divider */}

            {/* Email */}
            <a href="mailto:office@ggcamp.org" className="group flex items-center gap-3">
              <div className="p-3 rounded-full transition-colors duration-300 group-hover:bg-[#9c5d00]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-white">
                  <path d="M20 4H4C2.897 4 2 4.897 2 6v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 5.333-8-5.333V6h16zm0 12H4V8.489l8 5.333 8-5.333V18z" />
                </svg>
              </div>
              <div className="flex flex-col gap-y-1 items-start">
                <h3 className="!text-white !font-semibold !text-[1.667vw] !mb-1 !mt-1">Email</h3>
                <span className="text-white text-base font-semibold">office@ggcamp.org</span>
              </div>
            </a>

            <div className="w-px h-6 bg-white/30"></div> {/* Divider */}

            {/* Working Hours */}
            <a href="#" className="group flex items-center gap-3">
              <div className="p-3 rounded-full transition-colors duration-300 group-hover:bg-[#9c5d00]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-white">
                  <path d="M12 1.75C6.072 1.75 1.25 6.572 1.25 12.5S6.072 23.25 12 23.25 22.75 18.428 22.75 12.5 17.928 1.75 12 1.75zm0 20c-4.69 0-8.5-3.81-8.5-8.5s3.81-8.5 8.5-8.5 8.5 3.81 8.5 8.5-3.81 8.5-8.5 8.5z" />
                  <path d="M12.75 7h-1.5v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
                </svg>
              </div>
              <div className="flex flex-col gap-y-1 items-start">
                <h3 className="!text-white !font-semibold !text-[1.667vw] !mb-1 !mt-1">Working Hours</h3>
                <span className="!text-[1.667vw] text-white text-base font-semibold">Mon-Sat 08:pm - 05:am</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/*About Us*/}
      <div className="relative w-full bg-gray-50 py-20">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 px-4">
          {/* Left Images */}
          <div className="relative flex-1 flex flex-col gap-6 items-center lg:items-start">
            {/* Main Image */}
            <div
              ref={mainImage1Ref}
              className={`about-main-img relative w-80 h-[250px] overflow-hidden rounded-xl shadow-lg transform transition-all duration-700 hover:scale-105 ${isMainImage1Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <img
                src={getTemplateImageUrl("yootheme/aboutImage/act2.jpg")}
                alt="About Image 1"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>

            {/* Main Image */}
            <div
              ref={mainImage2Ref}
              className={`about-main-img relative w-80 h-[250px] overflow-hidden rounded-xl shadow-lg transform transition-all duration-700 hover:scale-105 ${isMainImage2Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <img
                src={getTemplateImageUrl("yootheme/aboutImage/act3.jpg")}
                alt="About Image 1"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>

            {/* Extra Image on Right Corner */}
            <div
              ref={extraImageRef}
              className={`about-extra-img absolute right-35 top-0 w-60 h-140 rounded-xl overflow-hidden shadow-xl border-4 border-white transform transition-all duration-700 hover:scale-105 ${isExtraImageVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <img
                src={getTemplateImageUrl("yootheme/aboutImage/man-camping.jpg")}
                alt="Extra Corner Image"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Small Author Images + Counter */}
            <div className="flex items-center gap-4 mt-4 about-author-group">
              <div
                ref={authorImagesRef}
                className={` flex items-center transition-all duration-700 ${isAuthorImagesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={getTemplateImageUrl(src)}
                    alt={`Author ${i + 1}`}
                    style={{ animationDelay: `${i * 300}ms` }} // delay tăng dần
                    className="w-15 !h-15 rounded-full border-2 border-white shadow-md -mr-4 object-cover opacity-0 animate-fadeUp transform transition-all duration-700 hover:scale-105"
                  />
                ))}

                {/* Count Circle */}
                <div
                  ref={circleRef}
                  className="w-15 h-15 flex items-center justify-center rounded-full bg-[#9c5d00] text-white font-bold shadow-md -mr-4 opacity-0 animate-fadeUp about-author-count"
                  style={{ animationDelay: "1000ms" }}>
                  <span className="text-2xl">{count}</span>+
                </div>
              </div>

              <p 
                ref={adventurerTextRef}
                className={`!text-[1.667vw] !ml-4 !mt-4 text-gray-700 !font-semibold transition-all duration-700 ${isAdventurerTextVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                Adventurer with happy customer
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 flex flex-col gap-4">
            <h3
              ref={aboutUsTitleRef}
              className={`!about-title !text[5vw] md:!text-[5vw] text-[#9c5d00] !font-bold uppercase tracking-wider about-author-text transition-all duration-700 ${isAboutUsTitleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              About Us
            </h3>

            <h2
              ref={creatingCampsTitleRef}
              className={`!about-subtitle !text-[1.667vw] md:text-4xl !mt-0 font-bold transition-all duration-700 ${isCreatingCampsTitleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              Creating Amazing Camps
            </h2>

            <p
              ref={descriptionTextRef}
              className={`!about-description text-gray-600 mt-1 transition-all duration-700 ${isDescriptionTextVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              Learning is closely tied to practical experience—summer is the perfect time for hands-on opportunities.
              While knowledge must still be nurtured, it can take on new and more engaging forms.
            </p>
            <hr className="border-t border-gray-300 my-6" />
            {/* --- WRAPPER CHO ICON LIST + TEXT/BUTTON --- */}
            <div className="flex flex-col md:flex-row mt-3 gap-8"> {/* gap-8 để cách icon list ra xa */}

              {/* Left: Icon List */}
              <ul
                ref={iconListRef}
                className={`about-icon-list flex flex-col gap-4 flex-[0_0_55%] !p-0 transition-all duration-700 ${isIconListVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <li className="flex items-center gap-4 text-gray-700">
                  <div className="min-w-8 w-8 h-8 rounded-full bg-[#9c5d00] flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Fun-Filled Experiences for Every Camper
                </li>
                <li className="flex items-center gap-4 text-gray-700">
                  <div className="min-w-8 w-8 h-8 rounded-full bg-[#9c5d00] flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Adventures That Inspire Confidence and Growth
                </li>
                <li className="flex items-center gap-4 text-gray-700">
                  <div className="min-w-8 w-8 h-8 rounded-full bg-[#9c5d00] flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Memories and Friendships That Last a Lifetime
                </li>
              </ul>

              {/* Right: Text + Button */}
              <div className="flex flex-col justify-start flex-[0_0_auto] gap-0 mt-2 md:mt-0 max-w-xs md:ml-12">
                <p
                  ref={quoteTextRef}
                  className={`about-quote !font-semibold text-black transition-all duration-700 ${isQuoteTextVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                  “Your Journey, Your Comfort,<br/> Your Adventure.”
                </p>

                <Link href="/info/about">
                  <button
                    ref={learnMoreButtonRef}
                    className={`about-button inline-flex items-center ripple-button mt-6 transition-all duration-700 ${isLearnMoreButtonVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                      setHovered(true);
                    }}
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                    }}
                    onMouseLeave={() => setHovered(false)}
                  >
                    <span className={`button-text ${hovered ? "hovered" : ""}`}>
                      Learn More About
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
                      className={`ripple-circle ${hovered ? "ripple-in" : "ripple-out"}`}
                      style={{ left: coords.x, top: coords.y }}
                    ></span>
                  </button>
                </Link>
              </div>

            </div>
            {/* --- END WRAPPER --- */}
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="uk-section-default uk-section uk-section-small">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1">
              <h2 className="uk-h2 uk-text-center@m uk-text-center">
                <p className="!text-[5.vw] !font-bold">Activities</p>
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
                        setSeeMoreCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                        setSeeMoreHovered(true);
                      }}
                      onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        setSeeMoreCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                      }}
                      onMouseLeave={() => setSeeMoreHovered(false)}
                    >
                      <span className={`button-text ${seeMoreHovered ? "hovered" : ""}`}>
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
                        className={`ripple-circle ${seeMoreHovered ? "ripple-in" : "ripple-out"}`}
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
    backgroundImage: `url(${getTemplateImageUrl("yootheme/banner/b8.jpg")})`,
    minHeight: "800px",
    width: "100%",
    backgroundSize: "contain",
    height: "300px",
    backgroundPosition: "left center",
    position: "relative",
  }}
>
  <div style={{
    width:"100%",
    height:"100%",
    position: "relative",
  }}>
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
      <div style={{
        width:"100%",
        height:"100px"
      }}>
        <div style={{paddingLeft: "10px"}}>
          <h2 style={{
            textAlign: "left",
            fontFamily: "Arial, sans-serif",
            fontSize: "1.5vw",
            fontWeight: "600",
            marginBottom: "30px",
            whiteSpace: "nowrap",
            letterSpacing: "0px"
          }}>02&nbsp;&nbsp;&nbsp;&nbsp;——&nbsp;&nbsp;&nbsp;&nbsp;Who&nbsp;We&nbsp;Are</h2>
          
          <h1 style={{
            textAlign: "left",
            fontFamily: "'Prompt', sans-serif",
            fontSize: "3vw",
            fontWeight: "600",
            whiteSpace: "nowrap",
            letterSpacing: "0px",
            lineHeight: "0.9"
          }}>Company Mission & Vision</h1>
        </div>

{/* 3 div hình vuông nằm ngang */}
{/* 3 div hình vuông nằm ngang */}
<div style={{
  display: "flex",
  justifyContent: "space-between",
  gap: "1vw",
  marginTop: "2vw"
}}>
  {/* Mission Box */}
  <div style={{
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
  }}>
    {/* Mission Icon - Target/Compass */}
    <div style={{
      width: "3vw",
      height: "3vw",
      backgroundColor: "#9c5d00",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "0.75vw",
      borderRadius: "0.6vw",
      boxShadow: "0 0.2vw 0.4vw rgba(156, 93, 0, 0.2)"
    }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1.4vw" height="1.4vw" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2"/>
        <line x1="12" y1="2" x2="12" y2="6"/>
        <line x1="12" y1="18" x2="12" y2="22"/>
        <line x1="2" y1="12" x2="6" y2="12"/>
        <line x1="18" y1="12" x2="22" y2="12"/>
      </svg>
    </div>
    <h3 style={{
      fontFamily: "Arial, sans-serif",
      fontSize: "1.5vw",
      fontWeight: "700",
      marginBottom: "0.75vw",
      color: "#333"
    }}>Our Mission</h3>
    <p style={{
      fontFamily: "Arial, sans-serif",
      fontSize: "1vw",
      fontWeight: "400",
      color: "#666",
      lineHeight: "1.5",
      flex: "1"
    }}>We provide a safe, inclusive, and inspiring environment where children and teens can explore, learn, and grow through adventure, creativity, and friendship.</p>
    <div style={{
      width: "4.25vw",
      height: "0.15vw",
      margin: "0px",
      backgroundColor: "#9c5d00",
    }}></div>
  </div>

  {/* Vision Box */}
  <div style={{
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
  }}>
    {/* Vision Icon - Eye */}
    <div style={{
      width: "3vw",
      height: "3vw",
      backgroundColor: "#9c5d00",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "0.75vw",
      borderRadius: "0.6vw",
      boxShadow: "0 0.2vw 0.4vw rgba(156, 93, 0, 0.2)"
    }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1.4vw" height="1.4vw" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    </div>
    <h3 style={{
      fontFamily: "Arial, sans-serif",
      fontSize: "1.5vw",
      fontWeight: "700",
      marginBottom: "0.75vw",
      color: "#333"
    }}>Our Vision</h3>
    <p style={{
      fontFamily: "Arial, sans-serif",
      fontSize: "1vw",
      fontWeight: "400",
      color: "#666",
      lineHeight: "1.5",
      flex: "1"
    }}>We aim to be a leading international camp experience that nurtures onfident, responsible, and compassionate young individuals connected to nature and their communities.</p>
    <div style={{
      width: "4.25vw",
      height: "0.15vw",
      margin: "0px",
      backgroundColor: "#9c5d00",
    }}></div>
  </div>

  {/* Goals Box */}
  <div style={{
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
  }}>
    {/* Goals Icon - Trophy/Flag */}
    <div style={{
      width: "3vw",
      height: "3vw",
      backgroundColor: "#9c5d00",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "0.75vw",
      borderRadius: "0.6vw",
      boxShadow: "0 0.2vw 0.4vw rgba(156, 93, 0, 0.2)"
    }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1.4vw" height="1.4vw" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
        <path d="M4 22h16"/>
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
      </svg>
    </div>
    <h3 style={{
      fontFamily: "Arial, sans-serif",
      fontSize: "1.5vw",
      fontWeight: "700",
      marginBottom: "0.75vw",
      color: "#333"
    }}>Company Goals</h3>
    <p style={{
      fontFamily: "Arial, sans-serif",
      fontSize: "1vw",
      fontWeight: "400",
      color: "#666",
      lineHeight: "1.5",
      flex: "1"
    }}>Through hands-on activities, community service, and outdoor adventures, we help campers build independence, teamwork, and lifelong memories.</p>
    <div style={{
      width: "4.25vw",
      height: "0.15vw",
      margin: "0px",
      backgroundColor: "#9c5d00",
    }}></div>
  </div>
</div>
       
      </div>
    </div>
  </div>
</div>

      {/* Go and Grow Camp has organised section */}
      <div className="uk-section-default uk-section uk-section-small uk-padding-remove-bottom">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h2 uk-text-center@m uk-text-center !font-bold">
                <p>
                  Go and Grow Camp has organised international summer camps and
                  outdoor educational school trips in various countries
                </p>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section with Jan Vieth */}
      <div
        className="uk-section-muted uk-section-overlap uk-section uk-section-small"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div className="uk-container uk-container-large">
          <div
            className="uk-grid tm-grid-expand uk-grid-large uk-margin-xlarge"
            uk-grid=""
          >
            <div className="uk-grid-item-match uk-flex-middle uk-width-1-3@m">
              <div className="uk-panel uk-width-1-1">
                <div
                  className="uk-margin uk-text-center@s uk-text-center"
                  uk-scrollspy-class="uk-animation-fade"
                >
                  <Image
                    src={getTemplateImageUrl("yootheme/banner/b1.jpg")}
                    width={250}
                    height={166}
                    className="el-image"
                    alt="Jan Vieth, Founder & General Manager of Go and Grow"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="uk-grid-item-match uk-flex-middle uk-width-2-3@m">
              <div className="uk-panel uk-width-1-1">
                <blockquote
                  className="uk-margin-medium uk-text-left@m uk-text-center"
                  uk-scrollspy-class=""
                >
                  <p>
                    Regardless of which country or culture a child, teen or
                    staff member comes from – they should all feel comfortable
                    together and experience a unique and unforgettable time at
                    camp.
                  </p>
                  <footer className="el-footer">
                    <cite className="el-author">Go and Grow</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Holidays that do more section */}
      <div className="uk-section-default uk-section uk-section-xsmall uk-padding-remove-bottom">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-grid-item-match uk-width-1-1">
              <div className="uk-card-default uk-card uk-card-body">
                <h3 className="uk-heading-bullet !text-[1.67vw] !font-semibold">
                  Holidays that do more – International language and specialty
                  camps for kids & teens
                </h3>
                <div className="uk-panel uk-margin">
                  <p>
                    Outdoor adventures, language travel & unforgettable
                    experiences in Germany, England & Spain – bilingual,
                    media-free & full of camp vibes.
                  </p>
                  <p>
                    For over 20 years, Go and Grow has stood for international
                    summer camps that truly connect kids and teens. Founded by
                    Jan Vieth and inspired by Canadian camp life, we bring young
                    people from all over the world together – to learn, grow,
                    and explore.
                  </p>
                  <p>
                    Our language camps, sports camps, and specialty camps
                    combine nature, community, and real learning by living.
                    Here, you don't just learn a language – you learn life
                    itself: outdoors, together, for real.
                  </p>
                  <p>
                    Because with us, it's not just about what you learn – it's
                    about what you experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Holiday camps for every season section */}
      <div className="uk-section-default uk-section uk-section-xsmall uk-padding-remove-bottom">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-grid-item-match uk-width-1-1">
              <div className="uk-card-default uk-card uk-card-body">
                <h3 className="uk-heading-bullet !text-[1.67vw] !font-semibold">
                  Holiday camps for every season | Go and Grow
                </h3>
                <div className="uk-panel uk-margin">
                  <p>
                    Our outdoor, sports, and language camps run all year round –
                    in Germany, England, and Spain.
                    <br />
                    When will your next adventure begin?
                  </p>
                  <p>
                    Spring, Easter & Whitsun – kick off your holidays full of
                    energy!
                    <br />
                    Our spring camps add some excitement to the short breaks:
                    bilingual, active, and packed with that true camp feeling –
                    from tent camps to language holidays in Germany or Spain.
                    <br />
                    Perfect to boost your English, Spanish, or German skills –
                    in class or out in nature during epic outdoor adventures.
                  </p>
                  <p>
                    Summer, summer camps – ready to go?
                    <br />
                    When the sun's out, Go and Grow is in its element!
                    <br />
                    Our summer camps in Germany, Spain, and England offer
                    endless variety: watersports, horseback riding, climbing,
                    football, creative camps, and so much more.
                    <br />
                    With our bilingual teamers, you'll improve your English
                    naturally – the best prep for a confident school start!
                    <br />
                    Or dive straight into language and adventure with our
                    English and Spanish language camps and youth travel programs
                    in Germany, Barcelona, or England.
                  </p>
                  <p>
                    Autumn, fall camps – days full of action?
                    <br />
                    Our autumn camp in Walsrode has become a true tradition –
                    authentic Canadian camp life with kids from all over the
                    world.
                    <br />
                    With over 20 activities, international teamers, and special
                    programs like Husky, horseback riding, or English camps,
                    there's something for everyone.
                  </p>
                  <p>
                    Winter, winter break – when the world slows down?
                    <br />
                    We're busy creating new ideas, training our teamers, and
                    planning fresh adventures – ready to welcome you back to
                    camp next season.
                  </p>
                  <p>
                    Find your perfect camp:
                    <br />→ Easter camp, Whitsun camp, summer camp, autumn camp
                    –
                    <Link href="/camp-profiles" target="_blank" rel="noopener">
                      your next adventure is waiting!
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The perfect camp for every age group section */}
      <div className="uk-section-default uk-section uk-section-xsmall uk-padding-remove-bottom">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-grid-item-match uk-width-1-1">
              <div className="uk-card-default uk-card uk-card-body">
                <h3 className="uk-heading-bullet !text-[1.67vw] !font-semibold">
                  The perfect camp for every age group
                </h3>
                <div className="uk-panel uk-margin">
                  <p>
                    At Go and Grow, kids and teens from all over the world come
                    together – aged 7 to 17. Every age group brings its own
                    unique spirit, and not every camp fits everyone – that's why
                    we offer a wide range of summer camps and youth travel
                    programs for every age and interest!
                  </p>
                  <p>
                    Many start with our kids' camps and holiday programs,
                    experiencing for the first time what it's like to spend a
                    week away from home. It's a chance to grow courage,
                    confidence, and real friendships – that's pure camp life.
                    Our daily structure and activities are tailored to younger
                    campers, helping them feel safe, supported, and right at
                    home.
                  </p>
                  <p>
                    For older participants, we offer summer camps, specialty
                    programs, and international youth trips that encourage
                    independence, adventure, and new connections – always
                    active, inspiring, and full of opportunities to grow.
                  </p>
                  <p>
                    Depending on the location and program, age groups mix
                    differently – sometimes younger, sometimes older, but always
                    international. In our outdoor, language, and adventure
                    camps, everyone finds the perfect space to learn, explore,
                    and have fun.
                  </p>
                  <p>
                    Our{" "}
                    <Link href="/camp-profiles" target="_blank" rel="noopener">
                      specialty camps
                    </Link>{" "}
                    nurture talents, interests, and self-confidence – with no
                    pressure, just plenty of motivation. Whether you're a
                    first-time camper or already a seasoned pro, you'll be seen,
                    supported, and appreciated – just as you are.
                  </p>
                  <p>
                    Find your camp:
                    <br />→ Discover the holiday camp that fits you best – and
                    grow beyond your limits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specialty camps & adventure holidays section */}
      <div className="uk-section-default uk-section uk-section-xsmall uk-padding-remove-bottom">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-grid-item-match uk-width-1-1">
              <div className="uk-card-default uk-card uk-card-body">
                <h3 className="uk-heading-bullet !text-[1.67vw] !font-semibold">
                  Specialty camps & adventure holidays | Go and Grow
                </h3>
                <div className="uk-panel uk-margin">
                  <p>
                    Our outdoor, sports, and creative camps combine movement,
                    community, and adventure – all powered by true passion.
                    Whether you want to try something new, develop your talent,
                    or simply experience unforgettable holidays, you'll find
                    your personal highlight in our specialty camps.
                  </p>
                  <p>
                    Choose from over 20 different specialty camps across
                    multiple locations – from action to mindfulness, from sports
                    to language. The following examples give you just a taste of
                    our diverse camp world:
                  </p>
                  <p>
                    <Link
                      href="/camp-profiles/soccer"
                      target="_blank"
                      rel="noopener"
                    >
                      Football Camp:
                    </Link>{" "}
                    Train with real coaches from our partner clubs, boost your
                    skills, team spirit, and game understanding – all in an
                    authentic camp atmosphere.
                    <br />
                    <Link
                      href="/camp-profiles/multi-water-adventure"
                      target="_blank"
                      rel="noopener"
                    >
                      Multiwater Camp:
                    </Link>{" "}
                    Sailing, windsurfing, diving, or SUP – it's all about sun,
                    waves, and endless water fun.
                    <br />
                    <Link
                      href="/camp-profiles/climbing"
                      target="_blank"
                      rel="noopener"
                    >
                      Climbing Camp:
                    </Link>{" "}
                    Big climbs, high ropes, and our legendary climbing park –
                    with experienced guides, you'll find out what you're truly
                    capable of.
                    <br />
                    <Link
                      href="/camp-profiles/horseback-riding"
                      target="_blank"
                      rel="noopener"
                    >
                      Riding Camp:
                    </Link>{" "}
                    For all horse lovers – from grooming and care to riding
                    technique. Intensive, warm-hearted, and full of horse
                    passion.
                    <br />
                    <Link
                      href="/camp-profiles/husky-camp"
                      target="_blank"
                      rel="noopener"
                    >
                      Husky Camp:
                    </Link>{" "}
                    Connection, trust, and responsibility – experience pure
                    energy side by side with our huskies. Action, mindfulness,
                    and teamwork combined.
                    <br />
                    <Link
                      href="/camp-profiles/senior-plus-leadership"
                      target="_blank"
                      rel="noopener"
                    >
                      Leadership Camp
                    </Link>
                    <strong>:</strong> For teens ready to grow beyond themselves
                    – with team challenges, communication training, and a
                    wilderness hike that'll definitely push you out of your
                    comfort zone.
                  </p>
                  <p>
                    And if you don't choose a specialty camp? No worries! Every
                    Go and Grow program includes our signature mix of{" "}
                    <Link
                      href="/camp-profiles/adventure-sports-creative"
                      target="_blank"
                      rel="noopener"
                    >
                      adventure, sports, and creativity
                    </Link>{" "}
                    – designed to spark movement, imagination, and team spirit
                    for every age and interest.
                  </p>
                  <p>
                    Because at Go and Grow, one thing's always true: no matter
                    what you choose, you'll discover new things, build
                    friendships, and make memories that last a lifetime.
                  </p>
                  <p>
                    <strong>Find your specialty camp:</strong>
                    <br />→ Football, watersports, horseback riding, huskies,
                    climbing, or leadership –
                    <Link href="/camp-profiles" target="_blank" rel="noopener">
                      your adventure is waiting!
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Language camps & adventure trips section */}
      <div className="uk-section-default uk-section uk-section-xsmall uk-padding-remove-bottom">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-grid-item-match uk-width-1-1">
              <div className="uk-card-default uk-card uk-card-body">
                <h3 className="uk-heading-bullet !text-[1.67vw] !font-semibold">
                  Language camps & adventure trips | Go and Grow
                </h3>
                <div className="uk-panel uk-margin">
                  <p>
                    At Go and Grow, language isn't just taught – it's lived. We
                    go beyond vocabulary and grammar to focus on real-life
                    communication, culture, and adventure – true Learning by
                    Living.
                  </p>
                  <p>
                    Our language programs take place in Germany, England, and
                    Spain – for all ages and levels. Whether you're just
                    starting with English or preparing for the TOEFL®, we'll
                    help you grow from where you are.
                  </p>
                  <p>
                    Language is more than grammar drills. Our native-speaking
                    teamers take you out of the classroom and into real
                    experiences: playing football in English, exploring cities
                    in Spanish, connecting with locals – that's how your
                    language holiday becomes a true adventure trip.
                  </p>
                  <p>
                    In{" "}
                    <Link
                      href="/destinations/en-england-bath-university"
                      target="_blank"
                      rel="noopener"
                    >
                      Bath
                    </Link>{" "}
                    and Cornwall, you'll enjoy multi-day excursions to London.
                    In{" "}
                    <Link
                      href="/destinations/en-spain-barcelona"
                      target="_blank"
                      rel="noopener"
                    >
                      Barcelona
                    </Link>
                    , you're right in the heart of the city. And our German
                    locations are hand-picked to feel just as adventurous.
                  </p>
                  <p>
                    <strong>Program overview:</strong>
                    <br />•{" "}
                    <Link
                      href="/camp-profiles/englischcamps"
                      target="_blank"
                      rel="noopener"
                    >
                      English Classic
                    </Link>{" "}
                    – practical, everyday English with native coaches
                    <br />•{" "}
                    <Link
                      href="/camp-profiles/german-camps"
                      target="_blank"
                      rel="noopener"
                    >
                      German Classic
                    </Link>{" "}
                    – hands-on learning for beginners & advanced learners
                    <br />•{" "}
                    <Link
                      href="/camp-profiles/spanishcourse"
                      target="_blank"
                      rel="noopener"
                    >
                      Spanish Classic
                    </Link>{" "}
                    – experience language, sunshine, and culture
                    <br />•{" "}
                    <Link
                      href="/camp-profiles/englisch-toefl"
                      target="_blank"
                      rel="noopener"
                    >
                      TOEFL® Course
                    </Link>{" "}
                    – focused exam preparation with intensive training
                  </p>
                  <p>
                    <strong>Find your language camp:</strong>
                    <br />→
                    <Link
                      href="/camp-profiles/language-camps"
                      target="_blank"
                      rel="noopener"
                    >
                      English, Spanish, or German
                    </Link>{" "}
                    – in Germany, England, or Spain. Language, culture,
                    adventure – all in one camp experience!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* School trips & group travel section */}
      <div className="uk-section-default uk-section uk-section-xsmall uk-padding-remove-bottom">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-grid-item-match uk-width-1-1">
              <div className="uk-card-default uk-card uk-card-body">
                <h3 className="uk-heading-bullet !text-[1.67vw] !font-semibold">
                  School trips & group travel with Go and Grow
                </h3>
                <div className="uk-panel uk-margin">
                  <p>
                    Whether it's a school trip, group travel, or project days –
                    at Go and Grow, students aged 7 to 17 experience
                    unforgettable days full of teamwork, outdoor fun, and
                    international spirit.
                  </p>
                  <p>
                    Our proven camp concept is perfectly tailored for school
                    groups:
                  </p>
                  <p>
                    • <strong>Age-appropriate programs</strong>, clear daily
                    routines, and diverse activities help every class grow
                    closer together.
                    <br />• Whether it's{" "}
                    <strong>
                      outdoor challenges, creative workshops, or teambuilding
                      programs
                    </strong>{" "}
                    – at Camp Adventure, it's all about connection and
                    collaboration.
                    <br />• Teachers can relax: our internationally trained
                    teamers take care of supervision and educational guidance,
                    building confidence and strengthening group bonds.
                  </p>
                  <p>
                    That's how every school trip becomes a true adventure
                    journey – combining community, exploration, and learning.
                  </p>
                  <p>
                    Our locations in{" "}
                    <strong>Germany, England, and Spain</strong> offer the
                    perfect setting: spacious outdoor areas, a wide range of
                    activities, modern facilities, and plenty of room for real
                    camp life.
                  </p>
                  <p>
                    We also welcome <strong>international schools</strong>!
                    Together, we create learning spaces where cultures,
                    languages, and perspectives meet.
                    <br />
                    Openness and global exchange are part of our DNA – here, the
                    world becomes tangible on a small scale: kids and teens from
                    over 70 nations come together, learn from one another, and
                    discover what global community truly means.
                  </p>
                  <p>
                    <strong>Ready for an extraordinary school trip?</strong>
                    <br />→{" "}
                    <Link href="/schooltrips" target="_blank" rel="noopener">
                      Learn more about our group programs
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Family weekends & parent-child camps section */}
      <div className="uk-section-default uk-section uk-section-xsmall">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-grid-item-match uk-width-1-1">
              <div className="uk-card-default uk-card uk-card-body">
                <h3 className="uk-heading-bullet !text-[1.67vw] !font-semibold">
                  Family weekends & parent-child camps at Go and Grow
                </h3>
                <div className="uk-panel uk-margin">
                  <p>
                    Real camp life – this time, together!
                    <br />
                    At our family weekends, you'll enjoy three days full of
                    adventure, campfires, nature, and connection. Whether it's
                    canoeing, climbing, swimming, stand-up paddling, or archery
                    – a fun-filled program awaits you from morning till night.
                  </p>
                  <p>
                    The best part? You don't have to plan a thing!
                    Accommodation, meals, and activities are all included – true
                    to the Go and Grow motto: arrive, relax, experience.
                  </p>
                  <p>
                    Our international teamers create the perfect camp vibe,
                    guide you through every activity, and make sure it all feels
                    like a real vacation.
                    <br />
                    Ideal for families who want to get a taste of camp life,
                    spend quality time together, and share that unique Go and
                    Grow feeling with their kids.
                  </p>
                  <p>
                    Tip: We also offer <strong>father-child camps</strong> –
                    perfect for creating lasting memories and sharing
                    unforgettable adventures together.
                  </p>
                  <p>
                    → Find your date &{" "}
                    <Link
                      href="/info/family-weekend"
                      target="_blank"
                      rel="noopener"
                    >
                      book your family weekend
                    </Link>
                    <br />→ Experience nature, adventure & togetherness – as a
                    family
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Book your Holidaycamp CTA section */}
      <div className="uk-section-default uk-section-overlap uk-section uk-padding-remove-top">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-grid-item-match uk-width-1-1">
              <div className="uk-card-default uk-card uk-card-body">
                <div className="uk-panel uk-text-emphasis uk-margin">
                  <p>
                    Some holidays you forget. Others change you. At Go and Grow,
                    you grow beyond yourself, discover new languages, cultures,
                    and friends for life.
                    <br />
                    So – what's stopping you? Your next adventure is already
                    waiting.
                  </p>
                </div>
                <div className="uk-blend-difference uk-margin uk-text-center">
                  <Link
                    className="el-content uk-button uk-button-default"
                    href="/booking"
                  >
                    Book your Holidaycamp
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* We love Camp section */}
      <div
        className="uk-section-muted uk-section-overlap uk-section"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-grid-medium uk-child-width-1-1 uk-grid-margin-medium">
            <div className="uk-grid-item-match uk-flex-middle uk-width-1-1@m">
              <div className="uk-panel uk-width-1-1">
                <h4 className="uk-h2 uk-text-center !text-[2.22vw] !font-bold" uk-scrollspy-class="">
                  <p>We love Camp</p>
                </h4>
                <div
                  className="uk-divider-icon uk-width-medium uk-margin-auto"
                  uk-scrollspy-class=""
                ></div>
              </div>
            </div>
          </div>
          <div
            className="uk-grid tm-grid-expand uk-grid-large uk-grid-margin-large"
            uk-grid=""
          >
            <div className="uk-width-expand@m">
              <div
                className="uk-panel uk-margin-remove-first-child uk-margin-large uk-text-center@m uk-text-center"
                uk-scrollspy-class=""
              >
                <h3 className="el-title uk-h3 uk-margin-top uk-margin-remove-bottom !text-[1.67vw] !font-semibold">
                  Internationality
                </h3>
                <div className="el-content uk-panel uk-margin-top !text-black">
                  <p>&nbsp;participants from more than 70 countries</p>
                </div>
              </div>
              <div
                className="uk-panel uk-margin-remove-first-child uk-margin-large uk-text-center@m uk-text-center"
                uk-scrollspy-class=""
              >
                <h3 className="el-title uk-h3 uk-margin-top uk-margin-remove-bottom !text-[1.67vw] !font-semibold">
                  Outdoors
                </h3>
                <div className="el-content uk-panel uk-margin-top !text-black">
                  <p>feel the real nature in the best surroundings</p>
                </div>
              </div>
            </div>
            <div className="uk-width-medium@m">
              <div className="uk-margin uk-text-center" uk-scrollspy-class="">
                <Image
                  src={getTemplateImageUrl(
                    "yootheme/logo/logo.png"
                  )}
                  width={640}
                  height={629}
                  className="el-image"
                  alt="Go and Grow"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="uk-width-expand@m">
              <div
                className="uk-panel uk-margin-remove-first-child uk-margin-large uk-text-center@m uk-text-center"
                uk-scrollspy-class=""
              >
                <h3 className="el-title uk-h3 uk-margin-top uk-margin-remove-bottom !text-[1.67vw] !font-semibold">
                  Friendship
                </h3>
                <div className="el-content uk-panel uk-margin-top !text-black">
                  <p>make friends from all over the world</p>
                </div>
              </div>
              <div
                className="uk-panel uk-margin-remove-first-child uk-margin-large uk-text-center@m uk-text-center"
                uk-scrollspy-class=""
              >
                <h3 className="el-title uk-h3 uk-margin-top uk-margin-remove-bottom !text-[1.67vw] !font-semibold">
                  Challenge
                </h3>
                <div className="el-content uk-panel uk-margin-top !text-black">
                  <p>leave your comfort zone, challenge yourself</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Join the Go and Grow team section */}
      <div className="uk-section-default uk-section">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-grid-item-match uk-width-1-1">
              <div className="uk-card-default uk-card uk-card-body">
                <h3 className="uk-heading-bullet !text-[1.67vw] !font-semibold">Join the Go and Grow team</h3>
                <div className="uk-panel uk-margin">
                  <p>
                    Since the very beginning, Go and Grow has stood for
                    openness, diversity, and community – within our team, too!
                    <br />
                    People from all over the world work with us and grow with
                    every season.
                  </p>
                  <p>
                    We train our teamers ourselves – directly within the
                    organization.
                    <br />
                    Our training follows Go and Grow's high standards in
                    experiential education and is personally guided by founder
                    Jan Vieth and our experienced trainers.
                    <br />
                    That's how we get to know every single teamer and build the
                    trust that makes our camps so special.
                  </p>
                  <p>
                    Whether as a <strong>counselor</strong>,{" "}
                    <strong>camp leader</strong>, or <strong>trainer</strong>,
                    you'll grow with us – take on responsibility, gain
                    experience, and inspire kids from around the world.
                  </p>
                  <p>
                    Grow with us – in the team, at camp, and in life.
                    <br />→{" "}
                    <Link href="/academy" target="_blank" rel="noopener">
                      Learn more about our training programs
                    </Link>
                    <br />→{" "}
                    <Link
                      href="/academy/jobs#application"
                      target="_blank"
                      rel="noopener"
                    >
                      Apply now and become part of the Camp Adventure family
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partnerships & memberships section */}
      <div
        className="uk-section-default uk-section-overlap uk-position-relative"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-scale-up; delay: false;"
      >
        <div
          data-src={getTemplateImageUrl(
            "yootheme/cache/d1/background_campground-d13d89db.jpeg"
          )}
          uk-img=""
          className="uk-background-norepeat uk-background-contain uk-background-bottom-center uk-section uk-section-small"
          style={{
            backgroundImage: `url(${getTemplateImageUrl(
              "yootheme/cache/d1/background_campground-d13d89db.jpeg"
            )})`,
            backgroundSize: "contain",
            backgroundPosition: "bottom center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className="uk-position-cover"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.87)" }}
          ></div>

          <div className="uk-container uk-container-large uk-position-relative">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-margin-large">
              <div className="uk-width-1-1@m">
                <div
                  className="uk-h5 uk-margin-small uk-text-center !text-[1.67vw] !font-semibold "
                  uk-scrollspy-class="uk-animation-slide-top-medium"
                >
                  Go and Grow
                </div>
                <h2
                  className="uk-h1 uk-margin-small uk-text-center !text-[5vw] !font-bold"
                  uk-scrollspy-class="uk-animation-slide-bottom-medium"
                >
                  <p>Partnerships & memberships</p>
                </h2>
                <div
                  className="uk-divider-icon uk-width-medium uk-margin-auto"
                  uk-scrollspy-class=""
                ></div>
              </div>
            </div>
            <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
              <div className="uk-width-1-1@m">
                <div className="uk-margin uk-text-center">
                  <div
                    className="uk-grid uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-3@l uk-grid-collapse uk-grid-match"
                    uk-grid=""
                  >
                    <div>
                      <div
                        className="el-item uk-flex uk-flex-column"
                        uk-scrollspy-class=""
                      >
                        <a
                          className="uk-flex-1 uk-card uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle"
                          href="https://simsswiss.ch/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Image
                            src={getTemplateImageUrl("yootheme/logo/sims.jpg")}
                            width={120}
                            height={120}
                            alt="Sims"
                            loading="lazy"
                            className="el-image"
                            style={{ display: "block", margin: "0 auto" }}
                          />
                        </a>
                      </div>
                    </div>
                    <div>
                      <div
                        className="el-item uk-flex uk-flex-column"
                        uk-scrollspy-class=""
                      >
                        <a
                          className="uk-flex-1 uk-card uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle"
                          href="#"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/logo/terranova.png"
                            )}
                            width={178}
                            height={120}
                            alt="Terra Nova"
                            loading="lazy"
                            className="el-image"
                            style={{ display: "block", margin: "0 auto" }}
                          />
                        </a>
                      </div>
                    </div>
                    <div>
                      <div
                        className="el-item uk-flex uk-flex-column"
                        uk-scrollspy-class=""
                      >
                        <a
                          className="uk-flex-1 uk-card uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle"
                          href="#"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Image
                            src={getTemplateImageUrl("yootheme/logo/lrn.png")}
                            width={120}
                            height={120}
                            alt="LRN"
                            loading="lazy"
                            className="el-image"
                            style={{ display: "block", margin: "0 auto" }}
                          />
                        </a>
                      </div>
                    </div>
                    <div>
                      <div
                        className="el-item uk-flex uk-flex-column"
                        uk-scrollspy-class=""
                      >
                        <a
                          className="uk-flex-1 uk-card uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle"
                          href="#"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/logo/salazar.jpg"
                            )}
                            width={112}
                            height={120}
                            alt="Salazar"
                            loading="lazy"
                            className="el-image"
                            style={{ display: "block", margin: "0 auto" }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  
  );
}
