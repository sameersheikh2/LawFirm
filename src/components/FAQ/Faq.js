import React from "react";
import Questions from "./Questions";

const Faq = () => {
  return (
    <div className=" flex justify-center items-center">
      <div className="w-4/5 h-[630px] flex justify-between">
        <div className="flex flex-col justify-start">
          <h1>FAQ</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>
        </div>
        <Questions />
      </div>
    </div>
  );
};

export default Faq;
