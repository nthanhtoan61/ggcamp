"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { getTemplateImageUrl } from "@/lib/assets";

export default function SwimmingPage() {
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
              "yootheme/cache/8e/05-Sommercamp-Walsrode-Huts-8-beds-8ec9bcb0.jpg"
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
                  <p>Swimming Summer Camp in Germany</p>
                </h1>
                <div
                  className="uk-panel uk-text-lead uk-margin uk-text-left"
                  uk-scrollspy-class=""
                >
                  <p>
                    Learn to swim or improve your swimming skills in a fun and
                    safe environment!
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
                <p>Germany</p>
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
                  Ages 7–17 years
                  <br />
                  Grouped by age
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
                <p>Tents & Tiny Houses / Houses</p>
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
                <p>24/7 supervision + full board</p>
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
                  Bilingual
                  <br />
                  DE & EN
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Regen Section - International Swimming Camp */}
      <div
        id="Regen"
        className="uk-section-default uk-section uk-padding-remove-bottom"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-grid-item-match uk-width-1-1">
              <div className="uk-card-default uk-card uk-card-body">
                <h2 className="uk-h2 uk-margin-remove-bottom uk-text-left">
                  <p>
                    International Swimming Camp and Certificates in South
                    Germany
                  </p>
                </h2>
                <div className="uk-panel uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin">
                  <p>
                    Swimming Course – Summer Camp 2025 in the Bavarian Forest
                    <br />
                    Want to feel confident in the water and earn your
                    Seepferdchen (beginner swim badge)? This course is perfect
                    for you! Playfully learn the basics, get comfortable in the
                    water, and by the end of the week, earn your first swimming
                    badge.
                    <br />
                    Dive into your water adventure – we&apos;ll guide you step
                    by step! Train with international teamers, become part of a
                    big community, and enjoy loads of fun during swim training.
                    <br />
                    Learn to swim, feel safe, and experience unforgettable
                    holidays – bilingual and full of adventure!
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
                              "yootheme/cache/98/Schwimmen_camp-98f48b76.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Children learning to swim with instructors during beginner swimming camp in an indoor pool"
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
                            alt="Large group of teens socializing during meet-and-greet – community experience at Go and Grow Camp in the Bavarian Forest"
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
                            alt="Group of boys enjoying a giant water cushion at the outdoor pool – summer adventure at Go and Grow Camp youth camp"
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
                            alt="Children on a canoeing trip through nature – outdoor language Go and Grow Camp with expert supervision in Regen"
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
                    id="js-2"
                    className="custom_acc_691a9cfb485ab"
                  >
                    <div id="js-2_0" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          At a glance
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <ul>
                            <li>Swimming at 4 days, 2.5 hours each</li>
                            <li>
                              Swimming badges: Seepferdchen, Bronze, Silver
                              (basic swimming techniques, water confidence &
                              safety)
                            </li>
                            <li>
                              Of course, with support from our experienced swim
                              instructors!
                            </li>
                            <li>For all levels & age groups: 7–16 years</li>
                            <li>
                              Activity program alongside the main unit
                              (day/evening): outdoor activities, sports,
                              creativity, campfire, disco, and more
                            </li>
                            <li>
                              Cool trips & excursions for two-week stays: hiking
                              with overnight outdoor camping or a Munich trip,
                              both combined with outdoor activities and swimming
                              pool visits
                            </li>
                            <li>
                              Camp language English/German: learn language
                              playfully in an international atmosphere
                            </li>
                            <li>
                              Accommodation: tents, tiny houses, and log cabins
                            </li>
                            <li>
                              Full board 7 days (Sun–Sat), 6 nights, freshly
                              prepared meals
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
                              Arrival and departure services: shuttles from
                              train stations/airports
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Location */}
                    <div id="js-2_1" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Location
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="uk-panel uk-margin">
                          <h4>
                            Welcome to Regen – Your adventure in the Bavarian
                            Forest!
                          </h4>
                          <p>
                            Our Go and Grow Camp in Regen is located right in the
                            heart of the Bavarian Forest, one of southern
                            Germany&apos;s most beautiful natural paradises.
                            Surrounded by forests, hills, and crystal-clear
                            rivers, it&apos;s the perfect place for outdoor
                            adventures, creative activities, and language
                            learning holidays.
                          </p>
                          <p>
                            <strong>Pure action and nature!</strong> Whether
                            it&apos;s canoeing & kayaking, climbing, or team
                            building – you&apos;ll get the most out of every
                            moment! In cooperation with the Bavarian State
                            Sports Association, we use top-class sports
                            facilities on-site and nearby for even more sport
                            and fun.
                          </p>
                          <p>
                            <strong>
                              International community & camp spirit!
                            </strong>{" "}
                            Our bilingual teamers (English/German) create an
                            inspiring atmosphere.
                          </p>
                          <p>
                            Whether you&apos;re an outdoor enthusiast, sports
                            star, or language adventurer – here you&apos;ll
                            experience a first-class camp! We look forward to
                            welcoming you!
                          </p>
                          <div className="uk-margin-top">
                            <Link
                              href="/destinations/germany-adventure-camp-bayerischer-wald"
                              className="uk-button uk-button-default"
                            >
                              Info - Location
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Accommodation */}
                    <div id="js-2_2" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Accommodation
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div
                          className="uk-grid tm-grid-expand uk-grid-margin"
                          uk-grid=""
                        >
                          <div className="uk-width-1-3@m">
                            <div className="uk-margin">
                              <Image
                                src={getTemplateImageUrl(
                                  "yootheme/cache/3e/6_Adventure-Camp-Bayerischer-Wald-tents-inside-3e7dc433.jpg"
                                )}
                                width={1080}
                                height={720}
                                className="el-image"
                                alt="Group of girls relaxing together inside their shared tent"
                                loading="lazy"
                              />
                            </div>
                            <div className="uk-margin">
                              <Image
                                src={getTemplateImageUrl(
                                  "yootheme/cache/20/4_Adventure-Camp-Bayerischer-Wald-Tiny-house-inside-2065cae2.jpg"
                                )}
                                width={1080}
                                height={720}
                                className="el-image"
                                alt="Rustic tiny house with bunk beds"
                                loading="lazy"
                              />
                            </div>
                            <div className="uk-margin">
                              <Image
                                src={getTemplateImageUrl(
                                  "yootheme/cache/a9/10-Regen-Sport-Camp-bungalow-a9bcb6e0.jpg"
                                )}
                                width={1080}
                                height={720}
                                className="el-image"
                                alt="Modern dormitory room with wooden bunk beds"
                                loading="lazy"
                              />
                            </div>
                            <div className="uk-margin">
                              <Image
                                src={getTemplateImageUrl(
                                  "yootheme/cache/03/08-Regen-Sport-Camp-6-bed-room-03fec97a.jpg"
                                )}
                                width={1080}
                                height={720}
                                className="el-image"
                                alt="Cozy bungalow accommodation"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="uk-width-2-3@m">
                            <div className="uk-panel uk-margin">
                              <h4>Living right in nature!</h4>
                              <p>
                                At our international holiday camp in Bavaria,
                                you can choose how you want to sleep: tent
                                village, tiny houses at the campsite, or log
                                cabins & shared rooms on the BLSV grounds – all
                                according to your sense of adventure!
                              </p>
                              <p>
                                <strong>
                                  Tent Village – For those who love authentic
                                  camp vibes!
                                </strong>
                                <br />
                                Here, you sleep in six- to seven-person tents
                                with wooden floors and a loft.
                              </p>
                              <p>
                                <strong>
                                  Tiny Houses & Cabins – Cozy & practical!
                                </strong>
                                <br />
                                Each tiny house or cabin offers bunk beds, small
                                cupboards, and a small table – space for up to 6
                                campers.
                              </p>
                              <p>
                                <strong>
                                  Log Cabins & Shared Rooms at the BLSV Sports
                                  Camp
                                </strong>
                                <br />
                                Modern rooms with two to six beds and bunk beds,
                                or spacious log cabins with private bathrooms
                                and lounges – perfect for groups of up to 12
                                campers!
                              </p>
                              <p>
                                Accommodations are separated by gender and age
                                groups (Junior 7–12 & Senior 12–16 years). Our
                                teamers live right next door and are available
                                around the clock!
                                <br />
                                The washrooms are also separated by gender and
                                always nearby.
                              </p>
                              <p>
                                <em>Good to know:</em>
                                <br />
                                For tent stays, you&apos;ll need a sleeping bag
                                and sleeping mat. For solid accommodations,
                                please bring a fitted sheet with a sleeping bag
                                or bedding, which you can also rent from us if
                                you wish.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Program */}
                    <div id="js-2_3" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Program
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div
                          className="uk-grid tm-grid-expand uk-grid-margin"
                          uk-grid=""
                        >
                          <div className="uk-width-1-3@m">
                            <div className="uk-margin">
                              <Image
                                src={getTemplateImageUrl(
                                  "yootheme/cache/2d/reg_ausfluege_pools-2d27ccda.jpg"
                                )}
                                width={798}
                                height={600}
                                className="el-image"
                                alt="Happy kids taking an underwater photo together"
                                loading="lazy"
                              />
                            </div>
                            <div className="uk-margin">
                              <Image
                                src={getTemplateImageUrl(
                                  "yootheme/cache/a6/03-Regen-Language-Camp-Team-a69f9ff1.jpg"
                                )}
                                width={1080}
                                height={718}
                                className="el-image"
                                alt="Group of children with paddles getting ready for canoe adventure"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="uk-width-2-3@m">
                            <div className="uk-panel uk-margin">
                              <h4>
                                Learn to swim or perfect your skills – you
                                decide! 🏊‍♂️💦🌞
                              </h4>
                              <p>
                                Whether it&apos;s your Seepferdchen (beginner)
                                badge or Bronze/Silver levels, this is your
                                moment to shine!
                              </p>
                              <p>
                                In four intensive days of 2.5 hours each,
                                you&apos;ll either start fresh or take your
                                skills to the next level!
                              </p>
                              <p>
                                <strong>For beginners:</strong> Playfully learn
                                the basics, get comfortable in the water, and
                                prepare for your Seepferdchen badge.
                                <br />
                                <strong>For advanced swimmers:</strong> Focus on
                                technique, endurance, and safety with the goal
                                of earning your Bronze or Silver badge!
                              </p>
                              <p>
                                ✔ Swim efficiently & build stamina
                                <br />
                                ✔ Diving, jumping & rescue techniques
                                <br />
                                ✔ Individual support from experienced teamers
                                <br />✔ Badge exams at the end of the week!
                              </p>
                              <p>
                                With lots of fun, team spirit, and motivation,
                                our teamers will push you to new personal bests
                                – physically, mentally, and with tons of water
                                joy!
                              </p>
                              <p>
                                <strong>
                                  Water fun meets nature & creativity
                                </strong>
                                <br />
                                After swim training, the real Go and Grow Camp
                                begins: surrounded by the Bavarian Forest,
                                unleash your creativity with natural materials,
                                colors, and exciting techniques. Plus, enjoy
                                action-packed leisure activities:
                              </p>
                              <p>
                                🏹 Action & sports: archery, BMX, frisbee & team
                                games
                                <br />
                                🧗‍♂️ Climbing fun: our 20-meter climbing wall
                                awaits!
                                <br />
                                🌊 Water adventures: canoe trips, aqua fitness &
                                an 85-meter slide
                                <br />
                                🔥 Campfire vibes: music, talent shows & stories
                                under the starry sky
                              </p>
                              <p>
                                <strong>English, naturally!</strong>
                                <br />
                                Our international team from Canada, the USA, and
                                England brings authentic camp spirit – and
                                you&apos;ll improve your English effortlessly
                                through daily life, workshops, and tons of fun.
                              </p>
                              <p>
                                <strong>
                                  Digital detox – experience more, scroll less
                                </strong>
                                <br />
                                Phones are only allowed during siesta – the rest
                                of the day is for adventures, new friendships,
                                and plenty of camp magic!
                              </p>
                              <p>
                                🔥 Join us and experience unforgettable summer
                                holidays in Regen – with swim power, creativity
                                & international team spirit!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Meals */}
                    <div id="js-2_4" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Meals
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div
                          className="uk-grid tm-grid-expand uk-grid-margin"
                          uk-grid=""
                        >
                          <div className="uk-width-1-3@m">
                            <div className="uk-margin">
                              <Image
                                src={getTemplateImageUrl(
                                  "yootheme/cache/cd/05-Regen-Sport-Camp-Dining-Hall-Inside-cd176e60.jpg"
                                )}
                                width={1080}
                                height={810}
                                className="el-image"
                                alt="Spacious summer camp dining hall"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="uk-width-2-3@m">
                            <div className="uk-panel uk-margin">
                              <h4>
                                <strong>Food Everyone Will Love!</strong>
                              </h4>
                              <p>
                                Three meals a day – fresh, varied, and seriously
                                delicious! Whether you&apos;re vegetarian,
                                gluten-free, or lactose-free – just let us know
                                in advance, and we&apos;ve got you covered.
                              </p>
                              <p>
                                Your day starts with a hearty breakfast buffet:
                                fresh rolls, cold cuts, fruit, cereal, juice,
                                and tea. Lunch and dinner usually feature hot
                                meals and a colorful salad bar. In between, you
                                can refuel with fresh fruit, an afternoon snack,
                                and plenty of water – just what you need for all
                                your adventures!
                              </p>
                              <p>
                                And the best part? We cook everything fresh! No
                                instant soups, no boring meals – just good food
                                that tastes great and keeps you energized!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Supervision */}
                    <div id="js-2_5" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Supervision
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div
                          className="uk-grid tm-grid-expand uk-grid-margin"
                          uk-grid=""
                        >
                          <div className="uk-width-1-3@m">
                            <div className="uk-margin">
                              <Image
                                src={getTemplateImageUrl(
                                  "yootheme/cache/d6/reg_profil_schwimmen_anfnger-d6b10c92.jpg"
                                )}
                                width={1080}
                                height={810}
                                className="el-image"
                                alt="Kids and camp counselors enjoying a sunny day at the outdoor pool"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="uk-width-2-3@m">
                            <div className="uk-panel uk-margin">
                              <h4>Completely cared for!</h4>
                              <p>
                                Our experienced and trained teamers are there
                                for you around the clock – with fun, good
                                spirits, and always a listening ear. Whether you
                                have small questions or big worries, you can
                                reach out to them anytime.
                              </p>
                              <p>
                                The best part? Our teamers bring authentic camp
                                spirit from all over the world – that&apos;s why
                                we speak both English and German!
                                <br />
                                This way, you naturally immerse yourself in both
                                languages – during sports, around the campfire,
                                or just chatting. Our supervision ratio is
                                between 1:7 and 1:10. Thanks to our 24-hour
                                all-round care package, you&apos;re always in
                                the best hands!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Arrival & departure */}
                    <div id="js-2_6" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Arrival & departure
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <h4>All roads lead to camp!</h4>
                          <p>
                            Whether by car, train, plane, or shuttle, your child
                            will arrive safely and relaxed. We take care to
                            ensure everything runs smoothly!
                          </p>
                          <ul>
                            <li>
                              Self-arrival: Simply drop off and pick up
                              yourself. You will receive detailed directions by
                              email 6 weeks before camp starts — so your journey
                              will be stress-free.
                            </li>
                            <li>
                              Shuttle service: Since our adventure camps are
                              usually in remote locations, we gladly shuttle you
                              from nearby airports (Munich) and train stations
                              (Plattling).
                            </li>
                          </ul>
                          <p>
                            Shuttles run only on Sundays for arrival and
                            Saturdays for departure within set time windows.
                            Outside these times, you can book a private shuttle
                            for an additional fee. Please contact us
                            individually for arrangements.
                          </p>
                          <p>
                            <em>Munich Airport</em>
                            <br />
                            Arrival (landing): 10:00 – 15:00
                            <br />
                            Meeting point (McDonald&apos;s): 15:00
                            <br />
                            Departure (take-off): 12:00 – 16:00
                            <br />
                            Meeting point (McDonald&apos;s): 10:00
                          </p>
                          <p>
                            <em>Plattling Train Station</em>
                            <br />
                            Arrival: 14:00 – 16:00
                            <br />
                            Meeting point (platform 5): 15:30
                            <br />
                            Departure: 10:00 – 12:00
                            <br />
                            Meeting point (platform 5): 9:30
                          </p>
                          <p>
                            You can select all available options during the
                            booking process. Detailed transfer information is
                            also available here.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div id="js-2_7" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Insurance
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <h4>Well protected for your adventure!</h4>
                          <p>
                            Whether small mishaps or unexpected incidents — with
                            our Go and Grow Camp insurance, you&apos;re fully
                            covered.
                          </p>
                          <p>
                            <em>Go and Grow Camp Insurance Package:</em>
                            <br />
                            Liability, accident, and health insurance for the
                            entire trip duration.
                            <br />
                            ✔ Coverage for accidents & doctor visits
                            <br />
                            ✔ Protection against damage to property
                            <br />
                            💰 Price: from USD45 per person per trip
                            <br />
                            📅 Valid from arrival to departure
                            <br />
                            🌍 Only valid for trips abroad
                            <br />
                            <em>⚠ Important note:</em> Without foreign insurance
                            coverage, medical costs must be paid out of pocket.
                            We recommend carrying a safety reserve of USD500 in
                            cash or a credit card. Participants outside the EU
                            must provide proof of their own insurance before
                            departure.
                          </p>
                          <p>
                            <em>Go and Grow Camp Cancellation Guarantee:</em>
                            <br />
                            Our guarantee against homesickness, illness & more.
                            Need to cancel your trip? No problem! With our
                            cancellation guarantee, you&apos;ll receive a full
                            refund of the Go and Grow Camp price — minus a
                            deductible of USD50 (Germany) or USD100
                            (England/Spain).
                            <br />
                            ✔ Valid until one day before departure
                            <br />
                            ✔ Covers any reason: illness, accident, exams, or
                            homesickness
                            <br />
                            💰 Price: USD45 (for one-week stays) / USD85 (for
                            multi-week stays)
                          </p>
                          <p>
                            All insurance options can be selected during the
                            booking process.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div id="js-2_8" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Booking information
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <h4>
                            Your swimming adventure in the Bavarian Forest!
                          </h4>
                          <p>
                            Start your week full of water fun at our Camp
                            Adventure in the Bavarian Forest! Swimming is
                            already preselected in the booking form — you just
                            need to add your accommodation, arrival, and
                            departure details.
                          </p>
                          <p>
                            Secure your spot now and dive into your next
                            adventure!
                            <br />
                            And if you want to explore even more, stay an extra
                            week and try another exciting camp profile!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <style
                  dangerouslySetInnerHTML={{
                    __html: `
                    .custom_acc_691a9cfb485ab .uk-accordion-title * {
                      color: #000000 !important;
                    }
                    .custom_acc_691a9cfb485ab .uk-accordion-title {
                      padding: 10px !important;
                      color: #000000 !important;
                      background: #FFFFFF !important;
                      border: 1px solid #FFAA00 !important;
                      position: relative;
                      padding-left: 60px !important;
                    }
                    .custom_acc_691a9cfb485ab .uk-accordion-title::before {
                      display: block;
                      position: absolute;
                      top: 0;
                      bottom: 0;
                      background-color: #FFAA00 !important;
                      background-size: 30px !important;
                      margin-left: 0px;
                      background-repeat: repeat;
                      width: 50px;
                      height: 100%;
                      background-repeat: no-repeat;
                      background-position: center center;
                      left: 0;
                      margin-right: 15px;
                      margin-left: 0px;
                      content: "+";
                      color: white;
                      font-size: 24px;
                      font-weight: bold;
                      text-align: center;
                      line-height: 1;
                    }
                    .custom_acc_691a9cfb485ab .uk-open > .uk-accordion-title::before {
                      content: "−";
                    }
                    .custom_acc_691a9cfb485ab .uk-accordion-content {
                      border: 1px solid #FFAA00 !important;
                      background: #ffffff !important;
                      padding: 15px !important;
                      margin-top: 15px !important;
                    }
                    .custom_acc_691a9cfb485ab > :nth-child(n+2) {
                      border: unset !important;
                      box-shadow: unset !important;
                    }
                  `,
                  }}
                />
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
              <h2 className="uk-h2 uk-text-center">Swimming Camps</h2>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
              <div className="uk-panel uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin">
                <p>
                  Our swimming camps offer professional swimming instruction for
                  all levels, from complete beginners to advanced swimmers.
                  Learn proper techniques, water safety, and build confidence in
                  the water.
                </p>
                <p>
                  We offer both beginner swimming courses and advanced training
                  in our swimming facilities, including lakes and pools.
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
              <div
                className="uk-grid uk-child-width-1-1 uk-child-width-1-2@m uk-grid-match"
                uk-grid=""
              >
                <div>
                  <div className="uk-card uk-card-default uk-card-body">
                    <h3 className="uk-h3">Lüneburger Heide</h3>
                    <p>
                      Swimming courses at our camp in Lüneburger Heide with
                      access to swimming lakes.
                    </p>
                    <Link
                      href="/destinations/germany-lueneburger-heide"
                      className="uk-button uk-button-primary"
                    >
                      View Location
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="uk-card uk-card-default uk-card-body">
                    <h3 className="uk-h3">Bayerischer Wald</h3>
                    <p>
                      Swimming instruction in the beautiful Bavarian Forest
                      setting.
                    </p>
                    <Link
                      href="/destinations/germany-adventure-camp-bayerischer-wald"
                      className="uk-button uk-button-primary"
                    >
                      View Location
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      {/* <div className="uk-section-muted uk-section">
        <div
          className="uk-container uk-container-large"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin"
            style={{ width: "100%", maxWidth: "1200px" }}
          >
            <div className="uk-width-1-1@m">
              <h2 className="uk-h2 uk-text-center">Booking</h2>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
              <div className="uk-panel uk-margin">
                <div
                  style={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <iframe
                    src="https://www.bookacamp.de/en/booking/form/view-by-camp/ds7fdn347dsfndsf74n37en37en37dnd/swimmingbegreg"
                    title="Bookacamp, die Buchungsplattform von Go and Grow Camp"
                    allowFullScreen={true}
                    width="1000"
                    height="1500"
                    frameBorder="0"
                    allowFullScreen={true}
                    style={{ margin: "0 auto" }}
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
                    The Swimming Camp exceeded all our expectations! Our
                    daughter not only improved her swimming technique but also
                    earned her certificate. The instructors were professional
                    and supportive, and the camp atmosphere was wonderful. She
                    made great friends and can&apos;t wait to return!
                  </p>
                  <footer className="el-footer">
                    <cite className="el-author">
                      <a
                        href="https://maps.app.goo.gl/FdniYSE33xQapbBs5"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Julia M. auf Google
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
