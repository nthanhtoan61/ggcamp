"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { getTemplateImageUrl } from "@/lib/assets";

export default function TravelDocumentsPage() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="uk-section-default uk-preserve-color uk-light uk-position-relative"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div
          className="uk-background-norepeat uk-background-cover uk-background-bottom-center uk-section uk-section-xlarge"
          style={{
            backgroundImage: `url(${getTemplateImageUrl("yootheme/cache/9d/Reiseunterlagen-9d81dea5.jpeg")})`,
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
                  className="uk-heading-medium uk-text-center"
                  id="page#0"
                  uk-scrollspy-class=""
                >
                  Camp Adventure
                  <br />
                  Last travel informations
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* General Section */}
      <div id="allgemein" className="uk-section-default uk-section">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1">
              <div className="uk-margin uk-text-center">
                <span
                  className="uk-text-success"
                  uk-icon="icon: world; width: 60; height: 60;"
                ></span>
              </div>
              <div className="uk-alert uk-text-center">
                <h2 className="el-title uk-h2">
                  Camp Adventure Travel Information
                </h2>
              </div>
              <div className="uk-panel uk-text-meta uk-margin">
                <p style={{ textAlign: "center" }}>As of: 2026</p>
              </div>
              <div className="uk-panel uk-text-large uk-margin">
                <p>
                  Our entire team is looking forward to an exciting and
                  adventurous holiday camp with you. Below you will find a summary
                  of all the important information about our adventure, sports
                  and language camps. If you have any further questions, please
                  do not hesitate to contact us at{" "}
                  <a href="mailto:office@campadventure.de">
                    office@campadventure.de
                  </a>
                  <br />
                  <br />
                  Groupflight infos will follow soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Locations Accordion Section */}
      <div className="uk-section-muted uk-section">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1">
              <div id="Accordion">
                <div uk-accordion="collapsible: true;" id="js-0" className="custom_acc_691a9d0c2cbf0">
                  <div id="js-0_0" className="el-item jp_">
                    <a className="uk-accordion-title" href="#">
                      <h3 className="el-accordion-title uk-h2 uk-margin-remove-bottom">
                        Germany - Lüneburger Heide/Walsrode
                      </h3>
                    </a>
                    <div className="uk-accordion-content uk-margin-remove-first-child">
                      <div className="el-content uk-panel uk-margin-top">
                        <p>
                          <strong>Address:</strong>
                          <br />
                          Camp Adventure Academy
                          <br />
                          Vethem 58
                          <br />
                          29664 Walsrode
                          <br />
                          <a
                            href="https://maps.app.goo.gl/9nNQXJg96LeEfiEC6"
                            target="_blank"
                            rel="noopener"
                          >
                            open here in Google Maps
                          </a>
                          <br />
                          IMPORTANT: Please pay attention to the signs near the
                          camp, as most navigation systems will lead you to the
                          wrong place!
                        </p>
                        <p>
                          <strong>Contact at the camp:</strong>
                          <br />
                          Email:{" "}
                          <a href="mailto:walsrode@campadventure.de">
                            walsrode@campadventure.de
                          </a>
                        </p>
                        <p>
                          <strong>Arrival and Departure:</strong>
                          <br />
                          Arrival: 4 – 6 pm
                          <br />
                          Departure: 10 am – noon
                        </p>
                      </div>
                    </div>
                  </div>

                  <div id="js-0_1" className="el-item jp_">
                    <a className="uk-accordion-title" href="#">
                      <h3 className="el-accordion-title uk-h2 uk-margin-remove-bottom">
                        Germany - Bavarian Forest/Regen
                      </h3>
                    </a>
                    <div className="uk-accordion-content uk-margin-remove-first-child">
                      <div className="el-content uk-panel uk-margin-top">
                        <p>
                          <strong>Address:</strong>
                          <br />
                          Camp Adventure
                          <br />
                          Badstrasse 18
                          <br />
                          94209 Regen
                        </p>
                        <p>
                          <strong>Contact at the camp:</strong>
                          <br />
                          Email:{" "}
                          <a href="mailto:regen@campadventure.de">
                            regen@campadventure.de
                          </a>
                        </p>
                        <p>
                          <strong>Arrival and Departure:</strong>
                          <br />
                          Arrival: 4 – 6 pm
                          <br />
                          Departure: 10 am – noon
                        </p>
                      </div>
                    </div>
                  </div>

                  <div id="js-0_2" className="el-item jp_">
                    <a className="uk-accordion-title" href="#">
                      <h3 className="el-accordion-title uk-h2 uk-margin-remove-bottom">
                        England - Bath & London Camp
                      </h3>
                    </a>
                    <div className="uk-accordion-content uk-margin-remove-first-child">
                      <div className="el-content uk-panel uk-margin-top">
                        <p>
                          <strong>Address:</strong>
                          <br />
                          University of Bath
                          <br />
                          c/o Camp Adventure
                          <br />
                          Claverton Down
                          <br />
                          Bath BA2 7AY, England
                        </p>
                        <p>
                          <strong>Contact at the camp:</strong>
                          <br />
                          Email:{" "}
                          <a href="mailto:england@campadventure.de">
                            england@campadventure.de
                          </a>
                        </p>
                        <p>
                          <strong>Arrival and Departure:</strong>
                          <br />
                          Arrival: 4 – 6 pm
                          <br />
                          Departure: 10 am – noon
                        </p>
                      </div>
                    </div>
                  </div>

                  <div id="js-0_6" className="el-item jp_">
                    <a className="uk-accordion-title" href="#">
                      <h3 className="el-accordion-title uk-h2 uk-margin-remove-bottom">
                        Spain - Barcelona Beach Camp
                      </h3>
                    </a>
                    <div className="uk-accordion-content uk-margin-remove-first-child">
                      <div className="el-content uk-panel uk-margin-top">
                        <p>
                          <strong>Address:</strong>
                          <br />
                          BISC International Sailing Center
                          <br />
                          c/o Camp Adventure
                          <br />
                          Parc del Fòrum Sota plaça fotovoltàica
                          <br />
                          08930 Sant Adrià de Besòs, Barcelona, Spanien
                        </p>
                        <p>
                          <strong>Contact at the camp:</strong>
                          <br />
                          Email:{" "}
                          <a href="mailto:barcelona@campadventure.de">
                            barcelona@campadventure.de
                          </a>
                        </p>
                        <p>
                          <strong>Arrival and Departure:</strong>
                          <br />
                          Arrival: 4 – 6 pm
                          <br />
                          Departure: 10 am – noon
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
    </>
  );
}

