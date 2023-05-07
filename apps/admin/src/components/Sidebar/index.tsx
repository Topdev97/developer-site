import React, { useContext, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import './style.css'
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
    routes:[
      {
        path:'/projects',
        name:"All Projects"
      },
      
      {
        path:'/projects/create',
        name:"Create Project"
      }
    ],
  },
  {
    path: "/labels",
    name: "Labels",
    routes:[
      {
        path:'/labels',
        name:"All Labels"
      },
      
      {
        path:'/labels/create',
        name:"Create Label"
      }
    ],
    onlyPublic: false,
    private: true,
  },
];
export const Sidebar = () => {

  const { dispatch } = useContext(UserContext);
  const { setToken } = useContext(AuthContext);  
  const menu = useRef<HTMLElement>(null)
  const mobileButton = useRef<HTMLElement>(null)
  const [sidebarOpen, setSidebarOpen] = React.useState(false)
  function MenuAnimation() {
    return {
      open: ()=> gsap.to(menu.current, { x: "0", duration: 0.5 }),
      close:()=> gsap.to(menu.current, { x: "-100%", duration: 0.5 }),
    };
  } 

  const handleLogoutClick = () => {
    dispatch({ type: userReducerActions.LOGOUT });
    setToken(null);
  };
  const menuAnimation = MenuAnimation()
  const handleMenuClick = () => {
    mobileButton.current?.classList.toggle("isOpen");
    console.log(mobileButton.current);
    
    if (mobileButton.current?.classList.contains("isOpen")) {
      setSidebarOpen(true)
      const line1 = mobileButton.current?.querySelector(".line-1");
      const line2 = mobileButton.current?.querySelector(".line-2");
      const line3 = mobileButton.current?.querySelector(".line-3");
      gsap.to(line1, { rotate: 45, y: 10 });
      gsap.to(line2, { rotate: -45 });
      gsap.to(line3, { rotate: 45, y: -10 });
      menuAnimation.open();
    } else {
      setSidebarOpen(false)
      const line1 = mobileButton.current?.querySelector(".line-1");
      const line2 = mobileButton.current?.querySelector(".line-2");
      const line3 = mobileButton.current?.querySelector(".line-3");
      gsap.to(line1 as HTMLElement, { rotate: 0, y: -1 });
      gsap.to(line2 as HTMLElement, { rotate: 0 });
      gsap.to(line3 as HTMLElement, { rotate: 0, y: 1 });
      menuAnimation.close();
    }

  }

  return (
    <aside
      role="navigation"
      className="navbar--mobile"
    >
      <ul className="navbar--mobile__menu"  ref={menu as any}>
        {routes.map((route)=>{
          return(
            <li className="flex flex-col">
              <Link  onClick={handleMenuClick} className="nav-link text-tertiaryDark" to={route.path}>{route.name}</Link>
              {route.routes && (
                route.routes.map((route)=>{
                    return (
                      <Link  onClick={handleMenuClick} className="nav-link text-tertiaryDark flex flex-col" to={route.path}>{route.name}</Link>

                    )                  
                })
              )}
            </li>
          )
        })}
        <li>
          <button onClick={handleLogoutClick} className="btn--tertiary">
            Logout
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
       {sidebarOpen && (<div className="navbar--mobile__background"></div>)}
    </aside>
  );
};