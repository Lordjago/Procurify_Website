import React from "react";

const data = [
  "You have attained the age of 18 years.",
  "You are of sound mind and have the capacity to enter into a legally binding contract.",
  "All personal information that you provide about yourself is accurate and true to the best of your knowledge; and you have the responsibility to maintain the accuracy of the information at all times.",
  "You have carefully considered the risks involved with using the Services.",
  "Your use of the Services does not violate any applicable law or regulation.",
];

const data2 = [
  "Local Currency Payment Facilitation Services: Procurify enables African businesses to pay their existing international suppliers in local currency, while Procurify handles cross-border settlement, currency conversion, and supplier payout securely and efficiently.",
  "Logistics Management Services: Procurify coordinates international shipping from China to Africa, beginning with Nigeria and expanding to other African markets. This includes shipment booking, tracking, documentation support, and delivery coordination.",
];

const data3 = [
  "Bank Verification Number (BVN).",
  "Valid government-issued identification such as a National Identification Number (NIN), Driver’s Licence, Voter’s Card, or International Passport.",
  "Business incorporation, ownership, and authorisation documents where the Account is operated by a company or other legal entity.",
];

const data4 = [
  "You breach these Terms or any applicable policy.",
  "Your Account is reasonably suspected to be used for fraudulent, illegal, or prohibited transactions.",
  "Continued access would expose PROCURIFY or its partners to legal, regulatory, or operational risk. Nothing in this section limits PROCURIFY’s right to report suspicious activity to law enforcement, regulatory, customs, or financial authorities. Provisions which by their nature should survive termination shall survive.",
];

const data5 = [
  "Applicable law or regulation requires additional due diligence or prohibits the transaction.",
  "You have failed to comply with these Terms or any applicable policy.",
  "The transaction details are incomplete, inaccurate, or inconsistent.",
  "The transaction exceeds applicable limits.",
  "Insolvency, enforcement, or legal proceedings are initiated against you.",
  "Your Account has been restricted or suspended due to suspected fraud, sanctions, or prohibited activity.",
];

const data6 = [
  "Fraud or suspected fraudulent activity is identified.",
  "A payment partner, financial institution, or settlement network refuses or fails to settle the transaction.",
  "The transaction was not properly authorised.",
  "Reversal is required by law, regulation, court order, or regulatory authority, or is otherwise necessary to mitigate risk to PROCURIFY or its partners.",
];

