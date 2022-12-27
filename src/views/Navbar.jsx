import React from "react";
import icon_youtube from "../assets/images/icon_youtube.png";
import icon_search from "../assets/images/icon_search.svg";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-start w-full h-12 max-w-5xl px-5 mt-5 border-b-[1px] pb-5 t-5 border-black">
      <div className="flex flex-row items-center justify-center ">
        <img src={icon_youtube} width={30} alt="" />
        <div  >Youtube</div>
      </div>
      <div className="flex flex-row items-center justify-center w-full h-10 x-5 ">
        <input type="text" placeholder="Search"  className="  pl-5 w-2/3 h-full border-red-900 border-y-[1px] border-l-[1px] rounded-l-xl" />
        <img src={icon_search} width={70} alt="" className="h-full border-[1px] border-red-900 rounded-r-xl px-5" />
      </div>
    </div>
  );
};

export default Navbar;
