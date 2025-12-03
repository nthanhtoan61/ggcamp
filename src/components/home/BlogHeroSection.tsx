"use client";

import Link from "next/link";
import { useState } from "react";

export default function BlogHeroSection() {
  const [hovered, setHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  return (
    <div className="py-8 md:py-[6vh]">
      <div className="px-6 md:px-[10vw] mx-auto">
        <div className="uk-text-center">
          <p className="inline-flex items-center gap-2 md:gap-[0.5vw] !text-[var(--color-primary)] text-xl md:text-[1.7vw] !font-bold mb-6 md:mb-[4vh] !tracking-wider uppercase leading-none">
            <img
              src="https://demo.awaikenthemes.com/wildex/wp-content/themes/wildex/assets/images/icon-sub-heading.svg"
              alt="icon"
              className="w-6 h-6 md:w-[2vw] md:h-[2vw] object-contain flex-shrink-0"
            />
            Your next step
          </p>
          <div className="text-2xl md:text-[2.5vw] !font-bold text-gray-900 mb-4 md:mb-[2vh] !mt-0 leading-tight">
            Read Every News & Blog
          </div>
          <p className="text-lg md:text-[1vw] text-gray-600 mb-2 md:mb-[1vh]">
            Our approach combines creativity and strategy to meet your goals.
          </p>
          <p className="text-lg md:text-[1vw] text-gray-600 mb-4 md:mb-[2vh]">
            We emphasize responsiveness and personalized service.
          </p>

          <Link href="/booking">
            <button
              className="relative overflow-hidden rounded-full px-6 md:px-[2vw] py-3 md:py-[1.5vh] font-bold bg-[var(--color-primary)] hover:bg-[#b8b76a] text-black text-base md:text-[1vw] mt-4 md:mt-[2vh] transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-1"
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
              <span className="relative z-10 flex items-center gap-2 md:gap-[0.5vw] transition-colors duration-300">
                Explore Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="currentColor"
                  className="w-4 h-4 md:w-[1.2vw] md:h-[1.2vw] transition-transform duration-500"
                  style={{
                    transform: hovered ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.1103 5.37457C13.5933 6.89163 10.771 6.83466 9.19008 5.25375L8.5419 4.60556L7.29739 5.85007L7.94557 6.49825C9.09544 7.64813 10.6581 8.24259 12.21 8.2749L4.53199 15.9529L5.82836 17.2493L13.5063 9.57126C13.5387 11.1231 14.1331 12.6858 15.283 13.8357L15.9312 14.4839L17.1757 13.2393L16.5275 12.5912C14.9466 11.0103 14.8896 8.18799 16.4067 6.67094L17.0289 6.04868L15.7326 4.75232L15.1103 5.37457Z"
                  />
                </svg>
              </span>

              <span
                className="absolute w-5 h-5 bg-white rounded-full pointer-events-none z-[5] transition-all duration-500 ease-out"
                style={{
                  left: coords.x,
                  top: coords.y,
                  transform: hovered
                    ? "translate(-50%, -50%) scale(20)"
                    : "translate(-50%, -50%) scale(0)",
                  opacity: hovered ? 1 : 0,
                }}
              ></span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
