"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { getTemplateImageUrl } from "@/lib/assets";
import { useScrollTrigger } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagicButton from "./MagicButton";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function AboutSection() {
  const [hovered, setHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [count, setCount] = useState(0);
  const countedRef = useRef(false);

  const avatars = [
    "yootheme/aboutImage/profile-face_1.jpg",
    "yootheme/aboutImage/young-tourist-sitting-tent.jpg",
    "yootheme/aboutImage/portrait-young-male-tourist-standing-forest-with-tent.jpg",
  ];

  // Refs for scroll-triggered animations
  const ref = useRef<HTMLDivElement>(null);

  const aboutUsTitleRef = useRef<HTMLHeadingElement>(null);
  const creatingCampsTitleRef = useRef<HTMLHeadingElement>(null);
  const descriptionTextRef = useRef<HTMLParagraphElement>(null);
  const iconListRef = useRef<HTMLUListElement>(null);
  const quoteTextRef = useRef<HTMLParagraphElement>(null);
  const learnMoreButtonRef = useRef<HTMLButtonElement>(null);

  const mainImage1Ref = useRef<HTMLDivElement>(null);
  const mainImage2Ref = useRef<HTMLDivElement>(null);
  const extraImageRef = useRef<HTMLDivElement>(null);

  const authorImagesRef = useRef<HTMLDivElement>(null);
  const adventurerTextRef = useRef<HTMLParagraphElement>(null);

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
              const current = Math.min(
                Math.floor((progress / duration) * target),
                target
              );
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

  // GSAP Animations
  useEffect(() => {
    // Animate main images with stagger
    gsap.fromTo(
      ".about-main-img",
      {
        opacity: 0,
        y: 50,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-main-img",
          start: "top 80%",
          toggleActions: "play none none reverse",
          once: true,
        },
      }
    );

    // Animate small images on right
    gsap.fromTo(
      [".about-small-img", ".about-extra-img"],
      {
        opacity: 0,
        x: 50,
        rotation: 5,
      },
      {
        opacity: 1,
        x: 0,
        rotation: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: ".about-small-img",
          start: "top 80%",
          toggleActions: "play none none reverse",
          once: true,
        },
      }
    );

    // Animate author group
    gsap.fromTo(
      ".about-author-group",
      {
        opacity: 0,
        y: 30,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: ".about-author-group",
          start: "top 85%",
          toggleActions: "play none none reverse",
          once: true,
        },
      }
    );

    // Animate About Us title
    gsap.fromTo(
      ".about-title",
      {
        opacity: 0,
        x: -30,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-title",
          start: "top 80%",
          toggleActions: "play none none reverse",
          once: true,
        },
      }
    );

    // Animate subtitle with letter-by-letter effect (left to right)
    const subtitleText = document.querySelector(".about-subtitle");
    if (subtitleText) {
      const text = subtitleText.textContent || "";
      subtitleText.innerHTML = text
        .split("")
        .map(
          (char) =>
            `<span class="char">${char === " " ? "&nbsp;" : char}</span>`
        )
        .join("");

      gsap.fromTo(
        ".about-subtitle .char",
        {
          opacity: 0,
          x: -20,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.05,
          stagger: 0.03,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-subtitle",
            start: "top 80%",
            toggleActions: "play none none reverse",
            once: true,
          },
        }
      );
    }

    // Animate description with word-by-word effect (left to right)
    const descriptionText = document.querySelector(".about-description");
    if (descriptionText) {
      const text = descriptionText.textContent || "";
      descriptionText.innerHTML = text
        .split(" ")
        .map(
          (word) =>
            `<span class="word" style="display: inline-block;">${word}</span>`
        )
        .join(" ");

      gsap.fromTo(
        ".about-description .word",
        {
          opacity: 0,
          x: -15,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.3,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-description",
            start: "top 80%",
            toggleActions: "play none none reverse",
            once: true,
          },
        }
      );
    }

    // Animate icon list items
    gsap.fromTo(
      ".about-icon-list li",
      {
        opacity: 0,
        x: -20,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-icon-list",
          start: "top 80%",
          toggleActions: "play none none reverse",
          once: true,
        },
      }
    );

    // Animate quote and button
    gsap.fromTo(
      [".about-quote", ".about-button"],
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-quote",
          start: "top 85%",
          toggleActions: "play none none reverse",
          once: true,
        },
      }
    );

    // Hover animation for images
    const images = document.querySelectorAll(".about-main-img");
    images.forEach((img) => {
      img.addEventListener("mouseenter", () => {
        gsap.to(img, {
          scale: 1.05,
          rotation: 2,
          duration: 0.4,
          ease: "power2.out",
        });
      });
      img.addEventListener("mouseleave", () => {
        gsap.to(img, {
          scale: 1,
          rotation: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative w-full bg-gray-50 py-[10vh]">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-[2vw] max-sm:gap-[4vw] px-[5vw] max-sm:px-[4vw] w-full max-w-[90%] max-sm:max-w-full">
        {/* Left Container - Contains 2 sub-containers */}
        <div className="relative flex-1 flex flex-row max-sm:flex-col gap-[1.25vw] max-sm:gap-[3vw] items-start max-sm:w-full">
          {/* Left Sub-Container: Main Images + Author Counter */}
          <div className="flex flex-col gap-[1.25vw] max-sm:gap-[3vw] w-fit max-sm:w-full">
            {/* Main Image */}
            <div
              ref={mainImage1Ref}
              className="about-main-img relative !w-[22vw] !h-[28vw] max-sm:!w-full max-sm:!h-[50vh] overflow-hidden rounded-xl max-sm:rounded-[2vw] shadow-lg cursor-pointer group"
            >
              <img
                src={getTemplateImageUrl("yootheme/aboutImage/about-image-1-royal.jpg")}
                alt="About Image"
                className="absolute inset-0 w-full h-full object-contain"
              />
              {/* Shiny Glass Effect */}
              <div className="absolute top-1/2 left-1/2 w-[200%] h-0 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white/30 z-20 pointer-events-none group-hover:transition-all group-hover:duration-600 group-hover:ease-linear group-hover:h-[250%] group-hover:bg-transparent" />
            </div>

            {/* Small Author Images + Counter */}
            <div className="flex items-center gap-[0.5vw] max-sm:gap-[1.5vw] about-author-group bg-[var(--color-primary)] p-[0.5vw] max-sm:p-[2vw] rounded-lg max-sm:rounded-[2vw] shadow-md w-[22vw] max-sm:w-full mt-[0.75vw] max-sm:mt-0">
              <div ref={authorImagesRef} className="flex items-center">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={getTemplateImageUrl(src)}
                    alt={`Author ${i + 1}`}
                    style={{
                      animationDelay: `${i * 300}ms`,
                      aspectRatio: "1/1",
                    }}
                    className="w-[2.5vw] h-[2.5vw] max-sm:w-[8vw] max-sm:h-[8vw] rounded-full border-2 border-white shadow-md -mr-[0.5vw] max-sm:-mr-[2vw] object-cover opacity-0 animate-fadeUp transform transition-all duration-700 hover:scale-105 flex-shrink-0"
                  />
                ))}

                {/* Count Circle */}
                <div
                  ref={circleRef}
                  className="!w-[2.5vw] !h-[2.5vw] max-sm:w-[8vw] max-sm:h-[8vw] flex items-center justify-center rounded-full bg-white text-[#cbca7b] font-bold opacity-0 animate-fadeUp flex-shrink-0"
                  style={{ animationDelay: "1000ms" }}
                >
                  <span className="text-[0.8vw] max-sm:text-[2.5vw] font-bold">
                    {count}
                  </span>
                  <span className="text-[0.6vw] max-sm:text-[2vw]">+</span>
                </div>
              </div>

              <p
                ref={adventurerTextRef}
                className="text-[1vw] max-sm:text-[3.5vw] !ml-[0.5vw] max-sm:!ml-[1.5vw] !font-semibold !text-white font-semibold leading-tight !m-0"
              >
                Adventurer with
                <br />
                happy customer
              </p>
            </div>
          </div>

          {/* Right Sub-Container: Small Images */}
          <div className="flex flex-col gap-[1.25vw] max-sm:gap-[3vw] mt-[1vw] max-sm:mt-0 max-sm:w-full">

            {/* Extra Image on Right Corner */}
            <div
              ref={extraImageRef}
              className="about-extra-img !w-[20vw] !h-[26vw] max-sm:!w-full max-sm:!h-[50vh] rounded-xl max-sm:rounded-[2vw] overflow-hidden mt-[6.5vw] max-sm:mt-0"
            >
              <img
                src={getTemplateImageUrl(
                  "yootheme/aboutImage/about-image-2-royal.png"
                )}
                alt="Extra Corner Image"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col gap-[1vw] max-sm:gap-[2vw] max-sm:w-full max-sm:mt-[4vw]">
          <h3
            ref={aboutUsTitleRef}
            className="about-title !text-xl md:!text-[2vw] !text-[#cbca7b] !mb-[4vh] !font-bold uppercase tracking-wider m-0 max-sm:text-center"
          >
            About Us
          </h3>

          <h2
            ref={creatingCampsTitleRef}
            className="about-subtitle !text-[3vw] max-sm:!text-[6vw] !mb-[4vh] !font-bold max-sm:text-center"
          >
            Creating Amazing Camps
          </h2>

          <p
            ref={descriptionTextRef}
            className="about-description !text-[1vw] max-sm:!text-[3.5vw] text-gray-600 mt-[0.25vw] max-sm:mt-[1vw] max-w-[750px] max-sm:max-w-full text-left max-sm:text-center max-sm:leading-[1.5]"
          >
            Learning is closely tied to practical experience—summer is the
            perfect time for hands-on opportunities. While knowledge must still
            be nurtured, it can take on new and more engaging forms.
          </p>

          <hr className="border-t border-gray-300 my-[1.5vw] max-sm:my-[3vw] w-full" />

          <div className="flex flex-col md:flex-row mt-[0.75vw] max-sm:mt-[2vw] gap-[1vw] max-sm:gap-[4vw]">
            {/* Left: Icon List */}
            <ul
              ref={iconListRef}
              className="about-icon-list flex flex-col gap-[1vw] max-sm:gap-[3vw] flex-[0_0_67%] max-sm:flex-[0_0_100%] !p-0 !mr-[1vw] max-sm:!mr-0 list-none !m-0"
            >
              <li className="flex items-start max-sm:items-center gap-[0.75vw] max-sm:gap-[2vw] text-gray-700 text-[1vw] max-sm:text-[3.5vw] ">
                <div className="min-w-[1.5vw] w-[1.5vw] h-[1.5vw] max-sm:min-w-[5vw] max-sm:w-[5vw] max-sm:h-[5vw] rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white flex-shrink-0 mt-[0.1vw] max-sm:mt-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[1vw] h-[1vw] max-sm:w-[2vw] max-sm:h-[2vw]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                Fun-Filled Experiences for Every Camper
              </li>
              <li className="flex items-start max-sm:items-center gap-[0.75vw] max-sm:gap-[2vw] text-gray-700 text-[1vw] max-sm:text-[3.5vw]">
                <div className="min-w-[1.5vw] w-[1.5vw] h-[1.5vw] max-sm:min-w-[5vw] max-sm:w-[5vw] max-sm:h-[5vw] rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white flex-shrink-0 mt-[0.1vw] max-sm:mt-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[1vw] h-[1vw] max-sm:w-[2vw] max-sm:h-[2vw]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                Adventures That Inspire Confidence and Growth
              </li>
              <li className="flex items-start max-sm:items-center gap-[0.75vw] max-sm:gap-[2vw] text-gray-700 text-[1vw] max-sm:text-[3.5vw]">
                <div className="min-w-[1.5vw] w-[1.5vw] h-[1.5vw] max-sm:min-w-[5vw] max-sm:w-[5vw] max-sm:h-[5vw] rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white flex-shrink-0 mt-[0.1vw] max-sm:mt-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[1vw] h-[1vw] max-sm:w-[2vw] max-sm:h-[2vw]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                Memories and Friendships That Last a Lifetime
              </li>
            </ul>

            {/* Right: Text + Button */}
            <div className="flex flex-col justify-start max-sm:items-center flex-[0_0_auto] gap-0 max-w-xs max-sm:max-w-full min-w-0">
              <p
                ref={quoteTextRef}
                className="about-quote !font-semibold text-black text-[0.95rem] lg:text-[1.1rem] max-sm:text-[4vw] leading-[1.5] max-sm:text-center"
              >
                "Your Journey, Your Comfort,
                <br /> Your Adventure."
              </p>

              <MagicButton href="/info/about" label="Learn More About" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
