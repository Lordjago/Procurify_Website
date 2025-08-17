import BlogPosts from "@features/Blogs/BlogPosts";
import Featured from "@features/Blogs/Featured";
import Hero from "@features/Blogs/Hero";
import SingleBlogPost from "@features/Blogs/SingleBlogPost";
import Footer from "@features/Home/Footer";
import React from "react";

const GetBlogById = () => {
  return (
    <div>
      <SingleBlogPost />
      <Footer />
    </div>
  );
};

export default GetBlogById;
