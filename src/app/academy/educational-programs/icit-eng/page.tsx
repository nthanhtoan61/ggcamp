"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { useEffect } from "react";
import { getTemplateImageUrl } from "@/lib/assets";

export default function IcitEngPage() {
  useEffect(() => {
    // Khởi tạo map Leaflet thủ công
    const initMap = (
      mapId: string,
      lat: number,
      lng: number,
      zoom: number,
      title: string,
      popupContent?: string
    ) => {
      if (typeof window === "undefined" || !window.L) {
        return false;
      }

      const mapDiv = document.getElementById(mapId);
      if (!mapDiv || (mapDiv as any)._leaflet) {
        return false;
      }

      try {
        const map = window.L.map(mapId).setView([lat, lng], zoom);

        window.L.tileLayer(
          "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          {
            attribution: "© OpenStreetMap contributors",
            maxZoom: 18,
            minZoom: 0,
          }
        ).addTo(map);

        const marker = window.L.marker([lat, lng]).addTo(map);

        if (popupContent) {
          marker.bindPopup(popupContent).openPopup();
        } else {
          marker.bindPopup(`<h3>${title}</h3>`).openPopup();
        }

        // Đánh dấu đã khởi tạo
        (mapDiv as any)._leaflet = true;
        return true;
      } catch (e) {
        console.error(`Error initializing map ${mapId}:`, e);
        return false;
      }
    };

    // Hàm khởi tạo tất cả maps
    const initAllMaps = () => {
      const popupLueneburger =
        '<h3>Lüneburger Heide</h3><a href="/destinations/germany-lueneburger-heide" target="_blank" class="uk-button uk-button-default">Info - Location</a>';
      const popupNordbayern = "<h3>Nordbayern/ Bischofsgrün</h3>";

      initMap(
        "map-lueneburger",
        52.8482,
        9.4721,
        7,
        "Lüneburger Heide",
        popupLueneburger
      );
      initMap(
        "map-nordbayern",
        50.04590236933137,
        11.79377887043785,
        7,
        "Nordbayern/ Bischofsgrün",
        popupNordbayern
      );
    };

    // Chờ Leaflet load
    if (typeof window !== "undefined") {
      if (window.L) {
        // Leaflet đã sẵn sàng, khởi tạo ngay
        setTimeout(initAllMaps, 500);
      } else {
        // Retry nếu Leaflet chưa sẵn sàng
        let retryCount = 0;
        const maxRetries = 25; // 5 giây (25 * 200ms)

        const checkInterval = setInterval(() => {
          retryCount++;
          if (window.L) {
            clearInterval(checkInterval);
            setTimeout(initAllMaps, 500);
          } else if (retryCount >= maxRetries) {
            clearInterval(checkInterval);
            console.error("Leaflet failed to load after 5 seconds");
          }
        }, 200);
      }
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
          className="uk-background-norepeat uk-background-cover uk-background-center-center uk-background-fixed uk-section uk-section-xlarge"
          style={{
            backgroundImage: `url(${getTemplateImageUrl(
              "yootheme/cache/ac/00-INTERNATIONAL%20COUNSELOR%20IN%20TRAINING_teambuilding-ac73e861.jpeg"
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
                  id="page#0"
                  uk-scrollspy-class=""
                >
                  International Counselor in Training Program, Germany
                </h1>
              </div>
            </div>
            <div className="uk-grid tm-grid-expand uk-grid-margin" uk-grid="">
              <div className="uk-width-1-2@m">
                <div
                  id="page#1"
                  className="uk-margin uk-text-left"
                  uk-scrollspy-class=""
                >
                  <a
                    className="el-content uk-button uk-button-primary uk-button-small uk-flex-inline uk-flex-center uk-flex-middle"
                    href="#Walsrode"
                    uk-scroll=""
                  >
                    <span
                      className="uk-margin-small-right"
                      uk-icon="location"
                    ></span>
                    Lüneburger Heide - Starting at 895 USD
                  </a>
                </div>
                <div
                  id="page#2"
                  className="uk-margin uk-text-left"
                  uk-scrollspy-class=""
                >
                  <a
                    className="el-content uk-button uk-button-primary uk-button-small uk-flex-inline uk-flex-center uk-flex-middle"
                    href="#Walsrode"
                    uk-scroll=""
                  >
                    <span
                      className="uk-margin-small-right"
                      uk-icon="location"
                    ></span>
                    Bayrischer Wald - Starting at 895 USD
                  </a>
                </div>
                <div
                  id="page#3"
                  className="uk-margin uk-text-left"
                  uk-scrollspy-class=""
                >
                  <a
                    className="el-content uk-button uk-button-primary uk-button-small uk-flex-inline uk-flex-center uk-flex-middle"
                    href="#Walsrode"
                    uk-scroll=""
                  >
                    <span
                      className="uk-margin-small-right"
                      uk-icon="location"
                    ></span>
                    Bavaria - Bischofsgrün - Starting at 1175 USD
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
      <div className="uk-section-default uk-section uk-padding-remove-bottom">
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
                  17 and 18 years-old
                  <br />
                  <br />
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
                <p>
                  GER: Tents & Lodges
                  <br />
                  UK: Bording House
                </p>
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
                <p>24h Supervision + All meals included</p>
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

      {/* Main Content Section */}
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
                    International Counsellor in Training – Your Path to the Camp
                    Team!
                  </p>
                  <p></p>
                </h2>
                <div className="uk-panel uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin">
                  <p>
                    You want to take on responsibility, work with children, and
                    experience an international camp from a whole new
                    perspective? Then our ICIT program for 17- to 18-year-olds
                    is just right for you!
                  </p>
                  <p>
                    Learn, lead, grow! Through qualified training, you&apos;ll
                    develop key skills to become a counsellor at an
                    international camp – from team building and childcare to
                    outdoor education and program management.
                  </p>
                  <p>
                    You love being outdoors? You&apos;re enthusiastic,
                    responsible, and a real team player? Then join our ICIT
                    program and experience the summer of a lifetime!
                  </p>
                  <p>
                    <strong>
                      Unleash your potential – we can&apos;t wait to meet you!
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
                              "yootheme/cache/da/08-INTERNATIONAL%20COUNSELOR%20IN%20TRAINING_summer-camp-team-da8ecb93.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Diverse international counselor team posing for a group photo at Camp Adventure summer camp"
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
                              "yootheme/cache/b5/01-INTERNATIONAL%20COUNSELOR%20IN%20TRAINING_Team-b54fe974.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Teenagers in a group huddle during team-building activity at Camp Adventure youth camp"
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
                              "yootheme/cache/23/09-Sommercamp-Walsrode-tent-field-233fae70.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Spacious tent camp on a grassy field in Walsrode at Camp Adventure summer camp"
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
                              "yootheme/cache/51/03-INTERNATIONAL%20COUNSELOR%20IN%20TRAINING_Archery-with-kids-51796269.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Camp counselor teaching a young camper how to use a bow during archery at summer camp"
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
                              "yootheme/cache/0e/04-INTERNATIONAL%20COUNSELOR%20IN%20TRAINING_teamertraining-0e420296.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Happy female camp counselors enjoying a break at Camp Adventure summer camp in Walsrode"
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
                              "yootheme/cache/2e/07-INTERNATIONAL%20COUNSELOR%20IN%20TRAINING_survival-with-kids-2e2b89b1.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Campers and counselors participating in a forest survival workshop during summer camp"
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
              </div>
            </div>
            <div className="uk-grid-item-match uk-width-1-3@m">
              <div className="uk-card-default uk-card uk-card-body">
                <div id="Accordion">
                  <div
                    uk-accordion="collapsible: false;"
                    id="js-4"
                    className="custom_acc_691a9d01d8b93"
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
                              International Counsellor in Training/Duration: 14
                              days to 4 weeks
                            </li>
                            <li>Age group: 17–18 years</li>
                            <li>
                              Certificate: Official recognition as a qualified
                              counsellor assistant (from age 17) or counsellor
                              (from age 18)
                            </li>
                            <li>
                              First Aid Certificate: Seminar included as part of
                              the program
                            </li>
                            <li>
                              Optional: Stay for an additional 1–2 weeks as a
                              counsellor assistant in one of our camps
                            </li>
                            <li>
                              Camp languages: English/German – learn languages
                              in an international atmosphere
                            </li>
                            <li>Accommodation: Tents</li>
                            <li>
                              All meals included: Freshly prepared meals
                              throughout the entire stay
                            </li>
                            <li>
                              24/7 full support: Our teamers are always there
                              for you
                            </li>
                            <li>
                              Digital Detox approach: Phones and electronic
                              devices can be used during Siesta only
                            </li>
                            <li>
                              Arrival &amp; departure services: Shuttles
                              available from train stations and airports
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div id="js-4_1" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Location - Walsrode
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div
                          className="uk-grid tm-grid-expand uk-grid-margin"
                          uk-grid=""
                        >
                          <div className="uk-width-1-2@m">
                            <div
                              className="uk-position-relative uk-dark uk-margin"
                              style={{
                                height: "500px",
                                width: "100%",
                                zIndex: 1,
                              }}
                            >
                              <div
                                id="map-lueneburger"
                                style={{ height: "100%", width: "100%" }}
                              ></div>
                              <template suppressHydrationWarning>
                                <div className="el-item uk-text-default uk-font-default uk-margin-remove-first-child">
                                  <h3 className="el-title uk-margin-top uk-margin-remove-bottom">
                                    Lüneburger Heide
                                  </h3>
                                  <div className="uk-margin-top">
                                    <a
                                      href="/destinations/germany-lueneburger-heide"
                                      target="_blank"
                                      className="el-link uk-button uk-button-default"
                                    >
                                      Info - Location
                                    </a>
                                  </div>
                                </div>
                              </template>
                            </div>
                          </div>
                          <div className="uk-width-1-2@m">
                            <div className="uk-panel uk-margin">
                              <h4>
                                Welcome to Walsrode – Your Adventure in the
                                Lüneburger Heide!
                              </h4>
                              <p>
                                Our Camp Adventure (Academy) in Walsrode is
                                nestled in the beautiful Lüneburger Heide, right
                                between Bremen, Hamburg, and Hannover. Just a
                                short walk away, you&apos;ll find a charming
                                North German village with traditional farms and
                                timber-framed houses – the perfect setting for
                                unforgettable outdoor, sports, and creative
                                holidays in Northern Germany.
                              </p>
                              <p>
                                <strong>
                                  Over 150,000 m² of pure adventure!
                                </strong>{" "}
                                <br />
                                Our spacious camp is divided into three
                                adventure zones: Beach &amp; Water, Survival,
                                and Creativity. <br />
                                From kayaking, water trampolining, and raft
                                building to fire-making and climbing in the high
                                ropes course – there&apos;s non-stop action
                                here!
                              </p>
                              <p>
                                <strong>
                                  International community &amp; true camp
                                  spirit!
                                </strong>{" "}
                                <br />
                                Our camp is bilingual (English &amp; German) –
                                meet campers from all over the world and improve
                                your English naturally as you go.
                              </p>
                              <p>
                                Whether you&apos;re a language enthusiast, an
                                outdoor adventurer, or a creative mind – explore
                                all our focus programs and activities that make
                                your camp experience truly unique.
                              </p>
                              <p>We can&apos;t wait to meet you!</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="js-4_2" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Accommodation
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div
                          className="uk-grid tm-grid-expand uk-grid-margin"
                          uk-grid=""
                        >
                          <div className="uk-width-1-3@m">
                            <div className="uk-margin">
                              <Image
                                src={getTemplateImageUrl(
                                  "yootheme/cache/3e/09-Sommercamp-Walsrode-tent-field-3ed36699.jpg"
                                )}
                                width={1080}
                                height={720}
                                className="el-image"
                                alt="Spacious tent camp on a grassy field in Walsrode at Camp Adventure summer camp"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="uk-width-2-3@m">
                            <div className="uk-panel uk-margin">
                              <h4>Live Like in a Small Village!</h4>
                              <p>
                                At our international summer camp in Lower
                                Saxony, you&apos;ll be staying in the tent
                                village.
                                <br />
                                <span style={{ fontSize: "1rem" }}>
                                  Tent Village: Six- to seven-person tents with
                                  wooden floors and a loft offer a real outdoor
                                  feeling under the stars.
                                </span>
                              </p>
                              <p>
                                Our accommodations are gender-separated, as are
                                the nearby washrooms.
                                <br />
                                Our counselors live right next door and are
                                there for you around the clock!
                              </p>
                              <p>
                                <em>📌 Good to know: </em>
                                <br />
                                For the tents, you&apos;ll need a sleeping bag
                                and sleeping mat; for solid accommodations,
                                you&apos;ll need bed linens, which you can rent
                                if needed.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="js-4_3" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Camp-Program
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div
                          className="uk-grid tm-grid-expand uk-grid-margin"
                          uk-grid=""
                        >
                          <div className="uk-width-1-3@m">
                            <div className="uk-margin">
                              <Image
                                src={getTemplateImageUrl(
                                  "yootheme/cache/4e/05-INTERNATIONAL%20COUNSELOR%20IN%20TRAINING_group-dynamics-4e8cd2f2.jpg"
                                )}
                                width={1080}
                                height={720}
                                className="el-image"
                                alt="Campers having fun with movement and warm-up games at Camp Adventure summer camp in the woods"
                                loading="lazy"
                              />
                            </div>
                            <div className="uk-margin">
                              <Image
                                src={getTemplateImageUrl(
                                  "yootheme/cache/f3/06-INTERNATIONAL%20COUNSELOR%20IN%20TRAINING_training-session-f391568a.jpg"
                                )}
                                width={1080}
                                height={720}
                                className="el-image"
                                alt="Camp Adventure staff having an outdoor team meeting surrounded by nature during summer camp"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="uk-width-2-3@m">
                            <div className="uk-panel uk-margin">
                              <h4>
                                Step Out of Your Comfort Zone – Unlock Your Full
                                Potential!
                              </h4>
                              <p>
                                Your journey to becoming an international camp
                                counselor starts here, at our beautiful Outdoor
                                Camp Walsrode. The ICIT (International Counselor
                                in Training) program gives you the chance to
                                gain your first experience in camp management
                                while developing valuable soft skills that will
                                benefit you in school, university, or your
                                future career.
                              </p>
                              <p>
                                <strong>
                                  Learn, grow, and take on responsibility!
                                </strong>{" "}
                                <br />
                                In the heart of an international team,
                                you&apos;ll build confidence, teamwork skills,
                                and leadership qualities. You&apos;ll learn how
                                to guide groups, organize activities, and lead
                                with confidence – everything you need to become
                                a successful camp counselor!
                              </p>
                              <p>
                                <strong>Your ICIT Program in Walsrode:</strong>
                              </p>
                              <ul>
                                <li>
                                  Group leadership &amp; animation – motivate
                                  kids and design activities
                                </li>
                                <li>
                                  Communication &amp; confident presentation –
                                  speak in front of groups and take
                                  responsibility
                                </li>
                                <li>
                                  Planning &amp; organization – coordinate daily
                                  routines and promote team building
                                </li>
                                <li>
                                  First-aid training – safety and emergency
                                  skills in action
                                </li>
                                <li>
                                  International camp culture – work with a
                                  global team
                                </li>
                                <li>
                                  Improve your English – the entire training is
                                  held in English
                                </li>
                              </ul>
                              <p>
                                Your stepping stone to becoming a counselor!{" "}
                                <br />
                                After completing the training, you&apos;ll
                                receive a certificate and have the opportunity
                                to join one of our camps as a Junior Counselor
                                for 1–2 weeks – the perfect way to put your new
                                skills into action!
                              </p>
                              <p>
                                <a
                                  href="../jobs.html"
                                  target="_blank"
                                  rel="noopener"
                                >
                                  👉 Are you 19+ and ready to become a full
                                  counselor? Check out our open positions here!
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="js-4_4" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Meals &amp; Snacks
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div
                          className="uk-grid tm-grid-expand uk-grid-margin"
                          uk-grid=""
                        >
                          <div className="uk-width-1-3@m">
                            <div className="uk-margin">
                              <Image
                                src={getTemplateImageUrl(
                                  "yootheme/cache/7e/02-Sommercamp-Walsrode-Dining-Hall-inside-7e70a1df.jpg"
                                )}
                                width={1080}
                                height={720}
                                className="el-image"
                                alt="Children eating together in the camp dining hall – shared meals and community spirit at Walsrode summer camp"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="uk-width-2-3@m">
                            <div className="uk-panel uk-margin">
                              <h4>Food everyone loves!</h4>
                              <p>
                                Three meals a day – fresh, varied, and seriously
                                delicious! Whether vegetarian, gluten- or
                                lactose-free – with prior notice, there&apos;s
                                something for everyone.
                              </p>
                              <p>
                                Your day starts with a generous breakfast
                                buffet: fresh rolls, cold cuts, fruit, muesli,
                                juice, and tea. For lunch and dinner, we usually
                                serve hot meals along with a colorful salad bar.
                                In between, you can recharge with fresh fruit,
                                an afternoon snack, and plenty of water –
                                perfect for all your adventures!
                              </p>
                              <p>
                                And the best part?{" "}
                                <strong>We cook everything fresh!</strong> No
                                instant soups, no bland canteen food – just good
                                meals that taste great and give you energy!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="js-4_5" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Supervision &amp; Guidance
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div
                          className="uk-grid tm-grid-expand uk-grid-margin"
                          uk-grid=""
                        >
                          <div className="uk-width-1-3@m">
                            <div className="uk-margin">
                              <Image
                                src={getTemplateImageUrl(
                                  "yootheme/cache/2e/Teamertraining_2017_60-2e2ec36d.jpg"
                                )}
                                width={1920}
                                height={1280}
                                className="el-image"
                                alt="Camp counselors warmly welcoming children – dedicated Camp Adventure team for supervised holiday programs"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="uk-width-2-3@m">
                            <div className="uk-panel uk-margin">
                              <h4>Fully supported, all around!</h4>
                              <p>
                                Our experienced and caring counselors are there
                                for you 24/7 – always with good vibes, a smile,
                                and a listening ear. Whether it&apos;s a small
                                question or a big concern, you can count on them
                                at any time. The best part? Our team brings the
                                real camp spirit from all over the world –
                                that&apos;s why English is our camp language!
                                You&apos;ll pick up intercultural soft skills
                                directly from the source.
                              </p>
                              <p>
                                At 17 or 18, you&apos;re among the oldest in
                                camp and take on more responsibility – for
                                yourself and your fellow campers. But don&apos;t
                                worry – we&apos;ll be by your side through every
                                step of this &quot;once-in-a-lifetime&quot;
                                adventure.
                              </p>
                            </div>
                          </div>
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
                          <h4>How to Get to Camp</h4>
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
                            and train stations.
                            <br />
                            Shuttles run only on Sundays (arrival) and Saturdays
                            (departure) within fixed time slots. Outside these
                            hours, individual transfers may be arranged for an
                            additional fee – just reach out to us directly.
                          </p>
                          <p>
                            <em>Airport Hamburg</em>
                            <br />
                            Arrival: 10:00 AM–3:00 PM
                            <br />
                            Meeting point (McDonald&apos;s): 2:00 PM
                            <br />
                            Departure: 2:00 PM–6:00 PM
                            <br />
                            Meeting point (McDonald&apos;s): 12:30 PM
                          </p>
                          <p>
                            <em>Airport Hannover</em>
                            <br />
                            Arrival: 10:00 AM–3:00 PM
                            <br />
                            Departure: 2:00 PM–6:00 PM
                          </p>
                          <p>
                            <em>Train Station Hannover</em>
                            <br />
                            Arrival: 2:00 PM–4:00 PM
                            <br />
                            Meeting point (McDonald&apos;s): 2:30 PM
                            <br />
                            Departure: 11:00 AM–1:00 PM
                            <br />
                            Meeting point (McDonald&apos;s): 10:30 AM
                          </p>
                          <p>
                            All available travel options can be selected during
                            the booking process.{" "}
                            <em>
                              You&apos;ll also find more detailed information
                              about transfers on our website.
                            </em>
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
                          <h4>Adventure with Peace of Mind!</h4>
                          <p>
                            Whether it&apos;s minor mishaps or unexpected
                            incidents – with our Camp Adventure Insurance
                            Package, you&apos;re fully covered throughout your
                            stay.
                          </p>
                          <p>Camp Adventure Insurance Package:</p>
                          <p>
                            Liability, accident, and health insurance for the
                            entire trip duration.
                            <br />
                            ✔ Coverage for accidents &amp; doctor visits
                            <br />
                            ✔ Protection against damages to property
                            <br />
                            💰 Price: from USD45 per person and trip
                            <br />
                            📅 Valid: from arrival to departure
                            <br />
                            🌍 Available only for international trips
                          </p>
                          <p>
                            <em>⚠ Important:</em> Without international
                            insurance, medical costs must be paid out of pocket.
                            We recommend bringing a USD500 cash reserve or a
                            credit card.
                            <br />
                            Participants from outside the EU must submit proof
                            of their own insurance before traveling.
                          </p>
                          <p>Camp Adventure Travel Cancellation Guarantee:</p>
                          <p>
                            Our safety net for homesickness, illness &amp; more.
                            If you need to cancel your trip – no problem! With
                            our Travel Cancellation Guarantee, you&apos;ll get
                            your full Camp Adventure fee refunded with a
                            deduction of 50,00 USD for the German camps or
                            100,00 USD for the british and spanish camps.
                          </p>
                          <p>
                            ✔ Valid up to one day before departure
                            <br />
                            ✔ Covers all reasons: illness, accidents, make-up
                            exams, or homesickness
                            <br />
                            💰 Price: USD45 (1-week stay) / USD85 (multi-week
                            stay)
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
                          Additional booking information: International
                          Counselor in Training (ICIT)
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <p>
                            <strong>
                              ICIT – International Counselor in Training! 🌍🎓
                            </strong>
                            <br />
                            Our ICIT program is designed as a two-week
                            experience – the perfect opportunity to gain
                            valuable tools and skills to soon take your first
                            steps as a camp counsellor!
                          </p>
                          <p>
                            You&apos;ll find all available dates in the booking
                            section, and your training has already been
                            pre-selected. We&apos;re excited to welcome you –
                            your talents will be a great addition to our team!
                          </p>
                          <p>
                            Book Now! And join the future Camp Adventure team!
                            🌞🏕️🎉
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <style
                  dangerouslySetInnerHTML={{
                    __html: `
                    .custom_acc_691a9d01d8b93 .uk-accordion-title * {
                        color: #000000 !important;
                    }
                    .custom_acc_691a9d01d8b93 .uk-accordion-title {
                        padding: 10px !important;
                        color: #000000 !important;
                        background: #FFFFFF !important;
                        border: 1px solid #FFAA00 !important;
                        position: relative;
                        padding-left: 60px !important;
                    }
                    .custom_acc_691a9d01d8b93 .uk-accordion-title::before {
                        display: block;
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        background-color: #FFAA00 !important;
                        background-size: 30px !important;
                        margin-left: 0px;
                        background-repeat: repeat;
                        width: 50px;
                        height: 100%;
                        background-repeat: no-repeat;
                        background-position: center center;
                        left: 0;
                        margin-right: 15px;
                        margin-left: 0px;
                    }
                    .custom_acc_691a9d01d8b93 .uk-open > .uk-accordion-title::before {
                        background-image: url('/images/Camp-heart.png') !important;
                    }
                    .custom_acc_691a9d01d8b93 .uk-accordion-content {
                        border: 1px solid #FFAA00 !important;
                        background: #ffffff !important;
                        padding: 15px !important;
                        margin-top: 15px !important;
                    }
                    .custom_acc_691a9d01d8b93 .uk-accordion-content * {
                        color: ;
                    }
                    .custom_acc_691a9d01d8b93 > :nth-child(n+2) {
                        border: unset !important;
                        box-shadow: unset !important;
                    }
                  `,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bischofsgrün Section */}
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
                    🏞️ International Counselor in Training in Bischofsgrün –
                    Become a role model at Camp! 🚀
                  </p>
                </h2>
                <div className="uk-panel uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin">
                  <p>
                    Want to work with kids, take on responsibility, and
                    experience camp life from the team&apos;s perspective –
                    surrounded by the mountains of Northern Bavaria?
                    <br />
                    Then our ICIT Program in Bischofsgrün is just right for you!
                  </p>
                  <p>
                    Designed for all <strong>17- to 18-year-olds</strong> ready
                    to grow beyond themselves, our hands-on International
                    Counselor in Training Program prepares you for working as a
                    counselor in international camps – with a focus on
                    childcare, team leadership, and outdoor education.
                    <br />
                    <strong>A special highlight:</strong> The training during
                    the first week is conducted mainly in English – perfect for
                    taking your language skills to the next level!
                  </p>
                  <p>
                    🌿{" "}
                    <strong>
                      Are you connected to nature, reliable, full of energy, and
                      ready to be a true team player?
                    </strong>{" "}
                    Then join us and grow beyond your limits in one of the most
                    beautiful regions of Germany.
                  </p>
                  <p>
                    <strong>
                      💛 Show us what you&apos;ve got – and grow into your new
                      role. We can&apos;t wait to meet you!
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
                              "yootheme/cache/da/08-INTERNATIONAL%20COUNSELOR%20IN%20TRAINING_summer-camp-team-da8ecb93.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Diverse international counselor team posing for a group photo at Camp Adventure summer camp"
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
                              "yootheme/cache/41/01-Sportcamp-Nordbayern-41c69c90.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Modern sports camp building at dusk with volleyball court and climbing wall in Northern Bavaria"
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
                              "yootheme/cache/63/02-Sportcamp-Nordbayern-631bc339.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Bright and spacious lobby with panoramic windows at sports camp in Germany"
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
                              "yootheme/cache/93/03-Sportcamp-Nordbayern-935e9772.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Minimalist bunk bed room with wooden furniture at youth sports camp accommodation"
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
                              "yootheme/cache/56/04-Sportcamp-Nordbayern-56cb88e4.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Colorful dining hall with panoramic views at sports camp in Northern Bavaria"
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
                              "yootheme/cache/3f/05-Sportcamp-Nordbayern-3f878d15.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Youth lounge and snack bar area with modern design at German sports camp"
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
                              "yootheme/cache/a1/06-Sportcamp-Nordbayern-a1a558f7.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Quiet evening seating area at sports camp with modern interior and wood accents"
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
                              "yootheme/cache/ed/07-Sportcamp-Nordbayern-ed1f86f7.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Artificial turf soccer field in front of modern sports camp facility in the Bavarian Forest"
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
                              "yootheme/cache/4d/08-Sportcamp-Nordbayern-4d01ebd1.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Beach volleyball courts at summer camp with mountain views in Northern Bavaria"
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
                              "yootheme/cache/24/09-Sportcamp-Nordbayern-244dee20.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Spacious gymnasium with climbing wall and multi-sport lines at indoor facility in Germany"
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
                              "yootheme/cache/f1/10-Sportcamp-Nordbayern-f1d55a51.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Modern indoor fitness room with treadmills, strength machines, and free weights at sports camp in Northern Bavaria"
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
                    id="js-6"
                    className="custom_acc_691a9d01dc4d4"
                  >
                    <div id="js-6_0" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Essential information
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <ul>
                            <li>Duration: 14 days of training</li>
                            <li>Age group: 17–18 years</li>
                            <li>
                              Certificate: Qualified Junior Counselor (from age
                              17) or Camp Counselor (from age 18)
                            </li>
                            <li>
                              First Aid: First Aid training included as part of
                              the program
                            </li>
                            <li>Camp Language: Primarily English</li>
                            <li>Accommodation: Comfortable shared rooms</li>
                            <li>
                              Meals: Full board with freshly prepared meals
                              daily
                            </li>
                            <li>
                              24/7 Support: Our experienced teamers are there
                              for you around the clock
                            </li>
                            <li>
                              Digital Detox: Phones and electronic devices only
                              allowed during siesta time
                            </li>
                            <li>
                              Arrival &amp; Departure: Shuttle service available
                              from train stations and airports
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div id="js-6_1" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Location - North Bavaria
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div
                          className="uk-grid tm-grid-expand uk-grid-margin"
                          uk-grid=""
                        >
                          <div className="uk-width-1-2@m">
                            <div
                              className="uk-position-relative uk-dark uk-margin"
                              style={{
                                height: "500px",
                                width: "100%",
                                zIndex: 1,
                              }}
                            >
                              <div
                                id="map-nordbayern"
                                style={{ height: "100%", width: "100%" }}
                              ></div>
                              <template suppressHydrationWarning>
                                <div className="el-item uk-text-default uk-font-default uk-margin-remove-first-child">
                                  <h3 className="el-title uk-margin-top uk-margin-remove-bottom">
                                    Nordbayern/ Bischofsgrün
                                  </h3>
                                </div>
                              </template>
                            </div>
                          </div>
                          <div className="uk-width-1-2@m">
                            <div className="uk-panel uk-margin">
                              <h4>YOUR ICIT TRAINING LOCATION</h4>
                              <p>
                                To grow, you need the right environment – and
                                you&apos;ll find it at the BLSV Sportcamp
                                Bischofsgrün, our trusted partner in Northern
                                Bavaria.
                              </p>
                              <p>
                                Located in the southern part of Bischofsgrün,
                                right at the foot of the 1,024 m high Ochsenkopf
                                mountain and nestled in the peaceful nature of
                                the legendary Fichtelgebirge range, the camp is
                                just 30 minutes from Bayreuth. It&apos;s the
                                ideal place for active learning, personal
                                development, and fresh mountain air.
                              </p>
                              <p>
                                With over 55,000 m² of space, the sport camp
                                offers the perfect setting for team building,
                                outdoor challenges, and leadership growth.
                                Whether it&apos;s the beach court, climbing
                                wall, or indoor sports hall – leadership
                                training here is hands-on. Bright and modern
                                seminar rooms provide space for workshops and
                                group reflection.
                              </p>
                              <p>
                                Bischofsgrün is the only officially recognized
                                climatic health resort in Northern Bavaria –
                                part of the Ochsenkopf Adventure Region and the
                                Healthy Fichtelgebirge. It combines nature,
                                wellness, and authentic camp vibes into a truly
                                unique learning experience.
                              </p>
                              <p>
                                👉 The BLSV Sportcamp is the perfect platform
                                for your ICIT journey – professional,
                                nature-based, and full of potential.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="js-6_2" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Camp Accommodations
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div
                          className="uk-grid tm-grid-expand uk-grid-margin"
                          uk-grid=""
                        >
                          <div className="uk-width-1-3@m">
                            <div className="uk-margin">
                              <Image
                                src={getTemplateImageUrl(
                                  "yootheme/cache/58/03-Sportcamp-Nordbayern-58d58fa2.jpg"
                                )}
                                width={1080}
                                height={720}
                                className="el-image"
                                alt="Minimalist bunk bed room with wooden furniture at youth sports camp accommodation"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="uk-width-2-3@m">
                            <div className="uk-panel uk-margin">
                              <h4>Arrive &amp; Feel at Home</h4>
                              <p>
                                During your stay in Northern Bavaria,
                                you&apos;ll live at the BLSV Sportcamp
                                Bischofsgrün – a modern facility surrounded by
                                nature, with everything you need for the
                                ultimate camp experience.
                              </p>
                              <p>
                                <em>
                                  Shared rooms with comfort &amp; camp flair.
                                </em>
                                <br />
                                You&apos;ll stay in spacious shared rooms, each
                                with two bunk beds (max. 4 people) and a private
                                bathroom. Room assignments are made by gender.
                              </p>
                              <p>
                                <em>A temporary village community.</em>
                                <br />
                                The campgrounds feel like a small village –
                                complete with several buildings, sports areas,
                                and communal spaces. It&apos;s a lively yet
                                manageable environment, perfect for spending
                                quality time together.
                              </p>
                              <p>
                                Our ICIT Directors live right next door and are
                                available <strong>around the clock</strong> –
                                whether you have a question, need someone to
                                talk to, or just want a friendly presence
                                throughout camp life.
                              </p>
                              <p>
                                <em>📌 Good to know:</em>
                                <br />
                                You can bring your own bedding or simply rent it
                                from us – whichever you prefer.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="js-6_3" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Program
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div
                          className="uk-grid tm-grid-expand uk-grid-margin"
                          uk-grid=""
                        >
                          <div className="uk-width-1-3@m">
                            <div className="uk-margin">
                              <Image
                                src={getTemplateImageUrl(
                                  "yootheme/cache/3b/00-INTERNATIONAL%20COUNSELOR%20IN%20TRAINING_teambuilding-3b91547c.jpg"
                                )}
                                width={1920}
                                height={1280}
                                className="el-image"
                                alt="Group activity on grass field with teens doing a team challenge at summer camp"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="uk-width-2-3@m">
                            <div className="uk-panel uk-margin">
                              <h4>
                                Program in Bischofsgrün – Grow. Learn. Lead.
                              </h4>
                              <p>
                                Take your next step with the ICIT Program in
                                Bischofsgrün, Northern Bavaria! Surrounded by
                                mountains, forests, and fresh alpine air,
                                you&apos;ll grow not only professionally – but
                                personally. This is where your journey into the
                                international camp team begins: with hands-on
                                experience, valuable soft skills, and an
                                unforgettable dose of camp spirit.
                              </p>
                              <p>
                                <strong>
                                  Learn, grow, and take on responsibility!
                                </strong>
                                <br />
                                In an international setting, you&apos;ll build
                                confidence, become a true team player, and
                                develop strong leadership skills. You&apos;ll
                                learn how to lead groups, organize activities,
                                and step up with a confident attitude – all
                                essential for taking responsibility in everyday
                                camp life.
                              </p>
                              <p>
                                <strong>
                                  Your ICIT Program in Bischofsgrün includes:
                                </strong>
                              </p>
                              <ul>
                                <li>
                                  Group Leadership &amp; Animation – Plan
                                  activities and motivate children
                                </li>
                                <li>
                                  Communication &amp; Confident Presence – Speak
                                  in front of groups and make decisions
                                </li>
                                <li>
                                  Planning &amp; Organization – Help structure
                                  the day and take initiative
                                </li>
                                <li>
                                  First Aid Training – Hands-on safety training
                                  for real camp situations
                                </li>
                                <li>
                                  International Camp Culture – Work with a
                                  multicultural team
                                </li>
                                <li>
                                  English Every Day – All training is conducted
                                  in English
                                </li>
                              </ul>
                              <p>
                                In your first week, you&apos;ll focus fully on
                                training – including a certified First Aid
                                course. You&apos;ll take part in a few selected
                                camp activities but your main focus will be
                                learning.
                                <br />
                                In week two, you&apos;ll become a sports
                                assistant, supporting various sports sessions
                                while being mentored closely by your ICIT
                                Director. Through feedback and reflection,
                                you&apos;ll gradually take on more
                                responsibility and grow into your role.
                              </p>
                              <p>
                                Goal: After the program, you&apos;ll be ready to
                                step into a teamer role at camps like
                                Bischofsgrün, Regen, or Inzell – even leading
                                your own group! It&apos;s the perfect
                                opportunity to gain practical experience during
                                your studies and even earn some extra money.
                              </p>
                              <p>
                                <strong>
                                  🚀 Start your journey as a Camp Teamer!
                                </strong>
                                <br />
                                <br />
                                👉
                                <a
                                  href="../jobs.html"
                                  target="_blank"
                                  rel="noopener"
                                >
                                  {" "}
                                  Already 19 or older? Check out your options to
                                  join as a full Teamer!
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="js-6_4" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Camp - Kitchen
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div
                          className="uk-grid tm-grid-expand uk-grid-margin"
                          uk-grid=""
                        >
                          <div className="uk-width-1-3@m">
                            <div className="uk-margin">
                              <Image
                                src={getTemplateImageUrl(
                                  "yootheme/cache/b6/04-Sportcamp-Nordbayern-b6df96d2.jpg"
                                )}
                                width={1080}
                                height={720}
                                className="el-image"
                                alt="Colorful dining hall with panoramic views at sports camp in Northern Bavaria"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="uk-width-2-3@m">
                            <div className="uk-panel uk-margin">
                              <h4>Fuel Up for the Day</h4>
                              <p>
                                Start your morning with a healthy breakfast
                                buffet in one of our two on-site restaurants –
                                the perfect beginning to an active camp day.
                              </p>
                              <p>
                                At lunch and dinner, enjoy varied buffets made
                                with fresh, regional ingredients. Whether you
                                prefer vegetarian, meat-based, or lactose-free
                                options – we&apos;ve got something for everyone.
                              </p>
                              <p>
                                Delicious, easy, and energy-packed – that&apos;s
                                the taste of your camp experience in
                                Bischofsgrün.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="js-6_5" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Guidance and Supervision
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div
                          className="uk-grid tm-grid-expand uk-grid-margin"
                          uk-grid=""
                        >
                          <div className="uk-width-1-3@m">
                            <div className="uk-margin">
                              <Image
                                src={getTemplateImageUrl(
                                  "yootheme/cache/2e/Teamertraining_2017_60-2e2ec36d.jpg"
                                )}
                                width={1920}
                                height={1280}
                                className="el-image"
                                alt="Camp counselors warmly welcoming children – dedicated Camp Adventure team for supervised holiday programs"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="uk-width-2-3@m">
                            <div className="uk-panel uk-margin">
                              <h4>Always by Your Side</h4>
                              <p>
                                Our experienced ICIT Directors are there for you
                                around the clock at Camp Regen – bringing lots
                                of positive energy, real camp spirit, and always
                                an open ear. Whether it&apos;s a small question
                                or a bigger concern, you can reach out to them
                                at any time.
                              </p>
                              <p>
                                Just like the rest of the camp counselors
                                you&apos;ll be working with, they come from all
                                over the world and bring a wealth of
                                international camp experience. That&apos;s why
                                English is the training and instruction
                                language. They&apos;ll pass on their
                                intercultural soft skills to you – right in the
                                middle of real-life camp experiences.
                              </p>
                              <p>
                                As a 17- to 18-year-old, you&apos;re among the
                                &quot;older ones&quot; at camp – and you&apos;ll
                                start taking on real responsibility, for
                                yourself and for your fellow campers.
                                <br />
                                But don&apos;t worry – we&apos;re right by your
                                side, guiding and supporting you through this
                                exciting step in your camp journey.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="js-6_6" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Getting to Camp – Arrival and Pick-Up Explained
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <h4>All Roads Lead to Camp!</h4>
                          <p>
                            Whether by car, train, plane, or shuttle – your
                            child will arrive safely and stress-free. We make
                            sure everything runs smoothly!
                          </p>
                          <p>
                            <em>Self-Arrival:</em>
                            <br />
                            Simply drop off and pick up your child yourself. A
                            detailed arrival guide will be sent via email 6
                            weeks before the camp starts, so nothing stands in
                            the way of a smooth arrival.
                          </p>
                          <p>
                            <em>Shuttle Service:</em>
                            <br />
                            Since our adventure camps are usually located in
                            remote areas, we are happy to offer shuttle services
                            from nearby airports and train stations.
                            <br />
                            Shuttles run only on Sundays (arrival) and Saturdays
                            (departure) within specific time windows.
                            <br />
                            Outside of these windows, you can book a private
                            shuttle for an additional fee – please contact us
                            directly for arrangements.
                          </p>
                          <p> </p>
                          <p>
                            You can select all available travel options during
                            the booking process.
                            <br />
                            <a
                              href="/info/arrival-departure"
                              target="_blank"
                              rel="noopener"
                            >
                              Detailed information about transfer services is
                              also available here.
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div id="js-6_7" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Insurance Packages
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <h4>Start Your Camp Adventure with Peace of Mind!</h4>
                          <p>
                            Whether it&apos;s illness, minor accidents, or
                            unexpected events – our Camp Adventure Insurance
                            Package ensures you&apos;re well protected.
                          </p>
                          <p>
                            <em>Included in the Package:</em>
                            <br />
                            ✔ Liability, health, and accident insurance for the
                            entire travel period
                            <br />
                            ✔ Coverage for doctor visits and damage to
                            third-party property
                            <br />
                            💰 Price: from USD45 per person
                            <br />
                            📅 Valid: from arrival to departure
                            <br />
                            🌍 Important: Only valid for trips abroad
                          </p>
                          <p>
                            <em>⚠️ Note:</em> Without valid international
                            insurance, medical costs must be covered by the
                            participant. We recommend bringing USD500 in cash or
                            a credit card as a precaution. Participants
                            traveling from outside the EU must provide proof of
                            personal insurance before departure.
                          </p>
                          <p>
                            <em>
                              Trip Cancellation Guarantee – Flexible &amp; Fair
                            </em>
                            <br />
                            If you&apos;re unable to join the trip – for any
                            reason – our cancellation guarantee has you covered:
                          </p>
                          <p>
                            ✔ Valid until one day before departure
                            <br />
                            ✔ Full refund of the camp fee minus a USD50
                            (Germany) or USD100 (England/Spain) deductible
                            <br />
                            💰 Price: USD45 (1-week stay) / USD85 (multi-week
                            stay)
                          </p>
                          <p>
                            You can easily select all desired insurance options
                            during the booking process.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div id="js-6_8" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          International Counselor in Training (ICIT) Camp /
                          Bischofsgrün
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <h4>
                            🌍🎓 ICIT – International Counselor in Training in
                            Bischofsgrün
                          </h4>
                          <p>
                            Two weeks that will change you: Our ICIT program in
                            Bischofsgrün gives you all the tools you need to
                            take on real responsibility as part of an
                            international camp team – surrounded by the stunning
                            nature of Northern Bavaria!
                          </p>
                          <p>
                            You&apos;ll find all available dates in the booking
                            section – your training slot is already
                            pre-selected. We can&apos;t wait to welcome your
                            energy and commitment. Your contribution will make a
                            real difference to our team in Bischofsgrün!
                          </p>
                          <p>
                            <strong>Make this your year</strong> – kick off your
                            Camp Adventure as a future team leader at the
                            Leadership Camp in Bischofsgrün! 🌞🏕️🎉
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <style
                  dangerouslySetInnerHTML={{
                    __html: `
                    .custom_acc_691a9d01dc4d4 .uk-accordion-title * {
                        color: #000000 !important;
                    }
                    .custom_acc_691a9d01dc4d4 .uk-accordion-title {
                        padding: 10px !important;
                        color: #000000 !important;
                        background: #FFFFFF !important;
                        border: 1px solid #FFAA00 !important;
                        position: relative;
                        padding-left: 60px !important;
                    }
                    .custom_acc_691a9d01dc4d4 .uk-accordion-title::before {
                        display: block;
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        background-color: #FFAA00 !important;
                        background-size: 30px !important;
                        margin-left: 0px;
                        background-repeat: repeat;
                        width: 50px;
                        height: 100%;
                        background-repeat: no-repeat;
                        background-position: center center;
                        left: 0;
                        margin-right: 15px;
                        margin-left: 0px;
                    }
                    .custom_acc_691a9d01dc4d4 .uk-open > .uk-accordion-title::before {
                        background-image: url('/images/Camp-heart.png') !important;
                    }
                    .custom_acc_691a9d01dc4d4 .uk-accordion-content {
                        border: 1px solid #FFAA00 !important;
                        background: #ffffff !important;
                        padding: 15px !important;
                        margin-top: 15px !important;
                    }
                    .custom_acc_691a9d01dc4d4 .uk-accordion-content * {
                        color: ;
                    }
                    .custom_acc_691a9d01dc4d4 > :nth-child(n+2) {
                        border: unset !important;
                        box-shadow: unset !important;
                    }
                  `,
                  }}
                />
              </div>
            </div>
            <div className="uk-grid-item-match uk-width-1-3@m">
              <div className="uk-card-default uk-card uk-card-body">
                <div id="Buchung">
                  <div style={{ textAlign: "center" }}>
                    <iframe
                      src="https://www.bookacamp.de/en/booking/form/view-by-camp/ds7fdn347dsfndsf74n37en37en37dnd/nobicit"
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
      </div>

      {/* Booking Section */}

      {/* Testimonial Section */}
      <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-small">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-grid-item-match uk-width-1-1">
              <div className="uk-card-default uk-card uk-card-body">
                <blockquote
                  className="uk-width-2xlarge uk-text-left"
                  uk-scrollspy-class=""
                >
                  The best experience of my life! I learned so much and got to
                  meet other young people from all around the world — I
                  won&apos;t need to look for accommodations in many countries
                  for the next few years :)
                  <footer className="el-footer">
                    <cite className="el-author">Louisa (18) auf Google</cite>
                  </footer>
                </blockquote>
                <div uk-scrollspy-class="">
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
