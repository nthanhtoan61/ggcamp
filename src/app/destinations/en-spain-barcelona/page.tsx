"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { getTemplateImageUrl } from "@/lib/assets";

export default function SpainBarcelonaPage() {
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
            style={{ backgroundColor: "rgba(0, 0, 0, 0.02)" }}
          ></div>
          <div className="uk-container uk-container-large uk-position-relative">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
              <div className="uk-width-1-1@m">
                <h1
                  className="uk-heading-large uk-text-center"
                  uk-scrollspy-class=""
                >
                  Barcelona, Beach & Adventure Camp 2026
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="uk-section-default uk-section uk-padding-remove-bottom">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h1 uk-text-center@m uk-text-center">
                <p>
                  <strong>
                    Welcome the Barcelona Beach Camp – Your ultimate adventure
                    by the Ocean!
                  </strong>
                </p>
                <p>
                  For teenagers aged 10 to 16, we offer unforgettable
                  experiences at the Barcelona Beach Camp. Learn the art of
                  sailing and windsurfing, explore exciting multi water
                  adventure courses, enhance your football skills, or deepen
                  your language proficiency in English and Spanish. Immerse
                  yourself in a week full of fun, new friendships, and action –
                  become part of our Barcelona Beach Camp and discover the Ocean
                  in a unique way!
                </p>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="uk-section-default uk-section-overlap uk-section uk-section-small" uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-grid-large uk-margin-xlarge" uk-grid="">
            <div className="uk-grid-item-match uk-flex-middle uk-width-1-3@m">
              <div className="uk-panel uk-width-1-1">
                <div uk-scrollspy-class="">
                  <center>
                    <a
                      href="https://www.provenexpert.com/camp-adventure/?utm_source=Widget&utm_medium=Widget&utm_campaign=Widget"
                      title="Kundenbewertungen & Erfahrungen zu Go and Grow Camp. Mehr Infos anzeigen."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="https://images.provenexpert.com/93/fc/d5e99b2883e0bb405862d9993db6/widget_recommendation_465_04f6f.png?t=1662145244032"
                        width={465}
                        height={200}
                        alt="Kundenbewertungen & Erfahrungen zu Go and Grow Camp. Mehr Infos anzeigen."
                        style={{ border: 0 }}
                      />
                    </a>
                  </center>
                </div>
              </div>
            </div>
            <div className="uk-grid-item-match uk-flex-middle uk-width-2-3@m">
              <div className="uk-panel uk-width-1-1">
                <blockquote className="uk-margin-medium uk-text-left@m uk-text-center" uk-scrollspy-class="">
                  <p>
                    My 2 daughters (13) cannot wait to join another year with
                    Go and Grow Camp! Thank you so much for the great experiences
                    they had the last 2 summers in Germany and the UK!
                  </p>
                  <footer className="el-footer">
                    <cite className="el-author">
                      <a
                        className="uk-link-muted"
                        href="https://goo.gl/maps/kZGcrKmbedpcCo2d9"
                        target="_blank"
                      >
                        Isabel W., Spain
                      </a>
                    </cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div
        className="uk-section-default uk-section-overlap uk-section"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-margin-medium uk-container uk-container-small">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1">
              <div className="uk-width-1-1@m">
                <h2 className="uk-h2 uk-text-center" uk-scrollspy-class="uk-animation-slide-left-medium">Spain</h2>
                <div
                  className="uk-divider-icon uk-width-medium uk-margin-auto"
                  uk-scrollspy-class="uk-animation-slide-right-medium"
                ></div>
                <div
                  className="uk-panel uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin"
                  uk-scrollspy-class="uk-animation-slide-left-medium"
                >
                  <p>
                    <strong>
                      Welcome to our new Beach Camp in Barcelona for Teens
                      (10-16 years)
                    </strong>
                  </p>
                  <p>
                    Ahoy, young sailors and sea enthusiasts! Get ready for an
                    unforgettable nautical journey at our Beach Camp in the
                    heart of Barcelona, Spain. Embark on an exciting adventure
                    where the sea becomes your playground, and the wind guides
                    your sails.
                  </p>
                  <p>
                    Let the waves of the ocean be your companions as you explore
                    the wonders of Barcelona with new friends. But that&apos;s
                    not all! Our camp not only offers thrilling sailing and
                    windsurfing adventures but also the opportunity to improve
                    your language skills in English or Spanish. Immerse yourself
                    in a language course to expand your foreign language
                    knowledge and discover new cultural horizons.
                  </p>
                  <p>
                    For participants passionate about football, in addition to
                    water sports activities and language courses, there is also
                    the option to join the Soccer course hosted by the{" "}
                    <span data-teams="true">C.E.Vila Olímpica</span> and their
                    professional team of coaches! There, you can showcase your
                    soccer skills. Put on your football boots and demonstrate
                    your abilities on the field to become a true football
                    champion.
                  </p>
                  <p>
                    Get ready for an unforgettable experience at our Beach Camp
                    in Barcelona! Every minute here will turn into an adventure
                    that will stay with you. We look forward to spending an
                    unforgettable time by the ocean with you!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1">
              <div
                className="uk-slider-container uk-margin uk-text-center"
                uk-slider="sets: 1; center: 1; autoplay: 1;"
                uk-scrollspy-class=""
              >
                <div className="uk-position-relative">
                  <div className="uk-slider-items uk-grid uk-grid-small">
                    <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                      <div className="el-item uk-inline-clip">
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/0c/Balkon-0c65d364.png"
                          )}
                          width={1260}
                          height={1260}
                          alt="Balcony of our Barcelona Beach Camp"
                          loading="lazy"
                          className="el-image uk-transition-opaque"
                        />
                      </div>
                    </div>
                    <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                      <div className="el-item uk-inline-clip">
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/fa/Zimmer-fae8ecc3.png"
                          )}
                          width={1260}
                          height={1260}
                          alt="Rooms at Barcelona Beach Camp Location"
                          loading="lazy"
                          className="el-image uk-transition-opaque"
                        />
                      </div>
                    </div>
                    <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                      <div className="el-item uk-inline-clip">
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/2d/Segelboote%20in%20front-2d62ef6d.png"
                          )}
                          width={1260}
                          height={1260}
                          alt="Sailing Harbour at our Barcelona Beach Camp"
                          loading="lazy"
                          className="el-image uk-transition-opaque"
                        />
                      </div>
                    </div>
                    <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                      <div className="el-item uk-inline-clip">
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/0c/Familie%20auf%20Segelboot-0c209973.png"
                          )}
                          width={1260}
                          height={1260}
                          alt="Kids doing a sailing course at our Barcelona Beach Camp"
                          loading="lazy"
                          className="el-image uk-transition-opaque"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="uk-margin-medium uk-container uk-container-small">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1">
              <div className="uk-width-1-1@m">
                <div className="uk-panel uk-text-lead uk-margin" uk-scrollspy-class="">
                  <p>CAMP LOCATION</p>
                </div>
                <div
                  className="uk-panel uk-column-1-2@m uk-column-1-1@s uk-margin"
                  uk-scrollspy-class=""
                >
                  <p>
                    <strong>
                      Accommodation at BISC - Your home directly at the ocean!
                      <br />
                    </strong>
                  </p>
                  <p>
                    Our base camp is the renowned Barcelona International Sailing
                    Center (BISC), nestled along the captivating coast of
                    Barcelona. BISC provides a secure and vibrant environment for
                    our young sailors. Check out their accommodations{" "}
                    <a href="https://eng.bisc.cat/bisc" target="_new">
                      here
                    </a>{" "}
                    to see the comfort and safety that awaits you during your
                    stay.
                  </p>
                  <p>
                    All rooms have seaview and sleep 4-12 campers on modern bunk
                    beds.
                  </p>
                  <p>
                    Imagine waking up to the gentle sound of waves and the
                    refreshing sea breeze. BISC offers top-notch facilities,
                    ensuring that your time off the water is just as enjoyable as
                    your time on it. Comfortable rooms, delicious meals, and a
                    lively atmosphere await, making it the perfect setting for
                    forging lifelong friendships.
                  </p>
                  <p>
                    <em>
                      Please note: The organizer of this trip is our Spanish
                      company Outdoor Education Spain S.L.
                    </em>
                  </p>
                </div>
                <div className="uk-margin" uk-scrollspy-class="">
                  <iframe
                    src="https://www.youtube.com/embed/py3LOdsngwY?si=XnN84doJBsulBK_F&disablekb=1"
                    allow="autoplay"
                    allowFullScreen
                    uk-responsive=""
                    width="800"
                    height="450"
                  ></iframe>
                </div>
                <div
                  className="uk-position-relative uk-position-z-index uk-dark"
                  style={{ height: "300px" }}
                  uk-map=""
                  data-map-type="leaflet"
                  uk-scrollspy-class=""
                >
                  <script
                    type="application/json"
                    dangerouslySetInnerHTML={{
                      __html: JSON.stringify({
                        markers: [
                          {
                            lat: 41.4113,
                            lng: 2.2285,
                            title: "Go and Grow Camp",
                          },
                        ],
                        controls: true,
                        dragging: true,
                        max_zoom: 18,
                        min_zoom: 0,
                        poi: false,
                        type: "roadmap",
                        zoom: "7",
                        zooming: true,
                        center: { lat: 41.4113, lng: 2.2285 },
                        lazyload: true,
                        library: "leaflet",
                        baseUrl:
                          "/templates/yootheme/vendor/assets/leaflet/leaflet/dist",
                      }),
                    }}
                  ></script>
                  <template>
                    <div className="el-item uk-text-default uk-font-default uk-margin-remove-first-child">
                      <h3 className="el-title uk-margin-top uk-margin-remove-bottom">
                        Go and Grow Camp
                      </h3>
                      <div className="el-content uk-panel uk-margin-top">
                        <p>Abenteuer Camp Regental</p>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Basic Facts Section */}
      <div className="uk-section-muted uk-section-overlap uk-section">
        <div className="uk-container uk-container-small">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div className="uk-h5 uk-margin-remove-bottom uk-text-center">
                Spain
              </div>
              <h2 className="uk-h2 uk-text-center">
                Barcelona Beach Camp - Sailing & Water Sports
              </h2>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
              <ul className="uk-list uk-list-divider uk-list-large uk-text-left@s uk-text-center" uk-scrollspy-class="uk-animation-slide-right-small">
                <li className="el-item">
                  <div className="uk-child-width-expand@m uk-grid-small" uk-grid="">
                    <div className="uk-width-medium@m uk-text-break">
                      <h3 className="el-title uk-margin-remove uk-h6">Location</h3>
                    </div>
                    <div>
                      <div className="el-content uk-panel">
                        <p>BISC Sailing Center Barcelona (Spain)</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="el-item">
                  <div className="uk-child-width-expand@m uk-grid-small" uk-grid="">
                    <div className="uk-width-medium@m uk-text-break">
                      <h3 className="el-title uk-margin-remove uk-h6">Age</h3>
                    </div>
                    <div>
                      <div className="el-content uk-panel">
                        <p>10-16 years</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="el-item">
                  <div className="uk-child-width-expand@m uk-grid-small" uk-grid="">
                    <div className="uk-width-medium@m uk-text-break">
                      <h3 className="el-title uk-margin-remove uk-h6">Price</h3>
                    </div>
                    <div>
                      <div className="el-content uk-panel">
                        <p>
                          795 USD / 1 week <br />
                          1495 USD / 2 weeks
                        </p>
                        <p>Includes:</p>
                        <ul>
                          <li>
                            Accommodation and meals, 24-hour supervision, all
                            excursions and activities
                          </li>
                        </ul>
                        <p>Optional in the mornings:</p>
                        <ul>
                          <li>Language Course +120 USD / week</li>
                          <li>
                            C.E.Vila Olímpica Football Course + 245 USD / week
                          </li>
                          <li>Scuba Diving Course + 395 USD / week</li>
                        </ul>
                        <p>Optional in the afternoons:</p>
                        <ul>
                          <li>Sailing Course + 195 USD / week</li>
                          <li>Windsurfing Course + 195 USD / week</li>
                          <li>Multi Adventure Water Course + 195 USD / week</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="el-item">
                  <div className="uk-child-width-expand@m uk-grid-small" uk-grid="">
                    <div className="uk-width-medium@m uk-text-break">
                      <h3 className="el-title uk-margin-remove uk-h6">Duration</h3>
                    </div>
                    <div>
                      <div className="el-content uk-panel">
                        <p>
                          <span>From 7 days (Sun - Sat)</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="uk-margin uk-text-center" uk-scrollspy-class="uk-animation-fade">
                <div className="uk-flex-middle uk-grid-small uk-child-width-auto uk-flex-center" uk-grid="">
                  <div className="el-item">
                    <a
                      className="el-content uk-button uk-button-default"
                      href="#Program"
                      uk-scroll=""
                    >
                      Program
                    </a>
                  </div>
                  <div className="el-item">
                    <a
                      className="el-content uk-button uk-button-default"
                      href="#Daten"
                      uk-scroll=""
                    >
                      Dates & Prices
                    </a>
                  </div>
                  <div className="el-item">
                    <a
                      className="el-content uk-button uk-button-default"
                      href="#Transfers"
                      uk-scroll=""
                    >
                      Transfers
                    </a>
                  </div>
                  <div className="el-item">
                    <a
                      className="el-content uk-button uk-button-default"
                      href="#Buchung"
                      uk-scroll=""
                    >
                      Booking
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Program Section */}
      <div
        className="uk-section-default uk-section-overlap uk-section"
        id="Program"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-margin-medium uk-container uk-container-small">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1">
              <div className="uk-width-1-1@m">
                <h2 className="uk-h2 uk-text-center" uk-scrollspy-class="">
                  Program
                </h2>
                <div
                  className="uk-divider-icon uk-width-medium uk-margin-auto"
                  uk-scrollspy-class=""
                ></div>
                <div
                  className="uk-panel uk-dropcap uk-margin"
                  uk-scrollspy-class="uk-animation-slide-right-medium"
                >
                  <p>
                    <strong>Camp Life – Where Adventure Meets Fun</strong>
                  </p>
                  <p>
                    Wondering what a day in our camp looks like? Dive into an
                    exciting world where you can explore new activities every day,
                    all designed to have loads of fun and create unforgettable
                    memories.
                  </p>
                  <p>
                    Our Barcelona Beach Camp offers a variety of different
                    activities, including sports and action like beach volleyball
                    or a round of Capture the Flag, creative workshops, and ocean
                    swimming, to name a few upcoming activities we offer. These
                    activities allow you to fill your day with fun and adventures,
                    even if you choose not to enroll in an additional course.
                    Boredom is not on our agenda!
                  </p>
                  <p>
                    Safety is a top priority at the Beach Camp. Our experienced
                    team and certified water sports instructors are available 24/7
                    to ensure a worry-free experience for participants and parents.
                    From morning sports to evening campfires, every moment is
                    geared towards personal growth, teamwork, and of course, loads
                    of fun.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dates & Prices Section */}
      <div
        className="uk-section-muted uk-section-overlap uk-section"
        id="Daten"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-margin-medium uk-container uk-container-small">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1">
              <div className="uk-width-1-1@m">
                <div className="uk-h2 uk-text-center" uk-scrollspy-class="">
                  Dates & Prices 2026
                </div>
                <div
                  className="uk-divider-icon uk-width-medium uk-margin-auto"
                  uk-scrollspy-class=""
                ></div>
                <div
                  className="uk-panel uk-text-large uk-margin"
                  uk-scrollspy-class=""
                >
                  <p>
                    Please check our booking system for current dates and prices.
                    Prices start from 795 USD per week.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transfers Section */}
      <div
        className="uk-section-default uk-section-overlap uk-section"
        id="Transfers"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-margin-medium uk-container uk-container-small">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1">
              <div className="uk-width-1-1@m">
                <div className="uk-h2 uk-text-center" uk-scrollspy-class="">
                  Arrival & Departure Services
                </div>
                <div
                  className="uk-divider-icon uk-width-medium uk-margin-auto"
                  uk-scrollspy-class=""
                ></div>
                <div
                  className="uk-panel uk-text-large uk-margin"
                  uk-scrollspy-class=""
                >
                  <p>
                    We offer transfer services from Barcelona El Prat Airport.
                    Please check our booking system for details and prices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div
        className="uk-section-muted uk-section-overlap uk-section"
        id="Buchung"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-margin-medium uk-container uk-container-small">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1">
              <div className="uk-width-1-1@m">
                <h2 className="uk-h2 uk-text-center">Booking</h2>
                <div
                  className="uk-divider-icon uk-width-medium uk-margin-auto"
                ></div>
                <div className="uk-panel uk-margin">
                  <div style={{ textAlign: "center" }}>
                    <iframe
                      src="https://bookacamp.de/en/booking/form/view-by-camp/ds7fdn347dsfndsf74n37en37en37dnd/beachcamp"
                    title="Bookacamp, die Buchungsplattform von Go and Grow Camp"
                    allowFullScreen={true}
                    width="1000"
                    height="850"
                      frameBorder="0"
                      allowFullScreen={true}
                    ></iframe>
                  </div>
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

