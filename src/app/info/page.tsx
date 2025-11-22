import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getTemplateImageUrl } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Information | Camp Adventure",
  description:
    "Find all information about Camp Adventure: About us, Contact, FAQ, Safety, Terms & Conditions, and more.",
};

const infoPages = [
  {
    id: "arrival-departure",
    title: "Arrival & Departure",
    description:
      "To ensure that our participants from all over the world can travel to our camp, we offer, in addition to the self-organized arrival, several transfer options like accompanied trip or shuttles. Which are these and how they work, you can read here.",
    href: "/info/arrival-departure",
    image: "yootheme/cache/f6/an_und_abreise_header-f6359881.jpg",
  },
  {
    id: "safety",
    title: "Safety at Camp",
    description:
      "It is our wish that not only all participants feel comfortable with us, but that you as parents also have a good feeling about entrusting your children to us. We have created our own security concept for this purpose. Here we have described what this means.",
    href: "/info/safety",
    image: "yootheme/cache/ef/sicherheit_header-efbe72b4.jpg",
  },
  {
    id: "insurance",
    title: "Insurance & Travel Cancellation Guarantee",
    description:
      "Here you will find further information about our insurance package and our travel cancellation guarantee. You can book these services at any camp to make sure that you are covered, for example if your child needs to see a doctor during the stay.",
    href: "/info/insurance",
    image: "yootheme/cache/d4/insurance_header-d4d78afb.jpg",
  },
  {
    id: "faq",
    title: "FAQ's",
    description:
      "Questions that are frequently asked and the corresponding answers are summarized here for you.",
    href: "/info/faq",
    image: "yootheme/cache/c8/faqs_header-c8aa562d.jpg",
  },
  {
    id: "contact",
    title: "Contact",
    description:
      "Do you have any questions, comments, suggestions or haven't found what you are looking for on our website? Find out here how and when you can reach us.",
    href: "/info/contact",
    image: "yootheme/cache/71/kontakt_header-715e00cd.jpg",
  },
  {
    id: "news",
    title: "News",
    description:
      "Under this rubric we keep you up to date about our camps, offers and what's currently important to know.",
    href: "/info/news",
    image: "yootheme/cache/0e/news_header-0e586fcb.jpg",
  },
  {
    id: "terms-conditions",
    title: "Terms & Conditions",
    description:
      "In our terms and conditions you will find information about our cancellation regulations for example. At this section we make them available for viewing and/or downloading.",
    href: "/info/terms-conditions",
    image: "yootheme/cache/1b/agb_header-1bdc8228.jpg",
  },
  {
    id: "agencies",
    title: "Agencies",
    description:
      "Are you an agency interested in cooperation and/or do you already have clients who would like to participate in our camps? On this page you will find suitable offers and our contact persons.",
    href: "/info/agencies",
    image: "yootheme/cache/51/agenturen_header-51068d8c.jpg",
  },
  {
    id: "innovation-consulting",
    title: "Innovation Consulting",
    description:
      "We would like to contribute to giving even more people the opportunity to experience unforgettable moments and adventures. Do you also want that? Find out more about our consulting packages here.",
    href: "/info/innovation-consulting",
    image: "yootheme/cache/5c/beratung_header-5c3c8359.jpg",
  },
];

export default function InfoPage() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="uk-section-default uk-section-overlap uk-preserve-color uk-light uk-position-relative"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div
          className="uk-background-norepeat uk-background-cover uk-background-top-center uk-section uk-section-xlarge"
          style={{
            backgroundImage: `url(${getTemplateImageUrl(
              "yootheme/banner/b5.jpg"
            )})`,
          }}
        >
          <div
            className="uk-position-cover"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
          ></div>
          <div className="uk-container uk-container-large uk-position-relative">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
              <div className="uk-width-1-1@m">
                <h1
                  className="uk-heading-large uk-text-center"
                  style={{ color: "#fff" }}
                >
                  Information
                </h1>
                <div
                  className="uk-panel uk-text-lead uk-margin uk-text-center"
                  style={{ color: "#fff" }}
                >
                  <p>Everything you need to know about Camp Adventure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Pages Grid */}
      <div className="uk-section-muted uk-section-overlap uk-section">
        <div className="uk-container uk-container-xlarge">
          <div className="uk-grid-margin uk-container uk-container-large">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1">
              <div className="uk-width-1-1@m">
                <div className="uk-margin uk-text-center">
                  <div
                    className="uk-grid uk-child-width-1-1 uk-child-width-1-3@m uk-grid-match"
                    uk-grid=""
                  >
                    {infoPages.map((page) => (
                      <div key={page.id}>
                        <div
                          className="el-item uk-flex uk-flex-column"
                          uk-scrollspy-class=""
                        >
                          <Link
                            href={page.href}
                            className="uk-flex-1 uk-card uk-card-default uk-card-small uk-card-hover uk-link-toggle"
                          >
                            <div className="uk-card-media-top">
                              <Image
                                src={getTemplateImageUrl(page.image)}
                                width={500}
                                height={200}
                                alt={page.title}
                                className="el-image"
                                loading="lazy"
                              />
                            </div>
                            <div className="uk-card-body uk-margin-remove-first-child">
                              <h2 className="el-title uk-card-title uk-heading-divider uk-margin-top uk-margin-remove-bottom">
                                {page.title}
                              </h2>
                              <div className="el-content uk-panel uk-margin-top">
                                <p>{page.description}</p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            .el-item.uk-flex.uk-flex-column .uk-card-body {
              display: block !important;
            }
          `,
        }}
      />
    </>
  );
}
