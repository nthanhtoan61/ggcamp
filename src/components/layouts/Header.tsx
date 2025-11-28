"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getTemplateImageUrl, getMediaImageUrl } from "@/lib/assets";

export const Header: React.FC = () => {
  const logoUrl = getTemplateImageUrl(
    "yootheme/cache/c9/logo-camp-adventure-c9850ee6.png"

  );
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const toggleDropdown = (id: string) => {
    setOpenDropdown(prev => (prev === id ? null : id));
  };
  

  return (
    <>
      {/* Skip to main content */}
      <div className="uk-hidden-visually uk-notification uk-notification-top-left uk-width-auto">
        <div className="uk-notification-message">
          <a href="#tm-main" className="uk-link-reset">
            Skip to main content
          </a>
        </div>
      </div>
      <div className="tm-page">
        {/* Mobile Header */}
        <header className="tm-header-mobile uk-hidden@l">
          <div uk-sticky="show-on-up: true; animation: uk-animation-slide-top; cls-active: uk-navbar-sticky; sel-target: .uk-navbar-container">
            <div className="uk-navbar-container">
              <div className="uk-container uk-container-expand" >
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
                  <div className="uk-navbar-center" style={{ display: "none" }}>
                    <Link
                      href="/"
                      aria-label="Back to home"
                      className="uk-logo uk-navbar-item"
                    >
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
          <div
            id="tm-dialog-mobile"
            uk-offcanvas="container: true; overlay: true; mode: slide"
          >
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
                      <Link
                        href="/"
                        aria-label="Back to home"
                        className="uk-logo"
                      >
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
                    <div className="uk-panel" id="menu-dialog-mobile">
                      <ul className="uk-nav uk-nav-default" uk-nav="">
                       

                        <li className="item-183 uk-parent " style={{ padding: "5px 0" }}>
                          <div className="uk-flex uk-flex-between uk-flex-middle">
                            
                            <Link
                              style={{
                                color: "#90929d",
                                textDecoration: "none",
                              }}
                              href="#"
                             
                            >
                              Info{" "}
                            </Link>

                           
                            <a
                              className="menu-toggle"
                              href="#"
                              uk-toggle="target: #about-us-sub-menu"
                              style={{ color: "#90929d", textDecoration: "none" }}
                            >
                              <span uk-navbar-parent-icon=""></span>
                            </a>
                          </div>

                         
                          <ul id="about-us-sub-menu" className="uk-nav-sub">
                            <li>
                              <Link href="/info/travel-documents" >
                                Travel Documents
                              </Link>
                            </li>
                            <li>
                              <Link href="/info/safety">Safety</Link>
                            </li>
                            <li>
                              <Link href="/info/insurance">Insurance</Link>
                            </li>
                            <li>
                              <Link href="/info/terms-conditions">
                                Terms&Conditions
                              </Link>
                            </li>
                            <li>
                              <Link href="/info/faq">FAQ</Link>
                            </li>
                          </ul>
                        </li>
                         <li className="item-672">
                          <Link href="/destinations">Camp Locations</Link>
                        </li>
                        {/* <li className="item-165 uk-parent" style={{ padding: "5px 0" }}>
                          <div className="uk-flex uk-flex-between uk-flex-middle">
                            
                            <Link
                              style={{
                                color: "#90929d",
                                textDecoration: "none",
                              }}
                              href="/destinations"
                            >
                             Camp Locations{" "}
                            </Link>

                           
                            <a
                              className="menu-toggle"
                              href="#"
                              uk-toggle="target: #about-us-sub-menu2"
                              style={{ color: "#90929d", textDecoration: "none" }}
                            >
                              <span uk-navbar-parent-icon=""></span>
                            </a>
                          </div>

                         
                          <ul id="about-us-sub-menu2" className="uk-nav-sub">
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
                          
                          
                        </li> */}
                        <li className="item-672">
                          <Link href="/activities">Activities</Link>
                        </li>
                           <li className="item-672">
                          <Link href="/blog">Blog</Link>
                        </li>
                        <li className="item-679">
                          <Link href="/contact-us">Contact US</Link>
                        </li>
                        <li className="item-182">
                          <Link href="/booking">Booking</Link>
                        </li>
                        <li className="item-activity-detail">
                          <Link href="/activity-detail">Activity Detail</Link>
                        </li>
                        <li className="item-943 uk-parent">
                          <a href="#">Photos</a>
                          <ul className="uk-nav-sub">
                            <li>
                              <a
                                href="https://gallery.campadventure.de/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Photo Gallery
                              </a>
                            </li>
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
                                src={getMediaImageUrl(
                                  "mod_languages/images/de_de.gif"
                                )}
                                alt="Deutsch (Deutschland)"
                                width={16}
                                height={11}
                              />
                            </a>
                          </li>
                          <li className="uk-active">
                            <Link
                              href="/"
                              style={{ display: "flex !important" }}
                            >
                              <Image
                                title="English (United Kingdom)"
                                src={getMediaImageUrl(
                                  "mod_languages/images/en_gb.gif"
                                )}
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
   <header className="tm-header uk-visible@l" style={{
  position: 'relative',
  height: '6.25vw',
}}>
  <div uk-sticky="media: @l; cls-active: uk-navbar-sticky; sel-target: .uk-navbar-container">
    <div className="uk-navbar-container" style={{
      height: '6.25vw',
      minHeight: '60px',
      maxHeight: '120px',
      width: '100%'
    }}>
      <div className="uk-container" style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        maxWidth: '100%',
        padding: '0 20px'
      }}>
        <nav className="uk-navbar" uk-navbar='{"container":".tm-header > [uk-sticky]","boundary":".tm-header .uk-navbar-container"}' style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          display: 'flex',
          alignItems: 'center'
        }}>
          
          <div className="uk-navbar-left" style={{
            flex: '0 0 auto',
            padding: '10px'
          }}>
            <Link
              href="/"
              aria-label="Back to home"
              className="uk-logo uk-navbar-item"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 2
              }}
            >
              <Image
                alt="Camp Adventure"
                loading="eager"
                src={logoUrl}
                width={100}
                height={35}
                priority
                style={{ 
                  display: "block",
                  width: '5vw',
                  height: '5vw'
                }}
              />
            </Link>
          </div>

          <div className="uk-navbar-center" style={{
            flex: '1 1 auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <ul className="uk-navbar-nav" style={{
              fontSize: '14px',
              gap: '20px',
              display: 'flex',
              margin: 0
            }}>
              <li className="item-183 uk-parent">
                <a href="/info/about-us" style={{
                  fontSize: '0.8vw',
                  padding: '0 10px',
                  whiteSpace: 'nowrap'
                }}>
                  Info 
                  <span uk-navbar-parent-icon=""></span>
                </a>
                <div className="uk-drop uk-navbar-dropdown">
                  <div>
                    <ul className="uk-nav uk-navbar-dropdown-nav" style={{
                      fontSize: '13px'
                    }}>
                      <li style={{ padding: '5px 0' }}>
                        <Link href="/info/travel-documents" style={{
                          fontSize: '0.68vw',
                          padding: '5px 15px'
                        }}>
                          Travel Documents
                        </Link>
                      </li>
                      <li style={{ padding: '5px 0' }}>
                        <Link href="/info/safety" style={{
                          fontSize: '0.68vw',
                          padding: '5px 15px'
                        }}>Safety</Link>
                      </li>
                      <li style={{ padding: '5px 0' }}>
                        <Link href="/info/insurance" style={{
                          fontSize: '0.68vw',
                          padding: '5px 15px'
                        }}>
                          Insurance
                        </Link>
                      </li>
                      <li style={{ padding: '5px 0' }}>
                        <Link href="/info/terms-conditions" style={{
                          fontSize: '0.68vw',
                          padding: '5px 15px'
                        }}>
                          Terms&Conditions
                        </Link>
                      </li>
                      <li style={{ padding: '5px 0' }}>
                        <Link href="/info/faq" style={{
                          fontSize: '0.68vw',
                          padding: '5px 15px'
                        }}>FAQ</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="item-165 uk-parent">
                <a href="/destinations" style={{
                  fontSize: '0.8vw',
                  padding: '0 10px',
                  whiteSpace: 'nowrap'
                }}>
                  Camp Locations
                </a>
              </li>
              <li className="item-672 uk-parent">
                <Link href="/activities" style={{
                  fontSize: '0.8vw',
                  padding: '0 10px',
                  whiteSpace: 'nowrap'
                }}>Activities</Link>
              </li>
              <li className="item-672 uk-parent">
                <Link href="/blog" style={{
                  fontSize: '0.8vw',
                  padding: '0 10px',
                  whiteSpace: 'nowrap'
                }}>Blog</Link>
              </li>
              <li className="item-672 uk-parent">
                <Link href="/contact-us" style={{
                  fontSize: '0.8vw',
                  padding: '0 10px',
                  whiteSpace: 'nowrap'
                }}>Contact US</Link>
              </li>
              <li className="item-182">
                <Link href="/booking" style={{
                  fontSize: '0.8vw',
                  padding: '0 10px',
                  whiteSpace: 'nowrap'
                }}>Booking</Link>
              </li>
              <li className="item-183">
                <Link href="/activity-detail" style={{
                  fontSize: '0.8vw',
                  padding: '0 10px',
                  whiteSpace: 'nowrap'
                }}>Activity Detail</Link>
              </li>
              <li className="item-943 uk-parent">
                <a
                  href="https://gallery.campadventure.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '14px',
                    padding: '0 10px',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Photos <span uk-navbar-parent-icon=""></span>
                </a>
                <div className="uk-drop uk-navbar-dropdown">
                  <div>
                    <ul className="uk-nav uk-navbar-dropdown-nav" style={{
                      fontSize: '13px'
                    }}>
                      <li style={{ padding: '5px 0' }}>
                        <Link
                          href="/photo/photos"
                          title="Photos | Go and Grow"
                          style={{
                            fontSize: '13px',
                            padding: '5px 15px'
                          }}
                        >
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
                  style={{
                    fontSize: '14px',
                    padding: '0 10px',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Login
                </a>
              </li>
            </ul>

            <div className="uk-navbar-item" id="module-104" style={{
              padding: '0 0 0 15px'
            }}>
              <div className="uk-panel mod-languages">
                <ul className="uk-subnav" style={{
                  gap: '10px',
                  display: 'flex',
                  margin: 0
                }}>
                  <li>
                    <a
                      href="https://www.campadventure.de/de/"
                      style={{ display: "flex" }}
                    >
                      <Image
                        title="Deutsch (Deutschland)"
                        src={getMediaImageUrl(
                          "mod_languages/images/de_de.gif"
                        )}
                        alt="Deutsch (Deutschland)"
                        width={16}
                        height={11}
                        style={{
                          width: '16px',
                          height: 'auto'
                        }}
                      />
                    </a>
                  </li>
                  <li className="uk-active">
                    <Link
                      href="/"
                      style={{ display: "flex" }}
                    >
                      <Image
                        title="English (United Kingdom)"
                        src={getMediaImageUrl(
                          "mod_languages/images/en_gb.gif"
                        )}
                        alt="English (United Kingdom)"
                        width={16}
                        height={11}
                        style={{
                          width: '16px',
                          height: 'auto'
                        }}
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </nav>
      </div>
    </div>
  </div>

  {/* Desktop Off-canvas (empty) */}
  <div
    id="tm-dialog"
    uk-offcanvas="container: true; mode: slide; flip: true; overlay: true"
  >
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
