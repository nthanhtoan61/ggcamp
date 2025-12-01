"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { getTemplateImageUrl } from "@/lib/assets";
import { useEffect } from "react";

// Extend Window interface for Leaflet
declare global {
  interface Window {
    L?: any;
  }
}

export default function LocationCampAdventureAcademyPage() {
  useEffect(() => {
    // Khởi tạo map sau khi Leaflet đã load
    const initMap = () => {
      if (typeof window === "undefined" || !window.L) {
        return false;
      }

      const mapDiv = document.getElementById("map");
      if (!mapDiv || (mapDiv as any)._leaflet) {
        return false;
      }

      try {
        const map = window.L.map("map").setView([52.8481, 9.4724], 7);

        window.L.tileLayer(
          "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          {
            attribution: "© OpenStreetMap contributors",
            maxZoom: 18,
            minZoom: 0,
          }
        ).addTo(map);

        window.L.marker([52.8481, 9.4724])
          .addTo(map)
          .bindPopup(
            "Go and Grow Camp Academy - Walsrode<br/>Schooltrips, Events, Camping"
          )
          .openPopup();

        // Đánh dấu đã khởi tạo
        (mapDiv as any)._leaflet = true;
        return true;
      } catch (e) {
        console.error("Error initializing map:", e);
        return false;
      }
    };

    // Chờ Leaflet load
    if (typeof window !== "undefined") {
      if (window.L) {
        // Leaflet đã sẵn sàng, khởi tạo ngay
        setTimeout(initMap, 500);
      } else {
        // Retry nếu Leaflet chưa sẵn sàng
        let retryCount = 0;
        const maxRetries = 25; // 5 giây (25 * 200ms)

        const checkInterval = setInterval(() => {
          retryCount++;
          if (window.L) {
            clearInterval(checkInterval);
            setTimeout(initMap, 500);
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
          className="uk-background-norepeat uk-background-cover uk-background-center-center uk-section uk-section-xlarge"
          style={{
            backgroundImage: `url(${getTemplateImageUrl(
              "yootheme/cache/25/akademie_header-255930b2.jpeg"
            )})`,
          }}
        >
          <div
            className="uk-position-cover"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          ></div>
          <div className="uk-container uk-container-large uk-position-relative">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
              <div className="uk-width-1-1@m">
                <h1
                  className="uk-heading-large uk-text-center"
                  uk-scrollspy-class=""
                >
                  Go and Grow Camp Academy&apos;s Location
                </h1>
                <div
                  className="uk-panel uk-text-lead uk-margin uk-text-center"
                  uk-scrollspy-class=""
                >
                  <p>Specialist in Outdoor Education & Adventure Sports</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="uk-section-default uk-section-overlap uk-section">
        <div className="uk-container uk-container-large">
          <div
            className="uk-grid tm-grid-expand uk-grid-large uk-margin-xlarge"
            uk-grid=""
          >
            <div className="uk-width-1-3@m">
              <h2
                className="uk-h2 uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              >
                Welcome to Go and Grow Camp Academy in the Lüneburger Heide
              </h2>
              <div
                className="uk-divider-small uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              ></div>
            </div>
            <div className="uk-width-2-3@m">
              <div
                className="uk-panel uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin"
                uk-scrollspy-class="uk-animation-slide-left-medium"
              >
                <p>
                  The Go and Grow Camp Academy was founded in 2002. As a
                  specialist in experiential education and outdoor sports, many
                  students and professionals have used it to expand their skills
                  in the fascinating fields of outdoor and adventure and/or to
                  grow together as a team. Since 2015, the Academy has been an
                  independent GmbH and has found a new permanent home in
                  Germany: in the Lüneburger Heide in Vethem/Walsrode. Due to
                  its diversity and size, the site is suitable for a variety of
                  activities and events. In addition to class trips and youth
                  camps, the Go and Grow Camp Academy also offers the right
                  location for training and further education, company events,
                  trade fairs and survival courses.
                </p>
              </div>
              <blockquote
                className="uk-margin-medium uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              >
                <p>Perfect organization, great support, fantastic location!</p>
                <footer className="el-footer">
                  <cite className="el-author">Katrin, Germany</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* Location & Map Section */}
      <div className="uk-section-muted uk-section-overlap uk-section">
        <div className="uk-container uk-container-small">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2
                className="uk-h1 uk-text-center"
                uk-scrollspy-class="uk-animation-slide-right-medium"
              >
                Location
              </h2>
              <div
                className="uk-divider-icon uk-width-medium uk-margin-auto"
                uk-scrollspy-class="uk-animation-slide-left-medium"
              ></div>
              <div
                className="uk-panel uk-text-lead uk-margin"
                uk-scrollspy-class=""
              >
                <p>
                  The Go and Grow Camp Academy in Walsrode is set in the beautiful
                  Lüneburger Heide national park, between the cities of Hamburg,
                  Bremen and Hannover
                </p>
              </div>
              <div
                className="uk-position-relative uk-dark"
                style={{ height: "300px", width: "100%", zIndex: 1 }}
                uk-scrollspy-class=""
              >
                <div id="map" style={{ height: "100%", width: "100%" }}></div>
              </div>
              <div
                className="uk-panel uk-column-1-2@m uk-column-1-1@s uk-margin"
                uk-scrollspy-class=""
              >
                <p>
                  With more than 15 acres of fields, woods, several lakes and
                  even a beach, our northern camp location is the perfect
                  holiday destination for children and teenagers looking for a
                  summer adventure. Our spacious site is made up of several
                  different zones, with various activities to suit every camper.
                  If you want to go kayaking, build bridges, or jump high on a
                  water trampoline, the Beach and Water Area is for you. If team
                  building activities and high ropes course are more your thing,
                  you should head over to the Survival Area. Whether you are an
                  adventurer or more of a creative spirit, Walsrode has got
                  plenty to offer!
                </p>
              </div>
              <div className="uk-margin uk-text-center" uk-scrollspy-class="">
                <iframe
                  src="https://www.youtube.com/embed/sLJBaTZXNn4?v=sLJBaTZXNn4&disablekb=1"
                  allow="autoplay"
                  allowFullScreen
                  uk-responsive=""
                  width="960"
                  height="540"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Program Options Section */}
      <div className="uk-section-default uk-section-overlap uk-section">
        <div className="uk-container uk-container-small">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2
                className="uk-h2 uk-text-center"
                uk-scrollspy-class="uk-animation-slide-left-medium"
              >
                Program Options & Active Worlds
              </h2>
              <div
                className="uk-divider-icon uk-width-medium uk-margin-auto"
                uk-scrollspy-class="uk-animation-slide-right-medium"
              ></div>
            </div>
          </div>
          <div className="uk-grid-margin uk-container uk-container-small">
            <div className="uk-grid tm-grid-expand" uk-grid="">
              <div className="uk-width-1-2@m">
                <div uk-accordion="collapsible: true;" uk-scrollspy-class="">
                  <div className="el-item">
                    <a className="el-title uk-accordion-title" href="#">
                      Beach & Water
                    </a>
                    <div className="uk-accordion-content">
                      <div className="el-content uk-panel">
                        <p>
                          Our very own swimming lake with a white sandy beach,
                          invites you to swim and romp around. On the lake we
                          have created great possibilities with a water
                          trampoline, water slide, and a water polo field. There
                          is a non-swimmer area that is separated from the
                          swimmer area, so that everyone has a lot of fun in the
                          water. Our lifeguards always make sure that everyone
                          comes out of the water safely. In the beach area we
                          have set up sunbeds and sun sails for you and a great
                          beach volleyball court for hours of fun. For whose who
                          like to paddle in the water, we use our other lake.
                          Whether it´s canoes, kayaks or stand up paddle boards
                          - here you can choose from different boat categories
                          and show what you are made of. Of course you will
                          always be guided by our coaches who will show you the
                          best tricks.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="el-item">
                    <a className="el-title uk-accordion-title" href="#">
                      Survival Area
                    </a>
                    <div className="uk-accordion-content">
                      <div className="el-content uk-panel">
                        <p>
                          Our Survival Area leaves nothing to be desired. Here
                          we teach and practice helpful survival techniques
                          together with you. Many different activities are
                          offered to you here:
                        </p>
                        <ul>
                          <li>Raft building</li>
                          <li>Archery</li>
                          <li>Bridge building</li>
                          <li>Commando Crawl (Lake crossing by rope)</li>
                          <li>Fire making</li>
                          <li>Campfire cooking course</li>
                          <li>Water extraction</li>
                          <li>Drinking water production</li>
                          <li>Shelter building</li>
                          <li>Camouflage workshop</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="el-item">
                    <a className="el-title uk-accordion-title" href="#">
                      Creative World
                    </a>
                    <div className="uk-accordion-content">
                      <div className="el-content uk-panel">
                        <p className="el-content uk-margin">
                          Here you can let your creative streak run free.
                          Whether theatre, guitar course or workshops, crafting
                          with natural materials or musicals. We offer just
                          about everything your creative heart desires.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="el-item">
                    <a className="el-title uk-accordion-title" href="#">
                      Fitness World
                    </a>
                    <div className="uk-accordion-content">
                      <div className="el-content uk-panel">
                        <p className="el-content uk-margin">
                          Here you will be trimmed fit by our fitness coaches:
                          whether Zumba or workout fitness courses with outdoor
                          tools - your condition will be brought back to normal
                          under professional guidance.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="el-item">
                    <a className="el-title uk-accordion-title" href="#">
                      Adventure Sports
                    </a>
                    <div className="uk-accordion-content">
                      <div className="el-content uk-panel">
                        <p className="el-content uk-margin">
                          BMX, dirt bikes and mountain bikes are waiting for you
                          to try them out on our own adventure track. Explore
                          the ramps and the forest on various bikes - of course
                          always with helmet.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="el-item">
                    <a className="el-title uk-accordion-title" href="#">
                      Climbing Area
                    </a>
                    <div className="uk-accordion-content">
                      <div className="el-content uk-panel">
                        <p className="el-content uk-margin">
                          Our low and high ropes course will bond you and your
                          team together. Tricky tasks that can only be mastered
                          together are waiting for you. Of course there are also
                          challenges for everyone in our climbing courses:
                          whether it&apos;s abseiling from a tree, climbing a
                          rope, crate climbing or the Giant Swing: an adrenaline
                          kick is guaranteed.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="uk-width-1-2@m">
                <div uk-accordion="collapsible: true;" uk-scrollspy-class="">
                  <div className="el-item">
                    <a className="el-title uk-accordion-title" href="#">
                      GIBBON Slackline Park
                    </a>
                    <div className="uk-accordion-content">
                      <div className="el-content uk-panel">
                        <p className="el-content uk-margin">
                          Find your balancing skills in our Slackline Park and
                          prove your skills on slacklines at different heights,
                          one with more, the other with less slack. The fun
                          factor is certainly not affected.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="el-item">
                    <a className="el-title uk-accordion-title" href="#">
                      Chill Out Area
                    </a>
                    <div className="uk-accordion-content">
                      <div className="el-content uk-panel">
                        <p>
                          In our hammocks you can chill in the shade and make
                          yourself comfortable. In case of bad weather, our
                          library or the eventhall is comfortably furnished so
                          that you can relax there.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="el-item">
                    <a className="el-title uk-accordion-title" href="#">
                      Sports Field
                    </a>
                    <div className="uk-accordion-content">
                      <div className="el-content uk-panel">
                        <p className="el-content uk-margin">
                          Our large sports field offers hours of entertainment.
                          With a great soccer field to kick around on, badminton
                          courts and the large meadow is available for sports
                          such as baseball, football, rugby and many others.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="el-item">
                    <a className="el-title uk-accordion-title" href="#">
                      Seminar Rooms
                    </a>
                    <div className="uk-accordion-content">
                      <div className="el-content uk-panel">
                        <p className="el-content uk-margin">
                          In our comfortable seminar rooms, we get together when
                          things get more theoretical. Equipped with modern
                          presentation technology, they are the ideal place for
                          our courses.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="el-item">
                    <a className="el-title uk-accordion-title" href="#">
                      Creative & Bob the Builder Workshops
                    </a>
                    <div className="uk-accordion-content">
                      <div className="el-content uk-panel">
                        <p className="el-content uk-margin">
                          Visit our workshop and build, saw and hammer together
                          with our instructors. Our creative workshops offer a
                          lot of leeway which you can use for great creative
                          possibilities. Whether painting, drawing or crafting
                          with natural materials, great bracelets or jewelry
                          boxes, here is a great project for everyone to find.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="el-item">
                    <a className="el-title uk-accordion-title" href="#">
                      Other
                    </a>
                    <div className="uk-accordion-content">
                      <div className="el-content uk-panel">
                        <p className="el-content uk-margin">
                          Whether basketball court, table tennis or our disco
                          hall, in the Academy everything is taken care of.
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

      {/* Accommodation Section */}
      <div className="uk-section-muted uk-section-overlap uk-section">
        <div className="uk-container uk-container-small">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h2 uk-text-center" uk-scrollspy-class="">
                Accomodation
              </h2>
              <div
                className="uk-divider-icon uk-width-medium uk-margin-auto"
                uk-scrollspy-class=""
              ></div>
              <h3
                className="uk-h3 uk-heading-line uk-text-primary uk-text-center"
                uk-scrollspy-class=""
              >
                <span>Option 1: Seminar House</span>
              </h3>
              <div
                className="uk-panel uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin"
                uk-scrollspy-class="uk-animation-slide-right-medium"
              >
                <p>
                  Our seminar house has two large rooms with eight beds each in
                  the lower and seven beds in the upper area (gallery). There
                  are also two teacher&apos;s rooms with two and four beds
                  respectively, as well as a spacious seminar room with a cosy
                  kitchen and the possibility of accommodating another four
                  people on the gallery. Washrooms and toilets are of course
                  also in the house.
                </p>
              </div>
              <div
                className="uk-margin"
                uk-slideshow="minHeight: 300;"
                uk-scrollspy-class=""
              >
                <div className="uk-position-relative">
                  <div className="uk-slideshow-items">
                    <div className="el-item">
                      <Image
                        src={getTemplateImageUrl(
                          "yootheme/cache/ef/unterbringung_seminarhaus_auenansicht-ef3dc7c1.jpg"
                        )}
                        width={900}
                        height={600}
                        alt="the seminar house at camp"
                        loading="lazy"
                        className="el-image"
                        uk-cover=""
                      />
                    </div>
                    <div className="el-item">
                      <Image
                        src={getTemplateImageUrl(
                          "yootheme/cache/8d/unterbringung_seminarhaus_schlafsaal-8d7c1094.jpg"
                        )}
                        width={900}
                        height={600}
                        alt="one of the big rooms at camp"
                        loading="lazy"
                        className="el-image"
                        uk-cover=""
                      />
                    </div>
                    <div className="el-item">
                      <Image
                        src={getTemplateImageUrl(
                          "yootheme/cache/ee/unterbringung_seminarhaus_aufenthaltsraum-ee77f206.jpg"
                        )}
                        width={900}
                        height={600}
                        alt="a little kitchen in the seminar house"
                        loading="lazy"
                        className="el-image"
                        uk-cover=""
                      />
                    </div>
                    <div className="el-item">
                      <Image
                        src={getTemplateImageUrl(
                          "yootheme/cache/4e/unterbringung_seminarhaus_lehrerzimmer-4e64a85f.jpg"
                        )}
                        width={900}
                        height={600}
                        alt="a teacher's room in the seminar house"
                        loading="lazy"
                        className="el-image"
                        uk-cover=""
                      />
                    </div>
                  </div>
                  <div
                    className="uk-visible@s uk-position-medium uk-position-center-left"
                    uk-inverse=""
                  >
                    <a
                      className="el-slidenav"
                      href="#"
                      uk-slidenav-previous=""
                      uk-slideshow-item="previous"
                    ></a>
                  </div>
                  <div
                    className="uk-visible@s uk-position-medium uk-position-center-right"
                    uk-inverse=""
                  >
                    <a
                      className="el-slidenav"
                      href="#"
                      uk-slidenav-next=""
                      uk-slideshow-item="next"
                    ></a>
                  </div>
                </div>
                <div className="uk-margin-top uk-visible@s" uk-inverse="">
                  <ul
                    className="el-nav uk-slideshow-nav uk-dotnav uk-flex-center"
                    uk-margin=""
                  >
                    <li uk-slideshow-item="0">
                      <a href="#"></a>
                    </li>
                    <li uk-slideshow-item="1">
                      <a href="#"></a>
                    </li>
                    <li uk-slideshow-item="2">
                      <a href="#"></a>
                    </li>
                    <li uk-slideshow-item="3">
                      <a href="#"></a>
                    </li>
                  </ul>
                </div>
              </div>
              <h3
                className="uk-h3 uk-heading-line uk-text-primary uk-text-center"
                uk-scrollspy-class=""
              >
                <span>Option 2: Adventure Lodges</span>
              </h3>
              <div
                className="uk-panel uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin"
                uk-scrollspy-class="uk-animation-slide-right-medium"
              >
                <p>
                  Our Adventure Lodges each have two to eight beds and can
                  accommodate 134 people (9x2, 11x4, 9x8). Our two Premium
                  Lodges also offer two double rooms each with their own
                  bathroom with WC, washbasin and shower as well as refrigerator
                  and small kitchenette.
                </p>
              </div>
              <div
                className="uk-margin"
                uk-slideshow="minHeight: 300;"
                uk-scrollspy-class=""
              >
                <div className="uk-position-relative">
                  <div className="uk-slideshow-items">
                    <div className="el-item">
                      <Image
                        src={getTemplateImageUrl(
                          "yootheme/cache/21/unterbringung_htten_auenansicht-2134428c.jpg"
                        )}
                        width={900}
                        height={600}
                        alt="an adventure lodge at camp"
                        loading="lazy"
                        className="el-image"
                        uk-cover=""
                      />
                    </div>
                    <div className="el-item">
                      <Image
                        src={getTemplateImageUrl(
                          "yootheme/cache/34/unterbringung_htten_innenansicht-3459dfbd.jpg"
                        )}
                        width={900}
                        height={600}
                        alt="the inside of an Adventure Lodge"
                        loading="lazy"
                        className="el-image"
                        uk-cover=""
                      />
                    </div>
                    <div className="el-item">
                      <Image
                        src={getTemplateImageUrl(
                          "yootheme/cache/76/unterbringung_villen_innenansicht-76cc8f53.jpg"
                        )}
                        width={900}
                        height={600}
                        alt="double room for group leaders"
                        loading="lazy"
                        className="el-image"
                        uk-cover=""
                      />
                    </div>
                  </div>
                  <div
                    className="uk-visible@s uk-position-medium uk-position-center-left"
                    uk-inverse=""
                  >
                    <a
                      className="el-slidenav"
                      href="#"
                      uk-slidenav-previous=""
                      uk-slideshow-item="previous"
                    ></a>
                  </div>
                  <div
                    className="uk-visible@s uk-position-medium uk-position-center-right"
                    uk-inverse=""
                  >
                    <a
                      className="el-slidenav"
                      href="#"
                      uk-slidenav-next=""
                      uk-slideshow-item="next"
                    ></a>
                  </div>
                </div>
                <div className="uk-margin-top uk-visible@s" uk-inverse="">
                  <ul
                    className="el-nav uk-slideshow-nav uk-dotnav uk-flex-center"
                    uk-margin=""
                  >
                    <li uk-slideshow-item="0">
                      <a href="#"></a>
                    </li>
                    <li uk-slideshow-item="1">
                      <a href="#"></a>
                    </li>
                    <li uk-slideshow-item="2">
                      <a href="#"></a>
                    </li>
                  </ul>
                </div>
              </div>
              <h3
                className="uk-h3 uk-heading-line uk-text-primary uk-text-center"
                uk-scrollspy-class=""
              >
                <span>Option 3: Tent Village</span>
              </h3>
              <div
                className="uk-panel uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin"
                uk-scrollspy-class="uk-animation-slide-right-medium"
              >
                <p>
                  Our 3 tent villages each have 12 student tents with 6-8 places
                  and 4 teacher tents with two beds. Equipped with a wooden
                  floor and gallery they invite you to stay overnight. In total
                  we have about 300 additional places in tents. Additional tents
                  you bring yourself are also possible on request.
                </p>
              </div>
              <div
                className="uk-margin"
                uk-slideshow="minHeight: 300;"
                uk-scrollspy-class=""
              >
                <div className="uk-position-relative">
                  <div className="uk-slideshow-items">
                    <div className="el-item">
                      <Image
                        src={getTemplateImageUrl(
                          "yootheme/cache/da/unterbringung_zelte_schild-da22817e.jpg"
                        )}
                        width={900}
                        height={600}
                        alt="Tent Area"
                        loading="lazy"
                        className="el-image"
                        uk-cover=""
                      />
                    </div>
                    <div className="el-item">
                      <Image
                        src={getTemplateImageUrl(
                          "yootheme/cache/17/unterbringung_zelt_zeltwiese-17a03ce6.jpg"
                        )}
                        width={900}
                        height={600}
                        alt="tent field"
                        loading="lazy"
                        className="el-image"
                        uk-cover=""
                      />
                    </div>
                    <div className="el-item">
                      <Image
                        src={getTemplateImageUrl(
                          "yootheme/cache/7f/unterbringung_zelt_innenansicht-7f846f09.jpg"
                        )}
                        width={899}
                        height={600}
                        alt="campers in a tent"
                        loading="lazy"
                        className="el-image"
                        uk-cover=""
                      />
                    </div>
                    <div className="el-item">
                      <Image
                        src={getTemplateImageUrl(
                          "yootheme/cache/c8/unterbringung_zelt_badezimmer-c83834e7.jpg"
                        )}
                        width={900}
                        height={600}
                        alt="the washrooms at camp"
                        loading="lazy"
                        className="el-image"
                        uk-cover=""
                      />
                    </div>
                    <div className="el-item">
                      <Image
                        src={getTemplateImageUrl(
                          "yootheme/cache/62/unterbringung_zelt_duschen-621d45fc.jpg"
                        )}
                        width={900}
                        height={600}
                        alt="the showers at camp"
                        loading="lazy"
                        className="el-image"
                        uk-cover=""
                      />
                    </div>
                  </div>
                  <div
                    className="uk-visible@s uk-position-medium uk-position-center-left"
                    uk-inverse=""
                  >
                    <a
                      className="el-slidenav"
                      href="#"
                      uk-slidenav-previous=""
                      uk-slideshow-item="previous"
                    ></a>
                  </div>
                  <div
                    className="uk-visible@s uk-position-medium uk-position-center-right"
                    uk-inverse=""
                  >
                    <a
                      className="el-slidenav"
                      href="#"
                      uk-slidenav-next=""
                      uk-slideshow-item="next"
                    ></a>
                  </div>
                </div>
                <div className="uk-margin-top uk-visible@s" uk-inverse="">
                  <ul
                    className="el-nav uk-slideshow-nav uk-dotnav uk-flex-center"
                    uk-margin=""
                  >
                    <li uk-slideshow-item="0">
                      <a href="#"></a>
                    </li>
                    <li uk-slideshow-item="1">
                      <a href="#"></a>
                    </li>
                    <li uk-slideshow-item="2">
                      <a href="#"></a>
                    </li>
                    <li uk-slideshow-item="3">
                      <a href="#"></a>
                    </li>
                    <li uk-slideshow-item="4">
                      <a href="#"></a>
                    </li>
                  </ul>
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
