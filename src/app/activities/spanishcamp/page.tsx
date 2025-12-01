"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { getTemplateImageUrl } from "@/lib/assets";

export default function SpanishcampPage() {
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
              "yootheme/cache/bd/Personen%20auf%20Segelboot-bdadb0cc.png"
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
                  <p>Spanish Language Camps</p>
                </h1>
                <div
                  className="uk-panel uk-text-lead uk-margin uk-text-left"
                  uk-scrollspy-class=""
                >
                  <p>Learn Spanish in beautiful Spain with native speakers!</p>
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
                <p>Spain</p>
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
                <p>10 - 16 years</p>
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
                <p>BISC Sailing Center</p>
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
                <p>Native Spanish Speakers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="uk-section-muted uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h2 uk-text-center">Spanish Language Camps</h2>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
              <div className="uk-panel uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin">
                <p>
                  Our Spanish language camps in Barcelona offer fun and
                  interactive Spanish lessons taught by native speakers. Learn
                  Spanish naturally through games, activities, and daily
                  conversations with international campers and staff.
                </p>
                <p>
                  Immerse yourself in Spanish culture while learning the
                  language in an authentic environment. Perfect for beginners
                  and those looking to improve their Spanish skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Locations Section */}
      <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div className="uk-card uk-card-default uk-card-body">
                <h3 className="uk-h3">Barcelona Beach Camp</h3>
                <p>
                  Spanish language camp at BISC Sailing Center in Barcelona with
                  native Spanish speakers.
                </p>
                <Link
                  href="/destinations/en-spain-barcelona"
                  className="uk-button uk-button-primary"
                >
                  View Location
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      {/* <div className="uk-section-muted uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h2 uk-text-center">Booking</h2>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
              <div className="uk-panel uk-margin">
                <div style={{ textAlign: "center" }}>
                  <iframe
                    src="https://www.bookacamp.de/en/booking/form/view-by-camp/ds7fdn347dsfndsf74n37en37en37dnd/bcnspanish"
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
      </div> */}

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
                    Fantastic Spanish Camp in Barcelona! Our children improved
                    their Spanish significantly while having an amazing time.
                    Learning from native speakers in a beautiful beach setting
                    made it fun and effective. They gained confidence, made
                    international friends, and fell in love with Spanish
                    culture!
                  </p>
                  <footer className="el-footer">
                    <cite className="el-author">
                      <a
                        href="https://maps.app.goo.gl/FdniYSE33xQapbBs5"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Carlos R. auf Google
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
