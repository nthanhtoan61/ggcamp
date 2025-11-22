"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { getTemplateImageUrl } from "@/lib/assets";

export default function TennisPage() {
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
                  <p>Tennis Camp in Southern Germany in the Bavarian Forest</p>
                </h1>
                <div
                  className="uk-panel uk-text-lead uk-margin uk-text-left"
                  uk-scrollspy-class=""
                >
                  <p>
                    Improve your tennis skills with professional coaching!
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
                <p>7 - 17 years<br />Separated by age groups</p>
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
                <p>Tent & Cabin/House</p>
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
                <p>Around-the-Clock Care & All Meals Included</p>
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

      {/* Regen Section - Tennis Camp */}
      <div
        id="Regen"
        className="uk-section-default uk-section uk-padding-remove-bottom"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-grid-margin" uk-grid="">
            <div className="uk-grid-item-match uk-width-2-3@m">
              <div className="uk-card-default uk-card uk-card-body">
                <h2 className="uk-h2 uk-margin-remove-bottom uk-text-left">
                  <p>🎾 TENNIS CAMP - Sports Holidays</p>
                </h2>
                <div className="uk-panel uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin">
                  <p>
                    You love tennis and want to level up during the holidays?<br />
                    Then join the tennis camp in Regen – get ready for sports holidays full of fun, technique training, and team spirit!
                  </p>
                  <p>
                    You&apos;ll train on four tennis courts, enjoy varied game formats, exciting matches, and tons of good vibes – all professionally guided by experienced tennis coaches. Whether it&apos;s singles, doubles, basic strokes, or tactics: here you&apos;ll improve your skills, boost your confidence, and have even more fun on the court!
                  </p>
                  <p>👉 Sign up now and secure your spot – the rackets are waiting!</p>
                </div>
                <div
                  className="uk-slider-container uk-margin uk-text-center"
                  uk-slider="sets: 1; center: 1; velocity: 1; autoplay: 1;  autoplayInterval: 4000;"
                >
                  <div className="uk-position-relative">
                    <div className="uk-slider-items uk-grid">
                      <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                        <div className="el-item uk-inline-clip uk-transition-toggle" tabIndex={0}>
                          <Image
                            src={getTemplateImageUrl("yootheme/cache/b0/02-Tenniscamp-b091ba2a.jpg")}
                            width={1260}
                            height={840}
                            alt="Tennis coach teaches young girl correct racket grip during children's tennis camp training session"
                            loading="lazy"
                            className="el-image uk-transition-scale-up uk-transition-opaque"
                          />
                        </div>
                      </div>
                      <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                        <div className="el-item uk-inline-clip uk-transition-toggle" tabIndex={0}>
                          <Image
                            src={getTemplateImageUrl("yootheme/cache/fa/01-Tenniscamp-fa08cd5e.jpg")}
                            width={1260}
                            height={840}
                            alt="Child receives tennis coaching on clay court during kids' summer tennis camp with group training"
                            loading="lazy"
                            className="el-image uk-transition-scale-up uk-transition-opaque"
                          />
                        </div>
                      </div>
                      <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                        <div className="el-item uk-inline-clip uk-transition-toggle" tabIndex={0}>
                          <Image
                            src={getTemplateImageUrl("yootheme/cache/d6/01-Regen-Sport-Camp-Location-d6d81402.jpg")}
                            width={1260}
                            height={840}
                            alt="Aerial view of Sportcamp Regen with sports fields and scenic nature – active summer camp in the Bavarian Forest"
                            loading="lazy"
                            className="el-image uk-transition-scale-up uk-transition-opaque"
                          />
                        </div>
                      </div>
                      <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                        <div className="el-item uk-inline-clip uk-transition-toggle" tabIndex={0}>
                          <Image
                            src={getTemplateImageUrl("yootheme/cache/fc/03-Regen-Sport-Camp-Bridge-fc7e5448.jpg")}
                            width={1260}
                            height={840}
                            alt="Outdoor climbing and ziplining under a stone viaduct – thrilling activities at summer camp in the Bavarian Forest"
                            loading="lazy"
                            className="el-image uk-transition-scale-up uk-transition-opaque"
                          />
                        </div>
                      </div>
                      <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                        <div className="el-item uk-inline-clip uk-transition-toggle" tabIndex={0}>
                          <Image
                            src={getTemplateImageUrl("yootheme/cache/8b/1_Adventure-Camp-Bayerischer-Wald-Location-8bc87db8.jpg")}
                            width={1260}
                            height={840}
                            alt="Large group of teens socializing during meet-and-greet – community experience at Camp Adventure in the Bavarian Forest"
                            loading="lazy"
                            className="el-image uk-transition-scale-up uk-transition-opaque"
                          />
                        </div>
                      </div>
                      <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@m">
                        <div className="el-item uk-inline-clip uk-transition-toggle" tabIndex={0}>
                          <Image
                            src={getTemplateImageUrl("yootheme/cache/de/2-Adventure-Camp-Bayerischer-Wald-Megaflo-dedb0c2c.jpg")}
                            width={1260}
                            height={837}
                            alt="Children paddling a canoe on the lake – exciting water sports at adventure camp"
                            loading="lazy"
                            className="el-image uk-transition-scale-up uk-transition-opaque"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="uk-margin-top uk-visible@s" uk-inverse="">
                    <ul className="el-nav uk-slider-nav uk-dotnav uk-flex-center" uk-margin=""></ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="uk-grid-item-match uk-width-1-3@m">
              <div className="uk-card-default uk-card uk-card-body">
                <h3 className="uk-h3">Quick Facts</h3>
                <ul className="uk-list uk-list-divider">
                  <li>
                    <strong>Location:</strong> Bayerischer Wald (Regen)
                  </li>
                  <li>
                    <strong>Ages:</strong> 7 - 16 years
                  </li>
                  <li>
                    <strong>Price:</strong> from 395 USD
                  </li>
                  <li>
                    <strong>Duration:</strong> from 7 days
                  </li>
                </ul>
                <Link
                  href="/destinations/germany-adventure-camp-bayerischer-wald"
                  className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-top"
                >
                  View Location
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Accordion Section */}
        <div id="Accordion" className="uk-container uk-container-large uk-margin-large">
          <div
            uk-accordion="collapsible: false;"
            id="js-2"
            className="custom_acc_691a9cfc9d877"
          >
            {/* All you need to know */}
            <div id="js-2_0" className="el-item jp_">
              <a className="uk-accordion-title" href="#">
                <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                  All you need to know
                </h3>
              </a>
              <div className="uk-accordion-content uk-margin-remove-first-child">
                <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                  <ul>
                    <li>Tennis training 4 days × 2.5 hours each</li>
                    <li>For all levels / Ages: 7–16 years</li>
                    <li>Coaching with licensed trainers: Matches & game formats for every skill level</li>
                    <li>4 tennis courts with a stunning view of the Bavarian Alps</li>
                    <li>Individual support: Small groups for maximum training quality</li>
                    <li>Daily and evening activity program: Outdoor fun, sports, creativity, campfire, disco & more</li>
                    <li>Cool trips & excursions for two-week stays: Overnight hike under the stars or a day trip to Munich – both with outdoor adventures and swimming pool fun</li>
                    <li>Camp languages English/German: Learn new languages through play in an international environment</li>
                    <li>Accommodation: Tents, tiny houses, and log cabins</li>
                    <li>Full board for 7 days (Sun–Sat), 6 nights, with freshly prepared meals</li>
                    <li>24/7 all-around support: Our teamers are always there for you</li>
                    <li>Digital detox approach: Phones and devices only allowed during siesta</li>
                    <li>Arrival & departure services: Shuttles from train station/airport available</li>
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
                  <h4><strong>Welcome to Regen – Your Adventure in the Bavarian Forest!</strong></h4>
                  <p>
                    Our Camp Adventure in Regen is nestled in the heart of the Bavarian Forest, one of Southern Germany&apos;s most stunning natural paradises. Surrounded by forests, rolling hills, and crystal-clear rivers, it&apos;s the perfect place for outdoor adventures, creative activities, and language holidays.
                  </p>
                  <p>
                    <strong>Pure action & nature!</strong> Whether it&apos;s canoeing, kayaking, climbing, or team-building – you&apos;ll get your full dose of excitement here! In cooperation with the Bavarian Sports Association, we use top-class sports facilities on-site and nearby for even more sports and fun.<br />
                    <strong>International community & true camp spirit!</strong> Our bilingual teamers (English/German) create an inspiring and welcoming atmosphere.
                  </p>
                  <p>
                    Whether you&apos;re an outdoor enthusiast, sports lover, or language explorer – this is a next-level camp experience!<br />
                    We can&apos;t wait to see you!
                  </p>
                  <div className="uk-margin-top">
                    <Link href="/destinations/germany-adventure-camp-bayerischer-wald" className="uk-button uk-button-default">
                      Info - Location
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Accommodations */}
            <div id="js-2_2" className="el-item jp_">
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
                        src={getTemplateImageUrl("yootheme/cache/3e/6_Adventure-Camp-Bayerischer-Wald-tents-inside-3e7dc433.jpg")}
                        width={1080}
                        height={720}
                        className="el-image"
                        alt="Group of girls relaxing together inside their shared tent"
                        loading="lazy"
                      />
                    </div>
                    <div className="uk-margin">
                      <Image
                        src={getTemplateImageUrl("yootheme/cache/20/4_Adventure-Camp-Bayerischer-Wald-Tiny-house-inside-2065cae2.jpg")}
                        width={1080}
                        height={720}
                        className="el-image"
                        alt="Rustic tiny house with bunk beds"
                        loading="lazy"
                      />
                    </div>
                    <div className="uk-margin">
                      <Image
                        src={getTemplateImageUrl("yootheme/cache/a9/10-Regen-Sport-Camp-bungalow-a9bcb6e0.jpg")}
                        width={1080}
                        height={720}
                        className="el-image"
                        alt="Modern dormitory room with wooden bunk beds"
                        loading="lazy"
                      />
                    </div>
                    <div className="uk-margin">
                      <Image
                        src={getTemplateImageUrl("yootheme/cache/03/08-Regen-Sport-Camp-6-bed-room-03fec97a.jpg")}
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
                      <h4><strong>Stay in the Heart of Nature!</strong></h4>
                      <p>
                        At our international summer camp in Bavaria, you get to choose how you want to sleep: tent village, cozy tiny houses on the campground, or spacious lodges and shared rooms at the BLSV sports center – all depending on your sense of adventure!
                      </p>
                      <p>
                        <em>Tent Village – For those who love the real camp vibe!</em><br />
                        You&apos;ll sleep in 6- to 7-person tents with wooden floors and a loft-style platform.
                      </p>
                      <p>
                        <em>Tiny Houses & Cabins – Cozy & practical!</em><br />
                        Each tiny house or cabin comes with bunk beds, small lockers, and a table – space for up to 6 campers.
                      </p>
                      <p>
                        <em>Lodges & Shared Rooms at the BLSV Sport Camp</em><br />
                        Modern 2- to 6-bed rooms with bunk beds or spacious lodges with private bathrooms and a lounge area – perfect for groups of up to 12 campers!
                      </p>
                      <p>
                        Accommodations are divided by age group (Juniors 7–12 & Seniors 12–16) and gender. Our teamers live right next door and are available 24/7!
                      </p>
                      <p>
                        <em>Good to know:</em><br />
                        For tents, bring your own sleeping bag and sleeping mat.<br />
                        For the fixed accommodations, bring a fitted sheet and either a sleeping bag or bedding – both are available to rent if needed.
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
                <div className="uk-grid tm-grid-expand uk-grid-margin" uk-grid="">
                  <div className="uk-width-1-3@m">
                    <div className="uk-margin">
                      <Image
                        src={getTemplateImageUrl("yootheme/cache/68/03-Tenniscamp-680652ec.jpg")}
                        width={1080}
                        height={720}
                        className="el-image"
                        alt="Young tennis player practices forehand drills"
                        loading="lazy"
                      />
                    </div>
                    <div className="uk-margin">
                      <Image
                        src={getTemplateImageUrl("yootheme/cache/a6/03-Regen-Language-Camp-Team-a69f9ff1.jpg")}
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
                      <h4>🎾 Game, Set – Holiday Fun!</h4>
                      <p>
                        Four afternoons, each 2.5 hours fully focused on what you love most: tennis. Set in the stunning Bavarian mountains, this camp perfectly combines top-tier training with unforgettable experiences – professional, dynamic, and all about taking your game to the next level.
                      </p>
                      <p>
                        ✅ Training with licensed coaches<br />
                        Technique, tactics, rules & fitness – solid, personalized, and practical for real-life play
                      </p>
                      <p>
                        ✅ Varied game formats & matches<br />
                        Singles, doubles & team challenges – for fun, match experience, and real progress
                      </p>
                      <p>
                        ✅ Small groups, big impact<br />
                        Personalized coaching in a motivating and supportive camp atmosphere
                      </p>
                      <p>
                        Make your holiday unforgettable – with tennis, team spirit, and mountain views!<br />
                        Once your booked activity wraps up, the second part of the real Camp Adventure feeling begins: in the heart of the Bavarian Forest, you&apos;ll dive into exciting activities and pure nature.
                      </p>
                      <p>
                        🌟 What else awaits you:<br />
                        🏹 Action & sports: Archery, BMX, frisbee & team games<br />
                        🧗‍♂️ Reach new heights: Climb our 20-meter climbing wall<br />
                        🌊 Water fun: Canoe tours, aqua fitness & the 85-meter water slide<br />
                        🔥 Campfire evenings: Music, talent shows & real friendships
                      </p>
                      <p>
                        🇬🇧 English? Naturally!<br />
                        Our international team from Canada, the US & UK brings that authentic camp vibe. Whether it&apos;s during activities, workshops, or around the campfire – English becomes part of your day without pressure.
                      </p>
                      <p>
                        📵 Digital detox included<br />
                        Phones are only allowed during siesta – leaving more time for real experiences, great talks, and adventure.
                      </p>
                      <p>
                        👉 Secure your spot now and make your Sports Holidays 2025 active and unforgettable – with tennis, nature & international camp vibes!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Meals and Snacks */}
            <div id="js-2_4" className="el-item jp_">
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
                        src={getTemplateImageUrl("yootheme/cache/cd/05-Regen-Sport-Camp-Dining-Hall-Inside-cd176e60.jpg")}
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
                      <h4><strong>Food Everyone Will Love!</strong></h4>
                      <p>
                        Three meals a day – fresh, varied, and seriously delicious! Whether you&apos;re vegetarian, gluten-free, or lactose-free – just let us know in advance, and we&apos;ve got you covered.
                      </p>
                      <p>
                        Your day starts with a hearty breakfast buffet: fresh rolls, cold cuts, fruit, cereal, juice, and tea. Lunch and dinner usually feature hot meals and a colorful salad bar. In between, you can refuel with fresh fruit, an afternoon snack, and plenty of water – just what you need for all your adventures!
                      </p>
                      <p>
                        And the best part? We cook everything fresh! No instant soups, no boring meals – just good food that tastes great and keeps you energized!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Supervision and guidance */}
            <div id="js-2_5" className="el-item jp_">
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
                        src={getTemplateImageUrl("yootheme/cache/bb/10-Regen-Language-Camp-Scavenger-Hunt-bba624eb.jpg")}
                        width={1080}
                        height={720}
                        className="el-image"
                        alt="Group of kids with face paint participating in a fun team game"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="uk-width-2-3@m">
                    <div className="uk-panel uk-margin">
                      <h4><strong>Fully Supported – Around the Clock!</strong></h4>
                      <p>
                        Our experienced and caring teamers are there for you 24/7 – with fun, good vibes, and always a listening ear. Whether it&apos;s a small question or a big concern, you can count on them anytime.
                      </p>
                      <p>
                        The best part? Our counselors bring the real camp spirit from around the world – that&apos;s why we speak both English and German!<br />
                        You&apos;ll naturally pick up both languages throughout your day – during sports, around the campfire, or just in conversation.
                      </p>
                      <p>
                        Our supervision ratio is between 1:7 and 1:10. Thanks to our 24-hour all-inclusive care package, you&apos;re always in the best hands!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrival and departure */}
            <div id="js-2_6" className="el-item jp_">
              <a className="uk-accordion-title" href="#">
                <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                  Arrival and departure
                </h3>
              </a>
              <div className="uk-accordion-content uk-margin-remove-first-child">
                <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                  <h4>All Roads Lead to Camp!</h4>
                  <p>
                    Whether by car, train, plane, or shuttle – your child will arrive safely and stress-free. We make sure everything runs smoothly!
                  </p>
                  <p>
                    <em>Arrival by car:</em><br />
                    Simply drop off and pick up your child yourself. You&apos;ll receive detailed driving directions via info email about 6 weeks before camp starts – so nothing stands in the way of a relaxed arrival.
                  </p>
                  <p>
                    <em>Shuttle service:</em><br />
                    Since our adventure camps are often in remote areas, we&apos;re happy to shuttle your child from nearby airports (Munich) and train stations (Plattling).<br />
                    Shuttles run only on Sundays (arrival) and Saturdays (departure) within fixed time windows. Outside of these times, private shuttles can be arranged for an additional fee – just contact us directly.
                  </p>
                  <p>
                    <em>Munich Airport</em><br />
                    Arrival (landing): 10:00 – 15:00<br />
                    Meeting point (McDonald&apos;s): 15:00<br />
                    Departure (take-off): 12:00 – 16:00<br />
                    Meeting point (McDonald&apos;s): 10:00
                  </p>
                  <p>
                    <em>Plattling Train Station</em><br />
                    Arrival: 14:00 – 16:00<br />
                    Meeting point (platform 5): 15:30<br />
                    Departure: 10:00 – 12:00<br />
                    Meeting point (platform 5): 9:30
                  </p>
                  <p>
                    You can select your preferred travel option during the booking process. <Link href="/info/arrival-departure" target="_blank" rel="noopener">Detailed information on transfer options is also available here.</Link>
                  </p>
                </div>
              </div>
            </div>

            {/* Insurance */}
            <div id="js-2_7" className="el-item jp_">
              <a className="uk-accordion-title" href="#">
                <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                  Insurance
                </h3>
              </a>
              <div className="uk-accordion-content uk-margin-remove-first-child">
                <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                  <h4>Secure Your Adventure – With Peace of Mind!</h4>
                  <p>
                    From little mishaps to unexpected incidents – with our Camp Adventure insurance, you&apos;re fully protected throughout your trip.
                  </p>
                  <p>
                    <strong>Camp Adventure Insurance Package:</strong><br />
                    Liability, accident, and health insurance for the entire duration of the trip.<br />
                    ✔ Coverage for accidents & doctor visits<br />
                    ✔ Protection for damages to property<br />
                    💰 Price: from USD45 per person and trip<br />
                    📅 Valid from arrival to departure<br />
                    🌍 Available for international trips only
                  </p>
                  <p>
                    <em>⚠ Important:</em> Without international health insurance, medical costs must be paid out of pocket. We recommend bringing a safety reserve of USD500 in cash or a credit card. Participants from outside the EU must submit proof of their own insurance before departure.
                  </p>
                  <p>
                    <strong>Camp Adventure Trip Cancellation Guarantee:</strong><br />
                    Our safety net for homesickness, illness & more.<br />
                    Need to cancel your trip? No worries! With our cancellation guarantee, you&apos;ll get a full refund of the Camp Adventure trip price – minus a deductible of USD50 (Germany) or USD100 (UK/Spain).<br />
                    ✔ Valid up to one day before departure<br />
                    ✔ No matter the reason: illness, injury, exams, or homesickness<br />
                    💰 Price: USD45 (1-week stay) / USD85 (multi-week stay)
                  </p>
                  <p>
                    All insurance options can be selected during the booking process.
                  </p>
                </div>
              </div>
            </div>

            {/* Tenniscamp in Bavaria */}
            <div id="js-2_8" className="el-item jp_">
              <a className="uk-accordion-title" href="#">
                <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                  Tenniscamp in Bavaria
                </h3>
              </a>
              <div className="uk-accordion-content uk-margin-remove-first-child">
                <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                  <h4><strong>🎾 Tennis Camp in the Bavarian Forest – Take Your Game to the Next Level</strong></h4>
                  <p>
                    Sharpen your technique and enjoy varied match formats – all guided by experienced coaches.<br />
                    A full week of tennis, movement, and nature awaits you!
                  </p>
                  <p>
                    In the booking form, <em>Tennis Camp</em> is already preselected – all you need to do is choose your accommodation and travel options.
                  </p>
                  <p>
                    Secure your spot now and kick off your Sports Holidays 2025 with energy! 🎾🌲<br />
                    Want even more adventure? Stay for a second week and try out another exciting camp profile!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .custom_acc_691a9cfc9d877 .uk-accordion-title * {
            color: #000000 !important;
          }
          .custom_acc_691a9cfc9d877 .uk-accordion-title {
            padding: 10px !important;
            color: #000000 !important;
            background: #ffffff !important;
            border: 1px solid #ffaa00 !important;
            position: relative;
            padding-left: 60px !important;
          }
          .custom_acc_691a9cfc9d877 .uk-accordion-title::before {
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
          .custom_acc_691a9cfc9d877 .uk-open > .uk-accordion-title::before {
            content: "−";
          }
          .custom_acc_691a9cfc9d877 .uk-accordion-content {
            padding: 15px !important;
            background: #ffffff !important;
            border: 1px solid #ffaa00 !important;
            border-top: none !important;
          }
          .custom_acc_691a9cfc9d877 .uk-accordion-content * {
            color: #000000 !important;
          }
        `}</style>
      </div>

      {/* Content Section */}
      <div className="uk-section-muted uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h2 uk-text-center">Tennis Camps</h2>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
              <div className="uk-panel uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin">
                <p>
                  Our tennis camps offer professional coaching for players of all
                  levels. Improve your technique, learn new strategies, and enjoy
                  friendly matches with other campers.
                </p>
                <p>
                  With access to quality tennis courts and experienced coaches,
                  you&apos;ll develop your skills while having fun in a
                  supportive environment.
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
                <h3 className="uk-h3">Bayerischer Wald</h3>
                <p>
                  Tennis training at our camp in the Bavarian Forest with access
                  to professional tennis facilities.
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
                    src="https://www.bookacamp.de/en/booking/form/view-by-camp/ds7fdn347dsfndsf74n37en37en37dnd/tennisreg"
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

