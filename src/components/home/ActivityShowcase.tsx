"use client";

import Image from "next/image";
import { useState } from "react";

export default function ActivityShowcase() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Định nghĩa ảnh cho mỗi activity
  const activityImages = {
    0: "/templates/yootheme/banner/b13.jpg", // Default/Surfing
    1: "/templates/yootheme/banner/b14.jpg", // River Kayaking - bạn có thể thay đổi path
    2: "/templates/yootheme/banner/b16.jpg", // Campfire - bạn có thể thay đổi path
    3: "/templates/yootheme/banner/b11.jpg", // Community Service - bạn có thể thay đổi path
  };

  const currentImage =
    hoveredCard !== null
      ? activityImages[hoveredCard as keyof typeof activityImages]
      : activityImages[0];

  return (
    <div className="relative min-h-screen md:h-[70vh] md:min-h-[100vh] overflow-hidden">
      {/* Background Image with smooth transition */}
      <Image
        key={currentImage}
        src={currentImage}
        fill
        alt="Activities Background"
        className="object-cover transition-opacity duration-1000"
        priority
      />
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content Grid */}
      <div className="absolute inset-0">
        <div className="w-full h-full px-[1vw] md:px-[1vw] grid grid-cols-1 md:grid-cols-4 gap-0">
          {/* Card 1 - Surfing Adventures */}
          <div
            className="relative h-full flex flex-col justify-end no-underline !p-6 md:!p-[2vw] !text-white !border-b md:!border-b-0 md:!border-r !border-white/10 md:before:absolute md:before:right-0 md:before:top-[-70vh] md:before:bottom-[-70vh] md:before:w-[1px] md:before:bg-white/10 md:!border-r-0 cursor-pointer"
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div>
              <h3 className="!text-xl md:!text-[1.5vw] !text-white !font-bold !mb-3 md:!mb-[1vh] min-h-[4em] flex items-end">
                Surfing Adventures
              </h3>
              <p className="!text-base md:!text-[1vw] !text-white/90 leading-relaxed min-h-[5em]">
                Catch the waves and learn water safety while having a blast on
                the beach.
              </p>
            </div>
          </div>

          {/* Card 2 - River Kayaking */}
          <div
            className="relative h-full flex flex-col justify-end no-underline !p-6 md:!p-[2vw] !text-white !border-b md:!border-b-0 md:!border-r !border-white/10 md:before:absolute md:before:right-0 md:before:top-[-70vh] md:before:bottom-[-70vh] md:before:w-[1px] md:before:bg-white/10 md:!border-r-0 cursor-pointer"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div>
              <h3 className="!text-xl md:!text-[1.5vw] !text-white !font-bold !mb-3 md:!mb-[1vh] min-h-[4em] flex items-end">
                River Kayaking
              </h3>
              <p className="!text-base md:!text-[1vw] !text-white/90 leading-relaxed min-h-[5em]">
                Paddle along scenic rivers, surrounded by wildlife and stunning
                landscapes.
              </p>
            </div>
          </div>

          {/* Card 3 - Campfire Nights */}
          <div
            className="relative h-full flex flex-col justify-end no-underline !p-6 md:!p-[2vw] !text-white !border-b md:!border-b-0 md:!border-r !border-white/10 md:before:absolute md:before:right-0 md:before:top-[-70vh] md:before:bottom-[-70vh] md:before:w-[1px] md:before:bg-white/10 md:!border-r-0 cursor-pointer"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div>
              <h3 className="!text-xl md:!text-[1.5vw] !text-white !font-bold !mb-3 md:!mb-[1vh] min-h-[4em] flex items-end">
                Campfire Nights
              </h3>
              <p className="!text-base md:!text-[1vw] !text-white/90 leading-relaxed min-h-[5em]">
                Gather around the fire, roast marshmallows, and share stories
                under the stars
              </p>
            </div>
          </div>

          {/* Card 4 - Community Service */}
          <div
            className="h-full flex flex-col justify-end no-underline !p-6 md:!p-[2vw] !text-white !border-white/10 cursor-pointer"
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div>
              <h3 className="!text-xl md:!text-[1.5vw] !text-white !font-bold !mb-3 md:!mb-[1vh] min-h-[4em] flex items-end">
                Community Service Projects
              </h3>
              <p className="!text-base md:!text-[1vw] !text-white/90 leading-relaxed min-h-[5em]">
                Participate in meaningful activities such as beach clean-ups, t
                p treelanting, and helping local community initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
