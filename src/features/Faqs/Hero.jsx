import React from "react";
import Navbar from "../Navbar";

const Hero = ({ title, text }) => {
  return (
    <div>
      <Navbar>
        <div className="h-[210px] md:h-[298px] bg-white bg-[url('@assets/images/faqsHeroMobile.png')] bg-contain md:bg-[url('@assets/images/faqsHeroDesktop1.png')] md:bg-cover bg-no-repeat">
          <div className="px-10 md:px-20 pt-8 md:pt-12">
            <h1 className="text-[24px] font-bold md:text-[48px]">
              {title[0]} <br />
              {title[1]}
            </h1>
            <p className="text-sm w-1/2 md:w-full md:text-md mt-4">{text}</p>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default Hero;
