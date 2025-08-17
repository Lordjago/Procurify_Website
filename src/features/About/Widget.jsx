import React from "react";

const Widget = ({ widget }) => {
  return (
    <div className="px-4 bg-white pt-15 md:px-10">
      {/* Mobile View (columns-1 for stacking, flex for side-by-side) */}
      <div className="flex flex-wrap gap-4 md:hidden">
        {widget.slice(0, 6).map((w) => (
          <div 
            key={w.id} 
            className={`${w.height !== "516px" ? "w-[47%]" : "w-full"}`}
          >
            <div
              className="bg-[#d9d9d9] rounded-xl h-40" 
              style={{ transition: "all 0.3s ease" }}
            ></div>
          </div>
        ))}
      </div>

      {/* Desktop View (masonry layout) */}
      <div className="hidden gap-4 md:block columns-2 sm:columns-2 md:columns-3 lg:columns-5">
        {widget.map((w) => (
          <div key={w.id} className="mb-4 break-inside-avoid">
            <div
              className="bg-[#d9d9d9] rounded-xl"
              style={{
                height: w?.height,
                width: w?.width || "100%",
                transition: "all 0.3s ease",
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Widget;