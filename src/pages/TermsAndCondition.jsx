import React from "react";
import Footer from "@features/Home/Footer";
import Header from "@features/Privacy & Terms/Header";
import PageData from "@features/Privacy & Terms/PageData";

const pageData = [
  {
    "id": 1,
    "header": "Introduction",
    "subtext": "Welcome to Procurify, a global e-commerce platform dedicated to simplifying procurement for African businesses. By accessing or using our services, you agree to abide by the following Terms and Conditions. These terms are designed to protect both your interests and ours. Please read them carefully. If you do not agree with any part of these terms, you should refrain from using our services."
  },
  {
    "id": 2,
    "header": "Agreement to Terms",
    "subtext": "By registering, accessing, or using Procurify's platform, you confirm that you have read, understood, and agreed to be bound by these Terms and our Privacy Policy. If you disagree with any of these terms, you may not use our services."
  },
  {
    "id": 3,
    "header": "Services Provided",
    "subtext": "Procurify offers the following key services in our MVP phase: Local Currency Payment System: Helping African businesses make payments to suppliers in local currency. Logistics Management System: Ensuring smooth and reliable shipping from China to Africa, with plans to expand to other regions. We handle your shipments from start to finish, keeping you informed every step of the way. Additional features and services will be introduced in future phases, and we'll notify you of any significant updates."
  },
  {
    "id": 4,
    "header": "User Registration and Account",
    "subtext": "To use full features of Procurify, you need to create an account. You agree to provide accurate and up-to-date information during the registration process. You are responsible for safeguarding your account and password. If you suspect any unauthorized access or activity on your account, notify us immediately. Procurify is not responsible for any loss or damage resulting from your failure to comply with these obligations."
  },
  {
    "id": 5,
    "header": "Use of Services",
    "subtext": "You agree to use Procurify's platform in compliance with all applicable laws and regulations. You will not: Use the platform for illegal or unauthorized purposes. Engage in activities that disrupt or interfere with Procurify's services. Attempt to reverse-engineer, decompile, or disassemble any portion of the platform. Procurify reserves the right to suspend or terminate your account if you violate these terms."
  },
  {
    "id": 6,
    "header": "Business Type Selection",
    "subtext": "As part of your registration, you will select your business type, helping us connect you with the right suppliers. This data is used solely to improve your experience on the platform, ensuring you get the most relevant products and services. This information will be kept confidential and used in accordance with our Privacy Policy."
  },
  {
    "id": 7,
    "header": "Payment Terms",
    "subtext": "All payments made on Procurify will be processed through the Local Currency Payment System, allowing you to transact in your local currency. You agree to provide accurate payment details. Prices for products and services will be displayed in the relevant local currencies. Any applicable fees for certain services will be clearly disclosed during the transaction. Procurify is not liable for any additional fees or taxes imposed by financial institutions."
  },
  {
    "id": 8,
    "header": "Logistics and Shipping",
    "subtext": "We take full responsibility for your package from the moment it's processed until it reaches its destination. Although we partner with trusted third-party logistics providers to facilitate the shipping, Procurify is your primary point of contact for any shipping-related inquiries or issues. Shipping Updates: We will provide regular updates on your shipment's progress and immediately notify you of any delays or changes to the expected delivery timeline. Damage or Loss: We ensure that packages are well-handled throughout the shipping process. In the rare event that a shipment is delayed, damaged, or lost, we'll work with you to resolve the issue promptly."
  },
  {
    "id": 9,
    "header": "Intellectual Property",
    "subtext": "All content on Procurify, including text, images, logos, and software, is protected by intellectual property laws. You may not copy, reproduce, or distribute any content from the platform without our permission."
  },
  {
    "id": 10,
    "header": "Limitations of Liability",
    "subtext": "We are committed to providing a high-quality service. However, we make no warranties regarding the availability, reliability, or accuracy of our platform. To the extent permitted by law, Procurify will not be liable for any indirect, incidental, or consequential damages arising from the use of our platform."
  },
  {
    "id": 11,
    "header": "Indemnification",
    "subtext": "You agree to indemnify and hold Procurify harmless from any claims, damages, or losses arising from your use of the platform, violation of these Terms, or infringement of third-party rights."
  },
  {
    "id": 12,
    "header": "Confidentiality and Privacy",
    "subtext": "Your privacy is important to us. We will protect your personal and business data in accordance with our Privacy Policy. By using our platform, you consent to the collection, use, and sharing of your data as outlined in that policy."
  },
  {
    "id": 13,
    "header": "Suspension and Termination",
    "subtext": "Procurify may suspend or terminate your access to the platform if you breach these Terms or engage in activities that are harmful to our business or other users. You will be notified of any suspension or termination, and any balances owed will be settled before deactivation."
  },
  {
    "id": 14,
    "header": "Changes to Terms",
    "subtext": "Procurify may update these Terms from time to time. When changes are made, the updated Terms will be posted on this page with the date of the latest revision. We encourage you to review these Terms periodically. Continuing to use the platform after changes are made constitutes your acceptance of the revised Terms."
  },
  {
    "id": 15,
    "header": "Dispute Resolution",
    "subtext": "If a dispute arises, we encourage you to contact our support team directly to attempt a resolution. If we cannot reach a solution, any legal disputes will be governed by the laws of the Federal Republic of Nigeria and resolved through binding arbitration in Lagos, Nigeria."
  },
  {
    "id": 16,
    "header": "Governing Law",
    "subtext": "These Terms and your use of Procurify's services are governed by the laws of the Federal Republic of Nigeria."
  },
  {
    "id": 17,
    "header": "Miscellaneous",
    "subtext": "Severability: If any provision of these Terms is found to be unenforceable, the remaining provisions will still apply. Waiver: Our failure to enforce any provision of these Terms does not waive our right to do so in the future. Assignment: Procurify reserves the right to assign these Terms at any time, but you may not assign them without prior written consent."
  },
  {
    "id": 18,
    "header": "Contact Us",
    "subtext": "For questions or concerns regarding these Terms or our services, please reach out to us."
  }
]

