import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
import Main from "./components/Layout/Main";
import NotFound from "./components/NotFound/NotFound";
import Statistics from "./components/Statistics/Statistics";
import ViewDetails from "./components/ViewDetails/ViewDetails";
import "./index.css";
import appliedJobsLoader from "./loaders/appliedJobsLoader";
import jobDetailsLoader from "./loaders/jobDetailsLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "job/:id",
        element: <ViewDetails />,
        loader: ({ params }) => jobDetailsLoader(params.id),
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "applied-jobs",
        element: <AppliedJobs />,
        loader: appliedJobsLoader,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
