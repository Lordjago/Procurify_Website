import React from "react";
import SingleBlogPostCard from "./SingleBlogPostCard";
import NavOptions from "@features/NavOptions";
import Navbar from "@features/Navbar";
import BlogPostCards from "./BlogPostCards";

const options = [
  {
    id: 1,
    name: "All Post",
  },
  {
    id: 2,
    name: "Marketing",
  },
  {
    id: 3,
    name: "Sales",
  },
  {
    id: 4,
    name: "Product Development",
  },
  {
    id: 5,
    name: "Customer Support",
  },
];

const SingleBlogPost = () => {
  return (
    <Navbar>
      <div className="px-4 md:px-20 pt-10 md:pt-10 bg-white">
        <SingleBlogPostCard />
        <div className="mt-15">
          <NavOptions nav={options} />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="mb-6">
                <BlogPostCards />
              </div>
            ))}
          </div>
        </div>

        <div className="m-15">
          <div className="flex items-center justify-center space-x-3 md:space-x-5">
            {/* <p className="text-sm font-medium text-gray-800 cursor-pointer">Previous</p>
                 <p className="text-sm font-medium text-gray-800 cursor-pointer">Page 1 of 11</p>
                  <p className="text-sm font-medium text-gray-800 cursor-pointer">Next</p> */}
            <button className="w-auto text-sm cursor-pointer py-1 px-4 border border-gray-300 rounded-xl">
              Previous
            </button>
            <button className="w-auto text-sm cursor-pointer py-1 px-4 border border-gray-300 rounded-xl">
              Page 1 of 11
            </button>
            <button className="w-auto text-sm cursor-pointer py-1 px-4 border border-gray-300 rounded-xl">
              Next
            </button>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default SingleBlogPost;
