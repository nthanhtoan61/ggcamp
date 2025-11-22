"use client";

import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { useEffect, useRef } from "react";
import { getTemplateImageUrl } from "@/lib/assets";

export default function AgenciesPage() {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add templates after mount (client-side only to avoid hydration error)
    if (!mapContainerRef.current) return;

    const mapElement = mapContainerRef.current;

    // Add template elements (client-side only to avoid hydration error)
    const templates = [
      { title: "Camp Adventure Office" },
      { title: "Camp Adventure Academy - Lüneburger Heide" },
      { title: "Camp Adventure - Bayerischer Wald" },
      { title: "Camp Adventure - Rossall School" },
      { title: "Camp Adventure - Bath University" },
    ];

    // Check if templates already added
    if (mapElement.querySelectorAll("template").length === 0) {
      templates.forEach(({ title }) => {
        const template = document.createElement("template");
        template.innerHTML = `
          <div class="el-item uk-text-default uk-font-default uk-margin-remove-first-child">
            <h3 class="el-title uk-margin-top uk-margin-remove-bottom">${title}</h3>
          </div>
        `;
        mapElement.appendChild(template);
      });

      // UIkit will auto-initialize the map when scripts are ready
      // No need to manually initialize like other pages
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div
        className="uk-section-secondary uk-section-overlap uk-position-relative"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div
          data-src={getTemplateImageUrl(
            "yootheme/cache/92/agenturen_header-929ed917.jpeg"
          )}
          uk-img=""
          className="uk-background-norepeat uk-background-cover uk-background-center-center uk-section uk-section-xlarge"
          style={{
            backgroundImage: `url(${getTemplateImageUrl(
              "yootheme/cache/92/agenturen_header-929ed917.jpeg"
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
                >
                  Agencies
                </h1>
                <div
                  className="uk-panel uk-text-lead uk-margin uk-text-center"
                  uk-scrollspy-class=""
                >
                  <p>
                    Reservations for individual customers, contingents for
                    groups
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="uk-section-default uk-section-overlap uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div className="uk-panel uk-text-large uk-margin">
                <p>Dear Partner!</p>
              </div>
              <div className="uk-panel uk-text-large uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin">
                <p>
                  Our international sports, adventure &amp; language camps for
                  kids and youth from 7 to 17 years old are designed for
                  distribution by national and international agencies. For
                  several years now, we have visited well-known national and
                  international tourism fairs such as the ITB and ICEF in Berlin
                  as well as numerous workshops at the ICF (International
                  Camping Fellowship), in which Camp Adventure serves as the
                  ambassador for Germany.
                  <br />
                  <br />
                  Direct contact with our partners from all over the globe
                  allows us to get to know the current needs of our clients and
                  adapt our programs accordingly to meet their requirements.
                  Over the past years we have developed a network of reliable
                  partners.
                  <br />
                  How does a collaboration with Camp Adventure work?
                  <br />
                  We offer our partners the opportunity to reserve single spots
                  for individual clients or multiple spots for groups. Our
                  partners decide if they use their own or Camp Adventure&apos;s
                  booking system. We can happily provide you with promotional
                  material (photos, video clips), which you receive after having
                  signed our agency agreement.
                  <br />
                  <br />
                  If you are interested in a collaboration please feel free to
                  get in touch with us!
                  <br />
                  <br />
                  Your contact person is Gesa:{" "}
                  <a href="mailto:partner@campadventure.de">
                    partner@campadventure.de
                  </a>
                </p>
              </div>

              {/* Map Section */}
              <div
                ref={mapContainerRef}
                className="uk-position-relative uk-position-z-index uk-dark"
                style={{ height: "600px" }}
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
                      dragging: true,
                      max_zoom: 18,
                      min_zoom: 0,
                      poi: false,
                      type: "roadmap",
                      zoom: "5",
                      zooming: true,
                      center: { lat: 53.5597, lng: 9.9601 },
                      lazyload: true,
                      library: "leaflet",
                      baseUrl:
                        "/templates/yootheme/vendor/assets/leaflet/leaflet/dist",
                    }),
                  }}
                />
                {/* Templates will be added via useEffect to avoid hydration error */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Camp Locations & Programs Section */}
      <div className="uk-section-muted uk-section-overlap uk-section uk-section-small">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2
                className="uk-h2 uk-text-center"
                uk-scrollspy-class="uk-animation-slide-left-medium"
              >
                Our Camp Locations &amp; Program Options
              </h2>
              <div
                className="uk-divider-icon uk-width-medium uk-margin-auto"
                uk-scrollspy-class="uk-animation-slide-right-medium"
              ></div>
              <div className="uk-panel uk-text-large uk-margin">
                <p>
                  We offer various camp locations in Germany, England, and Spain
                  with a wide range of programs including sports, adventure,
                  language courses, and special activities. Contact us for more
                  information about our programs and how we can work together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
