import React from "react";
import ReviewCards from "./ReviewCards";

const Reviews = () => {
  return (
    <div className="h-[50em] flex justify-center items-center">
      <div className="w-4/5  bg-red-400 ">
        <div className="flex justify-between">
          <h1 className="">What says our happy Clients</h1>
          <button type="button">Button</button>
        </div>
        <ReviewCards />
      </div>
    </div>
  );
};

export default Reviews;
