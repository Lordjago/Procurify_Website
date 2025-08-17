import React from "react";
import WhatWeDo from "@features/Home/WhatWeDo";
import HowItWorks from "@features/Home/HowItWorks";
import WhoItsFor from "@features/Home/WhoItsFor";
import WhyChoose from "@features/Home/WhyChoose";
import Reviews from "@features/Home/Reviews";
import Download from "@features/Home/Download";
import Footer from "@features/Home/Footer";
import Hero from "@features/Home/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <HowItWorks />
      <WhoItsFor />
      <WhyChoose />
      <Reviews />
      <Download />
      <Footer />
    </>
  );
};

export default Home;
