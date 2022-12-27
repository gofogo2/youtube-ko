import React from "react";
import { Outlet } from "react-router-dom";
import SearchHeader from "./SearchHeader";

const Root = () => {
  return (
    <div className="flex flex-col items-center justify-center" >
      <SearchHeader />
      <Outlet />
    </div>
  );
};

export default Root;
