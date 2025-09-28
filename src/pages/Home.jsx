import React from "react";
import WhatWeDo from "@features/Home/WhatWeDo";
import HowItWorks from "@features/Home/HowItWorks";
import WhoItsFor from "@features/Home/WhoItsFor";
import WhyChoose from "@features/Home/WhyChoose";
import Reviews from "@features/Home/Reviews";
import Download from "@features/Home/Download";
import Footer from "@features/Home/Footer";
import Hero from "@features/Home/Hero";
import { detectOS, getAppStoreLink } from "@utils/detectOs";

const Home = () => {
   const handleDownload = () => {
    const os = detectOS();

    if (os === "other") {
      const downloadSection = document.getElementById("download-options");
      if (downloadSection) {
        downloadSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      const link = getAppStoreLink(os);
      window.open(link, "_blank");
    }
  };
  return (
    <>
      <Hero handleDownload={handleDownload} />
      <WhatWeDo handleDownload={handleDownload} />
      <HowItWorks handleDownload={handleDownload} />
      <WhoItsFor />
      <WhyChoose />
      <Reviews />
      <Download />
      <Footer />
    </>
  );
};

export default Home;
