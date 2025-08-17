import React from "react";
import Download from "@features/OtherHomes/Download";
import Footer from "@features/Home/Footer";
import Header from "@features/Privacy & Terms/Header";
import PageData from "@features/Privacy & Terms/PageData";

const pageData = [
  {
    id: 1,
    header: "",
    subtext:
      "This privacy policy, which applies whatever the means or the medium used to access the site procurify.com or its sub-domains and its services (hereinafter referred to as the 'Site'), describes the conditions under which, when using the Site, we collect, use, and store information about you, including your personal data, as well as your choices regarding the collection, use and disclosure of these informations. By accessing and / or using the Site, you acknowledge that you have read, understood and agree to be subject to all the terms and conditions of this document. If you do not agree with this policy, you should not use the Site and its related services and you should not disclose your personal information to us.",
    text: "",
  },

  {
    id: 2,
    header: "Article 1. Identity of the person who collects the personal data",
    subtext:
      "The company StarOfService, a simplified joint-stock company, with share capital of 31521.93 euros, registered with the Register of Commerce and Companies of VERSAILLES under number 751 713 215, whose registered office is located at 128 rue La Boétie, 75008 Paris, France (hereinafter referred to as 'StarOfService', 'nous').",
    text: "The person in charge of the privacy policy is",
  },
];
const Privacy = () => {
  return (
    <div>
      <Header title={"Privacy Policy"} />
      <PageData data={pageData} date={{ availability: false, date: "" }} />
      <Download />
      <Footer />
    </div>
  );
};

export default Privacy;
