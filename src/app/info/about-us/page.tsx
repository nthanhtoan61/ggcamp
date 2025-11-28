"use client";

import type {Metadata} from "next";
import Link from "next/link";
import Image from "next/image";
import {getTemplateImageUrl} from "@/lib/assets";
import Button from "@/app/info/about/_component/Button";
import Feature from "@/app/info/about/_component/Feature";
import StatCard from "@/app/info/about/_component/StatCard";
import ServiceBox from "@/app/info/about/_component/ServiceBox";
import EventCard from "@/app/info/about/_component/EventCard";
import { HeroSection } from "@/components/layouts";

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
      icon: (
        <svg
          className="w-[2.5vw] h-[2.5vw] text-[#274423]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2l7 4v6c0 5-3.8 9.7-7 10-3.2-.3-7-5-7-10V6l7-4z" />
          <path d="M9.5 12.5l1.5 1.5L15 10" />
        </svg>
      ),
    },
    {
      title: "Family Atmosphere",
      description:
        "Every camper is part of our big camp family, where friendships grow and everyone feels included.",
      icon: (
        <svg
          className="w-[2.5vw] h-[2.5vw] text-[#274423]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z" />
          <path d="M8 11c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3z" />
          <path d="M2 20c0-3.3 2.7-6 6-6h8c3.3 0 6 2.7 6 6" />
        </svg>
      ),
    },
    {
      title: "Cultural Exchange",
      description:
        "Experience diversity and learn about different cultures from campers around the world.",
      icon: (
        <svg
          className="w-[2.5vw] h-[2.5vw] text-[#274423]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2v20" />
        </svg>
      ),
    },
    {
      title: "Personal Growth",
      description:
        "Activities encourage confidence, independence, and learning through fun challenges.",
      icon: (
        <svg
          className="w-[2.5vw] h-[2.5vw] text-[#274423]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21 11c0 5-9 11-9 11S3 16 3 11a9 9 0 0118 0z" />
          <path d="M12 6v10" />
        </svg>
      ),
    },
    {
      title: "Creativity & Fun",
      description:
        "Express yourself through games, arts, and exciting hands-on experiences.",
      icon: (
        <svg
          className="w-[2.5vw] h-[2.5vw] text-[#274423]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 22s4-1 6-3 5-5 8-8 3-6 3-6l-6 3-8 8-3 6z" />
          <path d="M14 4l6 6" />
        </svg>
      ),
    },
  ],

  events: [
    {
      imageUrl: "yootheme/aboutImage/act1.jpg",
      date: "September 19, 2022",
      title: "The Bottom Line on Dietary Supplements",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet tristique neque, in suscipit sem. Fusce ut tellus neque. Suspendisse ...",
      authorName: "John Singleton",
      authorRole: "Nutritionist",
    },
    {
      imageUrl: "yootheme/aboutImage/act2.jpg",
      date: "September 19, 2022",
      title: "The Bottom Line on Dietary Supplements",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet tristique neque, in suscipit sem. Fusce ut tellus neque. Suspendisse ...",
      authorName: "John Singleton",
      authorRole: "Nutritionist",
    },
    {
      imageUrl: "yootheme/aboutImage/act3.jpg",
      date: "September 19, 2022",
      title: "The Bottom Line on Dietary Supplements",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet tristique neque, in suscipit sem. Fusce ut tellus neque. Suspendisse ...",
      authorName: "John Singleton",
      authorRole: "Nutritionist",
    },
  ],
};

