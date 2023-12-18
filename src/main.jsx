/* eslint-disable no-unused-vars */
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Capacitacion from "./routes/Capacitacion";
import PulidaVidrios from "./routes/pulidaVidrios";
import Ppf from "./routes/Ppf";
import Pdr from "./routes/Pdr";
import Polarizado from "./routes/Polarizado";
import Wrapping from "./routes/Wrapping";
import GolpesParabrisas from "./routes/GolpesParabrisas";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/capacitacion", element: <Capacitacion /> },
  { path: "/pulida-vidrios", element: <PulidaVidrios /> },
  { path: "/golpes-parabrisas", element: <GolpesParabrisas /> },
  { path: "/wrapping-car", element: <Wrapping /> },
  { path: "/ppf", element: <Ppf /> },
  { path: "/pdr", element: <Pdr /> },
  { path: "/polarizado", element: <Polarizado /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
