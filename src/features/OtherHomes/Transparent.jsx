import React from "react";
import image from "@assets/images/transparent.png";

const Transparent = ({bgColor, heading, subheading}) => {
  return (
    <div className="mx-4 md:mx-5 mt-25">
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 mx-3 md:mx-10 py-5 items-center rounded-2xl px-10`} style={{ backgroundColor: bgColor }}>
        <div className="mt-8 md:mt-12 text-left">
          <h1 className="font-bold text-3xl md:text-5xl animate-fadeIn text-left leading-10 md:leading-15">
            {heading[0]} <br /> {heading[1]}
          </h1>
          <h4 className="text-lg md:text-md font-normal mt-6 w-full md:w-2/3">
            {subheading}
          </h4>
        </div>
        <div className="mx-2 md:mx-10 rounded-2xl flex items-center justify-center">
          <img
            src={image}
            alt="Model Woman"
            className="w-full h-auto object-contain rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Transparent;
