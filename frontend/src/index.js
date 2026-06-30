import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";

import { AnalysisProvider } from "./context/AnalysisContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AnalysisProvider>
      <App />
    </AnalysisProvider>
  </React.StrictMode>
);