"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { getTemplateImageUrl } from "@/lib/assets";

export default function SailingPage() {
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
              "yootheme/cache/bd/Personen%20auf%20Segelboot-bdadb0cc.png"
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
                  <p>Sailing Summer Camp in Barcelona</p>
                </h1>
                <div
                  className="uk-panel uk-text-lead uk-margin uk-text-left"
                  uk-scrollspy-class=""
                >
                  <p>
                    Learn to sail in the beautiful waters of Barcelona with
                    certified instructors!
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
                <p>Spain</p>
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
                <p>10 - 16 years</p>
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
                <p>BISC Sailing Center</p>
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
                <p>24-hour supervision + full board</p>
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
                  EN &amp; ES
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
                    Learn to Sail in Barcelona: International Sailing Camp by
                    the Sea
                  </p>
                </h2>
                <div className="uk-panel uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin">
                  <p>
                    Feel the wind and water up close and learn to navigate the
                    elements! In our sailing camp in Barcelona, you&apos;ll
                    combine theory and practice – while making friends from all
                    over the world.
                  </p>
                  <p>
                    Quick success guaranteed! Whether you&apos;re a beginner or
                    have experience, you&apos;ll sail in group, double, or
                    single boats depending on your level. Thanks to our
                    experienced sailing instructors, you&apos;ll make playful
                    progress and take your skills to the next level in just one
                    week.
                  </p>
                  <p>
                    Team spirit, know-how & adventure – all in English and
                    Spanish! The perfect combo for your summer adventure.
                  </p>
                  <p>✨ Set sail – your sailing adventure in Spain awaits!</p>
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
                              "yootheme/cache/19/01-Segeln-im-Sommercamp-in-Spanien-1911127f.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Teens sailing small dinghies on the Mediterranean Sea during summer camp in Spain"
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
                              "yootheme/cache/ad/00-Barcelona-Beachcamp-BISC-ada2dde8.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Aerial view of solar-roofed camp building overlooking Barcelona harbor and city skyline"
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
                              "yootheme/cache/18/02-Barcelona-Beachcamp-Zimmer-18b5d451.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Modern four-bed dorm with bunk beds in a stylish youth camp accommodation by the harbor in Barcelona"
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
                              "yootheme/cache/10/03-Barcelona-Beachcamp-Speisesaal-10a600ce.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Empty dining hall with large windows and marina view in modern youth camp accommodation in Barcelona"
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
                              "yootheme/cache/6a/04-Barcelona-Beachcamp-Indoor-Lounge-6add3572.jpg"
                            )}
                            width={1260}
                            height={838}
                            alt="Stylish lounge with white sofas and sea view in premium summer camp facility in Spain"
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
                              "yootheme/cache/a0/05-Barcelona-Beachcamp-Strand-a092c88e.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Teenagers sitting in a circle on the beach listening to a camp counselor during summer camp in Spain"
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
                              "yootheme/cache/98/06-Barcelona-Beachcamp-Abendessen-98ac48e4.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Large group of teens enjoying breakfast together in seaside dining hall at youth camp in Spain"
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
                              "yootheme/cache/6b/07-Barcelona-Beachcamp-Gruppenfoto-Camper-6b148f04.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Teen group in Camp Adventure 2024 shirts posing by the sea during international summer camp in Barcelona"
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
                              "yootheme/cache/6f/10-Barcelona-Beachcamp-Beach-Volleyball-6f166a2c.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Teens playing beach volleyball on sunny sand court during international summer camp in Barcelona"
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
                    className="custom_acc_691a9cf43d7b0"
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
                            <li>Sailing for 4 days, 3 hours each</li>
                            <li>
                              For all levels: beginners &amp; advanced / Age
                              group: 10–16
                            </li>
                            <li>
                              Sailing experience: theory, practice, team spirit,
                              and top sailing instructors for all levels
                            </li>
                            <li>
                              Perfect conditions – established watersports
                              institution with top facilities at Barcelona
                              International Sailing Center (BISC)
                            </li>
                            <li>
                              Activity program (day/evening): outdoor
                              activities, sports, creativity, campfire, disco
                              &amp; more
                            </li>
                            <li>
                              Cultural experience in Barcelona – weekly trips to
                              the city center and sights
                            </li>
                            <li>
                              Camp languages English/Spanish: learn languages
                              naturally in an international atmosphere
                            </li>
                            <li>
                              Accommodation: great shared rooms with sea views
                            </li>
                            <li>
                              Full board for 7 days (Sun–Sat), 6 nights with
                              freshly prepared meals
                            </li>
                            <li>
                              24/7 all-inclusive care: our teamers are always
                              there for you
                            </li>
                            <li>
                              Digital detox approach: phones and electronic
                              devices allowed only during siesta
                            </li>
                            <li>
                              Arrival &amp; departure services: shuttle
                              transfers from train station/airport
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div id="js-2_6" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          arrival and departure
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <h4>All Roads Lead to Camp</h4>
                          <p>
                            Whether by car, train, plane, or shuttle – your
                            child will arrive safely and comfortably. We take
                            care of everything to ensure a smooth journey!
                          </p>
                          <ul>
                            <li>
                              Self-arrival: Simply drop off and pick up your
                              child yourself. You&apos;ll receive detailed
                              directions via email about 6 weeks before camp
                              starts, making your arrival stress-free.
                            </li>
                            <li>
                              Flight arrival with supervision: Our teamers
                              accompany all group flights, ensure a safe
                              arrival, and also take care of the return journey.
                              If a group flight is canceled, we&apos;ll inform
                              you promptly—free rebooking or cancellation of the
                              camp stay will then be possible.
                            </li>
                            <li>
                              Shuttle service: Since our language camps are
                              often located in remote areas, we&apos;re happy to
                              provide shuttle transfers from the nearby
                              Barcelona airport.
                            </li>
                          </ul>
                          <p>
                            Shuttles run only on Sundays for arrival and
                            Saturdays for departure within set time windows.
                            Outside these times, you can book a private shuttle
                            for an additional fee. Please contact us directly to
                            arrange this.
                          </p>
                          <p>
                            Choose your transfer options during the booking
                            process.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div id="js-2_7" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Insurance
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <h4>Well protected for your adventure</h4>
                          <p>
                            Whether minor mishaps or unexpected incidents – with
                            our Camp Adventure insurance, you&apos;re fully
                            covered.
                          </p>
                          <p>
                            Camp Adventure Insurance Package:
                            <br />
                            Liability, accident, and health insurance for the
                            entire duration of your trip.
                            <br />✔ Coverage for accidents &amp; doctor visits
                            <br />✔ Protection against property damage
                            <br />
                            Price: from USD45 per person per trip
                            <br />
                            Valid from arrival to departure
                            <br />
                            Only for trips abroad
                            <br />⚠ Important note: Without international
                            insurance coverage, you must cover medical costs
                            yourself. We recommend carrying a safety reserve of
                            USD500 in cash or a credit card. Participants
                            outside the EU must provide proof of their own
                            insurance before travel.
                          </p>
                          <p>
                            Camp Adventure Trip Cancellation Guarantee:
                            <br />
                            Our guarantee against homesickness, illness &amp;
                            more. Need to cancel your trip? No problem! With our
                            cancellation guarantee, you&apos;ll receive a full
                            refund of the Camp Adventure trip price—minus a
                            deductible of USD50 (Germany) or USD100
                            (England/Spain).
                            <br />✔ Valid up to one day before departure
                            <br />✔ Valid regardless of the reason: illness,
                            accident, exams, or homesickness
                            <br />
                            Price: USD45 (for one-week stays) / USD85 (for
                            multi-week stays)
                          </p>
                          <p>
                            All insurance options can be selected during the
                            booking process.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div id="js-2_8" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Sailing Summer Camp in Spain
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <h4>
                            Sailing at Camp Adventure – experience the wind and
                            water up close! ⛵🌊
                          </h4>
                          <p>
                            Start your week full of maritime adventures now!
                            Sailing is already preselected in the booking form –
                            all that&apos;s left is to add your details.
                          </p>
                          <p>
                            Secure your spot today and feel the freedom on the
                            water!
                          </p>
                          <p>
                            And if you want to explore even more, stay an extra
                            week and try another exciting profile! We look
                            forward to welcoming you. Join the Crew !
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <style jsx>{`
                  .custom_acc_691a9cf43d7b0 .uk-accordion-title * {
                    color: #000000 !important;
                  }
                  .custom_acc_691a9cf43d7b0 .uk-accordion-title {
                    padding: 10px !important;
                    color: #000000 !important;
                    background: #ffffff !important;
                    border: 1px solid #ffaa00 !important;
                    position: relative;
                    padding-left: 60px !important;
                  }
                  .custom_acc_691a9cf43d7b0 .uk-accordion-title::before {
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
                  .custom_acc_691a9cf43d7b0
                    .uk-open
                    > .uk-accordion-title::before {
                    content: "−";
                  }
                  .custom_acc_691a9cf43d7b0 .uk-accordion-content {
                    border: 1px solid #ffaa00 !important;
                    background: #ffffff !important;
                    padding: 15px !important;
                    margin-top: 15px !important;
                  }
                  .custom_acc_691a9cf43d7b0 > :nth-child(n + 2) {
                    border: unset !important;
                    box-shadow: unset !important;
                  }
                `}</style>
              </div>
            </div>
            <div className="uk-width-1-3@m">
              <div id="Buchung">
                <div style={{ textAlign: "center" }}>
                  <iframe
                    src="https://www.bookacamp.de/en/booking/form/view-by-camp/ds7fdn347dsfndsf74n37en37en37dnd/sailing"
                    title="Bookacamp, die Buchungsplattform von Camp Adventure"
                    allowFullScreen={true}
                    width="1000"
                    height="1700"
                    frameBorder="0"
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
                    src="https://www.bookacamp.de/en/booking/form/view-by-camp/ds7fdn347dsfndsf74n37en37en37dnd/sailing"
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
                    Fantastic Sailing Camp! Our children learned to sail, work
                    as a team, and gained so much confidence on the water. The
                    instructors were patient and skilled. It was a perfect blend
                    of learning and adventure. We&apos;ll be back!
                  </p>
                  <footer className="el-footer">
                    <cite className="el-author">
                      <a
                        href="https://maps.app.goo.gl/FdniYSE33xQapbBs5"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Claudia B. auf Google
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
