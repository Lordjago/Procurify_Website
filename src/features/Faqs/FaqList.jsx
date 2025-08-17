import React, { useState } from "react";

const FaqList = ({ faqs }) => {
  const [showFaq, setShowFaq] = useState({
    show: true,
    faqId: 1,
  });
  return (
    <div className="lg:w-full">
      <div className="flex flex-col space-y-2 mx-auto w-full">
        {faqs.map((faq) => (
          <div key={faq.id} className="mx-4">
            <div
              className={` ${
                showFaq.show && showFaq.faqId === faq.id
                  ? "bg-primary-100"
                  : "bg-[#FAFAFA] "
              } shadow-neutral-400 rounded-xl`}
            >
              <div
                className="flex justify-between p-5 mb-3 rounded-md "
                onClick={() =>
                  setShowFaq((prev) => {
                    return {
                      faqId: faq.id,
                      show: showFaq.faqId === faq.id ? !prev.show : true,
                    };
                  })
                }
              >
                <h5 className="text-xl font-bold">{faq.question}</h5>
                {showFaq.show && showFaq.faqId === faq.id ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                )}
              </div>
              {showFaq.show && showFaq.faqId === faq.id && (
                <p className="text-lg pb-12 px-7">{faq.answer}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqList;
