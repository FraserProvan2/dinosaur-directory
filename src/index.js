import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.scss";

if (process.env.NODE_ENV === "development") {
  console.log(process.env);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
