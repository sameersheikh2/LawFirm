import React from "react";
import Logo from "jsx:../../assets/logo.png";

const Header = () => {
  return (
    <>
      <header className="h-32 flex justify-center">
        <div className="w-4/5 flex justify-between items-center">
          <div className="flex justify-center space-x-2 items-center">
            <img className="w-[30px] h-[30px]" src={Logo} alt="logo" />
            <h1 className="font-bold text-2xl">IGSTUDIO</h1>
          </div>

          <ul className="flex items-center font-semibold justify-center text-[16px] space-x-9">
            <li>Home</li>
            <li>Attorneys</li>
            <li>Practice Areas</li>
            <li>About Us</li>
          </ul>
          <button
            type="button"
            className="border-white  font-semibold text-[16px] py-2 px-8 border-2"
          >
            Connect Now
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
