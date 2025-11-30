import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { getTemplateImageUrl } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Go and Grow Camp Academy - Outdoor Education at its best",
  description:
    "Go and Grow Camp Academy is one of Europe's top Training Centres for educational Programs in Outdoor & Adventure ► Join us",
};

export default function AcademyPage() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="uk-section-primary uk-section-overlap uk-position-relative"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div
          data-src={getTemplateImageUrl("yootheme/banner/b6.jpg")}
          uk-img=""
          className="uk-background-norepeat uk-background-cover uk-background-center-center uk-section uk-section-xlarge"
          style={{ backgroundImage: `url(${getTemplateImageUrl("yootheme/banner/b6.jpg")})` }}
        >
          <div
            className="uk-position-cover"
            style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          ></div>
          <div className="uk-container uk-container-large uk-position-relative">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
              <div className="uk-width-1-1@m">
                <div className="uk-heading-large uk-text-center" uk-scrollspy-class="">
                  Go and Grow Camp Academy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Section with EU Logo */}
      <div className="uk-section-default uk-section-overlap uk-section">
        <div className="uk-container uk-container-xlarge">
          <div className="uk-grid tm-grid-expand uk-grid-collapse uk-child-width-1-1">
            <div className="uk-grid-item-match uk-flex-middle uk-width-1-1">
              <div className="uk-panel uk-width-1-1">
                <div className="uk-margin uk-text-center">
                  <Image
                    src={getTemplateImageUrl(
                      "yootheme/cache/35/EFRE_Logo_f_Zusatz_rechts-35518835.jpg"
                    )}
                    width={300}
                    height={88}
                    className="el-image"
                    alt="European Union"
                    loading="lazy"
                  />
                </div>
                <h1 className="uk-text-center">
                  The Go and Grow Camp Academy - one of Europe&apos;s leading
                  Training centres in Outdoor Education
                </h1>
                <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
                <div className="uk-panel uk-margin uk-text-center">
                  <p>
                    Outdoor Education at its best - as one of Europe&apos;s
                    leading specialists in experiential education and outdoor
                    sports, many students and professionals have used our
                    training centres to expand their skills. Developing both
                    professionally and personally while leading groups,
                    improving teamwork, and having fun. Since 2015 the Camp
                    Adventure Academy has called our site in Lüneburger Heide
                    it&apos;s home. Thanks to the Academy&apos;s size, we offer a
                    variety of activities and events for an unforgettable
                    experience. While outdoor education class trips and youth
                    camps are the primary focus during the summer, the Camp
                    Adventure Academy offers its facilities for training,
                    further education, company events, trade fairs, survival
                    courses and any other events through the year.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Cards Section */}
      <div
        className="uk-section-muted uk-section-overlap uk-section"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div className="uk-margin-small uk-text-center">
                <div
                  className="uk-grid uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-2@m uk-grid-small"
                  uk-grid=""
                >
                  <div className="uk-flex uk-flex-center uk-flex-middle">
                    <div className="el-item" uk-scrollspy-class="uk-animation-fade">
                      <Link
                        className="uk-flex-1 uk-transition-toggle uk-inline-clip uk-link-toggle"
                        href="/academy/jobs"
                      >
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/e7/ausbildungen_header-e70d4031.jpg"
                          )}
                          width={850}
                          height={850}
                          alt="Canoeing in summer camp"
                          loading="lazy"
                          className="el-image uk-transition-scale-up uk-transition-opaque"
                        />
                        <div className="uk-position-center uk-position-large uk-overlay-default">
                          <div className="uk-overlay uk-padding-large uk-width-large uk-margin-remove-first-child">
                            <h2 className="el-title uk-h5 uk-margin-top uk-margin-remove-bottom">
                              Camp & Office Positions
                            </h2>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="uk-flex uk-flex-center uk-flex-middle">
                    <div className="el-item" uk-scrollspy-class="uk-animation-fade">
                      <Link
                        className="uk-flex-1 uk-transition-toggle uk-inline-clip uk-link-toggle"
                        href="/academy/educational-programs/outdoor-education-diploma"
                      >
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/62/fortbildungen_header-620c7985.jpg"
                          )}
                          width={850}
                          height={850}
                          alt="Archery Training"
                          loading="lazy"
                          className="el-image uk-transition-scale-up uk-transition-opaque"
                        />
                        <div className="uk-position-center uk-position-large uk-overlay-default">
                          <div className="uk-overlay uk-padding-large uk-width-large uk-margin-remove-first-child">
                            <h2 className="el-title uk-h5 uk-margin-top uk-margin-remove-bottom">
                              Outdoor Education Diploma
                            </h2>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="uk-flex uk-flex-center uk-flex-middle">
                    <div className="el-item" uk-scrollspy-class="uk-animation-fade">
                      <Link
                        className="uk-flex-1 uk-transition-toggle uk-inline-clip uk-link-toggle"
                        href="/academy/master-degree"
                      >
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/ed/degree-outdoor-education-ed8edb05.jpg"
                          )}
                          width={850}
                          height={850}
                          alt="group of students around the fire"
                          loading="lazy"
                          className="el-image uk-transition-scale-up uk-transition-opaque"
                        />
                        <div className="uk-position-center uk-position-large uk-overlay-default">
                          <div className="uk-overlay uk-padding-large uk-width-large uk-margin-remove-first-child">
                            <h2 className="el-title uk-h5 uk-margin-top uk-margin-remove-bottom">
                              Master&apos;s Degree in Outdoor Sports
                            </h2>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="uk-flex uk-flex-center uk-flex-middle">
                    <div className="el-item" uk-scrollspy-class="uk-animation-fade">
                      <Link
                        className="uk-flex-1 uk-transition-toggle uk-inline-clip uk-link-toggle"
                        href="/academy/location-camp-adventure-academy"
                      >
                        <Image
                          src={getTemplateImageUrl(
                            "yootheme/cache/6e/akademie_parallax-6e6a6734.jpg"
                          )}
                          width={850}
                          height={850}
                          alt="a map of the Go and Grow Camp Academy"
                          loading="lazy"
                          className="el-image uk-transition-scale-up uk-transition-opaque"
                        />
                        <div className="uk-position-center uk-position-large uk-overlay-default">
                          <div className="uk-overlay uk-padding-large uk-width-large uk-margin-remove-first-child">
                            <h2 className="el-title uk-h5 uk-margin-top uk-margin-remove-bottom">
                              Location of Go and Grow Camp Academy
                            </h2>
                          </div>
                        </div>
                      </Link>
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
                    type="text/javascript"
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
