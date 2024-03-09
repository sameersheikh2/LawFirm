import React from "react";
import TeamCards from "./TeamCards";
import { teamData } from "../../utils/constant";

const Team = () => {
  return (
    <div className="flex justify-center items-center mt-28">
      <div className="w-4/5 flex items-center justify-center flex-col">
        <h1 className="text-secondary text-white ">Our Team</h1>
        <div className="flex flex-wrap mt-20 items-center justify-center gap-5">
          {teamData.map((member) => (
            <TeamCards
              name={member.name}
              profile={member.profile}
              totalCase={member.totalCase}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
