import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import ScrollToTop from "@components/ScrollRapper";

import React from "react";
import HomePayment from "@pages/HomePayment";
import HomeLogistics from "@pages/HomeLogistics";
import About from "@pages/About";
import Privacy from "@pages/Privacy";
import TermsAndCondition from "@pages/TermsANDCondition";
import Faqs from "@pages/Faqs";
import Blog from "@pages/Blog";
import GetBlogById from "@pages/GetBlogById";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<HomePayment />} />
        <Route path="/logistics" element={<HomeLogistics />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-and-condition" element={<TermsAndCondition />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<GetBlogById />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
