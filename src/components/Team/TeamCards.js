import { Avatar, Typography } from "@mui/material";
import React from "react";
import { Sanfole } from "../../assets/Sanfole.png";

const TeamCards = () => {
  return (
    <div className="hover:bg-[#E3B748] cursor-pointer w-[344px] h-[110px] flex items-center rounded-xl">
      <div className="flex mx-4 items-center">
        <Avatar sx={{ width: "68px ", height: "68px" }} src={Sanfole} />
        <div className="ml-4">
          <Typography varient="body2"> Sanfole</Typography>
          <Typography varient="body2"> 850 Cases</Typography>
        </div>
      </div>
    </div>
  );
};

export default TeamCards;
