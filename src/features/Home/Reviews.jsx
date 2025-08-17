import Rating from "@components/Rating";
import { reviews } from "../../constant";
import React from "react";
import { IoArrowForward } from "react-icons/io5";
import { IoArrowBackSharp } from "react-icons/io5";
const Reviews = () => {
  return (
    <div className="mx-4 md:mx-30 my-15 md:my-25">
      <div>
        <span className="text-xs text-gray-600 border border-[#e3e3e3] py-2 px-4 rounded-xl">Great Reviews</span>
        <div className="flex items-end justify-between mt-2">
          <h1 className="mt-3 text-3xl text-left md:text-5xl w-full font-bold">
           What people are saying
          </h1>
          <div className="flex items-center space-x-5 mr-10">
            <IoArrowBackSharp color="#c4c4c4" className="w-7 h-14" />
            <IoArrowForward  color="#000" className="w-7 h-14" />
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {reviews.map(review => (
            <div key={review.id} className="p-4 md:p-8 bg-[#F8F8F8] rounded-2xl">
              <p className="text-sm text-[#b7b7b7]">{review.review}</p>
              <div className="mt-6 flex items-center justify-between">
               <div className="flex items-center space-x-3">
                 <img src={review.image} alt={review.name} className="w-14 h-14 rounded-xl" />
                <div className="flex flex-col space-y-1">
                  <h4 className="font-bold">{review.name}</h4>
                  <p className="text-sm font-light text-[#b7b7b7]">{review.position}</p>
                </div>
               </div>
                 <Rating rating={review.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
