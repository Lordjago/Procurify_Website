import React from "react";
import Download from "@features/OtherHomes/Download";
import Footer from "@features/Home/Footer";
import Header from "@features/Privacy & Terms/Header";
import PageData from "@features/Privacy & Terms/PageData";

const pageData =[
  {
    "id": 1,
    "header": "Introduction",
    "subtext": "At Procurify, we respect your privacy and are committed to protecting your personal and business information. This Privacy Policy outlines how we collect, use, and protect your data when you interact with our platform. By using our services, you agree to the terms outlined in this policy."
  },
  {
    "id": 2,
    "header": "Information We Collect",
    "subtext": "We collect various types of information to provide and improve our services. This information includes: **Personal Information:** When you register or interact with our platform, we may collect personal details such as your name, email address, phone number, business name, and any other information you provide to us. **Business Information:** During registration, we will ask you to specify your business type to help us connect you with the appropriate suppliers. This information is used to tailor our services and offerings. **Payment Information:** For transactions on Procurify, we collect payment details to facilitate the Local Currency Payment System. We do not store full payment details but may process them through secure third-party payment processors. **Logistics and Shipping Information:** We collect shipment-related information when you use our Logistics Management System. This includes shipment status, destination, and tracking data. **Usage Data:** We automatically collect information on how you use our platform, such as pages visited, features interacted with, device information, and IP addresses. This helps us improve user experience and troubleshoot issues."
  },
  {
    "id": 3,
    "header": "How We Use Your Information",
    "subtext": "We use the information we collect for the following purposes: **To Provide Our Services:** To create and manage your account, process payments, and facilitate logistics management. **To Improve Our Services:** To enhance our platform’s features, troubleshoot issues, and tailor our offerings to meet your needs. **To Communicate with You:** We may send transactional emails related to your orders, payment confirmations, shipping updates, and important notifications about our platform. We may also contact you for customer support inquiries or to inform you of updates to our policies or services. **To Personalize Your Experience:** Based on your business type and preferences, we will customize product recommendations, supplier connections, and relevant information."
  },
  {
    "id": 4,
    "header": "Sharing of Information",
    "subtext": "We will not share or sell your personal information to third parties, except in the following cases: **Service Providers:** We work with trusted third-party service providers to process payments, handle logistics, and maintain the platform. These providers only have access to your data to perform their tasks and are obligated to keep it confidential. **Legal Compliance:** We may disclose your information if required by law or to comply with legal processes, such as a subpoena or court order. **Business Transfers:** If Procurify is involved in a merger, acquisition, or asset sale, your personal information may be transferred to the new owner, but we will notify you of any changes."
  },
  {
    "id": 5,
    "header": "Data Retention",
    "subtext": "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. Once your account is deactivated or you stop using our services, we will delete or anonymize your personal information, unless we are required to keep it for legal or operational reasons."
  },
  {
    "id": 6,
    "header": "Security of Your Information",
    "subtext": "We implement industry-standard security measures to protect your information, including encryption, secure servers, and access control protocols. However, please note that no method of data transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security."
  },
  {
    "id": 7,
    "header": "Your Data Protection Rights",
    "subtext": "Depending on your location, you may have the following rights regarding your personal data: **Right to Access:** You can request access to the personal data we hold about you. **Right to Correction:** You can update or correct any inaccurate personal data. **Right to Deletion:** You can request the deletion of your personal data, subject to certain exceptions. **Right to Object:** You may object to the processing of your data in certain circumstances. **Right to Data Portability:** You may request a copy of your personal data in a structured, machine-readable format. If you wish to exercise any of these rights, please contact us using the details below."
  },
  {
    "id": 8,
    "header": "Cookies and Tracking Technologies",
    "subtext": "We use cookies and similar tracking technologies to improve your experience on our platform. Cookies are small files stored on your device that help us remember your preferences and track user behavior. You can control the use of cookies through your browser settings, but disabling them may impact your experience on our platform."
  },
  {
    "id": 9,
    "header": "Third-Party Links",
    "subtext": "Our platform may contain links to third-party websites or services. We are not responsible for the privacy practices or content of those external sites. We encourage you to review the privacy policies of any third-party websites you visit."
  },
  {
    "id": 10,
    "header": "Children’s Privacy",
    "subtext": "Procurify does not knowingly collect personal information from individuals under the age of 18. If we discover that we have inadvertently collected such information, we will take steps to delete it. If you believe we may have collected personal information from a child under 18, please contact us immediately."
  },
  {
    "id": 11,
    "header": "Changes to This Privacy Policy",
    "subtext": "We may update this Privacy Policy from time to time to reflect changes in our practices, services, or legal obligations. We will notify you of significant changes by posting the updated policy on our website and updating the 'Last Revised' date at the top of the page. We encourage you to review this policy periodically."
  },
  {
    "id": 12,
    "header": "Contact Us",
    "subtext": "If you have any questions or concerns about this Privacy Policy or how your data is handled, please contact us at:"
  }
]
const Privacy = () => {
  return (
    <div>
      <Header title={"Privacy Policy"} />
      <PageData data={pageData} date={{ availability: false, date: "" }} />
       <div className="mx-4 md:mx-20 my-10">
        <p>Procurify Support Team</p>
        <p>Email: <a href="mailto:support@withprocurify.com" className="text-indigo-500">support@withprocurify.com</a></p>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
