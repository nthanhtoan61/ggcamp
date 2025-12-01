"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { getTemplateImageUrl } from "@/lib/assets";

export default function OutdoorEducationDiplomaPage() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="uk-section-primary uk-section-overlap uk-position-relative"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div
          className="uk-background-norepeat uk-background-cover uk-background-center-center uk-section uk-section-xlarge"
          style={{
            backgroundImage: `url(${getTemplateImageUrl(
              "yootheme/cache/28/international_outdoor_education_diploma_1-28796d56.jpeg"
            )})`,
          }}
        >
          <div
            className="uk-position-cover"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.02)" }}
          ></div>
          <div className="uk-container uk-container-large uk-position-relative">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
              <div className="uk-width-1-1@m">
                <h1
                  className="uk-heading-large uk-text-center"
                  uk-scrollspy-class=""
                >
                  International Outdoor Education Diploma (6 Months)
                </h1>
                <div className="uk-panel uk-margin" uk-scrollspy-class="">
                  <div
                    className="uk-grid tm-grid-expand uk-grid-margin"
                    uk-grid=""
                  >
                    <div className="uk-width-1-3@s uk-width-1-5@m"></div>
                    <div className="uk-width-1-3@s uk-width-1-5@m"></div>
                    <div className="uk-width-1-3@s uk-width-1-5@m"></div>
                    <div className="uk-width-1-3@s uk-width-1-5@m">
                      <div className="uk-margin" uk-scrollspy-class="">
                        <a
                          className="el-link"
                          href="https://bookacamp.de/en/teamer/registration/register/ds7fdn347dsfndsf74n37en37en37dnd"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/8a/Apply_Now_2-8a8f9772.png"
                            )}
                            width={675}
                            height={675}
                            className="el-image"
                            alt="Apply Now"
                            loading="lazy"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="uk-width-1-3@s uk-width-1-5@m">
                      <div className="uk-margin" uk-scrollspy-class="">
                        <a
                          className="el-link"
                          href="https://forms.gle/YqUZixZ8kWCbPN6F6"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/69/Apply_Now_1-6997b1c8.png"
                            )}
                            width={1080}
                            height={1080}
                            className="el-image"
                            alt="Apply Now"
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

      {/* Intro Section */}
      <div className="uk-section-default uk-section uk-padding-remove-bottom">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h1 uk-text-center@m uk-text-center">
                Obtaining a qualification in Outdoor Education through Camp
                Adventure Academy in cooperation with Camp Europe e.V.
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="uk-section-default uk-section-overlap uk-section uk-section-small">
        <div className="uk-container uk-container-large">
          <div
            className="uk-grid tm-grid-expand uk-grid-large uk-margin-xlarge"
            uk-grid=""
          >
            <div className="uk-grid-item-match uk-flex-middle uk-width-1-3@m">
              <div className="uk-panel uk-width-1-1">
                <div uk-scrollspy-class="">
                  <center>
                    <iframe
                      src="https://www.goabroad.com/reviews/generator/program/47934/177326/240/490/0/0?layout_type=0&theme=light&show_name=1?rvs="
                      frameBorder={0}
                      scrolling="no"
                      allowTransparency={true}
                      style={{
                        border: "none",
                        overflow: "auto",
                        width: "240px",
                        height: "490px",
                      }}
                    ></iframe>
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
                    &quot;Without a doubt the best 6 months of my life. I met
                    friends for life and grew so much as a person! It&apos;s the
                    perfect environment to grow into the outdoor educator you
                    want to be! I loved every minute!&quot; -Tom, UK
                    (participant in 2018)
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="uk-section-muted uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-margin-large uk-container uk-container-small">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1">
              <div className="uk-width-1-1@m">
                <ul
                  className="uk-list uk-list-divider uk-list-large uk-text-left@s uk-text-center"
                  uk-scrollspy-class="uk-animation-slide-right-small"
                >
                  <li className="el-item">
                    <div
                      className="uk-child-width-expand@m uk-grid-small"
                      uk-grid=""
                    >
                      <div className="uk-width-medium@m uk-text-break">
                        <div className="el-title uk-margin-remove uk-text-bold">
                          Dates
                        </div>
                      </div>
                      <div>
                        <div className="el-content uk-panel">
                          <p>March 9th to September 21st, 2025</p>
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
                        <div className="el-title uk-margin-remove uk-text-bold">
                          Summary
                        </div>
                      </div>
                      <div>
                        <div className="el-content uk-panel">
                          <p>
                            An exciting 6-month Outdoor Education Diploma
                            program nestled in the woods between Hamburg,
                            Hannover, and Bremen. A life changing experience
                            where you will live, learn, and thrive in an
                            international community. Throughout the program you
                            will be given the opportunity to develop your skills
                            in outdoor education, team building and leadership.
                            Camp Europe is committed to providing you with an
                            experiential learning environment where you can grow
                            both professionally and personally. The program
                            facilitates training, development, and certification
                            though our partners at Go and Grow Camp Academy. If
                            you are 21+ years old and looking for an amazing
                            program in Europe, this is the place for you.
                          </p>
                          <p>
                            The intensive training sessions focus on developing
                            your soft and hard skills, cultivating your specific
                            outdoor educational profile. Throughout the 20-week
                            placement you will have the opportunity to apply and
                            further develop these skills through experiential
                            leaning.
                            <br /> <br />
                            You will lead activities for youth and teens,
                            including, but not limited to; rock climbing,
                            canoeing, mountain biking, hiking, camping,
                            orienteering, group initiatives and ropes course
                            experiences. You will oversee a safe and nurturing
                            environment for our spring and summer participants.
                            You will also immerse yourself within all roles at
                            an outdoor education facility. These include
                            logistics, administrative tasks, accounting, food &
                            beverage, program planning and more. Once completed,
                            this course will have instilled in you a diverse
                            skill set that is sure to propel you into a
                            fulfilling professional career in outdoor education.
                          </p>
                          <p>
                            <span className="uk-text-middle">
                              <a
                                className="el-content uk-button uk-button-secondary"
                                href="https://www.campadventure.de/images/e_akademie/ausbildungen/InternationalOutdoorEducationDiploma-ENG-2025.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                PDF file with detailed program description
                              </a>
                            </span>
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
                        <div className="el-title uk-margin-remove uk-text-bold">
                          What we offer
                        </div>
                      </div>
                      <div>
                        <div className="el-content uk-panel">
                          <p>
                            4.5 weeks of free training (Camp Counselor, high
                            ropes course, archery, canoe, kayak, team building,
                            survival, hiking, F&B logistics, first aid, hygiene,
                            slacklining, administration)
                          </p>
                          <p>
                            Acquisition of various certificates, e.g.: First
                            aid, lifeguard, high ropes course trainer (ERCA
                            certified), TOEFL, German health certificate,
                            Juleica (Youth Leader Card)
                          </p>
                          <p>
                            16 weeks of practical work in our international
                            camps in Germany
                          </p>
                          <p>
                            2-4 weeks stay abroad in one of our partner camps in
                            Ireland or England as well as the opportunity to
                            visit our partner camps in Canada, Iceland, USA,
                            etc. after finishing your diploma
                          </p>
                          <p>
                            Accommodation & meals during training and assignment
                            times + expense allowance
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
                        <div className="el-title uk-margin-remove uk-text-bold">
                          Requirements
                        </div>
                      </div>
                      <div>
                        <div className="el-content uk-panel">
                          <p>
                            Enthusiasm for adventure-educational work with
                            children & young people
                            <br />
                            Good communication & organizational skills
                            <br />
                            Distinctive social skills, tolerance & understanding
                            for other cultures
                            <br />
                            Openness, commitment, and a high degree of
                            independence
                            <br />
                            Resilience
                            <br />
                            Good English skills
                            <br />
                            Ability to work in a team
                            <br />
                            Minimum age of 21 years
                            <br />
                            Driving license class B (with driving experience)
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
                        <div className="el-title uk-margin-remove uk-text-bold">
                          Application process
                        </div>
                      </div>
                      <div>
                        <div className="el-content uk-panel">
                          <p>
                            <strong>Step 1 - Online Application</strong>
                          </p>
                          <p>Apply online (Application form below)</p>
                          <p>
                            <strong>Step 2 - Interview</strong>
                          </p>
                          <p>
                            As soon as we have received and reviewed your
                            application you will receive a response from our
                            recruitment partner{" "}
                            <a href="https://www.campeurope.net/">
                              Camp Europe
                            </a>{" "}
                            via e-mail. There you will invited to an online
                            video conference, where you will be assessed though
                            a series of up to three 20-30 minute interviews.
                            Note: Non-Germans are asked to submit a
                            Pre-Interview Deposit of 75 euros (50 euros for
                            Early Bird Applications) - 100% Reimbursable if Camp
                            Europe is unable to extend you a Placement Offer
                            after the interview process.
                          </p>
                          <p>
                            <strong>Step 3 - Confirmation of placement</strong>
                          </p>
                          <p>
                            Once confirmed we will send you all important
                            information needed for organizing your six-month
                            program. Part of confirming the spot in the program
                            is a mandatory confirmation Deposit of 500 euros
                            (deposit for training sessions) which will be FULLY
                            reimbursed upon completion of the program.
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
                        <div className="el-title uk-margin-remove uk-text-bold">
                          Application
                        </div>
                      </div>
                      <div>
                        <div className="el-content uk-panel">
                          <p>
                            Please don&apos;t hesitate to ask us anything about
                            the program should you have questions. If this looks
                            like the ideal place for you, feel free to submit an
                            online application to the program. We look forward
                            to hearing from you and guiding you though our
                            applications process for the six-month Outdoor
                            Education Program.
                          </p>
                          <p>
                            <span className="uk-text-middle">
                              <a
                                className="el-content uk-button uk-button-secondary"
                                href="https://bookacamp.de/en/teamer/registration/register/ds7fdn347dsfndsf74n37en37en37dnd"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Apply online
                              </a>
                            </span>
                          </p>
                          <p>
                            If you have any further questions please contact
                            Tanja via Email{" "}
                            <a href="mailto:academy@campadventure.de">
                              academy@campadventure.de
                            </a>
                            .
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="uk-section-secondary uk-section-overlap uk-preserve-color uk-light">
        <div
          className="uk-background-norepeat uk-background-cover uk-background-center-center uk-background-fixed uk-section uk-flex uk-flex-middle uk-height-viewport"
          style={{
            backgroundImage: `url(${getTemplateImageUrl(
              "yootheme/cache/e8/international_outdoor_education_diploma_3-e81990d3.jpeg"
            )})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="uk-width-1-1">
            <div className="uk-container uk-container-large">
              <div
                className="uk-grid tm-grid-expand uk-grid-large uk-grid-margin-large"
                uk-grid=""
              >
                <div className="uk-grid-item-match uk-flex-middle uk-width-2-3@m">
                  <div className="uk-panel uk-width-1-1">
                    <div
                      className="uk-h1 uk-text-left@m uk-text-center"
                      uk-scrollspy-class=""
                    >
                      &quot;Let Nature be your teacher.&quot;
                    </div>
                    <div
                      className="uk-h1 uk-text-left@m uk-text-center"
                      uk-scrollspy-class=""
                    >
                      –<span>William Wordsworth</span>
                    </div>
                  </div>
                </div>
                <div className="uk-grid-item-match uk-flex-middle uk-width-1-3@m">
                  <div className="uk-panel uk-width-1-1"></div>
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
          className="uk-background-norepeat uk-background-contain uk-background-bottom-center uk-section"
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
                <div className="uk-h5" uk-scrollspy-class="">
                  <div style={{ textAlign: "center" }}>Go and Grow Camp</div>
                </div>
                <h2
                  className="uk-h1 uk-margin-small uk-text-center"
                  uk-scrollspy-class="uk-animation-slide-right-medium"
                >
                  Cooperations &amp; Memberships
                </h2>
                <div
                  className="uk-divider-icon uk-width-medium uk-margin-auto"
                  uk-scrollspy-class
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
                    <div>
                      <div
                        className="el-item uk-card uk-card-hover uk-card-body uk-margin-remove-first-child"
                        uk-scrollspy-class
                      >
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/0b/akademie_kooperationen_bremen-0b03381c.png"
                          )}
                          width={200}
                          height={200}
                          alt="University of Bremen"
                          loading="lazy"
                          className="el-image"
                        />
                      </div>
                    </div>
                    <div>
                      <div
                        className="el-item uk-card uk-card-hover uk-card-body uk-margin-remove-first-child"
                        uk-scrollspy-class
                      >
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/0b/akademie_kooperationen_koeln-0b43d6ce.png"
                          )}
                          width={200}
                          height={200}
                          alt="University of Köln"
                          loading="lazy"
                          className="el-image"
                        />
                      </div>
                    </div>
                    <div>
                      <div
                        className="el-item uk-card uk-card-hover uk-card-body uk-margin-remove-first-child"
                        uk-scrollspy-class
                      >
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/0f/akademie_kooperationen_paderborn-0f0f5def.png"
                          )}
                          width={200}
                          height={200}
                          alt="University of Paderborn"
                          loading="lazy"
                          className="el-image"
                        />
                      </div>
                    </div>
                    <div>
                      <div
                        className="el-item uk-card uk-card-hover uk-card-body uk-margin-remove-first-child"
                        uk-scrollspy-class
                      >
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/4e/akademie_kooperationen_treuchtlingen-4ecd762e.png"
                          )}
                          width={200}
                          height={200}
                          alt="Adventure Campus Treuchtlingen"
                          loading="lazy"
                          className="el-image"
                        />
                      </div>
                    </div>
                    <div>
                      <div
                        className="el-item uk-card uk-card-hover uk-card-body uk-margin-remove-first-child"
                        uk-scrollspy-class
                      >
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/2b/akademie_kooperationen_triagon-2b2b92e6.png"
                          )}
                          width={200}
                          height={200}
                          alt="Triagon University"
                          loading="lazy"
                          className="el-image"
                        />
                      </div>
                    </div>
                    <div>
                      <div
                        className="el-item uk-card uk-card-hover uk-card-body uk-margin-remove-first-child"
                        uk-scrollspy-class
                      >
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/97/akademie_kooperationen_bfd-9754991d.png"
                          )}
                          width={200}
                          height={200}
                          alt="Bundesfreiwilligendienst"
                          loading="lazy"
                          className="el-image"
                        />
                      </div>
                    </div>
                    <div>
                      <div
                        className="el-item uk-card uk-card-hover uk-card-body uk-margin-remove-first-child"
                        uk-scrollspy-class
                      >
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/27/akedemie_kooperationen_juleica-2789c5a1.png"
                          )}
                          width={200}
                          height={200}
                          alt="Juleica Youth Leader Card"
                          loading="lazy"
                          className="el-image"
                        />
                      </div>
                    </div>
                    <div>
                      <div
                        className="el-item uk-card uk-card-hover uk-card-body uk-margin-remove-first-child"
                        uk-scrollspy-class
                      >
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/68/akademie_kooperationen_gut_drauf-6879b59d.png"
                          )}
                          width={1200}
                          height={850}
                          alt="Gut drauf"
                          loading="lazy"
                          className="el-image"
                        />
                      </div>
                    </div>
                    <div>
                      <div
                        className="el-item uk-card uk-card-hover uk-card-body uk-margin-remove-first-child"
                        uk-scrollspy-class
                      >
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/dc/akademie_kooperationen_kmdd-dc68de01.jpg"
                          )}
                          width={144}
                          height={144}
                          alt="No power to drugs"
                          loading="lazy"
                          className="el-image"
                        />
                      </div>
                    </div>
                    <div>
                      <div
                        className="el-item uk-card uk-card-hover uk-card-body uk-margin-remove-first-child"
                        uk-scrollspy-class
                      >
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/bb/akademie_kooperationen_icef-bb2dcd07.png"
                          )}
                          width={200}
                          height={200}
                          alt="International Camping Fellowship"
                          loading="lazy"
                          className="el-image"
                        />
                      </div>
                    </div>
                    <div>
                      <div
                        className="el-item uk-card uk-card-hover uk-card-body uk-margin-remove-first-child"
                        uk-scrollspy-class
                      >
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/70/akademie_kooperationen_camp_europe-70d1108a.png"
                          )}
                          width={200}
                          height={200}
                          alt="Camp Europe"
                          loading="lazy"
                          className="el-image"
                        />
                      </div>
                    </div>
                    <div>
                      <div
                        className="el-item uk-card uk-card-hover uk-card-body uk-margin-remove-first-child"
                        uk-scrollspy-class
                      >
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/61/akademie_kooperationen_manyung-61c25e2c.png"
                          )}
                          width={200}
                          height={200}
                          alt="YMCA Camp Manyung"
                          loading="lazy"
                          className="el-image"
                        />
                      </div>
                    </div>
                    <div>
                      <div
                        className="el-item uk-card uk-card-hover uk-card-body uk-margin-remove-first-child"
                        uk-scrollspy-class
                      >
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/6a/akademie_kooperationen_doef-6a3a436d.png"
                          )}
                          width={200}
                          height={200}
                          alt="The Duke of Edinburgh's International Award"
                          loading="lazy"
                          className="el-image"
                        />
                      </div>
                    </div>
                    <div>
                      <div
                        className="el-item uk-card uk-card-hover uk-card-body uk-margin-remove-first-child"
                        uk-scrollspy-class
                      >
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/dd/akademie_kooperationen_erca-dd946444.png"
                          )}
                          width={200}
                          height={200}
                          alt="European Ropes Course Association"
                          loading="lazy"
                          className="el-image"
                        />
                      </div>
                    </div>
                    <div>
                      <div
                        className="el-item uk-card uk-card-hover uk-card-body uk-margin-remove-first-child"
                        uk-scrollspy-class
                      >
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/13/akademie_kooperationen_reisenetz-134d8883.png"
                          )}
                          width={200}
                          height={200}
                          alt="Reisenetz"
                          loading="lazy"
                          className="el-image"
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
