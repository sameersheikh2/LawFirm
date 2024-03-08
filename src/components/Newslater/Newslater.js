import React from "react";

const Newslater = () => {
  return (
    <div className="flex justify-center h-[50em] items-center">
      <section className="w-4/5 h-[365px] bg-[#474747] bg-opacity-[50%] flex justify-center items-center flex-col">
        <h1 className="text-secondary mb-6 text-white">
          Subscibe Our Newslater
        </h1>
        <div className="flex justify-between  items-center gap-2">
          <input
            className="py-[10px] placeholder:italic bg-[#E4E4E4] px-6 rounded-l-lg"
            type="text"
            name="name"
            id="name"
            placeholder="Name:"
          />
          <input
            className="py-[10px] placeholder:italic bg-[#E4E4E4] px-6 "
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
          <button
            className="bg-colorYellow py-3 px-6 rounded-r-lg font-bold text-sm text-black "
            type="button"
          >
            Send
          </button>
        </div>
      </section>
    </div>
  );
};

export default Newslater;
