"use client";

import Link from "next/link";
import Image from "next/image";
import { getTemplateImageUrl } from "@/lib/assets";

export default function InnovationConsultingPage() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="uk-section-primary uk-section-overlap uk-position-relative"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div
          data-src={getTemplateImageUrl(
            "yootheme/cache/73/beratung_header-736cfc77.jpeg"
          )}
          uk-img=""
          className="uk-background-norepeat uk-background-cover uk-background-top-center uk-section uk-section-xlarge"
          style={{
            backgroundImage: `url(${getTemplateImageUrl(
              "yootheme/cache/73/beratung_header-736cfc77.jpeg"
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
                <div
                  className="uk-heading-large uk-text-center"
                  uk-scrollspy-class=""
                >
                  Innovation Consultancy
                </div>
                <div
                  className="uk-panel uk-text-lead uk-margin uk-text-center"
                  uk-scrollspy-class=""
                >
                  <p>Consulting for hotels, resorts &amp; amusement parks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div
        className="uk-section-default uk-section-overlap uk-section uk-padding-remove-bottom"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-grid-margin" uk-grid="">
            <div className="uk-width-1-3@m">
              <div className="uk-margin">
                <Image
                  src={getTemplateImageUrl(
                    "yootheme/cache/ad/Jan-Vieth_Potrait-ad3f092b.jpg"
                  )}
                  width={250}
                  height={166}
                  className="el-image"
                  alt="Jan Vieth"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="uk-width-2-3@m">
              <blockquote>
                <p>
                  &quot;Spending the night under the stars, listening to the
                  cracking of wood, managing a climbing challenge, feeling the
                  enthusiasm of the people – this is Camp Adventure.&quot;
                </p>
              </blockquote>
            </div>
          </div>
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div className="uk-panel uk-text-large uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin">
                <p>
                  I always wanted to give the people an understanding of the
                  fact that adventure programs can take place in a safe
                  environment and therefore are made for everyone. Not only kids
                  love to get the chance to overcome their own limitations but
                  adults also want to test how far they can go. This is why I
                  founded Camp Adventure. Another kind of adventure for me but
                  it paid off. Nowadays 120 employees, who work for Camp
                  Adventure mainly in summer, make it possible for more and more
                  people to get the opportunity to have those special
                  experiences.
                </p>
                <ul>
                  <li>
                    Participants who experience their first camp fire after they
                    exceeded their own expectations on the high rope course
                  </li>
                  <li>
                    Growing together as a team due to finding solutions together
                    where there was no way before
                  </li>
                  <li>
                    Managers who realise their own strengths as well as those of
                    their team in a completely new way
                  </li>
                  <li>
                    Hotels and resorts that are surprised by the smiling guests
                    because of the Adventure program
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="uk-section-muted uk-section-overlap uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div className="uk-h5 uk-margin-small uk-text-center">
                All this is
              </div>
              <div className="uk-h1 uk-margin-small uk-text-center">
                Camp Adventure
              </div>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
              <div className="uk-panel uk-text-large uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin">
                <p>
                  Camp Adventure stands for safety, integrity, togetherness,
                  individuality, responsibility and creativity. In combination
                  with our motivation and enthusiasm, we offer clients and
                  participants high quality programs. Challenges, changes and
                  cooperation should clear the way for improvements. I hereby
                  invite you to have a look at our services in the area of
                  consulting and the building of adventure facilities, also for
                  your house. See for yourself that adventure programs are part
                  of the future of tourism. Thanks to our international network
                  we are able to work for you in German, English, French and
                  Spanish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Consulting Section */}
      <div className="uk-section-default uk-section-overlap uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h1 className="uk-h1 uk-margin-small uk-text-center">
                Innovation Consultancy
              </h1>
              <div className="uk-h5 uk-margin-small uk-text-center">
                Consulting for hotels, resorts &amp; amusement parks
              </div>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
              <blockquote>
                <p>
                  &quot;Anyone can offer room and board – Camp Adventure will
                  attract new clients to your hotel or destination by creating
                  memorable moments. With highly involved consolation, we will
                  help develop programs and packages that will keep your clients
                  close to your location. The adventure is out there, we will
                  help you to find it!&quot;
                </p>
                <p>Jan Vieth, Owner-Manager of Camp Adventure</p>
              </blockquote>

              <div className="uk-h2 uk-heading-line uk-text-center">
                <span>Innovative</span>
              </div>
              <div className="uk-panel uk-text-large uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin">
                <p>
                  We are experts in programming and outdoor concepts. Camp
                  Adventure can help you find the best programs possible for
                  your location. Due to our international contacts and offices
                  in Canada and Europe, we know when new trends are developing
                  and can offer many relevant products! We are not only
                  consultants, but tour operators as well – we know what your
                  clients need because we work with them! Our program
                  specialists are knowledgeable: gaining experience first in
                  their roles as program directors at our camps, or as team and
                  management coaches. You can benefit from our practical
                  experience – we only recommend the best products. All our
                  programs are checked for quality, giving you the best value
                  for your money. We are represented in diverse fairs,
                  conferences and trend shows throughout the world. We work
                  together with several trend agencies to find the most
                  innovative ideas, giving you the best outcome!
                </p>
              </div>

              <div className="uk-h2 uk-heading-line uk-text-center">
                <span>Safety</span>
              </div>
              <div className="uk-panel uk-text-large uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin">
                <p>
                  We go above and beyond in the CAMP ADVENTURE ACADEMY and our
                  team of qualified professionals will provide your staff with
                  the necessary training. We will help you develop new tour
                  options and special offers in your area and always with an eye
                  on safety! We check all safety standards, so your guest will
                  be comfortable and can maximize their enjoyment! Through
                  cooperation with the TÜV Germany and the European Ropes Course
                  Association we can double-check and certify all safety
                  relevant equipment and facilities. Our German engineers and
                  designers will guarantee the best quality and safety standards
                  for your guests.
                </p>
              </div>

              <div className="uk-h2 uk-heading-line uk-text-center">
                <span>Efficient</span>
              </div>
              <div className="uk-panel uk-text-large uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin">
                <p>
                  We will look at each location individually, checking your
                  investment plan and your target group. We help you find the
                  best options for your clients so you can gain new ones with a
                  unique specialized program: your own personal USP (unique
                  selling point).
                  <br />
                  Only the best and most efficient solutions will be presented!
                  <br />
                  We will summarize all programs and concepts in a brief and
                  convenient manner, helping to provide connections with
                  appropriate partners, if needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Offer Section */}
      <div className="uk-section-muted uk-section-overlap uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div className="uk-h2 uk-text-center">Our Offer</div>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
              <div className="uk-panel uk-text-large uk-column-1-2@m uk-column-1-1@s uk-margin">
                <ul>
                  <li>Pre-check and assessment of the hotel&apos;s homepage</li>
                  <li>
                    Initial review of opportunities and services in your
                    location
                  </li>
                  <li>On-site consultation with the hotel manager</li>
                  <li>
                    Visit of the location with our special program checklist
                  </li>
                  <li>
                    Checking the program options that are already available
                  </li>
                  <li>
                    Evaluating the suitability of the program for your target
                    group
                  </li>
                  <li>Brainstorming new options with the Hotel Manager</li>
                  <li>
                    Evaluating the integration possibility with the hotel
                    management
                  </li>
                  <li>
                    Summarizing new program and package options for the hotel
                    management
                  </li>
                  <li>
                    Developing offers for program infrastructure or staff
                    training with partners
                    <br />
                    <br />
                    Costs for this consultancy package is 1.850 USD excl. travel
                    and accommodation costs where needed.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Options Section */}
      <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div className="uk-h2 uk-text-center">Options</div>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>

              <h2 className="uk-h4 uk-heading-line uk-text-primary uk-text-center">
                <span>Integrating Hotel Staff /Service Partners</span>
              </h2>
              <div className="uk-panel uk-text-large uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin">
                <p>
                  Let us help you awaken the innovation that rests within your
                  employees and your partners. Through a one day workshop, we
                  will create a positive atmosphere and develop the best program
                  and package concepts for the improvement of your hotel.&nbsp;
                  This workshop will not only generate a great resource of ideas
                  from your employees, but will also motivate your staff to
                  enact the changes needed for success. The involvement of
                  partners from the surrounding area is encouraged to help seek
                  out all that your region can offer (price on request).
                </p>
              </div>

              <h2 className="uk-h4 uk-heading-line uk-text-primary uk-text-center">
                <span>Destination Check</span>
              </h2>
              <div className="uk-panel uk-text-large uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin">
                <p>
                  You are sure there is much for your guests to discover, but
                  you want to show them the &quot;hidden&quot; path? Following a
                  thorough web and telephone based check, our experts will spend
                  2-4 days finding new options and specialty concepts that
                  perhaps you were unaware of. After the site visit, a summary
                  of the best program options in your destination and the
                  partners who offer them will be provided. Additionally, we
                  help create complete program packages for your hotel and
                  confirm the safety standards of all partners with our
                  specialists or the TÜV Germany (price on request).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Do you love your project Section */}
      <div
        className="uk-section-secondary uk-section-overlap"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-slide-bottom; delay: 200;"
      >
        <div
          data-src={getTemplateImageUrl(
            "yootheme/cache/35/about-joinus-3599df70.jpeg"
          )}
          uk-img=""
          className="uk-background-norepeat uk-background-cover uk-background-center-center uk-background-fixed uk-section uk-flex uk-flex-middle uk-height-viewport"
          style={{
            backgroundImage: `url(${getTemplateImageUrl(
              "yootheme/cache/35/about-joinus-3599df70.jpeg"
            )})`,
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
                      Do you love your project?
                    </div>
                    <div
                      className="uk-panel uk-text-lead uk-margin uk-text-left@m uk-text-center"
                      uk-scrollspy-class=""
                    >
                      <p>
                        So, you have a passion for the outdoors? You want that
                        your guest experience an emotional trip rather than just
                        another hotel? We can help you!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="uk-grid-item-match uk-flex-middle uk-width-1-3@m">
                  <div className="uk-panel uk-width-1-1">
                    <div
                      className="uk-margin uk-text-right@m uk-text-center"
                      uk-scrollspy-class=""
                    >
                      <a
                        className="el-content uk-button uk-button-default uk-button-large"
                        href="#contact"
                        uk-scroll=""
                      >
                        Contact us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tree Houses Section */}
      <div
        className="uk-section-default uk-section-overlap uk-section"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-slide-bottom-small; delay: false;"
      >
        <div className="uk-container uk-container-small">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-margin-large">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h2 uk-text-center" uk-scrollspy-class="">
                Tree Houses
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
                  We realise your dream of having your own tree house hotel!
                </p>
                <p>
                  Do you want to create a unique place of rest and relaxation,
                  offer your guests an exceptional retreat and a special
                  overnight experience? Leaving everyday life behind and falling
                  asleep in the trees in a tree house is the dream of many.
                </p>
                <p>There are diverse possibilities for treehouses:</p>
                <ul>
                  <li>
                    <span lang="en">
                      Special outdoor overnight suite e.g. for wedding couples
                    </span>
                  </li>
                  <li>Adventurous Family Room</li>
                  <li>Seminar room. Especially for outdoor training</li>
                  <li>Viewing platform</li>
                  <li>Outdoor treehouse bar</li>
                  <li>Complete tree house hotel concept</li>
                  <li>
                    Youth overnight room with room for 6 children / teenagers
                  </li>
                </ul>
                <p>
                  Whether in the middle of the trees, on stilts in the lake or
                  on the flat land: we will be happy to help you find the ideal
                  solution so that your guests can also enjoy the view and
                  atmosphere of our &quot;Made in Germany&quot; tree houses.
                </p>
                <p>&nbsp;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Outdoor Programs Section */}
      <div
        className="uk-section-default uk-section-overlap uk-section"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-slide-bottom-small; delay: false;"
      >
        <div className="uk-container uk-container-small">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-margin-large">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h2 uk-text-center" uk-scrollspy-class="">
                Outdoor Programs
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
                  We offer a variety of outdoor programs which can be
                  individually designed for you. Besides water sports, climbing,
                  archery and miniature golf, we make your dream of your own
                  tree house or a perfect high rope course come true.
                </p>
              </div>
              <div className="uk-margin" uk-scrollspy-class="">
                <ul
                  className="el-nav uk-margin uk-subnav uk-subnav-pill uk-flex-center"
                  uk-switcher="connect: #js-1; itemNav: #js-2; animation: uk-animation-fade;"
                >
                  <li>
                    <a href="">Outdoor Facilities</a>
                  </li>
                  <li>
                    <a href="">Outdoor Program</a>
                  </li>
                  <li>
                    <a href="">Conceptual organization of High Rope Courses</a>
                  </li>
                </ul>
                <div
                  id="js-1"
                  className="uk-switcher"
                  uk-height-match="row: false"
                >
                  <div className="el-item uk-margin-remove-first-child">
                    <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">
                      Outdoor Facilities
                    </h3>
                    <div className="el-content uk-panel uk-margin-top">
                      <p>
                        <strong>Tree houses</strong>
                        <br />
                        Lounge or luxury room? You want something special for
                        your clients? A common room in the trees or a bed room
                        in the tree tops? We guarantee a fantastic view and a
                        unique feature for your house.
                        <br />
                        <br />
                        We design a tree house according to your desire.
                        You&apos;ll get several drafts, different perspectives,
                        a sketch and information about legal issues and
                        regulations.
                        <br />
                        <br />
                        <strong>Adventure Miniature Golf Course</strong>
                        <br />
                        The Adventure Miniature golf Parkour is a special
                        adventure for families and any kind of groups. The
                        exceptional stations are built from natural materials
                        and create an experience beyond fantasy and gravity.
                        <br />
                        <br />
                        According to the conditions we design a parkour with
                        8-16 stations in little ponds, slopes or hollows.
                        Courses with certain themes like &quot;Safari
                        wilderness&quot; or &quot;water world&quot; are also
                        possible. Let us show you our creativity. Camp Adventure
                        provides you with all the equipment and briefs your
                        employees on how to operate system. No special training
                        is required.
                        <br />
                        <br />
                        <strong>Archery facility</strong>
                        <br />
                        With a professional archery range that is suitable for
                        beginners and experienced shooters, your range of
                        activities can be expanded with this exciting highlight.
                        The quick set up and removal of about 15 minutes is a
                        big advantage and lets you react immediately to the
                        client´s wishes.
                        <br />
                        <br />
                        Camp Adventure provides the whole equipment for indoor
                        and outdoor solutions including 3D targets.
                        Alternatively we can equip the facility with natural
                        materials to create a real adventure atmosphere. We
                        supply 4 bows for right-handed people and 2 for
                        left-handed, several arrows, one net and a complete set
                        of materials for repair.
                        <br />
                        The required trainings and certifications for safe
                        handling to usual&nbsp;standards of &quot;Archery
                        Instructors&quot; are offered by the Camp Adventure
                        Academy.
                      </p>
                      <p>
                        <strong>Artificial rock climbing</strong>
                        <br />
                        A freestanding climbing tower is a perfect outdoor
                        attraction for your hotel or resort. Each tower consists
                        of one vertical, two inclined facades and one overhang.
                        There are 14 climbing routes with different levels.
                        <br />
                        <br />
                        You can choose between different sizes:
                        <br />
                        <br />
                        6m and 110m² climbing space
                        <br />
                        7m and 129m² climbing space
                        <br />
                        8m and 147m² climbing space
                        <br />
                        9m and 165m² climbing space
                        <br />
                        10m and 184m² climbing space
                        <br />
                        <br />
                        Scope of delivery: climbing steel tower, mats,
                        self-saving equipment, removable cover plate,
                        instructions for use, guarantee precautions, maintenance
                        precautions.
                        <br />
                        The climbing rocks are based on European standards EN
                        12572 with a two year guarantee and a maintenance
                        contract. If you want to we can send you a calculation
                        including transportation and installation.
                        <br />
                        &nbsp;
                        <br />
                        <strong>Adventure Lounge</strong>
                        <br />
                        The Adventure Lounge is a common room to relax and for
                        adventures at the same time. It invites you with its
                        different stations to spend the evening after an
                        adventurous day.
                        <br />
                        <br />
                        For the tireless of you, there is an indoor climbing
                        wall, a kicker, darts, billiard and many other team
                        sports available. During the breaks, a comfortable sofa
                        area with a fireplace corner is available so that the
                        events of the day can be reflected on; or to conduct an
                        informal training reflection with company groups. A
                        light and sound system lets you create the atmosphere
                        you would like to have. You can for example project the
                        pictures of the adventure day on the screen. Depending
                        on the local conditions, there is the possibility to
                        reorganise the room or to build a wooden hut with access
                        to the catering of your hotel.
                      </p>
                      <p>
                        <strong>Low Rope Teambuilding Course</strong>
                        <br />
                        The elements of the Low Rope Course will be placed at a
                        low height so that people with fear of heights can
                        participate. We experienced that participants left their
                        own comfort zone and met fears that blocked their
                        professional or personal life in some way. Each
                        challenge aims at supporting the other team members and
                        acting as a team.
                        <br />
                        <br />
                        A successful participation forms confidence, reputation,
                        leadership skills and even friendships. Low Rope Courses
                        are a great opportunity for teambuilding in companies,
                        sports clubs, families or students in school. The course
                        helps improve communication, problem solving and
                        bonding. The activities according to the target groups
                        are a part of the marketing of your house that helps you
                        attract new guests. In small groups you work on
                        communication skills, patience, innovative thinking and
                        techniques for problem solving. Participants have to go
                        through a spider&apos;s web, swing over a
                        &quot;bottomless hole&quot; or pass a bog with
                        alligators in it. Elements of the low ropes can be
                        placed as a station or as portable constructions to use
                        them for events with 8-16 people.
                        <br />
                        Camp Adventure plans and constructs a course that fits
                        to the furnishing of your hotel or resort. Families,
                        companies and guests will be brought together in a whole
                        new way with the course. We also train your employees in
                        the Camp Adventure Academy with a Low Ropes Course
                        Instructors certification.
                        <br />
                        <br />
                        Two examples (other activities on request):
                        <br />
                        <br />
                        <span style={{ textDecoration: "underline" }}>
                          Spider&apos;s web
                        </span>
                        <br />
                        The goal of the spider&apos;s web is to move all
                        participants through the holes of the big web without
                        touching the ropes. You cannot use those openings that
                        were used by other participants. If a person touches the
                        ropes by accident they have to begin again and go
                        through the same opening.
                        <br />
                        <br />
                        <span style={{ textDecoration: "underline" }}>
                          Team wall
                        </span>
                        <br />
                        The goal here is to climb a 3,5m wall. This challenge
                        causes that the participants realise that blockades are
                        possible even if they never thought there could be some.
                        Those blockades are conquerable with the help of others.
                        This activity is often used to show that you are only
                        successful in a team with a considered plan.
                      </p>
                      <p>
                        <br />
                        <span style={{ textDecoration: "underline" }}>
                          High Rope Courses the ground or in the forest
                        </span>
                        <br />
                        In High Rope Courses you get to know your personal
                        limits and try to overcome them as a single person or in
                        a group. The height and the apparent possibility to fall
                        is an intense feeling for the participants. On the other
                        side it is a way of raising self-confidence and is
                        therefore good for overcoming other fears.
                        <br />
                        <br />
                        We offer different models:
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        1.&nbsp;&nbsp;&nbsp; High Rope Elements with the focus
                        on team training (for seminar and business groups)
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        2.&nbsp;&nbsp;&nbsp; Adventure park with the focus on
                        fun (for families and leisure guests)
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        3.&nbsp;&nbsp;&nbsp; High Rope Work and Fun Station as a
                        mixture of both (for business groups and leisure guests)
                      </p>
                    </div>
                  </div>
                  <div className="el-item uk-margin-remove-first-child">
                    <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">
                      Outdoor Program
                    </h3>
                    <div className="el-content uk-panel uk-margin-top">
                      <p>
                        <strong>Canoeing and kayaking</strong>
                        <br />
                        The element water is a fascination for many people.
                        Noiseless sliding through the silent nature or powerful
                        paddling in a competition – those experiences make a
                        mental note.
                        <br />
                        Is there a sea next to your hotel or resort that you
                        want to use? We support you by collecting new ideas for
                        you and your guests. Activities like sea kayaking for
                        the exploration of nature, canoeing in the night or raft
                        building are possible if you want to do something for
                        team building with your managers. According to your
                        wishes and nature conditions we create the ideal concept
                        for you. Of course we pay attention to the currents as
                        well as to safety precautions to reduce the risk for
                        your guests. In addition we support you regarding the
                        necessary equipment for example life jackets and are
                        responsible for the training of your employees.
                        <br />
                        <br />
                        <strong>Camp fire places and program</strong>
                        <br />
                        Wild camp fire romance under the stars – this is how
                        real adventures begin and a nice alternation for your
                        guests to create an impressive evening. During an
                        outdoor cooking not only culinary highlights like
                        s&apos;mores and corn cobs but also teamwork will be
                        tested.
                        <br />
                        A rustic place, with roofing if you wish, invites you to
                        a friendly being together - independent of the season. A
                        perfect place for families or seminar groups that want
                        to finish off an adventurous day in pure nature.
                        <br />
                        <br />
                        <strong>Water sports</strong>
                        <br />
                        A water world that guarantees a lot of fun for every age
                        group. If you want to up value a pool territory or have
                        an access to waters, water sports equipment is a fitting
                        option for you and your guests.
                        <br />
                        The material makes the products solid because the PVC is
                        extremely strong, safe and is produced for commercial
                        use. Our product variety goes from water trampolines to
                        incredible ice bergs.
                        <br />
                        <br />
                        <strong>GPS Explorer Rally</strong>
                        <br />
                        Let us create a tailored GPS Rally by our experienced
                        Adventure Team with team tasks for the participants.
                        They&apos;ll develop a program including challenges for
                        kids and teens as well as for seminar groups.
                        <br />
                        Groups can independently experience the surrounding area
                        of your hotel. They can put historical places to their
                        route so that the GPS can guide them through an exciting
                        treasure hunt. Benefit from our experiences!
                      </p>
                    </div>
                  </div>
                  <div className="el-item uk-margin-remove-first-child">
                    <h3 className="el-title uk-heading-bullet uk-margin-top uk-margin-remove-bottom">
                      Conceptual organization of High Rope Courses
                    </h3>
                    <div className="el-content uk-panel uk-margin-top">
                      <p>
                        Climbing in a High Rope Course means an ultimate
                        challenge for groups and teams. On ropes between trees
                        or on wooden poles the participants experience
                        adventures. The High Rope Course is seen as an element
                        to consider your personal limits and risk behavior. You
                        can observe how every single person works under pressure
                        and in how far he or she is able to agree to support and
                        help of others.
                      </p>
                      <p>
                        There is the opportunity to have team trainings in a
                        high rope course as a group experience. All elements are
                        connected so you can choose on your own which way to go
                        next. Furthermore there are different tasks where people
                        have to be saved in a safety chain from their
                        colleagues. Alternatively the parkour can be built in a
                        straight line, the so-called Adventure Park. Here the
                        participants go through the parkour one by one and face
                        up to the exercises. Those high rope courses can be set
                        up as one element or as a series.
                      </p>
                      <p>
                        Special: Our 1 meter &quot;Mini High Rope Courses&quot;
                        are another highlight for children from 3-6 years.
                        Please contact us for any kind of consultation. In a
                        conversation we find the best option for you.
                        <br />
                        <br />
                        <strong>Forest or open area?</strong>
                        <br />
                        High Rope Courses can be placed between trees in the
                        forest or at other points or even at a combination of
                        those two. The ropes in the forest are fixed on the
                        trunks so that the trees won&apos;t be bored. Depending
                        on the local conditions we build up the elements in a
                        forest or in an open space. Camp Adventure works closely
                        together with you and the organization to create a
                        climbing parkour according to your wishes. The needs of
                        your guests will also be taken in consideration.
                        <br />
                        <br />
                        <strong>Safety and technical standards</strong>
                        <br />
                        All installations are delivered with the necessary
                        equipment like helmets and belts. Of course you will be
                        supervised by an instructor that has been trained in our
                        High Rope Course Safety Instructor Training based on the
                        ERCA standards in the Adventure Camp Academy.
                        <br />
                        <br />
                        <strong>Examples of High Rope Course elements</strong>
                        <br />
                        <br />
                        The most frequently chosen exercises for team training
                        are the following ones (more elements on request):
                      </p>
                      <p>
                        <strong>Giant Swing</strong>
                        <br />
                        One participant is attached to a 5m long rope which is
                        2m over the ground. He will be uplifted with a belt by
                        the help of his team. The participant can influence the
                        height with a STOP-regulation and can activate the panic
                        hook himself. The following swing effect is called Giant
                        Swing – an amazing feeling of weightlessness!
                        <br />
                        <br />
                        <strong>Team Ladder</strong>
                        <br />
                        Three connected participants try to climb a shaky rope
                        ladder together. They are saved by a top rope protection
                        and have to help each other. 12 participants will be in
                        action at the same time – a physical and mental
                        challenge is guaranteed!
                        <br />
                        <br />
                        <strong>Flying Bridge</strong>
                        <br />
                        Flying Bridge is a bridge of 8m that is only accessible
                        with the support of the team. The steps of the bridge
                        are very shaky and are stabilized by the ground team
                        with ropes. To complete this task clear instructions
                        within the team are necessary. The participant is saved
                        additionally by a specialized team. All in all a great
                        team activity where communication and team work is a
                        must.
                        <br />
                        <br />
                        <strong>Flying Fox</strong>
                        <br />
                        For a jump on a rope way drive a lot of courage is
                        demanded. The rope ways are about 200m long, depending
                        on the attachment points. After the adrenalin rush the
                        participant gets out of the ropeway by himself. A
                        special machine ensures that the participant don&apos;t
                        rope down too quick or too rough.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
