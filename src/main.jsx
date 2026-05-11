import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LigaProvider } from "./contexts/LigaContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LigaProvider>
      <App />
    </LigaProvider>
  </React.StrictMode>
);