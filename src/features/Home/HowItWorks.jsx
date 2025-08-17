import React from "react";
import { howItWorks, navOptions } from "../../constant";
import NavOptions from "@features/NavOptions";

const HowItWorks = () => {
  return (
    <div className="mx-4 md:mx-15 my-25">
      <div>
        <div className="flex items-start md:items-end justify-between">
          <h1 className="text-3xl text-center lg:text-left md:text-4xl w-full font-bold leading-7 md:leading-15">
            How It Works
          </h1>
          <div className="hidden lg:flex py-2.5 px-5 text-xs text-white bg-secondary rounded-lg font-normal cursor-pointer whitespace-nowrap">
            Get Started Free
          </div>
        </div>
        <NavOptions nav={navOptions.slice(0,2)} />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {howItWorks.map((item) => (
            <div
              className="flex flex-col gap-1 px-3 py-5 rounded-2xl bg-[#FAFAFA]"
              key={item.id}
            >
              <div className="w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[260px] object-cover rounded-xl"
                />
              </div>
              <div className="mt-5">
                <h5 className="font-bold text-xl">{item.title}</h5>
                <p className="mt-2 text-sm font-normal w-10/12">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
