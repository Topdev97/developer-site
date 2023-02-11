import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Profile } from "./routes/Profile";
import { Login } from "./routes/Login";
import { Layout } from "./components/Layout";
import { AppContext } from "./context/AppContext";

function App() {
  const [state, dispatch] = useContext(AppContext);

  return (
    <Layout>
      <Routes>
        <Route element={<Profile />} path="/profile" /> :
        <Route element={<Login />} path="/" />
      </Routes>
    </Layout>
  );
}

export default App;
