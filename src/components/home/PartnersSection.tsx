import Image from "next/image";
import Link from "next/link";

export default function PartnersSection() {
  return (
    <div className="relative py-12 md:py-[15vh]">
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
      <div className="relative z-10 w-full px-6 md:px-[10vw]">
        <div className="text-center mb-8 md:mb-[10vh]">
          <p className="flex items-center justify-center gap-2 md:gap-[0.5vw] !text-[var(--color-primary)] text-lg md:text-[1vw] !font-bold mb-5 md:mb-[4vh] tracking-wider">
            - Our Partners
          </p>
          <div className="!text-white text-2xl md:text-[2.7vw] !font-bold !leading-tight mx-auto px-4 ">
            Working with the best in outdoor living and exploration
          </div>
        </div>

        {/* Partner Logos Grid */}
        <div className="max-w-full md:max-w-[80vw] mx-auto mb-12 md:mb-[12vh]">
          <div className="grid grid-cols-5 md:grid-cols-5 gap-4 md:gap-[2vw]">
            {[
              "/templates/yootheme/post/anhsims.png",
              "/templates/yootheme/post/anhpartner1.png",
              "/templates/yootheme/post/anhpartner2.png",
              "/templates/yootheme/post/anhsmart.png",
              "/templates/yootheme/post/anhglobal.png",
            ].map((imgSrc, idx) => (
              <div
                key={`partner-${idx}`}
                className="group relative bg-white/10 backdrop-blur-md hover:bg-white/20 px-4 md:px-[1.5vw] py-6 md:py-[4vh] rounded-2xl md:rounded-[1.5vw] flex items-center justify-center overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-white/10 hover:border-white/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image
                  src={imgSrc}
                  width={200}
                  height={120}
                  alt={`Partner ${idx + 1}`}
                  className="h-20 md:h-[10vh] w-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-500 relative z-10"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 md:px-[1vw] py-2 md:py-[1.5vh] rounded-full transition-colors cursor-pointer">
            <span className="bg-[var(--color-primary)] !text-black text-sm md:text-[1vw] px-2 md:px-[0.5vw] py-1 md:py-[0.5vh] rounded-2xl whitespace-nowrap">
              Free
            </span>
            <span className="!text-white font-semibold text-base md:text-[1.2vw] whitespace-nowrap">
              Let's make something great work together.
            </span>
            <Link
              href="/booking"
              className="!text-[var(--color-primary)] font-bold underline hover:no-underline text-base md:text-[1.2vw] whitespace-nowrap"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
