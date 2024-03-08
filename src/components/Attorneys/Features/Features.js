import Gift from "../../../assets/gift1.png";
import React from "react";
import Card from "../../Card/Card";

const Features = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <h1 className="text-secondary font-semibold mb-3">Why Choose Us?</h1>
        <div>
          <Card type="features" imageSource={Gift} />
        </div>
      </section>
    </>
  );
};

export default Features;
