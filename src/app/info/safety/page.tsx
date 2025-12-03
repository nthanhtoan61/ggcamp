"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { HeroSection } from "@/components/layouts";
import { Plus,Star, Quote } from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { getTemplateImageUrl } from "@/lib/assets";

 const philosophyCards = [
   {
     title: "Community",
     description:
       "What is most important for us at camp is the community. We want everyone – participants, teamers and camp directors, no matter from which country or what culture – to have an unforgettable time and every single one of us helps to reach this goal.",
     avatar: "https://i.pravatar.cc/150?img=11",
     name: "Esther Howard",
     role: "Tourist",
   },
   {
     title: "Responsibility",
     description:
       "We want everyone to help shape the daily life at camp. Besides playing this of course also includes social coexistence. Together with us your children keep the camp clean. This means cleaning the dishes and wiping the tables after a meals, as well as keeping the camp and sanitary facilities clean and tidying up the tents and huts together. All this of course, in a manner appropriate to the age of your children. This is how we, in shared responsibility, make everybody feel comfortable.",
     avatar: "https://i.pravatar.cc/150?img=12",
     name: "Cody Fisher",
     role: "Parent",
   },
   {
     title: "Internationality",
     description:
       "At camp new friendships arise even though some campers live thousands of kilometers apart. Our experienced campers immediately include newcomers because this is what they love camp for – they come to make new friends and meet their fellow camp mates again. After our camp season many parents tell us about mutual visits – some went to France, Spain or Canada. They also tell us about the increased motivation of their children to pay a little more attention to the language lessons at school so conversations at camp next summer become easier.",
     avatar: "https://i.pravatar.cc/150?img=13",
     name: "Jenny Wilson",
     role: "Camper",
   },
   {
     title: "Log off, get outside",
     description:
       "We want all campers to have a relaxed holiday. Mobile phones are especially counterproductive to reach this goal. Therefore, our camps are mobile-free zones and we would like your children to hand over their phones and all other electronic devices to our teamers on the day of arrival so they can really relax. This also means that your children cannot be reached by phone outside the daily telephone hour which is after lunch.",
     avatar: "https://i.pravatar.cc/150?img=14",
     name: "Kristin Watson",
     role: "Counselor",
   },
   {
     title: "No power to drugs",
     description:
       "For legal reasons, as a result of our cooperation with the organization 'No power to drugs' and by our conviction that drugs don't belong into the hands of children and young adults, it is strictly forbidden for all campers to possess or consume any kind of drugs including cigarettes and alcoholic drinks. Non-compliance with this rule will lead to the suspension from camp or even criminal charges. It is our belief that with all our activities and the great atmosphere at camp, we offer much better alternatives anyway!",
     avatar: "https://i.pravatar.cc/150?img=15",
     name: "Dianne Russell",
     role: "Staff",
   },
   {
     title: "Dealing with discrimination",
     description:
       "We would like to point out that we do not accept any form of discrimination, bullying or violence so that all campers can enjoy a happy, relaxed and safe holiday at camp.",
     avatar: "https://i.pravatar.cc/150?img=16",
     name: "Robert Fox",
     role: "Director",
   },
 ];


 const securityCards = [
   {
     title: "Background Check",
     description:
     "Every counselor, chef, teamer or helper that enters our camps has to be registrated, complete a background check, as well as have references. That's why parents are only allowed on the camp site on the day of arrival and departure and not during the week. We want to make sure that we have checked and know every adult who is with us at camp.",     
     avatar: "https://i.pravatar.cc/150?img=11",
     name: "Esther Howard",
     role: "Tourist",
   },
   {
     title: "Education",
     description:
     "Each counselor must complete an almost two-week training course with us, from early in the morning until late in the evening includes so many lessons that the number of hours even corresponds to the basic study in educational sciences. Here we focus on the areas of safety, accident prevention, child psychology and needs as well as the various safety aspects in the field of experiential education.",
     avatar: "https://i.pravatar.cc/150?img=12",
     name: "Cody Fisher",
     role: "Parent",
   },
   {
     title: "Crisis Intervention",
     description:
     "If something should happen, it is not only important to provide first aid for the affected person, but also to care for the other children and adolescents. We have a specially trained team for crisis intervention, which then provides immediate care and can thus prevent possible traumatisation due to the experience.",
     avatar: "https://i.pravatar.cc/150?img=13",
     name: "Jenny Wilson",
     role: "Camper",
   },
   {
     title: "Nightwatch",
     description:
     "All our camps are also supervised at night by the counselors/teamers. On the one hand we want to prevent visitors from coming to the site - which has not happened until today - and on the other hand we want to be there for the children if they wake up at night and get homesick or have to go to the toilet. The nightwatch patrols the area and is otherwise reachable at a central place for the children. Some of our locations - e.g. the headquarters in Walsrode - are also video-monitored and fenced in.",
     avatar: "https://i.pravatar.cc/150?img=14",
     name: "Kristin Watson",
     role: "Counselor",
   },
   {
     title: "Caregiver Key",
     description:
     "No safety without sufficient staff! We are the leaders in Germany with our great caregiver key. There are no camps that have a key worse than 1:6-1:8, which means that one caregiver is responsible for a maximum of 6-8 children. In the junior camps we also use our CIT (Counselor in Training), so that we often reach a key of only 1:4. We know that this key can seem exaggerated, but we want to guarantee the highest possible safety and we firmly believe that this is exactly what our high level of caregiver commitment leads to.",
     avatar: "https://i.pravatar.cc/150?img=15",
     name: "Dianne Russell",
     role: "Staff",
   },
   {
     title: "Cooperation",
     description:
     "Cooperation with the independent representative for questions of sexual child abuse via our umbrella organisation Reisenetz e.V.: Go and Grow Camp was one of the first tour operators for children and young people to develop a protection concept that prevents sexual abuse among children and young people. Today, this concept is considered important by many other tour operators, also due to our personal commitment in various associations and professional circles. Of course, the background check and the '6-eyes principle', which states that a child must never be alone with a caregiver, is also an essential part of our protection concept. The most important thing, however, is to create an 'open system' in which everyone knows that sexual abuse should not be a taboo subject, but that simple instruments such as a grievance box and feedback system can immediately address grievances and that they do not have to be denied.",
     avatar: "https://i.pravatar.cc/150?img=16",
     name: "Robert Fox",
     role: "Director",
   },
     {
     title: "Quality",
     description:
     "As a member of the quality committee of the professional association for children and youth travel 'Reisenetz', our managing director Jan Vieth is responsible for further developing and checking the quality guidelines of the entire industry. As Germany's ambassador to the ICF, he is also kept up to date on improvements in camp and training quality worldwide and adapts these as quickly as possible to our own camps.",
     avatar: "https://i.pravatar.cc/150?img=16",
     name: "Robert Fox",
     role: "Director",
   },
     {
     title: "Accessibility",
     description:
     "Of course, all parents receive a number from us, which allows them to reach us 24 hours a day in an emergency. If an emergency occurs at your home, you can inform us immediately and we can decide together how, when and whether to inform your child.",     avatar: "https://i.pravatar.cc/150?img=16",
     name: "Robert Fox",
     role: "Director",
   },
     {
     title: "In case of emergency",
     description:
    "Every caregiver has a valid first aid certificate and can help if necessary",
     avatar: "https://i.pravatar.cc/150?img=16",
     name: "Robert Fox",
     role: "Director",
   },
 ];

