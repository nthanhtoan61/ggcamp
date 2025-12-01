"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { getTemplateImageUrl } from "@/lib/assets";

export default function GermanyLueneburgerHeidePage() {
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
            backgroundImage: `url(${getTemplateImageUrl("yootheme/cache/e0/wal_header-e0b04629.jpeg")})`,
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
                  International Summer Camp in Northern Germany, Niedersachsen
                </h1>
                <div
                  className="uk-panel uk-text-lead uk-margin uk-text-center"
                  uk-scrollspy-class=""
                >
                  <p>for children & teenagers from 7-17 years</p>
                </div>
              </div>
            </div>
            <div className="uk-grid tm-grid-expand uk-grid-margin">
              <div className="uk-width-3-4@m">
                <div className="uk-margin uk-text-right" uk-scrollspy-class="">
                  <a className="el-link" href="#Buchung" uk-scroll="">
                    <Image
                      src={getTemplateImageUrl(
                        "yootheme/cache/12/Storer-min-125a5bd1.png"
                      )}
                      width={400}
                      height={200}
                      className="el-image"
                      alt="Book now!"
                      loading="lazy"
                    />
                  </a>
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
                Our international summer camp in northern Germany, between
                Hamburg, Hanover and Bremen
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* ProvenExpert Widget Section */}
      <div
        className="uk-section-default uk-section-overlap uk-section uk-section-small"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-grid-large uk-margin-xlarge" uk-grid="">
            <div className="uk-grid-item-match uk-flex-middle uk-width-1-3@m">
              <div className="uk-panel uk-width-1-1">
                <div uk-scrollspy-class="">
                  <center>
                    <a
                      href="https://www.provenexpert.com/camp-adventure/?utm_source=Widget&utm_medium=Widget&utm_campaign=Widget"
                      title="Customer reviews & experiences for Go and Grow Camp. Show more information."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="https://images.provenexpert.com/93/fc/d5e99b2883e0bb405862d9993db6/widget_recommendation_465_086c7.png?t=1721639089410"
                        width={465}
                        height={200}
                        alt="Customer reviews & experiences for Go and Grow Camp. Show more information."
                        style={{ border: 0 }}
                        loading="lazy"
                      />
                    </a>
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
                    <span className="r-iAittVytgRl4" tabIndex={0}>
                      Children and supervisors come from all over the world and
                      do great activities, almost always outdoors. It&apos;s a
                      great place to put your cell phone aside and spend a lot of
                      time in nature. The team is really great!
                    </span>
                  </p>
                  <footer className="el-footer">
                    <cite className="el-author">
                      <a
                        className="uk-link-muted"
                        href="https://goo.gl/maps/896vDStxVm4eDa2F9"
                        target="_blank"
                      >
                        Lisa M., Germany
                      </a>
                    </cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Basic Facts Section */}
      <div className="uk-section-muted uk-section-overlap uk-section">
        <div className="uk-container uk-container-small">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div className="uk-h5 uk-margin-remove-bottom uk-text-center">
                Germany
              </div>
              <h2 className="uk-h2 uk-text-center">
                Book our vacation camp with children and young people from all
                over the world
              </h2>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
              <ul className="uk-list uk-list-divider uk-list-large uk-text-left@s uk-text-center" uk-scrollspy-class="uk-animation-slide-right-small">
                <li className="el-item">
                  <div className="uk-child-width-expand@m uk-grid-small" uk-grid="">
                    <div className="uk-width-medium@m uk-text-break">
                      <div className="el-title uk-margin-remove uk-text-bold">
                        Location
                      </div>
                    </div>
                    <div>
                      <div className="el-content uk-panel">
                        <p>Lüneburger Heide (Walsrode), Niedersachsen</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="el-item">
                  <div className="uk-child-width-expand@m uk-grid-small" uk-grid="">
                    <div className="uk-width-medium@m uk-text-break">
                      <div className="el-title uk-margin-remove uk-text-bold">
                        Ages
                      </div>
                    </div>
                    <div>
                      <div className="el-content uk-panel">
                        <p>Junior 7 - 12 years</p>
                        <p>Senior 12 - 15 years</p>
                        <p>Senior Plus/Leadership 15 - 17 years</p>
                        <p>ICIT 17 - 19 years</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="el-item">
                  <div className="uk-child-width-expand@m uk-grid-small" uk-grid="">
                    <div className="uk-width-medium@m uk-text-break">
                      <div className="el-title uk-margin-remove uk-text-bold">
                        Rates
                      </div>
                    </div>
                    <div>
                      <div className="el-content uk-panel">
                        <p>from 435 USD</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="el-item">
                  <div className="uk-child-width-expand@m uk-grid-small" uk-grid="">
                    <div className="uk-width-medium@m uk-text-break">
                      <div className="el-title uk-margin-remove uk-text-bold">
                        Duration
                      </div>
                    </div>
                    <div>
                      <div className="el-content uk-panel">
                        <p>from 7 days (Sun - Sat)</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="el-item">
                  <div className="uk-child-width-expand@m uk-grid-small" uk-grid="">
                    <div className="uk-width-medium@m uk-text-break">
                      <div className="el-title uk-margin-remove uk-text-bold">
                        Accommodation
                      </div>
                    </div>
                    <div>
                      <div className="el-content uk-panel">
                        <p>Tent village (6 - 7 beds per tent)</p>
                        <p>Adventure Lodges (4 - 8 beds per room)</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="el-item">
                  <div className="uk-child-width-expand@m uk-grid-small" uk-grid="">
                    <div className="uk-width-medium@m uk-text-break">
                      <div className="el-title uk-margin-remove uk-text-bold">
                        Courses
                      </div>
                    </div>
                    <div>
                      <div className="el-content uk-panel">
                        <p>
                          Adventure, Sports & Creative, English, German,
                          Lifeguarding, Dancing, Creative Camp, Fishing, Survival,
                          Soccer, Horseback Riding, Husky Camp, Senior Plus,
                          Leadership, International Camp Counselor in Training
                          (ICIT)
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="uk-margin uk-text-center" uk-scrollspy-class="uk-animation-fade">
                <div className="uk-flex-middle uk-grid-small uk-child-width-auto uk-flex-center" uk-grid="">
                  <div className="el-item">
                    <a
                      className="el-content uk-button uk-button-default"
                      href="#Profile"
                      uk-scroll=""
                    >
                      Courses
                    </a>
                  </div>
                  <div className="el-item">
                    <a
                      className="el-content uk-button uk-button-default"
                      href="#Daten"
                      uk-scroll=""
                    >
                      Dates & Prices
                    </a>
                  </div>
                  <div className="el-item">
                    <a
                      className="el-content uk-button uk-button-default"
                      href="#Transfers"
                      uk-scroll=""
                    >
                      Transfers
                    </a>
                  </div>
                  <div className="el-item">
                    <a
                      className="el-content uk-button uk-button-default"
                      href="#Buchung"
                      uk-scroll=""
                    >
                      Booking
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Location & Map Section */}
      <div
        className="uk-section-default uk-section-overlap uk-section"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-margin-medium uk-container uk-container-small">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1">
              <div className="uk-width-1-1@m">
                <div className="uk-panel uk-text-lead uk-margin" uk-scrollspy-class="">
                  <p>
                    Our Go and Grow Camp Academy is located almost halfway between
                    Bremen, Hamburg and Hanover in the beautiful Lüneburger Heide.
                    The site is our biggest international summer camp in Northern
                    Germany, Niedersachsen
                  </p>
                </div>
                <div
                  className="uk-panel uk-column-1-2@m uk-column-1-1@s uk-margin"
                  uk-scrollspy-class=""
                >
                  <p>
                    Within walking distance of an old traditional North German
                    village with farms and half-timbered houses, we have space on
                    more than 150,000 m². The Academy is divided into the
                    activity worlds Beach & Water, Survival and Creative. Each
                    area offers space for countless exciting activities. Whether
                    kayaking, jumping on the water trampoline, building rafts,
                    survival training with shelter building and fire making or
                    climbing in the high ropes course; adventure seekers and
                    creative types will get their money&apos;s worth here.
                  </p>
                </div>
                <div
                  className="uk-position-relative uk-position-z-index uk-dark"
                  style={{ height: "300px" }}
                  uk-map=""
                  data-map-type="leaflet"
                  uk-scrollspy-class=""
                >
                  <script
                    type="application/json"
                    dangerouslySetInnerHTML={{
                      __html: JSON.stringify({
                        markers: [
                          {
                            lat: 52.8481,
                            lng: 9.4724,
                            title: "Go and Grow Camp Academy - Walsrode",
                          },
                        ],
                        controls: true,
                        dragging: true,
                        max_zoom: 18,
                        min_zoom: 0,
                        poi: false,
                        type: "roadmap",
                        zoom: "7",
                        zooming: true,
                        center: { lat: 52.8481, lng: 9.4724 },
                        lazyload: true,
                        library: "leaflet",
                        baseUrl:
                          "/templates/yootheme/vendor/assets/leaflet/leaflet/dist",
                      }),
                    }}
                  ></script>
                  <template>
                    <div className="el-item uk-text-default uk-font-default uk-margin-remove-first-child">
                      <h3 className="el-title uk-margin-top uk-margin-remove-bottom">
                        Go and Grow Camp Academy - Walsrode
                      </h3>
                      <div className="el-content uk-panel uk-margin-top">
                        <p>Internationale Sport-, Sprach & Abenteuer Camps</p>
                      </div>
                    </div>
                  </template>
                </div>
                <div className="uk-margin" uk-scrollspy-class="">
                  <Image
                    src={getTemplateImageUrl(
                      "yootheme/cache/6b/campwalsrodemapWEB-min-6bfc1d18.png"
                    )}
                    width={1285}
                    height={640}
                    className="el-image"
                    alt="plan of the holidaycamp northern germany"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accommodation & Meals Section */}
      <div
        className="uk-section-default uk-section-overlap uk-section uk-padding-remove-top"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-margin-medium uk-container uk-container-small">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1">
              <div className="uk-width-1-1@m">
                <h2
                  className="uk-h2 uk-text-center"
                  uk-scrollspy-class="uk-animation-slide-left-medium"
                >
                  Accommodation & meals in the tent camp or the Adventure Lodges
                </h2>
                <div
                  className="uk-divider-icon uk-width-medium uk-margin-auto"
                  uk-scrollspy-class="uk-animation-slide-right-medium"
                ></div>
                <div
                  className="uk-panel uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin"
                  uk-scrollspy-class="uk-animation-slide-left-medium"
                >
                  <p>
                    At our international vacation camp in Lower Saxony, you can
                    choose between accommodation in tents and cabins when you
                    register. Our seniors sleep in their own tent village
                    separately from the juniors, so that both age groups have
                    their own tent village. From the two tent villages and the
                    huts it&apos;s not far to the wash houses and toilets. The
                    sanitary facilities are separate for boys and girls. The
                    supervisors, our &quot;teamers&quot;, live right next door
                    and are there for you around the clock if you have any
                    questions, requests or problems - 24 hours a day!
                  </p>
                </div>
                <div uk-accordion="collapsible: true;" uk-scrollspy-class="">
                  <div className="el-item">
                    <a className="el-title uk-accordion-title" href="">
                      Tent Village - for that very special adventure feeling
                    </a>
                    <div className="uk-accordion-content">
                      <div className="el-content uk-panel">
                        <p>
                          Our tent villages have tents with six to seven sleeping
                          places. Equipped with a wooden floor and gallery, they
                          invite you to spend the night in comfort. Children can
                          make themselves wonderfully comfortable here with a
                          sleeping bag and sleeping mat.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="el-item">
                    <a className="el-title uk-accordion-title" href="">
                      Adventure Lodges - just like in Canada
                    </a>
                    <div className="uk-accordion-content">
                      <div className="el-content uk-panel">
                        <p>
                          Our cabins are each equipped with four to eight beds -
                          of course the shared rooms are separated by gender.
                          There are shelves and seating available in the rooms.
                          The overnight stay in the hut is charged extra at USD
                          120 (per week).
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="el-item">
                    <a className="el-title uk-accordion-title" href="">
                      Catering
                    </a>
                    <div className="uk-accordion-content">
                      <div className="el-content uk-panel">
                        <p>
                          We cook fresh - always! We don&apos;t serve packet soup
                          and boring food. Our menus are freshly prepared. Of
                          course, we serve fresh bread rolls, cold cuts and a
                          wide selection of fruit and cereals at breakfast. We
                          have juices and tea to drink. During the day, water
                          with or without sparkling water is available from our
                          water machines and, of course, fresh fruit is always
                          available for the first hunger pangs. At lunchtime and
                          in the evening, we usually cook hot meals - with the
                          exception of snacks. Of course, water and fresh salads
                          from the buffet are also available for these meals.
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

      {/* Courses Section */}
      <div
        className="uk-section-muted uk-section-overlap uk-section"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-margin-medium uk-container uk-container-small">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1">
              <div className="uk-width-1-1@m">
                <h2
                  className="uk-h2 uk-text-center"
                  id="Profile"
                  uk-scrollspy-class=""
                >
                  Courses
                </h2>
                <div
                  className="uk-divider-icon uk-width-medium uk-margin-auto"
                  uk-scrollspy-class=""
                ></div>
                <div
                  className="uk-panel uk-text-large uk-margin"
                  uk-scrollspy-class=""
                >
                  <p>
                    At our international summer camp in Lüneburger Heide, you can
                    choose from a wide range of courses. Whether you want to
                    improve your English or German language skills, participate in
                    sports activities, or try out creative activities - we have
                    something for everyone!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dates & Prices Section */}
      <div
        className="uk-section-default uk-section-overlap uk-section"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-margin-medium uk-container uk-container-small">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1">
              <div className="uk-width-1-1@m">
                <div className="uk-h2 uk-text-center" uk-scrollspy-class="">
                  <a id="Daten"></a>Dates & Prices 2026
                </div>
                <div
                  className="uk-divider-icon uk-width-medium uk-margin-auto"
                  uk-scrollspy-class=""
                ></div>
                <div
                  className="uk-panel uk-text-large uk-margin"
                  uk-scrollspy-class=""
                >
                  <p>
                    Please check our booking system for current dates and prices.
                    Prices start from 435 USD per week.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transfers Section */}
      <div
        className="uk-section-muted uk-section-overlap uk-section"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-slide-bottom-small; delay: false;"
      >
        <div className="uk-container uk-container-small">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-margin-large">
            <div className="uk-width-1-1@m">
              <div className="uk-h2 uk-text-center" uk-scrollspy-class="">
                <a id="Transfers"></a>Arrival & Departure Services
              </div>
              <div
                className="uk-divider-icon uk-width-medium uk-margin-auto"
                uk-scrollspy-class=""
              ></div>
            </div>
          </div>
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div className="uk-margin" uk-scrollspy-class="">
                <ul
                  className="el-nav uk-margin uk-subnav uk-subnav-pill uk-flex-center"
                  uk-switcher="connect: #js-6; animation: uk-animation-fade;"
                >
                  <li>
                    <a href="">Airport Transfer</a>
                  </li>
                  <li>
                    <a href="">Independent arrival & departure</a>
                  </li>
                  <li>
                    <a href="">Train Station Transfer</a>
                  </li>
                </ul>
                <div id="js-6" className="uk-switcher" uk-height-match="row: false">
                  <div className="el-item uk-margin-remove-first-child">
                    <div className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">
                      Airport Transfer
                    </div>
                    <div className="el-content uk-panel uk-margin-top">
                      <p>
                        Here you can choose between our <b>shared transfer</b> for
                        USD 85 each way and a <b>private transfer</b> for USD 350
                        each way.
                      </p>
                      <p>
                        <b>Collective transfer</b>
                      </p>
                      <p>
                        With this shuttle, all children are first picked up at the
                        exit directly behind the baggage carousel and then taken to
                        the camp together. This can lead to <b>waiting times</b>.
                      </p>
                      <p>
                        Our team will be at the airport <b>from 10 a.m.</b> to
                        collect all arriving children. For parents who accompany
                        their children to <b>Hamburg Airport</b> themselves, we
                        offer a central meeting point (at the Rakete) at the
                        McDonald&apos;s restaurant at Hamburg Airport. Depending on
                        the number of participants, the transfer can take place by{" "}
                        <b>bus, train or car</b>. The shuttle will leave the airport
                        with all children and supervisors in the direction of the
                        camp by <b>4 p.m.</b> at the latest.
                      </p>
                      <p>
                        All flights landing later than 3 p.m. cannot be considered
                        for this transfer. In this case we recommend that you book
                        our private transfer.
                        <br />
                        If your flight lands before 10 a.m., we will have to send
                        an extra supervisor to the airport earlier to pick up your
                        child at the exit after the baggage carousel. This also
                        applies to the return journey if the flight departs later
                        than 6 pm. We charge an extra USD 50 for this service, in
                        addition to the normal transfer costs. These costs cover the
                        service of picking up your child earlier/checking them in
                        later and looking after them.
                      </p>
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>Shuttle</td>
                            <td>Landing Time</td>
                            <td>Departure Time</td>
                            <td>Costs one way</td>
                          </tr>
                          <tr>
                            <td>Airport Hamburg at the gate</td>
                            <td>10 am - 3 pm</td>
                            <td>2 - 6 pm</td>
                            <td>120 USD</td>
                          </tr>
                          <tr>
                            <td>
                              Airport Hamburg meeting point McDonald&apos;s (at the
                              rocket)
                            </td>
                            <td>2 pm</td>
                            <td>12:30 pm</td>
                            <td>110 USD</td>
                          </tr>
                          <tr>
                            <td>Airport Hanover</td>
                            <td>10 am - 4 pm</td>
                            <td>1 - 6 pm</td>
                            <td>90 USD</td>
                          </tr>
                        </tbody>
                      </table>
                      <p>
                        Please note the different regulations of the airlines with
                        regard to children traveling alone. If your child is
                        traveling as an <b>UM (unaccompanied minor)</b>, we will
                        charge an extra USD 20 for the increased expense.
                      </p>
                      <p> </p>
                      <p>
                        <b>Private transfer</b>
                      </p>
                      <p>
                        This transfer is recommended if the landing time on the day
                        of arrival is later than 3 p.m., the departure time on the
                        day of departure is before 2 p.m., the arrival or departure
                        is to take place on other days or you do not want your
                        children to have to wait at the airport. Up to two children
                        can share this transfer.
                      </p>
                    </div>
                  </div>
                  <div className="el-item uk-margin-remove-first-child">
                    <div className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">
                      Independent arrival & departure
                    </div>
                    <div className="el-content uk-panel uk-margin-top">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>Arrival</td>
                            <td>Sunday</td>
                            <td>4 - 6 pm</td>
                          </tr>
                          <tr>
                            <td>Departure</td>
                            <td>Saturday</td>
                            <td>10 am - noon</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="el-item uk-margin-remove-first-child">
                    <div className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">
                      Train Station Transfer
                    </div>
                    <div className="el-content uk-panel uk-margin-top">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>Shuttle</td>
                            <td>Arrival time</td>
                            <td>Departure time</td>
                            <td>Costs one way</td>
                          </tr>
                          <tr>
                            <td>Hanover main station at the platform</td>
                            <td>2 - 4 pm</td>
                            <td>11 am - 1 pm</td>
                            <td>65 USD</td>
                          </tr>
                          <tr>
                            <td>
                              Hanover main station meeting point McDonald&apos;s
                            </td>
                            <td>3:30 pm</td>
                            <td>10:30 am</td>
                            <td>59 USD</td>
                          </tr>
                        </tbody>
                      </table>
                      <p>
                        Depending on the number of participants, the transfer can
                        take place by bus, train or car.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div
        className="uk-section-default uk-section-overlap uk-section"
        id="Buchung"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-margin-medium uk-container uk-container-small">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1">
              <div className="uk-width-1-1@m">
                <h2 className="uk-h2 uk-text-center">Booking</h2>
                <div
                  className="uk-divider-icon uk-width-medium uk-margin-auto"
                ></div>
                <div>
                  <div style={{ textAlign: "center" }}>
                    <iframe
                      src="https://bookacamp.de/en/booking/form/view-by-camp/ds7fdn347dsfndsf74n37en37en37dnd/walsrode"
                      title="Bookacamp, die Buchungsplattform von Go and Grow Camp"
                      allowFullScreen={true}
                      width="1000"
                      height="1700"
                      frameBorder="0"
                    ></iframe>
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

