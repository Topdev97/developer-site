import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

export const Navbar = () => {
  const [state,dispatch]:any = useContext(AppContext)
  const routes = [
    {
      path: "/profile",
      name: "Profile",
    },
    {
      path: "/",
      name: "Login",
    },
  ];
  const logout = () => {
    try {
      dispatch({type:"LOGOUT"})
      console.log('Logout exitoso')
    } catch(error){
      console.error(error)
    }
  }

  return (
    <nav>
      <div className="menu">
        <ul>
          {routes.map(({ name, path }) => {
            return (
              <li key={name}>
                <Link  to={path}>
                  {name}
                </Link>
              </li>
            );
          })}
          <li>
            <button type="button" onClick={logout}>Logout</button>
          </li>
        </ul>
      </div>
      <div className="profile">
        {state.user?.email}
      </div>
    </nav>
  );
};
