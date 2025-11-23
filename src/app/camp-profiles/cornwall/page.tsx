"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { getTemplateImageUrl } from "@/lib/assets";
import { useEffect } from "react";

export default function CornwallPage() {
  useEffect(() => {
    // Load Leaflet for map
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      script.async = true;
      document.head.appendChild(script);

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div
        className="uk-section-default uk-section-overlap uk-preserve-color uk-light uk-position-relative"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div
          className="uk-background-norepeat uk-background-cover uk-background-center-center uk-section uk-section-xlarge"
          style={{
            backgroundImage: `url(${getTemplateImageUrl(
              "yootheme/cache/0a/sprache_header-0aad37bf.webp"
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
                  className="uk-heading-large uk-margin-remove-bottom uk-text-center"
                  uk-scrollspy-class=""
                >
                  Summer Language Trip 2025 to England
                </h1>
                <div
                  className="uk-panel uk-text-lead uk-margin uk-text-center"
                  uk-scrollspy-class=""
                >
                  <p>Learn, improve and more English</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="uk-section-default uk-section uk-padding-remove-bottom">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h1 uk-text-center@m uk-text-center">
                <p>
                  Our English Camp on the Island, with accompanied group flight
                  from Frankfurt and Munich
                </p>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="uk-section-default uk-section-overlap uk-section uk-section-small">
        <div className="uk-container uk-container-large">
          <div
            className="uk-grid tm-grid-expand uk-grid-large uk-margin-xlarge"
            uk-grid=""
          >
            <div className="uk-grid-item-match uk-flex-middle uk-width-1-3@m">
              <div className="uk-panel uk-width-1-1">
                <div uk-scrollspy-class="">
                  <center>
                    <a
                      href="https://www.provenexpert.com/camp-adventure/?utm_source=Widget&utm_medium=Widget&utm_campaign=Widget"
                      title="Customer reviews & experiences for Camp Adventure. Show more info."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="https://images.provenexpert.com/93/fc/d5e99b2883e0bb405862d9993db6/widget_recommendation_465_04f6f.png?t=1662145244032"
                        width={465}
                        height={200}
                        alt="Customer reviews & experiences for Camp Adventure. Show more info."
                        style={{ border: 0 }}
                        unoptimized
                      />
                    </a>
                  </center>
                </div>
              </div>
            </div>
            <div className="uk-grid-item-match uk-flex-middle uk-width-2-3@m">
              <div className="uk-panel uk-width-1-1">
                <blockquote
                  className="uk-margin-medium uk-text-left@m uk-text-center"
                  uk-scrollspy-class=""
                >
                  <p>
                    Very good camp for children. I recommend it to everyone. My
                    son will participate in this camp again. He likes it very
                    much.
                  </p>
                  <footer className="el-footer">
                    <cite className="el-author">Jacek C., Poland</cite>
                  </footer>
                </blockquote>
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
              <div
                className="uk-h5 uk-text-center"
                uk-scrollspy-class="uk-animation-slide-left-medium"
              >
                England
              </div>
              <h2
                className="uk-h2 uk-text-center"
                uk-scrollspy-class="uk-animation-slide-right-medium"
              >
                <p>
                  Cornwall & London – Two Worlds, One Unforgettable Adventure!
                </p>
              </h2>
              <div
                className="uk-divider-icon uk-width-medium uk-margin-auto"
                uk-scrollspy-class="uk-animation-slide-left-medium"
              ></div>
            </div>
          </div>
          <div className="uk-margin-large uk-container uk-container-small">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1">
              <div className="uk-width-1-1@m">
                <ul
                  className="uk-list uk-list-divider uk-list-large uk-text-left@s uk-text-center"
                  uk-scrollspy-class="uk-animation-slide-right-small"
                >
                  <li className="el-item">
                    <div
                      className="uk-child-width-expand@m uk-grid-small"
                      uk-grid=""
                    >
                      <div className="uk-width-medium@m uk-text-break">
                        <div className="el-title uk-margin-remove uk-h6">
                          Location
                        </div>
                      </div>
                      <div>
                        <div className="el-content uk-panel">
                          <p>Cornwall & London</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="el-item">
                    <div
                      className="uk-child-width-expand@m uk-grid-small"
                      uk-grid=""
                    >
                      <div className="uk-width-medium@m uk-text-break">
                        <div className="el-title uk-margin-remove uk-h6">
                          Age
                        </div>
                      </div>
                      <div>
                        <div className="el-content uk-panel">
                          <p>10 - 15 years</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="el-item">
                    <div
                      className="uk-child-width-expand@m uk-grid-small"
                      uk-grid=""
                    >
                      <div className="uk-width-medium@m uk-text-break">
                        <div className="el-title uk-margin-remove uk-h6">
                          Price
                        </div>
                      </div>
                      <div>
                        <div className="el-content uk-panel">
                          <p>from 1,995 USD</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="el-item">
                    <div
                      className="uk-child-width-expand@m uk-grid-small"
                      uk-grid=""
                    >
                      <div className="uk-width-medium@m uk-text-break">
                        <div className="el-title uk-margin-remove uk-h6">
                          Duration
                        </div>
                      </div>
                      <div>
                        <div className="el-content uk-panel">
                          <p>14 days (Sun - Sat)</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="el-item">
                    <div
                      className="uk-child-width-expand@m uk-grid-small"
                      uk-grid=""
                    >
                      <div className="uk-width-medium@m uk-text-break">
                        <div className="el-title uk-margin-remove uk-h6">
                          Accommodation
                        </div>
                      </div>
                      <div>
                        <div className="el-content uk-panel">
                          <p>Cornwall On Campus & London Youth Hostel</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="el-item">
                    <div
                      className="uk-child-width-expand@m uk-grid-small"
                      uk-grid=""
                    >
                      <div className="uk-width-medium@m uk-text-break">
                        <div className="el-title uk-margin-remove uk-h6">
                          Courses
                        </div>
                      </div>
                      <div>
                        <div className="el-content uk-panel">
                          <p>English Classic. English TOEFL®, Windsurfing</p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div
                  className="uk-margin uk-text-center"
                  uk-scrollspy-class="uk-animation-fade"
                >
                  <div
                    className="uk-flex-middle uk-grid-small uk-child-width-auto uk-flex-center"
                    uk-grid=""
                  >
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
      </div>

      {/* Location Section */}
      <div className="uk-section-default uk-section-overlap uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-margin-medium uk-container uk-container-small">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1">
              <div className="uk-width-1-1@m">
                <div
                  className="uk-panel uk-text-lead uk-margin"
                  uk-scrollspy-class=""
                >
                  <p>Locations – Cornwall & London: the best of both worlds</p>
                </div>
                <div
                  className="uk-panel uk-column-1-2@m uk-column-1-1@s uk-margin"
                  uk-scrollspy-class=""
                >
                  <p>
                    The language camp takes your child to the two most exciting
                    sides of England – Cornwall and London. In Cornwall, the
                    sunny south of the country, endless beaches, impressive
                    cliffs and picturesque coastal towns await. Our campus is
                    located in Falmouth, a safe and lively port city with cafés,
                    street food, small shops and real beach life. Everything is
                    within easy walking distance – perfect for young people who
                    want to experience adventure, language and nature. The mild
                    climate, the family atmosphere and the relaxed feeling of
                    life make Cornwall an ideal destination for youth travel –
                    sun, English and new friendships included.
                  </p>
                  <p>
                    After the stay in the south, it&apos;s on to London – the
                    metropolis that never stands still! Here history, culture
                    and lifestyle meet: from Big Ben and Tower Bridge to the
                    colorful neighborhoods of Camden, Notting Hill and Covent
                    Garden. Street food markets, parks, street music and
                    world-famous sights make London loud, lively and inspiring.
                  </p>
                  <p>
                    Both scenically and culturally, this combination is unique –
                    it makes real England accessible to young people up close
                    and is lived Learning by Living.
                  </p>
                </div>
                <div
                  className="uk-position-relative uk-position-z-index uk-dark"
                  style={{ height: "300px" }}
                  uk-map=""
                  data-map-type="leaflet"
                  uk-scrollspy-class=""
                >
                  <div id="map" style={{ height: "100%", width: "100%" }}></div>
                  <Script id="map-config" strategy="afterInteractive">
                    {`
                      if (typeof window !== 'undefined' && window.L) {
                        const map = L.map('map').setView([50.1484375, -5.0690813064575195], 7);
                        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                          attribution: '© OpenStreetMap contributors'
                        }).addTo(map);
                        L.marker([50.1484375, -5.0690813064575195])
                          .addTo(map)
                          .bindPopup('Rossall School - Camp Adventure<br/>International Sports & Language Camps')
                          .openPopup();
                      }
                    `}
                  </Script>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accommodation Section */}
      <div className="uk-section-default uk-section-overlap uk-section uk-padding-remove-top">
        <div className="uk-container uk-container-large">
          <div className="uk-margin-medium uk-container uk-container-small">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1">
              <div className="uk-width-1-1@m">
                <h2
                  className="uk-h2 uk-text-center"
                  uk-scrollspy-class="uk-animation-slide-left-medium"
                >
                  <p>
                    Accommodation – Cornwall On Campus & London Youth Hostel
                    Experience
                  </p>
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
                    In Cornwall, participants stay on a modern campus in
                    Falmouth, just a few minutes from the beach and the city.
                    The young people live in small shared apartments with double
                    or single rooms as well as their own counselor room. Modern
                    apartments with a common room and kitchen provide a real
                    campus feeling – cooking together, chatting and relaxing
                    included. The grounds are green, safe and perfectly located
                    – short distances to lessons, sports and the sea offer
                    maximum freedom. The counselors are always nearby – with
                    24/7 supervision, heart and overview. A familiar
                    togetherness quickly develops here – almost like in a small
                    village, just with beach life!
                  </p>
                  <p>
                    After campus life, it&apos;s: London calling!
                    <br />
                    In the capital, the young people stay overnight in a modern
                    hostel in the central district – just a few minutes from
                    Covent Garden and Oxford Street. The bright multi-bed rooms
                    with their own bathroom are comfortable and family-friendly.
                    Our counselors are also available around the clock for the
                    participants here. From the accommodation you start directly
                    into London life – sightseeing, shopping, street food & city
                    vibes are just around the corner.
                  </p>
                  <p>
                    From the quiet camp village to the pulsating metropolis –
                    this combination makes the language camp in England so
                    special.
                    <br />
                    Living, learning & experiencing – right in the middle of
                    real England!
                    <br />
                    And who knows – maybe you&apos;ll take this feeling home
                    with you and think: I could imagine living like this for
                    longer – very close to language, culture and the English way
                    of life.
                  </p>
                  <p>
                    <span data-teams="true">
                      <i>
                        <em>
                          Please note: The organizer of this trip is our Spanish
                          company Outdoor Education Spain S.L.
                        </em>
                      </i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Activities Section */}
      <div className="uk-section-muted uk-section-overlap uk-section">
        <div className="uk-container uk-container-small">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-margin-large">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h2 uk-text-center" uk-scrollspy-class="">
                <p>
                  Activities – Language Camp Cornwall & London: the best of both
                  worlds!
                </p>
              </h2>
              <div
                className="uk-divider-icon uk-width-medium uk-margin-auto"
                uk-scrollspy-class=""
              ></div>
              <div
                className="uk-panel uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin"
                uk-scrollspy-class="uk-animation-slide-right-medium"
              >
                <p>
                  Your adventure starts with the journey – on the legendary
                  night train from London to Cornwall! The perfect place to grow
                  together into an international community from the first
                  minute. The next morning you wake up in sunny southwest
                  England – ready for camp life!
                </p>
                <p>
                  In Cornwall, beach, sun & pure beach life await you! In the
                  morning or afternoon you can attend the optional English
                  course (15 hours/week) with native speakers – relaxed,
                  interactive and without a school atmosphere. If you don&apos;t
                  take the course, exciting activities await where you
                  automatically speak English – in true Camp Adventure style:
                  Learning by Living!
                </p>
                <p>
                  Afternoons are all about action: surfing course on
                  Cornwall&apos;s beaches, team games, coastal hikes, beach
                  games, creative workshops and international evening programs.
                  A real highlight is the hike along the South West Coast Path
                  with views over cliffs and sea.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="uk-section-default uk-section" id="Profile">
        <div className="uk-container uk-container-small">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-margin-large">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h2 uk-text-center" uk-scrollspy-class="">
                Language Courses in Summer Camp
              </h2>
              <div
                className="uk-divider-icon uk-width-medium uk-margin-auto"
                uk-scrollspy-class=""
              ></div>
              <div className="uk-panel uk-margin" uk-scrollspy-class="">
                <p>
                  The ability to communicate in other languages is simply a
                  great thing and enables friendships with young people from all
                  over the world. So why not continue to expand your English
                  skills during the holidays? In our camps, the language courses
                  are exclusively led by English native speakers, in
                  internationally mixed classes with a maximum of 12 students.
                  With the help of a written and oral placement test, our
                  experienced teachers ensure that your children are placed in a
                  course that corresponds to their existing language skills. Per
                  week they can expect 20 holiday-appropriate lessons of 45
                  minutes each, which do not represent a continuation of normal
                  school lessons, but simply advance them linguistically with a
                  lot of fun. How intensively the children want to learn English
                  during the holidays, you decide together. We offer two
                  different course variants.
                </p>
              </div>
            </div>
          </div>
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div className="uk-margin uk-text-left@m uk-text-center">
                <div
                  className="uk-grid uk-child-width-1-1 uk-grid-divider uk-grid-match"
                  uk-grid=""
                >
                  <div>
                    <div className="el-item uk-panel" uk-scrollspy-class="">
                      <div className="uk-grid-large" uk-grid="">
                        <div className="uk-width-1-3@m">
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/db/ros_profil_englischclassic-dba85674.jpg"
                            )}
                            width={250}
                            height={300}
                            alt="The English Classic language course from Camp Adventure"
                            loading="lazy"
                            className="el-image uk-border-rounded"
                          />
                        </div>
                        <div className="uk-width-expand uk-margin-remove-first-child">
                          <h2 className="el-title uk-h2 uk-margin-small-top uk-margin-remove-bottom">
                            English Classic
                          </h2>
                          <div className="el-content uk-panel uk-margin-top">
                            <p>
                              In our Classic courses, kids improve their
                              language skills playfully and practically. With
                              interesting, age-appropriate topics and
                              holiday-appropriate methods, we bring them closer
                              to the language, also outside the classroom. They
                              internalize vocabulary through daily use and not
                              through mindless memorization. The constant
                              contact with the English-speaking counselors
                              ensures the correct pronunciation. We will inspire
                              your children for the English language and ensure
                              that they start the new school year strengthened
                              and motivated after the holidays. Promise!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="el-item uk-panel" uk-scrollspy-class="">
                      <div className="uk-grid-large" uk-grid="">
                        <div className="uk-width-1-3@m">
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/22/ros_profil_englischtoefl-22f2ec63.jpg"
                            )}
                            width={250}
                            height={300}
                            alt="Improve your English with a language course from Camp Adventure"
                            loading="lazy"
                            className="el-image uk-border-rounded"
                          />
                        </div>
                        <div className="uk-width-expand uk-margin-remove-first-child">
                          <h2 className="el-title uk-h2 uk-margin-small-top uk-margin-remove-bottom">
                            English TOEFL®
                          </h2>
                          <div className="el-content uk-panel uk-margin-top">
                            <p>
                              In addition to the Classic courses, we also offer
                              two-week TOEFL® courses. The Test Of English as a
                              Foreign Language is the most widely accepted
                              language test for academic and academic English
                              worldwide. At the end of the course, participants
                              receive a certificate after taking the exam that
                              confirms their language skills according to the
                              Common European Framework of Reference – without
                              any pressure, as they cannot fail. The current
                              language level is simply determined. Such proof of
                              performance is always useful. You can use the
                              TOEFL® certificate to prove, for example, that you
                              have the required English language skills for
                              international exchange programs.
                              <br />
                              <br />
                              The TOEFL® course includes an additional 10
                              lessons in addition to the regular 40 English
                              units, which serve to prepare your children for
                              the exam with special exercises. The focus is on
                              grammar, text processing and listening
                              comprehension and there is a &quot;test run&quot;
                              so that they can go into the exam relaxed.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="el-item uk-panel" uk-scrollspy-class="">
                      <div className="uk-grid-large" uk-grid="">
                        <div className="uk-width-1-3@m">
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/67/3DeepArial-Falmouth-Swanpool-min-679ba0c8.jpg"
                            )}
                            width={250}
                            height={300}
                            alt="Cornwall Beach"
                            loading="lazy"
                            className="el-image uk-border-rounded"
                          />
                        </div>
                        <div className="uk-width-expand uk-margin-remove-first-child">
                          <h2 className="el-title uk-h2 uk-margin-small-top uk-margin-remove-bottom">
                            Windsurfing
                          </h2>
                          <div className="el-content uk-panel uk-margin-top">
                            <p>
                              Do you love the sea and are you looking for
                              action? Then windsurfing in Cornwall is exactly
                              your thing! England&apos;s south coast offers
                              perfect conditions: sun, wind and endless beaches.
                              Whether you&apos;re a beginner or already have
                              experience – our certified coaches will show you
                              how to master the board and play with the wind.
                            </p>
                            <p>
                              At one of Cornwall&apos;s most beautiful surf
                              spots, you&apos;ll learn step by step in small
                              groups how to start safely, steer and stand your
                              first turns. Here it&apos;s not about competition,
                              but about the feeling of becoming one with wind
                              and water.
                            </p>
                            <p>
                              As a side effect, you experience real Learning by
                              Living – speaking English, laughing, learning and
                              enjoying beach life with participants from all
                              over the world.
                            </p>
                            <p>
                              Windsurfing in Cornwall – adrenaline, team spirit
                              & pure language adventure!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
      >
        <div className="uk-container uk-container-small">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-margin-large">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h2 uk-text-center" uk-scrollspy-class="">
                Dates & Prices 2025
              </h2>
              <div
                className="uk-divider-icon uk-width-medium uk-margin-auto"
                uk-scrollspy-class=""
              ></div>
            </div>
          </div>
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div className="uk-margin" uk-scrollspy-class="">
                <ul
                  className="el-nav uk-margin uk-subnav uk-subnav-pill uk-flex-center"
                  uk-switcher="connect: #js-4; itemNav: #js-5; animation: uk-animation-fade;"
                >
                  <li>
                    <a href="#">Courses</a>
                  </li>
                  <li>
                    <a href="#">Extras</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                </ul>
                <div
                  id="js-4"
                  className="uk-switcher"
                  uk-height-match="row: false"
                >
                  <div className="el-item uk-margin-remove-first-child">
                    <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">
                      Courses
                    </h3>
                    <div className="el-content uk-panel uk-margin-top">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>English Classic</td>
                            <td>0 USD</td>
                          </tr>
                          <tr>
                            <td>English TOEFL®</td>
                            <td>190 USD</td>
                          </tr>
                          <tr>
                            <td>Windsurfing</td>
                            <td>190 USD</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="el-item uk-margin-remove-first-child">
                    <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">
                      Extras
                    </h3>
                    <div className="el-content uk-panel uk-margin-top">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td style={{ width: "445.933px" }}>
                              Invitation letter Visa
                            </td>
                            <td style={{ width: "41.0667px" }}>25 USD</td>
                          </tr>
                          <tr>
                            <td style={{ width: "445.933px" }}>
                              <a
                                href="https://www.campadventure.de/de/infos/versicherung"
                                target="_self"
                              >
                                Insurance package
                              </a>{" "}
                              (only if place of residence is not in Great
                              Britain)
                            </td>
                            <td style={{ width: "41.0667px" }}>45 USD</td>
                          </tr>
                          <tr>
                            <td style={{ width: "445.933px" }}>
                              <a
                                href="https://www.campadventure.de/images/f_infos/versicherung/Camp Adventures Garantie gegen Heimweh_2025.pdf"
                                target="_blank"
                                rel="noopener"
                              >
                                Travel cancellation guarantee
                              </a>
                            </td>
                            <td style={{ width: "41.0667px" }}>85 USD</td>
                          </tr>
                          <tr>
                            <td style={{ width: "445.933px" }}>
                              Camp Adventure Sweater
                            </td>
                            <td style={{ width: "41.0667px" }}>50 USD</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="el-item uk-margin-remove-first-child">
                    <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">
                      Services
                    </h3>
                    <div className="el-content uk-panel uk-margin-top">
                      <ul>
                        <li>
                          Accommodation Cornwall On Campus & London Youth Hostel
                        </li>
                        <li>
                          Full board incl. water and fruit throughout the day
                        </li>
                        <li>Classic language course incl.</li>
                        <li>Large selection of leisure activities</li>
                        <li>
                          ALL excursions and leisure activities already included
                          in the price
                        </li>
                        <li>Leisure and course materials available</li>
                        <li>24h supervision</li>
                        <li>
                          Very high counselor ratio depending on age group from
                          1:5 to 1:9
                        </li>
                        <li>
                          High quality of care through qualified selection and
                          special training of counselors
                        </li>
                        <li>
                          24/7 hotline – service for parents (during the camp we
                          are always available for parents in an emergency. 24
                          hours, 7 days a week!)
                        </li>
                        <li>
                          Membership in associations for children and youth
                          travel in Germany and worldwide for constant
                          improvement and external quality review
                        </li>
                        <li>Travel organizer insolvency insurance</li>
                        <li>
                          In all our camps, the ban on drugs of any kind and
                          violence applies to all participants, regardless of
                          age!
                        </li>
                        <li>
                          Further information about our philosophy can be found{" "}
                          <a
                            href="https://www.campadventure.de/de/infos/sicherheit"
                            target="_blank"
                            rel="noopener"
                          >
                            HERE
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transfers Section */}
      <div
        className="uk-section-muted uk-section-overlap uk-section"
        id="Transfers"
      >
        <div className="uk-container uk-container-small">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-margin-large">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h2 uk-text-center" uk-scrollspy-class="">
                Arrival/Departure Info & Shuttle Services
              </h2>
              <div
                className="uk-divider-icon uk-width-medium uk-margin-auto"
                uk-scrollspy-class=""
              ></div>
            </div>
          </div>
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div className="uk-margin" uk-scrollspy-class="">
                <ul
                  className="el-nav uk-margin uk-subnav uk-subnav-pill uk-flex-center"
                  uk-switcher="connect: #js-6; itemNav: #js-7; animation: uk-animation-fade;"
                >
                  <li>
                    <a href="#">Independent Arrival and Departure</a>
                  </li>
                  <li>
                    <a href="#">Accompanied Group Flight 2026</a>
                  </li>
                </ul>
                <div
                  id="js-6"
                  className="uk-switcher"
                  uk-height-match="row: false"
                >
                  <div className="el-item uk-margin-remove-first-child">
                    <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">
                      Independent Arrival and Departure
                    </h3>
                    <div className="el-content uk-panel uk-margin-top">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>Arrival</td>
                            <td>Sunday</td>
                            <td>16 - 18 o&apos;clock</td>
                          </tr>
                          <tr>
                            <td>Departure</td>
                            <td>Saturday</td>
                            <td>10 - 12 o&apos;clock</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="el-item uk-margin-remove-first-child">
                    <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">
                      Accompanied Group Flight 2026
                    </h3>
                    <div className="el-content uk-panel uk-margin-top">
                      <p>Info to follow</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div id="Buchung" className="uk-section-default uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h2 uk-text-center">Booking</h2>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
              <div className="uk-panel uk-margin">
                <div style={{ textAlign: "center" }}>
                  <iframe
                    src="https://bookacamp.de/de/booking/form/view-by-camp/ds7fdn347dsfndsf74n37en37en37dnd/rossall"
                    width="1000"
                    height="350"
                    frameBorder="0"
                    allowFullScreen={true}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                    Amazing Cornwall Language Camp experience! Our children
                    improved their English while exploring beautiful Cornwall
                    and visiting London. The combination of language learning,
                    UK culture, and adventure was perfect. They came back more
                    confident and with wonderful memories!
                  </p>
                  <footer className="el-footer">
                    <cite className="el-author">
                      <a
                        href="https://maps.app.goo.gl/FdniYSE33xQapbBs5"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Victoria C. auf Google
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
