import React from "react";
import './style.css'
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className="navbar--desktop">
      {/* Credits https://codepen.io/yuhomyan/pen/ExKvNVa */}
      <input type="checkbox" id="active" />
      <label htmlFor="active" className="menu-btn">
        <span />
      </label>
      <label htmlFor="active" className="close" />
      <div className="wrapper">
        <ul>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>

          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
