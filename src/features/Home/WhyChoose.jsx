import React, { useEffect, useState } from "react";
import image from "@assets/images/model-woman.svg";
import { whyChoose } from "../../constant";

const WhyChoose = () => {
  const [why, setWhy] = useState(whyChoose[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % whyChoose.length);
      setWhy(whyChoose[currentIndex]);
    }, 2000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]); // Re-run effect when currentIndex changes
  return (
    <div className="mx-4 md:mx-15 my-25">
      <h1 className="text-lg w-full font-medium uppercase">
        Why Choose Procurify?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 mx-1 md:mx-10">
        <div className="mt-4 md:mt-12 h-[120px]">
          <h1 className="font-bold text-3xl md:text-5xl text-[#9f9c9c] animate-fadeIn">
            {why.question}? <span className="text-black">{why.answer}</span>
          </h1>
        </div>
        {/* bg-gradient-to-t from-[#d2d2ee] via-[#d2d2ee] to-white */}
        <div className="mx-2 md:mx-10">
          <img
            src={image}
            alt="Model Woman"
            //  md:max-w-[480px] md:max-h-[480px]
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
