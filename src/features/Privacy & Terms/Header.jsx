import React from "react";
import Navbar from "@features/Navbar";
const Header = ({ title }) => {
  return (
    <Navbar>
      <div className="px-5 md:px-20 py-15 md:py-25">
        <h1 className="text-3xl font-bold md:text-5xl ">{title}</h1>
      </div>
    </Navbar>
  );
};

export default Header;
