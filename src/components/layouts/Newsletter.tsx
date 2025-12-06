"use client";

import React from "react";
import Image from "next/image";
import {getTemplateImageUrl} from "@/lib/assets";

type NewsletterProps = {
  imagePath?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  className?: string;
  onSubscribe?: (email: string) => void;
};

export default function Newsletter({
  imagePath = "yootheme/banner/b10.jpg",
  title = "Stay Updated with Our Monthly",
  description = "Sign up to receive the latest news about new camps, activities, and exciting opportunities. Don’t miss out on anything fun!",
  buttonText = "Subscribe",
  className = "",
  onSubscribe,
}: NewsletterProps) {
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubscribe) onSubscribe(email);
    setEmail("");
  };

  return (
    <section className={`overflow-hidden ${className}`}>
      <div className="py-[8vh] bg-[#fbf8f0] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-[4vw] relative z-10">
          {/* LEFT: image with play button */}
          <div className="md:w-1/2 w-full relative md:h-[45vh] h-[35vh] rounded-[1.25vw] overflow-hidden bg-white">
            <div className="absolute inset-[0.3vw] rounded-[calc(1.25vw-0.3vw)] overflow-hidden md:rounded-[calc(1.25vw-0.3vw)]">
              <Image
                src={getTemplateImageUrl(imagePath)}
                alt="Newsletter image"
                fill
                className="object-cover"
              />
            </div>

            {/* circular play button (decorative) */}
            <button
              type="button"
              className="absolute left-[45%] top-1/2 -translate-y-1/2 bg-white rounded-full p-[0.8vw] shadow-lg z-20 flex items-center justify-center"
              aria-hidden="true"
            >
              <div className="w-[3.2vw] h-[3.2vw] bg-transparent rounded-full flex items-center justify-center">
                <div className="w-[2.2vw] h-[2.2vw] bg-[#f3f3f3] rounded-full flex items-center justify-center shadow-inner">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="1.2vw"
                    height="1.2vw"
                    fill="#214a28"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </button>
          </div>

          {/* RIGHT: newsletter content */}
          <div className="px-5 md:w-1/2 w-full mt-6 md:mt-0">
            <h2 className="text-lg! lg:text-[1.7vw]! text-[#274423] font-bold! leading-[1.05] mb-[1.5vh]">
              {title} <br />
              <span
                className="inline-block bg-no-repeat bg-contain bg-left pb-[2vh]"
                style={{
                  backgroundImage: `url(${getTemplateImageUrl(
                    "yootheme/vendor/assets/uikit-themes/master-fjord/images/footer-shape.png"
                  )})`,
                  backgroundPosition: "bottom",
                }}
              >
                Newsletter
              </span>
            </h2>

            <div className="mb-[2vh]">
              <p className="text-base md:text-[1vw] text-gray-600">
                {description}
              </p>
            </div>

            <form
              className="flex items-center max-w-full md:max-w-[28vw] shadow-sm rounded-full"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                aria-label="Email address"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 py-[1.5vh] px-[1.5vw] rounded-l-[0.8vw] border border-gray-200 bg-white focus:outline-none text-base md:text-[0.9vw]"
                suppressHydrationWarning
              />
              <button
                type="submit"
                className="bg-primary text-white px-[3vw] py-[1.5vh] rounded-lg shadow hover:bg-[#238a56] hover:shadow-xl hover:scale-105 transform transition-all duration-300 flex items-center gap-[0.5vw] text-base md:text-[0.9vw] relative overflow-hidden group"
              >
                <span>{buttonText}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1.2vw"
                  height="1.2vw"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
