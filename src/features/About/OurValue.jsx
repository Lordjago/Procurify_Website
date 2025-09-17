import React from "react";
// import image from "@assets/images/what1.png";
import { ourValue } from "../../constant";

const OurValue = () => {
  return (
    <div className="mx-4 md:mx-20 my-15 md:my-20">
      <div>
        <div className="text-center">
          <h1 className="w-full mt-3 text-3xl font-bold text-center md:text-5xl">
            What Defines Us
          </h1>
        </div>
         <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5 mx-4 md:mx-20">
          {ourValue.map((item, i) => (
            <div
              className="flex flex-col gap-1  p-4 md:p-8 space-y-3 bg-[#F8F8F8] rounded-2xl"
              key={i}
            >
              <div className="w-full">
                <item.icon
                  className="w-18 h-18 object-cover rounded-xl"
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
        {/* <div className="grid grid-cols-1 gap-10 mt-10 md:grid-cols-2">
          {ourValue.map((value, i) => (
            <div key={i + 1} className="p-2 md:p-0 bg-[#F8F8F8] rounded-2xl">
              <div className="flex flex-col items-center space-x-3">
                <img
                  src={image}
                  alt={"name"}
                  className="object-cover w-full h-[320px] rounded-tr-xl rounded-tl-xl "
                />
                <div className="flex flex-col mt-2 space-y-1">
                  <h4 className="mt-4 text-3xl font-bold">{value.title}</h4>
                  <p className="mt-2 mr-0 text-sm font-normal md:mr-20 md:text-lg">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default OurValue;
