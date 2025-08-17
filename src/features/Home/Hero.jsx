import React from "react";
import heroImage from "@assets/images/hh.png";
import heroImageMobile from "@assets/images/hero-mobile.png";
import Navbar from "../Navbar";
import { RiDownloadCloudFill } from "react-icons/ri";

const Hero = () => {
  return (
    <Navbar home={true}>
      <div className="flex flex-col items-center mx-4 md:mx-15 mt-15">
        <h1 className="text-3xl md:text-6xl text-center font-bold leading-10 md:leading-18 mb-4 font-['Inter']">
          One Platform. <br /> Endless Possibilities.
        </h1>
        <p className="text-center text-[14px] md:text-lg p-2">
          Whether you're buying goods, paying suppliers in RMB, <br /> or moving
          products with reliable logistics — we’ve got you covered.
        </p>
        <div className="flex flex-col gap-4 mb-2 space-x-4 space-y-4 text-center mt-7 md:flex-row">
          <div className="flex items-center px-5 py-3 m-0 space-x-2 text-sm text-white rounded-lg cursor-pointer bg-secondary">
            <RiDownloadCloudFill color="#fff" className="w-5 h-5" />
            <p className="font-medium">Download the App</p>
          </div>
          <div className="px-5 py-3 text-sm border rounded-lg cursor-pointer bg-primary-100 border-primary text-secondary">
            Explore Features
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-4">
        <picture>
          <source
            media="(max-width: 768px)"
            className="object-contain w-11/12 h-auto max-w-4xl mt-10"
            srcSet={heroImageMobile}
          />
          {/* Default for 1024px+ (desktop) */}
          <img
            src={heroImage}
            alt="Responsive hero image"
            className="object-cover w-full h-auto"
          />
        </picture>
      </div>
    </Navbar>
  );
};

export default Hero;
