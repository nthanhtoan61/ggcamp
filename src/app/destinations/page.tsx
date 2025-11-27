import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { getTemplateImageUrl } from "@/lib/assets";
import DestinationMap from "./DestinationMap";

export const metadata: Metadata = {
  title: "International Sport & Language Camp in Germany 2026",
  description:
    "International camps for kids from ages 7-19 ☀ Spend your holiday making friends from all over the world! ► Book now!",
};

export default function DestinationsPage() {
  // Marker list
  const camps = [
    {
      id: "bayerischer-wald",
      lat: 48.9701,
      lng: 13.1263,
      title: "Bayerischer Wald",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/1b/e5/23/trifter-klause-im-watzlik.jpg?w=1200&h=-1&s=1",
    },
    {
      id: "hamburg",
      lat: 53.5597,
      lng: 9.9601,
      title: "Hamburg",
      image:
        "https://cdn-images.wework.com/images/69626CB4-BEDF-11EB-8766-0E6A5DC689CD/69626cb4-bedf-11eb-8766-0e6a5dc689cd_0.jpg?width=600",
    },
    {
      id: "lueneburger-heide",
      lat: 52.8625,
      lng: 9.5883,
      title: "Lüneburger Heide",
      image:
        "https://www.campadventure.de/templates/yootheme/cache/05/01-Sommercamp-Walsrode-Dining-Hall-outside-05806542.jpeg",
    },
    {
      id: "rossall-school",
      lat: 53.9246,
      lng: -3.00764,
      title: "Rossall School",
      image:
        "https://images.squarespace-cdn.com/content/v1/674e026f2e3d592ae64503b6/22ba03d4-bc8c-4c0a-8651-31932b1c16b6/Copy+of+Rossall+Archway+-+Prize+Day.jpg",
    },
    {
      id: "bath-university",
      lat: 51.3802,
      lng: -2.36674,
      title: "Bath University",
      image:
        "https://stories.bath.ac.uk/innovation-with-impact/landing-page/spin-out-club/assets/ylpLnicsFq/53233832409_7a68d40a42_o-2560x1440.jpg",
    },
    {
      id: "lauenburgische-seen",
      lat: 53.6279,
      lng: 10.687,
      title: "Lauenburgische Seen",
      image:
        "https://www.herzogtum-lauenburg.info/wp-content/uploads/045_Abendimpression_Ratzebu.jpg",
    },
    {
      id: "amrum",
      lat: 54.627,
      lng: 8.38935,
      title: "Amrum",
      image:
        "https://www.campadventure.de/templates/yootheme/cache/52/02-Language-Camps-by-Camp-Adventure-5201a531.jpeg",
    },
    {
      id: "barcelona-beach-camp",
      lat: 41.4114,
      lng: 2.2281,
      title: "Barcelona Beach Camp",
      image:
        "https://www.gelc-language-camps.org/templates/yootheme/cache/bd/1_Header-bdc50a76.jpeg",
    },
  ];
  
  return (
    <>
      {/* Hero Section */}
      <div
        className="uk-section-primary uk-section-overlap uk-position-relative"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div
          data-src={getTemplateImageUrl("yootheme/banner/b2.jpg")}
          uk-img=""
          className="uk-background-norepeat uk-background-cover uk-background-top-center uk-section uk-section-xlarge"
          style={{
            backgroundImage: `url(${getTemplateImageUrl(
              "yootheme/banner/b2.jpg"
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
                  className="uk-heading-large uk-text-center !text-[5vw]"
                  uk-scrollspy-class=""
                >
                  Our international Camps
                </h1>
                <div
                  className="uk-panel uk-text-lead uk-margin uk-text-center"
                  uk-scrollspy-class=""
                >
                  <p>with participants from more than 60 nations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Quote Section */}
      <div
        className="uk-section-default uk-section-overlap uk-section uk-section-small"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div className="uk-container uk-container-large">
          <div
            className="uk-grid tm-grid-expand uk-grid-large uk-margin-xlarge"
            uk-grid=""
          >
            <div className="uk-grid-item-match uk-flex-middle uk-width-1-3@m">
              <div className="uk-panel uk-width-1-1">
                <div
                  className="uk-h1 uk-text-left@m uk-text-center !text-[2.12vw]"
                  uk-scrollspy-class=""
                >
                  Welcome to Camp Adventure
                </div>
                <div
                  className="uk-divider-small uk-text-left@m uk-text-center"
                  uk-scrollspy-class=""
                ></div>
              </div>
            </div>
            <div className="uk-grid-item-match uk-flex-middle uk-width-2-3@m">
              <div className="uk-panel uk-width-1-1">
                <blockquote
                  className="uk-margin-medium uk-text-left@m uk-text-center !text-[1.31vw]"
                  uk-scrollspy-class=""
                >
                  <p>
                    Both my children really enjoyed Camp Adventure. The teamers
                    did a great job making them feel comfortable and at home. My
                    son was unsure if he wanted to stay at first but he felt
                    part of his tent group and camp very quickly and loved it.
                    Both had tons of fun. Thank you CA!
                  </p>
                  <footer className="el-footer !text-[1.31vw]">Anja B., Germany</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro + Map Section */}
      <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div className="uk-panel uk-text-large uk-dropcap uk-margin text-black !text-[1.52vw]">
                <p>
                  Our international Adventure, Sports & Language Camps in
                  Germany, England and Spain combine a welcoming, inclusive
                  atmosphere with unique Camp Adventure energy! Fun, stress-free
                  language workshops and the mixture of original camp games
                  along with traditional sports lead to an unforgettable
                  experience. Join in and meet plenty of new friends your age
                  from all over the globe in one of our international camps!
                </p>
              </div>

              <DestinationMap markers={camps} />
            </div>
          </div>
        </div>
      </div>

      {/* Our Camp Locations & Program Options Section */}
      <div
        className="uk-section-muted uk-section uk-section-small"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-slide-left-small; delay: false;"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2
                className="uk-h2 uk-text-center !text-[1.67vw]"
                uk-scrollspy-class="uk-animation-slide-left-medium"
              >
                Our Camp Locations & Program Options
              </h2>
              <div
                className="uk-divider-icon uk-width-medium uk-margin-auto"
                uk-scrollspy-class="uk-animation-slide-right-medium"
              ></div>
            </div>
          </div>

          {/* Location Card 1: Lüneburger Heide */}
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div
                className="uk-card uk-card-default uk-flex uk-flex-column uk-margin-medium uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              >
                <div
                  className="uk-grid-collapse uk-flex-1 uk-flex-column uk-flex-row@m"
                  uk-grid=""
                >
                  <div className="uk-width-1-3@m uk-flex uk-flex-column uk-flex-1 uk-flex-initial@m uk-flex-top@m uk-flex-middle">
                    <div
                      className="uk-card-media-left uk-flex-1 uk-flex uk-flex-column"
                      uk-toggle="cls: uk-card-media-left uk-card-media-top; mode: media; media: @m"
                    >
                      <Image
                        src={getTemplateImageUrl(
                          "yootheme/cache/46/wal_bigpic-46c21709.jpg"
                        )}
                        width={920}
                        height={613}
                        alt="Camp Adventure Academy - Lüneburger Heide"
                        className="el-image uk-flex-1 uk-object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="uk-width-expand uk-flex uk-flex-column uk-flex-center@m uk-flex-none uk-flex-1@m">
                    <div className="uk-card-body uk-margin-remove-first-child">
                      <div className="el-meta uk-h4 uk-margin-top uk-margin-remove-bottom !text-[1.67vw]">
                        Germany
                      </div>
                      <h3 className="el-title uk-card-title uk-margin-small-top uk-margin-remove-bottom !text-[1.67vw]">
                        Camp Adventure Academy - Lüneburger Heide
                      </h3>
                      <div className="uk-margin-top">
                        <Link
                          href="/destinations/germany-lueneburger-heide"
                          className="el-link uk-button uk-button-primary uk-button-small"
                        >
                          read more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Program Options for Lüneburger Heide */}
              <div className="uk-margin uk-text-left@m uk-text-center">
                <div
                  className="uk-grid uk-child-width-1-1 uk-child-width-1-2@m uk-grid-small uk-grid-divider uk-grid-match"
                  uk-grid=""
                >
                  <div>
                    <div className="el-item uk-panel" uk-scrollspy-class="">
                      <div className="uk-grid-medium uk-flex-middle" uk-grid="">
                        <div className="uk-width-1-5@m uk-flex-last@m">
                          <Link
                            href="/destinations/germany-lueneburger-heide#creative"
                            uk-scroll=""
                          >
                            <Image
                              src={getTemplateImageUrl(
                                "yootheme/cache/a5/wal_creativesportsadventure-a530744c.jpg"
                              )}
                              width={60}
                              height={60}
                              alt="Creative, Sports & Adventure"
                              className="el-image uk-border-circle"
                              loading="lazy"
                            />
                          </Link>
                        </div>
                        <div className="uk-width-expand uk-margin-remove-first-child">
                          <h4 className="el-title uk-h4 uk-link-reset uk-text-primary uk-margin-top uk-margin-remove-bottom">
                            <Link
                              href="/destinations/germany-lueneburger-heide#creative"
                              uk-scroll=""
                            >
                              Creative, Sports & Adventure
                            </Link>
                          </h4>
                          <div className="el-meta uk-muted uk-margin-small-top uk-margin-remove-bottom text-black text-black">
                            Many great activities are waiting for you
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="el-item uk-panel" uk-scrollspy-class="">
                      <div className="uk-grid-medium uk-flex-middle" uk-grid="">
                        <div className="uk-width-1-5@m uk-flex-last@m">
                          <Link
                            href="/destinations/germany-lueneburger-heide#language"
                            uk-scroll=""
                          >
                            <Image
                              src={getTemplateImageUrl(
                                "yootheme/cache/11/wal_germanenglish-11dc0bbb.jpg"
                              )}
                              width={60}
                              height={60}
                              alt="English/German"
                              className="el-image uk-border-circle"
                              loading="lazy"
                            />
                          </Link>
                        </div>
                        <div className="uk-width-expand uk-margin-remove-first-child">
                          <h4 className="el-title uk-h4 uk-link-reset uk-text-primary uk-margin-top uk-margin-remove-bottom">
                            <Link
                              href="/destinations/germany-lueneburger-heide#language"
                              uk-scroll=""
                            >
                              English/German
                            </Link>
                          </h4>
                          <div className="el-meta uk-muted uk-margin-small-top uk-margin-remove-bottom text-black text-black">
                            Improve your language skills
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="el-item uk-panel" uk-scrollspy-class="">
                      <div className="uk-grid-medium uk-flex-middle" uk-grid="">
                        <div className="uk-width-1-5@m uk-flex-last@m">
                          <Link
                            href="/destinations/germany-lueneburger-heide#lifeguarding"
                            uk-scroll=""
                          >
                            <Image
                              src={getTemplateImageUrl(
                                "yootheme/cache/9d/wal_lifeguarding-9d1139de.jpg"
                              )}
                              width={60}
                              height={60}
                              alt="Lifeguarding"
                              className="el-image uk-border-circle"
                              loading="lazy"
                            />
                          </Link>
                        </div>
                        <div className="uk-width-expand uk-margin-remove-first-child">
                          <h4 className="el-title uk-h4 uk-link-reset uk-text-primary uk-margin-top uk-margin-remove-bottom">
                            <Link
                              href="/destinations/germany-lueneburger-heide#lifeguarding"
                              uk-scroll=""
                            >
                              Lifeguarding
                            </Link>
                          </h4>
                          <div className="el-meta uk-muted uk-margin-small-top uk-margin-remove-bottom text-black text-black">
                            Recognize & act in emergencies at and in the water
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="el-item uk-panel" uk-scrollspy-class="">
                      <div className="uk-grid-medium uk-flex-middle" uk-grid="">
                        <div className="uk-width-1-5@m uk-flex-last@m">
                          <Link
                            href="/destinations/germany-lueneburger-heide#survival"
                            uk-scroll=""
                          >
                            <Image
                              src={getTemplateImageUrl(
                                "yootheme/cache/7a/wal_survival-7ad276e4.jpg"
                              )}
                              width={60}
                              height={60}
                              alt="Survival"
                              className="el-image uk-border-circle"
                              loading="lazy"
                            />
                          </Link>
                        </div>
                        <div className="uk-width-expand uk-margin-remove-first-child">
                          <h4 className="el-title uk-h4 uk-link-reset uk-text-primary uk-margin-top uk-margin-remove-bottom">
                            <Link
                              href="/destinations/germany-lueneburger-heide#survival"
                              uk-scroll=""
                            >
                              Survival
                            </Link>
                          </h4>
                          <div className="el-meta uk-muted uk-margin-small-top uk-margin-remove-bottom text-black text-black">
                            The choice for all survivors
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="el-item uk-panel" uk-scrollspy-class="">
                      <div className="uk-grid-medium uk-flex-middle" uk-grid="">
                        <div className="uk-width-1-5@m uk-flex-last@m">
                          <Link
                            href="/destinations/germany-lueneburger-heide#soccer"
                            uk-scroll=""
                          >
                            <Image
                              src={getTemplateImageUrl(
                                "yootheme/cache/e9/wal_soccer-e9f6b909.jpg"
                              )}
                              width={60}
                              height={60}
                              alt="Soccer"
                              className="el-image uk-border-circle"
                              loading="lazy"
                            />
                          </Link>
                        </div>
                        <div className="uk-width-expand uk-margin-remove-first-child">
                          <h4 className="el-title uk-h4 uk-link-reset uk-text-primary uk-margin-top uk-margin-remove-bottom">
                            <Link
                              href="/destinations/germany-lueneburger-heide#soccer"
                              uk-scroll=""
                            >
                              Soccer
                            </Link>
                          </h4>
                          <div className="el-meta uk-muted uk-margin-small-top uk-margin-remove-bottom text-black">
                            Scoring goals has to be learned - our coaches teach
                            you
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="el-item uk-panel" uk-scrollspy-class="">
                      <div className="uk-grid-medium uk-flex-middle" uk-grid="">
                        <div className="uk-width-1-5@m uk-flex-last@m">
                          <Link
                            href="/destinations/germany-lueneburger-heide#horseriding"
                            uk-scroll=""
                          >
                            <Image
                              src={getTemplateImageUrl(
                                "yootheme/cache/3c/wal_reiten-3cc39545.jpg"
                              )}
                              width={60}
                              height={60}
                              alt="Horseback Riding"
                              className="el-image uk-border-circle"
                              loading="lazy"
                            />
                          </Link>
                        </div>
                        <div className="uk-width-expand uk-margin-remove-first-child">
                          <h4 className="el-title uk-h4 uk-link-reset uk-text-primary uk-margin-top uk-margin-remove-bottom">
                            <Link
                              href="/destinations/germany-lueneburger-heide#horseriding"
                              uk-scroll=""
                            >
                              Horseback Riding
                            </Link>
                          </h4>
                          <div className="el-meta uk-muted uk-margin-small-top uk-margin-remove-bottom text-black">
                            It&apos;s all about horses
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="el-item uk-panel" uk-scrollspy-class="">
                      <div className="uk-grid-medium uk-flex-middle" uk-grid="">
                        <div className="uk-width-1-5@m uk-flex-last@m">
                          <Link
                            href="/destinations/germany-lueneburger-heide#husky"
                            uk-scroll=""
                          >
                            <Image
                              src={getTemplateImageUrl(
                                "yootheme/cache/c4/wal_huskycamp-c46b92e9.jpg"
                              )}
                              width={60}
                              height={60}
                              alt="Husky Camp"
                              className="el-image uk-border-circle"
                              loading="lazy"
                            />
                          </Link>
                        </div>
                        <div className="uk-width-expand uk-margin-remove-first-child">
                          <h4 className="el-title uk-h4 uk-link-reset uk-text-primary uk-margin-top uk-margin-remove-bottom">
                            <Link
                              href="/destinations/germany-lueneburger-heide#husky"
                              uk-scroll=""
                            >
                              Husky Camp
                            </Link>
                          </h4>
                          <div className=" text-black">
                            <p>Learn more about the fascinating dogs</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="el-item uk-panel" uk-scrollspy-class="">
                      <div className="uk-grid-medium uk-flex-middle" uk-grid="">
                        <div className="uk-width-1-5@m uk-flex-last@m">
                          <Link
                            href="/destinations/germany-lueneburger-heide#leadership"
                            uk-scroll=""
                          >
                            <Image
                              src={getTemplateImageUrl(
                                "yootheme/cache/79/wal_leadership-7946a8ea.jpg"
                              )}
                              width={60}
                              height={60}
                              alt="Leadership"
                              className="el-image uk-border-circle"
                              loading="lazy"
                            />
                          </Link>
                        </div>
                        <div className="uk-width-expand uk-margin-remove-first-child">
                          <h4 className="el-title uk-h4 uk-link-reset uk-text-primary uk-margin-top uk-margin-remove-bottom">
                            <Link
                              href="/destinations/germany-lueneburger-heide#leadership"
                              uk-scroll=""
                            >
                              Leadership
                            </Link>
                          </h4>
                          <div className="el-meta uk-muted uk-margin-small-top uk-margin-remove-bottom text-black">
                            The next step in camp life
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="el-item uk-panel" uk-scrollspy-class="">
                      <div className="uk-grid-medium uk-flex-middle" uk-grid="">
                        <div className="uk-width-1-5@m uk-flex-last@m">
                          <Link
                            href="/destinations/germany-lueneburger-heide#icit"
                            uk-scroll=""
                          >
                            <Image
                              src={getTemplateImageUrl(
                                "yootheme/cache/7b/wal_cit-7b79f457.jpg"
                              )}
                              width={60}
                              height={60}
                              alt="Camp Counselor in Training (ICIT)"
                              className="el-image uk-border-circle"
                              loading="lazy"
                            />
                          </Link>
                        </div>
                        <div className="uk-width-expand uk-margin-remove-first-child">
                          <h4 className="el-title uk-h4 uk-link-reset uk-text-primary uk-margin-top uk-margin-remove-bottom">
                            <Link
                              href="/destinations/germany-lueneburger-heide#icit"
                              uk-scroll=""
                            >
                              Camp Counselor in Training (ICIT)
                            </Link>
                          </h4>
                          <div className="el-meta uk-muted uk-margin-small-top uk-margin-remove-bottom text-black">
                            Discover your strengths and become a teamer
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location Card 2: Bayerischer Wald */}
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div
                className="uk-card uk-card-default uk-card-large uk-flex uk-flex-column uk-margin-medium uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              >
                <div
                  className="uk-grid-collapse uk-flex-1 uk-flex-column uk-flex-row@m"
                  uk-grid=""
                >
                  <div className="uk-width-1-3@m uk-flex-last@m uk-flex uk-flex-column uk-flex-1 uk-flex-initial@m uk-flex-top@m uk-flex-middle">
                    <div
                      className="uk-card-media-right uk-flex-1 uk-flex uk-flex-column"
                      uk-toggle="cls: uk-card-media-right uk-card-media-top; mode: media; media: @m"
                    >
                      <Image
                        src={getTemplateImageUrl(
                          "yootheme/cache/d4/REG_ADV_bigpic-d42b453f.jpg"
                        )}
                        width={920}
                        height={690}
                        alt="Adventure & Language Camp Bayerischer Wald"
                        className="el-image uk-flex-1 uk-object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="uk-width-expand uk-flex uk-flex-column uk-flex-center@m uk-flex-none uk-flex-1@m">
                    <div className="uk-card-body uk-margin-remove-first-child">
                      <div className="el-meta uk-h4 uk-margin-top uk-margin-remove-bottom !text-[1.67vw]">
                        Germany
                      </div>
                      <h3 className="el-title uk-card-title uk-margin-small-top uk-margin-remove-bottom !text-[1.67vw]">
                        Adventure & Language Camp Bayerischer Wald
                      </h3>
                      <div className="uk-margin-top">
                        <Link
                          href="/destinations/germany-adventure-camp-bayerischer-wald"
                          className="el-link uk-button uk-button-primary uk-button-small"
                        >
                          read more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Program Options for Bayerischer Wald */}
              <div className="uk-margin uk-text-left@m uk-text-center">
                <div
                  className="uk-grid uk-child-width-1-1 uk-child-width-1-2@m uk-grid-small uk-grid-divider uk-grid-match"
                  uk-grid=""
                >
                  <div>
                    <div className="el-item uk-panel" uk-scrollspy-class="">
                      <div className="uk-grid-medium uk-flex-middle" uk-grid="">
                        <div className="uk-width-1-5@m uk-flex-last@m">
                          <Link
                            href="/destinations/germany-adventure-camp-bayerischer-wald#creative"
                            uk-scroll=""
                          >
                            <Image
                              src={getTemplateImageUrl(
                                "yootheme/cache/01/neu_profil_creativesportsadventure_querformat-01fb7b2b.jpg"
                              )}
                              width={60}
                              height={60}
                              alt="Creative, Sports & Adventure"
                              className="el-image uk-border-circle"
                              loading="lazy"
                            />
                          </Link>
                        </div>
                        <div className="uk-width-expand uk-margin-remove-first-child">
                          <h4 className="el-title uk-h4 uk-link-reset uk-text-primary uk-margin-top uk-margin-remove-bottom">
                            <Link
                              href="/destinations/germany-adventure-camp-bayerischer-wald#creative"
                              uk-scroll=""
                            >
                              Creative, Sports & Adventure
                            </Link>
                          </h4>
                          <div className="el-meta uk-muted uk-margin-small-top uk-margin-remove-bottom text-black text-black">
                            Many great activities are waiting for you
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="el-item uk-panel" uk-scrollspy-class="">
                      <div className="uk-grid-medium uk-flex-middle" uk-grid="">
                        <div className="uk-width-1-5@m uk-flex-last@m">
                          <Link
                            href="/destinations/germany-adventure-camp-bayerischer-wald#survival"
                            uk-scroll=""
                          >
                            <Image
                              src={getTemplateImageUrl(
                                "yootheme/cache/02/neu_profil_survival_hochformat-0218ce10.jpg"
                              )}
                              width={60}
                              height={60}
                              alt="Survival"
                              className="el-image uk-border-circle"
                              loading="lazy"
                            />
                          </Link>
                        </div>
                        <div className="uk-width-expand uk-margin-remove-first-child">
                          <h4 className="el-title uk-h4 uk-link-reset uk-text-primary uk-margin-top uk-margin-remove-bottom">
                            <Link
                              href="/destinations/germany-adventure-camp-bayerischer-wald#survival"
                              uk-scroll=""
                            >
                              Survival
                            </Link>
                          </h4>
                          <div className="el-meta uk-muted uk-margin-small-top uk-margin-remove-bottom text-black">
                            The choice for all survivors
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="el-item uk-panel" uk-scrollspy-class="">
                      <div className="uk-grid-medium uk-flex-middle" uk-grid="">
                        <div className="uk-width-1-5@m uk-flex-last@m">
                          <Link
                            href="/destinations/germany-adventure-camp-bayerischer-wald#climbing"
                            uk-scroll=""
                          >
                            <Image
                              src={getTemplateImageUrl(
                                "yootheme/cache/86/reg_profil_klettern_querformat-86cc0bc7.jpg"
                              )}
                              width={60}
                              height={60}
                              alt="Climbing Course"
                              className="el-image uk-border-circle"
                              loading="lazy"
                            />
                          </Link>
                        </div>
                        <div className="uk-width-expand uk-margin-remove-first-child">
                          <h4 className="el-title uk-h4 uk-link-reset uk-text-primary uk-margin-top uk-margin-remove-bottom">
                            <Link
                              href="/destinations/germany-adventure-camp-bayerischer-wald#climbing"
                              uk-scroll=""
                            >
                              Climbing Course
                            </Link>
                          </h4>
                          <div className="el-meta uk-muted uk-margin-small-top uk-margin-remove-bottom text-black">
                            Pure adrenaline up to lofty heights
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="el-item uk-panel" uk-scrollspy-class="">
                      <div className="uk-grid-medium uk-flex-middle" uk-grid="">
                        <div className="uk-width-1-5@m uk-flex-last@m">
                          <Link
                            href="/destinations/germany-bayerischer-wald#engclassic"
                            uk-scroll=""
                          >
                            <Image
                              src={getTemplateImageUrl(
                                "yootheme/cache/50/reg_profil_englischclassic-50e45d03.jpg"
                              )}
                              width={60}
                              height={60}
                              alt="English Classic"
                              className="el-image uk-border-circle"
                              loading="lazy"
                            />
                          </Link>
                        </div>
                        <div className="uk-width-expand uk-margin-remove-first-child">
                          <h4 className="el-title uk-h4 uk-link-reset uk-text-primary uk-margin-top uk-margin-remove-bottom">
                            <Link
                              href="/destinations/germany-bayerischer-wald#engclassic"
                              uk-scroll=""
                            >
                              English Classic
                            </Link>
                          </h4>
                          <div className="el-meta uk-muted uk-margin-small-top uk-margin-remove-bottom text-black">
                            Improve your language skills in practice
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="el-item uk-panel" uk-scrollspy-class="">
                      <div className="uk-grid-medium uk-flex-middle" uk-grid="">
                        <div className="uk-width-1-5@m uk-flex-last@m">
                          <Link
                            href="/destinations/germany-bayerischer-wald#engtoefl"
                            uk-scroll=""
                          >
                            <Image
                              src={getTemplateImageUrl(
                                "yootheme/cache/a7/reg_profil_toefl-a7488ef5.jpg"
                              )}
                              width={60}
                              height={60}
                              alt="English TOEFL®"
                              className="el-image uk-border-circle"
                              loading="lazy"
                            />
                          </Link>
                        </div>
                        <div className="uk-width-expand uk-margin-remove-first-child">
                          <h4 className="el-title uk-h4 uk-link-reset uk-text-primary uk-margin-top uk-margin-remove-bottom">
                            <Link
                              href="/destinations/germany-bayerischer-wald#engtoefl"
                              uk-scroll=""
                            >
                              English TOEFL®
                            </Link>
                          </h4>
                          <div className="el-meta uk-muted uk-margin-small-top uk-margin-remove-bottom text-black">
                            Language training incl. certificate
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="el-item uk-panel" uk-scrollspy-class="">
                      <div className="uk-grid-medium uk-flex-middle" uk-grid="">
                        <div className="uk-width-1-5@m uk-flex-last@m">
                          <Link
                            href="/destinations/germany-bayerischer-wald#gerclassic"
                            uk-scroll=""
                          >
                            <Image
                              src={getTemplateImageUrl(
                                "yootheme/cache/fd/reg_profil_deutschclassic-fd03850d.jpg"
                              )}
                              width={60}
                              height={60}
                              alt="German Classic"
                              className="el-image uk-border-circle"
                              loading="lazy"
                            />
                          </Link>
                        </div>
                        <div className="uk-width-expand uk-margin-remove-first-child">
                          <h4 className="el-title uk-h4 uk-link-reset uk-text-primary uk-margin-top uk-margin-remove-bottom">
                            <Link
                              href="/destinations/germany-bayerischer-wald#gerclassic"
                              uk-scroll=""
                            >
                              German Classic
                            </Link>
                          </h4>
                          <div className="el-meta uk-muted uk-margin-small-top uk-margin-remove-bottom text-black">
                            Holiday-oriented language course with fun
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location Card 3: Bath University */}
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div
                className="uk-card uk-card-default uk-card-large uk-flex uk-flex-column uk-margin-medium uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              >
                <div
                  className="uk-grid-collapse uk-flex-1 uk-flex-column uk-flex-row@m"
                  uk-grid=""
                >
                  <div className="uk-width-1-3@m uk-flex-last@m uk-flex uk-flex-column uk-flex-1 uk-flex-initial@m uk-flex-top@m uk-flex-middle">
                    <div
                      className="uk-card-media-right uk-flex-1 uk-flex uk-flex-column"
                      uk-toggle="cls: uk-card-media-right uk-card-media-top; mode: media; media: @m"
                    >
                      <Image
                        src={getTemplateImageUrl(
                          "yootheme/cache/7f/bat_bigpic-7f627372.jpg"
                        )}
                        width={920}
                        height={613}
                        alt="Bath University"
                        className="el-image uk-flex-1 uk-object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="uk-width-expand uk-flex uk-flex-column uk-flex-center@m uk-flex-none uk-flex-1@m">
                    <div className="uk-card-body uk-margin-remove-first-child">
                      <div className="el-meta uk-h4 uk-margin-top uk-margin-remove-bottom !text-[1.67vw]">
                        England
                      </div>
                      <h3 className="el-title uk-card-title uk-margin-small-top uk-margin-remove-bottom !text-[1.67vw]">
                        Bath University
                      </h3>
                      <div className="uk-margin-top">
                        <Link
                          href="/destinations/en-england-bath-university"
                          className="el-link uk-button uk-button-primary uk-button-small"
                        >
                          read more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Program Options for Bath University */}
              <div className="uk-margin uk-text-left@m uk-text-center">
                <div
                  className="uk-grid uk-child-width-1-1 uk-child-width-1-2@m uk-grid-small uk-grid-divider uk-grid-match"
                  uk-grid=""
                >
                  <div>
                    <div className="el-item uk-panel" uk-scrollspy-class="">
                      <div className="uk-grid-medium uk-flex-middle" uk-grid="">
                        <div className="uk-width-1-5@m uk-flex-last@m">
                          <Link
                            href="/destinations/en-england-bath-university#engclassic"
                            uk-scroll=""
                          >
                            <Image
                              src={getTemplateImageUrl(
                                "yootheme/cache/64/bat_profil_englischclassic-64bd53f1.jpg"
                              )}
                              width={60}
                              height={60}
                              alt="English Classic"
                              className="el-image uk-border-circle"
                              loading="lazy"
                            />
                          </Link>
                        </div>
                        <div className="uk-width-expand uk-margin-remove-first-child">
                          <h4 className="el-title uk-h4 uk-link-reset uk-text-primary uk-margin-top uk-margin-remove-bottom">
                            <Link
                              href="/destinations/en-england-bath-university#engclassic"
                              uk-scroll=""
                            >
                              English Classic
                            </Link>
                          </h4>
                          <div className="el-meta uk-muted uk-margin-small-top uk-margin-remove-bottom text-black">
                            Learning in the motherland of language
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="el-item uk-panel" uk-scrollspy-class="">
                      <div className="uk-grid-medium uk-flex-middle" uk-grid="">
                        <div className="uk-width-1-5@m uk-flex-last@m">
                          <Link
                            href="/destinations/en-england-bath-university#engtoefl"
                            uk-scroll=""
                          >
                            <Image
                              src={getTemplateImageUrl(
                                "yootheme/cache/0a/bat_profil_englischtoefl-0a0f0b4f.jpg"
                              )}
                              width={60}
                              height={60}
                              alt="English TOEFL®"
                              className="el-image uk-border-circle"
                              loading="lazy"
                            />
                          </Link>
                        </div>
                        <div className="uk-width-expand uk-margin-remove-first-child">
                          <h4 className="el-title uk-h4 uk-link-reset uk-text-primary uk-margin-top uk-margin-remove-bottom">
                            <Link
                              href="/destinations/en-england-bath-university#engtoefl"
                              uk-scroll=""
                            >
                              English TOEFL®
                            </Link>
                          </h4>
                          <div className="el-meta uk-muted uk-margin-small-top uk-margin-remove-bottom text-black">
                            Language training incl. certificate
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location Card 4: Rossall School */}
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div
                className="uk-card uk-card-default uk-card-large uk-flex uk-flex-column uk-margin-medium uk-text-left@m uk-text-center"
                uk-scrollspy-class="uk-animation-slide-right-small"
              >
                <div
                  className="uk-grid-collapse uk-flex-1 uk-flex-column uk-flex-row@m"
                  uk-grid=""
                >
                  <div className="uk-width-1-3@m uk-flex uk-flex-column uk-flex-1 uk-flex-initial@m uk-flex-top@m uk-flex-middle">
                    <div
                      className="uk-card-media-left uk-flex-1 uk-flex uk-flex-column"
                      uk-toggle="cls: uk-card-media-left uk-card-media-top; mode: media; media: @m"
                    >
                      <Image
                        src={getTemplateImageUrl(
                          "yootheme/cache/29/ros_bigpic-29267065.jpg"
                        )}
                        width={920}
                        height={613}
                        alt="Rossall School"
                        className="el-image uk-flex-1 uk-object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="uk-width-expand uk-flex uk-flex-column uk-flex-center@m uk-flex-none uk-flex-1@m">
                    <div className="uk-card-body uk-margin-remove-first-child">
                      <div className="el-meta uk-h4 uk-margin-top uk-margin-remove-bottom !text-[1.67vw]">
                        England
                      </div>
                      <h3 className="el-title uk-card-title uk-margin-small-top uk-margin-remove-bottom !text-[1.67vw]">
                        Rossall School
                      </h3>
                      <div className="uk-margin-top">
                        <Link
                          href="/destinations/en-england-rossall-school"
                          className="el-link uk-button uk-button-primary uk-button-small"
                        >
                          read more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Program Options for Rossall School */}
              <div className="uk-margin uk-text-left@m uk-text-center">
                <div
                  className="uk-grid uk-child-width-1-1 uk-child-width-1-2@m uk-grid-small uk-grid-divider uk-grid-match"
                  uk-grid=""
                >
                  <div>
                    <div className="el-item uk-panel" uk-scrollspy-class="">
                      <div className="uk-grid-medium uk-flex-middle" uk-grid="">
                        <div className="uk-width-1-5@m uk-flex-last@m">
                          <Link
                            href="/destinations/en-england-rossall-school#engclassic"
                            uk-scroll=""
                          >
                            <Image
                              src={getTemplateImageUrl(
                                "yootheme/cache/8d/ros_profil_englischclassic-8d5d3e02.jpg"
                              )}
                              width={60}
                              height={60}
                              alt="English Classic"
                              className="el-image uk-border-circle"
                              loading="lazy"
                            />
                          </Link>
                        </div>
                        <div className="uk-width-expand uk-margin-remove-first-child">
                          <h4 className="el-title uk-h4 uk-link-reset uk-text-primary uk-margin-top uk-margin-remove-bottom">
                            <Link
                              href="/destinations/en-england-rossall-school#engclassic"
                              uk-scroll=""
                            >
                              English Classic
                            </Link>
                          </h4>
                          <div className="el-meta uk-muted uk-margin-small-top uk-margin-remove-bottom text-black">
                            Learning in the motherland of language
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="el-item uk-panel" uk-scrollspy-class="">
                      <div className="uk-grid-medium uk-flex-middle" uk-grid="">
                        <div className="uk-width-1-5@m uk-flex-last@m">
                          <Link
                            href="/destinations/en-england-rossall-school#engtoefl"
                            uk-scroll=""
                          >
                            <Image
                              src={getTemplateImageUrl(
                                "yootheme/cache/18/ros_profil_englischtoefl-1899bb78.jpg"
                              )}
                              width={60}
                              height={60}
                              alt="English TOEFL®"
                              className="el-image uk-border-circle"
                              loading="lazy"
                            />
                          </Link>
                        </div>
                        <div className="uk-width-expand uk-margin-remove-first-child">
                          <h4 className="el-title uk-h4 uk-link-reset uk-text-primary uk-margin-top uk-margin-remove-bottom">
                            <Link
                              href="/destinations/en-england-rossall-school#engtoefl"
                              uk-scroll=""
                            >
                              English TOEFL®
                            </Link>
                          </h4>
                          <div className="el-meta uk-muted uk-margin-small-top uk-margin-remove-bottom text-black">
                            Language training incl. certificate
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location Card 5: Barcelona */}
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div
                className="uk-card uk-card-default uk-card-large uk-flex uk-flex-column uk-margin-medium uk-text-left@m uk-text-center"
                uk-scrollspy-class=""
              >
                <div
                  className="uk-grid-collapse uk-flex-1 uk-flex-column uk-flex-row@m"
                  uk-grid=""
                >
                  <div className="uk-width-1-3@m uk-flex-last@m uk-flex uk-flex-column uk-flex-1 uk-flex-initial@m uk-flex-top@m uk-flex-middle">
                    <div
                      className="uk-card-media-right uk-flex-1 uk-flex uk-flex-column"
                      uk-toggle="cls: uk-card-media-right uk-card-media-top; mode: media; media: @m"
                    >
                      <Image
                        src={getTemplateImageUrl(
                          "yootheme/cache/38/AI Kids auf Boot-3859030a.png"
                        )}
                        width={500}
                        height={920}
                        alt="Sailing trip at our Barcelona Beach Camp in Spain"
                        className="el-image uk-flex-1 uk-object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="uk-width-expand uk-flex uk-flex-column uk-flex-center@m uk-flex-none uk-flex-1@m">
                    <div className="uk-card-body uk-margin-remove-first-child">
                      <div className="el-meta uk-h4 uk-margin-top uk-margin-remove-bottom !text-[1.67vw]">
                        Spain
                      </div>
                      <h3 className="el-title uk-card-title uk-margin-small-top uk-margin-remove-bottom !text-[1.67vw]">
                        Barcelona Beach camp
                      </h3>
                      <div className="uk-margin-top">
                        <Link
                          href="/destinations/en-spain-barcelona"
                          className="el-link uk-button uk-button-primary uk-button-small"
                        >
                          read more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div
        className="uk-section-secondary uk-section-overlap uk-section uk-section-large"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2
                className="uk-h2 uk-text-center !text-[1.67vw] !font-bold"
                uk-scrollspy-class="uk-animation-slide-right-medium"
              >
                Frequently Asked Questions
              </h2>
              <div
                className="uk-divider-small uk-text-center"
                uk-scrollspy-class="uk-animation-slide-right-medium"
              ></div>
            </div>
          </div>
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div className="uk-margin uk-text-left@s uk-text-center">
                <div
                  className="uk-grid uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-large uk-grid-match"
                  uk-grid=""
                >
                  <div>
                    <div
                      className="el-item uk-panel uk-margin-remove-first-child"
                      uk-scrollspy-class=""
                    >
                      <h3 className="el-title uk-margin-top uk-margin-remove-bottom !text-[1.67vw] !font-semibold">
                        Which languages are spoken in camp?
                      </h3>
                      <div className="el-content uk-panel uk-margin-top !text-[#9c5d00]">
                        The main language in all our camps is English. In
                        addition, there is the language of the country in which
                        the camp takes place. As we have our headquarters in
                        Germany, German teamers are always present in all camps.
                        All announcements and explanations are therefore always
                        in German and English. Of course, all our teamers with
                        their different nationalities are also available for
                        individual translations.
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="el-item uk-panel uk-margin-remove-first-child"
                      uk-scrollspy-class=""
                    >
                      <h3 className="el-title uk-margin-top uk-margin-remove-bottom !text-[1.67vw] !font-semibold">
                        Who are the camp counselors?
                      </h3>
                      <div className="el-content uk-panel uk-margin-top !text-[#9c5d00]">
                        Every year our team is made up of an international mix.
                        The non-profit association Camp Europe e.V. with
                        headquarters in Hamburg and a branch office in Canada
                        takes care of the acquisition of national and
                        international applicants. Since we have about 50%
                        German-speaking children, there are also German carers
                        in every location. But many also come from other
                        countries, such as England, Spain, Australia, Canada or
                        Australia, to name just a few.
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="el-item uk-panel uk-margin-remove-first-child"
                      uk-scrollspy-class=""
                    >
                      <h3 className="el-title uk-margin-top uk-margin-remove-bottom !text-[1.67vw] !font-semibold">
                        Should 12-year-olds rather go to Junior Camp or Senior
                        Camp?
                      </h3>
                      <div className="el-content uk-panel uk-margin-top !text-[#9c5d00]">
                        This question is not easy to answer and depends on the
                        individual stage of development of your child.
                        Therefore, as parents, we leave you the opportunity to
                        decide for yourself. In the Junior Camp they belong to
                        the older ones and can explore a lot in a playful way.
                        In the Senior Camp they are the younger ones, who have
                        role models through the older ones, whom they can
                        emulate.
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="el-item uk-panel uk-margin-remove-first-child"
                      uk-scrollspy-class=""
                    >
                      <h3 className="el-title uk-margin-top uk-margin-remove-bottom !text-[1.67vw] !font-semibold">
                        How do you provide safety for the kids?
                      </h3>
                      <div className="el-content uk-panel uk-margin-top !text-[#9c5d00]">
                        Before our camp counselors start working with us, we
                        check their police clearance certificates. You must be
                        at least 19 years old to work for us as a teamer. They
                        must also have a &quot;First Aid Certificate&quot;,
                        which must not be older than two years. In the camps we
                        try to make sure that only adults from our camp or
                        familiar faces are on the campground and that all our
                        carers look after strangers.
                        <br />
                        We have many different camp sites. Some of them are
                        fenced in, others are not. There are no armed guards or
                        the like in our camps, as we believe that these
                        conditions create a very insecure feeling. We do not
                        have a high security zone in Germany, Northern Ireland
                        or England, but we keep our eyes open and do everything
                        we can to ensure that all participants have a great
                        time.
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="el-item uk-panel uk-margin-remove-first-child"
                      uk-scrollspy-class=""
                    >
                      <h3 className="el-title uk-margin-top uk-margin-remove-bottom !text-[1.67vw] !font-semibold">
                        How is my child accommodated in camp?
                      </h3>
                      <div className="el-content uk-panel uk-margin-top !text-[#9c5d00]">
                        In the Creative, Sports & Adventure Camp in Neuburg the
                        participants are accommodated in tents with 6-7 persons.
                        These are equipped with a floor and a wooden gallery.
                        The participants can make themselves comfortable with
                        sleeping bag and sleeping mat. In Walsrode the Juniors
                        (7-12) and the Seniors (12-16) can choose between tent
                        and hut. The wooden cabins are equipped with bunk beds
                        and can accommodate 4-8 children each. In the other
                        locations, participants are accommodated in shared rooms
                        in youth hostels, sports centres or boarding schools run
                        by private schools. Detailed information about the
                        accommodation can be found at the various camps.
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="el-item uk-panel uk-margin-remove-first-child"
                      uk-scrollspy-class=""
                    >
                      <h3 className="el-title uk-margin-top uk-margin-remove-bottom !text-[1.67vw] !font-semibold">
                        Where do kids and camp counselors come from?
                      </h3>
                      <div className="el-content uk-panel uk-margin-top !text-[#9c5d00]">
                        Camp Adventure attaches great importance to
                        internationality. The participants and supervisors in
                        our camps come from many different countries. Last year,
                        for example, we had participants from over 60 different
                        countries and supervisors from 25 different nations. Of
                        course we don&apos;t know where they will come from this
                        year. So we are at least as excited as you are.
                        <br />
                        Every year, our team is made up of an international
                        mixture. Through our office in Hamburg and our branch
                        office in Canada, we reach motivated and committed
                        advisors from all over the world. Canadian and
                        Australian teamers can therefore be found as well as
                        German or Spanish teamers. Due to the different
                        experiences and cultural backgrounds an indescribably
                        fantastic, international atmosphere is created.
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="el-item uk-panel uk-margin-remove-first-child"
                      uk-scrollspy-class=""
                    >
                      <h3 className="el-title uk-margin-top uk-margin-remove-bottom !text-[1.67vw] !font-semibold">
                        How is the choice of activities/courses in the camps
                        made?
                      </h3>
                      <div className="el-content uk-panel uk-margin-top !text-[#9c5d00]">
                        If your child would like to participate in a paid
                        profile (e.g. horse riding, language course, GEOlino),
                        this must be booked in advance when registering. In
                        principle, no extra profiles have to be booked. A
                        program with a variety of activities is of course
                        available to the participants in all camps. The various
                        activities can be chosen by the participants on site in
                        the respective camps. We present the offers to the
                        participants, so that everyone gets an insight into the
                        different courses. The children can then register in the
                        lists of the respective courses.
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="el-item uk-panel uk-margin-remove-first-child"
                      uk-scrollspy-class=""
                    >
                      <h3 className="el-title uk-margin-top uk-margin-remove-bottom !text-[1.67vw] !font-semibold">
                        How big are the camps? How high is the caregiver key?
                      </h3>
                      <div className="el-content uk-panel uk-margin-top !text-[#9c5d00]">
                        Capacities range from around 30 participants in smaller
                        language camps to a maximum of 350 children. However,
                        the maximum capacity is not reached every week. However,
                        a minimum number of participants must be guaranteed in
                        order to run the camp.
                        <br />
                        It is important to us that all children are always
                        grouped in small groups of 5-8, with a supervisor as
                        contact person. This way homesickness does not get a
                        chance and despite the size of the camp in their group
                        family, they experience a strong cohesion on which they
                        can count!
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="el-item uk-panel uk-margin-remove-first-child"
                      uk-scrollspy-class=""
                    >
                      <h3 className="el-title uk-margin-top uk-margin-remove-bottom !text-[1.67vw] !font-semibold">
                        When do I have to pay the price for the booked camp?
                      </h3>
                      <div className="el-content uk-panel uk-margin-top !text-[#9c5d00]">
                        The deposit must be paid within 7 days of receipt of the
                        booking confirmation. The remaining payment for the
                        booked camp is due 4 weeks before the start of the camp
                        at the latest. Further information can be found in our{" "}
                        <Link href="/info/terms-conditions">
                          Terms & Conditions
                        </Link>
                        .
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="uk-margin uk-text-center" uk-scrollspy-class="">
                <Link
                  className="el-content uk-button uk-button-default uk-flex-inline uk-flex-center uk-flex-middle"
                  href="/info/faq"
                >
                  <span
                    className="uk-margin-small-right"
                    uk-icon="comments"
                  ></span>
                  More questions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security Concept Section */}
      <div
        id="guide"
        className="uk-section-default uk-section-overlap uk-section uk-section-large !pb-2"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2
                className="uk-h1 uk-margin-small uk-text-center !text-[5vw] !font-bold"
                uk-scrollspy-class="uk-animation-slide-bottom-medium"
              >
                Security Concept
              </h2>
              <div
                className="uk-divider-icon uk-width-medium uk-margin-auto"
                uk-scrollspy-class=""
              ></div>
            </div>
          </div>
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div className="uk-panel uk-margin text-black" uk-scrollspy-class="">
                <p>
                  Dear parents,
                  <br />
                  <br />
                  we are very happy that you want us to take care of the
                  sweetiest and the best of your life. Be sure: we will protect
                  it as if it is our own child and do everything we can to
                  guarantee supreme safety. We would like to introduce you a
                  part of our safety concept, if you have any questions feel
                  free to contact us.
                </p>
              </div>
            </div>
          </div>
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div className="uk-margin uk-text-left@m uk-text-center">
                <div
                  className="uk-grid uk-child-width-1-1 uk-child-width-1-3@m uk-grid-large uk-grid-match"
                  uk-grid=""
                >
                  <div>
                    <div
                      className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child"
                      uk-scrollspy-class=""
                    >
                      <h3 className="el-title uk-card-title uk-margin-top uk-margin-remove-bottom !text-[1.67vw] !font-semibold">
                        Background Check
                      </h3>
                      <div className="el-content uk-panel uk-margin-top !text-[#9c5d00]">
                        <p>
                          Every counselor, chef, teamer who enters our camps has
                          to be registrated, needs a background check as well as
                          references. That&apos;s why parents are only allowed
                          on the day of arrival and departure and not during the
                          camp week. We want to make sure that we know and
                          checked every adult who is with us at camp.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child"
                      uk-scrollspy-class=""
                    >
                      <h3 className="el-title uk-card-title uk-margin-top uk-margin-remove-bottom !text-[1.67vw] !font-semibold">
                        Education
                      </h3>
                      <div className="el-content uk-panel uk-margin-top !text-[#9c5d00]">
                        <p>
                          Each supervisor must complete an almost two-week
                          training course with us, which from early in the
                          morning until late in the evening includes so many
                          lessons that the number of hours even corresponds to
                          the basic study in educational sciences. Here we focus
                          on the areas of safety, accident prevention, child
                          psychology and needs as well as the various safety
                          aspects in the field of experiential education.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child"
                      uk-scrollspy-class=""
                    >
                      <h3 className="el-title uk-card-title uk-margin-top uk-margin-remove-bottom !text-[1.67vw] !font-semibold">
                        Crisis Intervention
                      </h3>
                      <div className="el-content uk-panel uk-margin-top !text-[#9c5d00]">
                        <p>
                          If something should happen, it is not only important
                          to provide first aid for the affected person, but also
                          to care for the other children and adolescents. We
                          have a specially trained team for crisis intervention,
                          which then provides immediate care and can thus
                          prevent possible traumatisation due to the experience.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child"
                      uk-scrollspy-class=""
                    >
                      <h3 className="el-title uk-card-title uk-margin-top uk-margin-remove-bottom !text-[1.67vw] !font-semibold">
                        Caregiver Key
                      </h3>
                      <div className="el-content uk-panel uk-margin-top !text-[#9c5d00]">
                        <p>
                          No safety without sufficient staff! We are the leaders
                          in Germany with our great caregiver key. There are no
                          camps that have a key worse than 1:6-1:8, which means
                          that one caregiver is responsible for a maximum of 6-8
                          children. In the junior camps we also use our CIT
                          (Counselor in Training), so that we often reach a key
                          of only 1:4. We know that this key can seem
                          exaggerated, but we want to guarantee the highest
                          possible safety and we firmly believe that this is
                          exactly what our high level of caregiver commitment
                          leads to.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child"
                      uk-scrollspy-class=""
                    >
                      <h3 className="el-title uk-card-title uk-margin-top uk-margin-remove-bottom !text-[1.67vw] !font-semibold">
                        Nightwatch
                      </h3>
                      <div className="el-content uk-panel uk-margin-top !text-[#9c5d00]">
                        <p>
                          All our camps are also supervised at night by the
                          counselors/teamers. On the one hand we want to prevent
                          visitors from coming to the site - which has not
                          happened until today - and on the other hand we want
                          to be there for the children when they wake up at
                          night and get homesick or have to go to the toilet.
                          The nightwatch patrols the area and is otherwise
                          reachable at a central place for the children. Some of
                          our locations - e.g. the headquarters in Walsrode -
                          are also video-monitored and fenced in.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child"
                      uk-scrollspy-class=""
                    >
                      <h3 className="el-title uk-card-title uk-margin-top uk-margin-remove-bottom !text-[1.67vw] !font-semibold">
                        Cooperation
                      </h3>
                      <div className="el-content uk-panel uk-margin-top !text-[#9c5d00]">
                        <p>
                          Cooperation with the independent representative for
                          questions of sexual child abuse via our umbrella
                          organisation Reisenetz e.V.: Camp Adventure was one of
                          the first tour operators for children and young people
                          to develop a protection concept that prevents sexual
                          abuse among children and young people. Today, this
                          concept is considered important by many other tour
                          operators, also due to our personal commitment in
                          various associations and professional circles. Of
                          course, the background check and the &quot;6-eyes
                          principle&quot;, which states that a child must never
                          be alone with a caregiver, is also an essential part
                          of our protection concept. The most important thing,
                          however, is to create an &quot;open system&quot; in
                          which everyone knows that sexual abuse should not be a
                          taboo subject, but that simple instruments such as a
                          grievance box and feedback system can immediately
                          address grievances and that they do not have to be
                          denied.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child"
                      uk-scrollspy-class=""
                    >
                      <h3 className="el-title uk-card-title uk-margin-top uk-margin-remove-bottom !text-[1.67vw] !font-semibold">
                        Quality
                      </h3>
                      <div className="el-content uk-panel uk-margin-top !text-[#9c5d00]">
                        <p>
                          As a member of the quality committee of the
                          professional association for children and youth travel
                          &quot;Reisenetz&quot;, our managing director Jan Vieth
                          is responsible for further developing and checking the
                          quality guidelines of the entire industry. As
                          Germany&apos;s ambassador to the ICF, he is also kept
                          up to date on improvements in camp and training
                          quality worldwide and adapts these as quickly as
                          possible to our own camps.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child"
                      uk-scrollspy-class=""
                    >
                      <h3 className="el-title uk-card-title uk-margin-top uk-margin-remove-bottom !text-[1.67vw] !font-semibold">
                        Accessibility
                      </h3>
                      <div className="el-content uk-panel uk-margin-top !text-[#9c5d00]">
                        <p>
                          Of course, all parents receive a number from us, which
                          allows them to reach us 24 hours a day in an
                          emergency. If an emergency occurs at your home, you
                          can inform us immediately and we can decide together
                          how, when and whether to inform your child.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child"
                      uk-scrollspy-class=""
                    >
                      <h3 className="el-title uk-card-title uk-margin-top uk-margin-remove-bottom !text-[1.67vw] !font-semibold">
                        In case of emergency
                      </h3>
                      <div className="el-content uk-panel uk-margin-top !text-[#9c5d00]">
                        <p>
                          Every caregiver has a valid first aid certificate and
                          can help if necessary.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="uk-panel uk-margin text-black" uk-scrollspy-class="">
                <p style={{ textAlign: "center" }}> </p>
                <p style={{ textAlign: "center" }}>
                  We hope to have helped you with this overview. For further
                  information you can call us at +49 (0) 40 4100 949 00.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
