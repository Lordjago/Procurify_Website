import React from "react";
import image from "@assets/images/what1.png";

const OurValue = () => {
  return (
    <div className="mx-4 md:mx-20 my-15 md:my-20">
      <div>
        <div className="text-center">
          <h1 className="w-full mt-3 text-3xl font-bold text-center md:text-5xl">
            What defines us
          </h1>
          <p className="w-11/12 mt-4 text-sm text-center md:text-xl">
            Our values define the Procurify culture, who we are, and what we do
            every day. They are the foundation of our identity and the compass
            of our interaction with all stakeholders: customers, regulators,
            investors, partners and our communities.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 mt-10 md:grid-cols-2">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i + 1} className="p-2 md:p-0 bg-[#F8F8F8] rounded-2xl">
              <div className="flex flex-col items-center space-x-3">
                <img
                  src={image}
                  alt={"name"}
                  className="object-cover w-full h-[320px] rounded-tr-xl rounded-tl-xl "
                />
                <div className="flex flex-col mt-2 space-y-1">
                  <h4 className="mt-4 text-3xl font-bold">{"Our Vision"}</h4>
                  <p className="mt-2 mr-0 text-sm font-normal md:mr-20 md:text-lg">
                    To simplify global trade for everyday people by providing a
                    secure, all-in-one platform for shopping, RMB payments, and
                    logistics — tailored to local needs and powered by trust,
                    speed, and transparency.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurValue;
