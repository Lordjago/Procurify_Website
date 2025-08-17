import BlogPosts from '@features/Blogs/BlogPosts'
import Featured from '@features/Blogs/Featured'
import Hero from '@features/Blogs/Hero'
import Footer from '@features/Home/Footer'
import React from 'react'

const Blog = () => {
  return (
    <div>
        <Hero />
        <Featured />
        <BlogPosts/>
        <Footer />
    </div>
  )
}

export default Blog