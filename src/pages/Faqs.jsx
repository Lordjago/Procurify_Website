import FaqsComp from "@features/Faqs/Faqs";
import Hero from "@features/Faqs/Hero";
import Footer from "@features/Home/Footer";
import Download from "@features/OtherHomes/Download";
import React from "react";
const title = ["We know you", "have questions."];
const text = "We organized it by topic for clear understanding:";

const Faqs = () => {
  return (
    <>
      <Hero title={title} text={text} />
      <FaqsComp />
      <Download />
      <Footer />
    </>
  );
};

export default Faqs;
