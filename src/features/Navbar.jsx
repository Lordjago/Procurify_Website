import React, { useEffect, useState } from "react";
import { RiDownloadCloudFill, RiMenu5Fill } from "react-icons/ri";

import logo from "@assets/images/procurify_logo.svg";
import { navLinks } from "../constant";
import { IoCloseOutline } from "react-icons/io5";
import Button from "@components/Button";
import { Link, useLocation } from "react-router-dom";
import { changeString } from "@utils/changeString";
const HomePageHero = ({ home, children }) => {
  const [active, setActive] = useState(1);
  const [toggle, setToggle] = useState(false);

  // const location = useLocation();
  // useEffect(() => {
  //   const pathname =
  //     location.pathname === "/" ? "home" : location.pathname.slice(1); //removing / from pathname
  //   const activeLink = navLinks.find(
  //     (nav) => changeString(nav.name.toLowerCase()) === pathname
  //   );
  //   setActive(activeLink.id);
  // }, [location]);

  return (
    <div
      className={`${
        home && "min-h-[600px] md:min-h-screen"
      } w-full relative bg-gradient-to-t from-[#d2d2ee] via-[#d2d2ee] to-white`}
    >
      <div className="flex items-center justify-between p-2 mx-4 my-6 md:mx-15">
        <Link to={"/"} className="cursor-pointer">
          <img src={logo} alt="Logo" className="h-[30px] md:h-auto" />
        </Link>
        <ul className="hidden md:flex items-center space-x-5 border border-primary-100 rounded-2xl py-1.5 px-4">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <Link
                className={`text-sm font-normal cursor-pointer transition-colors ${
                  active === nav.id
                    ? "!font-medium text-secondary"
                    : "font-normal"
                } 
            `}
                onClick={() => setActive(nav.id)}
                to={nav.href}
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex py-2.5 px-6 text-xs text-white bg-secondary rounded-lg font-normal cursor-pointer">
          Get Started
        </div>
        <div className="flex md:hidden ">
          <RiMenu5Fill
            className="w-10 h-6 text-secondary"
            onClick={() => setToggle(true)}
          />
        </div>
        {toggle && (
          <div className="absolute top-0 left-0 right-0 min-h-screen bg-white z-100 ">
            <div>
              <IoCloseOutline
                size={32}
                className="m-14"
                onClick={() => setToggle(false)}
              />
              <ul className="flex flex-col items-center py-6 space-y-15">
                {navLinks.map((nav) => (
                  <li key={nav.id}>
                    <a
                      className={`text-xl font-normal cursor-pointer transition-colors ${
                        active === nav.id
                          ? "!font-medium text-secondary"
                          : "font-normal"
                      } 
            `}
                      onClick={() => setActive(nav.id)}
                      href={nav.href}
                    >
                      {nav.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-6 py-4 m-20 text-xs font-normal text-center text-white rounded-lg cursor-pointer bg-secondary">
              Get Started
            </div>
          </div>
        )}
      </div>
      {children}
    </div>
  );
};

export default HomePageHero;
