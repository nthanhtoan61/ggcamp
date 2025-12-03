"use client";

import React from "react";
import type {Metadata} from "next";
import Link from "next/link";
import Image from "next/image";
import {getTemplateImageUrl} from "@/lib/assets";
import Button from "@/app/info/about/_component/Button";
import Feature from "@/app/info/about/_component/Feature";
import StatCard from "@/app/info/about/_component/StatCard";
import ServiceBox from "@/app/info/about/_component/ServiceBox";
import EventCard from "@/app/info/about/_component/EventCard";
import Newsletter from "@/components/layouts/Newsletter";
import {HeroSection} from "@/components/layouts";

// Single page data object
const pageData = {
  stats: [
    {number: "2K+", description: "Smiles and Friendships Made"},
    {number: "25+", description: "Countries Connected"},
    {number: "50+", description: "Adventure & Skill-Building Activities"},
    {number: "20+", description: "Exciting Challenges Every Camp"},
  ],

  services: [
    {
      title: "Always Here",
      description:
        "Camp leaders are ready to guide and support you whenever needed.",
    },
    {
      title: "Fun & Learning",
      description:
        "Engage in exciting activities that help you grow new skills.",
    },
    {
      title: "Team Spirit",
      description:
        "Work together, take responsibility, and support each other at camp.",
    },
  ],

  features: [
    {
      title: "Safe Environment",
      description:
        "Safety is our top priority, with secure facilities and connecting with nature.",
      icon: "yootheme/aboutImage/act2.jpg",
    },
    {
      title: "Family Atmosphere",
      description:
        "Every camper is part of our big camp family, where friendships grow and everyone feels included.",
      icon: "yootheme/aboutImage/act2.jpg",
    },
    {
      title: "Cultural Exchange",
      description:
        "Experience diversity and learn about different cultures from campers around the world.",
      icon: "yootheme/aboutImage/act2.jpg",
    },
    {
      title: "Personal Growth",
      description:
        "Activities encourage confidence, independence, and learning through fun challenges.",
      icon: "yootheme/aboutImage/act2.jpg",
    },
    {
      title: "Creativity & Fun",
      description:
        "Express yourself through games, arts, and exciting hands-on experiences.",
      icon: "yootheme/aboutImage/act2.jpg",
    },
  ],

  events: [
    {
      imageUrl: "yootheme/aboutImage/act1.jpg",
      date: "September 19, 2022",
      title: "The Bottom Line on Dietary Supplements",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet tristique neque, in suscipit sem. Fusce ut tellus neque. Suspendisse ...",
      age: "Age Group: 10–14",
    },
    {
      imageUrl: "yootheme/aboutImage/act2.jpg",
      date: "September 19, 2022",
      title: "The Bottom Line on Dietary Supplements",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet tristique neque, in suscipit sem. Fusce ut tellus neque. Suspendisse ...",
      age: "Age Group: 10–14",
    },
    {
      imageUrl: "yootheme/aboutImage/act3.jpg",
      date: "September 19, 2022",
      title: "The Bottom Line on Dietary Supplements",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet tristique neque, in suscipit sem. Fusce ut tellus neque. Suspendisse ...",
      age: "Age Group: 10–14",
    },
  ],
};

