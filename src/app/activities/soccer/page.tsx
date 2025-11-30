"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { getTemplateImageUrl } from "@/lib/assets";

export default function SoccerPage() {
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
              "yootheme/cache/dd/11-Soccer-Camps-dda0e3d8.jpg"
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
                  <p>Soccer Speciality Camps in Germany, England & Spain</p>
                </h1>
                <div
                  className="uk-panel uk-text-lead uk-margin uk-text-left"
                  uk-scrollspy-class=""
                >
                  <p>
                    Can&apos;t keep your feet off the ball even during the
                    holidays and want to improve your English skills at the same
                    time? Then our soccer camps in Germany, England, and Spain
                    are perfect for you!
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
                <p>Germany, England, and Spain</p>
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
                  Ages 7 - 17
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
                <p>
                  Germany: Tents & Lodges
                  <br />
                  GB: Boarding House
                  <br />
                  Spain: BISC Sailing Center
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

      {/* Intro Section */}
      <div
        id="page#4"
        className="uk-section-default uk-section uk-section-small uk-flex uk-flex-middle"
        uk-height-viewport="expand: true;"
      >
        <div className="uk-width-1-1">
          <div className="uk-container">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
              <div className="uk-width-1-1">
                <div className="uk-panel uk-text-large uk-margin uk-text-center">
                  <p>
                    <span style={{ color: "#ffffff" }}>
                      Can&apos;t keep your feet off the ball even during the
                      holidays and want to improve your English skills at the
                      same time? Then our soccer camps in Germany, England, and
                      Spain are perfect for you! Depending on the location, we
                      offer soccer courses with top European clubs in various
                      formats, tailored to your individual skill level. Whether
                      you&apos;re a regular player or just want to try something
                      new — we have the right camp for you:
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Locations Section */}
      <div className="uk-section-muted uk-section">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1">
              <div className="uk-margin uk-text-center">
                <div
                  className="uk-grid uk-child-width-1-1 uk-child-width-1-4@m uk-grid-match"
                  uk-grid="parallax: 0;"
                >
                  <div>
                    <div className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child">
                      <Image
                        src={getTemplateImageUrl(
                          "yootheme/cache/dd/11-Soccer-Camps-dda0e3d8.jpg"
                        )}
                        width={400}
                        height={300}
                        alt="Soccer with Go and Grow Camp Academy"
                        loading="lazy"
                        className="el-image uk-border-rounded"
                      />
                      <div className="el-title uk-h4 uk-margin-top uk-margin-remove-bottom">
                        Go and Grow Camp Academy
                      </div>
                      <div className="el-meta uk-h5 uk-margin-top uk-margin-remove-bottom">
                        7 - 17 years
                      </div>
                      <div className="el-content uk-panel uk-margin-top">
                        <p>
                          Lüneburger Heide,
                          <br />
                          Northern Germany
                        </p>
                      </div>
                      <div className="uk-margin-top">
                        <Link
                          href="/destinations/germany-lueneburger-heide"
                          className="el-link uk-button uk-button-primary"
                        >
                          Info
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child">
                      <Image
                        src={getTemplateImageUrl(
                          "yootheme/cache/10/15-Soccer-Camps-10ea528e.jpg"
                        )}
                        width={400}
                        height={300}
                        alt="Soccercamp with VfL Wolfsburg"
                        loading="lazy"
                        className="el-image uk-border-rounded"
                      />
                      <div className="el-title uk-h4 uk-margin-top uk-margin-remove-bottom">
                        VfL Wolfsburg Fußballschule
                      </div>
                      <div className="el-meta uk-h5 uk-margin-top uk-margin-remove-bottom">
                        7 - 17 years
                      </div>
                      <div className="el-content uk-panel uk-margin-top">
                        <p>
                          <span>
                            Lüneburger Heide,
                            <br />
                            Northern Germany
                          </span>
                        </p>
                      </div>
                      <div className="uk-margin-top">
                        <Link
                          href="/destinations/germany-lueneburger-heide"
                          className="el-link uk-button uk-button-primary"
                        >
                          Info
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child">
                      <Image
                        src={getTemplateImageUrl(
                          "yootheme/cache/5e/12-Soccer-Camps-5ec9331b.jpg"
                        )}
                        width={400}
                        height={300}
                        alt="Soccercamp with Paris Saint-Germain Academy in England"
                        loading="lazy"
                        className="el-image uk-border-rounded"
                      />
                      <div className="el-title uk-h4 uk-margin-top uk-margin-remove-bottom">
                        Paris Saint-Germain Academy
                      </div>
                      <div className="el-meta uk-h5 uk-margin-top uk-margin-remove-bottom">
                        10 - 17 years
                      </div>
                      <div className="el-content uk-panel uk-margin-top">
                        <p>
                          England
                          <br />
                          Bath & London
                        </p>
                      </div>
                      <div className="uk-margin-top">
                        <Link
                          href="/destinations/en-england-bath-university"
                          className="el-link uk-button uk-button-primary"
                        >
                          Info
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child">
                      <Image
                        src={getTemplateImageUrl(
                          "yootheme/cache/5e/12-Soccer-Camps-5ec9331b.jpg"
                        )}
                        width={400}
                        height={300}
                        alt="Soccercamp Barcelona"
                        loading="lazy"
                        className="el-image uk-border-rounded"
                      />
                      <div className="el-title uk-h4 uk-margin-top uk-margin-remove-bottom">
                        C.E.Vila Olímpica Football
                      </div>
                      <div className="el-meta uk-h5 uk-margin-top uk-margin-remove-bottom">
                        10 - 16 years
                      </div>
                      <div className="el-content uk-panel uk-margin-top">
                        <p>
                          Barcelona, Spain
                          <br />
                          BISC Sailing Center
                        </p>
                      </div>
                      <div className="uk-margin-top">
                        <Link
                          href="/destinations/en-spain-barcelona"
                          className="el-link uk-button uk-button-primary"
                        >
                          Info
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className="uk-section-default uk-section">
        <div
          className="uk-container uk-container-large"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin"
            style={{ width: "100%", maxWidth: "1200px" }}
          >
            <div className="uk-width-1-1@m">
              <h2 className="uk-h2 uk-text-center">Booking</h2>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
              <div className="uk-panel uk-margin">
                <div
                  style={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <iframe
                    src="https://www.bookacamp.de/en/booking/form/view-by-camp/ds7fdn347dsfndsf74n37en37en37dnd/soccerwal"
                    title="Bookacamp, die Buchungsplattform von Go and Grow Camp"
                    allowFullScreen={true}
                    width="1000"
                    height="1550"
                    frameBorder="0"
                    allowFullScreen={true}
                    style={{ margin: "0 auto" }}
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
                    Fantastic Soccer Camp! Our son loved every minute. The
                    training was professional, the coaches were amazing, and he
                    learned so much about teamwork and technique. The
                    combination of soccer and camp activities was perfect.
                    We&apos;ll definitely be back!
                  </p>
                  <footer className="el-footer">
                    <cite className="el-author">
                      <a
                        href="https://maps.app.goo.gl/FdniYSE33xQapbBs5"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Andreas W. auf Google
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
