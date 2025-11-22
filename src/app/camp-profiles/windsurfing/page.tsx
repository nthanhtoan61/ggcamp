"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { getTemplateImageUrl } from "@/lib/assets";

export default function WindsurfingPage() {
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
            backgroundImage: `url(${getTemplateImageUrl("yootheme/cache/bd/Personen%20auf%20Segelboot-bdadb0cc.png")})`,
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
                  <p>Windsurfing Camp in Spain</p>
                </h1>
                <div
                  className="uk-panel uk-text-lead uk-margin uk-text-left"
                  uk-scrollspy-class=""
                >
                  <p>
                    Learn to windsurf in the beautiful Mediterranean waters of
                    Barcelona!
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
                <p>Bilingual<br />EN & ES</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barcelona Section */}
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
                    Windsurfcamp in Spain - Your Ultimate Windsurfing Holiday by
                    the Sea
                  </p>
                </h2>
                <div className="uk-panel uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin">
                  <p>
                    Feel the freedom on the water and discover windsurfing on
                    the coast of Barcelona! At our Surf Camp Spain, you&apos;ll
                    learn the perfect mix of balance, technique, and fun –
                    whether you&apos;re a beginner or already have some
                    experience.
                  </p>
                  <p>
                    Top coaching &amp; ideal conditions! The experienced
                    instructors at the BISC Sailing Center provide personalized
                    guidance to help you progress quickly. The Mediterranean Sea
                    offers perfect conditions for your water adventure!
                  </p>
                  <p>
                    Surfing brings people together! At our bilingual camp
                    (English/Spanish), you&apos;ll train with an international
                    community, experience team spirit, and celebrate shared
                    achievements.
                  </p>
                  <p>Join us Now!</p>
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
                              "yootheme/cache/b5/01-Windsurfen-im-Sommercamp-b53b7b0f.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Group of kids watching windsurfing instruction on a dock during watersports summer camp by the sea"
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
                    className="custom_acc_691a9cfdd4617"
                  >
                    <div id="js-2_0" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          AT a Glance
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <ul>
                            <li>Windsurfing on 4 days, 3 hours each</li>
                            <li>
                              For all levels: Beginners &amp; advanced /
                              Agegroup: 10–16
                            </li>
                            <li>
                              Surf experience: Theory, practice, team spirit,
                              and certified instructors for all levels
                            </li>
                            <li>
                              Perfect conditions – Established watersports
                              institution with top equipment: Barcelona
                              International Sailing Center (BISC)
                            </li>
                            <li>
                              Activity program (day/evening): Outdoor fun,
                              sports, creativity, campfires, disco, and more
                            </li>
                            <li>
                              Cultural experience Barcelona – Weekly trip to the
                              city center and main sights
                            </li>
                            <li>
                              Camp languages: English/Spanish – Learn languages
                              playfully in an international atmosphere
                            </li>
                            <li>
                              Accommodation: Great shared rooms with sea view
                            </li>
                            <li>
                              Full board for 7 days (Sun–Sat), 6 nights,
                              freshly prepared meals
                            </li>
                            <li>
                              24/7 all-round support: Our teamers are always
                              there for you
                            </li>
                            <li>
                              Digital detox approach: Phones and devices only
                              during siesta
                            </li>
                            <li>
                              Arrival &amp; departure services: Airport shuttle
                              available
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div id="js-2_6" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          arrival & departure
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <p>
                            All Roads Lead to Camp<br />
                            Whether by car, train, plane, or shuttle – your
                            child will arrive safely and stress-free. We&apos;ll
                            make sure everything runs smoothly!
                          </p>
                          <p>
                            Self-arrival: Simply drop off and pick up your child
                            yourself. You&apos;ll receive detailed directions via
                            email six weeks before camp starts – so nothing
                            stands in the way of a relaxed journey.
                          </p>
                          <p>
                            Flight with supervision: Our teamers accompany all
                            group flights, ensure a safe arrival, and are there
                            for the return trip as well.<br />
                            If a group flight cannot be arranged, we&apos;ll
                            inform you in advance – and you&apos;ll be able to
                            rebook or cancel the camp stay free of charge.
                          </p>
                          <p>
                            Shuttle service: Since many of our language camps
                            are located in remote areas, we&apos;re happy to
                            shuttle your child from the nearest airport,
                            Barcelona.<br />
                            The shuttle runs only on Sundays for arrival and
                            Saturdays for departure within specific time slots.<br />
                            If you need a transfer outside of these windows, a
                            private shuttle can be arranged for an extra fee –
                            just reach out to us individually.
                          </p>
                          <p>
                            <Link
                              href="/info/arrival-departure"
                              target="_blank"
                              rel="noopener"
                            >
                              You&apos;ll also find detailed information about
                              transfer options here.
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div id="js-2_7" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Coverage & Insurance
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <h4>Well Protected for Your Adventure</h4>
                          <p>
                            Whether it&apos;s minor mishaps or unexpected
                            incidents – with our Camp Adventure Insurance,
                            you&apos;re fully covered throughout your trip.
                          </p>
                          <p>
                            The Camp Adventure Insurance Package includes:<br />
                            Liability, accident, and health insurance for the
                            entire duration of the trip.<br />
                            ✔ Coverage for accidents &amp; doctor visits<br />
                            ✔ Protection against damage to property<br />
                            💰 Price: from USD45 per person per trip<br />
                            📅 Valid from arrival to departure<br />
                            🌍 Available only for international trips
                          </p>
                          <p>
                            <em>⚠ Important note:</em> Without international
                            insurance coverage, medical expenses must be paid
                            out of pocket.<br />
                            We recommend bringing a safety reserve of USD500 in
                            cash or a credit card.<br />
                            Participants from outside the EU must submit proof
                            of their own insurance before the trip.
                          </p>
                          <p>
                            The Camp Adventure Travel Cancellation Guarantee<br />
                            Our safety net in case of homesickness, illness
                            &amp; more.<br />
                            Need to cancel your trip? No problem! With our
                            Travel Cancellation Guarantee, you&apos;ll get a full
                            refund of your Camp Adventure fee – minus a
                            deductible of USD50 (Germany) or USD100 (UK/Spain).
                          </p>
                          <p>
                            ✔ Valid up to one day before departure<br />
                            ✔ Covers all reasons: illness, accidents, make-up
                            exams, or homesickness<br />
                            💰 Price: USD45 (1-week stay) / USD85 (multi-week
                            stay)
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
                          Your Windsurfing-Camp in Spain!
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <h4>
                            Windsurfing – Feel the Power of the Wind! 🌊🏄‍♂️💨
                          </h4>
                          <p>
                            Get ready for a week full of action on the water!
                            Windsurfing is already preselected in the booking
                            form – all that&apos;s missing are your details.
                          </p>
                          <p>
                            Secure your spot now and experience the freedom of
                            riding the waves! 🌊🌞
                          </p>
                          <p>
                            Want to discover even more? Stay for an extra week
                            and try out another exciting activity profile!
                          </p>
                          <p>Your summer holidays in Barcelona! 🇪🇸☀️</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <style jsx>{`
                  .custom_acc_691a9cfdd4617 .uk-accordion-title * {
                    color: #000000 !important;
                  }
                  .custom_acc_691a9cfdd4617 .uk-accordion-title {
                    padding: 10px !important;
                    color: #000000 !important;
                    background: #ffffff !important;
                    border: 1px solid #ffaa00 !important;
                    position: relative;
                    padding-left: 60px !important;
                  }
                  .custom_acc_691a9cfdd4617 .uk-accordion-title::before {
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
                  .custom_acc_691a9cfdd4617
                    .uk-open
                    > .uk-accordion-title::before {
                    content: "−";
                  }
                  .custom_acc_691a9cfdd4617 .uk-accordion-content {
                    border: 1px solid #ffaa00 !important;
                    background: #ffffff !important;
                    padding: 15px !important;
                    margin-top: 15px !important;
                  }
                  .custom_acc_691a9cfdd4617 > :nth-child(n + 2) {
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
                    src="https://www.bookacamp.de/en/booking/form/view-by-camp/ds7fdn347dsfndsf74n37en37en37dnd/windsurfing"
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

      {/* Content Section */}
      <div className="uk-section-muted uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h2 uk-text-center">Windsurfing Camps</h2>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
              <div className="uk-panel uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin">
                <p>
                  Our windsurfing camps in Barcelona offer professional
                  instruction in one of the best windsurfing locations in the
                  Mediterranean. Learn balance, technique, and navigation from
                  certified instructors.
                </p>
                <p>
                  Perfect for beginners and intermediate windsurfers who want to
                  master this exciting water sport in ideal conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Locations Section */}
      <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div className="uk-card uk-card-default uk-card-body">
                <h3 className="uk-h3">Barcelona Beach Camp</h3>
                <p>
                  Windsurfing instruction at BISC Sailing Center in Barcelona
                  with direct access to the Mediterranean Sea.
                </p>
                <Link
                  href="/destinations/en-spain-barcelona"
                  className="uk-button uk-button-primary"
                >
                  View Location
                </Link>
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
                    src="https://www.bookacamp.de/en/booking/form/view-by-camp/ds7fdn347dsfndsf74n37en37en37dnd/windsurfing"
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

