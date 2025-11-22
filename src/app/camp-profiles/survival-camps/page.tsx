"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { getTemplateImageUrl } from "@/lib/assets";

export default function SurvivalCampsPage() {
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
            backgroundImage: `url(${getTemplateImageUrl("yootheme/cache/8e/05-Sommercamp-Walsrode-Huts-8-beds-8ec9bcb0.jpg")})`,
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
                  <p>Survival Specialty Camps in Germany</p>
                </h1>
                <div
                  className="uk-panel uk-text-lead uk-margin uk-text-left"
                  uk-scrollspy-class=""
                >
                  <p>
                    Learn essential survival skills in the great outdoors!
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
                <p>7 - 17 years<br />Separated by age groups</p>
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
                <p>24/7 supervision + full board</p>
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
                <p>Bilingual<br />DE &amp; EN</p>
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
                    Survival Camp in Northern Germany – Your Adventure in the
                    Lüneburger Heath!
                  </p>
                </h2>
                <div className="uk-panel uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin">
                  <p>
                    Out of your comfort zone and into the wild! At our Survival
                    Camp in Lower Saxony, you&apos;ll learn how to work with
                    nature – build fires, construct shelters, and navigate
                    without GPS. But it&apos;s about more than just survival:
                    you&apos;ll grow beyond your limits, build self-confidence,
                    and learn how to overcome challenges.
                  </p>
                  <p>
                    International community & real teamwork!
                    <br />
                    Together with adventurers from around the world, you&apos;ll
                    discover exciting survival skills – hands-on, bilingual, and
                    full of action!
                  </p>
                  <p>
                    Stronger, more confident, and ready for anything – your
                    survival adventure is waiting!
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
                              "yootheme/cache/6a/01-Survival%20im%20Feriencamp-6a234bd3.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Boy blowing on embers to start a fire while surrounded by friends at wilderness survival camp."
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
                              "yootheme/cache/d6/02-Survival%20im%20Feriencamp-d62ec0df.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Teen jumps over a trench during physical coordination training at an outdoor survival camp."
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
                    id="js-3"
                    className="custom_acc_691a9cf9c4817"
                  >
                    <div id="js-3_0" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          All you need to know
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <ul>
                            <li>Survival training – 4 days × 2.5 hours</li>
                            <li>For all levels / Ages: 7–17 years</li>
                            <li>
                              Survival skills: Learn how to survive and thrive
                              in the wild, guided by certified teamers
                            </li>
                            <li>
                              Community &amp; adventure: Full-day activity
                              program including canoeing, archery, high ropes
                              course, and a lake with a water trampoline
                            </li>
                            <li>
                              Evening fun: Campfires, stick bread, capture the
                              flag &amp; more
                            </li>
                            <li>
                              Cool trips for two-week stays: Overnight hike,
                              swimming pool, Heide Park, Hamburg city trip
                            </li>
                            <li>
                              Camp languages English/German: Learn new
                              languages naturally in an international setting
                            </li>
                            <li>
                              Full board for 7 days (Sun–Sat), 6 nights – with
                              freshly prepared meals
                            </li>
                            <li>
                              24/7 all-round care: Our teamers are always
                              there for you
                            </li>
                            <li>
                              Digital detox approach: Phones and devices only
                              during siesta
                            </li>
                            <li>
                              Arrival &amp; departure services: Shuttle
                              transfers available from train stations/airports
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div id="js-3_6" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Arrival and departure
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <h4>All roads lead to camp!</h4>
                          <p>
                            Whether by car, train, plane, or shuttle – your
                            child will travel safely and comfortably. We take
                            care of everything to ensure a smooth arrival!
                          </p>
                          <ul>
                            <li>
                              <em>Own arrival:</em> Simply drop off and pick up
                              your child yourself. You&apos;ll receive detailed
                              directions by email about 6 weeks before camp
                              starts – so nothing stands in the way of a relaxed
                              arrival.
                            </li>
                            <li>
                              <em>Shuttle service:</em> Since our adventure
                              camps are often in remote areas, we&apos;re happy
                              to provide shuttle transfers from nearby airports
                              and train stations.
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
                              href="/info/arrival-departure"
                              target="_blank"
                              rel="noopener"
                            >
                              Detailed information about transfer options is
                              also available here.
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div id="js-3_7" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Insurance
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <h4>Well insured for your adventure!</h4>
                          <p>
                            Whether it&apos;s minor mishaps or unexpected
                            incidents – with our Camp Adventure insurance,
                            you&apos;re fully protected throughout your trip.
                          </p>
                          <p>
                            <em>Camp Adventure Insurance Package:</em>
                            <br />
                            Liability, accident, and health insurance for the
                            entire duration of your trip
                            <br />✔ Coverage for accidents &amp; doctor visits
                            <br />✔ Protection against property damage
                            <br />
                            Price: from USD45 per person per trip
                            <br />
                            Valid from arrival to departure
                            <br />
                            Only for international travel
                          </p>
                          <p>
                            <em>Important note:</em> Without international
                            health insurance, medical costs must be paid out of
                            pocket. We recommend carrying a cash reserve of
                            USD500 or a credit card. Participants from outside
                            the EU must provide proof of their own insurance
                            before departure.
                          </p>
                          <p>
                            <em>Camp Adventure Trip Cancellation Guarantee:</em>
                            <br />
                            Our guarantee against homesickness, illness &amp;
                            more. Need to cancel your trip? No problem! With our
                            cancellation guarantee, you&apos;ll receive a full
                            refund of the Camp Adventure trip price – minus a
                            deductible of USD50 (Germany) or USD100 (UK/Spain).
                            <br />✔ Valid up to one day before departure
                            <br />✔ No matter the reason: illness, accident,
                            exams, or homesickness
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
                    <div id="js-3_8" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Book our survival camps for kids &amp; teens
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <h4>
                            Survival Camp in Northern Germany 🌲🔥🏕️
                          </h4>
                          <p>
                            Learn how to survive in nature and master real
                            outdoor skills!
                            <br />
                            Start your week full of challenges and discover new
                            abilities! In the booking form, Survival Camp is
                            already preselected – all that&apos;s left is to
                            choose your accommodation and travel options.
                            <br />
                            Secure your spot now and face the wild – your
                            survival adventure awaits! 🌿🏹
                            <br />
                            And if you want to explore even more: stay an extra
                            week and try another exciting camp profile!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <style jsx>{`
                  .custom_acc_691a9cf9c4817 .uk-accordion-title * {
                    color: #000000 !important;
                  }
                  .custom_acc_691a9cf9c4817 .uk-accordion-title {
                    padding: 10px !important;
                    color: #000000 !important;
                    background: #ffffff !important;
                    border: 1px solid #ffaa00 !important;
                    position: relative;
                    padding-left: 60px !important;
                  }
                  .custom_acc_691a9cf9c4817 .uk-accordion-title::before {
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
                  .custom_acc_691a9cf9c4817
                    .uk-open
                    > .uk-accordion-title::before {
                    content: "−";
                  }
                  .custom_acc_691a9cf9c4817 .uk-accordion-content {
                    border: 1px solid #ffaa00 !important;
                    background: #ffffff !important;
                    padding: 15px !important;
                    margin-top: 15px !important;
                  }
                  .custom_acc_691a9cf9c4817 > :nth-child(n + 2) {
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
                    src="https://www.bookacamp.de/en/booking/form/view-by-camp/ds7fdn347dsfndsf74n37en37en37dnd/survivalwal"
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
      <div className="uk-section-muted uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h2 uk-text-center">Booking</h2>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
              <div className="uk-panel uk-margin">
                <div style={{ textAlign: "center" }}>
                  <iframe
                    src="https://www.bookacamp.de/en/booking/form/view-by-camp/ds7fdn347dsfndsf74n37en37en37dnd/survivalwal"
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

