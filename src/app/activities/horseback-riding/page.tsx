"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { getTemplateImageUrl } from "@/lib/assets";

export default function HorsebackRidingPage() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="uk-section-default uk-section-overlap uk-preserve-color uk-light uk-position-relative"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div
          className="uk-background-norepeat uk-background-cover uk-background-center-center uk-section uk-section-xlarge uk-padding-remove-bottom"
          style={{
            backgroundImage: `url(${getTemplateImageUrl(
              "yootheme/cache/8e/05-Sommercamp-Walsrode-Huts-8-beds-8ec9bcb0.jpg"
            )})`,
          }}
        >
          <div
            className="uk-position-cover"
            style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          ></div>
          <div className="uk-container uk-container-large uk-position-relative">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
              <div className="uk-width-1-1@m">
                <h1
                  className="uk-heading-large uk-margin-remove-bottom uk-text-left"
                  uk-scrollspy-class=""
                >
                  Horseback Riding Camp in Germany
                </h1>
                <div
                  className="uk-panel uk-text-lead uk-margin uk-text-left"
                  uk-scrollspy-class=""
                >
                  <p>
                    For all horse lovers – from grooming and care to riding
                    technique. Intensive, warm-hearted, and full of horse
                    passion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Basic Info Section */}
      <div className="uk-section-default uk-section uk-section-small">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-grid-margin" uk-grid="">
            <div className="uk-light uk-width-1-3@s uk-width-1-6@m">
              <div>
                <center>
                  <div id="proSealWidget"></div>
                </center>
              </div>
            </div>
            <div className="uk-width-1-3 uk-width-1-3@s uk-width-1-6@m">
              <div className="uk-margin uk-text-center">
                <span
                  className="uk-text-primary"
                  uk-icon="icon: location; width: 50; height: 50;"
                ></span>
              </div>
              <div className="uk-panel uk-margin uk-text-center">
                <p>Germany</p>
              </div>
            </div>
            <div className="uk-width-1-3 uk-width-1-3@s uk-width-1-6@m">
              <div className="uk-margin uk-text-center">
                <span
                  className="uk-text-primary"
                  uk-icon="icon: users; width: 50; height: 50;"
                ></span>
              </div>
              <div className="uk-panel uk-margin uk-text-center">
                <p>
                  7 - 17 years
                  <br />
                  Separated by age groups
                </p>
              </div>
            </div>
            <div className="uk-width-1-3 uk-width-1-3@s uk-width-1-6@m">
              <div className="uk-margin uk-text-center">
                <span
                  className="uk-text-primary"
                  uk-icon="icon: home; width: 50; height: 50;"
                ></span>
              </div>
              <div className="uk-panel uk-margin uk-text-center">
                <p>Tent & Cabin/House</p>
              </div>
            </div>
            <div className="uk-width-1-3 uk-width-1-3@s uk-width-1-6@m">
              <div className="uk-margin uk-text-center">
                <span
                  className="uk-text-primary"
                  uk-icon="icon: heart; width: 50; height: 50;"
                ></span>
              </div>
              <div className="uk-panel uk-margin uk-text-center">
                <p>Around-the-Clock Care & All Meals Included</p>
              </div>
            </div>
            <div className="uk-width-1-3 uk-width-1-3@s uk-width-1-6@m">
              <div className="uk-margin uk-text-center">
                <span
                  className="uk-text-primary"
                  uk-icon="icon: comments; width: 50; height: 50;"
                ></span>
              </div>
              <div className="uk-panel uk-margin uk-text-center">
                <p>
                  Bilingual
                  <br />
                  GER & EN
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div
        id="Walsrode"
        className="uk-section-default uk-section uk-padding-remove-bottom"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-grid-margin" uk-grid="">
            <div className="uk-grid-item-match uk-width-2-3@m">
              <div className="uk-card-default uk-card uk-card-body">
                <h2 className="uk-h2 uk-margin-remove-bottom uk-text-left">
                  <p>
                    Holiday Camp for Horse Lovers: Riding Lessons in the
                    Lüneburg Heath – Care, Training & an Unforgettable Trail
                    Ride!
                  </p>
                </h2>
                <div className="uk-panel uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin">
                  <p>
                    Feel the wind on your face, the gentle snort of your horse,
                    and the rhythm of hooves — riding is more than a sport;
                    it&apos;s a feeling of freedom and trust. At our riding camp
                    in Lower Saxony, you&apos;ll experience the magic of horses
                    and learn to become a true team with your four-legged
                    partner.
                  </p>
                  <p>
                    Care, training, and unforgettable trail rides — the
                    experienced trainers from the Altenwahlingen Equestrian Club
                    will teach you how to handle horses properly. Whether
                    you&apos;re just starting out or want to improve your
                    skills, this is the place for you.
                  </p>
                  <p>
                    Hop on, feel the connection, and ride into your camp
                    adventure!
                  </p>
                </div>
                <div
                  className="uk-slider-container uk-margin uk-text-center"
                  uk-slider="sets: 1; center: 1; velocity: 1; autoplay: 1;  autoplayInterval: 4000;"
                >
                  <div className="uk-position-relative">
                    <div className="uk-slider-items uk-grid">
                      <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                        <div
                          className="el-item uk-inline-clip uk-transition-toggle"
                          tabIndex={0}
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/e6/01-Reiten-Sommercamp-auf%20der%20Pferdekoppel-e6da6899.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Children riding ponies in a circle on the riding arena at summer horse camp"
                            loading="lazy"
                            className="el-image uk-transition-scale-up uk-transition-opaque"
                          />
                        </div>
                      </div>
                      <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                        <div
                          className="el-item uk-inline-clip uk-transition-toggle"
                          tabIndex={0}
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/0e/02-Reiten-Sommercamp-Kinder%20fuhren%20Pferde-0e03cd88.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Kids ride ponies and walk them through the forest during horse Go and Grow Camp"
                            loading="lazy"
                            className="el-image uk-transition-scale-up uk-transition-opaque"
                          />
                        </div>
                      </div>
                      <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                        <div
                          className="el-item uk-inline-clip uk-transition-toggle"
                          tabIndex={0}
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/1f/03-Reiten-Sommercamp-Kinder%20im%20Pferdestall-1f699fb1.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Two girls grooming a pony in the stable during horse riding camp for kids"
                            loading="lazy"
                            className="el-image uk-transition-scale-up uk-transition-opaque"
                          />
                        </div>
                      </div>
                      <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                        <div
                          className="el-item uk-inline-clip uk-transition-toggle"
                          tabIndex={0}
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/0e/08-Sommercamp-Walsrode-tents-inside-0ec7f7f4.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Smiling boys sitting inside a shared camp tent – outdoor adventure vacation for kids in Walsrode summer camp"
                            loading="lazy"
                            className="el-image uk-transition-scale-up uk-transition-opaque"
                          />
                        </div>
                      </div>
                      <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                        <div
                          className="el-item uk-inline-clip uk-transition-toggle"
                          tabIndex={0}
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/8e/05-Sommercamp-Walsrode-Huts-8-beds-8ec9bcb0.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Cozy wooden cabin with bunk beds – child-friendly accommodation at summer camp in Walsrode"
                            loading="lazy"
                            className="el-image uk-transition-scale-up uk-transition-opaque"
                          />
                        </div>
                      </div>
                      <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                        <div
                          className="el-item uk-inline-clip uk-transition-toggle"
                          tabIndex={0}
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/fa/02-Sommercamp-Walsrode-Dining-Hall-inside-fa5687ee.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Children eating together in the camp dining hall – shared meals and community spirit at Walsrode summer camp"
                            loading="lazy"
                            className="el-image uk-transition-scale-up uk-transition-opaque"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="uk-margin-top uk-visible@s" uk-inverse="">
                    <ul
                      className="el-nav uk-slider-nav uk-dotnav uk-flex-center"
                      uk-margin=""
                    ></ul>
                  </div>
                </div>
                <div id="Accordion">
                  <div
                    uk-accordion="collapsible: false;"
                    id="js-2"
                    className="custom_acc_691a9ced68ada"
                  >
                    <div id="js-2_0" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          All you need to know
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <ul>
                            <li>
                              <strong>
                                Riding 4 days a week, 2 hours each:
                              </strong>{" "}
                              Intensive riding lessons at a nearby riding stable
                            </li>
                            <li>
                              <strong>For all levels:</strong> Beginners and
                              experienced riders welcome
                            </li>
                            <li>
                              <strong>Community & adventure:</strong> Full-day
                              varied program including canoeing, archery, high
                              ropes course, swimming lake with water trampoline
                            </li>
                            <li>
                              <strong>Fun evening program:</strong> Campfire,
                              stick bread, Capture the Flag, and more
                            </li>
                            <li>
                              <strong>
                                Cool trips & excursions during a two-week stay:
                              </strong>{" "}
                              Hiking with overnight outdoor camping, swimming
                              pool, Heide Park, and Hamburg trip
                            </li>
                            <li>
                              <strong>Camp language English/German:</strong>{" "}
                              Learn languages playfully in an international
                              atmosphere
                            </li>
                            <li>
                              <strong>
                                Full board 7 days (Sun–Sat), 6 nights:
                              </strong>{" "}
                              Freshly prepared meals
                            </li>
                            <li>
                              <strong>24h all-around care:</strong> Our teamers
                              are always there for you
                            </li>
                            <li>
                              <strong>Digital detox approach:</strong> Phones
                              and electronic devices allowed only during siesta
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <style jsx>{`
                  .custom_acc_691a9ced68ada .uk-accordion-title {
                    padding: 10px 15px;
                    background-color: #f8f8f8;
                    border-bottom: 1px solid #ddd;
                    cursor: pointer;
                  }
                  .custom_acc_691a9ced68ada .uk-accordion-title:hover {
                    background-color: #e8e8e8;
                  }
                  .custom_acc_691a9ced68ada .uk-accordion-content {
                    padding: 15px;
                  }
                `}</style>
              </div>
            </div>
            <div className="uk-width-1-3@m"></div>
          </div>
        </div>
      </div>

      {/* Booking Section */}
     

      {/* ProvenExpert Widget */}
      <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div>
                <center>
                  <div className="pe-richsnippets"></div>
                  <Script
                    type="text/javascript"
                    src="https://www.provenexpert.com/widget/richsnippetf927.js?u=1Z3p4tQZkSQphSwAi92ZltwA0ZwAkWUZ&v=2"
                    async
                  />
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
