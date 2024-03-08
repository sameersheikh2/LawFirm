import React from "react";
import Logo from "jsx:../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="h-[367px] flex justify-center items-center flex-col bg-colorBlack space-y-20 text-white">
      <div className="w-4/5 flex justify-between items-center">
        <div className="flex justify-center space-x-2 items-center">
          <img className="w-[30px] h-[30px]" src={Logo} alt="logo" />
          <h1 className="font-bold text-2xl">IGSTUDIO</h1>
        </div>

        <ul className="flex items-center font-semibold justify-center text-[16px] space-x-11">
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
      <div className="flex text-[14px] font-normal gap-6 justify-between">
        <p>© 2020 Acme. All right reserved</p>
        <p>Privacy Policy</p>
        <p>Terms of Services</p>
      </div>
    </footer>
  );
};

export default Footer;
