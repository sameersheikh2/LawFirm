import React, { useState } from "react";
import MyCard from "../Card/MyCard";
import { clientData } from "../../utils/constant";
import CarouselRight from "./CarouselRight/CarouselRight";
import CarouselLeft from "./CarouselLeft/CarouselLeft";

const Reviews = () => {
  const [isActive, setIsActive] = useState(0);

  const handleNext = () => {
    setIsActive((prevState) =>
      prevState === clientData.length - 1 ? 0 : prevState + 1
    );
  };

  const handlePrev = () => {
    setIsActive((prevState) =>
      prevState === 0 ? clientData.length - 1 : prevState - 1
    );
  };

  return (
    <div className="h-[50em] mt-14 text-white flex justify-center items-center">
      <div className="w-4/5 ">
        <div className="flex mb-40 justify-between">
          <h1 className=" text-secondary w-96 font-semibold text-wrap">
            What says our happy Clients
          </h1>
          <div className="flex space-x-7 items-end">
            <CarouselLeft handlePrev={handlePrev} />
            <CarouselRight handleNext={handleNext} />
          </div>
        </div>
        <div className="flex gap-4">
          {clientData.map((client, index) => (
            <MyCard
              key={client.id}
              active={isActive}
              title={client.title}
              name={client.name}
              description={client.description}
              imageSource={client.imageSource}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
