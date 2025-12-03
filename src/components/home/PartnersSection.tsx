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
          <p className="flex items-center justify-center gap-2 md:gap-[0.5vw] !text-[var(--color-primary)] text-xl md:text-[1.7vw] !font-bold mb-5 md:mb-[4vh] tracking-wider">
            <img
              src="https://demo.awaikenthemes.com/wildex/wp-content/themes/wildex/assets/images/icon-sub-heading.svg"
              alt="icon"
              className="w-6 h-6 md:w-[2vw] md:h-[2vw] object-contain flex-shrink-0"
            />
            Our Partners
          </p>
          <div className="!text-white text-2xl md:text-[2.7vw] !font-bold !leading-tight mx-auto px-4 ">
            Working with the best in outdoor living and exploration
          </div>
        </div>

        {/* Partner Logos - Uneven Grid */}
        <div className="max-w-full md:max-w-[70vw] mx-auto mb-8 md:mb-[15vh]">
          {/* Row 1 - 5 logos */}
          <div className="grid grid-cols-5 md:grid-cols-5 gap-3 md:gap-[1.5vw] mb-4 md:mb-[7vh]">
            {[1, 2, 3, 4, 2].map((num, idx) => (
              <div
                key={`row1-${idx}`}
                className="bg-gray-100/20 backdrop-blur-sm px-2 md:px-[2vw] py-3 md:py-[1.5vh] rounded-xl flex items-center justify-center"
              >
                <Image
                  src={`https://demo.awaikenthemes.com/wildex/wp-content/uploads/2025/10/partner-logo-${num}.svg`}
                  width={120}
                  height={32}
                  alt={`Partner Logo ${idx + 1}`}
                  className="h-8 md:h-[6vh] w-auto md:w-[10vw] object-contain"
                />
              </div>
            ))}
          </div>

          {/* Row 2 - 4 logos centered */}
          <div className="grid grid-cols-4 md:grid-cols-4 gap-3 md:gap-[1.5vw] max-w-full md:max-w-[60vw] mx-auto">
            {[2, 3, 4, 2].map((num, idx) => (
              <div
                key={`row2-${idx}`}
                className="bg-gray-100/20 backdrop-blur-sm px-2 md:px-[0.1vw] py-3 md:py-[1.5vh] rounded-xl flex items-center justify-center"
              >
                <Image
                  src={`https://demo.awaikenthemes.com/wildex/wp-content/uploads/2025/10/partner-logo-${num}.svg`}
                  width={120}
                  height={32}
                  alt={`Partner Logo ${idx + 6}`}
                  className="h-8 md:h-[5vh] w-auto md:w-[10vw] object-contain"
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
