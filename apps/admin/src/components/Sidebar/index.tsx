import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { userReducerActions } from "../../context/UserContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { AuthContext } from "../../context/AuthContext";

const routes = [
  {
    path: "/profile",
    name: "Profile",
    onlyPublic: false,
    private: true,
  },
  {
    path: "/projects",
    name: "Projects",
    onlyPublic: false,
    private: true,
  },
  {
    path: "/labels",
    name: "Labels",
    onlyPublic: false,
    private: true,
  },
];

export const Sidebar = () => {
  const { dispatch } = useContext(UserContext);
  const { setToken } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useLocalStorage("darkmode");
  const handleLogoutClick = () => {
    dispatch({ type: userReducerActions.LOGOUT });
    setToken(null);
  };
  const handleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <aside>
      <ul>
        {routes.map((route) => {
          return (
            <li key={route.name}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          );
        })}
        <li>
          <button onClick={handleLogoutClick} className="btn--secondary">
            Logout
          </button>
          <button onClick={handleDarkMode}>Dark Mode</button>
        </li>
      </ul>
    </aside>
  );
};
