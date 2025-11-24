"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { getTemplateImageUrl } from "@/lib/assets";

export default function ArtsCraftsPage() {
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
              "yootheme/cache/27/00-Kreativprogramm-in-der-Ferienfreizeit-27fff183.jpeg"
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
                  <p>Creative Specialty Camp in Germany: ARTS & CRAFTS</p>
                </h1>
              </div>
            </div>
            <div className="uk-grid tm-grid-expand uk-grid-margin" uk-grid="">
              <div className="uk-width-1-2@m">
                <div className="uk-margin uk-text-left" uk-scrollspy-class="">
                  <a
                    className="el-content uk-button uk-button-primary uk-button-small uk-flex-inline uk-flex-center uk-flex-middle"
                    href="#Walsrode"
                    uk-scroll=""
                  >
                    <span
                      className="uk-margin-small-right"
                      uk-icon="location"
                    ></span>
                    Lüneburger Heide - from 435 USD
                  </a>
                </div>
                <div className="uk-margin uk-text-left" uk-scrollspy-class="">
                  <a
                    className="el-content uk-button uk-button-default uk-button-small uk-flex-inline uk-flex-center uk-flex-middle"
                    href="#Walsrode"
                    uk-scroll=""
                  >
                    <span
                      className="uk-margin-small-right"
                      uk-icon="crosshairs"
                    ></span>
                    Spring, Summer, Fall
                  </a>
                </div>
                <div
                  id="page#2"
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
                    Bayerischer Wald - from 500 USD
                  </a>
                </div>
                <div className="uk-margin uk-text-left" uk-scrollspy-class="">
                  <a
                    className="el-content uk-button uk-button-default uk-button-small uk-flex-inline uk-flex-center uk-flex-middle"
                    href="#Walsrode"
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

      {/* Walsrode Section */}
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
                    Creative Camp in Northern Germany – Your Arts and Crafts
                    Adventure!
                  </p>
                </h2>
                <div className="uk-panel uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin">
                  <p>
                    Let your imagination run wild! Our Creative Specialty Camp
                    brings together artistic spirit, a connection to nature, and
                    a true sense of adventure – the perfect place to get
                    inspired.
                  </p>
                  <p>
                    Create, experiment, be creative! Whether it&apos;s painting,
                    crafting, or DIY projects – you&apos;ll find just the right
                    spark for your ideas. An international community comes
                    together here at Camp Adventure in Lüneburg!
                  </p>
                  <p>
                    Let your creative potential shine – we can&apos;t wait to
                    welcome you!
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
                              "yootheme/cache/c8/01-Kreativprogramm-in-der-Ferienfreizeit-c8061820.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Children crafting colorful decorations outdoors during summer camp activity"
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
                              "yootheme/cache/81/02-Kreativprogramm-in-der-Ferienfreizeit-81b0cd23.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Boys doing paper and straw crafts during indoor summer camp workshop"
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
                      <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                        <div
                          className="el-item uk-inline-clip uk-transition-toggle"
                          tabIndex={0}
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/44/05-Walsrode-Kanu-44a26bc9.jpg"
                            )}
                            width={1260}
                            height={837}
                            alt="Children paddling together on MegaFlo rafts – water fun and teamwork at summer camp in the Bavarian Forest"
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
                              "yootheme/cache/f2/01-Walsrode-Climbing-f2512af1.jpg"
                            )}
                            width={1260}
                            height={837}
                            alt="Child climbing on a high ropes course with safety gear – thrilling outdoor activity at Walsrode summer camp"
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
                              "yootheme/cache/68/13-Walsrode-SUP-Girls-68ee43b2.jpg"
                            )}
                            width={1260}
                            height={837}
                            alt="Group of girls relaxing on a stand-up paddleboard at the lake – summer fun at kids holiday camp in Walsrode"
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
                              "yootheme/cache/66/20-Walsrode-Bubble_Soccer-667cab53.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Kids playing bubble soccer outdoors – action-packed fun at Walsrode summer camp"
                            loading="lazy"
                            className="el-image uk-transition-scale-up uk-transition-opaque"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="uk-margin-top" uk-inverse="">
                    <ul
                      className="el-nav uk-slider-nav uk-dotnav uk-flex-center"
                      uk-margin=""
                    ></ul>
                  </div>
                </div>
                <div id="Accordion">
                  <div
                    uk-accordion="collapsible: false;"
                    id="js-4"
                    className="custom_acc_691a9ce562604"
                  >
                    <div id="js-4_0" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          All you need to know
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <ul>
                            <li>
                              Arts &amp; Crafts on 4 days: each with a 2.5-hour
                              profile session
                            </li>
                            <li>
                              For all levels: Ages 12–17 welcome – no prior
                              experience needed
                            </li>
                            <li>
                              Activity program beyond fishing: Outdoor games,
                              sports, creative workshops, campfires, disco
                              nights &amp; more
                            </li>
                            <li>
                              Fun trips (for 2-week stays): Hike with overnight
                              stay, swimming pool, Heide Park, or a trip to
                              Hamburg
                            </li>
                            <li>
                              Bilingual camp (English/German): Learn languages
                              naturally in an international setting
                            </li>
                            <li>
                              Accommodation: Choose between tents and cabins
                            </li>
                            <li>
                              All meals included: 7 days (Sun–Sat), 6 nights
                              with freshly prepared food
                            </li>
                            <li>
                              24/7 support: Our trained staff is always there
                              for you
                            </li>
                            <li>
                              Digital Detox: Phones and devices only during
                              siesta
                            </li>
                            <li>
                              Arrival &amp; departure services: Shuttles from
                              nearby train stations and airports available
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div id="js-4_6" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Arrival and Departure
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <h4>All Roads Lead to Camp!</h4>
                          <p>
                            Whether by car, train, plane, or shuttle – your
                            child will arrive safely and stress-free. We make
                            sure everything runs smoothly from start to finish!
                          </p>
                          <p>
                            <em>Self-arrival:</em> You&apos;re welcome to bring
                            and pick up your child yourself. About six weeks
                            before camp starts, you&apos;ll receive detailed
                            directions via email – so you can plan your trip
                            without any stress.
                          </p>
                          <p>
                            <em>Shuttle service:</em> Since our adventure camps
                            are often located in more remote areas, we offer
                            convenient shuttle transfers from nearby airports
                            and train stations. Shuttles run only on Sundays
                            (arrival) and Saturdays (departure) within fixed
                            time slots. Outside these hours, individual
                            transfers may be arranged for an additional fee –
                            just reach out to us directly.
                          </p>
                          <p>
                            <em>Airport Hamburg</em>
                            <br />
                            Arrival (landing): 10:00 – 15:00
                            <br />
                            Meeting Point (McDonald&apos;s): 14:00
                            <br />
                            Departure (take-off): 14:00 – 18:00
                            <br />
                            Meeting Point (McDonald&apos;s): 12:30
                          </p>
                          <p>
                            <em>Airport Hanover</em>
                            <br />
                            Arrival (landing): 10:00 – 16:00
                            <br />
                            Meeting Point (McDonald&apos;s): 15:30
                            <br />
                            Departure (take-off): 13:00 – 18:00
                            <br />
                            Meeting Point (McDonald&apos;s): 11:00
                          </p>
                          <p>
                            <em>Train Station Hanover</em>
                            <br />
                            Arrival: 14:00 – 16:00
                            <br />
                            Meeting Point (McDonald&apos;s): 15:30
                            <br />
                            Departure: 11:00 – 13:00
                            <br />
                            Meeting Point (McDonald&apos;s): 10:30
                          </p>
                          <p>
                            All available travel options can be selected during
                            the booking process.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div id="js-4_7" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Insurance
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <h4>Stay Safe While You Explore!</h4>
                          <p>
                            From small scrapes to bigger surprises – with our
                            Camp Adventure Insurance Package, you&apos;re
                            protected throughout your entire stay.
                          </p>
                          <p>
                            Camp Adventure Insurance Package includes:
                            <br />
                            ✔ Comprehensive coverage: liability, accident, and
                            health insurance for the full duration of your camp
                            trip
                            <br />
                            ✔ Covers doctor visits and medical emergencies
                            <br />
                            ✔ Protection in case of accidental property damage
                            <br />
                            💰 Price: from USD45 per person and trip
                            <br />
                            📅 Valid from the day you arrive until you leave
                            camp
                            <br />
                            🌍 Available exclusively for international camp
                            programs
                          </p>
                          <p>
                            ⚠ Please note: Without valid international
                            insurance, any medical costs must be paid directly
                            on-site. We strongly recommend bringing a credit
                            card or at least USD500 in cash.
                            <br />
                            If you&apos;re traveling from outside the EU, proof
                            of personal insurance is required before your trip.
                          </p>
                          <p>
                            Camp Adventure Travel Cancellation Guarantee
                            <br />
                            For peace of mind before your trip starts: If
                            something unexpected happens – like illness, exams,
                            or homesickness – you&apos;re covered.
                          </p>
                          <p>
                            ✔ Full refund of the Camp Adventure fee (minus USD50
                            for German camps or USD100 for camps in the UK and
                            Spain)
                            <br />
                            ✔ Valid until one day before camp begins
                            <br />
                            ✔ Covers any reason: from colds to personal
                            emergencies
                            <br />
                            💰 Price: USD45 for one week / USD85 for multi-week
                            stays
                          </p>
                          <p>
                            You can add all insurance options during the booking
                            process.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div id="js-4_8" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Bookinginformations for Arts & Crafts
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <h4>
                            A week full of creativity in the Arts &amp; Crafts
                            Profile 🎨✨
                          </h4>
                          <p>
                            In this Creative Specialty Camp program, you can
                            truly let your imagination run wild for a whole week
                            – draw, craft, paint and create to your heart&apos;s
                            content!
                            <br />
                            You&apos;ll find all dates and prices in the booking
                            section. Your creative profile has already been
                            selected for you – so go ahead, secure your spot and
                            get started!
                          </p>
                          <p>
                            Want even more adventure? Then simply stay for
                            another week and try out a different profile –
                            discover new talents and expand your camp
                            experience!
                          </p>
                          <p>Book Now and Enjoy Your Creative Journey!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <style jsx>{`
                  .custom_acc_691a9ce562604 .uk-accordion-title * {
                    color: #000000 !important;
                  }
                  .custom_acc_691a9ce562604 .uk-accordion-title {
                    padding: 10px !important;
                    color: #000000 !important;
                    background: #ffffff !important;
                    border: 1px solid #ffaa00 !important;
                    position: relative;
                    padding-left: 60px !important;
                  }
                  .custom_acc_691a9ce562604 .uk-accordion-title::before {
                    display: block;
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    background-color: #ffaa00 !important;
                    width: 50px;
                    height: 100%;
                    left: 0;
                    content: "+";
                    color: white;
                    font-size: 24px;
                    font-weight: bold;
                    text-align: center;
                    line-height: 1;
                  }
                  .custom_acc_691a9ce562604
                    .uk-open
                    > .uk-accordion-title::before {
                    content: "−";
                  }
                  .custom_acc_691a9ce562604 .uk-accordion-content {
                    border: 1px solid #ffaa00 !important;
                    background: #ffffff !important;
                    padding: 15px !important;
                    margin-top: 15px !important;
                  }
                  .custom_acc_691a9ce562604 > :nth-child(n + 2) {
                    border: unset !important;
                    box-shadow: unset !important;
                  }
                `}</style>
              </div>
            </div>
            <div className="uk-width-1-3@m">
              <div className="uk-card-default uk-card uk-card-body uk-margin">
                <h3 className="uk-h4 uk-margin-remove-bottom">
                  Creative, Sports & Adventure Camp Lüneburger Heide / Walsrode
                </h3>
                <div className="uk-margin-small-top">
                  <iframe
                    src="https://www.bookacamp.de/en/booking/form/view-by-camp/ds7fdn347dsfndsf74n37en37en37dnd/creativewal"
                    title="Bookacamp, die Buchungsplattform von Camp Adventure"
                    allowFullScreen={true}
                    width="100%"
                    height="800"
                    frameBorder="0"
                    style={{ minHeight: "600px" }}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Regen/Bavarian Forest Section */}
      <div
        id="Regen"
        className="uk-section-muted uk-section uk-padding-remove-bottom"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-grid-margin" uk-grid="">
            <div className="uk-grid-item-match uk-width-2-3@m">
              <div className="uk-card-default uk-card uk-card-body">
                <h2 className="uk-h2 uk-margin-remove-bottom uk-text-left">
                  <p>
                    Creative Camp in the Bavarian Forest – Your Arts & Crafts
                    Adventure!
                  </p>
                </h2>
                <div className="uk-panel uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin">
                  <p>
                    Unleash your creativity in the heart of nature! Our Creative
                    Specialty Camp in the Bavarian Forest combines artistic
                    spirit, a love of nature, and a thirst for adventure – the
                    perfect setting to let your imagination run wild.
                  </p>
                  <p>
                    Create, experiment, be creative! Whether it&apos;s painting,
                    crafting, or DIY projects – you&apos;ll find just the right
                    spark for your ideas. Join a vibrant international community
                    at Camp Adventure in Southern Germany, just a short trip
                    from Munich and Nuremberg!
                  </p>
                  <p>
                    Let your creative potential shine – we can&apos;t wait to
                    welcome you!
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
                              "yootheme/cache/fc/03-Regen-Sport-Camp-Bridge-fc7e5448.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Outdoor climbing and ziplining under a stone viaduct – thrilling activities at summer camp in the Bavarian Forest"
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
                              "yootheme/cache/d3/reg_programm_games-d3b4af4a.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Group of children being welcomed at language camp – beginning of an exciting adventure week in Regen"
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
                            alt="Children on a canoeing trip through nature – outdoor language camp adventure with expert supervision in Regen"
                            loading="lazy"
                            className="el-image uk-transition-scale-up uk-transition-opaque"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="uk-margin-top" uk-inverse="">
                    <ul
                      className="el-nav uk-slider-nav uk-dotnav uk-flex-center"
                      uk-margin=""
                    ></ul>
                  </div>
                </div>
                <div id="AccordionRegen">
                  <div
                    uk-accordion="collapsible: false;"
                    id="js-5"
                    className="custom_acc_691a9ce562604_regen"
                  >
                    <div id="js-5_0" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Everything you need at a glance
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <ul>
                            <li>
                              Arts &amp; Crafts: 4 x 2.5 hours of profile
                              sessions
                            </li>
                            <li>For all levels &amp; age groups: 7-16 years</li>
                            <li>
                              Accommodation: Tents, tiny houses and log cabins
                              or shared rooms
                            </li>
                            <li>
                              Activity program beyond the profile sessions
                              (day/evening): Outdoor, sports &amp; creativity,
                              campfire, disco, and more
                            </li>
                            <li>
                              Cool trips &amp; excursions (for two-week stays):
                              Overnight hike or Munich trip
                            </li>
                            <li>
                              Camp language: English/German – Learn languages
                              naturally in an international atmosphere
                            </li>
                            <li>
                              Full board for 7 days (Sun–Sat), 6 nights with
                              freshly prepared meals
                            </li>
                            <li>
                              24/7 all-round care: Our teamers are always there
                              for you
                            </li>
                            <li>
                              Digital Detox approach: Phones and electronic
                              devices only during siesta
                            </li>
                            <li>
                              Arrival &amp; departure services: Shuttle
                              transfers from train stations/airports available
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <style jsx>{`
                  .custom_acc_691a9ce562604_regen .uk-accordion-title * {
                    color: #000000 !important;
                  }
                  .custom_acc_691a9ce562604_regen .uk-accordion-title {
                    padding: 10px !important;
                    color: #000000 !important;
                    background: #ffffff !important;
                    border: 1px solid #ffaa00 !important;
                    position: relative;
                    padding-left: 60px !important;
                  }
                  .custom_acc_691a9ce562604_regen .uk-accordion-title::before {
                    display: block;
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    background-color: #ffaa00 !important;
                    width: 50px;
                    height: 100%;
                    left: 0;
                    content: "+";
                    color: white;
                    font-size: 24px;
                    font-weight: bold;
                    text-align: center;
                    line-height: 1;
                  }
                  .custom_acc_691a9ce562604_regen
                    .uk-open
                    > .uk-accordion-title::before {
                    content: "−";
                  }
                  .custom_acc_691a9ce562604_regen .uk-accordion-content {
                    border: 1px solid #ffaa00 !important;
                    background: #ffffff !important;
                    padding: 15px !important;
                    margin-top: 15px !important;
                  }
                  .custom_acc_691a9ce562604_regen > :nth-child(n + 2) {
                    border: unset !important;
                    box-shadow: unset !important;
                  }
                `}</style>
              </div>
            </div>
            <div className="uk-width-1-3@m">
              <div className="uk-card-default uk-card uk-card-body uk-margin">
                <h3 className="uk-h4 uk-margin-remove-bottom">
                  Adventure & Language Camp Bayerischer Wald / Regen
                </h3>
                <div className="uk-margin-small-top">
                  <iframe
                    src="https://www.bookacamp.de/en/booking/form/view-by-camp/ds7fdn347dsfndsf74n37en37en37dnd/creativereg"
                    title="Bookacamp, die Buchungsplattform von Camp Adventure"
                    allowFullScreen={true}
                    width="100%"
                    height="800"
                    frameBorder="0"
                    style={{ minHeight: "600px" }}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      {/* <div className="uk-section-muted uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h2 uk-text-center">Booking</h2>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
              <div className="uk-panel uk-margin">
                <div style={{ textAlign: "center" }}>
                  <iframe
                    src="https://www.bookacamp.de/en/booking/form/view-by-camp/ds7fdn347dsfndsf74n37en37en37dnd/creativewal"
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
      </div> */}

      {/* Testimonial Section */}
      <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-small">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-grid-item-match uk-width-1-1">
              <div className="uk-card-default uk-card uk-card-body">
                <blockquote
                  className="uk-width-2xlarge uk-text-left uk-scrollspy-inview"
                  uk-scrollspy-class=""
                >
                  <p>
                    Wonderful Arts & Crafts Camp! Our daughter discovered her
                    creative side and came home with amazing artwork. The
                    instructors encouraged self-expression and the atmosphere
                    was inspiring. She loved every creative project and made
                    friends who share her passion for art!
                  </p>
                  <footer className="el-footer">
                    <cite className="el-author">
                      <a
                        href="https://maps.app.goo.gl/FdniYSE33xQapbBs5"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Anna K. auf Google
                      </a>
                    </cite>
                  </footer>
                </blockquote>
                <div uk-scrollspy-class="" className="uk-scrollspy-inview">
                  <center>
                    <div className="pe-richsnippets"></div>
                    <Script
                      type="text/javascript"
                      src="https://www.provenexpert.com/widget/richsnippet497f.js?l=en&u=1Z3p4tQZkSQphSwAi92ZltwA0ZwAkWUZ&v=2"
                      async
                    />
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
