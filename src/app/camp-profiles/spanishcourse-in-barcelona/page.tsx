"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { getTemplateImageUrl } from "@/lib/assets";

export default function SpanishcourseInBarcelonaPage() {
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
            backgroundImage: `url(${getTemplateImageUrl("yootheme/cache/bd/Personen%20auf%20Segelboot-bdadb0cc.png")})`,
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
                  <p>Spanish Course in Barcelona</p>
                </h1>
                <div
                  className="uk-panel uk-text-lead uk-margin uk-text-left"
                  uk-scrollspy-class=""
                >
                  <p>
                    Learn Spanish in the beautiful city of Barcelona!
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
                <p>Barcelona, Spain</p>
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
      <div className="uk-section-default uk-section uk-section-small uk-flex uk-flex-middle">
        <div className="uk-width-1-1">
          <div className="uk-container">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
              <div className="uk-width-1-1">
                <h2 className="uk-h2 uk-text-center">
                  <p>Learn Spanish with Native Speakers at Camp Adventure</p>
                </h2>
                <div className="uk-panel uk-text-large uk-dropcap uk-margin uk-text-center">
                  <p>
                    Experience Spanish with Sun, Fun &amp; Adventure – Just the
                    Way You Like It! At our Spanish language camps in Barcelona
                    and Walsrode, you&apos;ll learn Spanish the natural way –
                    through movement, creativity, and real-life experiences
                    instead of boring classroom drills. In the mornings,
                    you&apos;ll practice with native-speaking Spanish teachers,
                    and in the afternoons, you&apos;ll live the language through
                    sports, creative workshops, and outdoor adventures – or even
                    at the beach!
                  </p>
                  <p>
                    Whether you choose our Spanish camp in Barcelona with
                    sunshine, sea, and Mediterranean vibes, or the Spanish camp
                    in Walsrode surrounded by the beautiful nature of the
                    Lüneburger Heide in Northern Germany, one thing&apos;s for
                    sure: Camp Adventure means international friendships, tons of
                    fun, and the perfect mix of language learning and holiday
                    adventure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Section */}
      <div className="uk-section-default uk-section uk-padding-remove-top">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1">
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
                            "yootheme/cache/66/20-Walsrode-Bubble_Soccer-667cab53.jpg"
                          )}
                          width={1260}
                          height={840}
                          alt="Kids playing bubble soccer at Camp Adventure summer camp Germany"
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
                            "yootheme/cache/e7/01-Language-Camps-by-Camp-Adventure-e73ac048.jpg"
                          )}
                          width={1260}
                          height={840}
                          alt="Children learning English in class at Camp Adventure language camp"
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
                            "yootheme/cache/71/007-Camp-Barcelona-Beach-Camp-7136b659.jpg"
                          )}
                          width={1260}
                          height={841}
                          alt="een group visiting Sagrada Familia during Spanish camp in Barcelona"
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
                            "yootheme/cache/52/02-Language-Camps-by-Camp-Adventure-5201a531.jpg"
                          )}
                          width={1260}
                          height={840}
                          alt="Outdoor Spanish class for teens at Camp Adventure summer camp"
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
                            "yootheme/cache/88/03-Language-Camps-by-Camp-Adventure-88387bd9.jpg"
                          )}
                          width={1260}
                          height={840}
                          alt="Teenagers learning Spanish in classroom at Camp Adventure camp Germany"
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
                            "yootheme/cache/80/09-Language-Camps-by-Camp-Adventure-8041284d.jpg"
                          )}
                          width={1260}
                          height={840}
                          alt="Teenagers learning English with native teacher at Camp Adventure"
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
                            "yootheme/cache/24/13-Sommercamp-Walsrode-Lakes-24681be2.jpg"
                          )}
                          width={1260}
                          height={840}
                          alt="Kids canoeing on lake at summer camp in Walsrode Germany"
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
                            "yootheme/cache/bb/Deutschcamps-in-Deutschland-bbb953f2.jpg"
                          )}
                          width={1260}
                          height={840}
                          alt="Girl writing during Spanish language class at Camp Adventure Germany"
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
                            "yootheme/cache/49/11-Language-Camps-by-Camp-Adventure-493193dc.jpg"
                          )}
                          width={1260}
                          height={840}
                          alt="Spanish lesson with native-speaking teacher at Camp Adventure camp"
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
                            "yootheme/cache/e5/Spanischcamp-in-Spanien-e575a765.jpg"
                          )}
                          width={1260}
                          height={840}
                          alt="Teen group visiting Sagrada Familia during Spanish summer camp in Barcelona"
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
                            "yootheme/cache/6e/09-Walsrode-Teambuilding-Lake-6e3ff4af.jpg"
                          )}
                          width={1260}
                          height={837}
                          alt="ids doing fun water team challenge at Camp Adventure summer camp Germany"
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
        </div>
      </div>

      {/* Section 2 */}
      <div className="uk-section-default uk-section uk-padding-remove-bottom">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1">
              <h2 className="uk-h2 uk-text-center">
                <p>
                  Bilingual Specialty Camps &amp; International Team – Learning
                  by Living!
                </p>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Locations Grid Section */}
      <div className="uk-section-muted uk-section uk-section-xsmall">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1">
              <div id="Grid" className="uk-margin-xlarge">
                <div
                  className="uk-grid uk-child-width-1-1 uk-child-width-1-3@m uk-flex-center uk-grid-column-large uk-grid-row-small uk-grid-match"
                  uk-grid=""
                >
                  <div>
                    <div className="el-item uk-grid-item-match">
                      <Link
                        className="uk-card uk-card-default uk-card-small uk-card-hover uk-link-toggle"
                        href="/camp-profiles/spanishcourse-in-barcelona"
                      >
                        <div className="uk-card-media-top">
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/d1/Spanischcamp-in-Spanien-d118b0e9.jpg"
                            )}
                            width={1920}
                            height={1280}
                            alt="Teens exploring Barcelona on a Spanish language camp with Camp Adventure"
                            loading="lazy"
                            className="el-image"
                          />
                        </div>
                        <div className="uk-card-body uk-margin-remove-first-child">
                          <h3 className="el-title uk-h3 uk-heading-bullet uk-margin-top uk-margin-remove-bottom">
                            Spanish in Barcelona
                          </h3>
                          <div className="el-meta uk-margin-top">
                            Starting at 915 USD
                          </div>
                          <div className="el-content uk-panel uk-margin-top">
                            <ul className="uk-list uk-list-divider uk-margin-medium-bottom">
                              <li>
                                <span
                                  className="uk-margin-small-right uk-icon"
                                  uk-icon="clock"
                                ></span>
                                Summer
                              </li>
                              <li>
                                <span
                                  className="uk-margin-small-right uk-icon"
                                  uk-icon="user"
                                ></span>
                                10 - 16 years
                              </li>
                              <li>
                                <span
                                  className="uk-margin-small-right uk-icon"
                                  uk-icon="location"
                                ></span>
                                Spain
                              </li>
                            </ul>
                          </div>
                          <div className="uk-margin-top">
                            <div className="el-link uk-button uk-button-default">
                              lern more
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="el-item uk-grid-item-match">
                      <Link
                        className="uk-card uk-card-default uk-card-small uk-card-hover uk-link-toggle"
                        href="/camp-profiles/spanishcamp-in-northern-germany"
                      >
                        <div className="uk-card-media-top">
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/6c/02-Language-Camps-by-Camp-Adventure-6c256491.jpg"
                            )}
                            width={1080}
                            height={720}
                            alt="Kids practicing Spanish outdoors at Camp Adventure bilingual summer camp"
                            loading="lazy"
                            className="el-image"
                          />
                        </div>
                        <div className="uk-card-body uk-margin-remove-first-child">
                          <h3 className="el-title uk-h3 uk-heading-bullet uk-margin-top uk-margin-remove-bottom">
                            Spanish in northern germany
                          </h3>
                          <div className="el-meta uk-margin-top">
                            starting at 580 USD
                          </div>
                          <div className="el-content uk-panel uk-margin-top">
                            <ul className="uk-list uk-list-divider uk-margin-medium-bottom">
                              <li>
                                <span
                                  className="uk-margin-small-right uk-icon"
                                  uk-icon="clock"
                                ></span>
                                Summer
                              </li>
                              <li>
                                <span
                                  className="uk-margin-small-right uk-icon"
                                  uk-icon="user"
                                ></span>
                                7 - 17 years
                              </li>
                              <li>
                                <span
                                  className="uk-margin-small-right uk-icon"
                                  uk-icon="location"
                                ></span>
                                Germany/Walsrode
                              </li>
                            </ul>
                          </div>
                          <div className="uk-margin-top">
                            <div className="el-link uk-button uk-button-default">
                              lern more
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Content Section */}
      <div className="uk-section-default uk-section uk-padding-remove-bottom">
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-grid-item-match uk-width-1-1">
              <div className="uk-card-default uk-card uk-card-body">
                <h3 className="uk-heading-bullet">
                  {" "}
                  Your Holidays. Your Spanish. Your Camp Adventure.{" "}
                </h3>
                <div className="uk-panel uk-margin">
                  <p>
                    ¡Hola, future explorador! You want to learn Spanish, finally
                    speak with confidence, make new friends, and enjoy holidays
                    full of sunshine, fun, and adventure? Then our Spanish Camp
                    by Camp Adventure is exactly what you&apos;re looking for.
                    And the best part: you can choose between two amazing
                    locations – Barcelona and Walsrode (Lüneburger Heide,
                    Northern Germany) – to create your own perfect Spanish
                    summer camp experience.
                  </p>
                  <h4>
                    Learn Spanish in Barcelona – The Classic Language Travel
                    Experience
                  </h4>
                  <p>
                    Our Spanish Classic{" "}
                    <Link href="/destinations/en-spain-barcelona" target="_self">
                      Camp in Barcelona
                    </Link>{" "}
                    takes you straight into the heart of Spanish life and
                    culture. This Spanish language camp in Spain combines
                    interactive language training with sunshine, the beach, and
                    pure Mediterranean energy.<br />
                    In the mornings, you&apos;ll learn Spanish with
                    native-speaking teachers – dynamic, engaging, and practical
                    lessons designed to make speaking easy and natural. No
                    boring grammar drills or endless memorizing — instead,
                    you&apos;ll practice speaking, listening, and understanding
                    in real-life contexts.
                  </p>
                  <p>
                    In the afternoons, the classroom turns into a playground for
                    adventure: beach time, excursions, sports, or creative
                    workshops. Learning Spanish in Barcelona means living the
                    language — you&apos;ll apply what you&apos;ve learned right
                    away, meet international friends, and explore local culture.
                  </p>
                  <p>
                    Why Barcelona? Because here you experience Spanish where
                    it&apos;s spoken. You&apos;ll wake up to the sound of the
                    sea, stroll through vibrant city streets in the afternoon,
                    talk to locals and fellow campers, and naturally expand your
                    vocabulary and fluency. In our Spanish language camp in
                    Barcelona, Spain, learning becomes an experience — and
                    Spanish becomes part of your everyday life.
                  </p>
                  <p>
                    The language program at the Barcelona Camp is perfect for
                    both beginners and advanced learners. After a short placement
                    test, you&apos;ll join a group that matches your level,
                    focusing on conversation, listening, reading, and grammar.
                    All of this happens in a bilingual environment – Spanish and
                    English – with campers from around the world. You&apos;ll
                    not only dive into the language, but also into an
                    international community full of energy, laughter, and shared
                    experiences.
                  </p>
                  <p>
                    Afternoons bring a variety of exciting activities – choose
                    watersports, football, or creative workshops, and use your
                    Spanish naturally throughout the day.
                  </p>
                  <h4>
                    New: Spanish Camp in Walsrode (Lüneburger Heide, Northern
                    Germany)
                  </h4>
                  <p>
                    New this year – our Spanish Language{" "}
                    <Link
                      href="/destinations/germany-lueneburger-heide"
                      target="_self"
                    >
                      Camp in Walsrode
                    </Link>
                    ! Yes, you heard right: now you can enjoy an amazing Spanish
                    learning experience right here in Germany. Located in the
                    beautiful Lüneburger Heide between Hamburg, Bremen, and
                    Hanover, our Camp Adventure Academy in Walsrode has long
                    been famous for its adventure and sports camps. Now
                    it&apos;s time to add something new – Spanish meets
                    adventure!
                  </p>
                </div>
              </div>
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
                    src="https://www.bookacamp.de/en/booking/form/view-by-camp/ds7fdn347dsfndsf74n37en37en37dnd/bcnspanish"
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

