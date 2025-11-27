"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { getTemplateImageUrl } from "@/lib/assets";

export default function HuskyCampPage() {
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
                  <p>Husky Camp in Germany</p>
                </h1>
                <div
                  className="uk-panel uk-text-lead uk-margin uk-text-left"
                  uk-scrollspy-class=""
                >
                  <p>
                    Experience the unique adventure of working with huskies in
                    our special husky camp!
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
                    Summer and Fall Holidays – Husky Camp for Children and
                    Teenagers in Lüneburg, Northern Germany
                  </p>
                </h2>
                <div className="uk-panel uk-dropcap uk-column-1-2@m uk-column-10@s uk-margin">
                  <p>
                    Let yourself be enchanted by the spirit of the huskies –
                    some things simply can&apos;t be put into words.
                    <br />
                    There must be magic in these fascinating four-legged
                    companions – it&apos;s the only explanation we have for why
                    so many people return to book this activity with us year
                    after year!
                  </p>
                  <p>
                    Whether you&apos;re feeding, grooming, or training together
                    – small and big moments of success await you. Amid the
                    idyllic landscapes of northern Germany, you&apos;ll form a
                    unique bond with the huskies and become part of their pack.
                  </p>
                  <p>
                    One thing&apos;s for sure: this husky adventure is a true
                    animal highlight!
                    <br />
                    Your four-legged friends are waiting for you! 🐾
                  </p>
                  <p>
                    When the huskies aren&apos;t at camp, they live at the
                    Lumirunners Ranch near Stade – with 3,000 m² of open space,
                    cozy huts, and plenty of love. For more details about their
                    rest, winter routines, and much more, visit our husky
                    trainers&apos; website:{" "}
                    <a
                      href="https://www.lumirunners.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      lumirunners.com
                    </a>
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
                              "yootheme/cache/ea/01-Husky%20Camp_Ausflug%20mit%20den%20Hunden-eaf9b8ce.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Kids Running with Huskies Through Fields at Husky Camp in Germany – Active Summer Holiday Adventure"
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
                              "yootheme/cache/9a/02-Husky%20Camp_zwei%20Jungs%20haben%20Spass%20mit%20den%20Hunden-9a2ff97e.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Two Smiling Boys with Huskies at Husky Camp in Germany – Animal-Assisted Holiday Experience for Kids"
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
                              "yootheme/cache/40/03-Husky%20Camp_Gruppenfoto%20mit%20den%20Huskys-40e4708f.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Group of Kids with Huskies at Husky Camp in Germany – Shared Outdoor Adventure in Nature"
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
                            alt="Kids Canoeing on the Lake – Water Sports at Adventure Camp Walsrode"
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
                            alt="Child Climbing in the High Ropes Course at Summer Camp Walsrode with Safety Gear"
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
                            alt="Group of Girls Relaxing on a SUP Board at the Lake – Water Fun at Kids' Summer Camp Walsrode"
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
                            alt="Kids Playing Bubble Soccer at Summer Camp Walsrode – Outdoor Activity Full of Action and Fun"
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
                    className="custom_acc_691a9cee469ff"
                  >
                    <div id="js-3_0" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Everything at a glance
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <ul>
                            <li>
                              Husky Experience: Lead your own sled dog team and
                              earn your Musher or Husky Driver License
                            </li>
                            <li>
                              For All Levels & Ages: Open to kids and teens aged
                              7–17
                            </li>
                            <li>
                              Activity Program alongside the Husky Focus:
                              Outdoor games, sports & creativity, campfires,
                              disco nights and more
                            </li>
                            <li>
                              Awesome Trips & Excursions for Two-Week Stays:
                              Hike with overnight camping, swimming pool visit,
                              trips to Heide Park or Hamburg
                            </li>
                            <li>
                              Bilingual Camp (English/German): Learn languages
                              naturally in an international environment
                            </li>
                            <li>Accommodation: Stay in tents and cabins</li>
                            <li>
                              Full Board: 7 days (Sun–Sat), 6 nights, freshly
                              prepared meals
                            </li>
                            <li>
                              24/7 All-Round Support: Our teamers are always
                              there for you
                            </li>
                            <li>
                              Digital Detox Approach: Phones and electronic
                              devices only during siesta time
                            </li>
                            <li>
                              Arrival & Departure Services: Shuttle service from
                              train station/airport available
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div id="js-3_1" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Camp-Location
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
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
                                <template>
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
                                </template>
                              </div>
                            </div>
                            <div className="uk-width-1-2@m">
                              <div className="uk-panel uk-margin">
                                <h4>
                                  WELCOME TO WALSRODE – YOUR ADVENTURE IN THE
                                  LÜNEBURGER HEIDE!
                                </h4>
                                <p>
                                  Our Camp Adventure (Academy) in Walsrode is
                                  nestled in the beautiful Lüneburg Heath, right
                                  between Bremen, Hamburg, and Hanover in
                                  northern germany. Just a short walk away,
                                  you&apos;ll find a charming northern German
                                  village with traditional farmhouses and
                                  half-timbered homes – the perfect setting for
                                  small discoveries.
                                </p>
                                <p>
                                  Over 150,000 m² of pure adventure!
                                  <br />
                                  Our sprawling campgrounds are divided into
                                  three exciting zones: Beach/Water, Survival &
                                  Creative. Whether it&apos;s kayaking, jumping
                                  on the water trampoline, building rafts,
                                  making fires, or climbing through the high
                                  ropes course – there&apos;s always something
                                  going on here!
                                </p>
                                <p>
                                  International Community & True Camp Spirit
                                  <br />
                                  Our camp is bilingual (English & German) –
                                  you&apos;ll meet campers from all over the
                                  world and improve your English in a fun,
                                  natural way.
                                </p>
                                <p>
                                  Whether you&apos;re a language lover, outdoor
                                  explorer, or creative mind – discover all the
                                  profiles & activities that make your camp
                                  experience one of a kind.
                                </p>
                                <p>We can&apos;t wait to welcome you!</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="js-3_2" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Your camp accommodations
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
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
                                <h4>Live Like in a Small Village!</h4>
                                <p>
                                  At our international holiday camp in Lower
                                  Saxony, you can choose between a Tent Village
                                  and Adventure Lodges – depending on your sense
                                  of adventure!
                                </p>
                                <p>
                                  Tent Village: Spacious 6–7 person tents with
                                  wooden floors and a loft area offer a true
                                  outdoor feeling under the stars.
                                </p>
                                <p>
                                  Adventure Lodges: Cozy cabins with 4 to 8
                                  beds, shelf space, and seating.
                                  <br />
                                  <em>
                                    (Note: Staying in a lodge comes with an
                                    additional fee.)
                                  </em>
                                </p>
                                <p>
                                  All accommodations are separated by gender,
                                  with boys and girls staying in their own tents
                                  or lodges. We also divide groups by age:
                                </p>
                                <p>Junior (7–12 years)</p>
                                <p>Senior (12–15 years)</p>
                                <p>Senior Plus (15–17 years)</p>
                                <p>
                                  The bathrooms are also gender-separated and
                                  located nearby.
                                </p>
                                <p>
                                  And the best part? Our teamers live right next
                                  door and are there for you 24/7!
                                </p>
                                <p>
                                  Good to Know:
                                  <br />
                                  For tents, you&apos;ll need to bring a
                                  sleeping bag and sleeping mat.
                                </p>
                                <p>
                                  For the lodges, bring a fitted sheet and
                                  either a sleeping bag or bed linen – or you
                                  can rent bedding from us if you prefer.
                                </p>
                                <p>
                                  You can select your preferred accommodation
                                  option during the booking process – so reserve
                                  your spot now!
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="js-3_3" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Camp program
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="uk-container">
                          <div
                            className="uk-grid tm-grid-expand uk-grid-margin"
                            uk-grid=""
                          >
                            <div className="uk-width-1-3@m">
                              <div className="uk-margin">
                                <Image
                                  src={getTemplateImageUrl(
                                    "yootheme/cache/c1/04-Husky%20Camp_Madchen%20mit%20Zertifikat-c11c5809.jpg"
                                  )}
                                  width={1080}
                                  height={720}
                                  alt="Girl proudly showing her husky license at dog sled camp in Germany – certified animal care experience"
                                  loading="lazy"
                                  className="el-image"
                                />
                              </div>
                              <div className="uk-margin">
                                <Image
                                  src={getTemplateImageUrl(
                                    "yootheme/cache/0f/Camp_Adventure_Walsrode_2018_web_Basic_89_von_93-0f4f78b1.jpg"
                                  )}
                                  width={1920}
                                  height={1280}
                                  alt="Children paddling a canoe across a lake – water sports and adventure at Walsrode summer camp"
                                  loading="lazy"
                                  className="el-image"
                                />
                              </div>
                            </div>
                            <div className="uk-width-2-3@m">
                              <div className="uk-panel uk-margin">
                                <h4>A Whole Lot of Adventure!</h4>
                                <p>
                                  Our Husky Program takes place three times a
                                  week for 2.25 hours each morning – and these
                                  are just a few of the exciting highlights
                                  waiting for you:
                                </p>
                                <p>
                                  Learn everything there is to know about our
                                  impressive sled dogs – from the basics of
                                  mushing and the right equipment, to training
                                  techniques and special feeding and care
                                  routines. Try it all for yourself and earn
                                  your very own &quot;Musher License&quot;,
                                  officially certifying you as a sled dog
                                  handler.
                                  <br />
                                  You&apos;ll be guided on this exciting journey
                                  by Alexandra and the sled dog team
                                  &quot;Lumirunners&quot; 🌞🏕️🐾.
                                </p>
                                <p>
                                  But your day doesn&apos;t end there! After
                                  your chosen activity, it&apos;s time for even
                                  more fun. Our camp spans over 150,000 m² and
                                  is divided into three adventure zones:
                                  Beach/Water, Survival, and Creative – so
                                  there&apos;s something for everyone:
                                </p>
                                <p>
                                  💦 Water Action: Kayaking, water trampoline
                                  fun & raft building
                                  <br />
                                  🧗‍♀️ Reach New Heights: Climbing in the high
                                  ropes course
                                  <br />
                                  🔥 Survival Skills: Make fires, build shelters
                                  & discover nature
                                  <br />
                                  🎨 Unleash Your Creativity: Exciting workshops
                                  for all artistic minds
                                </p>
                                <p>
                                  Our international team brings the true camp
                                  spirit – full of energy, adventure, and fun!
                                  English naturally becomes part of everyday
                                  life – during sports, creative projects, and
                                  relaxed evenings by the campfire.
                                </p>
                                <p>
                                  Digital Detox – More Life, Less Screen!
                                  <br />
                                  Phones are only allowed during siesta time –
                                  giving you more space for real-life
                                  adventures, new friendships & unforgettable
                                  memories.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="js-3_4" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Food & Daily Snack
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
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
                                <h4>Food Everyone Will Love!</h4>
                                <p>
                                  Three delicious meals a day – always fresh,
                                  varied, and super tasty! Whether you&apos;re
                                  vegetarian, gluten-free, or lactose-intolerant
                                  – we&apos;ve got you covered (just let us know
                                  in advance).
                                </p>
                                <p>
                                  Your day kicks off with a hearty breakfast
                                  buffet: fresh rolls, cold cuts, fruit, cereal,
                                  juices, and tea.
                                  <br />
                                  At lunch and dinner, you&apos;ll enjoy hot
                                  meals and a colorful salad bar.
                                  <br />
                                  In between, you can refuel with fresh fruit,
                                  an afternoon snack, and plenty of water –
                                  perfect to keep you going through all your
                                  adventures!
                                </p>
                                <p>
                                  And the best part?
                                  <br />
                                  We cook everything fresh!
                                  <br />
                                  No instant soups, no bland meals – just good
                                  food that tastes great and gives you energy!
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="js-3_5" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Care & Support at Camp
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="uk-container">
                          <div
                            className="uk-grid tm-grid-expand uk-grid-margin"
                            uk-grid=""
                          >
                            <div className="uk-width-1-3@m">
                              <div className="uk-margin">
                                <Image
                                  src={getTemplateImageUrl(
                                    "yootheme/cache/40/09-Walsrode-Teambuilding-Lake-4066c845.jpg"
                                  )}
                                  width={1080}
                                  height={717}
                                  alt="Fun beach water challenge game at Camp Adventure summer camp in Germany"
                                  loading="lazy"
                                  className="el-image"
                                />
                              </div>
                            </div>
                            <div className="uk-width-2-3@m">
                              <div className="uk-panel uk-margin">
                                <h4>Fully Taken Care Of – All Around!</h4>
                                <p>
                                  Our experienced and caring teamers are there
                                  for you 24/7 – always with a smile, good
                                  vibes, and a listening ear. Whether it&apos;s
                                  a small question or a big worry, you can turn
                                  to them at any time.
                                </p>
                                <p>
                                  The best part?
                                  <br />
                                  Our counselors bring the real camp spirit from
                                  all over the world – so we speak both English
                                  and German!
                                </p>
                                <p>
                                  That way, you naturally pick up both languages
                                  – through sports, campfire chats, or just
                                  casual conversations.
                                  <br />
                                  We maintain a supervision ratio of 1:7 to
                                  1:10, ensuring personalized support for
                                  everyone.
                                </p>
                                <p>
                                  Thanks to our 24-hour all-around care package,
                                  you&apos;re always in the best hands!
                                </p>
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
                            sure everything runs smoothly!
                          </p>
                          <p>
                            Self-arrival: Simply drop off and pick up your child
                            yourself. A detailed arrival guide will be sent via
                            email 6 weeks before camp starts, so you can plan
                            your trip with ease.
                          </p>
                          <p>
                            Shuttle Service: Since our adventure camps are often
                            in remote areas, we&apos;re happy to provide
                            shuttles from nearby airports and train stations.
                            <br />
                            Shuttles run only on Sundays for arrival and
                            Saturdays for departure within designated time
                            windows.
                            <br />
                            If you need a custom shuttle outside these times,
                            this can be arranged for an additional fee – just
                            contact us directly.
                          </p>
                          <p>
                            <em>Airport Hamburg</em>
                            <br />
                            Arrival (landing): 10:00 – 15:00
                            <br />
                            Meeting Point (McDonald&apos;s): 14:00
                            <br />
                            Departure (take-off): 14:00 – 18:00
                            <br />
                            Meeting Point (McDonald&apos;s): 12:30
                          </p>
                          <p>
                            <em>Airport Hanover</em>
                            <br />
                            Arrival (landing): 10:00 – 16:00
                            <br />
                            Meeting Point (McDonald&apos;s): 15:30
                            <br />
                            Departure (take-off): 13:00 – 18:00
                            <br />
                            Meeting Point (McDonald&apos;s): 11:00
                          </p>
                          <p>
                            <em>Train Station Hanover</em>
                            <br />
                            Arrival: 14:00 – 16:00
                            <br />
                            Meeting Point (McDonald&apos;s): 15:30
                            <br />
                            Departure: 11:00 – 13:00
                            <br />
                            Meeting Point (McDonald&apos;s): 10:30
                          </p>
                          <p>
                            All available transfer options can be selected
                            during the booking process.
                            <br />
                            <Link
                              href="/info/arrival-departure"
                              target="_blank"
                              rel="noopener"
                            >
                              You&apos;ll also find detailed transfer
                              information here.
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div id="js-3_7" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Travel & Camp Insurance
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <h4>Fully Covered for Your Adventure!</h4>
                          <p>
                            Whether it&apos;s a small mishap or an unexpected
                            event – with our Camp Adventure Insurance Package,
                            you&apos;ll be well protected during your trip.
                          </p>
                          <p>
                            <em>Camp Adventure Insurance Package</em>
                            <br />
                            Includes liability, accident, and health insurance
                            for the entire duration of your camp stay.
                          </p>
                          <p>
                            ✔ Coverage for accidents & medical visits
                            <br />
                            ✔ Protection against damage to property
                            <br />
                            💰 Price: from USD45 per person per trip
                            <br />
                            📅 Valid from arrival to departure
                            <br />
                            🌍 Available only for international (non-German)
                            trips
                          </p>
                          <p>
                            ⚠️ Important note: Without international insurance
                            coverage, any medical costs must be paid out of
                            pocket.
                            <br />
                            We recommend bringing a cash reserve of USD500 or a
                            credit card just in case.
                            <br />
                            Participants traveling from outside the EU must
                            provide proof of their own insurance before the
                            trip.
                          </p>
                          <p>
                            <em>Camp Adventure Trip Cancellation Guarantee</em>
                            <br />
                            Your safety net against homesickness, illness &
                            more.
                            <br />
                            If you have to cancel your trip – no problem! With
                            our Trip Cancellation Guarantee, you&apos;ll get a
                            full refund of the camp fee (minus a small
                            deductible).
                          </p>
                          <p>
                            ✔ Valid up to 1 day before departure
                            <br />
                            ✔ Covers all reasons: illness, injury, school
                            resits, or homesickness
                            <br />
                            💰 Price: USD45 (1-week stay) / USD85 (multi-week
                            stay)
                            <br />➖ Deductible: USD50 (Germany) / USD100
                            (England or Spain)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div id="js-3_8" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Book your Camp Now!
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <h4>Book Your Husky Adventure! 🐕</h4>
                          <p>
                            Our Husky Camp runs for one week – but who can ever
                            get enough of these amazing animals? Stay longer and
                            combine your camp with other exciting activities!
                          </p>
                          <p>
                            You&apos;ll find all available dates in the booking
                            section – reserve your spot in the Husky Camp now!
                            It&apos;s already pre-selected for you – all
                            that&apos;s left is to choose your accommodation,
                            arrival options, and more. Then your adventure can
                            begin!
                          </p>
                          <p>
                            Get ready for an unforgettable husky adventure -
                            Join the Crew!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <style jsx>{`
                  .custom_acc_691a9cee469ff .uk-accordion-title * {
                    color: #000000 !important;
                  }
                  .custom_acc_691a9cee469ff .uk-accordion-title {
                    padding: 10px !important;
                    color: #000000 !important;
                    background: #ffffff !important;
                    border: 1px solid #ffaa00 !important;
                    position: relative;
                    padding-left: 60px !important;
                  }
                  .custom_acc_691a9cee469ff .uk-accordion-title::before {
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
                  }
                  .custom_acc_691a9cee469ff
                    .uk-open
                    > .uk-accordion-title::before {
                    background-image: url("/images/Camp-heart.png") !important;
                  }
                  .custom_acc_691a9cee469ff .uk-accordion-content {
                    border: 1px solid #ffaa00 !important;
                    background: #ffffff !important;
                    padding: 15px !important;
                    margin-top: 15px !important;
                  }
                  .custom_acc_691a9cee469ff .uk-accordion-content * {
                    color: inherit;
                  }
                  .custom_acc_691a9cee469ff > :nth-child(n + 2) {
                    border: unset !important;
                    box-shadow: unset !important;
                  }
                `}</style>
              </div>
            </div>
            <div className="uk-width-1-3@m"></div>
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
                    src="https://www.bookacamp.de/en/booking/form/view-by-camp/ds7fdn347dsfndsf74n37en37en37dnd/huskywal"
                    title="Bookacamp, die Buchungsplattform von Camp Adventure"
                    allowFullScreen={true}
                    width="1000"
                    height="2000"
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
                    Unforgettable Husky Camp experience! Our children were
                    thrilled to work with the huskies, learning responsibility
                    and building special bonds with these amazing animals. The
                    trainers were knowledgeable and caring. A truly unique and
                    memorable adventure!
                  </p>
                  <footer className="el-footer">
                    <cite className="el-author">
                      <a
                        href="https://maps.app.goo.gl/FdniYSE33xQapbBs5"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Nicole T. auf Google
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
