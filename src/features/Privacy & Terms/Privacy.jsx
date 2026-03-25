import React from "react";
import {
  data,
  data1,
  data2,
  data3,
  data4,
  data5,
  data6,
  data7,
  data8,
  data9,
  data10,
  data11,
  links
} from "./data";

const Privacy = () => {
  return (
    <div className="px-8 md:px-20 pt-15 text-justify">
      <div>
        <h2 className="mt-10 text-3xl font-bold text-gray-800">Introduction</h2>
        <p className="text-lg font-bold mt-4 leading-8">
          PROCURIFY INTERNATIONAL TRADING LIMITED (“PROCURIFY”, “we” “our” “us
          <span className="font-normal">
            {" "}
            is committed to protecting your privacy and ensuring the security of
            the information you share with us. This Privacy Policy explains how
            we collect, use, disclose and safeguard the information we obtain
            from you in relation to your use of our website, or any other
            products and services we provide (collectively, the “
            <strong>Services</strong>”).
          </span>
        </p>
        <p className="text-lg mt-4 leading-8">
          This Policy applies to all users of the PROCURIFY platform, including
          individuals and businesses that access or use the Services as
          importers, merchants, suppliers, logistics partners, or other
          authorised users. It governs your use of all websites, tools,
          features, and technologies through which PROCURIFY facilitates
          local-currency payments, cross-border settlement, logistics
          coordination, transaction management, and related digital
          interactions.
        </p>
        <p className="text-lg mt-4 leading-8">
          By accessing or using our Services, you acknowledge that you have read
          and understood this Privacy Policy and consent to the collection and
          processing of your personal data in accordance with its terms.
        </p>
        <p className="text-lg mt-4 leading-8">
          Our Services are not directed at persons under 18 years of age. We do
          not knowingly collect personal data from children under 18. If you are
          a parent or legal guardian and become aware that a minor has provided
          us with personal data without your consent, please contact us
          immediately using the details provided in this Policy.
        </p>
        <p className="text-lg mt-4 leading-8">
          This Privacy Policy is issued pursuant to the{" "}
          <strong>
            {" "}
            Nigeria Data Protection Regulations and Nigeria Data Protection Act
            (NDPA) 2023{" "}
          </strong>{" "}
          and other applicable data protection and privacy regulations.
        </p>
      </div>
      <div>
        <div className="ml-2 md:ml-10">
          <div>
            <h2 className="mt-10 text-2xl font-bold text-gray-800">
              1. Information We Collect
            </h2>
            <p className="text-lg mt-4 leading-8">
              When you access or use the PROCURIFY website, mobile application,
              or any of our services, we collect certain categories of
              information to enable user onboarding, identity verification,
              payment facilitation, foreign exchange settlement, logistics
              coordination, transaction management, and customer support.
            </p>
          </div>
          <div>
            <h2 className="mt-4 text-2xl font-bold text-gray-800">
              1.1 Information You Provide to Us
            </h2>
            <p className="text-lg  mt-2 leading-8">
              This includes information you voluntarily provide when creating an
              account, initiating transactions, engaging suppliers, coordinating
              shipments, or contacting support, including:
            </p>
            <ul className="mt-4 list-disc list-outside ml-5 md:ml-12 space-y-3">
              {data.map((bullet, index) => (
                <li
                  key={index}
                  className="text-lg text-gray-700 leading-relaxed"
                >
                  {bullet}
                </li>
              ))}
            </ul>
            <p className="text-lg mt-4 leading-8">
              Where required to comply with applicable laws, regulations, or
              risk management obligations, we may request additional identity,
              business, or compliance-related information, including information
              required for know-your-customer (KYC), know-your- business (KYB),
              anti-money laundering (AML), and sanctions screening purposes.
            </p>
            <div>
              <h2 className="mt-10 text-2xl font-bold text-gray-800">
                1.2 Information We Collect Automatically
              </h2>
              <p className="text-lg mt-4 leading-8">
                When you access or use the Platform, we automatically collect
                certain technical, usage, and behavioural information,
                including:
              </p>
              <ul className="mt-4 list-disc list-outside ml-5 md:ml-12 space-y-3">
                {data1.map((bullet, index) => (
                  <li
                    key={index}
                    className="text-lg text-gray-700 leading-relaxed"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
              <p className="text-lg mt-4 leading-8">
                This information is used to operate, maintain, secure, and
                improve the Platform, prevent fraud, and enhance user
                experience.
              </p>
            </div>
            <div>
              <h2 className="mt-10 text-2xl font-bold text-gray-800">
                1.3 Information We Obtain from Third Parties
              </h2>
              <p className="text-lg mt-4 leading-8">
                We may obtain information about you from trusted third parties
                where necessary to provide our Services or comply with legal
                obligations, including:
              </p>
              <ul className="mt-4 list-disc list-outside ml-5 md:ml-12 space-y-3">
                {data2.map((bullet, index) => (
                  <li
                    key={index}
                    className="text-lg text-gray-700 leading-relaxed"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
              <p className="text-lg mt-4 leading-8">
                We do not disclose your personal information to unrelated third
                parties without your consent, except where disclosure is
                necessary to provide our Services, comply with legal or
                regulatory requirements, enforce our agreements, or protect the
                rights, safety, and integrity of PROCURIFY and its users.
              </p>
              <p className="text-lg mt-4 leading-8">
                Cross-Border Data Transfers PROCURIFY may store or process
                personal data using secure third-party servers or service
                providers located outside Nigeria. Where personal data is
                transferred across borders, we take reasonable steps to ensure
                that such transfers comply with applicable data protection laws,
                including the Nigeria Data Protection Act (NDPA) 2023, and that
                appropriate safeguards are in place to protect your information.
              </p>
            </div>
            <div>
              <h2 className="mt-10 text-2xl font-bold text-gray-800">
                2. Why We Collect Your Information
              </h2>
              <p className="text-lg mt-4 leading-8">
                We collect and process your information to provide secure,
                efficient, and reliable access to PROCURIFY’s trade
                facilitation, payment, and logistics services. Specifically, we
                use your information to:
              </p>
              <ul className="mt-4 list-[lower-alpha] list-outside ml-5 md:ml-12 space-y-3">
                {data3.map((bullet, index) => (
                  <li
                    key={index}
                    className="text-lg text-gray-700 leading-relaxed"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mt-10 text-2xl font-bold text-gray-800">
                3. Sharing Your Information with Third Parties
              </h2>
              <p className="text-lg mt-4 leading-8">
                We may share your information with trusted third parties where
                necessary to provide the Services, fulfil your requests, comply
                with legal obligations, or operate the Platform effectively. You
                agree that we may share your information with:
              </p>
              <ul className="mt-4 list-[lower-alpha] list-outside ml-5 md:ml-12 space-y-3">
                {data4.map((bullet, index) => (
                  <li
                    key={index}
                    className="text-lg text-gray-700 leading-relaxed"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
              <p className="text-lg mt-4 leading-8">
                We only share personal information with third parties that are
                subject to appropriate confidentiality and data protection
                obligations and only for the purposes described in this Policy.
              </p>
            </div>
            <div>
              <h2 className="mt-10 text-2xl font-bold text-gray-800">
                4. Cookies and Tracking Technologies
              </h2>
              <p className="text-lg mt-4 leading-8">
                We use cookies and similar technologies to enhance your
                experience on the PROCURIFY Platform, improve security, remember
                preferences, analyse usage patterns, and support our operational
                and marketing activities.
              </p>
              <p className="text-lg mt-4 leading-8">Cookies help us to:</p>
              <ul className="mt-4 list-disc list-outside ml-5 md:ml-12 space-y-3">
                {data5.map((bullet, index) => (
                  <li
                    key={index}
                    className="text-lg text-gray-700 leading-relaxed"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
              <p className="text-lg mt-4 leading-8">
                Cookies do not store personal information in plain text; they
                contain unique identifiers used to enhance functionality and
                security.
              </p>
            </div>
            <div>
              <h2 className="mt-10 text-2xl font-bold text-gray-800">
                5. Types of Cookies We Use
              </h2>
              <ul className="mt-4 list-[lower-roman] list-outside ml-5 md:ml-12 space-y-3">
                {data6.map((bullet, index) => (
                  <li
                    key={index}
                    className="text-lg text-gray-700 leading-relaxed"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mt-10 text-2xl font-bold text-gray-800">
                6. Your choices
              </h2>
              <p className="text-lg mt-4 leading-8">
                You may decline or delete cookies through your browser settings.
                Note that disabling essential cookies may affect your ability to
                use core features of our platform.
              </p>
              <ul className="mt-4 ml-5 md:ml-12 space-y-3">
                {links.map((link, index) => (
                  <li
                    key={index}
                    className="text-lg text-gray-700 leading-relaxed"
                  >
                    <p>{link.text}</p>
                    <a
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline break-all"
                    >
                      {link.link}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="text-lg mt-4 leading-8">
                For any other web browser, please visit your web browser&#39;s
                official web pages.
              </p>
            </div>
            <div>
              <h2 className="mt-10 text-2xl font-bold text-gray-800">
                7. Governing principles of data processing
              </h2>
              <p className="text-lg mt-4 leading-8">
                We process your information in accordance with the provisions of
                the Nigeria Data Protection Act 2023 and all other applicable
                legislation relating to privacy or data protection in Nigeria
                (the Regulations). These principles:
              </p>
              <ul className="mt-4 list-[lower-alpha] list-outside ml-5 md:ml-12 space-y-3">
                {data7.map((bullet, index) => (
                  <li
                    key={index}
                    className="text-lg text-gray-700 leading-relaxed"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mt-10 text-2xl font-bold text-gray-800">
                8. How we safeguard your information
              </h2>
              <p className="text-lg mt-4 leading-8">
                We have put in place various security procedures as set out in
                this policy.
              </p>
              <ul className="mt-4 list-[lower-alpha] list-outside ml-5 md:ml-12 space-y-3">
                {data8.map((bullet, index) => (
                  <li
                    key={index}
                    className="text-lg text-gray-700 leading-relaxed"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
              <p className="text-lg mt-4 leading-8">
                In addition to the security measures we employ, you must also
                ensure that you take responsibility for the protection of your
                personal information. We will not be liable for any loss or
                damage caused by the activities of hackers when we have taken
                all necessary and reasonable steps to protect your information
                in our possession. You are also responsible for safeguarding
                your account.
              </p>
            </div>
            <div>
              <h2 className="mt-10 text-2xl font-bold text-gray-800">
                9. Links to third party websites
              </h2>
              <p className="text-lg mt-4 leading-8">
                Our platform may contain links to third-party websites. We are
                not responsible for the privacy practices or content of such
                third parties, and encourage you to review their privacy
                policies.
              </p>
            </div>
            <div>
              <h2 className="mt-10 text-2xl font-bold text-gray-800">
                10. Your privacy rights
              </h2>
              <p className="text-lg mt-4 leading-8">
                By providing us with your personal information, you have certain
                rights in accordance with the provisions of the Regulations
                which include:
              </p>
              <ul className="mt-4 list-[lower-alpha] list-outside ml-5 md:ml-12 space-y-3">
                {data9.map((bullet, index) => (
                  <li
                    key={index}
                    className="text-lg text-gray-700 leading-relaxed"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
              <p className="text-lg mt-4 leading-8">
                To exercise any of the rights listed here, please contact us
                through the details provided below.
              </p>
              <p className="text-lg mt-4 leading-8">
                We will respond to all data subject requests within 30 days in
                line with NDPR timelines.
              </p>
              <p className="text-lg mt-4 leading-8">
                You have the right to opt-out of receiving the informative
                materials we send to our users by clicking the “Unsubscribe”
                button found at the bottom of such emails. You also have the
                right to decline to provide your personal Information when it is
                requested, however, certain services or all the services may be
                unavailable to you. You may exercise these rights by contacting
                our Data Protection Officer (see Clause 11)
              </p>
            </div>
            <div>
              <h2 className="mt-10 text-2xl font-bold text-gray-800">
                11. Cross-Border Data Transfer
              </h2>
              <p className="text-lg mt-4 leading-8">
                PROCURIFY may utilise secure third-party servers located in
                jurisdictions outside Nigeria. When this occurs, we ensure that
                such jurisdictions provide a level of data protection that meets
                or exceeds the requirements of the Nigeria Data Protection Act
                (NDPA) 2023. We will take reasonable steps to ensure your data
                is transferred and stored safely and lawfully.
              </p>
            </div>
            <div>
              <h2 className="mt-10 text-2xl font-bold text-gray-800">
                12. Data Retention period
              </h2>
              <p className="text-lg mt-4 leading-8">
                We retain your personal information only for as long as
                necessary to provide our services, fulfil contractual
                obligations, comply with legal and regulatory requirements,
                resolve disputes, prevent fraud, and enforce our agreements.
              </p>
              <p className="text-lg mt-4 leading-8">
                PROCURIFY may retain certain data after you close your account
                where necessary to:
              </p>
              <ul className="mt-4 list-disc list-outside ml-5 md:ml-12 space-y-3">
                {data10.map((bullet, index) => (
                  <li
                    key={index}
                    className="text-lg text-gray-700 leading-relaxed"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
              <p className="text-lg mt-4 leading-8">
                At the end of the retention period, your data will be securely
                deleted, anonymised, or archived in accordance with applicable
                laws.
              </p>
              <p className="text-lg mt-4 leading-8">
                We conduct regular reviews to ensure data retained remains
                accurate, relevant, and necessary.
              </p>
              <p className="text-lg mt-4 leading-8">
                Your data may be stored for longer if:
              </p>
              <ul className="mt-4 list-decimal list-outside ml-5 md:ml-12 space-y-3">
                {data11.map((bullet, index) => (
                  <li
                    key={index}
                    className="text-lg text-gray-700 leading-relaxed"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mt-10 text-2xl font-bold text-gray-800">
                13. Contact details
              </h2>
              <p className="text-lg mt-4 leading-8">
                If you have any question, request or complaints, or you require
                further information not already provided in this Privacy Policy,
                please contact our Data Protection Officer (DPO) by sending an
                email to insert email.
              </p>
              <p className="text-lg mt-4 leading-8">
                We maintain a data breach procedure in order to deal with
                incidents concerning personal information or practices leading
                to the accidental or unlawful destruction, loss, alteration,
                unauthorised disclosure of, or access to, personal information
                transmitted, stored or otherwise processed. You may contact our
                DPO upon becoming aware of any breach of personal information or
                if your access credentials have been compromised, to enable us
                to take the necessary steps towards ensuring the security of
                your personal information or account.
              </p>
            </div>
            <div>
              <h2 className="mt-10 text-2xl font-bold text-gray-800">
                14. Updates to this policy
              </h2>
              <p className="text-lg mt-4 leading-8">
                We may update this Privacy Policy from time to time. Where
                material changes are made, we will notify you by email, app
                notification, or website notice before such changes take effect.
              </p>
            </div>
            <h2 className="mt-10 text-2xl font-bold text-gray-800">
              Last updated: February 2026
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
