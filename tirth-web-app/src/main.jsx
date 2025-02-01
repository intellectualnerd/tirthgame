import React from "react";
//routing...
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Link,
} from "react-router-dom";
//css
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
//pages
import AppLayout from "./AppLayout/AppLayout";
import Error_404 from "./Pages/Error/Error_404/Error_404";
import Error_500 from "./Pages/Error/Error_500/Error_500";
import Home from "./Pages/App/Home/Home";
import Games from "./Pages/App/Games/Games";
import AboutUs from "./Pages/App/AboutUs/AboutUs";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error_500 />,

    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/games",
        element: <Games />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "*",
        element: <Error_404 />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
