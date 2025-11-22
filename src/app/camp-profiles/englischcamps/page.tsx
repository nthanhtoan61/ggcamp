"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { getTemplateImageUrl } from "@/lib/assets";

export default function EnglischcampsPage() {
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
            style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          ></div>
          <div className="uk-container uk-container-large uk-position-relative">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
              <div className="uk-width-1-1@m">
                <h1
                  className="uk-heading-large uk-margin-remove-bottom uk-text-left"
                  uk-scrollspy-class=""
                >
                  <p>English Language Camps</p>
                </h1>
                <div
                  className="uk-panel uk-text-lead uk-margin uk-text-left"
                  uk-scrollspy-class=""
                >
                  <p>
                    Improve your English skills while having fun at camp!
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
                <p>Germany, England & Spain</p>
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
                  Ages - 7 to 17 years<br />
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
                  Germany: Tents &amp; Lodges<br />
                  UK: Boarding House<br />
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
                  Bilingual<br />
                  DE &amp; EN
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Language Section */}
      <div id="Sprache" className="uk-section-default uk-section uk-padding-remove-top">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1">
              <h2 className="uk-h2 uk-margin-remove-bottom uk-text-center">
                <p>Discover our English Camps</p>
              </h2>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
              <div className="uk-panel uk-margin">
                <p>
                  In our English Classic Courses, you&apos;ll improve your
                  language skills in a fun and practical way. With engaging,
                  age-appropriate topics and holiday-friendly methods, we bring
                  the language to life beyond the classroom. You&apos;ll learn
                  vocabulary through daily use instead of boring memorization.
                  Constant contact with our native English-speaking counselors
                  ensures correct pronunciation. We&apos;ll inspire your love
                  for English and help you start the new school year confident
                  and motivated. Guaranteed! Book your English camp now in
                  Germany, England, or Spain!
                </p>
              </div>
              <div
                className="uk-slider-container uk-margin uk-text-center"
                uk-slider="sets: 1; center: 1; autoplay: 1;"
              >
                <div className="uk-position-relative">
                  <div className="uk-slider-items uk-grid uk-grid-small">
                    <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                      <div className="el-item uk-inline-clip">
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/e7/01-Language-Camps-by-Camp-Adventure-e73ac048.jpg"
                          )}
                          width={1260}
                          height={840}
                          alt="Teens writing during English class at international language holiday camp in Germany"
                          loading="lazy"
                          className="el-image uk-transition-opaque"
                        />
                      </div>
                    </div>
                    <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                      <div className="el-item uk-inline-clip">
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/52/02-Language-Camps-by-Camp-Adventure-5201a531.jpg"
                          )}
                          width={1260}
                          height={840}
                          alt="Concentrated teenagers learning English during summer language holidays in Germany"
                          loading="lazy"
                          className="el-image uk-transition-opaque"
                        />
                      </div>
                    </div>
                    <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                      <div className="el-item uk-inline-clip">
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/88/03-Language-Camps-by-Camp-Adventure-88387bd9.jpg"
                          )}
                          width={1260}
                          height={840}
                          alt="Group of kids participating in interactive English class at Camp Adventure language camp in Germany"
                          loading="lazy"
                          className="el-image uk-transition-opaque"
                        />
                      </div>
                    </div>
                    <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                      <div className="el-item uk-inline-clip">
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/e3/04-Language-Camps-by-Camp-Adventure-e3066982.jpg"
                          )}
                          width={1260}
                          height={840}
                          alt="English teacher writing vocabulary on the whiteboard during class at youth language camp in Germany"
                          loading="lazy"
                          className="el-image uk-transition-opaque"
                        />
                      </div>
                    </div>
                    <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                      <div className="el-item uk-inline-clip">
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/39/05-Language-Camps-by-Camp-Adventure-393fb76a.jpg"
                          )}
                          width={1260}
                          height={840}
                          alt="Smiling teens holding a British flag during an English language camp in nature"
                          loading="lazy"
                          className="el-image uk-transition-opaque"
                        />
                      </div>
                    </div>
                    <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                      <div className="el-item uk-inline-clip">
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/8c/06-Language-Camps-by-Camp-Adventure-8c04d213.jpg"
                          )}
                          width={1260}
                          height={840}
                          alt="Teenagers participating in interactive outdoor English class at youth language camp in Germany"
                          loading="lazy"
                          className="el-image uk-transition-opaque"
                        />
                      </div>
                    </div>
                    <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                      <div className="el-item uk-inline-clip">
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/56/07-Language-Camps-by-Camp-Adventure-563d0cfb.jpg"
                          )}
                          width={1260}
                          height={840}
                          alt="Focused teenagers learning English with native-speaking instructor in classroom at language camp in Germany"
                          loading="lazy"
                          className="el-image uk-transition-opaque"
                        />
                      </div>
                    </div>
                    <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                      <div className="el-item uk-inline-clip">
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/5a/08-Language-Camps-by-Camp-Adventure-5a78f6a5.jpg"
                          )}
                          width={1260}
                          height={840}
                          alt="Kids and teens attending outdoor English lessons at summer language camp in Germany"
                          loading="lazy"
                          className="el-image uk-transition-opaque"
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
        </div>
      </div>

      {/* TOEFL Section */}
      <div className="uk-section-default uk-section-overlap uk-section uk-padding-remove-top">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-grid-margin" uk-grid="">
            <div className="uk-grid-item-match uk-flex-middle uk-width-1-3@m">
              <div className="uk-panel uk-width-1-1">
                <div className="uk-margin">
                  <Image
                    src={getTemplateImageUrl(
                      "yootheme/cache/c8/10-Language-Camps-by-Camp-Adventure-c8ea3242.jpg"
                    )}
                    width={1080}
                    height={720}
                    className="el-image"
                    alt="Interactive group English lessons with a supportive learning atmosphere at the language camp in England"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="uk-grid-item-match uk-width-2-3@m">
              <div className="uk-card-default uk-card uk-card-body">
                <h3 className="uk-h3 uk-margin-remove-bottom">
                  Englisch TOEFL®
                </h3>
                <div className="uk-text-small uk-margin-remove-top">
                  Bayerischer Wald, Sauerland, Amrum, Rossall School and Bath
                  University
                </div>
                <div className="uk-panel uk-margin">
                  <p>
                    The Test of English as a Foreign Language (TOEFL®) is the
                    most widely accepted language test worldwide for academic
                    and school-level English. At the end of the course, after
                    taking the exam, you&apos;ll receive a certificate that
                    confirms your language skills according to the Common
                    European Framework of Reference for Languages — without any
                    pressure, as you cannot fail. The test simply determines
                    your current language level. This certification is highly
                    valuable, for example, to prove your English proficiency
                    for international exchange programs.
                  </p>
                  <p>
                    The TOEFL® course is offered only with two-week language
                    courses and includes, in addition to the regular 40 English
                    lessons, 10 extra lessons focused on exam preparation.
                    These extra sessions concentrate on grammar, text analysis,
                    and listening comprehension, and include a practice test to
                    help you approach the exam with confidence and ease.
                  </p>
                </div>
                <div id="page#3" className="uk-margin">
                  <Link
                    className="el-content uk-button uk-button-default"
                    title="Language"
                    href="/camp-profiles/englisch-toefl"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deutschland Section */}
      <div
        id="Deutschland"
        className="uk-section-default uk-section uk-padding-remove-top"
      >
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1">
              <h2 className="uk-h2">
                <p>English Camps / Germany</p>
              </h2>
              <div id="Accordion">
                <div
                  uk-accordion="collapsible: true;"
                  id="js-6"
                  className="custom_acc_691a9ce8e197b"
                >
                  <div id="js-6_0" className="el-item jp_">
                    <a className="uk-accordion-title" href="#">
                      <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                        Lüneburger Heide/Walsrode
                      </h3>
                    </a>
                    <div className="uk-accordion-content uk-margin-remove-first-child">
                      <div
                        id="jp_accordation_section_691a9ce8e1c55"
                        className="jp_section_content"
                      ></div>
                    </div>
                  </div>
                  <div id="js-6_1" className="el-item jp_">
                    <a className="uk-accordion-title" href="#">
                      <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                        Bayerischer Wald/Regen
                      </h3>
                    </a>
                    <div className="uk-accordion-content uk-margin-remove-first-child">
                      <div
                        id="jp_accordation_section_691a9ce8e1dc0"
                        className="jp_section_content"
                      ></div>
                    </div>
                  </div>
                  <div id="js-6_2" className="el-item jp_">
                    <a className="uk-accordion-title" href="#">
                      <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                        Sauerland/Hachen
                      </h3>
                    </a>
                    <div className="uk-accordion-content uk-margin-remove-first-child">
                      <div
                        id="jp_accordation_section_691a9ce8e1f1e"
                        className="jp_section_content"
                      ></div>
                    </div>
                  </div>
                  <div id="js-6_3" className="el-item jp_">
                    <a className="uk-accordion-title" href="#">
                      <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                        Lauenburgische Seen/Mölln
                      </h3>
                    </a>
                    <div className="uk-accordion-content uk-margin-remove-first-child">
                      <div
                        id="jp_accordation_section_691a9ce8e2073"
                        className="jp_section_content"
                      ></div>
                    </div>
                  </div>
                  <div id="js-6_4" className="el-item jp_">
                    <a className="uk-accordion-title" href="#">
                      <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                        North Sea/Amrum
                      </h3>
                    </a>
                    <div className="uk-accordion-content uk-margin-remove-first-child">
                      <div
                        id="jp_accordation_section_691a9ce8e21e0"
                        className="jp_section_content"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <style jsx>{`
                .custom_acc_691a9ce8e197b .uk-accordion-title * {
                  color: #000000 !important;
                }
                .custom_acc_691a9ce8e197b .uk-accordion-title {
                  padding: 10px !important;
                  color: #000000 !important;
                  background: #ffffff !important;
                  border: 1px solid #ffaa00 !important;
                  position: relative;
                  padding-left: 60px !important;
                }
                .custom_acc_691a9ce8e197b .uk-accordion-title::before {
                  display: block;
                  position: absolute;
                  top: 0;
                  bottom: 0;
                  background-color: #ffaa00 !important;
                  width: 50px;
                  height: 100%;
                  left: 0;
                  content: "+";
                  color: white;
                  font-size: 24px;
                  font-weight: bold;
                  text-align: center;
                  line-height: 1;
                }
                .custom_acc_691a9ce8e197b
                  .uk-open
                  > .uk-accordion-title::before {
                  content: "−";
                }
                .custom_acc_691a9ce8e197b .uk-accordion-content {
                  border: 1px solid #ffaa00 !important;
                  background: #ffffff !important;
                  padding: 15px !important;
                  margin-top: 15px !important;
                }
                .custom_acc_691a9ce8e197b > :nth-child(n + 2) {
                  border: unset !important;
                  box-shadow: unset !important;
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>

      {/* England Section */}
      <div
        id="England"
        className="uk-section-default uk-section uk-padding-remove-top"
      >
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1">
              <h2 className="uk-h2">English Camps / England</h2>
              <div id="Accordion">
                <div
                  uk-accordion="collapsible: true;"
                  id="js-7"
                  className="custom_acc_691a9ce8e26e1"
                >
                  <div id="js-7_0" className="el-item jp_">
                    <a className="uk-accordion-title" href="#">
                      <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                        Bath University
                      </h3>
                    </a>
                    <div className="uk-accordion-content uk-margin-remove-first-child">
                      <div
                        id="jp_accordation_section_691a9ce8e288f"
                        className="jp_section_content"
                      ></div>
                    </div>
                  </div>
                  <div id="js-7_1" className="el-item jp_">
                    <a className="uk-accordion-title" href="#">
                      <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                        Rossall School
                      </h3>
                    </a>
                    <div className="uk-accordion-content uk-margin-remove-first-child">
                      <div
                        id="jp_accordation_section_691a9ce8e29dd"
                        className="jp_section_content"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <style jsx>{`
                .custom_acc_691a9ce8e26e1 .uk-accordion-title * {
                  color: #000000 !important;
                }
                .custom_acc_691a9ce8e26e1 .uk-accordion-title {
                  padding: 10px !important;
                  color: #000000 !important;
                  background: #ffffff !important;
                  border: 1px solid #ffaa00 !important;
                  position: relative;
                  padding-left: 60px !important;
                }
                .custom_acc_691a9ce8e26e1 .uk-accordion-title::before {
                  display: block;
                  position: absolute;
                  top: 0;
                  bottom: 0;
                  background-color: #ffaa00 !important;
                  width: 50px;
                  height: 100%;
                  left: 0;
                  content: "+";
                  color: white;
                  font-size: 24px;
                  font-weight: bold;
                  text-align: center;
                  line-height: 1;
                }
                .custom_acc_691a9ce8e26e1
                  .uk-open
                  > .uk-accordion-title::before {
                  content: "−";
                }
                .custom_acc_691a9ce8e26e1 .uk-accordion-content {
                  border: 1px solid #ffaa00 !important;
                  background: #ffffff !important;
                  padding: 15px !important;
                  margin-top: 15px !important;
                }
                .custom_acc_691a9ce8e26e1 > :nth-child(n + 2) {
                  border: unset !important;
                  box-shadow: unset !important;
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className="uk-section-muted uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h2 uk-text-center">Booking</h2>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
              <div className="uk-panel uk-margin">
                <div style={{ textAlign: "center" }}>
                  <iframe
                    src="https://www.bookacamp.de/en/booking/form/view-by-camp/ds7fdn347dsfndsf74n37en37en37dnd/englishclassicwal"
                    title="Bookacamp, die Buchungsplattform von Camp Adventure"
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

