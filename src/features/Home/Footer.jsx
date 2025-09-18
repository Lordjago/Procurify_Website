import React from "react";
import logo from "@assets/images/procurify_logo.svg";
import { footerLinksCompany, footerLinksLegal, footerLinksProducts, socialLinks } from "@layouts/index";
import { Link } from "react-router-dom";
import Button from "@components/Button";

const Footer = () => {
  return (
    <div className="bg-[#F5F5F5] py-15 px-6 md:px-30">
      <div className="grid grid-cols-1 md:grid-cols-2 mb-10 gap-8">
        <div className="grid grid-cols-2 md:grid-cols-3 space-y-6 justify-between mb-8 md:mb-0 mx-2 md:mx-8">
          <div>
            <h5 className="text-[#686E7D] text-[16px]">Company</h5>
            <div className="flex flex-col space-y-2 mt-4">
          {footerLinksCompany.map((link) => (
            <Link to={link.href} key={link.id} className="text-[14px] font-bold text-[#4E5663]">
              {link.name}
            </Link>
          ))}
</div>
          </div>
          <div>
              <div>
            <h5 className="text-[#686E7D] text-[16px]">Products</h5>
            <div className="flex flex-col space-y-2 mt-4">
          {footerLinksProducts.map((link) => (
            <Link to={link.href} key={link.id} className="text-[14px] font-bold text-[#4E5663]">
              {link.name}
            </Link>
          ))}
</div>
          </div>
          </div>
          <div>
              <div>
            <h5 className="text-[#686E7D] text-[16px]">Legal</h5>
            <div className="flex flex-col space-y-2 mt-4">
          {footerLinksLegal.map((link) => (
            <Link to={link.href} key={link.id} className="text-[14px] font-bold text-[#4E5663]">
              {link.name}
            </Link>
          ))}
</div>
          </div>
          </div>
          
        </div>
        <div className="mx-2 md:mx-8">
          <h4 className="font-semibold">Subscribe to our newsletter</h4>
          <p className="text-sm mt-2">Stay updated on the latest news, exclusive offers, and exciting updates</p>

          <div className="flex items-center mt-8 space-x-2">
            <input type="text" placeholder="Email Address" className="w-full border-1 border-gray-400 py-3 px-2 rounded-lg font-xs placeholder:font-xs" />
              <Button label={"Subscribe"} style={"font-medium"} className={"border-0 m-0 flex items-center space-x-2 py-3 px-5 bg-secondary rounded-lg text-sm text-white cursor-pointer"} />
            
          </div>
        </div>
      </div>
      <hr className="mt-12 mb-8 border-t border-gray-300" />
      <div className="flex flex-col items-start md:flex-row space-y-8 justify-between">
        <img src={logo} alt="Logo" className="h-[30px] md:h-auto" />
        <div className="flex items-center space-x-4 mr-20">
          {socialLinks.map((link) => (
            <a href={link.href} key={link.id}>
              <div className="border border-[#e0e0e0] p-3 rounded-full">
                {<link.icon size={20} />}
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="mt-8 flex flex-col md:flex-row space-y-5  items-start justify-between mr-20">
        <p className="text-xs">
          Powered by Procurify International Trading Limited
        </p>
        <p className="text-xs">
          <Link to={"/privacy-policy"}>Privacy Policy</Link> •{" "}
          <Link to={"/terms-and-condition"}>Terms & condition</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
