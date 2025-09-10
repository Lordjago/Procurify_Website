import React from "react";
import Navbar from "../Navbar";
const Hero = () => {
  return (
    <Navbar>
      <div className="flex flex-col items-center justify-center px-10 md:px-20 space-y-10 text-center py-10 md:py-30 md:bg-[url('@assets/images/aboutImageDesktop.png')] bg-cover">
        <h1 className="text-3xl font-bold md:text-[56px]">
          Building Africa’s Future <br />
          in Global Trade
        </h1>
        <p className="text-md">
          We’re not just fixing inefficiencies. We’re creating the continent’s
          most trusted global trade ecosystem.
        </p>
      </div>
    </Navbar>
  );
};

export default Hero;
