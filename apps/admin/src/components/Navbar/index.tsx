import React, { MouseEventHandler, useContext } from "react";
import "./style.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const [checked, setChecked] = React.useState(false);
  
  const toggleMenu = () => {
    setChecked(!checked);
  };
  const handleExternalNavigate: MouseEventHandler<HTMLAnchorElement> = (
    event
  ) => {
    event.preventDefault();
    setChecked(false);
    const target = event.target as any;
    debugger;
    setTimeout(() => {
      window.location.href = target.href;
    }, 600);
  };
  return (
    <nav className="navbar--desktop">
      {/* Credits https://codepen.io/yuhomyan/pen/ExKvNVa */}
      <input
        type="checkbox"
        id="active"
        defaultChecked={checked}
        onInput={toggleMenu}
      />
      <label htmlFor="active" className="menu-btn">
        <span />
      </label>
      <label htmlFor="active" className="close" />
      <div className="wrapper">
        <ul>
          <li>
            <a onClick={handleExternalNavigate} href="/">
              About
            </a>
          </li>
          <li>
            <a onClick={handleExternalNavigate} href="/projects">
              Projects
            </a>
          </li>

          <li>
            <a onClick={handleExternalNavigate} href="/contact">
              Contact
            </a>
          </li>
          <li>
            <Link to="/">Admin</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
