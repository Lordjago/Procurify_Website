import React from "react";

const WhatWeOffer = ({ data }) => {
  return (
    <div className="mx-4 md:mx-15 my-15 md:my-25">
      <div>
        <div className="flex flex-col">
          <h1 className="text-3xl text-center md:text-5xl w-full font-bold leading-7 md:leading-15">
            What We Offer
          </h1>
        </div>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5 mx-4 md:mx-20">
          {data.map((item, i) => (
            <div
              className="flex items-center flex-col md:flex-row gap-5  p-4 md:p-8 space-y-3 bg-[#F8F8F8] rounded-2xl"
              key={i}
            >
              <div className="w-full h-auto">
                <img
                  src={item.image}
                  className="w-full h-[168px] md:h-[234px] object-cover rounded-xs"
                />
              </div>
              <div className="mt-2">
                <h5 className="font-medium text-2xl">{item.title} </h5>
                <p className="mt-2 text-sm font-normal w-10/12">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
