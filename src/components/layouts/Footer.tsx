import Link from "next/link";
import {getTemplateImageUrl} from "@/lib/assets";

export const Footer: React.FC = () => {
  const logoUrl = getTemplateImageUrl("yootheme/logo/logo.png");
  // Background settings: change `bgSize` to 'cover'|'contain'|'auto' or
  // use CSS size values like '100% 100%' to stretch the image vertically.
  const bgUrl =
    "/templates/yootheme/vendor/assets/uikit-themes/master-fjord/images/background_footer_white.png";
  const bgSize: string = "100% 100%"; // stretch width + height to footer dimensions

  return (
    <footer className="relative h-full w-full m-0 p-0 bg-black">
      {/* Background layer using CSS background so it always fills the footer.
          `bgSize` controls sizing: 'cover' (default), 'contain', or 'auto'. */}
      <div
        aria-hidden="true"
        role="presentation"
        className="absolute inset-0 z-0 pointer-events-none select-none"
        style={{
          backgroundImage: `url(${bgUrl})`,
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: bgSize,
        }}
      />
      <div
        id="contact"
        className="uk-padding-remove-bottom footer-main translate-y-[40vh] lg:translate-y-0"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-slide-bottom-medium; delay: 200;"
      >
        <div className="uk-container footer-animated-container relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            {/* Column 1: About Hotel */}
            <div className="footer-social">
              <div className="uk-panel">
                <h3 className="text-sm! lg:text-[1.7vw]! text-white font-semibold inline-block pb-1 relative">
                  About GGC
                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      w-[80%]
                      h-[3px]
                      bg-amber-500
                    "
                  ></span>
                  <span
                    className="
                      absolute
                      -bottom-2
                      left-0
                      w-[50%]
                      h-[3px]
                      bg-amber-500
                    "
                  ></span>
                </h3>
                <p className="!text-white mt-5 text-xs! lg:text-[0.79vw]!">
                  Welcome to Go and Grow Camp, where adventure, learning, and
                  friendships come together. Join us for unforgettable
                  experiences that inspire confidence, creativity, and
                  connection
                </p>
                <p className="!text-white mt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 inline-block align-middle mr-2 fill-yellow-400"
                  >
                    <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" />
                  </svg>
                  <a
                    href="https://share.google/8G4LFRq82OwOmlFlN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white no-underline text-xs md:text-sm"
                  >
                    Check on google map
                  </a>
                </p>
              </div>
            </div>
            {/* Column 2: Explore */}
            <div className="footer-social">
              <div className="uk-panel pl-0 md:pl-6 lg:pl-20">
                <h3 className="text-sm! lg:text-[1.7vw]! text-white font-semibold inline-block pb-1 relative">
                  Explore
                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      w-[80%]
                      h-[3px]
                      bg-amber-500
                    "
                  ></span>
                  <span
                    className="
                      absolute
                      -bottom-2
                      left-0
                      w-[50%]
                      h-[3px]
                      bg-amber-500
                    "
                  ></span>
                </h3>
                <ul className="uk-list !text-white mt-5">
                  <li>
                    <Link href="/" className="text-white no-underline">
                      <p className="text-white! text-xs! lg:text-[0.79vw]!">
                        Home
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/destinations"
                      className="text-white no-underline"
                    >
                      <p className="text-white! text-xs! lg:text-[0.79vw]!">
                        Activities
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/camp-profiles"
                      className="text-white no-underline"
                    >
                      <p className="text-white! text-xs! lg:text-[0.79vw]!">
                        Camp Locations
                      </p>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/info/about"
                      className="text-white no-underline"
                    >
                      <p className="text-white! text-xs! lg:text-[0.79vw]!">
                        About
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/info/contact"
                      className="text-white no-underline"
                    >
                      <p className="text-white! text-xs! lg:text-[0.79vw]!">
                        Contact
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Column 3: Contact */}
            <div className="footer-social">
              <div className="uk-panel">
                <h3 className="text-sm! lg:text-[1.7vw]! text-white font-semibold inline-block pb-1 relative">
                  Contact
                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      w-[80%]
                      h-[3px]
                      bg-amber-500
                    "
                  ></span>
                  <span
                    className="
                      absolute
                      -bottom-2
                      left-0
                      w-[50%]
                      h-[3px]
                      bg-amber-500
                    "
                  ></span>
                </h3>
                <div className="footer-social !text-white mt-5 leading-[1.8]">
                  <p>
                    <a
                      href="https://share.google/8G4LFRq82OwOmlFlN"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white no-underline text-xs! lg:text-[0.79vw]!"
                    >
                      Poblacion, Madridejos 22,
                      <br />
                      Cebu City, Philippines
                    </a>
                  </p>
                  <p className="text-base md:text-lg mt-4 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 mr-2 fill-white inline-block align-middle"
                    >
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                    <span className="text-white text-xs! lg:text-[0.79vw]!">
                      +123456789
                    </span>
                  </p>
                  <p>
                    <a
                      href="mailto:office@ggcamp.org"
                      className="footer-email-underline !text-white no-underline relative inline-block text-xs! lg:text-[0.79vw]!"
                    >
                      office@ggcamp.org
                    </a>
                  </p>
                  {/* Social Media Icons */}
                  <div className="mt-5 hidden md:block">
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
                          className="text-white text-xs md:text-sm"
                        >
                          <span uk-icon="icon: facebook; width: 24; height: 24;"></span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          aria-label="Twitter"
                          target="_blank"
                          rel="noreferrer"
                          className="text-white text-sm md:text-base"
                        >
                          <span uk-icon="icon: twitter; width: 24; height: 24;"></span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/campadventuregermany/"
                          aria-label="Instagram"
                          target="_blank"
                          rel="noreferrer"
                          className="text-white text-sm md:text-base"
                        >
                          <span uk-icon="icon: instagram; width: 24; height: 24;"></span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          aria-label="Behance"
                          target="_blank"
                          rel="noreferrer"
                          className="text-white text-sm md:text-base"
                        >
                          <span uk-icon="icon: behance; width: 24; height: 24;"></span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          aria-label="LinkedIn"
                          target="_blank"
                          rel="noreferrer"
                          className="text-white text-sm md:text-base"
                        >
                          <span uk-icon="icon: linkedin; width: 24; height: 24;"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="block md:hidden">
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
                    className="text-white text-xs md:text-sm"
                  >
                    <span uk-icon="icon: facebook; width: 14; height: 14;"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-label="Twitter"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white text-sm md:text-base"
                  >
                    <span uk-icon="icon: twitter; width: 14; height: 14;"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/campadventuregermany/"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white text-sm md:text-base"
                  >
                    <span uk-icon="icon: instagram; width: 14; height: 14;"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-label="Behance"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white text-sm md:text-base"
                  >
                    <span uk-icon="icon: behance; width: 14; height: 14;"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white text-sm md:text-base"
                  >
                    <span uk-icon="icon: linkedin; width: 14; height: 14;"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="portfolio block text-center text-xs! lg:text-[0.79vw]! text-white">
          © 2002-2025 GGC @ All Rights Reserved
        </span>
      </div>
    </footer>
  );
};
