import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppContextProvider } from "./context/AppContext";
import { BrowserRouter } from "react-router-dom";
BrowserRouter;
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppContextProvider>
      <BrowserRouter basename="/admin">
        <App />
      </BrowserRouter>
    </AppContextProvider>
  </React.StrictMode>
);
