"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { getTemplateImageUrl } from "@/lib/assets";

export default function FishingPage() {
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
                  <p>Fishing Camps in Germany</p>
                </h1>
                <div
                  className="uk-panel uk-text-lead uk-margin uk-text-left"
                  uk-scrollspy-class=""
                >
                  <p>Learn the art of fishing in beautiful natural settings!</p>
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
                    Fishing Camp for all levels in the Lüneburg Heath, Lower
                    Saxony!
                  </p>
                </h2>
                <div className="uk-panel uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin">
                  <p>
                    Dive into the world of fishing and experience nature,
                    knowledge, and true outdoor vibes! Whether it&apos;s your
                    first catch or the perfect cast – big and small moments of
                    success are waiting for you. Surrounded by the idyllic
                    landscape of Northern Germany, you&apos;ll become a fishing
                    pro.
                  </p>
                  <p>
                    One thing&apos;s for sure: this fishing camp is the big
                    catch – so what are you waiting for? Join a community
                    that&apos;s about to have the best summer ever!
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
                              "yootheme/cache/b1/01-Angeln-im-Ferienlager-b1a0eecf.jpg"
                            )}
                            width={1260}
                            height={840}
                            alt="Two boys fishing at a lakeside – peaceful nature experience at children's summer camp"
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
                    id="js-2"
                    className="custom_acc_691a9ceb907cb"
                  >
                    {/* At a Glance */}
                    <div id="js-2_0" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          At a Glance
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <ul>
                            <li>Fishing on 4 days, 2.5 hours each</li>
                            <li>For all levels / Age group: 12–17 years</li>
                            <li>
                              Activity program beyond fishing: outdoor fun,
                              sports, creativity, campfires, disco & more
                            </li>
                            <li>
                              Awesome trips for 2-week stays: overnight hike,
                              swimming pool, Heide Park or Hamburg trip
                            </li>
                            <li>
                              Camp language English/German: Learn through play
                              in an international atmosphere
                            </li>
                            <li>Accommodation: Tents and cabins</li>
                            <li>
                              Full board for 7 days (Sun–Sat), 6 nights, with
                              freshly prepared meals
                            </li>
                            <li>
                              24/7 all-round care: Our teamers are always there
                              for you
                            </li>
                            <li>
                              Digital detox approach: Phones and devices only
                              allowed during siesta
                            </li>
                            <li>
                              Arrival and departure services: Shuttles from
                              train station/airport
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
                            Welcome to Walsrode – Your Adventure in the Lüneburg
                            Heide!
                          </h4>
                          <p>
                            Our Camp Adventure (Academy) in Walsrode is
                            beautifully located in the Lüneburg Heath, right
                            between Bremen, Hamburg, and Hanover. Just a short
                            walk away, you&apos;ll find a charming northern
                            German village with traditional farms and
                            timber-framed houses – the perfect place for little
                            discoveries.
                          </p>
                          <p>
                            <strong>Over 150,000 m² of pure adventure!</strong>
                            <br />
                            Our spacious campgrounds are divided into three
                            exciting zones: Beach/Water, Survival, and
                            Creativity. From kayaking and jumping on a water
                            trampoline to building rafts, making fires, or
                            climbing in the high ropes course – there&apos;s
                            always something going on!
                          </p>
                          <p>
                            <strong>
                              International community & real camp spirit!
                            </strong>
                            <br />
                            Our camp is bilingual (English & German) –
                            you&apos;ll meet campers from all over the world and
                            improve your English without even trying.
                          </p>
                          <p>
                            Whether you&apos;re into languages, outdoor
                            adventures, or love being creative – explore all the
                            profiles & activities that make your camp experience
                            one of a kind!
                            <br />
                            We can&apos;t wait to see you!
                          </p>
                          <div className="uk-margin-top">
                            <Link
                              href="/destinations/germany-lueneburger-heide"
                              className="uk-button uk-button-default"
                            >
                              Infos - Location
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Accommodation Options */}
                    <div id="js-2_2" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Accommodation Options
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
                                  "yootheme/cache/0e/08-Sommercamp-Walsrode-tents-inside-0ec7f7f4.jpg"
                                )}
                                width={1080}
                                height={720}
                                className="el-image"
                                alt="Smiling boys sitting inside a shared camp tent"
                                loading="lazy"
                              />
                            </div>
                            <div className="uk-margin">
                              <Image
                                src={getTemplateImageUrl(
                                  "yootheme/cache/8e/05-Sommercamp-Walsrode-Huts-8-beds-8ec9bcb0.jpg"
                                )}
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
                              <h4>Live Like in a Tiny Village!</h4>
                              <p>
                                At our international summer camp in Lower
                                Saxony, you can choose between our Tent Village
                                and Adventure Lodges – depending on your spirit
                                for adventure!
                              </p>
                              <p>
                                <strong>Tent Village:</strong>
                                <br />
                                Six- to seven-person tents with wooden floors
                                and a sleeping loft offer a true outdoor feeling
                                under the stars.
                                <br />
                                <strong>Adventure Lodges:</strong>
                                <br />
                                Cozy cabins with four to eight beds, shelf
                                storage, and seating areas. (Note: Lodge
                                accommodation comes with an additional fee.)
                              </p>
                              <p>
                                Our accommodations are gender-separated, so
                                girls and boys stay in their own tents or
                                lodges. We also group by age:
                              </p>
                              <ul>
                                <li>Junior (7–12 years)</li>
                                <li>Senior (12–15 years)</li>
                                <li>Senior Plus (15–17 years)</li>
                              </ul>
                              <p>
                                Restrooms are also separated by gender and
                                always located nearby.
                              </p>
                              <p>
                                And the best part: Our teamers live right next
                                door and are available for you 24/7!
                                <br />
                                <strong>Good to know:</strong>
                                <br />
                                For tents, you&apos;ll need a sleeping bag &
                                sleeping mat. For lodges, bring a fitted sheet
                                and either a sleeping bag or bedding – both are
                                also available to rent if needed.
                              </p>
                              <p>
                                You can choose your preferred accommodation type
                                during the booking process – secure your spot
                                now!
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
                                  "yootheme/cache/f2/01-Walsrode-Climbing-f2512af1.jpg"
                                )}
                                width={1080}
                                height={717}
                                className="el-image"
                                alt="Child climbing on a high ropes course"
                                loading="lazy"
                              />
                            </div>
                            <div className="uk-margin">
                              <Image
                                src={getTemplateImageUrl(
                                  "yootheme/cache/44/05-Walsrode-Kanu-44a26bc9.jpg"
                                )}
                                width={1080}
                                height={717}
                                className="el-image"
                                alt="Children paddling a canoe across a lake"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="uk-width-2-3@m">
                            <div className="uk-panel uk-margin">
                              <h4>LOADS OF ADVENTURE AHEAD!</h4>
                              <p>
                                Fishing takes place on four mornings per week,
                                each session lasting 2.5 hours. Here are just a
                                few highlights waiting for you:
                              </p>
                              <p>
                                🎣 A full fishing experience: From your very
                                first cast to your first catch.
                                <br />
                                🎯 Prep for the fishing license exam: Learn
                                about fish species, conservation, and
                                sustainable fishing practices.
                                <br />
                                🐠 Fish processing & cooking: Learn how to clean
                                your catch and try out easy recipes.
                              </p>
                              <p>
                                Our different profiles run in parallel, so you
                                can choose a new main program each week.
                              </p>
                              <p>
                                And after your chosen activity, the real fun
                                begins! Three adventure zones – endless
                                possibilities:
                                <br />
                                Spread across 150,000 m², our campgrounds are
                                divided into Beach/Water, Survival & Creativity
                                – there&apos;s something for everyone:
                              </p>
                              <p>
                                💦 Water fun: Go kayaking, bounce on the water
                                trampoline, or build your own raft
                                <br />
                                🧗 Reach new heights: Challenge yourself in the
                                high ropes course
                                <br />
                                🔥 Survival training: Learn how to make fire,
                                build shelters, and explore nature
                                <br />
                                🎨 Unleash your creativity: Join exciting
                                workshops for artistic minds
                              </p>
                              <p>
                                Our international team brings true camp spirit
                                to life – full of action, adventure, and fun.
                                <br />
                                English is naturally woven into everyday life –
                                whether during sports, creative projects, or
                                chill evenings by the campfire.
                              </p>
                              <p>
                                <strong>
                                  Digital Detox – Experience more, scroll less!
                                </strong>
                                <br />
                                Phones are only allowed during siesta – leaving
                                more time for real adventures, new friendships,
                                and unforgettable memories.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Meals On Site */}
                    <div id="js-2_4" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Meals On Site
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
                                  "yootheme/cache/fa/02-Sommercamp-Walsrode-Dining-Hall-inside-fa5687ee.jpg"
                                )}
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
                              <h4>
                                <strong>Food Everyone Will Love!</strong>
                              </h4>
                              <p>
                                Three meals a day – fresh, varied, and seriously
                                delicious! Whether you&apos;re vegetarian,
                                gluten-free, or lactose-free – with advance
                                notice, we&apos;ve got you covered.
                              </p>
                              <p>
                                Your day kicks off with a hearty breakfast
                                buffet: fresh rolls, cold cuts, fruit, muesli,
                                juices, and tea. For lunch and dinner,
                                you&apos;ll usually enjoy hot meals and a
                                colorful salad bar. In between, there&apos;s
                                fresh fruit, an afternoon snack, and plenty of
                                water to keep you fueled for all your
                                adventures!
                              </p>
                              <p>
                                And the best part? We always cook fresh!
                                <br />
                                No instant soups, no boring basics – just real,
                                tasty food that gives you the energy you need!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Team & Supervision */}
                    <div id="js-2_5" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Team & Supervision
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
                                  "yootheme/cache/2e/Teamertraining_2017_60-2e2ec36d.jpg"
                                )}
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
                              <h4>
                                <strong>
                                  Fully Taken Care Of – All Day, Every Day!
                                </strong>
                              </h4>
                              <p>
                                Our experienced and caring teamers are there for
                                you around the clock – full of energy,
                                positivity, and always ready to listen. Whether
                                it&apos;s a small question or a big worry, you
                                can count on them anytime.
                              </p>
                              <p>
                                The best part? Our team brings real camp spirit
                                from all over the world – that&apos;s why we
                                speak both English and German!
                              </p>
                              <p>
                                You&apos;ll naturally immerse yourself in both
                                languages – during sports, around the campfire,
                                or just in casual conversation.
                                <br />
                                We keep a supervision ratio of 1:7 to 1:10. With
                                our 24/7 all-round care package, you&apos;re in
                                the best hands at all times!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* How to Get to Camp */}
                    <div id="js-2_6" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          How to Get to Camp
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
                            <strong>Self-arrival:</strong> Simply drop off and
                            pick up your child yourself. You&apos;ll receive
                            detailed directions via info email about 6 weeks
                            before camp starts – so nothing stands in the way of
                            a smooth arrival.
                          </p>
                          <p>
                            <strong>Shuttle service:</strong> Since our
                            adventure camps are usually in remote locations,
                            we&apos;re happy to shuttle your child from nearby
                            airports and train stations.
                            <br />
                            Shuttles run only on Sundays for arrival and
                            Saturdays for departure within fixed time windows.
                            Outside of these times, individual shuttle transfers
                            can be booked for an additional fee. Just reach out
                            to us directly to arrange this.
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
                            All available options can be selected during the
                            booking process.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Coverage & Insurance */}
                    <div id="js-2_7" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Coverage & Insurance
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <h4>Well Covered for Your Adventure!</h4>
                          <p>
                            Whether it&apos;s a small mishap or an unexpected
                            incident – with our Camp Adventure insurance
                            package, you&apos;re fully protected.
                          </p>
                          <p>
                            <strong>
                              The Camp Adventure Insurance Package:
                            </strong>
                            <br />
                            Liability, accident, and health insurance for the
                            entire duration of the trip.
                            <br />
                            ✔ Coverage for accidents & doctor visits
                            <br />
                            ✔ Protection for damages to property
                            <br />
                            💰 Price: from USD45 per person per trip
                            <br />
                            📅 Valid from arrival to departure
                            <br />
                            🌍 Available only for international trips
                            <br />
                            <em>⚠ Important:</em> Without international
                            insurance, medical costs must be covered by the
                            participant. We recommend bringing a safety reserve
                            of USD500 in cash or a credit card. Participants
                            from outside the EU must submit proof of their own
                            insurance before the trip.
                          </p>
                          <p>
                            <strong>
                              The Camp Adventure Travel Cancellation Guarantee:
                            </strong>
                            <br />
                            Our guarantee for homesickness, illness & more. Need
                            to cancel your trip? No problem! With our
                            cancellation guarantee, you&apos;ll get a full
                            refund of the Camp Adventure travel price – minus a
                            deductible of USD50 (Germany) or USD100 (UK/Spain).
                            <br />
                            ✔ Valid until one day before the trip begins
                            <br />
                            ✔ No matter the reason: illness, accident, exams, or
                            homesickness
                            <br />
                            💰 Price: USD45 (for a one-week stay) / USD85 (for a
                            multi-week stay)
                          </p>
                          <p>
                            You can select all insurance options during the
                            booking process.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Book a fishing course */}
                    <div id="js-2_8" className="el-item jp_">
                      <a className="uk-accordion-title" href="#">
                        <h3 className="el-accordion-title uk-h3 uk-margin-remove-bottom">
                          Book a fishing course at Camp Adventure
                        </h3>
                      </a>
                      <div className="uk-accordion-content uk-margin-remove-first-child">
                        <div className="el-content uk-panel uk-column-1-2@m uk-margin-top">
                          <p>
                            Our fishing profile is designed for a one-week stay.
                            You&apos;ll find all available dates in the booking
                            section. We&apos;ve already preselected your fishing
                            adventure – secure your spot by the lake now! 🌊
                            <br />
                            Still want more? Stay for a second week and try out
                            a different profile!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <style jsx>{`
                  .custom_acc_691a9ceb907cb .uk-accordion-title * {
                    color: #000000 !important;
                  }
                  .custom_acc_691a9ceb907cb .uk-accordion-title {
                    padding: 10px !important;
                    color: #000000 !important;
                    background: #ffffff !important;
                    border: 1px solid #ffaa00 !important;
                    position: relative;
                    padding-left: 60px !important;
                  }
                  .custom_acc_691a9ceb907cb .uk-accordion-title::before {
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
                  .custom_acc_691a9ceb907cb
                    .uk-open
                    > .uk-accordion-title::before {
                    content: "−";
                  }
                  .custom_acc_691a9ceb907cb .uk-accordion-content {
                    padding: 15px !important;
                    background: #ffffff !important;
                    border: 1px solid #ffaa00 !important;
                    border-top: none !important;
                  }
                  .custom_acc_691a9ceb907cb .uk-accordion-content * {
                    color: #000000 !important;
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
                    src="https://www.bookacamp.de/en/booking/form/view-by-camp/ds7fdn347dsfndsf74n37en37en37dnd/fishingwal"
                    title="Bookacamp, die Buchungsplattform von Camp Adventure"
                    allowFullScreen={true}
                    width="1000"
                    height="1700"
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
                    Peaceful and rewarding Fishing Camp! Our son loved learning
                    about fishing, patience, and nature. The instructors taught
                    proper techniques and respect for the environment. A perfect
                    blend of outdoor skills and camp fun!
                  </p>
                  <footer className="el-footer">
                    <cite className="el-author">
                      <a
                        href="https://maps.app.goo.gl/FdniYSE33xQapbBs5"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Peter L. auf Google
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
