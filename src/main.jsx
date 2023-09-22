import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Jobdetails from "./Pages/Jobdetails";
import AppliedJob from "./Pages/AppliedJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        loader: () => fetch("../data/jobs.json"),
        element: <Home />,
      },
      {
        path: "/appliedJob",
        loader: () => fetch("../data/jobs.json"),
        element: <AppliedJob />,
      },
      {
        path: "/job/:jobId",
        loader: () => fetch("../data/jobs.json"),
        element: <Jobdetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
