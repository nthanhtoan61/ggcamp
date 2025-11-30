import Script from "next/script";
import { getTemplateImageUrl } from "@/lib/assets";
import Image from "next/image";

export default function DestinationsBookingPage() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="uk-section-primary uk-section-overlap uk-position-relative"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div
          data-src={getTemplateImageUrl("yootheme/banner/b7.jpg")}
          uk-img=""
          className="uk-background-norepeat uk-background-cover uk-background-top-center uk-section uk-section-xlarge"
          style={{
            backgroundImage: `url(${getTemplateImageUrl("yootheme/banner/b7.jpg")})`,
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
                  Booking
                </h1>
                <div
                  className="uk-panel uk-text-lead uk-margin uk-text-center"
                  uk-scrollspy-class=""
                >
                  <p>International Sports & Language Camps</p>
                </div>
                <div className="uk-margin uk-text-right" uk-scrollspy-class="">
                  <Image
                    src={getTemplateImageUrl(
                      "yootheme/cache/12/Storer-min-125a5bd1.png"
                    )}
                    width={400}
                    height={200}
                    className="el-image"
                    alt="Book Now!"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Content */}
      <div
        className="uk-section-default uk-section-overlap uk-section uk-section-small"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-grid-large uk-child-width-1-1 uk-margin-xlarge">
            <div className="uk-grid-item-match uk-flex-middle uk-width-1-1@m">
              <div className="uk-panel uk-width-1-1">
                <div
                  className="uk-panel uk-text-large uk-dropcap uk-margin"
                  uk-scrollspy-class=""
                >
                  <div style={{ textAlign: "center" }}>
                    <iframe
                      src="https://www.bookacamp.de/en/booking/form/filter/camp/ds7fdn347dsfndsf74n37en37en37dnd"
                      width="1100"
                      height="5700"
                      frameBorder="0"
                      allowFullScreen={true}
                      title="Bookacamp, die Buchungsplattform von Go and Grow Camp"
                      style={{ maxWidth: "100%", width: "100%" }}
                    ></iframe>
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



