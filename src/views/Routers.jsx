import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import Root from "./Root";
import VideoDetail from "./VideoDetail";
import Videos from "./Videos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound/>,
    children: [
      { index: true, element: <Videos /> },
      { path: "videos", element: <Videos /> },
      { path: "videos/:keyword", element: <Videos /> },
      { path: "videos/watch/:videoId", element: <VideoDetail /> },
    ],
  },
]);

const Routers = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default Routers;
