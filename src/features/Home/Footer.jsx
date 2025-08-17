import React from "react";
import logo from "@assets/images/procurify_logo.svg";
import { socialLinks } from "@layouts/index";


const Footer = () => {
  return <div className="bg-[#F5F5F5] py-15 px-6 md:px-30">
    <div className="flex flex-col items-start md:flex-row space-y-8 justify-between">
         <img src={logo} alt="Logo" className="h-[30px] md:h-auto" />
         <div className="flex items-center space-x-4 mr-20">
            {socialLinks.map(link => (
                <a href={link.href} key={link.id}><div className="border border-[#e0e0e0] p-3 rounded-full">{<link.icon size={20} />}</div></a>
            ))}
         </div>
    </div>
    <div className="mt-8 flex flex-col md:flex-row space-y-5  items-start justify-between mr-20">
        <p className="text-xs">Powered by Procurify International Trading Limited</p>
        <p className="text-xs">Privacy Policy  •  Terms & condition</p>
    </div>
  </div>;
};

export default Footer;
