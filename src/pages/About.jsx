import Hero from "@features/About/Hero";
import Team from "@features/About/Team";
import Widget from "@features/About/Widget";
import { widget } from "../constant";
import React from "react";
import OurValue from "@features/About/OurValue";
import Footer from "@features/Home/Footer";
import Download from "@features/OtherHomes/Download";

const About = () => {
  return (
    <>
      <Hero />
      <Widget widget={widget} />
      <Team />
      <OurValue />
      <Download />
      <Footer />
    </>
  );
};

export default About;
