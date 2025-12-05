"use client";
import { HeroSection } from "@/components/layouts";
import { useEffect } from "react"; 

// Dữ liệu cho FAQ
const generalInformationCards = [
  {
    title: "What are FAQ?",
    description: `FAQ are the initials for "Frequently Asked Questions".

The FAQ have been compiled by us over a long period of time and are intended to help give a general overview of our camps and clarify questions that arise before booking a camp.`
  },
  {
    title: "General booking process",
    description: `Once the booking has been confirmed by us, you will receive an e-mail requesting a deposit. As soon as we have received this, you will receive an e-mail with a payment confirmation.
Please have a look at the welcome package, which will reach you by e-mail with the Last Travel Information. This contains information that applies to the camp you have booked.

Step 1: Registration
Step 2: Receipt of registration confirmation, total invoice and deposit request (e-mail)
Step 3: Deposit of USD 50 (due within 7 days after booking)
Step 4: Receiving an email with the latest important travel information, a packing list, addresses and important emergency phone numbers plus remaining payment request about 3-4 weeks before the camp starts.`
  },
  {
    title: "Terms & Conditions",
    description: `Our Terms & Conditions can be found in our official documents section.`
  },
  {
    title: "Where can I find a packing guide for Camps?",
    description: `Just click here to download our packing list.`
  },
  {
    title: "Where can I find contact information from Camps and addresses?",
    description: `Here you can find all the necessary information if you want to drive to our camps or send something. If you want to send something please ALWAYS include the full name of your child on the letter/package and please only send it at the time when your kids are staying in camp as we cannot store it for a longer period of time.

Walsrode/Lüneburger Heide - Germany:
Camp Adventure, Vethem 58, 29664 Walsrode, Germany
walsrode@campadventure.de

Regen/Bavarian Forest - Germany:
Camp Adventure, Badstrasse 18, 94209 Regen
regen@campadventure.de

Barcelona - Spain:
BISC International Sailing Center, c/o Camp Adventure, Parc del Fòrum Sota plaça fotovoltàica, 08930 Sant Adrià de Besòs, Barcelona, Spain
barcelona@campadventure.de

Bath - England:
University of Bath, c/o Camp Adventure, Claverton Down, Bath BA2 7AY, England
england@campadventure.de

Rossall - England:
Rossall School, Broadway, Fleetwood, Lancashire FY7 8JW, England
england@campadventure.de`
  },
];

const campsCards = [
  {
    title: "Where do kids and camp counselors come from?",
    description: `Camp Adventure attaches great importance to internationality. The participants and supervisors in our camps come from many different countries. Last year, for example, we had participants from over 60 different countries and counselors from 25 different nations. Of course, we don't know where they will come from this year. So we are at least as excited as you are.

Through our office in Hamburg and our branch office in Canada, we reach motivated and committed counselors from all over the world. Canadian and Australian teamers can therefore be found as well as German or Spanish teamers.

Due to the different experiences and cultural backgrounds an indescribably fantastic, international atmosphere is created.`
  },
  {
    title: "Which languages are spoken in camp?",
    description: `The main language in all our camps is English. In addition, there is the language of the country in which the camp takes place. As we have our headquarters in Germany, German teamers are always present in all camps in Germany. All announcements and explanations are here therefore always in German and English. Of course, all our teamers with their different nationalities are also available for individual translations.`
  },
  {
    title: "Are there problems if children have low language skills?",
    description: `No, because there are usually more participants and team members who speak the same language. We know from experience that children are excellent at communicating nonverbally. They often need a few days to warm up to it, but are then very open to other children as well.`
  },
  {
    title: "Are girls and boys separated?",
    description: `Girls and boys are accommodated separately in the dormitories/tents. The program is completely mixed.`
  },
  {
    title: "How big are the camps? How high is the caregiver ratio?",
    description: `Capacities range from around 30 participants in smaller language camps to a maximum of about 400 children in our camp Lueneburger Heide. However, the maximum capacity is not reached every week. However, a minimum number of participants must be guaranteed in order to run the camp.

It is important to us that all children are always grouped in small groups of 5-8, with a counselor as a contact person. This way homesickness doesn't stand a chance and despite the size of the camp in their group family, they experience a strong bond on which they can count on!`
  },
  {
    title: "Should 12-year-olds go to Junior Camp or Senior Camp?",
    description: `This question is not easy to answer and depends on the individual stage of development of your child. Therefore, as parents, we leave you the opportunity to decide for yourself. In the Junior Camp they belong to the older ones and can explore a lot in a playful way. In the Senior Camp they are the younger ones, who have role models through the older ones, whom they can emulate.`
  },
];

const campRoutineCards = [
  {
    title: "How is the choice of activities/courses in the camps made?",
    description: `If your child would like to participate in a paid additional course (e.g. horse riding, language course, Survival etc.), this must be booked in advance when registering. In principle, no extra additional courses have to be booked. A program with a variety of activities is of course available to the participants in all camps. The various activities can be chosen by the participants on site in the respective camps. We present the offers to the participants, so that everyone gets an insight into the different courses. The children can then register in the lists of the respective courses.`
  },
  {
    title: "What is a hike?",
    description: `The hike is a 1-3 day walking tour, in which all participants of the Adventure Camp who stay 2 weeks in the camp take part. On this hike the participants will not spend the night in a tent, but either in the open air or under a self-made shelter e.g. from tarpaulins. They will of course be accompanied by their teamers. The hike is a very special experience and a highlight for all participants. For this hike the participants need sturdy shoes and a big backpack.`
  },
  {
    title: "Can I wash my clothes during the camp?",
    description: `In principle, participants should bring sufficient clothing and change of clothes for the entire camp period.

Only in the camps in Lüneburger Heide and Bayerischer Wald a laundry service will be offered for kids staying three weeks or more, which means that a laundry bag (approx. 3 kg) will be washed in the laundry centre of the next village at a price of USD 45. This service can be booked upon registration for three-week camps. Please note that the laundry will be done either after one week or after two weeks.`
  },
  {
    title: "Anti Homesick Adviser",
    description: `Dear parents

Now it's almost time: In summer your child travels for the first time with Camp Adventure. Maybe it will be the first time that he travels alone without parents or relatives. As we are getting more and more questions, we have decided to put together a small package for you parents with little tips from experts to make everything as easy as possible for you and your child. Follow our tips and your child will have a fantastic holiday, have many new experiences and make friends from all over the world! All these tips have been developed together with the International Camping Fellowship. And the more you think your child will be a "homesick candidate" - or your child even claims to be one - the more you consider the following tips.`
  },
];

