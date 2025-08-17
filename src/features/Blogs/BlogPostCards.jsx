import React from "react";
import blogImage from "@assets/images/blogImage.png";
import { Link } from "react-router-dom";

const BlogPostCards = ({ location }) => {
  return (
    <Link to={"/blog/1"}>
      <div className="space-y-3 p-4 border border-primary-100 rounded-2xl">
        <img
          src={blogImage}
          alt="blogImage"
          className={`${
            location == "small"
              ? "md:h-[200px]"
              : location == "big"
              ? "md:h-[692px]"
              : "h-auto"
          } w-full object-cover rounded-lg`}
        />
        <div className="flex items-center space-x-2">
          <p className="font-bold text-sm">Marketing</p>
          <p className="font-bold">|</p>
          <p className="text-sm">July 28, 2025</p>
        </div>
        <h1 className="font-bold text-lg md:text-2xl">
          10 SMS campaign templates that drives sales and boost conversions.
        </h1>
        <p className="text-sm">
          This blog post includes a variety of sms campaign messages to help you
          get started - such as promotional offers, exclusive deals, and
          abandoned cart reminders.
        </p>
        <button className="w-auto text-sm cursor-pointer py-1 px-4 border border-gray-800 rounded-xl">
          Cancel
        </button>
      </div>
    </Link>
  );
};

export default BlogPostCards;
