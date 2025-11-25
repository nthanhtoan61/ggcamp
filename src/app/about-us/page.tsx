"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getTemplateImageUrl } from "@/lib/assets";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="uk-section-default uk-section-overlap uk-section"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h1 className="uk-h2 uk-text-center" uk-scrollspy-class="">
                About us
              </h1>
              <div
                className="uk-divider-icon uk-width-medium uk-margin-auto"
                uk-scrollspy-class=""
              ></div>
              <div
                className="uk-panel uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin"
                uk-scrollspy-class=""
              >
                <p>
                  It all began with a project by Jan Vieth during his studies in
                  2002. His aim was to take the distinguishing features of camps
                  he had experienced in Canada, Australia and the USA and
                  introduce those features to camps in Germany. The main focus
                  is not only varied programs and great locations but also the
                  special cohesion that&apos;s built up and promoted in a truly
                  international camp community.
                </p>

                <p>
                  Regardless of which country or culture a child, teen or Teamer
                  (staff member) comes from – they should all feel comfortable
                  together and experience a unique and unforgettable time at
                  camp. Even though camp participants might live thousands of
                  kilometers apart, new friendships are forged in camp which
                  often last long after the camp session has ended. New
                  participants are welcomed by returning campers because
                  that&apos;s what they like about our camps: meeting new
                  people, making new friends and refreshing old friendships.
                  Parents often tell us that after camps, their kids have kept
                  up friendships and visited each other, even travelling to
                  places like France, Spain or as far as Canada. Parents also
                  tell us that kids develop an increased motivation to study
                  English in school so that they can communicate better at the
                  next camp.
                </p>

                <p>
                  Another one of our basic principles is that sports in camp
                  aren&apos;t about winning and losing. Instead, it&apos;s about
                  having fun together, gaining self-confidence and learning to
                  become more independent. Naturally, conflicts can arise. But
                  we always find a way to solve them together.
                </p>

                <p>
                  We are not a huge company – we prefer to remain a big family.
                  Our founder, Jan Vieth, knows every Teamer personally and
                  always leads training along side the coaching team. Every year
                  we have approximately 400 Teamers from about 30 different
                  nations supporting us in our camps for at least 4 weeks. Our
                  international office team consists of 12 staff members and
                  operates in Canada, Spain and Germany. Every year we have
                  participants from up to 40 (!!!) different nations and about
                  70 % &quot;returning campers&quot;.
                </p>

                <p>
                  We want to treat every child like an individual, which is why
                  we do not offer enormous camps involving a thousand kids. We
                  are also not a &quot;drunk beach-party&quot; youth tour
                  operator. Any form of violence or any use of drugs, alcohol or
                  cigarettes is not permitted for any participant regardless of
                  age.
                </p>

                <p>
                  We know that it is an incredible leap of faith when a parent
                  entrusts us with their child. We also know many questions can
                  arise. Please feel free to contact us and we will do our best
                  to answer any questions or concerns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section with Parallax */}
      <div
        className="uk-section-secondary uk-section-overlap"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-slide-bottom; delay: 200;"
      >
        <div
          className="uk-background-norepeat uk-background-cover uk-background-center-center uk-background-fixed uk-section uk-flex uk-flex-middle uk-height-viewport"
          style={{
            backgroundImage: `url(${getTemplateImageUrl(
              "yootheme/cache/94/ueber_uns_parallax-94ba57a3.jpeg"
            )})`,
            backgroundColor: "rgba(0, 0, 0, 0)",
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
                      Nothing ever becomes real till it is experienced.
                    </div>
                    <div
                      className="uk-panel uk-text-lead uk-margin uk-text-left@m uk-text-center"
                      uk-scrollspy-class=""
                    >
                      Spending the night under the stars, listening to the
                      cracking of wood, managing a climbing challenge, feeling
                      the enthusiasm of the people – this is Camp Adventure.
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

      {/* Our Camp Team Section */}
      <div
        className="uk-section-muted uk-section-overlap uk-section"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h2 uk-text-center" uk-scrollspy-class="">
                Our Camp Team
              </h2>
              <div
                className="uk-divider-icon uk-width-medium uk-margin-auto"
                uk-scrollspy-class=""
              ></div>
              <div
                className="uk-panel uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin"
                uk-scrollspy-class=""
              >
                <p>
                  Camp Adventure is an organization founded in 2002 by Jan Vieth
                  and combines the positive elements of Canadian summer camps
                  and German holiday-camps to offer children and young people
                  from all over the world a unique and memorable adventure at
                  summer camp. Key points to our camps are not only a focus on
                  quality and safety but also ensuring that both Teamers and
                  participants actively shape and create the program in camp.
                  <br />
                  <br />
                  Years of experience along with excellent and comprehensive
                  training for our highly qualified Teamers, ensure that
                  children and young people spend an exciting yet relaxing
                  holiday with Camp Adventure. For several years we have
                  cooperated with the organization Camp Europe e.V., which
                  specializes in the search, selection and training of German
                  and international Teamers and language coaches. With offices
                  in Spain and Canada, Camp Europe is responsible for a great
                  international mix of staff in our camps.
                  <br />
                  Whether student or athlete, artist or musician, we want the
                  most heterogeneous mixture possible in our Teams so that our
                  program can include a wide range expertise and experience.
                  Most Teamers are between 19-35 years old and have experience
                  working with children and young people.
                  <br /> <br />
                  We never put our money into major advertising campaigns, but
                  mainly into Teamer recruitment, selection and training by Camp
                  Europe. That is why we are lucky to always have so many
                  applicants for our camps. All applicants go through an
                  extensive personal interview. Our minimum conditions for Team
                  Members: They must present a police clearance certificate, be
                  at least 19 years old, have a valid first aid certificate and
                  go through our one-week training course which takes place at
                  our camp in the Lüneburger Heide.
                  <br /> <br />
                  Our camp directors are responsible for the organization of our
                  great camps. They are the contact for all parents and are
                  responsible for the coordination and management of our teams.
                  They already have several years of experience in our camps and
                  help the Teamers with problems of all kinds.
                  <br />
                  <br />
                  Our language coaches are dedicated young native speakers who
                  go through our intensive Teamer training for our unique
                  language program. They receive a variety of methods, which
                  they can use creatively and flexibly to fit the different
                  requirements of our camps. Through the successful recruitment
                  of native speaking Teamers for our language program, the
                  campers have a special opportunity to communicate and interact
                  in another language. They learn the language in a relaxed and
                  authentic context. This is a huge advantage over school!
                  International Teamers can also &quot;represent&quot; their
                  country, so that the children not only learn the language but
                  also about the people, culture and customs of various
                  countries.
                  <br /> <br />
                  Do YOU feel inspired and want to be a Teamer as well? Just
                  visit the page of{" "}
                  <a href="http://www.campeurope.net/">CAMP EUROPE</a>. There
                  you will find all the information on the application!
                </p>
              </div>
            </div>
          </div>
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div
                className="uk-margin"
                uk-slideshow="minHeight: 410; velocity: 1; autoplay: 1; pauseOnHover: false; ; autoplayInterval: 5000;"
                uk-scrollspy-class=""
              >
                <div
                  className="uk-position-relative uk-visible-toggle"
                  tabIndex={-1}
                >
                  <div className="uk-slideshow-items">
                    <div className="el-item uk-inverse-light">
                      <div
                        className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left"
                        style={{
                          WebkitAnimationDuration: "28s",
                          animationDuration: "28s",
                        }}
                      >
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/f8/team_cheeratcampfire-f81df5e6.jpg"
                          )}
                          width={920}
                          height={613}
                          alt=""
                          className="el-image"
                          uk-cover=""
                          loading="lazy"
                        />
                      </div>
                      <div className="uk-position-cover uk-flex uk-padding uk-flex-left uk-flex-middle">
                        <div className="el-overlay uk-panel uk-light uk-margin-remove-first-child">
                          <div className="el-meta uk-text-meta uk-margin-top">
                            team
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="el-item uk-inverse-light">
                      <div
                        className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-top-right"
                        style={{
                          WebkitAnimationDuration: "28s",
                          animationDuration: "28s",
                        }}
                      >
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/2c/team_happyteamers-2c7da6c0.jpg"
                          )}
                          width={920}
                          height={613}
                          alt=""
                          className="el-image"
                          uk-cover=""
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="el-item uk-inverse-light">
                      <div
                        className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-bottom-left"
                        style={{
                          WebkitAnimationDuration: "28s",
                          animationDuration: "28s",
                        }}
                      >
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/81/team_teamershirt-81df4239.jpg"
                          )}
                          width={920}
                          height={613}
                          alt=""
                          className="el-image"
                          uk-cover=""
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="el-item uk-inverse-light">
                      <div
                        className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-top-center"
                        style={{
                          WebkitAnimationDuration: "28s",
                          animationDuration: "28s",
                        }}
                      >
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/07/team_officeteam-07ce1842.jpg"
                          )}
                          width={920}
                          height={613}
                          alt=""
                          className="el-image"
                          uk-cover=""
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="uk-visible@s uk-hidden-hover uk-hidden-touch uk-light uk-position-medium uk-position-center-left"
                    uk-inverse=""
                  >
                    <a
                      className="el-slidenav uk-slidenav-large"
                      href="#"
                      uk-slidenav-previous=""
                      uk-slideshow-item="previous"
                    ></a>
                  </div>
                  <div
                    className="uk-visible@s uk-hidden-hover uk-hidden-touch uk-light uk-position-medium uk-position-center-right"
                    uk-inverse=""
                  >
                    <a
                      className="el-slidenav uk-slidenav-large"
                      href="#"
                      uk-slidenav-next=""
                      uk-slideshow-item="next"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* We love Camp Section */}
      <div
        className="uk-section-default uk-section uk-section-large"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-grid-margin uk-container uk-container-xlarge">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1">
              <div className="uk-width-1-1@m">
                <div
                  className="uk-heading-large uk-text-center"
                  uk-scrollspy-class="uk-animation-slide-top"
                >
                  We love Camp
                </div>
                <div
                  className="uk-panel uk-text-lead uk-margin uk-text-center"
                  uk-scrollspy-class="uk-animation-slide-bottom"
                >
                  Sharing our experiences since 2002
                </div>
              </div>
            </div>
          </div>
          <div className="uk-margin-xlarge uk-container uk-container-small">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1">
              <div className="uk-width-1-1@m">
                <div className="uk-h2 uk-text-center" uk-scrollspy-class="">
                  <a id="adventurers"></a>Our Adventurers
                </div>
                <div
                  className="uk-divider-icon uk-width-medium uk-margin-auto"
                  uk-scrollspy-class=""
                ></div>
              </div>
            </div>
          </div>
          <div className="uk-grid tm-grid-expand uk-margin-medium" uk-grid="">
            <div className="uk-width-1-2@m uk-width-1-4@l">
              <div className="uk-margin uk-text-center" uk-scrollspy-class="">
                <Image
                  src={getTemplateImageUrl(
                    "yootheme/cache/9d/Jan_klein-9d1a2a27.jpg"
                  )}
                  width={140}
                  height={140}
                  className="el-image uk-border-circle"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
            <div className="uk-width-1-2@m uk-width-1-4@l">
              <div
                className="uk-h2 uk-margin-small uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              >
                Jan
              </div>
              <div
                className="uk-panel uk-text-meta uk-margin-remove-vertical uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              >
                Founder & General Manager
              </div>
            </div>
            <div className="uk-width-1-1@m uk-width-1-2@l">
              <div className="uk-panel" uk-scrollspy-class="">
                Since 2002, every year I have been responsible in the office and
                in the camps for ensuring that we not only deliver great
                quality, but also constantly improve. As the father of 2 sons,
                water polo player and globetrotter, I try to focus on safety,
                sports and languages in camp.
              </div>
            </div>
          </div>
          <div className="uk-grid tm-grid-expand uk-margin-medium" uk-grid="">
            <div className="uk-width-1-2@m uk-width-1-4@l">
              <div className="uk-margin uk-text-center" uk-scrollspy-class="">
                <Image
                  src={getTemplateImageUrl(
                    "yootheme/cache/b6/gesa-b6c71692.jpg"
                  )}
                  width={140}
                  height={140}
                  className="el-image uk-border-circle"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
            <div className="uk-width-1-2@m uk-width-1-4@l">
              <div
                className="uk-h2 uk-margin-small uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              >
                Gesa
              </div>
              <div
                className="uk-panel uk-text-meta uk-margin-remove-vertical uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              >
                Language Academy Director
              </div>
            </div>
            <div className="uk-width-1-1@m uk-width-1-2@l">
              <div className="uk-panel uk-margin" uk-scrollspy-class="">
                <p>
                  When I joined the company, the Camp Adventure Language Academy
                  was founded. Since then I have taken over its management and
                  everything that goes with it. I am also the contact person for
                  all our partner agencies from all over the world.
                </p>
              </div>
            </div>
          </div>
          <div className="uk-grid tm-grid-expand uk-margin-medium" uk-grid="">
            <div className="uk-width-1-2@m uk-width-1-4@l">
              <div className="uk-margin uk-text-center" uk-scrollspy-class="">
                <Image
                  src={getTemplateImageUrl(
                    "yootheme/cache/5f/lene-5fe96053.jpg"
                  )}
                  width={140}
                  height={140}
                  className="el-image uk-border-circle"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
            <div className="uk-width-1-2@m uk-width-1-4@l">
              <div
                className="uk-h2 uk-margin-small uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              >
                Marlen
              </div>
              <div
                className="uk-panel uk-text-meta uk-margin-remove-vertical uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              >
                <p>Groups, Customer Satisfaction</p>
              </div>
            </div>
            <div className="uk-width-1-1@m uk-width-1-2@l">
              <div className="uk-panel uk-margin" uk-scrollspy-class="">
                <p>
                  Hi, I&apos;m Marlen – with Camp Adventure since 2007, heart
                  and soul included. I started out back then as a Teamer in
                  Neuburg an der Donau – and after that very first summer, it
                  was clear: this is more than just a job!
                  <br />
                  In 2009, I moved to Hamburg, where I&apos;ve been keeping the
                  office vibes up ever since. Over the years, I&apos;ve had the
                  chance to dive into almost every area: HR for Teamers and
                  Office Volunteers, staff trainings, camp management, kids
                  transfers, bookings, program development, marketing &amp;
                  sales, website, booking system, and much more. The only thing
                  no one has ever let me near is accounting… probably because I
                  still reach for the calculator even for the easy math 😄
                  <br />
                  These days, I mainly focus on school trips and complaint
                  management and love sharing my experience with our new
                  colleagues. Camp Adventure has long become more than just work
                  for me – it&apos;s a huge part of my life. And many of my
                  colleagues have become like family. ❤️
                </p>
              </div>
            </div>
          </div>
          <div className="uk-grid tm-grid-expand uk-margin-medium" uk-grid="">
            <div className="uk-width-1-2@m uk-width-1-4@l">
              <div className="uk-margin uk-text-center" uk-scrollspy-class="">
                <Image
                  src={getTemplateImageUrl(
                    "yootheme/cache/cf/antje-cf72ca72.jpg"
                  )}
                  width={140}
                  height={140}
                  className="el-image uk-border-circle"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
            <div className="uk-width-1-2@m uk-width-1-4@l">
              <div
                className="uk-h2 uk-margin-small uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              >
                Antje
              </div>
              <div
                className="uk-panel uk-text-meta uk-margin-remove-vertical uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              >
                <p>Accounting</p>
              </div>
            </div>
            <div className="uk-width-1-1@m uk-width-1-2@l">
              <div className="uk-panel uk-margin" uk-scrollspy-class="">
                <p>
                  I&apos;ve been a member of the Camp Adventure team since the
                  very beginning. For me the adventure began in Jan&apos;s
                  parents&apos; house. In addition to accounting, I am also
                  responsible for our customer satisfaction and understand the
                  needs of the parents, as my own children are also part of the
                  camp every year.
                </p>
              </div>
            </div>
          </div>
          <div className="uk-grid tm-grid-expand uk-margin-medium" uk-grid="">
            <div className="uk-width-1-2@m uk-width-1-4@l">
              <div className="uk-margin uk-text-center" uk-scrollspy-class="">
                <Image
                  src={getTemplateImageUrl(
                    "yootheme/cache/ae/astrid-aed067d6.jpg"
                  )}
                  width={140}
                  height={140}
                  className="el-image uk-border-circle"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
            <div className="uk-width-1-2@m uk-width-1-4@l">
              <div
                className="uk-h2 uk-margin-small uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              >
                Astrid
              </div>
              <div
                className="uk-panel uk-text-meta uk-margin-remove-vertical uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              >
                Accounting
              </div>
            </div>
            <div className="uk-width-1-1@m uk-width-1-2@l">
              <div className="uk-panel uk-margin" uk-scrollspy-class="">
                <p>
                  I am also an &quot;old hand&quot; in the Camp Adventure
                  business. My area of responsibility is accounting and
                  management assistance. I also have a daughter who has been in
                  our camps with friends several times and she will go many more
                  times!
                </p>
              </div>
            </div>
          </div>
          <div className="uk-grid tm-grid-expand uk-margin-medium" uk-grid="">
            <div className="uk-width-1-2@m uk-width-1-4@l">
              <div className="uk-margin uk-text-center" uk-scrollspy-class="">
                <Image
                  src={getTemplateImageUrl(
                    "yootheme/cache/2e/basti-2eeb95a7.jpg"
                  )}
                  width={140}
                  height={140}
                  className="el-image uk-border-circle"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
            <div className="uk-width-1-2@m uk-width-1-4@l">
              <div
                className="uk-h2 uk-margin-small uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              >
                Basti
              </div>
              <div
                className="uk-panel uk-text-meta uk-margin-remove-vertical uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              >
                Management of the Camp Adventure Academy
              </div>
            </div>
            <div className="uk-width-1-1@m uk-width-1-2@l">
              <div className="uk-panel uk-margin" uk-scrollspy-class="">
                <p>
                  When it comes to our Camp Adventure Academy, I am the No. 1
                  contact person. Since I also look after our groups on site, I
                  spend a lot of time in our camp in the Lüneburger Heide. I
                  also have great pleasure in leading one of our training
                  programs - the International Outdoor Education Diploma.
                </p>
              </div>
            </div>
          </div>
          <div className="uk-grid tm-grid-expand uk-margin-medium" uk-grid="">
            <div className="uk-width-1-2@m uk-width-1-4@l">
              <div className="uk-margin uk-text-center" uk-scrollspy-class="">
                <Image
                  src={getTemplateImageUrl(
                    "yootheme/cache/30/kadda-30a6b4d6.jpg"
                  )}
                  width={140}
                  height={140}
                  className="el-image uk-border-circle"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
            <div className="uk-width-1-2@m uk-width-1-4@l">
              <div
                className="uk-h2 uk-margin-small uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              >
                Kadda
              </div>
              <div
                className="uk-panel uk-text-meta uk-margin-remove-vertical uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              >
                Operations, Social Media
              </div>
            </div>
            <div className="uk-width-1-1@m uk-width-1-2@l">
              <div className="uk-panel uk-margin" uk-scrollspy-class="">
                I am Kadda and have known Camp Adventure since 2008, starting as
                a participant I am now a permanent member of the team. Since I
                have been working with children and teenagers, I have been
                particularly enthusiastic about experiential education (high
                ropes course, cave, mountains, team tasks,...). I focus on our
                outdoor education diploma and the location Walsrode.
                Contributing to the fact that different people experience great
                times motivates me again and again to continue.
              </div>
            </div>
          </div>
          <div className="uk-grid tm-grid-expand uk-margin-medium" uk-grid="">
            <div className="uk-width-1-2@m uk-width-1-4@l">
              <div className="uk-margin uk-text-center" uk-scrollspy-class="">
                <Image
                  src={getTemplateImageUrl(
                    "yootheme/cache/e8/Domi_klein-e886508b.jpg"
                  )}
                  width={140}
                  height={140}
                  className="el-image uk-border-circle"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
            <div className="uk-width-1-2@m uk-width-1-4@l">
              <div
                className="uk-h2 uk-margin-small uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              >
                Domi
              </div>
              <div
                className="uk-panel uk-text-meta uk-margin-remove-vertical uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              >
                <p>Operations</p>
              </div>
            </div>
            <div className="uk-width-1-1@m uk-width-1-2@l">
              <div className="uk-panel uk-margin" uk-scrollspy-class="">
                <p>
                  Started as a Leadership-Camper myself, then got to know the
                  camps as a teamer and now a member of the team. In the future
                  I will take care of our location in the Bavarian Forest and
                  can hardly wait for the trip with Camp Adventure to continue.
                </p>
              </div>
            </div>
          </div>
          <div className="uk-grid tm-grid-expand uk-margin-medium" uk-grid="">
            <div className="uk-width-1-2@m uk-width-1-4@l">
              <div className="uk-margin uk-text-center" uk-scrollspy-class="">
                <Image
                  src={getTemplateImageUrl(
                    "yootheme/cache/9f/Ciaran2_klein-9fbcda39.jpg"
                  )}
                  width={140}
                  height={140}
                  className="el-image uk-border-circle"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
            <div className="uk-width-1-2@m uk-width-1-4@l">
              <div
                className="uk-h2 uk-margin-small uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              >
                Ciarán
              </div>
              <div
                className="uk-panel uk-text-meta uk-margin-remove-vertical uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              >
                <p>Operations</p>
              </div>
            </div>
            <div className="uk-width-1-1@m uk-width-1-2@l">
              <div className="uk-panel uk-margin" uk-scrollspy-class="">
                <p>
                  I came to Camp Adventure from Ireland as a teamer and in 2018
                  I took part in the international outdoor education diploma
                  program at Camp Adventure. I am already looking forward to
                  being a permanent member of the team during the organisation
                  and realisation of our camps.
                </p>
              </div>
            </div>
          </div>
          <div className="uk-grid tm-grid-expand uk-margin-medium" uk-grid="">
            <div className="uk-width-1-2@m uk-width-1-4@l">
              <div className="uk-margin uk-text-center" uk-scrollspy-class="">
                <Image
                  src={getTemplateImageUrl(
                    "yootheme/cache/5b/selli_portrait_HP-5b6d2a1d.jpg"
                  )}
                  width={140}
                  height={140}
                  className="el-image uk-border-circle"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
            <div className="uk-width-1-2@m uk-width-1-4@l">
              <div
                className="uk-h2 uk-margin-small uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              >
                Selina
              </div>
              <div
                className="uk-panel uk-text-meta uk-margin-remove-vertical uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              >
                <p>Human Resources, Project Managing</p>
              </div>
            </div>
            <div className="uk-width-1-1@m uk-width-1-2@l">
              <div className="uk-panel uk-margin" uk-scrollspy-class="">
                <p>
                  Having started as a teamer, quiet a long time ago, I am now
                  responsible for our teamer recruitement and coordination as
                  well as all camps in cooperation with our partner &quot;Keine
                  Macht den Drogen&quot;. As often as possible you´ll also find
                  me in camp, taking care of our location in the Lüneburger
                  Heide.
                </p>
              </div>
            </div>
          </div>
          <div className="uk-grid tm-grid-expand uk-margin-medium" uk-grid="">
            <div className="uk-width-1-2@m uk-width-1-4@l">
              <div className="uk-margin uk-text-center" uk-scrollspy-class="">
                <Image
                  src={getTemplateImageUrl(
                    "yootheme/cache/44/chris-4440f578.jpg"
                  )}
                  width={140}
                  height={140}
                  className="el-image uk-border-circle"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
            <div className="uk-width-1-2@m uk-width-1-4@l">
              <div
                className="uk-h2 uk-margin-small uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              >
                Chris
              </div>
              <div
                className="uk-panel uk-text-meta uk-margin-remove-vertical uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              >
                <p>
                  Group Sales, Marketing, Human Resources, High Ropes Safety
                  &amp; Locations Bavaria
                </p>
              </div>
            </div>
            <div className="uk-width-1-1@m uk-width-1-2@l">
              <div className="uk-panel uk-margin" uk-scrollspy-class="">
                <div>
                  I&apos;m your contact person for school trips &amp; group
                  bookings. Besides little works on our website website,
                  I&apos;ve got the pleasure of being the contact person for our
                  directors team and training our diploma team in high ropes
                  safety. Coming from Austria I&apos;m in charge of our camp
                  locations in Bavaria.
                </div>
              </div>
            </div>
          </div>
          <div className="uk-grid tm-grid-expand uk-margin-medium" uk-grid="">
            <div className="uk-width-1-2@m uk-width-1-4@l">
              <div className="uk-margin uk-text-center" uk-scrollspy-class="">
                <Image
                  src={getTemplateImageUrl(
                    "yootheme/cache/e8/Tanja_klein-e8e85ec6.jpg"
                  )}
                  width={140}
                  height={140}
                  className="el-image uk-border-circle"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
            <div className="uk-width-1-2@m uk-width-1-4@l">
              <div
                className="uk-h2 uk-margin-small uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              >
                Tanja
              </div>
              <div
                className="uk-panel uk-text-meta uk-margin-remove-vertical uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              >
                Human Resources, Project Managing
              </div>
            </div>
            <div className="uk-width-1-1@m uk-width-1-2@l">
              <div className="uk-panel uk-margin" uk-scrollspy-class="">
                <p>
                  Tanja is currently on parental leave, but will soon be back
                  again for all questions and requests regarding human
                  resources.
                </p>
              </div>
            </div>
          </div>
          <div className="uk-grid tm-grid-expand uk-margin-medium" uk-grid="">
            <div className="uk-width-1-2@m uk-width-1-4@l">
              <div className="uk-margin uk-text-center" uk-scrollspy-class="">
                <Image
                  src={getTemplateImageUrl(
                    "yootheme/cache/b2/daniel-b2862cfc.jpg"
                  )}
                  width={140}
                  height={140}
                  className="el-image uk-border-circle"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
            <div className="uk-width-1-2@m uk-width-1-4@l">
              <div
                className="uk-h2 uk-margin-small uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              >
                Daniel
              </div>
              <div
                className="uk-panel uk-text-meta uk-margin-remove-vertical uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              >
                International Recruitung
              </div>
            </div>
            <div className="uk-width-1-1@m uk-width-1-2@l">
              <div className="uk-panel uk-margin" uk-scrollspy-class="">
                <p>
                  I am Daniel and responsible for the recruiting of the
                  international support staff worldwide. From marketing and job
                  interviews to feedback interviews with the teamers and camp
                  leaders, I am always there with all my heart and soul!
                </p>
              </div>
            </div>
          </div>
          <div className="uk-grid tm-grid-expand uk-margin-medium" uk-grid="">
            <div className="uk-width-1-2@m uk-width-1-4@l">
              <div className="uk-margin uk-text-center" uk-scrollspy-class="">
                <Image
                  src={getTemplateImageUrl(
                    "yootheme/cache/9d/Axel_klein-9d6d5080.jpg"
                  )}
                  width={140}
                  height={140}
                  className="el-image uk-border-circle"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
            <div className="uk-width-1-2@m uk-width-1-4@l">
              <div
                className="uk-h2 uk-margin-small uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              >
                Axel
              </div>
              <div
                className="uk-panel uk-text-meta uk-margin-remove-vertical uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              >
                Chef Camp Adventure Academy
              </div>
            </div>
            <div className="uk-width-1-1@m uk-width-1-2@l">
              <div className="uk-panel uk-margin" uk-scrollspy-class="">
                <p>
                  For many years I have been working in the large area of
                  gastronomy/services. In the last 5 years I have finally
                  specialised in a balanced, nutritious children&apos;s menu in
                  a very large school canteen. With this experience I came to
                  Camp Adventure at the beginning of 2018 and took over the
                  kitchen.
                </p>
              </div>
            </div>
          </div>
          <div className="uk-grid tm-grid-expand uk-margin-medium" uk-grid="">
            <div className="uk-width-1-2@m uk-width-1-4@l">
              <div className="uk-margin uk-text-center" uk-scrollspy-class="">
                <Image
                  src={getTemplateImageUrl(
                    "yootheme/cache/89/dieter-89ffb9ba.jpg"
                  )}
                  width={140}
                  height={140}
                  className="el-image uk-border-circle"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
            <div className="uk-width-1-2@m uk-width-1-4@l">
              <div
                className="uk-h2 uk-margin-small uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              >
                Dieter
              </div>
              <div
                className="uk-panel uk-text-meta uk-margin-remove-vertical uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              >
                Facility Manager Camp Adventure Academy
              </div>
            </div>
            <div className="uk-width-1-1@m uk-width-1-2@l">
              <div className="uk-panel uk-margin" uk-scrollspy-class="">
                <p>
                  As the facility manager of the Camp Adventure Academy, I am
                  almost always on site and take care of everything that is
                  going on on the site. The team that is there to support me has
                  been in my heart for a long time.
                </p>
              </div>
            </div>
          </div>
          <div className="uk-grid tm-grid-expand uk-margin-medium" uk-grid="">
            <div className="uk-width-1-2@m uk-width-1-4@l">
              <div className="uk-margin uk-text-center" uk-scrollspy-class="">
                <Image
                  src={getTemplateImageUrl(
                    "yootheme/cache/29/nico-2928b38e.jpg"
                  )}
                  width={140}
                  height={140}
                  className="el-image uk-border-circle"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
            <div className="uk-width-1-2@m uk-width-1-4@l">
              <div
                className="uk-h2 uk-margin-small uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              >
                Nico
              </div>
              <div
                className="uk-panel uk-text-meta uk-margin-remove-vertical uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              >
                Photographer
              </div>
            </div>
            <div className="uk-width-1-1@m uk-width-1-2@l">
              <div className="uk-panel uk-margin" uk-scrollspy-class="">
                <p>
                  For Camp Adventure I am on the road as a professional
                  photographer. Whether pictures of a new location or cool
                  action videos from the camp - I always have great pleasure in
                  dealing with kids and team from all over the world!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cooperations & Memberships Section */}
      <div
        className="uk-section-default uk-section-overlap uk-position-relative"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
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
                <h2
                  className="uk-h1 uk-margin-small uk-text-center"
                  uk-scrollspy-class="uk-animation-slide-bottom-medium"
                >
                  Cooperations & Memberships
                </h2>
                <div
                  className="uk-divider-icon uk-width-medium uk-margin-auto"
                  uk-scrollspy-class=""
                ></div>
                <div
                  className="uk-panel uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin"
                  uk-scrollspy-class=""
                >
                  <p>
                    For almost 10 years we have been a cooperation partner for
                    &quot;No Power to Drugs&quot; and are responsible for their
                    camps and training programs on drug prevention for teachers
                    and students.
                    <br />
                    <br />
                    We also actively promote the quality standards and
                    international relationships at the European Ropes Course
                    Association and the &quot;Reisenetz&quot;. At the ICF
                    (International Camping Fellowship) – the world organization
                    for camps – we are ambassadors for Germany. Throughout the
                    ICF we also cooperate with many partner camps worldwide and
                    offer an exchange for participants, trainers, and Teamers to
                    share innovative new training topics.
                    <br />
                    <br />
                    Within the scope of our programs we cooperate with
                    well-known partners like the &quot;VfB Stuttgart Soccer
                    School&quot;, &quot;GEOlino-Magazine&quot; and the European
                    Space Agency (ESA), for whom we continue to operate creative
                    and exciting camps for their employee&apos;s children.
                    <br />
                    <br />
                    We are known all over Germany and Europe for our innovative
                    programs and our carefully and well-chosen staff members
                    (Teamers) and trainers. We work as consultants and
                    instructors for many German and European child and youth
                    tour operators. For more than 8 years now we have been
                    consultants for hotels, resorts, holiday parks and
                    destinations to create innovative adventure programs for
                    kids, teenagers, families and seminar groups. More
                    information can be found under{" "}
                    <Link href="/info/innovation-consulting">CONSULTING</Link>.
                  </p>
                </div>
              </div>
            </div>
            <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
              <div className="uk-width-1-1@m">
                <div className="uk-margin uk-text-center">
                  <div
                    className="uk-grid uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-3@l uk-grid-collapse uk-grid-match"
                    uk-grid=""
                  >
                    <div>
                      <div
                        className="el-item uk-flex uk-flex-column"
                        uk-scrollspy-class="uk-animation-scale-up"
                      >
                        <a
                          className="uk-flex-1 uk-card uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle"
                          href="https://www.reisenetz.org/siegeltraeger/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/98/reisenetz2-98f3b127.png"
                            )}
                            width={120}
                            height={120}
                            alt=""
                            className="el-image"
                            loading="lazy"
                          />
                        </a>
                      </div>
                    </div>
                    <div>
                      <div
                        className="el-item uk-flex uk-flex-column"
                        uk-scrollspy-class="uk-animation-scale-up"
                      >
                        <a
                          className="uk-flex-1 uk-card uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle"
                          href="http://www.campingfellowship.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/7a/icf2-7a52c185.png"
                            )}
                            width={178}
                            height={120}
                            alt=""
                            className="el-image"
                            loading="lazy"
                          />
                        </a>
                      </div>
                    </div>
                    <div>
                      <div
                        className="el-item uk-flex uk-flex-column"
                        uk-scrollspy-class="uk-animation-scale-up"
                      >
                        <a
                          className="uk-flex-1 uk-card uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle"
                          href="https://www.language-testing-service.de/cms/index.php?id=8"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/5f/toefl2-5f52dff4.png"
                            )}
                            width={120}
                            height={120}
                            alt=""
                            className="el-image"
                            loading="lazy"
                          />
                        </a>
                      </div>
                    </div>
                    <div>
                      <div
                        className="el-item uk-flex uk-flex-column"
                        uk-scrollspy-class="uk-animation-scale-up"
                      >
                        <a
                          className="uk-flex-1 uk-card uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle"
                          href="https://www.kmdd.de/Home.htm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/bd/kmdd2-bdeae52d.png"
                            )}
                            width={112}
                            height={120}
                            alt=""
                            className="el-image"
                            loading="lazy"
                          />
                        </a>
                      </div>
                    </div>
                    <div>
                      <div
                        className="el-item uk-flex uk-flex-column"
                        uk-scrollspy-class="uk-animation-scale-up"
                      >
                        <a
                          className="uk-flex-1 uk-card uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle"
                          href="https://dofe-germany.de/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/f8/dofe2-f84c724b.png"
                            )}
                            width={362}
                            height={120}
                            alt=""
                            className="el-image"
                            loading="lazy"
                          />
                        </a>
                      </div>
                    </div>
                    <div>
                      <div
                        className="el-item uk-flex uk-flex-column"
                        uk-scrollspy-class="uk-animation-scale-up"
                      >
                        <a
                          className="uk-flex-1 uk-card uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle"
                          href="https://www.erca.uk/index.php/de/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={getTemplateImageUrl(
                              "yootheme/cache/00/erca2-0047e06a.png"
                            )}
                            width={276}
                            height={120}
                            alt=""
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
    </>
  );
}
