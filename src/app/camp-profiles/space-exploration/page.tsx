"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { getTemplateImageUrl } from "@/lib/assets";

export default function SpaceExplorationPage() {
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
            backgroundImage: `url(${getTemplateImageUrl("yootheme/cache/8e/05-Sommercamp-Walsrode-Huts-8-beds-8ec9bcb0.jpg")})`,
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
                  <p>Space Exploration Specialty Camp in Germany</p>
                </h1>
                <div
                  className="uk-panel uk-text-lead uk-margin uk-text-left"
                  uk-scrollspy-class=""
                >
                  <p>
                    Explore the universe and learn about space science!
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
                <p>Sweden</p>
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
                <p>10 - 17 years</p>
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
                <p>ESA Space Camp</p>
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
                <p>Bilingual<br />GER & EN</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section - Walsrode */}
      <div
        id="Walsrode"
        className="uk-section-default uk-section uk-padding-remove-bottom"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-grid-margin" uk-grid="">
            <div className="uk-grid-item-match uk-width-2-3@m">
              <div className="uk-card-default uk-card uk-card-body">
                <h2 className="uk-h2 uk-margin-remove-bottom uk-text-left">
                  <p>
                    Space Exploration Specialty Camp – Your Children&apos;s &
                    Youth Trip to the Universe in Northern Germany!
                  </p>
                </h2>
                <div className="uk-panel uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin">
                  <p>
                    Are you fascinated by space? At the Space Exploration Camp in
                    Northern Germany, you&apos;ll dive into the mysteries of the
                    universe! Explore planets, experiment with rocket engines,
                    and discover what it&apos;s like to be an astronaut.
                  </p>
                  <p>
                    Learn, build, research! With cool hands-on projects,
                    exciting experiments, and real space challenges, you&apos;ll
                    push your limits and develop your scientific thinking.
                  </p>
                  <p>
                    Science meets adventure holidays! Surrounded by the nature of
                    Northern Germany, you&apos;ll combine research with teamwork
                    and explore the universe alongside children and teens from
                    all over the world.
                  </p>
                  <p>
                    Get ready for your mission – Space Exploration is waiting for
                    you!
                  </p>
                </div>
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
                              "yootheme/cache/6c/01-Space-Exploration-Sommer-Camp-6c698308.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Two girls conducting a water science experiment during the space-themed kids camp"
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
                              "yootheme/cache/c3/02-Space-Exploration-Sommer-Camp-c32f2b6e.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Children creating a solar system model during a space exploration summer camp workshop"
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
                              "yootheme/cache/0e/08-Sommercamp-Walsrode-tents-inside-0ec7f7f4.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Smiling boys sitting inside a shared camp tent – outdoor adventure vacation for kids in Walsrode summer camp"
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
                              "yootheme/cache/8e/05-Sommercamp-Walsrode-Huts-8-beds-8ec9bcb0.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Cozy wooden cabin with bunk beds – child-friendly accommodation at summer camp in Walsrode"
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
                              "yootheme/cache/fa/02-Sommercamp-Walsrode-Dining-Hall-inside-fa5687ee.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Children eating together in the camp dining hall – shared meals and community spirit at Walsrode summer camp"
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
                              "yootheme/cache/44/05-Walsrode-Kanu-44a26bc9.jpg"
                            )}
                            width={1260}
                            height={837}
                            alt="Children paddling together on MegaFlo rafts – water fun and teamwork at summer camp in the Bavarian Forest"
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
                              "yootheme/cache/f2/01-Walsrode-Climbing-f2512af1.jpg"
                            )}
                            width={1260}
                            height={837}
                            alt="Child climbing on a high ropes course with safety gear – thrilling outdoor activity at Walsrode summer camp"
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
                              "yootheme/cache/68/13-Walsrode-SUP-Girls-68ee43b2.jpg"
                            )}
                            width={1260}
                            height={837}
                            alt="Group of girls relaxing on a stand-up paddleboard at the lake – summer fun at kids holiday camp in Walsrode"
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
                              "yootheme/cache/66/20-Walsrode-Bubble_Soccer-667cab53.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Kids playing bubble soccer outdoors – action-packed fun at Walsrode summer camp"
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
                <div id="Accordion">
                  <div
                    uk-accordion="collapsible: false;"
                    id="js-3"
                    className="custom_acc_691a9cf7946c8"
                  >
                    <div id="js-3_0" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          All you need to know
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <ul>
                            <li>Space Exploration – 4 days × 2.5 hours</li>
                            <li>
                              Comprehensive space science developed by expert
                              Alessandro Ercolani (ESA)
                            </li>
                            <li>
                              Fascination of the universe: a mix of science and
                              experiments
                            </li>
                            <li>
                              For everyone: children and teens are welcome
                            </li>
                            <li>
                              Community & adventure: full-day diverse program
                              including canoeing, archery, high ropes course,
                              and lake with water trampoline
                            </li>
                            <li>
                              Colorful evening program: campfires, stick bread,
                              capture the flag, and more
                            </li>
                            <li>
                              Cool trips & excursions for two-week stays:
                              overnight hike, swimming pool, Heide Park, and
                              Hamburg trip
                            </li>
                            <li>
                              Camp languages English/German: learn languages
                              naturally in an international atmosphere
                            </li>
                            <li>
                              Full board for 7 days (Sun–Sat), 6 nights with
                              freshly prepared meals
                            </li>
                            <li>
                              24/7 all-round care: our teamers are always there
                              for you
                            </li>
                            <li>
                              Digital detox approach: phones and electronic
                              devices allowed only during siesta
                            </li>
                            <li>
                              Arrival & departure services: shuttle transfers
                              from train station/airport
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Location */}
                    <div id="js-3_1" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Location
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="uk-panel uk-margin">
                          <h4>Welcome to Walsrode – Your Adventure in the Lüneburger Heide!</h4>
                          <p>
                            Our Camp Adventure (Academy) in Walsrode is nestled idyllically in the Lüneburg Heath, right between Bremen, Hamburg, and Hanover. Just a short walk away, you&apos;ll find a charming North German village with farms and half-timbered houses – the perfect place for little discoveries.
                          </p>
                          <p>
                            <strong>Over 150,000 m² of pure adventure!</strong> Our spacious campgrounds are divided into three exciting areas: Beach/Water, Survival & Creative. Kayaking, bouncing on the water trampoline, building rafts, making fires, or climbing the high ropes course – there&apos;s always action here!
                          </p>
                          <p>
                            <strong>International community & camp spirit!</strong> Our camp is bilingual (English & German) – you&apos;ll meet participants from all over the world and naturally improve your English.
                          </p>
                          <p>
                            Whether you&apos;re a language fan, outdoor adventurer, or creative thinker – discover all the profiles & activities that make your camp experience with us truly unique! We look forward to welcoming you!
                          </p>
                          <div className="uk-margin-top">
                            <Link href="/destinations/germany-lueneburger-heide" className="uk-button uk-button-default">
                              Info - Location
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Accommodations */}
                    <div id="js-3_2" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Accommodations
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="uk-grid tm-grid-expand uk-grid-margin" uk-grid="">
                          <div className="uk-width-1-3@m">
                            <div className="uk-margin">
                              <Image
                                src={getTemplateImageUrl("yootheme/cache/0e/08-Sommercamp-Walsrode-tents-inside-0ec7f7f4.jpg")}
                                width={1080}
                                height={720}
                                className="el-image"
                                alt="Smiling boys sitting inside a shared camp tent"
                                loading="lazy"
                              />
                            </div>
                            <div className="uk-margin">
                              <Image
                                src={getTemplateImageUrl("yootheme/cache/8e/05-Sommercamp-Walsrode-Huts-8-beds-8ec9bcb0.jpg")}
                                width={1080}
                                height={720}
                                className="el-image"
                                alt="Cozy wooden cabin with bunk beds"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="uk-width-2-3@m">
                            <div className="uk-panel uk-margin">
                              <h4>Live like in a small village!</h4>
                              <p>
                                At our international holiday camp in Lower Saxony, you can choose between the tent village and adventure lodges – depending on your sense of adventure!<br />
                                <strong>Tent Village:</strong> Six- to seven-person tents with wooden floors and lofts offer a true outdoor experience under the stars.<br />
                                <strong>Adventure Lodges:</strong> Cozy cabins with four to eight beds, shelving, and seating areas. (Note: Staying in a lodge comes with an additional charge.)
                              </p>
                              <p>
                                Our accommodations are separated by gender, so girls and boys sleep in their own tents or cabins. They are also grouped by age:
                              </p>
                              <ul>
                                <li>Junior (7–12 years)</li>
                                <li>Senior (12–15 years)</li>
                                <li>Senior Plus (15–17 years)</li>
                              </ul>
                              <p>
                                Washrooms are also separated by gender and always nearby.
                              </p>
                              <p>
                                And the best part: Our teamers live right next door and are available around the clock!
                              </p>
                              <p>
                                <em>Good to know:</em><br />
                                For tents, you need a sleeping bag and sleeping mat. For fixed accommodations, bring a fitted sheet and either a sleeping bag or bedding, which you can rent if you wish.
                              </p>
                              <p>
                                All accommodation options can be selected during the booking process – secure your spot now!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Program */}
                    <div id="js-3_3" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Program
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="uk-grid tm-grid-expand uk-grid-margin" uk-grid="">
                          <div className="uk-width-1-3@m">
                            <div className="uk-margin">
                              <Image
                                src={getTemplateImageUrl("yootheme/cache/c3/02-Space-Exploration-Sommer-Camp-c32f2b6e.jpg")}
                                width={1080}
                                height={720}
                                className="el-image"
                                alt="Children creating a solar system model"
                                loading="lazy"
                              />
                            </div>
                            <div className="uk-margin">
                              <Image
                                src={getTemplateImageUrl("yootheme/cache/44/05-Walsrode-Kanu-44a26bc9.jpg")}
                                width={1080}
                                height={720}
                                className="el-image"
                                alt="Happy kids taking an underwater photo together"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="uk-width-2-3@m">
                            <div className="uk-panel uk-margin">
                              <h4>Space Explorer – Get Up Close to the Universe! 🚀✨</h4>
                              <p>
                                Over four afternoons, 2.5 hours each, it&apos;s all about space! Dive into the fascinating world of space exploration, conduct research, experiment, and uncover the mysteries of the universe.
                              </p>
                              <p>
                                <strong>Launch rockets & explore orbits:</strong> Build your own models, test rocket launches, and understand how communication works in space.<br />
                                <strong>Hands-on research</strong> – exciting experiments in chemistry, electricity & magnetism invite awe and discovery.<br />
                                <strong>Teamwork & creativity</strong> – an age-appropriate program that encourages collaboration and creative thinking.<br />
                                <strong>Developed by experts</strong> – created by Alessandro Ercolani (ESA) for a unique adventure full of knowledge and fun!
                              </p>
                              <p>
                                🚀 Blast off with our skilled teamers and fellow space enthusiasts! Put your knowledge into action, dive into exciting experiments, and boost your space and astronomy skills to new heights! 🔭🛰️
                              </p>
                              <p>
                                After your core activities, enjoy a range of thrilling leisure options:
                              </p>
                              <p>
                                🏹 Get active with archery, BMX biking, frisbee, and fun team challenges.<br />
                                🧗 Push your limits on the 20-meter high ropes course.<br />
                                🌊 Cool down with canoe trips, aqua fitness, and a ride on the legendary 85-meter water slide.<br />
                                🔥 Cozy up for campfire nights filled with music, stories, and talent shows under the stars.
                              </p>
                              <p>
                                <strong>Learn English naturally!</strong><br />
                                Our international counselors from the USA, Canada, and England bring authentic camp vibes. English flows effortlessly throughout your day—in workshops, outdoor adventures, and relaxing evenings by the fire.
                              </p>
                              <p>
                                <strong>Digital detox for real connections!</strong><br />
                                Phones are only allowed during siesta time, so you can fully enjoy genuine experiences, make new friends, and create unforgettable memories.
                              </p>
                              <p>
                                Get ready for unforgettable days in Walsrode and explore the amazing world of Space Exploration!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Meals and Snacks */}
                    <div id="js-3_4" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Meals and Snacks
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="uk-grid tm-grid-expand uk-grid-margin" uk-grid="">
                          <div className="uk-width-1-3@m">
                            <div className="uk-margin">
                              <Image
                                src={getTemplateImageUrl("yootheme/cache/fa/02-Sommercamp-Walsrode-Dining-Hall-inside-fa5687ee.jpg")}
                                width={1080}
                                height={720}
                                className="el-image"
                                alt="Children eating together in the camp dining hall"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="uk-width-2-3@m">
                            <div className="uk-panel uk-margin">
                              <h4>Delicious meals for every taste!</h4>
                              <p>
                                Enjoy three tasty and balanced meals a day – always fresh, always varied! With advance notice, we&apos;re happy to offer vegetarian, gluten-free, or lactose-free options, so there&apos;s something for everyone.
                              </p>
                              <p>
                                Your day begins with a generous breakfast buffet: fresh bread rolls, spreads, fruit, cereal, juices, and tea. For lunch and dinner, we serve warm meals along with a vibrant salad bar. Throughout the day, you&apos;ll find fresh fruit, a small afternoon snack, and plenty of water to keep you going strong.
                              </p>
                              <p>
                                The highlight? Everything is prepared fresh – no powdered soups, no boring basics. Just real food that&apos;s full of flavor and keeps your energy levels up!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Supervision and guidance */}
                    <div id="js-3_5" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Supervision and guidance
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="uk-grid tm-grid-expand uk-grid-margin" uk-grid="">
                          <div className="uk-width-1-3@m">
                            <div className="uk-margin">
                              <Image
                                src={getTemplateImageUrl("yootheme/cache/2e/Teamertraining_2017_60-2e2ec36d.jpg")}
                                width={1080}
                                height={720}
                                className="el-image"
                                alt="Camp counselors warmly welcoming children"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="uk-width-2-3@m">
                            <div className="uk-panel uk-margin">
                              <h4>Always here for you – day and night!</h4>
                              <p>
                                Our dedicated and friendly teamers are on hand 24/7 – full of energy, empathy, and always ready to help. Whether it&apos;s a quick question or something more serious, there&apos;s always someone to talk to.
                              </p>
                              <p>
                                What makes it extra special? Our international staff bring real camp spirit with them – and we communicate in both English and German!
                              </p>
                              <p>
                                That means you&apos;ll naturally switch between the two languages – whether you&apos;re playing sports, sitting by the campfire, or chatting during free time.<br />
                                We maintain a close supervision ratio of 1:7 to 1:10. With our all-day care and support, you&apos;re in safe hands every moment of your camp experience!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Arrival and departure */}
                    <div id="js-3_6" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Arrival and departure
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <h4>All roads lead to camp!</h4>
                          <p>
                            Whether by car, train, plane, or shuttle – your child will travel safely and comfortably. We take care of everything to ensure a smooth arrival!
                          </p>
                          <ul>
                            <li>
                              <em>Self-arrival:</em> Simply drop off and pick up your child yourself. You&apos;ll receive detailed directions via email about 6 weeks before camp starts – making your arrival stress-free.
                            </li>
                            <li>
                              <em>Shuttle service:</em> Since our adventure camps are often in remote areas, we&apos;re happy to offer shuttle transfers from nearby airports and train stations.
                            </li>
                          </ul>
                          <p>
                            Shuttles run only on Sundays for arrival and Saturdays for departure within specified time windows. Outside these times, you can book a private shuttle for an additional fee. Please contact us directly to arrange this.
                          </p>
                          <p>
                            <em>Airport Hamburg</em><br />
                            Arrival (landing): 10:00 – 15:00<br />
                            Meeting Point (McDonald&apos;s): 14:00<br />
                            Departure (take-off): 14:00 – 18:00<br />
                            Meeting Point (McDonald&apos;s): 12:30
                          </p>
                          <p>
                            <em>Airport Hanover</em><br />
                            Arrival (landing): 10:00 – 16:00<br />
                            Meeting Point (McDonald&apos;s): 15:30<br />
                            Departure (take-off): 13:00 – 18:00<br />
                            Meeting Point (McDonald&apos;s): 11:00
                          </p>
                          <p>
                            <em>Train Station Hanover</em><br />
                            Arrival: 14:00 – 16:00<br />
                            Meeting Point (McDonald&apos;s): 15:30<br />
                            Departure: 11:00 – 13:00<br />
                            Meeting Point (McDonald&apos;s): 10:30
                          </p>
                          <p>
                            You can select all available options during the booking process. <Link href="/info/arrival-departure" target="_blank" rel="noopener">Detailed transfer information is also available here.</Link>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Insurance */}
                    <div id="js-3_7" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Insurance
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <h4>Well insured for your adventure!</h4>
                          <p>
                            Whether it&apos;s minor mishaps or unexpected incidents – with our Camp Adventure insurance, you&apos;re fully protected throughout your trip.
                          </p>
                          <p>
                            <em><strong>Camp Adventure Insurance Package:</strong></em><br />
                            Liability, accident, and health insurance for the entire duration of your trip<br />
                            ✔ Coverage for accidents and doctor visits<br />
                            ✔ Protection against property damage<br />
                            Price: from USD45 per person per trip<br />
                            Valid from arrival to departure<br />
                            Only for international travel<br />
                            <em>⚠ Important:</em> Without international health insurance, medical costs must be paid privately. We recommend carrying a safety reserve of USD500 in cash or a credit card. Participants from outside the EU must provide proof of their own insurance before travel.
                          </p>
                          <p>
                            <em><strong>Camp Adventure Trip Cancellation Guarantee:</strong></em><br />
                            Our guarantee against homesickness, illness & more. Need to cancel your trip? No problem! With our cancellation guarantee, you&apos;ll receive a full refund of your Camp Adventure trip price – minus a deductible of USD50 (Germany) or USD100 (UK/Spain).<br />
                            ✔ Valid up to one day before departure<br />
                            ✔ Valid regardless of the reason: illness, accident, exams, or homesickness<br />
                            Price: USD45 (for 1-week stays) / USD85 (for multi-week stays)
                          </p>
                          <p>
                            All insurance options can be selected during the booking process.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Space Exploration Camp in Northern Germany */}
                    <div id="js-3_8" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Space Exploration Camp in Northern Germany
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <h4>Space Exploration – Your Adventure in Space! 🚀✨</h4>
                          <p>
                            Explore the mysteries of the universe and become a space expert!
                          </p>
                          <p>
                            Start your week full of fascinating discoveries about astronomy, rockets, and distant galaxies! Space Exploration is already preselected in the booking form – all that&apos;s left is to choose your accommodation and travel options.
                          </p>
                          <p>
                            Secure your spot now and blast off into the universe! 🌍🛰️ And if you want to explore even more, stay an extra week and try another exciting camp profile!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <style jsx>{`
                  .custom_acc_691a9cf7946c8 .uk-accordion-title * {
                    color: #000000 !important;
                  }
                  .custom_acc_691a9cf7946c8 .uk-accordion-title {
                    padding: 10px !important;
                    color: #000000 !important;
                    background: #ffffff !important;
                    border: 1px solid #ffaa00 !important;
                    position: relative;
                    padding-left: 60px !important;
                  }
                  .custom_acc_691a9cf7946c8 .uk-accordion-title::before {
                    display: block;
                    position: absolute;
                    left: 15px;
                    top: 50%;
                    transform: translateY(-50%);
                    content: "+";
                    font-size: 24px;
                    font-weight: bold;
                    color: #ffaa00;
                  }
                  .custom_acc_691a9cf7946c8 .uk-open > .uk-accordion-title::before {
                    content: "−";
                  }
                  .custom_acc_691a9cf7946c8 .uk-accordion-content {
                    padding: 15px !important;
                    background: #ffffff !important;
                    border: 1px solid #ffaa00 !important;
                    border-top: none !important;
                  }
                  .custom_acc_691a9cf7946c8 .uk-accordion-content * {
                    color: #000000 !important;
                  }
                `}</style>
              </div>
            </div>
            <div className="uk-width-1-3@m"></div>
          </div>
        </div>
      </div>

      {/* Content Section - Regen */}
      <div
        id="Regen"
        className="uk-section-default uk-section uk-padding-remove-bottom"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-grid-margin" uk-grid="">
            <div className="uk-grid-item-match uk-width-2-3@m">
              <div className="uk-card-default uk-card uk-card-body">
                <h2 className="uk-h2 uk-margin-remove-bottom uk-text-left">
                  <p>
                    Space Exploration Camp – Your Children&apos;s & Youth Trip
                    to the Universe in Southern Germany!
                  </p>
                </h2>
              <div className="uk-panel uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin">
                <p>
                    Fascinated by space? Then the Space Exploration Camp in Regen
                    is just right for you! Explore planets, experiment with
                    rocket engines, and discover what it&apos;s like to
                    experience space as an astronaut.
                  </p>
                  <p>
                    Learn, build, research! With hands-on projects, exciting
                    experiments, and real space challenges, you&apos;ll develop
                    your scientific thinking and push beyond your limits.
                  </p>
                  <p>
                    Science meets adventure! Surrounded by nature in the Bavarian
                    Forest, you&apos;ll combine research with teamwork and
                    explore the universe together with like-minded peers from
                    around the world – bilingual and interactive!
                </p>
                <p>
                    Get ready for your mission – Space Exploration is waiting for
                    you!
                  </p>
                </div>
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
                              "yootheme/cache/a6/03-Space-Exploration-Sommer-Camp-a612b34c.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Kids building a homemade rocket as part of the space camp activities for children"
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
                              "yootheme/cache/46/04-Space-Exploration-Sommer-Camp-46d37de3.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Starry night sky over the space exploration summer camp with campfire and glowing tent"
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
                              "yootheme/cache/d6/01-Regen-Sport-Camp-Location-d6d81402.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Aerial view of Sportcamp Regen with sports fields and scenic nature – active summer camp in the Bavarian Forest"
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
                              "yootheme/cache/fc/03-Regen-Sport-Camp-Bridge-fc7e5448.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Outdoor climbing and ziplining under a stone viaduct – thrilling activities at summer camp in the Bavarian Forest"
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
                              "yootheme/cache/8b/1_Adventure-Camp-Bayerischer-Wald-Location-8bc87db8.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Large group of teens socializing during meet-and-greet – community experience at Camp Adventure in the Bavarian Forest"
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
                              "yootheme/cache/de/2-Adventure-Camp-Bayerischer-Wald-Megaflo-dedb0c2c.jpg"
                            )}
                            width={1260}
                            height={837}
                            alt="Children paddling a canoe on the lake – exciting water sports at adventure camp"
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
                              "yootheme/cache/0c/1-Adventure-Camp-Bayerischer-Wald-Pool-0c86d060.jpg"
                            )}
                            width={1260}
                            height={837}
                            alt="Group of boys enjoying a giant water cushion at the outdoor pool – summer adventure at Camp Adventure youth camp"
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
                              "yootheme/cache/cd/02-Regen-Language-Camp-Kayak-cd591e8f.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Children on a canoeing trip through nature – outdoor language camp adventure with expert supervision in Regen"
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
                <div id="Accordion">
                  <div
                    uk-accordion="collapsible: false;"
                    id="js-4"
                    className="custom_acc_691a9cf799e26"
                  >
                    <div id="js-4_0" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          At a glance
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <ul>
                            <li>Space Exploration – 4 days × 2.5 hours</li>
                            <li>
                              Comprehensive space science developed by expert
                              Alessandro Ercolani (ESA)
                            </li>
                            <li>
                              Fascination of the universe: theory & practice
                            </li>
                            <li>For all levels & ages: 7–16 years</li>
                            <li>
                              Activity program alongside the main profile:
                              (day/evening) outdoor activities, sports,
                              creativity, campfire, disco & more
                            </li>
                            <li>
                              Cool trips & excursions for two-week stays:
                              overnight hike or Munich trip, both combined with
                              outdoor activities and swimming pool visits
                            </li>
                            <li>
                              Camp languages English/German: learn languages
                              naturally in an international atmosphere
                            </li>
                            <li>
                              Accommodation: tents, tiny houses, and log cabins
                            </li>
                            <li>
                              Full board for 7 days (Sun–Sat), 6 nights with
                              freshly prepared meals
                            </li>
                            <li>
                              24/7 all-round care: our teamers are always there
                              for you
                            </li>
                            <li>
                              Digital detox approach: phones and electronic
                              devices only allowed during siesta
                            </li>
                            <li>
                              Arrival & departure services: shuttle transfers
                              from train station/airport
                            </li>
                          </ul>
              </div>
            </div>
                    </div>
                  </div>
                </div>
                <style jsx>{`
                  .custom_acc_691a9cf799e26 .uk-accordion-title {
                    padding: 10px 15px;
                    background-color: #f8f8f8;
                    border-bottom: 1px solid #ddd;
                    cursor: pointer;
                  }
                  .custom_acc_691a9cf799e26 .uk-accordion-title:hover {
                    background-color: #e8e8e8;
                  }
                  .custom_acc_691a9cf799e26 .uk-accordion-content {
                    padding: 15px;
                  }
                `}</style>
              </div>
            </div>
            <div className="uk-width-1-3@m"></div>
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
                    src="https://www.bookacamp.de/en/booking/form/view-by-camp/ds7fdn347dsfndsf74n37en37en37dnd/spaceexplorationwal"
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
      <div className="uk-section-muted uk-section">
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

