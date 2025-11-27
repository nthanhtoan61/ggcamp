"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { getTemplateImageUrl } from "@/lib/assets";

export default function LanguageCampsPage() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="uk-section-default uk-section-overlap uk-preserve-color uk-light uk-position-relative"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div
          className="uk-background-norepeat uk-background-cover uk-background-top-center uk-section uk-section-xlarge"
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
                  Language camps for children and youth aged 7-17
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="uk-section-default uk-section-overlap uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-grid-margin" uk-grid="">
            <div className="uk-width-1-3@m">
              <h1 uk-scrollspy-class="">
                <p>
                  The summer camp with the best language courses in Germany and
                  England
                </p>
              </h1>
              <div
                className="uk-divider-small uk-text-left@m"
                uk-scrollspy-class=""
              ></div>
            </div>
            <div className="uk-width-2-3@m">
              <blockquote uk-scrollspy-class="">
                <p>
                  Super provider for children and youth travel! My daughter
                  spent a week at the English camp in the Bavarian Forest and
                  came back super motivated. Finally language combined with fun
                  and not just gray theory. Thank you very much!
                </p>
                <footer className="el-footer">
                  <cite className="el-author">Bernd C., Germany</cite>
                </footer>
              </blockquote>
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
                  7 - 17 years
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
                <p>Various Accommodations</p>
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
                <p>Native Speakers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider and Details Section */}
      <div className="uk-section-muted uk-section-overlap uk-section">
        <div className="uk-container uk-container-small">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h1 className="uk-text-center">
                Language camp in English or German
              </h1>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>

              {/* Image Slider */}
              <div className="uk-margin" uk-slideshow="minHeight: 300;">
                <div className="uk-position-relative">
                  <div className="uk-slideshow-items">
                    <div className="el-item">
                      <picture>
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/2a/sprache_kurse_9-2a09f8b3.jpg"
                          )}
                          alt="Language Camp"
                          width={900}
                          height={600}
                          className="el-image"
                          uk-cover=""
                        />
                      </picture>
                    </div>
                    <div className="el-item">
                      <picture>
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/47/sprache_kurse_5-4763339a.jpg"
                          )}
                          alt="Language Camp"
                          width={900}
                          height={600}
                          className="el-image"
                          uk-cover=""
                        />
                      </picture>
                    </div>
                    <div className="el-item">
                      <picture>
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/0e/sprache_kurse_8-0e8ba985.jpg"
                          )}
                          alt="Language Camp"
                          width={900}
                          height={600}
                          className="el-image"
                          uk-cover=""
                        />
                      </picture>
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
                  <div
                    className="uk-position-bottom-center uk-position-medium uk-visible@s"
                    uk-inverse=""
                  >
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
              </div>

              {/* Details List */}
              <ul className="uk-list uk-list-divider uk-list-large uk-text-left@s uk-text-center">
                <li className="el-item">
                  <div
                    className="uk-child-width-expand@m uk-grid-small"
                    uk-grid=""
                  >
                    <div className="uk-width-medium@m uk-text-break">
                      <h3 className="el-title uk-margin-remove uk-h6">
                        Locations
                      </h3>
                    </div>
                    <div>
                      <div className="el-content uk-panel">
                        <p>
                          Lüneburger Heide, Bayerischer Wald, Amrum,
                          Lauenburgische Seen, Rossall School und Bath
                        </p>
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
                      <h3 className="el-title uk-margin-remove uk-h6">Age</h3>
                    </div>
                    <div>
                      <div className="el-content uk-panel">
                        <p>7 - 17 years</p>
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
                      <h3 className="el-title uk-margin-remove uk-h6">
                        Sessions
                      </h3>
                    </div>
                    <div>
                      <div className="el-content uk-panel">
                        <p>12 or 20 lessons à 45 minutes per week</p>
                        <p>1-4 week stay in our camps (no host family)</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-small">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-margin-large">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h2 uk-text-center" uk-scrollspy-class="">
                Details of Camp Adventure&apos;s Language Programs
              </h2>
              <div
                className="uk-divider-icon uk-width-medium uk-margin-auto"
                uk-scrollspy-class=""
              ></div>
              <div className="uk-panel uk-margin" uk-scrollspy-class="">
                <p>
                  School during the vacations and every day? Don&apos;t worry -
                  we have designed the language courses offered at the camp
                  especially for the vacations. Depending on the location, we
                  offer English or German courses in different variations. With
                  native speakers, the children learn to actively use the
                  English or German language through creative tasks and lots of
                  fun, overcoming natural inhibitions. At the beginning of the
                  camp, after a level check, our teachers will assign them to
                  the most suitable course. The lessons comprise 12 or 20 units
                  of 45 minutes each per week, in small age-appropriate classes
                  with a maximum of 12 participants. This also leaves plenty of
                  time for our extensive sports and leisure program.
                  <a id="engclassic"></a>
                </p>
              </div>
            </div>
          </div>

          {/* English Classic */}
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
                          <picture>
                            <Image
                              src={getTemplateImageUrl(
                                "yootheme/cache/bc/reg_profil_englischclassic-bc2b3bde.jpg"
                              )}
                              alt="English Classic"
                              width={240}
                              height={300}
                              className="el-image uk-border-rounded"
                            />
                          </picture>
                        </div>
                        <div className="uk-width-expand uk-margin-remove-first-child">
                          <div className="el-meta uk-h4 uk-margin-top uk-margin-remove-bottom">
                            Lüneburger Heide, Bayerischer Wald, Amrum,
                            Lauenburgische Seen, Rossall School und Bath,
                            Barcelona
                          </div>
                          <div className="el-title uk-h2 uk-margin-small-top uk-margin-remove-bottom">
                            English Classic
                          </div>
                          <div className="el-content uk-panel uk-margin-top">
                            <p>
                              In our Classic courses, you can improve your
                              language skills in a fun and practical way. With
                              interesting, age-appropriate topics and
                              holiday-appropriate methods, we bring you closer
                              to the language, even outside the classroom. You
                              will internalize vocabulary through daily use and
                              not through mindless memorization. Constant
                              contact with your English-speaking team members
                              ensures correct pronunciation. We will get you
                              excited about the English language and ensure that
                              you start the new school year stronger and more
                              motivated after the vacations. We promise!
                              <a id="engtoefl"></a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* English TOEFL */}
                  <div>
                    <div className="el-item uk-panel" uk-scrollspy-class="">
                      <div className="uk-grid-large" uk-grid="">
                        <div className="uk-width-1-3@m">
                          <picture>
                            <Image
                              src={getTemplateImageUrl(
                                "yootheme/cache/e1/reg_profil_toefl-e1170927.jpg"
                              )}
                              alt="English TOEFL"
                              width={240}
                              height={300}
                              className="el-image uk-border-rounded"
                            />
                          </picture>
                        </div>
                        <div className="uk-width-expand uk-margin-remove-first-child">
                          <div className="el-meta uk-h4 uk-margin-top uk-margin-remove-bottom">
                            Bayerischer Wald, Amrum, Rossall School und Bath
                          </div>
                          <div className="el-title uk-h2 uk-margin-small-top uk-margin-remove-bottom">
                            English TOEFL®
                          </div>
                          <div className="el-content uk-panel uk-margin-top">
                            <p>
                              The Test Of English as a Foreign Language is the
                              world&apos;s most widely accepted language test
                              for school and academic English. At the end of the
                              course, you will receive a certificate confirming
                              your language skills according to the Common
                              European Framework of Reference for Languages -
                              without any pressure, as you cannot fail. Your
                              current language level is simply determined. Such
                              a certificate is always useful. With your TOEFL®
                              certificate, you can prove that you have the
                              required English language skills for international
                              exchange programs, for example.
                            </p>
                            <p>
                              In addition to the regular 40 English lessons, the
                              TOEFL® course includes a further 10 lessons
                              designed to prepare you for the exam with special
                              exercises. The focus is on grammar, text
                              processing and listening comprehension and there
                              is a &quot;test run&quot; so that you can go into
                              the exam relaxed.
                              <a id="deuclassic"></a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* German Classic */}
                  <div>
                    <div className="el-item uk-panel" uk-scrollspy-class="">
                      <div className="uk-grid-large" uk-grid="">
                        <div className="uk-width-1-3@m">
                          <picture>
                            <Image
                              src={getTemplateImageUrl(
                                "yootheme/cache/aa/reg_profil_deutschclassic-aaa0e151.jpg"
                              )}
                              alt="German Classic"
                              width={240}
                              height={300}
                              className="el-image uk-border-rounded"
                            />
                          </picture>
                        </div>
                        <div className="uk-width-expand uk-margin-remove-first-child">
                          <div className="el-meta uk-h4 uk-margin-top uk-margin-remove-bottom">
                            Lüneburger Heide und Bayerischer Wald
                          </div>
                          <div className="el-title uk-h2 uk-margin-small-top uk-margin-remove-bottom">
                            German Classic
                          </div>
                          <div className="el-content uk-panel uk-margin-top">
                            <p>
                              Don&apos;t worry if you&apos;re just starting to
                              learn the language. We offer courses at different
                              levels. Both complete beginners and advanced
                              students are placed in a suitable group according
                              to their existing knowledge. As with our English
                              Classic courses, the focus is on conversation.
                              Interactive lessons ensure that you expand your
                              vocabulary and consolidate your grammar. You can
                              then put your newly acquired vocabulary to the
                              test during leisure activities with your new
                              friends.
                              <a id="deugoethe"></a>
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

      {/* Locations Section */}
      <div className="uk-section-muted uk-section-overlap uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div className="uk-h2 uk-text-center" uk-scrollspy-class="">
                Language Camp Locations of Camp Adventure
              </div>
              <div className="uk-divider-icon" uk-scrollspy-class=""></div>
              <h2 className="uk-h5 uk-text-center" uk-scrollspy-class="">
                Summer Language Camps in 2025
              </h2>

              {/* Lüneburger Heide */}
              <div
                className="uk-card uk-card-default uk-flex uk-flex-column uk-margin-medium uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              >
                <div
                  className="uk-grid-collapse uk-flex-1 uk-flex-column uk-flex-row@m"
                  uk-grid=""
                >
                  <div className="uk-width-1-3@m uk-flex uk-flex-column uk-flex-1 uk-flex-initial@m uk-flex-top@m uk-flex-middle">
                    <div
                      className="uk-card-media-left uk-flex-1 uk-flex uk-flex-column"
                      uk-toggle="cls: uk-card-media-left uk-card-media-top; mode: media; media: @m"
                    >
                      <picture>
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/46/wal_bigpic-46c21709.jpg"
                          )}
                          alt="Lüneburger Heide"
                          width={920}
                          height={613}
                          className="el-image uk-flex-1 uk-object-cover"
                        />
                      </picture>
                    </div>
                  </div>
                  <div className="uk-width-expand uk-flex uk-flex-column uk-flex-center@m uk-flex-none uk-flex-1@m">
                    <div className="uk-card-body uk-margin-remove-first-child">
                      <div className="el-meta uk-h4 uk-margin-top uk-margin-remove-bottom">
                        Germany
                      </div>
                      <h3 className="el-title uk-card-title uk-margin-small-top uk-margin-remove-bottom">
                        Camp Adventure Academy - Lüneburger Heide
                      </h3>
                      <div className="uk-margin-top">
                        <Link
                          href="/destinations/germany-lueneburger-heide"
                          className="el-link uk-button uk-button-secondary uk-button-small"
                        >
                          Learn more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="uk-margin uk-text-center" uk-scrollspy-class="">
                <Link
                  href="/destinations/germany-lueneburger-heide#Buchung"
                  className="el-content uk-button uk-button-primary"
                  uk-scroll=""
                >
                  Booking - Lüneburger Heide
                </Link>
              </div>
              <div className="uk-margin uk-text-left@m uk-text-center">
                <div
                  className="uk-grid uk-child-width-1-1 uk-child-width-1-2@m uk-grid-small uk-grid-divider uk-grid-match"
                  uk-grid=""
                >
                  <div>
                    <div className="el-item uk-panel" uk-scrollspy-class="">
                      <div className="uk-grid-medium uk-flex-middle" uk-grid="">
                        <div className="uk-width-1-5@m uk-flex-last@m">
                          <Link
                            href="/destinations/germany-lueneburger-heide#Walsprofile"
                            uk-scroll=""
                          >
                            <Image
                              src={getTemplateImageUrl(
                                "yootheme/cache/11/wal_germanenglish-11dc0bbb.jpg"
                              )}
                              alt="English for Beginners"
                              width={60}
                              height={60}
                              className="el-image uk-border-circle"
                            />
                          </Link>
                        </div>
                        <div className="uk-width-expand uk-margin-remove-first-child">
                          <h4 className="el-title uk-h4 uk-link-reset uk-text-primary uk-margin-top uk-margin-remove-bottom">
                            <Link
                              href="/destinations/germany-lueneburger-heide#Walsprofile"
                              uk-scroll=""
                              className="uk-link-reset uk-text-primary"
                            >
                              English for Beginners
                            </Link>
                          </h4>
                          <div className="el-meta uk-muted uk-margin-small-top uk-margin-remove-bottom">
                            Learn a new language at camp
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="el-item uk-panel" uk-scrollspy-class="">
                      <div className="uk-grid-medium uk-flex-middle" uk-grid="">
                        <div className="uk-width-1-5@m uk-flex-last@m">
                          <Link
                            href="/destinations/germany-lueneburger-heide#Walsprofile"
                            uk-scroll=""
                          >
                            <Image
                              src={getTemplateImageUrl(
                                "yootheme/cache/76/sprache_kurse_2-76378c47.jpg"
                              )}
                              alt="Advanced English"
                              width={60}
                              height={60}
                              className="el-image uk-border-circle"
                            />
                          </Link>
                        </div>
                        <div className="uk-width-expand uk-margin-remove-first-child">
                          <h4 className="el-title uk-h4 uk-link-reset uk-text-primary uk-margin-top uk-margin-remove-bottom">
                            <Link
                              href="/destinations/germany-lueneburger-heide#Walsprofile"
                              uk-scroll=""
                              className="uk-link-reset uk-text-primary"
                            >
                              Advanced English
                            </Link>
                          </h4>
                          <div className="el-meta uk-muted uk-margin-small-top uk-margin-remove-bottom">
                            Improve your language skills at camp
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="el-item uk-panel" uk-scrollspy-class="">
                      <div className="uk-grid-medium uk-flex-middle" uk-grid="">
                        <div className="uk-width-1-5@m uk-flex-last@m">
                          <Link
                            href="/destinations/germany-lueneburger-heide#Walsprofile"
                            uk-scroll=""
                          >
                            <Image
                              src={getTemplateImageUrl(
                                "yootheme/cache/3b/sprache_kurse_1-3bdf8c20.jpg"
                              )}
                              alt="German for Beginners"
                              width={60}
                              height={60}
                              className="el-image uk-border-circle"
                            />
                          </Link>
                        </div>
                        <div className="uk-width-expand uk-margin-remove-first-child">
                          <h4 className="el-title uk-h4 uk-link-reset uk-text-primary uk-margin-top uk-margin-remove-bottom">
                            <Link
                              href="/destinations/germany-lueneburger-heide#Walsprofile"
                              uk-scroll=""
                              className="uk-link-reset uk-text-primary"
                            >
                              German for Beginners
                            </Link>
                          </h4>
                          <div className="el-meta uk-muted uk-margin-small-top uk-margin-remove-bottom">
                            Get a taste of the German language
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="el-item uk-panel" uk-scrollspy-class="">
                      <div className="uk-grid-medium uk-flex-middle" uk-grid="">
                        <div className="uk-width-1-5@m uk-flex-last@m">
                          <Link
                            href="/destinations/germany-lueneburger-heide#Walsprofile"
                            uk-scroll=""
                          >
                            <Image
                              src={getTemplateImageUrl(
                                "yootheme/cache/ed/sprache_kurse_4-ede78c89.jpg"
                              )}
                              alt="Advanced German"
                              width={60}
                              height={60}
                              className="el-image uk-border-circle"
                            />
                          </Link>
                        </div>
                        <div className="uk-width-expand uk-margin-remove-first-child">
                          <h4 className="el-title uk-h4 uk-link-reset uk-text-primary uk-margin-top uk-margin-remove-bottom">
                            <Link
                              href="/destinations/germany-lueneburger-heide#Walsprofile"
                              uk-scroll=""
                              className="uk-link-reset uk-text-primary"
                            >
                              Advanced German
                            </Link>
                          </h4>
                          <div className="el-meta uk-muted uk-margin-small-top uk-margin-remove-bottom">
                            Improve your language skills at camp
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bayerischer Wald */}
              <div
                className="uk-card uk-card-default uk-card-large uk-flex uk-flex-column uk-margin-medium uk-text-left@m uk-text-center"
                uk-scrollspy-class="uk-animation-slide-right-small"
              >
                <div
                  className="uk-grid-collapse uk-flex-1 uk-flex-column uk-flex-row@m"
                  uk-grid=""
                >
                  <div className="uk-width-1-3@m uk-flex uk-flex-column uk-flex-1 uk-flex-initial@m uk-flex-top@m uk-flex-middle">
                    <div
                      className="uk-card-media-left uk-flex-1 uk-flex uk-flex-column"
                      uk-toggle="cls: uk-card-media-left uk-card-media-top; mode: media; media: @m"
                    >
                      <picture>
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/bc/reg_bigpic-bc7d5430.jpg"
                          )}
                          alt="Bayerischer Wald"
                          width={920}
                          height={611}
                          className="el-image uk-flex-1 uk-object-cover"
                        />
                      </picture>
                    </div>
                  </div>
                  <div className="uk-width-expand uk-flex uk-flex-column uk-flex-center@m uk-flex-none uk-flex-1@m">
                    <div className="uk-card-body uk-margin-remove-first-child">
                      <div className="el-meta uk-h4 uk-margin-top uk-margin-remove-bottom">
                        Germany
                      </div>
                      <h3 className="el-title uk-card-title uk-margin-small-top uk-margin-remove-bottom">
                        Sport- & Language Camp Bayerischer Wald
                      </h3>
                      <div className="uk-margin-top">
                        <Link
                          href="/destinations/germany-adventure-camp-bayerischer-wald"
                          className="el-link uk-button uk-button-secondary uk-button-small"
                        >
                          Learn more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="uk-margin uk-text-center" uk-scrollspy-class="">
                <Link
                  href="/destinations/germany-adventure-camp-bayerischer-wald#Buchung"
                  className="el-content uk-button uk-button-primary"
                  uk-scroll=""
                >
                  Booking - Sport- & Language Camp Bayerischer Wald
                </Link>
              </div>
              <div className="uk-margin uk-text-left@m uk-text-center">
                <div
                  className="uk-grid uk-child-width-1-1 uk-child-width-1-2@m uk-grid-small uk-grid-divider uk-grid-match"
                  uk-grid=""
                >
                  <div>
                    <div className="el-item uk-panel" uk-scrollspy-class="">
                      <div className="uk-grid-medium uk-flex-middle" uk-grid="">
                        <div className="uk-width-1-5@m uk-flex-last@m">
                          <Link
                            href="/destinations/germany-adventure-camp-bayerischer-wald#Buchung"
                            uk-scroll=""
                          >
                            <Image
                              src={getTemplateImageUrl(
                                "yootheme/cache/50/reg_profil_englischclassic-50e45d03.jpg"
                              )}
                              alt="English Classic"
                              width={60}
                              height={60}
                              className="el-image uk-border-circle"
                            />
                          </Link>
                        </div>
                        <div className="uk-width-expand uk-margin-remove-first-child">
                          <h4 className="el-title uk-h4 uk-link-reset uk-text-primary uk-margin-top uk-margin-remove-bottom">
                            <Link
                              href="/destinations/germany-adventure-camp-bayerischer-wald#Buchung"
                              uk-scroll=""
                              className="uk-link-reset uk-text-primary"
                            >
                              English Classic
                            </Link>
                          </h4>
                          <div className="el-meta uk-muted uk-margin-small-top uk-margin-remove-bottom">
                            Improve your language skills in practice
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="el-item uk-panel" uk-scrollspy-class="">
                      <div className="uk-grid-medium uk-flex-middle" uk-grid="">
                        <div className="uk-width-1-5@m uk-flex-last@m">
                          <Link
                            href="/destinations/germany-adventure-camp-bayerischer-wald#Courses"
                            uk-scroll=""
                          >
                            <Image
                              src={getTemplateImageUrl(
                                "yootheme/cache/a7/reg_profil_toefl-a7488ef5.jpg"
                              )}
                              alt="English TOEFL"
                              width={60}
                              height={60}
                              className="el-image uk-border-circle"
                            />
                          </Link>
                        </div>
                        <div className="uk-width-expand uk-margin-remove-first-child">
                          <h4 className="el-title uk-h4 uk-link-reset uk-text-primary uk-margin-top uk-margin-remove-bottom">
                            <Link
                              href="/destinations/germany-adventure-camp-bayerischer-wald#Courses"
                              uk-scroll=""
                              className="uk-link-reset uk-text-primary"
                            >
                              English TOEFL®
                            </Link>
                          </h4>
                          <div className="el-meta uk-muted uk-margin-small-top uk-margin-remove-bottom">
                            Language training including certificate
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="el-item uk-panel" uk-scrollspy-class="">
                      <div className="uk-grid-medium uk-flex-middle" uk-grid="">
                        <div className="uk-width-1-5@m uk-flex-last@m">
                          <Link
                            href="/destinations/germany-adventure-camp-bayerischer-wald#Courses"
                            uk-scroll=""
                          >
                            <Image
                              src={getTemplateImageUrl(
                                "yootheme/cache/fd/reg_profil_deutschclassic-fd03850d.jpg"
                              )}
                              alt="German Classic"
                              width={60}
                              height={60}
                              className="el-image uk-border-circle"
                            />
                          </Link>
                        </div>
                        <div className="uk-width-expand uk-margin-remove-first-child">
                          <h4 className="el-title uk-h4 uk-link-reset uk-text-primary uk-margin-top uk-margin-remove-bottom">
                            <Link
                              href="/destinations/germany-adventure-camp-bayerischer-wald#Courses"
                              uk-scroll=""
                              className="uk-link-reset uk-text-primary"
                            >
                              German Classic
                            </Link>
                          </h4>
                          <div className="el-meta uk-muted uk-margin-small-top uk-margin-remove-bottom">
                            Holiday-friendly language course with fun
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bath University */}
              <div
                className="uk-card uk-card-default uk-card-large uk-flex uk-flex-column uk-margin-medium uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              >
                <div
                  className="uk-grid-collapse uk-flex-1 uk-flex-column uk-flex-row@m"
                  uk-grid=""
                >
                  <div className="uk-width-1-3@m uk-flex-last@m uk-flex uk-flex-column uk-flex-1 uk-flex-initial@m uk-flex-top@m uk-flex-middle">
                    <div
                      className="uk-card-media-right uk-flex-1 uk-flex uk-flex-column"
                      uk-toggle="cls: uk-card-media-right uk-card-media-top; mode: media; media: @m"
                    >
                      <picture>
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/7f/bat_bigpic-7f627372.jpg"
                          )}
                          alt="Bath University"
                          width={920}
                          height={613}
                          className="el-image uk-flex-1 uk-object-cover"
                        />
                      </picture>
                    </div>
                  </div>
                  <div className="uk-width-expand uk-flex uk-flex-column uk-flex-center@m uk-flex-none uk-flex-1@m">
                    <div className="uk-card-body uk-margin-remove-first-child">
                      <div className="el-meta uk-h4 uk-margin-top uk-margin-remove-bottom">
                        England
                      </div>
                      <h3 className="el-title uk-card-title uk-margin-small-top uk-margin-remove-bottom">
                        Bath University
                      </h3>
                      <div className="uk-margin-top">
                        <Link
                          href="/destinations/en-england-bath-university"
                          className="el-link uk-button uk-button-secondary uk-button-small"
                        >
                          Learn more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="uk-margin uk-text-center" uk-scrollspy-class="">
                <Link
                  href="/destinations/en-england-bath-university#Buchung"
                  className="el-content uk-button uk-button-primary"
                  uk-scroll=""
                >
                  Booking - Bath University
                </Link>
              </div>
              <div className="uk-margin uk-text-left@m uk-text-center">
                <div
                  className="uk-grid uk-child-width-1-1 uk-child-width-1-2@m uk-grid-small uk-grid-divider uk-grid-match"
                  uk-grid=""
                >
                  <div>
                    <div className="el-item uk-panel" uk-scrollspy-class="">
                      <div className="uk-grid-medium uk-flex-middle" uk-grid="">
                        <div className="uk-width-1-5@m uk-flex-last@m">
                          <Link
                            href="/destinations/en-england-bath-university#Courses"
                            uk-scroll=""
                          >
                            <Image
                              src={getTemplateImageUrl(
                                "yootheme/cache/64/bat_profil_englischclassic-64bd53f1.jpg"
                              )}
                              alt="English Classic"
                              width={60}
                              height={60}
                              className="el-image uk-border-circle"
                            />
                          </Link>
                        </div>
                        <div className="uk-width-expand uk-margin-remove-first-child">
                          <h4 className="el-title uk-h4 uk-link-reset uk-text-primary uk-margin-top uk-margin-remove-bottom">
                            <Link
                              href="/destinations/en-england-bath-university#Courses"
                              uk-scroll=""
                              className="uk-link-reset uk-text-primary"
                            >
                              English Classic
                            </Link>
                          </h4>
                          <div className="el-meta uk-muted uk-margin-small-top uk-margin-remove-bottom">
                            Learning in the motherland of the English language
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="el-item uk-panel" uk-scrollspy-class="">
                      <div className="uk-grid-medium uk-flex-middle" uk-grid="">
                        <div className="uk-width-1-5@m uk-flex-last@m">
                          <Link
                            href="/destinations/en-england-bath-university#Courses"
                            uk-scroll=""
                          >
                            <Image
                              src={getTemplateImageUrl(
                                "yootheme/cache/18/ros_profil_englischtoefl-1899bb78.jpg"
                              )}
                              alt="English TOEFL"
                              width={60}
                              height={60}
                              className="el-image uk-border-circle"
                            />
                          </Link>
                        </div>
                        <div className="uk-width-expand uk-margin-remove-first-child">
                          <h4 className="el-title uk-h4 uk-link-reset uk-text-primary uk-margin-top uk-margin-remove-bottom">
                            <Link
                              href="/destinations/en-england-bath-university#Courses"
                              uk-scroll=""
                              className="uk-link-reset uk-text-primary"
                            >
                              English TOEFL®
                            </Link>
                          </h4>
                          <div className="el-meta uk-muted uk-margin-small-top uk-margin-remove-bottom">
                            Language training including certificate
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

      {/* Booking Section */}
      <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h2 uk-text-center">Booking</h2>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
              <div className="uk-panel uk-margin">
                <div style={{ textAlign: "center" }}>
                  <iframe
                    src="https://bookacamp.de/en/booking/form/view-by-camp/ds7fdn347dsfndsf74n37en37en37dnd/wal"
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
                    Amazing Language Camp experience! Our children learned
                    languages naturally through fun activities, games, and
                    conversations with native speakers. The immersive
                    environment was perfect, and they came back more confident
                    and fluent. The best language learning experience we&apos;ve
                    found!
                  </p>
                  <footer className="el-footer">
                    <cite className="el-author">
                      <a
                        href="https://maps.app.goo.gl/FdniYSE33xQapbBs5"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Sophie M. auf Google
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
