import Footer from "@features/Home/Footer";
import Reviews from "@features/Home/Reviews";
import Download from "@features/OtherHomes/Download";
import HomePageHero from "@features/OtherHomes/Hero";
import KeyFeatures from "@features/OtherHomes/KeyFeatures";
import Transparent from "@features/OtherHomes/Transparent";
import WhyChoose from "@features/OtherHomes/WhyChoose";
import React from "react";
import heroImage from "@assets/images/logisticsDesktop.png";
import heroImageMobile from "@assets/images/logisticsMobile.png";
import { keyFeaturesLogistics } from "../constant";

const hero = {
  heading: ["From Checkout to", "Doorstep, We Deliver"],
  subheading:
    " Our logistics system works hand-in-hand with your shopping and payments. Whether it’s a local delivery or international cargo, we make it seamless.",
  desktopImage: heroImage,
  mobileImage: heroImageMobile,
};

const transparent = {
  bgColor: "#D5E3FF",
  heading: ["Trusted delivery", "partners"],
  subheading: "Easily buy goods from trusted merchants, without hidden stress.",
};

const HomeLogistics = () => {
  return (
    <>
      <HomePageHero {...hero} />
      <KeyFeatures keyFeatures={keyFeaturesLogistics} />
      <Transparent {...transparent} />
      <WhyChoose />
      <Reviews />
      <Download />
      <Footer />
    </>
  );
};

export default HomeLogistics;
