import React from "react";
import heroImage from "../../assets/heroImg.png";

const Hero = () => {
  return (
    <section className="flex justify-center items-center mt-1">
      <div className="w-full flex gap-6 justify-center flex-wrap items-center">
        <div className="flex flex-column flex-wrap w-[50%]">
          <h1 className="font-medium text-[66px]">You don’t have to </h1>
          <h1 className="font-bold text-[66px]">Fight them Alone.</h1>
          <p className="w-[80%] font-medium my-6 text-lg opacity-[30%]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            eget, hac massa gravida arcu interdum proin curae.
          </p>
          <div className="bg-colorGray flex justify-between w-3/5 p-1 rounded-full">
            <input
              className="bg-transparent text-center w-[50%]"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
            />
            <button
              className="bg-yellow-300 font-semibold text-base text-black bg-opacity-[90%] rounded-full py-3 px-6"
              type="button"
            >
              Let's talk
            </button>
          </div>
        </div>
        <div>
          <img
            className="object-cover h-[420px] overflow-hidden"
            src={heroImage}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
