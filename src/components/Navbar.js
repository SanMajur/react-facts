import React from "react";
import reactLogo from "../images/reactLogo.png";

function Navbar() {
  return (
    <nav className=" bg-[#21222A] h-[90px] w-full  py-[30px] px-[25px]">
      <div className="flex items-center max-w-5xl mx-auto">
        <div className="flex mr-auto cursor-pointer">
        <img
          src={reactLogo}
          className="h-[30px] mr-[7px]"
          alt="React Logo Icon"
        />
        <h3 className=" text-[#61DAFB] font-bold text-[22px] ">
          ReactFacts
        </h3>
        </div>
        <h4 className="text-[#DEEBF8] font-semibold cursor-pointer hover:underline">
          React Course - Project 1
        </h4>
      </div>
    </nav>
  );
}

export default Navbar;
