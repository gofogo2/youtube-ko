import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Root from "./Root";
import Videos from "./Videos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>Error</div>,
    children: [
      { index: true, element: <Home /> },
      { path: "/videos", element: <Videos /> },
    ],
  },
]);

const Routers = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default Routers;
