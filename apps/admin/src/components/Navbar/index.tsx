import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

export const Navbar = () => {
  const [state, dispatch]: any = useContext(AppContext);
  const routes = [
    {
      path: "/profile",
      name: "Profile",
    },
    {
      path: "/",
      name: "Login",
    },
    {
      path: "https://davc93.dev",
      name: "About me",
      external: true,
    },
  ];
  const logout = () => {
    try {
      dispatch({ type: "LOGOUT" });
      console.log("Logout exitoso");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav>
      <div className="menu">
        <ul>
          {routes.map(({ name, path, external }) => {
            if (external) {
              return (
                <li key={name}>
                  <a href={path}>{name}</a>
                </li>
              );
            } else {
              return (
                <li key={name}>
                  <Link to={path}>{name}</Link>
                </li>
              );
            }
          })}
          <li>
            <button type="button" onClick={logout}>
              Logout
            </button>
          </li>
        </ul>
      </div>
      <div className="profile">{state.user?.email}</div>
    </nav>
  );
};
