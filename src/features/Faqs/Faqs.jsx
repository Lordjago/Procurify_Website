import React, { useState } from "react";
import NavOptions from "@features/NavOptions";
import {
  faqsPayment,
  faqsLogistics,
  faqsAppUsage,
  faqsSecurity,
  navOptions,
  faqsSupport,
} from "../../constant";
import image from "@assets/images/faqImage.png";
import FaqList from "./FaqList";

const FaqsComp = () => {
  const [selectedNav, setSelectedNav] = useState(navOptions[0]);
  const faqs =
    selectedNav.id === 1
      ? faqsPayment
      : selectedNav.id === 2
      ? faqsLogistics
      : selectedNav.id === 3
      ? faqsAppUsage 
      : selectedNav.id === 4
      ? faqsSecurity
      : faqsSupport;

  const [showFaq, setShowFaq] = useState({
    show: true,
    faqId: 1,
  });

  return (
    <div className="mx-4 md:mx-20 my-6 mb-20">
      <NavOptions nav={navOptions} setSelectedNav={setSelectedNav} setShowFaq={setShowFaq} />
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <img
            src={image}
            alt="FAQS"
            className="w-full h-[230px] md:h-[450px] object-cover"
          />
        </div>
        <FaqList faqs={faqs} showFaq={showFaq} setShowFaq={setShowFaq} />
      </div>
    </div>
  );
};

export default FaqsComp;
