"use client";

import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getTemplateImageUrl } from "@/lib/assets";
import { programs } from "@/data/programs";
import { ProgramCard } from "@/components/features/ProgramCard";

// Extend Window interface for Leaflet
declare global {
  interface Window {
    L?: any;
  }
}

export default function CampProfilesPage() {
  const [filteredPrograms, setFilteredPrograms] = useState(programs);

  useEffect(() => {
    const applyFilters = () => {
      const hash = window.location.hash;
      const searchParams = new URLSearchParams(window.location.search);

      let field4 = "";
      let field5 = "";
      let field6 = "";
      let field7 = "";

      if (hash.includes("?")) {
        const hashParams = new URLSearchParams(hash.split("?")[1]);
        field4 = hashParams.get("field_4") || searchParams.get("field_4") || "";
        field5 = hashParams.get("field_5") || searchParams.get("field_5") || "";
        field6 = hashParams.get("field_6") || searchParams.get("field_6") || "";
        field7 = hashParams.get("field_7") || searchParams.get("field_7") || "";
      } else {
        field4 = searchParams.get("field_4") || "";
        field5 = searchParams.get("field_5") || "";
        field6 = searchParams.get("field_6") || "";
        field7 = searchParams.get("field_7") || "";
      }

      if (field4 || field5 || field6 || field7) {
        let filtered = [...programs];

        if (field4) {
          const programValues = field4.split(",");
          const programMap: Record<string, string> = {
            adventure: "adventure-sports-creative",
            fishing: "fishing",
            "arts-crafts": "arts-crafts",
            englisch: "englischcamps",
            "englisch-toefl": "englisch-toefl",
            soccer: "soccer",
            husky: "husky-camp",
            climbing: "climbing",
            "top-rope": "climbing",
            horseback: "horseback-riding",
            diving: "diving",
            tennis: "tennis",
            icit: "icit",
            leadership: "leadership",
            "water-sports": "multi-water-adventure",
            dlrg: "lifeguarding",
            swimming: "swimming",
            sailing: "sailing",
            skating: "skating",
            space: "space-exploration",
            spanish: "spanishcourse",
            survival: "survival",
            dancing: "dancing",
            windsurf: "windsurfing",
            german: "german-camps",
            coding: "adventure-sports-creative",
          };
          filtered = filtered.filter((p) =>
            programValues.some((val) => {
              const mappedVal = programMap[val] || val;
              return p.slug.includes(mappedVal);
            })
          );
        }

        if (field5) {
          const seasonValues = field5.split(",");
          filtered = filtered.filter((p) =>
            seasonValues.some((val) => p.seasons.includes(val))
          );
        }

        if (field6) {
          const locationValues = field6.split(",");
          filtered = filtered.filter((p) =>
            locationValues.some((val) => {
              const locationMap: Record<string, string> = {
                "northern-germany": "Germany",
                "west-germany": "Germany",
                "south-germany": "Germany",
                england: "England",
                spain: "Spain",
              };
              const mappedVal = locationMap[val] || val;
              return p.location.toLowerCase().includes(mappedVal.toLowerCase());
            })
          );
        }

        if (field7) {
          const ageValue = parseInt(field7);
          if (!isNaN(ageValue)) {
            filtered = filtered.filter((p) => {
              const ageRange = p.age.match(/\d+/g);
              if (ageRange && ageRange.length >= 2) {
                const minAge = parseInt(ageRange[0]);
                const maxAge = parseInt(ageRange[1]);
                return ageValue >= minAge && ageValue <= maxAge;
              }
              return false;
            });
          }
        }

        setFilteredPrograms(filtered);
      } else {
        setFilteredPrograms(programs);
      }
    };

    applyFilters();
    window.addEventListener("hashchange", applyFilters);
    return () => window.removeEventListener("hashchange", applyFilters);
  }, []);

  // Khởi tạo map sau khi Leaflet đã load
  useEffect(() => {
    const initMap = () => {
      if (typeof window === "undefined" || !window.L) {
        return false;
      }

      const mapDiv = document.getElementById("camp-profiles-map");
      if (!mapDiv) {
        return false;
      }

      if ((mapDiv as any)._leaflet) {
        return false;
      }

      try {
        const map = window.L.map("camp-profiles-map").setView(
          [53.5597, 9.9601],
          5
        );

        window.L.tileLayer(
          "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
          {
            attribution:
              "Leaflet | © Esri | DigitalGlobe, GeoEye, i-cubed, USDA, USGS, AEX, Getmapping, Aerogrid, IGN, IGP, swisstopo, and the GIS User Community",
            maxZoom: 18,
            minZoom: 0,
          }
        ).addTo(map);

        // Danh sách markers
        const markers = [
          {
            lat: 53.5597,
            lng: 9.9601,
            title: "Camp Adventure Office - Hamburg",
          },
          {
            lat: 52.8625,
            lng: 9.5883,
            title: "Camp Adventure Academy - Lüneburger Heide",
          },
          {
            lat: 48.9701,
            lng: 13.1263,
            title: "Camp Adventure - Bayerischer Wald",
          },
          {
            lat: 53.9246,
            lng: -3.00764,
            title: "Camp Adventure - Rossall School",
          },
          {
            lat: 51.3802,
            lng: -2.36674,
            title: "Camp Adventure - Bath University",
          },
          {
            lat: 53.6279,
            lng: 10.687,
            title: "Camp Adventure - Lauenburgische Seen",
          },
          {
            lat: 54.627,
            lng: 8.38935,
            title: "Camp Adventure - Amrum",
          },
        ];

        // Thêm markers vào map
        markers.forEach((marker) => {
          window.L.marker([marker.lat, marker.lng])
            .addTo(map)
            .bindPopup(`<h3>${marker.title}</h3>`);
        });

        // Đánh dấu đã khởi tạo
        (mapDiv as any)._leaflet = true;
        return true;
      } catch (e) {
        console.error("Error initializing map:", e);
        return false;
      }
    };

    // Chờ cả DOM và Leaflet load
    const checkAndInit = () => {
      const mapDiv = document.getElementById("camp-profiles-map");
      if (mapDiv && window.L && typeof window.L.map === "function") {
        initMap();
        return true;
      }
      return false;
    };

    // Hàm retry với delay
    const startInitWithRetry = () => {
      // Thử khởi tạo ngay lập tức
      if (checkAndInit()) {
        return;
      }

      // Nếu chưa được, retry
      let retryCount = 0;
      const maxRetries = 50; // 10 giây (50 * 200ms)
      const interval = setInterval(() => {
        retryCount++;
        if (checkAndInit() || retryCount >= maxRetries) {
          clearInterval(interval);
          if (retryCount >= maxRetries) {
            console.error("Failed to initialize map after 10 seconds");
            console.log("window.L:", window.L);
            console.log("window.L.map:", typeof window.L?.map);
            console.log(
              "Map div exists:",
              !!document.getElementById("camp-profiles-map")
            );
          }
        }
      }, 200);
    };

    // Đợi React render và Leaflet load
    // Sử dụng multiple timeouts để đảm bảo
    const timeout1 = setTimeout(() => {
      startInitWithRetry();
    }, 500);

    const timeout2 = setTimeout(() => {
      startInitWithRetry();
    }, 1500);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  const handleFilterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const params = new URLSearchParams();

    const field4 = (formData.get("field_4") as string) || "";
    const field5 = (formData.get("field_5") as string) || "";
    const field6 = (formData.get("field_6") as string) || "";
    const field7 = (formData.get("field_7") as string) || "";

    if (field4) params.set("field_4", field4);
    if (field5) params.set("field_5", field5);
    if (field6) params.set("field_6", field6);
    if (field7) params.set("field_7", field7);

    window.location.hash = `#searchform?${params.toString()}`;
    window.location.reload();
  };

  return (
    <>
      <style
        className="uk-margin-remove-adjacent"
        dangerouslySetInnerHTML={{
          __html: `
            #searchform {
              background: #006533;
            }
            #searchform .uk-button.uk-button-default,
            #searchform .uk-button.uk-button-secondary {
              margin-right: 10px;
              margin-bottom: 10px;
            }
            #searchform select,
            #searchform .ms-options-wrap,
            #searchform .uk-button.uk-button-secondary {
              border-color: rgba(255, 255, 255, 0.5) !important;
            }
            #page\\#0 .el-meta {
              position: absolute;
              top: 0;
              right: 25px;
              background: #fff;
              padding: 3px 15px;
              font-size: 16px;
              font-weight: bold;
              border-radius: 10px;
            }
            #page\\#0 .el-content {
              padding-bottom: 20px;
            }
            #page\\#0 .el-link {
              position: absolute;
              bottom: 20px;
            }
            select.jqmsLoaded {
              background: none;
              border: 0;
            }
            .ms-options-wrap {
              font-size: 15px;
              height: 40px;
              vertical-align: middle;
              display: block;
              border: 1px solid rgba(255, 255, 255, .15);
              line-height: 38px;
            }
            .ms-options-wrap li label {
              line-height: normal;
              color: #292c3d;
            }
            .ms-options-wrap>.ms-options>ul li.selected label {
              background: transparent;
            }
            .ms-options-wrap>button:focus,
            .ms-options-wrap>button,
            .ms-options-wrap.ms-has-selections>button {
              background: none;
              border: 0;
              color: rgba(255, 255, 255, 0.7);
              font-size: 15px;
            }
            .ms-options-wrap>button:after {
              border-top-color: rgba(255, 255, 255, 0.7);
            }
          `,
        }}
      />

      {/* Hero Section */}
      <div
        className="uk-section-default uk-section-overlap uk-preserve-color uk-light uk-position-relative"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div
          data-src={getTemplateImageUrl("yootheme/banner/b3.jpg")}
          uk-img=""
          className="uk-background-norepeat uk-background-cover uk-background-center-center uk-section uk-section-xlarge"
          style={{
            backgroundImage: `url(${getTemplateImageUrl(
              "yootheme/banner/b3.jpg"
            )})`,
          }}
        >
          <div
            className="uk-position-cover"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.19)" }}
          ></div>
          <div className="uk-container uk-container-large uk-position-relative">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
              <div className="uk-width-1-1@m">
                <h1
                  className="uk-heading-large uk-text-center"
                  uk-scrollspy-class=""
                >
                  International Sport- & Language Camps
                </h1>
                <div
                  className="uk-panel uk-text-lead uk-margin uk-text-center"
                  uk-scrollspy-class=""
                >
                  <p>for Kids and Teenagers from all over the world</p>
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
                  Adventure & sports camps, vacation camps, as well as English &
                  German language camps in Germany and England, since 2002
                </p>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* ProvenExpert Widget + Quote Section */}
      <div
        className="uk-section-default uk-section-overlap uk-section uk-section-small"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
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
                      title="Kundenbewertungen & Erfahrungen zu Camp Adventure. Mehr Infos anzeigen."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="https://images.provenexpert.com/93/fc/d5e99b2883e0bb405862d9993db6/widget_recommendation_465_04f6f.png?t=1662145244032"
                        width={465}
                        height={200}
                        alt="Kundenbewertungen & Erfahrungen zu Camp Adventure. Mehr Infos anzeigen."
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
                    My son (age 11) absolutely loved Camp Adventure! After two
                    disastrous camp experiences, this was our last attempt. I am
                    so glad he went! He said he had the time of his life and
                    can&apos;t wait to come back. He said the counselors were
                    fun and energetic, the food was delicious and plentiful, the
                    activities were fun, and the other campers were all very
                    nice.
                  </p>
                  <footer className="el-footer">
                    <cite className="el-author">
                      <a
                        className="uk-link-muted"
                        href="https://goo.gl/maps/6SUEPwPJtZofokoX7"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Sarah O.
                      </a>
                    </cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Paragraph Section */}
      <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div className="uk-panel uk-text-large uk-dropcap uk-margin">
                <p>
                  In our international camps in Germany and England we offer
                  various courses that you can book as additional options to our
                  camp activities. Get an overview of what is taking place where
                  and simply decide which camp you would like to spend next
                  summer based on the program of your choice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div
        className="uk-section-secondary uk-section uk-padding-remove-vertical"
        style={{ padding: 0 }}
      >
        <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
          <div className="uk-width-1-1@m">
            <div
              className="uk-position-relative uk-dark"
              style={{ height: "600px", width: "100%", zIndex: 1 }}
            >
              <div
                id="camp-profiles-map"
                style={{ height: "100%", width: "100%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Form Section */}
      <div
        id="searchform"
        className="uk-section-primary uk-section-overlap uk-section"
      >
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1">
            <div className="uk-width-1-1" style={{ padding: 0 }}>
              <h2
                className="uk-heading-small uk-text-center"
                style={{
                  color: "#fff",
                  fontSize: "2rem",
                  fontWeight: "bold",
                  marginBottom: "2rem",
                  textTransform: "uppercase",
                }}
              >
                FIND YOUR CAMP!
              </h2>
            </div>
          </div>
          <form
            id="filter-form"
            method="GET"
            action="/camp-profiles#searchform"
            onSubmit={handleFilterSubmit}
            className="uk-grid uk-grid-small uk-child-width-1-4@m uk-child-width-1-1"
            uk-grid=""
          >
            <div className="uk-width-1-4@m">
              <label
                className="uk-form-label"
                style={{
                  color: "#fff",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                }}
              >
                PROGRAMS & COURSES
              </label>
              <select
                id="field_4_select"
                className="multiselect"
                data-hidden="field_4"
                multiple
              >
                <option value="adventure">Adventure, Sport and Creative</option>
                <option value="fishing">Fishing</option>
                <option value="arts-crafts">Arts & Crafts</option>
                <option value="coding">Coding</option>
                <option value="german">German course</option>
                <option value="englisch">English course</option>
                <option value="englisch-toefl">
                  English course (TOEFL exam)
                </option>
                <option value="soccer">Soccer</option>
                <option value="husky">Husky</option>
                <option value="icit">
                  International Counselor in Training (ICIT)
                </option>
                <option value="top-rope">
                  Climbing course (Top Rope certificate)
                </option>
                <option value="leadership">Leadership</option>
                <option value="water-sports">Multi Water Adventure</option>
                <option value="horseback">Horseback Riding</option>
                <option value="dlrg">Lifeguard course (DLRG bronze)</option>
                <option value="swimming">Swimming course</option>
                <option value="sailing">Sailing</option>
                <option value="skating">Skating</option>
                <option value="space">Space Exploration</option>
                <option value="spanish">Spanish course</option>
                <option value="survival">Survival</option>
                <option value="dancing">Dancing</option>
                <option value="diving">Diving course (PADI Open Water)</option>
                <option value="tennis">Tennis</option>
                <option value="windsurf">Windsurfing</option>
              </select>
              <input type="hidden" id="field_4" name="field_4" value="" />
            </div>
            <div className="uk-width-1-4@m">
              <label
                className="uk-form-label"
                style={{
                  color: "#fff",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                }}
              >
                HOLIDAY
              </label>
              <select
                id="field_5_select"
                className="multiselect"
                data-hidden="field_5"
                multiple
              >
                <option value="spring">Spring</option>
                <option value="summer">Summer</option>
                <option value="autumn">Autumn</option>
              </select>
              <input type="hidden" id="field_5" name="field_5" value="" />
            </div>
            <div className="uk-width-1-4@m">
              <label
                className="uk-form-label"
                style={{
                  color: "#fff",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                }}
              >
                LOCATION
              </label>
              <select
                id="field_6_select"
                className="multiselect"
                data-hidden="field_6"
                multiple
              >
                <option value="northern-germany">Northern Germany</option>
                <option value="west-germany">West Germany</option>
                <option value="south-germany">South Germany</option>
                <option value="england">England</option>
                <option value="spain">Spain</option>
              </select>
              <input type="hidden" id="field_6" name="field_6" value="" />
            </div>
            <div className="uk-width-1-4@m">
              <label
                className="uk-form-label"
                style={{
                  color: "#fff",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                }}
              >
                AGE
              </label>
              <select id="field_7_select" name="field_7" className="uk-select">
                <option value=""></option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
              </select>
            </div>
            <div
              className="uk-width-1-1"
              style={{ marginTop: "1.5rem", textAlign: "center" }}
            >
              <button
                className="uk-button uk-button-default"
                type="submit"
                style={{
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  marginRight: "10px",
                  backgroundColor: "#fff",
                  color: "#000",
                  borderColor: "#fff",
                }}
              >
                APPLY FILTER
              </button>
              <button
                className="uk-button uk-button-secondary"
                type="button"
                onClick={() => {
                  window.location.href = "/camp-profiles#searchform";
                }}
                style={{
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  backgroundColor: "#006533",
                  color: "#fff",
                  borderColor: "#006533",
                }}
              >
                RESET
              </button>
            </div>
          </form>

          <Script
            id="multiselect-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                      document.addEventListener('DOMContentLoaded', function () {
                        if (typeof jQuery !== 'undefined' && typeof jQuery.fn.multiselect !== 'undefined') {
                          jQuery('.multiselect[multiple]').multiselect({
                            texts: {
                              placeholder: '',
                              selectedOptions: ''
                            },
                            selectAll: false,
                            selectGroup: true
                          });

                          document.getElementById('filter-form').addEventListener('submit', function () {
                            document.querySelectorAll('.multiselect').forEach(function (select) {
                              const hiddenFieldId = select.getAttribute('data-hidden');
                              const hiddenField = document.getElementById(hiddenFieldId);
                              const selectedValues = jQuery(select).val();
                              if (hiddenField) {
                                hiddenField.value = selectedValues ? selectedValues.join(',') : '';
                              }
                            });
                          });
                        }
                      });
                    `,
            }}
          />
        </div>
      </div>

      {/* Programs Grid Section */}
      <div className="uk-section-default uk-section">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1">
              <div id="page#0" className="uk-margin">
                <div
                  className="uk-grid uk-child-width-1-1 uk-child-width-1-3@m uk-grid-match"
                  uk-grid=""
                >
                  {filteredPrograms.map((program) => (
                    <ProgramCard key={program.id} {...program} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cooperations & Memberships Section */}
      <div
        className="uk-section-default uk-section-overlap uk-position-relative"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-scale-up; delay: false;"
      >
        <div
          data-src={getTemplateImageUrl(
            "yootheme/cache/d1/background_campground-d13d89db.jpeg"
          )}
          uk-img=""
          className="uk-background-norepeat uk-background-contain uk-background-bottom-center uk-section uk-section-large"
          style={{
            backgroundImage: `url(${getTemplateImageUrl(
              "yootheme/cache/d1/background_campground-d13d89db.jpeg"
            )})`,
          }}
        >
          <div
            className="uk-position-cover"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.87)" }}
          ></div>
          <div className="uk-container uk-container-large uk-position-relative">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-margin-large">
              <div className="uk-width-1-1@m">
                <div
                  className="uk-h5 uk-margin-small uk-text-center"
                  uk-scrollspy-class="uk-animation-slide-top-medium"
                >
                  Camp Adventure
                </div>
                <h3
                  className="uk-h1 uk-margin-small uk-text-center"
                  uk-scrollspy-class="uk-animation-slide-bottom-medium"
                >
                  Cooperations & Memberships
                </h3>
                <div
                  className="uk-divider-icon uk-width-medium uk-margin-auto"
                  uk-scrollspy-class=""
                ></div>
              </div>
            </div>
            <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
              <div className="uk-width-1-1@m">
                <div className="uk-margin uk-text-center">
                  <div
                    className="uk-grid uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-3@l uk-grid-collapse uk-grid-match"
                    uk-grid=""
                  >
                    {/* Partnership Logos */}
                    <div>
                      <div
                        className="el-item uk-flex uk-flex-column"
                        uk-scrollspy-class=""
                      >
                        <a
                          className="uk-flex-1 uk-card uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle"
                          href="https://www.reisenetz.org/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/98/reisenetz2-98f3b127.png"
                            )}
                            width={120}
                            height={120}
                            alt="Reisenetz"
                            className="el-image"
                            loading="lazy"
                          />
                        </a>
                      </div>
                    </div>
                    <div>
                      <div
                        className="el-item uk-flex uk-flex-column"
                        uk-scrollspy-class=""
                      >
                        <a
                          className="uk-flex-1 uk-card uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle"
                          href="http://www.campingfellowship.org/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/7a/icf2-7a52c185.png"
                            )}
                            width={178}
                            height={120}
                            alt="ICF"
                            className="el-image"
                            loading="lazy"
                          />
                        </a>
                      </div>
                    </div>
                    <div>
                      <div
                        className="el-item uk-flex uk-flex-column"
                        uk-scrollspy-class=""
                      >
                        <a
                          className="uk-flex-1 uk-card uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle"
                          href="https://www.language-testing-service.de/cms/index.php?id=8"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/5f/toefl2-5f52dff4.png"
                            )}
                            width={120}
                            height={120}
                            alt="TOEFL"
                            className="el-image"
                            loading="lazy"
                          />
                        </a>
                      </div>
                    </div>
                    <div>
                      <div
                        className="el-item uk-flex uk-flex-column"
                        uk-scrollspy-class=""
                      >
                        <a
                          className="uk-flex-1 uk-card uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle"
                          href="https://www.kmdd.de/Home.htm"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/bd/kmdd2-bdeae52d.png"
                            )}
                            width={112}
                            height={120}
                            alt="KMDD"
                            className="el-image"
                            loading="lazy"
                          />
                        </a>
                      </div>
                    </div>
                    <div>
                      <div
                        className="el-item uk-flex uk-flex-column"
                        uk-scrollspy-class=""
                      >
                        <a
                          className="uk-flex-1 uk-card uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle"
                          href="https://dofe-germany.de/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/f8/dofe2-f84c724b.png"
                            )}
                            width={362}
                            height={120}
                            alt="DofE"
                            className="el-image"
                            loading="lazy"
                          />
                        </a>
                      </div>
                    </div>
                    <div>
                      <div
                        className="el-item uk-flex uk-flex-column"
                        uk-scrollspy-class=""
                      >
                        <a
                          className="uk-flex-1 uk-card uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle"
                          href="https://www.erca.uk/index.php/de/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/00/erca2-0047e06a.png"
                            )}
                            width={276}
                            height={120}
                            alt="ERCA"
                            className="el-image"
                            loading="lazy"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
