import Rating from "@components/Rating";
import { GeneralLandingPage } from "../../constant";
import React, { useEffect, useState } from "react";
import { IoArrowForward } from "react-icons/io5";
import { IoArrowBackSharp } from "react-icons/io5";
const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleReviews, setVisibleReviews] = useState([]);

  useEffect(() => {
    // Show two reviews at a time
    const startIndex = currentIndex * 2;
    setVisibleReviews(GeneralLandingPage.slice(startIndex, startIndex + 2));
  }, [currentIndex]);

  const nextReviews = () => {
    if (currentIndex < Math.ceil(GeneralLandingPage.length / 2) - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevReviews = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const isFirstPage = currentIndex === 0;
  const isLastPage = currentIndex === Math.ceil(GeneralLandingPage.length / 2) - 1;

useEffect(() => {
  setInterval(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.ceil(GeneralLandingPage.length / 2) - 1 ? 0 : prevIndex + 1
    );
  }, 5000);
}, []);
  return (
    <div className="mx-4 md:mx-30 my-15 md:my-25">
      <div>
        <span className="text-xs text-gray-600 border border-[#e3e3e3] py-2 px-4 rounded-xl">
          Great Reviews
        </span>
        <div className="flex items-end justify-between mt-2">
          <h1 className="mt-3 text-3xl text-left md:text-5xl w-full font-bold">
            Why Importers Trust Us
          </h1>
          <div className="flex items-center space-x-5 mr-10">
            <button
              onClick={prevReviews}
              disabled={isFirstPage}
              className={`${
                isFirstPage
                  ? "opacity-30 cursor-not-allowed"
                  : "opacity-100 cursor-pointer"
              }`}
            >
              <IoArrowBackSharp
                color={isFirstPage ? "#c4c4c4" : "#000"}
                className="w-7 h-14"
              />
            </button>
            <button
              onClick={nextReviews}
              disabled={isLastPage}
              className={`${
                isLastPage
                  ? "opacity-30 cursor-not-allowed"
                  : "opacity-100 cursor-pointer"
              }`}
            >
              <IoArrowForward
                color={isLastPage ? "#c4c4c4" : "#000"}
                className="w-7 h-14"
              />
            </button>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {visibleReviews.map((review) => (
            <div
              key={review.id}
              className="p-4 md:p-8 bg-[#F8F8F8] rounded-2xl"
            >
              <p className="text-sm text-[#b7b7b7]">{review.review}</p>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {/* <img
                    src={review.image}
                    alt={review.name}
                    className="w-14 h-14 rounded-xl object-cover"
                  /> */}
                  <div className="flex flex-col space-y-1">
                    <h4 className="font-bold">{review.name}</h4>
                    <p className="text-sm font-light text-[#b7b7b7]">
                      {review.position}
                    </p>
                  </div>
                </div>
                <Rating rating={review.rating} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: Math.ceil(GeneralLandingPage.length / 2) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-black" : "bg-gray-300"
                }`}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
