import * as React from "react";
// import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));
// ReactDOM.createRoot(document.getElementById("root")).render(

root.render(
  // <React.StrictMode>
  <BrowserRouter future={{ v7_startTransition: true }}>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);