const campCounselorsCards = [
  {
    title: "Who are the camp counselors?",
    description: `Every year our team is made up of an international mix. The non-profit association Camp Europe e.V. with headquarters in Hamburg and a branch office in Canada takes care of the acquisition of national and international applicants. Since we have about 50% German-speaking children, there are also German carers in every location. But many also come from other countries, such as England, Spain, Canada and Australia, to name just a few.`
  },
  {
    title: "How are the teamers trained?",
    description: `All counselors go through an extensive application process. For a successful application, not only an interesting curriculum vitae and a minimum age of 19 years are sufficient! We conduct a personal interview with each individual in which our employees get a first impression of the applicant.

Before the camp season, everyone, both the first supervisors (teamers) as well as many recomers, complete a one-week training in which they are prepared for their assignment by trained coaches. They must have a first aid certificate, which may not be older than two years, as well as an internationally flawless police clearance certificate. We know how important the teamers are for a great camp and therefore select them very conscientiously.`
  },
];

const campRulesCards = [
  {
    title: "Drugs, Alcohol & Camp?",
    description: `From our point of view an absolutely unacceptable and indiscutable combination! Due to our cooperation with the association "Keine Macht den Drogen" (No power to drugs) and our common opinion that all kinds of drugs do not belong in the hands of children & teenagers, any possession or consumption of drugs is forbidden for teenagers and children in the camp and also outside the camp.

Violations can lead to exclusion or even to criminal charges. The term "drugs" also includes cigarettes and alcohol! Through our varied activities, we offer a much better alternative! We would like to make it clear from the outset that we are also against any form of discrimination or "putting down". This is - just like violence - immediately prevented by us, in order to offer each young person a relaxed and joyful time in the camp.`
  },
  {
    title: "Should I call my kid or write an old-fashioned letter?",
    description: `We ask all parents to write to their child at least once. This is especially useful at the beginning, as it is a particularly upsetting experience for every child and every teenager when most of the participants receive a letter, but they do not.

Please note that there is NO public "camp phone" available for incoming or outgoing calls. If your child doesn't bring her/his own phone, she/he won't be able to call you. In case of any problems, we will of course contact you immediately.

If your child brings a mobile phone, we will collect it on arrival and store it with the valuables. Your child's Teamer may hand it over during the phone time after lunch. Please keep in mind: no news is good news (the location manager will contact you if it is necessary due to homesickness or illness). We kindly ask you not to call the office in Hamburg to ask about your kid's health and wellbeing, nor if you would like to know why your child hasn't called you yet. Please use our camp email service for such enquiries.

Our recommendation is the following:
We recommend not to call your child (even if he or she has a mobile phone with him or her) and not to tell him or her to call you. Telephoning can in our experience promote homesickness very strongly and your child will be cured thereby if completely immersed in camp life! At noon after lunch, if absolutely necessary, your child can pick up his or her mobile phone from the counselors until the start of next program and make phone calls. Instead, you are welcome to bring a pre-stamped and addressed envelope with you. We will then make sure that your child has enough time to write letters. Since letters and postcards often arrive late at the camps, we also offer the e-mail service. You can send your child max. ONE email per day directly to the camp, which we then print out and give to your child. There is no way for them to reply, but your child will be happy to receive a small message from home. You can find the postal and email address in the info package of the booked camp.`
  },
  {
    title: "Are there any prohibited items?",
    description: `Yes, there are. Not allowed are pocket knives with lockable blades, all weapons, lighters and matches (danger of fire in the forest!). Drugs of any kind, including alcohol and cigarettes, are also included.`
  },
];

const safetyCards = [
  {
    title: "Electronic equipment and valuables",
    description: `We recommend that you do not take an MP3 player, e-book, tablet, etc. or any valuables with you. On the one hand we do not assume any liability and on the other hand there are no possibilities to charge the devices. We are of the opinion that the camp time is a special experience for the participants if they do not have the headphones in their ears all the time or are busy with their mobile phones. Instead they have the chance to deal with other topics and they find time to dedicate themselves to the new people in the camp.`
  },
  {
    title: "How do you provide safety for the kids?",
    description: `Before our camp counselors start working with us, we check their police clearance certificates. You must be at least 19 years old to work for us as a teamer. They must also have a "First Aid Certificate", which must not be older than two years. In the camps we try to make sure that only adults from our camp or familiar faces are on the campground and that all our carers look after strangers.

We have many different camp sites. Some of them are fenced in, others are not. There are no armed guards or the like in our camps, as we believe that these conditions create a very insecure feeling. We do not have a high security zone in Germany, Northern Ireland or England, but we keep our eyes open and do everything we can to ensure that all participants have a great time.`
  },
  {
    title: "Insurance in case of illness?",
    description: `If your child should fall ill during the camp and medical help is required, he or she will of course be taken to the doctor by our carers and cared for there as well. It is therefore necessary for each participant to take their insurance card with them to the camp. We offer all participants the possibility of taking out liability, casualty & health insurance for travel abroad with us. This covers all costs in case of illness and prevents international children in particular from having to "advance" their own cash. You can find more detailed information on insurance in our documents section.`
  },
];

const accommodationCateringCards = [
  {
    title: "How's the food at the camps?",
    description: `Full board for the entire duration of the camp is of course already included in the camp price. In addition, water and fruit are available for the participants around the clock. For us it is a matter of course to provide one variant for vegetarians and one pork-free with each meal. In case of special allergies or intolerances of your children let us know in advance and we will try to find a solution.`
  },
  {
    title: "How is my child accommodated in the camp?",
    description: `In our Adventure Camp Bayerischer Wald and our Camp Lueneburger Heide, the Juniors (7-12) and the Seniors (12-16) can choose between tents and huts.

The tents are equipped with a floor and a wooden platform, up to 7 children can share one tent. The participants can make themselves comfortable with sleeping bag and sleeping mat. The wooden huts are equipped with bunk beds and can accommodate 4-8 children. At the other locations, participants will be accommodated in shared rooms in youth hostels, sports centres or boarding schools of private schools. You will find detailed information about the accommodation on the individual camp pages.`
  },
];

const transfersShuttlesCards = [
  {
    title: "Entry222222222 regulations/Travel Consent for group flights",
    description: `All parents need to fill this out and bring it to camp:

Below is a summary of the travel requirements for minors from various EU countries traveling with Camp Adventure on group flights. Please note that regulations can change, so it's essential to consult the official resources provided for the most up-to-date information.`
  },
  {
    title: "Which transfers are offered?",
    description: `The respective transfer possibilities depend on the period and venue of the camp. Check directly on the respective camp page under "Arrival & Departure Services".`
  },
  {
    title: "Where can I find the exact arrival and departure times?",
    description: `Information about the different arrival and departure times can be found on the respective camp page under "Arrival & Departure Services".`
  },
  {
    title: "How do the transfer costs come about?",
    description: `When booking a train or air trip, the indicated price includes the arrival and departure as well as the accompaniment by a supervisor.`
  },
  {
    title: "Where can I find the address/driving directions from the camp?",
    description: `You will receive the exact address and directions of the camp with the Last Travel Information about 3-4 weeks before the camp starts.`
  },
];