export default function AboutPage() {
  // Add CSS animations
  React.useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
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
      
      @keyframes slideInUp {
        from {
          opacity: 0;
          transform: translateY(50px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes breathe {
        0%, 100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.05);
        }
      }
      
      @keyframes shimmer {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(100%);
        }
      }
      
      .animate-shimmer {
        animation: shimmer 3s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Reusable image panel that opens a modal-like panel constrained to the image
  const ImagePanel = ({
    src,
    title,
    desc,
    className = "",
  }: {
    src: string;
    title: string;
    desc: string;
    className?: string;
  }) => {
    return (
      <div className={`relative ${className} group`}>
        {/* Hình ảnh background */}
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover rounded-[1vw]"
        />

        {/* Modal panel */}
        <div className="absolute inset-0 rounded-[1vw] z-30 pointer-events-none">
          <div
            className="
        relative
        
        h-[20vh]
        mt-[14vh] mb-[14vh]
        rounded-[2vw]
        bg-[#274218]/50
        backdrop-blur-[0.5vw]
        overflow-visible
        mx-[1.5vw]
        w-0
        opacity-0
        transition-all duration-500 ease-out
        group-hover:w-[calc(100%-3vw)]
        group-hover:opacity-100
        pointer-events-auto
      "
          >
            {/* Nội dung modal */}
            <div className="relative p-[2vw] h-full flex flex-col justify-center z-20">
              <p className="text-[1.677vw] text-white! opacity-0 transform -translate-x-[2vw] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-150">
                {title}
              </p>
              <p className="text-[1vw] mt-[1vw] text-white! opacity-0 transform -translate-x-[2vw] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-300">
                {desc}
              </p>
            </div>

            {/* Button trượt từ trái qua cùng modal */}
            <button
              type="button"
              className="
          absolute 
          top-1/2 
          -translate-y-[18vh]
          right-0
          bg-white 
          text-[#274218] 
          rounded-full 
          p-[0.8vw] 
          shadow-lg 
          opacity-0 
          transform -translate-x-[3vw] 
          group-hover:translate-x-0 group-hover:opacity-100
          transition-all duration-500 delay-0
          z-50
          pointer-events-auto
        "
              aria-label="Open details"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1.5vw"
                height="1.5vw"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  };
  // #E9A919
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="About Us"
        backgroundImage="yootheme/banner/b4.jpg"
        overlayColor="rgba(0, 0, 0, 0.35)"
        sectionClass="uk-section-primary"
        titleClass="uk-heading-large uk-text-center !text-[5vw]"
      />

      {/* Go & Grow Camp */}
      <section
        className="uk-section-default uk-section-overlap uk-section uk-section-small bg-cover bg-center animate-fade-in-up"
        style={{
          backgroundImage: `url(${getTemplateImageUrl(
            "yootheme/aboutImage/bg_about.jpg"
          )})`,
          animation: "fadeInUp 1s ease-out 0.2s both",
        }}
      >
        <div className="uk-container uk-container-large">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-[2vw] py-[10vh] w-full">
            {/* LEFT CONTENT */}
            <div className="lg:w-2/5 w-full">
              <p className="text-base md:text-[1vw] text-primary! font-medium mb-[1vw] md:leading-[1.6vw] leading-normal">
                Go & Grow Camp A Place to Learn, Connect, and Grow
              </p>

              <p className="text-base md:text-[1.458vw]">
                Go & Grow Camp brings together young people from different
                countries and cultures to enjoy fun activities, meaningful
                projects, and positive community experiences. Every camper—new
                or returning—quickly feels included thanks to our welcoming
                environment and supportive team.
              </p>

              <p className="text-base md:text-[1vw] text-gray-600 md:leading-[1.8vw] leading-normal mb-[2vw]">
                Camp is where real friendships begin. Many campers stay in touch
                long after the program ends, forming connections that cross
                borders and cultures. Parents often share that after camp, their
                children return more confident, independent, and motivated to
                improve their English so they can communicate even better the
                next time. The friendships and experiences at camp leave a
                lasting impact that goes far beyond the session itself.
              </p>

              <Button>Discover More</Button>
            </div>

            {/* CENTER IMAGE */}
            <div className="relative lg:w-2/5 w-full lg:h-[65vh] h-[40vh] rounded-[2vw] overflow-visible bg-white">
              {/* Image positioned inside to create a white border effect */}
              <div className="absolute inset-[6px] rounded-[calc(2vw-6px)] overflow-hidden">
                <Image
                  src={getTemplateImageUrl("yootheme/aboutImage/section2.jpg")}
                  alt="Cottage"
                  fill
                  className="object-cover"
                />
              </div>

              {/* --- PLAY BUTTON ASSEMBLY (cut into corner) --- */}
              <div className="absolute bottom-0 left-0 z-10 bg-white p-3 rounded-tr-3xl -translate-x-2 translate-y-2 lg:p-[1vw] lg:rounded-tr-4xl lg:-translate-x-[0.5vw] lg:translate-y-[1.3vh]">
                {/* 1) Main green play button (sits on top) */}
                <button
                  type="button"
                  aria-label="Play video"
                  className="relative z-20 flex items-center justify-center rounded-xl bg-[#214a28] shadow-lg cursor-pointer transition-transform hover:scale-110 h-12 w-12 lg:h-[6vh] lg:w-[3vw]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="1.2rem"
                    height="1.2rem"
                    fill="white"
                    aria-hidden="true"
                    className="w-6 h-6 lg:w-[1.5vw] lg:h-[1.5vw]"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="text-lg xl:text-md"></div>

            {/* RIGHT SIDE SERVICES */}
            <div className="lg:w-1/5 w-full h-full flex flex-col items-between justify-center gap-4 lg:gap-[1.5vw] lg:mt-0 mt-6">
              {pageData.services.map((service: any, index: number) => (
                <div
                  key={index}
                  className="rounded-[1rem] p-4 sm:p-2 transform transition-all duration-500 hover:scale-105 hover:rotate-1"
                  style={{
                    animation: `slideInRight 0.8s ease-out ${
                      0.3 + index * 0.2
                    }s both`,
                  }}
                >
                  <ServiceBox
                    bgColor="bg-[#f8f8f8]"
                    title={service.title}
                    description={service.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* number */}
      <section className="overflow-hidden">
        <div className="py-[5vh] w-full lg:px-[20vw] px-[4vw] flex flex-col lg:flex-row lg:justify-between items-center bg-primary text-white! gap-4 lg:gap-0">
          {pageData.stats.map((stat: any, index: number) => (
            <div
              key={index}
              className="transform transition-all duration-700 hover:scale-110 hover:-translate-y-2"
              style={{
                animation: `fadeInUp 0.8s ease-out ${
                  0.2 + index * 0.1
                }s both, breathe 3s ease-in-out ${index * 0.5}s infinite`,
              }}
            >
              <StatCard number={stat.number} description={stat.description} />
            </div>
          ))}
        </div>
      </section>

      {/* Safe Environment / Features */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${getTemplateImageUrl(
            "yootheme/aboutImage/bg_about.jpg"
          )})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent animate-pulse"></div>
        <div className="py-[10vh] w-full px-[5vw] relative z-10">
          {/* Header */}
          <div className="text-center max-w-[80vw] mx-auto flex flex-col items-center justify-center">
            <p className="text-primary! text-sm md:text-[1.5vw] leading-[1.2] mt-0 mb-[0.5vh]">
              Accommodation
            </p>

            <p className="text-lg md:text-[1.7vw] text-[#274423]! font-bold! leading-[1.05] mt-0 mb-[0.5vh]">
              Blending Comfort With Responsible Living
            </p>

            <p className="text-sm md:text-[1vw] text-gray-600 w-full md:w-[60vw] leading-[1.2] mt-0">
              Enjoy a tranquil atmosphere with beautiful views, modern
              facilities, and personal touches that make you feel at home.
            </p>
          </div>

          {/* Features grid */}
          <div className="mt-[5vh] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[5vw] sm:gap-[3vw]">
            {pageData.features
              .slice(0, 3)
              .map((feature: any, index: number) => (
                <div
                  key={index}
                  className="transform transition-all duration-700"
                  style={{
                    animation: `slideInUp 0.8s ease-out ${
                      0.3 + index * 0.2
                    }s both`,
                  }}
                >
                  <Feature
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                </div>
              ))}
          </div>

          {/* Features grid 2 */}
          <div className="mt-[5vh] grid grid-cols-1 sm:grid-cols-2 gap-[5vw] sm:gap-[3vw]">
            {pageData.features
              .slice(3, 5)
              .map((feature: any, index: number) => (
                <div
                  key={index + 3}
                  className="transform transition-all duration-700"
                  style={{
                    animation: `slideInUp 0.8s ease-out ${
                      0.9 + index * 0.2
                    }s both`,
                  }}
                >
                  <Feature
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                </div>
              ))}
          </div>
        </div>
      </section>

      <section>
        <div className="py-[10vh] w-full lg:px-[10vw] px-[4vw]">
          <div className="flex flex-col md:flex-row items-start justify-between py-[5vh]">
            {/* LEFT */}
            <div className="lg:w-2/3 w-full flex flex-col items-start justify-center space-y-[1vh]">
              <p className="text-xl text-primary!">Activities</p>
              <p className="text-black text-md! lg:text-[1.667vw] font-bold!">
                Enjoy unforgettable experiences at Go and Grow Camp
              </p>
              <p className="">
                Discover a world of adventure, creativity, and friendship. From
                exciting outdoor activities to hands-on workshops, every day is
                full of new experiences that help campers grow, have fun, and
                make memories that last a lifetime.
              </p>
            </div>

            {/* RIGHT */}
            <div className="lg:w-1/3 w-full flex justify-end lg:justify-end mt-4 md:mt-0">
              <Button className="px-8 py-3">View All</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ImagePanel
              src={getTemplateImageUrl("yootheme/aboutImage/act1.jpg")}
              title="Outdoor Adventures"
              desc="Climb, paddle and explore with our experienced team."
              className="md:col-span-2 col-span-1 h-[40vh]"
            />

            <ImagePanel
              src={getTemplateImageUrl("yootheme/aboutImage/act2.jpg")}
              title="Creative Workshops"
              desc="Arts & crafts sessions to spark imagination."
              className="col-span-1 h-[40vh]"
            />

            <ImagePanel
              src={getTemplateImageUrl("yootheme/aboutImage/act3.jpg")}
              title="Water Sports"
              desc="Safe swimming and supervised water activities."
              className="col-span-1 h-[40vh]"
            />

            <ImagePanel
              src={getTemplateImageUrl("yootheme/aboutImage/act4.jpg")}
              title="Campfire Nights"
              desc="Evening stories, music, and marshmallow roasting."
              className="md:col-span-2 col-span-1 h-[40vh]"
            />
          </div>
        </div>
      </section>

      <Newsletter />

      <section>
        <div className="py-[8vh] w-full lg:px-[15vw] px-[4vw]">
          <div className="flex items-center justify-between mb-[4vh] mx-[2vw]">
            <div>
              <h2 className="text-lg! md:text-[2vw]! font-bold text-[#274423]">
                Tour Events for you
              </h2>
              <div className="w-[7vw] h-[0.6vh] bg-primary! rounded-full -mt-[0.5vh]" />
            </div>

            <a
              href="#"
              className="text-primary! flex items-center gap-[0.5vw] text-xs! lg:text-[1vw]! translate-y-[6vh]"
            >
              See All Event
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="15px"
                height="15px"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[2vw] mx-[2vw]">
            {pageData.events.map((event: any, index: number) => (
              <div
                key={index}
                className="transform transition-all duration-700 hover:scale-105 hover:-translate-y-2 hover:shadow-xl"
                style={{
                  animation: `slideInUp 0.8s ease-out ${
                    0.3 + index * 0.2
                  }s both`,
                }}
              >
                <EventCard
                  imageUrl={event.imageUrl}
                  date={event.date}
                  title={event.title}
                  description={event.description}
                  age={event.age}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
