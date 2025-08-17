import React from "react";
import { RiDownloadCloudFill, RiMenu5Fill } from "react-icons/ri";
import Navbar from "@features/Navbar";
const HomePageHero = ({ heading, subheading, desktopImage, mobileImage }) => {
  return (
    <Navbar>
      <div className="grid grid-cols-1 gap-8 mt-3 lg:grid-cols-2 md:mt-15">
        <div className="mx-4 md:mx-15">
          <h1 className="text-3xl md:text-5xl text-center md:text-left font-bold leading-10 md:leading-18 mb-4 font-['Inter']">
            {heading[0]} <br />
            {heading[1]}
          </h1>
          <p className="text-center md:text-left w-full text-[14px] md:text-lg p-2">
            {subheading}
          </p>
          <div className="flex flex-row justify-center gap-4 mb-2 space-x-4 space-y-4 text-center mt-7 md:justify-start">
            <div className="flex items-center px-5 py-3 m-0 space-x-2 text-sm text-white rounded-lg cursor-pointer bg-secondary">
              <RiDownloadCloudFill color="#fff" className="w-5 h-5" />
              <p className="font-medium">Get the App</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <picture>
            <source
              media="(max-width: 768px)"
              className="object-contain w-11/12 h-auto max-w-4xl mt-10"
              srcSet={mobileImage}
            />
            {/* Default for 1024px+ (desktop) */}
            <img
              src={desktopImage}
              alt="Responsive hero image"
              className="object-cover w-full h-auto"
            />
          </picture>
        </div>
      </div>
    </Navbar>
  );
};

export default HomePageHero;
