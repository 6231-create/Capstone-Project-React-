import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/fontawesome.min.css";
import "./styles/global.css";
import { TravelPlansProvider } from "./context/TravelPlansContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TravelPlansProvider>
      <App />
    </TravelPlansProvider>
  </React.StrictMode>
);
