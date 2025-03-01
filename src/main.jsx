import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import IsDarkProvider from "./Contexts/IsDarkProvider.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <IsDarkProvider>
        <App />
      </IsDarkProvider>
    </BrowserRouter>
  </StrictMode>
);
