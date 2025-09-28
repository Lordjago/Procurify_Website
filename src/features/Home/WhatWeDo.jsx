import React from "react";
import { whatYouCando } from "../../constant";
import Button from "@components/Button";
import { Link } from "react-router-dom";

const WhatWeDo = ({handleDownload}) => {
  return (
    <div className="mx-4 md:mx-15 my-15 md:my-25 fade-in" id="features">
      <div>
        <div className="flex items-end justify-between">
          <h1 className="text-2xl md:text-5xl w-full font-bold leading-8 md:leading-15 ">
           How Procurify <br /> Works For You
          </h1>
        <div className="hidden lg:flex">
           <Button
            label={"Get Started Now"}
            onClick={handleDownload}
            className="py-2.5 px-5 text-xs text-white bg-secondary rounded-lg font-normal cursor-pointer whitespace-nowrap"
          />
        </div>
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
                <Link
                  to={feature.href}
                  className="mt-6 flex items-center justify-center md:inline-block py-3 px-5 text-xs text-secondary border border-secondary rounded-lg font-normal cursor-pointer"
                >
                  Learn More
                </Link>
              </div>
              <div className="md:w-[65%]">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-[280px] object-contain rounded-xl"
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