export default function SafetyPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            Safety
          </>
        }
        backgroundImage="yootheme/cache/18/faqs_header_new.jpg"
        overlayColor="rgba(0, 0, 0, 0.35)"
        sectionClass="uk-section-secondary uk-section-overlap uk-preserve-color uk-light"
        titleClass="uk-heading-large uk-text-center !text-[5vw]"
        enableScrollspy={true}
        backgroundPosition="top-center"
      />

      {/* Concept Section */}
      <div className="uk-section-default uk-section-overlap uk-section"
       uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-grid-margin" uk-grid="">
            <div className="uk-width-1-3@m">
              <h1> 
                <p
                  className="font-['Raleway'] text-3xl! md:text-[2vw]! leading-tight font-semibold! "
                  uk-scrollspy-class="uk-animation-slide-bottom-medium"
                >
                  Go and Grow Camp
                </p>
              </h1>
              <div className="uk-divider-icon uk-width-medium uk-margin-auto"></div>
            </div>
            <div className="uk-width-2-3@m">
              <blockquote>
                <p
                  className="font-['Raleway'] text-sm! md:text-[1.2vw]! leading-relaxed "
                  uk-scrollspy-class="uk-animation-slide-bottom-medium"
                >
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

      {/* Glamping Section */}
      <section className="w-full px-10 md:px-[3vw] py-16 md:py-24 bg-white"
      uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-[4vw]">
          <div className="relative w-full h-full">
            {/* Row 1: Forest Image & Stats Card side-by-side */}
            <div className="flex items-start justify-between gap-5 md:gap-[1vw]">
              {/* Ảnh to bên trái */}
              <div className="w-2/3 md:w-[32vw] md:h-[70vh] relative z-10 rounded-2xl overflow-hidden group cursor-pointer"
              uk-scrollspy-class="uk-animation-slide-left-medium">
                <img
                  src="/templates/yootheme/safety/pic2.jpg"
                  alt="Forest Landscape"
                  className="md:w-full h-full object-cover"
                />

                {/* Shiny Glass Effect */}
                <div className="absolute top-1/2 left-1/2 w-[200%] h-0 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white/30  z-20 pointer-events-none group-hover:transition-all group-hover:duration-600 group-hover:ease-linear group-hover:h-[250%] group-hover:bg-transparent" />
                </div>

              {/* Ảnh nhỏ bên phải trên */}
              <div className="w-[34%] bg-[#f8f9fa] p-[1vw] md:p-[2vw] rounded-2xl flex flex-col justify-center items-start">
                <div className="flex items-center -space-x-3 mb-[5vh]">
                  <img
                    className="w-10 h-10 md:w-[3vw] md:h-[3vh] rounded-full border-2 border-white"
                    src="https://i.pravatar.cc/100?img=1"
                    alt="User"
                  />
                  <img
                    className="w-10 h-10 md:w-[3vw] md:h-[3vh] rounded-full border-2 border-white"
                    src="https://i.pravatar.cc/100?img=5"
                    alt="User"
                  />
                  <img
                    className="w-10 h-10 md:w-[3vw] md:h-[3vh] rounded-full border-2 border-white"
                    src="https://i.pravatar.cc/100?img=8"
                    alt="User"
                  />
                  <div className="w-10 h-10 md:w-[3vw] md:h-[7vh] rounded-full border-2 border-white bg-[#bfd66b] flex items-center justify-center text-white">
                    <Plus size={30} />
                  </div>
                </div>
                <div className="font-extrabold text-3xl md:text-[2vw] text-gray-900 mb-1">
                  1,200+
                </div>
                <div className="text-xs text-gray-500 font-medium md:text-[1vw]">
                  Happy Glampers Hosted
                </div>
              </div>
            </div>

            {/* Ảnh dưới bên phải dưới */}
            <div className="md:absolute md:w-[70%] md:h-[50%] z-20 rounded-2xl overflow-hidden md:border-[6px] md:ml-[13vw] mt-3 md:-mt-[35vh] border-white md:translate-y-8 group cursor-pointer"
            uk-scrollspy-class="uk-animation-slide-bottom-medium">
              <img
                src="/templates/yootheme/safety/pic1.jpg"
                alt="Glamping Tents"
                className="w-full h-full object-cover"
              />

              {/* NEW Shiny Glass Effect */}
              <div className="absolute top-1/2 left-1/2 w-[200%] h-0 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white/30 pointer-events-none group-hover:transition-all group-hover:duration-600 group-hover:ease-linear  group-hover:h-[250%] group-hover:bg-transparent" />
            </div>
          </div>

          {/* RIGHT COLUMN: Content */}
          <div className="flex flex-col gap-6 mt-10 md:mt-0"
          uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;">
            {/* Header */}
            <div>
              <span className="text-primary font-bold text-sm md:text-[1vw] tracking-widest uppercase mb-2 block animate-fadeUp"
              uk-scrollspy-class="uk-animation-slide-bottom-medium">
                ✦ Our Approach
              </span>
              <div className="text-4xl md:text-[2vw] font-extrabold text-gray-900 leading-tight">
                Learning, Comfort, and Confidence in Every Step
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-500 leading-relaxed md:text-[1vw] animate-fadeUp "
            uk-scrollspy-class="uk-animation-slide-bottom-medium">
              Our camp philosophy ensures that every experience is exciting,
              engaging, and safe. We combine the thrill of outdoor exploration
              with a secure, well-managed environment where campers can grow,
              connect, and enjoy every moment.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4 animate-fadeUp "
            uk-scrollspy-class="uk-animation-slide-bottom-medium">
              {[
                "Community built on trust and respect",
                "Shared responsibility for a safe environment",
                "Zero tolerance for discrimination or abuse",
                "Staff trained and supervised around the clock",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 text-[#cbca7b]">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-[#cbca7b]-600 text-[1.2vw]"
                    />
                  </div>
                  <span className="text-gray-500 text-sm md:text-[1vw]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Vision & Mission Cards Container */}
            <div className="mt-3 md:mt-0 bg-gray-50 rounded-3xl md:p-[2vw] p-6 flex flex-col md:flex-row gap-6"
            uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;">
              {/* Card 1: Vision */}
              <div className="bg-white p-6 rounded-2xl shadow-sm flex-1"
              uk-scrollspy-class="uk-animation-slide-bottom-medium">
                <div className="flex flex-row justify-start items-center mb-[2vh]">
                  <div className="w-12 h-12 md:w-[3vw] md:h-[6vh] bg-primary hover:bg-black hover:text-white transition-all duration-300 ease-in-out  rounded-full flex items-center justify-center text-gray-800">
                    {/* SVG Icon from your design */}
                    <svg
                      width="2vw"
                      height="3vh"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>
                  </div>
                  <div className="font-bold text-gray-900 text-md md:text-[1vw] ml-2 mb-2">
                    Camp Protection
                  </div>
                </div>

                <p className="text-sm md:text-[0.8vw] text-gray-500! leading-relaxed mb-1!">
                  Comprehensive measures ensure every camper is safe, including
                  trained staff, strict supervision, and clear emergency
                  protocols throughout their stay.
                </p>
              </div>

              {/* Card 2: Mission */}
              <div className="bg-white p-6 rounded-2xl shadow-sm flex-1"
              uk-scrollspy-class="uk-animation-slide-bottom-medium">
                <div className="flex flex-row justify-start items-center mb-[2vh]">
                  <div className="w-12 h-12 md:w-[3vw] md:h-[6vh] bg-primary hover:bg-black hover:text-white transition-all duration-300 ease-in-out rounded-full flex items-center justify-center text-gray-800 ">
                    <svg
                      width="2vw"
                      height="3vh"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>
                  </div>
                  <div className="font-bold text-gray-900 text-md md:text-[1vw] ml-2 md:ml-[1vw] mb-2 md:mb-[1vh]">
                    Peace of Mind
                  </div>
                </div>

                <p className="text-sm md:text-[0.8vw] text-gray-500! leading-relaxed mb-1!">
                  Parents and campers can feel confident knowing that safety,
                  well-being, and support are prioritized at all times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
          className="uk-h5 uk-margin-small uk-text-center font-['Raleway'] text-[1.5vw] md:text-[1.2vw] "
          uk-scrollspy-class="uk-animation-slide-top-medium"
        >
          Go and Grow Camp
        </div>
        <div
          className=" uk-margin-small uk-text-center font-['Raleway'] text-md md:text-[1.5vw] leading-tight font-semibold"
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
            {philosophyCards.map((card, idx) => (
              <div key={idx}>
                {/* --- BẮT ĐẦU CARD --- */}
                <div className="el-item uk-card uk-card-default uk-card-body flex! flex-col! h-full!"
                uk-scrollspy-class="uk-animation-slide-bottom-medium">
                  {/* Header: Quote & Stars */}
                  <div className="flex justify-between items-start mb-6">
                    <Quote
                      size={30}
                      className="text-gray-200 fill-gray-200 rotate-180 transform -translate-x-2 -translate-y-2"
                    />
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className="text-[#cbca7b] fill-[#cbca7b]"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Title */}
                  <div
                    className="text-center font-['Raleway'] text-lg md:text-[1.5vw] text-black leading-tight font-semibold"
                  >
                    {card.title}
                  </div>

                  {/* Content / Description */}
                  <div className="el-content uk-panel uk-margin-top">
                    <p
                      className="font-['Raleway'] text-xs md:text-[1vw] leading-relaxed mb-3! md:mb-[3vh]!"
                    >
                      {card.description}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-gray-300 mb-6 mt-auto"></div>

                  {/* Footer: Avatar & Info - stick to bottom */}
                  <div className="flex items-center gap-4 md:gap-[1vw] mb-0">
                    <div className="w-12 h-12 md:w-[3vw] md:h-[3vw] rounded-full overflow-hidden shrink-0">
                      <img
                        src={card.avatar}
                        alt={card.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-md md:text-[1.2vw] text-gray-900 font-['Raleway'] text-left">
                        {card.name}
                      </span>
                      <span className="text-gray-500 text-lg md:text-[1vw] font-['Raleway'] text-left">
                        {card.role}
                      </span>
                    </div>
                  </div>
                </div>
                {/* --- KẾT THÚC CARD --- */}
              </div>
            ))}
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
                className="uk-h5 uk-margin-small uk-text-center font-['Raleway'] text-[1.5vw] md:text-[1.2vw]"
                uk-scrollspy-class="uk-animation-slide-top-medium"
              >
                Go and Grow Camp
              </div>
              <div
                className="uk-margin-small uk-text-center font-['Raleway'] text-md md:text-[1.5vw] leading-tight font-semibold "
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
                  {securityCards.map((card, idx) => (
                    <div key={idx}>
                      <div className="el-item uk-card uk-card-default uk-card-body flex! flex-col! h-full!"
                      uk-scrollspy-class="uk-animation-slide-bottom-medium">
                        {/* Header: Quote Icon & Stars */}
                        <div className="flex justify-between items-start mb-6">
                          <Quote
                            size={30}
                            className="text-gray-200 fill-gray-200 rotate-180 transform -translate-x-2 -translate-y-2"
                          />
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, index) => (
                              <Star
                                key={index}
                                size={20}
                                className="text-[#cbca7b] fill-[#cbca7b]"
                              />
                            ))}
                          </div>
                        </div>
                        <div
                          className="text-center font-['Raleway'] text-[2vw] md:text-[1.5vw] text-black leading-tight font-semibold max-[991px]:text-[5vw]"
                        >
                          {card.title}
                        </div>
                        <div className="flex flex-col gap-[2vh] justify-between">

                        </div>
                        <div className="el-content uk-panel uk-margin-top">
                          <p
                            className="font-['Raleway'] text-xs md:text-[1vw] leading-relaxed mb-3! md:mb-[3vh]!"
                          >
                            {card.description}
                          </p>
                        </div>
                        {/* Divider */}
                  <div className="w-full h-px bg-gray-300 mb-6 mt-auto"></div>

                  {/* Footer: Avatar & Info - stick to bottom */}
                  <div className="flex items-center gap-4 md:gap-[1vw] mb-0">
                    <div className="w-12 h-12 md:w-[3vw] md:h-[3vw] rounded-full overflow-hidden shrink-0">
                      <img
                        src={card.avatar}
                        alt={card.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-md md:text-[1.2vw] text-gray-900 font-['Raleway'] text-left">
                        {card.name}
                      </span>
                      <span className="text-gray-500 text-lg md:text-[1vw] font-['Raleway'] text-left">
                        {card.role}
                      </span>
                    </div>
                  </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="uk-panel uk-margin" uk-scrollspy-class="">
                <p className="text-center!"></p>
                <p
                  className="font-['Raleway'] text-md md:text-[1.2vw] leading-relaxed text-center!"
                >
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
