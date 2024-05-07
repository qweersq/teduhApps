import React from "react";
import LogoTeduh from "../../assets/images/LogoTeduh.svg";

const LandingPage = () => {
  return (
    <div className="container mx-auto py-12 px-[50px]">
      <img src={LogoTeduh} alt="Logo Teduh" />
      <div className="flex bg-red-500 items-center">
        {/* Menggunakan kelas w-full untuk div */}
        <div className="flex justify-center items-center w-[1000px] h-[500px] ">
          <div className=" font-bold text-6xl text-center">
            test
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
