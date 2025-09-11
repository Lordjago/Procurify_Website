import React, { useEffect, useState } from "react";

const KeyFeatures = ({ keyFeatures, title }) => {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="mx-4 md:mx-15 my-25">
      <div>
        <div className="flex items-center justify-between">
          {screenSize.width < 600 ? (
            <h1 className="text-2xl text-left lg:text-left md:text-4xl w-full font-bold leading-7 md:leading-15">
              {title[0]} <br /> {title[1]}
            </h1>
          ) : (
            <h1 className="text-2xl text-left lg:text-left md:text-4xl w-full font-bold leading-7 md:leading-15">
              {title[0] + " " + title[1]}
            </h1>
          )}

          <div className="lg:flex py-2.5 px-5 text-xs text-white bg-secondary rounded-lg font-normal cursor-pointer whitespace-nowrap">
            Get Started Free
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
          {keyFeatures.map((item) => (
            <div
              className="flex flex-col items-start gap-1 px-3 py-5 rounded-2xl bg-[#FAFAFA]"
              key={item.id}
            >
              <div className="min-h-[80px] mt-5 ml-4">
                <h5 className="font-bold text-xl">{item.title}</h5>
                <p className="mt-2 text-sm font-normal w-10/12">{item.text}</p>
              </div>
              <div className="w-full mt-10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[260px] object-cover rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
