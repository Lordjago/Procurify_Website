import React from "react";
import NavOptions from "@features/NavOptions";
import { faqs, navOptions } from "../../constant";
import image from "@assets/images/faqImage.png"
import FaqList from "./FaqList";

const FaqsComp = () => {
  return (
    <div className="mx-4 md:mx-20 my-6 mb-20">
      <NavOptions nav={navOptions} />
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
            <img src={image} alt="FAQS" className="w-full h-[230px] md:h-[450px] object-cover" />
        </div>
        <FaqList faqs={faqs} />
      </div>
    </div>
  );
};

export default FaqsComp;
