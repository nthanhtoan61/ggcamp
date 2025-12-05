"use client";

import { useState } from "react";
import Image from "next/image";

export default function FAQSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="relative py-[10vh] overflow-hidden bg-gray-50">
      {/* Background Image - Left Side */}
      <div className="absolute left-0 top-[19vh] bottom-0 w-[15vw] flex items-start justify-start overflow-hidden opacity-80"></div>
      <div className="w-full px-[5vw] md:px-[3vw] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[5vw] items-start">
          {/* Left Column */}
          <div>
            <div className="inline-flex items-center gap-2 md:gap-[0.5vw] !text-[var(--color-primary)] text-lg md:text-[1vw] !font-bold mb-6 md:mb-[4vh] !tracking-wider  leading-none">
              - Frequently Asked Questions
            </div>

            <div className="text-2xl md:text-[2.5vw] !font-bold text-gray-900 mb-4 md:mb-[2vh] !mt-0 leading-tight">
              Essential Camp Info
            </div>
            <p className="text-gray-500 mb-6 md:mb-[3vh] leading-relaxed text-base md:text-[1vw]">
              Everything you need to know for a safe, fun, and unforgettable
              experience. Get quick details about our programs, activities,
              accommodations, and community projects – all in one place.
            </p>

            {/* Image with CTA Overlay */}
            <div className="relative rounded-2xl md:rounded-[2vw] overflow-hidden">
              <Image
                src="/templates/yootheme/banner/b5.jpg"
                width={400}
                height={500}
                alt="Glamping"
                className="w-full h-[50vh] object-cover"
              />

              {/* CTA Overlay */}
              <div className="absolute bottom-4 left-4 md:bottom-[2vh] md:left-[2vw] bg-black/40 backdrop-blur-md rounded-xl md:rounded-[1vw] px-4 py-3 md:px-[1.5vw] md:py-[1.5vh] flex items-center gap-3 md:gap-[1vw] shadow-2xl border border-white/10">
                <div className="flex-shrink-0 w-9 h-9 md:w-[2vw] md:h-[2vw] min-w-[36px] min-h-[36px] bg-black rounded-full flex items-center justify-center border-3 border-white"></div>

                <div className="text-left leading-tight flex flex-col justify-center">
                  <p className="!text-white !font-bold text-sm md:text-[1vw] !m-0">
                    Need Any Help?
                  </p>
                  <p className="!text-white/90 text-xs md:text-[1vw] !m-0">
                    +(123) 456-789 | office@ggcamp.org
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - FAQ Questions */}
          <div>
            <div className="space-y-3 md:space-y-[1.5vh]">
              {/* Question 1 */}
              <div className="bg-white shadow-sm rounded-xl md:rounded-[1vw] overflow-hidden">
                <div
                  className="p-4 md:p-[1vw] cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => setOpenFaqIndex(openFaqIndex === 0 ? null : 0)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 md:gap-[1vw]">
                      <div className="text-gray-900 !font-bold text-xl md:text-[1.2vw] mt-1 md:mt-[0.5vh]">
                        1. Safety & Supervision?
                      </div>
                    </div>
                    <svg
                      className="w-[1.2vw] h-[1.2vw] min-w-[20px] min-h-[20px] text-[var(--color-primary)] flex-shrink-0 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={
                          openFaqIndex === 0 ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"
                        }
                      />
                    </svg>
                  </div>
                </div>
                {openFaqIndex === 0 && (
                  <div className="bg-[var(--color-primary)] px-2 pb-2 md:px-[0.5vw] md:pb-[0.5vh]">
                    <div className="px-4 py-3 md:px-[1.5vw] md:py-[1.5vh] rounded-xl md:rounded-[1vw]">
                      <p className="text-gray-900 text-base md:text-[1vw] !font-semibold leading-relaxed">
                        Our trained and friendly staff are dedicated to ensuring
                        every camper feels safe and supported throughout their
                        stay. All camp sites are carefully chosen and regularly
                        inspected for safety, and every activity is closely
                        supervised. From water sports to forest hikes, we
                        maintain high safety standards while encouraging campers
                        to explore, challenge themselves, and grow.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Question 2 */}
              <div className="bg-white shadow-sm rounded-xl md:rounded-[1vw] overflow-hidden">
                <div
                  className="p-4 md:p-[1vw] cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => setOpenFaqIndex(openFaqIndex === 1 ? null : 1)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-3 md:gap-[1vw]">
                      <div className="text-gray-900 !font-bold text-lg md:text-[1.2vw] mt-1 md:mt-[0.5vh]">
                        2. Food & Meals?
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5 md:w-[1.2vw] md:h-[1.2vw] min-w-[20px] min-h-[20px] text-[var(--color-primary)] flex-shrink-0 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={
                          openFaqIndex === 1 ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"
                        }
                      />
                    </svg>
                  </div>
                </div>
                {openFaqIndex === 1 && (
                  <div className="bg-[var(--color-primary)] px-2 pb-2 md:px-[0.5vw] md:pb-[0.5vh]">
                    <div className="px-4 py-3 md:px-[1vw] md:py-[1.5vh] rounded-xl md:rounded-[1vw]">
                      <p className="text-gray-900 text-base md:text-[1vw] !font-semibold leading-relaxed">
                        Nutritious and balanced meals are prepared daily to keep
                        campers energized for their activities. From locally
                        sourced ingredients to delicious, kid-friendly recipes,
                        our meals also accommodate special dietary needs.
                        Mealtime is more than just food—it's a time for friends
                        to gather, share experiences, and enjoy new flavors
                        together.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Question 3 */}
              <div className="bg-white shadow-sm rounded-xl md:rounded-[1vw] overflow-hidden">
                <div
                  className="p-4 md:p-[1vw] cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => setOpenFaqIndex(openFaqIndex === 2 ? null : 2)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-3 md:gap-[1vw]">
                      <div className="text-gray-900 !font-bold text-lg md:text-[1.2vw] mt-1 md:mt-[0.5vh]">
                        3. Activities & Adventure?
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5 md:w-[1.2vw] md:h-[1.2vw] min-w-[20px] min-h-[20px] text-[var(--color-primary)] flex-shrink-0 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={
                          openFaqIndex === 2 ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"
                        }
                      />
                    </svg>
                  </div>
                </div>
                {openFaqIndex === 2 && (
                  <div className="bg-[var(--color-primary)] px-2 pb-2 md:px-[0.5vw] md:pb-[0.5vh]">
                    <div className="px-4 py-3 md:px-[1vw] md:py-[1.5vh] rounded-xl md:rounded-[1vw]">
                      <p className="text-gray-900 text-base md:text-[1vw] !font-semibold leading-relaxed">
                        Our diverse program of activities is designed to
                        challenge, inspire, and entertain. Campers can ride the
                        waves during surfing lessons, paddle scenic rivers on
                        kayaking tours, or participate in team challenges and
                        creative workshops. We also include meaningful community
                        service projects, like beach clean-ups and tree
                        planting, to teach responsibility and environmental
                        stewardship. Every activity is a chance to learn, grow,
                        and create lasting memories.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Question 4 */}
              <div className="bg-white shadow-sm rounded-xl md:rounded-[1vw] overflow-hidden">
                <div
                  className="p-4 md:p-[1vw] cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => setOpenFaqIndex(openFaqIndex === 3 ? null : 3)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-3 md:gap-[1vw]">
                      <div className="text-gray-900 !font-bold text-lg md:text-[1.2vw] mt-1 md:mt-[0.5vh]">
                        4. Can I bring my own food or cook at the campsite?
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5 md:w-[1.2vw] md:h-[1.2vw] min-w-[20px] min-h-[20px] text-[var(--color-primary)] flex-shrink-0 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={
                          openFaqIndex === 3 ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"
                        }
                      />
                    </svg>
                  </div>
                </div>
                {openFaqIndex === 3 && (
                  <div className="bg-[var(--color-primary)] px-2 pb-2 md:px-[0.5vw] md:pb-[0.5vh]">
                    <div className="px-4 py-3 md:px-[1vw] md:py-[1.5vh] rounded-xl md:rounded-[1vw]">
                      <p className="text-gray-900 text-base md:text-[1vw] !font-semibold leading-relaxed">
                        Absolutely! Each site has cooking facilities including
                        BBQ grills and fire pits. You're welcome to bring your
                        own food and beverages.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Question 5 */}
              <div className="bg-white shadow-sm rounded-xl md:rounded-[1vw] overflow-hidden">
                <div
                  className="p-4 md:p-[1vw] cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => setOpenFaqIndex(openFaqIndex === 4 ? null : 4)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-3 md:gap-[1vw]">
                      <div className="text-gray-900 !font-bold text-lg md:text-[1.2vw] mt-1 md:mt-[0.5vh]">
                        5. What types of adventure activities are available?
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5 md:w-[1.2vw] md:h-[1.2vw] min-w-[20px] min-h-[20px] text-[var(--color-primary)] flex-shrink-0 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={
                          openFaqIndex === 4 ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"
                        }
                      />
                    </svg>
                  </div>
                </div>
                {openFaqIndex === 4 && (
                  <div className="bg-[var(--color-primary)] px-2 pb-2 md:px-[0.5vw] md:pb-[0.5vh]">
                    <div className="px-4 py-3 md:px-[1vw] md:py-[1.5vh] rounded-xl md:rounded-[1vw]">
                      <p className="text-gray-900 text-base md:text-[1vw] !font-semibold leading-relaxed">
                        We offer hiking, kayaking, rock climbing, mountain
                        biking, fishing, and guided nature tours. Activities
                        vary by location and season.
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className="bg-white shadow-sm rounded-xl md:rounded-[1vw] overflow-hidden">
                <div
                  className="p-4 md:p-[1vw] cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => setOpenFaqIndex(openFaqIndex === 5 ? null : 5)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-3 md:gap-[1vw]">
                      <div className="text-gray-900 !font-bold text-lg md:text-[1.2vw] mt-1 md:mt-[0.5vh]">
                        6. Can I bring my own food or cook at the campsite?
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5 md:w-[1.2vw] md:h-[1.2vw] min-w-[20px] min-h-[20px] text-[var(--color-primary)] flex-shrink-0 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={
                          openFaqIndex === 5 ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"
                        }
                      />
                    </svg>
                  </div>
                </div>
                {openFaqIndex === 5 && (
                  <div className="bg-[var(--color-primary)] px-2 pb-2 md:px-[0.5vw] md:pb-[0.5vh]">
                    <div className="px-4 py-3 md:px-[1vw] md:py-[1.5vh] rounded-xl md:rounded-[1vw]">
                      <p className="text-gray-900 text-base md:text-[1vw] !font-semibold leading-relaxed">
                        Yes, you can bring your own food or cook at the
                        campsite.
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className="bg-white shadow-sm rounded-xl md:rounded-[1vw] overflow-hidden">
                <div
                  className="p-4 md:p-[1vw] cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => setOpenFaqIndex(openFaqIndex === 6 ? null : 6)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-3 md:gap-[1vw]">
                      <div className="text-gray-900 !font-bold text-lg md:text-[1.2vw] mt-1 md:mt-[0.5vh]">
                        7. What is the cancellation policy?
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5 md:w-[1.2vw] md:h-[1.2vw] min-w-[20px] min-h-[20px] text-[var(--color-primary)] flex-shrink-0 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={
                          openFaqIndex === 6 ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"
                        }
                      />
                    </svg>
                  </div>
                </div>
                {openFaqIndex === 6 && (
                  <div className="bg-[var(--color-primary)] px-2 pb-2 md:px-[0.5vw] md:pb-[0.5vh]">
                    <div className="px-4 py-3 md:px-[1vw] md:py-[1.5vh] rounded-xl md:rounded-[1vw]">
                      <p className="text-gray-900 text-base md:text-[1vw] !font-semibold leading-relaxed">
                        Cancellation policies vary by location and activity.
                        Some may allow cancellations with a fee, while others
                        may have strict cancellation policies. It's important to
                        review the specific cancellation policy for each
                        activity or location before booking.
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className="bg-white shadow-sm rounded-xl md:rounded-[1vw] overflow-hidden">
                <div
                  className="p-4 md:p-[1vw] cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => setOpenFaqIndex(openFaqIndex === 7 ? null : 7)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-3 md:gap-[1vw]">
                      <div className="text-gray-900 !font-bold text-lg md:text-[1.2vw] mt-1 md:mt-[0.5vh]">
                        8. What is the refund policy?
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5 md:w-[1.2vw] md:h-[1.2vw] min-w-[20px] min-h-[20px] text-[var(--color-primary)] flex-shrink-0 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={
                          openFaqIndex === 5 ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"
                        }
                      />
                    </svg>
                  </div>
                </div>
                {openFaqIndex === 7 && (
                  <div className="bg-[var(--color-primary)] px-2 pb-2 md:px-[0.5vw] md:pb-[0.5vh]">
                    <div className="px-4 py-3 md:px-[1vw] md:py-[1.5vh] rounded-xl md:rounded-[1vw]">
                      <p className="text-gray-900 text-base md:text-[1vw] !font-semibold leading-relaxed">
                        Refund policies vary by location and activity. Some may
                        allow refunds with a fee, while others may have strict
                        refund policies. It's important to review the specific
                        refund policy for each activity or location before
                        booking.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