export default function AboutPage() {
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
            <div className="relative text-white p-[2vw] h-full flex flex-col justify-center z-20">
              <p className="text-[1.677vw] opacity-0 transform -translate-x-[2vw] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-150">
                {title}
              </p>
              <p className="text-[1vw] mt-[1vw] opacity-0 transform -translate-x-[2vw] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-300">
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
        backgroundImage="yootheme/aboutImage/banner.jpg"
        overlayColor="rgba(0, 0, 0, 0.7)"
        sectionClass="uk-section-primary"
        titleClass="uk-heading-large uk-text-center !text-[5vw]"
      />

      {/* Go & Grow Camp */}
      <section className="uk-section-default uk-section-overlap uk-section uk-section-small">
        <div className="uk-container uk-container-large">
          <div className="flex items-center justify-between gap-[2vw] py-[10vh] w-full">
          {/* LEFT CONTENT */}
          <div className="w-2/5">
            <p className="text-[1vw] text-[#E9A919] font-medium mb-[1vw] leading-[1.6vw]">
              Go & Grow Camp A Place to Learn, Connect, and Grow
            </p>

            <p className="text-[1.458vw]">
              Go & Grow Camp brings together young people from different
              countries and cultures to enjoy fun activities, meaningful
              projects, and positive community experiences. Every camper—new or
              returning—quickly feels included thanks to our welcoming
              environment and supportive team.
            </p>

            <p className="text-[1vw] text-gray-600 leading-[1.8vw] mb-[2vw]">
              Camp is where real friendships begin. Many campers stay in touch
              long after the program ends, forming connections that cross
              borders and cultures. Parents often share that after camp, their
              children return more confident, independent, and motivated to
              improve their English so they can communicate even better the next
              time. The friendships and experiences at camp leave a lasting
              impact that goes far beyond the session itself.
            </p>

            <Button>Discover More</Button>
          </div>

          {/* CENTER IMAGE */}
          <div className="relative w-2/5 h-[65vh] rounded-[2vw] overflow-visible bg-white">
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
            <div className="absolute bottom-0 left-0 z-10 bg-white p-[1vw] rounded-tr-4xl -translate-x-[0.5vw] translate-y-[1.3vh]">
              {/* 1) Main green play button (sits on top) */}
              <div className="relative z-20 flex h-[6vh] w-[3vw] items-center justify-center rounded-xl bg-[#214a28] shadow-lg cursor-pointer transition-transform hover:scale-110  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  width="48"
                  height="48"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="text-lg xl:text-md"></div>

          {/* RIGHT SIDE SERVICES */}
          <div className="w-1/5 grid grid-cols-1 gap-[1.5vw]">
            {pageData.services.map((service: any, index: number) => (
              <ServiceBox
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* number */}
      <section>
        <div className="py-[5vh] w-full px-[20vw] flex justify-between items-center  bg-[#E9A919] text-white">
          {pageData.stats.map((stat: any, index: number) => (
            <StatCard
              key={index}
              number={stat.number}
              description={stat.description}
            />
          ))}
        </div>
      </section>

      {/* Safe Environment / Features */}
      <section>
        <div className="py-[10vh] w-full px-[5vw] bg-gray-100">
          {/* Header */}
          <div className="text-center max-w-[80vw] mx-auto flex flex-col items-center justify-center">
            <p className="text-[#E9A919] text-[1.5vw] leading-[1.2] mt-0 mb-[0.5vh]">
              Accommodation
            </p>

            <p className="text-[1.7vw] text-[#274423] leading-[1.05] mt-0 mb-[0.5vh]">
              Blending Comfort With Responsible Living
            </p>

            <p className="text-[1vw] text-gray-600 w-[60vw] leading-[1.2] mt-0">
              Enjoy a tranquil atmosphere with beautiful views, modern
              facilities, and personal touches that make you feel at home.
            </p>
          </div>

          {/* Features grid */}
          <div className="mt-[5vh] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[3vw]">
            {pageData.features
              .slice(0, 3)
              .map((feature: any, index: number) => (
                <Feature
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
          </div>

          {/* Features grid 2 */}
          <div className="mt-[5vh] grid grid-cols-1 sm:grid-cols-2 gap-[3vw]">
            {pageData.features
              .slice(3, 5)
              .map((feature: any, index: number) => (
                <Feature
                  key={index + 3}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
          </div>
        </div>
      </section>

      <section>
        <div className="py-[10vh] w-full px-[10vw]">
          <div className="flex items-center justify-between py-[5vh]">
            {/* LEFT */}
            <div className="w-2/3 flex flex-col items-start justify-center space-y-[1vh]">
              <p className="text-xl text-[#E9A919]">Activities</p>
              <p className="text-black text-[1.667vw] font-bold">
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
            <div className="w-1/3 flex justify-end">
              <Button className="px-8 py-3">View All</Button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <ImagePanel
              src={getTemplateImageUrl("yootheme/aboutImage/act1.jpg")}
              title="Outdoor Adventures"
              desc="Climb, paddle and explore with our experienced team."
              className="col-span-2 h-[40vh]"
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
              className="col-span-2 h-[40vh]"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="py-[8vh] bg-[#fbf8f0]">
          <div className="flex items-center gap-[4vw]">
            {/* LEFT: image with play button */}
            <div className="w-1/2 relative h-[45vh] rounded-[1.25vw] overflow-hidden bg-white">
              <div className="absolute inset-[0.3vw] rounded-[calc(1.25vw-0.3vw)] overflow-hidden">
                <Image
                  src={getTemplateImageUrl("yootheme/aboutImage/beach.jpg")}
                  alt="Beach"
                  fill
                  className="object-cover"
                />
              </div>

              {/* circular play button */}
              <button
                type="button"
                className="absolute left-[45%] top-1/2 -translate-y-1/2 bg-white rounded-full p-[0.8vw] shadow-lg z-20 flex items-center justify-center"
                aria-label="Play video"
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
            <div className="w-1/2">
              <h2 className="text-[2.2vw] text-[#274423] font-bold leading-[1.05] mb-[1.5vh]">
                Stay Updated with Our Monthly Newsletter
              </h2>

              <div className="mb-[2vh]">
                <div className="w-[6.5vw] h-[0.5vh] bg-[#2ca06c] rounded-full -mt-[0.5vh] mb-[1vh]" />
                <p className="text-[1vw] text-gray-600 leading-[1.4vw]">
                  Sign up to receive the latest news about new camps,
                  activities, and exciting opportunities. Don’t miss out on
                  anything fun!
                </p>
              </div>

              <form
                className="flex items-center max-w-[28vw] shadow-sm rounded-full"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  aria-label="Email address"
                  placeholder="Enter your email address"
                  className="flex-1 py-[1.5vh] px-[1.5vw] rounded-l-[0.8vw] border border-gray-200 bg-white focus:outline-none text-[0.9vw]"
                />
                <button
                  type="submit"
                  className="bg-[#2ca06c] text-white px-[3vw] py-[1.5vh] rounded-lg shadow hover:bg-[#238a56] flex items-center gap-[0.5vw] text-[0.9vw] "
                >
                  <span>Subscribe</span>
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

      <section>
        <div className="py-[8vh] w-full px-[15vw]">
          <div className="flex items-center justify-between mb-[4vh] mx-[2vw]">
            <div>
              <h2 className="text-[2vw] font-bold text-[#274423]">
                Tour Events for you
              </h2>
              <div className="w-[7vw] h-[0.6vh] bg-[#2ca06c] rounded-full -mt-[0.5vh]" />
            </div>

            <a
              href="#"
              className="text-[#2ca06c] flex items-center gap-[0.5vw] text-[1vw]"
            >
              See All Event
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
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-3 gap-[2vw] mx-[2vw]">
            {pageData.events.map((event: any, index: number) => (
              <EventCard
                key={index}
                imageUrl={event.imageUrl}
                date={event.date}
                title={event.title}
                description={event.description}
                authorName={event.authorName}
                authorRole={event.authorRole}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
