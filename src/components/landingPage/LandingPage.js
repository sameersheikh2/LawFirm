import React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";

const LandingPage = () => {
  return (
    <>
      <div className="bg-colorBlack h-[100%] text-white">
        <Header />
        <Hero />
      </div>
    </>
  );
};

export default LandingPage;
