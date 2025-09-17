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
import { advantages } from "../constant";
import image from "@assets/images/finance.svg";

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
  image: image,
};

const HomePayment = () => {
  return (
    <>
      <HomePageHero {...hero} />
      <KeyFeatures
        title={["Here’s How It Works", ""]}
        keyFeatures={howItWorksPayment}
      />
      <Transparent {...transparent} />
      <WhyChoose title={"The Procurify Payment Advantage"} data={advantages} />
      <Reviews title={"Trusted by Businesses Like Yours"} />
      <Download
        title={["Ready to pay your suppliers in minutes,", "not in mysteries?"]}
        text={["Download the app today", " and get started."]}
      />
      <Footer />
    </>
  );
};

export default HomePayment;
