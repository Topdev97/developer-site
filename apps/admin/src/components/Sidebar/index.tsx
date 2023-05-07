import React, {
  EventHandler,
  MouseEventHandler,
  useContext,
  useRef,
} from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import "./style.css";
import { AuthContext } from "../../context/AuthContext";
import { UserContext, userReducerActions } from "../../context/UserContext";
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
    routes: [
      {
        path: "/projects",
        name: "All Projects",
      },

      {
        path: "/projects/create",
        name: "Create Project",
      },
    ],
  },
  {
    path: "/labels",
    name: "Labels",
    routes: [
      {
        path: "/labels",
        name: "All Labels",
      },

      {
        path: "/labels/create",
        name: "Create Label",
      },
    ],
    onlyPublic: false,
    private: true,
  },
];
export const Sidebar = () => {
  const { dispatch } = useContext(UserContext);
  const { setToken } = useContext(AuthContext);
  const menu = useRef<HTMLElement>(null);
  const mobileButton = useRef<HTMLElement>(null);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  function MenuAnimation() {
    return {
      open: () => gsap.to(menu.current, { x: "0", duration: 0.5 }),
      close: () => gsap.to(menu.current, { x: "-100%", duration: 0.5 }),
    };
  }

  const handleLogoutClick = () => {
    dispatch({ type: userReducerActions.LOGOUT });
    setToken(null);
  };

  const menuAnimation = MenuAnimation();
  const handleMenuClick = () => {
    mobileButton.current?.classList.toggle("isOpen");
    console.log(mobileButton.current);

    menu.current?.querySelectorAll(".dropdown-content").forEach((element) => {
      element.classList.add("hidden");
    });
    if (mobileButton.current?.classList.contains("isOpen")) {
      setSidebarOpen(true);
      const line1 = mobileButton.current?.querySelector(".line-1");
      const line2 = mobileButton.current?.querySelector(".line-2");
      const line3 = mobileButton.current?.querySelector(".line-3");
      gsap.to(line1, { rotate: 45, y: 10 });
      gsap.to(line2, { rotate: -45 });
      gsap.to(line3, { rotate: 45, y: -10 });
      menuAnimation.open();
    } else {
      setSidebarOpen(false);
      const line1 = mobileButton.current?.querySelector(".line-1");
      const line2 = mobileButton.current?.querySelector(".line-2");
      const line3 = mobileButton.current?.querySelector(".line-3");
      gsap.to(line1 as HTMLElement, { rotate: 0, y: -1 });
      gsap.to(line2 as HTMLElement, { rotate: 0 });
      gsap.to(line3 as HTMLElement, { rotate: 0, y: 1 });
      menuAnimation.close();
    }
  };

  const handleDropdown: MouseEventHandler<HTMLElement> = (event) => {
    const target = event.target as any;

    document.querySelectorAll(".dropdown-content").forEach((element) => {
      if (element.id == `${target.id}`.replace("btn", "content")) {
        element.classList.toggle("hidden");
      } else {
        element.classList.add("hidden");
      }
    });
  };
  return (
    <aside role="navigation" className="navbar--mobile">
      <ul className="navbar--mobile__menu" ref={menu as any}>
        {routes.map((route, index) => {
          if (route.routes) {
            return (
              <li
                key={route.name}
                className="dropdown w-full cursor-pointer  relative inline-block"
                style={{ zIndex: 1 }}
              >
                <button
                  id={`dropdown-btn-${index}`}
                  onClick={handleDropdown}
                  className="dropdown-btn w-full text-start hover:bg-slate-200 py-2 pl-6 pr-2 flex justify-between"
                >
                  <h6>{route.name}</h6>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 96 960 960"
                    width="24"
                  >
                    <path d="m375 816-43-43 198-198-198-198 43-43 241 241-241 241Z" />
                  </svg>
                </button>
                {
                  <div
                    id={`dropdown-content-${index}`}
                    className="dropdown-content hidden absolute w-40 m-4 space-y-2 px-2 py-2"
                    style={{
                      zIndex: 3,
                      background: "white",
                      right: -175,
                      top: -16,
                      boxShadow: "0px 0px 4px 1px #00000050",
                    }}
                  >
                    {route.routes?.map((route) => {
                      return (
                        <Link
                          key={route.path}
                          onClick={handleMenuClick}
                          className="nav-link flex flex-col hover:bg-slate-200 px-1"
                          to={route.path}
                        >
                          <h6>{route.name}</h6>
                        </Link>
                      );
                    })}
                  </div>
                }
              </li>
            );
          } else {
            return (
              <li className="dropdown w-full cursor-pointer  relative inline-block">
                <Link
                  className="dropdown-btn w-full text-start hover:bg-slate-200 py-2 pl-6 pr-2 flex justify-between"
                  to={route.path}
                  onClick={handleMenuClick}
                >
                  {route.name}
                </Link>
              </li>
            );
          }
        })}
        <li className="absolute bottom-5 left-6">
          <button onClick={handleLogoutClick} className="">
            <div className="flex items-center gap-3">

            <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 96 960 960" width="36px"><path d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h291v60H180v600h291v60H180Zm486-185-43-43 102-102H375v-60h348L621 444l43-43 176 176-174 174Z"/></svg>
            <h6>Log out</h6>
            </div>
          </button>
        </li>
      </ul>
      <button
        type="button"
        className="navbar--mobile__button"
        ref={mobileButton as any}
        onClick={handleMenuClick}
      >
        <span className="line line-1" />
        <span className="line line-2" />
        <span className="line line-3" />
      </button>
      {sidebarOpen && <div className="navbar--mobile__background"></div>}
    </aside>
  );
};