const data7 = [
  "Use the Platform or Services in violation of these Terms or applicable law.",
  "Copy, reverse engineer, decompile, or attempt to derive the source code of the Platform.",
  "Use PROCURIFY’s name, trademarks, logos, or branding without prior written authorisation.",
  "Commercially exploit, sublicense, assign, or transfer any rights in the Services.",
  "Use automated tools, scraping software, or similar mechanisms to access or monitor the Platform.",
  "Interfere with, disrupt, or overload the Platform or its infrastructure.",
  "Access the Platform without authorisation or attempt to bypass security controls.",
  "Engage in illegal, fraudulent, or deceptive activities.",
  "Use the Platform for speculative foreign exchange trading, hedging, or currency arbitrage.",
];
const TermOfUse = () => {
  return (
    <div className="px-8 md:px-20 pt-15 text-justify">
      <p className="text-lg mt-4 leading-8">
        Welcome to our Terms and Conditions of Use. These terms affect your
        legal rights, endeavour to read them and treat them with utmost
        importance.
      </p>
      <div>
        <h2 className="mt-10 text-2xl font-bold text-gray-800">
          TERMS AND CONDITION
        </h2>
        <p className="text-lg mt-4 leading-8">
          By using our website withprocurify.com and all related sites and/or
          services, you agree to these Terms of Use. The website Privacy Policy
          (where applicable) are incorporated by reference into these Terms of
          Use. This Terms of Use is an agreement between you and PROCURIFY
          INTERNATIONAL TRADING LIMITED (‘The Company’). It details our
          obligations to you. It also highlights certain risks in using the
          services and you must consider such risks carefully as you will be
          bound by the provisions of this Agreement through your use of this
          website or any of our services.
        </p>
      </div>
      <div>
        <h2 className="mt-10 text-2xl font-bold text-gray-800">
          Acceptance of Terms of Use
        </h2>
        <p className="text-lg mt-4 leading-8">
          By accessing, visiting, or using the website, you accept and agree to
          be bound by the Terms. Please read carefully. Further, you shall be
          subject to any additional terms of use that apply when you use certain
          products or posted guidelines or rules applicable to our Services,
          which may be posted and modified from time to time. All such
          guidelines are hereby incorporated by reference into the Terms.
        </p>
        <p className="text-lg mt-4 leading-8">
          ANY ACCESS, USE OR PARTICIPATION IN THE SERVICES WILL CONSTITUTE
          ACCEPTANCE OF THE TERMS. IF YOU DO NOT AGREE TO THESE TERMS OF USE,
          PLEASE DO NOT USE THE SERVICES OR OUR SITE OR MOBILE APPLICATION OR
          ACCESS OUR SERVICES.
        </p>
      </div>
      <div>
        <h2 className="mt-10 text-2xl font-bold text-gray-800">
          Who May Use Our Services?
        </h2>
        <p className="text-lg mt-4 leading-8">
          You may use the Services only if you agree to form a binding contract
          with the Company and are not a person barred from receiving services
          under the laws of the applicable jurisdiction. If you are accepting
          these Terms and using the Services on behalf of a company, business,
          or organization, you represent and warrant that you are authorized to
          do so.
        </p>
      </div>
      <div>
        <h2 className="mt-10 text-2xl font-bold text-gray-800">Eligibility</h2>
        <p className="text-lg mt-4 leading-8">
          By using the Services, you represent that:
        </p>
        <ul className="mt-4 list-[lower-alpha] list-outside ml-5 md:ml-12 space-y-3">
          {data.map((bullet, index) => (
            <li key={index} className="text-lg text-gray-700 leading-relaxed">
              {bullet}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="mt-10 text-2xl font-bold text-gray-800">
          Access and Use of our Services
        </h2>
        <div>
          <p className="text-lg mt-4 leading-8 font-bold">
            a. Service Description: <br />{" "}
            <span className="font-normal">
              {" "}
              PROCURIFY INTERNATIONAL TRADING LIMITED is a cross border trade
              facilitation platform built to simplify international commerce for
              African importers, starting with imports from Asia, particularly
              China. The company provides two core services in its initial
              phase:
            </span>
          </p>
          <ul className="mt-4 list-disc list-outside ml-5 md:ml-12 space-y-3">
            {data2.map((bullet, index) => (
              <li key={index} className="text-lg text-gray-700 leading-relaxed">
                {bullet}
              </li>
            ))}
          </ul>
          <p className="text-lg mt-4 leading-8">
            Procurify also operates as a technology-enabled service provider,
            working with vetted financial and logistics partners to execute
            transactions and shipments, while maintaining a centralized platform
            for user management, transaction visibility, and customer support.
          </p>
        </div>
        <div>
          <p className="text-lg mt-4 leading-8 font-bold">
            b. User Accounts: <br />
            Account Registration <br />
            <span className="font-normal">
              To access certain features of the PROCURIFY platform, including
              payment facilitation and logistics coordination services, you may
              be required to create a user account (“Account”). During
              registration, you must provide accurate, complete, and current
              information as requested, including your legal name, business
              details (where applicable), a valid email address, and secure
              login credentials.
            </span>
          </p>
          <p className="text-lg mt-4 leading-8">
            Each Account is issued to a single individual or business entity and
            may only be used by the authorized user. You must not misrepresent
            your identity, business activities, or affiliation with any person
            or organisation, and you may not access or use another user’s
            Account for any purpose.
          </p>
          <p className="text-lg mt-4 leading-8 font-bold">
            Profile Management
            <br />
            <span className="font-normal">
              Once logged in, you may access and update certain information
              within your account profile (“Profile”), including contact details
              and login credentials. You are responsible for ensuring that all
              information associated with your Profile remains accurate and up
              to date. Where required, changes to core identification or
              business information may be subject to verification.
            </span>
          </p>
          <p className="text-lg mt-4 leading-8 font-bold">
            Identity Verification (AML/KYC/CFT) <br />
            <span className="font-normal">
              As part of PROCURIFY’s compliance with applicable anti-money
              laundering, counter-terrorist financing, foreign exchange, and
              trade regulations, you are required to undergo identity and
              business verification before initiating or completing transactions
              on the Platform.
            </span>
          </p>
          <p className="text-lg mt-4 leading-8">
            Verification information may include, without limitation:
          </p>
          <ul className="mt-4 list-disc list-outside ml-5 md:ml-12 space-y-3">
            {data3.map((bullet, index) => (
              <li key={index} className="text-lg text-gray-700 leading-relaxed">
                {bullet}
              </li>
            ))}
          </ul>
          <p className="text-lg mt-4 leading-8">
            PROCURIFY may apply transaction limits, restrict functionality, or
            suspend access to certain Services where verification is incomplete,
            pending, or unsuccessful.
          </p>
        </div>
        <div>
          <h2 className="mt-10 text-2xl font-bold text-gray-800">
            Account Security and Protection
          </h2>
          <p className="text-lg mt-4 leading-8">
            You are solely responsible for maintaining the confidentiality and
            security of your Account credentials and for all activities
            conducted through your Account. You must not share your login
            details with third parties or permit unauthorized access to your
            Account.
          </p>
          <p className="text-lg mt-4 leading-8">
            If you suspect any unauthorized access, misuse, or compromise of
            your Account, you must notify PROCURIFY immediately through its
            designated support channels. PROCURIFY shall not be liable for any
            loss arising from unauthorized use of your Account, except where
            such loss is directly attributable to PROCURIFY’s gross negligence
            or wilful misconduct. You may be held liable for losses incurred by
            PROCURIFY or its partners arising from misuse of your Account.
          </p>
        </div>
        <div>
          <h2 className="mt-10 text-2xl font-bold text-gray-800">
            Account Suspension and Termination
          </h2>
          <p className="text-lg mt-4 leading-8">
            You may terminate your Account at any time by discontinuing use of
            the Services. Upon termination, your right to access or use the
            Services will immediately cease.
          </p>
          <p className="text-lg mt-4 leading-8">
            PROCURIFY reserves the right to suspend or terminate your Account,
            without prior notice or liability, where:{" "}
          </p>
          <ul className="mt-4 list-disc list-outside ml-5 md:ml-12 space-y-3">
            {data4.map((bullet, index) => (
              <li key={index} className="text-lg text-gray-700 leading-relaxed">
                {bullet}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-lg mt-4 leading-8 font-bold">
            Use of the Platform for Payments and Settlements
            <br />
            Transaction Limits <br />
            <span className="font-normal">
              For risk management and regulatory compliance purposes, PROCURIFY
              may apply initial and ongoing limits on transaction values,
              settlement volumes, or usage frequency. Such limits may be applied
              per transaction, per day, per week, or per month, and may be
              adjusted at PROCURIFY’s discretion.
            </span>
          </p>

          <p className="text-lg mt-4 leading-8 font-bold">
            Payment Authorization and Settlement
            <br />
            <span className="font-normal">
              By initiating a transaction through the Platform, you authorize
              PROCURIFY to facilitate local-currency payments, foreign exchange
              conversion, and cross-border settlement to your designated
              suppliers through licensed financial partners. Settlement
              timelines may vary based on transaction type, verification status,
              regulatory requirements, and partner processing cycles.
            </span>
          </p>
        </div>
        <div>
          <h2 className="mt-10 text-2xl font-bold text-gray-800">
            Payment Delays, Holds, or Refusals
          </h2>
          <p className="text-lg mt-4 leading-8">
            PROCURIFY reserves the right to delay, suspend, or refuse to process
            any payment or settlement where:
          </p>
          <p className="text-lg mt-4 leading-8">
            PROCURIFY reserves the right to suspend or terminate your Account,
            without prior notice or liability, where:{" "}
          </p>
          <ul className="mt-4 list-disc list-outside ml-5 md:ml-12 space-y-3">
            {data5.map((bullet, index) => (
              <li key={index} className="text-lg text-gray-700 leading-relaxed">
                {bullet}
              </li>
            ))}
          </ul>
          <p className="text-lg mt-4 leading-8">
            Where practicable, PROCURIFY will notify you of any such action and
            provide guidance on resolution. PROCURIFY shall not be liable for
            losses arising from lawful delays or refusals made in accordance
            with this section.
          </p>
        </div>
        <div>
          <h2 className="mt-10 text-2xl font-bold text-gray-800">
            Foreign Exchange and Currency Risk
          </h2>
          <p className="text-lg mt-4 leading-8">
            PROCURIFY facilitates transactions involving currency conversion and
            cross-border settlement. Exchange rates are subject to market
            fluctuations and may differ between the time a transaction is
            initiated and the time settlement is completed.
          </p>
          <p className="text-lg mt-4 leading-8">
            Applicable exchange rates will be disclosed on the Platform at the
            time of transaction execution. You acknowledge and accept that
            transactions may be settled at prevailing market rates in freely
            convertible currency and that fluctuations may result in differences
            between quoted and settled amounts.
          </p>
          <p className="text-lg mt-4 leading-8">
            You agree not to use the Platform for speculative trading, hedging,
            or any foreign-exchange-related activity that interferes with the
            proper delivery of PROCURIFY’s Services or circumvents applicable
            foreign exchange controls.
          </p>
        </div>
        <div>
          <h2 className="mt-10 text-2xl font-bold text-gray-800">
            Payment Disputes
          </h2>
          <p className="text-lg mt-4 leading-8">
            If you believe that an unauthorised, incorrect, or otherwise
            problematic transaction has occurred in connection with your use of
            the PROCURIFY platform, you agree to notify PROCURIFY immediately to
            enable timely investigation and risk mitigation.
          </p>
          <p className="text-lg mt-4 leading-8">
            All claims relating to payments facilitated through the Platform
            must be submitted within thirty (30) days from the date of the
            relevant transaction. To the fullest extent permitted by law,
            failure to submit a claim within this period constitutes a waiver of
            such claim against PROCURIFY. Where a transaction relates to the
            purchase of goods or services from a third-party supplier,
          </p>
          <p className="text-lg mt-4 leading-8">
            PROCURIFY does not manufacture, sell, inspect, or warrant such goods
            or services. PROCURIFY’s role is limited to facilitating payment,
            foreign exchange conversion, settlement, and/or logistics
            coordination through licensed and vetted partners. Accordingly,
            PROCURIFY shall not be liable for the quality, delivery,
            performance, or conformity of goods or services supplied by third
            parties.
          </p>
          <p className="text-lg mt-4 leading-8">
            PROCURIFY may, at its discretion, assist in payment-related dispute
            resolution between users and suppliers; however, PROCURIFY has no
            obligation to intervene or resolve commercial disputes. Transaction
            reference numbers and related details will be required for all
            dispute reviews.
          </p>
        </div>
        <div>
          <h2 className="mt-10 text-2xl font-bold text-gray-800">
            Reversal of Payments
          </h2>
          <p className="text-lg mt-4 leading-8">
            Notwithstanding the foregoing, PROCURIFY reserves the right to
            reverse, suspend, or withhold funds where:
          </p>
          <ul className="mt-4 list-disc list-outside ml-5 md:ml-12 space-y-3">
            {data6.map((bullet, index) => (
              <li key={index} className="text-lg text-gray-700 leading-relaxed">
                {bullet}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mt-10 text-2xl font-bold text-gray-800">
            Intellectual Property Rights
          </h2>
          <p className="text-lg mt-4 leading-8">
            Subject to your compliance with these Terms, PROCURIFY grants you a
            limited, non-exclusive, non- transferable, non-sublicensable, and
            revocable licence to access and use the Platform solely for lawful
            purposes and in accordance with these Terms.
          </p>
          <p className="text-lg mt-4 leading-8">
            All content, software, features, designs, text, graphics, logos,
            interfaces, data, and other materials made available on or through
            the Platform are owned by or licensed to PROCURIFY and are protected
            by the laws of the Federal Republic of Nigeria and applicable
            international intellectual property laws.
          </p>
          <p className="text-lg mt-4 leading-8">
            You may not copy, reproduce, modify, distribute, transmit, display,
            or otherwise exploit any portion of the Platform or its content
            without PROCURIFY’s prior written consent, except as expressly
            permitted under these Terms.
          </p>
        </div>
        <div>
          <h2 className="mt-10 text-2xl font-bold text-gray-800">
            Prohibited Use of the Platform
          </h2>
          <p className="text-lg mt-4 leading-8">You agree that you will not:</p>

          <ul className="mt-4 list-disc list-outside ml-5 md:ml-12 space-y-3">
            {data7.map((bullet, index) => (
              <li key={index} className="text-lg text-gray-700 leading-relaxed">
                {bullet}
              </li>
            ))}
          </ul>
          <p className="text-lg mt-4 leading-8">
            PROCURIFY reserves the right to restrict or suspend accounts
            indefinitely and pursue recovery actions where prohibited conduct is
            identified.
          </p>
        </div>
        <div>
          <h2 className="mt-10 text-2xl font-bold text-gray-800">
            Third-Party Services
          </h2>
          <p className="text-lg mt-4 leading-8">
            The Platform may integrate or reference third-party services,
            including financial institutions, logistics providers, and
            technology partners (“Third-Party Services”). Such services are
            provided subject to the third parties’ own terms and conditions, and
            PROCURIFY does not control or assume responsibility for their
            operations. PROCURIFY disclaims all liability arising from the use
            of Third-Party Services, including their availability, accuracy,
            performance, or compliance.
          </p>
        </div>
        <div>
          <h2 className="mt-10 text-2xl font-bold text-gray-800">
            Disclaimer and Limitation of Liability
          </h2>
          <p className="text-lg mt-4 leading-8">
            The Platform and Services are provided on an “as-is” and
            “as-available” basis. To the maximum extent permitted by law,
            PROCURIFY disclaims all warranties, whether express or implied,
            including warranties of merchantability, fitness for a particular
            purpose, and non-infringement.
          </p>

          <p className="text-lg mt-4 leading-8">
            PROCURIFY shall not be liable for any indirect, incidental,
            consequential, special, or punitive damages, including loss of
            profits, business interruption, loss of data, or reputational harm,
            arising from your use of the Platform or Services.
          </p>
          <p className="text-lg mt-4 leading-8">
            Your sole remedy for dissatisfaction with the Services is to
            discontinue use. Where liability cannot be excluded by law,
            PROCURIFY’s liability shall be limited to the value of the affected
            transaction.
          </p>
        </div>
        <div>
          <h2 className="mt-10 text-2xl font-bold text-gray-800">
            Updates and Amendments
          </h2>
          <p className="text-lg mt-4 leading-8">
            PROCURIFY may update these Terms from time to time to reflect
            changes in law, regulation, or business operations. Updated Terms
            will be published on the Platform, and continued use constitutes
            acceptance. Users who do not agree must discontinue use
            immediately.{" "}
          </p>
        </div>
        <div>
          <h2 className="mt-10 text-2xl font-bold text-gray-800">
            Indemnification
          </h2>
          <p className="text-lg mt-4 leading-8">
            You agree to indemnify and hold harmless PROCURIFY, its affiliates,
            directors, officers, employees, agents, and partners from any
            claims, losses, liabilities, damages, and expenses arising from your
            use of the Platform or breach of these Terms.{" "}
          </p>
        </div>
        <div>
          <h2 className="mt-10 text-2xl font-bold text-gray-800">
            Governing Law
          </h2>
          <p className="text-lg mt-4 leading-8">
            These Terms shall be governed by and construed in accordance with
            the laws of the Federal Republic of Nigeria.
          </p>
        </div>
        <div>
          <h2 className="mt-10 text-2xl font-bold text-gray-800">
            Dispute Resolution
          </h2>
          <p className="text-lg mt-4 leading-8">
            We shall make an effort to settle all disputes amicably. Any dispute
            arising out of this Terms of Use, which cannot be settled, by mutual
            agreement/negotiation within 1 (one) month shall be referred to
            arbitration by a single arbitrator at the Lagos Multi-Door
            Courthouse (“LMDC”) and governed by the Arbitration and Mediation
            Act, 2023. The arbitrator shall be appointed by both parties, where
            both of us are unable to agree on the choice of an arbitrator, the
            choice of arbitration shall be referred to the LMDC. The findings of
            the arbitrator and subsequent award shall be binding on both of us.
            Each of us shall bear our respective costs in connection with the
            Arbitration. The venue for the arbitration shall be Lagos, Nigeria.
          </p>
        </div>
        <div>
          <h2 className="mt-10 text-2xl font-bold text-gray-800">
            Severability
          </h2>
          <p className="text-lg mt-4 leading-8">
            If any portion of these Terms of Use is held by any court or
            tribunal to be invalid or unenforceable, either in whole or in part,
            then that part shall be severed from these Terms of Use and shall
            not affect the validity or enforceability of any other part in this
            Terms of Use.
          </p>
        </div>
        <div>
          <h2 className="mt-10 text-2xl font-bold text-gray-800">Assignment</h2>
          <p className="text-lg mt-4 leading-8">
            This agreement is a personal agreement between the Company and you.
            As a result, you are not allowed to assign your rights under this
            agreement to a third party. On the other hand, we can and will only
            transfer any of your and our rights or obligations under the
            agreement if we reasonably think that this will not have a
            significant negative effect on your rights under these Terms or if
            we need to do so to meet any legal or regulatory requirement.
          </p>
        </div>
        <div>
          <h2 className="mt-10 text-2xl font-bold text-gray-800">Waiver</h2>
          <p className="text-lg mt-4 leading-8">
            Our failure or delay in enforcing any of our rights under these
            terms, if you have broken the agreement, does not amount to a waiver
            and will not prevent us from enforcing those or any other rights at
            a later date within the period stipulated by applicable law.
          </p>
        </div>
        <div>
          <h2 className="mt-10 text-2xl font-bold text-gray-800">
            Privacy Policy
          </h2>
          <p className="text-lg mt-4 leading-8">
            You agree to the Company’s Privacy Policy, which explains how we
            collect, use and protect the personal information you provide to us.
          </p>
        </div>
        <div>
          <h2 className="mt-10 text-2xl font-bold text-gray-800">
            End User License Agreement
          </h2>
          <p className="text-lg mt-4 leading-8">
            By accessing, downloading, installing, or using the PROCURIFY
            platform, including its website, mobile application, and related
            services, you enter into a legally binding agreement with PROCURIFY.
            PROCURIFY grants you a limited, non-exclusive, non-transferable,
            non-sublicensable, and revocable licence to use the Platform solely
            for your internal business purposes in connection with trade
            facilitation, payment processing, foreign exchange settlement, and
            logistics coordination. The Platform is licensed, not sold, and all
            rights, title, and interest in and to the Platform, including all
            intellectual property rights, remain vested in PROCURIFY and its
            licensors. Your use of the Platform constitutes your acceptance of
            this Agreement, and if you are acting on behalf of an entity, you
            represent that you have the authority to bind such entity. The
            Platform may collect and process your information in accordance with
            PROCURIFY’s Privacy Policy, and may provide access to certain
            content, features, and services, all of which are subject to these
            Terms and any applicable policies incorporated herein by reference.
          </p>

          <p className="text-lg mt-4 leading-8">
            You agree to use the Platform strictly in accordance with this
            Agreement and applicable laws, and you shall not copy, modify,
            reverse engineer, distribute, sublicense, or otherwise exploit the
            Platform or its underlying technology, nor circumvent any security
            or access controls. PROCURIFY may, at its discretion, update,
            modify, suspend, or discontinue any aspect of the Platform,
            including features, functionalities, or geographic availability, and
            may require you to install updates to continue use. The Platform may
            integrate or provide access to third-party services, including
            financial institutions and logistics providers, which are governed
            by their own terms, and PROCURIFY shall not be responsible for such
            third-party materials or services. Your continued use of the
            Platform is conditional upon compliance with this Agreement and all
            applicable PROCURIFY policies, and this licence shall terminate
            automatically upon breach, account suspension, or where continued
            access poses legal, regulatory, or operational risk to PROCURIFY.
          </p>
        </div>
        <div>
          <h2 className="mt-10 text-2xl font-bold text-gray-800">CONTACT US</h2>
          <p className="text-lg mt-4 leading-8">
            If you have any questions about these Terms, please contact us at
            withprocurify.com
          </p>
        </div>
        <h2 className="mt-10 text-2xl font-bold text-gray-800">
          Last updated: February 2026
        </h2>
      </div>
    </div>
  );
};

export default TermOfUse;
