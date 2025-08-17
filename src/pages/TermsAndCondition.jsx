import React from "react";
import Download from "@features/OtherHomes/Download";
import Footer from "@features/Home/Footer";
import Header from "@features/Privacy & Terms/Header";
import PageData from "@features/Privacy & Terms/PageData";

const pageData = [
  {
    id: 1,
    header: "General legal notice",
    subtext:
      "This privacy policy, which applies whatever the means or the medium used to access the site procurify.com or its sub-domains and its services (hereinafter referred to as the 'Site'), describes the conditions under which, when using the Site, we collect, use, and store information about you, including your personal data, as well as your choices regarding the collection, use and disclosure of these informations. By accessing and / or using the Site, you acknowledge that you have read, understood and agree to be subject to all the terms and conditions of this document. If you do not agree with this policy, you should not use the Site and its related services and you should not disclose your personal information to us.",
    text: "The person in charge of the privacy policy is",
  },

  {
    id: 2,
    header: "Article 1 Definitions",
    subtext:
      "This privacy policy, which applies whatever the means or the medium used to access the site procurify.com or its sub-domains and its services (hereinafter referred to as the 'Site'), describes the conditions under which, when using the Site, we collect, use, and store information about you, including your personal data, as well as your choices regarding the collection, use and disclosure of these informations. By accessing and / or using the Site, you acknowledge that you have read, understood and agree to be subject to all the terms and conditions of this document. If you do not agree with this policy, you should not use the Site and its related services and you should not disclose your personal information to us.",
    text: "The person in charge of the privacy policy is",
  },
];
const TermsAndCondition = () => {
  return (
    <div>
      <Header title={"Terms and Conditions"} />
      <PageData
        data={pageData}
        date={{ availability: true, date: "Last updated on 07/05/2025" }}
      />
      <Footer />
    </div>
  );
};

export default TermsAndCondition;
