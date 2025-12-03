"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { getTemplateImageUrl } from "@/lib/assets";

interface ProgramCardProps {
  id: string;
  title: string;
  price: string;
  seasons: string[];
  age: string;
  location: string;
  image: string;
  slug: string;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  price,
  seasons,
  age,
  location,
  image,
  slug,
}) => {
  const [hovered, setHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  return (
    <div className="el-item uk-grid-item-match">
      <div className="uk-card uk-card-default uk-card-small uk-card-hover">
        <Link href={`/camp-profiles/${slug}`}>
          <div className="uk-card-media-top">
            <Image
              src={getTemplateImageUrl(image)}
              width={1920}
              height={1275}
              alt={`Camp Profile - ${title}`}
              className="el-image"
              loading="lazy"
            />
          </div>
        </Link>
        <div className="uk-card-body uk-margin-remove-first-child !pd-1vw">
          <Link href={`/camp-profiles/${slug}`} className="!no-underline">
            <div className="el-title uk-h3 uk-heading-bullet !text-2xl  !md:text-[2.5vw] uk-margin-top uk-margin-remove-bottom hover:!text-[var(--color-primary)] transition-colors duration-300">
              {title}
            </div>
          </Link>
          {price !== "0" && (
            <div className="el-meta uk-margin-top text-black">
              from {price} USD
            </div>
          )}
          <div className="el-content uk-panel uk-margin-top">
            <ul className="uk-list uk-list-divider text-black">
              <li>
                <span className="uk-margin-small-right" uk-icon="clock"></span>
                {seasons.join(", ")}
              </li>
              <li>
                <span className="uk-margin-small-right" uk-icon="user"></span>
                {age}
              </li>
              <li>
                <span
                  className="uk-margin-small-right"
                  uk-icon="location"
                ></span>
                {location}
              </li>
            </ul>
          </div>
          <div className="uk-margin-top">
            <Link href={`/camp-profiles/${slug}`}>
              <button
                className="relative overflow-hidden rounded-full px-4 md:px-[1.5vw] py-2 md:py-[2vh] font-semibold bg-[var(--color-primary)] hover:bg-[#b8b76a] text-black text-lg md:text-[0.85vw] transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5 mx-auto"
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
                <span className="relative z-10 flex items-center justify-center gap-2 md:gap-[0.5vw] transition-colors duration-300">
                  Camp Details
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
    </div>
  );
};
