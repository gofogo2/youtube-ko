import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Root = () => {
  return (
    <div className="flex flex-col items-center justify-center" >
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
