"use client";

import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { getTemplateImageUrl } from "@/lib/assets";

export default function CampsForCompaniesPage() {
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
              <h2 className="uk-h1 uk-margin-small uk-text-center">
                Go and Grow Camp for your company
              </h2>
              <div className="uk-h5 uk-margin-small uk-text-center">
                Our service for your employees – making school holidays
                care-free for you
              </div>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
              <div className="uk-panel uk-text-large uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin">
                <p>
                  Because of our long-standing relationships with companies and
                  organizations, we would like to offer youth programs for your
                  employees during the holidays. Especially during the summer
                  holiday, for many parents it&apos;s difficult to get childcare
                  or time off for the whole 6 weeks. We specialize in exciting
                  programs for kids and youth between 7 and 17 years – and offer
                  an alternative to kids who don&apos;t want to spend another
                  holiday at their grandparent&apos;s house. All our programs are
                  multilingual because of our international staff – the camp
                  languages will be German, English or even Spanish!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quality Section */}
      <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h1 uk-margin-small uk-text-center">
                Our quality
              </h2>
              <div className="uk-h5 uk-margin-small uk-text-center">
                We are the only tour operator for kids &amp; youth which is
                certified nationally and internationally:
              </div>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
              <div className="uk-panel uk-text-large uk-column-1-2@m uk-column-1-1@s uk-margin">
                <ul>
                  <li>
                    &quot;certified quality&quot;: Reisenetz, professional
                    association of travel for kids and youth;
                  </li>
                  <li>
                    &quot;Gut drauf&quot;: health-seeking partner of the federal
                    association of travel for kids and youth;
                  </li>
                  <li>International Camping Fellowship;</li>
                  <li>
                    the only certified tour operator from &quot;No power to
                    drugs&quot;.
                  </li>
                </ul>
                <p>
                  Thanks to our high kids-staff ratio (1:5 – 1:8) and our
                  outstanding staff training/recruiting standards we offer the
                  highest quality camps for kids and youth.
                </p>
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
              <div className="uk-h1 uk-margin-small uk-text-center">
                Our options for you
              </div>
              <div className="uk-h5 uk-margin-small uk-text-center">
                Designing an exclusive camp just for your employees&apos;
                children (Minimum 80 participants)
              </div>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
              <div className="uk-panel uk-text-large uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin">
                <p>
                  We have vast experience, proven networks and a dedicated team
                  to develop unique camps just for you. Whether as a sponsoring
                  project or an offer for your employees, we take over the
                  entire planning, process and operation of your customized camp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Group Reservations Section */}
      <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h1 uk-margin-small uk-text-center">
                Group reservations for your employees at our camps
              </h2>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
              <div className="uk-panel uk-text-large uk-dropcap uk-column-1-2@m uk-column-1-1@s uk-margin">
                <p>
                  Of course we can also offer special group reservations for
                  your company in our great existing camps. Whether booking in
                  advance or later when you know how many participants you have.
                  Just give us the names of the participants and we will handle
                  the rest!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
