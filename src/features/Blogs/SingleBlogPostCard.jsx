import blogImage from "@assets/images/blogImage.png";
import React from "react";

const SingleBlogPostCard = () => {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <p className="font-bold text-sm">Marketing</p>
        <p className="font-bold">|</p>
        <p className="text-sm">July 28, 2025</p>
        <p className="font-bold">|</p>
        <p className="text-sm">10 mins read</p>
      </div>

      <h1 className="mt-6 font-bold text-lg md:text-2xl">
        10 SMS campaign templates that drives sales and boost conversions.
      </h1>
      <div className="mt-8 flex items-center space-x-3">
        <div className="w-8 h-8 rounded-full bg-[#D9D9D9]"></div>
        <h1 className="font-bold">AbdulBaki Suhaib</h1>
      </div>
      <div className="space-y-3 p-4 rounded-2xl mt-6">
        <img
          src={blogImage}
          alt="blogImage"
          className="w-full object-cover rounded-lg"
        />
        <button className="mt-4 w-auto text-sm cursor-pointer py-1 px-4 border border-gray-800 rounded-xl">
          Cancel
        </button>
        <p className="text-sm">
          SMS marketing is an old but effective way for both big and small
          businesses to promote their products and services. You can use SMS
          campaigns to reach out to customers directly and deliver timely
          messages that drive sales and engagement.
        </p>
        <p className="text-sm">
          Text messaging is one of the most successful marketing communications
          techniques because 83% of people open SMS messages within 90 seconds
          of receiving them.
        </p>
        <h1 className="font-bold text-lg md:text-2xl">
          10 SMS campaign templates that drives sales and boost conversions.
        </h1>
        <p className="text-sm">
          SMS marketing is an old but effective way for both big and small
          businesses to promote their products and services. You can use SMS
          campaigns to reach out to customers directly and deliver timely
          messages that drive sales and engagement.
        </p>
        <p className="text-sm">
          Text messaging is one of the most successful marketing communications
          techniques because 83% of people open SMS messages within 90 seconds
          of receiving them.
        </p>
      </div>
    </div>
  );
};

export default SingleBlogPostCard;
