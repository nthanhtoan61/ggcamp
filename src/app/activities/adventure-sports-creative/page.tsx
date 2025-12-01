"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { getTemplateImageUrl } from "@/lib/assets";

export default function AdventureSportsCreativePage() {
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
              "yootheme/cache/04/01-Abenteuercamp-Bogenschieen-044ac9af.jpg"
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
                  <p>Adventure, Sports & Creative Camps in Germany</p>
                </h1>
              </div>
            </div>
            <div className="uk-grid tm-grid-expand uk-grid-margin" uk-grid="">
              <div className="uk-width-1-2@m">
                <div className="uk-margin uk-text-left" uk-scrollspy-class="">
                  <a
                    className="el-content uk-button uk-button-primary uk-button-small uk-flex-inline uk-flex-center uk-flex-middle"
                    href="#Walsrode"
                    uk-scroll=""
                  >
                    <span
                      className="uk-margin-small-right"
                      uk-icon="location"
                    ></span>
                    Lüneburger Heide - from 435 USD
                  </a>
                </div>
                <div className="uk-margin uk-text-left" uk-scrollspy-class="">
                  <a
                    className="el-content uk-button uk-button-primary uk-button-small uk-flex-inline uk-flex-center uk-flex-middle"
                    href="#Regen"
                    uk-scroll=""
                  >
                    <span
                      className="uk-margin-small-right"
                      uk-icon="location"
                    ></span>
                    Bayerischer Wald - from 395 USD
                  </a>
                </div>
                <div className="uk-margin uk-text-left" uk-scrollspy-class="">
                  <a
                    className="el-content uk-button uk-button-default uk-button-small uk-flex-inline uk-flex-center uk-flex-middle"
                    href="#Start"
                    uk-scroll=""
                  >
                    <span
                      className="uk-margin-small-right"
                      uk-icon="crosshairs"
                    ></span>
                    Spring, Summer, Fall
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Basic Info Section */}
      <div
        id="Start"
        className="uk-section-default uk-section uk-padding-remove-bottom"
      >
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
                <p>
                  Bilingual
                  <br />
                  GER & EN
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lüneburger Heide Section */}
      <div
        id="Walsrode"
        className="uk-section-default uk-section uk-padding-remove-bottom"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-grid-margin" uk-grid="">
            <div className="uk-grid-item-match uk-width-2-3@m">
              <div className="uk-card-default uk-card uk-card-body">
                <h2 className="uk-h2">
                  Adventure Camp Lüneburger Heath – An Action-Packed Summer!
                </h2>
                <div className="uk-panel uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin">
                  <p>
                    Adventure Camp Lüneburger Heide – An Action-Packed Summer
                    2026!
                    <br />
                    Make international friends, explore nature, and discover new
                    talents! Our Adventure Camp in the Lüneburger Heide is the
                    perfect choice for kids and teens who love movement,
                    creativity, and outdoor fun.
                  </p>
                  <p>
                    Climbing, team challenges, sports, and creative workshops –
                    this well-rounded base program is included in every camp
                    without a specific focus like horseback riding or survival
                    training. It&apos;s the ideal option for anyone who wants a
                    bit of everything!
                  </p>
                  <p>
                    Most campers fall in love at first sight – will you be next?
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
                              "yootheme/cache/04/01-Abenteuercamp-Bogenschieen-044ac9af.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Child practicing archery in a forest setting – action-packed adventure camp in Walsrode"
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
                    </div>
                  </div>
                  <div className="uk-margin-top" uk-inverse="">
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
                    className="custom_acc_691a9ce46701a"
                  >
                    <div id="js-3_0" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          At a Glance
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <ul style={{ listStyleType: "disc" }}>
                            <li>
                              <strong>Adventure, Sports & Creativity:</strong> 4
                              days of 2.5-hour profile session
                            </li>
                            <li>
                              <strong>For all levels & ages:</strong> 7-17 year
                            </li>
                            <li>
                              <strong>
                                Activity program beyond the profile sessions
                                (day/evening):
                              </strong>{" "}
                              Outdoor, sports & creativity, campfire, disco, and
                              more
                            </li>
                            <li>
                              <strong>
                                Cool trips & excursions (for two-week stays):
                              </strong>{" "}
                              Overnight hike, swimming pool, Heide Park &
                              Hamburg trip
                            </li>
                            <li>
                              <strong>Camp language:</strong> English/German –
                              Learn the language naturally in an international
                              atmosphere
                            </li>
                            <li>
                              <strong>Accommodation:</strong> Tents & cabins
                            </li>
                            <li>
                              Full board (7 days, Sun-Sat), 6 nights, freshly
                              prepared meals
                            </li>
                            <li>
                              <strong>24/7 all-around care:</strong> Our teamers
                              are always there for you
                            </li>
                            <li>
                              <strong>Digital Detox approach:</strong> Phones &
                              electronic devices only during siesta
                            </li>
                            <li>
                              <strong>Arrival & departure services:</strong>{" "}
                              Shuttle service from train station/airport
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div id="js-3_1" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Location
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div
                          id="jp_accordation_section_691a9ce46753e"
                          className="jp_section_content"
                        >
                          <div className="uk-container">
                            <div
                              className="uk-grid tm-grid-expand uk-grid-margin"
                              uk-grid=""
                            >
                              <div className="uk-width-1-2@m">
                                <div
                                  className="uk-position-relative uk-position-z-index uk-dark uk-margin"
                                  style={{ minHeight: "50vh" }}
                                  uk-map=""
                                  data-map-type="leaflet"
                                >
                                  <script
                                    type="application/json"
                                    dangerouslySetInnerHTML={{
                                      __html: JSON.stringify({
                                        markers: [
                                          {
                                            lat: 52.8482,
                                            lng: 9.4721,
                                            title: "Lüneburger Heide",
                                            show_popup: true,
                                          },
                                        ],
                                        controls: true,
                                        dragging: true,
                                        max_zoom: "18",
                                        min_zoom: "0",
                                        poi: false,
                                        type: "roadmap",
                                        zoom: "5",
                                        zooming: false,
                                        center: { lat: 52.8482, lng: 9.4721 },
                                        lazyload: true,
                                        library: "leaflet",
                                        baseUrl:
                                          "/templates/yootheme/vendor/assets/leaflet/leaflet/dist",
                                      }),
                                    }}
                                  />
                                  <div className="el-item uk-text-default uk-font-default uk-margin-remove-first-child">
                                    <h3 className="el-title uk-margin-top uk-margin-remove-bottom">
                                      Lüneburger Heide
                                    </h3>
                                    <div className="uk-margin-top">
                                      <Link
                                        href="/destinations/germany-lueneburger-heide"
                                        target="_blank"
                                        className="el-link uk-button uk-button-default"
                                      >
                                        Info - Location
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="uk-width-1-2@m">
                                <div className="uk-panel uk-margin">
                                  <h4>
                                    Welcome to Walsrode – Your Adventure in the
                                    Lüneburger Heide!
                                  </h4>
                                  <p>
                                    Our Go and Grow Camp (Academy) in Walsrode is
                                    set in the beautiful Lüneburger Heide, right
                                    between Bremen, Hamburg, and Hanover. Just a
                                    short walk away, you&apos;ll find a charming
                                    northern German village with traditional
                                    farms and timber-framed houses – the perfect
                                    setting for an unforgettable mix of
                                    adventure, sports, and creativity in
                                    northern Germany.
                                  </p>
                                  <p>
                                    Over 150,000 m² of Pure Adventure!
                                    <br />
                                    Our spacious campgrounds are divided into
                                    three exciting zones: Beach &amp; Water,
                                    Survival, and Creative. Go kayaking, bounce
                                    on a water trampoline, build rafts, make
                                    fires, or climb through the high ropes
                                    course – there&apos;s non-stop action every
                                    day!
                                  </p>
                                  <p>
                                    International Vibes &amp; Real Camp Spirit!
                                    <br />
                                    Our camp is bilingual (English &amp; German)
                                    – meet campers from all over the world and
                                    improve your English naturally as you go!
                                  </p>
                                  <p>
                                    Whether you&apos;re a language lover,
                                    outdoor explorer, or creative soul –
                                    discover all the profiles and activities
                                    that make your camp experience
                                    one-of-a-kind.
                                    <br />
                                    We can&apos;t wait to meet you!
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="js-3_2" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Accommodation Options
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div
                          id="jp_accordation_section_691a9ce467616"
                          className="jp_section_content"
                        >
                          <div className="uk-container">
                            <div
                              className="uk-grid tm-grid-expand uk-grid-margin"
                              uk-grid=""
                            >
                              <div className="uk-width-1-3@m">
                                <div className="uk-margin">
                                  <Image
                                    src={getTemplateImageUrl(
                                      "yootheme/cache/1e/08-Sommercamp-Walsrode-tents-inside-1e26262a.jpg"
                                    )}
                                    width={1080}
                                    height={720}
                                    alt="Smiling boys sitting inside a shared camp tent – outdoor adventure vacation for kids in Walsrode summer camp"
                                    loading="lazy"
                                    className="el-image"
                                  />
                                </div>
                                <div className="uk-margin">
                                  <Image
                                    src={getTemplateImageUrl(
                                      "yootheme/cache/b6/05-Sommercamp-Walsrode-Huts-8-beds-b69c257e.jpg"
                                    )}
                                    width={1080}
                                    height={720}
                                    alt="Cozy wooden cabin with bunk beds – child-friendly accommodation at summer camp in Walsrode"
                                    loading="lazy"
                                    className="el-image"
                                  />
                                </div>
                              </div>
                              <div className="uk-width-2-3@m">
                                <div className="uk-panel uk-margin">
                                  <h4>Camp Life – Like a Little Village!</h4>
                                  <p>
                                    At our international summer camp in Lower
                                    Saxony, you can choose between our cozy tent
                                    village or the comfy Adventure Lodges – it
                                    all depends on your sense of adventure!
                                    <br />
                                    🏕️ Tent Village: Spacious tents for 6–7
                                    campers with wooden floors and a loft area –
                                    the ultimate outdoor experience under the
                                    stars.
                                    <br />
                                    🏡 Adventure Lodges: Comfortable cabins with
                                    4–8 beds, storage shelves, and seating
                                    areas.
                                    <em>
                                      {" "}
                                      (Please note: staying in a lodge comes at
                                      an extra charge.)
                                      <br />
                                    </em>
                                    Accommodations are separated by gender, so
                                    girls and boys stay in their own tents or
                                    lodges. We also organize by age group to
                                    make sure everyone feels right at home:
                                  </p>
                                  <ul>
                                    <li>Junior (7–12 years)</li>
                                    <li>Senior (12–15 years)</li>
                                    <li>Senior Plus (15–17 years)</li>
                                  </ul>
                                  <p>
                                    Restroom and shower facilities are also
                                    separated by gender and always close by.
                                    <br />
                                    Best of all: Our teamers live right next
                                    door – they&apos;re available for you 24/7!
                                    <br />
                                    Good to know:
                                    <br />
                                    For tents, bring your own sleeping bag and
                                    sleeping mat.
                                    <br />
                                    For lodges, bring a fitted sheet and either
                                    a sleeping bag or bedding set (available for
                                    rent if needed).
                                    <br />
                                    You can choose your preferred accommodation
                                    during the booking process – secure your
                                    spot now!
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="js-3_3" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Program
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div
                          id="jp_accordation_section_691a9ce46771a"
                          className="jp_section_content"
                        >
                          <div className="uk-container">
                            <div
                              className="uk-grid tm-grid-expand uk-grid-margin"
                              uk-grid=""
                            >
                              <div className="uk-width-1-3@m">
                                <div className="uk-margin">
                                  <Image
                                    src={getTemplateImageUrl(
                                      "yootheme/cache/56/12-Abenteuercamp-Creative-561e41c7.jpg"
                                    )}
                                    width={1080}
                                    height={810}
                                    alt="Group of girls painting and crafting in a creative workshop – artistic holiday fun at Walsrode summer camp"
                                    loading="lazy"
                                    className="el-image"
                                  />
                                </div>
                                <div className="uk-margin">
                                  <Image
                                    src={getTemplateImageUrl(
                                      "yootheme/cache/7e/10-Abenteuercamp-Climbing-Tree-7e2c8878.jpg"
                                    )}
                                    width={1080}
                                    height={717}
                                    alt="Kids climbing safely on a log in the high ropes course – nature and adventure experience at Walsrode adventure camp"
                                    loading="lazy"
                                    className="el-image"
                                  />
                                </div>
                              </div>
                              <div className="uk-width-2-3@m">
                                <div className="uk-panel uk-margin">
                                  <h4>
                                    A Full Day of Adventure, Sports &amp;
                                    Creativity!
                                  </h4>
                                  <p>
                                    &quot;Adventure, Sports &amp;
                                    Creativity&quot; is the base program at our
                                    Lüneburger Heide Camp – no extra booking
                                    needed! If you don&apos;t choose an
                                    additional profile like Horseback Riding or
                                    Survival, this is your go-to for an
                                    action-packed and varied camp experience.
                                  </p>
                                  <p>
                                    Every morning, you get to pick a new
                                    exciting activity – whatever you&apos;re in
                                    the mood for!
                                  </p>
                                  <p>
                                    ⛺ Outdoor Action &amp; Adventure: High
                                    ropes course, archery, raft building, or
                                    survival training – challenge your limits!
                                    <br />⚽ Sports &amp; Movement: Soccer,
                                    volleyball, basketball, or splashing around
                                    in the lake – get moving and have fun!
                                    <br />
                                    🎨 Creativity &amp; Chill: Crafts, painting,
                                    reading, or baking – perfect for relaxing
                                    moments at camp.
                                  </p>
                                  <p>
                                    Learn English – Without Even Trying!
                                    <br />
                                    Our international team brings the real camp
                                    spirit – full of energy, adventure, and fun.
                                    And the best part? English becomes a natural
                                    part of the day – whether you&apos;re
                                    playing sports, doing creative projects, or
                                    chilling by the campfire.
                                  </p>
                                  <p>
                                    Friendships That Last!
                                    <br />
                                    Shared adventures create real connections –
                                    and many campers already plan their return
                                    together for next summer. These are
                                    friendships that stick!
                                  </p>
                                  <p>
                                    There&apos;s no room for boredom here –
                                    every day brings fresh adventures, new
                                    sports challenges, and creative highlights
                                    just for you!
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="js-3_4" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Meals On Site
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div
                          id="jp_accordation_section_691a9ce4677ee"
                          className="jp_section_content"
                        >
                          <div className="uk-container">
                            <div
                              className="uk-grid tm-grid-expand uk-grid-margin"
                              uk-grid=""
                            >
                              <div className="uk-width-1-3@m">
                                <div className="uk-margin">
                                  <Image
                                    src={getTemplateImageUrl(
                                      "yootheme/cache/7e/02-Sommercamp-Walsrode-Dining-Hall-inside-7e70a1df.jpg"
                                    )}
                                    width={1080}
                                    height={720}
                                    alt="Children eating together in the camp dining hall – shared meals and community spirit at Walsrode summer camp"
                                    loading="lazy"
                                    className="el-image"
                                  />
                                </div>
                              </div>
                              <div className="uk-width-2-3@m">
                                <div className="uk-panel uk-margin">
                                  <h4>Food Everyone Loves!</h4>
                                  <p>
                                    Three delicious meals a day – fresh, varied,
                                    and super tasty! Whether you&apos;re
                                    vegetarian, gluten-free, or
                                    lactose-intolerant – just let us know in
                                    advance, and we&apos;ve got you covered.
                                    <br />
                                    Start your day with a hearty breakfast
                                    buffet: fresh bread rolls, cold cuts, fruit,
                                    muesli, juice, and tea.
                                    <br />
                                    At lunch and dinner, enjoy warm meals along
                                    with a colorful salad bar.
                                    <br />
                                    Throughout the day, you&apos;ll stay fueled
                                    with fresh fruit, afternoon snacks, and
                                    plenty of water – perfect for all your camp
                                    adventures!
                                    <br />
                                    And the best part? Everything is freshly
                                    cooked – no instant soups, no bland
                                    cafeteria food. Just real meals that taste
                                    great and give you the energy you need!
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="js-3_5" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Team & Supervision
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div
                          id="jp_accordation_section_691a9ce4678c1"
                          className="jp_section_content"
                        >
                          <div className="uk-container">
                            <div
                              className="uk-grid tm-grid-expand uk-grid-margin"
                              uk-grid=""
                            >
                              <div className="uk-width-1-3@m">
                                <div className="uk-margin">
                                  <Image
                                    src={getTemplateImageUrl(
                                      "yootheme/cache/2e/Teamertraining_2017_60-2e2ec36d.jpg"
                                    )}
                                    width={1920}
                                    height={1280}
                                    alt="Camp counselors warmly welcoming children – dedicated Go and Grow Camp team for supervised holiday programs"
                                    loading="lazy"
                                    className="el-image"
                                  />
                                </div>
                              </div>
                              <div className="uk-width-2-3@m">
                                <div className="uk-panel uk-margin">
                                  <h4>Cared for Around the Clock!</h4>
                                  <p>
                                    Our experienced and passionate teamers are
                                    there for you 24/7 – full of energy,
                                    positivity, and always ready to listen.
                                    Whether it&apos;s a quick question or a
                                    bigger worry, you can count on them anytime.
                                  </p>
                                  <p>
                                    The best part?
                                    <br />
                                    Our team comes from all over the world and
                                    brings that true international camp spirit –
                                    that&apos;s why we speak both English and
                                    German!
                                  </p>
                                  <p>
                                    This way, you&apos;ll naturally pick up both
                                    languages – while playing sports, chatting
                                    by the campfire, or just hanging out.
                                    <br />
                                    Our supervision ratio is between 1:7 and
                                    1:10, so you&apos;re always in good hands
                                    with our all-around care package!
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="js-3_6" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Getting There & Heading Home
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <h4>All Roads Lead to Camp!</h4>
                          <p>
                            Whether by car, train, plane, or shuttle – your
                            child will arrive safely and stress-free. We make
                            sure everything runs smoothly from start to finish!
                          </p>
                          <ul>
                            <li>
                              🚗 <em>Self-arrival: </em>Simply drop off and pick
                              up your child yourself. You&apos;ll receive a
                              detailed arrival guide via email 6 weeks before
                              the camp starts – making your trip as easy and
                              relaxed as possible.
                            </li>
                            <li>
                              🚌 <em>Shuttle service:</em> Since our Adventure
                              Camps are often located in remote natural areas,
                              we offer convenient shuttles from nearby airports
                              and train stations.
                            </li>
                          </ul>
                          <p>
                            <em>Important:</em>
                            <br />
                            Shuttles run only on Sundays (arrival) and Saturdays
                            (departure) within set time slots.
                            <br />
                            If you need transport outside of these windows, we
                            can arrange a private shuttle for an additional fee
                            – just reach out to us in advance.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div id="js-3_7" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Coverage & Insurance
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <h4>Peace of Mind for Every Adventure!</h4>
                          <p>
                            From little mishaps to unexpected situations – with
                            our Go and Grow Camp insurance package, your child is
                            fully covered.
                          </p>
                          <p>
                            Go and Grow Camp Insurance Package
                            <br />
                            Includes liability, accident, and health insurance
                            for the entire duration of the trip.
                            <br />✔ Coverage for accidents & doctor visits
                            <br />✔ Protection for damages to property
                            <br />
                            💰 Price: from USD45 per person per trip
                            <br />
                            📅 Valid from arrival to departure
                            <br />
                            🌍
                            <em>Applies only to trips abroad</em>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <style
                  dangerouslySetInnerHTML={{
                    __html: `
                    .custom_acc_691a9ce46701a .uk-accordion-title * {
                      color: #000000 !important;
                    }
                    .custom_acc_691a9ce46701a .uk-accordion-title {
                      padding: 10px !important;
                      color: #000000 !important;
                      background: #ffffff !important;
                      border: 1px solid #ffaa00 !important;
                      position: relative;
                      padding-left: 60px !important;
                    }
                    .custom_acc_691a9ce46701a .uk-accordion-title::before {
                      display: block;
                      position: absolute;
                      top: 0;
                      bottom: 0;
                      background-color: #ffaa00 !important;
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
                    .custom_acc_691a9ce46701a .uk-open > .uk-accordion-title::before {
                      content: "−";
                    }
                    .custom_acc_691a9ce46701a .uk-accordion-content {
                      border: 1px solid #ffaa00 !important;
                      background: #ffffff !important;
                      padding: 15px !important;
                      margin-top: 15px !important;
                    }
                    .custom_acc_691a9ce46701a > :nth-child(n + 2) {
                      border: unset !important;
                      box-shadow: unset !important;
                    }
                  `,
                  }}
                />
              </div>
            </div>
            <div className="uk-width-1-3@m">
              <div className="uk-card-default uk-card uk-card-body">
                <h3 className="uk-h3">Quick Facts</h3>
                <ul className="uk-list uk-list-divider">
                  <li>
                    <strong>Location:</strong> Lüneburger Heide (Walsrode)
                  </li>
                  <li>
                    <strong>Ages:</strong> 7 - 17 years
                  </li>
                  <li>
                    <strong>Price:</strong> from 435 USD
                  </li>
                  <li>
                    <strong>Duration:</strong> from 7 days
                  </li>
                </ul>
                <Link
                  href="/destinations/germany-lueneburger-heide"
                  className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-top"
                >
                  View Location
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bayerischer Wald Section */}
      <div
        id="Regen"
        className="uk-section-muted uk-section uk-padding-remove-bottom"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-grid-margin" uk-grid="">
            <div className="uk-grid-item-match uk-width-2-3@m">
              <div className="uk-card-default uk-card uk-card-body">
                <h2 className="uk-h2">
                  Adventure Camp Regen – Your Summer Camp in Bavaria!
                </h2>
                <div className="uk-panel uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin">
                  <p>
                    Action, Sports &amp; Creativity – Our Kids &amp; Teen Camps
                    in the Bavarian Forest Have It All!
                    <br />
                    Climbing, outdoor challenges, team games, and creative
                    workshops make your holidays truly unforgettable.
                  </p>
                  <p>
                    No extra profile needed – if you don&apos;t choose Horseback
                    Riding or Survival, you&apos;ll automatically be part of the
                    Adventure Base Program!
                    <br />
                    Experience nature, sports, and an international community at
                    its best.
                  </p>
                  <p>Book your Adventure Camp and safe your spot!</p>
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
                              "yootheme/cache/d3/reg_programm_archery-d31dea56.jpg"
                            )}
                            width={1260}
                            height={837}
                            alt="Girl aiming with bow and arrow – archery activity for kids at outdoor summer camp"
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
                              "yootheme/cache/d3/reg_programm_games-d3b4af4a.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Group of children being welcomed at language camp – beginning of an exciting adventure week in Regen"
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
                  <div className="uk-margin-top" uk-inverse="">
                    <ul
                      className="el-nav uk-slider-nav uk-dotnav uk-flex-center"
                      uk-margin=""
                    ></ul>
                  </div>
                </div>
                {/* Accordion for Regen - Similar structure to Walsrode but with Regen-specific content */}
                <div id="AccordionRegen">
                  <div
                    uk-accordion="collapsible: false;"
                    id="js-4"
                    className="custom_acc_691a9ce46a7b9"
                  >
                    <div id="js-4_0" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          All the Key Facts at a Glance
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <ul style={{ listStyleType: "disc" }}>
                            <li>
                              <strong>Choose your focus:</strong> 4 exciting
                              profile sessions (2.5 hrs each) packed with
                              sports, adventure, or creative fun
                            </li>
                            <li>
                              <strong>Daily variety:</strong> Enjoy even more
                              activities outside your profile – outdoor games,
                              sports, creativity, campfires, disco nights & more
                            </li>
                            <li>
                              <strong>Awesome excursions</strong> for 2-week
                              campers: overnight hike under the stars or a trip
                              to Munich
                            </li>
                            <li>
                              <strong>Bilingual camp vibe:</strong> English &
                              German – learn languages naturally in an
                              international setting
                            </li>
                            <li>
                              <strong>Accommodation:</strong> Stay in tents &
                              tiny houses at the campsite, or in wooden cabins &
                              solid lodges at the BLSV grounds
                            </li>
                            <li>
                              <strong>Full board:</strong> 7-day stay (Sun–Sat),
                              6 nights with freshly prepared meals
                            </li>
                            <li>
                              <strong>24/7 support:</strong> Our dedicated
                              teamers are always nearby and happy to help
                            </li>
                            <li>
                              <strong>Digital Detox:</strong> Phones and
                              electronics only allowed during siesta
                            </li>
                            <li>
                              <strong>Arrival & departure made easy:</strong>{" "}
                              Shuttle service from train stations and airports
                              available
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div id="js-4_1" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Location
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div
                          id="jp_accordation_section_691a9ce46aac7"
                          className="jp_section_content"
                        >
                          <div className="uk-container">
                            <div
                              className="uk-grid tm-grid-expand uk-grid-margin"
                              uk-grid=""
                            >
                              <div className="uk-width-1-2@m">
                                <div
                                  className="uk-position-relative uk-position-z-index uk-dark uk-margin"
                                  style={{ minHeight: "50vh" }}
                                  uk-map=""
                                  data-map-type="leaflet"
                                >
                                  <script
                                    type="application/json"
                                    dangerouslySetInnerHTML={{
                                      __html: JSON.stringify({
                                        markers: [
                                          {
                                            lat: 48.9666,
                                            lng: 13.1128,
                                            title: "Bayerischer Wald",
                                            show_popup: true,
                                          },
                                        ],
                                        controls: true,
                                        dragging: true,
                                        max_zoom: "18",
                                        min_zoom: "0",
                                        poi: false,
                                        type: "roadmap",
                                        zoom: "5",
                                        zooming: false,
                                        center: { lat: 48.9666, lng: 13.1128 },
                                        lazyload: true,
                                        library: "leaflet",
                                        baseUrl:
                                          "/templates/yootheme/vendor/assets/leaflet/leaflet/dist",
                                      }),
                                    }}
                                  />
                                  <div className="el-item uk-text-default uk-font-default uk-margin-remove-first-child">
                                    <h3 className="el-title uk-margin-top uk-margin-remove-bottom">
                                      Bayerischer Wald
                                    </h3>
                                    <div className="uk-margin-top">
                                      <Link
                                        href="/destinations/germany-adventure-camp-bayerischer-wald"
                                        target="_blank"
                                        className="el-link uk-button uk-button-default"
                                      >
                                        Info - Location
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="uk-width-1-2@m">
                                <div className="uk-panel uk-margin">
                                  <h4>
                                    Welcome to Regen – Your Adventure in the
                                    Bavarian Forest!
                                  </h4>
                                  <p>
                                    Our Go and Grow Camp in Regen is located right
                                    in the heart of the Bavarian Forest – one of
                                    South Germany&apos;s most beautiful natural
                                    landscapes. Surrounded by forests, rolling
                                    hills, and crystal-clear rivers, it&apos;s
                                    the perfect place for adventure, sports, and
                                    creative camps in southern Germany.
                                  </p>
                                  <p>
                                    <strong>Pure action &amp; nature!</strong>
                                    <br />
                                    Whether it&apos;s canoeing, kayaking,
                                    climbing, or team-building – this is where
                                    the fun really begins!
                                    <br />
                                    In cooperation with the Bavarian Sports
                                    Association (BLSV), we use top-class sports
                                    facilities on-site and nearby to offer even
                                    more variety and excitement.
                                  </p>
                                  <p>
                                    <strong>
                                      International community &amp; real camp
                                      spirit!
                                    </strong>
                                    <br />
                                    Our bilingual teamers (English/German)
                                    create an inspiring and welcoming
                                    atmosphere.
                                  </p>
                                  <p>
                                    Whether you&apos;re an outdoor enthusiast,
                                    sports lover, or language explorer – this
                                    camp is one-of-a-kind!
                                    <br />
                                    <strong>
                                      We can&apos;t wait to welcome you!
                                    </strong>
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
                <style
                  dangerouslySetInnerHTML={{
                    __html: `
                    .custom_acc_691a9ce46a7b9 .uk-accordion-title * {
                      color: #000000 !important;
                    }
                    .custom_acc_691a9ce46a7b9 .uk-accordion-title {
                      padding: 10px !important;
                      color: #000000 !important;
                      background: #ffffff !important;
                      border: 1px solid #ffaa00 !important;
                      position: relative;
                      padding-left: 60px !important;
                    }
                    .custom_acc_691a9ce46a7b9 .uk-accordion-title::before {
                      display: block;
                      position: absolute;
                      top: 0;
                      bottom: 0;
                      background-color: #ffaa00 !important;
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
                    .custom_acc_691a9ce46a7b9 .uk-open > .uk-accordion-title::before {
                      content: "−";
                    }
                    .custom_acc_691a9ce46a7b9 .uk-accordion-content {
                      border: 1px solid #ffaa00 !important;
                      background: #ffffff !important;
                      padding: 15px !important;
                      margin-top: 15px !important;
                    }
                    .custom_acc_691a9ce46a7b9 > :nth-child(n + 2) {
                      border: unset !important;
                      box-shadow: unset !important;
                    }
                  `,
                  }}
                />
              </div>
            </div>
            <div className="uk-width-1-3@m">
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
      </div>

      {/* Booking Section */}
      {/* <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h2 uk-text-center">Booking</h2>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
              <div className="uk-panel uk-margin">
                <div style={{ textAlign: "center" }}>
                  <iframe
                    src="https://www.bookacamp.de/en/booking/form/view-by-camp/ds7fdn347dsfndsf74n37en37en37dnd/walsrode"
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
                    Perfect Adventure & Sports Camp! Our children tried so many
                    exciting activities - climbing, canoeing, archery, and more.
                    The variety kept them engaged and active all week. They
                    learned new skills, pushed their limits, and had an absolute
                    blast. The best summer camp experience!
                  </p>
                  <footer className="el-footer">
                    <cite className="el-author">
                      <a
                        href="https://maps.app.goo.gl/FdniYSE33xQapbBs5"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Lisa G. auf Google
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
