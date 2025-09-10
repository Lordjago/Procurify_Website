import Footer from "@features/Home/Footer";
import Download from "@features/OtherHomes/Download";
import HomePageHero from "@features/OtherHomes/Hero";
import KeyFeatures from "@features/OtherHomes/KeyFeatures";
import Transparent from "@features/OtherHomes/Transparent";
import WhyChoose from "@features/OtherHomes/WhyChoose";
import React from "react";
import heroImage from "@assets/images/paymentHero.png";
import heroImageMobile from "@assets/images/paymentHeroMobile.png";
import { howItWorksPayment } from "../constant";
import Reviews from "@features/OtherHomes/Reviews";

const hero = {
  heading: ["Pay RMB to Your ", "Suppliers In Minutes."],
  subheading:
    " No payment stress. No hidden fees. Just fast, secure payments from Africa to China.",
  desktopImage: heroImage,
  mobileImage: heroImageMobile,
};

const transparent = {
  bgColor: "#DCDCFA",
  heading: ["Stop leaving your,", "suppliers guessing."],
  subheading: "Pay instantly! Show them you mean business.",
};

const HomePayment = () => {
  return (
    <>
      <HomePageHero {...hero} />
      <KeyFeatures keyFeatures={howItWorksPayment} />
      <Transparent {...transparent} />
      <WhyChoose />
      <Reviews />
      <Download />
      <Footer />
    </>
  );
};

export default HomePayment;
