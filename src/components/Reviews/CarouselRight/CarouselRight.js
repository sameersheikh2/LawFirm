import React from "react";
import rightArrow from "../../../assets/rightArrow.png";

const CarouselRight = ({ handleNext }) => {
  return (
    <button
      type="button"
      onClick={handleNext}
      className="flex items-center cursor-pointer hover:bg-colorYellow justify-center bg-[#E6E6E6]  w-[70px] h-[70px] rounded-full"
    >
      <img className="overflow-hidden" src={rightArrow} alt="" />
    </button>
  );
};

export default CarouselRight;
