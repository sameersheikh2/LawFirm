import { Avatar, Typography } from "@mui/material";
import React from "react";

const TeamCards = ({ profile, name, totalCase }) => {
  return (
    <div className=" hover:bg-[#E3B748] text-white hover:text-black cursor-pointer w-[344px] h-[110px] flex items-center rounded-xl">
      <div className="flex mx-4 items-center">
        <Avatar sx={{ width: "68px ", height: "68px" }} src={profile} />
        <div className="ml-4 ">
          <Typography
            sx={{
              fontSize: "24px",
              "&:hover": { color: "black" },
              fontWeight: "600",
            }}
            varient="body2"
          >
            {name}
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              "&:hover": { color: "black" },
              opacity: "30%",
              fontWeight: "400",
            }}
            varient="body2"
          >
            {totalCase}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default TeamCards;
