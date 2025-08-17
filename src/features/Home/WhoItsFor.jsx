import React from "react";
import { whoItFor } from "../../constant";

const WhoItsFor = () => {
  return (
    <div className="mx-4 md:mx-15 my-15 md:my-25">
      <div>
        <div className="flex items-end justify-between">
          <h1 className="text-3xl text-center lg:text-left md:text-4xl w-full font-bold leading-7 md:leading-15">
            Who It's For
          </h1>
        </div>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4 space-y-3">
          {whoItFor.map((who) => (
            <div className="flex flex-col gap-1 p-6 space-y-3" key={who.id}>
              <div className="">
                <h5 className="font-bold text-3xl md:text-[54px]">
                  {who.title}{" "}
                   {/* <span className="text-xs font-normal w-10/12">{who.text}</span> */}
                </h5>
                <p className="mt-5 text-md font-normal w-10/12">{who.text}</p>
              </div>
              <div className="w-full">
                <img
                  src={who.image}
                  alt={who.title}
                  className="w-full h-[360px] object-cover rounded-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoItsFor;
