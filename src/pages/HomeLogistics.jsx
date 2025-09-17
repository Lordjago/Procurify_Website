import Footer from "@features/Home/Footer";
import Download from "@features/OtherHomes/Download";
import HomePageHero from "@features/OtherHomes/Hero";
import KeyFeatures from "@features/OtherHomes/KeyFeatures";
import Transparent from "@features/OtherHomes/Transparent";
import WhyChoose from "@features/OtherHomes/WhyChoose";
import React from "react";
import heroImage from "@assets/images/logisticsDesktop.png";
import heroImageMobile from "@assets/images/logisticsMobile.png";
import { buildForGrowth, howItWorksLogistics, whatWeOffer } from "../constant";
import Reviews from "@features/OtherHomes/Reviews";
import image from "@assets/images/logistics_shipping.svg";
import WhatWeOffer from "@features/OtherHomes/WhatWeOffer";

const hero = {
  heading: ["Ship from China", "to Africa, Hassle-Free"],
  subheading:
    "Reliable logistics built for African importers. Fast, transparent, and secure.",
  desktopImage: heroImage,
  mobileImage: heroImageMobile,
};

const transparent = {
  bgColor: "#D5E3FF",
  heading: ["Trusted delivery", "partners"],
  subheading: "Easily buy goods from trusted merchants, without hidden stress.",
  image: image,
};

const HomeLogistics = () => {
  return (
    <>
      <HomePageHero {...hero} />
      <KeyFeatures
        title={["Seamless Shipping", " in 3 Steps"]}
        keyFeatures={howItWorksLogistics}
      />
      <WhatWeOffer data={whatWeOffer} />
      <Transparent {...transparent} />
      <WhyChoose title={"Built for Your Growth"} data={buildForGrowth} />
      <Reviews title={"Trusted by Businesses Like Yours"} />
      <Download
        title={["From China to your door stress-free.", ""]}
        text={["Download the app and", "start shipping today."]}
      />
      <Footer />
    </>
  );
};

export default HomeLogistics;