export default function FAQPage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

useEffect(() => {
  const style = document.createElement('style');
  style.textContent = `
    /* Ẩn dấu + mặc định của UIkit accordion */
    .custom-accordion .uk-accordion-title::before {
      display: none !important;
    }
    
    /* Hiệu ứng cho mũi tên accordion */
    .accordion-arrow {
      transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) !important;
    }
    
    /* Xoay mũi tên khi accordion mở */
    .uk-open .accordion-arrow {
      transform: rotate(45deg) !important;
    }
    
    /* Đảm bảo accordion title có đủ khoảng cách cho mũi tên */
    .custom-accordion .uk-accordion-title {
      padding-right: 40px !important;
    }
    
    /* ANIMATION HOVER CHO MŨI TÊN NAVIGATION */
    /* Hiệu ứng hover cho navigation item */
    .group:hover .nav-text {
      color: #292c3d !important; /* Màu đậm hơn khi hover */
    }
    
    /* Xoay mũi tên 22.5 độ khi hover */
    .group:hover .sidebar-arrow {
      transform: rotate(45deg) !important; /* Xoay 22.5 độ theo kim đồng hồ */
      color: #292c3d !important; /* Đổi màu mũi tên khi hover */
    }
    
    /* Hiệu ứng cho mũi tên navigation */
    .sidebar-arrow {
      transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), 
                  color 0.3s cubic-bezier(0.2, 0.8, 0.2, 1) !important;
      transform: rotate(0deg) !important; /* Trạng thái ban đầu */
    }
    
    /* Transition cho text */
    .nav-text {
      transition: color 0.3s cubic-bezier(0.2, 0.8, 0.2, 1) !important;
    }
  `;
  document.head.appendChild(style);

  return () => {
    document.head.removeChild(style);
  };
}, []);

  return (
    <>
      {/* Hero Section */}
      <HeroSection
              title={
                <>
                  Go and Grow Camp<br />
                  
                </>
              }
              backgroundImage="yootheme\cache\18\faqs_header_new.jpg"
              overlayColor="rgba(0, 0, 0, 0.35)"
              sectionClass="uk-section-secondary uk-section-overlap uk-preserve-color uk-light"
              titleClass="uk-heading-large uk-text-center !text-[5vw]"
              enableScrollspy={true}
              backgroundPosition="top-center"
              
            />

      {/* Main Content with Sidebar Navigation */}
      <div className="uk-section-default uk-section bg-[#f7f7f7]! md:h-[2xl]">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-grid-margin" uk-grid="">
            {/* Sidebar */}
            <div className="faq-sidebar uk-width-2-5@m w-full md:w-3xs!"  
              style={{
                height: "fit-content"
              }}
            >
              {/* Navigation Box */}
              <div className="uk-panel p-12 uk-background-muted uk-border-rounded mb-5"      
                  style={{backgroundColor: '#ffffff', borderRadius: '15px', color: '#808080'}}>
                <ul className="uk-nav uk-nav-default md:text-[1vw]!">
                  {[
                    { id: 'general-information',     label: 'GENERAL INFORMATION' },
                    { id: 'camps',                   label: 'CAMPS' },
                    { id: 'camp-routine',            label: 'CAMP ROUTINE' },
                    { id: 'camp-counselors',         label: 'CAMP COUNSELORS' },
                    { id: 'camp-rules',              label: 'CAMP RULES' },
                    { id: 'safety',                  label: 'SAFETY' },
                    { id: 'accommodation-catering',  label: 'ACCOMMODATION & CATERING' },
                    { id: 'transfers-shuttles',      label: 'TRANSFERS & SHUTTLES' },
                  ].map((item, index, array) => (
                    <li
                      key={item.id}
                      className="uk-margin-small-bottom group"
                      style={{
                        borderBottom: index < array.length - 1 ? '1px solid #e5e5e5' : 'none',
                      }}
                    >
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="md:text[1vw]! w-full flex justify-between items-center text-left text-[#808080] font-normal bg-transparent border-none cursor-pointer px-0 py-2 uppercase tracking-wide transition-all duration-300 hover:text-[#292c3d]">
                        <span className="nav-text uppercase font-medium" style={{ flex: 1 }}>
                          {item.label}
                        </span>
                        <div className="w-4 h-4 flex items-center justify-center shrink-0 md:w-3.5!">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="13"
                            viewBox="0 0 12 12"
                            fill="currentColor"
                            className="sidebar-arrow md:w-3.5!"
                            style={{
                              color: '#c5c322',
                            }}
                          >
                            <path d="M11.7495 0.251043C12.0842 0.585767 12.0842 1.12847 11.7495 1.4632L2.03546 11.1772C1.70074 11.512 1.15803 11.512 0.823308 11.1772C0.488585 10.8425 0.488585 10.2999 0.823308 9.96514L10.5374 0.251043C10.8721 -0.0836809 11.4148 -0.0836809 11.7495 0.251043Z" />
                            <path d="M0 0.857123C0 0.383751 0.383751 0 0.857123 0H11.1426C11.616 0 11.9997 0.383751 11.9997 0.857123V11.1426C11.9997 11.616 11.616 11.9997 11.1426 11.9997C10.6692 11.9997 10.2855 11.616 10.2855 11.1426V1.71425H0.857123C0.383751 1.71425 0 1.3305 0 0.857123Z" />
                          </svg>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Contact Box */}
              <div className="contact-box rounded-lg bg-[var(--color-primary)] text-center p-12">
                {/* Big Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-[10vw] md:w-15" viewBox="0 0 50 50" fill="currentColor">
                  <path d="M9.96387 23.2148C9.96387 22.9402 9.85433 22.6766 9.66016 22.4824C9.46597 22.2882 9.20247 22.1787 8.92773 22.1787H5.35645C4.60821 22.1787 3.89044 22.4758 3.36133 23.0049C2.83224 23.534 2.53519 24.2518 2.53516 25V30.3574C2.53519 31.1057 2.83227 31.8235 3.36133 32.3525C3.89043 32.8816 4.60823 33.1787 5.35645 33.1787H8.92773C9.20247 33.1787 9.46597 33.0692 9.66016 32.875C9.85433 32.6808 9.96387 32.4173 9.96387 32.1426V23.2148ZM11.4639 32.1426C11.4639 32.8151 11.1963 33.4609 10.7207 33.9365L10.7197 33.9355C10.2442 34.4109 9.60001 34.6787 8.92773 34.6787H5.35645C4.21037 34.6787 3.11117 34.2235 2.30078 33.4131C1.49035 32.6027 1.03519 31.5035 1.03516 30.3574V25C1.03519 23.8539 1.4904 22.7548 2.30078 21.9443C3.11116 21.1341 4.21036 20.6787 5.35645 20.6787H8.92773C9.60001 20.6787 10.2442 20.9465 10.7197 21.4219L10.7207 21.4209C11.1963 21.8965 11.4639 22.5424 11.4639 23.2148V32.1426Z" />
                  <path d="M38.5352 23.2148C38.5352 22.5425 38.8023 21.8973 39.2773 21.4219V21.4209C39.7529 20.9453 40.3988 20.6787 41.0713 20.6787H44.6426C45.7886 20.6788 46.8879 21.134 47.6982 21.9443C48.5086 22.7547 48.9638 23.854 48.9639 25V30.3574C48.9638 31.5035 48.5086 32.6028 47.6982 33.4131C46.8879 34.2235 45.7886 34.6787 44.6426 34.6787H41.0713C40.3988 34.6787 39.7529 34.4121 39.2773 33.9365V33.9355C38.8023 33.4601 38.5352 32.815 38.5352 32.1426V23.2148ZM40.0352 32.1426C40.0352 32.4172 40.1447 32.6807 40.3389 32.875C40.5331 33.0692 40.7966 33.1787 41.0713 33.1787H44.6426C45.3908 33.1787 46.1087 32.8816 46.6377 32.3525C47.1668 31.8235 47.4638 31.1057 47.4639 30.3574V25C47.4638 24.2518 47.1668 23.534 46.6377 23.0049C46.1087 22.4759 45.3908 22.1788 44.6426 22.1787H41.0713C40.7966 22.1787 40.5331 22.2882 40.3389 22.4824C40.1447 22.6767 40.0352 22.9403 40.0352 23.2148V32.1426Z" />
                  <path d="M40.3184 36.6074V33.9287C40.3184 33.5146 40.6543 33.1789 41.0684 33.1787C41.4826 33.1787 41.8184 33.5145 41.8184 33.9287V36.6074C41.8183 38.7007 40.987 40.7084 39.5068 42.1885C38.0267 43.6687 36.019 44.5 33.9258 44.5C33.5116 44.5 33.1758 44.1642 33.1758 43.75C33.1758 43.3358 33.5116 43 33.9258 43C33.5116 43 33.1758 43.3358 33.1758 43.75C33.1758 44.1642 33.5116 44.5 33.9258 44.5C36.019 44.5 38.0267 43.6687 39.5068 42.1885C40.987 40.7084 41.8183 38.7007 41.8184 36.6074Z" />
                  <path d="M33.1807 43.75C33.1805 42.7651 32.7891 41.8204 32.0928 41.124C31.3962 40.4275 30.4509 40.0361 29.4658 40.0361H24.1084C23.1235 40.0362 22.179 40.4276 21.4824 41.124C20.786 41.8204 20.3946 42.765 20.3945 43.75C20.3945 44.7351 20.7859 45.6804 21.4824 46.377C22.179 47.0733 23.1235 47.4647 24.1084 47.4648H29.4658C30.4509 47.4648 31.3962 47.0735 32.0928 46.377C32.7893 45.6804 33.1807 44.735 33.1807 43.75ZM34.6807 43.75C34.6807 45.1328 34.1312 46.4596 33.1533 47.4375C32.1755 48.4154 30.8487 48.9648 29.4658 48.9648H24.1084C22.7257 48.9647 21.3997 48.4152 20.4219 47.4375C19.444 46.4596 18.8945 45.1329 18.8945 43.75C18.8946 42.3673 19.4441 41.0413 20.4219 40.0635C21.3997 39.0857 22.7257 38.5362 24.1084 38.5361H29.4658C30.8487 38.5361 32.1755 39.0856 33.1533 40.0635C34.131 41.0412 34.6805 42.3674 34.6807 43.75Z" />
                  <path d="M40.3184 21.4287V17.8574C40.3183 13.794 38.7044 9.89673 35.8311 7.02344C32.9577 4.1502 29.0605 2.53613 24.9971 2.53613C20.9337 2.53618 17.0364 4.15017 14.1631 7.02344C11.2899 9.89674 9.67582 13.794 9.67578 17.8574V21.4287C9.67578 21.8429 9.33999 22.1787 8.92578 22.1787C8.51157 22.1787 8.17578 21.8429 8.17578 21.4287V17.8574C8.17582 13.3962 9.94803 9.11748 13.1025 5.96289C16.2571 2.80831 20.5358 1.03618 24.9971 1.03613C29.4583 1.03613 33.737 2.80835 36.8916 5.96289C40.0462 9.11749 41.8183 13.3962 41.8184 17.8574V21.4287C41.8184 21.8429 41.4826 22.1787 41.0684 22.1787C40.6543 22.1786 40.3184 21.8428 40.3184 21.4287Z" />
                  <path d="M18.8945 19.6436V14.2861C18.8945 13.8719 19.2303 13.5361 19.6445 13.5361C20.0587 13.5361 20.3945 13.8719 20.3945 14.2861V19.6436C20.3944 20.0576 20.0586 20.3936 19.6445 20.3936C19.2304 20.3936 18.8947 20.0576 18.8945 19.6436Z" />
                  <path d="M29.6055 19.6436V14.2861C29.6055 13.8719 29.9413 13.5361 30.3555 13.5361C30.7697 13.5361 31.1055 13.8719 31.1055 14.2861V19.6436C31.1053 20.0576 30.7696 20.3936 30.3555 20.3936C29.9414 20.3936 29.6056 20.0576 29.6055 19.6436Z" />
                  <path d="M18.8945 26.7861C18.8945 26.3719 19.2303 26.0361 19.6445 26.0361C20.0587 26.0361 20.3945 26.3719 20.3945 26.7861C20.3945 27.6395 20.8577 28.3145 21.7002 28.8125C22.56 29.3208 23.7586 29.5986 25.002 29.5986C26.245 29.5986 27.443 29.3206 28.3027 28.8125C29.1452 28.3145 29.6084 27.6395 29.6084 26.7861C29.6084 26.3721 29.9444 26.0364 30.3584 26.0361C30.7726 26.0361 31.1084 26.3719 31.1084 26.7861C31.1084 28.3077 30.2328 29.414 29.0664 30.1035C27.9174 30.7827 26.4371 31.0986 25.002 31.0986C23.5667 31.0986 22.0856 30.7827 20.9365 30.1035C19.7703 29.414 18.8945 28.3076 18.8945 26.7861Z" />
                </svg>
                
                <h2 className="text-[5vw]! md:text-2xl! contact-title text-[#292c3d] uk-text-left@m uk-text-left" style={{color:"black"}}>
                  <strong>Let&apos;s plan your perfect nature escape</strong>
                </h2>
                
                <div className="flex items-center justify-left gap-3 mt-4 text-[3vw] md:text-[1.5vw]" style={{color:"white"}}>
                {/* Phone icon - giữ nguyên */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="30" 
                  height="30" 
                  viewBox="0 0 30 30" 
                  fill="currentColor" 
                  color="black" 
                  className="align-bottom shrink-0"
                >
                  <path d="M8.8457 5.93115C8.84567 5.64689 8.73343 5.37413 8.53418 5.17139L5.28808 1.92432L5.208 1.85303C5.01329 1.69665 4.76943 1.61084 4.51757 1.61084C4.23001 1.61094 3.95373 1.72334 3.74804 1.92432L3.00586 2.68408L2.99609 2.69385C2.22454 3.45523 1.73864 4.45915 1.62011 5.53662C1.50186 6.61196 1.75664 7.69523 2.34179 8.60498C5.83558 13.7515 10.2803 18.1831 15.4365 21.6626C16.3449 22.2448 17.4253 22.4983 18.498 22.3804C19.5755 22.2619 20.5794 21.7759 21.3408 21.0044L21.3506 20.9946L22.1113 20.2495C22.3112 20.044 22.4238 19.7696 22.4238 19.4829C22.4238 19.1951 22.3115 18.9182 22.1103 18.7124L18.8447 15.4819C18.6423 15.284 18.3701 15.1725 18.0869 15.1724C17.8026 15.1724 17.5289 15.2837 17.3262 15.4829L16.8008 14.9487L17.3252 15.4849C16.8392 15.96 16.1865 16.226 15.5068 16.2261C14.8271 16.2261 14.1736 15.9601 13.6875 15.4849L8.53906 10.3354C8.29886 10.0975 8.1071 9.81434 7.97656 9.50244C7.84519 9.18854 7.77734 8.85152 7.77734 8.51123C7.77734 8.17096 7.84519 7.83391 7.97656 7.52002C8.10639 7.20982 8.29582 6.92801 8.53418 6.69092C8.73343 6.48815 8.8457 6.21544 8.8457 5.93115ZM10.3457 5.93115C10.3457 6.60872 10.0794 7.25939 9.60449 7.74268L9.06933 7.21729L9.5957 7.75146C9.49507 7.85069 9.41492 7.96876 9.36035 8.09912C9.30574 8.2296 9.27735 8.36979 9.27734 8.51123C9.27734 8.65268 9.30574 8.79285 9.36035 8.92334C9.41492 9.05371 9.49507 9.17177 9.5957 9.271L14.7363 14.4126L14.8174 14.4829C15.0121 14.6392 15.255 14.7261 15.5068 14.7261C15.7944 14.726 16.0707 14.6135 16.2764 14.4126C16.7595 13.9383 17.4098 13.6724 18.0869 13.6724C18.6797 13.6725 19.2515 13.8765 19.709 14.2456L19.8975 14.4136L19.8994 14.4155L23.1738 17.6558L23.1826 17.6636C23.6577 18.1496 23.9238 18.8032 23.9238 19.4829C23.9238 20.1626 23.6578 20.8153 23.1826 21.3013C23.1787 21.3052 23.1748 21.3091 23.1709 21.313L22.3994 22.0679C21.3971 23.0791 20.0776 23.7159 18.6621 23.8716C17.2422 24.0277 15.8117 23.6899 14.6113 22.9155L15.0176 22.2856L14.5986 22.9077C9.28048 19.3191 4.69701 14.7469 1.09472 9.43799C1.09146 9.43318 1.08811 9.42822 1.08496 9.42334C0.310554 8.22291 -0.0272675 6.79254 0.128903 5.37256C0.285092 3.95266 0.925676 2.62986 1.94238 1.62646L2.6875 0.86377L2.69922 0.852051C3.18519 0.376934 3.83795 0.110939 4.51757 0.11084C5.11236 0.11084 5.68662 0.314818 6.14648 0.684082L6.33691 0.852051L9.60449 4.11963C10.0794 4.6029 10.3457 5.25358 10.3457 5.93115Z" />
                </svg>

                <p className="contact-text text-black! font-bold whitespace-nowrap m-0! font-[Raleway]" >
                  +(123)-456-789
                </p>
              </div>

              <div className="flex items-center justify-left gap-3 mt-4 text-[3vw] md:text-[1.5vw]" style={{color:"white"}}>
                {/* Email icon - đã sửa để bằng kích thước với phone icon */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="30"                    
                  height="30"                   
                  viewBox="0 0 30 30"          
                  fill="currentColor" 
                  color="black"
                  className="shrink-0"        
                  style={{
                    display: 'block',          /* Đảm bảo hiển thị đúng */
                    verticalAlign: 'middle'    /* Căn giữa theo chiều dọc */
                  }}
                >
                  <path d="M28.1797 5.89258C28.1795 5.12344 27.5552 4.5 26.7861 4.5H3.21484C2.44582 4.50015 1.82242 5.12354 1.82227 5.89258V24.1074C1.82244 24.8765 2.44584 25.4999 3.21484 25.5H26.7861C27.5552 25.5 28.1795 24.8766 28.1797 24.1074V5.89258ZM29.6797 24.1074C29.6795 25.705 28.3837 27 26.7861 27H3.21484C1.61739 26.9999 0.32244 25.7049 0.322266 24.1074V5.89258C0.322418 4.29512 1.61739 3.00015 3.21484 3H26.7861C28.3837 3 29.6795 4.29504 29.6797 5.89258V24.1074Z" />
                  <path d="M28.442 5.85905C28.7571 5.5902 29.2307 5.62794 29.4996 5.94304C29.7682 6.25814 29.7306 6.73091 29.4156 6.99968L16.859 17.7145L16.8521 17.7204C16.3324 18.1532 15.6772 18.3903 15.0006 18.3903C14.3241 18.3903 13.6687 18.1531 13.149 17.7204L13.1422 17.7145L0.585535 6.99968C0.270489 6.73087 0.232848 6.25814 0.501551 5.94304C0.770361 5.62799 1.24309 5.59035 1.55819 5.85905L14.109 16.5671L14.2057 16.6413C14.4383 16.8029 14.7157 16.8903 15.0006 16.8903C15.3262 16.8903 15.6418 16.7756 15.8922 16.5671L28.442 5.85905Z" />
                </svg>

                <p className="contact-text text-black! font-bold whitespace-nowrap m-0! font-[Raleway]" >
                  hello@ggcamp.org
                </p>

                </div>
              </div>
            </div>
            
            {/* FAQ Content - Right */}
            <div className="faq-content uk-width-3-5@m w-full pl-3 max-[960px]:pl-5">
              
              {/* General Information Section */}
              <div id="general-information" className="section-container uk-section-default bg-[#f7f7f7]! pb-5">
                <div className="tm-grid-expand uk-child-width-1-1">
                  <div className="uk-width-1-1@m">
                    <h2 className="text-2xl! md:text-[2.5vw]! text-[#292c3d] font-bold! uk-text-left@m uk-text-center">
                      <strong>General Information</strong>
                    </h2>
                    
                    <div className="custom-accordion" uk-accordion="collapsible: true;">
                      {generalInformationCards.map((card, index) => (
                        <div key={index} className={`md:w-3.5xl! el-item uk-margin-bottom mb-5 bg-white rounded-lg shadow-md p-0 ${index === 0 ? 'uk-open' : ''}`}>
                          {/* Card Title */}
                          <a 
                            href="#" 
                            className="text-md! md:text-[1.5vw]! uk-accordion-title flex! justify-between items-center p-4 rounded-lg bg-white! text-[#292c3d]! no-underline relative pl-6 lg:pl-10"
                          >
                            <strong>{card.title}</strong>
                            <div className="flex-shrink-0 ml-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="13"
                                height="13"
                                viewBox="0 0 12 12"
                                fill="currentColor"
                                className="accordion-arrow md:w-3.5!"
                                style={{
                                  color: '#bebc1bff',
                                  transform: 'rotate(0deg)',
                                  transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), color 0.3s ease',
                                }}
                              >
                                <path d="M11.7495 0.251043C12.0842 0.585767 12.0842 1.12847 11.7495 1.4632L2.03546 11.1772C1.70074 11.512 1.15803 11.512 0.823308 11.1772C0.488585 10.8425 0.488585 10.2999 0.823308 9.96514L10.5374 0.251043C10.8721 -0.0836809 11.4148 -0.0836809 11.7495 0.251043Z" />
                                <path d="M0 0.857123C0 0.383751 0.383751 0 0.857123 0H11.1426C11.616 0 11.9997 0.383751 11.9997 0.857123V11.1426C11.9997 11.616 11.616 11.9997 11.1426 11.9997C10.6692 11.9997 10.2855 11.616 10.2855 11.1426V1.71425H0.857123C0.383751 1.71425 0 1.3305 0 0.857123Z" />
                              </svg>
                            </div>
                          </a>
                          
                          {/* Card Description với padding giống title */}
                          <div className="uk-accordion-content" style={{display:"flow-root", marginTop:"0.1px"}}>
                            <div className="md:text-[1.3vw] uk-panel rounded-b-lg bg-[var(--color-primary)] pl-6 lg:pl-10 pr-6 lg:pr-10 py-4 pt-7">
                              {/* Container cho nội dung với padding right giống title */}
                              <div className="pr-2 lg:pr-0 mr-">
                                <p>{card.description}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Camps Section */}
              <div id="camps" className="section-container uk-section-default bg-[#f7f7f7]! pb-5">
                <div className="uk-container uk-container-large">
                  <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
                    <div className="uk-width-1-1@m">
                      <h2 className="text-2xl! md:text-[2.5vw]! text-[#292c3d] font-bold! uk-text-left@m uk-text-center" >
                        <strong>Camps</strong>
                      </h2>

                      <div className="custom-accordion" uk-accordion="collapsible: true;">
                        {campsCards.map((card, index) => (
                          <div key={index} className={`el-item uk-margin-bottom mb-5 bg-white rounded-lg shadow-md p-0 ${index === 0 ? 'uk-open' : ''}`}>
                            <a 
                              href="#" 
                              className="text-md! md:text-[1.5vw]! uk-accordion-title flex! justify-between items-center p-4 rounded-lg bg-white! text-[#292c3d]! no-underline relative pl-6 lg:pl-10"
                            >
                              <strong>{card.title}</strong>
                              <div className="flex-shrink-0 ml-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="13"
                                  height="13"
                                  viewBox="0 0 12 12"
                                  fill="currentColor"
                                  className="accordion-arrow"
                                  style={{
                                    color: '#bebc1bff',
                                    transform: 'rotate(0deg)',
                                    transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), color 0.3s ease',
                                  }}
                                >
                                  <path d="M11.7495 0.251043C12.0842 0.585767 12.0842 1.12847 11.7495 1.4632L2.03546 11.1772C1.70074 11.512 1.15803 11.512 0.823308 11.1772C0.488585 10.8425 0.488585 10.2999 0.823308 9.96514L10.5374 0.251043C10.8721 -0.0836809 11.4148 -0.0836809 11.7495 0.251043Z" />
                                  <path d="M0 0.857123C0 0.383751 0.383751 0 0.857123 0H11.1426C11.616 0 11.9997 0.383751 11.9997 0.857123V11.1426C11.9997 11.616 11.616 11.9997 11.1426 11.9997C10.6692 11.9997 10.2855 11.616 10.2855 11.1426V1.71425H0.857123C0.383751 1.71425 0 1.3305 0 0.857123Z" />
                                </svg>
                              </div>
                            </a>
                            <div className="uk-accordion-content" style={{display:"flow-root", marginTop:"0.1px"}}>
                              <div className="md:text-[1.3vw] uk-panel rounded-b-lg bg-[var(--color-primary)] pl-6 lg:pl-10 pr-6 lg:pr-10 py-4 pt-7">
                                <p>{card.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Camp Routine Section */}
              <div id="camp-routine" className="section-container uk-section-default bg-[#f7f7f7]! pb-5">
                <div className="uk-container uk-container-large">
                  <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
                    <div className="uk-width-1-1@m">
                      <h2 className="text-2xl! md:text-[2.5vw]! text-[#292c3d] font-bold! uk-text-left@m uk-text-center" >
                        <strong>Camp Routine</strong>
                      </h2>
                    
                      <div className="custom-accordion" uk-accordion="collapsible: true;">
                        {campRoutineCards.map((card, index) => (
                          <div key={index} className={`el-item uk-margin-bottom mb-5 bg-white rounded-lg shadow-md p-0 ${index === 0 ? 'uk-open' : ''}`}>
                            <a 
                              href="#" 
                              className="text-md! md:text-[1.5vw]! uk-accordion-title flex! justify-between items-center p-4 rounded-lg bg-white! text-[#292c3d]! no-underline relative pl-6 lg:pl-10"
                            >
                              <strong>{card.title}</strong>
                              <div className="flex-shrink-0 ml-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="13"
                                  height="13"
                                  viewBox="0 0 12 12"
                                  fill="currentColor"
                                  className="accordion-arrow"
                                  style={{
                                    color: '#bebc1bff',
                                    transform: 'rotate(0deg)',
                                    transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), color 0.3s ease',
                                  }}
                                >
                                  <path d="M11.7495 0.251043C12.0842 0.585767 12.0842 1.12847 11.7495 1.4632L2.03546 11.1772C1.70074 11.512 1.15803 11.512 0.823308 11.1772C0.488585 10.8425 0.488585 10.2999 0.823308 9.96514L10.5374 0.251043C10.8721 -0.0836809 11.4148 -0.0836809 11.7495 0.251043Z" />
                                  <path d="M0 0.857123C0 0.383751 0.383751 0 0.857123 0H11.1426C11.616 0 11.9997 0.383751 11.9997 0.857123V11.1426C11.9997 11.616 11.616 11.9997 11.1426 11.9997C10.6692 11.9997 10.2855 11.616 10.2855 11.1426V1.71425H0.857123C0.383751 1.71425 0 1.3305 0 0.857123Z" />
                                </svg>
                              </div>
                            </a>
                            <div className="uk-accordion-content" style={{display:"flow-root", marginTop:"0.1px"}}>
                              <div className="md:text-[1.3vw] uk-panel rounded-b-lg bg-[var(--color-primary)] pl-6 lg:pl-10 pr-6 lg:pr-10 py-4 pt-7">
                                <p>{card.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="uk-margin mt-5">
                        <iframe
                          src="https://www.youtube.com/embed/3NtE5wSwYTo?list=PLSOedrxa1c-bxvH6uuz_oZdIfJkov66wB&disablekb=1"
                          width="100%"
                          className="border-none faq-video"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title="Anti Homesickness Adviser"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Camp Counselors Section */}
              <div id="camp-counselors" className="section-container uk-section-default bg-[#f7f7f7]! pb-5">
                <div className="uk-container uk-container-large">
                  <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
                    <div className="uk-width-1-1@m">
                      <h2 className="text-2xl! md:text-[2.5vw]! text-[#292c3d] font-bold! uk-text-left@m uk-text-center" >
                        <strong>Camp Counselors - Our Teamers</strong>
                      </h2>
                    
                      <div className="custom-accordion" uk-accordion="collapsible: true;">
                        {campCounselorsCards.map((card, index) => (
                          <div key={index} className={`el-item uk-margin-bottom mb-5 bg-white rounded-lg shadow-md p-0 ${index === 0 ? 'uk-open' : ''}`}>
                            <a 
                              href="#" 
                              className="text-md! md:text-[1.5vw]! uk-accordion-title flex! justify-between items-center p-4 rounded-lg bg-white! text-[#292c3d]! no-underline relative pl-6 lg:pl-10"
                            >
                              <strong>{card.title}</strong>
                              <div className="flex-shrink-0 ml-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="13"
                                  height="13"
                                  viewBox="0 0 12 12"
                                  fill="currentColor"
                                  className="accordion-arrow"
                                  style={{
                                    color: '#bebc1bff',
                                    transform: 'rotate(0deg)',
                                    transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), color 0.3s ease',
                                  }}
                                >
                                  <path d="M11.7495 0.251043C12.0842 0.585767 12.0842 1.12847 11.7495 1.4632L2.03546 11.1772C1.70074 11.512 1.15803 11.512 0.823308 11.1772C0.488585 10.8425 0.488585 10.2999 0.823308 9.96514L10.5374 0.251043C10.8721 -0.0836809 11.4148 -0.0836809 11.7495 0.251043Z" />
                                  <path d="M0 0.857123C0 0.383751 0.383751 0 0.857123 0H11.1426C11.616 0 11.9997 0.383751 11.9997 0.857123V11.1426C11.9997 11.616 11.616 11.9997 11.1426 11.9997C10.6692 11.9997 10.2855 11.616 10.2855 11.1426V1.71425H0.857123C0.383751 1.71425 0 1.3305 0 0.857123Z" />
                                </svg>
                              </div>
                            </a>
                            <div className="uk-accordion-content" style={{display:"flow-root", marginTop:"0.1px"}}>
                              <div className="md:text-[1.3vw] uk-panel rounded-b-lg bg-[var(--color-primary)] pl-6 lg:pl-10 pr-6 lg:pr-10 py-4 pt-7">
                                <p>{card.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Camp Rules Section */}
              <div id="camp-rules" className="section-container uk-section-default bg-[#f7f7f7]! pb-5">
                <div className="uk-container uk-container-large">
                  <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
                    <div className="uk-width-1-1@m">
                      <h2 className="text-2xl! md:text-[2.5vw]! text-[#292c3d] font-bold! uk-text-left@m uk-text-center" >
                        <strong>Camp Rules</strong>
                      </h2>
                    
                      <div className="custom-accordion" uk-accordion="collapsible: true;">
                        {campRulesCards.map((card, index) => (
                          <div key={index} className={`el-item uk-margin-bottom mb-5 bg-white rounded-lg shadow-md p-0 ${index === 0 ? 'uk-open' : ''}`}>
                            <a 
                              href="#" 
                              className="text-md! md:text-[1.5vw]! uk-accordion-title flex! justify-between items-center p-4 rounded-lg bg-white! text-[#292c3d]! no-underline relative pl-6 lg:pl-10"
                            >
                              <strong>{card.title}</strong>
                              <div className="flex-shrink-0 ml-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="13"
                                  height="13"
                                  viewBox="0 0 12 12"
                                  fill="currentColor"
                                  className="accordion-arrow"
                                  style={{
                                    color: '#bebc1bff',
                                    transform: 'rotate(0deg)',
                                    transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), color 0.3s ease',
                                  }}
                                >
                                  <path d="M11.7495 0.251043C12.0842 0.585767 12.0842 1.12847 11.7495 1.4632L2.03546 11.1772C1.70074 11.512 1.15803 11.512 0.823308 11.1772C0.488585 10.8425 0.488585 10.2999 0.823308 9.96514L10.5374 0.251043C10.8721 -0.0836809 11.4148 -0.0836809 11.7495 0.251043Z" />
                                  <path d="M0 0.857123C0 0.383751 0.383751 0 0.857123 0H11.1426C11.616 0 11.9997 0.383751 11.9997 0.857123V11.1426C11.9997 11.616 11.616 11.9997 11.1426 11.9997C10.6692 11.9997 10.2855 11.616 10.2855 11.1426V1.71425H0.857123C0.383751 1.71425 0 1.3305 0 0.857123Z" />
                                </svg>
                              </div>
                            </a>
                            <div className="uk-accordion-content" style={{display:"flow-root", marginTop:"0.1px"}}>
                              <div className="md:text-[1.3vw] uk-panel rounded-b-lg bg-[var(--color-primary)] pl-6 lg:pl-10 pr-6 lg:pr-10 py-4 pt-7">
                                <p>{card.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Safety Section */}
              <div id="safety" className="section-container uk-section-default bg-[#f7f7f7]! pb-5">
                <div className="uk-container uk-container-large">
                  <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
                    <div className="uk-width-1-1@m">
                      <h2 className="text-2xl! md:text-[2.5vw]! text-[#292c3d] font-bold! uk-text-left@m uk-text-center" >
                        <strong>Safety</strong>
                      </h2>
                  
                      <div className="custom-accordion" uk-accordion="collapsible: true;">
                        {safetyCards.map((card, index) => (
                          <div key={index} className={`el-item uk-margin-bottom mb-5 bg-white rounded-lg shadow-md p-0 ${index === 0 ? 'uk-open' : ''}`}>
                            <a 
                              href="#" 
                              className="text-md! md:text-[1.5vw]! uk-accordion-title flex! justify-between items-center p-4 rounded-lg bg-white! text-[#292c3d]! no-underline relative pl-6 lg:pl-10"
                            >
                              <strong>{card.title}</strong>
                              <div className="flex-shrink-0 ml-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="13"
                                  height="13"
                                  viewBox="0 0 12 12"
                                  fill="currentColor"
                                  className="accordion-arrow"
                                  style={{
                                    color: '#bebc1bff',
                                    transform: 'rotate(0deg)',
                                    transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), color 0.3s ease',
                                  }}
                                >
                                  <path d="M11.7495 0.251043C12.0842 0.585767 12.0842 1.12847 11.7495 1.4632L2.03546 11.1772C1.70074 11.512 1.15803 11.512 0.823308 11.1772C0.488585 10.8425 0.488585 10.2999 0.823308 9.96514L10.5374 0.251043C10.8721 -0.0836809 11.4148 -0.0836809 11.7495 0.251043Z" />
                                  <path d="M0 0.857123C0 0.383751 0.383751 0 0.857123 0H11.1426C11.616 0 11.9997 0.383751 11.9997 0.857123V11.1426C11.9997 11.616 11.616 11.9997 11.1426 11.9997C10.6692 11.9997 10.2855 11.616 10.2855 11.1426V1.71425H0.857123C0.383751 1.71425 0 1.3305 0 0.857123Z" />
                                </svg>
                              </div>
                            </a>
                            <div className="uk-accordion-content" style={{display:"flow-root", marginTop:"0.1px"}}>
                              <div className="md:text-[1.3vw] uk-panel rounded-b-lg bg-[var(--color-primary)] pl-6 lg:pl-10 pr-6 lg:pr-10 py-4 pt-7">
                                <p>{card.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accommodation & Catering Section */}
              <div id="accommodation-catering" className="section-container uk-section-default bg-[#f7f7f7]! pb-5">
                <div className="uk-container uk-container-large">
                  <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
                    <div className="uk-width-1-1@m">
                      <h2 className="text-2xl! md:text-[2.5vw]! text-[#292c3d] font-bold! uk-text-left@m uk-text-center" >
                        <strong>Accommodation & Catering</strong>
                      </h2>
                  
                      <div className="custom-accordion" uk-accordion="collapsible: true;">
                        {accommodationCateringCards.map((card, index) => (
                          <div key={index} className={`el-item uk-margin-bottom mb-5 bg-white rounded-lg shadow-md p-0 ${index === 0 ? 'uk-open' : ''}`}>
                            <a 
                              href="#" 
                              className="text-md! md:text-[1.5vw]! uk-accordion-title flex! justify-between items-center p-4 rounded-lg bg-white! text-[#292c3d]! no-underline relative pl-6 lg:pl-10"
                            >
                              <strong>{card.title}</strong>
                              <div className="flex-shrink-0 ml-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="13"
                                  height="13"
                                  viewBox="0 0 12 12"
                                  fill="currentColor"
                                  className="accordion-arrow"
                                  style={{
                                    color: '#bebc1bff',
                                    transform: 'rotate(0deg)',
                                    transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), color 0.3s ease',
                                  }}
                                >
                                  <path d="M11.7495 0.251043C12.0842 0.585767 12.0842 1.12847 11.7495 1.4632L2.03546 11.1772C1.70074 11.512 1.15803 11.512 0.823308 11.1772C0.488585 10.8425 0.488585 10.2999 0.823308 9.96514L10.5374 0.251043C10.8721 -0.0836809 11.4148 -0.0836809 11.7495 0.251043Z" />
                                  <path d="M0 0.857123C0 0.383751 0.383751 0 0.857123 0H11.1426C11.616 0 11.9997 0.383751 11.9997 0.857123V11.1426C11.9997 11.616 11.616 11.9997 11.1426 11.9997C10.6692 11.9997 10.2855 11.616 10.2855 11.1426V1.71425H0.857123C0.383751 1.71425 0 1.3305 0 0.857123Z" />
                                </svg>
                              </div>
                            </a>
                            <div className="uk-accordion-content" style={{display:"flow-root", marginTop:"0.1px"}}>
                              <div className="md:text-[1.3vw] uk-panel rounded-b-lg bg-[var(--color-primary)] pl-6 lg:pl-10 pr-6 lg:pr-10 py-4 pt-7">
                                <p>{card.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transfers & Shuttles Section */}
              <div id="transfers-shuttles" className="section-container uk-section-default bg-[#f7f7f7]! pb-5">
                <div className="uk-container uk-container-large">
                  <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
                    <div className="uk-width-1-1@m">
                      <h2 className="text-2xl! md:text-[2.5vw]! text-[#292c3d] font-bold! uk-text-left@m uk-text-center" >
                        <strong>Transfers & Shuttles</strong>
                      </h2>
                  
                      <div className="custom-accordion" uk-accordion="collapsible: true;">
                        {transfersShuttlesCards.map((card, index) => (
                          <div key={index} className={`el-item uk-margin-bottom mb-5 bg-white rounded-lg shadow-md p-0 ${index === 0 ? 'uk-open' : ''}`}>
                            <a 
                              href="#" 
                              className="text-md! md:text-[1.5vw]! uk-accordion-title flex! justify-between items-center p-4 rounded-lg bg-white! text-[#292c3d]! no-underline relative pl-6 lg:pl-10"
                            >
                              <strong>{card.title}</strong>
                              <div className="flex-shrink-0 ml-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="13"
                                  height="13"
                                  viewBox="0 0 12 12"
                                  fill="currentColor"
                                  className="accordion-arrow"
                                  style={{
                                    color: '#bebc1bff',
                                    transform: 'rotate(0deg)',
                                    transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), color 0.3s ease',
                                  }}
                                >
                                  <path d="M11.7495 0.251043C12.0842 0.585767 12.0842 1.12847 11.7495 1.4632L2.03546 11.1772C1.70074 11.512 1.15803 11.512 0.823308 11.1772C0.488585 10.8425 0.488585 10.2999 0.823308 9.96514L10.5374 0.251043C10.8721 -0.0836809 11.4148 -0.0836809 11.7495 0.251043Z" />
                                  <path d="M0 0.857123C0 0.383751 0.383751 0 0.857123 0H11.1426C11.616 0 11.9997 0.383751 11.9997 0.857123V11.1426C11.9997 11.616 11.616 11.9997 11.1426 11.9997C10.6692 11.9997 10.2855 11.616 10.2855 11.1426V1.71425H0.857123C0.383751 1.71425 0 1.3305 0 0.857123Z" />
                                </svg>
                              </div>
                            </a>
                            <div className="uk-accordion-content" style={{display:"flow-root", marginTop:"0.1px"}}>
                              <div className="md:text-[1.3vw] uk-panel rounded-b-lg bg-[var(--color-primary)] pl-6 lg:pl-10 pr-6 lg:pr-10 py-4 pt-7">
                                <p>{card.description}</p>
                              </div>
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
        </div>
      </div>
    </>
  );
}