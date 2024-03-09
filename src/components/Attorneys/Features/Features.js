import Gift from "../../../assets/gift1.png";
import React from "react";
import MyCard from "../../Card/MyCard";
import { features } from "../../../utils/constant";

const Features = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <h1 className="text-secondary text-white font-semibold mb-3">
          Why Choose Us?
        </h1>
        <div className="flex justify-center mt-14 items-center gap-4">
          {features.map((item) => (
            <MyCard
              key={item.id}
              type={item.type}
              imageSource={Gift}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Features;
