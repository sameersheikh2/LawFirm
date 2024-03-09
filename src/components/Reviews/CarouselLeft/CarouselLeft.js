import React from "react";
import leftArrow from "../../../assets/leftArrow.png";

const CarouselLeft = ({ handlePrev }) => {
  return (
    <button
      type="button"
      onClick={handlePrev}
      className="flex cursor-pointer hover:bg-colorYellow items-center justify-center bg-[#E6E6E6] w-[70px] h-[70px] rounded-full"
    >
      <img className="overflow-hidden" src={leftArrow} alt="" />
    </button>
  );
};

export default CarouselLeft;
