import React from "react";
import image from "@assets/images/Hand-phone.png";
import { RiDownloadCloudFill } from "react-icons/ri";
import Button from "@components/Button";

const Download = () => {
  return (
    <div className="mx-4 md:mx-15 mt-25">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 mx-3 md:mx-10">
        <div className="mt-8 md:mt-12 text-center md:text-left">
          <h1 className="font-bold text-3xl md:text-4xl animate-fadeIn text-center md:text-left">
            Ready to simplify your shopping & logistics?
          </h1>
          <h4 className="text-lg md:text-[20px] font-bold mt-6">
            Download the app today <br />
            and get started.
          </h4>
          <div className="mt-10 mb-2 flex flex-col items-center md:flex-row text-center space-x-4 space-y-6 gap-4">
            <Button label={"Download the iOS"} btnIcon={RiDownloadCloudFill} style={"font-medium"} className={"border-0 m-0 flex items-center space-x-2 py-3 px-5 bg-secondary rounded-lg text-sm text-white cursor-pointer"} />
            <Button label={"Download the Android"} btnIcon={RiDownloadCloudFill} style={"font-medium"} className={"border-0 m-0 flex items-center space-x-2 py-3 px-5 bg-secondary rounded-lg text-sm text-white cursor-pointer"} />
          </div>
        </div>
        <div className="mx-2 md:mx-10 rounded-2xl flex items-center justify-center bg-gradient-to-t from-[#d2d2ee] via-[#d2d2ee] to-white">
          <img
            src={image}
            alt="Model Woman"
            className="w-full h-auto md:max-h-[70vh] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Download;
