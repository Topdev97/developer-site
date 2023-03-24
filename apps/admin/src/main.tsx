import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppContextProvider } from "./context/AppContext";
import { BrowserRouter } from "react-router-dom";
import { UserContext } from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserContext>
      <BrowserRouter basename="/admin">
        <App />
      </BrowserRouter>
    </UserContext>
  </React.StrictMode>
);
