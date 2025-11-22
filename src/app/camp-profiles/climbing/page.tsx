"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { getTemplateImageUrl } from "@/lib/assets";

export default function ClimbingPage() {
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
              "yootheme/cache/b4/00-Kletterkurs_Sommercamp_Bayern-b42eb781.jpeg"
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
                  <p>
                    Climbing Camp in Southern Germany in the Bavarian Forest
                  </p>
                </h1>
              </div>
            </div>
            <div className="uk-grid tm-grid-expand uk-grid-margin" uk-grid="">
              <div className="uk-width-1-2@m">
                <div
                  id="page#0"
                  className="uk-margin uk-text-left"
                  uk-scrollspy-class=""
                >
                  <a
                    className="el-content uk-button uk-button-primary uk-button-small uk-flex-inline uk-flex-center uk-flex-middle"
                    href="#Regen"
                    uk-scroll=""
                  >
                    <span
                      className="uk-margin-small-right"
                      uk-icon="location"
                    ></span>
                    Bavarian Forest - Starting at 395 USD
                  </a>
                </div>
                <div className="uk-margin uk-text-left" uk-scrollspy-class="">
                  <a
                    className="el-content uk-button uk-button-default uk-button-small uk-flex-inline uk-flex-center uk-flex-middle"
                    href="#Regen"
                    uk-scroll=""
                  >
                    <span
                      className="uk-margin-small-right"
                      uk-icon="crosshairs"
                    ></span>
                    Summer
                  </a>
                </div>
              </div>
              <div className="uk-width-1-2@m"></div>
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
                <p>12 - 17 years</p>
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
                <p>Tents &amp; Tiny Houses</p>
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
                <p>24h Supervision &amp; All Meals Included</p>
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
                  GER &amp; ENG
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div
        id="Regen"
        className="uk-section-default uk-section uk-padding-remove-bottom"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-grid-margin" uk-grid="">
            <div className="uk-grid-item-match uk-width-2-3@m">
              <div className="uk-card-default uk-card uk-card-body">
                <h2 className="uk-h2 uk-margin-remove-bottom uk-text-left">
                  <p>Climbing Camp – Your Adventure in Bavaria!</p>
                </h2>
                <div className="uk-panel uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin">
                  <p>
                    Step by Step, Reach New Heights!
                    <br />
                    At our Climbing Camp in Southern Germany, you&apos;ll find
                    the perfect mix of fun, challenge, and team spirit — whether
                    you&apos;re a beginner or already have some experience.
                    Practice top-rope climbing and try out eight exciting routes
                    with varying difficulty levels. And of course, you&apos;ll
                    always have a strong team by your side — because safety
                    comes first!
                  </p>
                  <p>
                    Dare to push your limits and gain the kind of confidence
                    that helps you overcome challenges not only on the wall, but
                    also in everyday life!
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
                              "yootheme/cache/8b/01-Kletterkurs_Sommercamp_Bayern_an%20der%20Kletterwand-8b7cbfc5.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Brave teens conquer the climbing wall at the outdoor summer camp in Bavaria with Camp Adventure."
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
                              "yootheme/cache/a9/02-Kletterkurs_Sommercamp_Bayern-Einweisung-a9a6154a.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Climbing course briefing at the summer camp in Bavaria – teens get ready to take on the climbing wall."
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
                              "yootheme/cache/d6/01-Regen-Sport-Camp-Location-d6d81402.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Sports Camp Regen in the Bavarian Forest – Aerial view with sports fields and idyllic scenery."
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
                              "yootheme/cache/fc/03-Regen-Sport-Camp-Bridge-fc7e5448.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Adventure beneath the viaduct – climbing activities and zip lines at the summer camp in the Bavarian Forest."
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
                              "yootheme/cache/8b/1_Adventure-Camp-Bayerischer-Wald-Location-8bc87db8.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Large group of teenagers getting to know each other at Camp Adventure in the Bavarian Forest."
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
                              "yootheme/cache/de/2-Adventure-Camp-Bayerischer-Wald-Megaflo-dedb0c2c.jpg"
                            )}
                            width={1260}
                            height={837}
                            alt="Children paddling together on megaflo boats – water fun and teamwork at the holiday camp in the Bavarian Forest."
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
                              "yootheme/cache/0c/1-Adventure-Camp-Bayerischer-Wald-Pool-0c86d060.jpg"
                            )}
                            width={1260}
                            height={837}
                            alt="Boys relaxing on water cushions in the outdoor pool – water fun at Camp Adventure summer camp."
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
                              "yootheme/cache/cd/02-Regen-Language-Camp-Kayak-cd591e8f.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Canoe tour with children at the language camp in Regen – a nature experience with professional supervision."
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
                    className="custom_acc_691a9ce650e2c"
                  >
                    <div id="js-2_0" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Everything you need to know
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <ul>
                            <li>
                              <strong>
                                3-Day Climbing Course, 3 Hours Each Day
                              </strong>
                              <br />
                              <strong>For all levels:</strong> beginners and
                              experienced climbers welcome
                            </li>
                            <li>
                              <strong>Full-Day Diverse Program:</strong>{" "}
                              Community & adventure activities including
                              canoeing, archery, climbing, and swimming pool fun
                            </li>
                            <li>
                              <strong>Colorful Evening Program:</strong>{" "}
                              Campfires, stick bread, Capture the Flag, and more
                            </li>
                            <li>
                              <strong>
                                Cool Trips & Excursions for Two-Week Stays:
                              </strong>{" "}
                              Outdoor overnight hike or a city trip to Munich
                            </li>
                            <li>
                              <strong>Camp Language:</strong> English/German —
                              Learn languages playfully in an international
                              atmosphere
                            </li>
                            <li>
                              <strong>
                                Full Board for 7 Days (Sun–Sat), 6 Nights
                              </strong>
                              : Freshly prepared meals
                            </li>
                            <li>
                              <strong>24/7 All-Round Care:</strong> Our team
                              leaders are always there for you
                            </li>
                            <li>
                              <strong>Digital Detox Approach:</strong> Phones
                              and electronic devices are allowed only during
                              siesta time
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div id="js-2_6" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Arrival & Departure
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <p>
                            <strong>All Roads Lead to Camp!</strong>
                            <br />
                            Whether by car, train, plane, or shuttle — your
                            child will arrive safely and comfortably. We take
                            care to make sure everything runs smoothly!
                          </p>
                          <ul>
                            <li>
                              Self-arrival: Simply drop off and pick up
                              yourself. You&apos;ll receive detailed directions
                              six weeks before camp starts via info email — so
                              nothing stands in the way of a relaxed arrival.
                            </li>
                            <li>
                              Shuttle service: Since our adventure camps are
                              often in remote areas, we&apos;re happy to shuttle
                              you from nearby airports (Munich) and train
                              stations (Plattling).
                            </li>
                          </ul>
                          <p>
                            The shuttles run only on Sundays for arrival and
                            Saturdays for departure within set time windows. On
                            these days, outside the designated time slots, you
                            can book a private shuttle for an extra fee. Please
                            contact us individually for this.
                          </p>
                          <p>
                            <em>Munich Airport</em>
                            <br />
                            Arrival (landing): 10:00 – 15:00
                            <br />
                            Meeting point (McDonald&apos;s): 15:00
                            <br />
                            Departure (take-off): 12:00 – 16:00
                            <br />
                            Meeting point (McDonald&apos;s): 10:00
                          </p>
                          <p>
                            <em>Plattling Train Station</em>
                            <br />
                            Arrival: 14:00 – 16:00
                            <br />
                            Meeting point (platform 5): 15:30
                            <br />
                            Departure: 10:00 – 12:00
                            <br />
                            Meeting point (platform 5): 9:30
                          </p>
                          <p>
                            You can select all available options during the
                            booking process.
                            <Link
                              href="/info/arrival-departure"
                              target="_blank"
                              rel="noopener"
                            >
                              {" "}
                              Detailed transfer information is also available
                              here.
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div id="js-2_7" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Insurance Packages
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <p>
                            <strong>Well Protected for Your Adventure!</strong>
                            <br />
                            Whether it&apos;s minor mishaps or unexpected
                            incidents — with our Camp Adventure insurance,
                            you&apos;re fully covered.
                          </p>
                          <p>
                            <em>Camp Adventure Insurance Package:</em>
                            <br />
                            Liability, accident, and health insurance for the
                            entire travel period.
                            <br />✔ Coverage for accidents & doctor visits
                            <br />✔ Protection against damage to property
                            <br />
                            💰 Price: from USD45 per person per trip
                            <br />
                            📅 Valid from arrival to departure
                            <br />
                            🌍 Only for trips abroad
                            <br />
                            <strong>
                              ⚠ Important: Without international insurance
                              coverage, medical costs must be paid out of
                              pocket. We recommend carrying a safety reserve of
                              USD500 in cash or a credit card. Participants from
                              outside the EU must provide proof of their own
                              insurance before traveling.
                            </strong>
                          </p>
                          <p>
                            <em>Camp Adventure Trip Cancellation Guarantee:</em>
                            <br />
                            Our guarantee against homesickness, illness & more.
                            Need to cancel your trip? No problem! With our
                            cancellation guarantee, you get a full refund of the
                            Camp Adventure trip price — minus a deductible of
                            USD50 (Germany) or USD100 (England/Spain).
                            <br />✔ Valid until one day before the trip starts
                            <br />✔ Applies regardless of reason: illness,
                            accident, exams, or homesickness
                            <br />
                            💰 Price: USD45 (for a one-week stay) / USD85 (for
                            multi-week stays)
                          </p>
                          <p>
                            <strong>
                              You can select all insurance options during the
                              booking process.
                            </strong>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div id="js-2_8" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Additional Booking information - Climbing Camp
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <p>
                            <strong>What to Bring:</strong>
                            <br />
                            Comfortable sportswear, climbing shoes (can be
                            rented), water bottle, sunscreen, and a spirit of
                            adventure!
                          </p>
                          <p>
                            <strong>Prerequisites:</strong>
                            <br />
                            No prior climbing experience necessary. Our
                            instructors will guide you through everything.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <style jsx>{`
                  .custom_acc_691a9ce650e2c .uk-accordion-title {
                    padding: 10px 15px;
                    background-color: #f8f8f8;
                    border-bottom: 1px solid #ddd;
                    cursor: pointer;
                  }
                  .custom_acc_691a9ce650e2c .uk-accordion-title:hover {
                    background-color: #e8e8e8;
                  }
                  .custom_acc_691a9ce650e2c .uk-accordion-content {
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
      <div className="uk-section-muted uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h2 uk-text-center">Booking</h2>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
              <div className="uk-panel uk-margin">
                <div style={{ textAlign: "center" }}>
                  <iframe
                    src="https://www.bookacamp.de/en/booking/form/view-by-camp/ds7fdn347dsfndsf74n37en37en37dnd/climbingreg"
                    title="Bookacamp, die Buchungsplattform von Camp Adventure"
                    allowFullScreen={true}
                    width="1000"
                    height="1700"
                    frameBorder="0"
                    allowFullScreen={true}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
