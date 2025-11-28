"use client";

import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { getTemplateImageUrl } from "@/lib/assets";

export default function FAQPage() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="uk-section-secondary uk-section-overlap uk-position-relative"
        uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;"
      >
        <div
          className="uk-background-norepeat uk-background-cover uk-background-center-center uk-section uk-section-xlarge"
          style={{
            backgroundImage: `url(${getTemplateImageUrl("yootheme/cache/18/faqs_header-187f72fb.jpeg")})`,
          }}
        >
          <div
            className="uk-position-cover"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.02)" }}
          ></div>
          <div className="uk-container uk-container-large uk-position-relative">
            <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
              <div className="uk-width-1-1@m">
                <div className="uk-heading-large uk-text-center" uk-scrollspy-class="">
                  Camp Adventure
                </div>
                <div
                  className="uk-panel uk-text-lead uk-margin uk-text-center"
                  uk-scrollspy-class=""
                >
                  Frequently Asked Questions
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* General Information Section */}
      <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h2 uk-text-left@m uk-text-center">
                General Information
              </h2>
              <div className="uk-divider-small uk-text-left@m uk-text-center"></div>
              <div uk-accordion="collapsible: true;">
                <div className="el-item">
                  <a className="el-title uk-accordion-title" href="#">
                    What are FAQ?
                  </a>
                  <div className="uk-accordion-content">
                    <div className="el-content uk-panel">
                      <p>
                        FAQ are the initials for &quot;Frequently Asked
                        Questions&quot;.
                      </p>
                      <p>
                        The FAQ have been compiled by us over a long period of
                        time and are intended to help give a general overview of
                        our camps and clarify questions that arise before
                        booking a camp.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="el-item">
                  <a className="el-title uk-accordion-title" href="#">
                    General booking process
                  </a>
                  <div className="uk-accordion-content">
                    <div className="el-content uk-panel">
                      <p>
                        Once the booking has been confirmed by us, you will
                        receive an e-mail requesting a deposit. As soon as we
                        have received this, you will receive an e-mail with a
                        payment confirmation.
                        <br />
                        Please have a look at the welcome package, which will
                        reach you by e-mail with the Last Travel Information.
                        This contains information that applies to the camp you
                        have booked.
                      </p>
                      <p>
                        Step 1: Registration (<Link href="/booking">online</Link>)
                        <br />
                        Step 2: Receipt of registration confirmation, total
                        invoice and deposit request (e-mail)
                        <br />
                        Step 3: Deposit of USD 50 (due within 7 days after
                        booking)
                        <br />
                        Step 4: Receiving an email with the latest important
                        travel information, a packing list, addresses and
                        important emergency phone numbers plus remaining payment
                        request about 3-4 weeks before the camp starts.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="el-item">
                  <a className="el-title uk-accordion-title" href="#">
                    Terms & Conditions
                  </a>
                  <div className="uk-accordion-content">
                    <div className="el-content uk-panel">
                      <p>
                        Our Terms & Conditions can be found{" "}
                        <Link href="/info/terms-conditions">here</Link>.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="el-item">
                  <a className="el-title uk-accordion-title" href="#">
                    Where can i find a packing guide for Camps
                  </a>
                  <div className="uk-accordion-content">
                    <div className="el-content uk-panel">
                      <p>
                        <a
                          href="https://www.campadventure.de/images/g_infopakete/packliste/PAckliste2024engl.pdf"
                          title="Packing Guide"
                          target="_blank"
                          rel="noopener"
                        >
                          Just click here to download our packing list.
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="el-item">
                  <a className="el-title uk-accordion-title" href="#">
                    Where can I find contact information from Camps and
                    adresses?
                  </a>
                  <div className="uk-accordion-content">
                    <div className="el-content uk-panel">
                      <p>
                        Here you can find all the necessary information if you
                        want to drive to our camps or send something. If you
                        want to send something please ALWAYS include the full
                        name of your child on the letter/package and please only
                        send it at the time when your kids are staying in camp as
                        we cannot store it for a longer period of time.
                      </p>
                      <p>
                        <strong>Walsrode/Lüneburger Heide - Germany:</strong>
                      </p>
                      <p>
                        Camp Adventure, Vethem 58, 29664 Walsrode, Germany
                      </p>
                      <p>
                        <a href="mailto:walsrode@campadventure.de">
                          walsrode@campadventure.de
                        </a>
                      </p>
                      <p>
                        <strong>Regen/Bavarian Forest - Germany</strong>
                      </p>
                      <p>Camp Adventure, Badstrasse 18, 94209 Regen</p>
                      <p>
                        <a href="mailto:regen@campadventure.de">
                          regen@campadventure.de
                        </a>
                      </p>
                      <p>
                        <strong>Barcelona - Spain</strong>
                      </p>
                      <p>
                        BISC International Sailing Center, c/o Camp Adventure,
                        Parc del Fòrum Sota plaça fotovoltàica, 08930 Sant
                        Adrià de Besòs, Barcelona, Spanien
                      </p>
                      <p>
                        <a href="mailto:barcelona@campadventure.de">
                          barcelona@campadventure.de
                        </a>
                      </p>
                      <p>
                        <strong>Bath - England</strong>
                      </p>
                      <p>
                        University of Bath, c/o Camp Adventure, Claverton Down,
                        Bath BA2 7AY, England
                      </p>
                      <p>
                        <a href="mailto:england@campadventure.de">
                          england@campadventure.de
                        </a>
                      </p>
                      <p>
                        <strong>Rossall - England</strong>
                      </p>
                      <p>
                        Rossall School, Broadway, Fleetwood, Lancashire FY7 8JW,
                        England
                      </p>
                      <p>
                        <a href="mailto:england@campadventure.de">
                          england@campadventure.de
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Camps Section */}
      <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h2 uk-text-left@m uk-text-center">Camps</h2>
              <div className="uk-divider-small uk-text-left@m uk-text-center"></div>
              <div uk-accordion="collapsible: true;">
                <div className="el-item">
                  <a className="el-title uk-accordion-title" href="#">
                    Where do kids and camp counselors come from?
                  </a>
                  <div className="uk-accordion-content">
                    <div className="el-content uk-panel">
                      <p>
                        Camp Adventure attatches great importance to
                        internationality. The participants and supervisors in
                        our camps come from many different countries. Last year,
                        for example, we had participants from over 60 different
                        countries and counselors from 25 different nations. Of
                        course, we don&apos;t know where they will come from this
                        year. So we are at least as excited as you are.
                        Through our office in Hamburg and our branch office in
                        Canada, we reach motivated and committed counselors from
                        all over the world. Canadian and Australian teamers can
                        therefore be found as well as German or Spanish teamers.
                        Due to the different experiences and cultural
                        backgrounds an indescribably fantastic, international
                        atmosphere is created.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="el-item">
                  <a className="el-title uk-accordion-title" href="#">
                    Which languages are spoken in camp?
                  </a>
                  <div className="uk-accordion-content">
                    <div className="el-content uk-panel">
                      <p>
                        The main language in all our camps is English. In
                        addition, there is the language of the country in which
                        the camp takes place. As we have our headquarters in
                        Germany, German teamers are always present in all camps
                        in Germany. All announcements and explanations are here
                        therefore always in German and English. Of course, all
                        our teamers with their different nationalities are also
                        available for individual translations.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="el-item">
                  <a className="el-title uk-accordion-title" href="#">
                    Are there problems if children have low language skills?
                  </a>
                  <div className="uk-accordion-content">
                    <div className="el-content uk-panel">
                      <p>
                        No, because there are usually more participants and team
                        members who speak the same language. We know from
                        experience that children are excellent at communicating
                        nonverbally. They often need a few days to warm up to
                        it, but are then very open to other children as well.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="el-item">
                  <a className="el-title uk-accordion-title" href="#">
                    Are girls and boys separated?
                  </a>
                  <div className="uk-accordion-content">
                    <div className="el-content uk-panel">
                      <p>
                        Girls and boys are accommodated separately in the
                        dormitories/tents. The program is completely mixed.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="el-item">
                  <a className="el-title uk-accordion-title" href="#">
                    How big are the camps? How high is the caregiver ratio?
                  </a>
                  <div className="uk-accordion-content">
                    <div className="el-content uk-panel">
                      <p>
                        Capacities range from around 30 participants in smaller
                        language camps to a maximum of about 400 children in our
                        camp Lueneburger Heide. However, the maximum capacity is
                        not reached every week. However, a minimum number of
                        participants must be guaranteed in order to run the
                        camp.
                        <br />
                        It is important to us that all children are always
                        grouped in small groups of 5-8, with a counselor as a
                        contact person. This way homesickness doesn&apos;t stand
                        a chance and despite the size of the camp in their group
                        family, they experience a strong bond on which they can
                        count on!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="el-item">
                  <a className="el-title uk-accordion-title" href="#">
                    Should 12-year-olds go to Junior Camp or Senior Camp?
                  </a>
                  <div className="uk-accordion-content">
                    <div className="el-content uk-panel">
                      <p>
                        This question is not easy to answer and depends on the
                        individual stage of development of your child.
                        Therefore, as parents, we leave you the opportunity to
                        decide for yourself. In the Junior Camp they belong to
                        the older ones and can explore a lot in a playful way.
                        In the Senior Camp they are the younger ones, who have
                        role models through the older ones, whom they can
                        emulate.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Camp Routine Section */}
      <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h2 uk-text-left@m uk-text-center">
                Camp Routine
              </h2>
              <div className="uk-divider-small uk-text-left@m uk-text-center"></div>
              <div uk-accordion="collapsible: true;">
                <div className="el-item">
                  <a className="el-title uk-accordion-title" href="#">
                    How is the choice of activities/courses in the camps made?
                  </a>
                  <div className="uk-accordion-content">
                    <div className="el-content uk-panel">
                      <p>
                        If your child would like to participate in a paid
                        additional course (e.g. horse riding, language course,
                        Survival etc.), this must be booked in advance when
                        registering. In principle, no extra additional courses
                        have to be booked. A program with a variety of
                        activities is of course available to the participants in
                        all camps. The various activities can be chosen by the
                        participants on site in the respective camps. We present
                        the offers to the participants, so that everyone gets an
                        insight into the different courses. The children can then
                        register in the lists of the respective courses.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="el-item">
                  <a className="el-title uk-accordion-title" href="#">
                    What is a hike?
                  </a>
                  <div className="uk-accordion-content">
                    <div className="el-content uk-panel">
                      <p>
                        The hike is a 1-3 day walking tour, in which all
                        participants of the Adventure Camp who stay 2 weeks in
                        the camp take part. On this hike the participants will
                        not spend the night in a tent, but either in the open
                        air or under a self-made shelter e.g. from tarpaulins.
                        They will of course be accompanied by their teamers. The
                        hike is a very special experience and a highlight for all
                        participants. For this hike the participants need sturdy
                        shoes and a big backpack.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="el-item">
                  <a className="el-title uk-accordion-title" href="#">
                    Can I wash my clothes during the camp?
                  </a>
                  <div className="uk-accordion-content">
                    <div className="el-content uk-panel">
                      <p>
                        In principle, participants should bring sufficient
                        clothing and change of clothes for the entire camp
                        period.
                        <br />
                        Only in the camps in Lüneburger Heide and Bayerischer
                        Wald a laundry service will be offered for kids staying
                        three weeks or more, which means that a laundry bag
                        (approx. 3 kg) will be washed in the laundry centre of
                        the next village at a price of USD 45. This service can
                        be booked upon registration for three-week camps. Please
                        note that the laundry will be done either after one week
                        or after two weeks.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="el-item">
                  <a className="el-title uk-accordion-title" href="#">
                    Anti Homesick Adviser
                  </a>
                  <div className="uk-accordion-content">
                    <div className="el-content uk-panel">
                      <p>Dear parents</p>
                      <p>
                        now it&apos;s almost time: In summer your child travels
                        for the first time with Camp Adventure. Maybe it will be
                        the first time that he travels alone without parents or
                        relatives. As we are getting more and more questions, we
                        have decided to put together a small package for you
                        parents with little tips from experts to make everything
                        as easy as possible for you and your child. Follow our
                        tips and your child will have a fantastic holiday, have
                        many new experiences and make friends from all over the
                        world! All these tips have been developed together with
                        the International Camping Fellowship. And the more you
                        think your child will be a &quot;homesick candidate&quot;
                        - or your child even claims to be one - the more you
                        consider the following tips.
                      </p>
                      <p>
                        <span style={{ textDecoration: "underline" }}>
                          <strong>Co-decide:</strong>
                        </span>{" "}
                        We have different camps and also from other organizers
                        there are still many great travel possibilities. Please
                        ask your child if he or she can imagine a camp with us
                        and if he or she would like to travel with us. Take a
                        look at our offer together with your child and decide
                        together which camp suits him best. Simply registering
                        your child without asking is a bad start!
                      </p>
                      <p>
                        <span style={{ textDecoration: "underline" }}>
                          <strong>Inform and enjoy:</strong>
                        </span>{" "}
                        Have a look at the photos of the last years together.
                        Encourage your child that a lot of great new things are
                        waiting for him or her and that he or she should try
                        everything. If you show interest in the camp, your child
                        will quickly feel like finding out more - and
                        anticipation will be awakened!
                      </p>
                      <p>
                        <span style={{ textDecoration: "underline" }}>
                          <strong>Train the &quot;Without Mom and Dad&quot;
                          time:</strong>
                        </span>{" "}
                        If your child has never been separated from you before,
                        try it first in small steps. Whether to your
                        grandparents or to your friends over the weekend - start
                        small. So your child gets used to it and experiences
                        that it is not bad to go away, because you always come
                        back again. Important: During this time please do NOT
                        call the child, but consider the separation as a
                        training for you.
                      </p>
                      <p>
                        <span style={{ textDecoration: "underline" }}>
                          <strong>Go shopping by yourself:</strong>
                        </span>{" "}
                        Go shopping with your child for the trip and let them
                        decide which toothpaste or shampoo they want to take with
                        them. Even these little things strengthen the
                        child&apos;s self-esteem enormously and they learn to take
                        responsibility for themselves.
                      </p>
                      <p>
                        <span style={{ textDecoration: "underline" }}>
                          <strong>Try sleeping bag:</strong>
                        </span>{" "}
                        We sleep in sleeping bags in our camps. Please let your
                        child try out how he or she sleeps in the sleeping bag
                        to get used to it. Then it falls asleep much more calmly
                        on the first evening. You should also like to go camping
                        with your child. The sounds of nature are fantastic, but
                        perhaps a little disturbing for someone who doesn&apos;t
                        know it. The more often your child has tried camping in a
                        familiar environment (e.g. in the garden), the easier it
                        is to get used at camp.
                      </p>
                      <p>
                        <span style={{ textDecoration: "underline" }}>
                          <strong>Pack yourself:</strong>
                        </span>{" "}
                        We all know this from our first trips: Mama packs best.
                        That may be right, but to give your child the comforting
                        feeling that really everything is there, only packing
                        helps. Our recommendation: Pack the different types of
                        clothes in different coloured bags. So the child knows
                        immediately where to find the fresh T-shirt or socks and
                        doesn&apos;t have to empty the whole suitcase or
                        backpack. In addition, the clothes can then be stored
                        better in the tent.
                      </p>
                      <p>
                        <span style={{ textDecoration: "underline" }}>
                          <strong>When saying goodbye:</strong>
                        </span>{" "}
                        There are absolute taboo phrases that make it impossible
                        for carers to work with the child if there are any signs
                        of homesickness. Even if you have these feelings at the
                        moment of your farewell - the following exemplary
                        statements (Don´ts) are no help to the children:
                        <br />
                        &quot;Don&apos;t be afraid! If you are in a bad way, I
                        will pick you up quickly&quot;. - &quot;Just call me
                        when you get homesick - I&apos;ll take care of
                        everything.&quot;
                        <br />
                        Better:{" "}
                        <strong>
                          &quot;If you get homesick, let your teamer know. He
                          will take good care of you. Think of all the great
                          things you&apos;ll do.&quot;
                        </strong>
                        <br />
                        &quot;I will miss you so much! I don&apos;t know how I
                        can stand it without you.&quot;
                        <br />
                        Better:{" "}
                        <strong>
                          &quot;I&apos;ll miss you, but we&apos;ll see each
                          other again soon - after the camp. So have a lot of
                          fun!&quot;
                        </strong>
                        <br />
                        So please make it clear when saying goodbye that your
                        child should simply have a lot of fun. Understandably,
                        saying goodbye is not easy for you either. But if you
                        show your child your fears too much, it worries about YOU
                        - not about yourself. And this is the no. 1 reason for
                        homesickness: the concern for the parents that they are
                        sad!!!
                      </p>
                      <p>
                        <span style={{ textDecoration: "underline" }}>
                          <strong>At camp:</strong>
                        </span>{" "}
                        If it comes to homesickness attacks, so usually only on
                        the 2nd - 3rd day. And homesickness is not a disease, but
                        quite normal. Everyone knows the feeling of missing
                        something from home. Therefore: Please give us the
                        chance to teach the children how best to deal with this
                        problem. Solving problems is one of the most important
                        so-called &quot;soft skills&quot;, i.e. skills in
                        dealing with people, situations and decisions. In order
                        to learn these skills, which are important for life, it
                        is important that you give your child the freedom he or
                        she needs. If you want your child to contact you to tell
                        you how he or she is doing, you are depriving him or her
                        of the chance to develop further with the help of the
                        carers alone. So PLEASE DO NOT CALL YOUR CHILD IN CAMP!
                        Instead, get postcards or letters written (see the
                        &quot;Writing Letters&quot; section of the info
                        package). If there are heavy messages to deliver, such as
                        the loss of a pet or similar, do not call or write
                        directly to the child. Instead, either call the office
                        and ask if you should tell the child or tell them
                        personally when the child is home. And in the case of
                        serious family incidents, please inform the camp
                        management in advance so that they can keep a special eye
                        on the child and better interpret any abnormal behaviour.
                      </p>
                      <p>
                        <span style={{ textDecoration: "underline" }}>
                          <strong>Too much homesickness:</strong>
                        </span>{" "}
                        If the homesickness becomes too strong or lasts for
                        several days, we will call you and give you the chance
                        to talk to your child directly. After the interview, we
                        will discuss with the camp management whether it makes
                        sense to pick up the child. But also here due to bad
                        experiences we would like to point out again: Please
                        NEVER arrange the pick-up directly with the child by
                        phone call. Give the child and us the chance to try
                        again. For insurance reasons, the collection of the
                        child are only possible after prior agreement with the
                        camp management or the office!! Visits are not allowed
                        also!!
                      </p>
                      <p>
                        <span style={{ textDecoration: "underline" }}>
                          <strong>Visits to the camp:</strong>
                        </span>{" "}
                        Please do not simply visit your child at camp. As already
                        mentioned above, visits to the camp are not possible due
                        to insurance reasons! In addition, visits promote
                        homesickness rather than it helps, not only for your
                        child, but also for the other camp participants:
                        &quot;Why does xy get visitors and I don&apos;t? Envy
                        and homesickness are often the result of visits.
                      </p>
                      <p>
                        Maybe it&apos;s comforting to know that every year only
                        very, very few children have to go home because of
                        homesickness. If you follow our tips, your child will
                        certainly have a great time, make many friends and
                        return to you strengthened from the camp experience. We
                        have summarized our homesickness tips in a Youtube
                        playlist for you.
                      </p>
                    </div>
                    <div className="uk-margin-top">
                      <a
                        className="el-link uk-button uk-button-primary"
                        href="https://www.campadventure.de/images/f_infos/FAQ/Anti-Homesickness_Adviser.pdf"
                        target="_blank"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="uk-margin">
                <iframe
                  src="https://www.youtube.com/embed/3NtE5wSwYTo?list=PLSOedrxa1c-bxvH6uuz_oZdIfJkov66wB&disablekb=1"
                  allow="autoplay"
                  allowFullScreen
                  uk-responsive=""
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Camp Counselors Section */}
      <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h2 uk-text-left@m uk-text-center">
                Camp Counselors - Our Teamers
              </h2>
              <div className="uk-divider-small uk-text-left@m uk-text-center"></div>
              <div uk-accordion="collapsible: true;">
                <div className="el-item">
                  <a className="el-title uk-accordion-title" href="#">
                    Who are the camp counselors?
                  </a>
                  <div className="uk-accordion-content">
                    <div className="el-content uk-panel">
                      <p>
                        Every year our team is made up of an international mix.
                        The non-profit association Camp Europe e.V. with
                        headquarters in Hamburg and a branch office in Canada
                        takes care of the acquisition of national and
                        international applicants. Since we have about 50%
                        German-speaking children, there are also German carers
                        in every location. But many also come from other
                        countries, such as England, Spain, Canada and Australia,
                        to name just a few.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="el-item">
                  <a className="el-title uk-accordion-title" href="#">
                    How are the teamers trained?
                  </a>
                  <div className="uk-accordion-content">
                    <div className="el-content uk-panel">
                      <p>
                        All counselors go through an extensive application
                        process. For a successful application, not only an
                        interesting curriculum vitae and a minimum age of 19
                        years are sufficient! We conduct a personal interview
                        with each individual in which our employees get a first
                        impression of the applicant.
                        <br />
                        Before the camp season, everyone, both the first
                        supervisors (teamers) as well as many recomers, complete
                        a one-week training in which they are prepared for their
                        assignment by trained coaches. They must have a first aid
                        certificate, which may not be older than two years, as
                        well as an internationally flawless police clearance
                        certificate. We know how important the teamers are for a
                        great camp and therefore select them very conscientiously.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Camp Rules Section */}
      <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h2 uk-text-left@m uk-text-center">
                Camp Rules
              </h2>
              <div className="uk-divider-small uk-text-left@m uk-text-center"></div>
              <div uk-accordion="collapsible: true;">
                <div className="el-item">
                  <a className="el-title uk-accordion-title" href="#">
                    Drugs, Alcohol & Camp?
                  </a>
                  <div className="uk-accordion-content">
                    <div className="el-content uk-panel">
                      <p>
                        From our point of view an absolutely unacceptable and
                        indiscutable combination! Due to our cooperation with the
                        association &quot;Keine Macht den Drogen&quot; (No power
                        to drugs) and our common opinion that all kinds of drugs
                        do not belong in the hands of children & teenagers, any
                        possession or consumption of drugs is forbidden for
                        teenagers and children in the camp and also outside the
                        camp.
                        <br />
                        Violations can lead to exclusion or even to criminal
                        charges. The term &quot;drugs&quot; also includes
                        cigarettes and alcohol! Through our varied activities,
                        we offer a much better alternative! We would like to
                        make it clear from the outset that we are also against
                        any form of discrimination or &quot;putting down&quot;.
                        This is - just like violence - immediately prevented by
                        us, in order to offer each young person a relaxed and
                        joyful time in the camp.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="el-item">
                  <a className="el-title uk-accordion-title" href="#">
                    Should I call my kid or write an old-fashioned letter?
                  </a>
                  <div className="uk-accordion-content">
                    <div className="el-content uk-panel">
                      <p>
                        We ask all parents to write to their child at least once.
                        This is especially useful at the beginning, as it is a
                        particularly upsetting experience for every child and
                        every teenager when most of the participants receive a
                        letter, but they do not.
                        <br />
                        Please note that there is NO public &quot;camp
                        phone&quot; available for incoming or outgoing calls. If
                        your child doesn&apos;t bring her/his own phone,
                        she/he won&apos;t be able to call you. In case of any
                        problems, we will of course contact you immediately.
                      </p>
                      <p>
                        If your child brings a mobile phone, we will collect it
                        on arrival and store it with the valuables. Your
                        child&apos;s Teamer may hand it over during the phone
                        time after lunch. Please keep in mind: no news is good
                        news (the location manager will contact you if it is
                        necessary due to homesickness or illness). We kindly ask
                        you not to call the office in Hamburg to ask about your
                        kid&apos;s health and wellbeing, nor if you would like
                        to know why your child hasn&apos;t called you yet.
                        Please use our camp email service for such enquiries.
                      </p>
                      <p>
                        Our recommendation is the following:
                        <br />
                        We recommend not to call your child (even if he or she
                        has a mobile phone with him or her) and not to tell him
                        or her to call you. Telephoning can in our experience
                        promote homesickness very strongly and your child will be
                        cured thereby if completely immersed in camp life! At
                        noon after lunch, if absolutely necessary, your child can
                        pick up his or her mobile phone from the counselors until
                        the start of next program and make phone calls. Instead,
                        you are welcome to bring a pre-stamped and addressed
                        envelope with you. We will then make sure that your child
                        has enough time to write letters. Since letters and
                        postcards often arrive late at the camps, we also offer
                        the e-mail service. You can send your child max. ONE
                        email per day directly to the camp, which we then print
                        out and give to your child. There is no way for them to
                        reply, but your child will be happy to receive a small
                        message from home. You can find the postal and email
                        address in the info package of the booked camp.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="el-item">
                  <a className="el-title uk-accordion-title" href="#">
                    Are there any prohibited items?
                  </a>
                  <div className="uk-accordion-content">
                    <div className="el-content uk-panel">
                      Yes, there are. Not allowed are pocket knives with
                      lockable blades, all weapons, lighters and matches (danger
                      of fire in the forest!). Drugs of any kind, including
                      alcohol and cigarettes, are also included.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Safety Section */}
      <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h2 uk-text-left@m uk-text-center">Safety</h2>
              <div className="uk-divider-small uk-text-left@m uk-text-center"></div>
              <div uk-accordion="collapsible: true;">
                <div className="el-item">
                  <a className="el-title uk-accordion-title" href="#">
                    Electronic equipment and valuables
                  </a>
                  <div className="uk-accordion-content">
                    <div className="el-content uk-panel">
                      We recommend that you do not take an MP3 player, e-book,
                      tablet, etc. or any valuables with you. On the one hand we
                      do not assume any liability and on the other hand there
                      are no possibilities to charge the devices. We are of the
                      opinion that the camp time is a special experience for the
                      participants if they do not have the headphones in their
                      ears all the time or are busy with their mobile phones.
                      Instead they have the chance to deal with other topics and
                      they find time to dedicate themselves to the new people in
                      the camp.
                    </div>
                  </div>
                </div>
                <div className="el-item">
                  <a className="el-title uk-accordion-title" href="#">
                    How do you provide safety for the kids?
                  </a>
                  <div className="uk-accordion-content">
                    <div className="el-content uk-panel">
                      Before our camp counselors start working with us, we check
                      their police clearance certificates. You must be at least
                      19 years old to work for us as a teamer. They must also
                      have a &quot;First Aid Certificate&quot;, which must not
                      be older than two years. In the camps we try to make sure
                      that only adults from our camp or familiar faces are on the
                      campground and that all our carers look after strangers.
                      <br />
                      We have many different camp sites. Some of them are fenced
                      in, others are not. There are no armed guards or the like
                      in our camps, as we believe that these conditions create a
                      very insecure feeling. We do not have a high security zone
                      in Germany, Northern Ireland or England, but we keep our
                      eyes open and do everything we can to ensure that all
                      participants have a great time.
                    </div>
                    <div className="uk-margin-top">
                      <Link
                        className="el-link uk-button uk-button-secondary uk-button-small"
                        href="/info/safety#safety"
                        uk-scroll=""
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="el-item">
                  <a className="el-title uk-accordion-title" href="#">
                    Insurance in case of illness?
                  </a>
                  <div className="uk-accordion-content">
                    <div className="el-content uk-panel">
                      <p>
                        If your child should fall ill during the camp and medical
                        help is required, he or she will of course be taken to
                        the doctor by our carers and cared for there as well. It
                        is therefore necessary for each participant to take their
                        insurance card with them to the camp. We offer all
                        participants the possibility of taking out liability,
                        casualty & health insurance for travel abroad with us.
                        This covers all costs in case of illness and prevents
                        international children in particular from having to
                        &quot;advance&quot; their own cash. You can find more
                        detailed information on insurance{" "}
                        <Link href="/info/insurance">here</Link>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accomodation & Catering Section */}
      <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h2 uk-text-left@m uk-text-center">
                Accomodation & Catering
              </h2>
              <div className="uk-divider-small uk-text-left@m uk-text-center"></div>
              <div uk-accordion="collapsible: true;">
                <div className="el-item">
                  <a className="el-title uk-accordion-title" href="#">
                    How&apos;s the food at the camps?
                  </a>
                  <div className="uk-accordion-content">
                    <div className="el-content uk-panel">
                      <p>
                        Full board for the entire duration of the camp is of
                        course already included in the camp price. In addition,
                        water and fruit are available for the participants around
                        the clock. For us it is a matter of course to provide
                        one variant for vegetarians and one pork-free with each
                        meal. In case of special allergies or intolerances of
                        your children let us know in advance and we will try to
                        find a solution.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="el-item">
                  <a className="el-title uk-accordion-title" href="#">
                    How is my child accommodated in the camp?
                  </a>
                  <div className="uk-accordion-content">
                    <div className="el-content uk-panel">
                      <p>
                        In our Adventure Camp Bayerischer Wald and our Camp
                        Lueneburger Heide, the Juniors (7-12) and the Seniors
                        (12-16) can choose between tents and huts.
                        <br />
                        The tents are equipped with a floor and a wooden
                        platform, up to 7 children can share one tent. The
                        participants can make themselves comfortable with
                        sleeping bag and sleeping mat. The wooden huts are
                        equipped with bunk beds and can accommodate 4-8
                        children. At the other locations, participants will be
                        accommodated in shared rooms in youth hostels, sports
                        centres or boarding schools of private schools. You will
                        find detailed information about the accommodation on the
                        individual camp pages.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transfers & Shuttles Section */}
      <div className="uk-section-default uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <h2 className="uk-h2 uk-text-left@m uk-text-center">
                Transfers & Shuttles
              </h2>
              <div className="uk-divider-small uk-text-left@m uk-text-center"></div>
              <div uk-accordion="collapsible: true;">
                <div className="el-item">
                  <a className="el-title uk-accordion-title" href="#">
                    Entry regulations/Travel Consent for group flights
                  </a>
                  <div className="uk-accordion-content">
                    <div className="el-content uk-panel">
                      <p>
                        <strong>
                          All parents need to fill this out and bring it to
                          camp:
                        </strong>
                      </p>
                      <p>
                        <a
                          href="https://www.campadventure.de/images/ESA.pdf"
                          target="_blank"
                          rel="noopener"
                        >
                          Download für den Letter of Consent to Travel ESA.pdf
                        </a>
                      </p>
                      <p>
                        <strong>
                          Below is a summary of the travel requirements for
                          minors from various EU countries traveling with Camp
                          Adventure on group flights. Please note that
                          regulations can change, so it&apos;s essential to
                          consult the official resources provided for the most
                          up-to-date information.
                        </strong>
                      </p>
                      <p>---</p>
                      <p>
                        <strong>### 🇪🇸 Spain</strong>
                      </p>
                      <p>
                        <em>**Requirements:**</em>
                      </p>
                      <p>
                        * Spanish minors traveling abroad without their parents
                        or legal guardians must carry a{" "}
                        <strong>Parental Authorization Form</strong>.
                        <br />* This form should be signed by both parents or
                        legal guardians and may{" "}
                        <strong>
                          need to be certified by a police station.
                        </strong>
                      </p>
                      <p>
                        <a
                          href="https://administracion.gob.es/pag_Home/en/Tu-espacio-europeo/derechos-obligaciones/ciudadanos/viajes/documentos/menores-solos.html"
                          target="_blank"
                          rel="noopener"
                          title="consent spain"
                        >
                          https://administracion.gob.es/pag_Home/en/Tu-espacio-europeo/derechos-obligaciones/ciudadanos/viajes/documentos/menores-solos.html
                        </a>
                      </p>
                      <p>---</p>
                      <p>
                        <strong>### 🇫🇷 France</strong>
                      </p>
                      <p>
                        <em>**Requirements:**</em>
                      </p>
                      <p>
                        * French minors traveling abroad without at least one
                        parent must have:
                      </p>
                      <p>
                        * A completed <strong>AST (Autorisation de sortie du territoire)</strong> form.
                        <br />* A copy of the signing parent&apos;s valid ID.
                      </p>
                      <p>
                        <a
                          href="https://www.service-public.fr/particuliers/vosdroits/F1922?lang=en"
                          target="_blank"
                          rel="noopener"
                          title="consent france"
                        >
                          https://www.service-public.fr/particuliers/vosdroits/F1922?lang=en
                        </a>
                      </p>
                      <p>---</p>
                      <p>
                        <strong>### 🇵🇹 Portugal</strong>
                      </p>
                      <p>
                        <em>**Requirements:**</em>
                      </p>
                      <p>
                        * Portuguese minors traveling alone or with someone other
                        than their parents must have a{" "}
                        <strong>travel authorization letter</strong> signed by
                        both parents or legal guardians.
                        <br />* The letter must be notarized and include travel
                        dates, destination, and details of the accompanying
                        person.
                      </p>
                      <p>
                        <a
                          href="https://www2.gov.pt/servicos/dar-autorizacao-de-saida-de-menor-do-territorio-nacional"
                          target="_blank"
                          rel="noopener"
                          title="consent portugal"
                        >
                          https://www2.gov.pt/servicos/dar-autorizacao-de-saida-de-menor-do-territorio-nacional
                        </a>
                      </p>
                      <p>---</p>
                      <p>
                        <strong>### 🇩🇪 Germany</strong>
                      </p>
                      <p>
                        <em>**Requirements:**</em>
                      </p>
                      <p>
                        * While not mandatory, it&apos;s strongly recommended
                        that minors traveling without their parents carry a{" "}
                        <strong>declaration of consent</strong> signed by both
                        parents like the one from Camp Adventure above
                        <br />* Including a copy of the child&apos;s birth
                        certificate and the parents&apos; ID copies is
                        advisable.
                      </p>
                      <p>
                        <a
                          href="https://verwaltung.bund.de/leistungsverzeichnis/EN/leistung/99014014000000/herausgeber/HH-S1000020010000009600/region/020000000000"
                          target="_blank"
                          rel="noopener"
                          title="consent germany"
                        >
                          https://verwaltung.bund.de/leistungsverzeichnis/EN/leistung/99014014000000/herausgeber/HH-S1000020010000009600/region/020000000000
                        </a>
                      </p>
                      <p>---</p>
                      <p>
                        <strong>### 🇮🇹 Italy</strong>
                      </p>
                      <p>
                        <em>**Requirements:**</em>
                      </p>
                      <p>
                        * Italian minors under 14 traveling without their parents
                        must have a <strong>Declaration of Accompaniment</strong>.
                        <br />* This declaration must be validated by the local
                        police headquarters (Questura) and specify the
                        accompanying person or organization.
                      </p>
                      <p>
                        <a
                          href="https://consnewyork.esteri.it/en/servizi-consolari-e-visti/servizi-per-il-cittadino-italiano/passaporti-e-carte-didentita/travel-by-children-under-14-years-of-age-traveling-alone-or-with-persons-other-than-their-parents/"
                          target="_blank"
                          rel="noopener"
                          title="consent italy"
                        >
                          https://consnewyork.esteri.it/en/servizi-consolari-e-visti/servizi-per-il-cittadino-italiano/passaporti-e-carte-didentita/travel-by-children-under-14-years-of-age-traveling-alone-or-with-persons-other-than-their-parents/
                        </a>
                      </p>
                      <p>---</p>
                      <p>
                        <strong>### 🇳🇱 Netherlands</strong>
                      </p>
                      <p>
                        <em>**Requirements:**</em>
                      </p>
                      <p>
                        * Minors traveling abroad without both parents must carry
                        a <strong>consent letter</strong> signed by the
                        non-accompanying parent(s).
                        <br />* Additional documents, such as a birth
                        certificate and copies of parents&apos; IDs, may be
                        required.
                      </p>
                      <p>
                        <strong>Official Resources:</strong>
                      </p>
                      <p>
                        <a
                          href="https://english.marechaussee.nl/topics/travelling-with-children"
                          target="_blank"
                          rel="noopener"
                          title="Consent Netherlands"
                        >
                          https://english.marechaussee.nl/topics/travelling-with-children
                        </a>
                      </p>
                      <p>---</p>
                      <p>
                        <strong>
                          **Note:** While Camp Adventure provides assistance,
                          it&apos;s the responsibility of the parents or legal
                          guardians to ensure all necessary documents are
                          prepared and valid. Requirements may change, so
                          it&apos;s advisable to consult the respective embassy
                          or consulate for the most current information.
                        </strong>
                      </p>
                      <p>
                        <strong>
                          If you need assistance with specific forms or further
                          information, feel free to ask!
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="el-item">
                  <a className="el-title uk-accordion-title" href="#">
                    Which transfers are offered?
                  </a>
                  <div className="uk-accordion-content">
                    <div className="el-content uk-panel">
                      The respective transfer possibilities depend on the period
                      and venue of the camp. Check directly on the respective
                      camp page under &quot;Arrival & Departure Services&quot;.
                    </div>
                  </div>
                </div>
                <div className="el-item">
                  <a className="el-title uk-accordion-title" href="#">
                    Where can I find the exact arrival and departure times?
                  </a>
                  <div className="uk-accordion-content">
                    <div className="el-content uk-panel">
                      Information about the different arrival and departure
                      times can be found on the respective camp page under
                      &quot;Arrival & Departure Services&quot;.
                    </div>
                  </div>
                </div>
                <div className="el-item">
                  <a className="el-title uk-accordion-title" href="#">
                    How do the transfer costs come about?
                  </a>
                  <div className="uk-accordion-content">
                    <div className="el-content uk-panel">
                      <p>
                        When booking a train or air trip, the indicated price
                        includes the arrival and departure as well as the
                        accompaniment by a supervisor.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="el-item">
                  <a className="el-title uk-accordion-title" href="#">
                    Where can I find the address/driving directions from the
                    camp?
                  </a>
                  <div className="uk-accordion-content">
                    <div className="el-content uk-panel">
                      <p>
                        You will receive the exact address and directions of the
                        camp with the Last Travel Information about 3-4 weeks
                        before the camp starts.
                      </p>
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

