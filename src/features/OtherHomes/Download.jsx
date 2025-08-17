import React from "react";
import { RiDownloadCloudFill } from "react-icons/ri";
import Button from "@components/Button";

const Download = () => {
  return (
    <div className="mx-4 my-20 md:mx-15">
      <div className="grid grid-cols-1 gap-8 mx-3 md:grid-cols-2 md:gap-4 md:mx-10">
        <div className="mt-8 text-center md:mt-12 md:text-left">
          <h1 className="text-3xl font-bold text-center md:text-[48px] animate-fadeIn md:text-left">
            Ready to simplify your shopping & logistics?
          </h1>
          
        </div>
        <div>
<h4 className="text-lg md:text-[20px] text-center font-bold mt-6">
            Download the app today <br />
            and get started.
          </h4>
        <div className="flex flex-col items-center justify-center gap-4 mt-5 mb-2 space-x-4 space-y-6 text-center md:flex-row">
            <Button label={"Download the iOS"} btnIcon={RiDownloadCloudFill} style={"font-medium"} className={"border-0 m-0 flex items-center space-x-2 py-3 px-5 bg-secondary rounded-lg text-sm text-white cursor-pointer"} />
            <Button label={"Download the Android"} btnIcon={RiDownloadCloudFill} style={"font-medium"} className={"border-0 m-0 flex items-center space-x-2 py-3 px-5 bg-secondary rounded-lg text-sm text-white cursor-pointer"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
