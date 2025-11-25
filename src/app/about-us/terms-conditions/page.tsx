"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { getTemplateImageUrl } from "@/lib/assets";

export default function TermsConditionsPage() {
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
            backgroundImage: `url(${getTemplateImageUrl("yootheme/cache/fe/agb_header-fe044a83.jpeg")})`,
          }}
        >
          <div
            className="uk-position-cover"
            style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
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
                  <p>Our Terms & Conditions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Terms Content Section */}
      <div className="uk-section-default uk-section-overlap uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-grid-large uk-child-width-1-1 uk-margin-xlarge">
            <div className="uk-grid-item-match uk-flex-middle uk-width-1-1@m">
              <div className="uk-panel uk-width-1-1">
                <h1
                  className="uk-h1 uk-text-left@m uk-text-center"
                  uk-scrollspy-class=""
                >
                  Terms & Conditions
                  <br />
                  Camp Adventure e.K.
                </h1>
                <div
                  className="uk-divider-small uk-text-left@m uk-text-center"
                  uk-scrollspy-class=""
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Terms Text Section */}
      <div className="uk-section-muted uk-section-overlap uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-grid-margin">
            <div className="uk-width-1-1@m">
              <div className="uk-panel uk-margin" uk-scrollspy-class="">
                <p>
                  This is an English translation of the original and legally
                  binding German document &quot;Allgemeine Geschäftsbedingungen
                  Camp Adventure e.K.&quot;, which can be viewed at{" "}
                  <a
                    href="https://www.campadventure.de/de/infos/agb"
                    target="_self"
                  >
                    https://www.campadventure.de/de/infos/agb
                  </a>
                  . This translation is for your information only and is not
                  legally binding.
                  <br />
                  <strong>
                    <br />
                    Camp Adventure e.K. is the tour operator for individuals,
                    for camps in Germany, England and Northern Ireland.
                  </strong>
                  <br />
                  GUARANTEE: All participants are protected in accordance with
                  the legal regulations governing tour operators in Germany. As
                  per §651, any payments made towards the travel price are
                  insured against insolvency by tourVers.
                  <br />
                  <br />
                  The following terms and conditions of travel apply to package
                  travel contracts, to which the §§ 651a ff BGB regulations
                  relating to travel contracts apply. The provisions, in so far as
                  these have been effectively agreed, become part of the contract
                  formed between the traveler and tour operator. They supplement
                  and complete the legal regulations of §§ 651 a to y BGB and
                  Articles 250 und 252 EGBGB.
                  <br />
                  <br />
                  <strong>1. Conclusion of the travel contract</strong>
                  <br />
                  By registering for travel, the traveler submits a binding offer
                  to conclude the travel agreement. Registrations can be made
                  verbally, by telephone, in writing, by email or by electronic
                  means, such as the internet booking system &quot;Book a
                  Camp&quot;. The contract comes into effect once a declaration
                  of acceptance has been received. The tour operator will provide
                  the traveler with a booking confirmation in line with legal
                  requirements in a durable medium, unless the traveler is
                  entitled to a travel confirmation in paper form under Article
                  250 § 6 Paragraph 1 Clause 2 EGBG. If the registration is
                  made electronically, the contract is concluded once the
                  traveler has received confirmation from the tour operator in a
                  durable medium. If the corresponding travel confirmation is
                  displayed directly after using the &quot;place a binding
                  order&quot; button, the contract comes into effect upon display
                  of this confirmation. The traveler will receive travel
                  documents 2-3 weeks before the start of the trip. Any
                  additional agreements, arrangements and wishes must be confirmed
                  by us in writing, otherwise the services laid out in the
                  contract apply. The traveler is liable for all contractual
                  obligations of travelers that he registers, just as he is for
                  his own, provided that he has assumed this obligation through
                  an explicit and separate declaration. Should the contents of
                  the booking confirmation deviate from the content of the
                  booking, this constitutes a new offer, to which the tour
                  operator is bound for a period of 10 days. The contract takes
                  effect on the basis of this new offer, provided that the tour
                  operator has indicated the changes relating to this new offer
                  and has fulfilled his precontractual information duties and
                  that the traveler gives the tour operator express consent,
                  either through explicit declaration or deposit, within the
                  commitment period. Pursuant to the legal regulation § 312 g
                  Para. 2, Clause 1 Nr. 9 BGB and relating to all of the
                  above-mentioned booking types, no right of withdrawal exists for
                  distance contracts after contract conclusion. However,
                  withdrawal from the contract on the basis of § 651 h BGB is
                  possible at any time.
                  <br />
                  <br />
                  <strong>2. Terms of payment</strong>
                  <br />
                  Camp Adventure e.K. shall only request or accept payments
                  towards the travel price before the completion of the trip if
                  the traveler has been provided with a guarantee certificate,
                  stating the name and contact details of the credit institution,
                  in accordance with § 651 r Abs. 4 BGB. A deposit of USD 50 per
                  participant is due within one week of registration and after
                  the issue of a guarantee certificate. The outstanding balance
                  must be transferred, without specific request, no later than
                  four weeks before the start of the trip, provided that the
                  guarantee certificate has been issued and that the tour operator
                  has not exercised its right of withdrawal on the grounds
                  stated in Point 7. If, even after notification, the specified
                  deposit sum is not payed, or the travel price has not been
                  paid in full, prior to the commencement of the trip, although
                  the tour operator is ready to provide the contractual services,
                  has fulfilled all legal obligations and the client has no legal
                  or contractual right of retention, the tour operator is entitled
                  to withdraw from the travel contract after issuing a reminder
                  with a deadline and to charge cancellation fees to the
                  traveler.
                  <br />
                  <br />
                  <strong>3. Services and service modifications</strong>
                  <br />
                  a) Our services are defined in our service descriptions and
                  general program information found on the website{" "}
                  <a href="/" target="_self">
                    https://www.campadventure.de/en/
                  </a>{" "}
                  and in the information given in the travel confirmation. Any
                  additional agreements affecting the scope of the contractual
                  services must be confirmed by us in written form.
                  <br />
                  b) Luggage will be transported without any additional fee, as
                  long as it does not exceed the norms, here defined as a
                  maximum of 1 suitcase and 1 piece of hand luggage per person.
                  <br />
                  c) External services arranged by us as part of the journey are
                  not part of the initial travel contract, as long as these
                  services are clearly marked as such with the identity and
                  address of the contractual partner in the travel information
                  and travel confirmation, such that the traveler can recognize
                  that these are not part of the travel services offered by the
                  tour operator.
                  <br />
                  d) Any modifications to and deviations from the essential
                  travel services agreed upon in the travel contract that become
                  necessary after conclusion of the contract and are made in good
                  faith, are permissible as long as the modifications and
                  deviations are not substantial and do not impact the overall
                  arrangement of the booked trip.
                  <br />
                  e) The tour operator is obliged to inform the traveler of the
                  reasons for a permissible modification to the essential travel
                  service immediately, clearly, understandably and in a durable
                  medium.
                  <br />
                  f) In the event of a substantial change to an essential travel
                  service or a deviation from special provisions stipulated in
                  the contract for a traveler, the traveler is entitled to
                  withdraw from the contract or demand another journey of at
                  least equivalent value by the deadline specified at the same
                  time as the contract change. This only applies if the tour
                  operator is in a position to offer such a trip without any
                  extra cost to the traveler. The traveler is free to decide
                  whether to respond to the communication or not. The traveler is
                  obliged to exercise these rights after being notified of the
                  change. If the traveler does not respond by the specified
                  deadline or at all, the communicated changes will be understood
                  to be accepted. Any warranty claims remain unaffected, in so
                  far as the modified services are deficient.
                  <br />
                  <br />
                  <strong>4. Customer cancellation</strong>
                  <br />
                  The traveler is advised to communicate cancellation in a
                  durable medium. Should the traveler withdraw from the travel
                  contract before the start of the trip, or should he not begin
                  the trip, the tour operator may claim fair compensation,
                  provided it is not responsible for the withdrawal and that no
                  exceptional circumstances have arisen at the destination or in
                  the immediate vicinity, which have a significant effect on the
                  execution of the trip or the transportation of persons to the
                  destination. The compensation value is based on the travel
                  price less the value of the costs saved by the tour operator
                  and the sum that the tour operator is able to earn through
                  alternative use of its services. The standard rates are based
                  on the time period between the notice of cancellation and the
                  start of the trip, as well as the expected saved expenses and
                  the possible sum resulting from any other use of travel
                  services. Upon receipt of notice of cancellation, compensation
                  is calculated according to a sliding percentage scale, as
                  follows (cancellation costs per person):
                </p>
                <p>
                  cancellation up to 60 days before the beginning of the trip –
                  USD 50/100
                  <br />
                  cancellation up to 31 days before the beginning of the trip –
                  30% of travel costs, USD 50 minimum
                  <br />
                  cancellation up to 14 days before the beginning of the trip –
                  50% of travel costs, USD 50 minimum
                  <br />
                  cancellation up to 1 day before the beginning of the trip –
                  80% of travel costs, USD 50 minimum
                  <br />
                  cancellation on the day of arrival or later – 90% of travel
                  costs
                </p>
                <p>
                  <strong>Cancellation policy for school groups:</strong>
                  <br />
                  A correction of student numbers up to 10% students is free of
                  charge. Any higher alteration of numbers will lead to an extra
                  cost.
                  <br />
                  Cancellation till 60 days before start of the trip: the fee
                  will be 20% of the total price.
                  <br />
                  Cancellation till 30 days before start of the trip: the fee
                  will be 40% of the total price.
                  <br />
                  Cancellation till 14 days before start of the trip: the fee
                  will be 60% of the total price.
                  <br />
                  Cancellation till 1 day before start of the trip: the fee will
                  be 90% of the total price.
                  <br />
                  Any later cancellations till the day before the trip: the fee
                  will be 100% of the total price.
                </p>
                <p></p>
                <p>
                  In any event, it is up to the customer to demonstrate that
                  compensation owed to the tour operator is significantly lower
                  that the cancellation fee claimed. The tour operator reserves
                  the right, by way of deviation from the above charges, to
                  claim a higher, individually calculated compensation sum,
                  insofar as it can prove that significantly greater expenses
                  than the relevant flat rate were incurred. In this case, the
                  tour operator is required to calculate and prove these extra
                  costs, taking into account the costs saved by the tour operator
                  and the sum that the tour operator is able to earn through
                  alternative use of the services. Following cancellation, the
                  tour operator is obliged to issue a refund immediately, but in
                  any case within 14 days of receipt of the notice of
                  cancellation. § 651 e BGB remains unaffected by the above
                  conditions. It is recommended that travelers take out
                  cancellation insurance.
                  <br />
                  <br />
                  <strong>5. Modifications at the traveler&apos;s request</strong>
                  <br />
                  After conclusion of the contract the traveler may not change
                  travel dates, the destination, starting location, accommodation
                  or mode of transport. This does not apply if the change to the
                  booking is necessary because the tour operator provided the
                  traveler due to inadequate or false precontractual information
                  provided by the tour operator, as per Art. 250 § 3 EGBGB. In
                  this case, travel may be rebooked at no extra cost. Should the
                  traveler demand changes or rebooking after conclusion of the
                  contract, up to 32 days before departure, the tour operator is
                  entitled to charge a processing fee of USD 20, unless the tour
                  operator demonstrates that higher compensation is due, the sum
                  of which is based on the travel price minus the costs saved by
                  the tour operator and the sum that the tour operator is able to
                  earn through alternative use of its services. Requests to
                  change bookings after this period can only be honored, if at
                  all, by withdrawing from the travel contract and simultaneously
                  reregistering, as per Section 4. This does not apply to
                  requests only resulting in minor additional costs.
                  <br />
                  <br />
                  <strong>6. Disruption by the traveler</strong>
                  <br />
                  If the traveler continuously disrupts the travel program,
                  despite warnings from the tour operator, or behaves contrary to
                  the contract, such that immediate termination of the contract is
                  justified, the tour operator may cancel the travel contract
                  without notification. This also applies when the traveler does not
                  consider reasonable and well-founded instructions. In such
                  cases, the tour operator is entitled to retain the full travel
                  price, minus the costs saved by the tour operator and the sum
                  that the tour operator is able to earn through alternative use
                  of the unused service, including any sums credited to it by
                  service providers, so the daily rate can be reduced by 20% as a
                  result of savings made by services not provided. Compensation
                  claims remain unaffected. This shall not apply if such behavior
                  contrary to the terms of the contract is a result of a breach of
                  information duties on the part of the tour operator.
                  <br />
                  <br />
                  <strong>7. Minimum number of participants</strong>
                  <br />
                  If the number of participants registered for our holiday camps
                  our transfer services is less than 10-60 participants (depending
                  on the trip), the tour operator may withdraw from the travel
                  contract up to 6 weeks before the start of the trip. The tour
                  operator must have stated the minimum number of participants
                  for the relevant trip and the latest date by which the traveler
                  must be informed of cancellation in the travel information and
                  must also have clearly stated the minimum number of participants
                  and the latest possible date of withdrawal in the travel
                  confirmation. If it is evident at an earlier stage that the
                  minimum number of participants will not be reached, the tour
                  operator is obliged to inform the traveler immediately. If the
                  trip does not take place for this reason, the tour operator is
                  obliged to issue a refund of any payments made on the travel
                  price immediately and in any case within 14 days of notice of
                  withdrawal.
                  <br />
                  <br />
                  <strong>8. Warranty and remedy</strong>
                  <br />
                  Should services not be rendered according to the contract, the
                  traveler is entitled to claim legal warranty rights for a
                  reduction in the trip price, according to § 651 m BGB, provided
                  that the traveler has not failed in his contractual duties to
                  report any faults to the tour operator which may have occurred
                  during the provision of services. In the event of a defect
                  during the tour, the traveler can only remedy the defect himself
                  or, in the case of a considerable defect, as described in §
                  651 i Abs. 2 BGB, cancel the trip, according to § 651 l BGB,
                  as long as the tour operator has been given an adequate time to
                  remedy the defect. A deadline need not be defined if remedial
                  action is impossible or rejected by the tour operator or if
                  immediate remedial action or termination is justified due to
                  particular interests of the client. The traveler is obliged to
                  inform the tour operator of any defect immediately and on the
                  spot. Defects should be reported to the tour manager of the
                  tour operator, to the contact person at the contact address or
                  the tour operator directly. Should a representative of the
                  tour operator not be available or contractually obliged, the
                  tour operator must be informed of any defects relating to the
                  trip at the following address: Camp Adventure e.K., Museumstr.
                  39, 22765 Hamburg. It is recommended that such notifications
                  are made in a durable medium. In accordance with § 651 j BGB,
                  claims shall lapse two years after the final day of the trip,
                  as defined by the contract. We refer to the mutual assistance
                  clause under § 651 q BGB, according to which the traveler is
                  entitled to adequate assistance, notably through the provision
                  of appropriate information concerning healthcare services,
                  local authorities and consular assistance, as well as support
                  in establishing communication links and in the search for other
                  travel options, without delay in the event of § 651 k Para. 4
                  BGB or if the traveler faces difficulties for other reasons. §
                  651 k Para. 3 BGB remains unaffected.
                  <br />
                  <br />
                  <strong>9. Traveler&apos;s duty of cooperation</strong>
                  <br />
                  The passenger is obliged to cooperate within the framework of
                  legal regulations and to avoid or minimize potential damages. In
                  the case of travel involving minors, it is the person with the
                  supervisory role and not the tour operator, who is liable for
                  any damages that arise. A violation of regulations may result in
                  exclusion from the trip, as stipulated in Point 6 &quot;Disruption
                  by the traveler&quot;. Destruction, loss, damage or delay of
                  baggage must be communicated to the transport company
                  immediately. The transport company is required to issue written
                  confirmation. In the case of no notification, there is a
                  danger of losing the right to claims. The tour operator
                  recommends that damage or delay in delivery when travelling by
                  air is urgently and immediately reported to the relevant
                  airline on the spot by means of a property irregularity report
                  (P.I.R.). As a rule, airlines refuse to provide compensation if
                  a property irregularity report has not been completed. The
                  property irregularity report must be submitted within 7 days for
                  lost luggage and within 21 days of delivery of delayed luggage.
                  Otherwise, loss, damage or misdirection of baggage must be
                  reported to the tour operator or to the local representative of
                  the operator. This does not release the traveler from providing
                  the airline with a property irregularity report within the
                  above-mentioned periods.
                  <br />
                  <br />
                  <strong>10. Limitation of liability</strong>
                  <br />
                  The tour operator&apos;s contractual liability for damages, not
                  including damage to the body, nor damage caused by the negligence
                  of the tour operator, is limited to three times the tour price.
                  Any claims under international agreements or on legal
                  regulations based on these remain unaffected by this limitation.
                  We are not liable for service disruptions, personal injury or
                  property damage in connection with third party services that are
                  explicitly designated as such in the travel description and
                  travel confirmation, where the name and address of the contract
                  partner are given, in such a way that the traveler can clearly
                  recognize that these are not an integral part of the travel
                  services offered by the tour operator and that these are chosen
                  separately. This applies in particular to additional programs
                  over the course of the trip. §§ 651 b, 651 c, 651 w und 651 y
                  remain unaffected. The tour operator is however liable if and
                  insofar as the traveler suffers damages as a result of the
                  failure of the tour operator to fulfill its information,
                  clarification and organization obligations.
                  <br />
                  <br />
                  <strong>11. Passport, visa and health requirements</strong>
                  <br />
                  The tour operator will inform the customer of any important
                  changes to the general regulations contained in the travel
                  announcement before the start of the trip. Before conclusion of
                  the contract, the tour operator will inform the traveler of
                  visa requirements and health formalities applicable to the
                  destination country, including approximate periods for obtaining
                  the necessary visa and will inform the traveler of any changes
                  to these before the start of the trip. The tour operator shall
                  not be liable for the timely issue and acquisition of necessary
                  visas from the relevant diplomatic representation, if the
                  traveler has charged the tour operator with the procurement of
                  visas, unless the tour operator neglected its duties or is
                  responsible for the delay. The traveler is responsible for
                  compliance with all regulations important for the operation of
                  the tour. The traveler is responsible for obtaining and carrying
                  the necessary travel documents, any necessary vaccinations and
                  for adhering to customs and foreign exchange regulations. Any
                  disadvantages arising from failure to comply with these
                  regulations, including but not limited to the payment of
                  cancellation fees, shall be at the traveler&apos;s cost. This
                  does not apply if the tour operator has not provided
                  information, or if the information provided proves to be
                  insufficient or false.
                  <br />
                  <br />
                  <strong>12. Data protection</strong>
                  <br />
                  The protection of clients&apos; privacy and personal data is
                  very important to Camp Adventure. Camp Adventure collects and
                  processes data according to legal regulations. Personal data is
                  only stored when necessary for the performance of booked
                  services or to comply with legal regulations.
                  <br />
                  <br />
                  <strong>13. Place of jurisdiction</strong>
                  <br />
                  The entire legal and contractual relationship between the travel
                  operator and travelers with no general place of residence or
                  registered office in Germany shall be governed exclusively by
                  German law, on the proviso that, should the traveler have a
                  general place of residence in another country in accordance with
                  Art. 6 Para. 2 of the Rome I Regulation, they are also
                  protected by any mandatory rules of law in that country, which
                  would not otherwise apply. The traveler can take legal action
                  against the tour operator only at its registered office. Should
                  the travel operator take legal action against the traveler, the
                  domicile of the traveler is decisive, unless action is directed
                  against registered traders or persons who have changed their
                  residence or customary place of abode to a foreign country or
                  whose residence or customary place of abode is not known at the
                  time when legal action is brought. In such cases, the registered
                  office of the tour operator is decisive. With respect to the
                  law concerning consumer dispute resolution, the tour operator
                  advises that it will not take part in any voluntary dispute
                  settlement. Should the tour operator be obliged to take part in
                  a dispute settlement after the printing of these travel
                  conditions, the tour operator will inform the traveler of this
                  in appropriate form. In relation to all travel contracts
                  concluded electronically, the tour operator refers to the
                  European online dispute resolution platform{" "}
                  <a href="http://ec.europa.eu/consumers/odr/">
                    http://ec.europa.eu/consumers/odr/
                  </a>
                  .
                  <br />
                  <br />
                  <strong>14. Identity of the operating airline</strong>
                  <br />
                  Should the travel contract include transport by plane, the
                  traveler will be informed of the identity and name(s) of the
                  operating airline(s) providing all air transport services as
                  part of the booked trip. Should the identity of the airline(s)
                  be undetermined at the time of booking, the tour operator will
                  inform the traveler of the airline or airlines that are most
                  likely to operate the flight or flights and will inform the
                  traveler immediately, as soon as this is determined. The tour
                  operator must inform the traveler immediately if the airline is
                  changed. The tour operator must take all appropriate steps to
                  ensure that the customer is informed of the change as quickly as
                  possible. The list of airlines on the EU blacklist can be found
                  here:{" "}
                  <a
                    href="https://ec.europa.eu/transport/modes/air/safety/air-ban/search_en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://ec.europa.eu/transport/modes/air/safety/air-ban/search_en
                  </a>
                  <br />
                  <br />
                  <strong>15. Invalidity of individual terms</strong>
                  <br />
                  The invalidity of individual terms does not render other
                  conditions or the contract as a whole invalid. 16. VAT
                  Exemption in accordance with § 4 Nr. 23 UstG, Camp Adventure
                  e.K. is exempt from sales tax for all child and youth travel.
                  <br />
                  <br />
                  Last updated: August 2018
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

