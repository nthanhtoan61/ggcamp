"use client";

import Link from "next/link";
import Image from "next/image";
import { getTemplateImageUrl, getMediaImageUrl } from "@/lib/assets";

export const Header: React.FC = () => {
  const logoUrl = getTemplateImageUrl("yootheme/cache/c9/logo-camp-adventure-c9850ee6.png");

  return (
    <>
      {/* Skip to main content */}
      <div className="uk-hidden-visually uk-notification uk-notification-top-left uk-width-auto">
        <div className="uk-notification-message">
          <a href="#tm-main" className="uk-link-reset">Skip to main content</a>
        </div>
      </div>

      <div className="tm-page">
        {/* Mobile Header */}
        <header className="tm-header-mobile uk-hidden@l">
          <div
            uk-sticky="show-on-up: true; animation: uk-animation-slide-top; cls-active: uk-navbar-sticky; sel-target: .uk-navbar-container"
          >
            <div className="uk-navbar-container">
              <div className="uk-container uk-container-expand">
                <nav
                  className="uk-navbar"
                  uk-navbar='{"align":"center","container":".tm-header-mobile > [uk-sticky]","boundary":".tm-header-mobile .uk-navbar-container"}'
                >
                  <div className="uk-navbar-left">
                    <a
                      uk-toggle="target: #tm-dialog-mobile"
                      href="#tm-dialog-mobile"
                      className="uk-navbar-toggle"
                    >
                      <div uk-navbar-toggle-icon=""></div>
                    </a>
                  </div>
                  <div className="uk-navbar-center">
                    <Link href="/" aria-label="Back to home" className="uk-logo uk-navbar-item">
                      <Image
                        alt="Camp Adventure"
                        loading="eager"
                        src={logoUrl}
                        width={100}
                        height={35}
                      />
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          {/* Mobile Off-canvas Menu */}
          <div id="tm-dialog-mobile" uk-offcanvas="container: true; overlay: true; mode: slide">
            <div className="uk-offcanvas-bar uk-flex uk-flex-column">
              <button
                className="uk-offcanvas-close uk-close-large"
                type="button"
                uk-close=""
                uk-toggle="cls: uk-close-large; mode: media; media: @s"
              ></button>

              <div className="uk-margin-auto-bottom">
                <div className="uk-grid uk-child-width-1-1" uk-grid="">
                  <div>
                    <div className="uk-panel" id="module-tm-4">
                      <Link href="/" aria-label="Back to home" className="uk-logo">
                        <Image
                          alt="Camp Adventure"
                          loading="eager"
                          src={logoUrl}
                          width={100}
                          height={35}
                        />
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="uk-panel" id="module-menu-dialog-mobile">
                      <ul className="uk-nav uk-nav-default">
                        <li className="item-165 uk-parent">
                          <a href="/destinations">Camp Locations</a>
                          <ul className="uk-nav-sub">
                            <li>
                              <Link href="/destinations/germany-lueneburger-heide">
                                Germany - Lüneburger Heide
                              </Link>
                            </li>
                            <li>
                              <Link href="/destinations/germany-adventure-camp-bayerischer-wald">
                                Germany - Bayerischer Wald
                              </Link>
                            </li>
                            <li>
                              <Link href="/destinations/en-england-bath-university">
                                England - Bath & London
                              </Link>
                            </li>
                            <li>
                              <Link href="/destinations/en-spain-barcelona">Spain - Barcelona</Link>
                            </li>
                            <li>
                              <Link href="/destinations/camps-for-companies">
                                Camps for Companies
                              </Link>
                            </li>
                            <li>
                              <Link href="/destinations/booking">Booking</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="item-672 uk-parent">
                          <Link href="/camp-profiles">Camp Profiles</Link>
                          <ul className="uk-nav-sub">
                            <li>
                              <Link href="/camp-profiles/adventure-sports-creative">
                                Adventure, Sports & Creative
                              </Link>
                            </li>
                            <li>
                              <Link href="/camp-profiles/arts-crafts">Arts & Crafts</Link>
                            </li>
                            <li>
                              <Link href="/camp-profiles/climbing">Climbing</Link>
                            </li>
                            <li>
                              <Link href="/camp-profiles/dancing">Dancing</Link>
                            </li>
                            <li>
                              <Link href="/camp-profiles/diving">Diving</Link>
                            </li>
                            <li>
                              <Link href="/camp-profiles/englischcamps">Englischcamps</Link>
                            </li>
                            <li>
                              <Link href="/camp-profiles/englisch-toefl">
                                Englisch TOEFL©
                              </Link>
                            </li>
                            <li>
                              <Link href="/camp-profiles/fishing">Fishing</Link>
                            </li>
                            <li>
                              <Link href="/camp-profiles/german-camps">German Camps</Link>
                            </li>
                            <li>
                              <Link href="/camp-profiles/horseback-riding">Horseback Riding</Link>
                            </li>
                            <li>
                              <Link href="/camp-profiles/husky-camp">Husky Camp</Link>
                            </li>
                            <li>
                              <Link href="/camp-profiles/international-counsellor-in-training-icit">
                                International Counsellor in Training (ICIT)
                              </Link>
                            </li>
                            <li>
                              <Link href="/camp-profiles/lifeguarding">Lifeguarding</Link>
                            </li>
                            <li>
                              <Link href="/camp-profiles/language-camps">Language</Link>
                            </li>
                            <li>
                              <Link href="/camp-profiles/senior-plus-leadership">Leadership</Link>
                            </li>
                            <li>
                              <Link href="/camp-profiles/multi-water-adventure">
                                Multi Water Adventure
                              </Link>
                            </li>
                            <li>
                              <Link href="/camp-profiles/sailing">Sailing</Link>
                            </li>
                            <li>
                              <Link href="/camp-profiles/skating">Skating</Link>
                            </li>
                            <li>
                              <Link href="/camp-profiles/soccer">Soccer</Link>
                            </li>
                            <li>
                              <Link href="/camp-profiles/space-exploration">Space Exploration</Link>
                            </li>
                            <li>
                              <Link href="/camp-profiles/spanishcourse">Spanishcourse</Link>
                            </li>
                            <li>
                              <Link href="/camp-profiles/survival-camps">Survival</Link>
                            </li>
                            <li>
                              <Link href="/camp-profiles/swimming">Swimming</Link>
                            </li>
                            <li>
                              <Link href="/camp-profiles/tennis">Tennis</Link>
                            </li>
                            <li>
                              <Link href="/camp-profiles/windsurfing">Windsurfing</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="item-210">
                          <Link href="/schooltrips">School Trips</Link>
                        </li>
                        <li className="item-226 uk-parent">
                          <Link href="/academy">Academy</Link>
                          <ul className="uk-nav-sub">
                            <li>
                              <Link href="/academy/jobs">Camp & Office Positions</Link>
                            </li>
                            <li className="item-237 uk-parent">
                              <a href="#">Educational Programs</a>
                              <ul>
                                <li>
                                  <Link href="/academy/educational-programs/outdoor-education-diploma">
                                    Outdoor Education Diploma
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/academy/educational-programs/icit-eng">
                                    International Counsellor in Training (ICIT)
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link href="/academy/location-camp-adventure-academy">
                                Location of Camp Adventure Academy
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="item-183 uk-parent">
                          <Link href="/info">Info</Link>
                          <ul className="uk-nav-sub">
                            <li>
                              <Link href="/info/news">News</Link>
                            </li>
                            <li>
                              <Link href="/info/info-sessions-eng">Info Sessions</Link>
                            </li>
                            <li>
                              <Link href="/info/arrival-departure">Arrival&Departure</Link>
                            </li>
                            <li>
                              <Link href="/info/safety">Safety</Link>
                            </li>
                            <li>
                              <Link href="/info/insurance">Insurance</Link>
                            </li>
                            <li>
                              <Link href="/info/faq">FAQ</Link>
                            </li>
                            <li>
                              <Link href="/info/agencies">Agencies</Link>
                            </li>
                            <li>
                              <Link href="/info/innovation-consulting">
                                Innovation Consulting
                              </Link>
                            </li>
                            <li>
                              <Link href="/info/terms-conditions">Terms&Conditions</Link>
                            </li>
                            <li>
                              <Link href="/info/contact">Contact</Link>
                            </li>
                            <li>
                              <Link href="/info/family-weekend">Family Weekend</Link>
                            </li>
                            <li>
                              <Link href="/info/travel-documents">Travel Documents</Link>
                            </li>
                            <li>
                              <Link href="/info/about">About us</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="item-182">
                          <Link href="/booking">Booking</Link>
                        </li>
                        <li className="item-943 uk-parent">
                          <a
                            href="https://gallery.campadventure.de/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Photos
                          </a>
                          <ul className="uk-nav-sub">
                            <li>
                              <Link href="/photo/photos">Photos - archive</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="item-983">
                          <a
                            href="https://www.bookacamp.de/en/auth/login/ds7fdn347dsfndsf74n37en37en37dnd"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Login
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="uk-panel" id="module-105">
                      <div className="uk-panel mod-languages">
                        <ul className="uk-subnav">
                          <li>
                            <a
                              href="https://www.campadventure.de/de/"
                              style={{ display: "flex !important" }}
                            >
                              <Image
                                title="Deutsch (Deutschland)"
                                src={getMediaImageUrl("mod_languages/images/de_de.gif")}
                                alt="Deutsch (Deutschland)"
                                width={16}
                                height={11}
                              />
                            </a>
                          </li>
                          <li className="uk-active">
                            <Link href="/" style={{ display: "flex !important" }}>
                              <Image
                                title="English (United Kingdom)"
                                src={getMediaImageUrl("mod_languages/images/en_gb.gif")}
                                alt="English (United Kingdom)"
                                width={16}
                                height={11}
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Desktop Header */}
        <header className="tm-header uk-visible@l">
          <div
            uk-sticky='media: @l; cls-active: uk-navbar-sticky; sel-target: .uk-navbar-container'
          >
            <div className="uk-navbar-container">
              <div className="uk-container">
                <nav
                  className="uk-navbar"
                  uk-navbar='{"align":"center","container":".tm-header > [uk-sticky]","boundary":".tm-header .uk-navbar-container"}'
                >
                  <div className="uk-navbar-center">
                    <div className="uk-navbar-center-left uk-preserve-width">
                      <ul className="uk-navbar-nav">
                        <li>
                          <Link href="/">Home Page</Link>
                        </li>
                        <li className="item-183 uk-parent">
                          <a href="/info">
                            About <span uk-navbar-parent-icon=""></span>
                          </a>
                          <div className="uk-drop uk-navbar-dropdown">
                            <div>
                              <ul className="uk-nav uk-navbar-dropdown-nav">
                               <li>
                                  <Link href="/info/about">About us</Link>
                                </li>
                                <li>
                                  <Link href="/info/travel-documents">Travel Documents</Link>
                                </li>
                                <li>
                                  <Link href="/info/safety">Safety</Link>
                                </li>
                                <li>
                                  <Link href="/info/insurance">Insurance</Link>
                                </li>
                                <li>
                                  <Link href="/info/terms-conditions">Terms&Conditions</Link>
                                </li>
                                <li>
                                  <Link href="/info/faq">FAQ</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li className="item-165 uk-parent">
                          <a href="/destinations">
                            Camp Locations <span uk-navbar-parent-icon=""></span>
                          </a>
                          <div className="uk-drop uk-navbar-dropdown">
                            <div>
                              <ul className="uk-nav uk-navbar-dropdown-nav">
                                <li>
                                  <Link href="/destinations/germany-lueneburger-heide">
                                    Germany - Lüneburger Heide
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/destinations/germany-adventure-camp-bayerischer-wald">
                                    Germany - Bayerischer Wald
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/destinations/en-england-bath-university">
                                    England - Bath & London
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/destinations/en-spain-barcelona">
                                    Spain - Barcelona
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/destinations/camps-for-companies">
                                    Camps for Companies
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/destinations/booking">Booking</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      
                        
                      </ul>
                    </div>

                    <Link
                      href="/"
                      aria-label="Back to home"
                      className="uk-logo uk-navbar-item"
                      style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                    >
                      <Image
                        alt="Camp Adventure"
                        loading="eager"
                        src={logoUrl}
                        width={100}
                        height={35}
                        priority
                        style={{ display: "block" }}
                      />
                    </Link>

                    <div className="uk-navbar-center-right uk-preserve-width">
                      <ul className="uk-navbar-nav">
                          <li className="item-672 uk-parent">
                          <a href="/activities">
                            Activities <span uk-navbar-parent-icon=""></span>
                          </a>
                          <div className="uk-drop uk-navbar-dropdown" style={{ width: "400px" }}>
                            <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
                              <div className="uk-width-1-1">
                                <div>
                                  <div className="uk-child-width-expand" uk-grid="">
                                    <div>
                                      <ul className="uk-margin-remove-bottom uk-nav uk-nav-default">
                                        <li className="el-item">
                                          <Link
                                            className="el-link"
                                            href="/camp-profiles/adventure-sports-creative"
                                          >
                                            Adventure, Sports & Creative
                                          </Link>
                                        </li>
                                        <li className="el-item">
                                          <Link className="el-link" href="/camp-profiles/arts-crafts">
                                            Arts & Crafts
                                          </Link>
                                        </li>
                                        <li className="el-item">
                                          <Link className="el-link" href="/camp-profiles/climbing">
                                            Climbing
                                          </Link>
                                        </li>
                                        <li className="el-item">
                                          <Link className="el-link" href="/camp-profiles/dancing">
                                            Dancing
                                          </Link>
                                        </li>
                                        <li className="el-item">
                                          <Link className="el-link" href="/camp-profiles/diving">
                                            Diving
                                          </Link>
                                        </li>
                                        <li className="el-item">
                                          <Link
                                            className="el-link"
                                            href="/camp-profiles/englischcamps"
                                          >
                                            Englischcamps
                                          </Link>
                                        </li>
                                        <li className="el-item">
                                          <Link
                                            className="el-link"
                                            href="/camp-profiles/englisch-toefl"
                                          >
                                            Englisch TOEFL©
                                          </Link>
                                        </li>
                                        <li className="el-item">
                                          <Link className="el-link" href="/camp-profiles/fishing">
                                            Fishing
                                          </Link>
                                        </li>
                                        <li className="el-item">
                                          <Link
                                            className="el-link"
                                            href="/camp-profiles/german-camps"
                                          >
                                            German Camps
                                          </Link>
                                        </li>
                                        <li className="el-item">
                                          <Link
                                            className="el-link"
                                            href="/camp-profiles/horseback-riding"
                                          >
                                            Horseback Riding
                                          </Link>
                                        </li>
                                        <li className="el-item">
                                          <Link className="el-link" href="/camp-profiles/husky-camp">
                                            Husky Camp
                                          </Link>
                                        </li>
                                        <li className="el-item">
                                          <Link
                                            className="el-link"
                                            href="/camp-profiles/international-counsellor-in-training-icit"
                                          >
                                            International Counsellor in Training (ICIT)
                                          </Link>
                                        </li>
                                        <li className="el-item">
                                          <Link
                                            className="el-link"
                                            href="/camp-profiles/lifeguarding"
                                          >
                                            Lifeguarding
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div>
                                      <ul className="uk-margin-remove-bottom uk-nav uk-nav-default">
                                        <li className="el-item">
                                          <Link
                                            className="el-link"
                                            href="/camp-profiles/language-camps"
                                          >
                                            Language
                                          </Link>
                                        </li>
                                        <li className="el-item">
                                          <Link
                                            className="el-link"
                                            href="/camp-profiles/senior-plus-leadership"
                                          >
                                            Leadership
                                          </Link>
                                        </li>
                                        <li className="el-item">
                                          <Link
                                            className="el-link"
                                            href="/camp-profiles/multi-water-adventure"
                                          >
                                            Multi Water Adventure
                                          </Link>
                                        </li>
                                        <li className="el-item">
                                          <Link className="el-link" href="/camp-profiles/sailing">
                                            Sailing
                                          </Link>
                                        </li>
                                        <li className="el-item">
                                          <Link className="el-link" href="/camp-profiles/skating">
                                            Skating
                                          </Link>
                                        </li>
                                        <li className="el-item">
                                          <Link className="el-link" href="/camp-profiles/soccer">
                                            Soccer
                                          </Link>
                                        </li>
                                        <li className="el-item">
                                          <Link
                                            className="el-link"
                                            href="/camp-profiles/space-exploration"
                                          >
                                            Space Exploration
                                          </Link>
                                        </li>
                                        <li className="el-item">
                                          <Link
                                            className="el-link"
                                            href="/camp-profiles/spanishcourse"
                                          >
                                            Spanishcourse
                                          </Link>
                                        </li>
                                        <li className="el-item">
                                          <Link
                                            className="el-link"
                                            href="/camp-profiles/survival-camps"
                                          >
                                            Survival
                                          </Link>
                                        </li>
                                        <li className="el-item">
                                          <Link className="el-link" href="/camp-profiles/swimming">
                                            Swimming
                                          </Link>
                                        </li>
                                        <li className="el-item">
                                          <Link className="el-link" href="/camp-profiles/tennis">
                                            Tennis
                                          </Link>
                                        </li>
                                        <li className="el-item">
                                          <Link
                                            className="el-link"
                                            href="/camp-profiles/windsurfing"
                                          >
                                            Windsurfing
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        
                        <li className="item-182">
                          <Link href="/booking">Booking</Link>
                        </li>
                        <li className="item-943 uk-parent">
                          <a
                            href="https://gallery.campadventure.de/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Photos <span uk-navbar-parent-icon=""></span>
                          </a>
                          <div className="uk-drop uk-navbar-dropdown">
                            <div>
                              <ul className="uk-nav uk-navbar-dropdown-nav">
                                <li>
                                  <Link href="/photo/photos" title="Photos | Go and Grow">
                                    Photos - archive
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li className="item-983">
                          <a
                            href="https://www.bookacamp.de/en/auth/login/ds7fdn347dsfndsf74n37en37en37dnd"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Login
                          </a>
                        </li>
                      </ul>

                      <div className="uk-navbar-item" id="module-104">
                        <div className="uk-panel mod-languages">
                          <ul className="uk-subnav">
                            <li>
                              <a
                                href="https://www.campadventure.de/de/"
                                style={{ display: "flex !important" }}
                              >
                                <Image
                                  title="Deutsch (Deutschland)"
                                  src={getMediaImageUrl("mod_languages/images/de_de.gif")}
                                  alt="Deutsch (Deutschland)"
                                  width={16}
                                  height={11}
                                />
                              </a>
                            </li>
                            <li className="uk-active">
                              <Link href="/" style={{ display: "flex !important" }}>
                                <Image
                                  title="English (United Kingdom)"
                                  src={getMediaImageUrl("mod_languages/images/en_gb.gif")}
                                  alt="English (United Kingdom)"
                                  width={16}
                                  height={11}
                                />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          {/* Desktop Off-canvas (empty) */}
          <div id="tm-dialog" uk-offcanvas="container: true; mode: slide; flip: true; overlay: true">
            <div className="uk-offcanvas-bar uk-flex uk-flex-column">
              <button
                className="uk-offcanvas-close uk-close-large"
                type="button"
                uk-close=""
                uk-toggle="cls: uk-close-large; mode: media; media: @s"
              ></button>
              <div className="uk-margin-auto-bottom tm-height-expand">
                <div className="uk-panel" id="module-tm-3">
                  <Link href="/" aria-label="Back to home" className="uk-logo">
                    <Image
                      alt="Camp Adventure"
                      loading="eager"
                      src={logoUrl}
                      width={100}
                      height={35}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};