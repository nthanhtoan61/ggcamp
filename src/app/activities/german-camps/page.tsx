"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { getTemplateImageUrl } from "@/lib/assets";

export default function GermanCampsPage() {
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
                  <p>German Language Camps</p>
                </h1>
                <div
                  className="uk-panel uk-text-lead uk-margin uk-text-left"
                  uk-scrollspy-class=""
                >
                  <p>
                    Learn German in an authentic environment with native
                    speakers!
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
                <p>Native German Speakers</p>
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
                  <p>German Camp in Walsrode – Speak Up!☀️</p>
                </h2>
                <div className="uk-panel uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin">
                  <p>
                    Want to become more confident in German and really start
                    speaking? Then <strong>German Classic in Lüneburg</strong>{" "}
                    is the camp for you! The focus is on conversation – with
                    exciting, playful lessons that help you expand your
                    vocabulary and reinforce grammar without even thinking about
                    it.
                    <br />
                    And the best part: what you learn in the morning classes,
                    you immediately put into practice in daily camp life –
                    through games, outings, or simply chilling with your new
                    friends from around the world. This is how learning comes to
                    life –{" "}
                    <strong>
                      and you&apos;ll get more confident with each passing day.
                    </strong>
                  </p>
                  <p>
                    Secure your spot now and make German a part of your everyday
                    life –{" "}
                    <strong>
                      welcome to the German course in Lüneburg! 🚀
                    </strong>
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
                              "yootheme/cache/52/02-Language-Camps-by-Camp-Adventure-5201a531.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Concentrated teenagers learning English during summer language holidays in Germany"
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
                              "yootheme/cache/88/03-Language-Camps-by-Camp-Adventure-88387bd9.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Group of kids participating in interactive English class at Camp Adventure language camp in Germany"
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
                    id="js-4"
                    className="custom_acc_691a9cec6db3a"
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
                              12 lessons of 45 minutes each – 7/14 days (Sunday
                              to Saturday)
                            </li>
                            <li>
                              Level Check: Take a level test at the beginning of
                              the camp to assign you to the appropriate course
                            </li>
                            <li>
                              Interactive Classic Courses: Learn German in
                              exciting lessons that go beyond the classroom
                            </li>
                            <li>
                              German in Everyday Life: Apply what you&apos;ve
                              learned directly in camp activities – with support
                              from German-speaking coaches
                            </li>
                            <li>For all levels/ages: 7-17 years old</li>
                            <li>
                              Activity Program alongside core lessons
                              (day/evening): Outdoor activities, sports,
                              creativity, campfire, disco, and more
                            </li>
                            <li>
                              Cool trips &amp; excursions for two-week stays:
                              Overnight hike, swimming pool, Heidepark amusement
                              park, and a trip to Hamburg
                            </li>
                            <li>
                              Camp language English/German: Playful language
                              learning in an international atmosphere
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div id="js-4_6" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Arrival &amp; Departure
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <h4>All roads lead to camp!</h4>
                          <p>
                            Whether by car, train, plane, or shuttle – your
                            child will travel safely and comfortably. We&apos;ll
                            make sure everything runs smoothly!
                          </p>
                          <p>
                            <em>Self-arrival:</em> Simply drop off and pick up
                            your child yourself. You&apos;ll receive a detailed
                            travel guide 6 weeks before the start of camp via
                            email – so nothing will stand in the way of a
                            relaxed arrival.
                          </p>
                          <p>
                            <em>Shuttle service:</em> Since our adventure camps
                            are usually located in remote areas, we&apos;re
                            happy to provide shuttle service from nearby
                            airports and train stations.
                            <br />
                            The shuttles run only on Sundays for arrivals and
                            Saturdays for departures within specified time
                            slots. On these days, outside the scheduled time
                            frames, you can book an individual shuttle for an
                            additional fee. Please contact us for personalized
                            arrangements.
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
                            You can select all available options during the
                            booking process.{" "}
                            <Link
                              href="/info/travel-documents"
                              target="_blank"
                              rel="noopener"
                            >
                              Detailed information about transfer options can
                              also be found here.
                            </Link>
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
                          <h4>Well protected for the Adventure</h4>
                          <p>
                            Whether it&apos;s a small mishap or an unexpected
                            incident – with our Camp Adventure Insurance,
                            you&apos;re fully covered.
                          </p>
                          <p>
                            <em>The Camp Adventure Insurance Package:</em>
                            <br />
                            Liability, accident, and health insurance for the
                            entire duration of the trip.
                            <br />✔ Protection for accidents &amp; doctor visits
                            <br />✔ Coverage for property damage
                            <br />
                            💰 Price: from USD45 per person and trip
                            <br />
                            📅 Valid from arrival/departure
                            <br />
                            🌍 Only for trips abroad
                            <br />
                            <em>⚠ Important note:</em> Without foreign insurance
                            coverage, medical costs will be at your own expense.
                            We recommend having a cash reserve of USD500 or a
                            credit card. Participants from outside the EU must
                            provide proof of their own insurance before
                            departure.
                          </p>
                          <p>
                            <em>
                              The Camp Adventure Trip Cancellation Guarantee:
                            </em>
                            <br />
                            Our guarantee against homesickness, illness, and
                            more.
                            <br />
                            Need to cancel your trip? No problem! With our trip
                            cancellation guarantee, you&apos;ll get the full
                            Camp Adventure price back – minus a deductible of
                            USD50 (Germany) or USD100 (England/Spain).
                            <br />✔ Valid until one day before departure
                            <br />✔ No matter the reason: illness, accident,
                            exams, or homesickness
                            <br />
                            💰 Price: USD45 (for a one-week stay) / USD85 (for a
                            multi-week stay)
                          </p>
                          <p>
                            You can select all insurance options during the
                            booking process.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div id="js-4_8" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Additional booking information - German Camp
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <h4>
                            German Courses in Lüneburg – Experience the
                            Language, Have Fun, Speak More Confidently! 📚
                          </h4>
                          <p>
                            You&apos;ll find all available dates and prices in
                            the booking section. Deutsch Classic is already
                            selected for you – now all you need to do is fill in
                            your details! Book your Playful Language Camp now!
                          </p>
                          <p>
                            Want to discover even more? Then stay for a second
                            week and try out a different profile – maybe with
                            sports, creative time, or adventure in nature!
                          </p>
                          <p>
                            Pure Language Power - Reserve your spot now! 🌞📘🏕️
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <style jsx>{`
                  .custom_acc_691a9cec6db3a .uk-accordion-title * {
                    color: #000000 !important;
                  }
                  .custom_acc_691a9cec6db3a .uk-accordion-title {
                    padding: 10px !important;
                    color: #000000 !important;
                    background: #ffffff !important;
                    border: 1px solid #ffaa00 !important;
                    position: relative;
                    padding-left: 60px !important;
                  }
                  .custom_acc_691a9cec6db3a .uk-accordion-title::before {
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
                  .custom_acc_691a9cec6db3a
                    .uk-open
                    > .uk-accordion-title::before {
                    content: "−";
                  }
                  .custom_acc_691a9cec6db3a .uk-accordion-content {
                    border: 1px solid #ffaa00 !important;
                    background: #ffffff !important;
                    padding: 15px !important;
                    margin-top: 15px !important;
                  }
                  .custom_acc_691a9cec6db3a > :nth-child(n + 2) {
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
                    src="https://www.bookacamp.de/en/booking/form/view-by-camp/ds7fdn347dsfndsf74n37en37en37dnd/germanclassicwal"
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

      {/* Booking & Testimonial Section
      <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h2 uk-text-center">Booking</h2>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
              <div className="uk-panel uk-margin">
                <div style={{ textAlign: "center" }}>
                  <iframe
                    src="https://www.bookacamp.de/en/booking/form/view-by-camp/ds7fdn347dsfndsf74n37en37en37dnd/germanclassicwal"
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
                    The best experience for kids, teens, and counselors!
                    Adventure, international atmosphere, open-mindedness, and
                    excellent team leaders and directors. A unique spirit that
                    brings people together. Over 50 nations spend their best
                    summer at the camp, no matter where they come from, their
                    skin color, or size. A place of peace and equal opportunity.
                    A true way of life. No wonder many counselors were campers
                    for over a decade and are now the leaders. I love being part
                    of it every year — a second home! I love Camp
                  </p>
                  <footer className="el-footer">
                    <cite className="el-author">
                      <a
                        href="https://maps.app.goo.gl/GC9VaG3yszCdMvGk8"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ann-Christin V. auf Google
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
