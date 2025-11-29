import Link from "next/link";
import Image from "next/image";
import { getTemplateImageUrl } from "@/lib/assets";

export const Footer: React.FC = () => {
  const logoUrl = getTemplateImageUrl("yootheme/logo/logo.png");

  return (
    <footer
    className="relative min-h-[700px] w-full m-0 p-0"
    >
      {/* Background image FULL COVER without cutting details */}
      <img
        src="/templates/yootheme/vendor/assets/uikit-themes/master-fjord/images/background_footer_white.png"
        alt="footer background"
        className="footer-image"
      />
      <div
        id="contact"
        className="uk-padding-remove-bottom footer-main contact-section"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-slide-bottom-medium; delay: 200;"
      >
        <div className="uk-container footer-animated-container">
          <div className="uk-grid tm-grid-expand uk-grid-large uk-grid-margin-large" uk-grid="">
            {/* Column 1: About Hotel */}
            <div className="uk-grid-item-match uk-width-1-3@m footer-social">
              <div className="uk-panel uk-width-1-1">
                <h3 className="uk-h4 inline-block pb-[5px] relative !text-white">
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
                <p className="!text-white mt-5 text-justify">
                  Welcome to Go and Grow Camp, where adventure, learning, and
                  friendships come together. Join us for unforgettable experiences that
                  inspire confidence, creativity, and connection
                </p>
                <p className="!text-white mt-5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 inline-block align-middle mr-2 fill-yellow-400"><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" /></svg>
                  <a href="https://share.google/8G4LFRq82OwOmlFlN" target="_blank" rel="noopener" className="text-white no-underline">Check on google map</a>
                </p>
              </div>
            </div>
            {/* Column 2: Explore */}
            <div className="uk-grid-item-match uk-width-1-3@m footer-social">
              <div className="uk-panel uk-width-1-1 pl-20">
                <h3 className="uk-h4 !text-white inline-block pb-[5px] relative">
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
                <ul className="uk-list !text-white mt-5 leading-loose">
                  <li><Link href="/" className="text-white no-underline">Home</Link></li>
                  <li><Link href="/destinations" className="text-white no-underline">Activities</Link></li>
                  <li><Link href="/camp-profiles" className="text-white no-underline">Camp Locations</Link></li>
                  <li><Link href="/info" className="text-white no-underline">About Camp</Link></li>
                  <li><Link href="/info/contact" className="text-white no-underline">Contact</Link></li>
                </ul>
              </div>
            </div>
            {/* Column 3: Contact */}
            <div className="uk-grid-item-match uk-width-1-3@m">
              <div className="uk-panel uk-width-1-1">
                <h3 className="uk-h4 !text-white inline-block pb-1 relative">
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
                  <p><a href="https://share.google/8G4LFRq82OwOmlFlN" target="_blank" rel="noopener" className="!text-white no-underline">Poblacion, Madridejos 22,<br />Cebu City, Philippines</a></p>
                  <p className="text-[22px] mt-4 flex items-center !text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 mr-2 fill-white inline-block align-middle"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                    +123456789
                  </p>
                  <p>
                    <a
                      href="office@ggcamp.org"
                      className="footer-email-underline !text-white no-underline relative inline-block"
                      >
                      office@ggcamp.org
                    </a>
                  </p>
                  {/* Social Media Icons */}
                  <div className="mt-5">
                    <ul className="uk-child-width-auto uk-grid-small uk-flex-inline uk-flex-middle footer-social" uk-grid="">
                      <li><a href="https://www.facebook.com/campadventuregermany/" aria-label="Facebook" target="_blank" rel="noreferrer" className="text-white"><span uk-icon="icon: facebook; width: 24; height: 24;"></span></a></li>
                      <li><a href="#" aria-label="Twitter" target="_blank" rel="noreferrer" className="text-white"><span uk-icon="icon: twitter; width: 24; height: 24;"></span></a></li>
                      <li><a href="https://www.instagram.com/campadventuregermany/" aria-label="Instagram" target="_blank" rel="noreferrer" className="text-white"><span uk-icon="icon: instagram; width: 24; height: 24;"></span></a></li>
                      <li><a href="#" aria-label="Behance" target="_blank" rel="noreferrer" className="text-white"><span uk-icon="icon: behance; width: 24; height: 24;"></span></a></li>
                      <li><a href="#" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="text-white"><span uk-icon="icon: linkedin; width: 24; height: 24;"></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="portfolio">© 2002-2025 GGC @ All Rights Reserved</span>
      </div>
    </footer>
  );
};