import Footer from "@features/Home/Footer";
import Reviews from "@features/Home/Reviews";
import Download from "@features/OtherHomes/Download";
import HomePageHero from "@features/OtherHomes/Hero";
import KeyFeatures from "@features/OtherHomes/KeyFeatures";
import Transparent from "@features/OtherHomes/Transparent";
import WhyChoose from "@features/OtherHomes/WhyChoose";
import React from "react";
import heroImage from "@assets/images/paymentHero.png";
import heroImageMobile from "@assets/images/paymentHeroMobile.png";
import { keyFeatures } from "../constant";

const hero = {
  heading: ["Pay in RMB", "Without the Stress"],
  subheading:
    " Pay suppliers on 1688, Taobao, or Alibaba directly from your Naira wallet. No agents, no stress. Fast, secure, and seamless.",
  desktopImage: heroImage,
  mobileImage: heroImageMobile,
};

const transparent = {
  bgColor: "#DCDCFA",
  heading: ["Transparent fees,", "no hidden charges"],
  subheading: "Easily buy goods from trusted merchants, without hidden stress."
};

const HomePayment = () => {
  return (
    <>
      <HomePageHero {...hero} />
      <KeyFeatures keyFeatures={keyFeatures} />
      <Transparent {...transparent} />
      <WhyChoose />
      <Reviews />
      <Download />
      <Footer />
      {/* <WhatWeDo />
      <HowItWorks />
      <WhoItsFor />
      <WhyChoose />
      <Reviews />
      <Download />
      <Footer /> */}
    </>
  );
};

export default HomePayment;
