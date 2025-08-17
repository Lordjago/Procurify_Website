import React from "react";
import { whatYouCando } from "../../constant";
import Button from "@components/Button";

const WhatWeDo = () => {
  return (
    <div className="mx-4 md:mx-15 my-15 md:my-25 fade-in">
      <div>
        <div className="flex items-end justify-between">
          <h1 className="text-2xl md:text-5xl w-full font-bold leading-8 md:leading-15 ">
            What You Can <br /> Do With Procurify
          </h1>
          <Button
            label={"Get Started Free"}
            className="py-2.5 px-5 text-xs text-white bg-secondary rounded-lg font-normal cursor-pointer whitespace-nowrap"
          />
        </div>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4 space-y-3">
          {whatYouCando.map((feature) => (
            <div
              className="flex flex-col md:flex-row gap-1 p-3 space-y-3"
              key={feature.id}
            >
              <div className="md:w-[35%]">
                <h5 className="font-medium text-2xl">{feature.title}</h5>
                <p className="mt-2 text-sm font-normal w-10/12">
                  {feature.text}
                </p>
                <div className="mt-6 flex items-center justify-center md:inline-block py-3 px-5 text-xs text-secondary border border-secondary rounded-lg font-normal cursor-pointer">
                  Learn More
                </div>
              </div>
              <div className="md:w-[65%]">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-[280px] object-cover rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
