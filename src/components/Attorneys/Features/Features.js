import Gift from "../../../assets/gift1.png";
import React from "react";
import MyCard from "../../Card/MyCard";

const Features = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <h1 className="text-secondary text-white font-semibold mb-3">
          Why Choose Us?
        </h1>
        <div className="flex justify-center mt-14 items-center gap-4">
          <MyCard
            type="features"
            imageSource={Gift}
            title="98% Success Rate"
            description="Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer"
          />
          <MyCard
            type="features"
            imageSource={Gift}
            title="100% Success Rate"
            description="Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer"
          />
          <MyCard
            type="features"
            imageSource={Gift}
            title="100% Success Rate"
            description="Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer"
          />
        </div>
      </section>
    </>
  );
};

export default Features;
