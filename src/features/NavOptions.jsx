import React, { useState } from "react";

const NavOptions = ({ nav, setSelectedNav, setShowFaq }) => {
  const [howActive, setHowActive] = useState(1);

  // Provide default empty function if setShowFaq is not provided
  const safeSetShowFaq = setShowFaq || (() => {});
  
  const handleToggle = (id) => {
    setHowActive(id);
    setSelectedNav(nav.find((option) => option.id === id));
    safeSetShowFaq({ show: true, faqId: 1 });
  };
  return (
    <div className="mt-8 lg:mt-4 pb-4 flex items-center flex-wrap space-x-2 border-b border-primary space-y-5">
      {nav.map((option) => (
        <div
          className={`m-0 py-1.5 px-4 text-md cursor-pointer transition-colors ${
            howActive === option.id ? "font-medium bg-primary rounded-lg" : ""
          }`}
          onClick={() => handleToggle(option.id)}
          key={option.id}
        >
          {option.name}
        </div>
      ))}
    </div>
  );
};

export default NavOptions;
