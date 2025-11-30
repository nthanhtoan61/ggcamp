"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { getTemplateImageUrl } from "@/lib/assets";

export default function JobsPage() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="uk-section-muted uk-section-overlap uk-preserve-color uk-light uk-position-relative"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div
          className="uk-background-norepeat uk-background-cover uk-background-center-center uk-background-fixed uk-section uk-section-xlarge"
          style={{
            backgroundImage: `url(${getTemplateImageUrl(
              "yootheme/cache/be/Teamertraining_2017_51_Kopie-be22331c.jpeg"
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
                <h1 className="uk-heading-large uk-text-center">
                  International Camp Counselor & office internship positions
                </h1>
                <div className="uk-panel uk-text-lead uk-margin uk-text-center">
                  <p>
                    <span style={{ color: "#000000" }}>
                      <em>
                        Join our great team of young people from over 30
                        different countries
                      </em>
                    </span>
                  </p>
                </div>
                <div className="uk-panel uk-margin">
                  <div
                    className="uk-grid tm-grid-expand uk-grid-margin"
                    uk-grid=""
                  >
                    <div className="uk-width-1-3@s uk-width-1-5@m"></div>
                    <div className="uk-width-1-3@s uk-width-1-5@m"></div>
                    <div className="uk-width-1-3@s uk-width-1-5@m"></div>
                    <div className="uk-width-1-3@s uk-width-1-5@m">
                      <div className="uk-margin">
                        <a
                          className="el-link"
                          href="#Online-Application"
                          uk-scroll=""
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
                      <div className="uk-margin">
                        <a
                          className="el-link"
                          href="https://docs.google.com/forms/d/e/1FAIpQLSczZM8LHrri-Fdmzl4x7bforey_7JK9YKznaiRv2FIYkII8Ow/viewform"
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
        <div className="uk-container">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1">
              <h2 className="uk-h1 uk-text-center">
                Go and Grow Camp Academy in cooperation with Camp Europe e.V.
                offers positions for Camp Counselors in Europe and office
                internships in Germany
              </h2>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="uk-section-default uk-section-overlap uk-section uk-section-small uk-flex uk-flex-middle">
        <div className="uk-width-1-1">
          <div className="uk-container uk-container-large">
            <div
              className="uk-grid tm-grid-expand uk-grid-large uk-margin-xlarge"
              uk-grid=""
            >
              <div className="uk-grid-item-match uk-flex-middle uk-width-1-3@m">
                <div className="uk-panel uk-width-1-1">
                  <div
                    className="uk-margin uk-text-center"
                    uk-scrollspy-class="uk-animation-fade"
                  >
                    <Image
                      src={getTemplateImageUrl(
                        "yootheme/cache/ad/Jan-Vieth_Potrait-ad3f092b.jpg"
                      )}
                      width={250}
                      height={166}
                      className="el-image"
                      alt="Jan Vieth is the founder of Go and Grow Camp"
                      loading="lazy"
                    />
                  </div>
                  <div
                    className="uk-panel uk-margin uk-text-center"
                    uk-scrollspy-class=""
                  >
                    <p>Jan Vieth, Founder & Managing Director</p>
                  </div>
                </div>
              </div>
              <div className="uk-grid-item-match uk-flex-middle uk-width-2-3@m">
                <div className="uk-panel uk-width-1-1">
                  <div className="uk-panel uk-margin" uk-scrollspy-class="">
                    <p>
                      Welcome to Go and Grow Camp Academy in cooperation with our
                      partner Camp Europe e.V., a non-profit association that is
                      responsible for the recruiting of our teamers
                      (International Camp Counselors), we create an
                      international atmosphere that couldn&apos;t be any
                      stronger. We bring children, young adults, and teamers
                      from all over the world together to create unforgettable
                      experiences with many adventures, new friends and
                      never-ending fun. Every year our team consists of a wild
                      mix of characters from different origins and careers as
                      well as various ideas and goals. It doesn&apos;t matter if
                      you are still in/just finished school, your apprenticeship
                      or your studies, your application is always welcome. For
                      us, your personal development and growth come first.
                      Intense practical experiences, freedom for your personal
                      development and flat hierarchies complement our versatile
                      fields of activity. If you want to try something new, be
                      active, leave your comfort zone as well as expand your
                      language skills at the same time. If you are
                      communicative, creative and a sport enthusiast we would be
                      very happy to welcome you to our volunteer team. Our
                      recruiting team is looking forward to your application!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Positions Section */}
      <div className="uk-section-default uk-section-overlap uk-section uk-padding-remove-top">
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .el-item.uk-flex.uk-flex-column .uk-card-body {
                display: block !important;
              }
              .uk-card-media-top {
                margin: 0 auto;
              }
              .uk-card-media-top canvas,
              .uk-card-media-top img,
              .uk-card-media-top svg,
              .uk-card-media-top video {
                margin: 0 auto;
              }
            `,
          }}
        />
        <div className="uk-container uk-container-xlarge">
          <div className="uk-grid tm-grid-expand uk-grid-margin" uk-grid="">
            <div className="uk-width-1-2@m">
              <div
                className="uk-position-relative uk-margin-remove-top uk-margin-remove-bottom uk-width-2xlarge uk-text-center"
                style={{ left: "70px", top: "110px" }}
              >
                <Image
                  src={getTemplateImageUrl(
                    "yootheme/cache/48/ca_academy_logo-48f93492.jpg"
                  )}
                  width={271}
                  height={271}
                  className="el-image"
                  alt="Go and Grow Camp Academy - one of Europe's leading training centers in Outdoor Education"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="uk-width-1-2@m">
              <div uk-scrollspy-class="">
                <center>
                  <iframe
                    src="https://www.goabroad.com/reviews/generator/program/47934/177329/240/490/0/0?layout_type=0&theme=light&show_name=1?rvs="
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
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2
                className="uk-h1 uk-text-center"
                uk-scrollspy-class="uk-animation-slide-right-medium"
              >
                International Camp Counselor & Office Internship Positions in
                Germany
              </h2>
              <div
                className="uk-divider-icon uk-width-medium uk-margin-auto"
                uk-scrollspy-class="uk-animation-slide-left-medium"
              ></div>
              <div
                className="uk-panel uk-margin uk-text-center"
                uk-scrollspy-class="uk-animation-slide-top-medium"
              >
                <p>
                  You want to become part of our team and are looking for the
                  perfect position? We offer a range of options that vary in
                  length of stay, location, and role. Each with their own unique
                  aspects, challenges, and rewards. These roles range from
                  on-site a camp counselors or language teachers at our summer
                  camps in Germany, England, or Northern Ireland to
                  administration within our office in Hamburg. Whether
                  you&apos;re looking to step out of your comfort zone or hone
                  your skills, Go and Grow Camp Academy is the place for you.
                </p>
              </div>
            </div>
          </div>
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div
                className="uk-margin uk-text-center"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <div
                  className="uk-grid uk-child-width-1-1 uk-child-width-1-2@m uk-grid-match"
                  uk-grid=""
                  style={{ maxWidth: "100%" }}
                >
                  <div>
                    <div
                      className="el-item uk-flex uk-flex-column"
                      uk-scrollspy-class="uk-animation-fade"
                    >
                      <a
                        className="uk-flex-1 uk-card uk-card-default uk-card-small uk-card-hover uk-link-toggle"
                        href="#Online-Application"
                        uk-scroll=""
                      >
                        <div className="uk-card-media-top">
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/43/teamer_one-4353ae8f.jpg"
                            )}
                            width={500}
                            height={300}
                            alt="Happy campers and their staff members"
                            loading="lazy"
                            className="el-image"
                          />
                        </div>
                        <div className="uk-card-body uk-margin-remove-first-child">
                          <h3
                            className="el-title uk-card-title uk-heading-divider uk-margin-top uk-margin-remove-bottom"
                            style={{ display: "block" }}
                          >
                            International Camp Counselor Postions
                          </h3>
                          <div className="el-content uk-panel uk-margin-top">
                            <p>
                              International Camp Counselors a.k.a. Teamers are
                              the backbone of our summer camps. Join our Diverse
                              team and expand your outdoor knowledge though
                              experiential learning. Once your training is
                              complete you will be responsible for the
                              entertainment and care of our campers. You will
                              have the opportunity to implement new ideas thanks
                              to the variety of facilities and equipment
                              available on site.
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div>
                    <div
                      className="el-item uk-flex uk-flex-column"
                      uk-scrollspy-class="uk-animation-fade"
                    >
                      <a
                        className="uk-flex-1 uk-card uk-card-default uk-card-small uk-card-hover uk-link-toggle"
                        href="#büro"
                        uk-scroll=""
                      >
                        <div className="uk-card-media-top">
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/f0/jobs_office-f05bb43d.jpg"
                            )}
                            width={500}
                            height={300}
                            alt="Organizing summer camps is tough but rewarding"
                            loading="lazy"
                            className="el-image"
                          />
                        </div>
                        <div className="uk-card-body uk-margin-remove-first-child">
                          <h3
                            className="el-title uk-card-title uk-heading-divider uk-margin-top uk-margin-remove-bottom"
                            style={{ display: "block" }}
                          >
                            Office Internship Positions in Hamburg, Germany
                          </h3>
                          <div className="el-content uk-panel uk-margin-top">
                            <p>
                              Combined internship as a Teamer (international
                              Camp Counselor) in our camp & in office
                              administration with interesting insights into the
                              organizational processes of Go and Grow Camp
                              Academy. Discover what it takes to keep a Camp
                              Adventure running in high season. Train as a
                              Teamer (Camp Counselor) and immerse yourself into
                              the active environment on site and gain a deeper
                              understanding of Go and Grow Camp.
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Camp Counselor Positions Section */}
      <div id="camp" className="uk-section-muted uk-section-overlap uk-section">
        <div className="uk-container uk-container-xlarge">
          <div className="uk-grid-margin uk-container uk-container-xlarge">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1">
              <div className="uk-width-1-1@m">
                <h2
                  className="uk-h1 uk-text-center"
                  uk-scrollspy-class="uk-animation-slide-right-medium"
                >
                  Camp Counselor Positions
                  <br />
                  in Germany, England and Spain
                </h2>
                <div
                  className="uk-divider-icon uk-width-medium uk-margin-auto"
                  uk-scrollspy-class="uk-animation-slide-left-medium"
                ></div>
                <div
                  className="uk-panel uk-margin uk-width-2xlarge uk-margin-auto uk-text-center"
                  uk-scrollspy-class="uk-animation-slide-top-medium"
                >
                  <p>
                    In cooperation with the association{" "}
                    <a href="https://campeurope.net/">Camp Europe</a> e.V. we
                    offer various roles in our outdoor education adventure,
                    sport & language camps for young people from all over the
                    world.
                  </p>
                  <p>
                    If you are athletic or musical, you like to teach languages
                    or love to cook, you are an enthusiastic writer and like to
                    create children&apos;s magazines, love climbing or crafts -
                    then you are exactly who we are looking for. Get carried
                    away by our unique Go and Grow Camp spirit and spend an
                    unforgettable summer as a teamer in our international camps.
                    Here is a first taste of our main teamer training which
                    takes place every year at the end of June at our flagship
                    site, Go and Grow Camp Academy in the Lüneburger Heide.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div
                className="uk-margin uk-text-center"
                uk-scrollspy-class="uk-animation-fade"
              >
                <iframe
                  src="https://www.youtube.com/embed/-gbOWMAHE2g?v=-gbOWMAHE2g&disablekb=1"
                  allow="autoplay"
                  allowFullScreen
                  uk-responsive=""
                  width="960"
                  height="540"
                  style={{
                    maxWidth: "100%",
                    margin: "0 auto",
                    display: "block",
                  }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Job Offers Section */}
      <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-xlarge">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h3
                className="uk-h2 uk-text-primary uk-text-center"
                uk-scrollspy-class="uk-animation-fade"
              >
                <p>
                  Job offers in our camps<a id="diploma"></a>
                </p>
              </h3>
            </div>
          </div>

          {/* Internship in International Outdoor Education */}
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h4
                className="uk-h3 uk-heading-line uk-text-primary"
                uk-scrollspy-class=""
              >
                <span>Internship in International Outdoor Education</span>
              </h4>
              <div uk-accordion="collapsible: true;" uk-scrollspy-class="">
                <div className="el-item">
                  <a className="el-title uk-accordion-title" href="#">
                    2 – 12 exciting weeks with Go and Grow Camp!
                  </a>
                  <div className="uk-accordion-content">
                    <div className="el-content uk-panel">
                      <p>
                        In our international adventure, sports and language
                        camps you will gain a varied insight into the areas of
                        adventure and nature education.
                      </p>
                      <p>
                        <strong>What you can expect</strong>
                      </p>
                      <ul>
                        <li>
                          Active participation in professional trainings and
                          workshops (Camp Counselor, pedagogy, creativity, arts
                          & craft, teambuilding etc.)
                        </li>
                        <li>
                          Intense practical experience in program design,
                          execution and evaluation
                        </li>
                        <li>
                          Insights into event planning as well as adventure
                          education
                        </li>
                      </ul>
                      <p>
                        <strong>Requirements</strong>
                      </p>
                      <ul>
                        <li>
                          Enthusiasm for Outdoor education work with children &
                          young people
                        </li>
                        <li>
                          Intercultural empathy as well as sensibility for
                          nature
                        </li>
                        <li>
                          You are flexible, eager to travel and at least 19
                          years old
                        </li>
                        <li>Ability to work in a team and creativity</li>
                        <li>Personal initiative</li>
                      </ul>
                      <p>
                        <strong>What we offer</strong>
                      </p>
                      <ul>
                        <li>
                          An international team of 200 young people from 30
                          different nations
                        </li>
                        <li>
                          7 days intense training (for all teamers it is
                          obligatory to attend the training, for exact dates see
                          &quot;Application process&quot;)
                        </li>
                        <li>Personal and professional development</li>
                        <li>Creditable as mandatory internship</li>
                        <li>
                          Possibility to acquire the Juleica (Youth Leader Card)
                        </li>
                        <li>
                          Expense allowance as well as free Food and Board
                        </li>
                      </ul>
                      <p>
                        <strong>Application</strong>
                      </p>
                      <p>
                        If you feel like trying something new and gaining
                        valuable practical experience in an international
                        environment, then don&apos;t hesitate to apply right
                        here. We´ll forward you to our partner Camp Europe e.V.
                      </p>
                      <p>
                        If you have any further questions please contact Tanja
                        via Email{" "}
                        <a href="mailto:academy@campadventure.de">
                          academy@campadventure.de
                        </a>
                        .
                      </p>
                    </div>
                    <div className="uk-margin-top">
                      <a
                        className="el-link uk-button uk-button-secondary"
                        href="#application process"
                        uk-scroll=""
                      >
                        Click here to apply online
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Teamer for Outdoor and Adventure Sport */}
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h4
                className="uk-h3 uk-heading-line uk-text-primary"
                uk-scrollspy-class="uk-animation-fade"
              >
                <span>Teamer for Outdoor and Adventure Sport</span>
              </h4>
              <div uk-accordion="collapsible: true;" uk-scrollspy-class="">
                <div className="el-item">
                  <a className="el-title uk-accordion-title" href="#">
                    2 – 12 lively weeks with Go and Grow Camp!
                  </a>
                  <div className="uk-accordion-content">
                    <div className="el-content uk-panel">
                      <div className="el-content uk-margin-top">
                        <p>
                          Spend your summer in nature and engage children and
                          young adults from all over the world with outdoor
                          games, sports and adventures.
                        </p>
                        <p>
                          <strong>What you can expect</strong>
                        </p>
                        <ul>
                          <li>
                            Active participation in professional trainings and
                            workshops (Camp Counselor, pedagogy, creativity,
                            arts & craft, teambuilding etc.)
                          </li>
                          <li>
                            Intense practical experience in program design,
                            execution and evaluation
                          </li>
                          <li>
                            Insights into event planning as well as Outdoor
                            education
                          </li>
                        </ul>
                        <p>
                          <strong>Requirements</strong>
                        </p>
                        <ul>
                          <li>
                            Enthusiasm for adventure-educational work with
                            children & young people
                          </li>
                          <li>Joy of sport and the act of facilitating it</li>
                          <li>
                            You are flexible, eager to travel and at least 19
                            years old
                          </li>
                          <li>
                            You have a physical basic fitness and enjoy outdoor
                            activities
                          </li>
                          <li>Ability to work in a team and creativity</li>
                        </ul>
                        <p>
                          <strong>What we offer</strong>
                        </p>
                        <ul>
                          <li>
                            International team of 200 young people from 30
                            different nations
                          </li>
                          <li>
                            7 days intense training (for all teamers it is
                            obligatory to attend the training, for exact dates
                            see &quot;Application process&quot;)
                          </li>
                          <li>Personal and professional development</li>
                          <li>Creditable as mandatory internship</li>
                          <li>
                            Possibility to acquire the Juleica (Youth Leader
                            Card)
                          </li>
                          <li>
                            Expense allowance as well as free board and lodging
                          </li>
                        </ul>
                        <p>
                          <strong>Application</strong>
                        </p>
                        If you feel like trying something new and gaining
                        valuable practical experience in an international
                        environment, then don&apos;t hesitate apply right here.
                        We´ll forward you to our partner Camp Europe e.V.
                        <p>
                          If you have any further questions please contact Tanja
                          via Email{" "}
                          <a href="mailto:academy@campadventure.de">
                            academy@campadventure.de
                          </a>{" "}
                          or <a href="https://wa.me/4940410094900">Whatsapp</a>.
                        </p>
                      </div>
                    </div>
                    <div className="uk-margin-top">
                      <a
                        className="el-link uk-button uk-button-secondary"
                        href="#application process"
                        uk-scroll=""
                      >
                        Click here to apply online
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Language teacher */}
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h4
                className="uk-h3 uk-heading-line uk-text-primary"
                uk-scrollspy-class="uk-animation-fade"
              >
                <span>Language teacher</span>
              </h4>
              <div uk-accordion="collapsible: true;" uk-scrollspy-class="">
                <div className="el-item">
                  <a className="el-title uk-accordion-title" href="#">
                    2 – 12 meaningful weeks with Go and Grow Camp!
                  </a>
                  <div className="uk-accordion-content">
                    <div className="el-content uk-panel">
                      <p>
                        Give children and young adults from all over the world
                        an understanding of the English or German language and
                        culture outside the classroom and gain lots of valuable
                        experience for your studies.
                      </p>
                      <p>
                        <strong>What you can expect</strong>
                      </p>
                      <ul>
                        <li>
                          Active participation in professional trainings and
                          workshops (German or English Language Coach, Camp
                          Counselor, pedagogy, creativity, teambuilding etc.)
                        </li>
                        <li>
                          Intense practical experience in the design and
                          execution of language programs
                        </li>
                        <li>Insights into adventure education</li>
                      </ul>
                      <p>
                        <strong>Requirements</strong>
                      </p>
                      <ul>
                        <li>
                          Enthusiasm for adventure-educational work with
                          children & young people
                        </li>
                        <li>
                          Education and experience in language classes (e.g.
                          TEFL certificate, experiences in teaching)
                        </li>
                        <li>German/English as a native language</li>
                        <li>
                          Intercultural empathy as well as sensibility for
                          nature
                        </li>
                        <li>
                          You are flexible, eager to travel and at least 19
                          years old
                        </li>
                        <li>
                          Enthusiasm, sense of humor, patience and self-control
                        </li>
                        <li>Excellent oral and written communication skills</li>
                      </ul>
                      <p>
                        <strong>What we offer</strong>
                      </p>
                      <ul>
                        <li>
                          International team of 200 young people from 30
                          different nations
                        </li>
                        <li>
                          9 days intense training (for all teamers it is
                          obligatory to attend the training, for exact dates see
                          &quot;Application process&quot;)
                        </li>
                        <li>Personal and professional development</li>
                        <li>Creditable as mandatory internship</li>
                        <li>
                          Possibility to acquire the Juleica (Youth Leader Card)
                        </li>
                        <li>
                          Expense allowance as well as free board and lodging
                        </li>
                      </ul>
                      <p>
                        <strong>Application</strong>
                      </p>
                      <p>
                        If you feel like trying something new and gaining
                        valuable practical experience in an international
                        environment, then don&apos;t hesitate any longer and
                        apply right here. We´ll forward you to our partner Camp
                        Europe e.V.
                      </p>
                      <p>
                        If you have any further questions please contact Tanja
                        via Email{" "}
                        <a href="mailto:academy@campadventure.de">
                          academy@campadventure.de
                        </a>
                        .
                      </p>
                    </div>
                    <div className="uk-margin-top">
                      <a
                        className="el-link uk-button uk-button-secondary"
                        href="#application process"
                        uk-scroll=""
                      >
                        Click here to apply online
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mr & Mrs Clean */}
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h4
                className="uk-h3 uk-heading-line uk-text-primary"
                uk-scrollspy-class="uk-animation-fade"
              >
                <span>Mr & Mrs Clean</span>
              </h4>
              <div uk-accordion="collapsible: true;" uk-scrollspy-class="">
                <div className="el-item">
                  <a className="el-title uk-accordion-title" href="#">
                    2 – 4 dynamic weeks with Go and Grow Camp! (from 18 years)
                  </a>
                  <div className="uk-accordion-content">
                    <div className="el-content uk-panel">
                      <p>
                        We are looking for young individuals that would like to
                        be part of or Mr & Mrs Clean team in our Luneburger
                        Heide (Walsrode) location. Join our international staff
                        in creating an unforgettable experience for everyone
                        involved at Go and Grow Camp.
                      </p>
                      <p>
                        <br /> Maybe there are no more counselor positions
                        anymore or you&apos;re still too young, no problem,
                        we&apos;re looking for Mr & Mrs Clean. You&apos;re
                        responsible for the cleanliness and hygiene on site
                        along with a tight knit group or colleagues. This
                        involves maintaining a hight standard of hygiene in on
                        site washrooms, common areas and kitchens. Are you
                        passionate about keeping places clean? Once you have
                        completed training, you will be integrated into the camp
                        with all other staff, sharing accommodation in a tent
                        with teamers (camp Counselors) and engaging in
                        activities with them once the campers are in bed. Your
                        work will be done during shifts, usually six-seven hours
                        per day, when not on shift you are free to relax or join
                        the teamers in supervising the campers. The campers are
                        children and young adults from all over the world
                        between 7 and 17 years.
                      </p>
                      <p>
                        <strong>Requirements</strong>
                      </p>
                      <ul>
                        <li>
                          Intercultural empathy as well as sensibility for
                          nature
                        </li>
                        <li>At least 18 years of age</li>
                        <li>Police clearance certificate</li>
                        <li>German or English skills</li>
                        <li>
                          Fun caring for cleanliness with an international team
                        </li>
                        <li>
                          Time in June – September to come to our camp in the
                          Lüneburger Heide (Walsrode) for four weeks (always for
                          the whole month)
                        </li>
                      </ul>
                      <p>
                        <strong>What we offer</strong>
                      </p>
                      <ul>
                        <li>A 4-weeks-placement with free room & board</li>
                        <li> USD 300 expense allowance for four weeks</li>
                        <li>
                          Free activities and excursions when you are off-duty
                        </li>
                        <li>
                          Campfire in the evening with up to 100 international
                          teamers
                        </li>
                      </ul>
                      <p>
                        Feel free to contact Kadda via email with any questions
                        you may have at{" "}
                        <a href="mailto:academy@campadventure.de">
                          academy@campadventure.de
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coordinators Club */}
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h4
                className="uk-h3 uk-heading-line uk-text-primary"
                uk-scrollspy-class="uk-animation-fade"
              >
                <span>Coordinators Club</span>
              </h4>
              <div uk-accordion="collapsible: true;" uk-scrollspy-class="">
                <div className="el-item">
                  <a className="el-title uk-accordion-title" href="#">
                    Charismatic personalities manage to carry others away,
                    motivate and excite them
                  </a>
                  <div className="uk-accordion-content">
                    <div className="el-content uk-panel">
                      <p>
                        Since 2002, in cooperation with Camp Europe e.V., we
                        have offered a competent training platform for teamers,
                        outdoor educators, language coaches and camp directors
                        with the goal of professionalizing in the area of child
                        and youth travel.
                      </p>
                      <p>
                        Usually, our camp coordinators start as teamers caring
                        for children and young adults. It then quickly becomes
                        apparent who is qualified for the position of a camp
                        director because of their charismatic personality,
                        outstanding commitment, social competences,
                        communication skills, honesty and reliability.
                      </p>
                      <p>
                        From teamer (or even camper) to camp coordinator it
                        usually takes a few years. Years in which our recruiting
                        team supports suitable candidates and create the ideal
                        frame and necessary free space to advance their personal
                        and professional development best.
                      </p>
                      <p>
                        <strong>
                          Career characterisitcs of a perennial leader (Camp
                          Director):
                        </strong>
                      </p>
                      <ul>
                        <li>
                          Successful assignment as first-year-teamer in our
                          international summer camps
                        </li>
                        <li>
                          Assignment as camp director assistant (in midsized to
                          big camps)
                        </li>
                        <li>
                          Assignment as camp director in small to midsized camps
                          (20-80 participants)
                        </li>
                        <li>
                          Assignment as camp director in big camps (up to 200
                          participants)
                        </li>
                      </ul>
                      <p>
                        <strong>
                          Opportunities offered by Go and Grow Camp during the
                          perennial leader program:
                        </strong>
                      </p>
                      <ul>
                        <li>
                          Comprehensive insight into the organization of
                          children and youth travel
                        </li>
                        <li>
                          Gradual increase of responsibility in our
                          international summer camps
                        </li>
                        <li>
                          Leader training in the course of our camp director
                          course
                        </li>
                        <li>
                          Member of the training team which coordinates and
                          manages all trainings for new teamers
                        </li>
                        <li>
                          Training: First aid instructor according to the
                          directives of &quot;Emergency First Response&quot;
                        </li>
                        <li>
                          Training: High ropes course trainer according to ERCA
                          standard
                        </li>
                        <li>
                          Training: Lifeguard according to the German Lifesaving
                          Association (DLRG) (bronze)
                        </li>
                        <li>Training: Psychological first aider</li>
                        <li>
                          Possible attendance in our exchange program with our
                          partner camps for several months e.g. in Australia or
                          Iceland
                        </li>
                      </ul>
                      <p>
                        The application for our Coordinators Club takes place
                        internally. Chris (
                        <a href="mailto:academy@campadventure.de">
                          academy@campadventure.de
                        </a>
                        ) is your contact person for further questions and
                        information.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Process Section */}
      <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-small">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h3
                className="uk-h2 uk-text-primary uk-text-center"
                id="application process"
                uk-scrollspy-class="uk-animation-fade"
              >
                Application Process
              </h3>
            </div>
          </div>

          {/* Step 1 */}
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h4
                className="uk-h3 uk-heading-line uk-text-primary"
                uk-scrollspy-class="uk-animation-fade"
              >
                <span>Step 1</span>
              </h4>
              <div uk-accordion="collapsible: true;" uk-scrollspy-class="">
                <div className="el-item">
                  <a className="el-title uk-accordion-title" href="#">
                    Online application
                  </a>
                  <div className="uk-accordion-content">
                    <div className="el-content uk-panel">
                      <p>
                        Every summer we bring children and young adults,
                        motivated and dynamic teamers together, from all over
                        the world. With such a diverse team, English is the main
                        language within our team. As a way of acclimatising
                        people to this, we conduct our international application
                        process in English. The application process is carried
                        out by the non-profit association Camp Europe e.V..
                        Before applying, please read the information given in
                        steps 2-4.
                      </p>
                    </div>
                    <div className="uk-margin-top">
                      <a
                        className="el-link uk-button uk-button-secondary"
                        href="#Online-Application"
                        target="_blank"
                        uk-scroll=""
                      >
                        Apply here online in only 2 minutes
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h4
                className="uk-h3 uk-heading-line uk-text-primary"
                uk-scrollspy-class="uk-animation-fade"
              >
                <span>Step 2</span>
              </h4>
              <div uk-accordion="collapsible: true;" uk-scrollspy-class="">
                <div className="el-item">
                  <a className="el-title uk-accordion-title" href="#">
                    Interview
                  </a>
                  <div className="uk-accordion-content">
                    <div className="el-content uk-panel">
                      <p>
                        As soon as we have received and checked your application
                        you will receive a response from us via e-mail. In case
                        of a positive assessment we will invite you to an online
                        interview to get to know each other a bit better.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h4
                className="uk-h3 uk-heading-line uk-text-primary"
                uk-scrollspy-class="uk-animation-fade"
              >
                <span>Step 3</span>
              </h4>
              <div uk-accordion="collapsible: true;" uk-scrollspy-class="">
                <div className="el-item">
                  <a className="el-title uk-accordion-title" href="#">
                    Confirmation of your placement
                  </a>
                  <div className="uk-accordion-content">
                    <div className="el-content uk-panel">
                      <p>
                        Once confirmed we will send you all important
                        information needed for organizing your voluntary
                        assignment. After that we need the following documents
                        from you to finalize the application process:
                      </p>
                      <ul>
                        <li>
                          Copy of the signed agreement (Memorandum of
                          Understanding)
                        </li>
                        <li>
                          Transfer of a deposit of USD 290 for the participation
                          in the one week staff training (WILL BE REFUNDED AFTER
                          4 WEEKS OF ASSIGNMENT IN CAMP. LANGUAGE COACHES DO NOT
                          HAVE TO PAY A DEPOSIT.)
                        </li>
                        <li>Copy of your passport</li>
                        <li>
                          Copy of your valid first aid certificate – 9 UE, not
                          older than 2 years (you can as well complete a first
                          aid course for USD 55 during staff training)
                        </li>
                        <li>Background check</li>
                        <li>
                          Certifacte of health from a doctor about your physical
                          and psychological fitness to execute camps for
                          children and young adults
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h4
                className="uk-h3 uk-heading-line uk-text-primary"
                uk-scrollspy-class="uk-animation-fade"
              >
                <span>Step 4</span>
              </h4>
              <div uk-accordion="collapsible: true;" uk-scrollspy-class="">
                <div className="el-item">
                  <a className="el-title uk-accordion-title" href="#">
                    Staff training
                  </a>
                  <div className="uk-accordion-content">
                    <div className="el-content uk-panel">
                      <p>
                        Attending the staff training is obligatory for all
                        applicants. The training takes place on the premises of{" "}
                        <a href="mailto:https://www.google.com/maps/place/Camp+Adventure+Academy+GmbH/@52.8477966,9.4722473,15z/data=!4m2!3m1!1s0x0:0x98a82d59e2bd2e2c">
                          {" "}
                          Go and Grow Camp Academy
                        </a>{" "}
                        in the Lüneburger Heide (Walsrode) on the following
                        dates:
                      </p>
                      <ul>
                        <li>
                          <strong>Training A: 14.03. - 21.03.2026</strong>
                        </li>
                        <li>
                          <strong>Training B: 09.05. - 16.05.2026</strong>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <strong>Training 1: 20.06. - 27.06.2026</strong>
                        </li>
                        <li>
                          <strong>Training 2: 27.06. - 04.07.2026</strong>
                        </li>
                        <li>
                          <strong>Training 3: 11.07. - 18.07.2026</strong>
                        </li>
                        <li>
                          <strong>Training 4: 18.07. - 25.07.2026</strong>
                        </li>
                        <li>
                          <strong>Training 5: 15.08. - 22.08.2026</strong>
                        </li>
                      </ul>
                      <p>
                        Additionally, you have the opportunity to take one of
                        our additional qualifications to teach German, English
                        or Spanish as a foreign language in the camp (native
                        speakers only) or to be assigned as an assistant in the
                        high ropes course. The{" "}
                        <strong>
                          additional qualifications can be combined with
                          Training 1-4
                        </strong>{" "}
                        and will take place on the following dates:
                      </p>
                      <ul>
                        <li>
                          <strong>Option 1: 25.06. - 27.06.2026</strong>
                        </li>
                        <li>
                          <strong>Option 2: 16.07. - 18.07.2026</strong>
                        </li>
                      </ul>
                      <p>
                        <br />
                        The travel expenses for getting to the training will be
                        refunded up to USD 150.
                      </p>
                      <p>
                        To get an impression of the contents of the staff
                        training and to experience the great atmosphere of the
                        international team, watch our Staff Training Video.
                      </p>
                      <center>
                        <iframe
                          src="https://www.youtube.com/embed/C4GydGTDfEA"
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          width="560"
                          height="315"
                          frameBorder={0}
                        ></iframe>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final Quote Section */}
      <div className="uk-section-default uk-section-overlap uk-preserve-color uk-light">
        <div
          data-src={getTemplateImageUrl(
            "yootheme/cache/ef/Teamertraining_2017_70-ef289a50.jpeg"
          )}
          uk-img=""
          className="uk-background-norepeat uk-background-cover uk-background-center-center uk-background-fixed uk-section uk-flex uk-flex-middle uk-height-viewport"
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
                      className="uk-panel uk-text-lead uk-margin uk-text-left@m uk-text-center"
                      uk-scrollspy-class=""
                    >
                      <p>
                        Spend stunning nights under the night sky, listen to the
                        crackle of the campfire and feel the delight of children
                        and young adults….
                      </p>
                    </div>
                    <div
                      className="uk-h1 uk-text-left@m uk-text-center"
                      uk-scrollspy-class=""
                    >
                      ... that is Go and Grow Camp
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

      {/* Online Application Section */}
      <div id="Online-Application" className="uk-section-muted uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h1 uk-margin-small uk-text-center">
                Online Application
              </h2>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
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
                    src="https://docs.google.com/forms/d/e/1FAIpQLSczZM8LHrri-Fdmzl4x7bforey_7JK9YKznaiRv2FIYkII8Ow/viewform?embedded=true"
                    width="1000"
                    height="800"
                    frameBorder={0}
                    marginHeight={0}
                    marginWidth={0}
                    style={{
                      maxWidth: "100%",
                      margin: "0 auto",
                      display: "block",
                    }}
                  >
                    Loading…
                  </iframe>
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
