"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getTemplateImageUrl } from "@/lib/assets";

export default function SafetyPage() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="uk-section-secondary uk-section-overlap uk-preserve-color uk-light uk-position-relative"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div
          className="uk-background-norepeat uk-background-cover uk-background-top-center uk-section uk-section-xlarge"
          style={{
            backgroundImage: `url(${getTemplateImageUrl("yootheme/cache/5e/sicherheit_header-5ede6167.jpeg")})`,
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
                  Philosophy &<br />
                  Safety at Camp
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Concept Section */}
      <div className="uk-section-default uk-section-overlap uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-grid-margin" uk-grid="">
            <div className="uk-width-1-3@m">
              <h1>
                <p>The concept of Camp Adventure</p>
              </h1>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
            </div>
            <div className="uk-width-2-3@m">
              <blockquote>
                <p>
                  Dear parents,
                  <br />
                  <br />
                  We are very happy that you want us to take care of the
                  sweetest and the best of your life. Be sure: we will protect
                  them as if they were our own child and will do everything we
                  can to guarantee the greatest possible safety. We would like
                  to share our philosophy and a piece of our safety concept with
                  you. If you have any questions, please feel free to contact
                  us.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* Our Philosophy Section */}
      <div
        id="guide"
        className="uk-section-muted uk-section-overlap uk-section uk-section-large"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div
                className="uk-h5 uk-margin-small uk-text-center"
                uk-scrollspy-class="uk-animation-slide-top-medium"
              >
                Camp Adventure
              </div>
              <div
                className="uk-h1 uk-margin-small uk-text-center"
                uk-scrollspy-class="uk-animation-slide-bottom-medium"
              >
                Our Philosophy
              </div>
              <div
                className="uk-divider-icon uk-width-medium uk-margin-auto"
                uk-scrollspy-class=""
              ></div>
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
                      <h2 className="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">
                        Community
                      </h2>
                      <div className="el-content uk-panel uk-margin-top">
                        <p>
                          What is most important for us at camp is the community.
                          We want everyone – participants, teamers and camp
                          directors, no matter from which country or what culture
                          – to have an unforgettable time and every single one of
                          us helps to reach this goal.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child"
                      uk-scrollspy-class=""
                    >
                      <h2 className="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">
                        Responsibility
                      </h2>
                      <div className="el-content uk-panel uk-margin-top">
                        <p>
                          We want everyone to help shape the daily life at camp.
                          Besides playing this of course also includes social
                          coexistence. Together with us your children keep the
                          camp clean. This means cleaning the dishes and wiping
                          the tables after a meals, as well as keeping the camp
                          and sanitary facilities clean and tidying up the tents
                          and huts together. All this of course, in a manner
                          appropriate to the age of your children.
                          <br />
                          This is how we, in shared responsibility, make
                          everybody feel comfortable.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child"
                      uk-scrollspy-class=""
                    >
                      <h2 className="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">
                        Internationality
                      </h2>
                      <div className="el-content uk-panel uk-margin-top">
                        <p>
                          At camp new friendships arise even though some campers
                          live thousands of kilometers apart. Our experienced
                          campers immediately include newcomers because this is
                          what they love camp for – they come to make new friends
                          and meet their fellow camp mates again. After our camp
                          season many parents tell us about mutual visits – some
                          went to France, Spain or Canada. They also tell us
                          about the increased motivation of their children to pay
                          a little more attention to the language lessons at
                          school so conversations at camp next summer become
                          easier.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child"
                      uk-scrollspy-class=""
                    >
                      <h2 className="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">
                        Log off, get outside
                      </h2>
                      <div className="el-content uk-panel uk-margin-top">
                        <p>
                          We want all campers to have a relaxed holiday. Mobile
                          phones are especially counterproductive to reach this
                          goal. Therefore, our camps are mobile-free zones and
                          we would like your children to hand over their phones
                          and all other electronic devices to our teamers on the
                          day of arrival so they can really relax. This also
                          means that your children cannot be reached by phone
                          outside the daily telephone hour which is after lunch.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child"
                      uk-scrollspy-class=""
                    >
                      <h2 className="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">
                        No power to drugs
                      </h2>
                      <div className="el-content uk-panel uk-margin-top">
                        <p>
                          For legal reasons, as a result of our cooperation with
                          the organization „No power to drugs" and by our
                          conviction that drugs don&apos;t belong into the hands
                          of children and young adults, it is strictly forbidden
                          for all campers to possess or consume any kind of
                          drugs including cigarettes and alcoholic drinks.
                          Non-compliance with this rule will lead to the
                          suspension from camp or even criminal charges. It is our
                          belief that with all our activities and the great
                          atmosphere at camp, we offer much better alternatives
                          anyway!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child"
                      uk-scrollspy-class=""
                    >
                      <h2 className="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">
                        Dealing with discrimination
                      </h2>
                      <div className="el-content uk-panel uk-margin-top">
                        <p>
                          We would like to point out that we do not accept any
                          form of discrimination, bullying or violence so that
                          all campers can enjoy a happy, relaxed and safe holiday
                          at camp. <a id="safety"></a>
                        </p>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security Concept Section */}
      <div
        id="guide"
        className="uk-section-default uk-section-overlap uk-section uk-section-large uk-padding-remove-bottom"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div
                className="uk-h5 uk-margin-small uk-text-center"
                uk-scrollspy-class="uk-animation-slide-top-medium"
              >
                Camp Adventure
              </div>
              <div
                className="uk-h1 uk-margin-small uk-text-center"
                uk-scrollspy-class="uk-animation-slide-bottom-medium"
              >
                Security Concept
              </div>
              <div
                className="uk-divider-icon uk-width-medium uk-margin-auto"
                uk-scrollspy-class=""
              ></div>
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
                      <h2 className="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">
                        Background Check
                      </h2>
                      <div className="el-content uk-panel uk-margin-top">
                        <p>
                          Every counselor, chef, teamer or helper that enters our
                          camps has to be registrated, complete a background
                          check, as well as have references. That&apos;s why
                          parents are only allowed on the camp site on the day
                          of arrival and departure and not during the week. We
                          want to make sure that we have checked and know every
                          adult who is with us at camp.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child"
                      uk-scrollspy-class=""
                    >
                      <h2 className="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">
                        Education
                      </h2>
                      <div className="el-content uk-panel uk-margin-top">
                        <p>
                          Each counselor must complete an almost two-week
                          training course with us, from early in the morning
                          until late in the evening includes so many lessons that
                          the number of hours even corresponds to the basic
                          study in educational sciences. Here we focus on the
                          areas of safety, accident prevention, child psychology
                          and needs as well as the various safety aspects in the
                          field of experiential education.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child"
                      uk-scrollspy-class=""
                    >
                      <h2 className="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">
                        Crisis Intervention
                      </h2>
                      <div className="el-content uk-panel uk-margin-top">
                        <p>
                          If something should happen, it is not only important
                          to provide first aid for the affected person, but also
                          to care for the other children and adolescents. We have
                          a specially trained team for crisis intervention, which
                          then provides immediate care and can thus prevent
                          possible traumatisation due to the experience.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child"
                      uk-scrollspy-class=""
                    >
                      <h2 className="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">
                        Nightwatch
                      </h2>
                      <div className="el-content uk-panel uk-margin-top">
                        <p>
                          All our camps are also supervised at night by the
                          counselors/teamers. On the one hand we want to prevent
                          visitors from coming to the site - which has not
                          happened until today - and on the other hand we want to
                          be there for the children if they wake up at night and
                          get homesick or have to go to the toilet. The nightwatch
                          patrols the area and is otherwise reachable at a
                          central place for the children. Some of our locations
                          - e.g. the headquarters in Walsrode - are also
                          video-monitored and fenced in.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child"
                      uk-scrollspy-class=""
                    >
                      <h2 className="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">
                        Caregiver Key
                      </h2>
                      <div className="el-content uk-panel uk-margin-top">
                        <p>
                          No safety without sufficient staff! We are the leaders
                          in Germany with our great caregiver key. There are no
                          camps that have a key worse than 1:6-1:8, which means
                          that one caregiver is responsible for a maximum of 6-8
                          children. In the junior camps we also use our CIT
                          (Counselor in Training), so that we often reach a key
                          of only 1:4. We know that this key can seem exaggerated,
                          but we want to guarantee the highest possible safety and
                          we firmly believe that this is exactly what our high
                          level of caregiver commitment leads to.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child"
                      uk-scrollspy-class=""
                    >
                      <h2 className="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">
                        Cooperation
                      </h2>
                      <div className="el-content uk-panel uk-margin-top">
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
                          be alone with a caregiver, is also an essential part of
                          our protection concept. The most important thing,
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
                      <h2 className="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">
                        Quality
                      </h2>
                      <div className="el-content uk-panel uk-margin-top">
                        <p>
                          As a member of the quality committee of the
                          professional association for children and youth travel
                          &quot;Reisenetz&quot;, our managing director Jan Vieth
                          is responsible for further developing and checking the
                          quality guidelines of the entire industry. As
                          Germany&apos;s ambassador to the ICF, he is also kept
                          up to date on improvements in camp and training quality
                          worldwide and adapts these as quickly as possible to
                          our own camps.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child"
                      uk-scrollspy-class=""
                    >
                      <h2 className="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">
                        Accessibility
                      </h2>
                      <div className="el-content uk-panel uk-margin-top">
                        <p>
                          Of course, all parents receive a number from us, which
                          allows them to reach us 24 hours a day in an
                          emergency. If an emergency occurs at your home, you can
                          inform us immediately and we can decide together how,
                          when and whether to inform your child.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child"
                      uk-scrollspy-class=""
                    >
                      <h2 className="el-title uk-card-title uk-margin-top uk-margin-remove-bottom">
                        In case of emergency
                      </h2>
                      <div className="el-content uk-panel uk-margin-top">
                        <p>
                          Every caregiver has a valid first aid certificate and
                          can help if necessary.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="uk-panel uk-margin" uk-scrollspy-class="">
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

