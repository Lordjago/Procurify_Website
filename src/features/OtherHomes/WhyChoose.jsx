import { paymentWhyChoose } from "@layouts/index";
import React from "react";

const WhyChoose = () => {
  return (
    <div className="mx-4 md:mx-15 my-15 md:my-25">
      <div>
        <div className="flex flex-col">
          <h1 className="text-3xl text-center md:text-5xl w-full font-bold leading-7 md:leading-15">
            Why Choose Us
          </h1>
          <p className="text-sm text-center mt-4">
            The benefits of Payment is enormous
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5 mx-4 md:mx-20">
          {paymentWhyChoose.map((item) => (
            <div
              className="flex flex-col gap-1  p-4 md:p-8 space-y-3 bg-[#F8F8F8] rounded-2xl"
              key={item.id}
            >
              <div className="w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-xl"
                />
              </div>
              <div className="mt-2">
                <h5 className="font-medium text-2xl">{item.title} </h5>
                <p className="mt-2 text-sm font-normal w-10/12">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
