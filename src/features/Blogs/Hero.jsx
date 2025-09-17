import React from "react";
import Navbar from "@features/Navbar";

const Hero = () => {
  return <Navbar>
    <div className="h-[210px] md:h-[298px]">
          <div className="px-4 md:px-20 pt-8 md:pt-15 flex flex-col ">
             <h1 className="text-[26px] font-bold md:text-5xl leading-10 md:leading-15">
              Insights to  <br /> Power Your Trade
            </h1>
            <p className="text-sm w-full md:w-1/2 md:text-[16px] mt-4">Explore tips, stories, and strategies to simplify importation, grow your business, and thrive in global trade.</p>
          </div>
        </div>
    <div>
    </div>
  </Navbar>;
};

export default Hero;
