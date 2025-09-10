import FaqsComp from "@features/Faqs/Faqs";
import Hero from "@features/Faqs/Hero";
import Footer from "@features/Home/Footer";
import Download from "@features/OtherHomes/Download";
import React from "react";
const title = ["Questions?", "We’ve Got Answers."];
const text = "Everything about payments, logistics, and the app—quick and clear:";

const Faqs = () => {
  return (
    <>
      <Hero title={title} text={text} />
      <FaqsComp />
      <Download
        title={["Got your answers?", ""]}
        text={["Take the next step -", " download the app today."]}
      />
      <Footer />
    </>
  );
};

export default Faqs;
