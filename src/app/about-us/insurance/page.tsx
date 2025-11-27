"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getTemplateImageUrl } from "@/lib/assets";

export default function InsurancePage() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="uk-section-secondary uk-section-overlap uk-position-relative"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div
          className="uk-background-norepeat uk-background-cover uk-background-top-center uk-section uk-section-xlarge"
          style={{
            backgroundImage: `url(${getTemplateImageUrl("yootheme/cache/07/insurance_header-07793359.jpeg")})`,
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
                  className="uk-heading-large uk-text-center"
                  uk-scrollspy-class=""
                >
                  Insurance & Travel Cancellation Guarantee
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Insurance Package Section */}
      <div className="uk-section-default uk-section-overlap uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div className="uk-h1 uk-margin-small uk-text-center">
                Our Camp Adventure Insurance Package
              </div>
              <h2 className="uk-h5 uk-margin-small uk-text-center">
                Liability, casualty and health insurance
              </h2>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
              <div className="uk-panel uk-text-large uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin">
                <p>
                  It only takes one mouse-click to book our comprehensive holiday
                  insurance package for travels abroad, which includes a
                  liability, casualty and health insurance for the entire
                  duration of your journey. This ensures that your child is well
                  insured in the unlikely event of an accident, a doctor&apos;s
                  visit, a stay at the hospital or a misfortune causing damage to
                  external property.
                  <br />
                  <br />
                  Price: USD 45 per person/trip
                </p>
                <p>
                  The insurance covers the whole duration of the trip, including
                  the days of arrival and departure.
                </p>
                <p>
                  Please note that all participants without an EU insurance
                  card/private health insurance or without a travel insurance
                  package have to be prepared to cover the costs for medical
                  treatment themselves. Camp Adventure does not provide any
                  advance payment for doctor&apos;s bills. Non EU residents who
                  do not book our insurance package have to submit a confirmation
                  of their travel insurance.
                </p>
              </div>
              <div className="uk-margin uk-text-center">
                <a
                  className="el-content uk-button uk-button-primary"
                  title="Insurance confirmation 2020"
                  href="https://www.campadventure.de/images/f_infos/versicherung/DrWalter_Camp Adventure_2024.pdf"
                  target="_blank"
                >
                  further information
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Travel Cancellation Guarantee Section */}
      <div className="uk-section-muted uk-section-overlap uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div className="uk-h1 uk-text-center">
                Camp Adventure Travel Cancellation Guarantee
              </div>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
              <div className="uk-margin uk-text-center">
                <a
                  className="el-content uk-button uk-button-primary"
                  title="Travel Cancellation Guarantee"
                  href="https://www.campadventure.de/images/f_infos/versicherung/Camp Adventures Garantie gegen Heimweh_2025.pdf"
                  target="_blank"
                >
                  further information
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cooperations & Memberships Section */}
      <div className="uk-section-default uk-section-overlap uk-position-relative" uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-scale-up; delay: false;">
        <div
          className="uk-background-norepeat uk-background-contain uk-background-bottom-center uk-section"
          style={{
            backgroundImage: `url(${getTemplateImageUrl("yootheme/cache/d1/background_campground-d13d89db.jpeg")})`,
          }}
        >
          <div
            className="uk-position-cover"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.87)" }}
          ></div>
          <div className="uk-container uk-container-large uk-position-relative">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-margin-large">
              <div className="uk-width-1-1@m">
                <div className="uk-h5 uk-margin-small uk-text-center" uk-scrollspy-class="uk-animation-slide-top-medium">
                  Camp Adventure
                </div>
                <div className="uk-h1 uk-margin-small uk-text-center" uk-scrollspy-class="uk-animation-slide-bottom-medium">
                  Cooperations & Memberships
                </div>
                <div className="uk-divider-icon uk-width-medium uk-margin-auto" uk-scrollspy-class=""></div>
              </div>
            </div>
            <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
              <div className="uk-width-1-1@m">
                <div className="uk-margin uk-text-center">
                  <div className="uk-grid uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-3@l uk-grid-collapse uk-grid-match" uk-grid="">
                    <div>
                      <div className="el-item uk-flex uk-flex-column" uk-scrollspy-class="">
                        <a
                          className="uk-flex-1 uk-card uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle"
                          href="https://www.reisenetz.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/98/reisenetz2-98f3b127.png"
                            )}
                            width={120}
                            height={120}
                            alt=""
                            loading="lazy"
                            className="el-image"
                          />
                        </a>
                      </div>
                    </div>
                    <div>
                      <div className="el-item uk-flex uk-flex-column" uk-scrollspy-class="">
                        <a
                          className="uk-flex-1 uk-card uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle"
                          href="http://www.campingfellowship.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/7a/icf2-7a52c185.png"
                            )}
                            width={178}
                            height={120}
                            alt=""
                            loading="lazy"
                            className="el-image"
                          />
                        </a>
                      </div>
                    </div>
                    <div>
                      <div className="el-item uk-flex uk-flex-column" uk-scrollspy-class="">
                        <a
                          className="uk-flex-1 uk-card uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle"
                          href="https://www.language-testing-service.de/cms/index.php?id=8"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/5f/toefl2-5f52dff4.png"
                            )}
                            width={120}
                            height={120}
                            alt=""
                            loading="lazy"
                            className="el-image"
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