//  [
//   {
//     id: 1,
//     header: "General legal notice",
//     subtext:
//       "This privacy policy, which applies whatever the means or the medium used to access the site procurify.com or its sub-domains and its services (hereinafter referred to as the 'Site'), describes the conditions under which, when using the Site, we collect, use, and store information about you, including your personal data, as well as your choices regarding the collection, use and disclosure of these informations. By accessing and / or using the Site, you acknowledge that you have read, understood and agree to be subject to all the terms and conditions of this document. If you do not agree with this policy, you should not use the Site and its related services and you should not disclose your personal information to us.",
//     text: "The person in charge of the privacy policy is",
//   },

//   {
//     id: 2,
//     header: "Article 1 Definitions",
//     subtext:
//       "This privacy policy, which applies whatever the means or the medium used to access the site procurify.com or its sub-domains and its services (hereinafter referred to as the 'Site'), describes the conditions under which, when using the Site, we collect, use, and store information about you, including your personal data, as well as your choices regarding the collection, use and disclosure of these informations. By accessing and / or using the Site, you acknowledge that you have read, understood and agree to be subject to all the terms and conditions of this document. If you do not agree with this policy, you should not use the Site and its related services and you should not disclose your personal information to us.",
//     text: "The person in charge of the privacy policy is",
//   },
// ];
const TermsAndCondition = () => {
  return (
    <div>
      <Header title={"Terms of Use"} />
      <PageData
        data={pageData}
        date={{ availability: true, date: "Last updated on 23/09/2025" }}
      />
      <div className="mx-4 md:mx-20 my-10">
        <p>Procurify Support Team</p>
        <p>Email: <a href="mailto:support@withprocurify.com" className="text-indigo-500">support@withprocurify.com</a></p>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndCondition;
