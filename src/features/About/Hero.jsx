import React from "react";
import Navbar from "../Navbar";
const Hero = () => {
  return (
    <Navbar>
      <div
        className="flex flex-col items-center justify-center px-10 md:px-20 space-y-10 text-center py-10 md:py-30 md:bg-[url('@assets/images/aboutImageDesktop.png')] bg-cover"
        
      >
        <h1 className="text-3xl font-bold md:text-[56px]">
          More Than Just a <br />
          Shopping App
        </h1>
        <p className="text-md">
          We started this platform to simplify how people shop, pay, and ship —
          especially when dealing with international <br /> merchants and RMB payments.
          Today, we serve thousands of users who rely on us to buy confidently
          and move goods safely.
        </p>
      </div>

    </Navbar>
  );
};

export default Hero;
