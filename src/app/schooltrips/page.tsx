import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { getTemplateImageUrl } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Book your Outdoor Education School Trip 2026",
  description:
    "Camp Adventure offers great Outdoor Education School Trips in Germany. DofE certified, 24/7 supervision. Contact Us!",
};

export default function SchoolTripsPage() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="uk-section-primary uk-section-overlap uk-position-relative"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div
          data-src={getTemplateImageUrl("yootheme/banner/b4.jpg")}
          uk-img=""
          className="uk-background-norepeat uk-background-cover uk-background-center-center uk-section uk-section-xlarge"
          style={{
            backgroundImage: `url(${getTemplateImageUrl(
              "yootheme/banner/b4.jpg"
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
                  className="uk-heading-large uk-text-center"
                  uk-scrollspy-class=""
                  style={{ color: "#fff" }}
                >
                  School Trips for International Schools
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h1 uk-margin-small uk-text-center">
                School Trips for International Schools
              </h2>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
              <div className="uk-panel uk-text-large uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin">
                <p>
                  Outdoor Education in a new way: all our school trips are
                  characterized by very specific profiles and focused on
                  different subjects. Our programs are always adapted to the age
                  group of the students and take place in great locations around
                  Germany and other carefully chosen destinations. We can run
                  field trips in German or English. We wouldn&apos;t call
                  ourselves a traditional school trip provider that offers just
                  a couple of hours of program during the day. Our school trips
                  reflect the approach we take with our summer camps: we provide
                  students with a 24 hour program.{" "}
                  <span>
                    Motivated Students and teachers will have the opportunity to
                    be active before breakfast with our morning sports program
                  </span>
                  .{" "}
                  <span>
                    With full days of a variety of activites and sports we
                    understand the importance of winding down for the night. At
                    camp adventure we often end our evening with a camp fire.
                    This allows teachers to conect with their students while
                    using the outline of our signature bed time routine.
                  </span>{" "}
                  All this is done with a high staff-kids ratio of about 1:10 to
                  1:14.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Teambuilding & Nature Exploration Section */}
      <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h1 uk-margin-small uk-text-center">
                Teambuilding & Nature Exploration
              </h2>
              <hr className="uk-divider-icon" />
              <div className="uk-panel uk-text-large uk-column-1-2@m uk-column-1-1@s uk-margin">
                <p>
                  <span>
                    All students are encouraged to work as a team, discovering
                    their own strenghts and weakneses, and those of their peers.
                    With a clearer understanding of these traits they can grow
                    as individuals and develop their interpersonal skills,
                    improving their abilities to work within a team.
                  </span>
                  Throughout the five day program, students have the chance to
                  acquire new and useful skills. Furthermore, a great
                  exploration of the surrounding environment will give them a
                  different and better understanding of nature.
                </p>
                <p>
                  Includes: Raft building, Teambuilding challenges, Survival
                  exercises for beginners, Canoeing Skills, an Adventure Hike
                  with an overnight stay.
                </p>
                <p></p>
              </div>
              <div className="uk-panel uk-margin">
                <p>Recomended for 4th - 10th Graders.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* No Power to drugs Section */}
      <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h1 uk-margin-small uk-text-center">
                &quot;No Power to drugs!&quot;
              </h2>
              <hr className="uk-divider-icon" />
              <div className="uk-panel uk-text-large uk-column-1-2@m uk-column-1-1@s uk-margin">
                <p>
                  Camp Adventure&apos;s cooperation with the German association
                  &quot;No Power to Drugs&quot; (Keine Macht den Drogen) will
                  give students a good understanding of how
                  &quot;addictions&quot; are developed. The main aim of this
                  program is to raise awareness among students, to strengthen
                  their self-esteem and show effective ways of saying
                  &quot;No&quot; to drugs. Apart from acquiring useful life
                  skills they will have the chance to grow as a team.
                </p>
                <p>
                  Includes: &quot;No power to Drugs exercises&quot;,
                  Teambuilding exercises, Canoeing Skills
                </p>
              </div>
              <div className="uk-panel uk-margin">
                <p>Recomended for 6th-10th Grade</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Taking care of yourself and others Section */}
      <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h1 uk-margin-small uk-text-center">
                Taking care of yourself and others
              </h2>
              <hr className="uk-divider-icon" />
              <div className="uk-panel uk-text-large uk-column-1-2@m uk-column-1-1@s uk-margin">
                <p>
                  This program is aimed to focus on the needs of older
                  teenagers. The basic idea is to put emphasis on the importance
                  of helping others and taking care of themselves. Cooking
                  classes and discussion about healthy life style together with
                  our sport program will help them to understand more about
                  their own needs. Developing skills in first aid is to help
                  others in a proper way. It is a fantastic way to raise
                  questions on how students behave out of school in their
                  &quot;normal&quot; life.
                </p>
                <p>
                  Includes: International First Aid Course, Cooking and Health
                  Course, Teambuilding exercises
                </p>
              </div>
              <div className="uk-panel uk-margin">
                <p>Recomended for 6th - 10th Grade</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Goal Setting Section */}
      <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h1 uk-margin-small uk-text-center">
                Goal Setting
              </h2>
              <hr className="uk-divider-icon" />
              <div className="uk-panel uk-text-large uk-column-1-2@m uk-column-1-1@s uk-margin">
                <p>
                  Students of upper grades are facing situations in which they
                  have to make decisions, which will have a big impact on their
                  future life. Figuring out what you want to do later on in the
                  future is one of the main questions that arises among students
                  of this age group. Our program includes special exercises for
                  goal setting and as a highlight we offer our Outdoor Alpine
                  Biwak and Solo, so everyone really gets precious time to
                  disconnect, think and reflect.
                </p>
                <p>
                  Includes: Special personal Goal setting exercises, Alpine Hike
                  with Biwak, SOLO
                </p>
              </div>
              <div className="uk-panel uk-margin">
                <p>Recomended for 6th - 10th Grade</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h1 uk-margin-small uk-text-center">
                Leadership
              </h2>
              <hr className="uk-divider-icon" />
              <div className="uk-panel uk-text-large uk-column-1-2@m uk-column-1-1@s uk-margin">
                <p>
                  Fostering community within students can be a challenge, with
                  this program we provide older students with opportunity to
                  care for their fellow students. This level of responsibility
                  allows the students to develop their skills as leaders and
                  tests their ability to empathise with others whom they may not
                  know. In the first two days of the program the students will
                  receive training and are encouraged to describe what a leader
                  is and what parts of their criteria they meet. The following
                  days they will run a number of programs and evening activities
                  for the younger students on site. This allows the students to
                  make connections with others that they may otherwise not have
                  interacted with.
                </p>
              </div>
              <div className="uk-panel uk-margin">
                <p>Recomended for 8th - 12th Grade</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Local Excursions Section */}
      <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h1 uk-margin-small uk-text-center">
                Local Excursions
              </h2>
              <hr className="uk-divider-icon" />
              <div className="uk-panel uk-text-large uk-column-1-2@m uk-column-1-1@s uk-margin">
                <p>
                  On request we offer specialised day trips, which can also be
                  included into the program. Depending on the location we can
                  provide excursions to theme parks to local museums. These
                  excursions try to make culture more hands-on for the students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Special locations Section */}
      <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h1 uk-margin-small uk-text-center">
                Special locations
              </h2>
              <hr className="uk-divider-icon" />
              <div className="uk-panel uk-text-large uk-column-1-2@m uk-column-1-1@s uk-margin">
                <p>
                  We have worked with amazing locations around Europe over the
                  past few years. We are specialised in outdoor and experiential
                  education programs and use facilities from partners that best
                  suit your needs. There is a great variety including everything
                  from adventurous campgrounds to an outdoor station close to
                  the Austrian Alpes. In all our trips we aim to deliver our
                  unique adventure feeling. We do not want the students to feel
                  as though they are in a 5 star hotel, instead we want them to
                  enjoy one of our many great outdoor centres. Focusing on what
                  we believe is the most important thing; the nature surrounding
                  them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Program Examples Section */}
      <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h1 uk-margin-small uk-text-center">
                Program Examples
              </h2>
              <hr className="uk-divider-icon" />
              <div className="uk-panel uk-text-large uk-column-1-2@m uk-column-1-1@s uk-margin">
                <p>
                  We are flexible with duration, location and program of all
                  trips. Feel free to get in touch with us and help us develop a
                  tailor-made school trip adapted to your needs.
                </p>
                <p>
                  For more details please contact Guillaume:{" "}
                  <a href="mailto:groups@campadventure.de">
                    groups@campadventure.de
                  </a>
                  <br /> Below you will find four examples our main locations
                  and a basic schedule for a week at camp:
                </p>
              </div>

              {/* Location Cards */}
              <div className="uk-margin">
                <div
                  className="uk-grid uk-child-width-1-1 uk-child-width-1-2@m uk-grid-match"
                  uk-grid=""
                >
                  {/* Lüneburger Heide */}
                  <div>
                    <div className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child">
                      <h3 className="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">
                        Lüneburger Heide (Niedersachsen)
                      </h3>
                      <div className="el-meta uk-h4 uk-margin-top uk-margin-remove-bottom">
                        from 245 USD / participant
                      </div>
                      <div className="el-content uk-panel uk-margin-top">
                        <ul>
                          <li>Wooden cabins or tents (4-8 bed rooms)</li>
                          <li>optional 24h Program</li>
                          <li>
                            Teambuilding, Survival, High Ropes, Flying Fox
                            Parcour, Kayak, etc.
                          </li>
                          <li>Additional excursion to Heide-/Serengeti Park</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Bayerischer Wald */}
                  <div>
                    <div className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child">
                      <h3 className="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">
                        Bayerischer Wald (Bavaria)
                      </h3>
                      <div className="el-meta uk-h4 uk-margin-top uk-margin-remove-bottom">
                        From 245 USD / Participant
                      </div>
                      <div className="el-content uk-panel uk-margin-top">
                        <ul>
                          <li>Wooden cabins or tents (4-8 bed rooms)</li>
                          <li>optional 24h Program</li>
                          <li>
                            Teambuilding, Climbing, Kanu & Kayak, Archery Tag,
                            Etc.
                          </li>
                          <li>Excursion to Silver mine and Toboggen</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Spitzingsee */}
                  <div>
                    <div className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child">
                      <h3 className="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">
                        Spitzingsee (Bavaria)
                      </h3>
                      <div className="el-meta uk-h4 uk-margin-top uk-margin-remove-bottom">
                        From 500 USD / participant
                      </div>
                      <div className="el-content uk-panel uk-margin-top">
                        <ul>
                          <li>Youth hostel (4-6 bed rooms)</li>
                          <li>24h program</li>
                          <li>
                            Teambuilding, Outdoor, Survival, Raft Building, Box
                            Climbing, River Crossing
                          </li>
                          <li>Hike in the Alps with overnight</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Berchtesgaden */}
                  <div>
                    <div className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child">
                      <h3 className="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">
                        Berchtesgaden (Bavaria)
                      </h3>
                      <div className="el-meta uk-h4 uk-margin-top uk-margin-remove-bottom">
                        From 500 USD / Participant
                      </div>
                      <div className="el-content uk-panel uk-margin-top">
                        <ul>
                          <li>Youth hostel (4-6 bed rooms)</li>
                          <li>24h program</li>
                          <li>
                            Rafting, Teambuilding, Outdoor, Survival, Catapult
                            Challenge
                          </li>
                          <li>Hike to Austria with overnight</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Example Program Image */}
              <div className="uk-grid uk-flex-center uk-child-width-1-1 uk-margin">
                <div className="uk-width-1-1">
                  <div className="uk-card uk-card-default uk-card-large uk-card-body uk-margin-remove-first-child uk-margin">
                    <Image
                      src={getTemplateImageUrl(
                        "yootheme/cache/d5/Example Program IS Trip-d5ff3dfe.png"
                      )}
                      width={1156}
                      height={936}
                      alt="Example Program IS Trip"
                      className="el-image"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="uk-section-default uk-section uk-padding-remove-vertical">
        <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
          <div className="uk-width-1-1@m">
            <div
              className="uk-position-relative uk-dark"
              style={{ height: "600px", width: "100%", zIndex: 1 }}
              uk-map=""
              data-map-type="leaflet"
            >
              <script
                type="application/json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    markers: [
                      {
                        lat: 53.5597,
                        lng: 9.9601,
                        title: "Camp Adventure Office",
                      },
                      {
                        lat: 52.8625,
                        lng: 9.5883,
                        title: "Camp Adventure Academy - Lüneburger Heide",
                      },
                      {
                        lat: 48.9701,
                        lng: 13.1263,
                        title: "Camp Adventure - Bayerischer Wald",
                      },
                      {
                        lat: 53.9246,
                        lng: -3.00764,
                        title: "Camp Adventure - Rossall School",
                      },
                      {
                        lat: 51.3802,
                        lng: -2.36674,
                        title: "Camp Adventure - Bath University",
                      },
                    ],
                    controls: true,
                    dragging: false,
                    max_zoom: 18,
                    min_zoom: 0,
                    poi: false,
                    type: "satellite",
                    zoom: "5",
                    zooming: false,
                    center: { lat: 53.5597, lng: 9.9601 },
                    lazyload: true,
                    library: "leaflet",
                    baseUrl:
                      "/templates/yootheme/vendor/assets/leaflet/leaflet/dist",
                  }),
                }}
              />
              <template suppressHydrationWarning>
                <div className="el-item uk-text-default uk-font-default uk-margin-remove-first-child">
                  <h3 className="el-title uk-margin-top uk-margin-remove-bottom">
                    Camp Adventure Office
                  </h3>
                </div>
              </template>
              <template suppressHydrationWarning>
                <div className="el-item uk-text-default uk-font-default uk-margin-remove-first-child">
                  <h3 className="el-title uk-margin-top uk-margin-remove-bottom">
                    Camp Adventure Academy - Lüneburger Heide
                  </h3>
                </div>
              </template>
              <template suppressHydrationWarning>
                <div className="el-item uk-text-default uk-font-default uk-margin-remove-first-child">
                  <h3 className="el-title uk-margin-top uk-margin-remove-bottom">
                    Camp Adventure - Bayerischer Wald
                  </h3>
                </div>
              </template>
              <template suppressHydrationWarning>
                <div className="el-item uk-text-default uk-font-default uk-margin-remove-first-child">
                  <h3 className="el-title uk-margin-top uk-margin-remove-bottom">
                    Camp Adventure - Rossall School
                  </h3>
                </div>
              </template>
              <template suppressHydrationWarning>
                <div className="el-item uk-text-default uk-font-default uk-margin-remove-first-child">
                  <h3 className="el-title uk-margin-top uk-margin-remove-bottom">
                    Camp Adventure - Bath University
                  </h3>
                </div>
              </template>
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
          className="uk-background-norepeat uk-background-contain uk-background-bottom-center uk-section uk-section-large"
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
                <div
                  className="uk-h5 uk-margin-small uk-text-center"
                  uk-scrollspy-class="uk-animation-slide-top-medium"
                >
                  Camp Adventure
                </div>
                <h3
                  className="uk-h1 uk-margin-small uk-text-center"
                  uk-scrollspy-class="uk-animation-slide-bottom-medium"
                >
                  Cooperations & Memberships
                </h3>
                <div
                  className="uk-divider-icon uk-width-medium uk-margin-auto"
                  uk-scrollspy-class=""
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
                    {/* Partnership Logos */}
                    <div>
                      <div
                        className="el-item uk-flex uk-flex-column"
                        uk-scrollspy-class=""
                      >
                        <a
                          className="uk-flex-1 uk-card uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle"
                          href="https://www.reisenetz.org/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/98/reisenetz2-98f3b127.png"
                            )}
                            width={120}
                            height={120}
                            alt="Reisenetz"
                            className="el-image"
                            loading="lazy"
                          />
                        </a>
                      </div>
                    </div>
                    <div>
                      <div
                        className="el-item uk-flex uk-flex-column"
                        uk-scrollspy-class=""
                      >
                        <a
                          className="uk-flex-1 uk-card uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle"
                          href="http://www.campingfellowship.org/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/7a/icf2-7a52c185.png"
                            )}
                            width={178}
                            height={120}
                            alt="ICF"
                            className="el-image"
                            loading="lazy"
                          />
                        </a>
                      </div>
                    </div>
                    <div>
                      <div
                        className="el-item uk-flex uk-flex-column"
                        uk-scrollspy-class=""
                      >
                        <a
                          className="uk-flex-1 uk-card uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle"
                          href="https://www.language-testing-service.de/cms/index.php?id=8"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/5f/toefl2-5f52dff4.png"
                            )}
                            width={120}
                            height={120}
                            alt="TOEFL"
                            className="el-image"
                            loading="lazy"
                          />
                        </a>
                      </div>
                    </div>
                    <div>
                      <div
                        className="el-item uk-flex uk-flex-column"
                        uk-scrollspy-class=""
                      >
                        <a
                          className="uk-flex-1 uk-card uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle"
                          href="https://www.kmdd.de/Home.htm"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/bd/kmdd2-bdeae52d.png"
                            )}
                            width={112}
                            height={120}
                            alt="KMDD"
                            className="el-image"
                            loading="lazy"
                          />
                        </a>
                      </div>
                    </div>
                    <div>
                      <div
                        className="el-item uk-flex uk-flex-column"
                        uk-scrollspy-class=""
                      >
                        <a
                          className="uk-flex-1 uk-card uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle"
                          href="https://dofe-germany.de/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/f8/dofe2-f84c724b.png"
                            )}
                            width={362}
                            height={120}
                            alt="DofE"
                            className="el-image"
                            loading="lazy"
                          />
                        </a>
                      </div>
                    </div>
                    <div>
                      <div
                        className="el-item uk-flex uk-flex-column"
                        uk-scrollspy-class=""
                      >
                        <a
                          className="uk-flex-1 uk-card uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle"
                          href="https://www.erca.uk/index.php/de/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/00/erca2-0047e06a.png"
                            )}
                            width={276}
                            height={120}
                            alt="ERCA"
                            className="el-image"
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

      {/* ProvenExpert Widget Section */}
      <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div>
                <center>
                  <div className="pe-richsnippets"></div>
                  <Script
                    src="https://www.provenexpert.com/widget/richsnippetf927.js?u=1Z3p4tQZkSQphSwAi92ZltwA0ZwAkWUZ&v=2"
                    strategy="lazyOnload"
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
