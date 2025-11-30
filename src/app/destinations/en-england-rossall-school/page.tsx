"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { getTemplateImageUrl } from "@/lib/assets";

export default function EnglandRossallSchoolPage() {
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
            backgroundImage: `url(${getTemplateImageUrl("yootheme/cache/48/01-Bath-English-Language-Camp-Common-Room-48c460e3.jpg")})`,
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
                  English Language Camp at Rossall School, England
                </h1>
                <div
                  className="uk-panel uk-text-lead uk-margin uk-text-center"
                  uk-scrollspy-class=""
                >
                  <p>for children & teenagers from 10-17 years</p>
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
                    English Language Camp at Rossall School, Lancashire
                  </p>
                </div>
                <div
                  className="uk-panel uk-column-1-2@m uk-column-1-1@s uk-margin"
                  uk-scrollspy-class=""
                >
                  <p>
                    Rossall School is a prestigious independent boarding school
                    located on the beautiful Lancashire coast, near Blackpool.
                    The school offers excellent facilities and a traditional
                    British boarding school experience.
                  </p>
                  <p>
                    Our English language camp at Rossall School provides an
                    immersive English learning experience combined with exciting
                    activities and cultural excursions. Students will have the
                    opportunity to improve their English skills while experiencing
                    life at a traditional British boarding school.
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
                            lat: 53.9246,
                            lng: -3.00764,
                            title: "Go and Grow Camp - Rossall School",
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
                        center: { lat: 53.9246, lng: -3.00764 },
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
                        Go and Grow Camp - Rossall School
                      </h3>
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
                England
              </div>
              <h2 className="uk-h2 uk-text-center">
                English Language Camp at Rossall School
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
                        <p>Rossall School, Lancashire, England</p>
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
                        <p>10 - 17 years</p>
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
                        <p>from 795 USD</p>
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
                        <p>7 or 14 days</p>
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
                        <p>Boarding school accommodation</p>
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
                        <p>English classic, English TOEFL®</p>
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
                      href="#Kurse"
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

      {/* Courses Section */}
      <div
        className="uk-section-default uk-section-overlap uk-section"
        id="Kurse"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-margin-medium uk-container uk-container-small">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1">
              <div className="uk-width-1-1@m">
                <h2 className="uk-h2 uk-text-center" uk-scrollspy-class="">
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
                    We offer English Classic and English TOEFL® courses at Rossall
                    School. Our innovative and creative learning concepts ensure
                    that English lessons during the holidays are also fun!
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
                    We offer transfer services from Manchester Airport and
                    Liverpool Airport. Please check our booking system for
                    details and prices.
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
                      src="https://bookacamp.de/en/booking/form/view-by-camp/ds7fdn347dsfndsf74n37en37en37dnd/ros"
                    title="Bookacamp, die Buchungsplattform von Go and Grow Camp"
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

