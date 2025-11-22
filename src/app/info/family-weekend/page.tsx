"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { getTemplateImageUrl } from "@/lib/assets";

export default function FamilyWeekendPage() {
  return (
    <>
      {/* Hero Section */}
      <div
        id="page#0"
        className="uk-section-default uk-section uk-padding-remove-bottom"
      >
        <div className="uk-container uk-container-xlarge">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-margin-xlarge">
            <div className="uk-width-1-1@m">
              <h1 className="uk-text-center">Family Weekend</h1>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
              <div className="uk-panel uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin-large uk-width-2xlarge uk-margin-auto">
                <p>
                  Whether it´s canoeing, archery or even a traditional campfire
                  - at our family adventure weekends you can really let off
                  steam. Get to know our big campground, try our famous
                  activities, and experience nature with your children. It is
                  important to us that everything is laid back, voluntary and
                  just as you like it. We are not animators with whom you have
                  to dance. We invite you to experience an active weekend in the
                  middle of the Lueneburger Heide or the Bayerischer Wald with
                  us and other families. We offer a program with various
                  activities in which you can participate. Of course, you can
                  also simply bake in the sun, go swimming or explore the
                  surroundings. A simple but delicious full board is also
                  included in the price. No matter what age your children are -
                  everyone gets their money&apos;s worth!
                </p>
              </div>
              <div
                className="uk-slider-container uk-margin uk-text-center"
                uk-slider="sets: 1; center: 1; autoplay: 1;"
              >
                <div className="uk-position-relative">
                  <div className="uk-slider-items uk-grid-small" uk-grid="">
                    <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                      <div className="el-item uk-inline-clip">
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/81/wal_header-810b1eb4.jpg"
                          )}
                          width={1260}
                          height={837}
                          alt=""
                          className="el-image uk-transition-opaque"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                      <div className="el-item uk-inline-clip">
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/2d/wal_parallax-2d137671.jpg"
                          )}
                          width={1260}
                          height={840}
                          alt=""
                          className="el-image uk-transition-opaque"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                      <div className="el-item uk-inline-clip">
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/33/wal_survival-33e91146.jpg"
                          )}
                          width={1260}
                          height={840}
                          alt=""
                          className="el-image uk-transition-opaque"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                      <div className="el-item uk-inline-clip">
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/d5/wal_unterbringung_hut-d5db2bac.jpg"
                          )}
                          width={1260}
                          height={840}
                          alt=""
                          className="el-image uk-transition-opaque"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                      <div className="el-item uk-inline-clip">
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/22/wal_unterbringung_tent-221f6e67.jpg"
                          )}
                          width={1260}
                          height={840}
                          alt=""
                          className="el-image uk-transition-opaque"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
        <div className="uk-width-1-1@m">
          <div className="uk-h2 uk-text-center">Details</div>
          <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
        </div>
      </div>
      <div
        className="uk-grid tm-grid-expand uk-grid-large uk-grid-margin-large"
        uk-grid=""
      >
        <div className="uk-grid-item-match uk-flex-middle uk-width-1-2@m">
          <div className="uk-panel uk-width-1-1">
            <div className="uk-heading-small uk-heading-divider uk-margin-large uk-margin-remove-bottom uk-text-center">
              Lueneburger Heide
            </div>
            <div className="uk-h4 uk-text-primary uk-margin-large uk-margin-remove-bottom uk-text-center">
              Accommodation
            </div>
            <div className="uk-panel uk-margin-small uk-width-large uk-margin-auto uk-text-center">
              <p>
                Alternatively in our comfortable tents (up to 8 persons) with
                wooden floor and gallery, the Adventure Lodges with up to 4 bunk
                beds or in your own mobile home. Camping mats and sleeping bags
                can be rented on request.
              </p>
            </div>
            <div className="uk-h4 uk-text-primary uk-margin-large uk-margin-remove-bottom uk-text-center">
              Price
            </div>
            <div className="uk-panel uk-margin-small uk-width-large uk-margin-auto uk-text-center">
              <p>
                - in hut for single occupancy: 149 USD per adult, children (4-17
                years) receive 25% discount, children from 0-3 years free of
                charge.
              </p>
              <p>
                - in tent for single occupancy/own camper: 129 USD per adult,
                children (4-17 years) get 25 % discount, children from 0-3 years
                free of charge.
              </p>
              <p>
                The tents and cabins have between 4-8 places. The huts are
                equipped with mattresses and bunk beds, the tents have a wooden
                floor and a gallery where you can lay your sleeping mats and
                sleeping bags.
              </p>
            </div>
            <div className="uk-h4 uk-text-primary uk-margin-large uk-margin-remove-bottom uk-text-center">
              Period
            </div>
            <div className="uk-panel uk-margin-small uk-width-large uk-margin-auto uk-text-center">
              <p>
                <span style={{ textDecoration: "line-through" }}>
                  27.09.-29.09.2024
                </span>
                <br />
                (Start: arrival day dinner, end: departure day lunch snack)
              </p>
            </div>
          </div>
        </div>
        <div className="uk-width-1-2@m">
          <div className="uk-panel uk-width-1-1">
            <div className="uk-heading-small uk-heading-divider uk-margin-large uk-margin-remove-bottom uk-text-center">
              Bayerischer Wald
            </div>
            <div className="uk-h4 uk-text-primary uk-margin-large uk-margin-remove-bottom uk-text-center">
              Accommodation
            </div>
            <div className="uk-panel uk-margin-small uk-width-large uk-margin-auto uk-text-center">
              <p>
                Alternatively in our comfortable tents (up to 8 persons) with
                wooden floor and gallery, our new Tiny Houses with four-bed
                rooms or in your own mobile home. Camping mats and sleeping bags
                can be rented on request.
              </p>
            </div>
            <div className="uk-h4 uk-text-primary uk-margin-large uk-margin-remove-bottom uk-text-center">
              Price
            </div>
            <div className="uk-panel uk-margin-small uk-width-large uk-margin-auto uk-text-center">
              <p>
                - in hut for single occupancy: 149 USD per adult, children (4-17
                years) receive 25% discount, children from 0-3 years free of
                charge.
              </p>
              <p>
                - in tent for single occupancy/own camper: 129 USD per adult,
                children (4-17 years) get 25 % discount, children from 0-3 years
                free of charge.
              </p>
              <p>
                The tents and cabins have between 4-8 places. The huts are
                equipped with mattresses and bunk beds, the tents have a wooden
                floor and a gallery where you can lay your sleeping mats and
                sleeping bags.
              </p>
            </div>
            <div className="uk-h4 uk-text-primary uk-margin-large uk-margin-remove-bottom uk-text-center">
              Period
            </div>
            <div className="uk-panel uk-margin-small uk-width-large uk-margin-auto uk-text-center">
              <p>
                to be announced
                <br />
                (Start Friday dinner, end Sunday lunch snack)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Section */}
      <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div className="uk-h4 uk-text-primary uk-margin-large uk-margin-remove-bottom uk-text-center">
                Registration
              </div>
              <div className="uk-panel uk-margin-small uk-width-large uk-margin-auto uk-text-center">
                <p>
                  For a great family adventure weekend you can register here:
                </p>
              </div>
              <div className="uk-panel uk-margin">
                <div
                  style={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <iframe
                    src="https://bookacamp.de/en/booking/form/view-by-camp/ds7fdn347dsfndsf74n37en37en37dnd/walfam"
                    title="Bookacamp, die Buchungsplattform von Camp Adventure"
                    allowFullScreen={true}
                    width="1000"
                    height="600"
                    frameBorder="0"
                    style={{
                      maxWidth: "100%",
                      margin: "0 auto",
                      display: "block",
                    }}
                  ></iframe>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accommodation Images Section */}
      <div className="uk-section-default uk-section">
        <div className="uk-margin-xlarge uk-container uk-container-xlarge">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1">
            <div className="uk-width-1-1@m">
              <div className="uk-margin">
                <div
                  className="uk-grid uk-child-width-1-1 uk-child-width-1-3@s uk-grid-small uk-grid-match"
                  uk-grid=""
                >
                  <div>
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <Image
                        src={getTemplateImageUrl(
                          "yootheme/cache/c0/wal_unterbringung_hutinside-c0776869.jpg"
                        )}
                        width={610}
                        height={407}
                        alt=""
                        className="el-image"
                        loading="lazy"
                      />
                      <h2 className="el-title uk-h4 uk-text-primary uk-margin-top uk-margin-remove-bottom">
                        Lodges
                      </h2>
                    </div>
                  </div>
                  <div>
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <Image
                        src={getTemplateImageUrl(
                          "yootheme/cache/95/wal_unterbringung_bigfield-954ae7f3.jpg"
                        )}
                        width={610}
                        height={407}
                        alt=""
                        className="el-image"
                        loading="lazy"
                      />
                      <h2 className="el-title uk-h4 uk-text-primary uk-margin-top uk-margin-remove-bottom">
                        Large playground
                      </h2>
                    </div>
                  </div>
                  <div>
                    <div className="el-item uk-panel uk-margin-remove-first-child">
                      <Image
                        src={getTemplateImageUrl(
                          "yootheme/cache/f4/wal_unterbringung_eventhall-f4e34af0.jpg"
                        )}
                        width={610}
                        height={407}
                        alt=""
                        className="el-image"
                        loading="lazy"
                      />
                      <h2 className="el-title uk-h4 uk-text-primary uk-margin-top uk-margin-remove-bottom">
                        Event hall
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Location Section */}
      <div className="uk-section-default uk-section">
        <div className="uk-margin-large uk-container uk-container-xlarge">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1">
            <div className="uk-width-1-1@m">
              <div className="uk-h2 uk-margin uk-text-center">Our Location</div>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
              <div className="uk-margin uk-width-2xlarge uk-margin-auto">
                <div
                  className="uk-position-relative"
                  style={{
                    paddingBottom: "56.25%",
                    height: 0,
                    overflow: "hidden",
                  }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/zthhwHnxhkw?v=zthhwHnxhkw&disablekb=1"
                    allow="autoplay"
                    allowFullScreen
                    uk-responsive=""
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  ></iframe>
                  <div
                    className="uk-position-center uk-text-center"
                    style={{ pointerEvents: "none", zIndex: 1 }}
                  >
                    <div
                      className="uk-h3 uk-text-white"
                      style={{
                        textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                        fontWeight: "bold",
                      }}
                    >
                      Camp Adventure Headquarter Walsrode
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ProvenExpert Widget Section */}
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
