import Link from "next/link";
import { getTemplateImageUrl } from "@/lib/assets";

export const Footer: React.FC = () => {
  const logoUrl = getTemplateImageUrl("yootheme/logo/logo.png");
  const bgUrl =
    "/templates/yootheme/vendor/assets/uikit-themes/master-fjord/images/background_footer_white.png";

  return (
    <footer className="relative w-full max-w-[1920px] mx-auto m-0 p-0 bg-black">
      <div
        aria-hidden="true"
        role="presentation"
        className="absolute inset-0 z-0 pointer-events-none select-none bg-cover md:bg-size-[100%_100%]"
        style={{
          backgroundImage: `url(${bgUrl})`,
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        id="contact"
        className="uk-padding-remove-bottom footer-main translate-y-[40vh] lg:translate-y-[40vh]"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-slide-bottom-medium; delay: 200;"
      >
        <div className="uk-container footer-animated-container relative z-10 sm:!pb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-[2.5vw]">
            {/* Column 1: About Hotel */}
            <div className="footer-social col-span-2 md:col-span-1">
              <div className="uk-panel pl-0 md:pl-6 lg:pl-[4.2vw]">
                <h3 className="text-2xl md:text-3xl lg:text-[1.6vw] !text-white font-semibold inline-block pb-2 relative">
                  About GGC
                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      w-[80%]
                      h-[4px]
                      bg-amber-500
                    "
                  ></span>
                  <span
                    className="
                      absolute
                      -bottom-2
                      left-0
                      w-[50%]
                      h-[4px]
                      bg-amber-500
                    "
                  ></span>
                </h3>
                <p className="!text-white mt-6 text-base md:text-lg leading-relaxed">
                  Welcome to Go and Grow Camp, where adventure, learning, and
                  friendships come together. Join us for unforgettable
                  experiences that inspire confidence, creativity, and
                  connection
                </p>
                <p className="!text-white mt-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 lg:w-[1.25vw] lg:h-[1.25vw] inline-block align-middle mr-2 fill-yellow-400"
                  >
                    <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" />
                  </svg>
                  <a
                    href="https://share.google/8G4LFRq82OwOmlFlN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white no-underline text-base md:text-lg hover:text-amber-400 transition-colors"
                  >
                    Check on google map
                  </a>
                </p>
              </div>
            </div>
            {/* Column 2: Explore */}
            <div className="footer-social">
              <div className="uk-panel pl-0 md:pl-6 lg:pl-[7.3vw]">
                <h3 className="text-2xl md:text-3xl lg:text-[1.6vw] !text-white font-semibold inline-block pb-2 relative">
                  Explore
                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      w-[80%]
                      h-[4px]
                      bg-amber-500
                    "
                  ></span>
                  <span
                    className="
                      absolute
                      -bottom-2
                      left-0
                      w-[50%]
                      h-[4px]
                      bg-amber-500
                    "
                  ></span>
                </h3>
                <ul className="uk-list !text-white mt-6 space-y-3 lg:space-y-[0.8vw]">
                  <li>
                    <Link href="/" className="text-white no-underline group">
                      <p className="!text-white text-base md:text-lg group-hover:!text-amber-400 transition-colors">
                        Home
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/destinations"
                      className="text-white no-underline group"
                    >
                      <p className="text-white! text-base md:text-lg group-hover:!text-amber-400 transition-colors">
                        Activities
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/camp-profiles"
                      className="text-white no-underline group"
                    >
                      <p className="text-white! text-base md:text-lg group-hover:!text-amber-400 transition-colors">
                        Camp Locations
                      </p>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/info/about"
                      className="text-white no-underline group"
                    >
                      <p className="text-white! text-base md:text-lg group-hover:!text-amber-400 transition-colors">
                        About
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/info/contact"
                      className="text-white no-underline group"
                    >
                      <p className="text-white! text-base md:text-lg group-hover:!text-amber-400 transition-colors">
                        Contact
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Column 3: Contact */}
            <div className="footer-social">
              <div className="uk-panel pl-0 md:pl-6 lg:pl-[4.2vw]">
                <h3 className="text-2xl md:text-3xl lg:text-[1.6vw] !text-white font-semibold inline-block pb-2 relative">
                  Contact
                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      w-[80%]
                      h-[4px]
                      bg-amber-500
                    "
                  ></span>
                  <span
                    className="
                      absolute
                      -bottom-2
                      left-0
                      w-[50%]
                      h-[4px]
                      bg-amber-500
                    "
                  ></span>
                </h3>
                <div className="footer-social !text-white mt-6 leading-loose">
                  <p>
                    <a
                      href="https://share.google/8G4LFRq82OwOmlFlN"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white no-underline text-base md:text-lg hover:text-amber-400 transition-colors"
                    >
                      Poblacion, Madridejos 22, Cebu City, Philippines
                    </a>
                  </p>
                  <p className="text-lg md:text-xl lg:text-[1.1vw] mt-4 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 lg:w-[1.25vw] lg:h-[1.25vw] mr-3 fill-white inline-block align-middle"
                    >
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                    <span className="text-white text-base md:text-lg lg:text-[0.95vw] hover:text-amber-400 transition-colors">
                      +123456789
                    </span>
                  </p>
                  <p>
                    <a
                      href="mailto:office@ggcamp.org"
                      className="footer-email-underline !text-white no-underline relative inline-block text-base md:text-lg hover:!text-amber-400 transition-colors"
                    >
                      office@ggcamp.org
                    </a>
                  </p>

                  {/* Social Media Icons */}
                  <div className="mt-6 mb-6 block">
                    <ul
                      className="uk-child-width-auto uk-grid-small uk-flex-inline uk-flex-middle footer-social"
                      uk-grid=""
                    >
                      <li>
                        <a
                          href="https://www.facebook.com/campadventuregermany/"
                          aria-label="Facebook"
                          target="_blank"
                          rel="noreferrer"
                          className="text-white hover:text-amber-400 transition-colors"
                        >
                          <span
                            uk-icon="icon: facebook; width: 28; height: 28;"
                            className="w-[20px] h-[20px] lg:w-[1.45vw] lg:h-[1.45vw]"
                          ></span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          aria-label="Twitter"
                          target="_blank"
                          rel="noreferrer"
                          className="text-white hover:text-amber-400 transition-colors"
                        >
                          <span
                            uk-icon="icon: twitter; width: 28; height: 28;"
                            className="w-[20px] h-[20px] lg:w-[1.45vw] lg:h-[1.45vw]"
                          ></span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/campadventuregermany/"
                          aria-label="Instagram"
                          target="_blank"
                          rel="noreferrer"
                          className="text-white hover:text-amber-400 transition-colors"
                        >
                          <span
                            uk-icon="icon: instagram; width: 28; height: 28;"
                            className="w-[20px] h-[20px] lg:w-[1.45vw] lg:h-[1.45vw]"
                          ></span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          aria-label="Behance"
                          target="_blank"
                          rel="noreferrer"
                          className="text-white hover:text-amber-400 transition-colors"
                        >
                          <span
                            uk-icon="icon: behance; width: 28; height: 28;"
                            className="w-[20px] h-[20px] lg:w-[1.45vw] lg:h-[1.45vw]"
                          ></span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          aria-label="LinkedIn"
                          target="_blank"
                          rel="noreferrer"
                          className="text-white hover:text-amber-400 transition-colors"
                        >
                          <span
                            uk-icon="icon: linkedin; width: 28; height: 28;"
                            className="w-[20px] h-[20px] lg:w-[1.45vw] lg:h-[1.45vw]"
                          ></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="portfolio block text-center text-sm lg:text-base text-white">
          © 2025 GGC @ All Rights Reserved
        </span>
      </div>
    </footer>
  );
};
