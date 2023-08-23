import React, { useRef } from "react";
import { gsap } from "gsap";

export const Mobilebar = () => {
  
  const menu = useRef<HTMLElement>(null)
  const mobileButton = useRef<HTMLElement>(null)
  function MenuAnimation() {
    return {
      open: ()=> gsap.to(menu.current, { x: "0", duration: 0.5 }),
      close:()=> gsap.to(menu.current, { x: "100%", duration: 0.5 }),
    };
  } 
  const menuAnimation = MenuAnimation()
  const handleMenuClick = () => {
    mobileButton.current?.classList.toggle("isOpen");
    console.log(mobileButton.current);
    
    if (mobileButton.current?.classList.contains("isOpen")) {
      const line1 = mobileButton.current?.querySelector(".line-1");
      const line2 = mobileButton.current?.querySelector(".line-2");
      const line3 = mobileButton.current?.querySelector(".line-3");
      gsap.to(line1, { rotate: 45, y: 10 });
      gsap.to(line2, { rotate: -45 });
      gsap.to(line3, { rotate: 45, y: -10 });
      menuAnimation.open();
    } else {
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
    <nav
      role="navigation"
      className="navbar--mobile"
      id="navbar-container--mobile"
    >
      <ul className="navbar--mobile__menu" id="navbar--mobile__menu" ref={menu as any}>
        <li>
          <a href="https://davc93.dev" className="nav-link">
            About me
          </a>
        </li>
        <li>
          <a href="/projects" className="nav-link--external">
            Projects
          </a>
        </li>
        <li>
          <a href="https://davc93.dev" className="nav-link">
            Contact
          </a>
        </li>

        <li>
          <a href="https://console.davc93.dev" className="nav-link">
            Admin
          </a>
        </li>
      </ul>
      <button
        type="button"
        className="navbar--mobile__button"
        id="navbar--mobile__button"
        ref={mobileButton as any}
        onClick={handleMenuClick}
      >
        <span className="line line-1" />
        <span className="line line-2" />
        <span className="line line-3" />
      </button>
    </nav>
  );
};
