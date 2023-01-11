import { Link } from "react-router-dom";

export const Navbar = () => {
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
        </ul>
      </div>
    </nav>
  );
};
