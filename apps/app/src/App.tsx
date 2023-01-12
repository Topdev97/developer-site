import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Profile } from "./routes/Profile";
import { Login } from "./routes/Login";
import { Layout } from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route element={<Login />} path="/" />
          <Route element={<Profile />} path="/profile" />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
