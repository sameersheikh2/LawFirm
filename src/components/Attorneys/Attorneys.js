import React from "react";
import Introduction from "./Inroduction/Introduction";
import Features from "./Features/Features";

const Attorneys = () => {
  return (
    <>
      <div className="h-[100vh] flex flex-col justify-between items-center">
        <Introduction />
        <Features />
      </div>
    </>
  );
};

export default Attorneys;
