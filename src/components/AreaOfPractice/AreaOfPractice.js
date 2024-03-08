import React from "react";
import BusinessLaw from "../../assets/gridImage/BusinessLaw.png";
import PartnershipLaw from "../../assets/gridImage/PartnershipLaw.png";
import RealEstateLaw from "../../assets/gridImage/RealEstateLaw.png";
import BusinessLaw2 from "../../assets/gridImage/BusinessLaw2.png";
import LandlordDispute from "../../assets/gridImage/LandlordDispute.png";
import ElderAbuse from "../../assets/gridImage/ElderAbuse.png";

const AreaOfPractice = () => {
  return (
    <div className="flex mt-6 justify-center items-center">
      <div className="w-4/5  flex flex-col items-center justify-center mx-auto">
        <h1 className="text-secondary my-16 font-semibold text-white">
          Area of Practices
        </h1>
        <div className="grid font-semibold items-center justify-center grid-cols-3 gap-4">
          <div className="col-span-2 relative">
            <img src={BusinessLaw} alt="BusinessLaw" />
            <span className="absolute text-2xl text-[#FFFBF2] bottom-4 left-0 right-0 text-center py-3">
              BUSINESS LAW
            </span>
          </div>
          <div className="relative">
            <img src={PartnershipLaw} alt="PartnershipLaw" />
            <span className="absolute text-2xl text-[#FFFBF2] bottom-4 left-0 right-0 text-center py-3">
              Partnership LAW
            </span>
          </div>
          <div className="relative">
            <img src={RealEstateLaw} alt="RealEstateLaw" />
            <span className="absolute text-2xl text-[#FFFBF2] bottom-4 left-0 right-0 text-center py-3">
              REALESTATE LAW
            </span>
          </div>
          <div className="col-span-2 relative">
            <img src={BusinessLaw2} alt="BusinessLaw2" />
            <span className="absolute text-2xl text-[#FFFBF2] bottom-4 left-0 right-0 text-center py-3">
              BUSINESS LAW
            </span>
          </div>
          <div className="col-span-2 relative">
            <img src={LandlordDispute} alt="LandlordDispute" />
            <span className="absolute text-2xl text-[#FFFBF2] bottom-4 left-0 right-0 text-center py-3">
              LANDLORD DISPUTE
            </span>
          </div>
          <div className="relative">
            <img src={ElderAbuse} alt="ElderAbuse" />
            <span className="absolute text-2xl text-[#FFFBF2] bottom-4 left-0 right-0 text-center py-3">
              ELDER ABUSE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaOfPractice;
