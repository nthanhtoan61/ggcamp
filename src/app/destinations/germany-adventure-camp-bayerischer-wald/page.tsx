"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { getTemplateImageUrl } from "@/lib/assets";

export default function GermanyBayerischerWaldPage() {
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
            backgroundImage: `url(${getTemplateImageUrl("yootheme/cache/48/1_Adventure-Camp-Bayerischer-Wald-Location-488e0733.jpg")})`,
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
                  International Summer Camp in Bavaria, Southern Germany
                </h1>
                <div
                  className="uk-panel uk-text-lead uk-margin uk-text-center"
                  uk-scrollspy-class=""
                >
                  <p>for children & teenagers from 7-16 years</p>
                </div>
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
                <div className="uk-panel uk-text-lead uk-margin" uk-scrollspy-class="">
                  <p>
                    Welcome to the Bavarian Forest (Bayerischer Wald), one of
                    the most beautiful holiday regions in Southern Germany!
                  </p>
                </div>
                <div
                  className="uk-panel uk-column-1-2@m uk-column-1-1@s uk-margin"
                  uk-scrollspy-class=""
                >
                  <p>
                    In our international summer camp in Bavaria, you can expect
                    a top-notch language and adventure camp in collaboration with
                    the Bavarian State Sports Association (<strong>BLSV</strong>
                    ). You can choose whether to participate in our outdoor
                    program, take a <strong>sports course</strong>, or improve
                    your English <strong>language skills</strong>. You can also
                    spend a bit more time in camp and combine everything
                    together. Innovative and creative learning concepts ensure
                    that <strong>English lessons</strong> during the holidays
                    are also fun! Outdoor enthusiasts will have a great time in
                    the midst of Bavarian nature with our fantastic{" "}
                    <strong>leisure program</strong>, featuring a wonderful
                    selection of activities from canoeing and kayaking to
                    climbing and team-building. And the athletes among you will
                    be thrilled with the excellent sports facilities available
                    on-site and in the surrounding area. You will be well looked
                    after by our international, German- and English-speaking
                    team, who will introduce you to the English language in a
                    fun way, even without a language course, ensuring plenty of
                    enjoyment and an international <strong>camp spirit</strong>.
                  </p>
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
                            lat: 48.9666,
                            lng: 13.1129,
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
                        center: { lat: 48.9666, lng: 13.1129 },
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
                        <p>Starting location</p>
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
                Germany
              </div>
              <h2 className="uk-h2 uk-text-center">
                Book our vacation camp in the beautiful Bavarian Forest
              </h2>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
              <ul className="uk-list uk-list-divider uk-list-large uk-text-left@s uk-text-center" uk-scrollspy-class="uk-animation-slide-right-small">
                <li className="el-item">
                  <div className="uk-child-width-expand@m uk-grid-small" uk-grid="">
                    <div className="uk-width-medium@m uk-text-break">
                      <div className="el-title uk-margin-remove uk-text-bold">
                        Location
                      </div>
                    </div>
                    <div>
                      <div className="el-content uk-panel">
                        <p>Bayerischer Wald (Regen), Bayern</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="el-item">
                  <div className="uk-child-width-expand@m uk-grid-small" uk-grid="">
                    <div className="uk-width-medium@m uk-text-break">
                      <div className="el-title uk-margin-remove uk-text-bold">
                        Ages
                      </div>
                    </div>
                    <div>
                      <div className="el-content uk-panel">
                        <p>Junior 7 - 12 years</p>
                        <p>Senior 12 - 16 years</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="el-item">
                  <div className="uk-child-width-expand@m uk-grid-small" uk-grid="">
                    <div className="uk-width-medium@m uk-text-break">
                      <div className="el-title uk-margin-remove uk-text-bold">
                        Rates
                      </div>
                    </div>
                    <div>
                      <div className="el-content uk-panel">
                        <p>from 435 USD</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="el-item">
                  <div className="uk-child-width-expand@m uk-grid-small" uk-grid="">
                    <div className="uk-width-medium@m uk-text-break">
                      <div className="el-title uk-margin-remove uk-text-bold">
                        Duration
                      </div>
                    </div>
                    <div>
                      <div className="el-content uk-panel">
                        <p>from 7 days (Sun - Sat)</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="el-item">
                  <div className="uk-child-width-expand@m uk-grid-small" uk-grid="">
                    <div className="uk-width-medium@m uk-text-break">
                      <div className="el-title uk-margin-remove uk-text-bold">
                        Accommodation
                      </div>
                    </div>
                    <div>
                      <div className="el-content uk-panel">
                        <p>Tent village, huts, Tiny houses, or BLSV sports camp</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="el-item">
                  <div className="uk-child-width-expand@m uk-grid-small" uk-grid="">
                    <div className="uk-width-medium@m uk-text-break">
                      <div className="el-title uk-margin-remove uk-text-bold">
                        Courses
                      </div>
                    </div>
                    <div>
                      <div className="el-content uk-panel">
                        <p>
                          Adventure, Sports & Creative, Survival, Climbing,
                          Skating, Swimming, English and German classes
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
                      href="#Profile"
                      uk-scroll=""
                    >
                      Courses
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

      {/* Accommodation & Meals Section */}
      <div
        className="uk-section-default uk-section-overlap uk-section uk-padding-remove-top"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-margin-medium uk-container uk-container-small">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1">
              <div className="uk-width-1-1@m">
                <h2
                  className="uk-h2 uk-text-center"
                  uk-scrollspy-class="uk-animation-slide-left-medium"
                >
                  Accommodation & Meals
                </h2>
                <div
                  className="uk-divider-icon uk-width-medium uk-margin-auto"
                  uk-scrollspy-class="uk-animation-slide-right-medium"
                ></div>
                <div
                  className="uk-panel uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin"
                  uk-scrollspy-class="uk-animation-slide-left-medium"
                >
                  <p>
                    Our campsite is made up of a <strong>tent village</strong>,{" "}
                    <strong>huts</strong> and <strong>Tiny houses</strong>. Or
                    you can choose to stay in the neighboring{" "}
                    <strong>BLSV sports camp</strong> in shared rooms or cabins.
                    Just like the daily program, the tents and rooms are divided
                    into Junior (7 to 12 years) and Senior (12 to 16 years)
                    groups.
                  </p>
                  <p>
                    Our spacious tents are equipped with a wooden floor and a
                    sleeping platform and can accommodate six or seven campers.
                    Snuggled up with a camping mat and sleeping bag, campers can
                    sleep in comfort after a busy day of activities.
                  </p>
                  <p>
                    Our professional kitchen team at the BLSV Sports Camp
                    ensures <strong>delicious meals</strong> with three meals a
                    day. Breakfast always includes a selection of bread rolls,
                    various cold cuts, and spreads (jams, honey, chocolate
                    cream, etc.), along with a rich variety of cereals and
                    fruits. For lunch, we provide a warm, wholesome meal and set
                    up a delicious salad buffet. In the evening, we offer a
                    hearty snack, warm dishes, and salad. Of course, we also
                    provide <strong>vegetarian</strong> and{" "}
                    <strong>pork-free</strong> options, and special diets are no
                    problem if you inform us of any <strong>food intolerances</strong>{" "}
                    prior to your arrival. <strong>Water</strong> and{" "}
                    <strong>fruit</strong> are also available to you free of
                    charge between meals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div
        className="uk-section-muted uk-section-overlap uk-section"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-margin-medium uk-container uk-container-small">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1">
              <div className="uk-width-1-1@m">
                <h2
                  className="uk-h2 uk-text-center"
                  id="Profile"
                  uk-scrollspy-class=""
                >
                  Courses
                </h2>
                <div
                  className="uk-divider-icon uk-width-medium uk-margin-auto"
                  uk-scrollspy-class=""
                ></div>
                <div
                  className="uk-panel uk-text-large uk-margin"
                  uk-scrollspy-class=""
                >
                  <p>
                    At our international summer camp in Bavaria, you can choose
                    from a wide range of courses including adventure activities,
                    sports, language classes, and creative programs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dates & Prices Section */}
      <div
        className="uk-section-default uk-section-overlap uk-section"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-margin-medium uk-container uk-container-small">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1">
              <div className="uk-width-1-1@m">
                <div className="uk-h2 uk-text-center" uk-scrollspy-class="">
                  <a id="Daten"></a>Dates & Prices 2026
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
                    Prices start from 435 USD per week.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transfers Section */}
      <div
        className="uk-section-muted uk-section-overlap uk-section"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-margin-medium uk-container uk-container-small">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1">
              <div className="uk-width-1-1@m">
                <div className="uk-h2 uk-text-center" uk-scrollspy-class="">
                  <a id="Transfers"></a>Arrival & Departure Services
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
                    We offer transfer services from Munich Airport and Munich
                    Central Station. Please check our booking system for details
                    and prices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div
        className="uk-section-default uk-section-overlap uk-section"
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
                      src="https://bookacamp.de/en/booking/form/view-by-camp/ds7fdn347dsfndsf74n37en37en37dnd/regenac"
                      title="Bookacamp, die Buchungsplattform von Go and Grow Camp"
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

