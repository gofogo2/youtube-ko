import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex flex-row max-w-5xl">
      <div className="flex flex-row bg-red-500 justify-center items-center ">
        <div>ㅁ</div>
        <div>Youtube</div>
      </div>
      <div className="flex flex-row w-full bg-red-50 justify-center items-center h-10 ">
        <input type="text" className="bg-green-500 w-2/3" />
        <div>ㅁ</div>
      </div>
    </div>
  );
};

export default Navbar;
