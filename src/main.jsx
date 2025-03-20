import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import IsDarkProvider from "./Contexts/IsDarkProvider.jsx";
import IsLoginOpenProvider from "./Contexts/IsLoginOpen.jsx";
import IsAuthProvider from "./Contexts/IsAuth.jsx";
import AuthDataProvider from "./Contexts/AuthData.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <IsDarkProvider>
        <IsLoginOpenProvider>
          <AuthDataProvider>
            <IsAuthProvider>
              <App />
            </IsAuthProvider>
          </AuthDataProvider>
        </IsLoginOpenProvider>
      </IsDarkProvider>
    </BrowserRouter>
  </StrictMode>
);
