import React from "react";
import image from "@assets/images/transparent.png";
import { ourTeam } from "@layouts/index";

const Team = () => {
  return (
    <div className="mx-4 md:mx-30 my-15 md:my-25">
      <div>
        <div className="flex items-end justify-between mt-2">
          <h1 className="w-full mt-3 text-3xl font-bold text-left md:text-5xl">
            Meet the Team
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-8 md:grid-cols-3 lg:grid-cols-4">
          {ourTeam.map((member) => (
            <div key={member.id} className="p-4 bg-[#F8F8F8] rounded-2xl">
              <div className="flex flex-col items-center space-x-3 fel">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-contain rounded-lg w-50 h-50"
                />
                <div className="flex flex-col mt-2 space-y-1">
                  <h4 className="font-bold">{member.name}</h4>
                  <p className="text-sm font-light text-[#b7b7b7]">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
