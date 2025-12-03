import React from "react";

export default function ActivityDetailSections({
  id = "",
  heroImage = {
    src: "https://demo.awaikenthemes.com/wildex/wp-content/uploads/2025/09/post-1-1024x576.jpg",
    alt: "Eco-Friendly Glamping",
  },
  title = "Eco-Friendly Glamping",
  subtitle = "How We Stay Green in the Wild",
  introText = ["intro text 1"],
  quote = "Glamping is no longer just about glamorous tents-it's about conscious travel. From bamboo furnishings to biodegradable toiletries and locally guided eco-tours, discover how glamping resorts are helping adventurers reconnect with the planet while protecting it for future generations.",
  outroText = ["outro text 1"],
  mainHeading = "Glamping that gives back to nature in style",
  mainDescription = [
    "Eco-friendly glamping is reshaping how we connect with the outdoors—pairing the beauty of nature with sustainable comfort. From solar-powered tents and eco-conscious amenities to locally sourced cuisine and minimal-impact designs, every detail is crafted to protect the environment while enhancing your stay.",
  ],

  principles = [
    "Luxury doesn't have to cost the earth. Our glamping site blends high-end comfort with eco-conscious practices",
    "Learn how we combine modern comforts with sustainable practices to protect the wild spaces we love",
    "From solar power to zero-waste initiatives, explore the ways our glamping experience stays eco-friendly",
    "We believe that connecting with nature should go hand in hand with protecting it",
    "Why settle for roughing it when you can relax responsibly? Our eco-glamping model blends modern amenities",
  ],
  footerText = ["footer text 1"],
}) {
  return (
    <section id={id} className="bg-white-100 py-4 px-4 mt-5">
      <div className="max-w-6xl mx-auto">
        <div
          className="text-xl md:text-[1.7vw]"
          style={{
            fontWeight: "600",
            marginBottom: "20px",
          }}
        >
          {title}
        </div>
        {/* Hero Image */}
        <div className="relative z-10 rounded-2xl overflow-hidden group cursor-pointer">
          <img
            src={heroImage.src}
            alt={heroImage.alt}
            className="w-full h-auto object-cover"
          />
          <div className="absolute top-1/2 left-1/2 w-[200%] h-0 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white/30 z-20 pointer-events-none group-hover:transition-all group-hover:duration-600 group-hover:ease-linear group-hover:h-[250%] group-hover:bg-transparent" />
        </div>

        <div
          className="text-lg md:text-[1vw] mt-6 md:mt-10"
          style={{
            fontWeight: "600",
            marginBottom: "20px",
          }}
        >
          {subtitle}
        </div>

        {/* Introduction Text */}
        <div className="mb-8 max-w-5xl mx-auto">
          {introText.map((text, index) => (
            <div
              key={index}
              className="text-base md:text-[1vw] text-gray-600 leading-relaxed mb-6"
            >
              {text}
            </div>
          ))}
        </div>

        {/* Quote Block */}
        <div
          className="p-6 rounded-2xl mb-8 max-w-5xl mx-auto"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="50"
                  height="50"
                  rx="8"
                  fill="var(--color-primary)"
                />
                <text
                  x="14"
                  y="34"
                  fontSize="38"
                  fill="white"
                  fontFamily="Georgia, serif"
                >
                  “
                </text>
              </svg>
            </div>
            <div className="text-base md:text-[1vw] text-gray-900 leading-relaxed font-medium">
              {quote}
            </div>
          </div>
        </div>

        <div className="mb-12 max-w-5xl mx-auto">
          {outroText.map((text, index) => (
            <div
              key={index}
              className="text-base md:text-[1vw] text-gray-600 leading-relaxed mb-4"
            >
              {text}
            </div>
          ))}
        </div>

        {/* Main Heading */}
        <div className="mb-8 max-w-5xl mx-auto">
          <div className="text-xl md:text-[1.7vw] font-bold text-gray-800 mb-4">
            {mainHeading}
          </div>

          {mainDescription.map((text, index) => (
            <div
              key={index}
              className="text-base md:text-[1vw] text-gray-600 leading-relaxed mb-4"
            >
              {text}
            </div>
          ))}
        </div>

        {/* Principles List */}
        <div className="mb-8 max-w-5xl mx-auto">
          <ul className="space-y-3">
            {principles.map((principle, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg
                  style={{ marginTop: "6px", flexShrink: 0 }}
                  width="7"
                  height="7"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <circle cx="9" cy="9" r="9" fill="var(--color-primary)" />
                </svg>
                <p className="text-gray-600 text-base md:text-[1vw] leading-relaxed m-0">
                  {principle}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Text */}
        <div className="mb-8 max-w-5xl mx-auto">
          {footerText.map((text, index) => (
            <div
              key={index}
              className="text-base md:text-[1vw] text-gray-600 leading-relaxed mb-4"
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}