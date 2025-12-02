"use client";

import { getTemplateImageUrl } from "@/lib/assets";

export function MissionVisionSection() {
  return (
    <div
      className="relative w-full bg-no-repeat bg-center bg-cover md:bg-contain md:bg-[left_center]"
      style={{
        backgroundImage: `url(${getTemplateImageUrl("yootheme/banner/b8.jpg")})`,
        minHeight: 'clamp(600px, 80vh, 1000px)',
        paddingTop: 'clamp(20rem, 8vh, 6rem)',
        paddingBottom: 'clamp(3rem, 8vh, 6rem)',
      }}
    >
      <div className="w-full h-full relative">
        <div className="uk-text-center static md:absolute md:top-1/2 md:right-0 md:-translate-y-1/2 bg-[#f9f9f7] rounded-none shadow-[0_10px_30px_rgba(0,0,0,0.3)] z-10 border-2 border-[#f0f0f0] w-full md:w-[70vw] md:max-w-[1200px]"
          style={{
            padding: 'clamp(1.5rem, 3vw, 3rem)',
            height: 'auto',
            minHeight: 'clamp(400px, 60vh, 700px)',
            marginRight: 'clamp(1rem, 2vw, 3rem)',
          }}
        >
          <div className="w-full h-auto">
            <div className="mb-6 md:mb-0"
              style={{
                paddingLeft: 'clamp(0px, 1vw, 10px)',
                marginBottom: 'clamp(1.5rem, 3vh, 2rem)',
              }}
            >
              <h2 className="text-center md:text-left whitespace-normal md:whitespace-nowrap tracking-normal"
                style={{
                  fontSize: 'clamp(1.125rem, 1.5vw, 1.5rem)',
                  marginBottom: 'clamp(1rem, 2vh, 1.875rem)',
                }}
              >
                02&nbsp;&nbsp;&nbsp;&nbsp;—&nbsp;&nbsp;&nbsp;&nbsp;Who&nbsp;We&nbsp;Are
              </h2>
              <h1 className="text-left md:text-left !font-bold whitespace-normal md:whitespace-nowrap tracking-normal leading-tight md:leading-[0.9]"
                style={{
                  fontSize: 'clamp(1.875rem, 3vw, 3rem)',
                }}
              >
                Company Mission & Vision
              </h1>
            </div>

            {/* 3 div hình vuông nằm ngang */}
            <div className="flex flex-col md:flex-row justify-between mt-6 md:mt-8"
              style={{
                gap: 'clamp(1rem, 2vw, 1.5rem)',
                marginTop: 'clamp(1.5rem, 4vh, 2rem)',
              }}
            >
              {/* Mission Box */}
              <div className="flex-1 bg-[#f9f9f7] flex flex-col text-left transition-all duration-300 ease-in-out cursor-pointer rounded-xl md:rounded-lg hover:bg-white hover:shadow-lg"
                style={{
                  padding: 'clamp(1.25rem, 2vw, 1.5rem)',
                  minHeight: 'clamp(200px, 25vh, 300px)',
                }}
              >
                {/* Mission Icon - Target/Compass */}
                <div className="bg-[#9c5d00] flex items-center justify-center rounded-xl md:rounded-lg shadow-md"
                  style={{
                    width: 'clamp(3rem, 4vw, 3.5rem)',
                    height: 'clamp(3rem, 4vw, 3.5rem)',
                    marginBottom: 'clamp(0.75rem, 2vh, 1rem)',
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      width: 'clamp(1.5rem, 2vw, 1.75rem)',
                      height: 'clamp(1.5rem, 2vw, 1.75rem)',
                    }}
                  >
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                    <line x1="12" y1="2" x2="12" y2="6" />
                    <line x1="12" y1="18" x2="12" y2="22" />
                    <line x1="2" y1="12" x2="6" y2="12" />
                    <line x1="18" y1="12" x2="22" y2="12" />
                  </svg>
                </div>
                <h3 className="!font-bold text-[#333]"
                  style={{
                    fontSize: '1.2vw',
                    marginBottom: 'clamp(0.5rem, 1vh, 0.75rem)',
                  }}
                >
                  Our Mission
                </h3>
                <p className="font-normal text-[#666] leading-[1.5] flex-1"
                  style={{
                    fontSize: '1vw',
                  }}
                >
                  We provide a safe, inclusive, and inspiring environment
                  where children and teens can explore, learn, and grow
                  through adventure, creativity, and friendship.
                </p>
                <div className="bg-[#9c5d00]"
                  style={{
                    width: 'clamp(3rem, 5vw, 4rem)',
                    height: 'clamp(2px, 0.3vh, 4px)',
                    marginTop: 'clamp(0.75rem, 2vh, 1rem)',
                  }}
                ></div>
              </div>

              {/* Vision Box */}
              <div className="flex-1 bg-[#f9f9f7] flex flex-col text-left transition-all duration-300 ease-in-out cursor-pointer rounded-xl md:rounded-lg hover:bg-white hover:shadow-lg"
                style={{
                  padding: 'clamp(1.25rem, 2vw, 1.5rem)',
                  minHeight: 'clamp(200px, 25vh, 300px)',
                }}
              >
                {/* Vision Icon - Eye */}
                <div className="bg-[#9c5d00] flex items-center justify-center rounded-xl md:rounded-lg shadow-md"
                  style={{
                    width: 'clamp(3rem, 4vw, 3.5rem)',
                    height: 'clamp(3rem, 4vw, 3.5rem)',
                    marginBottom: 'clamp(0.75rem, 2vh, 1rem)',
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      width: 'clamp(1.5rem, 2vw, 1.75rem)',
                      height: 'clamp(1.5rem, 2vw, 1.75rem)',
                    }}
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3 className="!font-bold text-[#333]"
                  style={{
                    fontSize: '1.2vw',
                    marginBottom: 'clamp(0.5rem, 1vh, 0.75rem)',
                  }}
                >
                  Our Vision
                </h3>
                <p className="font-normal text-[#666] leading-[1.5] flex-1"
                  style={{
                    fontSize: '1vw',
                  }}
                >
                  We aim to be a leading international camp experience that
                  nurtures confident, responsible, and compassionate young
                  individuals connected to nature and their communities.
                </p>
                <div className="bg-[#9c5d00]"
                  style={{
                    width: 'clamp(3rem, 5vw, 4rem)',
                    height: 'clamp(2px, 0.3vh, 4px)',
                    marginTop: 'clamp(0.75rem, 2vh, 1rem)',
                  }}
                ></div>
              </div>

              {/* Goals Box */}
              <div className="flex-1 bg-[#f9f9f7] flex flex-col text-left transition-all duration-300 ease-in-out cursor-pointer rounded-xl md:rounded-lg hover:bg-white hover:shadow-lg"
                style={{
                  padding: 'clamp(1.25rem, 2vw, 1.5rem)',
                  minHeight: 'clamp(200px, 25vh, 300px)',
                }}
              >
                {/* Goals Icon - Trophy/Flag */}
                <div className="bg-[#9c5d00] flex items-center justify-center rounded-xl md:rounded-lg shadow-md"
                  style={{
                    width: 'clamp(3rem, 4vw, 3.5rem)',
                    height: 'clamp(3rem, 4vw, 3.5rem)',
                    marginBottom: 'clamp(0.75rem, 2vh, 1rem)',
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      width: 'clamp(1.5rem, 2vw, 1.75rem)',
                      height: 'clamp(1.5rem, 2vw, 1.75rem)',
                    }}
                  >
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                    <path d="M4 22h16" />
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                  </svg>
                </div>
                <h3 className="!font-bold text-[#333]"
                  style={{
                    fontSize: '1.2vw',
                    marginBottom: 'clamp(0.5rem, 1vh, 0.75rem)',
                  }}
                >
                  Company Goals
                </h3>
                <p className="font-normal text-[#666] leading-[1.5] flex-1"
                  style={{
                    fontSize: '1vw',
                  }}
                >
                  Through hands-on activities, community service, and outdoor
                  adventures, we help campers build independence, teamwork,
                  and lifelong memories.
                </p>
                <div className="bg-[#9c5d00]"
                  style={{
                    width: 'clamp(3rem, 5vw, 4rem)',
                    height: 'clamp(2px, 0.3vh, 4px)',
                    marginTop: 'clamp(0.75rem, 2vh, 1rem)',
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
